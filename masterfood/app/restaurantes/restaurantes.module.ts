import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { CardapioComponent } from "~/restaurantes/cardapio-restaurante/cardapio.component";
import { RestaurantesRoutingModule } from "./restaurantes-routing.module";
import { RestaurantesComponent } from "./restaurantes.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        RestaurantesRoutingModule
    ],
    declarations: [
        RestaurantesComponent,
        CardapioComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class RestaurantesModule { }
