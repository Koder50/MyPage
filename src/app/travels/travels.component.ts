import { Component } from '@angular/core';
import { Maps } from '@syncfusion/ej2-angular-maps';

export interface PeriodicElement {
  photo1: string;
  photo2: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {photo1: 
    `<img src="assets/travels_graphics/Kos1 — kopia.JPG" alt="Kos 1"  loading="lazy" class="photo">
    </br>
    <figcaption class="signature">Kos 1</figcaption>`, 
   photo2: 
  `<img src="assets/travels_graphics/Kos2 — kopia.JPG" alt="Kos 2" loading="lazy" class="photo">
  </br>
  <figcaption class="signature">Kos 2</figcaption>`},
  {photo1: 
    `<img src="assets/travels_graphics/Kos3 — kopia.JPG" alt="Kos 3"  loading="lazy" class="photoHorizontal">
    </br>
    <figcaption class="signature">Kos 3</figcaption>`, 
   photo2: 
  `<img src="assets/travels_graphics/Kos6 — kopia.JPG" alt="Kos 4" loading="lazy" class="photoHorizontal">
  </br>
  <figcaption class="signature">Kos 4</figcaption>`},
  {photo1: 
    `<img src="assets/travels_graphics/Kos5 — kopia.JPG" alt="Kos 5"  loading="lazy" class="photo">
    </br>
    <figcaption class="signature">Kos 5</figcaption>`, 
   photo2: 
  `<img src="assets/travels_graphics/Kos4 — kopia.JPG" alt="Kos 6" loading="lazy" class="photo">
  </br>
  <figcaption class="signature">Kos 6</figcaption>`},
  {photo1: 
    `<img src="assets/travels_graphics/Kos7 — kopia.JPG" alt="Kos 7"  loading="lazy" class="photo">
    </br>
    <figcaption class="signature">Kos 7</figcaption>`, 
   photo2: 
  `<img src="assets/travels_graphics/Kos8 — kopia.JPG" alt="Kos 8" loading="lazy" class="photo">
  </br>
  <figcaption class="signature">Kos 8</figcaption>`}
];

const ELEMENT_DATA_MORROCCO: PeriodicElement[] = [
  {photo1: 
    `<img src="assets/travels_graphics/Maroko1 — kopia.JPG" alt="Maroko 1"  loading="lazy" class="photo">
    </br>
    <figcaption class="signature">Maroko 1</figcaption>`, 
   photo2: 
  `<img src="assets/travels_graphics/Maroko2 — kopia.JPG" alt="Maroko 2" loading="lazy" class="photo">
  </br>
  <figcaption class="signature">Maroko 2</figcaption>`},
  {photo1: 
    `<img src="assets/travels_graphics/Maroko3 — kopia.JPG" alt="Maroko 3"  loading="lazy" class="photo">
    </br>
    <figcaption class="signature">Maroko 3</figcaption>`, 
   photo2: 
  `<img src="assets/travels_graphics/Maroko5 — kopia.JPG" alt="Maroko 4" loading="lazy" class="photo">
  </br>
  <figcaption class="signature">Maroko 4</figcaption>`},
  {photo1: 
    `<img src="assets/travels_graphics/Maroko4 — kopia.jpg" alt="Maroko 5"  loading="lazy" class="photo">
    </br>
    <figcaption class="signature">Maroko 5</figcaption>`, 
   photo2: 
  `<img src="assets/travels_graphics/Maroko6 — kopia.JPG" alt="Maroko 6" loading="lazy" class="photo">
  </br>
  <figcaption class="signature">Maroko 6</figcaption>`}
];

@Component({
  selector: 'travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.scss']
})
export class TravelsComponent {

  travels:string[][]=[
    ['Podróże',
    'Jedną z moich pasji są podróże. W czasie swojego życia odwiedziłem wiele miejsc w Polsce jak i zagranicą. Poniżej zamieszczam gdzie byłem oraz przedstawiam zbiorczą mapkę:',
    'Poniżej zamieszczam dwie galerie z dwóch miejsc, które odwiedziłem: ']
  ];

  placesPoland:string[][]=[
    ['Gdynia, Sopot, Gdańsk,'],
    ['Dębki, Władysławowo, Chałupy,'],
    ['Jurata, Jastarnia, Hel,'],
    ['Wdzydze, Gołuń, Kościerzyna,'],
    ['Bydgoszcz,Toruń, Inowrocław,'],
    ['Olsztyn, Mikołajki,'],
    ['Suwałki,'],
    ['Warszawa,'],
    ['Częstochowa,'],
    ['Kraków, Rabka, Zakopane,'],
    ['Kłodzko, Kudowa Zdrój, Zieleniec,'],
    ['Wrocław,'],
    ['Poznań,'],
    ['Szczecin.']
  ];

  placesLithuania:string[][]=[
    ['Wilno, Troki.']
  ];

  placesBelarus:string[][]=[
    ['Lida.']
  ];

  placesSlovakia:string[][]=[
    ['Dolny Kubin.']
  ];

  placesGermany:string[][]=[
    ['Berlin, Monachium.']
  ];
  
  placesDenmark:string[][]=[
    ['Bornholm.']
  ];
  
  placesNetherlands:string[][]=[
    ['Rotterdam, Haga.']
  ];
  
  placesGreatBritain:string[][]=[
    ['Oxford.']
  ];
  
  placesFrance:string[][]=[
    ['Korsyka.']
  ];
  
  placesSpain:string[][]=[
    ['Majorka.']
  ];
  
  placesItaly:string[][]=[
    ['Canazei, San Vigilio.']
  ];
  
  placesGreece:string[][]=[
    ['Kreta, Rodos, Kos.']
  ];

  placesCyprus:string[][]=[
    ['Cypr.']
  ];

  placesMorrocco:string[][]=[
    ['Agadir, Marrakech.']
  ];

  placesTurkey:string[][]=[
    ['Side, Manavgat.']
  ];

  isVisibleTravels: boolean[]=[false];
  isVisiblePlaces: boolean[]=[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
  isVisibleGallery: boolean[]=[false,false,false,false,false,false,false,false,false];

  displayedColumns: string[] = ["photo1","photo2"];
  dataSource = ELEMENT_DATA;

  displayedColumnsMorrocco: string[] = ["photo1","photo2"];
  dataSourceMorrocco = ELEMENT_DATA_MORROCCO;

  checkElementOnViewTravels(e: any,index: number) {
    if(e.visible && index <=0) {
      switch(index) {
        case index: this.isVisibleTravels[index]=true;
                                          break;
        default:                          break;
      }
    }      
  }

  checkElementOnViewPlaces(e: any,index: number) {
    if(e.visible && index <=15) {
      switch(index) {
        case index: this.isVisiblePlaces[index]=true;
                                          break;
        default:                          break;
      }
    }      
  }

  checkElementOnViewGallery(e: any,index: number) {
    if(e.visible && index <=8) {
      switch(index) {
        case index: this.isVisibleGallery[index]=true;
                                          break;
        default:                          break;
      }
    }      
  }
}
