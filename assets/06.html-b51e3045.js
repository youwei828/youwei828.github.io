import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as p,c,a as n,b as t,d as e,e as a}from"./app-7226743f.js";const i={},u=n("h1",{id:"_06-【uniapp生命周期】",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_06-【uniapp生命周期】","aria-hidden":"true"},"#"),t(" 06 【uniapp生命周期】")],-1),d=n("p",null,"生命周期的概念：一个对象从创建、运行、销毁的整个过程被成为生命周期。",-1),r=n("p",null,"生命周期函数：在生命周期中每个阶段会伴随着每一个函数的触发，这些函数被称为生命周期函数。",-1),k=n("h2",{id:"_1-应用生命周期",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-应用生命周期","aria-hidden":"true"},"#"),t(" 1.应用生命周期")],-1),h={href:"https://uniapp.dcloud.net.cn/collocation/App.html#applifecycle",target:"_blank",rel:"noopener noreferrer"},_=a(`<p><code>uni-app</code> 支持如下应用生命周期函数：</p><table><thead><tr><th style="text-align:left;">函数名</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">onLaunch</td><td style="text-align:left;">当<code>uni-app</code> 初始化完成时触发（全局只触发一次）</td></tr><tr><td style="text-align:left;">onShow</td><td style="text-align:left;">当 <code>uni-app</code> 启动，或从后台进入前台显示</td></tr><tr><td style="text-align:left;">onHide</td><td style="text-align:left;">当 <code>uni-app</code> 从前台进入后台</td></tr><tr><td style="text-align:left;">onError</td><td style="text-align:left;">当 <code>uni-app</code> 报错时触发</td></tr></tbody></table><p><strong>示例代码</strong></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
	<span class="token comment">// 只能在App.vue里监听应用的生命周期</span>
	<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
		<span class="token function-variable function">onLaunch</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;App Launch&#39;</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token function-variable function">onShow</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;App Show&#39;</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token function-variable function">onHide</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;App Hide&#39;</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function-variable function">onError</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;App Err&#39;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
	<span class="token comment">/*每个页面公共css */</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>代码分析：</strong></p><ul><li>第一次加载页面时会调用<code>onLaunch</code> ，<code>onShow</code> 打印<code>App Launch</code>，<code>App Show</code></li><li>当你在浏览器离开页面，去查看其它页面，或者其它应用会触发<code>onHide</code>，在回来查看该页面时触发<code>onShow</code> ，打印<code>App Hide</code>，<code>App Show</code></li><li>我们手动把<code>onShow</code>方法里面的<code>console.log(‘App Show’) </code>改为<code>consol.log(‘App Show’) </code>去掉一个<code>e</code>字母，这样会导致报错，这个时候我们<code>onError</code>方法就可以监听到错误</li></ul><p><strong>注意</strong></p>`,7),g=n("li",null,[n("strong",null,[t("应用生命周期仅可在"),n("code",null,"App.vue"),t("中监听，在其它页面监听无效")]),t("。")],-1),f=n("code",null,"uni.getLaunchOptionsSync",-1),v={href:"https://uniapp.dcloud.net.cn/api/plugins/getLaunchOptionsSync.html#getlaunchoptionssync",target:"_blank",rel:"noopener noreferrer"},b={href:"https://ask.dcloud.net.cn/article/35942",target:"_blank",rel:"noopener noreferrer"},y=n("li",null,[n("code",null,"App.vue"),t(" 不能写模板")],-1),x=n("li",null,"onPageNotFound 页面实际上已经打开了（比如通过分享卡片、小程序码）且发现页面不存在，才会触发，api 跳转不存在的页面不会触发（如 uni.navigateTo）",-1),m=n("h2",{id:"_2-页面生命周期",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2-页面生命周期","aria-hidden":"true"},"#"),t(" 2.页面生命周期")],-1),w={href:"https://uniapp.dcloud.net.cn/tutorial/page.html#lifecycle",target:"_blank",rel:"noopener noreferrer"},S=n("p",null,[n("code",null,"uni-app"),t(" 支持如下页面生命周期函数：")],-1),L=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"left"}},"函数名"),n("th",{style:{"text-align":"left"}},"说明"),n("th",{style:{"text-align":"left"}},"平台差异说明"),n("th",{style:{"text-align":"left"}},"最低版本")])],-1),A=n("td",{style:{"text-align":"left"}},"onLoad",-1),j={style:{"text-align":"left"}},H={href:"https://uniapp.dcloud.net.cn/api/router#navigateto",target:"_blank",rel:"noopener noreferrer"},V=n("td",{style:{"text-align":"left"}},null,-1),E=n("td",{style:{"text-align":"left"}},null,-1),N=n("tr",null,[n("td",{style:{"text-align":"left"}},"onShow"),n("td",{style:{"text-align":"left"}},"监听页面显示。页面每次出现在屏幕上都触发，包括从下级页面点返回露出当前页面"),n("td",{style:{"text-align":"left"}}),n("td",{style:{"text-align":"left"}})],-1),O=n("tr",null,[n("td",{style:{"text-align":"left"}},"onReady"),n("td",{style:{"text-align":"left"}},"监听页面初次渲染完成。注意如果渲染速度快，会在页面进入动画完成前触发"),n("td",{style:{"text-align":"left"}}),n("td",{style:{"text-align":"left"}})],-1),D=n("tr",null,[n("td",{style:{"text-align":"left"}},"onHide"),n("td",{style:{"text-align":"left"}},"监听页面隐藏"),n("td",{style:{"text-align":"left"}}),n("td",{style:{"text-align":"left"}})],-1),M=n("tr",null,[n("td",{style:{"text-align":"left"}},"onUnload"),n("td",{style:{"text-align":"left"}},"监听页面卸载"),n("td",{style:{"text-align":"left"}}),n("td",{style:{"text-align":"left"}})],-1),R=a(`<p><code>index.vue</code>页面里面定义的页面生命周期函数如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Hello&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token parameter">option</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;页面加载了&#39;</span><span class="token punctuation">,</span> option<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">onShow</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;页面显示了&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">onReady</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;页面初次渲染完成了&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">onHide</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;页面隐藏了&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">onUpload</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;页面卸载了&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>代码分析：</strong></p><ul><li>第一次加载首页，触发onLoad，onShow，onReady方法，依次打印页面加载了，页面显示了，页面初次渲染完成了</li><li>当你在浏览器离开页面，去查看其它页面，或者其它应用，会触发onHide方法，打印页面隐藏了，在回来查看该页面时触发onShow方法，打印页面显示了。可以发现印页面加载了，页面初次渲染完成了都不在打印，证明onLoad，onReady方法只触发一次，而onShow，onHide方法多次触发</li></ul><p>当我们取tabbr底部栏从首页切换到其它页面，会触发onHide方法，打印页面隐藏了。再次会到首页，触发onShow方法，打印页面显示了</p><p>tabbar的提示：</p><div class="language-tex line-numbers-mode" data-ext="tex"><pre class="language-tex"><code>tabbar 切换第一次加载时可能渲染不及时，可以在每个tabbar页面的onLoad生命周期里先弹出一个等待雪花（hello uni-app使用了此方式）
tabbar 的页面展现过一次后就保留在内存中，再次切换 tabbar 页面，只会触发每个页面的onShow，不会再触发onLoad
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-组件生命周期" tabindex="-1"><a class="header-anchor" href="#_3-组件生命周期" aria-hidden="true">#</a> 3.组件生命周期</h2><p><code>uni-app</code> 组件支持的生命周期，与vue标准组件的生命周期相同。这里没有页面级的onLoad等生命周期：</p>`,9),T=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"left"}},"函数名"),n("th",{style:{"text-align":"left"}},"说明"),n("th",{style:{"text-align":"left"}},"平台差异说明"),n("th",{style:{"text-align":"left"}},"最低版本")])],-1),U=n("td",{style:{"text-align":"left"}},"beforeCreate",-1),B={style:{"text-align":"left"}},C={href:"https://cn.vuejs.org/v2/api/#beforeCreate",target:"_blank",rel:"noopener noreferrer"},I=n("td",{style:{"text-align":"left"}},null,-1),P=n("td",{style:{"text-align":"left"}},null,-1),F=n("td",{style:{"text-align":"left"}},"created",-1),$={style:{"text-align":"left"}},q={href:"https://cn.vuejs.org/v2/api/#created",target:"_blank",rel:"noopener noreferrer"},z=n("td",{style:{"text-align":"left"}},null,-1),G=n("td",{style:{"text-align":"left"}},null,-1),J=n("td",{style:{"text-align":"left"}},"beforeMount",-1),K={style:{"text-align":"left"}},Q={href:"https://cn.vuejs.org/v2/api/#beforeMount",target:"_blank",rel:"noopener noreferrer"},W=n("td",{style:{"text-align":"left"}},null,-1),X=n("td",{style:{"text-align":"left"}},null,-1),Y=n("td",{style:{"text-align":"left"}},"mounted",-1),Z={style:{"text-align":"left"}},nn={href:"https://cn.vuejs.org/v2/api/#mounted",target:"_blank",rel:"noopener noreferrer"},tn=n("code",null,"$nextTick",-1),sn={href:"https://cn.vuejs.org/v2/api/#Vue-nextTick",target:"_blank",rel:"noopener noreferrer"},en=n("td",{style:{"text-align":"left"}},null,-1),an=n("td",{style:{"text-align":"left"}},null,-1),on=n("td",{style:{"text-align":"left"}},"beforeUpdate",-1),ln={style:{"text-align":"left"}},pn={href:"https://cn.vuejs.org/v2/api/#beforeUpdate",target:"_blank",rel:"noopener noreferrer"},cn=n("td",{style:{"text-align":"left"}},"仅H5平台支持",-1),un=n("td",{style:{"text-align":"left"}},null,-1),dn=n("td",{style:{"text-align":"left"}},"updated",-1),rn={style:{"text-align":"left"}},kn={href:"https://cn.vuejs.org/v2/api/#updated",target:"_blank",rel:"noopener noreferrer"},hn=n("td",{style:{"text-align":"left"}},"仅H5平台支持",-1),_n=n("td",{style:{"text-align":"left"}},null,-1),gn=n("td",{style:{"text-align":"left"}},"beforeDestroy",-1),fn={style:{"text-align":"left"}},vn={href:"https://cn.vuejs.org/v2/api/#beforeDestroy",target:"_blank",rel:"noopener noreferrer"},bn=n("td",{style:{"text-align":"left"}},null,-1),yn=n("td",{style:{"text-align":"left"}},null,-1),xn=n("td",{style:{"text-align":"left"}},"destroyed",-1),mn={style:{"text-align":"left"}},wn={href:"https://cn.vuejs.org/v2/api/#destroyed",target:"_blank",rel:"noopener noreferrer"},Sn=n("td",{style:{"text-align":"left"}},null,-1),Ln=n("td",{style:{"text-align":"left"}},null,-1);function An(jn,Hn){const s=l("ExternalLinkIcon");return p(),c("div",null,[u,d,r,k,n("p",null,[n("a",h,[t("uni-app官网 (dcloud.net.cn)"),e(s)])]),_,n("ul",null,[g,n("li",null,[t("应用启动参数，可以在API "),f,t("获取，"),n("a",v,[t("详见(opens new window)"),e(s)])]),n("li",null,[t("onlaunch里进行页面跳转，如遇白屏报错，请参考"),n("a",b,[t("https://ask.dcloud.net.cn/article/35942(opens new window)"),e(s)])]),y,x]),m,n("p",null,[n("a",w,[t("页面简介 | uni-app官网 (dcloud.net.cn)"),e(s)])]),S,n("table",null,[L,n("tbody",null,[n("tr",null,[A,n("td",j,[t("监听页面加载，其参数为上个页面传递的数据，参数类型为 Object（用于页面传参），参考"),n("a",H,[t("示例"),e(s)])]),V,E]),N,O,D,M])]),R,n("table",null,[T,n("tbody",null,[n("tr",null,[U,n("td",B,[t("在实例初始化之前被调用。"),n("a",C,[t("详见(opens new window)"),e(s)])]),I,P]),n("tr",null,[F,n("td",$,[t("在实例创建完成后被立即调用。"),n("a",q,[t("详见(opens new window)"),e(s)])]),z,G]),n("tr",null,[J,n("td",K,[t("在挂载开始之前被调用。"),n("a",Q,[t("详见(opens new window)"),e(s)])]),W,X]),n("tr",null,[Y,n("td",Z,[t("挂载到实例上去之后调用。"),n("a",nn,[t("详见 (opens new window)"),e(s)]),t("注意：此处并不能确定子组件被全部挂载，如果需要子组件完全挂载之后在执行操作可以使用"),tn,n("a",sn,[t("Vue官方文档(opens new window)"),e(s)])]),en,an]),n("tr",null,[on,n("td",ln,[t("数据更新时调用，发生在虚拟 DOM 打补丁之前。"),n("a",pn,[t("详见(opens new window)"),e(s)])]),cn,un]),n("tr",null,[dn,n("td",rn,[t("由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。"),n("a",kn,[t("详见(opens new window)"),e(s)])]),hn,_n]),n("tr",null,[gn,n("td",fn,[t("实例销毁之前调用。在这一步，实例仍然完全可用。"),n("a",vn,[t("详见(opens new window)"),e(s)])]),bn,yn]),n("tr",null,[xn,n("td",mn,[t("Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。"),n("a",wn,[t("详见"),e(s)])]),Sn,Ln])])])])}const Nn=o(i,[["render",An],["__file","06.html.vue"]]);export{Nn as default};
