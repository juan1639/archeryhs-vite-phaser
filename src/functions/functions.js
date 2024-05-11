import { Settings } from "../scenes/settings";
import { Textos } from "../components/textos";

function check_controlesKeyboard(relatedScene)
  {
    if (!Settings.controlElegido.keyboard) return;

    const maxGrados = Settings.flecha.maxGrados;
    const tecla = Settings.queTeclaPulsar[0];

    if (
      relatedScene.flecha.get().getData('estado') === 'en-arco' &&
      relatedScene.controles[tecla].isDown
    ){
      relatedScene.flecha.get().setData('estado', 'en-movimiento');
      relatedScene.arco.get().setData('estado', 'sin-flecha');
      relatedScene.arco.update(relatedScene.arco.get().getData('estado'));
      play_sonidos(relatedScene.sonido_arrow1, false, 0.9);
    }

    if (
      (relatedScene.flecha.get().getData('estado') === 'en-movimiento' &&
      relatedScene.controles[tecla].isUp) ||
      (relatedScene.flecha.get().getData('estado') === 'en-movimiento' &&
      Settings.getGrados() >= maxGrados)
    ){
      relatedScene.flecha.get().setData('estado', 'en-movimiento-2');
    }

    if (relatedScene.flecha.get().getData('estado') === 'en-movimiento')
    {
      Settings.setGrados(Settings.getGrados() + 1);
      // console.log(Settings.getGrados());
      relatedScene.marcadorGrados.update('Deg: ', `${Settings.getGrados()}º`);
    }
  }

function particulas(x, y, particula, vel, span, size, color, sprite, bool, scene)
{
  const partis = scene.add.particles(x, y, particula, {
    speed: vel,
    lifespan: span,
    scale: size,
    tint: color,
    // gravityY: 200
    blendMode: 'ADD'
  });

  partis.setDepth(Settings.depth.efectos);

  if (bool) partis.startFollow(sprite);
}

function suma_puntos(puntos, scene)
{
  const bonus = Settings.getPuntos() + puntos.getData('puntos');
  Settings.setPuntos(bonus);
  scene.marcadorPtos.update(Settings.getTxtScore(), Settings.getPuntos());
  // console.log(bonus, Settings.getPuntos());
}

async function fetchRecords()
{
  try
  {
    const response = await fetch(Settings.getUrlGet());

    const data = await response.json();
    const dataJson = JSON.stringify(data);

    console.log(data);
    console.log(dataJson);

    let recordsTxtData = [];

    data.forEach((record, index) =>
    {
      const {name, puntuacion} = record;

      recordsTxtData.push(name);
      recordsTxtData.push(puntuacion.toString());
    });

    console.log(recordsTxtData);

    return recordsTxtData;
  }
  catch(error)
  {
    console.error('Error fetching data:', error);
  }
}

function play_sonidos(id, loop, volumen)
{
  id.volume = volumen;
  id.loop = loop;
  id.play();
}

export {
  check_controlesKeyboard,
  particulas,
  fetchRecords,
  play_sonidos
};
