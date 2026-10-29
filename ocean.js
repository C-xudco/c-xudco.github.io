"use strict";
(() => {
  const root = document.documentElement;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  let paused = reduced.matches;
  const motionButton = document.querySelector('.motion-toggle');
  const syncMotion = () => {
    document.body.classList.toggle('paused', paused);
    motionButton.setAttribute('aria-pressed', String(paused));
    motionButton.setAttribute('aria-label', paused ? '播放场景动画' : '暂停场景动画');
    motionButton.querySelector('.pause-icon').textContent = paused ? '▷' : 'Ⅱ';
    motionButton.querySelector('.motion-label').textContent = paused ? '让海流动' : '静下来';
  };
  syncMotion();
  motionButton.addEventListener('click', () => { paused = !paused; syncMotion(); });
  reduced.addEventListener('change', () => { paused = reduced.matches; syncMotion(); });
  const dialog = document.querySelector('#detail-dialog');
  const stack = [];
  let lastTrigger = null;
  function renderDetail(key) {
    const detail = window.PORTFOLIO_DETAILS?.[key];
    if (!detail) return;
    document.querySelector('#detail-label').textContent = detail.label || 'CHANG MING';
    document.querySelector('#detail-eyebrow').textContent = detail.eyebrow || detail.label || 'EXPLORE';
    document.querySelector('#detail-title').textContent = detail.title;
    document.querySelector('#detail-intro').textContent = detail.intro;
    document.querySelector('#detail-content').innerHTML = detail.html;
    document.querySelector('#detail-back').hidden = stack.length < 2;
    dialog.scrollTop = 0;
  }
  document.addEventListener('click', event => {
    const trigger = event.target.closest('[data-detail]');
    if (!trigger || !window.PORTFOLIO_DETAILS?.[trigger.dataset.detail]) return;
    if (!dialog.open) {
      lastTrigger = trigger; stack.length = 0;
      const rect = trigger.getBoundingClientRect();
      dialog.style.setProperty('--origin-x', `${Math.round((rect.left + rect.width / 2) / innerWidth * 100)}%`);
    }
    stack.push(trigger.dataset.detail);
    renderDetail(trigger.dataset.detail);
    if (!dialog.open) { dialog.showModal(); document.body.style.overflow = 'hidden'; }
    else document.querySelector('.detail-close').focus({preventScroll:true});
  });
  document.querySelector('#detail-back').addEventListener('click', () => { stack.pop(); renderDetail(stack[stack.length - 1]); });
  document.querySelectorAll('.detail-close,.detail-done').forEach(button => button.addEventListener('click', () => dialog.close()));
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => { document.body.style.overflow = ''; lastTrigger?.focus({preventScroll:true}); });
  if (!reduced.matches && 'IntersectionObserver' in window) {
    root.classList.add('js-motion');
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    }), { threshold: .08, rootMargin: '0px 0px -20px 0px' });
    document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
  }
  let scroll = 0, progress = 0;
  const updateScroll = () => {
    scroll = window.scrollY / innerHeight;
    progress = window.scrollY / Math.max(1, document.documentElement.scrollHeight - innerHeight);
    root.style.setProperty('--dive', Math.min(scroll, 1)); root.style.setProperty('--progress', progress);
    document.body.classList.toggle('submerged', scroll > .48);
    document.querySelector('#depth-label').textContent = scroll < .55 ? '海面' : progress < .34 ? '浅海' : progress < .6 ? '珊瑚带' : progress < .84 ? '海底花园' : '下一段旅程';
  };
  addEventListener('scroll', updateScroll, {passive:true}); addEventListener('resize', updateScroll); updateScroll();
  const canvas = document.querySelector('#ocean-scene');
  const gl = canvas.getContext('webgl', {alpha:false,antialias:false,powerPreference:'low-power'});
  if (!gl) { document.body.classList.add('no-webgl'); return; }
  const vertex = `attribute vec2 a_position;void main(){gl_Position=vec4(a_position,0.,1.);}`;
  const fragment = `
  precision highp float;
  uniform vec2 u_resolution;
  uniform float u_time,u_scroll,u_progress;
  float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
  float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);}
  float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<4;i++){v+=a*noise(p);p=mat2(1.6,-1.2,1.2,1.6)*p;a*=.48;}return v;}
  float waves(vec2 p){float t=u_time*.45;float h=sin(p.x*.57+p.y*.37+t)*.35;h+=sin(p.x*.73-p.y*.68+t*.87)*.22;h+=sin(p.y*1.45+p.x*.17-t*.63)*.12;h+=fbm(p*2.1+t*.13)*.36;return h;}
  vec3 sky(vec3 r){float y=max(r.y,0.);vec3 c=mix(vec3(.78,.89,.83),vec3(.48,.74,.82),pow(y,.55));vec3 sun=normalize(vec3(.30*(u_resolution.x/u_resolution.y),.30,-1.5));float s=max(dot(r,sun),0.);c+=vec3(1.,.70,.32)*pow(s,20.)*.08;c+=vec3(1.,.85,.52)*pow(s,220.)*.12;c+=vec3(1.,.94,.76)*pow(s,9000.)*.9;float haze=fbm(r.xz*2.8/max(.2,r.y+.15)+vec2(u_time*.006,0.));c+=smoothstep(.5,.75,haze)*.06;return c;}
  void main(){
    vec2 uv=gl_FragCoord.xy/u_resolution;
    float aspect=u_resolution.x/u_resolution.y;
    float dive=smoothstep(.15,1.12,u_scroll);
    float horizon=.43+dive*.85;
    vec3 ray=normalize(vec3((uv.x-.5)*aspect,(uv.y-horizon)*1.15,-1.5));
    vec3 color=vec3(0.);
    if(dive<.94){color=sky(ray);
    if(ray.y<0.){
      float dist=min(3000.,4./(-ray.y));
      vec2 p=ray.xz*dist;
      float e=.11,h=waves(p);
      vec3 normal=normalize(vec3((h-waves(p+vec2(e,0.)))/e*.32,1.,(h-waves(p+vec2(0.,e)))/e*.32));
      vec3 reflected=reflect(ray,normal);
      float fresnel=pow(1.-max(dot(-ray,normal),0.),4.);
      vec3 water=mix(vec3(.06,.38,.43),vec3(.14,.53,.55),smoothstep(4.,55.,dist));
      color=mix(water,sky(reflected),.28+fresnel*.58);
      vec3 sun=normalize(vec3(.30*(u_resolution.x/u_resolution.y),.30,-1.5));
      float spec=pow(max(dot(reflected,sun),0.),120.);
      color+=vec3(.99,.83,.52)*spec*.95;
      float shimmer=pow(max(dot(reflected,sun),0.),22.)*smoothstep(.54,.76,fbm(p*2.8))*exp(-dist*.004);
      color+=vec3(.8,.86,.63)*shimmer*.24;
      color=mix(color,vec3(.64,.81,.79),1.-exp(-dist*.003));
      float crest=smoothstep(.54,.78,fbm(p*.9+u_time*.04));
      color+=vec3(.2,.45,.42)*crest*.12;
    }
    }
    if(dive<=.35){gl_FragColor=vec4(color*(1.-.17*length((uv-.5)*vec2(.8,1.))),1.);return;}
    vec3 deep=mix(vec3(.055,.35,.43),vec3(.025,.18,.24),u_progress*.75);
    vec3 under=mix(deep*.52,deep*1.4,pow(uv.y,.55));
    float shaft=0.;
    for(int i=0;i<5;i++){float fi=float(i);float x=.65+sin(fi*6.3)*.23;float line=x+(1.-uv.y)*(.35+fi*.08);float w=.026+fi*.006;shaft+=exp(-pow((uv.x-line+sin(u_time*.12+fi)*.02)/w,2.))*.09;}
    under+=vec3(.38,.65,.59)*shaft*pow(uv.y,.7);
    under+=vec3(.13,.29,.24)*pow(max(0.,1.-distance(uv,vec2(.78,1.1))*.8),5.);
    vec2 caustic=vec2(uv.x*aspect,uv.y)*6.;
    float c=fbm(caustic+u_time*.025)+fbm(caustic*1.2-u_time*.035);
    under+=vec3(.17,.39,.3)*pow(max(0.,1.-abs(c-.95)*4.),10.)*.04;
    for(int i=0;i<15;i++){float f=float(i);vec2 pt=vec2(hash(vec2(f,2.)),fract(hash(vec2(f,7.))+u_time*(.002+hash(vec2(f,4.))*.002)));float d=length((uv-pt)*vec2(aspect,1.));under+=vec3(.55,.73,.6)*exp(-d*d*190000.)*.24;}
    color=mix(color,under,smoothstep(.35,.94,dive));
    color*=1.-.17*length((uv-.5)*vec2(.8,1.));
    gl_FragColor=vec4(color,1.);
  }`;
  function compile(type, source) {
    const shader = gl.createShader(type); gl.shaderSource(shader, source); gl.compileShader(shader);
    if (!gl.getShaderParameter(shader,gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(shader));
    return shader;
  }
  let program;
  try {
    program=gl.createProgram(); gl.attachShader(program,compile(gl.VERTEX_SHADER,vertex)); gl.attachShader(program,compile(gl.FRAGMENT_SHADER,fragment)); gl.linkProgram(program);
    if (!gl.getProgramParameter(program,gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(program));
  } catch(error) { console.error('Ocean scene unavailable:',error); document.body.classList.add('no-webgl'); return; }
  gl.useProgram(program);
  const buffer=gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER,buffer); gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),gl.STATIC_DRAW);
  const location=gl.getAttribLocation(program,'a_position'); gl.enableVertexAttribArray(location); gl.vertexAttribPointer(location,2,gl.FLOAT,false,0,0);
  const resolution=gl.getUniformLocation(program,'u_resolution'),time=gl.getUniformLocation(program,'u_time'),dive=gl.getUniformLocation(program,'u_scroll'),depth=gl.getUniformLocation(program,'u_progress');
  let elapsed=0,last=0,lastFrame=0,renderedScroll=-1;
  function resize(){const scale=Math.min(devicePixelRatio||1,innerWidth<760?1.2:1.25);canvas.width=Math.round(innerWidth*scale);canvas.height=Math.round(innerHeight*scale);gl.viewport(0,0,canvas.width,canvas.height);renderedScroll=-1;}
  addEventListener('resize',resize);resize();
  const tick=stamp=>{
    requestAnimationFrame(tick);
    if(document.hidden){last=stamp;return;}
    if(stamp-lastFrame<33)return;
    const delta=last?Math.min((stamp-last)/1000,.1):0;last=stamp;
    if(!paused&&!dialog.open)elapsed+=delta;
    if((paused||dialog.open)&&renderedScroll===scroll)return;
    lastFrame=stamp;renderedScroll=scroll;
    gl.uniform2f(resolution,canvas.width,canvas.height);gl.uniform1f(time,elapsed);gl.uniform1f(dive,scroll);gl.uniform1f(depth,progress);gl.drawArrays(gl.TRIANGLES,0,6);
  };
  canvas.addEventListener('webglcontextlost',event=>{event.preventDefault();document.body.classList.add('no-webgl');});
  requestAnimationFrame(tick);
})();
