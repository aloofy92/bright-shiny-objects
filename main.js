// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘
// functionName: createUser
// parameters: 2 strings (firstName, lastName)
/* return: object {

    firstName: string
    lastName: string
}
we are putting firstName and lastName into an object
the object created is called let user = {}. Then return the 
user otherwie the code wont work. Console.log the desired user info
in this case I inputed my own first and last name as an example
and someone elses first and last name to show my function 
works and isnt hardcoded.
*/

function createUser(firstName, lastName){
    let user = {
        firstName: firstName, // key-value pair
        lastName: lastName, 
    }
    return user;
}
console.log(createUser('Brianna', 'Hickerson'));
console.log(createUser('Mesi', 'Kaleziq'));



/*
// functionName setAge
// parameters: user(object), age(number)

user = {
    firstName: string
    lastName: string
}

return:

user = {
    firstName: string
    lastName: string
}

*/

function setAge(user, age){
    user.age = age;
   return user;
}

console.log(setAge(createUser('Brianna', 'Hickerson'),30));



let newUser = setAge( {firstName: 'Joe', lastName: 'Jackson'}, 30);

console.log(newUser);






function incrementAge(user){
    user.age = setAge - 1;
    return user;
}
console.log(incrementAge(createUser('Brianna', 'Hickerson'),30));





/*
functionName: fixCar
parameters: car

car{
    make: string
    model: string
    year: number
    needsMaintenance: boolean
}

return carObject;

*/

function fixCar(car){
    car.needsMaintenance = false;
    return car;
}
console.log(fixCar({
    make: 'Ford',
    model: 'Mustang',
    year: 1969 ,
    needsMaintenance: true
}));




/*
function addGrades
parameters: student object and grades array

student = {
    name: string
    email: string
    grades: array numbers

}

grades param - array of numbers

return student object
*/

function addGrades(student, newGrades){
    student.grades = student.grades.concat
    (newGrades);

    return student;
}
let student = {
    name: 'Brianna Hickerson',
    email: 'brehickerson@yahoo.com',
    grades: [90]
}
let newGrades = [88, 70, 90];
console.log(addGrades(student, newGrades))


// or COULDVE DONE THIS FOR LOOP insteat student.grades = student.grades.conct
//   for(let i = 0; i < newGrades.length; i++){
//    student.grades.push(newGrades[i]);
// }



function getDataType (object, key){
     
    let keytype = key
  
        keytype = typeof object[key];
    
    return keytype;
}
console.log(getDataType);





function createNewTodo(title, isComplete){
    let newTodo = {
        title: title,
        isComplete: isComplete
    };
    return newTodo;
}

function addTodo(todos, newTodo){
    todos.push(newTodo);
    return todos;
}

let todos = [
     {
        title: 'Get Gas',
        isComplete: false
    },
    {
        title: 'Get bread',
        isComplete: true
    }

];

let gas = createNewTodo('Get Gas', false);
let bread = createNewTodo('Get bread', true);
let mom = createNewTodo('call mom', false);
addTodo(todos,mom);
console.log(addTodo(todos,mom));



let playlist = {
    title: 'My Jamzz',
    duration: 7,
    songs: [
        {
            title: "Teas Sun",
            artist: "Khruangbin",
            duration: 4
        },
        {
            title: "Teas Sun",
            artist: "Khruangbin",
            duration: 4
        }
        
    ]
}
function newSong(title, artist, duration){
    let song = {
        title: title,
        artist: artist, 
        duration: duration
    };

    return song;
}

function addSong(playlist, song){
    playlist.duration = playlist.duration + song.duration;
    playlist.songs.push(song);
    return playlist;
}
let friendSong = newSong('OldFriends', "Pinegrove", 3);
console.log(friendSong);
addSong(playlist, friendSong);




function createReportCard(lowestGrade, highestGrade, averageGrade, grades){
    let reportCard = {
        lowestGrade: lowestGrade,
        highestGrade: highestGrade,
        averageGrade: averageGrade,
        grades: grades
    };

    return reportCard;
}
let theReportCard = createReportCard(75, 95, 86, [88, 70, 90]);
console.log(theReportCard);



function updateReportCard(reportCard, grade){
    reportCard.lowestGrade = Math.min(reportCard.grades);
    reportCard.highestGrade = Math.max(reportCard.grades);
    reportCard.averageGrade = avgGrade(reportCard.grades);
    reportCard.grades.push = (grade);
    return reportCard;

    function avgGrade(arr){
        let sum = 0;
        for(let i = 0; i < arr.length; i++){
            sum = sum + arr[i];
        }
        return (sum / arr.length);
    }
}
updateReportCard(theReportCard, 93);
console.log(theReportCard);


// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │                         
// │                                                                         │
function isDef(arg) {
    return arg === 'function';
}
const pass = () => undefined;
// │                                                                         │
module.exports.createUser = isDef(typeof createUser) ? createUser : pass;
module.exports.setAge = isDef(typeof setAge) ? setAge : pass;
module.exports.incrementAge = isDef(typeof incrementAge) ? incrementAge : pass;
module.exports.fixCar = isDef(typeof fixCar) ? fixCar : pass;
module.exports.addGrades = isDef(typeof addGrades) ? addGrades : pass;
module.exports.getDataType = isDef(typeof getDataType) ? getDataType : pass;
module.exports.addTodo = isDef(typeof addTodo) ? addTodo : pass;
module.exports.addSong = isDef(typeof addSong) ? addSong : pass;
module.exports.updateReportCard = isDef(typeof updateReportCard) ? updateReportCard : pass;
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘
