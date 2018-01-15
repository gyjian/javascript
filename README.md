# javascript
根据MDN官网提供的javascript学习路线做的一系列练习

# 操作文档

获取节点：querSelector()

创建节点：createElement()

添加节点：appendChild()

移动和删除节点：removeChild()、#删除自己#parentNode.removeChild()

修改样式：setAttribute()

# 从服务器获取数据

#传统的XMLHttpRequest方法#

var request =new XMLHttpRequest();

request.open('GET',url);

request.responseType='text';

request.onload=function(){

};

request.send();

#现代的替代品#

fetch(url).then(function(response){

response.text().then(function(text){

   })

})
