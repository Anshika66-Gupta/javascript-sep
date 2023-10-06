//a = 5
//b = 10 
//document.getElementById('first').innerHTML = a+b 
//document.write(a+b )
//window.alert("Anshika Gupta")
//console.log(a+b)

//a = 12.2
//b = "Anshika Gupta"
//d = true
//c = a + b;
//document.write(c);
//document.write(typeof (c))
//document.write(typeof (d))



//document.write(button)



//let a = 20;
//let b = 12;
//const c = a + b;

//document.write(c)
//var a = 12.3452345;
//var b = 20;
//var c = a + b;

//window.alert(c)



//function myExample(a, b) {
//    return a * b;
//}
//let x = myExample(12, 34)

//document.write(x)



//const users = {
//    firstName: 'Anshika',
//    lastName: 'Gupta',
//    Age: 22,
//    Qualification: 'Software Engineer'
//};
//document.getElementById('first').innerHTML = users.firstName + " is a "
// + users.Qualification  


//const person = {
//    firsName: 'Anshika',
//    lastName: 'Gupta',
//    fullName: 
//        function () {
//            return this.firsName + " " + this.lastName;
//    }
//}
//const user = {
//    firsName: 'Akash',
//    lastName: 'Seervi',
//}

//let fullName = person.fullName.bind(user)

//document.getElementById('first').innerHTML = fullName();


//const people = ["Anshika", "Pratim", "Akul"];
//document.getElementById('first').innerHTML = people
//function myExample() {
//    people.push("Pavan");
//}
////let size = people.length;

//document.getElementById('first').innerHTML = people;


//let length = 30.2;
//let weight = 12.23;
 
//document.write(length * weight)


//let firstName = "Anshika";
//let lastName = "Gupta";

//document.write(firstName + " " + lastName)

//let x = true;
//let y = false;
//document.write(typeof x);


//let z = BigInt("12345678901234567890123456789901234567890")
//document.write(z)


//let a = 10
//let b = 20
//let c = a % b;
//document.write(c)

//function myExample(some){
//    document.getElementById("first").innerHTML = some
//}

//function myFirst() {
//    myExample("Hello First")
//}

//function mySecond() { 
//    myExample("Hello Second")
//}


//mySecond();
//myFirst();

//function myExample(some){
//  document.getElementById("first").innerHTML = some
//}

//function myCalculator(num1, num2, myCallback) {
//    let sum = num1 + num2;
//    myCallback (sum);
//}
//myCalculator(23, 32, myExample);
//setTimeout(myFunction, 3000);
//function myFunction() {
//    document.write("Hey Hi Everyone, Welcome to Devtown")
//}


//let myPromise = new Promise(function (myResolve, myReject) {
//    //producing code section
     
//    myResolve() //successful
//    myReject() // rejection
//})

//// consuming code section 

//myPromise.then(
//    function (value) {
//        // if code is successful
//    },
//    function (error) {
//       // if code is rejected
//    }
        
//);

//function myExample(some) { 
//    document.getElementById("first").innerHTML = some
//}
//let myPromise = new Promise(function (myResolve, myReject) { 
//    let x = 0;
//    if (x == 3) {
//        myResolve("Okay !!")
//    } else {
//        myReject("Error")
//    }
//})

//myPromise.then(
//    function (value) {
//        myExample(value);
//    },
//    function (error) {
//        myExample(error);
//    }
//myPromise.then(
    //    function (value) {
    //        myExample(value);
    //    },
    //    function (error) {
    //        myExample(error);
    //    }
    //)
//)

//Hardik 
//var str = new String( "Hardik" );
//var len=str.length;
//var age=19;
//var x = Number(prompt("Enter a Value",0));
//var y = Number(prompt("Enter a Value", 0));

//function myExample(some) { 
//    document.getElementById("first").innerHTML = some
//}
//let myPromise = new Promise(function (myResolve, myReject) { 
//    if (x+y == age+len) {
//        myResolve("Hello World")
//    } else {
//        myReject("Bye")
//    }
//})

//
//Yash 
//let ans = document.getElementById('demo');

//function calculate()
//{
//    let demo = new Promise(
//        function (resolve, reject)
//        {
//            try
//            {
//                let username = prompt("Enter your name: ");
//                let age = parseInt(prompt("Enter your age: "));
//                let x = parseInt(prompt("Enter a number: "));
//                let y = parseInt(prompt("Enter a number: "));
//                let res = age + username.length;
//                resolve(res > (x+y));
//            }
//            catch(error)
//            {
//                reject(error);
//            }
//        }
//    );
//    demo.then(check, display);
//}

//calculate();

//function check(a)
//{
//    console.log(a);
//    if(a)
//        display('Hello, World!');
//    else
//        display('Bye!');
//}

//function display(x)
//{
//    ans.innerHTML = x;
//}

//Krishti 
//function myExample(some) { 
//    document.getElementById("first").innerHTML = some
//}
//let myPromise = new Promise(function (myResolve, myReject) { 
//    let x = 19;
//    let y = "Krishti";
//    if (x == 19 && y == "Krishti") {
//        myResolve("Hello World !!")
//    } else {
//        myReject(" Bye !!")
//    }
//})

//myPromise.then(
//    function (value) {
//        myExample(value);
//    },
//    function (error) {
//        myExample(error);
//    }
//)


//Rimi 
//function myExample(some) {
//        document.getElementById("first").innerHTML = some;
//      }
//     
//      const myPromise = new Promise(function (myResolve, myReject) {
//        const name = "Rimi";
//        const x = 5;
//        const y = 10;
//        const age = 20;
//     
//        if (name.length + age < x + y) {
//          myReject("Bye!");
//        } else if (name.length + age > x + y) {
//          myResolve("Hello, world!");
//        } else {
//          myResolve("Error");
//        }
//      });
//     
//      myPromise
//        .then(function (value) {
//          myExample(value);
//        })
//        .catch(function (error) {
//          myExample(error);
//        });


async function myExample() {
    let myPromise = new Promise(function (resolve) {
        setTimeout(function () { 
            {
                resolve("I am teaching a Devtown Batch");
            }
        },5000)
    })
    document.getElementById("first").innerHTML = await  myPromise
};

myExample();