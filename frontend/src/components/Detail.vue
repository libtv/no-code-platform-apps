<template>
  <div class="detail-page">
      <form>
				<table class="tbAdd">
					<colgroup>
						<col width="15%" />
						<col width="*" />
					</colgroup>
					<tr>
						<th>제목</th>
						<td>{{ title }}</td>
					</tr>
					<tr>
						<th>내용</th>
						<td class="txt_cont" v-html="content"></td>
					</tr>
				</table>
			</form>
      <button v-on:click="good ? goodNum++ : goodNum--">좋아요</button>
      <span>{{ goodNum }}</span>
  </div>
</template>

<script>
export default {
    name: "detail",
    data() {
        return {
            body: this.$route.query,
            title:'',
            content:'',
            good : true,
            goodNum : 0,
            num: this.$route.query.num
        }
    },
    mounted() {
        this.getView();
    },
    methods: {
        getView() {
            this.$axios.get('http://localhost:8081/' + this.body.num, {params: this.body})
            .then((res)=>{
				this.view = res.data.view.rows[0];
				this.title = this.view[0];
                this.content = this.view[1].replace(/(\n)/g,'<br/>');
			})
			.catch((err)=>{
				console.log(err);
			})
        }
    }
}
</script>

<style>
.detail-page {
    padding: 10px;
}
</style>