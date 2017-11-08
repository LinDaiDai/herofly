/**
 * Created by Administrator on 2017/9/21.
 */
<<<<<<< HEAD
// document.querySelector('body').addEventListener('touchstart', function (ev) {
//     event.preventDefault();
// });

=======
>>>>>>> a2d44f98621416682706b2d727588398e8f075fa
document.addEventListener('touchstart', function (ev) {
    event.preventDefault();
})
document.addEventListener('touchmove', function (ev) {
    event.preventDefault();
})
<<<<<<< HEAD

=======
>>>>>>> a2d44f98621416682706b2d727588398e8f075fa
window.onload = function () {
    let windowW = document.body.clientWidth
    let windowH = document.body.clientHeight
    let score = 0;              //分数
    let startBtn = document.querySelector('#startBtn')
    let startWrap = document.querySelector('.startWrap')
    let gameWrap = document.querySelector('.gameWrap')
    let close = document.querySelector('.close')
    let ranking = document.querySelector('#ranking')
    let loadingP = document.querySelector('#loading')
    let loadingWrap = document.querySelector('.loadingWrap')
    let gameRanking = document.querySelector('#gameRanking')
    let defeatWrap = document.querySelector('#defeatWrap')
    let endWrap = document.querySelector('.endWrap')
    let resultP = document.querySelector('#result')
    let again = document.querySelector('#again')
    let hint = document.querySelector('.hint')
    let event;
    // loading预加载
    let imgObjs;    //定义对象用于储存所有img
    loading({
        imgs: {
            background: 'img/background.png',
            loading: 'img/loading.gif',
            bomb: 'img/bomb.png',
            bullet1: 'img/bullet1.png',
            bullet2: 'img/bullet2.png',
            bullet3: 'img/bullet3.png',
            enemy1: 'img/enemy1.png',
            enemy2: 'img/enemy2.png',
            enemy3: 'img/enemy3.png',
            herofly: 'img/herofly.png',
            herofly2:'img/herofly2.png',
            prop: 'img/prop.png',
            prop2: 'img/prop2.png',
            startBackground: 'img/startBackground.png',
            enemy1Ball: 'img/enemy1Ball.png',
            enemy2Ball: 'img/enemy2Ball.png',
            caiyege: 'img/caiyege.png',
            close: 'img/close.png',
            defeat: 'img/defeat.png',
            dingyun: 'img/dingyun.png',
            gameover: 'img/gameover.png',
            gameRanking: 'img/gameRanking.png',
            again: 'img/again.png',
            linshao: 'img/linshao.png',
            longyun: 'img/longyun.png',
            qiubite: 'img/qiubite.png',
            enemy1Small: 'img/enemy1Small.png',
            enemy2Small: 'img/enemy2Small.png',
            enemy3Small: 'img/enemy3Small.png',

        },
        // 监听进度的
        prog: function (num) {

            loadingP.innerHTML = num + "%"
        },
        complete: function (imgs) {
            imgObjs = imgs
            loadingWrap.style.display = 'none'
            startWrap.style.display = 'block'
            hint.style.left = windowW / 2 - hint.offsetWidth / 2 + 'px'
        }
    })

    //获取是pc端还是移动端
    let isTap = "ontouchstart" in window ? true : false,
        tapStart = isTap ? "touchstart" : "mousedown",
        tapMove = isTap ? "touchmove" : "mousemove",
        tapEnd = isTap ? "touchend" : "mouseup"
<<<<<<< HEAD


=======
>>>>>>> a2d44f98621416682706b2d727588398e8f075fa
    startBtn.addEventListener(tapStart,function () {
        startWrap.style.display = 'none'
        ranking.style.display = 'block'
    })
    close.addEventListener(tapStart,function () {
        ranking.style.display = 'none'
        gameWrap.style.display = 'block'
        canvas.style.display = 'block'
        _init()
    })
    function _init() {

        let wrap = document.querySelector('.wrap')
        let scoreP = document.querySelector('#scoreP')
        let bloods = document.querySelector('.bloods')
        let prompt = document.querySelector('.prompt')

        let canvas = document.querySelector('#canvas')
        canvas.width = windowW
        canvas.height = windowH
        let cW = canvas.width,
            cH = canvas.height,
            ctx = canvas.getContext('2d')


        let frame = 0   // 帧数
        let animation;  //动画函数
        let isPlaneRect = false;    //飞机是否碰到敌机或者敌机子弹
        let isEnemyRect = false;    //敌机是否碰到飞机或者飞机子弹
        let isPropGet = false;      //是否有补给包被飞机加到
        let bulletMold = 1;         //定义飞机子弹类型
        let bulletAtk = 1;          //定义飞机子弹类型的攻击力
        let bombNum = 0;            //定义炸弹的个数
        let getBomb = false         //定义判断是否获取到炸弹
        let isGreen = false         //定义判断飞机是否是绿色
        let bullets = [],           //飞机子弹数组
            enemy1s = [],           //敌机数组
            enemy1Bullets = [],     //敌机子弹数组
            props = [],             //补给包数组
            bombs = []              //炸弹数组
        //获取背景图片
        let backImg = imgObjs.background
        // 背景
        let back = {
            img: backImg,
            x: 0,   //从什么位置开始截取图片
            y: 0,
            w: backImg.width,  //截取图片的宽高
            h: backImg.height,
            // 在canvas中的纵向(y)坐标
            iY: 0
        }
        back.move = function () {
            this.iY += 4
            if (this.iY >= this.h / 2) {
                this.iY = 0
            }
        }
        back.draw = function () {
            ctx.drawImage(back.img, back.x, back.y, back.w,back.h , 0, back.iY,cW, cH)
            ctx.drawImage(back.img, back.x, back.y, back.w, back.h, 0, back.iY - back.h / 2, cW, cH)
        }

        //获取飞机图片
        let planeImg = imgObjs.herofly2
        //飞机
        let plane = {
            img: planeImg,
            x: 66,    //从什么位置开始截取图片
            y: 0,
            w: 66,   //截取图片的宽高
            h: 82,
            // 在canvas中的横纵(x,y)坐标
            iX: cW * 0.4,
            iY: cH * 0.7,
            blood: 3,
            isGet : 0,
            propTime : 0,
            propBol : false
        }
        /**
         * 绘制飞机
         */
        plane.draw = function () {
            ctx.drawImage(this.img, this.x, this.y, this.w, this.h, this.iX, this.iY, this.w, this.h)
        }
        /**
         * 控制飞机移动
         * @param iX    飞机在上一次绘制时的横纵坐标
         * @param iY
         */
        plane.move = function (iX, iY) {

            //更新飞机的横纵坐标
            this.iX = iX - this.w / 2
            this.iY = iY - this.h / 2

            //判断飞机飞到边缘部分
            if (this.iX <= 0) {
                this.iX = 0
            }
            if (this.iX >= cW - this.w) {
                this.iX = cW - this.w
            }
            if (this.iY <= 0) {
                this.iY = 0
            }
            if (this.iY >= cH - this.h) {
                this.iY = cH - this.h
            }

        }
        /**
         * 飞机爆炸
         */
        plane.boom = function () {
            let  blood = plane.blood
            //判断飞机的血量
            if (blood === 2) {           //飞机第一次碰撞
                //更新从什么位置开始截取
                this.x += this.w
                if (this.x >= this.w * 3) {
                    this.x = this.w * 3
                }
            } else if (blood === 1) {     //第二次碰撞
                this.x += this.w
                if (this.x >= this.w * 4) {
                    this.x = this.w * 4
                }
            } else if (blood <= 0) {     //第三次碰撞
                this.x += this.w
                if (this.x >= this.w * 5) {
                    this.x = this.w * 5
                    //清除动画
                    animate = null
                    gameOVer()
                }
            } else if (blood >= 3 ) {
                plane.blood = 3
            }
        }
        /**
         * 定义函数显示飞机血量
         * @param blood 飞机的血量
         */
        function showBlood(blood){
            bloods.innerHTML = ''
            for(let i = 0; i < blood; i++ ) {
                createBlood()
            }
        }
        /**
         * 定义函数创建飞机血量条
         */
        function createBlood() {
            let bloodDiv = document.createElement('div')
            bloodDiv.className = 'blood'
            bloods.appendChild(bloodDiv)
        }
        //飞机子弹图片1,子弹图片2,单排子弹还是双排
        let bulletImg1 = imgObjs.bullet1
        let bulletImg2 = imgObjs.bullet2
        let bulletImg3 = imgObjs.bullet3


        /**
         * 一个创建飞机子弹的构造函数
         * @param bulletMold 子弹的类型
         * @constructor
         */
        function Bullet(bulletMold) {
            //定义子弹样式
            let img , iX;
            this.mold = bulletMold
            //判断子弹的类型
            if(this.mold === 1){
                img = bulletImg1
                bulletAtk = 1
                iX = plane.iX + 30
            } else if (this.mold === 2) {
                img = bulletImg2
                bulletAtk = 2
                iX = plane.iX + 10
            } else if (this.mold === 3 ) {
                img = bulletImg3
                bulletAtk = 10000
                iX = plane.iX + 20
            }
            this.img = img
            this.x = 0; //从什么位置开始截取图片
            this.y = 0;
            this.w = this.img.width; //截取图片的宽高
            this.h = this.img.height;
            this.iX = iX;
            this.iY = plane.iY;
            this.atk = bulletAtk

        }

        /**
         * 绘制飞机子弹并且使飞机子弹移动
         */
        Bullet.prototype.draw = function () {
            this.iY -= this.h;
            ctx.drawImage(this.img, this.x, this.y, this.w, this.h, this.iX, this.iY, this.w, this.h)
        }
        //获取敌机1图片
        let enemy1Img = imgObjs.enemy1
        let enemy2Img = imgObjs.enemy2
        let enemy3Img = imgObjs.enemy3

        /**
         * 一个创建敌机的构造函数
         * @constructor
         */
        function Enemy1() {
            let chance = randomInt(0, 100)
            //敌机类型, 敌机宽, 高, 敌机速度, 敌机血量, 击中敌机加的分数
            let enemyImg, imgW, imgH, speed, blood, mold, isRect, score
            //判断概率
            if (chance >= 0 && chance <= 60) {
                enemyImg = enemy1Img
                imgW = 39
                imgH = 34
                speed = 4
                blood = 1
                mold = 1
                score = 1
            } else if (chance >= 61 && chance <= 90) {
                enemyImg = enemy2Img
                imgW = 46
                imgH = 64
                speed = 3
                blood = 50
                mold = 2
                score = 3
            } else {
                enemyImg = enemy3Img
                imgW = 110
                imgH = 164
                speed = 2
                blood = 100
                mold = 3
                score = 5
            }
            this.img = enemyImg;
            this.x = 0; //从什么位置开始截取图片
            this.y = 0;
            this.w = imgW; //截取图片的宽高
            this.h = imgH;
            this.iX = randomInt(0, cW - this.w);
            this.iY = -this.h
            this.speedY = speed
            this.blood = blood
            this.mold = mold
            this.score = score
            this.isRect = false         //敌机是否被击中, 但不确定敌机血量是不是为0
            this.isRemove = false       //敌机是否要被移除
        }
        /**
         * 绘制敌机
         */
        Enemy1.prototype.draw = function () {
            ctx.drawImage(this.img, this.x, this.y, this.w, this.h, this.iX, this.iY, this.w, this.h)
        }
        /**
         * 敌机移动
         */
        Enemy1.prototype.move = function () {
            if(!this.isRemove) {
                this.iY += this.speedY
            }

        }
        /**
         * 敌机爆炸
         */
        Enemy1.prototype.boom = function () {
            //当前敌机的血量 = 当前敌机的血量 - 当前子弹的攻击力
            this.blood -= bulletAtk;

            if(this.blood <= 0) {           //检测当前的敌机血量是不是为0
                this.isRemove = true        //为0时激活移除当前敌机的属性
                this.x += this.w
                if (this.x >= this.img.width - this.w) {
                    this.x = this.img.width - this.w
                }

            } else {                        //血量不为0时
                this.x += this.w
                if(this.x >= this.w * 4 ) {
                    this.x = this.w * 4
                }
            }
        }
        //获取敌机子弹图片
        let enemy1Ball = imgObjs.enemy1Ball
        let enemy2Ball = imgObjs.enemy2Ball

        /**
         * 一个创建敌机子弹的构造函数
         * @param ctx   ctx
         * @param iX    敌机子弹出现在页面中的横纵坐标
         * @param iY
         * @param iMold 敌机的类型
         * @constructor
         */
        function Enemy1Bullet(ctx, iX, iY, iMold) {
            let enemyBall;
            if (iMold === 1) {
                enemyBall = enemy1Ball
            } else if (iMold === 2) {
                enemyBall = enemy2Ball
            } else {
                enemyBall = enemy2Ball
            }
            this.img = enemyBall;
            this.x = 0;     //从什么位置开始截取图片
            this.y = 0;
            this.w = 12;    //截取图片的宽高
            this.h = 28;
            this.iX = iX;
            this.iY = iY;
        }

        /**
         * 绘制并且控制敌机子弹移动
         */
        Enemy1Bullet.prototype.draw = function () {
            this.iY += this.h / 4
            ctx.drawImage(this.img, this.x, this.y, this.w, this.h, this.iX, this.iY, this.w, this.h)
        }
        //获取补给包
        let propImg = imgObjs.prop2
        class Prop{
            constructor(){
                let chance = randomInt(0, 100)
                //补给包的类型, 图片截取的位置(x,y)坐标, 一张图片截取的宽高,
                let mold, x, w = 100, h = 157 ;
                if(chance >= 0 && chance <= 40 ){
                    mold = 1
                    x = 0
                } else if (chance >=41 && chance <= 70 ) {
                    mold = 2
                    x = w
                } else if ( chance >= 71 && chance <= 80 ) {
                    mold = 3
                    x = w * 2
                } else if ( chance >= 81 && chance <= 90 ) {
                    mold = 4
                    x = w * 3
                } else if ( chance >= 91 && chance <= 100) {
                    mold = 5
                    x = w * 4
                }
                this.img = propImg
                this.mold = mold
                this.x = x
                this.y = 0
                this.w = w
                this.h = h
                this.iW = 60
                this.iH = 100
                this.iX = randomInt(0, cW - this.w);
                this.iY = -this.h
                this.speedX = 0.5       //(x,y)轴方向的速度
                this.speedY = 2
            }
            move() {
                //控制补给包的速度和方向
                this.iX += this.speedX
                this.iY += this.speedY
                if (this.iX >= cW - this.w) {
                    this.speedX *= -1
                } else if (this.iX <= 0 ) {
                    this.speedX *= -1
                }
            }
            draw() {
                ctx.drawImage(this.img, this.x, this.y, this.w, this.h, this.iX, this.iY, this.iW, this.iH)
            }
        }
        //获取炸弹
        let bombImg = imgObjs.bomb
        class Bomb{
            constructor(i){
                this.img = bombImg
                this.x = 0
                this.y = 0
                this.w = 42
                this.h = 36
                this.iX = cW - i * this.w
                this.iY = cH - this.h

            }
            draw(){
                ctx.drawImage(this.img, this.x, this.y, this.w, this.h, this.iX, this.iY, this.w, this.h)
            }
        }
        let isDown = false  //判断鼠标是否按下
        let arrPointer = [] //用以储存鼠标每次移动时的坐标
        let pointerX = 0    //鼠标的x坐标
        let pointerY = 0
        
        //监听飞机的按下事件
        document.addEventListener(tapStart, function (e) {

            pointerX = isTap ? e.targetTouches[0].pageX - wrap.offsetLeft : e.clientX - wrap.offsetLeft
            pointerY = isTap ? e.targetTouches[0].pageY - wrap.offsetTop : e.clientY - wrap.offsetTop

            // 获取按下的位置跟飞机位置的距离
            let disX = plane.iX - pointerX
            let disY = plane.iY - pointerY
            //判断按下的位置在不在飞机的范围内
            if (pointerY > plane.iY && pointerY < plane.iY + plane.h && pointerX > plane.iX && pointerX < plane.iX + plane.w) {
                isDown = true
                arrPointer.push([pointerX, pointerY])
                plane.move(pointerX, pointerY)
                if(isTap) {
                    e.preventDefaults()
                }

            }
            //判断按下的位置在不在炸弹的范围内
            for(let i = 0; i < bombs.length; i++ ) {

                if (pointerY > bombs[i].iY && pointerY < bombs[i].iY + bombs[i].h && pointerX > bombs[i].iX && bombs[i].iX < bombs[i].iX + bombs[i].w) {
                    enemy1s = []
                    enemy1Bullets = []
                    bombs.splice(i, 1)
                    return
                }
            }
        })
        //监听画布的移动事件
        document.addEventListener(tapMove, function (e) {

            if (isDown) {
                pointerX = isTap ? e.targetTouches[0].pageX - wrap.offsetLeft : e.clientX - wrap.offsetLeft
                pointerY = isTap ? e.targetTouches[0].pageY - wrap.offsetTop : e.clientY - wrap.offsetTop
                arrPointer.push([pointerX, pointerY])
                plane.move(pointerX, pointerY)
                if(isTap) {
                    e.preventDefaults()
                }
            }
        })

        //监听画布的抬起事件
        document.addEventListener(tapEnd, function (e) {

            isDown = false
            arrPointer = []
            if(isTap) {
                e.preventDefaults()
            }
        })

        animate()
        function animate() {

            frame++
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            showBlood(plane.blood)

            //绘制背景
            back.draw();
            //绘制飞机
            plane.draw()
            //绘制飞机子弹
            if (frame % 3 === 0) {
                let bullet = new Bullet(bulletMold)
                bullets.push(bullet)
            }
            //制造出敌机1
            if (frame % 50 === 0) {
                let enemy1 = new Enemy1()
                enemy1s.push(enemy1)
            }
            //制造出敌机子弹
            if (frame % 150 === 0) {
                for (let s = 0; s < enemy1s.length; s++) {
                    let enemy1Bullet = new Enemy1Bullet(ctx, enemy1s[s].iX + enemy1s[s].w / 2 - enemy1s[s].w / 10, enemy1s[s].iY + enemy1s[s].h, enemy1s[s].mold)
                    enemy1Bullets.push(enemy1Bullet)
                }
            }
            //制造出补给包
            if ( frame % 200 === 0 ){
                let prop = new Prop()
                props.push(prop)
            }

            //控制背景移动背景
            if (frame % 2 === 0) {
                back.move()
            }
            //绘制并使飞机子弹移动
            for (let n = 0; n < bullets.length; n++) {
                bullets[n].draw()
            }
            //绘制并控制敌机移动
            for (let n = 0; n < enemy1s.length; n++) {
                enemy1s[n].move()
                enemy1s[n].draw()
            }
            //绘制并控制敌机子弹移动
            for (let n = 0; n < enemy1Bullets.length; n++) {
                enemy1Bullets[n].draw()
            }
            //绘制并控制补给包移动
            for (let n = 0; n < props.length; n++ ) {
                props[n].move()
                props[n].draw()
            }

            //对超出边界的子弹, 敌机, 敌机子弹, 补给包做处理
            overBoundary(bullets, true)
            overBoundary(enemy1s, false)
            overBoundary(enemy1Bullets, false)
            overBoundary(props, false)
            //判断子弹是否碰到了敌机
            rectBullet()
            //子弹碰到敌机后执行的操作
            hasRectBullet(frame)
            //判断飞机是否与敌机, 敌机子弹, 补给包 相撞
            rect()
            //补给包碰到飞机后执行的操作
            getProp(frame)
            //飞机碰到敌机, 敌机子弹后执行的操作
            hasPlaneRect(frame)
            //判断是否获取到了炸弹
            isBomb()
            //绘制炸弹
            for (let i = 0; i < bombs.length; i++ ) {
                bombs[i].draw()
            }
            hasGreen()
            hasPropBullet()

            if (frame > 10000) {
                frame = 0
            }
            animation = window.requestAnimationFrame(animate)
        }
        /**
         * 定义函数,判断物体是否越界
         * @param arr   要查询的物体(一个全是对象的数组)
         * @param isUp
         */
        function overBoundary(arr, isUp) {
            if (isUp) {
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i].iY < -arr[i].h) {
                        arr.splice(i, 1)
                        i--
                    }
                }
            } else {
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i].iY > cH) {
                        arr.splice(i, 1)
                        i--
                    }
                }
            }
        }
        /**
         * 定义函数,判断飞机子弹是否与物体相撞
         * @returns {boolean}
         */
        function rectBullet() {
            for (let i = 0; i < bullets.length; i++) {
                let bullet = getCo(bullets[i])
                if (isRect(bullet, enemy1s)) {
                    return true
                }
            }
            return false
        }
        /**
         * 定义飞机子弹撞到物体后执行的操作
         * @param frame         帧数
         */
        function hasRectBullet(frame){
            //判断是否撞到了敌机
            if(isEnemyRect) {
                for (let i = 0; i < enemy1s.length; i++) {  //遍历所有敌机
                    if (enemy1s[i].isRect) {                //若是激活了碰撞属性的敌机
                        enemy1s[i].boom()                   //调用敌机爆炸函数
                        if(enemy1s[i].isRemove) {           //检测当前的敌机是不是满足血量为0可以移除的条件
                            if (frame % 10 === 0) {             //当帧数到达50时
                                score += enemy1s[i].score       //加上碰撞的敌机对应的分数
                                enemy1s.splice(i, 1)            //将当前这个敌机从原数组中删除
                                i--
                                scoreP.innerHTML = score + '分'  //显示分数
                                isEnemyRect = false
                            }
                        } else {                            //血量还没有为0的敌机执行以下
                            if (frame % 20 === 0 ) {
                                enemy1s[i].x = 0
                                isEnemyRect = false
                            }
                        }
                    }
                }
            }
        }

        /**
         * 定义函数,判断飞机是否与物体相撞
         */
        function rect() {
            let planeArr = getCo(plane)     //获取飞机的上下左右的值
            //判断飞机是否与敌机1,敌机子弹1相撞
            if (isRect(planeArr, enemy1s) || isRect(planeArr, enemy1Bullets)) {
                plane.blood--;      //飞机减血
                isPlaneRect = true; //激活飞机被撞的属性
            }
            //判断飞机是否与补给物品相撞
            if (isRect(planeArr, props)) {
                // console.log('补给成功');
            }
        }
        /**
         * 定义函数, 飞机碰到敌机, 敌机子弹执行的操作
         */
        function hasPlaneRect(frame){
            if (isPlaneRect) {
                plane.boom()
                if (frame % 50 === 0) {
                    prompt.innerHTML = '被怼了,当前血量为:' + plane.blood
                    plane.x = plane.w
                    isPlaneRect = false
                }
            }
        }
        /**
         * 定义函数, 获取到了补给包进行判断然后操作
         */
        function getProp(frame){
            if(isPropGet) {
                hasProp(frame)
                isPropGet = false
            }
        }
        /**
         * 定义函数, 对获取到的补给包时的飞机进行操作
         */
        function hasProp(frame){
            let mold = plane.isGet
            if (mold === 1 ) {
                if(plane.x >= plane.w) {
                    if(plane.blood <= 1 ) {
                        //清除动画
                        animate = null
                        gameOVer()
                    }

                    plane.blood--
                    plane.boom()
                    // plane.x = 0
                    prompt.innerHTML = '获得"龙云",当前血量为' + plane.blood
                    isGreen = true
                }
            } else if (mold === 2 ) {
                bulletMold = 2
                plane.propBol = true
                prompt.innerHTML = '获得"霖少",当前血量为' + plane.blood
            } else if (mold === 3 ) {
                bulletMold = 3
                plane.propBol = true
                prompt.innerHTML = '获得"顶雲",当前血量为' + plane.blood
            } else if (mold === 4 ) {
                if(bombNum < 3 ) {
                    bombNum ++
                }

                getBomb = true
                prompt.innerHTML = '获得"菜也哥",当前血量为' + plane.blood
            } else if (mold === 5 ) {
                if(plane.blood < 3){
                    plane.blood++
                }
                prompt.innerHTML = '获得"丘比特",当前血量为' + plane.blood
            }
        }

        /**
         * 定义函数, 存储炸弹
         */
        function isBomb(){
            if(getBomb) {
                for(let i = 0; i < bombNum; i++ ) {
                    let bomb = new Bomb(i + 1)
                    bombs.push(bomb)
                }
                getBomb = false
            }
        }
        /**
         * 定义一个函数,用来获取对象的上下左右的值
         * @param obj   要获取的对象
         * @returns {Array} 一个数组 [ obj上边, obj右边, obj下边, obj左边 ]
         */
        function getCo(obj) {
            //定义一个数组,用以存储对象的上下左右的值
            let arrCo = []
            let t = obj.iY
            let r = obj.iX + obj.w
            let b = obj.iY + obj.h
            let l = obj.iX

            arrCo.push(t, r, b, l)
            return arrCo
        }
        /**
         * 定义一个函数,用来判断碰撞条件是否成立
         * @param s     一个已经getCo的数组 [ obj上边, obj右边, obj下边, obj左边 ]
         * @param m     一个数组,数组中存储的是一组相同的对象 [ obj, obj, obj ...]
         * @returns {boolean}
         */
        function isRect(s, m) {
            for (let i = 0; i < m.length; i++) {
                let nape = getCo(m[i])
                if (s[1] > nape[3] && s[2] > nape[0] && s[3] < nape[1] && s[0] < nape[2]) { //判断是否相撞
                    if (m === enemy1s) {    // 判断撞的物体是不是敌机
                        m[i].isRect = true  //激活敌机被碰撞的属性
                        isEnemyRect = true  //表示可以执行hasEnemyRect()函数
                        return true
                    } else if (m === props ) {  //判断撞的物体是不是补给包
                        plane.isGet = m[i].mold //获取补给包的类型
                        m.splice(i, 1)          //将当前补给包删除
                        isPropGet = true        //激活获得补给包, 表示可以执行getProp()函数
                        return true
                    }
                    m.splice(i, 1)
                    return true
                }
            }
            return false
        }

        /**
         * 判断飞机是否变绿
         */
        function hasGreen(){
            if(isGreen) {
                plane.x = 0
                if(frame % 180 === 0 ) {
                    plane.x = plane.w
                    isGreen = false
                }
            }
        }
        function hasPropBullet(){
            if(plane.propBol) {
                if(plane.propTime >= 200 ) {
                    bulletMold = 1
                    plane.propTime = 0
                    plane.propBol = false
                }
                plane.propTime ++
            }
        }
        //定义游戏结束函数
        function gameOVer() {
            isDown = false
            gameWrap.style.display = 'none'
            canvas.style.display = 'none'
            defeatWrap.style.display = 'block'
            again.style.left = windowW / 2 - again.offsetWidth / 2
        }
        defeatWrap.addEventListener(tapStart, function (e) {
            this.style.display = 'none'
            endWrap.style.display = 'block'
            resultP.innerHTML = '最终得分为:'+ score
            close.addEventListener(tapStart,function () {
                ranking.style.display = 'none'

            })
        })
        again.addEventListener(tapStart, function () {
            location.reload()
        })
        gameRanking.addEventListener(tapStart,function () {
            console.log('a');
            ranking.style.display = 'block'
        })
        ranking.addEventListener(tapStart,function () {

            ranking.style.display = 'none'
        })
        //定义取范围内的随机数
        function randomInt(from, to) {
            return parseInt(Math.random() * (to - from + 1) + from);
        }
    }
}
