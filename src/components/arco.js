import { Settings } from '../scenes/settings.js';

export class Arco
{
    constructor(scene)
    {
        this.relatedScene = scene;
    }

    create()
    {
        const scale = Settings.getScaleGame();
        const {iniX, iniY, scl, origin} = Settings.arco;

        this.arco = this.relatedScene.physics.add.sprite(iniX, iniY, 'arco', 1);
        
        this.arco.setOrigin(origin[0], origin[1]).setScale(scl[0], scl[1]);
        this.arco.setDepth(Settings.depth.arco).setFrame(1);
        // ( con-flecha, sin-flecha )
        this.arco.setData('estado', 'sin-flecha');

        this.arco.setData('width', this.arco.width);
        
        console.log(this.arco);
    }

    update(estado)
    {
        if (estado === 'sin-flecha') this.arco.setFrame(1); else this.arco.setFrame(0);
    }

    get()
    {
        return this.arco;
    }
}
