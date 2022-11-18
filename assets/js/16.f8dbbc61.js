(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{278:function(t,a,r){"use strict";r.r(a);var e=r(38),n=Object(e.a)({},function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"dart"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dart","aria-hidden":"true"}},[t._v("#")]),t._v(" dart")]),t._v(" "),r("h2",{attrs:{id:"aot和jit是什么？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#aot和jit是什么？","aria-hidden":"true"}},[t._v("#")]),t._v(" AOT和JIT是什么？")]),t._v(" "),r("p",[t._v("目前，程序主要有两种运行方式：静态编译与动态解释。\n静态编译的程序在执行前全部被翻译为机器码，通常将这种类型称为AOT （Ahead of time compiler）即 “提前编译”；如C、C++。")]),t._v(" "),r("p",[t._v("判断标准是：程序执行前是否需要编译。")]),t._v(" "),r("p",[t._v("而解释执行的则是一句一句边翻译边运行，通常将这种类型称为JIT（Just-in-time）即“即时编译”。如JavaScript、Python。")]),t._v(" "),r("p",[t._v("程序运行的方式和具体的语言没有强制关系，比如Python，既可以JIT，也可以AOT。")]),t._v(" "),r("p",[t._v("Dart中的JIT和AOT：")]),t._v(" "),r("p",[t._v("Dart在开发过程中使用JIT，因此每次改都不需要再编译成字节码。节省了大量时间。\n在部署中使用AOT生成高效的ARM代码以保证高效的性能。\nDart 是少数同时支持 JIT（Just In Time，即时编译）和 AOT（Ahead of Time，运行前编译）的语言之一。")]),t._v(" "),r("p",[t._v("JIT 在运行时即时编译，在开发周期中使用，可以动态下发和执行代码，开发测试效率高，但运行速度和执行性能则会因为运行时即时编译受到影响。")]),t._v(" "),r("p",[t._v("总结来讲，在开发期使用 JIT 编译，可以缩短产品的开发周期。Flutter 最受欢迎的功能之一热重载，正是基于此特 性。")]),t._v(" "),r("p",[t._v("而在发布期使用 AOT，就不需要像 React Native 那样在跨平台 JavaScript 代码和原生 Android、iOS 代码之间建立低效的方法调用映射关系。")]),t._v(" "),r("p",[t._v("所以说，Dart 具有运行速 度快、执行性能好的特点。")]),t._v(" "),r("p",[t._v("参考：")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://www.cnblogs.com/jukaiit/p/12416637.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Dart的JIT 与 AOT - 鸿鹄当高远 - 博客园"),r("OutboundLink")],1)])])},[],!1,null,null,null);a.default=n.exports}}]);