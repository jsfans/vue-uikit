<template>
  <div :class="classes">
    <div class="grid-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'XCol',

  props: {
    // 栅格占据的列数
    span: {
      type: Number,
      default: 1
    },

    // 栅格左侧的间隔格数
    offset: {
      type: Number,
      default: 0
    },

    // 栅格向右移动格数
    push: {
      type: Number,
      default: 0
    },

    // 栅格向左移动格数
    pull: {
      type: Number,
      default: 0
    }
  },

  computed: {
    classes () {
      let clsArr = [`x-col-${this.span}`]

      if (this.offset) {
        clsArr.push(`x-col-offset-${this.offset}`)
      }

      if (this.push) {
        clsArr.push(`x-col-offset-${this.push}`)
      }

      if (this.pull) {
        clsArr.push(`x-col-offset-${this.pull}`)
      }

      return clsArr.join(' ')
    }
  }
}
</script>
