// var Likes = function(likers){ 
//     if (likers.length == 0 ){
//         return `no one likes this` ;
//     }
//     else if (likers.length == 1) {
//         return ` ${likers[0]} likes this` ;
//     }
//     else if (likers.length == 2) {
//         return ` ${likers[0]} and ${likers[1]} like this` ;
//     }
//     else if (likers.length == 3){
//         return ` ${likers[0]} , ${likers[1]} and ${likers[2]} like this` ;
//     }
//     else {
//         return ` ${likers[0]} , ${likers[1]} and ${likers.length - 2} like this`;
//     }
// }

// console.log(Likes(["Alex", "Jacob", "Mark", "Max"]));

// var Sum_multiple = function(Number){
//    var sum = 0 ; 
//     for (var i=0 ; i<Number ; i++) {
//         if (i%3==0 || i%5==0) {
//             sum += i ;
//         }
//     }
//     return sum ;
// }


// console.log(Sum_multiple(10));


// var Sum_Digits = function(number){
//     var sum = 0 ; 
    
//     while (number >9) {
//         sum=0;
//         while (number >9){
//             sum += number%10 ;
//             number = parseInt(number/10);
//         }
//         number= sum ;
//     }    
//     return number ; 
// }




// // function sumDigits(n) {
// //     return (n - 1) % 9 + 1;
// //   }

// console.log(Sum_Digits(942));

// var ODD_EVEN = function(array){
//      if (array[0]%2==0 && array[1]%2!=0 &&array[2]%2!=0 || 
//         array[0]%2!=0 && array[1]%2==0 &&array[2]%2!=0 || 
//         array[0]%2!=0 && array[1]%2!=0 &&array[2]%2==0 ||
//         array[0]%2!=0 && array[1]%2!=0 &&array[2]%2!=0) 
//       {
//         for (var i in array) {
//             if (array[i]%2 == 0) {
//                 return `${array[i]} the only even` ;
//             }
//         }
//       }

//       if (array[0]%2!=0 && array[1]%2==0 &&array[2]%2==0 || 
//         array[0]%2==0 && array[1]%2!=0 &&array[2]%2==0 || 
//         array[0]%2==0 && array[1]%2==0 &&array[2]%2!=0 ||
//         array[0]%2==0 && array[1]%2==0 &&array[2]%2==0) 
//       {
//         for (var i in array) {
//             if (array[i]%2 != 0) {
//                 return `${array[i]} the only odd` ;
//             }
//         }
//       }
// }


// console.log(ODD_EVEN([160, 3, 1719, 19, 11, 13, -21]));

// var reverse = function(string){
//     var mot=0;
//     for(var i in string){
//        if (string[i]===" "){
//           var j=i ;
//           while (mot<5 && string[j]!=" ") {
//             mot+=1;
//           }
//           if (mot>)
           
//        }



//     } 


// }


var count = 0 , x=3 ;
while (count < 3) {
    count = count + 1;
    y = (1+2*count) % 3;
    switch (y) {
        default : 
        case 0 : x = x-1; break;
        case 1 : x = x+5;
     }
}

console.log(x);