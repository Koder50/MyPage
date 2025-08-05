import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

export interface PeriodicElement {
  photo1: string;
}

export interface PeriodicElementMiniature {
  photo1: string;
  photo2: string;
  photo3: string;
  photo4: string;
  photo5: string;
  photo6: string;
  photo7: string;
  photo8: string;
}


@Component({
  selector: 'nature',
  templateUrl: './nature.component.html',
  styleUrls: ['./nature.component.scss']
})
export class NatureComponent {

  order: number=1;

  ELEMENT_DATA: PeriodicElement[] = [
    {photo1: 
      `<img class="mainImage" src="./../../assets/nature_graphics/Przyroda1-kopia.JPG" title = "Przyroda 1">` },
  ];

  ELEMENT_DATA_MINIATURE: PeriodicElementMiniature[] = [
    {photo1: 
      `<img src="assets/nature_graphics/Przyroda1_miniatura.JPG" title="Przyroda 1">`, 
      photo2: 
      `<img src="assets/nature_graphics/Przyroda2_miniatura.JPG" title="Przyroda 2">`,
      photo3: 
      `<img src="assets/nature_graphics/Przyroda3_miniatura.JPG" title="Przyroda 3">`,
      photo4: 
      `<img src="assets/nature_graphics/Przyroda4_miniatura.JPG" title="Przyroda 4">`,
      photo5: 
      `<img src="assets/nature_graphics/Przyroda5_miniatura.JPG" title="Przyroda 5">`,
      photo6: 
      `<img src="assets/nature_graphics/Przyroda6_miniatura.JPG" title="Przyroda 6">`,
      photo7: 
      `<img src="assets/nature_graphics/Przyroda7_miniatura.JPG" title="Przyroda 7">`,
      photo8: 
      `<img src="assets/nature_graphics/Przyroda8_miniatura.JPG" title="Przyroda 8">`,},
  ];

  ELEMENT_DATA_MINIATURE_SECOND: PeriodicElementMiniature[] = [
      {photo1: 
        `<img src="assets/nature_graphics/Przyroda9_miniatura.JPG" title="Przyroda 9">`, 
        photo2: 
        `<img src="assets/nature_graphics/Przyroda10_miniatura.JPG" title="Przyroda 10">`,
        photo3: 
        `<img src="assets/nature_graphics/Przyroda11_miniatura.JPG" title="Przyroda 11">`,
        photo4: 
        `<img src="assets/nature_graphics/Przyroda12_miniatura.JPG" title="Przyroda 12">`,
        photo5: 
        `<img src="assets/nature_graphics/Przyroda13_miniatura.JPG" title="Przyroda 13">`,
        photo6: 
        `<img src="assets/nature_graphics/Przyroda14_miniatura.JPG" title="Przyroda 14">`,
        photo7: 
        `<img src="assets/nature_graphics/Przyroda15_miniatura.JPG" title="Przyroda 15">`,
        photo8: 
        `<img src="assets/nature_graphics/Przyroda16_miniatura.JPG" title="Przyroda 16">`,}
  ];

  nature:string[][]=[
    ['Przyroda',
    'Poniżej zamieszczam galerię zdjęć z moich spotkań z przyrodą:']
  ];

  isVisibleNature: boolean[]=[false];
  isVisibleGallery: boolean[]=[false,false,false];
  isVisibleMiniatures: boolean[]=[false,false];

  displayedColumns: string[] = ["photo1"];
  displayedColumnsMiniature: string[] = ["photo1","photo2","photo3","photo4","photo5","photo6","photo7","photo8",];
  displayedColumnsMiniatureSecond: string[] = ["photo1","photo2","photo3","photo4","photo5","photo6","photo7","photo8",];
  dataSource = this.ELEMENT_DATA;
  dataSourceMiniature= this.ELEMENT_DATA_MINIATURE;
  dataSourceMiniatureSecond = this.ELEMENT_DATA_MINIATURE_SECOND;

  checkElementOnViewNature(e: any,index: number) {
    if(e.visible && index <=0) {
      switch(index) {
        case index: this.isVisibleNature[index]=true;
                                          break;
        default:                          break;
      }
    }      
  }

  checkElementOnViewGallery(e: any,index: number) {
    if(e.visible && index <=0) {
      switch(index) {
        case index: this.isVisibleGallery[index]=true;
                                          break;
        default:                          break;
      }
    }      
  }

  checkElementOnViewMiniatures(e: any,index: number) {
    if(e.visible && index <=1) {
      switch(index) {
        case index: this.isVisibleMiniatures[index]=true;
                                          break;
        default:                          break;
      }
    }      
  }

  switchImage() {

    let image: any = document.getElementsByClassName("mainImage")[0];
    if(this.order==1) {
      image.src="./../../assets/nature_graphics/Przyroda1-kopia.JPG";
      image.title="Przyroda 1";
    }
    else if(this.order==2){
       image.src="./../../assets/nature_graphics/Przyroda2-kopia.JPG";
       image.title="Przyroda 2";
    }
    else if(this.order==3) {
      image.src="./../../assets/nature_graphics/Przyroda3-kopia.JPG";
      image.title="Przyroda 3";
   }
    else if(this.order==4) {
      image.src="./../../assets/nature_graphics/Przyroda4-kopia.JPG";
      image.title="Przyroda 4";
   }
    else if(this.order==5) {
      image.src="./../../assets/nature_graphics/Przyroda5-kopia.JPG";
      image.title="Przyroda 5";
   }
    else if(this.order==6) {
      image.src="./../../assets/nature_graphics/Przyroda6-kopia.JPG";
      image.title="Przyroda 6";
   }
    else if(this.order==7) {
      image.src="./../../assets/nature_graphics/Przyroda7-kopia.JPG";
      image.title="Przyroda 7";
   }
    else if(this.order==8) {
      image.src="./../../assets/nature_graphics/Przyroda8-kopia.JPG";
      image.title="Przyroda 8";
   }
    
  }

  switchImageSecond() {

    let image: any = document.getElementsByClassName("mainImage")[0];
    if(this.order==9) {
      image.src="./../../assets/nature_graphics/Przyroda9-kopia.JPG";
      image.title="Przyroda 9";
    }
    else if(this.order==10){
       image.src="./../../assets/nature_graphics/Przyroda10-kopia.JPG";
       image.title="Przyroda 10";
    }
    else if(this.order==11) {
      image.src="./../../assets/nature_graphics/Przyroda11-kopia.JPG";
      image.title="Przyroda 11";
   }
    else if(this.order==12) {
      image.src="./../../assets/nature_graphics/Przyroda12-kopia.JPG";
      image.title="Przyroda 12";
   }
    else if(this.order==13) {
      image.src="./../../assets/nature_graphics/Przyroda13-kopia.JPG";
      image.title="Przyroda 13";
   }
    else if(this.order==14) {
      image.src="./../../assets/nature_graphics/Przyroda14-kopia.JPG";
      image.title="Przyroda 14";
   }
    else if(this.order==15) {
      image.src="./../../assets/nature_graphics/Przyroda15-kopia.JPG";
      image.title="Przyroda 15";
   }
    else if(this.order==16) {
      image.src="./../../assets/nature_graphics/Przyroda16-kopia.JPG";
      image.title="Przyroda 16";
   }
    
  }
}
