import Phaser from 'phaser'
import Player from '../sprites/Player'

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {
    this.game.stage.backgroundColor = '#222222'
    this.map = this.game.add.tilemap('map')
    this.map.addTilesetImage('tiles_spritesheet', 'tiles')

    this.backgroundLayer = this.map.createLayer('backgroundLayer')
    this.blockedLayer = this.map.createLayer('blockedLayer')
    this.map.setCollisionBetween(1, 200000, true, 'blockedLayer', true)
    this.backgroundLayer.resizeWorld()

    // define game keys
    this.keys = this.game.input.keyboard.addKeys({
      space: Phaser.KeyCode.SPACEBAR,
      right: Phaser.KeyCode.RIGHT
    })

    // add player
    this.player = new Player({ game: this.game, x: 100, y: 100, asset: 'player' })
    setTimeout(() => {
      this.player.enable()
    }, 1000)
    this.game.camera.follow(this.player)
  }

  update () {
    this.game.physics.arcade.collide(this.player, this.blockedLayer, this.playerHit, null, this)

    // spacebar: player jump
    if (this.keys.space.isDown) {
      this.player.jump()
    }
  }

  render () {
  }
}
