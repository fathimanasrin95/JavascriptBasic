//To find prime number or not

function primeNum(num){
    if(num<=1)
    {
        return false;
    }
    else {
         if(num%2 != 0||num==2)
         {
                return true;
            }
            else{
                return false;
            }
        }
    }

const  numArray=[2,4,5,6,7];       
const firstElement=numArray[0];
const isPrime =primeNum(firstElement);
if(isPrime)
{
    console.log('The first element ' +(firstElement) +' is a prime number');

}
else{
   console.log('The first element ' +(firstElement)+' is not a prime number');
}


//To find most frequent element in an array

let freqArr=[2,4,2,2,5,8];
let count=1;
let max=0;
let freqElement;
for(let i=0;i<freqArr.length;i++)
{
    if(freqArr[i]===freqArr[i+1])
    {
        count++;
        
    }
    else{
        count=1;
    }
    if(count>max){
        max=count;
        freqElement=freqArr[i];
    }
}
console.log("most frequent element of this array is "  + freqElement );


//To find odd or even

for(let i=0;i<=15;i++){
    let num1=i;
    if(num1==0)
    {
         console.log(num1+"is Neither odd nor even number");
    }
    else{
        oddOrEven(num1);
    }
}

function oddOrEven(element)
{
    if(element%2===0){
                console.log(element +"is even number");
            }
            else{
                console.log(element+ "is odd number");
            }

}


//find sum of square of elements in an array
function sumOfsqr(arr)
{
    let sum=0;
    for(i=0;i<arr.length;i++)
    {
        sum+=arr[i]*arr[i];
    }
    return sum;
}

const arrayEle=[1,2,3,4,5];
console.log('the sum of squares of array is '+sumOfsqr(arrayEle));