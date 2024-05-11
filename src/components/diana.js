import { play_sonidos } from '../functions/functions.js';
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
        const {iniX, iniY, scl, origin, vel} = Settings.diana;

        this.diana = this.relatedScene.physics.add.sprite(iniX, iniY, 'diana');
        
        this.diana.setOrigin(origin[0], origin[1]).setScale(scl[0], scl[1]);
        this.diana.setDepth(Settings.depth.diana);
        this.diana.setY(iniY);
        this.diana.setData('vel', vel);

        // this.diana.setX(Math.floor(this.diana.width / 2));

        // ( parada, en-movimiento )
        this.diana.setData('estado', 'parada');

        console.log(this.diana);
    }

    update()
    {
        if (Settings.isGameOver()) return;

        this.diana.y += this.diana.getData('vel');

        if (this.diana.y >= this.relatedScene.sys.game.config.height + this.diana.height)
        {
            this.diana.y = -this.diana.height;
            
            this.relatedScene.arco.get().setData('estado', 'con-flecha');
            this.relatedScene.arco.update(this.relatedScene.arco.get().getData('estado'));

            if (Settings.getCargadorNumFlechas() > 0)
            {
                this.another_arrow();
                this.reset_degrees();
                this.reset_currentScore();
            }
            else
            {
                console.log('fin');
                this.reset_degrees();
                this.reset_currentScore();
                
                Settings.setGameOver(true);
                this.relatedScene.gameover.create();

                play_sonidos(this.relatedScene.sonido_gameover, false, 0.9);
            }

            play_sonidos(this.relatedScene.sonido_numkey, false, 0.9);
        }
    }

    another_arrow()
    {
        const flechas = Settings.getCargadorNumFlechas();
        const posInicialX = this.relatedScene.flecha.get().getData('width');
        const posInicialY = Settings.flecha.iniY;

        this.relatedScene.cargador.get().getChildren()[flechas - 1].setVisible(false);
        Settings.setCargadorNumFlechas(flechas - 1);

        this.relatedScene.flecha.get().setX(posInicialX);
        this.relatedScene.flecha.get().setY(posInicialY);
        this.relatedScene.flecha.get().setData('estado', 'en-arco');
    }

    reset_degrees()
    {
        Settings.setGrados(0);
        this.relatedScene.marcadorGrados.update('Deg: ', `${Settings.getGrados()}º`);
    }

    reset_currentScore()
    {
        Settings.setShowCurrent(0);
        this.relatedScene.marcadorCurrent.update('Pts: ', Settings.getShowCurrent());
    }

    get()
    {
        return this.diana;
    }
}
