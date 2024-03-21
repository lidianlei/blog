import{_ as n,p as s,q as a,a1 as t}from"./framework-ea2a9e6e.js";const p={},e=t(`<h2 id="event事件" tabindex="-1"><a class="header-anchor" href="#event事件" aria-hidden="true">#</a> Event事件</h2><p><strong>Node</strong>使用<strong>发布订阅模式</strong>实现 Event 事件，<code>node</code>中的事件对象都是<strong>events.EventEmitter</strong>对象的实例*。在 Node 中多数模块都继承了事件，如<code>fs、http、stream</code>；</p><p><strong>常用方法</strong></p><ul><li>on 方法用于订阅监听事件</li><li>emit 方法用于触发事件</li><li>once 订阅一次事件，即执行后删除事件</li><li>removeListener 移除事件</li><li>removeAllListeners 移除所有事件</li></ul><h2 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h2><ul><li><p>注册多个事件监听</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> EventEmitter <span class="token keyword">from</span> <span class="token string">&#39;events&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> event <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EventEmitter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//监听事件</span>
event<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;nodejs&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">content</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">第一次触发时间：</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>content<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">//监听事件</span>
event<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;nodejs&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">content</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">第二次触发时间：</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>content<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;事件驱动是异步的，所以这行代码先执行&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//触发事件</span>
event<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;nodejs&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;测试nodejs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//执行结果</span>
<span class="token comment">//事件驱动是异步的，所以这行代码先执行</span>
<span class="token comment">//第一次触发时间：测试nodejs</span>
<span class="token comment">//第二次触发时间：测试nodejs</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>once指注册一次事件监听，触发后就移除事件监听</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> EventEmitter <span class="token keyword">from</span> <span class="token string">&quot;events&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> event <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EventEmitter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//监听事件</span>
event<span class="token punctuation">.</span><span class="token function">once</span><span class="token punctuation">(</span><span class="token string">&#39;nodejs&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">content</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">第1次触发事件：</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>content<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> res <span class="token operator">=</span> event<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;nodejs&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;node&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//true</span>

res <span class="token operator">=</span> event<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;nodejs&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;node&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自定义事件" tabindex="-1"><a class="header-anchor" href="#自定义事件" aria-hidden="true">#</a> 自定义事件</h2><p><strong>EventEmitter</strong>对象被继承来使用</p></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> EventEmitter <span class="token keyword">from</span> <span class="token string">&#39;events&#39;</span>

<span class="token keyword">class</span> <span class="token class-name">Uploader</span> <span class="token keyword">extends</span> <span class="token class-name">EventEmitter</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">make</span><span class="token punctuation">(</span><span class="token parameter">file</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;success&#39;</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>file<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-文件上传成功</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> uploadHandler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Uploader</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
uploadHandler<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;success&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">message</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//a.jpg-文件上传成功</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
uploadHandler<span class="token punctuation">.</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string">&#39;a.jpg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="事件信息" tabindex="-1"><a class="header-anchor" href="#事件信息" aria-hidden="true">#</a> 事件信息</h2><p><strong>listeners</strong>可以获取指定事件的监听函数</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> EventEmitter <span class="token keyword">from</span> <span class="token string">&quot;events&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> event <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EventEmitter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
event<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;nodejs&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
event<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;nodejs&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span><span class="token function">listeners</span><span class="token punctuation">(</span><span class="token string">&#39;nodejs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
event<span class="token punctuation">.</span><span class="token function">listeners</span><span class="token punctuation">(</span><span class="token string">&#39;nodejs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">func</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//1  2  </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>listenerCount</strong>获取指定事件的监听数量</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> EventEmitter <span class="token keyword">from</span> <span class="token string">&#39;events&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> event <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EventEmitter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
event<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;nodejs&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
event<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;nodejs&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span><span class="token function">listenerCount</span><span class="token punctuation">(</span><span class="token string">&#39;nodejs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="移除事件" tabindex="-1"><a class="header-anchor" href="#移除事件" aria-hidden="true">#</a> 移除事件</h2><p>使用<strong>removeListener</strong>移除已经注册的事件监听，参数一为事件名，参数二为监听函数</p><ul><li><p><strong>off</strong>是<strong>removeListener</strong>别名</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> EventEmitter <span class="token keyword">from</span> <span class="token string">&#39;events&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> event <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EventEmitter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//监听事件</span>
<span class="token keyword">const</span> <span class="token function-variable function">listener</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">content</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">第1次触发事件：</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>content<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
event<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;nodejs&#39;</span><span class="token punctuation">,</span>listener<span class="token punctuation">)</span><span class="token punctuation">;</span>
event<span class="token punctuation">.</span><span class="token function">removeListener</span><span class="token punctuation">(</span><span class="token string">&#39;nodejs&#39;</span><span class="token punctuation">,</span>listener<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> res <span class="token operator">=</span> event<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;nodejs&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;node&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p><strong>使用 removeAllListeners 移除所有监听，不需要指定监听函数</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> EventEmitter <span class="token keyword">from</span> <span class="token string">&#39;events&#39;</span>
<span class="token keyword">const</span> event <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EventEmitter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">//监听事件</span>
<span class="token keyword">const</span> <span class="token function-variable function">listener</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">content</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">第1次触发事件：</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>content<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
event<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;nodejs&#39;</span><span class="token punctuation">,</span> listener<span class="token punctuation">)</span>
<span class="token comment">//移除所有监听</span>
event<span class="token punctuation">.</span><span class="token function">removeAllListeners</span><span class="token punctuation">(</span><span class="token string">&#39;nodejs&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> res <span class="token operator">=</span> event<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;nodejs&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;node&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token comment">//false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),o=[e];function c(i,l){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","Event模块.html.vue"]]);export{k as default};
