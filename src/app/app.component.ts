import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Color, NgxChartsModule, ScaleType} from "@swimlane/ngx-charts";
import {CharTempsData} from "./char";
import { CommonModule } from '@angular/common';

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

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxChartsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public static readonly CHAR_IN_TEMP_COLOR: string = "#00a8ff";
  //Nastavení barev grafu
  public readonly char_color_schema: Color = {
    name: "color",
    selectable: false,
    group: ScaleType.Linear,
    domain: [
      AppComponent.CHAR_IN_TEMP_COLOR,
    ]
  };

  public expanded: boolean = false;

  //Funkce, která vrátí data naměřených teplot, které se mají zobrazit v grafu
  public get_char_view_data(): CharTempsData | null {
    return [];
  }
}
