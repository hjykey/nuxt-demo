 import serveStatic from 'serve-static'

 module.exports = {
   /*
    ** Headers of the page
    */
   head: {
     title: 'nuxt-demo',
     meta: [{
         charset: 'utf-8'
       },
       {
         name: 'viewport',
         content: 'width=device-width, initial-scale=1'
       },
       {
         hid: 'description',
         name: 'description',
         content: 'nuxt practice'
       }
     ],
     link: [{
       rel: 'icon',
       type: 'image/x-icon',
       href: '/favicon.ico'
     }]
   },
   /*
    ** Customize the progress bar color
    */
   loading: {
     color: '#3B8070'
   },
   /*
    ** Build configuration
    */
   build: {
     //对webpack的基本配置进行覆盖，url-loader来进行小图片的64位打包    
     rules: [{
       test: /\.(png|jpe?g|gif|svg)$/,
       loader: "url-loader",
       query: {
         limit: 10000,
         name: 'img/[name].[hash].[ext]'
       }
     }],
     /*
      ** Run ESLint on save
      */
     extend(config, {
       isDev,
       isClient
     }) {
       if (isDev && isClient) {
         config.module.rules.push({
           enforce: 'pre',
           test: /\.(js|vue)$/,
           loader: 'eslint-loader',
           exclude: /(node_modules)/
         })
       }
     }
   },
   // 指定全局样式，用a标签跳转，此处动画效果无效
   css: ['~assets/css/normalize.css'],

   // serverMiddleware: ['~/api/index']

   serverMiddleware: [
     // Will register redirect-ssl npm package
     // 'redirect-ssl',

     // Will register file from project api directory to handle /api/* requires
     {
       path: '/api',
       handler: '~/api/index.js'
     },

     // We can create custom instances too
     {
       path: '/static',
       handler: serveStatic(__dirname + './static/test.vue')
     }
   ]

 }
