import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset)
    this.anchor.setTo(0.5)
    this.game.add.existing(this)
    this.animations.add('walk')

    this.jumpSound = this.game.add.audio('jump')
  }

  /**
   * Setup player physics and animations
   */
  enable() {
    this.game.physics.arcade.enable(this)
    this.body.gravity.y = 3000
    this.body.velocity.x = 250
    this.animations.play('walk', 15, true)
  }

  update () {
  }

  /**
   * Player jump
   */
  jump() {
    if (this.body.blocked.down) {
      this.jumpSound.play()
      this.body.velocity.y -= 900
    }
  }
}
