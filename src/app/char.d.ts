export declare type IApiData = {
  teplota: string,
  cas: string,
  vlhkost: string
}

export declare type ICharSeries = {
  name: string,
  value: string
}

export declare type CharTempsData = {name: string, series: ICharSeries[] }[]

