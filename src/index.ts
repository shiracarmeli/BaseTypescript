
const getAverage = (numbers :number[]):number=>
{
    let sum : number = 0;
    let count : number= 0;
    numbers.forEach(element =>
     {
    sum =sum+element;
    count=count+1;
    });
    return sum/count;
}

const getAmountOfPositive = (numbers :number[]):number=>
{
    let count : number= 0;
    numbers.forEach(element =>
         {
        if(element>0)
        count=count+1;
        });
        return count;
}

const sortList = (numbers :number[]):number[]=>
{
    return numbers.sort();
}


 let number:string|null = prompt('enter number (end in -1)', '1');
 let numArray: number[] = [];
 while(number!=null&&number!='-1')
{
 numArray.push(parseFloat(number));
  number = prompt('enter number (end in -1)', '1');
 }
 alert(`array  - ${numArray}`);
 alert(`average - ${getAverage(numArray)}`);
 alert(`positive - ${getAmountOfPositive(numArray)}`);
 alert(`sort - ${sortList(numArray)}`);



