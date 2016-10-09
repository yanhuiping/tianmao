//兼容问题：IE6-8不支持通过类名方式获取元素
//classname【string】 要获取的元素类名
//range[object]


//判断当前浏览器是否支持
function getClass(classname,range){
	var range=range?range:document;
	if(document.getElementsByClassName){//判断是否可以访问className类
		return range.getElementsByClassName(classname);//如果可以，直接返回该类名；
	}else{
		var biao=range.getElementsByTagName("*");//遍历通用标签，目的是在查找到的这些标签中查找类名(形参中的所提供的类名)
		var arr=[];//查找到的标签，类，id等会以
		for(var i=0;i<biao.length;i++){
			
			if(checkClass(biao[i].className,classname)){
				arr.push(biao[i])
			}
		}
		return arr;

	}
}
// alert(getClass)



//检测当前的元素类名中是否有需要查找的类名；有：true  没有：false
//如果有几个类名<div class="aa inner sss"></div>,需要选择其中一个类名
function checkClass(tagClass,aclass){
	var newarr=tagClass.split(" ");//将class中的类名转换成数组，以空格分开每个元素；
	for(var i=0;i<newarr.length;i++){//遍历数组中的每个元素，这里的元素就是类名；
		if(newarr[i]==aclass){//挑选出我们要的类名
			return true;
		}
	}
	return false;
}
// alert(1)
// alert(getClass)


//兼容获取文本内容
//设置文本
function text(obj,val){

	if(val==undefined){
		if(obj.textContent!=undefined){
			return obj.textContent;
		}else{
			return obj.innerText;
		}
	}else{
		if(obj.textContent!=undefined){
			val= obj.textContent;
		}else{
			val= obj.innerText;
		}
	}

}

//获取通用样式
//获取通用样式

//
function getStyle(obj,atr){
	if(obj.currentStyle){
		return obj.currentStyle[atr]; 
	}else{
		return window.getComputedStyle(obj,null)[atr];
	}



}
/*  1.获取页面元素
		$('#box')	id
		$('.box')	classname
		$('div')	tagname
		$('<div>')	tagname

	2.页面加载
		$(function(){})
*/

function $(selector,range){
	if(typeof selector=='string'){
		// alert('获取')
		var range=range||document;
		if(selector.charAt(0)=='#'){
			return document.getElementById(selector.substr(1))
		}
		else if(selector.charAt(0)=='.'){
			return getClass(selector.substr(1),range)
		}else if(/^[a-zA-Z][a-zA-Z1-6]{0,9}$/.test(selector)){
			return range.getElementsByTagName(selector)
		}else if(/^<[a-zA-Z][a-zA-Z1-6]{0,9}>$/.test(selector)){
			return document.createElement(selector.slice(1,-1))
		}
	}else if(typeof selector=='function'){
		// alert('页面加载')
		window.onload=selector;
	}

}

function getChilds(obj){
	var childs=obj.childNodes;
	var newArr=[];
	for(var i=0;i<childs.length;i++){
		if(!((childs[i].nodeType==8)||(childs[i].nodeType==3&&trim(childs[i].nodeValue)==""))){
		newArr.push(childs[i]);
	}
	}
	
	return newArr;
}
function trim(str){
	return str.replace(/^\s+|\s+$/g,"");
}

function getFirst(obj){
	var childs=getChilds(obj);
	return childs[0];
}
function getLast(obj){
	var childs=getChilds(obj);
	return childs[childs.length-1];
}
function getNum(obj,i){
	var childs=getChilds(obj)[i];
	return childs;
}
function getNext(obj){
	var next=obj.nextSibling;
	if(!next){
		return false;
	}
	while(next.nodeType==8||(next.nodeType==3&&trim(next.nodeValue)=="")){
		next=next.nextSibling
		if(!next){
			return false;
		}
	}
	return next;

}
function getUp(obj){
	var up=obj.previousSibling;
	if(!up){
		return false;
	}
	while(up.nodeType==8||(up.nodeType==3&&trim(up.nodeValue)=="")){
		up=up.previousSibling
		if(!up){
			return false;
		}
	}
}
function insertBefore(obj1,obj2){
	var parent=obj2.parentNode;
	 parent.insertBefore(obj1,obj2);

}
function insertAfter(obj1,obj2){
	var parent=obj2.parentNode;
	// parent.appendChild(obj1);
	var next=getNext(obj2);
	if(next){
		parent.insertBefore(obj1,next);
	}else{
		parent.appendChild(obj1);
	}

}
//事件的处理添加
function on(obj,ev,callback){
	if(obj.addEventListener){
		obj.addEventListener(ev,callback);
	}else{
		obj.fffnnn=function(){
			callback.call(obj);
		}
		obj.attachEvent('on'+ev,fffnnn)
	}
}
function off(obj,ev,callback){
	if(obj,removeElementListener){
		obj.remooveElementListener(ev,callback);
	}else{
		obj.detachEvent('on'+ev,obj.fffnnn)
	}
}