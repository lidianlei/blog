import{_ as n,p as s,q as a,a1 as t}from"./framework-ea2a9e6e.js";const e={},p=t(`<h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h2><h3 id="创建文件" tabindex="-1"><a class="header-anchor" href="#创建文件" aria-hidden="true">#</a> 创建文件</h3><p>typescript文件的编译可以通过<code>tsconfig.json</code>进行配置，使用以下命令可以创建<code>tsconfig.json</code>配置文件</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>tsc <span class="token operator">--</span>init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="配置项说明" tabindex="-1"><a class="header-anchor" href="#配置项说明" aria-hidden="true">#</a> 配置项说明</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  	<span class="token comment">//编译JS的版本</span>
 		<span class="token string-property property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;es2016&quot;</span><span class="token punctuation">,</span>
 		<span class="token comment">//模块类型</span>
 		<span class="token string-property property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;commonjs&quot;</span><span class="token punctuation">,</span>
 		<span class="token comment">//源码根目录</span>
 		<span class="token string-property property">&quot;rootDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./src/&quot;</span><span class="token punctuation">,</span>
 		<span class="token comment">//开启sourceMap会生成index.js.map，进行编译后的js文件与源ts文件的关联</span>
 		<span class="token string-property property">&quot;sourceMap&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
 		<span class="token comment">//编译的JS文件保存目录</span>
 		<span class="token string-property property">&quot;outDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./dist&quot;</span><span class="token punctuation">,</span>
 		<span class="token comment">//当编译过程出错时停止编译</span>
 		<span class="token string-property property">&quot;noEmitOnError&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
 		<span class="token comment">//开启严格模式</span>
 		<span class="token string-property property">&quot;strict&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
 		<span class="token comment">//对隐式的any类型，不进行报错</span>
 		noImplicitAny<span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
 		<span class="token comment">//不能将null和undefined赋值给其他类型的变量 </span>
 		<span class="token comment">//let a:number=33; a=undefined//报错</span>
 		strictNullChecks<span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
 		<span class="token comment">//函数参数未使用时报错</span>
 		<span class="token string-property property">&quot;noUnusedParameters&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
 		<span class="token comment">//在函数没有返回值是报错</span>
 		<span class="token string-property property">&quot;noImplicitReturns&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
 		<span class="token comment">//在未使用本地变量时报错</span>
 		<span class="token string-property property">&quot;noUnusedLocals&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h3><p><strong>noUnusedLocals</strong></p><p>在未使用本地变量时报错，下面的变量a没有被使用</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>noUnusedParameters</strong></p><p>函数参数未使用时报错</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">make</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>noImplicitReturns</strong></p><p>在函数没有返回值是报错</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">make</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">3</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),o=[p];function i(c,r){return s(),a("div",null,o)}const u=n(e,[["render",i],["__file","配置与调试.html.vue"]]);export{u as default};
