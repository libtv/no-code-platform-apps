<template>
  <div class="hello">
    <div>
      <h4 class="free">자유게시판</h4>
      <router-link to="/write"><button class="writeGo">글쓰기</button></router-link>
      <tr>
        <th>no</th>
        <th>제목</th>
        <th>아이디</th>
        <th>날짜</th>
      </tr>
      <tr v-for="(row, idx) in list" :key="idx">
        <td>{{ no-idx }}</td>
        <td><a href="#">{{ row.title }}</a></td>
        <td>{{ row.writer }}</td>
        <td>{{ row.time }}</td>
      </tr>
      <p v-if="list.length == 0">글이 없습니다.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      list : '',
    }
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
			this.body = {

      }
      this.$axios.get("http://localhost:8081/list")
			.then((res)=>{
				console.log(res);
        if(res.data.success) {
          this.list = res.data.list;
        } else {
          alert("실패했습니다.")
        }
			})
			.catch((err)=>{
				console.log(err);
			})
		}
  },
  components: {

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
