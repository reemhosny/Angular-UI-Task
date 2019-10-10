import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UserComponent } from "./components/user/user.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { ContentComponent } from "./components/content/content.component";
import { AboutComponent } from "./components/about/about.component";
import { FooterComponent } from "./components/footer/footer.component";
import { DashboardMenueComponent } from "./components/dashboard-menue/dashboard-menue.component";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NavbarComponent,
    ContentComponent,
    AboutComponent,
    FooterComponent,
    DashboardMenueComponent
  ],
  imports: [BrowserModule, AppRoutingModule, AngularFontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
