import Phaser from 'phaser'
import Player from '../sprites/Player'
import _ from 'lodash'

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {
    // this.game.stage.backgroundColor = '#222222'
    this.map = this.game.add.tilemap('map')
    this.map.addTilesetImage('rttr', 'tiles')

    this.background = this.map.createLayer('background')
    this.background.alpha = 0.5

    this.floor = this.map.createLayer('floor')
    this.barricades = this.map.createLayer('barricades')
    this.police = this.map.createLayer('police')
    this.beers = this.map.createLayer('beers')
    // this.blockedLayer = this.map.createLayer('blockedLayer')
    // this.map.setCollisionBetween(1, 200000, true, 'blockedLayer', true)
    this.background.resizeWorld()

    this.map.setCollisionBetween(1, 200000, true, 'floor', true)

    // add punky background music :)
    this.bgTrack = this.game.add.audio('bgTrack')
    this.bgTrack.loop = true

    // define game keys
    this.keys = this.game.input.keyboard.addKeys({
      space: Phaser.KeyCode.SPACEBAR,
      right: Phaser.KeyCode.RIGHT
    })

    // add player
    this.player = new Player({ game: this.game, x: 50, y: 330, asset: 'player' })
    this.player.enable()
    this.bgTrack.play()
    this.game.camera.follow(this.player)

    // add beers
    this.createBeers()
  }

  update () {
    this.game.physics.arcade.collide(this.player, this.floor, this.playerHit, null, this)

    // spacebar: player jump
    if (this.keys.space.isDown) {
      this.player.jump()
    }
  }

  createBeers() {
    this.beers = this.game.add.group()
    this.beers.enableBody = true
    let result = this.findObjectsByType('beer', this.map, 'beers')

    result.forEach(item => {
      console.log(item)
      // this.createFromTiledObject(item, this.beers)
    })
  }

  findObjectsByType(type, map, layerName) {
    return _
      .chain(map.objects[layerName])
      .filter(item => item.properties.type === type)
      .map(item => {
        item.y -= map.tileHeight
        return item
      })
      .value()
  }
}
