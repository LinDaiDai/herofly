# herofly
this is a mobile game of herofly



**移动端小游戏**	

利用canvas编写的移动端小游戏 "英雄战机"



**问题分析**

1.如何禁止手机浏览器、微信浏览器的上下滑动问题

当使用手机浏览器或者微信浏览器打开网页的时候,上下滑动页面，页面就会出现黑色的空白,影响游戏体验

解决方案:

在js代码中,给事件监听添加禁止:

```
<script type='text/javascript'>
document.querySelector('body').addEventListener('touchstart', function (ev) {
    event.preventDefault();
});
</script>
```



2.游戏过程中出现图片显示不出或加载过慢

解决方案:

给游戏设置图片预加载功能,封装一个预加载功能的函数,并单独将预加载提取出来编写入一个名为`loading.js`的文件中.



3.若何达到PC端与移动端兼容的效果

也就是怎样做到在手机上也能玩,电脑上也能玩的效果

解决方案:

在添加鼠标(手指)移动或放上去这些事件之前,先判断是PC端还是移动端,然后做相应的处理

```
    //获取是pc端还是移动端
    let isTap = "ontouchstart" in window ? true : false,
        tapStart = isTap ? "touchstart" : "mousedown",
        tapMove = isTap ? "touchmove" : "mousemove",
        tapEnd = isTap ? "touchend" : "mouseup"
```

在以后设定事件的过程中,"touchstart"或者"mousedown"事件就用"tapStart"来代替,如点击开始游戏按钮:

```
    startBtn.addEventListener(tapStart,function () {
        startWrap.style.display = 'none'
        ranking.style.display = 'block'
    })
```





补给包介绍:

1.绿帽龙云:

```
一种自带绿色效果的生物,要是不小心碰到他之后,会使自己变绿,内心受到伤害,所以血量也会减一,重复加可能会有意想不到的效果哟!
```

2.骚骚霖少:

```
获取霖少后,提升机身各种属性,并拥有双排子弹
```

3.少女顶雲:

```
能获得超强草莓子弹,子弹攻击力为10000,所向披靡
```

4.无敌菜也哥:

```
捕获菜也哥后,可以获得1~2个的核武器,并存储在你的机身中,点击右下角使用核武器,进行一次全屏大扫荡
```

5.丘比特:

```
由上帝亲自创造的丘比特,获得后使血量加一
```





#### 1. 主页面

![home](https://github.com/LinDaiDai/herofly/blob/master/img/readme/home.png?raw=true)



#### 2. 游戏规则

![rule](https://github.com/LinDaiDai/herofly/blob/master/img/readme/rule.png?raw=true)



#### 3. 战斗页面 

![fight](https://github.com/LinDaiDai/herofly/blob/master/img/readme/fight.png?raw=true)



#### 4.游戏结束

![gameover](E:\herofly\img\readme\gameover.png)



#### 后文

"英雄战机"这款移动端小游戏算是我真正意义上能够使用canvas来写一些东西的证明了.

游戏界面上的一些素材有一些是借鉴其他小游戏的,但像补给包等图片是由我身后的神秘美工设计的,也算是花了一些心思.

这款游戏到现在也只是实现了一些像歼灭敌机,获得补给包,使用炸弹等小功能,对于后期的完善以及优化也希望大家能参与进来,一起扩大它.喜欢的朋友别忘了点个Star喲(＾Ｕ＾)ノ~ＹＯ,谢谢.
