export default class {
  constructor(text, { state, x, y, size }) {
    // use game width, not world width as we're in a side-scroller
    x = x || state.game.width / 2
    // use world height, as game height is the browser height
    y = y || state.game.world.height / 2

    this.text = state.add.text(x, y, text.toUpperCase())
    this.text.font = 'Maven Pro'
    this.text.padding.set(10, 16)
    this.text.fontSize = size || 50
    this.text.fill = '#000000'
    this.text.smoothed = false
    this.text.anchor.setTo(0.5)
  }
}
