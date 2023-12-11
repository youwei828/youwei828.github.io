const e=JSON.parse('{"key":"v-6c396a59","path":"/front_end/js_advanced/webpack/04.html","title":"04 【优化】","lang":"zh-CN","frontmatter":{"description":"04 【优化】 1.Public Path(公共路径) webpack 提供一个非常有用的配置，该配置能帮助你为项目中的所有资源指定一个基础路径。它被称为公共路径(publicPath)。 在开发模式中，我们通常有一个 assets/ 文件夹，它往往存放在和首页一个级别的目录下。这样是挺方便；但是如果在生产环境下，你想把这些静态文件统一使用CDN加载，那该怎么办？ publicPath 配置公共路径，所有文件的引用将自动添加公共路径的绝对地址。","head":[["meta",{"property":"og:url","content":"https://blog.dselegent.icu/front_end/js_advanced/webpack/04.html"}],["meta",{"property":"og:site_name","content":"dselegent-blog"}],["meta",{"property":"og:title","content":"04 【优化】"}],["meta",{"property":"og:description","content":"04 【优化】 1.Public Path(公共路径) webpack 提供一个非常有用的配置，该配置能帮助你为项目中的所有资源指定一个基础路径。它被称为公共路径(publicPath)。 在开发模式中，我们通常有一个 assets/ 文件夹，它往往存放在和首页一个级别的目录下。这样是挺方便；但是如果在生产环境下，你想把这些静态文件统一使用CDN加载，那该怎么办？ publicPath 配置公共路径，所有文件的引用将自动添加公共路径的绝对地址。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"dselegent"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"04 【优化】\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"dselegent\\",\\"url\\":\\"https://blog.dselegent.icu\\"}]}"]]},"headers":[{"level":2,"title":"1.Public Path(公共路径)","slug":"_1-public-path-公共路径","link":"#_1-public-path-公共路径","children":[]},{"level":2,"title":"2.环境变量 Environment variable","slug":"_2-环境变量-environment-variable","link":"#_2-环境变量-environment-variable","children":[]},{"level":2,"title":"3.配置文件优化","slug":"_3-配置文件优化","link":"#_3-配置文件优化","children":[]},{"level":2,"title":"4.webpack模块与解析原理","slug":"_4-webpack模块与解析原理","link":"#_4-webpack模块与解析原理","children":[{"level":3,"title":"4.1 在webpack中何为模块","slug":"_4-1-在webpack中何为模块","link":"#_4-1-在webpack中何为模块","children":[]},{"level":3,"title":"4.2 模块的引入","slug":"_4-2-模块的引入","link":"#_4-2-模块的引入","children":[]},{"level":3,"title":"4.3 resolve配置","slug":"_4-3-resolve配置","link":"#_4-3-resolve配置","children":[]},{"level":3,"title":"4.4 外部扩展","slug":"_4-4-外部扩展","link":"#_4-4-外部扩展","children":[]},{"level":3,"title":"4.5 依赖图","slug":"_4-5-依赖图","link":"#_4-5-依赖图","children":[]}]},{"level":2,"title":"5.postcss处理css3兼容性前缀","slug":"_5-postcss处理css3兼容性前缀","link":"#_5-postcss处理css3兼容性前缀","children":[{"level":3,"title":"5.1 概述","slug":"_5-1-概述","link":"#_5-1-概述","children":[]},{"level":3,"title":"5.2 具体的应用","slug":"_5-2-具体的应用","link":"#_5-2-具体的应用","children":[]}]},{"level":2,"title":"6.使用TypeScript","slug":"_6-使用typescript","link":"#_6-使用typescript","children":[]},{"level":2,"title":"7.多页面应用","slug":"_7-多页面应用","link":"#_7-多页面应用","children":[{"level":3,"title":"7.1 entry 配置","slug":"_7-1-entry-配置","link":"#_7-1-entry-配置","children":[]},{"level":3,"title":"7.2 配置 index.html 模板","slug":"_7-2-配置-index-html-模板","link":"#_7-2-配置-index-html-模板","children":[]}]},{"level":2,"title":"8.tree shaking","slug":"_8-tree-shaking","link":"#_8-tree-shaking","children":[]},{"level":2,"title":"9.sideEffects","slug":"_9-sideeffects","link":"#_9-sideeffects","children":[]}],"git":{},"readingTime":{"minutes":29.96,"words":8989},"filePathRelative":"front_end/js_advanced/webpack/04.md","excerpt":"<h1> 04 【优化】</h1>\\n<h2> 1.Public Path(公共路径)</h2>\\n<p>webpack 提供一个非常有用的配置，该配置能帮助你为项目中的所有资源指定一个基础路径。它被称为<code>公共路径(publicPath)</code>。</p>\\n<p>在开发模式中，我们通常有一个 <code>assets/</code> 文件夹，它往往存放在和首页一个级别的目录下。这样是挺方便；但是如果在生产环境下，你想把这些静态文件统一使用CDN加载，那该怎么办？</p>\\n<p><code>publicPath </code>配置公共路径，所有文件的引用将自动添加公共路径的绝对地址。</p>","autoDesc":true}');export{e as data};
