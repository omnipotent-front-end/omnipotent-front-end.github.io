(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{283:function(a,e,t){"use strict";t.r(e);var s=t(38),r=Object(s.a)({},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"shell"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shell","aria-hidden":"true"}},[a._v("#")]),a._v(" Shell")]),a._v(" "),t("h2",{attrs:{id:"应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#应用","aria-hidden":"true"}},[a._v("#")]),a._v(" 应用")]),a._v(" "),t("h3",{attrs:{id:"如何替换一个文件中的内容？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何替换一个文件中的内容？","aria-hidden":"true"}},[a._v("#")]),a._v(" 如何替换一个文件中的内容？")]),a._v(" "),t("p",[a._v("1、vi/vim编辑")]),a._v(" "),t("p",[a._v("2、sed和grep配合")]),a._v(" "),t("p",[a._v("命令：sed -i s/yyyy/xxxx/g "),t("code",[a._v('grep yyyy -rl --include="*.txt" ./')])]),a._v(" "),t("p",[a._v("作用：将当前目录(包括子目录)中所有txt文件中的yyyy字符串替换为xxxx字符串。其中，")]),a._v(" "),t("p",[a._v("-i 表示操作的是文件，``括起来的grep命令，表示将grep命令的的结果作为操作文件。")]),a._v(" "),t("p",[a._v("s/yyyy/xxxx/表示查找yyyy并替换为xxxx，后面跟g表示一行中有多个yyyy的时候，都替换，而不是仅替换第一个")]),a._v(" "),t("p",[a._v("另外，如果不需要查找子目录，仅需要在当前目录替换，用sed命令就行了，命令如下："),t("code",[a._v("sed -i s/xxxx/yyyy/g ./*.txt")])]),a._v(" "),t("p",[a._v("3、find")]),a._v(" "),t("p",[a._v("命令格式：find -name '要查找的文件名' | xargs perl -pi -e 's|被替换的字符串|替换后的字符串|g'")]),a._v(" "),t("p",[a._v("#查找替换当前目录下包含字符串并进行替换")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("find -name '*.txt' | xargs perl -pi -e 's|智慧乡村|北部山区|g'\n")])])]),t("p",[a._v("#递归查找替换")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("find . -type f -name '*.html' | xargs perl -pi -e 's|智慧乡村|北部山区|g'\n\n")])])]),t("h3",{attrs:{id:"awk有什么用？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#awk有什么用？","aria-hidden":"true"}},[a._v("#")]),a._v(" awk有什么用？")]),a._v(" "),t("p",[a._v("相对于grep的查找，sed的编辑，awk在其对数据分析并生成报告时，显得尤为强大。简单来说awk就是把文件逐行的读入，以空格为默认分隔符将每行切片，切开的部分再进行各种分析处理。")]),a._v(" "),t("h3",{attrs:{id:"对一个文件如何只查看特定行的内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对一个文件如何只查看特定行的内容","aria-hidden":"true"}},[a._v("#")]),a._v(" 对一个文件如何只查看特定行的内容")]),a._v(" "),t("p",[a._v("cat/more/less/head/tail")]),a._v(" "),t("p",[a._v("cat可以文件整体内容；")]),a._v(" "),t("p",[a._v("more可以指定从第几行开始，已分页的方式展示文件内容；")]),a._v(" "),t("p",[a._v("less比more更加强大，解决了more不能往后翻的问题，且less不会一次性加载所有文件内容；")]),a._v(" "),t("p",[a._v("head用来看一个文件的前多少行；")]),a._v(" "),t("p",[a._v("tail用来看一个文件的最后多少行；")]),a._v(" "),t("p",[a._v("所以这个需求需要多个命令配合：")]),a._v(" "),t("p",[a._v("【一】从第3000行开始，显示1000行。即显示3000~3999行")]),a._v(" "),t("p",[a._v("cat filename | tail -n +3000 | head -n 1000")]),a._v(" "),t("p"),a._v(" "),t("p",[a._v("【二】显示1000行到3000行")]),a._v(" "),t("p",[a._v("cat filename| head -n 3000 | tail -n +1000")]),a._v(" "),t("h3",{attrs:{id:"rcp和scp有什么区别？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rcp和scp有什么区别？","aria-hidden":"true"}},[a._v("#")]),a._v(" rcp和scp有什么区别？")]),a._v(" "),t("p",[a._v("rcp通过rsh方式远端复制文件或目录。\nscp通过ssh方式远端复制文件或目录。scp更加安全，可以理解为rcp的取代品。")])])},[],!1,null,null,null);e.default=r.exports}}]);