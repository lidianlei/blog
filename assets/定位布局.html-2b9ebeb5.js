import{_ as n,p as s,q as a,a1 as t}from"./framework-ea2a9e6e.js";const p={},e=t(`<h2 id="基础知识" tabindex="-1"><a class="header-anchor" href="#基础知识" aria-hidden="true">#</a> 基础知识</h2><p>定位的基本思想很简单，它允许你定义元素框相对于其正常位置应该出现的位置，或者相对于父元素、另一个元素甚至浏览器窗口本身的位置</p><h3 id="定位类型-position" tabindex="-1"><a class="header-anchor" href="#定位类型-position" aria-hidden="true">#</a> 定位类型（position）</h3><table><thead><tr><th>选项</th><th>说明</th></tr></thead><tbody><tr><td>static</td><td>默认行为，参考文档流</td></tr><tr><td>relative</td><td>相对定位</td></tr><tr><td>absolute</td><td>绝对定位</td></tr><tr><td>fixed</td><td>固定定位</td></tr><tr><td>sticky</td><td>粘性定位</td></tr></tbody></table><h3 id="位置偏移" tabindex="-1"><a class="header-anchor" href="#位置偏移" aria-hidden="true">#</a> 位置偏移</h3><p>可以为部分类型的定位元素设置<code>上、下、左、右</code> 的位置偏移</p><table><thead><tr><th>选项</th><th>说明</th></tr></thead><tbody><tr><td>top</td><td>距离顶边</td></tr><tr><td>bottom</td><td>距离下边</td></tr><tr><td>left</td><td>距离左部</td></tr><tr><td>right</td><td>距离右边</td></tr></tbody></table><p>使用百分比单位时使用的是父级尺寸，比如下面的示例 left:100%会定位到最右边</p><h2 id="相对定位" tabindex="-1"><a class="header-anchor" href="#相对定位" aria-hidden="true">#</a> 相对定位</h2><p>相对定位是相对于元素原来的位置控制，当元素发生位置偏移时，原位置留白</p><h2 id="绝对定位" tabindex="-1"><a class="header-anchor" href="#绝对定位" aria-hidden="true">#</a> 绝对定位</h2><p>绝对定义不受文档流影响，就像漂浮在页面中的精灵，绝对定位元素拥有行内块特性</p><h3 id="参照元素" tabindex="-1"><a class="header-anchor" href="#参照元素" aria-hidden="true">#</a> 参照元素</h3><p>如果父级元素设置了 <code>relative | fixed | sticky</code> ，绝对定位子元素将参数此父元素进行定位</p><h3 id="默认位置" tabindex="-1"><a class="header-anchor" href="#默认位置" aria-hidden="true">#</a> 默认位置</h3><p>如果没有为定位元素设置偏移，将受父元素的 padding 等属性影响。但使用定位一般都会设置偏移位置</p><h3 id="设置尺寸" tabindex="-1"><a class="header-anchor" href="#设置尺寸" aria-hidden="true">#</a> 设置尺寸</h3><p>可以通过定位的偏移值设置元素的尺寸</p><h3 id="居中定位" tabindex="-1"><a class="header-anchor" href="#居中定位" aria-hidden="true">#</a> 居中定位</h3><p>通过将 <code>left</code> 设置为 50% ,并向左偏移子元素宽度一半可以实现水平居中，垂直居中使用方式类似</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #f2a67d<span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">margin-left</span><span class="token punctuation">:</span> -100px<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">margin-top</span><span class="token punctuation">:</span> -100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="滚动行为" tabindex="-1"><a class="header-anchor" href="#滚动行为" aria-hidden="true">#</a> 滚动行为</h3><p>固定定位元素会随滚动条发生滚动</p><h3 id="图标定位" tabindex="-1"><a class="header-anchor" href="#图标定位" aria-hidden="true">#</a> 图标定位</h3><p>有了绝对定位我们可以很方便的控制元素在任何位置的摆放</p><h2 id="纵向重叠" tabindex="-1"><a class="header-anchor" href="#纵向重叠" aria-hidden="true">#</a> 纵向重叠</h2><p>如果元素重叠在一起，可以使用 <code>z-index</code> 控制元素的上下层级，数值越大越在上面。</p><p>父级子元素设置 <code>z-index</code> 没有意义，子元素永远在父元素上面的</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">body</span> <span class="token punctuation">{</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">article</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> solid 10px blueviolet<span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">article:hover div:nth-of-type(2)</span> <span class="token punctuation">{</span>
    <span class="token property">z-index</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">article div</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">article div:nth-of-type(1)</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
    <span class="token property">z-index</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">article div:nth-of-type(2)</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="固定定位" tabindex="-1"><a class="header-anchor" href="#固定定位" aria-hidden="true">#</a> 固定定位</h2><p>元素相对于页面固定定位在某个位置，固定定位元素不会在滚动时改变位置 ，使用<code>position: fixed</code> 产生固定定位</p><h2 id="粘性定位" tabindex="-1"><a class="header-anchor" href="#粘性定位" aria-hidden="true">#</a> 粘性定位</h2><h3 id="同级定位" tabindex="-1"><a class="header-anchor" href="#同级定位" aria-hidden="true">#</a> 同级定位</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">*</span> <span class="token punctuation">{</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">main</span> <span class="token punctuation">{</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">main article</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">border</span><span class="token punctuation">:</span> solid 5px blueviolet<span class="token punctuation">;</span>
        <span class="token property">overflow</span><span class="token punctuation">:</span> scroll<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">main article h2</span> <span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #db1f77<span class="token punctuation">;</span>
        <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
        <span class="token property">text-indent</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
        <span class="token property">position</span><span class="token punctuation">:</span> sticky<span class="token punctuation">;</span>
        <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">main article h2:nth-of-type(1)</span> <span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> blueviolet<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">main article section</span> <span class="token punctuation">{</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
...

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="非同级定位" tabindex="-1"><a class="header-anchor" href="#非同级定位" aria-hidden="true">#</a> 非同级定位</h3><p>不属于同一个父元素设置粘性定位时，后面的元素挤掉原来位置的元素如下例</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">*</span> <span class="token punctuation">{</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">main</span> <span class="token punctuation">{</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">main article</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
        <span class="token property">border</span><span class="token punctuation">:</span> solid 5px blueviolet<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">overflow</span><span class="token punctuation">:</span> scroll<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">main article section:nth-of-type(odd) h2</span> <span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> blueviolet<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">main article section h2</span> <span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #db1f77<span class="token punctuation">;</span>
        <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
        <span class="token property">text-indent</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
        <span class="token property">position</span><span class="token punctuation">:</span> sticky<span class="token punctuation">;</span>
        <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">main article section p</span> <span class="token punctuation">{</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
...

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,37),c=[e];function i(o,l){return s(),a("div",null,c)}const d=n(p,[["render",i],["__file","定位布局.html.vue"]]);export{d as default};
