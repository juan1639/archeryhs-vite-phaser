var e=Object.defineProperty,t=(t,s,o)=>(((t,s,o)=>{s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[s]=o})(t,"symbol"!=typeof s?s+"":s,o),o);import{p as s}from"./phaser-cxBNu8M8.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const s of e)if("childList"===s.type)for(const e of s.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const o=class e{static isFps60(){return e.fps.fps60}static isAllowUpdate(){return e.fps.allowUpdate}static isGameOver(){return e.gameOver}static getScaleGame(){return e.scaleGame}static isPausaInicial(){return e.pausa.inicial.activa}static getPausaInicialDuracion(){return e.pausa.inicial.duracion}static getPuntos(){return e.puntos}static getShowCurrent(){return e.showCurrent}static getNombre(){return e.nombre}static getRecord(){return e.hi}static getTop(){return e.top}static getTxtScore(){return e.txtScore}static getGrados(){return e.flecha.grados}static getCargadorNumFlechas(){return e.cargador.num_flechas}static getUrlGet(){return e.URL.URL_G}static getUrlSendscore(){return e.URL.URL_P}static setFps60(t){e.fps.fps60=t}static setAllowUpdate(t){e.fps.allowUpdate=t}static setGameOver(t){e.gameOver=t}static setScaleGame(t){e.scaleGame=t}static setPausaInicial(t){e.pausa.inicial.activa=t}static setPuntos(t){e.puntos=t}static setShowCurrent(t){e.showCurrent=t}static setNombre(t){e.nombre=t}static setRecord(t){e.hi=t}static setTop(t){e.top=t}static setGrados(t){e.flecha.grados=t}static setCargadorNumFlechas(t){e.cargador.num_flechas=t}};t(o,"controlElegido",{mobile:!1,keyboard:!0}),t(o,"queTeclaPulsar",["space","shift","up","down","right","left"]),t(o,"screen",{width:1024,height:600,escBoundsX:1,escBoundsY:1}),t(o,"scaleGame",1),t(o,"fps",{fps60:!0,allowUpdate:!0}),t(o,"puntos",0),t(o,"showCurrent",0),t(o,"nombre","IMI"),t(o,"hi",1e3),t(o,"top",[1e3,900,800,750,500,400,300,250,150,100]),t(o,"gameOver",!1),t(o,"txtScore","Score: "),t(o,"fontSettings",{id:"font-fire",arrayLetras:"ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.-@",size:48,osX:4,osY:4,oriX:.5,oriY:.5,color:16776960,alpha:.3}),t(o,"arco",{iniX:0,iniY:Math.floor(o.screen.height/2),scl:[1,1],origin:[0,.5]}),t(o,"flecha",{iniX:-500,iniY:Math.floor(o.screen.height/2),scl:[1,1],origin:[1,.5],vel:10,grados:0,maxGrados:40,perfectGrados:20}),t(o,"estadosFlecha",{enArco:"en-arco",enMovimiento:"en-movimiento",enMovimiento2:"en-movimiento-2",clavada:"clavada",clavadaNo:"clavada-no"}),t(o,"cargador",{num_flechas:10,step:25,m_left:25,iniX:0,iniY:Math.floor(o.screen.height/1.2),scl:[1,1],origin:[.5,.5],angle:90,recargar_flechas:10}),t(o,"diana",{iniX:Math.floor(o.screen.width),iniY:o.screen.height+150,scl:[1,1],origin:[1,.5],vel:2}),t(o,"dianaShow",{iniX:Math.floor(o.screen.width/2),iniY:Math.floor(o.screen.height/1.3),scl:[1,1],origin:[.5,.5]}),t(o,"gameover",{txt:{txt:" Game Over ",iniX:Math.floor(o.screen.width/2),iniY:Math.floor(o.screen.height/2),scl:[1,1],origin:[.5,.5]}}),t(o,"pausa",{inicial:{activa:!1,duracion:4300}}),t(o,"depth",{fondo:0,arco:100,flecha:200,diana:300,efectos:400,botones:500,marcadores:700,controles:800,textos:900}),t(o,"infoDegrees",["Perfect degrees!","Nice degrees","Nice degrees","Nice degrees","Nice degrees","Nice degrees","Try to improve degrees","Try to improve degrees","Try to improve degrees","Try to improve degrees","Try to improve degrees","Bad degrees","Bad degrees","Bad degrees","Bad degrees","Bad degrees","Very bad degrees","Very bad degrees","Very bad degrees","Very bad degrees","Very bad degrees","Very bad degrees"]),t(o,"audio",{numKey:null,key:null,overture:null}),t(o,"URL",{URL_G:"https://b-archeryhs-production.up.railway.app/hiscores",URL_P:"https://b-archeryhs-production.up.railway.app/create"});let a=o;class i{constructor(e,t){this.relatedScene=e,this.datos=t}create(){const{x:e,y:t,txt:s,size:o,color:a,style:i,stroke:r,sizeStroke:n,shadowOsx:h,shadowOsy:c,shadowColor:d,bool1:l,bool2:g,origin:f,elastic:u,dura:p}=this.datos;this.texto=this.relatedScene.add.text(e,t,s,{fontSize:o+"px",fill:a,fontFamily:"verdana, arial, sans-serif",fontStyle:i}),this.texto.setOrigin(f[0],f[1]),this.texto.setStroke(r,n),this.texto.setShadow(h,c,d,2,l,g),this.elastic(s,u,p),console.log(this.texto)}elastic(e,t,s){s>0&&this.relatedScene.tweens.add({targets:this.texto,y:t,ease:"Elastic",duration:s})}get(){return this.texto}}class r extends s.Scene{constructor(){super("Boot")}init(){this.txt=new i(this,{x:Math.floor(this.sys.game.config.width/2),y:Math.floor(this.sys.game.config.height/2),txt:" Touch screen or \n \n click to start... ",size:60,color:"#ffa",style:"bold",stroke:"#fb1",sizeStroke:16,shadowOsx:2,shadowOsy:2,shadowColor:"#111",bool1:!1,bool2:!0,origin:[.5,.5],elastic:!1,dura:0})}preload(){this.load.image("fondo","assets/img/bg.png")}create(){this.add.image(0,0,"fondo").setOrigin(0,0),this.txt.create(),this.input.on("pointerdown",(()=>this.scene.start("Preloader"))),console.log(this.txt)}}class n{constructor(e,t){this.relatedScene=e,this.datos=t}create(){const{x:e,y:t,size:s,txt:o,color:i,strokeColor:r,id:n}=this.datos;let h="";0===n&&(h=`${o}${a.getPuntos()}`),1===n&&(h=`${o}${a.getNombre()}`),2===n&&(h=`${o}${a.getRecord()}`),3===n&&(h=`${o}${a.getGrados()}º`),4===n&&(h=`${o}${a.getShowCurrent()}`),this.marcador=this.relatedScene.add.text(e,t,h,{fontSize:s+"px",fill:i,fontFamily:"verdana, arial, sans-serif",fontStyle:"bold"}),this.marcador.setStroke(r,16).setShadow(2,2,"#111111",2,!1,!0),console.log(this.marcador)}update(e,t){this.marcador.setText(`${e}${t}`)}get(){return this.marcador}}class h{constructor(e){this.relatedScene=e}create(){a.getScaleGame();const{iniX:e,iniY:t,scl:s,origin:o}=a.arco;this.arco=this.relatedScene.physics.add.sprite(e,t,"arco",1),this.arco.setOrigin(o[0],o[1]).setScale(s[0],s[1]),this.arco.setDepth(a.depth.arco).setFrame(1),this.arco.setData("estado","sin-flecha"),this.arco.setData("width",this.arco.width),console.log(this.arco)}update(e){"sin-flecha"===e?this.arco.setFrame(1):this.arco.setFrame(0)}get(){return this.arco}}function c(e,t){const s=a.infoDegrees[t],o=new i(e,{x:Math.floor(e.sys.game.config.width/2.8),y:Math.floor(e.sys.game.config.height/5),txt:s,size:30,color:"#ffa",style:"bold",stroke:"#ee1",sizeStroke:12,shadowOsx:2,shadowOsy:2,shadowColor:"#111111",bool1:!1,bool2:!0,origin:[0,.5],elastic:!1,dura:0});o.create(),o.get().setDepth(a.depth.textos),e.tweens.add({targets:o.get(),alpha:0,duration:2500})}function d(){return Math.abs(a.flecha.perfectGrados-a.getGrados())}function l(e,t,s){e.volume=s,e.loop=t,e.play()}class g{constructor(e){this.relatedScene=e}create(){a.getScaleGame();const{iniX:e,iniY:t,scl:s,origin:o}=a.flecha;this.flecha=this.relatedScene.physics.add.sprite(e,t,"flecha"),this.flecha.setOrigin(o[0],o[1]).setScale(s[0],s[1]),this.flecha.setDepth(a.depth.flecha),this.flecha.setData("width",this.flecha.width),this.flecha.setData("estado","en-arco"),this.sonido_arrow2=this.relatedScene.sound.add("arrow-2"),console.log(this.flecha)}update(){const e=a.flecha.vel;if("en-movi"!==this.flecha.getData("estado").slice(0,7)&&"clavada-no"!==this.flecha.getData("estado")||(this.flecha.x+=e),this.flecha.x>=this.relatedScene.sys.game.config.width&&"clavada"!==this.flecha.getData("estado").slice(0,7)){if(this.check_impactoDiana()){this.flecha.setData("estado","clavada");const e=this.calc_currentScore()+this.calc_currentScoreDeg();a.setShowCurrent(e),this.relatedScene.marcadorCurrent.update("Pts: ",a.getShowCurrent()),a.setPuntos(a.getPuntos()+a.getShowCurrent()),this.relatedScene.marcadorPtos.update(a.getTxtScore(),a.getPuntos()),this.showTarget(),this.make_tweensCurrent(),l(this.sonido_arrow2,!1,.9)}else this.flecha.setData("estado","clavada-no");this.relatedScene.marcadorCurrent.update("Pts: ",`${a.getShowCurrent()}`)}"clavada"===this.flecha.getData("estado")&&(this.flecha.y+=this.relatedScene.diana.get().getData("vel"))}check_impactoDiana(){return Math.abs(this.relatedScene.diana.get().y-this.flecha.y)<Math.floor(this.relatedScene.diana.get().height/2)}calc_currentScore(){const e=Math.abs(this.relatedScene.diana.get().y-this.flecha.y),t=Math.floor(this.relatedScene.diana.get().height/2)-e;return t<0?0:t}calc_currentScoreDeg(){const e=a.flecha.perfectGrados;return 6*(e-Math.abs(e-a.getGrados()))}showTarget(){const e=this.relatedScene.diana.get().y-this.flecha.y,t=6*(a.flecha.perfectGrados-a.getGrados());this.relatedScene.dianashow.update(e,t)}make_tweensCurrent(){return this.relatedScene.tweens.add({targets:this.relatedScene.marcadorCurrent.get(),scale:1.5,ease:"elastic",yoyo:!0,duration:900})}get(){return this.flecha}}class f{constructor(e){this.relatedScene=e}create(){a.getScaleGame();const{num_flechas:e,step:t,m_left:s,iniX:o,iniY:i,scl:r,origin:n,angle:h}=a.cargador;this.relatedScene.add.rectangle(o,i,11*t,100+t,1118481).setOrigin(0,.5),this.relatedScene.add.rectangle(o,i,11*t,100+t).setOrigin(0,.5).setStrokeStyle(2,11184810),this.cargador=this.relatedScene.physics.add.staticGroup();for(let a=0;a<e;a++)this.cargador.create(o+s+t*a,i,"flecha");this.cargador.children.iterate((e=>{e.setOrigin(n[0],n[1]).setScale(r[0],r[1]).setAngle(h),e.setDepth(a.depth.diana+80).setVisible(!0),e.setData("estado","visible")})),console.log(this.cargador)}get(){return this.cargador}}class u{constructor(e){this.relatedScene=e}create(){a.getScaleGame();const{iniX:e,iniY:t,scl:s,origin:o,vel:i}=a.diana;this.diana=this.relatedScene.physics.add.sprite(e,t,"diana"),this.diana.setOrigin(o[0],o[1]).setScale(s[0],s[1]),this.diana.setDepth(a.depth.diana),this.diana.setY(t),this.diana.setData("vel",i),this.diana.setData("estado","parada"),console.log(this.diana)}update(){a.isGameOver()||(this.diana.y+=this.diana.getData("vel"),this.diana.y>=this.relatedScene.sys.game.config.height+this.diana.height&&(this.diana.y=-this.diana.height,this.relatedScene.arco.get().setData("estado","con-flecha"),this.relatedScene.arco.update(this.relatedScene.arco.get().getData("estado")),a.getCargadorNumFlechas()>0?(this.another_arrow(),this.reset_degrees(),this.reset_currentScore()):(console.log("fin"),this.reset_degrees(),this.reset_currentScore(),a.setGameOver(!0),this.relatedScene.gameover.create(),l(this.relatedScene.sonido_gameover,!1,.9)),l(this.relatedScene.sonido_numkey,!1,.9)))}another_arrow(){const e=a.getCargadorNumFlechas(),t=this.relatedScene.flecha.get().getData("width"),s=a.flecha.iniY;this.relatedScene.cargador.get().getChildren()[e-1].setVisible(!1),a.setCargadorNumFlechas(e-1),this.relatedScene.flecha.get().setX(t),this.relatedScene.flecha.get().setY(s),this.relatedScene.flecha.get().setData("estado","en-arco")}reset_degrees(){a.setGrados(0),this.relatedScene.marcadorGrados.update("Deg: ",`${a.getGrados()}º`)}reset_currentScore(){a.setShowCurrent(0),this.relatedScene.marcadorCurrent.update("Pts: ",a.getShowCurrent())}get(){return this.diana}}class p{constructor(e){this.relatedScene=e}create(){a.getScaleGame();const{iniX:e,iniY:t,scl:s,origin:o}=a.dianaShow;this.dianashow=this.relatedScene.physics.add.sprite(e,t,"diana-show"),this.dianashow.setOrigin(o[0],o[1]).setScale(s[0],s[1]),this.dianashow.setDepth(a.depth.flecha+80).setVisible(!1),this.dianashow.setX(e).setY(t),console.log(this.dianashow)}update(e,t){console.log("target"),this.relatedScene.add.rectangle(this.dianashow.x+e,this.dianashow.y+t,5,5).setOrigin(.5,.5).setStrokeStyle(2,1118481).setDepth(a.depth.efectos+20)}get(){return this.dianashow}}class m{constructor(e,t){this.relatedScene=e,this.args=t}create(){a.audio.numKey=this.relatedScene.sound.add("numkey");const{left:e,top:t,id:s,scX:o,scY:r,angle:n,originX:h,originY:c,texto:d,nextScene:g}=this.args;this.boton=this.relatedScene.add.sprite(e,t,s).setInteractive(),this.boton.setScale(o,r).setAngle(1).setDepth(a.depth.botones);let f=24;s.includes("settings")&&(f=20),this.txt=new i(this.relatedScene,{x:e,y:t,txt:d,size:f,color:"#ff1",style:"bold",stroke:"#1bd",sizeStroke:16,shadowOsx:2,shadowOsy:2,shadowColor:"#111111",bool1:!1,bool2:!0,origin:[.5,.5],elastic:!1,dura:0}),this.txt.create(),this.txt.get().setDepth(a.depth.textos).setAlpha(1).setScale(1)," Continue "===d&&this.txt.get().setVisible(!1),this.boton.on("pointerover",(()=>{this.boton.setScale(o+.04,r+.04)})),this.boton.on("pointerout",(()=>{this.boton.setScale(o,r)})),this.boton.on("pointerdown",(e=>{l(a.audio.numKey,!1,.8),this.relatedScene.scene.start(g)})),this.relatedScene.tweens.add({targets:[this.boton,this.txt.get()],angle:359,ease:"Elastic",yoyo:!0,hold:3e3,duration:2e3,repeat:-1})}get(){return this.boton}}class y{constructor(e,t){this.relatedScene=e,this.args=t}create(){const{x:e,y:t,id:s,orX:o,orY:i,scX:r,scY:n,ang:h}=this.args;this.boton=this.relatedScene.add.image(e,t,s).setInteractive(),this.boton.setOrigin(o,i).setScale(r,n),this.boton.setAngle(h).setFrame(0).setDepth(a.depth.marcadores),this.boton.setX(e).setY(t),this.boton.on("pointerover",(()=>{this.boton.setScale(r+.1,n+.1)})),this.boton.on("pointerout",(()=>{this.boton.setScale(r,n)})),this.boton.on("pointerdown",(()=>{this.relatedScene.scale.isFullscreen?this.relatedScene.scale.stopFullscreen():this.relatedScene.scale.startFullscreen()}))}}let w=class{constructor(e){this.relatedScene=e}create(){a.getScaleGame();const{txt:e,iniX:t,iniY:s,scl:o,origin:r}=a.gameover.txt;this.txtgameover=new i(this.relatedScene,{x:t,y:s,txt:e,size:75,color:"#ffa",style:"bold",stroke:"#f21",sizeStroke:12,shadowOsx:2,shadowOsy:2,shadowColor:"#111111",bool1:!1,bool2:!0,origin:[r[0],r[1]],elastic:!1,dura:0}),this.txtgameover.create(),this.txtgameover.get().setDepth(a.depth.textos).setAlpha(0),this.relatedScene.tweens.add({targets:this.txtgameover.get(),alpha:1,duration:2500}),this.relatedScene.time.delayedCall(2e3,(()=>{const e=a.getPuntos();e>=2e3?l(this.relatedScene.sonido_aplausosEagle,!1,.9):e>=1e3&&l(this.relatedScene.sonido_aplausosBirdie,!1,.9)})),this.relatedScene.time.delayedCall(3500,(()=>{this.relatedScene.botonrejugar.get().setVisible(!0),this.relatedScene.botonrejugar.txt.get().setVisible(!0)})),console.log(this.txtgameover),this.putInitialsToSend(t,Math.floor(s/2)),this.checkNewRecordOrTop()||this.send_score("IMI")}putInitialsToSend(e,t){if(!this.checkNewRecordOrTop())return;const{id:s,arrayLetras:o,size:i,osX:r,osY:n,oriX:h,oriY:c,color:d,alpha:g}=a.fontSettings,f=o;this.letraEvent=new Array(f.length).fill(null);let u="";this.makeTxtNameToSend(e,t,i,r,n,h,c,d,g),this.bandera_send=!1;const p=e-Math.floor(this.relatedScene.sys.game.config.width/2.3);let m=0;for(let y=0;y<f.length;y++){const e=f[y];let s=this.select_filaLetra(y,e,i);this.select_columnaLetra(e)&&(m=0),this.letraEvent[y]=this.relatedScene.add.bitmapText(m*(1.25*i)+p,t+s,"font-fire",e,i),m++,this.letraEvent[y].setDropShadow(r,n,d,g),this.letraEvent[y].setInteractive().setOrigin(h,c).setDepth(a.depth.textos+20),this.letraEvent[y].on("pointerover",(()=>{this.letraEvent[y].setScale(1.2),l(this.sonido_numkey,!1,.8)})),this.letraEvent[y].on("pointerout",(()=>{this.letraEvent[y].setScale(1)})),this.letraEvent[y].on("pointerdown",(()=>{this.bandera_send||(console.log(e),u+=e,u.length<=3&&this.makeInitials.setText(u),3===u.length&&(this.bandera_send=!0,this.send_score(u)),l(this.sonido_key,!1,.7))}))}}send_score(e){console.warn("checking records..."),async function(){try{const t=a.getPuntos(),s={name:e,puntuacion:t},o={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)};console.log(o.body);const i=await fetch(a.getUrlSendscore(),o),r=await i.json();console.log(r),console.log(JSON.stringify(r))}catch(t){console.error("Error fetching data:",t)}}()}select_filaLetra(e,t,s){let o=70;return e>12&&e<26?o+=1.25*s:e>=26&&(o+=2*s*1.25),o}select_columnaLetra(e){return"N"===e||"0"===e}makeTxtNameToSend(e,t,s,o,i,r,n,h,c){particulas(e,t,"particula1",{min:60,max:120},{min:2500,max:3e3},{start:.2,end:0},16763921,null,!1,this.relatedScene),this.txtCongrats.get().setAlpha(1),this.makeInitials=this.relatedScene.add.bitmapText(e,Math.floor(.6*t),"font-fire","",3*s),this.makeInitials.setDropShadow(o,i,h,c),this.makeInitials.setOrigin(r,n).setDepth(a.depth.textos+20)}checkNewRecordOrTop(){return console.log(a.getTop()[4]),a.getPuntos()>=a.getTop()[4]}get(){return this.txtgameover}};class S extends s.Scene{constructor(){super("Game")}init(){a.audio.overture.volume=0,a.setGameOver(!1),a.setPuntos(0),a.setCargadorNumFlechas(a.cargador.recargar_flechas),this.set_sonidos(),this.set_pausaInicial(a.getPausaInicialDuracion()),this.arco=new h(this),this.flecha=new g(this),this.cargador=new f(this),this.diana=new u(this),this.dianashow=new p(this),this.gameover=new w(this),this.instanciar_marcadores()}preload(){}create(){this.add.image(0,0,"fondo").setDepth(a.depth.fondo).setOrigin(0,0),this.arco.create(),this.flecha.create(),this.cargador.create(),this.diana.create(),this.dianashow.create(),this.marcadorPtos.create(),this.marcadorNombre.create(),this.marcadorHi.create(),this.marcadorGrados.create(),this.marcadorCurrent.create(),this.botonfullscreen.create(),this.botonrejugar.create(),this.botonrejugar.get().setVisible(!1),this.texto_info("Info"),this.controles=this.input.keyboard.createCursorKeys(),console.log(this.controles)}update(){if(!a.isFps60()){if(a.isAllowUpdate())return void a.setAllowUpdate(!1);a.setAllowUpdate(!0)}a.isPausaInicial()||a.isGameOver()||(function(e){if(!a.controlElegido.keyboard)return;const t=a.flecha.maxGrados,s=a.queTeclaPulsar[0],{enArco:o,enMovimiento:i,enMovimiento2:r}=a.estadosFlecha;e.flecha.get().getData("estado")===o&&e.controles[s].isDown&&(e.flecha.get().setData("estado",i),e.arco.get().setData("estado","sin-flecha"),e.arco.update(e.arco.get().getData("estado")),l(e.sonido_arrow1,!1,.9)),(e.flecha.get().getData("estado")===i&&e.controles[s].isUp||e.flecha.get().getData("estado")===i&&a.getGrados()>=t)&&(e.flecha.get().setData("estado",r),c(e,d())),e.flecha.get().getData("estado")===i&&(a.setGrados(a.getGrados()+1),e.marcadorGrados.update("Deg: ",`${a.getGrados()}º`))}(this),function(e){if(!a.controlElegido.mobile)return;const t=a.flecha.maxGrados,{enArco:s,enMovimiento:o,enMovimiento2:i}=a.estadosFlecha;e.flecha.get().getData("estado")===s&&e.input.activePointer.isDown&&(e.flecha.get().setData("estado",o),e.arco.get().setData("estado","sin-flecha"),e.arco.update(e.arco.get().getData("estado")),l(e.sonido_arrow1,!1,.9)),(e.flecha.get().getData("estado")===o&&!e.input.activePointer.isDown||e.flecha.get().getData("estado")===o&&a.getGrados()>=t)&&(e.flecha.get().setData("estado",i),c(e,d())),e.flecha.get().getData("estado")===o&&(a.setGrados(a.getGrados()+1),e.marcadorGrados.update("Deg: ",`${a.getGrados()}º`))}(this),this.flecha.update(),this.diana.update())}set_pausaInicial(e){a.setPausaInicial(!0),this.txtpreparado=new i(this,{x:Math.floor(this.sys.game.config.width/2)*a.getScaleGame(),y:0,txt:"Ready!",size:78,color:"#ffa",style:"bold",stroke:"#f81",sizeStroke:16,shadowOsx:2,shadowOsy:2,shadowColor:"#111111",bool1:!1,bool2:!0,origin:[.5,.5],elastic:Math.floor(this.sys.game.config.height/2),dura:2800}),this.txtpreparado.create(),this.txtpreparado.get().setDepth(a.depth.textos),this.add.timeline([{at:e,run:()=>{a.setPausaInicial(!1),this.txtpreparado.get().setVisible(!1),this.set_txtGo()}}]).play(),l(this.sonido_getReady,!1,.8),console.log(this.txtpreparado)}set_txtGo(){const e=new i(this,{x:Math.floor(this.sys.game.config.width/2)*a.getScaleGame(),y:Math.floor(this.sys.game.config.height/2),txt:" Go! ",size:90,color:"#ffa",style:"bold",stroke:"#f81",sizeStroke:16,shadowOsx:2,shadowOsy:2,shadowColor:"#111111",bool1:!1,bool2:!0,origin:[.5,.5],elastic:!1,dura:0});e.create(),e.get().setDepth(a.depth.textos),this.tweens.add({targets:e.get(),alpha:0,duration:1200}),this.dianashow.get().setVisible(!0),l(this.sonido_gooo,!1,.9)}texto_enhorabuena(){this.txtcongrats=new i(this,{x:Math.floor(this.sys.game.config.width/1.8),y:0,txt:" Congratulations! ",size:70,color:"#ffa",style:"bold",stroke:"#5f1",sizeStroke:16,shadowOsx:2,shadowOsy:2,shadowColor:"#111111",bool1:!1,bool2:!0,origin:[.5,.5],elastic:this.jugador.get().y-a.tileXY.y,dura:a.pausa.nivelSuperado.duracion}),this.txtcongrats.create(),this.txtcongrats.get().setDepth(a.depth.textos)}texto_info(e){e=a.controlElegido.mobile?" To Shoot an arrow \n touch and hold-touch ":" To Shoot an arrow \n press space-bar \n and hold-press ",this.txtInfo=new i(this,{x:Math.floor(this.sys.game.config.width/2),y:Math.floor(this.sys.game.config.height/1.18),txt:e,size:40,color:"#ffa",style:"bold",stroke:"#ef1",sizeStroke:16,shadowOsx:2,shadowOsy:2,shadowColor:"#111111",bool1:!1,bool2:!0,origin:[.5,.5],elastic:!1,dura:0}),this.txtInfo.create(),this.txtInfo.get().setDepth(a.depth.textos),this.tweens.add({targets:this.txtInfo.get(),alpha:0,duration:9e3})}instanciar_marcadores(){const e=this.sys.game.config.width,t=this.sys.game.config.height;this.marcadorPtos=new n(this,{x:10,y:0,size:40,txt:a.getTxtScore(),color:"#fff",strokeColor:"#af1",id:0}),this.marcadorHi=new n(this,{x:Math.floor(e/2.6),y:0,size:40,txt:" Record: ",color:"#fff",strokeColor:"#16d",id:2}),this.marcadorNombre=new n(this,{x:Math.floor(e/1.35),y:0,size:40,txt:" ",color:"#ff5",strokeColor:"#16d",id:1}),this.marcadorGrados=new n(this,{x:10,y:90,size:50,txt:"Deg: ",color:"#fff",strokeColor:"#f51",id:3}),this.marcadorCurrent=new n(this,{x:Math.floor(e/1.8),y:Math.floor(t/3.5),size:50,txt:"Pts: ",color:"#fff",strokeColor:"#f51",id:4}),this.botonfullscreen=new y(this,{x:Math.floor(e/1.1),y:7,id:"boton-fullscreen",orX:0,orY:0,scX:1.2,scY:.8,ang:0}),this.botonrejugar=new m(this,{left:Math.floor(this.sys.game.config.width/1.25),top:Math.floor(this.sys.game.config.height/1.3),id:"boton-nueva-partida",scX:.6,scY:.5,angle:1,originX:.5,originY:.5,texto:" Continue ",nextScene:"MainMenu"})}set_sonidos(){this.sonido_key=this.sound.add("key"),this.sonido_numkey=this.sound.add("numkey"),this.sonido_aplausosEagle=this.sound.add("aplausos-eagle"),this.sonido_aplausosBirdie=this.sound.add("aplausos-birdie"),this.sonido_arrow1=this.sound.add("arrow-1"),this.sonido_arrow2=this.sound.add("arrow-2"),this.sonido_abucheos=this.sound.add("abucheos"),this.sonido_getReady=this.sound.add("get-ready"),this.sonido_gooo=this.sound.add("gooo"),this.sonido_fireworks=this.sound.add("fireworks"),this.sonido_gameover=this.sound.add("gameover")}}class x extends s.Scene{constructor(){super("GameOver")}create(){this.cameras.main.setBackgroundColor(16711680),this.add.image(512,384,"background").setAlpha(.5),this.add.text(512,384,"Game Over",{fontFamily:"Arial Black",fontSize:64,color:"#ffffff",stroke:"#000000",strokeThickness:8,align:"center"}).setOrigin(.5),this.input.once("pointerdown",(()=>{this.scene.start("MainMenu")}))}}class b extends s.Scene{constructor(){super("MainMenu")}init(){this.botoninicio=new m(this,{left:Math.floor(this.sys.game.config.width/2),top:Math.floor(this.sys.game.config.height/1.25),id:"boton-nueva-partida",scX:.6,scY:.5,angle:1,originX:.5,originY:.5,texto:" New Game ",nextScene:"PreNivel"}),this.txt=new i(this,{x:Math.floor(this.sys.game.config.width/2),y:0,txt:" Archery ",size:120,color:"#ffa",style:"bold",stroke:"#fa1",sizeStroke:16,shadowOsx:2,shadowOsy:2,shadowColor:"#111",bool1:!1,bool2:!0,origin:[.5,.5],elastic:Math.floor(this.sys.game.config.height/4),dura:3e3}),this.txtRecords=new i(this,{x:Math.floor(this.sys.game.config.width/2),y:0,txt:" Tabla records ",size:24,color:"#ffa",style:"bold",stroke:"#5e1",sizeStroke:7,shadowOsx:2,shadowOsy:2,shadowColor:"#111",bool1:!1,bool2:!0,origin:[.5,.5],elastic:Math.floor(this.sys.game.config.height/1.7),dura:3e3})}preload(){}create(){this.hacerFetchRecords=async()=>async function(){try{const e=await fetch(a.getUrlGet()),t=await e.json(),s=JSON.stringify(t);console.log(t),console.log(s);let o=[];return t.forEach(((e,t)=>{const{name:s,puntuacion:a}=e;o.push(s),o.push(a.toString())})),console.log(o),o}catch(e){console.error("Error fetching data:",e)}}().then((e=>{this.recordsTxtData=e,console.warn(this.recordsTxtData);const t=[];let s="     RECORDS\n \n",o=1;for(let a=0;a<this.recordsTxtData.length;a+=2){const e=this.recordsTxtData[a],i=this.recordsTxtData[a+1];console.log(e,i),this.catch_record(o,i),t.push(i),s+=` ${o}.  ${e}   ${i}\n`,o++}this.txtRecords.get().setText(s),a.setTop(t)})).catch((e=>console.warn(e))),this.hacerFetchRecords(),a.audio.overture=this.sound.add("overture"),this.add.image(0,0,"fondo").setOrigin(0,0).setDepth(a.depth.fondo),this.txt.create(),this.txt.get().setDepth(a.depth.textos),this.txtRecords.create(),this.txtRecords.get().setVisible(!0).setDepth(a.depth.textos),console.log(this.txtRecords.get().visible),this.add.text(Math.floor(this.sys.game.config.width/3.4),Math.floor(this.sys.game.config.height/1.04),"Based on classic arcade game Hyper Sports of 1984",{fontSize:"16px",color:"#9ff",align:"justify",fontFamily:"Arial"});const e=[Math.floor(this.sys.game.config.width/2),Math.floor(this.sys.game.config.height/20),Math.floor(this.sys.game.config.height/5)];this.add.timeline([{at:1800,run:()=>{this.botoninicio.create(),function(e,t,s,o,i,r,n,h,c,d){const l=d.add.particles(e,t,"particula1",{speed:{min:60,max:120},lifespan:{min:2500,max:3e3},scale:{start:.2,end:0},tint:16763921,blendMode:"ADD"});l.setDepth(a.depth.efectos)}(e[0],e[2]+50,0,0,0,0,0,0,0,this)}}]).play(),this.add.timeline([{at:7e3,run:()=>{this.txtRecords.get().visible?this.txtRecords.get().setVisible(!1):this.txtRecords.get().setVisible(!0)}}]).repeat(-1).play(),l(a.audio.overture,!1,.8),console.log(this.txt)}update(){}catch_record(e,t){1===e&&a.setRecord(t)}}class v extends s.Scene{constructor(){super("Preloader")}init(){const e=this.sys.game.config.width,t=this.sys.game.config.height;this.load.image("fondo","assets/img/bg.png"),this.add.image(0,0,"fondo").setOrigin(0,0),this.txt=new i(this,{x:Math.floor(e/2),y:Math.floor(t/3.5),txt:" Loading...",size:55,color:"#ffa",style:"bold",stroke:"#f91",sizeStroke:16,shadowOsx:2,shadowOsy:2,shadowColor:"#111",bool1:!1,bool2:!0,origin:[.5,.5],elastic:!1,dura:0}),this.txt.create(),this.add.rectangle(Math.floor(e/2),Math.floor(t/2),Math.floor(e/1.5),Math.floor(t/12)).setStrokeStyle(1,16772744);const s=this.add.rectangle(Math.floor(e/2)-Math.floor(e/3)+4,Math.floor(t/2),4,Math.floor(t/14),16750865);this.load.on("progress",(t=>{s.width=Math.floor(e/1.52)*t}))}preload(){this.load.setPath("assets"),this.load.image("fondo","./img/fondo-verde.png"),this.load.image("archery-img","./img/archeryImg.png"),this.load.image("boton-nueva-partida","./img/ui-newgame.png"),this.load.image("boton-more-settings","./img/ui-newgame.png"),this.load.spritesheet("radio-buttons","./img/radio-buttons-ssheet.png",{frameWidth:50,frameHeight:50}),this.load.spritesheet("boton-fullscreen","./img/boton-fullscreen.png",{frameWidth:64,frameHeight:64}),this.load.spritesheet("arco","./img/arco-v3-ssheet.png",{frameWidth:75,frameHeight:100}),this.load.image("flecha","./img/flecha-v2.png"),this.load.image("diana","./img/diana.png"),this.load.image("diana-show","./img/dianashow.png"),this.load.image("particula1","./img/particula1.png"),this.load.bitmapFont("font-fire","/img/azo-fire.png","/img/azo-fire.xml"),this.load.audio("key","./audio/key.wav"),this.load.audio("numkey","./audio/numkey.wav"),this.load.audio("aplausos-birdie","./audio/aplausosbirdie.mp3"),this.load.audio("aplausos-eagle","./audio/aplausoseagle.mp3"),this.load.audio("arrow-1","./audio/arrow1.mp3"),this.load.audio("arrow-2","./audio/arrow2.mp3"),this.load.audio("abucheos","./audio/boooh.mp3"),this.load.audio("overture","./audio/Overture.ogg"),this.load.audio("fireworks","./audio/fireworks.mp3"),this.load.audio("get-ready","./audio/get-ready.mp3"),this.load.audio("gooo","./audio/gooo.mp3"),this.load.audio("gameover","./audio/gameover.mp3")}create(){this.scene.start("MainMenu")}}class M{constructor(e,t){this.relatedScene=e,this.args=t}create(){const{left:e,top:t,addLeft:s,orX:o,orY:r,frame:n,scale:h,txtSize:c,texto:d,id:l}=this.args;this.radiobutton=this.relatedScene.add.sprite(e,t,"radio-buttons").setInteractive(),this.radiobutton.setOrigin(o,r).setScale(h).setDepth(a.depth.textos).setFrame(n),this.radiobutton.setData("id",l),this.txt=new i(this.relatedScene,{x:e+60+s,y:t,txt:d,size:c,color:"#ffa",style:"bold",stroke:"#fa1",sizeStroke:16,shadowOsx:2,shadowOsy:2,shadowColor:"#111",bool1:!1,bool2:!0,origin:[o,r],elastic:!1,dura:0}),this.txt.create(),this.txt.get().setDepth(a.depth.textos),this.radiobutton.on("pointerover",(()=>{this.txt.get().setScale(h+.1),this.radiobutton.setScale(h+.1)})),this.radiobutton.on("pointerout",(()=>{this.txt.get().setScale(h),this.radiobutton.setScale(h)})),this.radiobutton.on("pointerdown",(e=>{l.includes("FPS")?this.relatedScene.radioFps.forEach((e=>e.get().setFrame(0))):l.includes("control")?this.relatedScene.radiobuttons.forEach((e=>e.get().setFrame(0))):l.includes("velocity")?this.relatedScene.radioSpeed.forEach((e=>e.get().setFrame(0))):l.includes("mode")&&this.relatedScene.radioInvulnerability.forEach((e=>e.get().setFrame(0))),this.radiobutton.setFrame(1),l.includes("FPS")?a.isFps60()?a.setFps60(!1):a.setFps60(!0):l.includes("control")?(Object.keys(a.controlElegido).forEach((e=>{a.controlElegido[e]=!1})),a.controlElegido[this.radiobutton.getData("id").slice(0,-8)]=!0,console.log(a.controlElegido.mobile,a.controlElegido.keyboard)):l.includes("velocity")?a.setConfigVel(parseInt(l.slice(0,1))):l.includes("mode")&&(a.isInvisible()?a.setInvisible(!1):a.setInvisible(!0)),console.log(a.isFps60())}))}get(){return this.radiobutton}}class D extends s.Scene{constructor(){super("PreNivel")}init(){a.setPuntos(0),a.setGameOver(!1),a.controlElegido.mobile=!1,a.controlElegido.keyboard=!0,this.botoninicio=new m(this,{left:Math.floor(this.sys.game.config.width/2),top:Math.floor(this.sys.game.config.height/1.3),id:"boton-nueva-partida",scX:.6,scY:.5,angle:1,originX:.5,originY:.5,texto:" Start ",nextScene:"Game"}),this.botonmoresettings=new m(this,{left:Math.floor(this.sys.game.config.width/1.15),top:Math.floor(this.sys.game.config.height/1.2),id:"boton-more-settings",scX:.6,scY:.8,angle:0,originX:.5,originY:.5,texto:"  More\nSettings",nextScene:"More-Settings"}),this.radiobuttons=[],this.radiobuttons.push(new M(this,{left:Math.floor(this.sys.game.config.width/15),top:Math.floor(this.sys.game.config.height/6),addLeft:0,orX:0,orY:.5,frame:1,scale:1,txtSize:45,texto:" Keyboard cursors/space",id:"keyboard-control"})),this.radiobuttons.push(new M(this,{left:Math.floor(this.sys.game.config.width/15),top:Math.floor(this.sys.game.config.height/3.2),addLeft:0,orX:0,orY:.5,frame:0,scale:1,txtSize:50,texto:" Mobile (touch) ",id:"mobile-control"})),this.radioFps=[],this.radioFps.push(new M(this,{left:Math.floor(this.sys.game.config.width/10),top:Math.floor(this.sys.game.config.height/1.8),addLeft:52,orX:.5,orY:.5,frame:0,scale:.9,txtSize:40,texto:"30FPS",id:"30FPS"})),this.radioFps.push(new M(this,{left:Math.floor(this.sys.game.config.width/1.6),top:Math.floor(this.sys.game.config.height/1.8),addLeft:52,orX:.5,orY:.5,frame:1,scale:.9,txtSize:40,texto:"60 FPS",id:"60FPS"}))}create(){this.add.image(0,0,"fondo").setDepth(a.depth.fondo).setOrigin(0,0),this.add.image(Math.floor(this.sys.game.config.width/1.8),Math.floor(this.sys.game.config.height/1.5),"archery-img").setOrigin(.5,.5).setDepth(a.depth.fondo+20).setAlpha(.8),this.radiobuttons.forEach((e=>e.create())),this.radioFps.forEach((e=>e.create())),this.botoninicio.create()}}const k={type:Phaser.AUTO,width:1024,height:600,parent:"game-container",backgroundColor:"#871",physics:{default:"arcade",arcade:{debug:!1}},scale:{mode:Phaser.Scale.FIT,autoCenter:Phaser.Scale.CENTER_BOTH},scene:[r,v,b,D,S,x]};new Phaser.Game(k);
