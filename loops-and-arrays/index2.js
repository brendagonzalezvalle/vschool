var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]
  
  for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
      if (peopleWhoWantToSeeMadMaxFuryRoad[i].age > 18 )
      console.log (peopleWhoWantToSeeMadMaxFuryRoad[i].age + " Old enough")
      else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age< 18)
      console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].age + " not old enough")

  }

  