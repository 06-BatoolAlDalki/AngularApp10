import { Component } from '@angular/core';
export interface user {
  name: string,
  age: number,
  color : string

}
@Component({
  selector: 'app-lecture2',
  templateUrl: './lecture2.component.html',
  styleUrl: './lecture2.component.css'
})
export class Lecture2Component {




  email = "ali@gmail.com"

  name1 :string = "sarah"

  display : boolean = false;


  num12 : number = 12
  image1 ="data:image/jpeg;base64,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"

  fruits = ["apple", "banana", " orange"];
  changeName() {
    this.name1 = "Ali";
  }


  color = "red111";

  numAhmad =10


  name: string = "batool"

  num: number = 3.14

  urlImg : string = "data:image/jpeg;base64,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"

  onchange() {
    this.name= "Hadeel"
  }

  usersArray = [{
    name: "rama",
    grade: 15,
    food: "pizza"
  },

    {
      name: "rahaf",
      grade: 19,
      food: "pizza"
    },
    {
      name: "bassam",
      grade: 10,
      food: "pizza"
    }]


  userObj = {
    name: "rama",
    age: 22,
    color : "yellow"
  }

}