"use strict";

// Shared editorial content for the ocean concept's accessible detail dialog.
window.PORTFOLIO_DETAILS = {
  work: {
    label: "SELECTED WORK · 作品集",
    title: "沿着好奇心，找到作品。",
    intro: "从桌面上的一方水塘，到可以反复使用的 AI 工作流。每个作品，都始于一个具体的使用场景。",
    html: `
      <div class="detail-grid">
        <article class="detail-card">
          <p class="detail-tags">01 / 桌面应用 · React × Electron</p>
          <h3>水塘时钟</h3>
          <p>把现实时间、天气与轻量钓鱼放进桌面挂件。无边框、可拖动、可置顶，进度自动保存在本机。</p>
          <div class="detail-actions"><button type="button" data-detail="clock">走进这方水塘 <span aria-hidden="true">↗</span></button><a href="pond-demo/" target="_blank" rel="noopener noreferrer">打开交互演示 ↗</a></div>
        </article>
        <article class="detail-card">
          <p class="detail-tags">02 / 教育 × AI · 开源 Skill</p>
          <h3>Course Study Guide</h3>
          <p>把学习、备课和母题变式组织成渐进式流程，提供双语学案、结构化校验与安装教程。</p>
          <p class="detail-stat"><strong>22</strong> Stars · <strong>1</strong> Fork</p>
          <p>GitHub 数据截至 2026.10.27。</p>
          <div class="detail-actions"><button type="button" data-detail="study">了解学案 Skill <span aria-hidden="true">↗</span></button></div>
        </article>
        <article class="detail-card">
          <p class="detail-tags">03 / AI 工具 · 使用观察</p>
          <h3>Codex Token Memory</h3>
          <p>查看会话 Token 使用与缓存数据，管理用户主动选择的可复用记忆条目。</p>
          <div class="detail-actions"><button type="button" data-detail="token">了解工具思路 <span aria-hidden="true">↗</span></button></div>
        </article>
        <article class="detail-card">
          <p class="detail-tags">04 / AI 协作 · 工作流设计</p>
          <h3>Modular Collaboration Guide</h3>
          <p>围绕提问方式、背景模块和协作记忆，把零散对话组织成更清晰的协作过程。</p>
          <div class="detail-actions"><button type="button" data-detail="collaboration">探索协作方式 <span aria-hidden="true">↗</span></button></div>
        </article>
        <article class="detail-card">
          <p class="detail-tags">05 / Java · 课程项目</p>
          <h3>影响力最大化算法</h3>
          <p>面向社交网络信息扩散，用贪心近似方法选择种子节点，实现概率传播并进行实验观察。</p>
          <div class="detail-actions"><button type="button" data-detail="algorithm">查看方法与实现 <span aria-hidden="true">↗</span></button></div>
        </article>
      </div>
      <div class="detail-actions"><a href="https://github.com/C-xudco" target="_blank" rel="noopener noreferrer">在 GitHub 继续探索 ↗</a></div>`
  },

  projects: {
    label: "PROJECT EXPERIENCE · 项目经历",
    title: "让问题，走到可用的结果。",
    intro: "我关注需求如何被发现，也关心它怎样被实现、交付，再通过反馈得到检验。",
    html: `
      <div class="detail-grid">
        <article class="detail-card">
          <p class="detail-tags">个人项目 / 产品与工程</p>
          <h3>水塘时钟：从体验出发</h3>
          <ul class="detail-list"><li>围绕桌面时间查看与轻陪伴场景，组合时钟、天气和钓鱼交互。</li><li>借助 AI 协作推进 React、Vite 与 Electron 实现，交付可运行的 Windows x64 离线应用。</li><li>从“好治愈”、版本期待、主动分享与潜在付费意向中，寻找后续迭代线索。</li></ul>
          <div class="detail-actions"><button type="button" data-detail="clock">查看完整项目 <span aria-hidden="true">↗</span></button></div>
        </article>
        <article class="detail-card">
          <p class="detail-tags">开源项目 / 需求抽象与工作流</p>
          <h3>学案 Skill：让重复需求有流程</h3>
          <ul class="detail-list"><li>将课程学习、教师备课和母题变式拆成明确的任务模式。</li><li>提供中英文输出，适配 Codex、豆包与 DeepSeek Harness 三种工具环境。</li><li>配套结构化校验脚本与入门安装教程，让工作流可以被理解、复用和检查。</li></ul>
          <div class="detail-actions"><button type="button" data-detail="study">查看开源实践 <span aria-hidden="true">↗</span></button></div>
        </article>
        <article class="detail-card">
          <p class="detail-tags">2026.01 — 2026.02 / 软件开发实习</p>
          <h3>青岛积成电子股份有限公司</h3>
          <p>参与数据监控大屏的接口调试、数据获取与可视化，优化页面布局和信息呈现；执行功能测试、定位问题并编写技术文档。</p>
          <div class="detail-tags"><span>接口调试</span><span>数据可视化</span><span>功能测试</span><span>技术文档</span></div>
        </article>
        <article class="detail-card">
          <p class="detail-tags">2024.03 — 2024.05 / Java 课程项目</p>
          <h3>影响力最大化算法</h3>
          <p>围绕网络信息扩散问题，设计贪心近似方案、分析时间复杂度，并实现节点激活与概率传播模块。</p>
          <div class="detail-actions"><button type="button" data-detail="algorithm">查看算法方法 <span aria-hidden="true">↗</span></button></div>
        </article>
      </div>
      <article class="detail-card">
        <h3>我如何与 AI 协作</h3>
        <ol class="detail-list"><li><strong>从场景定义问题。</strong>明确谁需要它、期望解决什么，以及怎样判断结果是否可用。</li><li><strong>把目标拆成任务。</strong>组织输入、实现步骤和检查条件，把重复工作沉淀为 Skills。</li><li><strong>交付，再观察反馈。</strong>用可运行的应用与公开仓库呈现成果，让体验和实际反馈参与下一轮判断。</li></ol>
      </article>`
  },

  campus: {
    label: "CAMPUS LEADERSHIP · 校园经历",
    title: "在参与中，理解连接。",
    intro: "从跨校赛事、校园舞台，到持续的心理支持与社团服务。组织工作的核心，是让不同的人朝同一个目标行动。",
    html: `
      <div class="detail-grid">
        <article class="detail-card">
          <p class="detail-tags">01 / 本科大二 · 跨校统筹</p>
          <h3>会友棋社 · 会长</h3>
          <p>牵头策划威海 <strong>4 所高校区域象棋联赛</strong>，联合多校制定标准化赛制，统筹场地、人员与交通安排，应对跨校区调度。</p>
          <p>赛事零事故落地并获电视台报道，以区域赛事建设社团品牌。</p>
          <div class="detail-tags"><span>跨校协作</span><span>规则制定</span><span>现场统筹</span></div>
        </article>
        <article class="detail-card">
          <p class="detail-tags">02 / 本科大二 · 校级学生组织</p>
          <h3>校园活动中心 · 活动部部长</h3>
          <p>担任传统文化节策划及<strong>草地音乐节现场总控（100+ 观众）</strong>，跨部门协调物资与现场动线，制定突发情况应急预案。</p>
          <p>设计并推行“执行小组积分激励制”，沉淀可复用的团队执行与管理规范。</p>
          <div class="detail-tags"><span>活动策划</span><span>应急协调</span><span>团队激励</span></div>
        </article>
        <article class="detail-card">
          <p class="detail-tags">03 / 本科大二 · 院学生会</p>
          <h3>数学与统计学院 · 心理辅导站部长</h3>
          <p>推动学院心理咨询服务支持体系建设，独立策划 <strong>20 余期常态化心理观影活动</strong>，累计服务 <strong>800+ 人次</strong>。</p>
          <p>持续推进活动组织与服务保障，积累长周期项目运营经验。</p>
          <div class="detail-tags"><span>长期项目运营</span><span>服务体系</span><span>持续交付</span></div>
        </article>
        <article class="detail-card">
          <p class="detail-tags">04 / 本科期间 · 社团服务</p>
          <h3>社团发展中心 · 服务管理部部长</h3>
          <p>组织社团迎新大会、百团大战、社团之星等文体活动，开展会长大会、社团培训等管理培训会议。</p>
          <p>负责日常社团文件归档与社团星级评定大会等工作，支持社团日常服务与管理。</p>
          <div class="detail-tags"><span>活动组织</span><span>管理培训</span><span>资料与流程</span></div>
        </article>
      </div>`
  },

  about: {
    label: "ABOUT CHANG MING · 关于我",
    title: "数学的底子，产品的好奇心。",
    intro: "你好，我是常铭。关注 AI 应用开发与产品实践，希望把抽象问题，做成可体验、可复用的作品。",
    html: `
      <article class="detail-card">
        <img src="assets/changming.png" width="110" height="136" alt="常铭的个人照片">
        <h3>常铭 <span lang="en">Chang Ming</span></h3>
        <p>AI 应用开发 · AI 产品实践</p>
        <p>从数学到计算机科学，持续学习，也持续把新的想法付诸实践。</p>
        <div class="detail-actions"><a href="mailto:changming2577@163.com">changming2577@163.com ↗</a><a href="https://github.com/C-xudco" target="_blank" rel="noopener noreferrer">GitHub / C-xudco ↗</a></div>
      </article>
      <div class="detail-grid">
        <article class="detail-card">
          <p class="detail-tags">2026.09 — 2028.06（预计）</p>
          <h3>香港城市大学（东莞）</h3>
          <p><strong>计算机科学 · 硕士在读</strong></p>
          <p>研究兴趣：计算机视觉、3D 重建、机器学习与具身智能。</p>
        </article>
        <article class="detail-card">
          <p class="detail-tags">2022.09 — 2026.06</p>
          <h3>山东大学</h3>
          <p><strong>数学与应用数学 · 本科</strong></p>
          <p>数学分析、概率统计、运筹学、数值分析与数学建模，为算法理解和问题抽象提供基础。</p>
          <div class="detail-tags"><span>优秀心理委员</span><span>优秀志愿者</span><span>特长奖学金</span></div>
        </article>
        <article class="detail-card">
          <p class="detail-tags">2026.01 — 2026.02</p>
          <h3>青岛积成电子股份有限公司</h3>
          <p><strong>软件开发实习生</strong></p>
          <p>参与数据监控大屏的接口调试、数据获取与可视化，优化页面布局和信息呈现；执行功能测试、定位问题并编写技术文档。</p>
        </article>
        <article class="detail-card">
          <p class="detail-tags">TOOLKIT / 技术与能力</p>
          <h3>用工具实现，也用判断取舍。</h3>
          <p>使用 Python、Java，具备 C++ 基础；通过 React、Vite 与 Electron 项目积累界面和桌面应用实践。</p>
          <div class="detail-tags"><span>AI Skills</span><span>数据可视化</span><span>算法建模</span><span>功能测试</span><span>技术文档</span></div>
          <p>CET-6 · <strong>506 分</strong> · 英文技术文档阅读</p>
        </article>
      </div>
      <article class="detail-card">
        <h3>进一步了解</h3>
        <p>同一段经历，两种岗位视角。</p>
        <div class="detail-actions"><a href="resume-engineering.pdf" download>AI 应用开发 / AI 产品工程简历 · PDF ↓</a><a href="resume-product.pdf" download>AI 产品经理简历 · PDF ↓</a><button type="button" data-detail="campus">查看校园经历 ↗</button></div>
      </article>`
  },

  clock: {
    label: "POND CLOCK · 水塘时钟",
    title: "在桌面，留一方自己的水塘。",
    intro: "时钟、天气，还有等一条鱼上钩的片刻。一个借助 AI 构建的 Windows x64 离线桌面钓鱼挂件。",
    html: `
      <figure class="detail-card"><img src="assets/pond-jiangnan.png" width="960" height="735" loading="lazy" alt="水塘时钟真实应用界面：秦淮河文德桥的水墨场景，包含时钟、天气与钓鱼交互"><figcaption>秦淮河 · 水墨江南。截图中的金币与天气来自测试存档，不代表用户使用数据。</figcaption></figure>
      <div class="detail-actions"><a href="pond-demo/" target="_blank" rel="noopener noreferrer">打开交互演示 ↗</a></div>
      <p>浏览器体验版用于展示界面与交互；无边框、拖动、置顶等桌面窗口能力请以 Windows App 为准。</p>
      <div class="detail-grid">
        <article class="detail-card"><h3>场景：时间与一点轻陪伴</h3><p>将现实时间、天气和轻量钓鱼放进同一挂件，让日常功能与放松体验一起成立。</p><p>通过水域漫游、图鉴、旅途和外观搭配，为桌面留下可持续探索的小空间。</p></article>
        <article class="detail-card"><h3>实现：从 AI 协作到桌面交付</h3><p>使用 React、Vite 与 Electron，推进可运行的 Windows 应用。</p><ul class="detail-list"><li>无边框窗口，可拖动、可置顶。</li><li>金币、鱼获、图鉴、物品、旅途与外观自动保存到本机。</li><li>离线运行，无需创建账号。</li></ul></article>
      </div>
      <article class="detail-card">
        <h3>验证：听见早期体验的声音</h3>
        <div class="detail-grid"><blockquote><p>“好治愈”</p><cite>体验偏好</cite></blockquote><blockquote><p>“4.0 什么时候上”</p><cite>版本期待</cite></blockquote><blockquote><p>“发给几个好朋友”</p><cite>主动分享意向</cite></blockquote><blockquote><p>“上线了我一定会去买”</p><cite>潜在付费意向</cite></blockquote></div>
        <p>这些早期内测反馈帮助我观察情绪体验、版本期待与分享意愿，判断哪些方向值得继续打磨。分享与付费意向不代表实际传播或成交，版本提问不代表该版本已发布。</p>
      </article>
      <div class="detail-grid"><figure class="detail-card"><img src="assets/pond-dongbei.png" width="960" height="735" loading="lazy" alt="水塘时钟真实界面：黑龙江北极村的雪景"><figcaption>黑龙江 · 北国小雪</figcaption></figure><figure class="detail-card"><img src="assets/pond-journey.png" width="960" height="735" loading="lazy" alt="水塘时钟真实界面：十二水域的漫游航线地图"><figcaption>十二水域 · 漫游地图</figcaption></figure></div>`
  },

  study: {
    label: "COURSE STUDY GUIDE · 学案 SKILL",
    title: "让学案，从回答变成流程。",
    intro: "面向课程学习、教师备课与母题变式，把零散的知识需求组织成可重复使用的学习过程。",
    html: `
      <div class="detail-grid">
        <article class="detail-card"><h3>看见问题</h3><p>学习者需要渐进式理解与练习；教师需要可使用的学案、教案和题目变式。零散提问容易缺少一致的结构，也难以检查是否真正覆盖需求。</p></article>
        <article class="detail-card"><h3>设计流程</h3><p>区分学生学习、教师备课和母题变式三类任务，组织概念理解、前置知识、练习与复盘，让生成内容服务于具体学习目标。</p></article>
        <article class="detail-card"><h3>降低使用门槛</h3><p>提供中文与英文输出，适配 Codex、豆包和 DeepSeek Harness，配套面向初学者的安装说明。</p><div class="detail-tags"><span>双语学案</span><span>3 种环境适配</span><span>入门教程</span></div></article>
        <article class="detail-card"><h3>让结果可以检查</h3><p>配套结构化校验脚本，让工作流的要求更明确，帮助使用者检查输出结构并继续调整。</p></article>
      </div>
      <article class="detail-card"><h3>开源后的初步反馈</h3><p class="detail-stat"><strong>22</strong> Stars · <strong>1</strong> Fork</p><p>截至 2026 年 10 月 27 日的 GitHub 仓库数据，呈现开源关注与仓库派生情况；不能等同于活跃用户、满意度或实际学习效果。</p><div class="detail-actions"><a href="https://github.com/C-xudco/course-study-guide" target="_blank" rel="noopener noreferrer">查看源码、教程与完整说明 ↗</a></div></article>`
  },

  token: {
    label: "CODEX TOKEN MEMORY · AI 工具",
    title: "让使用过程，有迹可循。",
    intro: "围绕会话 Token、缓存数据与可复用记忆，帮助使用者理解自己的 AI 协作过程。",
    html: `
      <div class="detail-grid"><article class="detail-card"><h3>从数据理解使用</h3><p>查看实际会话 Token 使用、缓存输入与缓存相关数据，为观察 AI 工具的使用过程提供依据。</p></article><article class="detail-card"><h3>把有用的背景留给下一次</h3><p>管理用户主动选择的可复用记忆条目，让值得保留的协作背景更容易被整理和再次使用。</p><p>该工具不清除服务端提示缓存，也不管理原生账户记忆。</p></article></div>
      <div class="detail-actions"><a href="https://github.com/C-xudco/codex-token-memory" target="_blank" rel="noopener noreferrer">查看 GitHub 仓库 ↗</a><button type="button" data-detail="work">返回作品集 ↗</button></div>`
  },

  collaboration: {
    label: "MODULAR COLLABORATION GUIDE · AI 协作",
    title: "把上下文，组织成协作。",
    intro: "围绕提问方式、背景模块和可编辑记忆，为持续的 AI 协作建立更清晰的组织方式。",
    html: `
      <div class="detail-grid"><article class="detail-card"><h3>更清楚地开始</h3><p>帮助使用者选择如何提问、补充哪些背景，以及下一步怎样推进目标。</p></article><article class="detail-card"><h3>按需要组合背景</h3><p>通过可视化协作面板与选定的背景模块，把分散信息组织成当前任务真正需要的上下文。</p></article><article class="detail-card"><h3>让协作记忆可编辑</h3><p>由用户管理自己的模块化协作记忆，保留有用信息，并随着需求调整。该工具不访问原生账户记忆。</p></article></div>
      <div class="detail-actions"><a href="https://github.com/C-xudco/modular-collaboration-guide" target="_blank" rel="noopener noreferrer">查看 GitHub 仓库 ↗</a><button type="button" data-detail="work">返回作品集 ↗</button></div>`
  },

  algorithm: {
    label: "INFLUENCE MAXIMIZATION · JAVA 课程项目",
    title: "找到传播的起点。",
    intro: "2024 年 3 月至 5 月，围绕社交网络中的影响力最大化问题，连接图模型、近似算法与程序实现。",
    html: `
      <div class="detail-grid"><article class="detail-card"><h3>问题</h3><p>在社交网络中选择一组种子节点，使信息扩散范围尽可能大。该组合优化问题需要在计算成本与传播效果之间作出权衡。</p></article><article class="detail-card"><h3>方法</h3><p>基于网络信息扩散模型，采用贪心策略设计近似求解方案，并分析时间复杂度。</p></article><article class="detail-card"><h3>实现与观察</h3><p>使用 Java 实现节点激活与概率影响传播模块，通过实验观察传播效果，加深对图模型和近似算法的理解。</p><div class="detail-tags"><span>Java</span><span>图模型</span><span>概率传播</span><span>算法分析</span></div></article></div>
      <div class="detail-actions"><button type="button" data-detail="projects">返回项目经历 ↗</button></div>`
  }
};
