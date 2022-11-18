(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{273:function(e,t,r){"use strict";r.r(t);var a=r(38),v=Object(a.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"软件工程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#软件工程","aria-hidden":"true"}},[e._v("#")]),e._v(" 软件工程")]),e._v(" "),r("h2",{attrs:{id:"设计模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#设计模式","aria-hidden":"true"}},[e._v("#")]),e._v(" 设计模式")]),e._v(" "),r("h3",{attrs:{id:"工作中或者哪些源码中遇到过什么设计模式，列举一下？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#工作中或者哪些源码中遇到过什么设计模式，列举一下？","aria-hidden":"true"}},[e._v("#")]),e._v(" 工作中或者哪些源码中遇到过什么设计模式，列举一下？")]),e._v(" "),r("ul",[r("li",[r("router-link",{attrs:{to:"/-Design-Patterns-Typescript/#/?id=工厂方法"}},[e._v("工厂模式")])],1)]),e._v(" "),r("p",[e._v("在父类中提供一个创建对象的接口，允许子类决定实例化对象的类型。")]),e._v(" "),r("p",[e._v("开源例子：express()创造实例时，调用他的工厂方法。axios.create()创建实例。ui库ora(options)")]),e._v(" "),r("p",[e._v("业务例子：要做很多有略微差异的卡片。父组件包含一些框架和共有逻辑，各个子组件去定制这些卡片的差异内容。")]),e._v(" "),r("blockquote",[r("p",[e._v("koa是new的。new Koa()")])]),e._v(" "),r("ul",[r("li",[r("router-link",{attrs:{to:"/-Design-Patterns-Typescript/#/?id=生成器"}},[e._v("生成器")])],1)]),e._v(" "),r("p",[e._v("使你能分步骤创建复杂对象。该模式使你能用相同的创建代码生成不同类型和形式的对象")]),e._v(" "),r("p",[e._v("开源例子：webpack的config对象很复杂时，可使用工具按需生成该对象")]),e._v(" "),r("p",[e._v("业务例子：组件是一个对象（包含render等），可以用生成器模式拼装出来")]),e._v(" "),r("ul",[r("li",[r("router-link",{attrs:{to:"/-Design-Patterns-Typescript/#/?id=单例"}},[e._v("单例")])],1)]),e._v(" "),r("p",[e._v("保证一个类只有一个实例，并提供一个访问该实例的全局节点")]),e._v(" "),r("p",[e._v("常用例子：vuex vue-router redux。组件中的modal message等也是单例")]),e._v(" "),r("ul",[r("li",[r("router-link",{attrs:{to:"/-Design-Patterns-Typescript/#/?id=适配器"}},[e._v("适配器")])],1)]),e._v(" "),r("p",[e._v("使接口不兼容的对象能够互相合作")]),e._v(" "),r("p",[e._v("开源例子："),r("code",[e._v("axios")]),e._v("的API适配成"),r("code",[e._v("XMLHttpRequest")]),e._v("或"),r("code",[e._v("http")]),e._v("模块，兼容浏览器和node端。orm框架兼容多种数据库。")]),e._v(" "),r("ul",[r("li",[r("router-link",{attrs:{to:"/-Design-Patterns-Typescript/#/?id=外观（门面）"}},[e._v("外观模式")])],1)]),e._v(" "),r("p",[e._v("为程序库、 框架或其他复杂类提供一个简单的接口")]),e._v(" "),r("p",[e._v("例子：babel preset")]),e._v(" "),r("p",[e._v("业务例子：使用"),r("code",[e._v("echart")]),e._v("时，会写一个适配器组件。当绘图组件升级或更改时，降低更改范围。")]),e._v(" "),r("ul",[r("li",[r("router-link",{attrs:{to:"/-Design-Patterns-Typescript/#/?id=职责链"}},[e._v("职责链")])],1)]),e._v(" "),r("p",[e._v("允许你将请求沿着处理者链进行发送。收到请求后，每个处理者都可对请求进行处理，然后将其传递给链上的下个处理者。")]),e._v(" "),r("p",[e._v("常用例子：axios拦截器，koa中间件，webpack的loader，vue的过滤器。逻辑放js，简化dom。")]),e._v(" "),r("blockquote",[r("p",[e._v("一个文件会有多个loader，一个loader处理后会传给下一个loader")])]),e._v(" "),r("ul",[r("li",[r("router-link",{attrs:{to:"/-Design-Patterns-Typescript/#/?id=观察者"}},[e._v("观察者")])],1)]),e._v(" "),r("p",[e._v("允许你定义一种订阅机制，可以对象发生时通知多个“观察”该对象的其他对象")]),e._v(" "),r("p",[e._v("常用例子："),r("router-link",{attrs:{to:"/library/vue.html#vue中的数据响应式如何实现的？"}},[e._v("vue的数据响应式")]),e._v("，webpack的plugin，vue的生命周期（生命周期相关都是）")],1),e._v(" "),r("ul",[r("li",[r("router-link",{attrs:{to:"/cp/soft.html#观察者和发布订阅的区别是？"}},[e._v("发布订阅")])],1)]),e._v(" "),r("p",[e._v("借助第三方来实现调度的，发布者和订阅者之间互不感知")]),e._v(" "),r("p",[e._v("例子：vue的eventbus")]),e._v(" "),r("ul",[r("li",[r("router-link",{attrs:{to:"/-Design-Patterns-Typescript/#/?id=策略"}},[e._v("策略模式")])],1)]),e._v(" "),r("p",[e._v("能让你定义一系列算法，并将每种算法放入独立的类中，以使算法的对象互相替换")]),e._v(" "),r("p",[e._v("例子："),r("code",[e._v("axios")]),e._v("支持浏览器端和node端")]),e._v(" "),r("ul",[r("li",[r("router-link",{attrs:{to:"/-Design-Patterns-Typescript/#/?id=中介者"}},[e._v("中介者")])],1)]),e._v(" "),r("p",[e._v("限制对象之间的直接交互， 迫使它们通过一个中介者对象进行合作，减少对象之间混乱无序的依赖关系")]),e._v(" "),r("p",[e._v("例子：vuex")]),e._v(" "),r("h3",{attrs:{id:"如何实现集群下的单例模式？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#如何实现集群下的单例模式？","aria-hidden":"true"}},[e._v("#")]),e._v(" 如何实现集群下的单例模式？")]),e._v(" "),r("p",[e._v("我们需要把这个单例对象序列化并存储到外部共享存储区(比如文件、或者第三方中间件如redis)。")]),e._v(" "),r("p",[e._v("进程在使用这个单例对象的时候，需要先从外部共享存储区中将它读取到内存，并反序列化成对象，然后再使用，使用完成之后还需要再存储回外部共享存储区。")]),e._v(" "),r("p",[e._v("为了保证任何时刻在进程间都只有一份对象存在，一个进程在获取到对象之后，需要对对象加锁，避免其他进程再将其获取。在进程使用完这个对象之后，需要显式地将对象从内存中删除，并且释放对对象的加锁。")]),e._v(" "),r("h3",{attrs:{id:"享元模式和对象池有什么区别？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#享元模式和对象池有什么区别？","aria-hidden":"true"}},[e._v("#")]),e._v(" 享元模式和对象池有什么区别？")]),e._v(" "),r("p",[e._v("对象池、连接池(比如数据库连接池)、线程池等也是为了复用，那它们跟享元模式有什么\n区别呢?")]),e._v(" "),r("p",[e._v("对象池是指像 C++ 这样的编程语言，内存的管理是由程序员负责的。为了避免频繁地进行对象创 建和释放导致内存碎片，我们可以预先申请一片连续的内存空间，也就是这里说的对象池。 每次创建对象时，我们从对象池中直接取出一个空闲对象来使用，对象使用完成之后，再放 回到对象池中以供后续复用，而非直接释放掉。。")]),e._v(" "),r("p",[e._v("池化技术中的“复用”可以理解为“重复使用”，主要目的是节省时间(比如从数据库池中\n取一个连接，不需要重新创建)。在任意时刻，每一个对象、连接、线程，并不会被多处使\n用，而是被一个使用者独占，当使用完成之后，放回到池中，再由其他使用者重复利用。享\n元模式中的“复用”可以理解为“共享使用”，在整个生命周期中，都是被所有使用者共享\n的，主要目的是节省空间。")]),e._v(" "),r("h3",{attrs:{id:"观察者和发布订阅的区别是？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#观察者和发布订阅的区别是？","aria-hidden":"true"}},[e._v("#")]),e._v(" 观察者和发布订阅的区别是？")]),e._v(" "),r("p",[e._v("观察者模式中主体和观察者是互相感知的，发布-订阅模式是"),r("strong",[e._v("借助第三方来实现调度")]),e._v("的，发布者和订阅者之间互不感知：")]),e._v(" "),r("img",{attrs:{src:"https://raw.githubusercontent.com/brizer/graph-bed/master/img/20190710190123.png"}}),e._v(" "),r("h3",{attrs:{id:"平常在哪些地方有使用到观察者或发布-订阅模式？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#平常在哪些地方有使用到观察者或发布-订阅模式？","aria-hidden":"true"}},[e._v("#")]),e._v(" 平常在哪些地方有使用到观察者或发布 / 订阅模式？")]),e._v(" "),r("p",[e._v("前端一般在事件通信和响应式数据管理的情况下会用到观察者模式，具体可以参考"),r("a",{attrs:{href:"https://omnipotent-front-end.github.io/-Design-Patterns-Typescript/#/observer/index?id=_1%e3%80%81%e4%ba%8b%e4%bb%b6%e9%80%9a%e4%bf%a1",target:"_blank",rel:"noopener noreferrer"}},[e._v("design - 设计模式（以Typescript描述）"),r("OutboundLink")],1)]),e._v(" "),r("h3",{attrs:{id:"适配器模式是什么？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#适配器模式是什么？","aria-hidden":"true"}},[e._v("#")]),e._v(" 适配器模式是什么？")]),e._v(" "),r("p",[e._v("适配器模式是一种结构型设计模式， 它能使接口不兼容的对象能够相互合作。")]),e._v(" "),r("p",[e._v("具体的应用场景可以参考："),r("a",{attrs:{href:"https://omnipotent-front-end.github.io/-Design-Patterns-Typescript/#/adapter/index?id=%e5%ba%94%e7%94%a8%e5%9c%ba%e6%99%af",target:"_blank",rel:"noopener noreferrer"}},[e._v("design - 设计模式（以Typescript描述）"),r("OutboundLink")],1)]),e._v(" "),r("h3",{attrs:{id:"中介者模式了不了解？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#中介者模式了不了解？","aria-hidden":"true"}},[e._v("#")]),e._v(" 中介者模式了不了解？")]),e._v(" "),r("p",[e._v("中介者是一种行为设计模式，能让你减少对象之间混乱无序的依赖关系。该模式会限制对象之间的直接交互，迫使它们通过一个中介者对象进行合作。")]),e._v(" "),r("p",[e._v("具体应用场景可以参考："),r("a",{attrs:{href:"https://omnipotent-front-end.github.io/-Design-Patterns-Typescript/#/mediator/index?id=_1%e3%80%81%e6%95%b0%e6%8d%ae%e7%8a%b6%e6%80%81%e7%ae%a1%e7%90%86",target:"_blank",rel:"noopener noreferrer"}},[e._v("design - 设计模式（以Typescript描述）"),r("OutboundLink")],1)]),e._v(" "),r("h3",{attrs:{id:"代理模式了解不？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#代理模式了解不？","aria-hidden":"true"}},[e._v("#")]),e._v(" 代理模式了解不？")]),e._v(" "),r("p",[e._v("代理是一种结构型设计模式，让你能够提供对象的替代品或其占位符。代理控制着对于原对象的访问，并允许在将请求提交给对象前后进行一些处理。")]),e._v(" "),r("p",[e._v("具体应用场景可以参考："),r("a",{attrs:{href:"https://omnipotent-front-end.github.io/-Design-Patterns-Typescript/#/proxy/index?id=%e5%ba%94%e7%94%a8%e5%9c%ba%e6%99%af",target:"_blank",rel:"noopener noreferrer"}},[e._v("design - 设计模式（以Typescript描述）"),r("OutboundLink")],1)]),e._v(" "),r("h3",{attrs:{id:"单例模式了解不？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#单例模式了解不？","aria-hidden":"true"}},[e._v("#")]),e._v(" 单例模式了解不？")]),e._v(" "),r("p",[e._v("单例模式是一种创建型设计模式， 让你能够保证一个类只有一个实例， 并提供一个访问该实例的全局节点。")]),e._v(" "),r("p",[e._v("具体应用场景可以参考："),r("a",{attrs:{href:"https://omnipotent-front-end.github.io/-Design-Patterns-Typescript/#/singleton/index?id=%e5%ba%94%e7%94%a8%e5%9c%ba%e6%99%af",target:"_blank",rel:"noopener noreferrer"}},[e._v("design - 设计模式（以Typescript描述）"),r("OutboundLink")],1)]),e._v(" "),r("h2",{attrs:{id:"编程模型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#编程模型","aria-hidden":"true"}},[e._v("#")]),e._v(" 编程模型")]),e._v(" "),r("h3",{attrs:{id:"了解-mvc-mvp-mvvm-的区别吗？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#了解-mvc-mvp-mvvm-的区别吗？","aria-hidden":"true"}},[e._v("#")]),e._v(" 了解 MVC / MVP / MVVM 的区别吗？")]),e._v(" "),r("p",[e._v("MVC、MVP 和 MVVM 是三种常见的软件架构设计模式，主要通过分离关注点的方式来组织代码结 构，优化我们的开发效率。")]),e._v(" "),r("p",[e._v("MVC 通过分离 Model、View 和 Controller 的方式来组织代码结构。其中 View 负责页面的 显示逻辑，Model 负责存储页面的业务数据，以及对相应数据的操作。并且 View 和 Model 应 用了观察者模式，当 Model 层发生改变的时候它会通知有关 View 层更新页面。Controller 层是 View 层和 Model 层的纽带，它主要负责用户与应用的响应操作，当用户与页面产生交互 的时候，Controller 中的事件触发器就开始工作了，通过调用 Model 层，来完成对 Model 的修改，然 后 Model 层再去通知 View 层更新。")]),e._v(" "),r("p",[e._v("MVP 模式与 MVC 唯一不同的在于 Presenter 和 Controller。在 MVC 模式中我们使用观察者模式，来实现当 Model 层数据发生变化的时候，通知 View 层的更新。这样 View 层和 Model 层耦合在一起，当项目逻辑变得复杂的时候，可能会造成代码的混乱，并且可能会对代 码的复用性造成一些问题。MVP 的模式通过使用 Presenter 来实现对 View 层和 Model 层 的解耦。MVC 中的\nController 只知道 Model 的接口，因此它没有办法控制 View 层的更新，MVP 模式中，View 层的接口暴露给了 Presenter 因此我们可以在 Presenter 中将 Model 的变化和 View 的 变化绑定在一起，以此来实现 View 和 Model 的同步更新。这样就实现了对 View 和 Model 的解耦，Presenter 还包含了其他的响应逻辑。")]),e._v(" "),r("p",[e._v("MVVM 模式中的 VM，指的是 ViewModel，它和 MVP 的思想其实是相同的，不过它通过双向的 数据绑定，将 View 和 Model 的同步更新给自动化了。当 Model 发生变化的时候，ViewModel 就会自动更新;ViewModel 变化了，View 也会更新。这样就将 Presenter 中的工作给自动化了。我了解过一点双向数据绑定的原理，比如 vue 是通过使用数据劫持和发布订阅者模式来 实现的这一功能。")]),e._v(" "),r("p",[e._v("参考：")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://juejin.cn/post/6844903480126078989",target:"_blank",rel:"noopener noreferrer"}},[e._v("浅析前端开发中的 MVC/MVP/MVVM 模式"),r("OutboundLink")],1)]),e._v(" "),r("h3",{attrs:{id:"mvc和mvvm的区别？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mvc和mvvm的区别？","aria-hidden":"true"}},[e._v("#")]),e._v(" MVC和MVVM的区别？")]),e._v(" "),r("p",[e._v("MVC允许在不改变视图的情况下改变视图对用户输入的响应方式，用户对View的操作交给了Controller处理，在Controller中响应View的事件调用Model的接口对数据进行操作，一旦Model发生变化便通知相关视图进行更新")]),e._v(" "),r("p",[e._v("MVVM与MVC最大的区别就是：它实现了View和Model的自动同步，也就是当Model的属性改变时，我们不用再自己手动操作Dom元素，来改变View的显示，而是改变属性后该属性对应View层显示会自动改变")]),e._v(" "),r("p",[e._v("参考：")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.kancloud.cn/lixianshengdezhanghao/interview/904696",target:"_blank",rel:"noopener noreferrer"}},[e._v("11. MVC和MVVM的区别 · 面试题 · 看云"),r("OutboundLink")],1)])])},[],!1,null,null,null);t.default=v.exports}}]);