import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { RestaurantesComponent } from "./restaurantes.component";

const routes: Routes = [
    { path: "", component: RestaurantesComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class RestaurantesRoutingModule { }
