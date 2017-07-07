import Phaser from 'phaser'
import Text from '@/elements/Text'
import Input from '@/extensions/Input'

export default class extends Phaser.State {
  preload() {
    this.map = this.game.add.tilemap('map')
    this.map.addTilesetImage('rttr', 'tiles')

    this.background = this.map.createLayer('background')
    this.background.alpha = 0.5

    this.floor = this.map.createLayer('floor')
    this.background.resizeWorld()

    // show hint
    let howToJump = this.game.device.touch
      ? 'Tap your screen'
      : 'Press space'

    /* eslint-disable no-new */
    new Text(`${howToJump} to start`, {
      state: this
    })

    this.input = new Input({ game: this.game })
  }

  update() {
    if (this.input.shouldJump()) {
      this.state.start('Game')
    }
  }
}
