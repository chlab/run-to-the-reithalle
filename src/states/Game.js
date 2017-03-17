import Phaser from 'phaser'
import Player from '../sprites/Player'

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {
    const bannerText = 'Run to the Reithalle'
    let banner = this.add.text(this.world.centerX, 80, bannerText)
    banner.font = 'Bangers'
    banner.padding.set(10, 16)
    banner.fontSize = 40
    banner.fill = '#77BFA3'
    banner.smoothed = false
    banner.anchor.setTo(0.5)

    this.game.cursors = this.game.input.keyboard.createCursorKeys()

    this.player = new Player({
      game: this.game,
      x: 100,
      y: 100,
      asset: 'player'
    })
  }

  update () {
  }

  render () {
    /*if (__DEV__) {
      this.game.debug.spriteInfo(this.player, 32, 32)
    }*/
  }
}
