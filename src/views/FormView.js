import View from './Views.js'

// 디버깅 용도로 tag 생성
const tag = '[FormView]'

// 실제 FormView 생성
const FormView = Object.create(View)

FormView.setup = function (el) {
    this.init(el)
    this.inputEl = el.querySelector('[type=text]')
    this.resetEl = el.querySelector('[type=reset]')
    this.showResetBtn(false)
}

FormView.showResetBtn = function (show = true) {
    this.resetEl.style.display = show ? 'block' : 'none'
}

export default FormView