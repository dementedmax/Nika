import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface AutoPart {
  number: string;
  nomenclature: string;
  manufacturer: string;
  mark: string;
  vcode: string;
  orinumber: string;
  minbalance: number;
  balance: number;
  purprice: number;
  price: number;
}

const AUTOPART_DATA: AutoPart[] = [
  {number: '1622',
    nomenclature: 'Закладная под саморез крыла 2108',
    manufacturer: '',
    mark: '',
    vcode: '00356-7180400-009-3',
    orinumber: '.',
    minbalance: 5,
    balance: 0,
    purprice: 20,
    price: 30,
  },
  {
    number: '30260',
    nomenclature: 'Лампа T20, W21W 12V, 21W цоколь W3x16d',
    manufacturer: 'LYNXAUTO',
    mark: 'UNIVERSAL',
    vcode: 'L15521',
    orinumber: '',
    minbalance: 3,
    balance: 4,
    purprice: 300,
    price: 400,
  },
  {
    number: 'A-023015',
    nomenclature: 'Вилка сцепления VW PASSAT3 88--',
    manufacturer: 'WXQP',
    mark: 'VAG',
    vcode: '360869',
    orinumber: '02A 141 709A',
    minbalance: 3,
    balance: 2,
    purprice: 2000,
    price: 2700,
  },
  {
    number: 'A-005329',
    nomenclature: 'Поршневая группа к-т A, VW 1.8 AAM STD [81,00x1,50x1,75x3,00]',
    manufacturer: 'WXQP',
    mark: 'VAG',
    vcode: '312405',
    orinumber: 'KS=93 876 600',
    minbalance: 1,
    balance: 1,
    purprice: 6700,
    price: 9000,
  },
  {
    number: 'A-365560',
    nomenclature: 'Катушка зажигания HYUNDAI, KIA G4KC, G4KE, G4KJ, G4KD, G4NA 2.0-2.4 SANTA FE CM, DM, SONATA NF, SORENTO XM 09--',
    manufacturer: 'ERA',
    mark: 'HYUNDAI/KIA',
    vcode: '880320',
    orinumber: '27300-3F100',
    minbalance: 1,
    balance: 1,
    purprice: 8000,
    price: 10500,
  },
  {
    number: '12892',
    nomenclature: 'Отражатель в передний бампер VW GOLF3 (с туманками) L',
    manufacturer: 'DEPO',
    mark: 'VAG',
    vcode: '441-1610L',
    orinumber: '1H0 941 779',
    minbalance: 5,
    balance: 1,
    purprice: 700,
    price: 1000,
  },
  {
    number: '1796',
    nomenclature: 'Амортизатор передний (стойка) масленный ВАЗ 2110 R',
    manufacturer: 'СААЗ',
    mark: 'ВАЗ',
    vcode: '21100-2905402-03',
    orinumber: '21100-2905402-03',
    minbalance: 1,
    balance: 1,
    purprice: 11000,
    price: 13400,
  },
  {
    number: 'A-32729',
    nomenclature: 'Прокладка поддона A100C4 91--, A80B4 91-- 2.6-2.8  нижняя',
    manufacturer: 'EC',
    mark: 'VAG',
    vcode: '078 103 610A',
    orinumber: '078 103 610A',
    minbalance: 1,
    balance: 1,
    purprice: 500,
    price: 1000,
  },
  {
    number: 'A-031982',
    nomenclature: 'Лягушка стоп-сигнала AUDI A4, A6, VW PASSAT5 01--, Q7, TOUAREG',
    manufacturer: 'FACET',
    mark: 'VAG',
    vcode: '7.1229',
    orinumber: '1K2 945 511 RDW; 7L6 945 511',
    minbalance: 1,
    balance: 1,
    purprice: 1500,
    price: 2500,
  },
  {
    number: 'A-059579',
    nomenclature: 'Датчик положения распредвала AUDI A4, A6, VW PASSAT5 1.8-2.8',
    manufacturer: 'JP GROUP',
    mark: 'VAG',
    vcode: '1191400500',
    orinumber: '058 905 161B',
    minbalance: 1,
    balance: 1,
    purprice: 4500,
    price: 5700,
  }
];

@Component({
  selector: 'app-db-page',
  templateUrl: './db-page.component.html',
  styleUrls: ['./db-page.component.css']
})
export class DbPageComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['number','nomenclature','manufacturer','mark','vcode','orinumber','minbalance','balance','purprice','price','summ'];
  dataSource = new MatTableDataSource<AutoPart>(AUTOPART_DATA);

  ngOnInit() {
  }

}
