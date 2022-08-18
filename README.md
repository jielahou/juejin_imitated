# 仿掘金官网 - 2022前端青训营大作业

请访问【汇报文档地址】以获得更好的阅读体验哟！

## 一、项目介绍

本项目主要仿制了掘金官网的首页和文章页，实现了首页信息流无限滚动、Markdown解析、自动生成toc目录、toc自动滚动等功能。

项目服务地址：http://juejin.cangku.pw/

Github地址：https://github.com/jielahou/juejin_imitated

## 二、项目实现

# 2.1 技术选型与相关开发文档

技术选型：Vue2+ElementUI+marked.js+highlight.js

要解决的问题1：首页无限信息流

解决方案：列表元素底部距离视窗上边沿一定距离时，就触发加载函数。

具体的解决过程已记录至本次青训营笔记活动中，详见：https://juejin.cn/post/7131744771512467470

要解决的问题2：文档toc自动生成、toc目录随页面滚动自动高亮

解决方案：
- 关于文档toc自动生成，我们是按出现的先后顺序解析正文部分的h1和h2元素，将其id、内容、标题等级等数据记录到一个数组当中。再根据数组去生成文章的toc目录。
- 关于toc目录随页面滚动自动高亮，我们设置了页面的onscroll事件的回调函数，该函数会遍历所有的正文部分的h1和h2元素，通过getBoundingClientRect()方法获取这些元素距离页面顶部的距离，再根据页面是上滑还是下滑，来判断当前读者正在阅读哪一个标题下的内容，进而指定toc目录中的对应元素进行高亮。

要解决的问题3：使得toc高亮项始终处于可视窗口内
 
解决方案：对于toc中前5项和后5项单独处理，将toc目录盒子的scrollTop指定为固定值即可；对于其他项，toc目录盒子的scrollTop指定为45*(index - 5)（45为目录中1项的高度），使得高亮项始终处于可视区域内的第5个元素。

要解决的问题4：使toc目录始终处于视口内

解决方案：使用position: sticky;解决。

要解决的问题5：Markdown文章渲染与代码高亮

解决方案：我们使用marked.js进行文章渲染、使用highlight.js处理代码高亮。

# 2.2 项目代码介绍

```
JUEJIN_IMITATED\SRC
│  App.vue
│  AppTest.vue --测试用主文件
│  main.js
│
├─assets
│      logo.png
│
├─components
│  │
│  ├─MyNav
│  │      MyTopNav.vue --顶部导航栏
│  │
│  └─page
│          Article.vue --文章页
│          Aside.vue --文章页侧边栏
│          AuthorMiniInfo.vue --文章页正文作者信息
│          Catalog.vue --第一版toc目录
│          Catalog2.vue --第二版toc目录
│          Content.vue --文章正文
│          EntryList.vue --首页文章列表
│          Index.vue --首页
│          IndexAside.vue --首页侧边栏
│          test.md --（原本的）测试Markdown
│
├─mock
│      Article.js --测试用文章数据
│      IndexList.js --测试首页列表数据
│
├─router
│      index.js --路由
│
└─utils
        request.js --预留的axios助手文件
```

# 三、测试结果
建议从功能测试和性能测试两部分分析，其中功能测试补充测试用例，性能测试补充性能分析报告、可优化点等内容。

测试1：首页无限滚动 ——通过

测试2：——通过 包含：
- toc自动生成
- toc自动滚动&高亮
- toc点击跳转
- toc附着顶部
- 导航栏自动隐藏

测试3：markdown渲染——通过

测试markdown源文本：包含标题、表格、代码高亮、加粗、斜体、删除线等等语法。

```
# 标题1-1

\`\`\`c
printf("Hello world!");
\`\`\`

\`\`\`python
print("Hello world!")
\`\`\`

| col1 | col2 | col3 |
| --- | --- | --- |
| hello | 没关系 | 只是会掉眼泪而已 |

**思念在躲避** *却依然* ~逃不过回忆~
测试效果：
[图片]
```


# 四、使用方式

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
