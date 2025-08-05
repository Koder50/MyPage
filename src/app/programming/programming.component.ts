import { Component } from '@angular/core';

@Component({
  selector: 'programming',
  templateUrl: './programming.component.html',
  styleUrls: ['./programming.component.scss']
})
export class ProgrammingComponent {

  tasksFunctional:string[][]=[
      ['wykrywanie kolizji dwóch odcinków na zadanej planszy, zadanie "MWP3_2C1 - Stonogi",',
      'zamiana liczb całkowitych w systemie dziesiętnym na system od dwójkowego do szesnastkowego, do wyboru, zadanie "SYS - Systemy pozycyjne",',
      'dodawanie dwóch liczb w tym samym systemie pozycyjnym z zakresu dwójkowy-szesnastkowy, nawet do 500 cyfr na liczbę, zadanie "SMWP_109 - Suma dwóch liczb",',
      'obliczenie długości liczby w dowolnym systemie pozycyjnym, zadanie "FR_08_12 - POMOCY!",'],
      ['zamiana liczb z przedziału 1..10^12 na słowa, zadanie "JLITOSL - Liczba na słowo",',
      'zadanie "FR_10_06 - Problem ośmiu hetmanów",',
      'wyznaczanie rankingu skoczków narciarskich według wielu kolejnych priorytetów, kryteria zbliżone lub identyczne z prawdziwymi zawodami, wykorzystanie struktur i sortowania, zadanie "FR_06_03 - Skoki narciarskie",',
      'wyznaczenie rankingu zawodników według wielu kolejnych priorytetów,wykorzystanie struktur i sortowania, zadanie "FR_04_06 - Ranking",'],
      ['wyznaczenie zwycięzcy lub zwycięzców, użycie struktur i sortowania, zadanie "FR_05_04 - parkrun",',
      'przykładowa obsługa rejestracji i logowania do portalu, zadanie "FR_07_03 - Register & Login",',
      'wyznaczenie w kolejności alfabetycznej brakujących słów z oryginalnej piosenki, użycie biblioteki vector i algorithm, zadanie "MWP8_1B - Budka suflera",',
      'sprawdzanie poprawności Sudoku, zadanie "SUDOKUC - Sprawdzanie sudoku",'],
      ['napisanie funkcjonalności bardzo podobnej do gry na komórki 2048, zadanie "AL_22_04 - 2048",',
      'sortowanie przez zliczanie, zadanie "JZLICZ - Zliczacz liter",',
      'sprawdzanie układów w pokerze, zadanie "AL_06_02 - Jackpot Poker",',
      'obliczanie liczby stron książki na podstawie liczby cyfr użytych do numerowania stron, zadanie "AL_05_06 - Zecer",'],
      ['wyszukiwanie binarne, zadanie "AL_27_03 - Ukryty skarb",',
      'wypisanie nut na pięciolinii według wzoru, zadanie "AL_06_03 - Doremifasola",',
      'wyznaczanie liczby dróg łazika w zależności od planszy, zadanie "AL_23_05 - Łazik",',
      'Odwrotna Notacja Polska, zadanie "FR_05_16 - Stos i arytmetyka",'],
      ['sprawdzenie czy jest możliwa podróż z punktu A do punktu B z 1 przesiadką, zadanie "AL_09_05 - Wycieczka 1",',
      'wyznaczanie przebytej odległości przy pomocy śladu GPS, zadanie "FR_06_05 - Dystans",',
      'wyznaczanie czewiany trójkąta, zadanie "FR_06_06 - Bajtek i trójkąt",',
      'wyznaczanie czasu, w którym bramki na autostradzie będą otwarte, w zależności od korków, zadanie "AL_23_01 - Dekret",'],
      ['wyznaczenie liczby operacji potrzebnych do utworzenia anagramu, zadanie "AL_23_02 - Czas na anagramy",',
      'wyznaczanie prędkości statku na podstawie czasu w dwóch punktach, zadanie "AL_10_11 - Log burtowy",',
      'rozpoznawanie silnych haseł dla systemu informatycznego, zadanie "FR_05_02 - Moc hasła",',
      'zadanie "AL_03_02 - Najdłuższy spójny podciąg ciągu binarnego",'],
      ['wyznaczanie najdłuższego spójnego podciągu różnowartościowego, zadanie "FR_02_17 - Najdłuższy podciąg różnowartościowy",',
      'wyznaczanie najdłuższego spójnego podciągu arytmetycznego, zadanie "AL_20_02 - Ciąg arytmetyczny",',
      'wyznaczanie ilości punktów kratowych należących do koła, zadanie "AL_12_02 - Punkty w kole",',
      'wyznaczanie maksymalnego zarobku pracownika, zadanie "FR_03_05 - Zarobek doskonały",'],
      ['szyfrowanie szyfrem Cezara, zadanie "JSZYCER - Szyfr Cezara",',
      'szyfrowanie i deszyfrowanie, zadanie "WI_SZYFR - Szyfr Gronsfelda",',
      'zadanie "PASCHAR5 - Szyfrowanie ROT13",',
      'rozpoznawanie liczb pierwszych (metoda sita Erastonesa), zadanie "PRIME_T - Liczby Pierwsze",'],
      ['najmniejsza wspólna wielokrotność, zadanie "PRZEDSZK - Przedszkolanka",',
      'największy wspólny dzielnik, zadanie "PP0501A - NWD",',
      'wczytanie nieokreślonej ilości liczb całkowitych, zadanie "SUMA - Suma",',
      'wyznaczanie ilości pierwiastków rzeczywistych równania kwadratowego, zadanie "ROWNANIE - Równanie kwadratowe",'],
      ['symulacja stosu, zadanie "STOS - Stos",',
      'kalkulator obsługujący pięć operacji, z pamięcią, zadanie "CALC2 - Kalkulator 2",',
      'rozstrzygniecie wyborów według kryterium Concordeta, zadanie "AL_16_10 - Wybory",',
      `konwersja ciągu liter na kod alfabetu Morse'a, zadanie "AL_20_01 - Alfabet Morse'a",`],
      ['wyliczanie prędkości średniej, zadanie "VSR - Prędkość średnia",',
      'zadanie "TRN - Transponowanie macierzy",',
      'zadanie "JROWLIN - Równanie liniowe",',
      'zadanie "MWP3_2B1 - Równanie",'],
      ['zadanie "JWSPLIN - Współliniowość punktów",',
      'weryfikacja poprawności PESELu, zadanie "JPESEL - Pesel",',
      'weryfikacja formularza, zadanie "KC005 - Formularz",',
      'zadanie "WI_IDEN - Skracanie identyfikatorów",'],
      ['zadanie "WI_TRIGR - Zastępowanie trójznaków",',
      'zadanie "MWP2_3C - Permutacje",',
      'poruszanie się w obrębie pięciu wymiarów, zadanie "AL_14_02 - Taksówka na Manhattanie - reaktywacja",',
      'zadanie "FR_01_02 - Dodawanie ułamków",'],
      ['sprawdzenie kuponu z zakładów bukmacherskich, zadanie "AL_31_01 - Jasio w szponach hazardu",',
      'wyliczanie liczby zdań w opowiadaniu, zadanie "FR_06_02 - O Janku Wędrowniczku",',
      'weryfikacja poprawności podanej daty, zadanie "FR_06_07 - Format daty",',
      'miara kąta pomiędzy wskazówkami minutową i godzinową zegara, zadanie "FR_06_08 - Miara kąta",'],
      ['naprawienie danych w bazie danych po wirusie, zadanie "AL_31_03 - Dziwny wirus...",',
      'złamanie szyfru, zadania z serii "Enigma w wersji light", np. "AL_30_02",',
      'wykorzystanie STL: stosu, kolejki i kolejki priorytetowej, zadanie "FR_07_11 - Mieszanie tablicy",',
      'zliczanie czerwonych mrówek, zadanie "FR_07_12 - Czerwone mrówki",'],
      ['porównanie listy zadań dwóch osób i wypisanie posortowanej listy wspólnych zrobionych zadań, zadanie "CZEMU - Czemu nie!",',
      'narysowanie w konsoli plastrów miodu, zadanie "FR_07_14 - Plaster miodu",',
      'zadanie "UPS12_A - Pangram",',
      'zadanie "ML1_B - Złożoność czasowa".']
      ]

  otherTasksFunctional:string[][]=[
      ['wyznaczanie dnia tygodnia dla daty z zakresu 1.01.1600r. do 31.12.2299r. (w C++),',
      'algorytm Karatsuby dla mnożenia bardzo dużych liczb (w C++),',
      'dodawanie, odejmowanie, mnożenie i dzielenie bardzo dużych liczb (w C++),',
      'lista jednokierunkowa zaimplementowana (w C++),'],
      ['drzewo binarne zaimplementowane (w C++),',
      'gra wąż z krawędziami (w C++),',
      'gra kółko i krzyżyk (w Java).']]

    tasksObjective:string[][]=[
      ['zestaw 2, zadanie 1,',
      'zestaw 2, zadanie 2,',
      'zestaw 2, zadanie 3,',
      'zestaw 5, zadanie 1,',
      'zestaw 5, zadanie 2.'],
    ]

    otherTasksObjective:string[][]=[
      ['długie zadanie 6.'],
    ]

    tasksPages:string[][]=[
      ['przeglądana strona - wczesna wersja,',
      'pionowe menu,',
      'rozwijane poziome menu.']
    ]

    tasksJavascript:string[][]=[
      ['kalkulator,',
      'lista zakupów,',
      'kółko i krzyżyk,',
      'śledzenie,',
      'tetris,',
      'zegar.']
    ]

    tasksJquery:string[][]=[
      ['2048,',
      'plan zajęć.']
    ]

    tasksAngular:string[][]=[
      ['przeglądana strona,',
      'lista zakupów,',
      'Grafikuj (program w stylu Paint, ładniejszy, bardziej zaawansowany),',
      'kółko i krzyżyk,'],
      ['gra Pamięć,',
      'tetris,',
      'kalkulator,',
      'minutnik,'],
      ['stoper,',
      'zegar,',
      'proste komentarze,',
      'aplikacja z rekrutacji - Państwa (dane pobierane z serwera),']
    ]

    tasksJob:string[][]=[
      ['opieka nad aplikacjami internetowymi od strony frontu ( np. tworzenie nowych funkcjonalności widocznych dla użytkownika, wdrażanie nowego wyglądu, zgłaszanie aplikacji firmowych w sklepie oraz utrzymanie kodu ),',
      'odświeżony wygląd listy typów pokoi dla danej daty dla kolejnych hoteli ( zgodnie z życzeniami klientów ),',
      'stworzenie funkcjonalności dodatków dla obiektów hotelowych,',
      'zgłaszanie w sklepie Google Play aplikacji firmowych dla konkretnych klientów,',
      'uruchamianie specjalnie dedykowanych, standardowych aplikacji internetowych dla nowych hoteli.']
    ]
  
  isVisibleFunctional: boolean[]=[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
  isVisibleObjective: boolean[]=[false,false];
  isVisiblePages: boolean[]=[false];
  isVisibleJavascript: boolean[]=[false];
  isVisibleJquery: boolean[]=[false];
  isVisibleAngular: boolean[]=[false,false,false];
  isVisibleJob: boolean[]=[false];

  checkElementOnViewFunctional(e: any,index: number) {
    if(e.visible && index <=18) {
      switch(index) {
        case index: this.isVisibleFunctional[index]=true;
                                          break;
        default:                          break;
      }
    }      
  }

  checkElementOnViewObjective(e: any,index: number) {
    if(e.visible && index<=1) {
      switch(index) {
        case index: this.isVisibleObjective[index]=true;
                                          break;
        default:                          break;
      }
    }      
  }

  checkElementOnViewPages(e: any,index: number) {
    if(e.visible && index<=0) {
      switch(index) {
        case index: this.isVisiblePages[index]=true;
                                          break;
        default:                          break;
      }
    }      
  }

  checkElementOnViewJavascript(e: any,index: number) {
    if(e.visible && index<=0) {
      switch(index) {
        case index: this.isVisibleJavascript[index]=true;
                                          break;
        default:                          break;
      }
    }      
  }

  checkElementOnViewJquery(e: any,index: number) {
    if(e.visible && index<=0) {
      switch(index) {
        case index: this.isVisibleJquery[index]=true;
                                          break;
        default:                          break;
      }
    }      
  }

  checkElementOnViewAngular(e: any,index: number) {
    if(e.visible && index<=2) {
      switch(index) {
        case index: this.isVisibleAngular[index]=true;
                                          break;
        default:                          break;
      }
    }      
  }

  checkElementOnViewJob(e: any,index: number) {
    if(e.visible && index<=0) {
      switch(index) {
        case index: this.isVisibleJob[index]=true;
                                          break;
        default:                          break;
      }
    }  
  }  

}