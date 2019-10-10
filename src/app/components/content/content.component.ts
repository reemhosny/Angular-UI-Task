import { Component, OnInit } from "@angular/core";
import { User } from "../../model/User";
import { Content } from "../../model/Content";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.css"]
})
export class ContentComponent implements OnInit {
  users: User;
  content: Content;

  // $("#new1").click(function(){
  //   $(".nav").css("border", "1px solid yellow");
  //   });

  constructor() {}

  ngOnInit() {
    // this.content = {
    //   Name: "Education",
    //   Percentage: 98,
    //   Done: 3,
    //   totalNumber: 9,
    //   pending: 2
    //   // img:"./assets/images/circle.svg"
    // };
  }
}
