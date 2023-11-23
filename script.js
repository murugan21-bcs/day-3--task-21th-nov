//Question  :1
//how  to compare two JSON have the same properties without order


var obj1 = {name:"person",age:5};
var obj2 = {age:5,name:"person"};

var condition =true;

if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(let key in obj1) {
        if (obj1[key]==obj2[key]){
            continue;
        }
        else{
            condition=false;
            break;
        }
    }
}
else{
    condition=false;
}
console.log(condition);


//Question  :2
//use the rest countries api url and display all the country flag in console


var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    for(var i = 0;i<XPathResult.length;i++){
        console.log(SpeechRecognitionResultList[i].flag);
    }
}


//Question   3
//use rest countries api url and print all countries names,regions,subregions,populations


var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var result=JOSN.parse(request.response);
    for(var i=0;i<result.length;i++){
        console.log(result[i].name);
        console.log(result[i].region);
        console.log(result[i].subregion);
        console.log(result[i].population);
    }
}
