<template>
  <div>
    <h1>姓名：{{ info.name }}</h1>
    <h2>年龄：{{ info.age }}</h2>
    <h2>兴趣：{{ info.interest }}</h2>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "jason",
    };
  },
  // asyncData方法会在组件（限于页面组件）每次加载之前被调用
  // 返回 Promise,return info对象直接到data里
  asyncData({ params }) {
    return axios
      .get(
        "http://www.tuling123.com/openapi/api?key=20ff1803ff65429b809a310653c9daac",
        {
          params: {
            info: "南宁天气",
          },
        }
      )
      .then((res) => {
        console.log(res);
        return { info: res.data };
      });
  },
  // 使用 async 或 await
  // async asyncData({ params }) {
  //   let { data } = await axios.get("../data.json");
  //   return { info: data };
  // },
};
</script>