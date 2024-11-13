import{_ as s,c as i,o as a,aT as n}from"./chunks/framework.MerZD31Y.js";const g=JSON.parse('{"title":"편집 링크","description":"","frontmatter":{},"headers":[],"relativePath":"ko/reference/default-theme-edit-link.md","filePath":"ko/reference/default-theme-edit-link.md","lastUpdated":1731481282000}'),t={name:"ko/reference/default-theme-edit-link.md"},e=n(`<h1 id="edit-link" tabindex="-1">편집 링크 <a class="header-anchor" href="#edit-link" aria-label="Permalink to &quot;편집 링크 {#edit-link}&quot;">​</a></h1><h2 id="site-level-config" tabindex="-1">사이트 레벨 설정 <a class="header-anchor" href="#site-level-config" aria-label="Permalink to &quot;사이트 레벨 설정 {#site-level-config}&quot;">​</a></h2><p>편집 링크를 사용하면 GitHub이나 GitLab과 같은 Git 관리 서비스에서 페이지를 편집하는 링크를 표시할 수 있습니다. 활성화하려면, <code>themeConfig.editLink</code> 옵션을 설정에 추가하세요.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    editLink: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      pattern: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://github.com/vuejs/vitepress/edit/main/docs/:path&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><code>pattern</code> 옵션은 링크의 URL 구조를 정의하며, <code>:path</code>는 페이지 경로로 대체됩니다.</p><p>또한 <a href="./runtime-api#usedata"><code>PageData</code></a>를 인수로 받아 URL 문자열을 반환하는 순수 함수를 넣을 수도 있습니다.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    editLink: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      pattern</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: ({ </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">filePath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (filePath.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">startsWith</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;packages/&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">          return</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`https://github.com/acme/monorepo/edit/main/\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">filePath</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">          return</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`https://github.com/acme/monorepo/edit/main/docs/\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">filePath</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>이 함수는 부작용이 없어야 하며, 범위 외의 것에 접근할 수 없으며, 브라우저에서 직렬화되어 실행됩니다.</p><p>기본적으로, 이 옵션은 문서 페이지 하단에 &quot;Edit this page&quot;라는 링크 텍스트를 추가합니다. <code>text</code> 옵션을 정의하여 이 텍스트를 사용자 정의할 수 있습니다.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    editLink: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      pattern: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://github.com/vuejs/vitepress/edit/main/docs/:path&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      text: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;GitHub에서 이 페이지를 편집하세요&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="frontmatter-config" tabindex="-1">프론트매터 설정 <a class="header-anchor" href="#frontmatter-config" aria-label="Permalink to &quot;프론트매터 설정 {#frontmatter-config}&quot;">​</a></h2><p>프론트매터의 <code>editLink</code> 옵션을 사용하여 페이지별로 이 기능을 비활성화할 수 있습니다:</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">editLink</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div>`,13),l=[e];function p(h,k,d,E,r,c){return a(),i("div",null,l)}const y=s(t,[["render",p]]);export{g as __pageData,y as default};
