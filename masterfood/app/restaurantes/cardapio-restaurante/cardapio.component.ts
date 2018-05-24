import { AfterViewInit, Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import * as app from "application";
import { RouterExtensions } from "nativescript-angular/router";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { RestauranteService } from "../restaurantes.service";
@Component({
    selector: "Cardapio",
    moduleId: module.id,
    templateUrl: "./cardapio.component.html",
    providers: [RestauranteService]
})
export class CardapioComponent implements AfterViewInit, OnInit {

    restaurante: any;
    star: any;
    isBusy: boolean = true;
    idRestaurante: string;

    constructor(
        private route: ActivatedRoute,
        private restauranteService: RestauranteService,
        private router: RouterExtensions,
    ) {

    }

    ngOnInit(): void {
        this.route.params.subscribe((params) => {
            this.idRestaurante = params.idRest;
        });
    }

    ngAfterViewInit(): void {
        try {
            this.restauranteService.findById(
                this.idRestaurante
            ).subscribe((restaurante) => {
                this.isBusy = false;
                this.restaurante = restaurante;
            }
            );
            this.star = "star-full";
        } catch (err) {
            alert(err);
            this.isBusy = false;
        }
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    voltar() {
        this.route
    }

}
