<template>
  <div>
    <h2>id: {{ $route.params.id }}</h2>
    <ul>
      <li><a href="/news" target="_parent" class="button--grey">News</a></li>
    </ul>
  </div>
</template>
<script>
export default {
  //路由校验方法
  validate({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id);
  },
};
</script>

