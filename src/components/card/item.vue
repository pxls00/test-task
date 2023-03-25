<template>
  <li>
    <div
      :class="[
        $style['card__item'],
        $style[!stopWatchTime.isStoped ? 'going' : ''],
      ]"
    >
      <div v-if="!props.plus" :class="[$style['card__item__time']]">
        <p>{{ getFormatedTime(stopWatchTime.time) }}</p>
      </div>
      <div v-if="!props.plus" :class="[$style['card__item__actions']]">
        <button
          v-if="stopWatchTime.isStoped"
          type="button"
          :class="[$style['card__item__actions--btn']]"
          @click="playWatchTime"
        >
          <PlayIcon />
        </button>
        <button
          v-if="!stopWatchTime.isStoped"
          type="button"
          :class="[$style['card__item__actions--btn']]"
          @click="pauseWatchTime"
        >
          <PauseIcon />
        </button>
        <button
          type="button"
          :class="[$style['card__item__actions--btn']]"
          @click="resetWatchTime"
        >
          <SquareIcon />
        </button>
      </div>
      <div v-else :class="[$style['card__item__plus']]">
        <button
          type="button"
          :class="[$style['card__item__actions--btn']]"
          @click="plusWatchTime"
        >
          <PlusIcon />
        </button>
      </div>
    </div>
  </li>
</template>

<script>
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  name: 'StopWatchCardItem',
})
</script>

<script setup>
import PlayIcon from '@/assets/icons/play.svg?component'
import PauseIcon from '@/assets/icons/pause.svg?component'
import PlusIcon from '@/assets/icons/plus.svg?component'
import SquareIcon from '@/assets/icons/square.svg?component'
import getFormatedTime from '@/helpers/getFormatedTime'

import { useCssModule, reactive } from 'vue'

const $style = useCssModule()

const props = defineProps({
  item: Object,
  plus: {
    type: Boolean,
    default: false,
  },
})

const emits = defineEmits(['pauseTime', 'plusTime', 'resetTime'])

const stopWatchTime = reactive({})
let intervalId = null

function setWatchTime (item) {
  if (!props.plus) {
    ;(stopWatchTime.time = item.time),
    (stopWatchTime.id = item.id),
    (stopWatchTime.isStoped = item.isStoped)
  }
}

function interval () {
  return setInterval(() => {
    stopWatchTime.time += 1
  }, 1000)
}

function playWatchTime () {
  intervalId = interval()
  stopWatchTime.isStoped = false
}

function pauseWatchTime () {
  clearInterval(intervalId)
  stopWatchTime.isStoped = true
  emits('pauseTime', stopWatchTime)
  setWatchTime(props.item)
}

function resetWatchTime () {
  clearInterval(intervalId)
  emits('resetTime', stopWatchTime)
  setWatchTime(props.item)
}

function plusWatchTime () {
  emits('plusTime')
  setWatchTime(props.item)
}

onMounted(() => {
  setWatchTime(props.item)
})
</script>

<style lang="scss" module>
.card__item {
  max-width: 225px;
  width: 100%;
  max-height: 120px;
  height: 120px;
  background: map-get($grey, 'base');
  margin: 0 auto;
  &__time,
  &__actions {
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    * {
      transition: all 0.2s;
    }
  }

  &__time {
    border-bottom: 1px solid map-get($grey, 'lighten-1');
    p {
      font-size: 22px;
      font-weight: 400;
      color: map-get($grey, 'lighten-1');
    }
  }

  &__actions {
    border-top: 1px solid map-get($grey, 'lighten-1');
    gap: 48px;
    button {
      background: transparent;
      cursor: pointer;

      svg {
        fill: map-get($grey, 'lighten-1');
        transition: fill 0.2s;
      }
      &:hover {
        svg {
          fill: map-get($white, 'base');
        }
      }
    }
  }
  &.going {
    .card__item__time {
      border-bottom-color: map-get($white, 'base') !important;
      p {
        color: map-get($white, 'base') !important;
      }
    }
    .card__item__actions {
      border-top-color: map-get($white, 'base') !important;
      svg {
        fill: map-get($white, 'base') !important;
      }
    }
  }

  &__plus {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    cursor: pointer;
    button {
      cursor: pointer;
      background: none;
      svg {
        fill: map-get($white, 'base');
      }
    }
  }
}
</style>
