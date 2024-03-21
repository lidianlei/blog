import{_ as s,p as n,q as a,a1 as e}from"./framework-ea2a9e6e.js";const t={},p=e(`<h1 id="模块管理" tabindex="-1"><a class="header-anchor" href="#模块管理" aria-hidden="true">#</a> 模块管理</h1><p>推荐使用 webpack 进行 TypeScript 模块打包是</p><h2 id="命名空间" tabindex="-1"><a class="header-anchor" href="#命名空间" aria-hidden="true">#</a> 命名空间</h2><p>TypeScript 像其他编程语言一样，存在命名空间（namespace）的概念</p><p>当我们定义以下同名变量时是不允许的，这种情况可以通过命名空间解决</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;张三&#39;</span>
<span class="token keyword">let</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;李四&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>使用命名空间将变量隔离</p><ul><li>数据需要使用 export 导出才可以使用</li><li>子命名空间也需要 export 后才可以使用</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">namespace</span> User <span class="token punctuation">{</span>
  <span class="token keyword">export</span> <span class="token keyword">let</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;张三&#39;</span>
<span class="token punctuation">}</span>
<span class="token keyword">namespace</span> Member <span class="token punctuation">{</span>
  <span class="token keyword">let</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;李四&#39;</span>
<span class="token punctuation">}</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>User<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Member<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//报错，因为没有使用 export 将变量导出</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>命名空间支持嵌套</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">namespace</span> User <span class="token punctuation">{</span>
  <span class="token keyword">export</span> <span class="token keyword">let</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;张三&#39;</span>
  <span class="token keyword">export</span> <span class="token keyword">namespace</span> Member <span class="token punctuation">{</span>
    <span class="token keyword">export</span> <span class="token keyword">let</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;李四&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>User<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>User<span class="token punctuation">.</span>Member<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//李四 获取子命名空间中的数据</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="单独编译" tabindex="-1"><a class="header-anchor" href="#单独编译" aria-hidden="true">#</a> 单独编译</h2><p>将每个 ts 文件单独进行编译，然后在 html 文件中依次引入</p><p>首先创建 tsconfig.js</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tsc --init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后执行文件监测</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tsc -w
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建<code>user.ts</code>模块文件</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">namespace</span> User <span class="token punctuation">{</span>
  <span class="token keyword">export</span> <span class="token keyword">let</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;张三&#39;</span>
<span class="token punctuation">}</span>
<span class="token keyword">namespace</span> Member <span class="token punctuation">{</span>
  <span class="token keyword">export</span> <span class="token keyword">let</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;李四&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 index.ts 文件中定义业务内容，即使用 User.ts 中的数据 User.name</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>User<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后执行编译</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tsc -w
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="合并打包" tabindex="-1"><a class="header-anchor" href="#合并打包" aria-hidden="true">#</a> 合并打包</h2><p>通过命令将多个文件进行打包</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>tsc <span class="token operator">--</span>outFile <span class="token punctuation">.</span><span class="token operator">/</span>dist<span class="token operator">/</span>app<span class="token punctuation">.</span>js user<span class="token punctuation">.</span>ts index<span class="token punctuation">.</span>ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> reference</h2><p>在 index.ts 中使用 <code>reference</code> 引入依赖的文件</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">/// &lt;reference path=&quot;user.ts&quot;/&gt;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>User<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>使用下面的命令编译到一个文件中</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tsc --outFile ./dist/app.js index.ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="amd" tabindex="-1"><a class="header-anchor" href="#amd" aria-hidden="true">#</a> amd</h2><p>使用 amd 模块打包较上面的打包方式方便些，因为我们可以在代码中使用 js 模块的 export/import 语法</p><p>首先创建 ts 配置文件 tsconfig.js</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tsc --init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后修改配置项</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>...
&quot;module&quot;: &quot;amd&quot;
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后创建 user.ts，并且只导出 User 类</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">namespace</span> User <span class="token punctuation">{</span>
  <span class="token keyword">export</span> <span class="token keyword">let</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;张三&#39;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">namespace</span> Member <span class="token punctuation">{</span>
  <span class="token keyword">export</span> <span class="token keyword">let</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;李四&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 index.ts 文件中 import 导入 ts 编译后的 User.js 模块</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> User <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./user.js&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后执行命令进行编译</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>tsc <span class="token operator">--</span>outFile <span class="token punctuation">.</span><span class="token operator">/</span>dist<span class="token operator">/</span>app<span class="token punctuation">.</span>js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>因为是 amd 模块所以需要使用 require.js 处理</li></ul>`,44),i=[p];function c(l,o){return n(),a("div",null,i)}const d=s(t,[["render",c],["__file","模块管理.html.vue"]]);export{d as default};
