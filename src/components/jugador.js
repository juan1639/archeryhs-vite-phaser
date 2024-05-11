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

        this.flecha.setData('width', this.flecha.width);
        // this.flecha.setX(Math.floor(this.flecha.width / 1));

        // ( en-arco, en-movimiento, en-movimiento-2, clavada )
        this.flecha.setData('estado', 'en-arco');
        
        this.sonido_arrow2 = this.relatedScene.sound.add('arrow-2');

        console.log(this.flecha);
    }

    update()
    {
        const vel = Settings.flecha.vel;

        if (this.flecha.getData('estado').slice(0, 7) === 'en-movi' || this.flecha.getData('estado') === 'clavada-no')
        {
            this.flecha.x += vel;
        }

        if (
            this.flecha.x >= this.relatedScene.sys.game.config.width &&
            this.flecha.getData('estado').slice(0, 7) !== 'clavada'
        ){
            if (this.check_impactoDiana())
            {
                this.flecha.setData('estado', 'clavada');
                play_sonidos(this.sonido_arrow2, false, 0.9);
            }
            else
            {
                this.flecha.setData('estado', 'clavada-no');
            }
        }
    }
    
    check_impactoDiana()
    {
        if (Math.abs(this.relatedScene.diana.get().y - this.flecha.y) < Math.floor(this.relatedScene.diana.get().height / 2))
        {
            return true;
        }

        return false;
    }

    get()
    {
        return this.flecha;
    }
}

// ==============================================================
export class CargadorFlechas
{
    constructor(scene)
    {
        this.relatedScene = scene;
    }
    
    create()
    {
        const scale = Settings.getScaleGame();
        const {num_flechas, step, m_left, iniX, iniY, scl, origin, angle} = Settings.cargador;

        const rectCargador = this.relatedScene.add.rectangle(
            iniX, iniY, step * (10 + 1), 100 + step, 0x111111
        ).setOrigin(0, 0.5);

        const borderCargador = this.relatedScene.add.rectangle(
            iniX, iniY, step * (10 + 1), 100 + step
        ).setOrigin(0, 0.5).setStrokeStyle(2, 0xaaaaaa);

        this.cargador = this.relatedScene.physics.add.staticGroup();

        for (let i = 0; i < num_flechas; i ++)
        {
            this.cargador.create((iniX + m_left) + step * i, iniY, 'flecha');
        }

        this.cargador.children.iterate(each =>
        {
            each.setOrigin(origin[0], origin[1]).setScale(scl[0], scl[1]).setAngle(angle);
            each.setDepth(Settings.depth.diana + 80).setVisible(true);
            each.setData('estado', 'visible');
        });

        console.log(this.cargador);
    }

    get()
    {
        return this.cargador;
    }
}

