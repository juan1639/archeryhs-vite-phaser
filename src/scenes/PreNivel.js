import { Scene } from 'phaser';
import { Settings } from './settings.js';
import { BotonNuevaPartida } from '../components/boton-nuevapartida';
import { ElegirControles } from '../components/elegirControles.js';

export class PreNivel extends Scene
{
    constructor ()
    {
        super('PreNivel');
    }

    init()
    {
        Settings.setPuntos(0);
        Settings.setGameOver(false);
        Settings.controlElegido.mobile = false;
        Settings.controlElegido.keyboard = true;

        this.botoninicio = new BotonNuevaPartida(this, {
            left: Math.floor(this.sys.game.config.width / 2),
            top: Math.floor(this.sys.game.config.height / 1.3),
            id: 'boton-nueva-partida',
            scX: 0.6, scY: 0.5, angle: 1, originX: 0.5, originY: 0.5,
            texto: ' Start ', nextScene: 'Game'
        });

        this.botonmoresettings = new BotonNuevaPartida(this, {
            left: Math.floor(this.sys.game.config.width / 1.15),
            top: Math.floor(this.sys.game.config.height / 1.2),
            id: 'boton-more-settings',
            scX: 0.6, scY: 0.8, angle: 0, originX: 0.5, originY: 0.5,
            texto: '  More\nSettings', nextScene: 'More-Settings'
        });

        this.radiobuttons = [];

        this.radiobuttons.push(new ElegirControles(this, {
            left: Math.floor(this.sys.game.config.width / 15),
            top: Math.floor(this.sys.game.config.height / 6),
            addLeft: 0, orX: 0, orY: 0.5, frame: 1, scale: 1,
            txtSize: 45, texto: ' Keyboard cursors/space', id: 'keyboard-control'
        }));

        this.radiobuttons.push(new ElegirControles(this, {
            left: Math.floor(this.sys.game.config.width / 15),
            top: Math.floor(this.sys.game.config.height / 3.2),
            addLeft: 0, orX: 0, orY: 0.5, frame: 0, scale: 1,
            txtSize: 50, texto: ' Mobile (touch) ', id: 'mobile-control'
        }));

        this.radioFps = [];

        this.radioFps.push(new ElegirControles(this, {
            left: Math.floor(this.sys.game.config.width / 10),
            top: Math.floor(this.sys.game.config.height / 1.8),
            addLeft: 52, orX: 0.5, orY: 0.5, frame: 0, scale: 0.9,
            txtSize: 40, texto: '30FPS', id: '30FPS'
        }));

        this.radioFps.push(new ElegirControles(this, {
            left: Math.floor(this.sys.game.config.width / 1.6),
            top: Math.floor(this.sys.game.config.height / 1.8),
            addLeft: 52, orX: 0.5, orY: 0.5, frame: 1, scale: 0.9,
            txtSize: 40, texto: '60 FPS', id: '60FPS'
        }));
    }

    create ()
    {
        this.add.image(0, 0, 'fondo').setDepth(Settings.depth.fondo).setOrigin(0, 0);
        
        this.radiobuttons.forEach(radiobutton => radiobutton.create());
        this.radioFps.forEach(fps => fps.create());

        this.botonmoresettings.create();
        this.botoninicio.create();
    }
}
