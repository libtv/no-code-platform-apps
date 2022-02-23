<template>
  <div class="hello">
    <Header/>
    <div>
      <h4 class="free">자유게시판</h4>
      <router-link to="/write"><button class="writeGo">글쓰기</button></router-link>
      <p v-for="j, i in contents" :key="j">{{ title[i] }} {{ j }}</p>
      <a href="javascript:;" @click="getList">GET 방식 데이터 접근</a>
      <button v-on:click="recommendNum[0]++">추천</button>
      <span>추천수 {{ recommendNum[0] }}</span>      
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header';

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      title : ['제목1', '제목2', '제목3'],
      contents : ['내용1', '내용2', '내용3'],
      recommendNum : [0, 0, 0],
    }
  },
  methods: {
    getList() {
			this.$axios.get("http://localhost:8081/api")
			.then((res)=>{
				console.log(res);
			})
			.then((err)=>{
				console.log(err);
			})
		}
  },
  components: {
    Header
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
