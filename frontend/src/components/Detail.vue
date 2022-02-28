<template>
  <div class="detail-page">
      <button v-on:click="recommendNum[0]++">추천</button>
      <span>추천수 {{ recommendNum[0] }}</span>      
  </div>
</template>

<script>
export default {
    data() {
        return {
            recommendNum : [0]
        }
    }
}
</script>

<style>

</style>