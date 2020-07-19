1. Webpack 的构建流程主要有哪些环节？如果可以请尽可能详尽的描述 Webpack 打包的整个过程

- webpack初始化（安装webpack相关插件及加载器等）
- 修改配置文件（入口，输出，加载器，插件等配置）
- 修改配置文件时每次都验证一下
- 配置package.json的scripts打包命令
- 执行打包命令完成打包

2. Loader 和 Plugin 有哪些不同？请描述一下开发 Loader 和 Plugin 的思路
- loader负责各个资源模块的加载，Plugin负责除资源模块的webpack其它自动化工作

- loader实现思路，加载器接收资源文件，并返回下个加载器所需内容，或者直接返回该加载可以解析完成的结果（即加载器可以单独完成任务也可以结合其它加载器一起使用完成任务）
- plugin通过钩子来实现， 通过把需要处理的任务挂载到钩子函数上来实现，并且plugin比loader的范围更广。

3. 1、使用 Webpack 实现 Vue 项目打包任务 具体任务及说明：
- 任务建git地址下work文件夹，任务说明在work文件夹REDEME.md文件
