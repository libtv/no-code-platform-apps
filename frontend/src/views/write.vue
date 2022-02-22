<template>
    <div>
        <form v-on:submit="submitForm" action="/upload" method="POST">
            <div>
                <label for="title">제목</label>
                <input type="text" id="title" name="title" value="" v-model="title">
            </div>
            <div>
                <label for="content">내용</label>
                <textarea type="content" id="content" name="content" v-model="content"></textarea>
            </div>
            <button type="submit">글 올리기</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'write',
    data() {
        return {
            title: '',
            content: '',
        }
    },
    methods: {
        submitForm: function() {
            console.log(this.title, this.content);
            axios.post('http://localhost:8081/upload')
                .then(function(response) {
                    console.log(response);
                })
                .catch(function(error) {
                    console.log(error);
                });
        }
    },
}
</script>

<style>

</style>