//Math
console.log((Math.PI)*(Math.pow(4,2)));


var date=new Date().getHours()
console.log(date);
if(date>6&&date<12){
    document.body.style.backgroundColor="orange"
    alert('Sabahiniz Xeyir');
}else if(date>12&&date<18){
    document.body.style.backgroundColor="green"
    alert('Gunortaniz Xeyir');
}else if(date>18&&date<6){
    document.body.style.backgroundColor="dark blue"
    alert('Axsaminiz Xeyir');
}else{

}