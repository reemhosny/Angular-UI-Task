import { Component, OnInit } from "@angular/core";
import { User } from "../../model/User";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"]
})
export class AboutComponent implements OnInit {
  user: User;
  constructor() {}

  ngOnInit() {
    this.user = {
      about:
        "I'am reem hosny working as software engineer.I love reading, my family, searching.Passionate about my career, I’m willing to put in all the effort it takes to enhance my skills and experience,I’ve attached a copy of my resume that details my projects and experience in software development.",
      date: {
        day: 7,
        month: "FEBRUARY",
        year: 2018
      }
    };
  }
}
