<template>
  <div class="detail-page">
      <button v-on:click="good ? goodNum++ : goodNum--">좋아요</button>
      <span>{{ goodNum }}</span>
  </div>
</template>

<script>
export default {
    name: "detail",
    data() {
        return {
            good : true,
            goodNum : 0,
            num: this.$router.query.num
        }
    },
    mounted() {
        this.getView();
    },
    methods: {
        getView() {
            this.$axios.get('http://localhost:8081/list' + this.body.num, {params: this.body})
            .then((res)=>{
				this.view = res.data.view[0];
				this.subject = this.view.subject;
				this.cont = this.view.cont.replace(/(\n)/g,'<br/>');
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