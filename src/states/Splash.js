import Phaser from 'phaser'
import Text from '../elements/Text'

export default class extends Phaser.State {
  init () {}

  preload () {
    let loading = new Text('loading', {
      state: this,
      x: this.world.centerX,
      y: 650,
      size: 40
    })

    this.add.text(loading)
    this.load.image('title-image', './assets/images/title.png')

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
