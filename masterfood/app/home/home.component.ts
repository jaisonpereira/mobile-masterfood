import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { EventData } from "data/observable"; 
import { RouterExtensions } from "nativescript-angular/router/router-extensions";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { Button } from "ui/button";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {


    constructor(private routerExtensions: RouterExtensions) {
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    goToRestaurantes(args: EventData) {
        this.routerExtensions.navigate(["/restaurantes"], { clearHistory: true });
    }

}
