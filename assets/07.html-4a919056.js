const t=JSON.parse('{"key":"v-ace57518","path":"/front_end/front_end_framework/react/07.html","title":"07 【收集表单数据】","lang":"zh-CN","frontmatter":{"description":"07 【收集表单数据】 在 React 里，HTML 表单元素的工作方式和其他的 DOM 元素有些不同，这是因为表单元素通常会保持一些内部的 state。例如这个纯 HTML 表单只接受一个名称： &lt;form&gt; &lt;label&gt; 名字: &lt;input type=\\"text\\" name=\\"name\\" /&gt; &lt;/label&gt; &lt;input type=\\"submit\\" value=\\"提交\\" /&gt; &lt;/form&gt;","head":[["meta",{"property":"og:url","content":"https://blog.dselegent.icu/front_end/front_end_framework/react/07.html"}],["meta",{"property":"og:site_name","content":"dselegent-blog"}],["meta",{"property":"og:title","content":"07 【收集表单数据】"}],["meta",{"property":"og:description","content":"07 【收集表单数据】 在 React 里，HTML 表单元素的工作方式和其他的 DOM 元素有些不同，这是因为表单元素通常会保持一些内部的 state。例如这个纯 HTML 表单只接受一个名称： &lt;form&gt; &lt;label&gt; 名字: &lt;input type=\\"text\\" name=\\"name\\" /&gt; &lt;/label&gt; &lt;input type=\\"submit\\" value=\\"提交\\" /&gt; &lt;/form&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"dselegent"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"07 【收集表单数据】\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"dselegent\\",\\"url\\":\\"https://blog.dselegent.icu\\"}]}"]]},"headers":[{"level":2,"title":"状态属性","slug":"状态属性","link":"#状态属性","children":[]},{"level":2,"title":"1.受控组件","slug":"_1-受控组件","link":"#_1-受控组件","children":[]},{"level":2,"title":"2.非受控组件","slug":"_2-非受控组件","link":"#_2-非受控组件","children":[{"level":3,"title":"2.1 基本概念","slug":"_2-1-基本概念","link":"#_2-1-基本概念","children":[]},{"level":3,"title":"2.2 默认值","slug":"_2-2-默认值","link":"#_2-2-默认值","children":[]}]},{"level":2,"title":"3.标签变化","slug":"_3-标签变化","link":"#_3-标签变化","children":[{"level":3,"title":"3.1 textarea 标签","slug":"_3-1-textarea-标签","link":"#_3-1-textarea-标签","children":[]},{"level":3,"title":"3.2 select 标签","slug":"_3-2-select-标签","link":"#_3-2-select-标签","children":[]},{"level":3,"title":"3.3 文件 input 标签","slug":"_3-3-文件-input-标签","link":"#_3-3-文件-input-标签","children":[]}]}],"git":{},"readingTime":{"minutes":7.47,"words":2240},"filePathRelative":"front_end/front_end_framework/react/07.md","excerpt":"<h1> 07 【收集表单数据】</h1>\\n<p>在 React 里，HTML 表单元素的工作方式和其他的 DOM 元素有些不同，这是因为表单元素通常会保持一些内部的 state。例如这个纯 HTML 表单只接受一个名称：</p>\\n<div class=\\"language-html line-numbers-mode\\" data-ext=\\"html\\"><pre class=\\"language-html\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>form</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>label</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    名字:\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>input</span> <span class=\\"token attr-name\\">type</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>text<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">name</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>name<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token punctuation\\">/&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>label</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>input</span> <span class=\\"token attr-name\\">type</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>submit<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">value</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>提交<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token punctuation\\">/&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>form</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};
