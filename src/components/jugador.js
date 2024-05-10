import { play_sonidos } from '../functions/functions.js';
import { Settings } from '../scenes/settings.js';

export class Flecha
{
    constructor(scene)
    {
        this.relatedScene = scene;
    }

    create()
    {
        const scale = Settings.getScaleGame();
        const {iniX, iniY, scl, origin} = Settings.flecha;

        this.flecha = this.relatedScene.physics.add.sprite(iniX, iniY, 'flecha');
        
        this.flecha.setOrigin(origin[0], origin[1]).setScale(scl[0], scl[1]);
        this.flecha.setDepth(Settings.depth.flecha);

        this.flecha.setX(Math.floor(this.flecha.width / 2));

        // ( en-arco, en-movimiento, en-movimiento-2, clavada )
        this.flecha.setData('estado', 'en-arco');
        
        this.sonido_arrow2 = this.relatedScene.sound.add('arrow-2');

        console.log(this.flecha);
    }

    update()
    {
        const vel = Settings.flecha.vel;

        if (this.flecha.getData('estado').slice(0, 7) === 'en-movi')
        {
            this.flecha.x += vel;
        }

        if (
            this.flecha.x >= this.relatedScene.sys.game.config.width &&
            this.flecha.getData('estado') !== 'clavada'
        ){
            this.flecha.setData('estado', 'clavada');
            play_sonidos(this.sonido_arrow2, false, 0.9);
        }
    }

    get()
    {
        return this.flecha;
    }
}

