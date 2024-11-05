import {Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Color, NgxChartsModule, ScaleType} from "@swimlane/ngx-charts";
import {CharTempsData, IApiData} from "./char";
import { CommonModule } from '@angular/common';
import {curveCatmullRom, CurveFactory} from "d3-shape";
import {ApiDataService} from "./api.service";

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
  //Data pro zobrazení dat
  private char_data: IApiData[] | null  = null;

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

  constructor(private service: ApiDataService) {
    this.service.getData().subscribe((value: IApiData[]) => {
      this.char_data = value
    });
  }

  //Funkce, která vrátí data naměřených teplot, které se mají zobrazit v grafu
  public get_char_view_data(): CharTempsData | null {
    return this.char_data ? [
      {
        name: "Teplota",
        series: this.char_data
      }
    ] : null
  }
}
