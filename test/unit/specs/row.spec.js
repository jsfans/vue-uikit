import Vue from 'vue'
import XRow from 'src/components/row/main'

describe('Component XRow', () => {
  it('should display correctly', () => {
    const Constructor = Vue.extend(XRow)
    const vm = new Constructor().$mount()
    expect(vm.$el.classList.contains('x-row')).to.be.true
  })
})
