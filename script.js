let json = {
    id: 1,
    name: "xyz",
    age: 20,
    gender: "Female"
}
let array = [];
array.push(json);
// for loop => json can be iterate only in for in loop not in normal loop
//we have to push it in array format to itearte over for and for of loop

for (let key in json) {
    console.log(key, json[key])
}
for (var i = 0; i < array.length; i++){
    console.log(array[i]) // => prints whole object
    console.log(array[i].id, array[i].name, array[i].age, array[i].gender)
}
for (let item of array) {
    console.log(item) //=>prints whole object
    console.log(item.id, item.name, item.age, item.gender)
}

let resumeData = {
    name: "kuzhali",
    age: 26,
    gender: "Female",
    education: [{id:1,degree:"10th", institute:"St.Anne's"}, {id:2,degree:"12th", institute:"St.Anne's"}, {id:3,degree:"B.E", institute:"DCE"}],
    workExperience: [{ id: 1, organization: "xyz", exp: 3 }, { id: 2, organization: "tyu", exp: 2 }, { id: 3, organization: "fgh", exp: 1 }],
    skills: ["js", "ts", "html", "css", "angular"],
    about: "Myself kuzhali learning MERN stack development in guvi to become a full stack developer and to make a good career"
}
console.log("My resume data" , resumeData)
