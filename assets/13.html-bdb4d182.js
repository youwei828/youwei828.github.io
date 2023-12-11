const n=JSON.parse(`{"key":"v-5ebcaad6","path":"/front_end/js_advanced/es6/13.html","title":"13【Class的语法】","lang":"zh-CN","frontmatter":{"description":"13【Class的语法】 1.类的由来 JavaScript 语言中，生成实例对象的传统方法是通过构造函数。下面是一个例子。 function Point(x, y) { this.x = x; this.y = y; } Point.prototype.toString = function () { return '(' + this.x + ', ' + this.y + ')'; }; var p = new Point(1, 2);","head":[["meta",{"property":"og:url","content":"https://blog.dselegent.icu/front_end/js_advanced/es6/13.html"}],["meta",{"property":"og:site_name","content":"dselegent-blog"}],["meta",{"property":"og:title","content":"13【Class的语法】"}],["meta",{"property":"og:description","content":"13【Class的语法】 1.类的由来 JavaScript 语言中，生成实例对象的传统方法是通过构造函数。下面是一个例子。 function Point(x, y) { this.x = x; this.y = y; } Point.prototype.toString = function () { return '(' + this.x + ', ' + this.y + ')'; }; var p = new Point(1, 2);"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"dselegent"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"13【Class的语法】\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"dselegent\\",\\"url\\":\\"https://blog.dselegent.icu\\"}]}"]]},"headers":[{"level":2,"title":"1.类的由来","slug":"_1-类的由来","link":"#_1-类的由来","children":[]},{"level":2,"title":"2. Class的两种定义形式","slug":"_2-class的两种定义形式","link":"#_2-class的两种定义形式","children":[{"level":3,"title":"2.1 声明形式","slug":"_2-1-声明形式","link":"#_2-1-声明形式","children":[]},{"level":3,"title":"2.2 表达式形式","slug":"_2-2-表达式形式","link":"#_2-2-表达式形式","children":[]},{"level":3,"title":"2.3 表达式形式扩展","slug":"_2-3-表达式形式扩展","link":"#_2-3-表达式形式扩展","children":[]}]},{"level":2,"title":"3.constructor() 方法","slug":"_3-constructor-方法","link":"#_3-constructor-方法","children":[]},{"level":2,"title":"4.类的实例","slug":"_4-类的实例","link":"#_4-类的实例","children":[]},{"level":2,"title":"5.实例属性的新写法","slug":"_5-实例属性的新写法","link":"#_5-实例属性的新写法","children":[]},{"level":2,"title":"6.取值函数（getter）和存值函数（setter）","slug":"_6-取值函数-getter-和存值函数-setter","link":"#_6-取值函数-getter-和存值函数-setter","children":[{"level":3,"title":"6.1 getter","slug":"_6-1-getter","link":"#_6-1-getter","children":[]},{"level":3,"title":"6.2 setter","slug":"_6-2-setter","link":"#_6-2-setter","children":[]},{"level":3,"title":"6.3 es6中的使用","slug":"_6-3-es6中的使用","link":"#_6-3-es6中的使用","children":[]}]},{"level":2,"title":"7.实例属性、静态方法和静态属性","slug":"_7-实例属性、静态方法和静态属性","link":"#_7-实例属性、静态方法和静态属性","children":[{"level":3,"title":"7.1  实例属性","slug":"_7-1-实例属性","link":"#_7-1-实例属性","children":[]},{"level":3,"title":"7.2 静态方法","slug":"_7-2-静态方法","link":"#_7-2-静态方法","children":[]},{"level":3,"title":"7.3 静态属性","slug":"_7-3-静态属性","link":"#_7-3-静态属性","children":[]}]},{"level":2,"title":"8.私有方法和私有属性","slug":"_8-私有方法和私有属性","link":"#_8-私有方法和私有属性","children":[{"level":3,"title":"8.1 早期解决方案","slug":"_8-1-早期解决方案","link":"#_8-1-早期解决方案","children":[]},{"level":3,"title":"8.2 私有属性的正式写法","slug":"_8-2-私有属性的正式写法","link":"#_8-2-私有属性的正式写法","children":[]}]},{"level":2,"title":"9.类的注意点","slug":"_9-类的注意点","link":"#_9-类的注意点","children":[{"level":3,"title":"9.1 严格模式","slug":"_9-1-严格模式","link":"#_9-1-严格模式","children":[]},{"level":3,"title":"9.2 不存在提升","slug":"_9-2-不存在提升","link":"#_9-2-不存在提升","children":[]},{"level":3,"title":"9.3 name 属性","slug":"_9-3-name-属性","link":"#_9-3-name-属性","children":[]},{"level":3,"title":"9.4 this 的指向","slug":"_9-4-this-的指向","link":"#_9-4-this-的指向","children":[]}]}],"git":{},"readingTime":{"minutes":19.11,"words":5732},"filePathRelative":"front_end/js_advanced/es6/13.md","excerpt":"<h1> 13【Class的语法】</h1>\\n<h2> 1.类的由来</h2>\\n<p>JavaScript 语言中，生成实例对象的传统方法是通过构造函数。下面是一个例子。</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">function</span> <span class=\\"token function\\">Point</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">x<span class=\\"token punctuation\\">,</span> y</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>x <span class=\\"token operator\\">=</span> x<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>y <span class=\\"token operator\\">=</span> y<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token class-name\\">Point</span><span class=\\"token punctuation\\">.</span>prototype<span class=\\"token punctuation\\">.</span><span class=\\"token function-variable function\\">toString</span> <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">function</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">return</span> <span class=\\"token string\\">'('</span> <span class=\\"token operator\\">+</span> <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>x <span class=\\"token operator\\">+</span> <span class=\\"token string\\">', '</span> <span class=\\"token operator\\">+</span> <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>y <span class=\\"token operator\\">+</span> <span class=\\"token string\\">')'</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">var</span> p <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Point</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};