<template>
  <div>
    <h1>姓名：{{ info.name }}</h1>
    <h2>年龄：{{ info.age }}</h2>
    <h2>兴趣：{{ info.interest }}</h2>
    <h2>asyncData获取的name：{{ title }}</h2>
    <button @click="dd">get</button>
  </div>
</template>
<script>
//import axios from "axios";//已在nuxt.config.js中配置axios项

export default {
  data() {
    return {
      name: "jason",
      info: {},
    };
  },
  methods: {
    dd() {
      //已在nuxt.config.js中配置axios项,注意prefix，用this.$axios直接调用
      this.$axios.get("hello").then((res) => {
        this.info = res.data;
        console.log(this.info);
      });
    },
  },
  // asyncData方法会在组件（限于页面组件）每次加载之前被调用
  // 返回 Promise,return info对象直接到data里
  // asyncData({ params }) {
  //   return axios.get("../data.json").then((res) => {
  //     console.log(res);
  //     return { info: res.data };
  //   });
  // },
  // 使用 async 或 await
  // async asyncData({ params }) {
  //   let { data } = await axios.get("/api/hello");
  //   return { info: data };
  // },
  asyncData() {
    return fetch("http://localhost:1818/api/hello", { method: "GET" }) //fetch 方法用于在渲染页面前填充应用的状态树（store）数据
      .then((res) => res.json())
      .then((res) => {
        // asyncData 方法获取的数据会与组件数据合并，所以这里返回对象
        return {
          title: res.name,
        };
      });
  },
};
</script>