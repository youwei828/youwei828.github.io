const e=JSON.parse('{"key":"v-d3618b3a","path":"/front_end/front_end_framework/vue3/02.html","title":"02 【setup reactive ref】","lang":"zh-CN","frontmatter":{"description":"02 【setup reactive ref】 1.拉开序幕的setup 1.1 为什么使用 setup ？ 大型组件中选项的分离掩盖了潜在的逻辑问题。此外，在处理单个逻辑关注点时，我们必须不断地“跳转”相关代码的选项块。 如果能够将同一个逻辑关注点相关代码收集在一起会更好。而这正是组合式 API 使我们能够做到的。 通过创建 Vue 组件，我们可以将界面中重复的部分连同其功能一起提取为可重用的代码段。然而，光靠这一点可能并不够，尤其是当你的应用变得非常大的时候，共享和重用代码变得尤为重要。 为了开始使用 组合式 API，我们首先需要一个可以实际使用它的地方。在 Vue 组件中，我们将此位置称为 setup。","head":[["meta",{"property":"og:url","content":"https://blog.dselegent.icu/front_end/front_end_framework/vue3/02.html"}],["meta",{"property":"og:site_name","content":"dselegent-blog"}],["meta",{"property":"og:title","content":"02 【setup reactive ref】"}],["meta",{"property":"og:description","content":"02 【setup reactive ref】 1.拉开序幕的setup 1.1 为什么使用 setup ？ 大型组件中选项的分离掩盖了潜在的逻辑问题。此外，在处理单个逻辑关注点时，我们必须不断地“跳转”相关代码的选项块。 如果能够将同一个逻辑关注点相关代码收集在一起会更好。而这正是组合式 API 使我们能够做到的。 通过创建 Vue 组件，我们可以将界面中重复的部分连同其功能一起提取为可重用的代码段。然而，光靠这一点可能并不够，尤其是当你的应用变得非常大的时候，共享和重用代码变得尤为重要。 为了开始使用 组合式 API，我们首先需要一个可以实际使用它的地方。在 Vue 组件中，我们将此位置称为 setup。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"dselegent"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"02 【setup reactive ref】\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"dselegent\\",\\"url\\":\\"https://blog.dselegent.icu\\"}]}"]]},"headers":[{"level":2,"title":"1.拉开序幕的setup","slug":"_1-拉开序幕的setup","link":"#_1-拉开序幕的setup","children":[{"level":3,"title":"1.1 为什么使用 setup ？","slug":"_1-1-为什么使用-setup","link":"#_1-1-为什么使用-setup","children":[]},{"level":3,"title":"1.2 基本使用","slug":"_1-2-基本使用","link":"#_1-2-基本使用","children":[]},{"level":3,"title":"1.3<script setup> 语法糖","slug":"_1-3-script-setup-语法糖","link":"#_1-3-script-setup-语法糖","children":[]}]},{"level":2,"title":"2.reactive函数","slug":"_2-reactive函数","link":"#_2-reactive函数","children":[]},{"level":2,"title":"3.ref函数","slug":"_3-ref函数","link":"#_3-ref函数","children":[{"level":3,"title":"3.1 基本使用","slug":"_3-1-基本使用","link":"#_3-1-基本使用","children":[]},{"level":3,"title":"3.2 ref的响应式","slug":"_3-2-ref的响应式","link":"#_3-2-ref的响应式","children":[]},{"level":3,"title":"3.3ref 在模板中的解包#","slug":"_3-3ref-在模板中的解包","link":"#_3-3ref-在模板中的解包","children":[]},{"level":3,"title":"3.4 ref的解包","slug":"_3-4-ref的解包","link":"#_3-4-ref的解包","children":[]},{"level":3,"title":"3.5 响应性语法糖 (实验性功能)","slug":"_3-5-响应性语法糖-实验性功能","link":"#_3-5-响应性语法糖-实验性功能","children":[]}]}],"git":{},"readingTime":{"minutes":12.02,"words":3607},"filePathRelative":"front_end/front_end_framework/vue3/02.md","excerpt":"<h1> 02 【setup reactive ref】</h1>\\n<h2> 1.拉开序幕的setup</h2>\\n<h3> 1.1 为什么使用 setup ？</h3>\\n<ul>\\n<li>\\n<p>大型组件中选项的分离掩盖了潜在的逻辑问题。此外，在处理单个逻辑关注点时，我们必须不断地“跳转”相关代码的选项块。 如果能够将同一个逻辑关注点相关代码收集在一起会更好。而这正是组合式 API 使我们能够做到的。</p>\\n</li>\\n<li>\\n<p>通过创建 Vue 组件，我们可以将界面中重复的部分连同其功能一起提取为可重用的代码段。然而，光靠这一点可能并不够，尤其是当你的应用变得非常大的时候，共享和重用代码变得尤为重要。</p>\\n</li>\\n<li>\\n<p>为了开始使用 组合式 API，我们首先需要一个可以实际使用它的地方。在 Vue 组件中，我们将此位置称为 setup。</p>\\n</li>\\n</ul>","autoDesc":true}');export{e as data};
