import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as n,e as i}from"./app-7226743f.js";const s={},t=i(`<h1 id="_10-【高度塌陷与bfc】" tabindex="-1"><a class="header-anchor" href="#_10-【高度塌陷与bfc】" aria-hidden="true">#</a> 10 【高度塌陷与BFC】</h1><h2 id="_1-高度塌陷" tabindex="-1"><a class="header-anchor" href="#_1-高度塌陷" aria-hidden="true">#</a> 1.高度塌陷</h2><p>在浮动布局中，父元素的高度默认是被子元素撑开的</p><p>当子元素浮动后，其会完全脱离文档流，子元素从文档流中脱离将会无法撑起父元素的高度，导致父元素的高度丢失</p><p>父元素高度丢失以后，其下的元素会自动上移，导致页面的布局混乱</p><figure><img src="https://i0.hdslb.com/bfs/album/cb831d42c016c9f6ddd693d5c1d9135dafa780fc.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>所以高度塌陷是浮动布局中比较常见的一个问题，这个问题我们必须要进行处理！</p><h2 id="_2-bfc" tabindex="-1"><a class="header-anchor" href="#_2-bfc" aria-hidden="true">#</a> 2.BFC</h2><p>BFC（Block Formatting Context）块级格式化环境</p><ul><li><p>BFC是一个CSS中的一个隐含的属性，可以为一个元素开启BFC</p></li><li><p>开启BFC该元素会变成一个独立的布局区域</p></li></ul><p>元素开启BFC后的特点：</p><ul><li><p>不会被浮动元素覆盖</p></li><li><p>父子元素外边距不会重叠</p></li><li><p>可以包含浮动的元素</p></li></ul><p>可以通过一些特殊方式来开启元素的BFC：</p><ul><li>设置为浮动（不推荐）：很明显下方元素被覆盖了，总不能让所有元素都浮动吧</li></ul><figure><img src="https://i0.hdslb.com/bfs/album/649066ea4f2cfd1f758f76fbaa8264fdd39087e0.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>设置为行内块元素（不推荐）：不再独占一行，宽度变了，同时与下方元素产生了一点空隙</li></ul><figure><img src="https://i0.hdslb.com/bfs/album/d5d8b3c4b8e93a6456bb0bd6eb62a992011eaaa8.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>设置<code>overflow</code>为非<code>visible</code>值：既没有覆盖元素，也保持了独占一方的特性（保持了宽度），与下方元素也保持了最初的间隙 常用的方式为元素设置<code>overflow:hidden</code>（<code>overflow:auto</code>也是ok的） 开启其BFC， 以使其可以包含浮动元素 <code>overflow:scroll</code> 会有滚动条，可能并不需要的，所以不太推荐</li></ul><figure><img src="https://i0.hdslb.com/bfs/album/86fb66d46989bcb8168f3f2cac7b1a668806ddc8.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>不过，这种方式也存在一定问题，如下，<code>overflow</code>并没有完全清除div2布局上受到的影响</p><p><strong>总结</strong></p><ul><li><p>可以通过变成浮动元素，来防止自身被浮动元素覆盖（有点“以毒攻毒”那味了）</p></li><li><p>可以设置行内块，来防止自身及其他元素被浮动元素覆盖（如果说浮动是“独善其身”，那行内块就有点“兼济天下”的意思）</p></li><li><p>可以设置<code>overflow</code>属性，包含浮动元素（既“独善其身”，又“兼济天下”，但仍有缺陷）</p></li></ul><h2 id="_3-为什么需要清除浮动" tabindex="-1"><a class="header-anchor" href="#_3-为什么需要清除浮动" aria-hidden="true">#</a> 3.为什么需要清除浮动？</h2><p><strong>问题</strong></p><p>由于父级盒子很多情况下不方便给高度，但是子盒子浮动又不占有位置，最后父级盒子高度为 0 时，就会影响下面的标准流盒子。</p><figure><img src="https://i0.hdslb.com/bfs/album/4059beaa8f82849bf8cb17059a2a734fcc6ff663.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li><p>由于浮动元素不再占用原文档流的位置，所以它会对后面的元素排版产生影响</p></li><li><p>此时一但父盒子下面有其他盒子，那么布局就会发生严重混乱！</p></li></ul><p><strong>实际开发</strong></p><p>我们前面浮动元素有一个标准流的父元素，他们有一个共同的特点，都是有高度的。</p><p>但是，所有的父盒子都必须有高度吗？</p><p>答案：不一定！比如，一个产品列表，随着时期的不同，产品数量也不同，所需的盒子大小也会随之改变，那么直接固定盒子高度的形式显然就是不行的。再比如，文章之类的盒子，不同的文章字数是不相同的，那么显然盒子也不能直接固定高度。</p><p>理想中的状态，让子盒子撑开父亲。有多少孩子，我父盒子就有多高。</p><p>但是不给父盒子高度会有问题吗？</p><p>答案：会！但有方法解决（清除浮动）。</p><h2 id="_4-清除浮动本质" tabindex="-1"><a class="header-anchor" href="#_4-清除浮动本质" aria-hidden="true">#</a> 4.清除浮动本质</h2><ul><li>清除浮动的本质是清除浮动元素造成的影响</li><li>如果父盒子本身有高度，则不需要清除浮动</li><li>清除浮动之后，父级就会根据浮动的子盒子自动检测高度。父级有了高度，就不会影响下面的标准流了</li></ul><h2 id="_5-clear" tabindex="-1"><a class="header-anchor" href="#_5-clear" aria-hidden="true">#</a> 5.clear</h2><p>我们这里设计三个兄弟元素，对前两个元素进行<code>float</code>的浮动属性设置，看下效果</p><figure><img src="https://i0.hdslb.com/bfs/album/d25085f2343f9c84051968881b615aa725ac8b8f.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>由于box1的浮动，导致box3位置上移也就是box3受到了box1浮动的影响，位置发生了改变（注意，这里文字并没有被覆盖，这个就是“文字环绕”的问题）</p><p>如果我们不希望某个元素因为其他元素浮动的影响而改变位置，可以通过<code>clear</code>属性来清除浮动元素对当前元素所产生的影响</p><p><code>clear</code>作用：清除浮动元素对当前元素所产生的影响（本质是为元素添加一个<code>margin-top</code>属性，值由浏览器自动计算）</p><p>语法：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">选择器</span> <span class="token punctuation">{</span> <span class="token property">clear</span><span class="token punctuation">:</span> 属性值<span class="token punctuation">;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>属性值</th><th>描述</th></tr></thead><tbody><tr><td>left</td><td>不允许左侧有浮动元素（清除左侧浮动元素对当前元素的影响）</td></tr><tr><td>right</td><td>不允许右侧有浮动元素（清除右侧浮动元素对当前元素的影响）</td></tr><tr><td>both</td><td>清除两侧中影响较大一侧元素的影响（注意，这里不是同时清除两侧的影响）</td></tr></tbody></table><p>我们实际工作中，几乎只用 <code>clear: both;</code></p><p>清除浮动的策略是：闭合浮动。</p><figure><img src="https://i0.hdslb.com/bfs/album/482e25bf375df1a8754999ca878557795ef5916d.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_6-清除浮动方法" tabindex="-1"><a class="header-anchor" href="#_6-清除浮动方法" aria-hidden="true">#</a> 6.清除浮动方法</h2><ol><li>额外标签法也称为隔墙法，是 W3C 推荐的做法。(实际开发不推荐)</li><li>父级添加 overflow 属性</li><li>父级添加 after 伪元素</li><li>父级添加 双伪元素</li></ol><h2 id="_7-清除浮动-——-额外标签法" tabindex="-1"><a class="header-anchor" href="#_7-清除浮动-——-额外标签法" aria-hidden="true">#</a> 7.清除浮动 —— 额外标签法</h2><p>额外标签法也称为隔墙法，是 W3C 推荐的做法。</p><p>额外标签法会在浮动元素末尾添加一个空的标签。例如 <code>&lt;div style=&quot;clear: both&quot;&gt;&lt;/div&gt;</code>，或者其他标签（如 <code>&lt;br&gt;</code> 等）。</p><ul><li>优点： 通俗易懂，书写方便</li><li>缺点： 添加许多无意义的标签，结构化较差</li></ul><p>注意： 要求这个新的空标签必须是<strong>块级元素</strong>。</p><p>总结：</p><ul><li>清除浮动本质是？</li></ul><p>清除浮动的本质是清除浮动元素脱离标准流造成的影响。</p><ul><li>清除浮动策略是？</li></ul><p>闭合浮动。只让浮动在父盒子内部影响，不影响父盒子外面的其他盒子。</p><ul><li>额外标签法？</li></ul><p><strong>隔墙法，就是在最后一个浮动的子元素后面添加一个额外空标签（块级标签），添加清除浮动样式。</strong></p><p>实际工作可能会遇到，但是不常用。</p><figure><img src="https://i0.hdslb.com/bfs/album/30becfe12a0e171a34a9e8db15b4409ea8f65554.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_8-清除浮动-——-父级添加-overflow" tabindex="-1"><a class="header-anchor" href="#_8-清除浮动-——-父级添加-overflow" aria-hidden="true">#</a> 8.清除浮动 —— 父级添加 overflow</h2><p>可以给父级添加 <code>overflow</code> 属性，将其属性值设置为 <code>hidden</code>、 <code>auto</code> 或 <code>scroll</code>。</p><p>子不教，父之过，注意是给父元素添加代码。</p><ul><li>优点：代码简洁</li><li>缺点：无法显示溢出的部分</li></ul><figure><img src="https://i0.hdslb.com/bfs/album/e23ffa49c186f2edb08208ec3f391d6bb3dc7bb0.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_9-清除动-——-after-伪元素法" tabindex="-1"><a class="header-anchor" href="#_9-清除动-——-after-伪元素法" aria-hidden="true">#</a> 9.清除动 —— ::after 伪元素法</h2><p><code>::after</code> 方式是额外标签法的升级版，也是给父元素添加代码。</p><p>原理：自动在父盒子里的末尾添加一个 行内盒子，我们将它转换为 块级盒子，就间接实现了额外标签法。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.clearfix::after</span> <span class="token punctuation">{</span>
	<span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
	<span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
	<span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：类名不一定非要是 clearfix，但是还是推荐这么写以提高可读性。</p><ul><li>优点：没有增加标签，结构更简单</li><li>缺点：需要单独照顾低版本浏览器</li><li>代表网站： 百度、淘宝网、网易等</li></ul><figure><img src="https://i0.hdslb.com/bfs/album/a854b5157e221b7dc8bcf08959dc0daf8088fd84.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>Q1：这里使用了一个伪元素选择器</strong><code>::after</code><strong>，那有人会问了，跟在box2下直接定义一个box3有什么区别呢？</strong></p><p>A：我们知道，网页的结构思想是：结构+表现+行为。在box2下直接定义一个box3，属于结构；而使用伪元素选择器，属于表现</p><p>而高度塌陷问题属于表现问题，所以在css中定义<code>::after</code>更符合网页的编程思想</p><p><strong>Q2：为什么需要使用</strong><code>display: block</code><strong>呢？</strong></p><p>A：因为默认情况下，<code>::after</code>伪元素是一个行内元素，如果不转为块元素，将仍然撑不起box1的高度</p><h2 id="_10-清除浮动-——-双伪元素清除浮动" tabindex="-1"><a class="header-anchor" href="#_10-清除浮动-——-双伪元素清除浮动" aria-hidden="true">#</a> 10.清除浮动 —— 双伪元素清除浮动</h2><p>在前面说过垂直布局中边距重叠的问题：相邻的垂直方向外边距会发生重叠现象</p><figure><img src="https://i0.hdslb.com/bfs/album/13849d664b6d535a4414241cbeba62df09cabc56.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>如上图所示，子元素设置了一个<code>margin-top</code>之后，父元素跟随子元素一起进行了移动</p><p>即我们之前说的父子元素间相邻外边距，子元素会传递给父元素（上外边距）</p><p>可以用刚才说的伪元素选择器啊</p><p>好，我们先来看下效果</p><figure><img src="https://i0.hdslb.com/bfs/album/d70a7ba96684a0ad1d06d0cecc59d8ad4318eedc.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>貌似是没有任何变化，到底是什么地方不对呢？</p><p>我们再来回顾下使用<code>after</code>伪元素的心路历程：</p><ul><li><p>使用无内容的box3撑起box1 =&gt; 表现代替结构（<code>::after</code>代替box3）</p></li><li><p><code>clear</code>清除浮动对元素产生的影响（还记得<code>clear</code>的原理么？）</p></li></ul><p>其实就是给元素设置了一个<code>margin-top</code>属性，不过这个在开发者工具中是看不到的</p><p>既然如此，就相当于在box2下面添加一个box3，然后给box3设置一个<code>margin-top</code>属性</p><p>到此为止，</p><p>∵ 相邻的垂直方向外边距 这个条件仍然满足</p><p>∴ 会发生重叠现象这个结论也依然成立</p><p>具体点就是，父子元素间相邻外边距，子元素会传递给父元素（上外边距），表现为box1和box2同步往下移动</p><p>那我们应该怎么做才能解决这个问题？</p><p>当然是让两个元素垂直外边距不相邻啊</p><figure><img src="https://i0.hdslb.com/bfs/album/9d74fadb9013339de1fa2c8c32dfc8adb08f99b8.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>我们用了<code>before</code>伪元素选择器，目的当然是让box1和box2的外边距不相邻，但是好像并没有效果</p><p>我们再换成<code>display: inline-block</code>属性看看</p><figure><img src="https://i0.hdslb.com/bfs/album/3381254561f84eb6a4f1dcef017de4da8655eb04.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>好像是解决了父元素布局的问题，但是子元素怎么还往下跑了一段距离？ 是谁给的勇气？</p><p>因为<code>inline-block</code>兼顾行内元素和块元素的特点，既可以设置宽高也不独占一行</p><p>在没有设置宽高时，会存在一个默认高度，所以<code>inline-block</code>仍然行不通</p><p>还有一个属性，<code>display: table</code></p><figure><img src="https://i0.hdslb.com/bfs/album/a72aad33407c91c8e96163f2efc13a51497d3dd7.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>Q1：为什么没有使用clear属性？</strong></p><p>A：不是说了吗？<code>clear</code>是为了清除浮动对布局的影响，我们现在没有浮动的元素啊，我们要讨论的也不是浮动的问题</p><p><strong>Q2：display不是还有一个</strong><code>none</code><strong>属性么，为什么不用呢？</strong></p><p>A：<code>none</code>属性是不占据位置，但是也不能让元素相邻的外边距分离啊</p><p><strong>Q3：为什么</strong><code>table</code>值就可以呢？</p><p>A：这个也是开启BFC的方法，而且，应该牢记的是，元素开启BFC后的其中一个特点就是 父子元素外边距不会重叠。当然，这里也需要合理选择伪元素选择器，使其外边距不相邻才行</p><p>另外，总结一下：</p><ul><li><p>高度塌陷问题，一般用<code>::after</code></p></li><li><p>外边距重叠问题，一般用<code>::before</code></p></li></ul><p><code>clearfix</code> 这个样式就可以同时解决高度塌陷和外边距重叠的问题</p><p>当你在遇到这些问题时，直接使用<code>clearfix</code>这个类即可，他就可以帮你轻松搞定css中的两大难题</p><p>额外标签法的升级版，也是给给父元素添加代码。</p><p>原理：自动在父盒子里的两端添加两个行内盒子，并把它们转换为 表格，间接实现了额外标签法。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.clearfix::before,
.clearfix::after</span><span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> table<span class="token punctuation">;</span>
    <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中<code>.clearfix::before</code>是为了解决外边距重叠问题</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.clearfix::before</span><span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> table<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>.clearfix::after</code>是为了解决高度塌陷问题</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.clearfix::after</span><span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> table<span class="token punctuation">;</span>
    <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://i0.hdslb.com/bfs/album/860ffdab3225425988275d40550df694e7b5cb57.png" alt="image-20220726232650221" tabindex="0" loading="lazy"><figcaption>image-20220726232650221</figcaption></figure><h2 id="_11-清除浮动总结" tabindex="-1"><a class="header-anchor" href="#_11-清除浮动总结" aria-hidden="true">#</a> 11.清除浮动总结</h2><p>为什么需要清除浮动？</p><ul><li>父级没高度</li><li>子盒子浮动了</li><li>影响下面布局了，我们就应该清除浮动了</li></ul><table><thead><tr><th>清除浮动的方式</th><th>优点</th><th>缺点</th></tr></thead><tbody><tr><td>额外标签法（隔墙法）</td><td>通俗易懂，书写方便</td><td>添加许多无意义的标签，结构化较差</td></tr><tr><td>父级 overflow: hidden;</td><td>书写简单</td><td>溢出隐藏</td></tr><tr><td>父级 after 伪元素</td><td>结构语义化正确</td><td>由于 IE6~7 不支持 :after，兼容性问题</td></tr><tr><td>父级双伪元素</td><td>结构语义化正确</td><td>由于 IE6~7 不支持 :after，兼容性问题</td></tr></tbody></table>`,131),c=[t];function p(l,o){return e(),n("div",null,c)}const u=a(s,[["render",p],["__file","10.html.vue"]]);export{u as default};
