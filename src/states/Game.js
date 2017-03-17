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

    this.game.stage.backgroundColor = '#222222'
    this.map = this.game.add.tilemap('platform')
    this.map.addTilesetImage('platformer_tiles', 'tiles')

    this.backgroundLayer = this.map.createLayer('layer_1')
    // this.blockedLayer = this.map.createLayer('blockedLayer')
    // this.map.setCollisionBetween(1, 200000, true, 'blockedLayer', true)
    this.backgroundLayer.resizeWorld()

    // define game keys
    this.game.keys = this.keys = this.game.input.keyboard.addKeys({
      space: Phaser.KeyCode.SPACEBAR,
      right: Phaser.KeyCode.RIGHT
    })

    // add player
    this.player = new Player({ game: this.game, x: 100, y: 300, asset: 'player' })
    setTimeout(() => {
      this.player.enable()
    }, 1000)
    this.game.camera.follow(this.player)
  }

  update () {
    this.game.physics.arcade.collide(this.player, this.ground)
    this.game.physics.arcade.collide(this.player, this.blockedLayer, this.playerHit, null, this)
  }

  render () {
  }
}
