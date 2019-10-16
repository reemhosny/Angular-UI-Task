import { Component, OnInit } from "@angular/core";
import { User } from "../../model/User";
import { Content } from "../../model/Content";

@Component({
  selector: "app-dashboard-menue",
  templateUrl: "./dashboard-menue.component.html",
  styleUrls: ["./dashboard-menue.component.css"]
})
export class DashboardMenueComponent implements OnInit {
  user: User;
  contents: Content[];

  constructor() {}

  ngOnInit() {
    this.user = {
      coursesNumber: 5,
      workPointes: 8,
      certifications: 3,
      skills: 10
    };

    this.contents = [
      {
        Name: "Education",
        Percentage: 94,
        Done: 1,
        totalNumber: 7,
        pending: 2
      },
      {
        Name: "Work",
        Percentage: 54,
        Done: 5,
        totalNumber: 9,
        pending: 2
      },
      {
        Name: "Certifications",
        Percentage: 90,
        Done: 3,
        totalNumber: 4,
        pending: 1
      },
      {
        Name: "Skills",
        Percentage: 80,
        Done: 3,
        totalNumber: 5,
        pending: 2
      }
    ];
  }
}
