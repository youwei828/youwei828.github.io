import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o,c as r,a as e,b as n,d as a,e as d}from"./app-7226743f.js";const t={},c=d('<h1 id="_02-【nodejs开发环境安装】" tabindex="-1"><a class="header-anchor" href="#_02-【nodejs开发环境安装】" aria-hidden="true">#</a> 02 【nodejs开发环境安装】</h1><h2 id="_1-版本介绍" tabindex="-1"><a class="header-anchor" href="#_1-版本介绍" aria-hidden="true">#</a> 1.版本介绍</h2><ul><li>在命令窗口中输入 node -v 可以查看版本</li><li>0.x 完全不技术 ES6</li><li>4.x 部分支持 ES6 特性</li><li>5.x 部分支持ES6特性（比4.x多些），属于过渡产品，现在来说应该没有什么理由去用这个了</li><li>6.x 支持98%的 ES6 特性</li><li>8.x 支持 ES6 特性</li></ul><h2 id="_2-node-js-运行环境配置-通过-node-js-安装包-不推荐" tabindex="-1"><a class="header-anchor" href="#_2-node-js-运行环境配置-通过-node-js-安装包-不推荐" aria-hidden="true">#</a> 2.Node.js 运行环境配置：通过 Node.js 安装包（不推荐）</h2>',4),p={href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"},u=e("figure",null,[e("img",{src:"https://i0.hdslb.com/bfs/album/baa4a48fa8ff1f6e0c463671d144ae9c1111e60c.png",alt:"image-20221102141924455",tabindex:"0",loading:"lazy"}),e("figcaption",null,"image-20221102141924455")],-1),m={href:"https://nodejs.org/en/download/releases/",target:"_blank",rel:"noopener noreferrer"},h=d('<figure><img src="https://i0.hdslb.com/bfs/album/ae6cded001336936a7580bbdff40d77214b0799c.png" alt="image-20221102142121523" tabindex="0" loading="lazy"><figcaption>image-20221102142121523</figcaption></figure><p>后续如果需要安装其他版本，可以这样做：重新下载最新的安装包，覆盖安装即可。</p><p>但我们并不推荐直接采用 Node.js.msi（windows）或者 Node.js.pkg（Mac） 安装包进行安装，因为会产生如下问题。</p><p><strong>通过 Node.js 安装包产生的问题</strong>：</p><ul><li>安装新版本时，需要覆盖就版本；而且以前版本安装的很多全局工具包，需要重新安装。</li><li>无法回滚到之前的旧版本。</li><li>无法在多个版本之间切换（很多时候，不同的项目需要使用特定版本。或者，我想临时尝鲜一下新版本的特性）</li></ul><p>因此，我们暂时先不用安装 Node.js，稍后用 NVM 的方式来安装 Node.js。通过 NVM 的方式，可以让多个版本的 Node.js 共存，并灵活切换。</p>',6),v=e("h3",{id:"node-js-版本常识",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#node-js-版本常识","aria-hidden":"true"},"#"),n(" Node.js 版本常识")],-1),b=e("ul",null,[e("li",null,"偶数版本为稳定版（0.6.x ，0.8.x ，8.10.x）"),e("li",null,"奇数版本为非稳定版（0.7.x ，0.9.x ，9.11.x）"),e("li",null,"LTS（Long Term Support）")],-1),g={href:"https://blog.csdn.net/u012532033/article/details/73332099",target:"_blank",rel:"noopener noreferrer"},_=e("h2",{id:"_3-node-js-运行环境安装-通过-nvm-推荐",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_3-node-js-运行环境安装-通过-nvm-推荐","aria-hidden":"true"},"#"),n(" 3.Node.js 运行环境安装：通过 NVM（推荐）")],-1),f={href:"https://github.com/nvm-sh/nvm",target:"_blank",rel:"noopener noreferrer"},x=e("p",null,[e("strong",null,"我们可以先安装 NVM，然后通过 NVM 安装 Node.js"),n("。这是官方推荐的做法。")],-1),j=e("p",null,"Windows 安装的 Node.js 的步骤如下。",-1),k=e("h3",{id:"_3-1-安装-nvm",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_3-1-安装-nvm","aria-hidden":"true"},"#"),n(" 3.1 安装 NVM：")],-1),N={href:"https://github.com/coreybutler/nvm-windows/releases",target:"_blank",rel:"noopener noreferrer"},M=d(`<figure><img src="https://i0.hdslb.com/bfs/album/57f120a95801261ccefa395f7ed3f766fadb5332.png" alt="image-20221102142420968" tabindex="0" loading="lazy"><figcaption>image-20221102142420968</figcaption></figure><p>下载下来后，直接解压到 <code>D:\\web</code>目录下：</p><figure><img src="https://i0.hdslb.com/bfs/album/9052989c7c1c99956b5ed5caafa46964867d0733.png" alt="image-20221102143322915" tabindex="0" loading="lazy"><figcaption>image-20221102143322915</figcaption></figure><p>（2）在上面的目录中，新建一个<code>settings.txt</code>文件，里面的内容填充如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>root: D:<span class="token punctuation">\\</span>web<span class="token punctuation">\\</span>nvm
path: D:<span class="token punctuation">\\</span>web<span class="token punctuation">\\</span>nodejs
arch: <span class="token number">64</span>
proxy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上方内容的解释：</p><ul><li>root 配置为：当前 nvm.exe 所在的目录</li><li>path 配置为：node 快捷方式所在的目录</li><li>arch 配置为：当前操作系统的位数（32/64）</li><li>proxy 不用配置</li></ul><p>（3）配置环境变量：</p><ul><li><code>NVM_HOME</code> = <code>D:\\web\\nvm</code>（当前 nvm.exe 所在目录）</li><li><code>NVM_SYMLINK</code> = <code>D:\\web\\nodejs</code> （node 快捷方式所在的目录）</li><li>PATH += <code>;%NVM_HOME%;%NVM_SYMLINK%</code></li></ul><p>配置成功后，重启资源管理器。</p><h3 id="_3-2-验证" tabindex="-1"><a class="header-anchor" href="#_3-2-验证" aria-hidden="true">#</a> 3.2 验证</h3><p>（1）输入<code>nvm</code>命令查看环境变量是否配置成功</p><p>（2）输入 <code>nvm ls</code>，查看已安装的所有 node 版本。</p><p>（3）输入 <code>nvm -v</code>，查看 已安装的 nvm 版本。</p><p>（4）输入 <code>node -v</code>，查看正在使用的 node 版本。</p><p>如果 Node 安装失败，可以参考上面这个链接。</p><h3 id="_3-3-安装指定版本的-node-js" tabindex="-1"><a class="header-anchor" href="#_3-3-安装指定版本的-node-js" aria-hidden="true">#</a> 3.3 安装指定版本的 Node.js</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nvm <span class="token function">install</span> 版本号

<span class="token comment"># 举例</span>
nvm <span class="token function">install</span> <span class="token number">8.10</span>.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输入 <code>node -v</code>，查看当前使用的 node 版本。</p><p>关于 NVM 的常用命令，详见下一段。</p><p>补充：</p><p>如果 Node 安装失败，可以在上方的 <code>settings.txt</code>文件中，新增如下两行，修改镜像源：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>node_mirror: https://npmmirror.com/mirrors/node/
npm_mirror: https://npmmirror.com/mirrors/npm/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,23),V={href:"https://segmentfault.com/a/1190000011114680",target:"_blank",rel:"noopener noreferrer"},w=d(`<h2 id="_4-nvm-的常用命令" tabindex="-1"><a class="header-anchor" href="#_4-nvm-的常用命令" aria-hidden="true">#</a> 4.NVM 的常用命令</h2><blockquote><p>注意，这一段说的是 NVM 的常用命令，不是 Node 的常用命令。</p></blockquote><p>查看当前使用的 nvm 版本：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nvm <span class="token parameter variable">--version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看本地安装的所有的 Node.js 版本：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 方式1</span>
nvm <span class="token function">ls</span>

<span class="token comment"># 方式2</span>
nvm list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>安装指定版本的 Node.js：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nvm <span class="token function">install</span> 版本号

<span class="token comment"># 举例</span>
nvm <span class="token function">install</span> <span class="token number">8.10</span>.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>卸载指定版本 Node.js：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nvm uninstall 版本号
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>切换使用指定版本的 node</strong>：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nvm use 版本号
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>设置node的默认版本</strong>：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nvm <span class="token builtin class-name">alias</span> default 版本号
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>查看全局npm包的安装路径</strong>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm root -g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看远程服务器端的所有 Node 版本：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nvm ls-remote
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,18),S=e("code",null,"Latest LTS",-1),E=e("strong",null,"长期维护",-1),L={href:"https://nodejs.org/en/download/releases/",target:"_blank",rel:"noopener noreferrer"},y=d(`<h2 id="_5-node-js-的常用命令" tabindex="-1"><a class="header-anchor" href="#_5-node-js-的常用命令" aria-hidden="true">#</a> 5.Node.js 的常用命令</h2><p>查看 node 的版本：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">node</span> <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行脚本字符串：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">node</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;console.log(&quot;Hello World&quot;)&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行脚本文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">node</span> index.js

$ <span class="token function">node</span> path/index.js

$ <span class="token function">node</span> path/index
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看帮助：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">node</span> <span class="token parameter variable">--help</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,9);function T($,q){const s=l("ExternalLinkIcon");return o(),r("div",null,[c,e("p",null,[n("去 Node.js 的"),e("a",p,[n("官网"),a(s)]),n("下载安装包：")]),u,e("p",null,[n("我们也可以在"),e("a",m,[n("https://nodejs.org/en/download/releases/"),a(s)]),n(" 里下载历史版本。")]),h,e("blockquote",null,[v,b,e("p",null,[n("参考链接："),e("a",g,[n("node.js 中 LTS 和 Current 的区别"),a(s)])])]),_,e("p",null,[e("strong",null,[e("a",f,[n("NVM"),a(s)])]),n("：node.js version manager，用来管理 node 的版本。")]),x,j,k,e("p",null,[n("（1）我们去 "),e("a",N,[n("https://github.com/coreybutler/nvm-windows/releases"),a(s)]),n(" 下载 NVM 的安装包：")]),M,e("ul",null,[e("li",null,[n("参考链接："),e("a",V,[n("安装 npm，nvm，node"),a(s)])])]),w,e("p",null,[n("执行上面的命令后，在列出的版本清单中，凡是用 "),S,n("标注的版本，则表明是"),E,n("的版本。我们在安装时，建议安装这些版本。当然，我们也可以在网址 "),e("a",L,[n("https://nodejs.org/en/download/releases/"),a(s)]),n(" 查看 LTS 的历史版本。")]),y])}const H=i(t,[["render",T],["__file","02.html.vue"]]);export{H as default};
