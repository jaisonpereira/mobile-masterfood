import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { EnderecosComponent } from "./enderecos/enderecos.component";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        HomeRoutingModule
    ],
    declarations: [
        EnderecosComponent,
        HomeComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    entryComponents: [EnderecosComponent]
})
export class HomeModule { }
