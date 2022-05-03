const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
};

//1


let winner;
let max = 0

for (const property in users) {
    if (users[property].skills.length > max) {
        max = users[property].skills.length;
        winner = property
    }
}
console.log(winner);


//2

let points50 = 0;
let loggedIn = 0;
for(const property in users) {
    if(users[property].isLoggedIn){
        loggedIn++;
    }
    if(users[property].points >= 50) {
        points50++;
    }
}
console.log(loggedIn,points50);


//3

let findMernStack = () => {
    let mern = ["MongoDB", "Express", "React", "Node"];
    let count =0;
    let mernStack =[];

    for (const dev of Object.values(users)){
        for(const skill of dev['skills']){
            if(mern.indexOf(skill)!= -1){
                count++;
            }
            if(count === 4){
                mernStack.push(dev);
            }
        }
    }
    return mernStack;
}

findMernStack().forEach(dev => console.log(dev));

  