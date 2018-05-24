import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { CardapioComponent } from "~/restaurantes/cardapio-restaurante/cardapio.component";
import { RestaurantesComponent } from "./restaurantes.component";

const routes: Routes = [
    { path: "", component: RestaurantesComponent },
    { path: "cardapio/:idRest", component: CardapioComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class RestaurantesRoutingModule { }
