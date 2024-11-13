import{_ as s,c as i,o as a,aT as n}from"./chunks/framework.MerZD31Y.js";const g=JSON.parse('{"title":"部署 VitePress 站点","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"zh/guide/deploy.md","filePath":"zh/guide/deploy.md","lastUpdated":1731481282000}'),e={name:"zh/guide/deploy.md"},l=n(`<h1 id="deploy-your-vitepress-site" tabindex="-1">部署 VitePress 站点 <a class="header-anchor" href="#deploy-your-vitepress-site" aria-label="Permalink to &quot;部署 VitePress 站点 {#deploy-your-vitepress-site}&quot;">​</a></h1><p>以下指南基于一些前提：</p><ul><li><p>VitePress 站点位于项目的 <code>docs</code> 目录中。</p></li><li><p>你使用的是默认的生成输出目录 （<code>.vitepress/dist</code>）。</p></li><li><p>VitePress 作为本地依赖项安装在项目中，并且你已在 <code>package.json</code> 中设置以下脚本：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;docs:build&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vitepress build docs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;docs:preview&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vitepress preview docs&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></li></ul><h2 id="build-and-test-locally" tabindex="-1">本地构建与测试 <a class="header-anchor" href="#build-and-test-locally" aria-label="Permalink to &quot;本地构建与测试 {#build-and-test-locally}&quot;">​</a></h2><ol><li><p>可以运行以下命令来构建文档：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs:build</span></span></code></pre></div></li><li><p>构建文档后，通过运行以下命令可以在本地预览它：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs:preview</span></span></code></pre></div><p><code>preview</code> 命令将启动一个本地静态 Web 服务 <code>http://localhost:4173</code>，该服务以 <code>.vitepress/dist</code> 作为源文件。这是检查生产版本在本地环境中是否正常的一种简单方法。</p></li><li><p>可以通过传递 <code>--port</code> 作为参数来配置服务器的端口。</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;docs:preview&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vitepress preview docs --port 8080&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>现在 <code>docs:preview</code> 方法将会在 <code>http://localhost:8080</code> 启动服务。</p></li></ol><h2 id="setting-a-public-base-path" tabindex="-1">设定 public 根目录 <a class="header-anchor" href="#setting-a-public-base-path" aria-label="Permalink to &quot;设定 public 根目录 {#setting-a-public-base-path}&quot;">​</a></h2><p>默认情况下，我们假设站点将部署在域名 (<code>/</code>) 的根路径上。如果站点在子路径中提供服务，例如 <code>https://mywebsite.com/blog/</code>，则需要在 VitePress 配置中将 <a href="./../reference/site-config#base"><code>base</code></a> 选项设置为 <code>&#39;/blog/&#39;</code>。</p><p><strong>例</strong>：如果你使用的是 Github（或 GitLab）页面并部署到 <code>user.github.io/repo/</code>，请将 <code>base</code> 设置为 <code>/repo/</code>。</p><h2 id="http-cache-headers" tabindex="-1">HTTP 缓存标头 <a class="header-anchor" href="#http-cache-headers" aria-label="Permalink to &quot;HTTP 缓存标头 {#http-cache-headers}&quot;">​</a></h2><p>如果可以控制生产服务器上的 HTTP 标头，则可以配置 <code>cache-control</code> 标头以在重复访问时获得更好的性能。</p><p>生产版本对静态资源 (JavaScript、CSS 和其他非 <code>public</code> 目录中的导入资源) 使用哈希文件名。如果你使用浏览器开发工具的网络选项卡查看生产预览，你将看到类似 <code>app.4f283b18.js</code> 的文件。</p><p>此哈希 <code>4f283b18</code> 是从此文件的内容生成的。相同的哈希 URL 保证提供相同的文件内容——如果内容更改，URL 也会更改。这意味着你可以安全地为这些文件使用最强的缓存标头。所有此类文件都将放置在输出目录的 <code>assets/</code> 中，因此你可以为它们配置以下标头：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Cache-Control: max-age=31536000,immutable</span></span></code></pre></div><details class="details custom-block"><summary>Netlify 示例 <code>_headers</code> 文件</summary><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/assets/*</span></span>
<span class="line"><span>  cache-control: max-age=31536000</span></span>
<span class="line"><span>  cache-control: immutable</span></span></code></pre></div><p>注意：该 <code>_headers</code> 文件应放置在 <a href="./asset-handling#the-public-directory">public 目录</a>中 (在我们的例子中是 <code>docs/public/_headers</code>)，以便将其逐字复制到输出目录。</p><p><a href="https://docs.netlify.com/routing/headers/" target="_blank" rel="noreferrer">Netlify 自定义标头文档</a></p></details><details class="details custom-block"><summary>Vercel 配置示例 <code>vercel.json</code></summary><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;headers&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;source&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/assets/(.*)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;headers&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">          &quot;key&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Cache-Control&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">          &quot;value&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;max-age=31536000, immutable&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>注意：<code>vercel.json</code> 文件应放在存储库的根目录中。</p><p><a href="https://vercel.com/docs/concepts/projects/project-configuration#headers" target="_blank" rel="noreferrer">Vercel 关于标头配置的文档</a></p></details><h2 id="platform-guides" tabindex="-1">各平台部署指南 <a class="header-anchor" href="#platform-guides" aria-label="Permalink to &quot;各平台部署指南 {#platform-guides}&quot;">​</a></h2><h3 id="netlify-vercel-cloudflare-pages-aws-amplify-render" tabindex="-1">Netlify / Vercel / Cloudflare Pages / AWS Amplify / Render <a class="header-anchor" href="#netlify-vercel-cloudflare-pages-aws-amplify-render" aria-label="Permalink to &quot;Netlify / Vercel / Cloudflare Pages / AWS Amplify / Render&quot;">​</a></h3><p>使用仪表板创建新项目并更改这些设置：</p><ul><li><strong>构建命令：</strong> <code>npm run docs:build</code></li><li><strong>输出目录：</strong> <code>docs/.vitepress/dist</code></li><li><strong>node 版本：</strong> <code>18</code> (或更高版本)</li></ul><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>不要为 HTML 代码启用 <em>Auto Minify</em> 等选项。它将从输出中删除对 Vue 有意义的注释。如果被删除，你可能会看到激活不匹配错误。</p></div><h3 id="github-pages" tabindex="-1">GitHub Pages <a class="header-anchor" href="#github-pages" aria-label="Permalink to &quot;GitHub Pages&quot;">​</a></h3><ol><li><p>在项目的 <code>.github/workflows</code> 目录中创建一个名为 <code>deploy.yml</code> 的文件，其中包含这样的内容：</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 构建 VitePress 站点并将其部署到 GitHub Pages 的示例工作流程</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Deploy VitePress site to Pages</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 在针对 \`main\` 分支的推送上运行。如果你</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 使用 \`master\` 分支作为默认分支，请将其更改为 \`master\`</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  push</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    branches</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 允许你从 Actions 选项卡手动运行此工作流程</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  workflow_dispatch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置 GITHUB_TOKEN 的权限，以允许部署到 GitHub Pages</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">permissions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  contents</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">read</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  pages</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">write</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  id-token</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">write</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 只允许同时进行一次部署，跳过正在运行和最新队列之间的运行队列</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 但是，不要取消正在进行的运行，因为我们希望允许这些生产部署完成</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">concurrency</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  group</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">pages</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  cancel-in-progress</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">jobs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 构建工作</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  build</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    runs-on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ubuntu-latest</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    steps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Checkout</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        uses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">actions/checkout@v4</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        with</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          fetch-depth</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 如果未启用 lastUpdated，则不需要</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # - uses: pnpm/action-setup@v3 # 如果使用 pnpm，请取消注释</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # - uses: oven-sh/setup-bun@v1 # 如果使用 Bun，请取消注释</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Setup Node</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        uses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">actions/setup-node@v4</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        with</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          node-version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          cache</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">npm</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 或 pnpm / yarn</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Setup Pages</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        uses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">actions/configure-pages@v4</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Install dependencies</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">npm ci</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 或 pnpm install / yarn install / bun install</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Build with VitePress</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">npm run docs:build</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 或 pnpm docs:build / yarn docs:build / bun run docs:build</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Upload artifact</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        uses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">actions/upload-pages-artifact@v3</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        with</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">docs/.vitepress/dist</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 部署工作</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  deploy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    environment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">github-pages</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\${{ steps.deployment.outputs.page_url }}</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    needs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">build</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    runs-on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ubuntu-latest</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Deploy</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    steps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Deploy to GitHub Pages</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">deployment</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        uses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">actions/deploy-pages@v4</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>确保 VitePress 中的 <code>base</code> 选项配置正确。有关更多详细信息，请参阅<a href="#setting-a-public-base-path">设置根路径</a>。</p></div></li><li><p>在存储库设置中的“Pages”菜单项下，选择“Build and deployment &gt; Source &gt; GitHub Actions”。</p></li><li><p>将更改推送到 <code>main</code> 分支并等待 GitHub Action 工作流完成。你应该看到站点部署到 <code>https://&lt;username&gt;.github.io/[repository]/</code> 或 <code>https://&lt;custom-domain&gt;/</code>，这取决于你的设置。你的站点将在每次推送到 <code>main</code> 分支时自动部署。</p></li></ol><h3 id="gitlab-pages" tabindex="-1">GitLab Pages <a class="header-anchor" href="#gitlab-pages" aria-label="Permalink to &quot;GitLab Pages&quot;">​</a></h3><ol><li><p>如果你想部署到 <code>https://&lt;username&gt; .gitlab.io/&lt;repository&gt; /</code>，将 VitePress 配置中的 <code>outDir</code> 设置为 <code>../public</code>。将 <code>base</code> 选项配置为 <code>&#39;/&lt;repository&gt;/&#39;</code>。</p></li><li><p>在项目的根目录中创建一个名为 <code>.gitlab-ci.yml</code> 的文件，其中包含以下内容。每当你更改内容时，这都会构建和部署你的站点：</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">node:18</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">pages</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  cache</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    paths</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">node_modules/</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # - apk add git # 如果你使用的是像 alpine 这样的小型 docker 镜像，并且启用了 lastUpdated，请取消注释</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">npm install</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">npm run docs:build</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  artifacts</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    paths</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">public</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  only</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">main</span></span></code></pre></div></li></ol><h3 id="azure-static-web-apps" tabindex="-1">Azure 静态 web 应用 <a class="header-anchor" href="#azure-static-web-apps" aria-label="Permalink to &quot;Azure 静态 web 应用 {#azure-static-web-apps}&quot;">​</a></h3><ol><li><p>参考<a href="https://docs.microsoft.com/en-us/azure/static-web-apps/build-configuration" target="_blank" rel="noreferrer">官方文档</a>。</p></li><li><p>在配置文件中设置这些值 (并删除不需要的值，如 <code>api_location</code>)：</p><ul><li><strong><code>app_location</code></strong>: <code>/</code></li><li><strong><code>output_location</code></strong>: <code>docs/.vitepress/dist</code></li><li><strong><code>app_build_command</code></strong>: <code>npm run docs:build</code></li></ul></li></ol><h3 id="firebase" tabindex="-1">Firebase <a class="header-anchor" href="#firebase" aria-label="Permalink to &quot;Firebase {#firebase}&quot;">​</a></h3><ol><li><p>在项目的根目录下创建 <code>firebase.json</code> 和 <code>.firebaserc</code>：</p><p><code>firebase.json</code>:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;hosting&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;public&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;docs/.vitepress/dist&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;ignore&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: []</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><code>.firebaserc</code>:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;projects&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;default&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;YOUR_FIREBASE_ID&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></li><li><p>运行 <code>npm run docs:build</code> 后，运行此命令进行部署：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">firebase</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> deploy</span></span></code></pre></div></li></ol><h3 id="surge" tabindex="-1">Surge <a class="header-anchor" href="#surge" aria-label="Permalink to &quot;Surge&quot;">​</a></h3><ol><li><p>运行 <code>npm run docs:build</code> 后，运行此命令进行部署：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> surge</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs/.vitepress/dist</span></span></code></pre></div></li></ol><h3 id="heroku" tabindex="-1">Heroku <a class="header-anchor" href="#heroku" aria-label="Permalink to &quot;Heroku&quot;">​</a></h3><ol><li><p>参考 <a href="https://elements.heroku.com/buildpacks/heroku/heroku-buildpack-static" target="_blank" rel="noreferrer"><code>heroku-buildpack-static</code></a> 中给出的文档和指南。</p></li><li><p>使用以下内容在项目的根目录中创建一个名为 <code>static.json</code> 的文件：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;root&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;docs/.vitepress/dist&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></li></ol><h3 id="edgio" tabindex="-1">Edgio <a class="header-anchor" href="#edgio" aria-label="Permalink to &quot;Edgio&quot;">​</a></h3><p>请参阅<a href="https://docs.edg.io/guides/vitepress" target="_blank" rel="noreferrer">创建并部署 VitePress 应用程序到 Edgio</a>。</p><h3 id="kinsta-static-site-hosting" tabindex="-1">Kinsta 静态站点托管 <a class="header-anchor" href="#kinsta-static-site-hosting" aria-label="Permalink to &quot;Kinsta 静态站点托管 {#kinsta-static-site-hosting}&quot;">​</a></h3><p>你可以按照这些<a href="https://kinsta.com/docs/vitepress-static-site-example/" target="_blank" rel="noreferrer">说明</a> 在 <a href="https://kinsta.com/static-site-hosting/" target="_blank" rel="noreferrer">Kinsta</a> 上部署 VitePress 站点。</p><h3 id="stormkit" tabindex="-1">Stormkit <a class="header-anchor" href="#stormkit" aria-label="Permalink to &quot;Stormkit&quot;">​</a></h3><p>你可以按照这些<a href="https://stormkit.io/blog/how-to-deploy-vitepress" target="_blank" rel="noreferrer">说明</a>将你的 VitePress 项目部署到 <a href="https://www.stormkit.io" target="_blank" rel="noreferrer">Stormkit</a>。</p><h3 id="nginx" tabindex="-1">Nginx <a class="header-anchor" href="#nginx" aria-label="Permalink to &quot;Nginx&quot;">​</a></h3><p>下面是一个 Nginx 服务器块配置示例。此配置包括对基于文本的常见资源的 gzip 压缩、使用适当缓存头为 VitePress 站点静态文件提供服务的规则以及处理 <code>cleanUrls: true</code> 的方法。</p><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    gzip </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    gzip_types </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    listen </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">80</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    server_name </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">_;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    index </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">index.html;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> / </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # content location</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        root </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/app;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # exact matches -&gt; reverse clean urls -&gt; folders -&gt; not found</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        try_files </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$uri $uri.html $uri/ </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">=404</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # non existent pages</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        error_page </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">404</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /404.html;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # a folder without index.html raises 403 in this setup</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        error_page </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">403</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /404.html;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # adjust caching headers</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # files in the assets folder have hashes filenames</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        location</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ~*</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;"> ^/assets/ </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            expires </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">1y;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            add_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Cache-Control </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;public, immutable&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>本配置默认已构建的 VitePress 站点位于服务器上的 <code>/app</code> 目录中。如果站点文件位于其他位置，请相应调整 <code>root</code> 指令。</p><div class="warning custom-block"><p class="custom-block-title">不要默认为 index.html</p><p>try_files 解析不能像其他 Vue 应用那样默认为 index.html。这会导致页面状态处于无效。</p></div><p>更多信息请参见 <a href="https://nginx.org/en/docs/" target="_blank" rel="noreferrer">nginx 官方文档</a>、这些 GitHub Issue <a href="https://github.com/vuejs/vitepress/discussions/2837" target="_blank" rel="noreferrer">#2837</a>、<a href="https://github.com/vuejs/vitepress/issues/3235" target="_blank" rel="noreferrer">#3235</a>以及 Mehdi Merah 发表的<a href="https://blog.mehdi.cc/articles/vitepress-cleanurls-on-nginx-environment#readings" target="_blank" rel="noreferrer">博客</a>。</p>`,44),t=[l];function p(h,k,d,r,o,c){return a(),i("div",null,t)}const y=s(e,[["render",p]]);export{g as __pageData,y as default};
