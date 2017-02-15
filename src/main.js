import 'normalize.css'
import './styles/main.styl'

// 基础
// --------------------------------------------------
import XRow from './components/row'
import XCol from './components/col'

// 表单
// --------------------------------------------------

// 视图
// --------------------------------------------------

// 导航
// --------------------------------------------------

// 图表
// --------------------------------------------------

// 其他
// --------------------------------------------------

const COMPONENTS = {
  XRow,
  XCol
}

const install = function (Vue, opts = {}) {
  if (install.installed) return

  // 注册全局方法和变量

  // 注册全局指令

  // 注册全局组件
  for (var name in COMPONENTS) {
    Vue.component(name, COMPONENTS[name])
  }
}

export default {
  install
}

export {
  XRow,
  XCol
}
