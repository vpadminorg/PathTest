import{_ as s,c as a,o as i,aT as e}from"./chunks/framework.MerZD31Y.js";const u=JSON.parse('{"title":"이전 다음 링크","description":"","frontmatter":{},"headers":[],"relativePath":"ko/reference/default-theme-prev-next-links.md","filePath":"ko/reference/default-theme-prev-next-links.md","lastUpdated":1731481282000}'),n={name:"ko/reference/default-theme-prev-next-links.md"},t=e(`<h1 id="prev-next-links" tabindex="-1">이전 다음 링크 <a class="header-anchor" href="#prev-next-links" aria-label="Permalink to &quot;이전 다음 링크 {#prev-next-links}&quot;">​</a></h1><p>이전 페이지와 다음 페이지에 대한 텍스트와 링크를 사용자 정의할 수 있습니다(문서 하단에 표시됨). 사이드바에 있는 텍스트와 다른 텍스트를 원하는 경우에 유용합니다. 또한, 하단부를 비활성화하거나 사이드바에 포함되지 않은 페이지로 링크하는 것이 유용할 수 있습니다.</p><h2 id="prev" tabindex="-1">prev <a class="header-anchor" href="#prev" aria-label="Permalink to &quot;prev&quot;">​</a></h2><ul><li><p>타입: <code>string | false | { text?: string; link?: string }</code></p></li><li><p>세부 사항:</p><p>이전 페이지로의 링크에 표시할 텍스트/링크를 지정합니다. frontmatter에서 이를 설정하지 않으면, 사이드바 구성에서 텍스트/링크를 추론합니다.</p></li><li><p>예제:</p><ul><li><p>텍스트만 사용자 정의할 경우:</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">prev</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;시작하기 | 마크다운&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div></li><li><p>텍스트와 링크 모두 사용자 정의할 경우:</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">prev</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;마크다운&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  link</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/guide/markdown&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div></li><li><p>이전 페이지 숨기기:</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">prev</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div></li></ul></li></ul><h2 id="next" tabindex="-1">next <a class="header-anchor" href="#next" aria-label="Permalink to &quot;next&quot;">​</a></h2><p><code>prev</code>와 동일하지만 다음 페이지에 대한 설정입니다.</p>`,6),l=[t];function p(h,r,k,d,c,o){return i(),a("div",null,l)}const v=s(n,[["render",p]]);export{u as __pageData,v as default};