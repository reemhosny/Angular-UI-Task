import { Component, OnInit } from "@angular/core";
import { User } from "../../model/User";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  user: User;
  constructor() {}

  ngOnInit() {
    this.user = {
      firstName: "Reem",
      image: "./assets/images/user.jpeg"
    };
  }
}
