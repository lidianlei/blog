import{_ as s,p as n,q as a,a1 as t}from"./framework-ea2a9e6e.js";const e={},p=t(`<h2 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串" aria-hidden="true">#</a> 字符串</h2><h3 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h3><p><code>mysql</code>支持的字符串类型</p><table><thead><tr><th>类型</th><th>大小</th><th>用途</th></tr></thead><tbody><tr><td>CHAR</td><td>0-255 字节</td><td>定长字符串</td></tr><tr><td>VARCHAR</td><td>0-655535 字节</td><td>变长字符串</td></tr><tr><td>TINYBLOB</td><td>0-255 字节</td><td>不超过 255 个字符的二进制字符串</td></tr><tr><td>TINYTEXT</td><td>0-255 字节</td><td>短文本字符串</td></tr><tr><td>BLOB</td><td>0-65 535 字节</td><td>二进制形式的长文本数据</td></tr><tr><td>TEXT</td><td>0-65 535 字节</td><td>长文本数据</td></tr><tr><td>MEDIUMBLOB</td><td>0-16 777 215 字节</td><td>二进制形式的中等长度文本数据</td></tr><tr><td>MEDIUMTEXT</td><td>0-16 777 215 字节</td><td>中等长度文本数据</td></tr><tr><td>LONGBLOB</td><td>0-4 294 967 295 字节</td><td>二进制形式的极大文本数据</td></tr><tr><td>LONGTEXT</td><td>0-4 294 967 295 字节</td><td>极大文本数据</td></tr></tbody></table><p><strong>char</strong>类型是定长类型，比如定义了 20 长度的<code>char</code>类型，只存一个字符也占用 20 个长度，char 好处是处理速度快，缺点是空间占用大，把手机号、邮箱、密码等长度相对固定的设置为 char 类型是不错的选择</p><p><strong>varchar</strong>类型与<strong>char</strong>相反，占用空间手内容影响，可以把文章标题、介绍等设置为<code>varchar</code>类型更合适</p><h3 id="字符集" tabindex="-1"><a class="header-anchor" href="#字符集" aria-hidden="true">#</a> 字符集</h3><p>字符串分二进制与非二进制类型，二进制用于存储图片、声音等文件，非二进制用于存储文本数据</p><p>非二进制文本受字符集和校对规则影响</p><p>字符集（Character set）是多个字符的集合，字符集种类较多，每个字符集包含的字符个数不同。常用的字符集有<code>GBK、BIG5、UTF8</code></p><p>UTF8 字符包含文字内容更广。如韩文、日文、德文兼容度更高，也是推荐使用的字符集</p><p><strong>查看服务器支持的字符集</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token constant">SHOW</span> <span class="token constant">CHARACTER</span> <span class="token constant">SET</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>表不设置字符集继承数据库，字段不设置字符集继承表的</p><h3 id="校对规则" tabindex="-1"><a class="header-anchor" href="#校对规则" aria-hidden="true">#</a> 校对规则</h3><p>是在字符集内同于字符比较和排序的一套规则，以 _ci 结束的为大小写不敏感、_bin 结束的为区分大小写</p><p><strong>下面是查看系统支持的的校对规则</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token constant">SHOW</span> <span class="token constant">CLOOATION</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当使用不区分大小写的规则时 A 与 a 时相同的，否则则不相同，这会影响到排序与对比</p><p>如果使用<code>utf8_bin</code>校对规则时，下面的查询寻将匹配不到大写的<code>PHP</code>;</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>select <span class="token operator">*</span> from <span class="token keyword">class</span> <span class="token class-name">where</span> cname<span class="token operator">=</span><span class="token string">&#39;php&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>修改表校对规则，对表的原字段将不影响，值对新增字段影响</p></blockquote><h3 id="常用函数" tabindex="-1"><a class="header-anchor" href="#常用函数" aria-hidden="true">#</a> 常用函数</h3><p><strong>大小写转换</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token constant">SELECT</span> <span class="token constant">UPPER</span><span class="token punctuation">(</span>cname<span class="token punctuation">)</span> <span class="token keyword">as</span> cname<span class="token punctuation">,</span><span class="token constant">LOWER</span><span class="token punctuation">(</span><span class="token constant">DESCRIPTION</span><span class="token punctuation">)</span> <span class="token constant">AS</span> <span class="token string">&#39;DESC&#39;</span> <span class="token constant">FROM</span> <span class="token keyword">class</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Left &amp;&amp; right</strong></p><p>left 与 right 函数用于取左或取右指定数量的字符，下面是取班级介绍前 8 个字符并用<code>...</code>链接</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>select <span class="token function">concat</span><span class="token punctuation">(</span><span class="token constant">LEFT</span><span class="token punctuation">(</span><span class="token constant">DESCRIPTION</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;...&#39;</span><span class="token punctuation">)</span> <span class="token constant">FROM</span> <span class="token keyword">class</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>mid</strong></p><p>从中间取字符串，参数二为起始，参数三为取的字符串数量，下面是获取从第二个字符取两个字符值为<code>ph</code>的</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>select <span class="token operator">*</span> from <span class="token keyword">class</span> <span class="token class-name">WHERE</span> <span class="token constant">MID</span><span class="token punctuation">(</span>cname<span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token string">&#39;ph&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>substring</strong></p><p>从指定位置开始向右取所有字符串，下面是获取从第二个位置开始的字符值为<code>ph</code>的记录</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token constant">SELECT</span> <span class="token operator">*</span> <span class="token constant">FROM</span> <span class="token keyword">class</span> <span class="token class-name">WHERE</span> <span class="token constant">SUBSTRING</span><span class="token punctuation">(</span>cname<span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token string">&#39;ph&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>char_length</strong></p><p>获取字符串数据</p><p><strong>concat</strong></p><p>连接字符串使用</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token constant">SELECT</span> <span class="token function">concat</span><span class="token punctuation">(</span><span class="token string">&#39;编号&#39;</span><span class="token punctuation">,</span>id<span class="token punctuation">)</span> <span class="token keyword">as</span> id<span class="token punctuation">,</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token string">&#39;班级&#39;</span>，cname<span class="token punctuation">)</span> <span class="token keyword">as</span> name <span class="token constant">FROM</span> <span class="token keyword">class</span><span class="token punctuation">;</span>
<span class="token comment">//将所有班级前加上 node</span>
<span class="token constant">UPDATE</span> <span class="token keyword">class</span> <span class="token class-name">SET</span> cname <span class="token operator">=</span> <span class="token constant">CONCAT</span><span class="token punctuation">(</span><span class="token string">&#39;node&#39;</span><span class="token punctuation">,</span>cname<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>截取班级介绍，超过 8 个字符的后面链接<code>...</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token constant">SELECT</span> <span class="token constant">IF</span><span class="token punctuation">(</span>
	<span class="token constant">CHAR_LENGTH</span><span class="token punctuation">(</span>description<span class="token punctuation">)</span><span class="token operator">&gt;</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token constant">CONCAT</span><span class="token punctuation">(</span><span class="token constant">LEFT</span><span class="token punctuation">(</span>description<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token string">&#39;...&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token constant">LEFT</span><span class="token punctuation">(</span>description<span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span> <span class="token keyword">as</span> name <span class="token constant">FROM</span> <span class="token keyword">class</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="正则表达式" tabindex="-1"><a class="header-anchor" href="#正则表达式" aria-hidden="true">#</a> 正则表达式</h3><p><code>Mysql</code>支持正则表达式操作，可用于处理复杂的匹配操作</p><p><strong>查询第二个字符串为<code>h</code>的字符串</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token constant">SELECT</span> <span class="token operator">*</span> <span class="token constant">FROM</span> <span class="token keyword">class</span> <span class="token class-name">WHERE</span> cname <span class="token constant">REFEXP</span> <span class="token string">&#39;^.h&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查找班级名称中包含<code>php</code>或<code>mysql</code>的记录</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token constant">SELECT</span> <span class="token operator">*</span> <span class="token constant">FROM</span> <span class="token keyword">class</span> <span class="token class-name">cname</span> <span class="token constant">REGEXP</span> <span class="token string">&#39;php|mysql&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>所有介绍中包含 <code>php</code>与<code>Mysql</code>的课程名前加上<code>node</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token constant">UPDATE</span> <span class="token keyword">class</span> <span class="token class-name">SET</span> cname <span class="token operator">=</span> <span class="token constant">REPLACE</span><span class="token punctuation">(</span>cname<span class="token punctuation">,</span>cname<span class="token punctuation">,</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token string">&#39;node:&#39;</span><span class="token punctuation">,</span>cname<span class="token punctuation">)</span><span class="token punctuation">)</span> 
<span class="token constant">WHERE</span> description <span class="token constant">REGEXP</span> <span class="token string">&#39;php|mysql&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="like" tabindex="-1"><a class="header-anchor" href="#like" aria-hidden="true">#</a> LIKE</h3><p>在<code>LIKE</code>表达式中<code>%</code>用于匹配任意多个字符，<code>_</code>用于匹配一个字符</p><p>查找第二个字符为<code>h</code>的班级</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token constant">SELECT</span> <span class="token operator">*</span> <span class="token constant">FROM</span> <span class="token keyword">class</span> <span class="token class-name">WHERE</span> cname <span class="token constant">LIKE</span> <span class="token string">&#39;_h%&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="数值类型" tabindex="-1"><a class="header-anchor" href="#数值类型" aria-hidden="true">#</a> 数值类型</h2><p><strong>整型</strong></p><table><thead><tr><th>MySql数据类型</th><th>范围（有符号）</th><th>范围（无符号）</th></tr></thead><tbody><tr><td>tinyint（m）</td><td>1 个字符 范围（-128~127）</td><td>（0，255）</td></tr><tr><td>smallint（m）</td><td>2 个字符 范围（-32768-32767）</td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr></tbody></table>`,56),c=[p];function o(d,l){return n(),a("div",null,c)}const r=s(e,[["render",o],["__file","数据类型.html.vue"]]);export{r as default};
