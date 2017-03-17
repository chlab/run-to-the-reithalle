import Phaser from 'phaser'
import config from '../config'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset)
    this.anchor.setTo(0.5)
    this.game.add.existing(this)
  	this.animations.add('walk')
  }

  enable() {
  	this.game.physics.arcade.enable(this)
  	this.body.gravity.y = 2500
  	this.body.velocity.x = config.player.speed
  	this.animations.play('walk', 15, true)
  }

  update () {
    
  }
}
