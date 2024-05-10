import { Settings } from '../scenes/settings.js';

export class Diana
{
    constructor(scene)
    {
        this.relatedScene = scene;
    }

    create()
    {
        const scale = Settings.getScaleGame();
        const {iniX, iniY, scl, origin} = Settings.diana;

        this.diana = this.relatedScene.physics.add.sprite(iniX, iniY, 'diana');
        
        this.diana.setOrigin(origin[0], origin[1]).setScale(scl[0], scl[1]);
        this.diana.setDepth(Settings.depth.diana);

        // this.diana.setX(Math.floor(this.diana.width / 2));

        // ( parada, en-movimiento )
        this.diana.setData('estado', 'parada');

        console.log(this.diana);
    }

    get()
    {
        return this.diana;
    }
}
