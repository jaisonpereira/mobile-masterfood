import { AfterViewInit, Component } from "@angular/core";
import * as app from "application";
import { RouterExtensions } from "nativescript-angular/router";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { RestauranteService } from "./restaurantes.service";
@Component({
    selector: "Restaurantes",
    moduleId: module.id,
    templateUrl: "./restaurantes.component.html",
    providers: [RestauranteService]
})
export class RestaurantesComponent implements AfterViewInit {
    restaurantes: any;
    star: any;
    isBusy: boolean = true;

    constructor(private restaurantService: RestauranteService, private router: RouterExtensions) { }

    ngAfterViewInit(): void {
        try {
            this.restaurantService.findByEndereco().subscribe((restaurantes) => {
                this.isBusy = false;
                this.restaurantes = restaurantes;
            }
            );
            this.star = "star-full";
        } catch (err) {
            alert(err);
            this.isBusy = false;
        }
    }

    templateSelector = (item: any, index: number, items: any) => {
        return item.type || "cell";
    }
    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    goToCardapio(args) {
        this.router.navigate([
            "restaurantes/cardapio",
            this.restaurantes[args.index]._id
        ]);
    }

}
