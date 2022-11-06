//break 
//when got break, it will not run the next step , it will getout from loop


for (var x=1; x<=10; x++){
if(x == 7){
break; //break
}
console.log(x)
}
 




// continue
//when got continue, it will just skip the current iteration  , and continue the next run in loop

for (var x=1; x<=10; x++){
    if (x == 4 ){
        continue;
    }
    console.log(x)
    }


    for (var x=1; x<=10; x++){
        if (x % 2 == 1 ){
            continue;
        }
        console.log(x)
        }
