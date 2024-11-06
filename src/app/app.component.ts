import {Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Color, NgxChartsModule, ScaleType} from "@swimlane/ngx-charts";
import {CharTempsData, IApiData, ICharSeries} from "./char";
import { CommonModule } from '@angular/common';
import {curveCatmullRom, CurveFactory} from "d3-shape";
import {ApiDataService} from "./api.service";


const DEBUG_CHAR_DATA_TEMP: ICharSeries[] = [
  { value: "23", name: "14:30" },
  { value: "24", name: "14:31" },
  { value: "25", name: "14:32" },
]

const DEBUG_CHAR_DATA_HUM: ICharSeries[] = [
  { value: "80", name: "14:30" },
  { value: "70", name: "14:31" },
  { value: "90", name: "14:32" },
]

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxChartsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  //Nastavení křivky
  public curve_basis: CurveFactory = curveCatmullRom;

  private char_data_temp: ICharSeries[] | null  = [];
  private char_data_hum: ICharSeries[] | null  = [

  ];

  public expanded: boolean = false;

  //Nastavení barev grafu
  public readonly char_color_schema: Color = {
    name: "color",
    selectable: false,
    group: ScaleType.Linear,
    domain: [
      "#00a8ff"
    ]
  };

  public readonly char_color_schema_hum: Color = {
    name: "color",
    selectable: false,
    group: ScaleType.Linear,
    domain: [
      "#ff0044"
    ]
  };

  constructor(private service: ApiDataService) {
    this.service.getData().subscribe((value: IApiData[]): void => {
      this.char_data_temp = value.map((item: IApiData): ICharSeries => {
        const timePart: string = item.cas.split(" ")[1];
        const hoursAndMinutes: string = timePart.slice(0, 5);
        return { value: item.teplota, name: timePart};
      }) ?? null;

      this.char_data_hum = value.map((item: IApiData): ICharSeries => {
        const timePart: string = item.cas.split(" ")[1];
        const hoursAndMinutes: string = timePart.slice(0, 5);
        return { value: item.vlhkost, name: timePart};
      }) ?? null;
    });
  }

  public get_char_view_data_temp(): CharTempsData | null {
    return this.char_data_temp ? [
      {
        name: "Teplota",
        series: this.char_data_temp
      },
    ] : null
  }

  public get_char_view_data_hum(): CharTempsData | null {
    return this.char_data_hum ? [
      {
        name: "Vlhkost",
        series: this.char_data_hum
      },
    ] : null
  }
}
