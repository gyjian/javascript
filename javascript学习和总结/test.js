var duck ={
	duckSinging:function(){
		console.log("嘎嘎嘎");
	}
};

var chicken ={
	duckSinging:function(){
		console.log("嘎嘎嘎");
	}
};

var chior =[];//合唱团

var joinChior =function(animal){
	if (animal && typeof animal.duckSinging==="function") {
		chior.push(animal);
		console.log("恭喜加入合唱团");
		console.log("合唱团已有成员数量："+chior.length);
	}
};

joinChior(duck);
joinChior(chicken);