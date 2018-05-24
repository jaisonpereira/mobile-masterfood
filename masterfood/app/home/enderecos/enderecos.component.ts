import { Component, NgModule, OnInit } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { DatePicker } from "ui/date-picker";
import { Page } from "ui/page";

// >> passing-parameters
@Component({
  moduleId: module.id,
  templateUrl: "./enderecos.component.html"
})
export class EnderecosComponent implements OnInit {
  currentMessage: string;

  constructor(private params: ModalDialogParams, private page: Page) {
    this.currentMessage = params.context;

    this.page.on("unloaded", () => {
      // using the unloaded event to close the modal when there is user interaction
      // e.g. user taps outside the modal page
      this.params.closeCallback();
    });
  }

  ngOnInit() {
    // let Message: string = <string>this.page.getViewById<string>("message");
    // datePicker.year = this.currentdate.getFullYear();
    // datePicker.month = this.currentdate.getMonth() + 1;
    // datePicker.day = this.currentdate.getDate();
    // datePicker.minDate = new Date(1975, 0, 29);
    // datePicker.maxDate = new Date(2045, 4, 12);
  }

  select() {
    // let datePicker: DatePicker = <DatePicker>this.page.getViewById<DatePicker>("datePicker");
    this.params.closeCallback(this.currentMessage);
  }
}