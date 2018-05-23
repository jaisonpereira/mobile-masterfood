import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { RestauranteService } from "./restaurantes.service";
@Component({
    selector: "Restaurantes",
    moduleId: module.id,
    templateUrl: "./restaurantes.component.html",
    providers: [RestauranteService]
})
export class RestaurantesComponent implements OnInit {
    restaurantes: any;
    constructor(private restaurantService: RestauranteService) { }

    ngOnInit(): void {
        try {
            this.restaurantService.findByEndereco().subscribe((restaurantes) => this.restaurantes = restaurantes);
        } catch (err) {
           alert(err);
        }
    }

    templateSelector = (item: any, index: number, items: any) => {
        return item.type || "cell";
    }
    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onItemTapFirstList(args) {
        console.log(args.index);
    }

    onItemTapSecondList(args) {
        console.log(args.index);
    }

    onItemTapThirdList(args) {
        console.log(args.index);
    }

}
