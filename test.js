// Изменить тип элементов массива(Строку на число и наоборот)
// Как сделать короче я,честно, не понял

SomeArray = [1,2,'3',4,'5','6'];
console.log(SomeArray);

function transform(array) {
    array.forEach(Element => {
        if(typeof(Element) === "string") {
            let ElementIndex = array.indexOf(Element);
            array.splice(ElementIndex,1,Number(Element));
        } else {
            let ElementIndex = array.indexOf(Element);
            array.splice(ElementIndex,1,String(Element));
        }
    })
}
transform(SomeArray);
console.log(SomeArray);


//Дано 2 массива, склеить в 1

 const FirstNumbers = [1,2,3];
 const SecondNumbers = ['abc','def','ghi'];
 let ResultArray = [];
 function ArrayConcat(FirstArray,SecondArray) {
     return ResultArray = FirstArray.concat(SecondArray);
 }
 console.log(ArrayConcat(FirstNumbers,SecondNumbers));


//На вход:строка и число символов, если число больше кол-ва символов - обрезаем + ...

function clipping(SomeString,BorderNumber) {
    if (SomeString.length <= BorderNumber) {
        return SomeString;
    } else {
        return SomeString.substring(0,length-(length-BorderNumber)) + '...';
    }
}
console.log(clipping('ABCDEFGH',8));
