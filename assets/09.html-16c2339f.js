const n=JSON.parse('{"key":"v-df415b3c","path":"/back_end/database/mysql/09.html","title":"09 【子查询】","lang":"zh-CN","frontmatter":{"description":"09 【子查询】 子查询指一个查询语句嵌套在另一个查询语句内部的查询，这个特性从MySQL 4.1开始引入。 SQL 中子查询的使用大大增强了 SELECT 查询的能力，因为很多时候查询需要从结果集中获取数据，或者需要从同一个表中先计算得出一个数据结果，然后与这个数据结果（可能是某个标量，也可能是某个集合）进行比较。 先写结论：在SELECT中，除了GROUP BY 和 LIMIT之外，其他位置都可以声明子查询！ SELECT ....,....,....(存在聚合函数) FROM ... (LEFT / RIGHT)JOIN ....ON 多表的连接条件 (LEFT / RIGHT)JOIN ... ON .... WHERE 不包含聚合函数的过滤条件 GROUP BY ...,.... HAVING 包含聚合函数的过滤条件 ORDER BY ....,...(ASC / DESC ) LIMIT ...,....","head":[["meta",{"property":"og:url","content":"https://blog.dselegent.icu/back_end/database/mysql/09.html"}],["meta",{"property":"og:site_name","content":"dselegent-blog"}],["meta",{"property":"og:title","content":"09 【子查询】"}],["meta",{"property":"og:description","content":"09 【子查询】 子查询指一个查询语句嵌套在另一个查询语句内部的查询，这个特性从MySQL 4.1开始引入。 SQL 中子查询的使用大大增强了 SELECT 查询的能力，因为很多时候查询需要从结果集中获取数据，或者需要从同一个表中先计算得出一个数据结果，然后与这个数据结果（可能是某个标量，也可能是某个集合）进行比较。 先写结论：在SELECT中，除了GROUP BY 和 LIMIT之外，其他位置都可以声明子查询！ SELECT ....,....,....(存在聚合函数) FROM ... (LEFT / RIGHT)JOIN ....ON 多表的连接条件 (LEFT / RIGHT)JOIN ... ON .... WHERE 不包含聚合函数的过滤条件 GROUP BY ...,.... HAVING 包含聚合函数的过滤条件 ORDER BY ....,...(ASC / DESC ) LIMIT ...,...."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"dselegent"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"09 【子查询】\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"dselegent\\",\\"url\\":\\"https://blog.dselegent.icu\\"}]}"]]},"headers":[{"level":2,"title":"1. 需求分析与问题解决","slug":"_1-需求分析与问题解决","link":"#_1-需求分析与问题解决","children":[{"level":3,"title":"1.1 实际问题","slug":"_1-1-实际问题","link":"#_1-1-实际问题","children":[]},{"level":3,"title":"1.2 子查询的基本使用","slug":"_1-2-子查询的基本使用","link":"#_1-2-子查询的基本使用","children":[]},{"level":3,"title":"1.3 子查询的分类","slug":"_1-3-子查询的分类","link":"#_1-3-子查询的分类","children":[]}]},{"level":2,"title":"2. 单行子查询","slug":"_2-单行子查询","link":"#_2-单行子查询","children":[{"level":3,"title":"2.1 单行比较操作符","slug":"_2-1-单行比较操作符","link":"#_2-1-单行比较操作符","children":[]},{"level":3,"title":"2.2 代码示例","slug":"_2-2-代码示例","link":"#_2-2-代码示例","children":[]},{"level":3,"title":"2.3 HAVING 中的子查询","slug":"_2-3-having-中的子查询","link":"#_2-3-having-中的子查询","children":[]},{"level":3,"title":"2.4 CASE中的子查询","slug":"_2-4-case中的子查询","link":"#_2-4-case中的子查询","children":[]},{"level":3,"title":"2.5 子查询中的空值问题","slug":"_2-5-子查询中的空值问题","link":"#_2-5-子查询中的空值问题","children":[]},{"level":3,"title":"2.6 非法使用子查询","slug":"_2-6-非法使用子查询","link":"#_2-6-非法使用子查询","children":[]}]},{"level":2,"title":"3. 多行子查询","slug":"_3-多行子查询","link":"#_3-多行子查询","children":[{"level":3,"title":"3.1 多行比较操作符","slug":"_3-1-多行比较操作符","link":"#_3-1-多行比较操作符","children":[]},{"level":3,"title":"3.2 代码示例","slug":"_3-2-代码示例","link":"#_3-2-代码示例","children":[]},{"level":3,"title":"3.3 空值问题","slug":"_3-3-空值问题","link":"#_3-3-空值问题","children":[]}]},{"level":2,"title":"4. 相关子查询","slug":"_4-相关子查询","link":"#_4-相关子查询","children":[{"level":3,"title":"4.1 相关子查询执行流程","slug":"_4-1-相关子查询执行流程","link":"#_4-1-相关子查询执行流程","children":[]},{"level":3,"title":"4.2 代码示例","slug":"_4-2-代码示例","link":"#_4-2-代码示例","children":[]},{"level":3,"title":"4.3 EXISTS 与 NOT EXISTS关键字","slug":"_4-3-exists-与-not-exists关键字","link":"#_4-3-exists-与-not-exists关键字","children":[]},{"level":3,"title":"4.4 相关更新","slug":"_4-4-相关更新","link":"#_4-4-相关更新","children":[]},{"level":3,"title":"4.5 相关删除","slug":"_4-5-相关删除","link":"#_4-5-相关删除","children":[]}]},{"level":2,"title":"5. 抛一个思考题","slug":"_5-抛一个思考题","link":"#_5-抛一个思考题","children":[]},{"level":2,"title":"练习","slug":"练习","link":"#练习","children":[]}],"git":{},"readingTime":{"minutes":14.07,"words":4220},"filePathRelative":"back_end/database/mysql/09.md","excerpt":"<h1> 09 【子查询】</h1>\\n<p>子查询指一个查询语句嵌套在另一个查询语句内部的查询，这个特性从MySQL 4.1开始引入。</p>\\n<p>SQL 中子查询的使用大大增强了 SELECT 查询的能力，因为很多时候查询需要从结果集中获取数据，或者需要从同一个表中先计算得出一个数据结果，然后与这个数据结果（可能是某个标量，也可能是某个集合）进行比较。</p>\\n<p>先写结论：在SELECT中，除了GROUP BY 和 LIMIT之外，其他位置都可以声明子查询！</p>\\n<div class=\\"language-sql line-numbers-mode\\" data-ext=\\"sql\\"><pre class=\\"language-sql\\"><code><span class=\\"token keyword\\">SELECT</span> <span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">,</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">,</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">(</span>存在聚合函数<span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token keyword\\">FROM</span> <span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">LEFT</span> <span class=\\"token operator\\">/</span> <span class=\\"token keyword\\">RIGHT</span><span class=\\"token punctuation\\">)</span><span class=\\"token keyword\\">JOIN</span> <span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token keyword\\">ON</span> 多表的连接条件 \\n\\n<span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">LEFT</span> <span class=\\"token operator\\">/</span> <span class=\\"token keyword\\">RIGHT</span><span class=\\"token punctuation\\">)</span><span class=\\"token keyword\\">JOIN</span> <span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span> <span class=\\"token keyword\\">ON</span> <span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span>\\n\\n<span class=\\"token keyword\\">WHERE</span> 不包含聚合函数的过滤条件\\n\\n<span class=\\"token keyword\\">GROUP</span> <span class=\\"token keyword\\">BY</span> <span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">,</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span>\\n\\n<span class=\\"token keyword\\">HAVING</span> 包含聚合函数的过滤条件\\n\\n<span class=\\"token keyword\\">ORDER</span> <span class=\\"token keyword\\">BY</span> <span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">,</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">ASC</span> <span class=\\"token operator\\">/</span> <span class=\\"token keyword\\">DESC</span> <span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token keyword\\">LIMIT</span> <span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">,</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};