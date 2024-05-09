import { Settings } from '../scenes/settings.js';

export class Marcador
{
    constructor(scene, datos)
    {
        this.relatedScene = scene;
        this.datos = datos;
    }

    create()
    {
        const { x, y, size, txt, color, strokeColor, id } = this.datos;

        let texto = '';

        if (id === 0) texto = `${txt}${Settings.getPuntos()}`;
        if (id === 1) texto = `${txt}${Settings.getNombre()}`;
        if (id === 2) texto = `${txt}${Settings.getRecord()}`;
        if (id === 3) texto = `${txt}${Settings.getGrados()}`;

        this.marcador = this.relatedScene.add.text(x, y, texto, {
            fontSize: size + 'px',
            fill: color,
            fontFamily: 'verdana, arial, sans-serif',
            fontStyle: 'bold'
        });

        this.marcador.setStroke(strokeColor, 16).setShadow(2, 2, '#111111', 2, false, true);
        //#de77ae #ee9011 #af1

        console.log(this.marcador);
    }

    update(txt, valor)
    {
        this.marcador.setText(`${txt}${valor}`);
    }

    get()
    {
        return this.marcador;
    }
}
