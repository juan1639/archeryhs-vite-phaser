
export class Settings
{
    static controlElegido =
    {
        mobile: false,
        keyboard: true
    };

    static queTeclaPulsar = ['space', 'shift', 'up', 'down', 'right', 'left'];

    static screen =
    {
        width: 1024,
        height: 600,
        escBoundsX: 1,
        escBoundsY: 1
    };

    static scaleGame = 1;

    static fps =
    {
        fps60: true,
        allowUpdate: true
    };

    static puntos = 0;
    static showCurrent = 0;
    static nombre = 'IMI';
    static hi = 3000;
    static top = [3000, 2000, 1800, 1750, 1500, 1400, 1300, 1250, 1100, 1000];
    static gameOver = false;

    static txtScore = 'Score: ';

    static fontSettings =
    {
        id: 'font-fire',
        arrayLetras: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.-@',
        size: 48,
        osX: 4,
        osY: 4,
        oriX: 0.5,
        oriY: 0.5,
        color: 0xffff00,
        alpha: 0.3
    };

    static arco =
    {
        iniX: 0,
        iniY: Math.floor(Settings.screen.height / 2),
        scl: [1, 1],
        origin: [0, 0.5]
    };

    static flecha =
    {
        iniX: -500,
        iniY: Math.floor(Settings.screen.height / 2),
        scl: [1, 1],
        origin: [1, 0.5],
        vel: 10,
        grados: 0,
        maxGrados: 40,
        perfectGrados: 20
    };

    static estadosFlecha =
    {
        enArco: 'en-arco',
        enMovimiento: 'en-movimiento',
        enMovimiento2: 'en-movimiento-2',
        clavada: 'clavada',
        clavadaNo: 'clavada-no'
    };

    static cargador =
    {
        num_flechas: 10,
        step: 25,
        m_left: 25,
        iniX: 0,
        iniY: Math.floor(Settings.screen.height / 1.2),
        scl: [1, 1],
        origin: [0.5, 0.5],
        angle: 90
    };

    static diana =
    {
        iniX: Math.floor(Settings.screen.width),
        iniY: Settings.screen.height + 150,
        scl: [1, 1],
        origin: [1, 0.5],
        vel: 2
    };

    static dianaShow =
    {
        iniX: Math.floor(Settings.screen.width / 2),
        iniY: Math.floor(Settings.screen.height / 1.3),
        scl: [1, 1],
        origin: [0.5, 0.5]
    };

    static pausa =
    {
        inicial: {
            activa: false,
            duracion: 4300
        }
    };

    static depth =
    {
        fondo: 0,
        arco: 100,
        flecha: 200,
        diana: 300,
        efectos: 400,
        botones: 500,
        marcadores: 700,
        controles: 800,
        textos: 900
    };
    
    static audio =
    {
        numKey: null,
        key: null,
        overture: null
    };

    // ---------------------------------------------------
    //  Getters
    // ---------------------------------------------------
    static isFps60()
    {
        return Settings.fps.fps60;
    }
    
    static isAllowUpdate()
    {
        return Settings.fps.allowUpdate;
    }

    static isGameOver()
    {
        return Settings.gameOver;
    }

    static getScaleGame()
    {
        return Settings.scaleGame;
    }

    static isPausaInicial()
    {
        return Settings.pausa.inicial.activa;
    }

    static getPausaInicialDuracion()
    {
        return Settings.pausa.inicial.duracion;
    }

    static getPuntos()
    {
        return Settings.puntos;
    }

    static getShowCurrent()
    {
        return Settings.showCurrent;
    }

    static getNombre()
    {
        return Settings.nombre;
    }

    static getRecord()
    {
        return Settings.hi;
    }

    static getTop()
    {
        return Settings.top;
    }

    static getTxtScore()
    {
        return Settings.txtScore;
    }

    static getGrados()
    {
        return Settings.flecha.grados;
    }

    static getCargadorNumFlechas()
    {
        return Settings.cargador.num_flechas;
    }

    // ---------------------------------------------------
    //  Setters
    // ---------------------------------------------------
    static setFps60(bool)
    {
        Settings.fps.fps60 = bool;
    }

    static setAllowUpdate(bool)
    {
        Settings.fps.allowUpdate = bool;
    }

    static setGameOver(bool)
    {
        Settings.gameOver = bool;
    }

    static setScaleGame(scale)
    {
        Settings.scaleGame = scale;
    }

    static setPausaInicial(bool)
    {
        Settings.pausa.inicial.activa = bool;
    }

    static setPuntos(ptos)
    {
        Settings.puntos = ptos;
    }

    static setShowCurrent(current)
    {
        Settings.showCurrent = current;
    }

    static setNombre(nameRecord)
    {
        Settings.nombre = nameRecord;
    }

    static setRecord(hiScore)
    {
        Settings.hi = hiScore;
    }

    static setTop(top5)
    {
        Settings.top = top5;
    }

    static setGrados(degrees)
    {
        Settings.flecha.grados = degrees;
    }

    static setCargadorNumFlechas(num)
    {
        Settings.cargador.num_flechas = num;
    }
}
