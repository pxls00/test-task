<template>
  <TransitionGroup
    name="stopwatch_list"
    tag="ul"
    :class="[$style['card__list']]"
  >
    <CardItem
      v-for="item in list"
      :key="item.id"
      :item="item"
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
import { useCssModule, onMounted } from 'vue'

const $style = useCssModule()
const props = defineProps({
  list: {
    type: Array,
    required: true,
  },
})

onMounted(() => {
  console.log(props.list)
})
</script>

<style lang="scss" module>
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

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
