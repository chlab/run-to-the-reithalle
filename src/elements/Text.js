export default class {
  constructor(text, { state, x, y, size }) {
    this.text = state.add.text(x, y, text.toUpperCase())
    this.text.font = 'Maven Pro'
    this.text.padding.set(10, 16)
    this.text.fontSize = size || 50
    this.text.fill = '#000000'
    this.text.smoothed = false
    this.text.anchor.setTo(0.5)
  }
}
