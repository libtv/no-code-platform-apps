<template>
    <div>
        <form action="/add" method="POST">
            <input type="text" class="title" name="title" value="">
            <input type="content" class="content" name="content">
        </form>
        <button type="submit" @click="upload">글 올리기</button>
    </div>
</template>

<script>
export default {
    name: 'write',
    title: '',
    content: '',
    methods: {
        upload: function() {
            console.log(this.title, this.content);
            axios.get(url)
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