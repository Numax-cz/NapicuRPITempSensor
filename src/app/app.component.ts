import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Color, NgxChartsModule, ScaleType} from "@swimlane/ngx-charts";

const DEFAULT_CHAR_VIEW_DATA_FOR_DEV: CharTempsData = [
  {name: "Teplota", series: [
      { name: "1m", value: 22.4 },
      { name: "2m", value: 23.1 },
      { name: "3m", value: 21.8 },
      { name: "4m", value: 22.9 },
      { name: "5m", value: 21.2 },
      { name: "6m", value: 23.5 },
      { name: "7m", value: 24.0 },
      { name: "8m", value: 20.7 },
      { name: "9m", value: 22.2 },
      { name: "10m", value: 21.9 },
      { name: "11m", value: 24.3 },
      { name: "12m", value: 20.4 },
      { name: "13m", value: 23.8 },
      { name: "14m", value: 22.7 },
      { name: "15m", value: 21.5 },
      { name: "16m", value: 23.2 },
      { name: "17m", value: 22.1 },
      { name: "18m", value: 21.3 },
      { name: "19m", value: 24.5 },
      { name: "20m", value: 20.9 },
      { name: "21m", value: 22.4 },
      { name: "22m", value: 23.1 },
      { name: "23m", value: 21.8 },
      { name: "24m", value: 22.9 },
    ]}
]




export declare type CharTempsData = {name: string, series: {value: number, name: string}[] }[]
//Definice výchozí barvy křivky znázorňující vnitřní teplotu
export const CHAR_IN_TEMP_COLOR: string = "#00a8ff";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxChartsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
//Definice barev křivek pro graf
  public readonly char_color_schema: Color = {
    name: "color",
    selectable: false,
    group: ScaleType.Linear,
    domain: [
      CHAR_IN_TEMP_COLOR,
    ]
  };

  //TODO DOC
  public expanded = false;

  public viewVBC: [number, number] = [800, 300];


  //Funkce, která vrátí data naměřených teplot, které se mají zobrazit v grafu
  public get_char_view_data(): CharTempsData | null {
    return DEFAULT_CHAR_VIEW_DATA_FOR_DEV;
  }

}
