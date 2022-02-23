<template>
    <div class="menu">
      <h1><router-link to="/" class="logo"><img alt="Vue logo" src="@/assets/logo.png" width="60"></router-link></h1>
      <a>Community</a>
      <a v-for="i in menus" :key="i">{{ i }}</a>
    </div>
</template>

<script>
export default {
    name: 'header',
    data() {
        return {
            menus : ['공지사항', 'Best', 'About'],
        }
    },
}
</script>

<style>
.menu {
  display: flex;
  background: gray;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  /* border-bottom: 5px solid gray; */
}
.menu a {
  color: white;
  padding: 20px;
  text-decoration: none;
}
</style>