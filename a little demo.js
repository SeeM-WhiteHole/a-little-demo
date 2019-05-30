var cvs = document.getElementById('tableCanvas');
var ctx = cvs.getContext('2d');
var ghost = document.getElementById('ghost');
var death = document.getElementById('death');
var boss = document.getElementById('boss');
var startRoom = document.getElementById('startRoom');
var magic = document.getElementById('magic');
var help = document.getElementById('help');
var dark = document.getElementById('dark');
var fly = document.getElementById('fly');
var book = document.getElementById('book');
var lockWallOne = document.getElementById('lockWallOne');
var clearanceCarpet = document.getElementById('clearanceCarpet');
var bookOne = document.getElementById('bookOne');
var magicOne = document.getElementById('magicOne');
var magicTwo = document.getElementById('magicTwo');
var magicThree = document.getElementById('magicThree');
var fire = document.getElementById('fire');
var light = document.getElementById('light');
var roomOneStyle = document.getElementById('roomOne');
var roomTwoStyle = document.getElementById('roomTwo');
var clues = document.getElementById('clues');
var parchment = document.getElementById('parchment');
var trapWallOne = document.getElementById('trapWallOne');
var trapWallTwo = document.getElementById('trapWallTwo');
var roomThreeGG = document.getElementById('roomThreeGG');
var tryAgain = document.getElementById('tryAgain');
var startgame = document.getElementById('startgame');
var lastgame = document.getElementById('lastgame');
var byebye = document.getElementById('byebye');
var gameRoom = null;
var gameRoom1 = null;
var gameRoom2 = null;
var gameRoom3 = null;
var timer = null;
var timerOne = null;
var timerTwo = null;
var timerThree = null;
var timerFour = null;
var roomone = 1;
var roomtwo = 1;
var gameGrade = 0;

startgame.onclick = function () {
    startgame.style.display = 'none';
    var worldofwar = new Worldofwar;
    worldofwar.startWar();
};
function Worldofwar(){
    var _this = this;
    this.top = 200;
    this.currentFrame = 0;
    this.frame = 0;
    this.textWidth = 500;
    this.createMagicThree = function () {
       ctx.clearRect(0,0,cvs.width,cvs.height);
        ctx.beginPath();
        var pat = ctx.createPattern(parchment,'no-repeat');
        ctx.fillStyle = pat;
        ctx.fillRect(0,0,cvs.width,cvs.height);
        ctx.beginPath();
       ctx.drawImage(magicThree,
           _this.currentFrame * magicThree.width/5,0,
           magicThree.width/5,magicThree.height/5,
           0,0,
           magicThree.width/5,magicThree.height/5);
        ctx.beginPath();
        ctx.drawImage(magicThree,
            _this.currentFrame * magicThree.width/5,0,
            magicThree.width/5,magicThree.height/5,
            1890 - magicThree.width/5,0,
            magicThree.width/5,magicThree.height/5);
        ctx.beginPath();
        ctx.drawImage(magicThree,
            _this.currentFrame * magicThree.width/5,0,
            magicThree.width/5,magicThree.height/5,
            0,960 - magicThree.height/5,
            magicThree.width/5,magicThree.height/5);
        ctx.beginPath();
        ctx.drawImage(magicThree,
            _this.currentFrame * magicThree.width/5,0,
            magicThree.width/5,magicThree.height/5,
            1890 - magicThree.width/5,960 - magicThree.height/5,
            magicThree.width/5,magicThree.height/5);
        ctx.beginPath();
        ctx.fillStyle='rgba(0,0,0,0.5)';
        ctx.font = "oblique small-caps bold 50px 华文行楷";
        ctx.fillText('传说在这个世界的某个角落',250,_this.top);
        ctx.beginPath();
        ctx.fillStyle='rgba(0,0,0,0.5)';
        ctx.font = "oblique small-caps bold 50px 华文行楷";
        ctx.fillText('有这么一幢房子',250,_this.top+60);
        ctx.beginPath();
        ctx.fillStyle='rgba(0,0,0,0.5)';
        ctx.font = "oblique small-caps bold 50px 华文行楷";
        ctx.fillText('它总是在世界各地移动',250,_this.top+120);
        ctx.beginPath();
        ctx.fillStyle='rgba(0,0,0,0.5)';
        ctx.font = "oblique small-caps bold 50px 华文行楷";
        ctx.fillText('从不会在同一个地方呆很久',250,_this.top+180);
        ctx.beginPath();
        ctx.fillStyle='rgba(0,0,0,0.5)';
        ctx.font = "oblique small-caps bold 50px 华文行楷";
        ctx.fillText('有人说并不是同一幢房子',250,_this.top+240);
        ctx.beginPath();
        ctx.fillStyle='rgba(0,0,0,0.5)';
        ctx.font = "oblique small-caps bold 50px 华文行楷";
        ctx.fillText('但是他们都有一个相同点',250,_this.top+300);
        ctx.beginPath();
        ctx.fillStyle='rgba(0,0,0,0.5)';
        ctx.font = "oblique small-caps bold 50px 华文行楷";
        ctx.fillText('那就是进去过的人们从来没有能回来的',250,_this.top+360);
        ctx.beginPath();
        ctx.fillStyle='rgba(0,0,0,0.5)';
        ctx.font = "oblique small-caps bold 50px 华文行楷";
        ctx.fillText('有人说这是个吃人的房子',250,_this.top+420);
        ctx.beginPath();
        ctx.fillStyle='rgba(0,0,0,0.5)';
        ctx.font = "oblique small-caps bold 50px 华文行楷";
        ctx.fillText('有人说这是埋藏着宝藏的房子',250,_this.top+480);
        ctx.beginPath();
        ctx.fillStyle='rgba(0,0,0,0.5)';
        ctx.font = "oblique small-caps bold 50px 华文行楷";
        ctx.fillText('但不论是什么',250,_this.top+540);
        ctx.beginPath();
        ctx.fillStyle='rgba(0,0,0,0.5)';
        ctx.font = "oblique small-caps bold 50px 华文行楷";
        ctx.fillText('人们给它们起了一个名字 - 无尽诡屋',250,_this.top+600);
        ctx.beginPath();
        ctx.fillStyle='rgba(0,0,0,0.7)';
        ctx.font = "oblique small-caps bold 30px 华文行楷";
        ctx.fillText('< -- 点 击 任 意 位 置 开 始 游 戏 -- >',770,870,_this.textWidth);
    };
    this.onclick = function () {
        clearTimeout(timerThree);
        gameStart(1);
        _this.startWar = null;
        cvs.onclick = null;
    };
    cvs.onclick = _this.onclick;
    this.startWar = function () {
        clearTimeout(timerThree);
        _this.frame = ++_this.frame >= 4 ? 0 :_this.frame;
        if ( _this.frame >= 2 ){
            _this.textWidth = 0;
        }else {
            _this.textWidth = 500;
        }
        _this.top-= 2;
        if ( _this.top == 0 ){
            gameStart(1);
            _this.startWar = null;
            _this.onclick = null;
        }
        _this.currentFrame = ++_this.currentFrame >=  4 ? 0 :_this.currentFrame;
        _this.createMagicThree();
        timerThree = setTimeout(_this.startWar,12)
    }
}
function gameStart(roomNumber) {
    var gaming = new Gamechoose();
    gaming.choose(roomNumber);
}
function Gamechoose() {
    var _this = this;
    this.choose = function (roomNumber) {
        switch (roomNumber){
            case 1:
                gameRoom = new NewGame();
                gameRoom.gameLogic();
                break;
            case 2:
                gameRoom1 = new Firstroom();
                gameRoom1.gameLogicRoomOne();
                break;
            case 3:
                gameRoom2 = new Jumproom();
                gameRoom2.gameLogicRoomTow();
                break
            case 4:
                gameRoom3 = new Ending();
                gameRoom3.gameLogicEnding();
                break
        }
    };
}
//初之间
function NewGame() {
    var _this = this;
    this.left = 920;
    this.top = cvs.height/2 + 150;
    this.currentFrame = 0;
    this.magicFrame = 0;
    this.direction = 0;
    this.speed = 25;
    this.lightFrame = 0;
    this.lightDirection = 1;
    this.createWall = function(startX,startY,targetX,targetY){
        ctx.beginPath();
        ctx.strokeStyle = 'transparent';
        ctx.rect(startX,startY,targetX,targetY);
        ctx.stroke();
        if (ctx.isPointInPath(_this.left + (ghost.width/1.5)/2, //上
                _this.top)){
            _this.top = startY + targetY + 1;
        }else if (ctx.isPointInPath(_this.left + ghost.width/1.5, //左
                _this.top + (ghost.height/2)/2)){
            _this.left = startX + 1 - ghost.width/1.5;
        }else if (ctx.isPointInPath(_this.left + (ghost.width/1.5)/2, //下
                _this.top + ghost.height/2)){
            _this.top = startY + 1 - ghost.height/2;
        }else if (ctx.isPointInPath(_this.left, //右
                _this.top + (ghost.height/2)/2)){
            _this.left = startX + targetX + 1;
        }
    };
    this.drawInitialMap = function () {
        ctx.clearRect(0,0,cvs.width,cvs.height);
        ctx.beginPath();
        var pat = ctx.createPattern(startRoom,'no-repeat');
        ctx.fillStyle = pat;
        ctx.fillRect(0,0,cvs.width,cvs.height);
        _this.createWall(0,0,70,cvs.height - 70);
        _this.createWall(70,0,cvs.width - 70,70);
        _this.createWall(cvs.width - 70,70,70,cvs.height - 70);
        _this.createWall(0,cvs.height - 70,cvs.width - 70,70);
        _this.createWall(550,70,70,300);
        _this.createWall(70,300,405,70);
        _this.createWall(70,590,405,70);
        _this.createWall(550,590,70,300);
        _this.createWall(1300,70,70,110);
        _this.createWall(1300,270,70,cvs.height - 340);

        _this.createWall(690,140,200,70);
        _this.createWall(690,210,70,140);
        _this.createWall(690,cvs.height/2 + 150,200,70);
        _this.createWall(690,cvs.height/2 + 10,70,140);

        _this.createWall(1010,140,200,70);
        _this.createWall(1140,210,70,140);
        _this.createWall(1010,cvs.height/2 + 150,200,70);
        _this.createWall(1140,cvs.height/2 + 10,70,140);
        _this.createWall(850,320,200,200);

        ctx.beginPath();
        ctx.strokeStyle = 'transparent';
        ctx.rect(195,70,230,230);
        ctx.stroke();
        ctx.beginPath();
        ctx.drawImage(magic,
            _this.currentFrame * (magic.width/5),1 * (magic.height/4),
            magic.width/5,magic.height/4,
            190,55,
            magic.width/4,magic.height/3);
        //传送门 - 迷之间 - 传送点
        if ( roomone == 1 ){
            ctx.beginPath();
            ctx.strokeStyle = 'transparent';
            ctx.rect(295,170,30,30);
            ctx.stroke();
            if (ctx.isPointInPath(_this.left + (ghost.width/1.5)/2, _this.top + (ghost.height/2)/2)){
                gameStart(2);
                _this.gameLogic = null;
            }
        }
        //传送门 - 逃之间 - 传送门
        ctx.beginPath();
        ctx.strokeStyle = 'transparent';
        ctx.rect(195,660,230,230);
        ctx.stroke();
        ctx.beginPath();
        ctx.drawImage(magic,
            _this.currentFrame * (magic.width/5),1 * (magic.height/4),
            magic.width/5,magic.height/4,
            190,650,
            magic.width/4,magic.height/3);
        //传送门 - 逃之间 - 传送点
        if ( roomtwo == 1 ){
            ctx.beginPath();
            ctx.strokeStyle = 'transparent';
            ctx.rect(295,765,30,30);
            ctx.stroke();
            if (ctx.isPointInPath(_this.left + (ghost.width/1.5)/2, _this.top + (ghost.height/2)/2)){
                gameStart(3);
                _this.gameLogic = null;
            }
        }
        //通关宝箱
        if ( gameGrade >= 2 ){
            ctx.beginPath();
            ctx.strokeStyle = 'transparent';
            ctx.rect(1370,70,cvs.width - 1440,cvs.height - 140);
            ctx.stroke();
            ctx.beginPath();
            ctx.drawImage(clearanceCarpet,1370,70);
            ctx.beginPath();
            ctx.drawImage(light,
                _this.lightFrame * light.width/5,_this.lightDirection * light.height/6,
                light.width/5,light.height/6,
                1500,720,
                light.width/5,light.height/6
                );
            //通关
            ctx.beginPath();
            ctx.strokeStyle = 'transparent';
            ctx.rect(1580,800,35,35);
            ctx.stroke();
            if ( ctx.isPointInPath(_this.left+(ghost.width/1.5)/2,_this.top+(ghost.height/2)/2)){
                gameStart(4);
                _this.gameLogic = null;
            }
        }else {
            //关卡传送房间 - 铁栅栏
            _this.createWall(1370,500,cvs.width - 1440,70);
            ctx.drawImage(book,1370,500);
            ctx.drawImage(book,1370,600);
            ctx.drawImage(book,1370,700);
            ctx.drawImage(book,1370,800);
        }
        ctx.beginPath();
        ctx.drawImage(ghost,
            _this.currentFrame * (ghost.width/3),_this.direction * (ghost.height/4),
            ghost.width/3,ghost.height/4,
            _this.left,_this.top,
            ghost.width/1.5,ghost.height/2);
        //人物盒子
        ctx.beginPath();
        ctx.strokeStyle = 'transparent';
        ctx.strokeRect(_this.left,_this.top,ghost.width/1.5,ghost.height/2);
        };
    this.onkeydown = function (ev) {
        switch (ev.keyCode){
            case 37:
                _this.direction = 1;
                break;
            case 38:
                _this.direction = 3;
                break;
            case 39:
                _this.direction = 2;
                break;
            case 40:
                _this.direction = 0;
                break;
        }
        switch (_this.direction){
            case 0:
                _this.top += _this.speed;
                break;
            case 1:
                _this.left -= _this.speed;
                break;
            case 2:
                _this.left += _this.speed;
                break;
            case 3:
                _this.top -= _this.speed;
                break;
        }
    };
    document.onkeydown = _this.onkeydown;
    this.gameLogic = function () {
        clearTimeout(timer);
        _this.currentFrame = ++_this.currentFrame >=  3 ? 0 :_this.currentFrame;
        _this.magicFrame = ++ _this.magicFrame >= 5?0:_this.magicFrame;
        _this.lightFrame = ++ _this.lightFrame >= 5?0:_this.magicFrame;
        if ( _this.lightFrame == 5 ){
            _this.lightDirection = ++_this.lightDirection >= 4?0:_this.lightDirection;
        }
        _this.drawInitialMap();
        timer = setTimeout(_this.gameLogic,12);
    }
}
//谜之间
function Firstroom() {
    var _this = this;
    this.left = 70;
    this.top = cvs.height/2 - 70;
    this.currentFrame = 0;
    this.magicOneFrame = 0;
    this.direction = 2;
    this.speed = 25;
    this.roomOneIntegral = 0;
    this.bodyWidth = ghost.width/1.5;
    this.bodyHeigth = ghost.height/2;
    this.createWall = function(startX,startY,targetX,targetY){
        ctx.beginPath();
        ctx.strokeStyle = 'transparent';
        ctx.rect(startX,startY,targetX,targetY);
        ctx.stroke();
        if (ctx.isPointInPath(_this.left + (ghost.width/1.5)/2, //上
                _this.top)){
            _this.top = startY + targetY + 1;
        }else if (ctx.isPointInPath(_this.left + ghost.width/1.5, //左
                _this.top + (ghost.height/2)/2)){
            _this.left = startX + 1 - ghost.width/1.5;
        }else if (ctx.isPointInPath(_this.left + (ghost.width/1.5)/2, //下
                _this.top + ghost.height/2)){
            _this.top = startY + 1 - ghost.height/2;
        }else if (ctx.isPointInPath(_this.left, //右
                _this.top + (ghost.height/2)/2)){
            _this.left = startX + targetX + 1;
        }
    };
    this.createMagicOne = function (magicX,magicY) {
        ctx.beginPath();
        ctx.drawImage(magicOne,
            _this.magicOneFrame * (magicOne.width/5),1 * (magicOne.height/4),
            magicOne.width/5,magicOne.height/4,
            magicX,magicY,
            magicOne.width/10,magicOne.height/8);
    };
    this.createRoom = function () {
        ctx.clearRect(0,0,cvs.width,cvs.height);
        ctx.beginPath();
        var pat = ctx.createPattern(roomOneStyle,'no-repeat');
        ctx.fillStyle = pat;
        ctx.fillRect(0,0,cvs.width,cvs.height);

        _this.createWall(0,0,70,cvs.height - 70);
        _this.createWall(70,0,cvs.width - 70,70);
        _this.createWall(cvs.width - 70,70,70,cvs.height - 70);
        _this.createWall(0,cvs.height - 70,cvs.width - 70,70);
        _this.createWall(140,70,70,cvs.height/2 - 140);
        _this.createWall(140,cvs.height/2,70,cvs.height/2 - 70);

        //线索地板
        ctx.beginPath();
        ctx.drawImage(bookOne,280,cvs.height/2 - 70);
        ctx.beginPath();
        ctx.strokeStyle = 'transparent';
        ctx.rect(280,cvs.height/2 - 70,70,70);
        ctx.stroke();
        if (ctx.isPointInPath(_this.left + (ghost.width/1.5)/2, _this.top + (ghost.height/2)/2)){
            clues.style.display = 'block';
        }else {
            clues.style.display = 'none';
        }
        //button - red - 苹果
        ctx.beginPath();
        ctx.fillStyle = 'red';//'transparent';
        ctx.rect(210,70,70,70);
        ctx.fill();
        if (ctx.isPointInPath(_this.left + (ghost.width/1.5)/2, _this.top + (ghost.height/2)/2)){
            if ( _this.roomOneIntegral == 1 ){
                _this.roomOneIntegral++;
                _this.roomIntegral = 1;
            }
        }
        //button - yellow - 香蕉
        ctx.beginPath();
        ctx.fillStyle = 'yellow';//'transparent';
        ctx.rect(350,cvs.height - 140,70,70);
        ctx.fill();
        if (ctx.isPointInPath(_this.left + (ghost.width/1.5)/2, _this.top + (ghost.height/2)/2)){
                _this.roomOneIntegral = 0;
        }
        //button - green - 西瓜
        ctx.beginPath();
        ctx.fillStyle = 'green';//'transparent';
        ctx.rect(350,70,70,70);
        ctx.fill();
        if (ctx.isPointInPath(_this.left + (ghost.width/1.5)/2, _this.top + (ghost.height/2)/2)){
            _this.roomOneIntegral = 0;
        }
        //button - bluw - 蓝莓
        ctx.beginPath();
        ctx.fillStyle = 'blue';//'transparent';
        ctx.rect(210,cvs.height - 140,70,70);
        ctx.fill();
        if (ctx.isPointInPath(_this.left + (ghost.width/1.5)/2, _this.top + (ghost.height/2)/2)){
            if ( _this.roomOneIntegral == 0 ){
                _this.roomOneIntegral = 1;
            }
        }
        _this.createWall(420,70,70,cvs.height/2 - 140);
        _this.createWall(420,cvs.height/2,70,cvs.height/2 - 70);
        //ronn 1 - 2 - 栅栏
        if ( _this.roomOneIntegral < 2 ){
            ctx.drawImage(lockWallOne,420,cvs.height/2 - 70);
            _this.createWall(420,cvs.height/2 - 70,70,70);
            ctx.beginPath();
        }
        ctx.beginPath();
        ctx.strokeStyle = 'transparent';
        ctx.rect(490,140,70,cvs.height - 280);
        ctx.stroke();
        if (ctx.isPointInPath(_this.left + (ghost.width/1.5)/2, _this.top + (ghost.height/2)/2)){
           _this.createWall(560,70,70,cvs.height - 140);
            ctx.beginPath();
            ctx.drawImage(trapWallOne,560,70);
         }
        ctx.beginPath();
        ctx.strokeStyle = 'transparent';
        ctx.rect(560,70,70,cvs.height - 140);
        ctx.stroke();
        if (ctx.isPointInPath(_this.left + (ghost.width/1.5)/2, _this.top + (ghost.height/2)/2)){
            _this.createWall(630,70,70,280);
            _this.createWall(630,420,70,cvs.height - 490);
            ctx.beginPath();
            ctx.drawImage(trapWallTwo,630,70);
        }
        _this.createMagicOne(898,195);
        ctx.beginPath();
        ctx.strokeStyle = 'transparent';
        ctx.rect(910,210,70,70);
        ctx.stroke();
        if (ctx.isPointInPath(_this.left + (ghost.width/1.5)/2, _this.top + (ghost.height/2)/2)){
            _this.createWall(910,140,70,70);
            _this.createWall(910,280,70,70);
        }
        _this.createMagicOne(898,475);
        ctx.beginPath();
        ctx.strokeStyle = 'transparent';
        ctx.rect(910,490,70,70);
        ctx.stroke();
        if (ctx.isPointInPath(_this.left + (ghost.width/1.5)/2, _this.top + (ghost.height/2)/2)){
            _this.left = 70;
            _this.top = cvs.height/2 - 70;
        }
        _this.createMagicOne(898,755);
        ctx.beginPath();
        ctx.strokeStyle = 'transparent';
        ctx.rect(910,770,70,70);
        ctx.stroke();
        if (ctx.isPointInPath(_this.left + (ghost.width/1.5)/2, _this.top + (ghost.height/2)/2)){
            _this.left = 1120;
            _this.top = 210;
        }
        _this.createWall(770,70,140,140);
        _this.createWall(770,280,140,210);
        _this.createWall(770,560,140,210);
        _this.createWall(770,840,140,50);
        _this.createWall(980,70,70,cvs.height - 140);
        _this.createMagicOne(1038,55);
        ctx.beginPath();
        ctx.strokeStyle = 'transparent';
        ctx.rect(1050,70,70,70);
        ctx.stroke();
        if (ctx.isPointInPath(_this.left + (ghost.width/1.5)/2, _this.top + (ghost.height/2)/2)){
            _this.left = 70;
            _this.top = cvs.height/2 - 70;
        }
        _this.createMagicOne(1038,cvs.height/2-120);
        ctx.beginPath();
        ctx.strokeStyle = 'transparent';
        ctx.rect(1050,cvs.height/2-105,70,70);
        ctx.stroke();
        if (ctx.isPointInPath(_this.left + (ghost.width/1.5)/2, _this.top + (ghost.height/2)/2)){
            _this.left = 70;
            _this.top = cvs.height/2 - 70;
        }
        _this.createMagicOne(1180,55);
        ctx.beginPath();
        ctx.strokeStyle = 'transparent';
        ctx.rect(1190,70,70,70);
        ctx.stroke();
        if (ctx.isPointInPath(_this.left + (ghost.width/1.5)/2, _this.top + (ghost.height/2)/2)){
            _this.left = 1120;
            _this.top = cvs.height/2 + 210;
        }
        _this.createMagicOne(1180,cvs.height/2-120);
        ctx.beginPath();
        ctx.strokeStyle = 'transparent';
        ctx.rect(1190,cvs.height/2-105,70,70);
        ctx.stroke();
        if (ctx.isPointInPath(_this.left + (ghost.width/1.5)/2, _this.top + (ghost.height/2)/2)){
            _this.left = 1120;
            _this.top = cvs.height/2 + 210;
        }
        _this.createWall(1260,70,70,cvs.height - 140);
        _this.createMagicOne(1040,cvs.height/2+20);
        ctx.beginPath();
        ctx.strokeStyle = 'transparent';
        ctx.rect(1050,cvs.height/2+35,70,70);
        ctx.stroke();
        if (ctx.isPointInPath(_this.left + (ghost.width/1.5)/2, _this.top + (ghost.height/2)/2)){
            _this.left = 1120;
            _this.top = 210;
        }
        _this.createMagicOne(1180,cvs.height/2+20);
        ctx.beginPath();
        ctx.strokeStyle = 'transparent';
        ctx.rect(1190,cvs.height/2+35,70,70);
        ctx.stroke();
        if (ctx.isPointInPath(_this.left + (ghost.width/1.5)/2, _this.top + (ghost.height/2)/2)){
            _this.left = 1400;
            _this.top = 210;
        }
        _this.createMagicOne(1040,cvs.height-155);
        ctx.beginPath();
        ctx.strokeStyle = 'transparent';
        ctx.rect(1050,cvs.height - 140,70,70);
        ctx.stroke();
        if (ctx.isPointInPath(_this.left + (ghost.width/1.5)/2, _this.top + (ghost.height/2)/2)){
            _this.left = 1400;
            _this.top = 210;
        }
        _this.createMagicOne(1180,cvs.height-155);
        ctx.beginPath();
        ctx.strokeStyle = 'transparent';
        ctx.rect(1190,cvs.height - 140,70,70);
        ctx.stroke();
        if (ctx.isPointInPath(_this.left + (ghost.width/1.5)/2, _this.top + (ghost.height/2)/2)){
            _this.left = 1400;
            _this.top = 210;
        }
        _this.createWall(1540,70,70,cvs.height - 140);
        _this.createMagicOne(1320,55);
        ctx.beginPath();
        ctx.strokeStyle = 'transparent';
        ctx.rect(1330,70,70,70);
        ctx.stroke();
        if (ctx.isPointInPath(_this.left + (ghost.width/1.5)/2, _this.top + (ghost.height/2)/2)){
            _this.left = 1400;
            _this.top = cvs.height/2 + 210;
        }
        _this.createMagicOne(1320,cvs.height/2-120);
        ctx.beginPath();
        ctx.strokeStyle = 'transparent';
        ctx.rect(1330,cvs.height/2-105,70,70);
        ctx.stroke();
        if (ctx.isPointInPath(_this.left + (ghost.width/1.5)/2, _this.top + (ghost.height/2)/2)){
            _this.left = 1120;
            _this.top = cvs.height/2 + 210;
        }
        _this.createMagicOne(1460,55);
        ctx.beginPath();
        ctx.strokeStyle = 'transparent';
        ctx.rect(1470,70,70,70);
        ctx.stroke();
        if (ctx.isPointInPath(_this.left + (ghost.width/1.5)/2, _this.top + (ghost.height/2)/2)){
            _this.left = 1400;
            _this.top = cvs.height/2 + 210;
        }
        _this.createMagicOne(1460,cvs.height/2-120);
        ctx.beginPath();
        ctx.strokeStyle = 'transparent';
        ctx.rect(1470,cvs.height/2-105,70,70);
        ctx.stroke();
        if (ctx.isPointInPath(_this.left + (ghost.width/1.5)/2, _this.top + (ghost.height/2)/2)){
            _this.left = 1400;
            _this.top = cvs.height/2 + 210;
        }
        _this.createWall(1050,cvs.height/2 - 35,490,70);
        _this.createMagicOne(1320,cvs.height/2+20);
        ctx.beginPath();
        ctx.strokeStyle = 'transparent';
        ctx.rect(1330,cvs.height/2+35,70,70);
        ctx.stroke();
        if (ctx.isPointInPath(_this.left + (ghost.width/1.5)/2, _this.top + (ghost.height/2)/2)){
            _this.left = 1400;
            _this.top = 210;
        }
        _this.createMagicOne(1320,cvs.height - 155);
        ctx.beginPath();
        ctx.strokeStyle = 'transparent';
        ctx.rect(1330,cvs.height - 140,70,70);
        ctx.stroke();
        if (ctx.isPointInPath(_this.left + (ghost.width/1.5)/2, _this.top + (ghost.height/2)/2)){
            _this.left = 1610;
            _this.top = cvs.height/2 - 35;
            _this.roomIntegral = 2;
        }
        _this.createMagicOne(1460,cvs.height/2+20);
        ctx.beginPath();
        ctx.strokeStyle = 'transparent';
        ctx.rect(1470,cvs.height/2+35,70,70);
        ctx.stroke();
        if (ctx.isPointInPath(_this.left + (ghost.width/1.5)/2, _this.top + (ghost.height/2)/2)){
            _this.left = 1610;
            _this.top = cvs.height/2 - 35;
            _this.roomIntegral = 2;
        }
        _this.createMagicOne(1460,cvs.height - 155);
        ctx.beginPath();
        ctx.strokeStyle = 'transparent';
        ctx.rect(1470,cvs.height - 140,70,70);
        ctx.stroke();
        if (ctx.isPointInPath(_this.left + (ghost.width/1.5)/2, _this.top + (ghost.height/2)/2)){
            _this.left = 1610;
            _this.top = cvs.height/2 - 35;
            _this.roomIntegral = 2;
        }
        //缩小地毯
        ctx.beginPath();
        ctx.strokeStyle = 'transparent';
        ctx.rect(1610,70,70,80);
        ctx.stroke();
        if (ctx.isPointInPath(_this.left + (ghost.width/1.5)/2, _this.top + (ghost.height/2)/2)){
            _this.bodyWidth = 35;
            _this.bodyHeigth = 35;
        }
        //放大地毯
        ctx.beginPath();
        ctx.strokeStyle = 'transparent';
        ctx.rect(1750,70,70,80);
        ctx.stroke();
        if (ctx.isPointInPath(_this.left + (ghost.width/1.5)/2, _this.top + (ghost.height/2)/2)){
            _this.bodyWidth = ghost.width/1.5;
            _this.bodyHeigth = ghost.height/2;
        }
        _this.createWall(1680,70,70,20);
        _this.createWall(1680,150,70,cvs.height/2 - 185);
        _this.createWall(1680,cvs.height/2 + 35,70,cvs.height/2 - 105);
        _this.createWall(1680,cvs.height/2 - 35,70,70);
        //人物模型
        ctx.beginPath();
        ctx.drawImage(ghost,
            _this.currentFrame * (ghost.width/3),_this.direction * (ghost.height/4),
            ghost.width/3,ghost.height/4,
            _this.left,_this.top,
            _this.bodyWidth,_this.bodyHeigth);
        //人物盒子
        ctx.beginPath();
        ctx.strokeStyle = 'transparent';
        ctx.strokeRect(_this.left,_this.top,_this.bodyWidth,_this.bodyHeigth);
        //通关回传点
        _this.createMagicOne(1740,cvs.height - 155);
        ctx.beginPath();
        ctx.strokeStyle = 'transparent';
        ctx.rect(1750,cvs.height - 140,70,70);
        ctx.stroke();
        if (ctx.isPointInPath(_this.left + (ghost.width/1.5)/2, _this.top + (ghost.height/2)/2)){
            roomone = 0;
            gameStart(1);
            gameGrade++;
            _this.gameLogicRoomOne = null;
        }
    };
    this.onkeydown = function (ev) {
        switch (ev.keyCode){
            case 37:
                _this.direction = 1;
                break;
            case 38:
                _this.direction = 3;
                break;
            case 39:
                _this.direction = 2;
                break;
            case 40:
                _this.direction = 0;
                break;
        }
        switch (_this.direction){
            case 0:
                _this.top += _this.speed;
                break;
            case 1:
                _this.left -= _this.speed;
                break;
            case 2:
                _this.left += _this.speed;
                break;
            case 3:
                _this.top -= _this.speed;
                break;
        }
    };
    document.onkeydown = _this.onkeydown;
    this.gameLogicRoomOne = function () {
        clearTimeout(timerOne);
        _this.currentFrame = ++_this.currentFrame >=  3 ? 0 :_this.currentFrame;
        _this.magicOneFrame = ++_this.magicOneFrame >= 4 ? 0 :_this.magicOneFrame;
        _this.createRoom();
        timerOne = setTimeout(_this.gameLogicRoomOne,12);
    };
}
//逃亡之间
function Jumproom() {
    var _this = this;
    this.heart = 30;
    this.left = 70;
    this.top = cvs.height - 140;
    this.currentFrame = 0;
    this.direction = 2;
    this.monsterDirection = 1;
    this.speed = 25;
    this.monsterLeft = cvs.width-210;
    this.monsterTop = cvs.height - 140;
    this.bossLeft = cvs.width/2 - (boss.width/0.75)/2;
    this.bossTop = 0;
    this.lock = 1;
    this.jump = 0;
    this.goDown = 0;
    this.end = 0;
    this.endOne = 0;
    var monsterSpeed = 15;
    this.createWall = function(startX,startY,targetX,targetY){
        ctx.beginPath();
        ctx.strokeStyle = 'transparent';
        ctx.rect(startX,startY,targetX,targetY);
        ctx.stroke();
        if (ctx.isPointInPath(_this.left + (ghost.width/1.5)/2, //上
                _this.top)){
            _this.top = startY + targetY + 1;
        }else if (ctx.isPointInPath(_this.left + ghost.width/1.5, //左
                _this.top + (ghost.height/2)/2)){
            _this.left = startX + 1 - ghost.width/1.5;
        }else if (ctx.isPointInPath(_this.left + (ghost.width/1.5)/2, //下
                _this.top + ghost.height/2)){
            _this.top = startY + 1 - ghost.height/2;
        }else if (ctx.isPointInPath(_this.left, //右
                _this.top + (ghost.height/2)/2)){
            _this.left = startX + targetX + 1;
        }
    };
    this.createJumpRoom = function () {
        ctx.clearRect(0,0,cvs.width,cvs.height);
        ctx.beginPath();
        var pat = ctx.createPattern(roomTwoStyle,'no-repeat');
        ctx.fillStyle = pat;
        ctx.fillRect(0,0,cvs.width,cvs.height);

        _this.createWall(0,0,70,cvs.height - 75);
        _this.createWall(cvs.width - 70,0,70,cvs.height - 75);
        _this.createWall(0,cvs.height - 75,cvs.width,75);

        //电梯方块一 - 单向向上
        ctx.beginPath();
        ctx.drawImage(fly,
            _this.currentFrame * fly.width/3,3 * fly.height/4,
            fly.width/3,fly.height/4,
            210,cvs.height - 160,
            fly.width/1.5,fly.height/2);
        ctx.beginPath();
        ctx.strokeStyle = 'transparent';
        ctx.rect(210,cvs.height-70,70,- 210);
        ctx.stroke();
        if (ctx.isPointInPath(_this.left + (ghost.width/1.5)/2, //下
                _this.top + ghost.height/2)){
            _this.top-= 15;
            _this.left = 210;
        }

        //电梯方块一 - 单向向下
        ctx.beginPath();
        ctx.drawImage(fly,
            _this.currentFrame * fly.width/3,3 * fly.height/4,
            fly.width/3,fly.height/4,
            1105,cvs.height-370,
            fly.width/1.5,fly.height/2);
        ctx.beginPath();
        ctx.strokeStyle = 'transparent';
        ctx.rect(1100,cvs.height-80,70,-210);
        if (ctx.isPointInPath(_this.left + (ghost.width/1.5)/2, //下
                _this.top + ghost.height/2)){
            _this.top += 15;
            _this.left = 1100;
        }
        ctx.stroke();

        ctx.drawImage(fire,
            _this.currentFrame * (fire.width/3),fire.height/4,
            fire.width/3,fire.height/4,
            460,cvs.height - 195,
            fire.width/1.5,fire.height/2);
        ctx.beginPath();
        ctx.strokeStyle = 'transparent';
        ctx.rect(460,cvs.height - 80,70,-90);
        ctx.stroke();
        if ( ctx.isPointInPath(_this.left,_this.top)){
            _this.heart--;
        }else if ( ctx.isPointInPath(_this.left + ghost.width/1.5,_this.top)){
            _this.heart--;
        }
        ctx.beginPath();
        ctx.drawImage(fire,
            _this.currentFrame * (fire.width/3),fire.height/4,
            fire.width/3,fire.height/4,
            860,cvs.height - 195,
            fire.width/1.5,fire.height/2);
        ctx.beginPath();
        ctx.strokeStyle = 'transparent';
        ctx.rect(860,cvs.height - 80,70,-90);
        ctx.stroke();
        if ( ctx.isPointInPath(_this.left,_this.top)){
            _this.heart--;
        }else if ( ctx.isPointInPath(_this.left + ghost.width/1.5,_this.top)){
            _this.heart--;
        }
        ctx.beginPath();
        ctx.drawImage(fire,
            _this.currentFrame * (fire.width/3),fire.height/4,
            fire.width/3,fire.height/4,
            1400,cvs.height - 195,
            fire.width/1.5,fire.height/2);
        ctx.drawImage(fire,
            _this.currentFrame * (fire.width/3),fire.height/4,
            fire.width/3,fire.height/4,
            1460,cvs.height - 195,
            fire.width/1.5,fire.height/2);
        ctx.drawImage(fire,
            _this.currentFrame * (fire.width/3),fire.height/4,
            fire.width/3,fire.height/4,
            1520,cvs.height - 195,
            fire.width/1.5,fire.height/2);
        ctx.beginPath();
        ctx.strokeStyle = 'transparent';
        ctx.rect(1405,cvs.height - 70,180,-90);
        ctx.stroke();
        if ( ctx.isPointInPath(_this.left,_this.top)){
            _this.heart--;
        }else if ( ctx.isPointInPath(_this.left + ghost.width/1.5,_this.top)){
            _this.heart--;
        }
        //治疗祭坛
        ctx.beginPath();
        ctx.drawImage(help,
            _this.currentFrame * help.width/3,3 * help.height/4,
            help.width/3,help.height/4,
            cvs.width-70-ghost.width/1.5,cvs.height-145,
            help.width/1.5,help.height/2);
        ctx.beginPath();
        ctx.strokeStyle = 'transparent';
        ctx.rect(cvs.width - 70 - ghost.width/1.5,cvs.height - 70,ghost.width/1.5,-70);
        ctx.stroke();
        if ( ctx.isPointInPath(_this.left + ghost.width/1.5,_this.top + (ghost.height/2)/2)){
            _this.heart++;
        }

        ctx.beginPath();
        ctx.strokeStyle = 'transparent';
        ctx.rect(70,cvs.height - 210,cvs.width - 140,-75);
        ctx.stroke();
        ctx.beginPath();
        ctx.strokeStyle = 'transparent';
        ctx.rect(70,boss.height/1,cvs.width - 140,70);
        ctx.stroke();
        ctx.beginPath();
        ctx.strokeStyle = 'transparent';
        ctx.rect(70,boss.height/1 + 210,cvs.width/2 - boss.width/0.75,70);
        ctx.stroke();
        ctx.beginPath();
        ctx.strokeStyle = 'transparent';
        ctx.rect(1170,boss.height/1 + 210,cvs.width/2 - boss.width/0.75 - 40,70);
        ctx.stroke();
        ctx.beginPath();
        ctx.drawImage(magicTwo,
            _this.currentFrame * (magicTwo.width/5),2 * (magicTwo.height/4),
            magicTwo.width/5,magicTwo.height/4,
            70,cvs.height - 335,
            magicTwo.width/10,magicTwo.height/8);
        ctx.beginPath();
        ctx.strokeStyle = 'transparent';
        ctx.rect(70,cvs.height - 290,100,10);
        ctx.stroke();
        if ( ctx.isPointInPath(_this.left + ghost.width/1.5,_this.top + ghost.height/2)){
            _this.left = 140;
            _this.top = boss.height/1 + 145;
        }
        //lock
        ctx.beginPath();
        ctx.drawImage(magicTwo,
            _this.currentFrame * (magicTwo.width/5),0,
            magicTwo.width/5,magicTwo.height/4,
            270,boss.height/1 + 160,
            magicTwo.width/10,magicTwo.height/8);
        ctx.beginPath();
        ctx.strokeStyle = 'transparent';
        ctx.rect(270,boss.height/1 + 200,100,10);
        ctx.stroke();
        if ( ctx.isPointInPath(_this.left,_this.top + ghost.height/2)){
            _this.lock = 0;
        }
        if ( _this.lock == 1 ){
            ctx.beginPath();
            ctx.drawImage(fire,
                _this.currentFrame * (fire.width/3),0,
                fire.width/3,fire.height/4,
                cvs.width/2 - boss.width/0.75 + 70,boss.height/1 + 300,
                fire.width/1.5,fire.height/2);
            _this.createWall(cvs.width/2 - boss.width/0.75 + 70,boss.height/1 + 280,70,140)
        }
        //电梯方块二 - 单向向下
        ctx.beginPath();
        ctx.drawImage(fly,
            _this.currentFrame * fly.width/3,3 * fly.height/4,
            fly.width/3,fly.height/4,
            655,boss.height/1 + 130,
            fly.width/1.5,fly.height/2);
        ctx.beginPath();
        ctx.strokeStyle = 'transparent';
        ctx.rect(650,boss.height/1 + 200,70,210);
        ctx.stroke();
        if (ctx.isPointInPath(_this.left + (ghost.width/1.5)/2, //下
                _this.top + ghost.height/2)){
            _this.top += 15;
            _this.left = 650;
        }
        ctx.beginPath();
        ctx.drawImage(magicTwo,
            _this.currentFrame * (magicTwo.width/5),2 * (magicTwo.height/4),
            magicTwo.width/5,magicTwo.height/4,
            635,cvs.height - 130,
            magicTwo.width/10,magicTwo.height/8);
        ctx.beginPath();
        ctx.strokeStyle = 'transparent';
        ctx.rect(650,cvs.height - 70,70,-50);
        ctx.stroke();
        if (ctx.isPointInPath(_this.left + ghost.width/3, //下
                _this.top + ghost.height/4)){
            _this.jump = 1;
        }
        if ( _this.jump == 1 ){
            ctx.beginPath();
            ctx.drawImage(magicTwo,
                _this.currentFrame * (magicTwo.width/5),2 * (magicTwo.height/4),
                magicTwo.width/5,magicTwo.height/4,
                935,cvs.height - 335,
                magicTwo.width/10,magicTwo.height/8);
            ctx.beginPath();
            ctx.strokeStyle = 'transparent';
            ctx.rect(950,cvs.height - 280,70,-10);
            ctx.stroke();
            if (ctx.isPointInPath(_this.left + (ghost.width/1.5)/2, _this.top + ghost.height/2)){
                _this.left = 1340;
                _this.top = boss.height/1 + 145;
            }
        }
        //机关二
        ctx.beginPath();
        ctx.drawImage(magicTwo,
            _this.currentFrame * (magicTwo.width/5),0,
            magicTwo.width/5,magicTwo.height/4,
            1625,cvs.height - 545,
            magicTwo.width/10,magicTwo.height/8);
        ctx.beginPath();
        ctx.strokeStyle = 'transparent';
        ctx.rect(1640,cvs.height - 490,70,-10);
        ctx.stroke();
        if (ctx.isPointInPath(_this.left + (ghost.width/1.5)/2, _this.top + ghost.height/2)){
            _this.goDown = 1;
        }
        if ( _this.goDown == 1 ){
            ctx.beginPath();
            ctx.drawImage(fly,
                _this.currentFrame * fly.width/3,3 * fly.height/4,
                fly.width/3,fly.height/4,
                1240,cvs.height - 570,
                fly.width/1.5,fly.height/2);
            ctx.beginPath();
            ctx.strokeStyle = 'transparent';
            ctx.rect(1240,cvs.height - 500,70,210);
            ctx.stroke();
            if (ctx.isPointInPath(_this.left + (ghost.width/1.5)/2, _this.top + ghost.height/2)){
                _this.left = 1240;
                _this.top += 15;
            }
        }
        //end - 献祭祭坛
        ctx.beginPath();
        ctx.drawImage(dark,
            _this.currentFrame * dark.width/3,3 * dark.height/4,
            dark.width/3,dark.height/4,
            cvs.width - 150,cvs.height - 350,
            dark.width/1.5,dark.height/2);
        ctx.beginPath();
        ctx.strokeStyle = 'transparent';
        ctx.rect(cvs.width - 170,cvs.height - 290,100,10);
        ctx.stroke();
        if ( ctx.isPointInPath(_this.left,_this.top + ghost.height/2)){

            if ( _this.heart >= 10){
                _this.heart = 1;
                _this.end = 1;
            }else {
                ctx.beginPath();
                ctx.strokeStyle = 'red';
                ctx.strokeText('!献祭用的生命不足!',cvs.width/2 -190,cvs.height/2 - 50);
                _this.left = cvs.width - 170;
            }
        }
        _this.createWall(760,465,410,-140);
        //boss模型
        ctx.beginPath();
        ctx.drawImage(boss,
            _this.currentFrame * boss.width/3,boss.height/4,
            boss.width/3,boss.height/4,
            _this.bossLeft,_this.bossTop,
            boss.width/0.75,boss.height/1);
        ctx.beginPath();
        ctx.drawImage(boss,
            _this.currentFrame * boss.width/3,0 * boss.height/4,
            boss.width/3,boss.height/4,
            _this.bossLeft - 500,_this.bossTop,
            boss.width/0.75,boss.height/1);
        ctx.beginPath();
        ctx.drawImage(boss,
            _this.currentFrame * boss.width/3,2 *boss.height/4,
            boss.width/3,boss.height/4,
            _this.bossLeft + 500,_this.bossTop,
            boss.width/0.75,boss.height/1);
        //boss盒子
        ctx.beginPath();
        ctx.strokeStyle = 'transparent';
        ctx.strokeRect(_this.bossLeft,_this.bossTop,boss.width/0.75,boss.height/1);
        //怪物模型 - 1
        ctx.beginPath();
        ctx.drawImage(death,
            _this.currentFrame * (death.width/3),_this.monsterDirection * (death.height/4),
            death.width/3,death.height/4,
            _this.monsterLeft - death.width/1.5,_this.monsterTop - death.height/2,
            death.width/0.75,death.height/1);
        //怪物BOX - 1
        ctx.beginPath();
        ctx.strokeStyle = 'transparent';
        ctx.rect(_this.monsterLeft - death.width/1.5,_this.monsterTop - death.height/2,death.width/0.75,death.height/1);
        ctx.stroke();
        if ( ctx.isPointInPath(_this.left,_this.top)){
            _this.heart--;
        }
        //怪物模型 - 1
        ctx.beginPath();
        ctx.drawImage(death,
            _this.currentFrame * (death.width/3),_this.monsterDirection * (death.height/4),
            death.width/3,death.height/4,
            _this.monsterLeft - death.width/1.5,_this.monsterTop - death.height/2 - 210,
            death.width/0.75,death.height/1);
        //怪物BOX - 1
        ctx.beginPath();
        ctx.strokeStyle = 'transparent';
        ctx.rect(_this.monsterLeft - death.width/1.5,_this.monsterTop - death.height/2 - 210,death.width/0.75,death.height/1);
        ctx.stroke();
        if ( ctx.isPointInPath(_this.left,_this.top)){
            _this.heart--;
        }
        //人物模型
        ctx.beginPath();
        ctx.drawImage(ghost,
            _this.currentFrame * (ghost.width/3),_this.direction * (ghost.height/4),
            ghost.width/3,ghost.height/4,
            _this.left,_this.top,
            ghost.width/1.5,ghost.height/2);
        //人物盒子
        ctx.beginPath();
        ctx.strokeStyle = 'transparent';
        ctx.strokeRect(_this.left,_this.top,ghost.width/1.5,ghost.height/2);
        //heart
        ctx.beginPath();
        ctx.drawImage(ghost,
            ghost.width/3,0,
            ghost.width/3,ghost.height/4,
            70,0,
            ghost.width/1.5,ghost.height/2);
        ctx.font = "oblique small-caps bold 50px Arial";
        ctx.fillStyle = 'red';
        ctx.fillRect(70+ghost.width/1.5,25,_this.heart * 2,20)
        //ctx.fillText('x ' + _this.heart,70+ghost.width/1.5,50);

        if ( _this.end == 1 ){
            _this.left = 910;
            _this.top = boss.height/1 + 145;
            _this.direction = 3;
            _this.bossTop -= 5;
            if ( _this.bossTop >= -200 ){
                ctx.beginPath();
                ctx.fillText('勇敢之人，我在时间的尽头等待你的到来',cvs.width/2 - 320,cvs.height/2 - 90);
            }else {
                _this.endOne = 1;
            }
        }
        if ( _this.endOne == 1 ){
            roomtwo = 0;
            lastgame.style.display = 'block';
        }
    };
    this.onkeydown = function (ev) {
        switch (ev.keyCode){
            case 37:
                _this.direction = 1;
                break;
            /*case 38:
                _this.direction = 3;
                break;*/
            case 39:
                _this.direction = 2;
                break;
            /*case 40:
                _this.direction = 0;
                break;*/
        }
        switch (_this.direction){
            case 0:
                _this.top += 0;
                break;
            case 1:
                _this.left -= _this.speed;
                break;
            case 2:
                _this.left += _this.speed;
                break;
            case 3:
                _this.top -= 0;
                break;
        }
    };
    document.onkeydown = _this.onkeydown;
    this.gameLogicRoomTow = function () {
        clearTimeout(timerTwo);
        _this.currentFrame = ++_this.currentFrame >=  3 ? 0 :_this.currentFrame;
        if ( _this.heart < 0 ){
            _this.heart = 0;
        }
        if ( _this.heart >= 50 ){
            _this.heart = 50;
        }
        if ( _this.heart <= 0 ){
            roomThreeGG.style.display = 'block';
            _this.left = 0;
            _this.top = 0;
            monsterSpeed = 0;
            tryAgain.onclick = function () {
                clearTimeout(timerTwo);
                gameStart(3);
                roomThreeGG.style.display = 'none';
            }
        }
        if ( _this.monsterLeft <= 140){
            monsterSpeed = -monsterSpeed;
            _this.monsterDirection = 2;
        }
        if ( _this.monsterLeft >= 1750 ){
            monsterSpeed = -monsterSpeed;
            _this.monsterDirection = 1;
        }
        _this.monsterLeft -= monsterSpeed;
        lastgame.children[0].onclick = function () {
            lastgame.style.display = 'none';
            lastgame.children[0].onclick = null;
            _this.gameLogicRoomTow = null;
            gameStart(1);
            gameGrade++;
        };
        _this.createJumpRoom();
        timerTwo = setTimeout(_this.gameLogicRoomTow,12);
    };
}
function Ending() {
    var _this = this;
    this.currentGunFrame = 0;
    this.changeGun = 0;
    this.createEnding = function () {
        ctx.clearRect(0,0,cvs.width,cvs.height)
        ctx.beginPath();
        var pat2 = ctx.createPattern(parchment,'no-repeat');
        ctx.fillStyle = pat2;
        ctx.fillRect(0,0,cvs.width,cvs.height);
        ctx.beginPath();
        ctx.drawImage(magicOne,
            _this.currentGunFrame * magicOne.width/5 ,magicOne.height/4 * _this.changeGun,
            magicOne.width/5,magicOne.height/4,
            450,100,
            magicOne.width/1,magicOne.height/0.8)
        ctx.beginPath();
        ctx.fillStyle='black';
        ctx.font = "oblique small-caps bold 70px 华文行楷";
        ctx.fillText('感 谢 游 玩 !',760,100);
    };
    this.gameLogicEnding = function () {
        clearTimeout(timerFour);
        _this.currentGunFrame++;
        if ( _this.currentGunFrame >= 5 ){
            _this.changeGun++;
            _this.currentGunFrame = 0;
        }
        if ( _this.changeGun >= 3 ){
            _this.changeGun = 0;
        }
        _this.createEnding();
        timerFour = setTimeout(_this.gameLogicEnding,300);
    }
}
