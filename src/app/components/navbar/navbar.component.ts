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

    // document.getElementById("searchIcon").onclick = function() {
    //   document.getElementById("search").classList.add("visible");
    //   document.getElementById("clear").classList.add("visible");
    //   document.getElementById("search").focus();
    //   document.getElementById("searchIcon").classList.add("hide");
    // };
    // document.getElementById("clear").onclick = function() {
    //   document.getElementById("searchIcon").classList.remove("hide");
    //   document.getElementById("search").classList.remove("visible");
    //   document.getElementById("clear").classList.remove("visible");
    // };

    function searchToggle(obj, evt) {
      var container = $(obj).closest(".search-wrapper");
      if (!container.hasClass("active")) {
        container.addClass("active");
        evt.preventDefault();
      } else if (
        container.hasClass("active") &&
        $(obj).closest(".input-holder").length == 0
      ) {
        container.removeClass("active");
        // clear input
        container.find(".search-input").val("");
      }
    }
  }
}
