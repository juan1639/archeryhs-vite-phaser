import { Settings } from '../scenes/settings.js';

export class DianaShow
{
    constructor(scene)
    {
        this.relatedScene = scene;
    }

    create()
    {
        const scale = Settings.getScaleGame();
        const {iniX, iniY, scl, origin} = Settings.dianaShow;

        this.dianashow = this.relatedScene.physics.add.sprite(iniX, iniY, 'diana-show');
        
        this.dianashow.setOrigin(origin[0], origin[1]).setScale(scl[0], scl[1]);
        this.dianashow.setDepth(Settings.depth.flecha + 80).setVisible(false);

        console.log(this.dianashow);
    }

    update()
    {
    }

    get()
    {
        return this.dianashow;
    }
}
