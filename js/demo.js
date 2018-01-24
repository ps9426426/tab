//tab切换
class Tab{
	constructor(){
		this.init()
	}

	init(){
	   this.createEle()
	}

	createEle(){
		let tab=document.createElement('div');
		tab.className="tab";
		tab.append(this.createTitle())
		tab.append(this.createContent())
		document.body.append(tab);
		this.addClick()
	}

	createTitle(){
		let ul=document.createElement('ul');
        let arr=['美食',"娱乐","旅游","运动"];
        arr.map(function(item,i){

        	let li=document.createElement('li');
        	li.innerHTML=item;
        	if(i==0){
        		li.classList.add('on')
        	}
        	ul.append(li)
        	console.log(item)
        })
        return ul;
	}
	
	createContent(){
        let ol=document.createElement('ol');
        let cont=[
        	'美食:太原柳巷一家凉皮店粉丝爆满',
        	"娱乐:国民近期对于李小璐贾乃亮事件发出疑惑",
        	"旅游:太原市古交市红豆山庄滑雪场盛大开幕",
        	"运动:八维放假一些胖子又hold不住了，究竟是美食的诱惑还是家庭的温暖"
        	];

        cont.map(function(item,i){
        	let li=document.createElement('li');
        	li.innerHTML=item;
        	if(i==0){
        		li.style.display="block"
        	}
        	ol.append(li)
        	console.log(item)
        })
        return ol;
	}
	

	addClick(){
		let uls=document.getElementsByTagName('ul')[0];
		let ols=document.getElementsByTagName('ol')[0];
		let ulis=uls.getElementsByTagName('li');
		let olis=ols.getElementsByTagName('li');
		[...ulis].forEach(function(item,i,arr){
			item.addEventListener('click',(event)=>{
				for(var j=0;j<ulis.length;j++){
					ulis[j].classList.remove('on');
					olis[j].style.display="none"
				}
				item.classList.add('on');
				olis[i].style.display="block"
			})
		})
	}
}

let tab=new Tab()
