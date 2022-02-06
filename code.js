var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["361e7c86-bd8d-4f14-9ef3-b645e7dc7f9e","5fcfd195-71af-4cd3-ae35-1984348aa7d0","c4bfe6d5-2e12-4d25-9ba2-1de8c5402e4a","791416b5-85d1-4ced-abdf-a605263a84c1","1094b6aa-49c1-4b69-9d9a-7818838b388e","44984378-f132-46e7-8589-27df92916bc5","0a80740f-8510-416e-b71b-1a16fab1316d","b33544b8-7712-44b9-99cc-2fa639197a65","b9f88bdf-13db-4d40-a22a-78de36874a7d","8007d410-7a1c-495c-8969-a8be9d8e3655","4b63f5b4-edb0-4f40-838a-8fcd7864b8f1","c8eb388a-95e4-400c-bfeb-85f81f8f6be9","baa89c15-e214-49c0-b5f1-b45bfcd92eeb","5f3e9a2d-b9a8-4f4a-bdb7-4b6857ed7a27","f946300b-9f2c-48f0-8a93-8b8bf5223612","3eebb4f1-19ce-487f-94f3-0fa0892602f1","7ce7281c-2267-4396-be49-4e5e4190b84a","21e96d95-e946-4d03-9588-96510504434f","ccdea9b0-1910-40d7-89f3-97bd46c9f24f"],"propsByKey":{"361e7c86-bd8d-4f14-9ef3-b645e7dc7f9e":{"name":"spacebattle_06_1","sourceUrl":null,"frameSize":{"x":346,"y":294},"frameCount":1,"looping":true,"frameDelay":12,"version":"56xVkVg5hDWQbkhHWk2yZyUfexd46NRt","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":346,"y":294},"rootRelativePath":"assets/361e7c86-bd8d-4f14-9ef3-b645e7dc7f9e.png"},"5fcfd195-71af-4cd3-ae35-1984348aa7d0":{"name":"spacebattle_06_1_copy_1","sourceUrl":null,"frameSize":{"x":346,"y":294},"frameCount":1,"looping":true,"frameDelay":12,"version":"WMYyjURrWA7xJ.HJcJrSCDyQ6z5aOHCZ","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":346,"y":294},"rootRelativePath":"assets/5fcfd195-71af-4cd3-ae35-1984348aa7d0.png"},"c4bfe6d5-2e12-4d25-9ba2-1de8c5402e4a":{"name":"rock2.jfif_1","sourceUrl":null,"frameSize":{"x":303,"y":166},"frameCount":1,"looping":true,"frameDelay":12,"version":"cUUtjy4iAnqWUFCPaI8mgTy_CWs00dbt","loadedFromSource":true,"saved":true,"sourceSize":{"x":303,"y":166},"rootRelativePath":"assets/c4bfe6d5-2e12-4d25-9ba2-1de8c5402e4a.png"},"791416b5-85d1-4ced-abdf-a605263a84c1":{"name":"comet.png_1","sourceUrl":null,"frameSize":{"x":840,"y":343},"frameCount":1,"looping":true,"frameDelay":12,"version":"ouST7nDbrVgansDQK6SFpC4UqUvawt6q","loadedFromSource":true,"saved":true,"sourceSize":{"x":840,"y":343},"rootRelativePath":"assets/791416b5-85d1-4ced-abdf-a605263a84c1.png"},"1094b6aa-49c1-4b69-9d9a-7818838b388e":{"name":"comet2.png_1","sourceUrl":null,"frameSize":{"x":292,"y":172},"frameCount":1,"looping":true,"frameDelay":12,"version":"tdFHF6R4QVEdVWo1gYoYeKsRgHDGY2hX","loadedFromSource":true,"saved":true,"sourceSize":{"x":292,"y":172},"rootRelativePath":"assets/1094b6aa-49c1-4b69-9d9a-7818838b388e.png"},"44984378-f132-46e7-8589-27df92916bc5":{"name":"gameover.jpg_1","sourceUrl":null,"frameSize":{"x":520,"y":471},"frameCount":1,"looping":true,"frameDelay":12,"version":"ItrvC5ZWWzO55lfLeQepC5qkmDU4cIaE","loadedFromSource":true,"saved":true,"sourceSize":{"x":520,"y":471},"rootRelativePath":"assets/44984378-f132-46e7-8589-27df92916bc5.png"},"0a80740f-8510-416e-b71b-1a16fab1316d":{"name":"gameplay_purplediamond_1","sourceUrl":"assets/api/v1/animation-library/gamelab/dmHXimVUN6NkkgGu6Ojoow2mldVDI2ai/category_video_games/gameplay_purplediamond.png","frameSize":{"x":400,"y":383},"frameCount":1,"looping":true,"frameDelay":2,"version":"dmHXimVUN6NkkgGu6Ojoow2mldVDI2ai","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":383},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dmHXimVUN6NkkgGu6Ojoow2mldVDI2ai/category_video_games/gameplay_purplediamond.png"},"b33544b8-7712-44b9-99cc-2fa639197a65":{"name":"gameplay_redcrystal_1","sourceUrl":"assets/api/v1/animation-library/gamelab/KcuGz0dhj9Vacw_lOQdRN7TPQqJzamn_/category_video_games/gameplay_redcrystal.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"KcuGz0dhj9Vacw_lOQdRN7TPQqJzamn_","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/KcuGz0dhj9Vacw_lOQdRN7TPQqJzamn_/category_video_games/gameplay_redcrystal.png"},"b9f88bdf-13db-4d40-a22a-78de36874a7d":{"name":"spacebattle_12_1","sourceUrl":null,"frameSize":{"x":174,"y":122},"frameCount":1,"looping":true,"frameDelay":12,"version":"uCIgf3OG.BRi7wzUwKmuTIhJrkYvQBjp","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":174,"y":122},"rootRelativePath":"assets/b9f88bdf-13db-4d40-a22a-78de36874a7d.png"},"8007d410-7a1c-495c-8969-a8be9d8e3655":{"name":"spacebattle_09_1","sourceUrl":null,"frameSize":{"x":304,"y":226},"frameCount":1,"looping":true,"frameDelay":12,"version":"I_vhH_5Nd6BUmdMCZFovnXtBeqkm9pEP","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":304,"y":226},"rootRelativePath":"assets/8007d410-7a1c-495c-8969-a8be9d8e3655.png"},"4b63f5b4-edb0-4f40-838a-8fcd7864b8f1":{"name":"spacebattle_08_1","sourceUrl":null,"frameSize":{"x":226,"y":156},"frameCount":1,"looping":true,"frameDelay":12,"version":"mXQlsSEd9hPvKchbfzRB7JAweWvyHwUD","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":226,"y":156},"rootRelativePath":"assets/4b63f5b4-edb0-4f40-838a-8fcd7864b8f1.png"},"c8eb388a-95e4-400c-bfeb-85f81f8f6be9":{"name":"spacebattle_06_2","sourceUrl":null,"frameSize":{"x":346,"y":294},"frameCount":1,"looping":true,"frameDelay":12,"version":".JsC0JeN8qi2u5TYnTv6vPN2qEUB_S7m","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":346,"y":294},"rootRelativePath":"assets/c8eb388a-95e4-400c-bfeb-85f81f8f6be9.png"},"baa89c15-e214-49c0-b5f1-b45bfcd92eeb":{"name":"spacebattle_07_1","sourceUrl":null,"frameSize":{"x":380,"y":398},"frameCount":6,"looping":true,"frameDelay":4,"version":"os67jwmYVunswZG4wbIJdxCGfUp2HxMg","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":1140,"y":796},"rootRelativePath":"assets/baa89c15-e214-49c0-b5f1-b45bfcd92eeb.png"},"5f3e9a2d-b9a8-4f4a-bdb7-4b6857ed7a27":{"name":"spacebattle_07_2","sourceUrl":null,"frameSize":{"x":380,"y":398},"frameCount":1,"looping":true,"frameDelay":12,"version":"gEmz_Hz4Vsg2syeVGYv7ynD028MxyhHF","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":380,"y":398},"rootRelativePath":"assets/5f3e9a2d-b9a8-4f4a-bdb7-4b6857ed7a27.png"},"f946300b-9f2c-48f0-8a93-8b8bf5223612":{"name":"gameplayadventure_13_1","sourceUrl":null,"frameSize":{"x":328,"y":399},"frameCount":1,"looping":true,"frameDelay":12,"version":"DXuqgghW.ZHKUzzJ0qdIzTQlVIXyjebS","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":328,"y":399},"rootRelativePath":"assets/f946300b-9f2c-48f0-8a93-8b8bf5223612.png"},"3eebb4f1-19ce-487f-94f3-0fa0892602f1":{"name":"bullet.jpg_1","sourceUrl":null,"frameSize":{"x":600,"y":619},"frameCount":1,"looping":true,"frameDelay":12,"version":"MYsS_kYBA6KR5CYU4MryzKOuBjipC9kl","loadedFromSource":true,"saved":true,"sourceSize":{"x":600,"y":619},"rootRelativePath":"assets/3eebb4f1-19ce-487f-94f3-0fa0892602f1.png"},"7ce7281c-2267-4396-be49-4e5e4190b84a":{"name":"space_1","sourceUrl":"assets/v3/animations/nPBDli-xX7XnyaFnHHLMXWwglgeFHP_rdmIdbwbXTVU/7ce7281c-2267-4396-be49-4e5e4190b84a.png","frameSize":{"x":490,"y":2048},"frameCount":1,"looping":true,"frameDelay":4,"version":"ZS8LQ9qR2ajRQT__6rJKclRGR9B5bNsj","loadedFromSource":true,"saved":true,"sourceSize":{"x":490,"y":2048},"rootRelativePath":"assets/v3/animations/nPBDli-xX7XnyaFnHHLMXWwglgeFHP_rdmIdbwbXTVU/7ce7281c-2267-4396-be49-4e5e4190b84a.png"},"21e96d95-e946-4d03-9588-96510504434f":{"name":"gameplay_greendiamond2_1","sourceUrl":"assets/api/v1/animation-library/gamelab/FJT6QpZscrzSwGwpDPnJZED8ABADci6Q/category_video_games/gameplay_greendiamond2.png","frameSize":{"x":281,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"FJT6QpZscrzSwGwpDPnJZED8ABADci6Q","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":281,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/FJT6QpZscrzSwGwpDPnJZED8ABADci6Q/category_video_games/gameplay_greendiamond2.png"},"ccdea9b0-1910-40d7-89f3-97bd46c9f24f":{"name":"retroship_13_1","sourceUrl":"assets/api/v1/animation-library/gamelab/Ne_Exd13wIXMaZMlMRodwiIjvSGER29Q/category_retro/retroship_13.png","frameSize":{"x":392,"y":392},"frameCount":1,"looping":true,"frameDelay":2,"version":"Ne_Exd13wIXMaZMlMRodwiIjvSGER29Q","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":392,"y":392},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Ne_Exd13wIXMaZMlMRodwiIjvSGER29Q/category_retro/retroship_13.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var rocks = createGroup();
var gameState = "start";
var gems = createGroup();
var selectG;
var count = 0;
var comet;
var rock;
var gem;
var score = 0;
var shots = 25;
var fires = createGroup();
var fire;
var bullets = createGroup();
var bullet;
var scene = createSprite(200,0);

scene.setAnimation("space_1");

var jet = createSprite(200,300);
jet.scale = 0.2;

var gameover = createSprite(200,100);
gameover.setAnimation("gameover.jpg_1");
gameover.scale = 0.2;
gameover.visible = false;


function draw() {
  background("black");
  textSize(20);
  fill("yellow");



  count++;
  selectG = randomNumber(1,2);
  
  if(gameState === "play")  
  {
    scene.velocityY = 5;
    createGems();
    if(scene.y >= 1024)
      scene.y = 0;
  
    if(keyDown("space")&& fires < 6 && shots>0) {
      fire = createSprite(jet.x,jet.y-20);
      fire.scale = 0.07;
      fire.velocityY = -5;
      fire.setAnimation("gameplayadventure_13_1");
      fires.add(fire);
      fire.lifetime = 50;
      shots--;
      playSound("assets/category_digital/laser_fade_2.mp3",false)
    }
    if(score%100) {
      rocks.velocityY +=5;
    }
    
    if(keyDown("left")) {
      jet.x -=4;
    }
    if(keyDown("right")) {
      jet.x +=4;
    }
    if(jet.x <= 20)  {
      jet.x = 20;
    }
    if(jet.x >= 380)  {
      jet.x = 380;
    }
  createbullet();
  bullets.collide(jet,getbullet);
  
  score = Math.round(count/10);
  spawnrocks();
  superRock();
  
  fires.collide(rocks,blast);

  
    if(rocks.collide(jet)) {
    gameState = "end";
    jet.setAnimation("spacebattle_06_1_copy_1");
    gems.setVelocityYEach(0);
  }
  jet.setCollider("rectangle",0,0,2,2,0);
    gems.collide(jet,eatGem);
  
  
}
evolve();
drawSprites();
text("amo:" + shots,60,40);
  
if(gameState === "end") {
  scene.velocityY = 0;
  gems.velocityYEach = 0;
  bullets.velocityYEach = 0;
  rocks.setVelocityYEach(0);
  rocks.setLifetimeEach(-1);
  text("CLICK TO START NEW GAME",40,350);
  gameover.visible = true;
}
  text("score:" + score, 250,50);
  
if(gameState == "start")  {
  text("help the astronuats avoid the rocks, make\n sure not to get to close or you will get\n sucked into orbit!\ncollect gems for more points\nRed = 90 points;\n Purple = 60;\nspace key to shoot\nget bullets to get more amo\n\n\n\nclick to START",10,100);
  count = 0;
  }
}

function spawnrocks() {
  if(World.frameCount%60 === 0) {
    rock = createSprite(randomNumber(5,395),-5);
    rock.setAnimation("rock2.jfif_1");
    rock.scale = 0.7;
    rocks.add(rock);
    rock.lifetime = 150;
    rock.setCollider("rectangle",0,0,100,100,0);
  }
}

function mousePressed() {
  if(gameState === "start") {
    gameState = "play";
  }
  if(gameState === "end") {
    gameState = "start";
    rocks.destroyEach();
    gameover.visible = false;
    jet.setAnimation("spacebattle_06_1");
    jet.x = 150;
    gems.destroyEach();
    shots = 25;
  }
}

function superRock()  {
  if(score >= 300 && count%100 === 0)  {
    comet = createSprite(randomNumber(10,390),-5);
    comet.setAnimation("comet2.png_1");
    comet.scale = 0.7;
    comet.velocityY = 10;
    rocks.add(comet);
    comet.lifetime = 150;
    comet.rotation = -45;
    comet.setCollider("rectangle",0,0,125,210,45);
  }
}

function eatGem(gem) {
  if(gem.scale == 0.1)
    count += World.frameRate * 20;
  if(gem.scale == 0.099)
    count += World.frameRate * 30; 
    
  gem.destroy();
}


function createGems() {
  if(frameCount%150 === 0)  {
    gem = createSprite(randomNumber(5,395),-5); 
    gem.lifetime = 150;
    gem.velocityY = 5;
    if(selectG === 1) {
      gem.setAnimation("gameplay_redcrystal_1");
      gem.scale = 0.099;
    }
    else  {
      gem.setAnimation("gameplay_purplediamond_1");
      gem.scale = 0.1;
    }
    gems.add(gem);
  }
 
}

function evolve() {
  if(score >= 0 && score < 100) {
    jet.setAnimation("spacebattle_12_1");
    rocks.setVelocityYEach(3);
    gems.setVelocityYEach(3);
    }
  else if(score >= 100 && score < 200)  {
    jet.setAnimation("spacebattle_08_1");
    rocks.setVelocityYEach(5);
    gems.setVelocityYEach(5);
  }
  else if(score >= 200 && score < 300)  {
    jet.setAnimation("spacebattle_09_1");
    rocks.setVelocityYEach(10);
    gems.setVelocityYEach(10);
  }
  else if(score >= 300 && score < 400)  {
    jet.setAnimation("spacebattle_06_2");
    rocks.setVelocityYEach(15);
    gems.setVelocityYEach(15);
  }
  else if(score >= 400 && score < 500)  {
    jet.setAnimation("spacebattle_07_2");
    rocks.setVelocityYEach(20);
    gems.setVelocityYEach(20);
  }
  else  {
    jet.setAnimation("spacebattle_07_1");
    rocks.setVelocityYEach(25);
    gems.setVelocityYEach(25);
  }
}

function blast(ball,abc) {
 
  playSound("assets/category_explosion/radioactive_zombie_explode_2.mp3", false);
  abc.destroy();
  ball.destroy();
  score+=5;
  }
  
function getbullet(bullet) {
  shots += 5;
  bullet.destroy();
}

function createbullet() {
  if(frameCount%300 === 0)  {
    bullet = createSprite(randomNumber(20,380),-50); 
    bullet.setAnimation("bullet.jpg_1") ;
    bullet.velocityY = scene.velocityY;
    bullets.add(bullet);
    bullet.lifetime = 90;
    bullet.scale = 0.1;
    //bullet.setCollider("rectangle",0,0,30,30,0)
  }
}

 
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
