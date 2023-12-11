const e=JSON.parse('{"key":"v-65564242","path":"/back_end/nodeJs/17.html","title":"17 【文件上传】","lang":"zh-CN","frontmatter":{"description":"17 【文件上传】 1.初始化准备 1.1 安装依赖 首先创建一个express-multer-upload工程项目，然后在项目中下好各种依赖包。 multer中间件 Multer 是一个 node.js 中间件，用于处理 multipart/form-data 类型的表单数据，它主要用于上传文件。 注意: Multer 不会处理任何非 multipart/form-data 类型的表单数据。","head":[["meta",{"property":"og:url","content":"https://blog.dselegent.icu/back_end/nodeJs/17.html"}],["meta",{"property":"og:site_name","content":"dselegent-blog"}],["meta",{"property":"og:title","content":"17 【文件上传】"}],["meta",{"property":"og:description","content":"17 【文件上传】 1.初始化准备 1.1 安装依赖 首先创建一个express-multer-upload工程项目，然后在项目中下好各种依赖包。 multer中间件 Multer 是一个 node.js 中间件，用于处理 multipart/form-data 类型的表单数据，它主要用于上传文件。 注意: Multer 不会处理任何非 multipart/form-data 类型的表单数据。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"dselegent"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"17 【文件上传】\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"dselegent\\",\\"url\\":\\"https://blog.dselegent.icu\\"}]}"]]},"headers":[{"level":2,"title":"1.初始化准备","slug":"_1-初始化准备","link":"#_1-初始化准备","children":[{"level":3,"title":"1.1 安装依赖","slug":"_1-1-安装依赖","link":"#_1-1-安装依赖","children":[]},{"level":3,"title":"1.2  项目结构划分","slug":"_1-2-项目结构划分","link":"#_1-2-项目结构划分","children":[]}]},{"level":2,"title":"2.multer上传逻辑","slug":"_2-multer上传逻辑","link":"#_2-multer上传逻辑","children":[{"level":3,"title":"2.1 multer配置","slug":"_2-1-multer配置","link":"#_2-1-multer配置","children":[]},{"level":3,"title":"2.2 upload上传逻辑","slug":"_2-2-upload上传逻辑","link":"#_2-2-upload上传逻辑","children":[]}]},{"level":2,"title":"3.编写控制器，定义路由","slug":"_3-编写控制器-定义路由","link":"#_3-编写控制器-定义路由","children":[{"level":3,"title":"3.1 编写控制器","slug":"_3-1-编写控制器","link":"#_3-1-编写控制器","children":[]},{"level":3,"title":"3.2 定义路由","slug":"_3-2-定义路由","link":"#_3-2-定义路由","children":[]}]},{"level":2,"title":"4.上传图片","slug":"_4-上传图片","link":"#_4-上传图片","children":[]},{"level":2,"title":"5.图片名称优化","slug":"_5-图片名称优化","link":"#_5-图片名称优化","children":[]},{"level":2,"title":"6.图片名称优化实现","slug":"_6-图片名称优化实现","link":"#_6-图片名称优化实现","children":[{"level":3,"title":"6.1 图片去重删除和重命名","slug":"_6-1-图片去重删除和重命名","link":"#_6-1-图片去重删除和重命名","children":[]},{"level":3,"title":"6.2 修改 uploadAvatar 接口","slug":"_6-2-修改-uploadavatar-接口","link":"#_6-2-修改-uploadavatar-接口","children":[]}]},{"level":2,"title":"7.最终测试","slug":"_7-最终测试","link":"#_7-最终测试","children":[{"level":3,"title":"7.1 第一次上传","slug":"_7-1-第一次上传","link":"#_7-1-第一次上传","children":[]},{"level":3,"title":"7.2 第二次上传","slug":"_7-2-第二次上传","link":"#_7-2-第二次上传","children":[]},{"level":3,"title":"7.3 第三次上传","slug":"_7-3-第三次上传","link":"#_7-3-第三次上传","children":[]}]},{"level":2,"title":"8.ajax上传","slug":"_8-ajax上传","link":"#_8-ajax上传","children":[]}],"git":{},"readingTime":{"minutes":7.49,"words":2246},"filePathRelative":"back_end/nodeJs/17.md","excerpt":"<h1> 17 【文件上传】</h1>\\n<h2> 1.初始化准备</h2>\\n<h3> 1.1 安装依赖</h3>\\n<p>首先创建一个<code>express-multer-upload</code>工程项目，然后在项目中下好各种依赖包。</p>\\n<p><strong>multer中间件</strong></p>\\n<p>Multer 是一个 node.js 中间件，用于处理 <code>multipart/form-data</code> 类型的表单数据，它主要用于上传文件。</p>\\n<p><strong>注意</strong>: Multer 不会处理任何非 <code>multipart/form-data</code> 类型的表单数据。</p>","autoDesc":true}');export{e as data};
