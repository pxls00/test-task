<template>
  <li>
    <div :class="[$style['card__item'], $style['going']]">
      <div :class="[$style['card__item__time']]">
        <p>12:05:32</p>
      </div>
      <div :class="[$style['card__item__actions']]">
        <button type="button" :class="[$style['card__item__actions--btn']]">
          <PlayIcon />
        </button>
        <button type="button" :class="[$style['card__item__actions--btn']]">
          <PauseIcon />
        </button>
        <button type="button" :class="[$style['card__item__actions--btn']]">
          <SquareIcon />
        </button>
      </div>
      <div :class="[$style['card__item__plus']]">
        <button type="button" :class="[$style['card__item__actions--btn']]">
          <PlusIcon />
        </button>
      </div>
    </div>
  </li>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'StopWatchCardItem',
})
</script>

<script setup>
import PlayIcon from '@/assets/icons/play.svg?component'
import PauseIcon from '@/assets/icons/pause.svg?component'
import PlusIcon from '@/assets/icons/plus.svg?component'
import SquareIcon from '@/assets/icons/square.svg?component'
import { useCssModule } from 'vue'

const $style = useCssModule()
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
    .card__item__time,
    .card__item__actions {
      p {
        color: map-get($white, 'base');
      }

      button {
        svg {
          fill: map-get($white, 'base');
        }
      }
    }
  }
}
</style>
