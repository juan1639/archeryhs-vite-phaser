import { play_sonidos } from '../functions/functions.js';
import { Settings } from '../scenes/settings.js';
import { Textos } from './textos.js';

export class GameOver
{
    constructor(scene)
    {
        this.relatedScene = scene;
    }

    create()
    {
        const scale = Settings.getScaleGame();
        const {txt, iniX, iniY, scl, origin} = Settings.gameover.txt;
        
        this.txtgameover = new Textos(this.relatedScene, {
            x: iniX,
            y: iniY,
            txt,
            size: 75, color: '#ffa', style: 'bold',
            stroke: '#f21', sizeStroke: 12,
            shadowOsx: 2, shadowOsy: 2, shadowColor: '#111111',
            bool1: false, bool2: true, origin: [origin[0], origin[1]],
            elastic: false, dura: 0
        });
        
        this.txtgameover.create();
        this.txtgameover.get().setDepth(Settings.depth.textos).setAlpha(0);

        this.relatedScene.tweens.add({
            targets: this.txtgameover.get(), alpha: 1, duration: 2500
        });

        this.relatedScene.time.delayedCall(2000, () =>
        {
            const puntos = Settings.getPuntos();

            if (puntos >= 2000)
            {
                play_sonidos(this.relatedScene.sonido_aplausosEagle, false, 0.9);
            }
            else if (puntos >= 1000)
            {
                play_sonidos(this.relatedScene.sonido_aplausosBirdie, false, 0.9);
            }
        });

        this.relatedScene.time.delayedCall(3500, () =>
        {
            this.relatedScene.botonrejugar.get().setVisible(true);
            this.relatedScene.botonrejugar.txt.get().setVisible(true);
        });

        console.log(this.txtgameover);
    }

    get()
    {
        return this.txtgameover;
    }
}
