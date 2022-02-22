<template>
  <div class="hello">
    <div class="menu">
      <a>Community</a>
      <a v-for="i in menus" :key="i">{{ i }}</a>
    </div>
    <div>
      <h4>자유게시판</h4>
      <p v-for="j, i in contents" :key="j">{{ title[i] }} {{ j }}</p>
      <router-link to="/write"><button>글쓰기</button></router-link>
      <button v-on:click="recommendNum[0]++">추천</button>
      <span>추천수 {{ recommendNum[0] }}</span>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      menus : ['공지사항', 'Best', 'About'],
      title : ['제목1', '제목2', '제목3'],
      contents : ['내용1', '내용2', '내용3'],
      recommendNum : [0, 0, 0],
    }
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
.menu {
  background: #2c3e50;
  padding: 20px;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding: 20px;
  text-decoration: none;
}
</style>
