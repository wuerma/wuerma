$(function(){
	var xiahua=$("header nav ul .xiahua");
	var navli=$("header nav ul li");
	// 初始化
	xiahua.css({left:navli.eq(0).position().left,width:navli.eq(0).innerWidth()})
	navli.on('mouseenter',function(){
		xiahua.css({left:$(this).position().left,width:$(this).innerWidth()})
	})


	// banner
	var banner=$(".banner");
	var zuida=$(".banner .box");
	var anniu=$(".banner .anniubox li");
	var tuW=$(".banner .box .meige").width();
	// 初始化
	anniu.eq(0).css({width:30,opacity:1});
	var t;
	var num=0;
	t=setInterval(move, 5000);
	function move(){
		num++;
		if(num>anniu.length-1){
			num=0;
		}

		zuida.animate({marginLeft:-num*tuW},1000)
		anniu.each(function(index, obj) {
			$(this).css({
				width:10,
				opacity:0.2
			})
		});
		anniu.eq(num).animate({
			width:30,
			opacity:1
		})
	}
	banner.mouseenter(function(){
		clearInterval(t);
	})
	banner.mouseleave(function(){
		t=setInterval(move, 5000);
	})
	anniu.each(function(index, obj) {
		$(this).on('click',function(){
			num=index-1;
			move();
		})
	});


	var ruzhu=$(".shi .shix main .box ul");
	var an=$(".shi .shix main .anniubox .anniu");
	// 初始化
	an.first().css({
		width:24,
		background:'#FF3895'
	})
	var num1=0;
	function move1(){
		num1++;
		if(num1>an.leng-1){
			num1=0;
		}
		ruzhu.animate({
			marginLeft:-1020*num1
		})
		an.css({
			width:10,
			background:'#FFF33B'
		})
		an.eq(num1).css({
			width:24,
			background:'#FF3895'
		})
	}
	an.each(function(index, obj) {
		$(this).on('mouseenter',function(){
			num1=index-1;
			move1();
		})
	});



	var meige=$(".meng main .anli .meige");
	var anniu1=$(".meng main .anli .anniubox .anniu");
	// 初始化
	meige.css({opacity:0})
	meige.first().css({opacity:1})
	anniu1.css({width:10,background:'#FFF33B'})
	anniu1.first().css({width:24,background:'#FF3895'})
	var num2=0;
	function move2(){
		num2++;
		meige.css({opacity:0})
		meige.eq(num2).css({opacity:1})
		anniu1.css({width:10,background:'#FFF33B'})
		anniu1.eq(num2).css({width:24,background:'#FF3895'})
	}
	anniu1.each(function(index, obj) {
		$(this).on('mouseenter',function(){
			num2=index-1;
			move2();
		})
	});


	var huantu=$(".huan main .neirong .right .tu li");
	var huanli=$(".huan main .neirong .right .dian li");
	var zuo=$(".huan main .neirong .right .zuoyou .zuo");
	var you=$(".huan main .neirong .right .zuoyou .you");
	// 初始化
	huantu.removeClass('active');
	huantu.first().addClass('active');
	huanli.removeClass('active');
	huanli.first().addClass('active');
	var num3=0;
	function move3(){
		num3++;
		if(num3>huantu.length-1){
			num3=0;
		}
		if(num3<0){
			num3=huantu.length-1;
		}
		huantu.removeClass('active');
		huantu.eq(num3).addClass('active');
		huanli.removeClass('active');
		huanli.eq(num3).addClass('active');
	}
	huanli.each(function(index, obj) {
		$(this).on('mouseenter',function(){
			num3=index-1;
			move3();
		})
	});
	zuo[0].onclick=function(){
		num3=num3-2;
		move3();
	}
	you[0].onclick=function(){
		move3();
	}




















})