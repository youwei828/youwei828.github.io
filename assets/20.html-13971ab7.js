const e=JSON.parse('{"key":"v-513357c8","path":"/front_end/front_end_base/html_css/20.html","title":"20 【rem适配布局】","lang":"zh-CN","frontmatter":{"description":"20 【rem适配布局】 【思考】 页面布局文字能否随着屏幕大小变化而变化？ 流式布局和 flex 布局主要针对于宽度布局，那高度如何设置？ 怎么样让屏幕发生变化的时候元素高度和宽度等比例缩放？ 1.rem单位 rem（root em）是一个相对单位，类似于 em，em 是父元素字体大小。 不同的是 rem 的基准是相对于 html 元素的字体大小。 比如，根元素（html）设置 font-size=12px，非根元素设置 width: 2rem; 则换成 px 表示就是 24px。","head":[["meta",{"property":"og:url","content":"https://blog.dselegent.icu/front_end/front_end_base/html_css/20.html"}],["meta",{"property":"og:site_name","content":"dselegent-blog"}],["meta",{"property":"og:title","content":"20 【rem适配布局】"}],["meta",{"property":"og:description","content":"20 【rem适配布局】 【思考】 页面布局文字能否随着屏幕大小变化而变化？ 流式布局和 flex 布局主要针对于宽度布局，那高度如何设置？ 怎么样让屏幕发生变化的时候元素高度和宽度等比例缩放？ 1.rem单位 rem（root em）是一个相对单位，类似于 em，em 是父元素字体大小。 不同的是 rem 的基准是相对于 html 元素的字体大小。 比如，根元素（html）设置 font-size=12px，非根元素设置 width: 2rem; 则换成 px 表示就是 24px。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"dselegent"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"20 【rem适配布局】\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"dselegent\\",\\"url\\":\\"https://blog.dselegent.icu\\"}]}"]]},"headers":[{"level":2,"title":"1.rem单位","slug":"_1-rem单位","link":"#_1-rem单位","children":[]},{"level":2,"title":"2.媒体查询","slug":"_2-媒体查询","link":"#_2-媒体查询","children":[{"level":3,"title":"2.1 什么是媒体查询","slug":"_2-1-什么是媒体查询","link":"#_2-1-什么是媒体查询","children":[]},{"level":3,"title":"2.2 语法规范","slug":"_2-2-语法规范","link":"#_2-2-语法规范","children":[]},{"level":3,"title":"2.3 mediatype 查询类型","slug":"_2-3-mediatype-查询类型","link":"#_2-3-mediatype-查询类型","children":[]},{"level":3,"title":"2.4 关键字","slug":"_2-4-关键字","link":"#_2-4-关键字","children":[]},{"level":3,"title":"2.5 媒体特性","slug":"_2-5-媒体特性","link":"#_2-5-媒体特性","children":[]}]},{"level":2,"title":"3.媒体查询+rem实现元素动态大小变化","slug":"_3-媒体查询-rem实现元素动态大小变化","link":"#_3-媒体查询-rem实现元素动态大小变化","children":[]},{"level":2,"title":"4.引入资源（理解）","slug":"_4-引入资源-理解","link":"#_4-引入资源-理解","children":[]},{"level":2,"title":"5.rem适配方案介绍","slug":"_5-rem适配方案介绍","link":"#_5-rem适配方案介绍","children":[{"level":3,"title":"5.1 rem实际开发适配方案","slug":"_5-1-rem实际开发适配方案","link":"#_5-1-rem实际开发适配方案","children":[]},{"level":3,"title":"5.2 rem适配方案技术使用（市场主流）","slug":"_5-2-rem适配方案技术使用-市场主流","link":"#_5-2-rem适配方案技术使用-市场主流","children":[]}]},{"level":2,"title":"6.rem实际开发适配方案1","slug":"_6-rem实际开发适配方案1","link":"#_6-rem实际开发适配方案1","children":[]},{"level":2,"title":"7.rem适配方案2","slug":"_7-rem适配方案2","link":"#_7-rem适配方案2","children":[{"level":3,"title":"7.1 简洁高效的rem适配方案flexible.js","slug":"_7-1-简洁高效的rem适配方案flexible-js","link":"#_7-1-简洁高效的rem适配方案flexible-js","children":[]},{"level":3,"title":"7.2 使用适配方案2制作苏宁移动端首页","slug":"_7-2-使用适配方案2制作苏宁移动端首页","link":"#_7-2-使用适配方案2制作苏宁移动端首页","children":[]}]},{"level":2,"title":"8.rem适配方案3","slug":"_8-rem适配方案3","link":"#_8-rem适配方案3","children":[]}],"git":{},"readingTime":{"minutes":12.51,"words":3754},"filePathRelative":"front_end/front_end_base/html_css/20.md","excerpt":"<h1> 20 【rem适配布局】</h1>\\n<p>【思考】</p>\\n<ol>\\n<li>页面布局文字能否随着屏幕大小变化而变化？</li>\\n<li>流式布局和 flex 布局主要针对于宽度布局，那高度如何设置？</li>\\n<li>怎么样让屏幕发生变化的时候元素高度和宽度等比例缩放？</li>\\n</ol>\\n<h2> 1.rem单位</h2>\\n<p><code>rem</code>（root em）是一个相对单位，类似于 <code>em</code>，em 是父元素字体大小。</p>\\n<p>不同的是 rem 的基准是<strong>相对于 html 元素的字体大小</strong>。</p>\\n<p>比如，根元素（html）设置 <code>font-size=12px</code>，非根元素设置 <code>width: 2rem;</code> 则换成 px 表示就是 24px。</p>","autoDesc":true}');export{e as data};
