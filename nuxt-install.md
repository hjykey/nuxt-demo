**nuxt.js安装**

在使用npm前你需要安装Node到系统中，如果你还不会安装Node，那就不要学这节课了，而是从技术胖的Vue基础课程开始学起吧，等基础都学会了再来学这个也不迟。

1.用npm来安装vue-cli这个框架，如果你已经安装过了，可以省略这步。

```
npm install vue-cli -g
```

这个根据你的网络环境不同，安装的速度不仅相同，如果你的网络环境实在不好，可以考虑使用cnpm来进行安装。（在实际开发中我会尽量避免使用cnpm来进行安装，因为会出现一些未知的错误。）

安装完成后可以使用vue -V 来测试是否安装成功。（注意：这里要使用大写的V，小写无效）。

2.使用vue安装 nuxt

安装好vue-cli后，就可以使用init命令来初始化Nuxt.js项目。

```
vue init nuxt/starter
```

这时候他会在github上下载模版，然后会询问你项目的名称叫什么，作者什么的，这些完全可以根据自己的爱好填写。

3.使用npm install安装依赖包

```
npm install
```

这个过程是要等一会的，如果你这个过程安装失败，也不要慌张，你可以直接诶删除项目中的node_modules文件夹后，重新npm install进行安装。

4.使用npm run dev 启动服务

```
npm run dev
```

5.在浏览器输入 localhost:3000,可以看到结果。

**生成的目录结构：**

Nuxt自动生产了项目目录，我们先来一个一个介绍一下。

```
|-- .nuxt                            // Nuxt自动生成，临时的用于编辑的文件，build
|-- assets                           // 用于组织未编译的静态资源入LESS、SASS 或 JavaScript
|-- components                       // 用于自己编写的Vue组件，比如滚动组件，日历组件，分页组件
|-- layouts                          // 布局目录，用于组织应用的布局组件，不可更改。
|-- middleware                       // 用于存放中间件
|-- pages                            // 用于存放写的页面，我们主要的工作区域
|-- plugins                          // 用于存放JavaScript插件的地方
|-- static                           // 用于存放静态资源文件，比如图片
|-- store                            // 用于组织应用的Vuex 状态管理。
|-- .editorconfig                    // 开发工具格式配置
|-- .eslintrc.js                     // ESLint的配置文件，用于检查代码格式
|-- .gitignore                       // 配置git不上传的文件
|-- nuxt.config.json                 // 用于组织Nuxt.js应用的个性化配置，已覆盖默认配置
|-- package-lock.json                // npm自动生成，用于帮助package的统一性设置的，yarn也有相同的操作
|-- package-lock.json                // npm自动生成，用于帮助package的统一性设置的，yarn也有相同的操作
|-- package.json                     // npm包管理配置文件
```