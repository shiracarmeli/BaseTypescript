function getAverage(numbers :number[]) :number
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

function getAmountOfPositive(numbers :number[]) :number
{
let count : number= 0;
numbers.forEach(element =>
     {
    if(element>0)
    count=count+1;
    });
    return count;
}

function sortList(numbers :number[]) :number[]
{
let sortArr : number[]= [];
sortArr = numbers.sort();
return sortArr;

}

//const numArray: number[] = [-1, 4, 1, 8];
//console.log(sortList(numArray));
 let number = prompt('enter number (end in -1)', '1');
const numArray: number[] = [];
 while(number!=null&&number!='-1')
{
 numArray.push(parseFloat(number));
  number = prompt('enter number (end in -1)', '1');
 }
 alert(`array  - ${numArray}`);
 alert(`average - ${getAverage(numArray)}`);
 alert(`positive - ${getAmountOfPositive(numArray)}`);
 alert(`sort - ${sortList(numArray)}`);



