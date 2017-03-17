import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset)
    this.anchor.setTo(0.5)
    this.game.add.existing(this)
    this.animations.add('walk')

    this.jumpSound = this.game.add.audio('jump')
    this.scale.setTo(0.3)
  }

  /**
   * Setup player physics and animations
   */
  enable() {
    this.enabled = true
    this.game.physics.arcade.enable(this)
    this.body.gravity.y = 3000
    this.body.velocity.x = 250
    this.startWalking()
  }

  update () {
    if (this.enabled && this.body.blocked.down) {
      this.startWalking()
    }
    else {
      this.stopWalking()
    }
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

  startWalking() {
    if (!this.walking) {
      this.animations.play('walk', 15, true)
      this.walking = true
    }
  }

  stopWalking() {
    if (this.walking) {
      this.animations.stop('walk')
      this.walking = false
      this.frame = 4
    }
  }
}
