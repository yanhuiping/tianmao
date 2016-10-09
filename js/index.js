
$(function(){

	//热门品牌部分
	var rbottom=$('.rbottom');
	var rbz=$('.rbz',rbottom[0])[0];
	var rbzcon=$('.rbzcon',rbz);
	
	for(var i=0;i<rbzcon.length;i++){
		remen(rbzcon[i])
	}
	function remen(rbzcon){		
		var zz=$('.zz',rbzcon);
		var s=$('.s',zz[0]);
		var z=$('.z',zz[0]);
		var x=$('.x',zz[0]);
		var index=0;
		zz[0].style.display="none";
		rbzcon.onmouseover=function(){
			zz[0].style.display="block";
		}
		rbzcon.onmouseout=function(){
			zz[0].style.display="none";
		}

	}
	//图片移动部分
	var hongse=$('.hongse')[0];
	var hsmai=$('.hsmai')[0]
	var hsz2=$('.hsz2',hsmai);
	for(var a=0;a<hsz2.length;a++){
		hsz2[a].onmouseover=function(){
			var img=$('img',this)[0];
			animate(img,{width:150,bottom:5,height:150},300)
		}
		hsz2[a].onmouseout=function(){
			var img=$('img',this)[0];
			animate(img,{width:140,bottom:10,height:140},300)
		}
	}
	var hsx2=$('.hsx2',hongse);
	for(var j=0;j<hsx2.length;j++){
		hsx2[j].onmouseover=function(){
			var img1=$('img',this)[0];
			animate(img1,{width:150,bottom:5,height:150},300)
		}
		hsx2[j].onmouseout=function(){
			var img1=$('img',this)[0];
			animate(img1,{width:140,bottom:10,height:140},300)
		}
	}

	
	//图片移动位置部分
	var bigbox=$('.bigbox')[0];
	var lbtupian=$('.lbtupian',bigbox);
	for(var i=0;i<lbtupian.length;i++){
		lbtupian[i].onmouseover=function(){
			var img=$('img',this)[0];
			animate(img,{marginRight:15},500)
		}
		lbtupian[i].onmouseout=function(){
			var img=$('img',this)[0];
			animate(img,{marginRight:0},500)
		}

	}
	
	var xylbtupian=$('.xylbtupian',bigbox);
	for(var i=0;i<xylbtupian.length;i++){
		xylbtupian[i].onmouseover=function(){
			var imgxy=$('img',this)[0];
			animate(imgxy,{marginRight:10},500)
		}
		xylbtupian[i].onmouseout=function(){
			var imgxy=$('img',this)[0];
			animate(imgxy,{marginRight:0},500)
		}

	}
	
	
	// var xylbtupian=$('.xylbtupian',bigbox);
	// alert(xylbtupian.length)
	// for(var i=0;i<xylbtupian.length;i++){

	// 	xylbtupian[i].onmouseover=function(){
	// 		var img2=$('img',this)[0];
	// 		animate(img2,{marginRight:15},500)
	// 	}
	// 	xylbtupian[i].onmouseout=function(){
	// 		var img2=$('img',this)[0];
	// 		animate(img2,{marginRight:0},500)
	// 	}

	// }
	//买品区开始
	var maipin=$('.maipin')[0];
	var mpqu=$('.mpqu',maipin)
	for(var i=0;i<mpqu.length;i++){

		mpqu[i].onmouseover=function(){
			for(var j=0;j<mpqu.length;j++){
				mpqu[j].style.border="";
			}
			this.style.border="1px soild red";
			this.background="#fff";
			this.style.opacity=0.7;
		}
		mpqu[i].onmouseout=function(){
			this.style.border="";
			this.style.opacity=1;
		}

	}


//轮播图部分
var bo=$('.bo')[0];
var imglist=$('.imglist',bo)[0];
var imgs=$('img',imglist);
var ul=$('ul',bo)[0];
var li=$("li",ul);
var index1=0;
imgs[0].style.opacity=1;
li[0].style.backgroundColor="#e5004f";
var ts=setInterval(bobo,2000)
 function bobo(){
index1++;
if(index1==imgs.length){
	index1=0;
 }
 for(var i=0;i<imgs.length;i++){
 	li[i].style.backgroundColor="";
 	// imgs[i].style.opacity=0;
 	animate(imgs[i],{opacity:0},500)
 }
 li[index1].style.backgroundColor="#e5004f";
 // imgs[index1].style.opacity=1;
 	animate(imgs[index1],{opacity:1},500)

}
bo.onmouseover=function(){
	clearInterval(ts);
}
bo.onmouseout=function(){
	ts=setInterval(bobo,2000)
}
for(var j=0;j<li.length;j++){
	li[j].index=j;
	li[j].onclick=function(){
		
		for(var i=0;i<imgs.length;i++){
			animate(imgs[i],{opacity:0},500)
			// imgs[i].style.opacity=0;
			li[i].style.backgroundColor='';
		}
		// imgs[this.index].style.opacity=1;
			animate(imgs[this.index],{opacity:1},500)

		li[this.index].style.backgroundColor="#e5004f";
		index1=this.index;
	}
}


//隐藏banner
var ss=$('.ss')[0];
// var ch=document.documentElement.clientHeight;
var flags=true;

//我的淘宝
var bannerl1=$('.banner1')[0];
var topright=$('.topright',bannerl1)[0];
var trwd=$('.trwd',topright)[0];
var ull=$('.a22',trwd)[0];
		ull.style.display="none";

// console.log(trwd)
	hover(trwd,function(){
		ull.style.display="block";
		trwd.style.backgroundColor="#fff";
	},function(){
		ull.style.display="none";
		trwd.style.backgroundColor="";
	})

//收藏夹
var sc=$('.sc')[0];
var ulsc=$('.a33')[0];
ulsc.style.display="none";
hover(sc,function(){
ulsc.style.display="block";
sc.style.backgroundColor="#fff";
},function(){
	ulsc.style.display="none";
sc.style.backgroundColor="";
})
//手机版
var sjb=$('.sjb');
var sjtm=$('.sjtm',sjb[0])[0];
// alert(sjb.length)
var sjsj=$('.sjsj',sjb[0])[0];
hover(sjb[0],function(){
	sjtm.style.display="block";
	sjsj.style.display="block";
	sjb[0].backgroundColor="#fff";
},function(){
	sjtm.style.display="none";
	sjsj.style.display="none";
	sjb[0].backgroundColor="";
})
//商家
var sjzc=$('.sjzc')[0];
var sjzcb=$('.sjzcb',sjzc)[0];
var yiban=$('.yiban',sjzc)[0];
var xyiban=$('.xyiban',sjzc)[0];
hover(sjzc,function(){
	sjzc.style.backgroundColor="#fff";
	sjzcb.style.display="block";
	yiban.style.display="block";
	xyiban.style.display="block";
},function(){
		sjzc.style.backgroundColor="";
	sjzcb.style.display="none";

	yiban.style.display="none";
	xyiban.style.display="none";
})
//网站导航
var wz=$('.wz')[0];
var wzdh=$('.wzdh',wz)[0];
hover(wz,function(){
	wz.style.backgroundColor="#fff";
	wzdh.style.display="block";
},function(){
	wz.style.backgroundColor="";
	wzdh.style.display="none";
})
//楼层跳转
var floor=$('.floor');
// console.log(floor.length)
var fb=$('.floor-br')[0];
fb.style.display="none";
var spans=$('span',fb);
var arrs=[];
for(var j=1;j<spans.length-1;j++){
				spans[j].style.background='#686868';
			}
for(var i=0;i<floor.length;i++){
	arrs.push(floor[i].offsetTop);
}
console.log(arrs);
// var indexf=0;
window.onscroll=function(){
	var stop=document.body.scrollTop||document.documentElement.scrollTop;
	for(var i=0;i<floor.length;i++){
		if(arrs[i]<=stop+500){
			for(var j=1;j<spans.length-1;j++){
				spans[j].style.background='#686868';
			}
			spans[i+1].style.background="";
		}
	}
	if(stop>200){
		if(flags){
			flags=false;
			animate(ss,{top:0},500)
		}
	}else{
		if(!flags){
			flags=true;
			animate(ss,{top:-50},500)
		}
	}
	if(stop<arrs[0]-800){
		fb.style.display="none";
	}else{
		fb.style.display="block";
	}
}
for(var i=1;i<arrs.length+1;i++){
spans[i].index=i;
spans[i].onclick=function(){
	animate(document.body,{scrollTop:arrs[this.index-1]-100},500)
	animate(document.documentElement,{scrollTop:arrs[this.index-1]-100},500)
}
}
spans[8].onclick=function(){
	animate(document.body,{scrollTop:0},500)
		animate(document.documentElement,{scrollTop:0},500)
}

// banner选项卡
var bx1=$('.bannerxia1')[0];
var xiao=$('.xiao',bx1);
var xxuan=$('.xxuan');
for(var i=0;i<xiao.length;i++){
	xiao[i].index=i;
	hover(xiao[i],function(){
		xxuan[this.index].style.display='block';
		xiao[this.index].style.backgroundColor="#fff";
	},function(){
		xxuan[this.index].style.display='none';
		xiao[this.index].style.backgroundColor="";
	})
}

var shop=$('.shop')[0];
var shopk=$('.shopk',shop);
var shopsj=$('.shopsj',shop);
for(var i=0;i<shopk.length;i++){
	shopk[i].style.display="none";
	shopsj[i].style.display="none";
}
var shop_box=$('.shop_box',shop);
for(var i=0;i<shopk.length;i++){
	shop_box[i].index=i;
	hover(shop_box[i],function(){
		shop_box[this.index].style.backgroundColor="#dd2727";
		shopk[this.index].style.display="block";
		shopsj[this.index].style.display="block";
		// animate(shopk[this.index],{left:-200},500)
	},function(){
		shop_box[this.index].style.backgroundColor="";
		shopk[this.index].style.display="none";
		shopsj[this.index].style.display="none";
		// animate(shopk[this.index],{left:-100},500)

	})
}
var tmdatu=$('.tmdatu')[0];
var tmdatusj=$('.tmdatusj')[0];
var shop_box12=$('.shop_box12');
tmdatu.style.display="none";
tmdatusj.style.display="none";
hover(shop_box12[0],function(){
	shop_box12[0].style.backgroundColor='#dd2727';
	tmdatu.style.display="block";
	tmdatusj.style.display="block";
},function(){
	shop_box12[0].style.backgroundColor='';
	tmdatu.style.display="none";
	tmdatusj.style.display="none";
})
})