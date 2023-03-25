<template>
  <div :class="[$style['wrapper']]">
    <CardList :list="stopWatchList" />
  </div>
</template>

<script>
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  name: 'App',
})
</script>

<script setup>
import CardList from '@/components/card/list.vue'
import { ref, useCssModule } from 'vue'
import GenerateWatch from '@/helpers/generateWatchTime'

const $style = useCssModule()
const timer1 = new GenerateWatch()
const stopWatchList = ref([])

onMounted(() => {
  stopWatchList.value.push(timer1)
})
</script>

<style lang="scss" module>
.wrapper {
  height: 100%;
  min-height: 100vh;
  @include wrapper();
}
</style>
