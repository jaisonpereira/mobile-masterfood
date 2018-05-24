import { Component, OnInit, ViewContainerRef } from "@angular/core";
import * as app from "application";
import { EventData } from "data/observable";
import { ModalDialogOptions, ModalDialogParams, ModalDialogService } from "nativescript-angular/modal-dialog";
import { RouterExtensions } from "nativescript-angular/router/router-extensions";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { Page } from "tns-core-modules/ui/page/page";
import { Button } from "ui/button";
import { EnderecosComponent } from "./enderecos/enderecos.component";

@Component({
    selector: "Home",
    moduleId: module.id,
    providers: [ModalDialogService],
    templateUrl: "./home.component.html"
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
    message: any;

    constructor(private routerExtensions: RouterExtensions,
                private modalService: ModalDialogService, private vcRef: ViewContainerRef) {
        this.setNewMessage();
    }

    ngOnInit(): void {
        // Init your component properties here.
        this.message = "teste Jason";
    }

    goToRestaurantes(args: EventData) {
        this.routerExtensions.navigate(["/restaurantes"], { clearHistory: true });
    }

    showModal() {
        this.createModelView().then((result) => {
            this.message = result;
        }).catch((error) => this.handleError(error));
    }

    private createModelView(): Promise<any> {
        const today = new Date();
        const options: ModalDialogOptions = {
            viewContainerRef: this.vcRef,
            context: today.toDateString(),
            fullscreen: true
        };

        return this.modalService.showModal(EnderecosComponent, options);
    }

    private setNewMessage() {
        this.message = " jaison " + new Date();
    }

    private handleError(error: any) {
        alert("Please try again!");
        console.dir(error);
    }

}
