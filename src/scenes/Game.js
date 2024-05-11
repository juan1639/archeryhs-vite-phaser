// ============================================================
//      A R C H E R Y - HS  -->  Phaser  |  By Juan Eguia
//   
//      https://juan1639.github.io/archeryhs-vite-phaser
// 
// ------------------------------------------------------------
import { Scene } from 'phaser';
import { Textos } from '../components/textos.js';
import { Marcador } from '../components/marcador.js';
import { Settings } from './settings.js';
import { Arco } from '../components/arco.js';
import { Flecha, CargadorFlechas } from '../components/jugador.js';
import { Diana } from '../components/diana.js';
import { DianaShow } from '../components/dianashow.js';

import {
  BotonNuevaPartida,
  BotonFullScreen,
  BotonEsc, 
  CrucetaControl
} from '../components/boton-nuevapartida.js';

import {
  play_sonidos
} from '../functions/functions.js';

export class Game extends Scene
{
  constructor()
  {
    super('Game');
  }

  init()
  {
    Settings.audio.overture.volume = 0;
    Settings.setGameOver(false);

    this.set_sonidos();
    this.set_pausaInicial(Settings.getPausaInicialDuracion());

    this.arco = new Arco(this);
    this.flecha = new Flecha(this);
    this.cargador = new CargadorFlechas(this);
    this.diana = new Diana(this);
    this.dianashow = new DianaShow(this);

    this.instanciar_marcadores();
  }

  preload() {}

  create()
  {
    this.add.image(0, 0, 'fondo').setDepth(Settings.depth.fondo).setOrigin(0, 0);

    this.arco.create();
    this.flecha.create();
    this.cargador.create();
    this.diana.create();
    this.dianashow.create();

    this.marcadorPtos.create();
    this.marcadorNombre.create();
    this.marcadorHi.create();
    this.marcadorGrados.create();
    this.marcadorCurrent.create();
    this.botonfullscreen.create();
    // this.botonesc.create();

    this.texto_info('Info');

    this.controles = this.input.keyboard.createCursorKeys();
    console.log(this.controles);
  }

  update()
  {
    if (!Settings.isFps60())
    {
      if (Settings.isAllowUpdate())
      {
        Settings.setAllowUpdate(false);
        return;
      }
      else
      {
        Settings.setAllowUpdate(true);
      }
    }

    if (!Settings.isPausaInicial() && !Settings.isGameOver())
    {
      this.check_controlesKeyboard();
      this.check_controlesMobile();

      this.flecha.update();
      this.diana.update();

      console.log(this.flecha.get().getData('estado'));
    }
  }

  check_controlesKeyboard()
  {
    if (!Settings.controlElegido.keyboard) return;

    const maxGrados = Settings.flecha.maxGrados;
    const tecla = Settings.queTeclaPulsar[0];

    if (
      this.flecha.get().getData('estado') === 'en-arco' &&
      this.controles[tecla].isDown
    ){
      this.flecha.get().setData('estado', 'en-movimiento');
      this.arco.get().setData('estado', 'sin-flecha');
      this.arco.update(this.arco.get().getData('estado'));
      play_sonidos(this.sonido_arrow1, false, 0.9);
    }

    if (
      (this.flecha.get().getData('estado') === 'en-movimiento' &&
      this.controles[tecla].isUp) ||
      (this.flecha.get().getData('estado') === 'en-movimiento' &&
      Settings.getGrados() >= maxGrados)
    ){
      this.flecha.get().setData('estado', 'en-movimiento-2');
    }

    if (this.flecha.get().getData('estado') === 'en-movimiento')
    {
      Settings.setGrados(Settings.getGrados() + 1);
      // console.log(Settings.getGrados());
      this.marcadorGrados.update('Deg: ', `${Settings.getGrados()}º`);
    }
  }

  check_controlesMobile()
  {
    if (!Settings.controlElegido.mobile) return;

    const maxGrados = Settings.flecha.maxGrados;

    if (
      this.flecha.get().getData('estado') === 'en-arco' &&
      this.input.activePointer.isDown
    ){
      this.flecha.get().setData('estado', 'en-movimiento');
      play_sonidos(this.sonido_arrow1, false, 0.9);
    }

    if (
      (this.flecha.get().getData('estado') === 'en-movimiento' &&
      !this.input.activePointer.isDown) ||
      (this.flecha.get().getData('estado') === 'en-movimiento' &&
      Settings.getGrados() >= maxGrados)
    ){
      this.flecha.get().setData('estado', 'en-movimiento-2');
    }

    if (this.flecha.get().getData('estado') === 'en-movimiento')
    {
      Settings.setGrados(Settings.getGrados() + 1);
      // console.log(Settings.getGrados());
      this.marcadorGrados.update('Deg: ', `${Settings.getGrados()}º`);
    }
  }

  set_pausaInicial(tiempo)
  {
    Settings.setPausaInicial(true);

    this.txtpreparado = new Textos(this, {
      x: Math.floor(this.sys.game.config.width / 2) * Settings.getScaleGame(),
      y: 0,
      txt: 'Ready!',
      size: 78, color: '#ffa', style: 'bold',
      stroke: '#f81', sizeStroke: 16,
      shadowOsx: 2, shadowOsy: 2, shadowColor: '#111111',
      bool1: false, bool2: true, origin: [0.5, 0.5],
      elastic: Math.floor(this.sys.game.config.height / 2), dura: 2800
    });
    
    this.txtpreparado.create();
    this.txtpreparado.get().setDepth(Settings.depth.textos);
    
    const timeline = this.add.timeline([
      {
        at: tiempo,
        run: () =>
        {
          Settings.setPausaInicial(false),
          this.txtpreparado.get().setVisible(false);
          this.set_txtGo();
        }
      }
    ]);

    timeline.play();

    play_sonidos(this.sonido_getReady, false, 0.8);

    console.log(this.txtpreparado);
  }

  set_txtGo()
  {
    const txtgo = new Textos(this, {
      x: Math.floor(this.sys.game.config.width / 2) * Settings.getScaleGame(),
      y: Math.floor(this.sys.game.config.height / 2),
      txt: ' Go! ',
      size: 90, color: '#ffa', style: 'bold',
      stroke: '#f81', sizeStroke: 16,
      shadowOsx: 2, shadowOsy: 2, shadowColor: '#111111',
      bool1: false, bool2: true, origin: [0.5, 0.5],
      elastic: false, dura: 0
    });
    
    txtgo.create();
    txtgo.get().setDepth(Settings.depth.textos);

    this.tweens.add({
      targets: txtgo.get(), alpha: 0, duration: 1200
    });

    this.dianashow.get().setVisible(true);

    play_sonidos(this.sonido_gooo, false, 0.9);
  }

  texto_enhorabuena()
  {
    this.txtcongrats = new Textos(this, {
      x: Math.floor(this.sys.game.config.width / 1.8), y: 0,
      txt: ' Congratulations! ',
      size: 70, color: '#ffa', style: 'bold',
      stroke: '#5f1', sizeStroke: 16,
      shadowOsx: 2, shadowOsy: 2, shadowColor: '#111111',
      bool1: false, bool2: true, origin: [0.5, 0.5],
      elastic: this.jugador.get().y - Settings.tileXY.y,
      dura: Settings.pausa.nivelSuperado.duracion
    });
    
    this.txtcongrats.create();
    this.txtcongrats.get().setDepth(Settings.depth.textos);
  }

  texto_info(texto)
  {
    if (Settings.controlElegido.mobile)
    {
      texto = ' To Shoot an arrow \n touch and hold-touch ';
    }
    else
    {
      texto = ' To Shoot an arrow \n press space-bar \n and hold-press ';
    }

    this.txtInfo = new Textos(this, {
      x: Math.floor(this.sys.game.config.width / 2),
      y: Math.floor(this.sys.game.config.height / 1.18),
      txt: texto,
      size: 40, color: '#ffa', style: 'bold',
      stroke: '#ef1', sizeStroke: 16,
      shadowOsx: 2, shadowOsy: 2, shadowColor: '#111111',
      bool1: false, bool2: true, origin: [0.5, 0.5],
      elastic: false, dura: 0
    });
    
    this.txtInfo.create();
    this.txtInfo.get().setDepth(Settings.depth.textos);

    this.tweens.add({
      targets: this.txtInfo.get(), alpha: 0, duration: 9000
    });
  }

  instanciar_marcadores()
  {
    const ancho = this.sys.game.config.width;
    const alto = this.sys.game.config.height;

    const marcadoresPosY = 0;

    this.marcadorPtos = new Marcador(this, {
      x: 10, y: marcadoresPosY, size: 40, txt: Settings.getTxtScore(), color: '#fff', strokeColor: '#af1', id: 0
    });

    this.marcadorHi = new Marcador(this, {
      x: Math.floor(ancho / 2.6), y: marcadoresPosY, size: 40, txt: ' Record: ', color: '#fff', strokeColor: '#16d',id: 2
    });

    this.marcadorNombre = new Marcador(this, {
      x: Math.floor(ancho / 1.35), y: marcadoresPosY, size: 40, txt: ' ', color: '#ff5', strokeColor: '#16d', id: 1
    });

    this.marcadorGrados = new Marcador(this, {
      x: 10, y: marcadoresPosY + 90, size: 50, txt: 'Deg: ', color: '#fff', strokeColor: '#f51', id: 3
    });

    this.marcadorCurrent = new Marcador(this, {
      x: Math.floor(ancho / 1.8), y: Math.floor(alto / 3.5),
      size: 50, txt: 'Pts: ', color: '#fff', strokeColor: '#f51', id: 4
    });

    this.botonfullscreen = new BotonFullScreen(this, {
      x: Math.floor(ancho / 1.1), y: marcadoresPosY + 7, id: 'boton-fullscreen',
      orX: 0, orY: 0, scX: 1.2, scY: 0.8, ang: 0
    });

    /* this.botonesc = new BotonEsc(this, {
      left: Math.floor(ancho * 1.42), top: marcadoresPosY + 26, id: 'boton-fire-joystick',
      scX: 0.5, scY: 0.5, angle: 0, originX: 0.5, originY: 0.5, texto: 'Music', nextScene: ''
    }); */

    this.botonrejugar = new BotonNuevaPartida(this, {
      left: Math.floor(this.sys.game.config.width / 2),
      top: Math.floor(this.sys.game.config.height / 1.3),
      id: 'boton-nueva-partida',
      scX: 0.6, scY: 0.5, angle: 1, originX: 0.5, originY: 0.5,
      texto: ' Continue ', nextScene: 'MainMenu'
    });
  }

  set_sonidos()
  {
    this.sonido_key = this.sound.add('key');
    this.sonido_numkey = this.sound.add('numkey');
    this.sonido_aplausosEagle = this.sound.add('aplausos-eagle');
    this.sonido_aplausosBirdie = this.sound.add('aplausos-birdie');
    this.sonido_arrow1 = this.sound.add('arrow-1');
    this.sonido_arrow2 = this.sound.add('arrow-2');
    this.sonido_abucheos = this.sound.add('abucheos');
    this.sonido_getReady = this.sound.add('get-ready');
    this.sonido_gooo = this.sound.add('gooo');
    this.sonido_fireworks = this.sound.add('fireworks');
  }
}
