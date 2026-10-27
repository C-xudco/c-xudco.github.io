# 常铭个人作品集

**访问网站：[c-xudco.github.io](https://c-xudco.github.io/)**  
**GitHub 主页：[C-xudco](https://github.com/C-xudco)**

这是常铭个人介绍网站的独立静态发布仓库，包含真人照片、AI 项目与开源 Skills、教育实习、四项校园经历、两版简历及《水塘时钟》真实界面与浏览器交互演示。页面使用本仓库的字体回退、图片、CSS 和 JavaScript，不依赖 OpenAI 托管域名、外部字体或图表服务。

## 部署

GitHub Pages 使用 `main` 分支的根目录发布。`.nojekyll` 保留静态资源原样提供。入口为 `index.html`。也可以将本目录原样上传到其他静态网站托管服务。

## 本地查看

```text
python -m http.server 8000 --bind 127.0.0.1
```

浏览 `http://127.0.0.1:8000/`。完整浏览器演示需要 HTTP 服务。

## 内容与编辑

- `index.html`：照片、项目、教育、实习、校园经历与联系入口。
- `styles.css`、`campus.css`：整体版式和校园经历。
- `navigation.css`、`navigation.js`：桌面悬停展开导航、手机分组菜单和键盘操作。
- `app.js`：作品筛选、详情、截图切换和复制邮箱。
- `assets/`：照片与真实应用截图。
- `pond-demo/`：《水塘时钟》前端构建和浏览器体验入口。
- `resume-engineering.pdf`、`resume-product.pdf`：两份投递版简历。

GitHub 数字核验于 2026.10.27。更新时需同步 `index.html` 和 `app.js` 中的项目详情。三个 Skill 的源码与教程见各自仓库。

## 演示

浏览器演示进度与 Windows App 存档相互独立；窗口拖动、置顶、最小化属于桌面版能力。演示限制外部网络请求，可以在设置中选择手动天气。预览包含开发中内容，具体功能以桌面发行版为准。展示截图为应用测试场景。

内测反馈使用本人提供记录中的短摘录；推荐和购买意愿不等于实际传播或成交。校园活动规模采用本人经历记录。第三方聊天头像和身份信息未上传。
