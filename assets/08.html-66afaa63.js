const e=JSON.parse('{"key":"v-e2ab0c7a","path":"/back_end/database/mysql/08.html","title":"08 【聚合函数与分组查询】","lang":"zh-CN","frontmatter":{"description":"08 【聚合函数与分组查询】 我们上一章讲到了 SQL 单行函数。实际上 SQL 函数还有一类，叫做聚合（或聚集、分组）函数，它是对一组数据进行汇总的函数，输入的是一组数据的集合，输出的是单个值。 1.聚合函数介绍 什么是聚合函数 聚合函数作用于一组数据，并对一组数据返回一个值。 image-20221020133737930","head":[["meta",{"property":"og:url","content":"https://blog.dselegent.icu/back_end/database/mysql/08.html"}],["meta",{"property":"og:site_name","content":"dselegent-blog"}],["meta",{"property":"og:title","content":"08 【聚合函数与分组查询】"}],["meta",{"property":"og:description","content":"08 【聚合函数与分组查询】 我们上一章讲到了 SQL 单行函数。实际上 SQL 函数还有一类，叫做聚合（或聚集、分组）函数，它是对一组数据进行汇总的函数，输入的是一组数据的集合，输出的是单个值。 1.聚合函数介绍 什么是聚合函数 聚合函数作用于一组数据，并对一组数据返回一个值。 image-20221020133737930"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"dselegent"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"08 【聚合函数与分组查询】\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"dselegent\\",\\"url\\":\\"https://blog.dselegent.icu\\"}]}"]]},"headers":[{"level":2,"title":"1.聚合函数介绍","slug":"_1-聚合函数介绍","link":"#_1-聚合函数介绍","children":[{"level":3,"title":"1.1 AVG和SUM函数","slug":"_1-1-avg和sum函数","link":"#_1-1-avg和sum函数","children":[]},{"level":3,"title":"1.2 MIN和MAX函数","slug":"_1-2-min和max函数","link":"#_1-2-min和max函数","children":[]},{"level":3,"title":"1.3 COUNT函数","slug":"_1-3-count函数","link":"#_1-3-count函数","children":[]}]},{"level":2,"title":"2. GROUP BY","slug":"_2-group-by","link":"#_2-group-by","children":[{"level":3,"title":"2.1 基本使用","slug":"_2-1-基本使用","link":"#_2-1-基本使用","children":[]},{"level":3,"title":"2.2 使用多个列分组","slug":"_2-2-使用多个列分组","link":"#_2-2-使用多个列分组","children":[]},{"level":3,"title":"2.3 GROUP BY中使用WITH ROLLUP","slug":"_2-3-group-by中使用with-rollup","link":"#_2-3-group-by中使用with-rollup","children":[]},{"level":3,"title":"2.4 结论","slug":"_2-4-结论","link":"#_2-4-结论","children":[]}]},{"level":2,"title":"3. HAVING","slug":"_3-having","link":"#_3-having","children":[{"level":3,"title":"3.1 基本使用","slug":"_3-1-基本使用","link":"#_3-1-基本使用","children":[]},{"level":3,"title":"3.2 WHERE和HAVING的对比","slug":"_3-2-where和having的对比","link":"#_3-2-where和having的对比","children":[]}]},{"level":2,"title":"4. SELECT的执行过程","slug":"_4-select的执行过程","link":"#_4-select的执行过程","children":[{"level":3,"title":"4.1 查询的结构","slug":"_4-1-查询的结构","link":"#_4-1-查询的结构","children":[]},{"level":3,"title":"4.2 SELECT执行顺序","slug":"_4-2-select执行顺序","link":"#_4-2-select执行顺序","children":[]},{"level":3,"title":"4.3 SQL 的执行原理","slug":"_4-3-sql-的执行原理","link":"#_4-3-sql-的执行原理","children":[]}]},{"level":2,"title":"5.笔记","slug":"_5-笔记","link":"#_5-笔记","children":[]}],"git":{},"readingTime":{"minutes":10.25,"words":3076},"filePathRelative":"back_end/database/mysql/08.md","excerpt":"<h1> 08 【聚合函数与分组查询】</h1>\\n<p>我们上一章讲到了 SQL 单行函数。实际上 SQL 函数还有一类，叫做聚合（或聚集、分组）函数，它是对一组数据进行汇总的函数，输入的是一组数据的集合，输出的是单个值。</p>\\n<h2> 1.聚合函数介绍</h2>\\n<ul>\\n<li><strong>什么是聚合函数</strong></li>\\n</ul>\\n<p>聚合函数作用于一组数据，并对一组数据返回一个值。</p>\\n<figure><img src=\\"https://i0.hdslb.com/bfs/album/0c825ef5012603764fac185b18d2618c36221385.png\\" alt=\\"image-20221020133737930\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20221020133737930</figcaption></figure>","autoDesc":true}');export{e as data};
