/* globals __DEV__ */
import Phaser from 'phaser'
// import Mushroom from '../sprites/Mushroom'

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {
    const bannerText = 'Run to the Reithalle'
    let banner = this.add.text(this.world.centerX, this.game.height - 80, bannerText)
    banner.font = 'Bangers'
    banner.padding.set(10, 16)
    banner.fontSize = 40
    banner.fill = '#77BFA3'
    banner.smoothed = false
    banner.anchor.setTo(0.5)

    // this.mushroom = new Mushroom({
    //   game: this,
    //   x: this.world.centerX,
    //   y: this.world.centerY,
    //   asset: 'mushroom'
    // })

    // this.game.add.existing(this.mushroom)

    this.cursors = this.game.input.keyboard.createCursorKeys()

    this.player = this.game.add.sprite(20, 20, 'punk')
    this.player.animations.add('walk')
  }

  update () {
    if (this.cursors.right.isDown) {
      this.player.animations.play('walk', 15, true)
      this.player.x += 10
    }
    else {
      this.player.animations.stop('walk')
    }
  }

  render () {
    if (__DEV__) {
      // this.game.debug.spriteInfo(this.mushroom, 32, 32)
    }
  }
}
