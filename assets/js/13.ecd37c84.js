(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{359:function(t,s,a){"use strict";a.r(s);var e=a(42),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"缓存与存储"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存与存储"}},[t._v("#")]),t._v(" 缓存与存储")]),t._v(" "),a("h2",{attrs:{id:"浏览器缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器缓存"}},[t._v("#")]),t._v(" 浏览器缓存")]),t._v(" "),a("p",[t._v("缓存机制：客户端发送请求时先发给浏览器缓存，如果有缓存数据且生效，则返回200 from Cache（现在已区分disk和memory）和缓存数据，如果失效则携带缓存标识向服务器去请求，由服务器决定是否启用缓存，若启用则协商缓存生效返回304，客户端使用浏览器缓存资源，若缓存失效，服务器返回200和新数据，并将该数据及缓存规则标识存在浏览器缓存中.")]),t._v(" "),a("p",[t._v("缓存作用：")]),t._v(" "),a("ul",[a("li",[t._v("减少网络带宽消耗")]),t._v(" "),a("li",[t._v("减少服务器压力")]),t._v(" "),a("li",[t._v("减少网络延迟，提升用户体验")])]),t._v(" "),a("h3",{attrs:{id:"强缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#强缓存"}},[t._v("#")]),t._v(" 强缓存")]),t._v(" "),a("p",[t._v("强缓存就是向浏览器缓存查询请求结果，并根据回复结果的缓存规则判断是否要使用缓存的过程。")]),t._v(" "),a("p",[a("strong",[t._v("强缓存控制字段")]),a("br"),t._v("\nhttp1.0使用的是"),a("code",[t._v("Expires")]),t._v(",http1.1使用的"),a("code",[t._v("Cache-Control")]),t._v(".")]),t._v(" "),a("p",[a("code",[t._v("Expires")]),t._v("：响应头字段，值为服务器返回的请求结果到期时间，控制原理是将客户端时间与服务端返回的时间做对比，如果用户修改了本地时间，或时区不同发生误差，会导致缓存失效。")]),t._v(" "),a("p",[a("code",[t._v("Cache-Control")]),t._v(": 取值")]),t._v(" "),a("ul",[a("li",[t._v("public: 所有的内容都缓存(客户端和服务器)")]),t._v(" "),a("li",[t._v("private： 所有内容都缓存(客户端)，默认取值")]),t._v(" "),a("li",[t._v("no-cache：客户端缓存内容，但是是否使用有协商缓存决定")]),t._v(" "),a("li",[t._v("no-store：所有内容都不会被缓存")]),t._v(" "),a("li",[t._v("max-age：max-age = xxx,缓存内容会在xxx秒后失效")])]),t._v(" "),a("p",[a("strong",[t._v("优先级")]),a("br"),t._v("\n两个字段同时存在时Cache-Control优先级更高。Expires主要是为了向下兼容。")]),t._v(" "),a("h3",{attrs:{id:"协商缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#协商缓存"}},[t._v("#")]),t._v(" 协商缓存")]),t._v(" "),a("p",[t._v("强制缓存失效后，客户端携带缓存标志向服务端发出http请求，由服务端决定是否启用缓存，协商缓存生效返回304，协商缓存失败返回200。")]),t._v(" "),a("p",[a("strong",[t._v("协商缓存控制字段")]),a("br"),t._v("\nHTTP1.0使用"),a("code",[t._v("Last-Modified")]),t._v(" 和 "),a("code",[t._v("If-Modified-Since")]),t._v(",HTTP1.1使用的"),a("code",[t._v("Etag")]),t._v(" 和 "),a("code",[t._v("If-None-Match")]),t._v(".")]),t._v(" "),a("p",[a("code",[t._v("Last-Modified")]),t._v("：是服务端响应请求时，返回的该资源在服务器最后修改的时间。"),a("br"),t._v("\n流程：")]),t._v(" "),a("ol",[a("li",[t._v("客户端首次请求，服务器会在响应头带上Last-Modified,并告知缓存到期时间")]),t._v(" "),a("li",[t._v("客户端请求时会在请求头携带If-Modified-Since,值为上次响应回复的Last-Modifoed")]),t._v(" "),a("li",[t._v("服务器收到后会对比最新的修改时间是否大于If-Modified-Since,如果大于就返回资源，状态为200，并更新Last-Modified,否则回复304，代表资源无更新。")])]),t._v(" "),a("p",[a("code",[t._v("Etag")]),t._v(": 是由服务器生成的资源文件的唯一标识。"),a("br"),t._v("\n流程：")]),t._v(" "),a("ol",[a("li",[t._v("客户端首次请求，服务响应时会在响应头携带Etag标识")]),t._v(" "),a("li",[t._v("客户端在发送请求时会在请求头携带If-None-Match，值为上次返回的Etag")]),t._v(" "),a("li",[t._v("服务器接收后会判断If-None-Match的值是否与最新的Etag相等，若不相等则表明资源文件已修改，服务器返回200和最新资源，若相等则返回304.")])]),t._v(" "),a("p",[a("strong",[t._v("优先级")]),a("br"),t._v("\n两个字段同时存在时Etag优先级更高，因为Last-Modified只能作用于秒级的改变，若是1秒改变N次则无法判断，Etag判断更加准确，Etag由响应头的Last-Modified和Content-Length转为16进制后再拼接而成，是加强版的Last-Modified。")]),t._v(" "),a("p",[a("strong",[t._v("提问，如果响应头的Etag变了，文件内容就一定变了吗？")]),a("br"),t._v("\n不一定。因为Etag中包含Last-Modified,Last-Modified由mtime组成，当编辑文件但没修改内容时，mtime也会改变，造成Etag也改变。\nmtime: modified time 文件内容改变的事件戳。")]),t._v(" "),a("h2",{attrs:{id:"浏览器存储"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器存储"}},[t._v("#")]),t._v(" 浏览器存储")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th"),t._v(" "),a("th",[t._v("cookie")]),t._v(" "),a("th",[t._v("localstorage")]),t._v(" "),a("th",[t._v("sessionStorage")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("存储大小")]),t._v(" "),a("td",[t._v("4Kb")]),t._v(" "),a("td",[t._v("5Mb")]),t._v(" "),a("td",[t._v("5Mb")])]),t._v(" "),a("tr",[a("td",[t._v("生命周期")]),t._v(" "),a("td",[t._v("可设置失效事件，默认是关闭浏览器后失效")]),t._v(" "),a("td",[t._v("若用户不清除，则永远存在")]),t._v(" "),a("td",[t._v("当前会话有效，关闭页面或浏览器清除")])]),t._v(" "),a("tr",[a("td",[t._v("与服务端通信")]),t._v(" "),a("td",[t._v("每次都会携带在http头中，如果cookie保存过多数据会影响性能")]),t._v(" "),a("td",[t._v("仅在客户端保存")]),t._v(" "),a("td",[t._v("仅在客户端保存")])]),t._v(" "),a("tr",[a("td",[t._v("易用性")]),t._v(" "),a("td",[t._v("需要封装，原生接口不友好")]),t._v(" "),a("td",[t._v("原生接口可以接受，也可自己再封装")]),t._v(" "),a("td",[t._v("同左")])])])]),t._v(" "),a("h3",{attrs:{id:"cookie"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cookie"}},[t._v("#")]),t._v(" cookie")]),t._v(" "),a("p",[t._v("服务端发送给客户端并保存在本地的一段数据，用于记录用户数据，验证用户身份，cookie是不能跨域的，客户端每次发送http请求都会携带cookie来验明身份。"),a("br"),t._v(" "),a("strong",[t._v("cookie设置")])]),t._v(" "),a("ol",[a("li",[t._v("服务端设置，响应头的set-cookie字段可生成cookie信息保存在客户端")]),t._v(" "),a("li",[t._v("客户端设置"),a("br"),t._v("\n字段：name(cookie名称)，value(值)，domain(域名), path(页面路径)，expires/Max-Age(超时时间，设置一个时间，到达时间后失效，如果不设置则默认值为session,当浏览器关闭后失效)，size(cookie大小)，http(httponly属性，若为true，则不能通过document.cookie来访问cookie),secure(设置是否只能通过https来传递cookie)")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cookie "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'key = value'")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//js中设置cookie")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" time "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("120")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cookie "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("name = xxx;expires = $(time.toGMTString())")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置cookie过期时间expires,如果要删除cookie，就设置过去的时间")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*原则上cookie不能跨域，如果想实现跨域，就得设置域或者路径。domain 只有当cookie的domain和当前域名匹配时才能访问到cookie,当网址不止一个域名时，比如a.example.com和b.example.com如果想共享cookie,那么domain要设置成example.com，path路径要设置为/ */")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" t "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("120")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cookie "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("name=monsterooo;expires=")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toLocaleTimeString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("; domain=.example.com; path=/")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("ps:考虑到安全，应该使用session或token."),a("br"),t._v(" "),a("strong",[t._v("session")]),t._v(":记录用户的会话，存储在服务端，根据session id来确认用户身份。但是当访问增多时会占用服务器性能，session用户在20分钟内没操作的话就会删除。但是使用session也需要依赖cookie，sessionId会存储在cookie中，如果cookie被禁用，则会将seesionId写在URL中。")]),t._v(" "),a("h3",{attrs:{id:"localstorage-和-sessionstorage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#localstorage-和-sessionstorage"}},[t._v("#")]),t._v(" localStorage 和 sessionStorage")]),t._v(" "),a("p",[t._v("两者提供了统一的API来访问和设置数据：")]),t._v(" "),a("ol",[a("li",[t._v("clear。清除所有存储数据")]),t._v(" "),a("li",[t._v("getItem。接收参数key,获取key对应的键值对")]),t._v(" "),a("li",[t._v("removeItem。接收参数key,删除key对应的键值对")]),t._v(" "),a("li",[t._v("setItem。接收key和value,如果不存在key则添加，存在就更新")]),t._v(" "),a("li",[t._v("key。接收整数索引，返回对应下标的键值对的key")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("localStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'order'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'123'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("localStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//order")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("localStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'order'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//123")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("localStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("order"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//123")]),t._v("\nlocalStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'order'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nlocalStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clear")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);