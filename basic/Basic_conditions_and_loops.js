/*
 if else condition
let age = 18;

if (age < 27 ) {
    console.log("you can marry");
} else {
    console.log("you cannot marry");
    
}

key value pairss

const dict = {
    hello : "namaste",
    we : "us",
    me : "i'm",
}
dict['yes'] = 'no'
dict['code'] = '5454545'
console.log(dict);

// switch case

let x = 'strawberry';
switch(x){
    case "apple":
        console.log('x is an apple');
        break;
        case "banana":
            console.log('x is an banana');
            break;
            case "berry":
                console.log('x is an berry');
                break;
                case "pear":
                    console.log('x is an pear');
                    break;
                    case "cherry":
                        console.log('x is an cherry');
                        break;
                        default: 
                        console.log("we dont have a fruit you entered ");
                    }

                    conditional rendering / ternary operator
                    
                    let a = 50;
                    let b = 60;
                    
                    let max = (a > b) ? a:b;
                    console.log(max);

                    for loop
                    
                    for (let a = 0; a < 10; a++) {
                        console.log(a);
                    }
                    
                    // for in loop
                    let info ={
                        name:'thor',
                        age:'1500',
                        address:'titan'
                    }    
                    for (data in info){
                        console.log(data);
                        console.log(info[data]);
                    }
                    
                    
                    // for of 
                    let number = [1,2,3,4,5];
                    let info = [
                        {
                            name:'thor'
                        },
                        {
                            age:'1500'
                            
                        },
                        {
                            address:'asgard'
                            
                        }
                    ]
                    
                    let str = "Hemendra Singh Thapa"
                    let num = "464699485983458438"
                    
                    for (const thor of str ){
                        console.log(thor);
}
while loop

let i = 1;

while(i<=10){
    console.log(i);
    i++;
    
}

let input = "";
while (input !== "yes" && input !== "no") {
    input = prompt("Yes or No");
}
*/