import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset)
    this.anchor.setTo(0.5)
    this.game.add.existing(this)
  	this.animations.add('walk')
  }

  update () {
    if (this.game.cursors.right.isDown) {
      this.animations.play('walk', 15, true)
      this.x += 10
    }
    else {
      this.animations.stop('walk')
    }
  }
}
