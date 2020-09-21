(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{375:function(v,_,t){"use strict";t.r(_);var r=t(42),i=Object(r.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"性能优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#性能优化"}},[v._v("#")]),v._v(" 性能优化")]),v._v(" "),t("h2",{attrs:{id:"加载优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#加载优化"}},[v._v("#")]),v._v(" 加载优化")]),v._v(" "),t("p",[v._v("加载过程最为耗时，可能会占到总耗时的80%的时间，是优化的重点。\n"),t("strong",[v._v("减少http请求个数")]),t("br"),v._v("\nweb前端80%的时间花在请求图片、脚本、样式等资源文件上。首次加载同时请求数不能超过4个，减少http请求个数的主要途径有：")]),v._v(" "),t("ol",[t("li",[v._v("合并JS/CSS文件。基于NodeJs的文件合并工具，将脚本合并成一个文件。")]),v._v(" "),t("li",[v._v("使用CSS Sprite将图片合并成一个文件，通过background-image和background-position来控制显示。")])]),v._v(" "),t("p",[t("strong",[v._v("缓存资源")]),t("br"),v._v("\n使用缓存可减少请求数。")]),v._v(" "),t("ol",[t("li",[v._v("DNS缓存。用户输入URL后，查询域名对应的IP一般需要20~120ms。基于性能考虑，ISP、局域网、操作系统、浏览器都会有DNS缓存机制。")]),v._v(" "),t("li",[v._v("缓存响应结果(Ajax请求)。http头添加Expires或Cache-Control字段判断缓存是否过期或是否存在，还有Last-Modified和Etag判断资源是否有更改。")]),v._v(" "),t("li",[v._v("使用外联的样式和脚本。外部的JavaScript和CSS文件可以被浏览器缓存，在不同页面复用，可以减小页面大小。")])]),v._v(" "),t("p",[t("strong",[v._v("压缩代码")]),t("br"),v._v("\n减少资源大小可以加快网页显示速度。")]),v._v(" "),t("ol",[t("li",[v._v("压缩JavaScript和CSS。移除(注释、空格、空行等)非功能性字符，有大量前端优化工具可以实现，webpack等构建工具内有配套插件。")]),v._v(" "),t("li",[v._v("启用Gzip。绝大多数浏览器支持Gzip解码，Gzip压缩可以减少70%的响应大小，可以有效缩短响应时间。ps:图片和PDF文件不要用，因为它们本身已经压缩过了。")])]),v._v(" "),t("p",[t("strong",[v._v("无阻塞")]),t("br"),v._v("\n样式放头部，脚本放底部。")]),v._v(" "),t("ol",[t("li",[v._v("把脚本放在页面底部。浏览器下载脚本时，会阻塞其他资源的下载，即使是不同域名的资源。倘若某些场景无法将脚本放到底部，可以"),t("strong",[v._v("异步加载js")]),v._v("，这样渲染引擎一遇到该命令就会开始下载外部脚本，但是不会等它下载和执行，而是继续执行后续命令，方法是在"),t("code",[v._v("<script>")]),v._v("标签中添加"),t("code",[v._v("defer")]),v._v("属性或是"),t("code",[v._v("async")]),v._v("属性。不同的是："),t("br"),v._v("\nasync会在脚本加载完可用之时立即执行，渲染引擎会中断渲染，待执行完后继续渲染，而defer要等到DOM加载完毕，其他脚本生成后再执行。如果有多个脚本，设置了defer属性的脚本会按顺序执行，async不能确保。defer执行在window.onload之前，会阻止DOMContentLoaded事件，直至脚本被加载并解析完成后在触发该事件。")]),v._v(" "),t("li",[v._v("对于样式，使用"),t("code",[v._v("link")]),v._v("代替"),t("code",[v._v("@import")]),v._v("。对于IE一些版本，@import 相当于放在页面底部，应该在头部用link引入样式。")])]),v._v(" "),t("p",[t("strong",[v._v("首屏加载")]),t("br"),v._v("\n首屏快速显示可以提升用户对页面速度的感知。")]),v._v(" "),t("ol",[t("li",[v._v("延迟加载。除了页面初始加载所必须的内容，其他非首屏显示的数据、样式、脚本、图片和一些用户交互时才显示的内容都可以延迟加载。")])]),v._v(" "),t("p",[t("strong",[v._v("按需加载")])]),v._v(" "),t("ol",[t("li",[v._v("懒加载")]),v._v(" "),t("li",[v._v("滚屏加载")]),v._v(" "),t("li",[v._v("Media Query加载")])]),v._v(" "),t("p",[t("strong",[v._v("预加载")]),t("br"),v._v("\n利用浏览器空闲时间请求将来要用的资源。预加载方式：")]),v._v(" "),t("ol",[t("li",[v._v("无条件预先加载：页面加载完(load)后,马上获取其他资源")]),v._v(" "),t("li",[v._v("有条件预先加载： 根据用户行为预判用户去向，预载相关资源。")])]),v._v(" "),t("p",[t("strong",[v._v("压缩图像")])]),v._v(" "),t("p",[t("strong",[v._v("减少cookie")]),t("br"),v._v("\ncookie通过http头在服务器与浏览器之间传送，会影响响应速度。")]),v._v(" "),t("ol",[t("li",[v._v("静态资源域名不使用cookie")]),v._v(" "),t("li",[v._v("去除不必要的cookie")]),v._v(" "),t("li",[v._v("尽量压缩cookie大小")]),v._v(" "),t("li",[v._v("设置cookie的domain级别")]),v._v(" "),t("li",[v._v("设置合适的过期时间")])]),v._v(" "),t("p",[t("strong",[v._v("避免重定向")]),t("br"),v._v("\n重定向会影响加载速度。客户端收到重定向的回复后，会根据响应头中的Location地址再次发送请求。")]),v._v(" "),t("h2",{attrs:{id:"执行优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#执行优化"}},[v._v("#")]),v._v(" 执行优化")]),v._v(" "),t("p",[v._v("执行处理不当会阻塞页面加载和渲染"),t("br"),v._v(" "),t("strong",[v._v("css写在头部，js写在尾部")])]),v._v(" "),t("p",[t("strong",[v._v("避免img.iframe等的src为空")]),t("br"),v._v("\n空的src会导致重新加载当前页面，影响速度和效率")]),v._v(" "),t("p",[t("strong",[v._v("尽量避免重置图像大小")]),t("br"),v._v("\n重置大小会应发图像的重绘")]),v._v(" "),t("p",[t("strong",[v._v("图像尽量避免使用DataURL")]),t("br"),v._v("\nDataURL图像没有使用图像的压缩算法，文件会变大，并且要解码后再渲染，加载慢耗时长")]),v._v(" "),t("h2",{attrs:{id:"渲染优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#渲染优化"}},[v._v("#")]),v._v(" 渲染优化")]),v._v(" "),t("p",[t("strong",[v._v("设置viewport")]),t("br"),v._v("\nHTML的viewport可加速页面渲染")]),v._v(" "),t("p",[t("strong",[v._v("减少DOM节点")]),t("br"),v._v("\nDOM节点太多会影响页面渲染,js的DOM操作也更慢。"),t("br"),v._v(" "),t("strong",[v._v("优化动画")]),t("br"),v._v("\n尽量使用CSS3动画。"),t("br"),v._v("\n合理使用requestAnimationFrame动画代替setTimeout")]),v._v(" "),t("p",[t("strong",[v._v("优化高频事件")])]),v._v(" "),t("ol",[t("li",[v._v("函数防抖和节流")]),v._v(" "),t("li",[v._v("减少重绘次数")])]),v._v(" "),t("p",[t("strong",[v._v("GPU加速")]),t("br"),v._v("\n使用某些html5标签和css3属性会触发GPU渲染，移动端需合理使用(增加耗电)")]),v._v(" "),t("ul",[t("li",[v._v("html标签：video、canvas、webgl")]),v._v(" "),t("li",[v._v("css属性： opacity、transform、transition")])]),v._v(" "),t("h2",{attrs:{id:"样式优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#样式优化"}},[v._v("#")]),v._v(" 样式优化")]),v._v(" "),t("ol",[t("li",[v._v("避免在html中写style")]),v._v(" "),t("li",[v._v("避免css表达式。表达式的执行需要跳出css树的渲染")]),v._v(" "),t("li",[v._v("移除css空规则。会增加css文件大小")]),v._v(" "),t("li",[v._v("正确使用display。会影响页面渲染")])]),v._v(" "),t("ul",[t("li",[t("code",[v._v("display:none")]),v._v("时，渲染树不会渲染该节点，当重新显示时会引起重排")]),v._v(" "),t("li",[t("code",[v._v("display:inline")]),v._v("时，后面不要再设置float、margin、padding、width和height")]),v._v(" "),t("li",[t("code",[v._v("disply:inline-block")]),v._v("时，后面不要再设置float")]),v._v(" "),t("li",[t("code",[v._v("display:block时")]),v._v("，后面不再设置vertical-align")]),v._v(" "),t("li",[t("code",[v._v("display:table-*")]),v._v("时，后面不再设置float和margin")])]),v._v(" "),t("ol",{attrs:{start:"5"}},[t("li",[v._v("不滥用float。float在渲染时计算量比较大")]),v._v(" "),t("li",[v._v("不滥用web字体。需要下载、解析、重绘")]),v._v(" "),t("li",[v._v("不声明过多的font-size。会影响css树的效率")]),v._v(" "),t("li",[v._v("考虑到浏览器的兼容和性能，值为0时不带单位")]),v._v(" "),t("li",[v._v("标准化浏览器前缀")]),v._v(" "),t("li",[v._v("避免使用高级选择符。执行耗时长且不易读懂")])]),v._v(" "),t("h2",{attrs:{id:"脚本优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#脚本优化"}},[v._v("#")]),v._v(" 脚本优化")]),v._v(" "),t("p",[t("strong",[v._v("减少重绘和回流")]),t("br"),v._v("\n重绘与回流的"),t("RouterLink",{attrs:{to:"/browser/render.html"}},[v._v("优化方法")])],1),v._v(" "),t("p",[t("strong",[v._v("尽量使用事件代理")])])])}),[],!1,null,null,null);_.default=i.exports}}]);