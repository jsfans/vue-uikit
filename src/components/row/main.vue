<template>
  <div class="x-row" style="rowStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'XRow',

  props: {
    // 栅格间隔
    gutter: {
      type: Number,
      default: 0
    }
  },

  computed: {
    rowStyle () {
      return {
        marginLeft: `-${this.gutter}px`,
        marginRight: `-${this.gutter}px`
      }
    }
  }
}
</script>
