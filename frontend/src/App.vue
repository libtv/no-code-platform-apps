<template>
  <div id="app">
    <div class="menu">
      <a>Community</a>
      <a v-for="i in menus" :key="i">{{ i }}</a>
    </div>
    <div>
      <h4>자유게시판</h4>
      <p v-for="j, i in contents" :key="j">{{ title[i] }} {{ j }}</p>
      <a href="write"><button>글쓰기</button></a>
      <button v-on:click="recommendNum[0]++">추천</button>
      <span>추천수 {{ recommendNum[0] }}</span>
  </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      menus : ['공지사항', 'Best', 'About'],
      title : ['제목1', '제목2', '제목3'],
      contents : ['내용1', '내용2', '내용3'],
      recommendNum : [0, 0, 0],
    }
  },
  methods : {

  },
  components : {

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.menu {
  background: slateblue;
  padding: 20px;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding: 20px;
  text-decoration: none;
}

</style>
