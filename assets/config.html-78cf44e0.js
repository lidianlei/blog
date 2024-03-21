import{_ as d,M as i,p as c,q as r,R as a,t as e,N as t,a1 as s}from"./framework-ea2a9e6e.js";const o={},p=s('<h1 id="环境配置" tabindex="-1"><a class="header-anchor" href="#环境配置" aria-hidden="true">#</a> 环境配置</h1><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p><code>typescript</code>是<code>javascript</code>的一个超集，typescript 可以运行于任何系统，并且是开源免费的</p><p>ypescript 有以下几个特点</p><ul><li><code>typescript</code>会在编译时对代码进行严格的静态类型检查，可以在编码阶段就发现问题，而不是在上线运行时才发现</li><li><code>typeScript</code>语法遵循<code>ES</code>规范，更细速度快，不断支持最新的<code>ECMAScript</code>新特性，如装饰器、<code>public/private</code>修饰符</li><li><code>typescript</code>支持<code>OOP</code>（面向对象）的接口，抽象类，多态特性</li><li><code>typescript</code>可以为<code>IDE</code>提供更好的代码补全、接口提示、跳转到定义</li><li>还有重要一点是众多科技公司已经采用<code>typeScript</code>进行开发，也是前端工程师需要掌握的就业技能</li></ul><h2 id="安装环境" tabindex="-1"><a class="header-anchor" href="#安装环境" aria-hidden="true">#</a> 安装环境</h2><h3 id="node" tabindex="-1"><a class="header-anchor" href="#node" aria-hidden="true">#</a> node</h3>',7),l={href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"},v=s(`<h3 id="全局安装-ts" tabindex="-1"><a class="header-anchor" href="#全局安装-ts" aria-hidden="true">#</a> 全局安装 TS</h3><p>然后执行以下命令安装<code>typescript</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>npm install <span class="token operator">-</span>g typescript
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果你使用的是 mac 系统也可以执行</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>brew install typescript
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果是 linux 系统可以通过相应的软件管理命令安装，比如以下是 manjaro 的安装示例</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>sudo pacman <span class="token operator">-</span>Sy typescript
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装后执行以下命令检查是否安装成功</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>tsc <span class="token operator">-</span>v
<span class="token comment">//如果显示以下内容即表示安装成功</span>
<span class="token comment">// Version 4.2.4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="项目安装-ts" tabindex="-1"><a class="header-anchor" href="#项目安装-ts" aria-hidden="true">#</a> 项目安装 TS</h3><p>除了全局安装外，也可以在项目中独立安装 typescript，这可以限定项目使用的<code>typescript</code>版本</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>yarn init <span class="token operator">-</span>y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装 typescript</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>yarn add <span class="token operator">-</span><span class="token constant">D</span> typescript
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看版本</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>yarn tsc <span class="token operator">-</span>v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="编辑器" tabindex="-1"><a class="header-anchor" href="#编辑器" aria-hidden="true">#</a> 编辑器</h2><p><strong><code>.ts</code>是<code>typescript</code>的扩展名，在首次使用<code>vscode</code>编写.ts 文件时，<code>vscode</code>会自动下载支持<code>typescript</code>的插件环境</strong></p><h2 id="编译-ts" tabindex="-1"><a class="header-anchor" href="#编译-ts" aria-hidden="true">#</a> 编译 TS</h2><p>使用<code>tsc</code>命令可以将 ts 文件编译为 js 文件，如果在编译过程中有 ts 错误将在命令行报出</p><p>每次修改 ts 文件后再执行命令编译会过于繁琐，可以执行以下命令自动监听 ts 文件内容并自动生成 js 文件</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>tsc web<span class="token punctuation">.</span>ts <span class="token operator">-</span>w
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2><p>如果在 windows 系统中执行 tsc 命令报以下错误</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">...</span> 因为在此系统上禁止运行脚本 <span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>需要以管理员身份执行 powerShell，然后执行以下命令，在出现的提示选择 <code>Y</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>set<span class="token operator">-</span>ExecutionPolicy RemoteSigned
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,27);function u(h,m){const n=i("ExternalLinkIcon");return c(),r("div",null,[p,a("p",null,[e("首先需要安装 "),a("a",l,[e("node.js (opens new window)"),t(n)]),e("我相信做前端的都已经安装了")]),v])}const b=d(o,[["render",u],["__file","config.html.vue"]]);export{b as default};