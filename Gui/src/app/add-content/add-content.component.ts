import { Component, OnInit } from '@angular/core';
import {MatBottomSheetRef} from '@angular/material/bottom-sheet';


@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.scss']
})
export class AddContentComponent implements OnInit {

  constructor(private _bottomSheetRef: MatBottomSheetRef<AddContentComponent>) {}

  openLink(event: MouseEvent): void {
    if((<HTMLInputElement>event.target).innerHTML === "Add new ingredients to your pantry"){
      console.log("Adding Ingredient")
    }

    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  ngOnInit(): void {
  }

}
