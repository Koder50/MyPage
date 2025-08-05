import { Component } from '@angular/core';

export interface PersonalData {
  definition: string;
  value: string;
}

const ELEMENT_DATA: PersonalData[] = [
  {definition: "Imię i nazwisko:",value: "Karol Góralczyk"},
  {definition: "Data urodzenia:",value: "24 maja 1989"},
  {definition: "Miejsce urodzenia:",value: "Gdańsk"},
];

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  displayedColumns: string[] = ["definition","value"];
  dataSource = ELEMENT_DATA;
  isVisible: boolean[]=[false,false];

  checkElementOnView0(e: any) {
    if(e.visible) this.isVisible[0]=true;   
    
  }

  checkElementOnView1(e: any) {
    if(e.visible) this.isVisible[1]=true;
  }

}
