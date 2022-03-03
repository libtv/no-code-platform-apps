<template>
  <div class="hello">
    <div class="wrap">
      <h4 class="free">자유게시판</h4>
      <router-link to="/write"><button class="writeGo">글쓰기</button></router-link>
      <table class="tbList">
        <tr>
          <th>no</th>
          <th>제목</th>
          <th>아이디</th>
          <th>날짜</th>
        </tr>
        <tr v-for="(row, idx) in list" :key="idx">
          <td>{{ row[5] }}</td>
          <td class="title_txt"><a href="#" @click="getView(`${row[5]}`)">{{ row[0] }}</a></td>
          <td>{{ row[2] }}</td>
          <td>{{ row[4].substring(0, 10) }}</td>
        </tr>
        <p v-if="list.length == 0">글이 없습니다.</p>
      </table>
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
          this.list = res.data.list.rows;
        } else {
          alert("실패했습니다.")
        }
			})
			.catch((err)=>{
				console.log(err);
			})
		},
    getView(num) {
      this.body.num = num;
      this.$router.push({path: './detail', query: this.body});
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
.wrap {
  width: 60%;
}
.tbList th {
  padding: 10px;
  border-top: 1px solid #888;
}
.tbList th, .tbList td {
  border-bottom:1px solid #eee; 
  padding:5px 0;
}
.tbList td.title_txt {
  text-align: left;
}
.tbList td.title_txt a {
  text-decoration: none;
  /* color: #2c3e50; */
}
</style>
