# 开发效率提升之工具篇

### 导读

工欲善其事必先利其器!

还记得: 刚参加工作的时候, 有位开发的同事软件使用效率奇高. 我曾亲眼目睹他在几秒之内打开开发软件, 优雅地调出隐藏的功能, 输入数据输出结果的过程行云流水, 一气呵成, 而手指却始终不曾离开键盘. 吃惊的同时, 不仅发现提高开发效率是多么的重要! 这便有了本篇文字.

本文侧重开发且兼顾PM同学, 工具分享会涉及到:

1. PM或博客撰写者markdown编辑器推荐
2. mac重度依赖者应用推荐
3. 终端便捷工具推荐
4. Chrome Extension及扩展插件开发
5. Alfred workflow 自制及开源的推荐

### 随时记下闪现的灵感

人的一天中大脑会产生大约6万个想法, 其中不乏有许多优秀的 idea. 如果我们能学会捕捉哪怕是部分灵感, 也将会收获巨大. 因此工作中需要及时地记下闪现的灵感, 以方便闲暇时温故而知新. 这里推荐两个笔记应用: ① [Evernote](https://www.yinxiang.com/) ② [OneNote](http://www.onenote.com/) . (注: Evernote速记快捷键Control+Command+N)

### Markdown编辑器

目前可供选择的markdown编辑器至少以下有六种:

1. [Typora](http://www.typora.io/), 简洁轻便免费, 独有的所见即所得, 可在预览状态下编辑, 快捷键丰富, 脚本高亮功能出彩, 导出为pdf后, 排版同样正常, 这点非常难得, 笔者使用的就是该款.
2. [Ulysses](http://www.ulyssesapp.com/), 功能强大, 快捷键丰富, 支持目录导入, 支持多终端同步.
3. [MWeb Lite](http://www.pc6.com/mac/161974.html),  [MWeb](http://zh.mweb.im/)的微型版, 不收费, 支持目录导入.
4. [macdown](http://macdown.uranusjr.com/), 基于mou开发, 轻量, 不支持目录导入.
5. [mou](http://25.io/mou/) 历史悠久, 据说有少量的bug, 具体请参考 [Mac 下两款 Markdown 编辑器 Mou/MacDown 大 PK \- 简书](http://www.jianshu.com/p/6c157af09e84) .
6. [markeditor](http://markeditor.com/app/markeditor), 新出的markdown编辑器, 注重视觉感受, 界面不错, 但运行较慢.

以上, 推荐开发使用 Typora, PM等使用 Ulysses.

### Mac重度依赖者

#### 开发工具

- [Charles](https://www.charlesproxy.com/) 网络封包分析应用, mac必备.
- [SnippetsLab](http://www.renfei.org/snippets-lab/) 优秀的代码片段管理工具, 轻量, 可基于菜单栏操作.
- [aText](http://www.trankynam.com/atext/) 输入增强应用, 比 [`TextExpander`](http://www.pc6.com/mac/146924.html) 要人性化许多，并且对中文和第三方输入法的支持都要更好.
- [Dash](https://kapeli.com/dash) mac上api集合应用, 几乎包含各种语言的api文档.

#### 提高效率

- [Keka](http://www.kekaosx.com/en/) 压缩或解压缩应用, 开源免费, 压缩比高, 操作便捷, 支持rar等解压, 压缩中文目录后, 在windows下打开不会存在乱码等现象.
- [Alfred 3](http://www.sdifenzhou.com/alfred3.html) 神奇的魔法帽, 支持 ① 快速打开application; ② 支持Finder, Calculator, Contacts, Clipboard, iTunes, System, Terminal 等原生应用的各种便捷功能; ③ 支持workflow(工作流).
- [iterm2](http://www.iterm2.com/) 增强版的终端应用, 功能强大, 支持分屏, 历史记录, 选中即复制等.
- [Scroll Reverser](http://pilotmoon.com/scrollreverser/) mac滚动方向自定义应用, 可分别设置鼠标和触摸板的上下左右的滚动效果.
- [Size up](http://www.irradiatedsoftware.com/sizeup/) 分屏应用, 类似Moon的一款应用, 支持上下左右居中及4个角落快速分屏.
- [Sip](http://www.pc6.com/mac/124262.html) 全屏取色应用, 支持快捷键调出(前端福音, 寻找多年,终于发掘出来了).
- [Graphviz](http://www.graphviz.org/) 贝尔实验室开发的有向图/无向图自动布局应用, 支持dot脚本绘制结构图, 流程图等. 可参考教程 [利用Graphviz 画结构图](http://www.cnblogs.com/sld666666/archive/2010/06/25/1765510.html) 及 [使用graphviz绘制流程图](http://www.cnblogs.com/CoolJie/archive/2012/07/17/graphviz.html) .
- [XMind](http://www.xmindchina.net/) 思维导图应用, 适合业务及思路梳理.
- [Pomodoro One](http://www.pc6.com/mac/136806.html) 番茄工作法的一款应用.

#### 折腾党玩转Mac

- [Bartender 2](https://www.macbartender.com/) mac任务栏管理应用, 支持隐藏所有菜单栏图标, 还您一个干净的菜单栏.
- [TextBar](https://www.macstories.net/mac/textbar-puts-your-text-into-the-menu-bar/) 自定义菜单栏输出, 支持script运行, 支持H5渲染.
- [Growl](http://growl.info/) 自定义通知样式, 支持多种主题以及颜色, 大小, 渐隐时间等各项参数的自定义.
- [ScreenFlow](http://screenflow.en.softonic.com/mac) 这或许是mac上最好用的屏幕录制软件.
- [Annotate](http://www.waitsun.com/annotate-2-0-5.html) 屏幕截图批注应用, 令人惊喜的是, 支持划区域gif制作, 教程以及动图制作者必备.
- [Tickeys](http://www.yingdev.com/projects/tickeys) 键盘打字风格模拟应用, 支持 Cherry轴等多种风格.
- [Karabiner](https://pqrs.org/osx/karabiner/) 键盘映射修改神器.
- [Keyboard Maestro](https://www.keyboardmaestro.com/main/) 键盘大师, mac下功能最为丰富的键盘增强应用.
- [BetterTouchTool](https://www.boastr.net/) mac触摸板增强神器.
- [keycue](http://www.pc6.com/mac/116332.html) 快捷键辅助应用, 帮助记忆快捷键.
- [AirServer](http://www.airserver.com/) IOS连接mac必备.
- [Beyond Compare](http://www.beyondcompare.cc/) 文件比较应用, 支持文件, 目录, FTP远程地址比较等.
- [Caffeine](http://www.pc6.com/mac/121734.html) 点亮mac, 避免长时间演示ppt而进入到休眠状态.
- [Debookee](http://www.pc6.com/mac/129593.html) 网络抓包及数据分析应用.
- [EasyFind](http://www.waerfa.com/easyfind) 小而强大的文件搜索应用, 媲美windows下的Everything.
- [FileZilla](https://filezilla-project.org/) 免费开源的FTP应用.
- [TripMode](http://www.pc6.com/mac/144495.html) 移动热点流量管家, 出差达人的福音.
- [Übersicht](http://sspai.com/28020) 华丽的桌面自定义应用, 类似于windows的 [`rainmeter`](http://rainmeter.cn/cms/). 支持H5.
- [Today Scripts](http://www.waerfa.com/today-scripts-for-yosemite-today-view) 个性化通知栏插件, 支持bash脚本.
- [OmniDiskSweeper](http://newping.cn/322) 硬盘空间扫描应用, 帮助mac减肥.
- [Kaleidoscope](http://www.pc6.com/mac/113361.html) 文件和图像比较应用, 支持图片比较, 能与 git, svn 等版本控制工具完美结合.
- [AppCleaner](http://freemacsoft.net/appcleaner/) mac应用卸载工具, 结合  [`AppCleaner`](https://github.com/Louiszhai/tool/blob/master/workflow/AppCleaner.alfredworkflow?raw=true) 的workflow, 使用效果更佳.
- [Mountain Tweaks](http://tweaksapp.com/app/mountain-tweaks/) mac隐藏功能开启应用.

### 终端命令

- [autojump]() 支持快速跳转到曾经打开过的目录下,安装方法: brew install autojump .
- [tmux]() 终端复用工具, 支持在终端中创建不依赖于终端的窗口, 安装方法: brew install tmux .

### Chrome Extension篇

#### 前端有关

- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) React开发者工具.
- [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) Redux开发者工具.
- [FE助手](https://chrome.google.com/webstore/detail/web%E5%89%8D%E7%AB%AF%E5%8A%A9%E6%89%8Bfehelper/pkgccpejnmalmdinmhkkfafefagiiiad0) 百度推出的前端助手, 具有很多便捷的小功能.
- [YSlow](https://chrome.google.com/webstore/detail/yslow/ninejjcohidippngpapiilnmkgllmakh) 雅虎性能分析工具.
- [Postman](https://chrome.google.com/webstore/detail/mkhojklkhkdaghjjfdnphfphiaiohkef) 接口调试工具, 几乎支持所有类型的http(s)请求.
- [JSONView](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc) json预览工具, 接口调试必备.
- [Page Ruler](https://chrome.google.com/webstore/detail/page-ruler/jlpkojjdgbllmedoapgfodplfhcbnbpn) 页面尺子, 页面重构或者严格按照设计图开发页面时, 将会非常有用.
- [Alexa Traffic Rank](https://chrome.google.com/webstore/detail/alexa-traffic-rank/cknebhggccemgcnbidipinkifmmegdel) 网站Alexa排名查看工具.

#### 工作效率有关

- [OneTab](https://chrome.google.com/webstore/detail/onetab/chphlpgkkbolifaimnlloiipkdnihall) 快速关闭并存储浏览器当前窗口所有Tab页, 可用于下次一键全部恢复.
- [Merge Windows](https://chrome.google.com/webstore/detail/merge-windows/mmpokgfcmbkfdeibafoafkiijdbfblfg) 合并所有浏览器窗口为同一个窗口.
- [Vimium](https://chrome.google.com/webstore/detail/vimium/dbepggeogbaibhgnhhndojpepiihcmeb) 键盘党必备, 使用vim命令管理页面.
- [Vysor](https://chrome.google.com/webstore/detail/vysor/gidgenkbbabolejbgbpnhbimgjbffefm) mac上直接操作 Android 手机, 且可远程共享手机操作界面.

#### 网站有关

- [Octotree](https://chrome.google.com/webstore/detail/octotree/bkhaagjahfmjljalopjnoealnfndnagc) Github重度依赖者必备, 提供左侧边栏, 快速浏览仓库内容. 
- [AdBlock](https://chrome.google.com/webstore/detail/adblock/gighmmpiobklfepjocnamgkkbiglidom) 超强去广告扩展, 近20W人使用.
- [阅读模式](https://chrome.google.com/webstore/detail/reader-view/iibolhpkjjmoepndefdmdlmbpfhlgjpl) 快速开启阅读模式, 进入沉浸式阅读, 并非支持所有网页.
- [Listen1](https://github.com/listen1/listen1_chrome_extension) 听歌插件, 避免各大网站来回搜歌, 音乐爱好者的福音.

#### Chrome Extension开发

相关文章

- [如何开发Chrome扩展程序 - 文章 - 伯乐在线](http://blog.jobbole.com/46608/)
- [Sample Extensions - Google Chrome](https://developer.chrome.com/extensions/samples)

### Alfred workflow

我曾经耗费巨大的精力, 试图在计算机的使用效率上找到一条优化的策略, 一直以来都收效甚微. 直到遇上Alfred, 它强大的工作流机制, 才让我明白原来计算机可以这么玩. 因为**它彻底解决了输入输出的痛点, 极大的减少了程序之间的切换成本以及按键成本**.

传统意义上, 使用mac时, 为了查询一个单词, 或者翻译一个单词, 我们要么经历五步: ① 手动打开浏览器 ② 进入谷歌首页 ③ 选中输入框 ④ 输入或粘贴查询单词, 然后空格并加上"翻译" 两个字, 然后再回车 ⑤ 等待浏览器展示查询结果; 要么经历四步: ① 打开翻译应用(比如自带词典) ② 输入或粘贴查询单词 ③ 翻译应用输出查询结果 ④ 查询过后, 一般都需要Command+Q退出应用(否则Dock栏将会全是未关闭的应用).

查询单词这个场景中, 我们至少需要兴师动众, 切换或打开一个应用两次, 定位输入框一次,  输入或复制粘贴一次. 且查询结果页也会挡住当前的工作区, 使得我们分心, 甚至忘记自己刚刚在做啥. 五个字 — 体验不流畅. 

而 Alfred 的工作流正是为了解决这个问题而设计的. 如果我们使用网友开发的 [`有道词典`](https://github.com/Louiszhai/tool/blob/master/workflow/youdao.alfredworkflow?raw=true) 的 workflow, **最快只需通过两次按键便可获取单词的查询结果**. 假如: 为了查询单词"workflow", 我会选中单词所在区域, 然后按住 Option+Y 键(我已将有道翻译的快捷键设置为 Option+Y), 单词查询结果就出来了, 而且不需要切换应用, 同时查询结果也较少的挡住工作区了. 如下:

![有道词典][youdao-image]

以上 Alfred 界面使用了少数派的主题. 

有关其他的workflow 内容, 请移步 [`Alfred Workflows`](https://github.com/Louiszhai/alfred-workflows) , 那里会有更多非常不错的 workflow 供您选用.



[youdao-image]: images/shortcuts-youdao.png