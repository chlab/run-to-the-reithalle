import Phaser from 'phaser'
import config from '../config'
import Text from '../elements/Text'

export default class extends Phaser.State {
  init () {}

  preload () {
    /* eslint-disable no-new */
    new Text(config.title, {
      state: this,
      x: this.world.centerX,
      y: 200
    })

    /* eslint-disable no-new */
    new Text('loading', {
      state: this,
      x: this.world.centerX,
      y: 250,
      size: 40
    })

    //
    // load your assets
    //
    this.load.spritesheet('player', './assets/sprites/punk_run.png', 256, 256, 8)

    // map
    this.load.tilemap('map', './assets/tilemaps/level1.json', null, Phaser.Tilemap.TILED_JSON)
    this.load.image('tiles', './assets/sprites/rttr.png')

    // audio
    this.load.audio('bgTrack', './assets/audio/background/dirty-punk-loop.wav')
    this.load.audio('jump', './assets/audio/effects/bodyimpact_jack_01.wav')
  }

  create () {
    this.game.physics.startSystem(Phaser.Physics.ARCADE)
    this.state.start('Intro')
  }
}
