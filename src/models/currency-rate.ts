export interface CurrencyRate {
  base: string;
  date: Date;
  rates: {[key:string]: number};
}
