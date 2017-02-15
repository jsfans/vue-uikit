import Vue from 'vue'
import XCol from 'src/components/col/main'

describe('Component XCol', () => {
  it('should display as 1 column by default', () => {
    const Constructor = Vue.extend(XCol)
    const vm = new Constructor().$mount()
    expect(vm.$el.classList.contains('x-col-1')).to.be.true
  })
})
