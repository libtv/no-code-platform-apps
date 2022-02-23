<template>
    <div>
        <Header/>
        <div class="addForm">
        <form v-on:submit="submitForm" action="/upload" method="POST">
            <table class="tbAdd">
					<colgroup>
						<col width="15%" />
						<col width="*" />
					</colgroup>
					<tr>
						<th>제목</th>
						<td><input type="text" v-model="title" ref="title" /></td>
					</tr>
					<tr>
						<th>내용</th>
						<td><textarea v-model="content" ref="content"></textarea></td>
					</tr>
				</table>
            <div class="btnWrap">
			<a href="javascript:;" @click="fnList" class="btn">목록</a>
			<a href="javascript:;" @click="fnAddProc" class="btnAdd btn">등록</a>
		    </div>
        </form>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header';

export default {
    name: 'write',
    data() {
        return {
            title: 'free',
            content: '',
            writer: 'anony',
            image: '',
            time: ''
        }
    },
    methods: {
        fnList(){ //다른 화면 이동
			this.$router.push({path:'/',query:this.body});
		},
        fnAddProc() { //등록 프로세스
			if(!this.title) {
				alert("제목을 입력해 주세요");
				this.$refs.title.focus(); //방식으로 선택자를 찾는다.
				return;
			}
			this.form = { //backend로 전송될 POST 데이터
				title:this.title,
			    content:this.content,
				writer:this.writer
			} 
			this.$axios.post('http://localhost:8081/upload',this.form)
			.then((res)=>{
				if(res.data.success) {
					alert('등록되었습니다.');
					this.fnList();
				} else {
					alert("실행중 실패했습니다.\n다시 이용해 주세요");
				}
			})
			.catch((err)=>{
				console.log(err);
			})
		}
    },
    components: {
        Header
    }
}
</script>

<style>
table{
    width:60%;
    border-collapse:collapse;
}
.wrap{
    width:100%;
}
.container{
    width:800px;
    margin:0 auto;
}
.tbAdd th, .tbAdd td{
    border-bottom:1px solid #eee; 
    padding:5px 0;
}
.tbAdd td{
    padding:10px 10px; 
    box-sizing:border-box;
}
.tbAdd td input{
    width:100%; min-height:30px; 
    box-sizing:border-box; 
    padding:0 10px;
}
.tbAdd td textarea{
    width:100%; 
    min-height:300px; 
    padding:10px; 
    box-sizing:border-box;
}
.btnWrap{
    text-align:center;
    margin:20px 0 0 0;
}
.btnWrap a{
    margin:0 10px;
}
.btn{
    padding:10px;
    background:#34495e;
    color:#fff;
    text-decoration: none;
}
.btnAdd {
    background:#41b783
}
</style>