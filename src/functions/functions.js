import { Settings } from "../scenes/settings";
import { Textos } from '../components/textos.js';

function check_controlesKeyboard(relatedScene)
{
  if (!Settings.controlElegido.keyboard) return;

  const maxGrados = Settings.flecha.maxGrados;
  const tecla = Settings.queTeclaPulsar[0];
  const {enArco, enMovimiento, enMovimiento2} = Settings.estadosFlecha;

  if (
    relatedScene.flecha.get().getData('estado') === enArco &&
    relatedScene.controles[tecla].isDown
  ){
    relatedScene.flecha.get().setData('estado', enMovimiento);
    relatedScene.arco.get().setData('estado', 'sin-flecha');
    relatedScene.arco.update(relatedScene.arco.get().getData('estado'));
    play_sonidos(relatedScene.sonido_arrow1, false, 0.9);
  }

  if (
    (relatedScene.flecha.get().getData('estado') === enMovimiento &&
    relatedScene.controles[tecla].isUp) ||
    (relatedScene.flecha.get().getData('estado') === enMovimiento &&
    Settings.getGrados() >= maxGrados)
  ){
    relatedScene.flecha.get().setData('estado', enMovimiento2);
    txtInfoDegrees(relatedScene, calc_indexTxtInfoDegrees());
  }

  if (relatedScene.flecha.get().getData('estado') === enMovimiento)
  {
    Settings.setGrados(Settings.getGrados() + 1);
    // console.log(Settings.getGrados());
    relatedScene.marcadorGrados.update('Deg: ', `${Settings.getGrados()}º`);
  }
}

function check_controlesMobile(relatedScene)
{
  if (!Settings.controlElegido.mobile) return;

  const maxGrados = Settings.flecha.maxGrados;
  const {enArco, enMovimiento, enMovimiento2} = Settings.estadosFlecha;

  if (
    relatedScene.flecha.get().getData('estado') === enArco &&
    relatedScene.input.activePointer.isDown
  ){
    relatedScene.flecha.get().setData('estado', enMovimiento);
    relatedScene.arco.get().setData('estado', 'sin-flecha');
    relatedScene.arco.update(relatedScene.arco.get().getData('estado'));
    play_sonidos(relatedScene.sonido_arrow1, false, 0.9);
  }

  if (
    (relatedScene.flecha.get().getData('estado') === enMovimiento &&
    !relatedScene.input.activePointer.isDown) ||
    (relatedScene.flecha.get().getData('estado') === enMovimiento &&
    Settings.getGrados() >= maxGrados)
  ){
    relatedScene.flecha.get().setData('estado', enMovimiento2);
    txtInfoDegrees(relatedScene, calc_indexTxtInfoDegrees());
  }

  if (relatedScene.flecha.get().getData('estado') === enMovimiento)
  {
    Settings.setGrados(Settings.getGrados() + 1);
    // console.log(Settings.getGrados());
    relatedScene.marcadorGrados.update('Deg: ', `${Settings.getGrados()}º`);
  }
}

function txtInfoDegrees(relatedScene, infoDegrees)
{
  const infoTxt = Settings.infoDegrees[infoDegrees];

  const txtDegrees = new Textos(relatedScene, {
    x: Math.floor(relatedScene.sys.game.config.width / 2.8),
    y: Math.floor(relatedScene.sys.game.config.height / 5),
    txt: infoTxt,
    size: 30, color: '#ffa', style: 'bold',
    stroke: '#ee1', sizeStroke: 12,
    shadowOsx: 2, shadowOsy: 2, shadowColor: '#111111',
    bool1: false, bool2: true, origin: [0, 0.5],
    elastic: false, dura: 0
  });
  
  txtDegrees.create();
  txtDegrees.get().setDepth(Settings.depth.textos);

  relatedScene.tweens.add({
    targets: txtDegrees.get(), alpha: 0, duration: 2500
  });
}

function calc_indexTxtInfoDegrees()
{
  return Math.abs(Settings.flecha.perfectGrados - Settings.getGrados());
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
  check_controlesMobile,
  particulas,
  fetchRecords,
  play_sonidos
};
