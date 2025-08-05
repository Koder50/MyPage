import { Component } from '@angular/core';

@Component({
  selector: 'sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.scss']
})
export class SportComponent {

  sport:string[][]=[
    ['Sport',
    'Sport jest dla mnie sposobem na wyżycie się, pozbycie złych emocji, na nabranie dobrej kondycji oraz po prostu sprawia mi satysfakcję. W życiu przynajmniej wypróbowałem, a nawet ćwiczyłem dłużej takie dyscypliny:']
  ]

  disciplines:string[][]=[
    ['Piłka nożna',
    `Piłka nożna towarzyszy mi od małego. W czasie podstawówki, dopóki nauka na to pozwalała, grałem w piłkę nawet od śniadania do kolacji(w weekendy,wakacje) albo po szkole, czasami non-stop!
    </br>Dzięki niej nauczyłem się co to jest sport zespołowy oraz jak ważny dla ogólnego zdrowia jest sport.`],
    ['Narty',
    `Nart pierwszy raz spróbowałem w polskich górach. Od tego czasu zjeżdżałem na kilku wyjazdach w Polsce oraz na kilku wyjazdach we Włoszech.
     </br>Narciarstwo uczy pokory do przyrody oraz jest świetnym sposobem na poczucie się wolnym.`],
    ['Tenis ziemny',
    `Tenis ziemny rownież jest obecny w moim życiu dawno. Spróbowałem w drugiej klasie podstawówki i grałem kilka lat.`],
    ['Pływanie',
    `Pływanie początkowo miało być sposobem na zdrowy kręgosłup. Wraz z uczeniem się kraula, żabki, grzbietu i delfina(był czas, że potrafiłem motylka!) zaprzyjaźniałem się z tym sportem i trenowałem go amatorsko przez 
    dłuższy okres. Wtedy poprawiła się sylwetka, kondycja i samopoczucie!`],
    ['Windsurfing',
    `Windsurfing czekał na mnie dłużej niż poprzednie dyscypliny. Jednak mieszkając w Gdyni, tak blisko Półwyspu Helskiego, gdzie są najlepsze na świecie warunki do jego nauki,
    musiałem spróbować i tak się stało. Jest to sport bardzo zależny od przyrody(wiatr i morze/fale), ale nie ma nic tak przyjemnego jak ujarzmienie wiatru i morza
    i wykorzystanie go do płynięcia. A już ślizg to czysta ekstaza! Polecam każdemu!</br> Dla nieprzekonanych, jeśli uprawia się ten sport regularnie i dłużej, skutkuje on:
    mięśniami rąk(trzeba robić zwroty i walczyć nieraz z wiatrem), piękną opalenizną (woda odbija promienie słoneczne, co potęguje efekt) oraz ogromną frajdą.`],
    ['Kolarstwo',
    `Mój pierwszy rower był czterokołowy. Z wiekiem oczywiście przesiadłem się na dwukołowy.</br> W Trójmieście jest sporo tras rowerowych.
    Były wakacje,że trasę z domu do Gdańska, gdzie kończyła się najdłuższa trasa i z powrotem (w dużej części  wzdłuż morza)
    robiłem i po dwa razy na dzień. Licznik pokazywał wtedy około 75 km dziennie.
    </br>Mój rekord to 125 km rowerem jednego dnia z Gdyni na wybrzeże na tramwaj wodny rowerem, tramwajem na Hel i z powrotem przez cały Półwysep do Gdyni rowerem.
    </br>Dodatkowo byłem też na 3 różnych obozach rowerowych(Bornholm, Korsyka oraz w Polsce), szczególnie po drugim(b.ciepło, górki i po kilkadziesiąt km codziennie) trasy w Tricity nie robiły na mnie wrażenia.`],
    ['Koszykówka',
    `Koszykówka to kolejny sport zespołowy, który uprawiałem. Przez pewien okres sam dla siebie wytrwale ćwiczyłem celność rzutów, dynamikę dwutaktu czy zwody.`],
    ['Siatkówka',
    `Siatkówkę ćwiczyłem głównie w szkole na wfie. W przeciwieństwie do wielu innych dyscyplin sportu, tutaj wyniki meczów są zazwyczaj sprawiedliwe, nie ma przypadków
    - wygrywa ten, który sobie to przez całą partię uczciwie wypracował.`],
    ['Szachy',
    `Szachy wymagają strategicznego myślenia na kilka ruchów do przodu oraz skupienia.</br>
    Szachy poznałem w wieku kilku lat. Moim pierwszym nauczycielem był Tata. Później przez 2-3 lata chodziłem do klubu.
    Obecnie gram przy okazji, rekreacyjnie, a czynność ta sprawia mi przyjemność.`]
    
  ]

  isVisibleSport: boolean[]=[false];
  isVisibleDisciplines: boolean[]=[false,false,false,false,false,false,false,false,false,false,false,false,
                                  false,false,false,false,false,false,false,false,false,false,false,false,
                                  false,false,false,false,false,false,false,false,false,false,false,false];

  checkElementOnViewSport(e: any,index: number) {
    if(e.visible && index <=0) {
      switch(index) {
        case index: this.isVisibleSport[index]=true;
                                          break;
        default:                          break;
      }
    }      
  }

  checkElementOnViewDisciplines(e: any,index: number) {
    if(e.visible && index <=35) {
      switch(index) {
        case index: this.isVisibleDisciplines[index]=true;
                                          break;
        default:                          break;
      }
    }      
  }

}
