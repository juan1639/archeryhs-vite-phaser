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
        const {iniX, iniY, scl} = Settings.flecha;

        this.flecha = this.relatedScene.physics.add.sprite(iniX, iniY, 'flecha');
        this.flecha.setX(Math.floor(this.flecha.width / 2));

        this.flecha.setDepth(Settings.depth.flecha);
        this.flecha.setScale(scl[0], scl[1]);

        // ( en-arco, en-movimiento, en-movimiento-2, clavada )
        this.flecha.setData('estado', 'en-arco');

        console.log(this.flecha);
    }

    update()
    {
    }

    get()
    {
        return this.flecha;
    }
}

