<template>
  <section class="container">
    <div>
      <app-logo />
      <h1 class="title">nuxt-demo</h1>
      <h2 class="subtitle">nuxt practice</h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green"
          >Documentation</a
        >
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
          >GitHub</a
        >
        <a href="/" target="_parent" class="button--grey">Home</a>
        <!-- nuxt-link相当于vue的 <router-link> ，无论是 HTML5 history 模式还是 hash 模式 -->
        <nuxt-link to="about"
          ><span class="button--grey">About</span></nuxt-link
        >
        <!-- 使用 v-bind 的 JS 表达式  :to="{ name: 'news_id', params: { id: 3306 } 相当于组件_id.vue-->
        <nuxt-link
          :to="{ name: 'news', params: { newsId: 3306, title: '修改meta' } }"
          ><span class="button--grey">News</span></nuxt-link
        >
        <!-- <a href="/news" target="_parent" class="button--grey">News</a> -->
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from "~/components/AppLogo.vue";

export default {
  components: {
    AppLogo,
  },
  // layout: "mylayout",
};
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

