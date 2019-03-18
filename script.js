


//!!!!В названии  к полифилам добавлена 1 ,чтобы проверить их работоспособность

/***********************************************************************************************/

  if (!Array.prototype.every1) {//В случае ,если браузер не поддерживает функцию every /*1*/

    Array.prototype.every1=function(callbackfn, thisArg){
/*Полифил для функции every.*/
      for(let i=0;i<this.length;i++)
        { var el=callbackfn(this[i]);
            if(!el)
             return false
         return true
        }
  }
}

/***********************************************************************************************/

if (!Array.prototype.some1) {//В случае ,если браузер не поддерживает функцию some /*1*/
    Array.prototype.some1=function(callbackfn, thisArg){
/*Полифил для функции some.*/
      for(let i=0;i<this.length;i++)
        { var el=callbackfn(this[i]);
            if(el)
             return true
         return false
        }
  }
}


/***********************************************************************************************/

if (!Array.prototype.map1) {//В случае ,если браузер не поддерживает функцию map /*1*/
    Array.prototype.map1=function(callbackfn, thisArg){ 
    var mas=this.slice();
/*Полифил для функции map.*/
      for(let i=0;i<this.length;i++)
        { 
        mas[i]=callbackfn(mas[i]);
         return mas;
        }
       
  }
}

/***********************************************************************************************/

if (!Array.prototype.forEach1) {//В случае ,если браузер не поддерживает функцию forEach /*1*/
    Array.prototype.forEach1=function(callbackfn, thisArg){
/*Полифил для функции forEach.*/
      for(let i=0;i<this.length;i++)
        callbackfn(this[i]);
  }
}
/***********************************************************************************************/

if (!Array.prototype.find1) {//В случае ,если браузер не поддерживает функцию find /*1*/
    Array.prototype.find1=function(callbackfn, thisArg){ 
   
/*Полифил для функции find.*/
var mas=[];
var j=0;
      for(let i=0;i<this.length;i++)
        { 
          
        if(callbackfn(this[i])){
           { mas[j]=this[i];
            j++;
        }
         
        }
       
  }
  return mas;
 
}

}
/***********************************************************************************************/


if (!Array.prototype.flat1) {//В случае ,если браузер не поддерживает функцию flat /*1*/
  Array.prototype.flat1=function(depth){ 
 
/*Полифил для функции flat*/

var len=this.length;
var arr=this;
var new_arr=[];
var a=0;
  for(let i=0;i<len;i++){
    
    var el=arr[a];
    a++;
    if(typeof(el)=="object")
    {

      len+=(el.length);
      for(let j=0;j<el.length;j++)
      {

        new_arr[i]=el[j];
        i++;
      }
    }
    else{
      new_arr[i]=el;
    }

            
    }
    if(depth>1)
    {
      new_arr=new_arr.flat(depth-1)
    }
    return new_arr;
}
} 

if (!Array.prototype.reduce1) {//В случае ,если браузер не поддерживает функцию reduce /*1*/
  Array.prototype.reduce1=function(callbackfn,initialValue=0){ 
 
/*Полифил для функции reduce*/
len=this.length;
//accumulator, currentValue, index, array
var accumulator=initialValue;
var array=this;
for(let i=0;i<=len-1;i++)
{
  
  var currentValue=parseInt(this[i]);
  var index=i;
  accumulator=callbackfn(accumulator,currentValue, index, array);
  

}
return accumulator;

  }
}


/***********************************************************************************************/



function Condition(element,index,array){
/*Функция ,которая проверяет является ли переданный элемент массива больше шести*/
          return element>6;
      }
function Multip(element,index,array){
/*Функция ,которая умножает переданный элемент массива на 6*/
              return element*6;
          }
function Func(element,index,array){
/*Функция ,которая умножает переданный элемент массива на 6*/
            console.log("Функция вызвана для элемента ",element);
}


var obj=[11,6,8,7,8,9,45];


/*Проверка работоспособюности полифилов */
console.log(obj.every1(Condition,obj));

console.log(obj.some1(Condition,obj));

var m=obj.map1(Multip,obj);

console.log(obj.forEach1(Func,obj));

console.log(obj.find1(Condition,obj),obj)


var arr1 = [1, 2, [3, 4],[1,1,1,[3,4]]];

console.log(arr1.length);
console.log(arr1.flat1(2));


console.log([0, 1, 2, 3, 4].reduce1(function(accumulator, currentValue, index, array) {
  return accumulator + currentValue;
}));