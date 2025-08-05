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
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  displayedColumns: string[] = ["definition","value"];
  dataSource = ELEMENT_DATA;
  isVisible: boolean[]=[false,false,false,false,false,false];

  checkElementOnView0(e: any) {
    if(e.visible) this.isVisible[0]=true;   
    
  }

  checkElementOnView1(e: any) {
    if(e.visible) this.isVisible[1]=true;
  }

  checkElementOnView2(e: any) {
    if(e.visible) this.isVisible[2]=true;
    
  }

  checkElementOnView3(e: any) {
    if(e.visible) this.isVisible[3]=true;
    
  }

  checkElementOnView4(e: any) {
    if(e.visible) this.isVisible[4]=true;
    
  }

  checkElementOnView5(e: any) {
    if(e.visible) this.isVisible[5]=true;
    
  }

}
