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

        this.putInitialsToSend(iniX, Math.floor(iniY / 2));
        
        if (!this.checkNewRecordOrTop()) this.send_score('IMI');
    }

    putInitialsToSend(pacX, pacY)
    {
        if (!this.checkNewRecordOrTop()) return;

        const {id, arrayLetras, size, osX, osY, oriX, oriY, color, alpha} = Settings.fontSettings;
        const letras = arrayLetras;
        this.letraEvent = new Array(letras.length).fill(null);
        
        let nameToSend = '';
        this.makeTxtNameToSend(pacX, pacY, size, osX, osY, oriX, oriY, color, alpha);
        this.bandera_send = false;

        const x = pacX - Math.floor(this.relatedScene.sys.game.config.width / 2.3);
        let columna = 0;

        for (let i = 0; i < letras.length; i ++)
        {
            const letra = letras[i];

            let fila = this.select_filaLetra(i, letra, size);
            if (this.select_columnaLetra(letra)) columna = 0;

            this.letraEvent[i] = this.relatedScene.add.bitmapText(
                (columna * (size * 1.25)) + x, pacY + fila, 'font-fire', letra, size
            );

            columna ++;

            this.letraEvent[i].setDropShadow(osX, osY, color, alpha);
            this.letraEvent[i].setInteractive().setOrigin(oriX, oriY).setDepth(Settings.depth.textos + 20);

            this.letraEvent[i].on('pointerover', () =>
            {
                this.letraEvent[i].setScale(1.2);
                play_sonidos(this.sonido_numkey, false, 0.8);
            });

            this.letraEvent[i].on('pointerout', () =>
            {
                this.letraEvent[i].setScale(1);
            });

            this.letraEvent[i].on('pointerdown', () =>
            {
                if (this.bandera_send) return;

                console.log(letra);
                nameToSend += letra;

                if (nameToSend.length <= 3)
                {
                    this.makeInitials.setText(nameToSend);
                }

                if (nameToSend.length === 3)
                {
                    this.bandera_send = true;
                    this.send_score(nameToSend);
                }

                play_sonidos(this.sonido_key, false, 0.7);
            });
        }
    }

    send_score(nameToSend)
    {
        console.warn('checking records...');

        async function addScore()
        {
            try
            {
                const scoreToSend = Settings.getPuntos();

                const info =
                {
                    name: nameToSend,
                    puntuacion: scoreToSend
                };

                const args =
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(info)
                };

                console.log(args.body);

                const response = await fetch(Settings.getUrlSendscore(), args);

                const data = await response.json();

                console.log(data);
                console.log(JSON.stringify(data));
            }
            catch(error)
            {
                console.error('Error fetching data:', error);
            }
        }

        addScore(); 
    }

    select_filaLetra(i, letra, size)
    {
        let fila = 70;

        if (i > 12 && i < 26)
        {
            fila += size * 1.25;
        }
        else if (i >= 26)
        {
            fila += size * 2 * 1.25;
        }

        return fila;
    }

    select_columnaLetra(letra)
    {
        if (letra === 'N' || letra === '0')
        {
            return true;
        }

        return false;
    }

    makeTxtNameToSend(pacX, pacY, size, osX, osY, oriX, oriY, color, alpha)
    {
        particulas(
            pacX, pacY,
            'particula1',
            {min: 60, max: 120},
            {min: 2500, max: 3000},
            {start: 0.2, end: 0},
            0xffcc11,
            null, false, this.relatedScene
        );

        this.txtCongrats.get().setAlpha(1);

        this.makeInitials = this.relatedScene.add.bitmapText(
            pacX, Math.floor(pacY * 0.6), 'font-fire', '', size * 3
        );

        this.makeInitials.setDropShadow(osX, osY, color, alpha);
        this.makeInitials.setOrigin(oriX, oriY).setDepth(Settings.depth.textos + 20);
    }

    checkNewRecordOrTop()
    {
        const lenghtOfTopToEntry = 10;
        console.log(Settings.getTop()[lenghtOfTopToEntry - 1]);

        if (Settings.getPuntos() >= Settings.getTop()[lenghtOfTopToEntry - 1]) return true;
        return false;
    }

    get()
    {
        return this.txtgameover;
    }
}
