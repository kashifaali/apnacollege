// ____________________________First Problem______________________________________________________

// let arr = [12,3,4,5,6,73,24];
// let arr1 = [];
// let num = 73;

// for(let i=0; i<=arr.length; i++){
//     if(arr[i] == num){
        
//     }
//     else{
//         arr1.push(arr[i]);
//     }
// }

// for(let i=0; i<arr1.length; i++){
//     console.log(arr1[i]);
// }

// _________________________Second Problem_______________________________________________________

// let num = 23434;
// let count = 0; 
// let copy = num;

// while (copy>0){
//     count++;
//     copy = Math.floor(copy/10);
// }

// console.log(count);

// _________________________Third Problem_______________________________________________________

//  let num = 123475;
//  let copy = 0;
// let result = 0;

// while(num>0){
//     copy = num%10;
//     num = Math.floor(num/10);
//     result = result + copy;
// }

// console.log(result);

// _________________________Fourth Problem_______________________________________________________

// let num = 10;
// let num1 = num;
// while(num>1){
//     num1 = num1 * (num-1);
//     num--;
// }
// console.log(num1);

// _________________________Fifth Problem_______________________________________________________

let arr=[2,5,10,4,2,7,1,9];
let largest=0;
for(let i =0; i<=arr.length;i++)
    {
        if(largest<arr[i])
            {largest=arr[i];}
    }
    console.log(largest);