# 开发效率提升之工具篇

### 导读

工欲善其事必先利其器!

还记得: 刚参加工作的时候, 有位开发的同事软件使用效率奇高. 我曾亲眼目睹他在几秒之内打开开发软件, 优雅地调出隐藏的功能, 输入数据输出结果的过程行云流水, 一气呵成, 而手指却始终不曾离开键盘. 吃惊的同时, 不仅发现提高开发效率是多么的重要!

本文侧重开发且兼顾PM同学, 工具分享会涉及到:

1. PM或博客编写者markdown编辑器推荐
2. mac重度使用者软件推荐
3. Chrome Extension及扩展插件开发
4. 终端便捷工具推荐
5. Alfred workflow 自制及开源的推荐

### 工作注意事项

人的一天中大脑会产生大约6万个想法, 其中不乏有许多优秀的 idea. 如果我们能学会捕捉哪怕是部分灵感, 也将会收获巨大. 因此工作中需要及时地记下闪现的灵感, 以方便闲暇时温故而知新. 这里推荐使用一些笔记软件比如说 ① [Evernote][] ② [OneNote][] 等. (注: Evernote速记快捷键Control+Command+N)

### Alfred workflow

我曾经耗费巨大的精力, 试图在计算机的使用效率上找到一条优化的策略, 一直以来都收效甚微. 直到遇上Alfred, 它强大的工作流机制, 才让我明白原来计算机可以这么玩. 因为**它彻底解决了输入输出的痛点, 极大的减少了程序之间的切换成本以及按键成本**.

传统意义上, 使用mac时, 为了查询一个单词, 或者翻译一个单词, 我们要么经历五步: ① 手动打开浏览器 ② 进入谷歌首页 ③ 选中输入框 ④ 输入或粘贴查询单词, 然后空格并加上"翻译" 两个字, 然后再回车 ⑤ 等待浏览器展示查询结果; 要么经历四步: ① 打开翻译应用(比如自带词典) ② 输入或粘贴查询单词 ③ 翻译应用输出查询结果 ④ 查询过后, 一般都需要Command+Q退出应用(否则Dock栏将会全是未关闭的应用).

查询单词这个场景中, 我们至少需要兴师动众, 切换或打开一个应用两次, 定位输入框一次,  输入或复制粘贴一次. 且查询结果页也会挡住当前的工作区, 使得我们分心, 甚至忘记自己刚刚在做啥. 五个字 — 体验不流畅. 

而 Alfred 的工作流正是为了解决这个问题而设计的. 如果我们使用网友开发的 [`有道词典`](https://github.com/Louiszhai/tool/blob/master/workflow/youdao.alfredworkflow?raw=true) 的 workflow, **最快只需通过两次按键便可获取单词的查询结果**. 假如: 为了查询单词"workflow", 我会选中单词所在区域, 然后按住 Option+Y 键(我已将有道翻译的快捷键设置为 Option+Y), 单词查询结果就出来了, 而且不需要切换应用, 同时查询结果也较少的挡住工作区了. 如下:

![有道词典][youdao-image]

以上 workflow, 界面我使用了少数派的主题. 

### 搜索

程序员都离不开搜索, 必备之搜索优化: ① 百度搜索|谷歌|雅虎|维基百科; ② 以http打头的超链接直接访问; 当然先后顺序可以自行调整.

### Chrome Extension篇

#### 前端有关

- [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)


- [FE助手][https://chrome.google.com/webstore/detail/web%E5%89%8D%E7%AB%AF%E5%8A%A9%E6%89%8Bfehelper/pkgccpejnmalmdinmhkkfafefagiiiad]
- [YSlow](https://chrome.google.com/webstore/detail/yslow/ninejjcohidippngpapiilnmkgllmakh)
- [Postman][https://chrome.google.com/webstore/detail/mkhojklkhkdaghjjfdnphfphiaiohkef]
- [JSONView][https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc]
- [Page Ruler][https://chrome.google.com/webstore/detail/page-ruler/jlpkojjdgbllmedoapgfodplfhcbnbpn]
- [Alexa Traffic Rank](https://chrome.google.com/webstore/detail/alexa-traffic-rank/cknebhggccemgcnbidipinkifmmegdel)

#### 工作效率有关

- [OneTab][https://chrome.google.com/webstore/detail/onetab/chphlpgkkbolifaimnlloiipkdnihall]
- [Merge Windows][https://chrome.google.com/webstore/detail/merge-windows/mmpokgfcmbkfdeibafoafkiijdbfblfg]
- [Vimium][https://chrome.google.com/webstore/detail/vimium/dbepggeogbaibhgnhhndojpepiihcmeb]
- [Gmail™][https://chrome.google.com/webstore/detail/checker-plus-for-gmail/oeopbcgkkoapgobdbedcemjljbihmemj]

#### 网站有关

- [Octotree](https://chrome.google.com/webstore/detail/octotree/bkhaagjahfmjljalopjnoealnfndnagc)
- [AdBlock](https://chrome.google.com/webstore/detail/adblock/gighmmpiobklfepjocnamgkkbiglidom) 近20W人使用
- [阅读模式][https://chrome.google.com/webstore/detail/reader-view/iibolhpkjjmoepndefdmdlmbpfhlgjpl]

#### Chrome Extension开发

相关文章

- [如何开发Chrome扩展程序 - 文章 - 伯乐在线](http://blog.jobbole.com/46608/)
- [Sample Extensions - Google Chrome](https://developer.chrome.com/extensions/samples)

### mac有关软件

#### 开发工具有关

- [Charles][]

#### 终端命令

- [autojump][]
- [tmux][]

#### 提高效率

##### [Keka][]

##### [Alfred 3][]

推荐理由: 

1. 快速打开application;
2. 支持Finder, Calculator, Contacts, Clipboard, iTunes, System, Terminal 等原生应用的各种便捷功能;
3. 支持workflow(工作流): 除去网上的400多个, 自研了四个: ①快捷查询 ②快捷生成二维码 ③常用网站查询  ④快捷键查询(mac快捷键)

##### [iterm2][]

##### [Scroll Reverser][]

##### [Size up][]

##### markdown编辑器

① [Typora][http://www.typora.io/] ② [Ulysses][http://www.ulyssesapp.com/] ③ [MWeb Lite][] ④ [macdown][] ⑤ [mou][]  ,

- 推荐前两款, 基于两点原因: 界面素洁, 功能完善, 快捷键全. 最后两款中 macdown 是 mou的升级版,

##### 屏幕取色 [Sip][]

- [XMind][]
- [Pomodoro One][]
- [Bartender 2][]



## License

Released under [MIT](http://rem.mit-license.org/)  LICENSE.



[youdao-image]: images/shortcuts-youdao.png
[youdao-workflow]: 