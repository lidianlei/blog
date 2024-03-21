import{_ as l,M as p,p as i,q as c,R as n,t,N as o,a1 as s}from"./framework-ea2a9e6e.js";const d={},u=n("p",null,'Flex 是 Flexible Box 的缩写，意为"弹性布局"，可以轻松的控制元素排列、对齐和顺序的控制。',-1),r=n("p",null,"现在的终端类型非常多，使用弹性盒模型可以让元素在不同尺寸终端控制尺寸",-1),k=n("h3",{id:"兼容性",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#兼容性","aria-hidden":"true"},"#"),t(" 兼容性")],-1),v={href:"https://caniuse.com/",target:"_blank",rel:"noopener noreferrer"},g=s(`<h2 id="容器的属性" tabindex="-1"><a class="header-anchor" href="#容器的属性" aria-hidden="true">#</a> 容器的属性</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><ul><li>flex-direction</li><li>flex-wrap</li><li>flex-flow</li><li>justify-content</li><li>align-items</li><li>align-content</li></ul></div><h3 id="声明定义" tabindex="-1"><a class="header-anchor" href="#声明定义" aria-hidden="true">#</a> 声明定义</h3><p>容器盒子里面包含着容器元素，使用 <code>display:flex</code> 或 <code>display:inline-flex</code> 声明为弹性盒子</p><p><strong>声明块级弹性盒子</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">article</span> <span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
    <span class="token property">margin-left</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">margin-top</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">outline</span><span class="token punctuation">:</span> solid 5px silver<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>声明内联级弹性盒子</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">article</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="flex-direction" tabindex="-1"><a class="header-anchor" href="#flex-direction" aria-hidden="true">#</a> flex-direction</h3><p>用于控制盒子元素排列的方向</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
    <span class="token property">flex-direction</span><span class="token punctuation">:</span> row | row-reverse | column | column-reverse<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),h=["src"],m=s(`<table><thead><tr><th style="text-align:left;">值</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">row</td><td style="text-align:left;">（默认值）主轴为水平方向，起点在左端</td></tr><tr><td style="text-align:left;">row-reverse</td><td style="text-align:left;">主轴为水平方向，起点在右端</td></tr><tr><td style="text-align:left;">column</td><td style="text-align:left;">主轴为垂直方向，起点在上沿</td></tr><tr><td style="text-align:left;">column-reverse</td><td style="text-align:left;">主轴为垂直方向，起点在下沿</td></tr></tbody></table><h3 id="flex-wrap" tabindex="-1"><a class="header-anchor" href="#flex-wrap" aria-hidden="true">#</a> flex-wrap</h3><p>flex-wrap 属性规定 flex 容器是单行或者多行，同时横轴的方向决定了新行堆叠的方向</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span><span class="token punctuation">{</span>
    <span class="token property">flex-wrap</span><span class="token punctuation">:</span> nowrap | wrap | wrap-reverse<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th style="text-align:left;">选项</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">nowrap</td><td style="text-align:left;">不换行（默认值）</td></tr><tr><td style="text-align:left;">wrap</td><td style="text-align:left;">容器元素在必要的时候拆行或拆列。</td></tr><tr><td style="text-align:left;">wrap-reverse</td><td style="text-align:left;">容器元素在必要的时候拆行或拆列，但是以相反的顺序</td></tr></tbody></table><h3 id="flex-flow" tabindex="-1"><a class="header-anchor" href="#flex-flow" aria-hidden="true">#</a> flex-flow</h3><p><code>flex-flow</code> 是 <code>flex-direction</code> 与 <code>flex-wrap</code> 的组合简写模式</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span><span class="token property">flex-flow</span><span class="token punctuation">:</span> &lt;flex-direction&gt; || &lt;flex-wrap&gt;<span class="token punctuation">;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>justify-content</p><p><code>justify-content</code>属性定义了项目在主轴上的对齐方式</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
    <span class="token property">justify-content</span><span class="token punctuation">:</span> flex-start | flex-end | center | space-between | space-around<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),b=["src"],x=s('<table><thead><tr><th style="text-align:left;">选项</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">flex-start</td><td style="text-align:left;">元素紧靠主轴起点</td></tr><tr><td style="text-align:left;">flex-end</td><td style="text-align:left;">元素紧靠主轴终点</td></tr><tr><td style="text-align:left;">center</td><td style="text-align:left;">元素从弹性容器中心开始</td></tr><tr><td style="text-align:left;">space-between</td><td style="text-align:left;">第一个元素靠起点，最后一个元素靠终点，余下元素平均分配空间</td></tr><tr><td style="text-align:left;">space-around</td><td style="text-align:left;">每个元素两侧的间隔相等。所以，元素之间的间隔比元素与容器的边距的间隔大一倍</td></tr><tr><td style="text-align:left;">space-evenly</td><td style="text-align:left;">元素间距离平均分配</td></tr></tbody></table><h3 id="交叉轴行" tabindex="-1"><a class="header-anchor" href="#交叉轴行" aria-hidden="true">#</a> 交叉轴行</h3><p>元素在交叉轴上有行的概念，理解这个概念会对理解 align-items 与 align-content 有更好的帮助。</p><ul><li>align-item 是控制元素在行上的排列</li><li>align-content 是控制行在交差轴上的排列</li></ul>',4),f=["src"],y=s(`<h3 id="align-items" tabindex="-1"><a class="header-anchor" href="#align-items" aria-hidden="true">#</a> align-items</h3><p><code>align-items</code>属性定义项目在交叉轴上如何对齐</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
    <span class="token property">align-items</span><span class="token punctuation">:</span> flex-start | flex-end | center | baseline | stretch<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),w=["src"],_=s(`<table><thead><tr><th style="text-align:left;">选项</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">stretch</td><td style="text-align:left;">（默认值）如果项目未设置高度或设为auto，将占满整个容器的高度</td></tr><tr><td style="text-align:left;">center</td><td style="text-align:left;">交叉轴的中点对齐</td></tr><tr><td style="text-align:left;">flex-start</td><td style="text-align:left;">交叉轴的起点对齐</td></tr><tr><td style="text-align:left;">flex-end</td><td style="text-align:left;">交叉轴的终点对齐</td></tr><tr><td style="text-align:left;">baseline</td><td style="text-align:left;">项目的第一行文字的基线对齐</td></tr></tbody></table><h3 id="align-content" tabindex="-1"><a class="header-anchor" href="#align-content" aria-hidden="true">#</a> align-content</h3><p><code>align-content</code>属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
    <span class="token property">align-content</span><span class="token punctuation">:</span> flex-start | flex-end | center | space-between | space-around | stretch<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),q=["src"],B=s(`<table><thead><tr><th style="text-align:left;">选项</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">stretch</td><td style="text-align:left;">将空间平均分配给元素</td></tr><tr><td style="text-align:left;">flex-start</td><td style="text-align:left;">元素紧靠主轴起点</td></tr><tr><td style="text-align:left;">flex-end</td><td style="text-align:left;">元素紧靠主轴终点</td></tr><tr><td style="text-align:left;">center</td><td style="text-align:left;">元素从弹性容器中心开始</td></tr><tr><td style="text-align:left;">space-between</td><td style="text-align:left;">第一个元素靠起点，最后一个元素靠终点，余下元素平均分配空间</td></tr><tr><td style="text-align:left;">space-around</td><td style="text-align:left;">每个元素两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍</td></tr><tr><td style="text-align:left;">space-evenly</td><td style="text-align:left;">元素间距离平均分配</td></tr></tbody></table><h2 id="弹性元素" tabindex="-1"><a class="header-anchor" href="#弹性元素" aria-hidden="true">#</a> 弹性元素</h2><p>放在容器盒子中的元素即为容器元素。</p><ul><li>不能使用 float 与 clear 规则</li><li>弹性元素均为块元素</li><li>绝对定位的弹性元素不参与弹性布局</li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><ul><li><p>align-self</p></li><li><p>flex-grow</p></li><li><p>flex-shrin\`</p></li><li><p>flex-basis</p></li><li><p>flex</p></li><li><p>order</p></li></ul></div><h3 id="align-self" tabindex="-1"><a class="header-anchor" href="#align-self" aria-hidden="true">#</a> align-self</h3><p>align-self<code>属性允许单个项目有与其他项目不一样的对齐方式，可覆盖</code>align-items<code>属性。默认值为</code>auto<code>，表示继承父元素的</code>align-items<code>属性，如果没有父元素，则等同于</code>stretch</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">item</span> <span class="token punctuation">{</span>
    <span class="token property">align-self</span><span class="token punctuation">:</span> auto | flex-start | flex-end | center | baseline | stretch<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>该属性可能取6个值，除了auto，其他都与align-items属性完全一致</p></blockquote><table><thead><tr><th style="text-align:left;">选项</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">stretch</td><td style="text-align:left;">将空间平均分配给元素</td></tr><tr><td style="text-align:left;">flex-start</td><td style="text-align:left;">元素紧靠主轴起点</td></tr><tr><td style="text-align:left;">flex-end</td><td style="text-align:left;">元素紧靠主轴终点</td></tr><tr><td style="text-align:left;">center</td><td style="text-align:left;">元素从弹性容器中心开始</td></tr></tbody></table><h3 id="flex-grow" tabindex="-1"><a class="header-anchor" href="#flex-grow" aria-hidden="true">#</a> flex-grow</h3><p><code>flex-grow</code>属性定义项目的放大比例，默认为<code>0</code>，即如果存在剩余空间，也不放大</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span>    
    <span class="token property">flex-grow</span><span class="token punctuation">:</span> &lt;number&gt;<span class="token punctuation">;</span><span class="token comment">/* default 0 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>如果所有项目的<code>flex-grow</code>属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的<code>flex-grow</code>属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍</p></blockquote><h3 id="flex-shrink" tabindex="-1"><a class="header-anchor" href="#flex-shrink" aria-hidden="true">#</a> flex-shrink</h3><p><code>flex-shrink</code>属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span>
    <span class="token property">flex-shrink</span><span class="token punctuation">:</span> &lt;number&gt;<span class="token punctuation">;</span> <span class="token comment">/* default 1 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>如果所有项目的<code>flex-shrink</code>属性都为1，当空间不足时，都将等比例缩小。如果一个项目的<code>flex-shrink</code>属性为0，其他项目都为1，则空间不足时，前者不缩小</p></blockquote><h3 id="flex-basis" tabindex="-1"><a class="header-anchor" href="#flex-basis" aria-hidden="true">#</a> flex-basis</h3><p><code>flex-basis</code>属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为<code>auto</code>，即项目的本来大小</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span>
    <span class="token property">flex-basis</span><span class="token punctuation">:</span> &lt;length&gt; | auto<span class="token punctuation">;</span> <span class="token comment">/* default auto */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>它可以设为跟<code>width</code>或<code>height</code>属性一样的值（比如350px），则项目将占据固定空间</p></blockquote><h3 id="flex" tabindex="-1"><a class="header-anchor" href="#flex" aria-hidden="true">#</a> flex</h3><p><code>flex</code>属性是<code>flex-grow</code>, <code>flex-shrink</code> 和 <code>flex-basis</code>的简写，默认值为<code>0 1 auto</code>。后两个属性可选</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span>
    <span class="token property">flex</span><span class="token punctuation">:</span> none | [ &lt;<span class="token string">&#39;flex-grow&#39;</span>&gt; &lt;<span class="token string">&#39;flex-shrink&#39;</span>&gt;? || &lt;<span class="token string">&#39;flex-basis&#39;</span>&gt; ]
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>该属性有两个快捷值：<code>auto</code> (<code>1 1 auto</code>) 和 none (<code>0 0 auto</code>)</p></blockquote><h3 id="order" tabindex="-1"><a class="header-anchor" href="#order" aria-hidden="true">#</a> order</h3><p><code>order</code>属性定义项目的排列顺序。数值越小，排列越靠前，默认为0</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span>
    <span class="token property">order</span><span class="token punctuation">:</span> &lt;integer&gt;<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="弹性文本" tabindex="-1"><a class="header-anchor" href="#弹性文本" aria-hidden="true">#</a> 弹性文本</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">article</span> <span class="token punctuation">{</span>
        <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
        <span class="token property">flex-direction</span><span class="token punctuation">:</span> row<span class="token punctuation">;</span>
        <span class="token property">justify-content</span><span class="token punctuation">:</span> space-between<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
        <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span><span class="token punctuation">&gt;</span></span>
    css
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>vue<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    css
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="绝对定位" tabindex="-1"><a class="header-anchor" href="#绝对定位" aria-hidden="true">#</a> 绝对定位</h2><p>绝对定位的弹性元素不参与弹性布局</p><h2 id="自动空间" tabindex="-1"><a class="header-anchor" href="#自动空间" aria-hidden="true">#</a> 自动空间</h2><p>在弹性布局中对元素使用<code>margin-right:auto</code> 等形式可以自动撑满空间。下例为第一个 ul 设置 <code>margin-right:auto</code> 表示右侧空间自动撑满，第二个 ul 靠近父元素右边界。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">*</span> <span class="token punctuation">{</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.container</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 1200px<span class="token punctuation">;</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">nav</span> <span class="token punctuation">{</span>
        <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
        <span class="token property">border</span><span class="token punctuation">:</span> solid 1px green<span class="token punctuation">;</span>
        <span class="token property">margin-top</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
        <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 60px<span class="token punctuation">;</span>
        <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 5px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> .2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #f3f3f3<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">ul</span> <span class="token punctuation">{</span>
        <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">ul:nth-child(1)</span> <span class="token punctuation">{</span>
        <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
        <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token property">margin-right</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">ul:nth-child(1)&gt;li</span> <span class="token punctuation">{</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0 10px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">ul:nth-child(2)&gt;li</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
        <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #9b59b6<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>html<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>css<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>js<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>vue<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nav</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,36);function j(a,E){const e=p("ExternalLinkIcon");return i(),c("div",null,[u,r,k,n("p",null,[t("下面是 FLEX 系统兼容性数据，你也可以在 "),n("a",v,[t("https://caniuse.com/ (opens new window)"),o(e)]),t("网站查看，绝大多数设备尤其是移动端都很好的支持 FLEX，所以可以放心使用")]),g,n("img",{src:a.$withBase("/images/flex/01.png"),alt:"foo"},null,8,h),m,n("img",{src:a.$withBase("/images/flex/02.png"),alt:"foo"},null,8,b),x,n("img",{src:a.$withBase("/images/flex/06.png"),alt:"foo"},null,8,f),y,n("img",{src:a.$withBase("/images/flex/03.png"),alt:"foo"},null,8,w),_,n("img",{src:a.$withBase("/images/flex/04.png"),alt:"foo"},null,8,q),B])}const $=l(d,[["render",j],["__file","弹性布局.html.vue"]]);export{$ as default};
