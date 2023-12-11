const t=JSON.parse('{"key":"v-1f949222","path":"/front_end/front_end_base/javascript/09.html","title":"09 【标准库之Math对象和String对象】","lang":"zh-CN","frontmatter":{"description":"09 【标准库之Math对象和String对象】 1.Math对象 Math是 JavaScript 的原生对象，提供各种数学功能。该对象不是构造函数，不能生成实例，所有的属性和方法都必须在Math对象上调用。 Math对象提供以下一些静态方法。 Math.abs()：绝对值 Math.ceil()：向上取整 Math.floor()：向下取整 Math.max()：最大值 Math.min()：最小值 Math.round()：四舍五入 Math.random()：随机数","head":[["meta",{"property":"og:url","content":"https://blog.dselegent.icu/front_end/front_end_base/javascript/09.html"}],["meta",{"property":"og:site_name","content":"dselegent-blog"}],["meta",{"property":"og:title","content":"09 【标准库之Math对象和String对象】"}],["meta",{"property":"og:description","content":"09 【标准库之Math对象和String对象】 1.Math对象 Math是 JavaScript 的原生对象，提供各种数学功能。该对象不是构造函数，不能生成实例，所有的属性和方法都必须在Math对象上调用。 Math对象提供以下一些静态方法。 Math.abs()：绝对值 Math.ceil()：向上取整 Math.floor()：向下取整 Math.max()：最大值 Math.min()：最小值 Math.round()：四舍五入 Math.random()：随机数"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"dselegent"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"09 【标准库之Math对象和String对象】\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"dselegent\\",\\"url\\":\\"https://blog.dselegent.icu\\"}]}"]]},"headers":[{"level":2,"title":"1.Math对象","slug":"_1-math对象","link":"#_1-math对象","children":[{"level":3,"title":"1.1 Math.abs()","slug":"_1-1-math-abs","link":"#_1-1-math-abs","children":[]},{"level":3,"title":"1.2 Math.max()，Math.min()","slug":"_1-2-math-max-math-min","link":"#_1-2-math-max-math-min","children":[]},{"level":3,"title":"1.3 Math.floor()，Math.ceil()","slug":"_1-3-math-floor-math-ceil","link":"#_1-3-math-floor-math-ceil","children":[]},{"level":3,"title":"1.4 Math.round()","slug":"_1-4-math-round","link":"#_1-4-math-round","children":[]},{"level":3,"title":"1.5 Math.random()","slug":"_1-5-math-random","link":"#_1-5-math-random","children":[]}]},{"level":2,"title":"2.String对象","slug":"_2-string对象","link":"#_2-string对象","children":[{"level":3,"title":"2.1 概述","slug":"_2-1-概述","link":"#_2-1-概述","children":[]},{"level":3,"title":"2.2 实例属性","slug":"_2-2-实例属性","link":"#_2-2-实例属性","children":[]},{"level":3,"title":"实例方法","slug":"实例方法","link":"#实例方法","children":[]},{"level":3,"title":"11.3.1 charAt() 方法","slug":"_11-3-1-charat-方法","link":"#_11-3-1-charat-方法","children":[]},{"level":3,"title":"11.3.2 substring()、substr() 和 slice() 方法","slug":"_11-3-2-substring-、substr-和-slice-方法","link":"#_11-3-2-substring-、substr-和-slice-方法","children":[]},{"level":3,"title":"11.3.3 toUpperCase() 和 toLowerCase() 方法","slug":"_11-3-3-touppercase-和-tolowercase-方法","link":"#_11-3-3-touppercase-和-tolowercase-方法","children":[]},{"level":3,"title":"11.3.4 indexOf()、includes()和lastIndexOf() 方法","slug":"_11-3-4-indexof-、includes-和lastindexof-方法","link":"#_11-3-4-indexof-、includes-和lastindexof-方法","children":[]},{"level":3,"title":"11.3.5 trim()、trimStart()、trimEnd() 方法","slug":"_11-3-5-trim-、trimstart-、trimend-方法","link":"#_11-3-5-trim-、trimstart-、trimend-方法","children":[]},{"level":3,"title":"11.3.6 match() 方法","slug":"_11-3-6-match-方法","link":"#_11-3-6-match-方法","children":[]},{"level":3,"title":"11.3.7 search() 方法和replace() 方法","slug":"_11-3-7-search-方法和replace-方法","link":"#_11-3-7-search-方法和replace-方法","children":[]},{"level":3,"title":"11.3.8 split() 方法","slug":"_11-3-8-split-方法","link":"#_11-3-8-split-方法","children":[]},{"level":3,"title":"11.3.9 concat() 方法","slug":"_11-3-9-concat-方法","link":"#_11-3-9-concat-方法","children":[]}]}],"git":{},"readingTime":{"minutes":10.55,"words":3165},"filePathRelative":"front_end/front_end_base/javascript/09.md","excerpt":"<h1> 09 【标准库之Math对象和String对象】</h1>\\n<h2> 1.Math对象</h2>\\n<p><code>Math</code>是 JavaScript 的原生对象，提供各种数学功能。该对象不是构造函数，不能生成实例，所有的属性和方法都必须在<code>Math</code>对象上调用。</p>\\n<p><code>Math</code>对象提供以下一些静态方法。</p>\\n<ul>\\n<li><code>Math.abs()</code>：绝对值</li>\\n<li><code>Math.ceil()</code>：向上取整</li>\\n<li><code>Math.floor()</code>：向下取整</li>\\n<li><code>Math.max()</code>：最大值</li>\\n<li><code>Math.min()</code>：最小值</li>\\n<li><code>Math.round()</code>：四舍五入</li>\\n<li><code>Math.random()</code>：随机数</li>\\n</ul>","autoDesc":true}');export{t as data};
