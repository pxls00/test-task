<template>
  <div :class="[$style['wrapper']]">
    <CardList 
      :list="stopWatchList" 
      @plus-time="createStopWatchTime"
      @reset-time="resetWatchTime"
      @pause-time="pauseWatchTime"
    />
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
import { reactive, ref, useCssModule } from 'vue'

const $style = useCssModule()
const stopWatchList = ref([])

function createStopWatchTime () {
  const time = reactive({
    id: new Date().getTime() + stopWatchList.value.length,
    time: 0,
    isStoped: true
  })

  stopWatchList.value.push(time)
}

function resetWatchTime (stopWatchTime) {
  const stopWatchItem = stopWatchList.value.find(item => item.id === stopWatchTime.id)
  
  stopWatchItem.time = 0
  stopWatchItem.isStoped = true
}

function pauseWatchTime (stopWatchTime) {
  const stopWatchItem = stopWatchList.value.find(item => item.id === stopWatchTime.id)
  
  stopWatchItem.time = stopWatchTime.time
  stopWatchItem.isStoped = stopWatchTime.isStoped
}

onMounted(() => {
  createStopWatchTime()
  createStopWatchTime()
})
</script>

<style lang="scss" module>
.wrapper {
  height: 100%;
  min-height: 100vh;
  @include wrapper();
}
</style>
