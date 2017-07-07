import Phaser from 'phaser'
import { isTouchDevice } from '@/utils'
import Text from '@/elements/Text'
import Input from '@/extensions/Input'

export default class extends Phaser.State {
  create() {
    this.map = this.game.add.tilemap('map')
    this.map.addTilesetImage('rttr', 'tiles')

    this.background = this.map.createLayer('background')
    this.background.alpha = 0.5

    this.floor = this.map.createLayer('floor')
    this.background.resizeWorld()

    // show hint
    let howToJump = isTouchDevice()
      ? 'Tap your screen'
      : 'Press space'

    let loading = new Text(`${howToJump} to start`, {
      state: this,
      x: this.world.centerX,
      y: 250,
      size: 40
    })

    this.input = new Input({ game: this.game })

    this.add.text(loading)
  }

  update() {
    if (this.input.shouldJump()) {
      this.state.start('Game')
    }
  }
}
