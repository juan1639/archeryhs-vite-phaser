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
        this.dianashow.setX(iniX).setY(iniY);

        console.log(this.dianashow);
    }

    update(offsetX, offsetY)
    {
        console.log('target');

        const impacto = this.relatedScene.add.rectangle(
            this.dianashow.x + offsetX,
            this.dianashow.y + offsetY,
            5, 5
        ).setOrigin(0.5, 0.5).setStrokeStyle(2, 0x111111).setDepth(Settings.depth.efectos + 20);
    }

    get()
    {
        return this.dianashow;
    }
}
