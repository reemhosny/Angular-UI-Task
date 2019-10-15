import { Component, OnInit } from "@angular/core";
import { User } from "../../model/User";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  user: User;
  constructor() {}

  ngOnInit() {
    this.user = {
      firstName: "Reem",
      lastName: "Hosny",
      age: 27,
      address: {
        street: "12 first monoaliza",
        city: "cairo",
        state: "Egypt"
      },
      // image: "http://lorempixel.com/600/600/people/6",
      image: "./assets/images/user.jpeg",
      about:
        "I'am reem hosny working as software engineer, I love reading, my family, searching",
      job: " Software Engineer ",
      coursesNumber: 5,
      workPointes: 8,
      certifications: 3,
      skills: 10,
      date: {
        day: 7,
        month: "FEBRUARY",
        year: 2018
      }
    };
  }
}
