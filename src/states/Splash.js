import Phaser from 'phaser'
import { centerGameObjects } from '../utils'

export default class extends Phaser.State {
  init () {}

  preload () {
    this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg')
    this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar')
    centerGameObjects([this.loaderBg, this.loaderBar])

    this.load.setPreloadSprite(this.loaderBar)
    //
    // load your assets
    //
    this.load.spritesheet('player', './assets/sprites/punk_run.png', 256, 256, 8)

    // map
    this.load.tilemap('map', './assets/tilemaps/demo.json', null, Phaser.Tilemap.TILED_JSON)
    this.load.image('tiles', './assets/sprites/tiles_spritesheet.png')

    // audio
    this.load.audio('bgTrack', './assets/audio/background/dirty-punk-loop.wav')
    this.load.audio('jump', './assets/audio/effects/bodyimpact_jack_01.wav')
  }

  create () {
    this.game.physics.startSystem(Phaser.Physics.ARCADE)
    this.state.start('Game')
  }
}
