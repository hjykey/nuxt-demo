<template>
  <div>
    <h2>News Index page</h2>
    <p>NewsID:{{ $route.params.newsId }}</p>
    <a href="/" target="_parent" class="button--grey">HOME</a>
    <ul>
      <li><a href="/news/123">News-1</a></li>
      <li><a href="/news/js">News-404</a></li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return { tt: this.$route.params.title };
  },
  head() {
    return {
      title: this.tt,
      meta: [
        {
          hid: "description",
          name: "news",
          content: "this a nuxt practice",
        },
      ],
    };
  },
};
</script>