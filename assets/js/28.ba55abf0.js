(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{287:function(t,e,o){"use strict";o.r(e);var a=o(38),r=Object(a.a)({},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"nginx"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#nginx","aria-hidden":"true"}},[t._v("#")]),t._v(" Nginx")]),t._v(" "),o("h2",{attrs:{id:"应用"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#应用","aria-hidden":"true"}},[t._v("#")]),t._v(" 应用")]),t._v(" "),o("h3",{attrs:{id:"遇到过code499没？是什么情况下会触发？"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#遇到过code499没？是什么情况下会触发？","aria-hidden":"true"}},[t._v("#")]),t._v(" 遇到过code499没？是什么情况下会触发？")]),t._v(" "),o("p",[t._v("499对应的是 "),o("strong",[t._v("“client has closed connection”")]),t._v("，客户端请求等待链接已经关闭，这很有可能是因为服务器端处理的时间过长，客户端等得“不耐烦”了。还有一种原因是"),o("strong",[t._v("两次提交post过快")]),t._v("就会出现499。\n解决方法：")]),t._v(" "),o("ul",[o("li",[o("p",[t._v("前端将timeout最大等待时间设置大一些；")])]),t._v(" "),o("li",[o("p",[t._v("nginx上配置proxy_ignore_client_abort on")])])]),t._v(" "),o("h3",{attrs:{id:"服务端代理转发时，cookie丢失问题怎么解决？"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#服务端代理转发时，cookie丢失问题怎么解决？","aria-hidden":"true"}},[t._v("#")]),t._v(" 服务端代理转发时，cookie丢失问题怎么解决？")]),t._v(" "),o("ol",[o("li",[t._v("如果只是host、端口转换，则cookie不会丢失。例如：")])]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("    location /project {\n        proxy_pass   http://127.0.0.1:8080/project;\n    }\n")])])]),o("p",[t._v("通过浏览器访问http://127.0.0.1/project时，浏览器的cookie内有jsessionid。再次访问时，浏览器会发送当前的cookie。")]),t._v(" "),o("p",[t._v("2.如果路径也变化了，则需要设置cookie的路径转换，nginx.conf的配置如下")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("    location /proxy_path {\n        proxy_pass   http://127.0.0.1:8080/project;\n        proxy_cookie_path  /project /proxy_path;\n    }\n")])])]),o("p",[t._v("参考：")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://blog.csdn.net/we_shell/article/details/45153885",target:"_blank",rel:"noopener noreferrer"}},[t._v("解决nginx使用proxy_pass反向代理时，cookie丢失的问题_Go2Shell-CSDN博客"),o("OutboundLink")],1)]),t._v(" "),o("p",[o("a",{attrs:{href:"http://nginx.org/en/docs/http/ngx_http_proxy_module.html?&_ga=1.161910972.1696054694.1422417685#proxy_cookie_path",target:"_blank",rel:"noopener noreferrer"}},[t._v("Module ngx_http_proxy_module"),o("OutboundLink")],1)])])},[],!1,null,null,null);e.default=r.exports}}]);