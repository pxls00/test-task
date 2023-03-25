<template>
  <TransitionGroup
    name="stopwatch_list"
    tag="ul"
    :class="[$style['card__list']]"
  >
    <CardItem
      v-for="item in props.list"
      :key="item.id"
      :item="item"
      @pause-time="pauseTime"
      @reset-time="resetTime"
    />
    <CardItem 
      :key="props.list.length" 
      :plus="true" 
      :item="{}"
      @plus-time="plusWatchTime"
    />
  </TransitionGroup>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'StopWatchCardList',
})
</script>

<script setup>
import CardItem from '@/components/card/item.vue'
import { useCssModule } from 'vue'

const $style = useCssModule()
const props = defineProps({
  list: Array,
})

const emits = defineEmits(['pauseTime', 'plusTime', 'resetTime'])


function pauseTime (stopWatchTime) {
  emits('pauseTime', stopWatchTime)
}

function resetTime (stopWatchTime) {
  emits('resetTime', stopWatchTime)
}

function plusWatchTime () {
  console.log('create')
  emits('plusTime')
}

// Я мог бы тут использовать глобальний стейт меннегер (vuex или pinia) чтобы избежать от передания данных по этапно, но у вас в задаче указано только vue :))
</script>

<style lang="scss" module>
.card__list {
  list-style: none;
  row-gap: 50px;
  align-items: stretch;
  padding-top: 72px;
  max-width: 775px !important;
  margin: 0 auto !important;

  @include row-wrap();

  & > * {
    @include col(3);
  }

  @include lg-block() {
    & > * {
      @include col(3);
    }
  }

  @include md-block() {
    row-gap: 32px;
    @include row-offset(20px);

    & > * {
      @include wrapper-offset(20px);
    }
  }

  @include sm-block() {
    & > * {
      @include col(2);
    }
  }

  @include xs-block() {
    & > * {
      @include col(1);
    }
  }
}
</style>
