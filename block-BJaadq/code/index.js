// NOTE: You can not use reduce methods to solve this exercise

function countAllPeople() {
  let count = 0;
  got.houses.forEach((house) => {
    count += house.people.length
  });
  return count;
}


function peopleByHouses() {
  let obj = {};
  got.houses.forEach((house) => {
    obj[house.name] = house.people.length;

  });
  return obj;
}


function everyone() {
  let array = [];
  got.houses.forEach((house) => {
    for(let i = 0; i < house.people.length; i++){
      array.push(house.people[i].name);
    }
  });
  return array;
}


function nameWithS() {
  let sName = [];
  got.houses.forEach((v)=>{
    v.people.forEach((e)=>{
        if ( e.name.includes("S") && e.name.includes("s") ){
          sName.push(e.name)
        }
    })
return sName;
  })
}


function nameWithA() {
  let aName = [];
  got.houses.forEach((v)=>{
    v.people.forEach((e)=>{
        if ( e.name.includes("A") && e.name.includes("a") ){
          aName.push(e.name)
        }
    })
return aName;
  })
}


function surnameWithS() {
    let surnameS = [];
    got.houses.forEach((v)=>{
      v.people.forEach((e)=>{
        let surName = e.name.split(" ")[1];
        if ( surName.startsWith("S") ){
          surnameS.push(e.name)
        }
      })
    })
    return surnameS;
  }


function surnameWithA() {
  let surnameA = [];
  got.houses.forEach((v) => {
    v.people.forEach((e) => { 
      let surName = e.name.split(" ")[1];
      if (surName.startsWith("A")) {
        surnameA.push(e.name)
      }
    })
  })
  return surnameA;
}


function peopleNameOfAllHouses() {
  let obj = {};
  got.houses.forEach((house) => {
   obj[house.name] = house.people.map((person) => person.name)
    })
  return obj;
  }

// Testing your result after writing your function
console.log(countAllPeople());
// Output should be 33

console.log(peopleByHouses());
// Output should be
//{Arryns: 1, Baratheons: 6, Dothrakis: 1, Freys: 1, Greyjoys: 3, Lannisters: 4,Redwyne: 1,Starks: 8,Targaryens: 2,Tullys: 4,Tyrells: 2}

console.log(everyone());
// Output should be
//["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "King Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy", "Margaery (Tyrell) Baratheon", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn", "Edmure Tully", "Brynden Tully", "Olenna (Redwyne) Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(nameWithS(), 'with s');
// Output should be
// ["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "Stannis Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn"]

console.log(nameWithA());
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon", "Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Yara Greyjoy", "Margaery Baratheon", "Loras Tyrell", "Catelyn Stark", "Lysa Arryn", "Olenna Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(surnameWithS(), 'surname with s');
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow", "Catelyn Stark"]

console.log(surnameWithA());
// Output should be
// ["Lysa Arryn", "Jon Arryn"]

console.log(peopleNameOfAllHouses());
// Output should be
// {Arryns: ["Jon Arryn"], Baratheons: ["Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon"], Dothrakis: ["Khal Drogo"], Freys: ["Walder Frey"], Greyjoys: ["Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy"], Lannisters: ["Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon"], Redwyne: ["Olenna Tyrell"], Starks: ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow"], Targaryens: ["Daenerys Targaryen", "Viserys Targaryen"], Tullys: ["Catelyn Stark", "Lysa Arryn", "Edmure Tully", "Brynden Tully"], Tyrells: ["Margaery Baratheon", "Loras Tyrell"]}
