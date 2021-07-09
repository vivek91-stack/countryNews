import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  constructor() { }

  selectedCountry: any;
  title = "Title";
  author = "Author";
  description = "Description";
  published = "Published At";
  countries = [
    { id: 1, name: 'ae' },
    { id: 2, name: 'ar' },
    { id: 3, name: 'at' },
    { id: 4, name: 'au' },
    { id: 5, name: 'be' },
    { id: 6, name: 'bg' },
    { id: 7, name: 'br' },
    { id: 8, name: 'ca' },
    { id: 9, name: 'ch' },
    { id: 10, name: 'cn' },
    { id: 11, name: 'co' },
    { id: 12, name: 'cu' },
    { id: 13, name: 'cz' },
    { id: 14, name: 'de' },
    { id: 15, name: 'eg' },
    { id: 16, name: 'fr' },
    { id: 17, name: 'gb' },
    { id: 18, name: 'gr' },
    { id: 19, name: 'hk' },
    { id: 20, name: 'hu' },
    { id: 21, name: 'id' },
    { id: 22, name: 'ie' },
    { id: 23, name: 'il' },
    { id: 24, name: 'in' },
    { id: 25, name: 'it' },
    { id: 26, name: 'jp' },
    { id: 27, name: 'kr' },
    { id: 28, name: 'lt' },
    { id: 29, name: 'lv' },
    { id: 30, name: 'ma' },
    { id: 31, name: 'mx' },
    { id: 32, name: 'my' },
    { id: 33, name: 'ng' },
    { id: 34, name: 'nl' },
    { id: 35, name: 'no' },
    { id: 36, name: 'nz' },
    { id: 37, name: 'ph' },
    { id: 38, name: 'pl' },
    { id: 39, name: 'pt' },
    { id: 40, name: 'ro' },
    { id: 41, name: 'rs' },
    { id: 42, name: 'ru' },
    { id: 43, name: 'sa' },
    { id: 44, name: 'se' },
    { id: 45, name: 'sg' },
    { id: 46, name: 'si' },
    { id: 47, name: 'sk' },
    { id: 48, name: 'th' },
    { id: 49, name: 'tr' },
    { id: 50, name: 'tw' },
    { id: 51, name: 'ua' },
    { id: 52, name: 'us' },
    { id: 53, name: 've' },
    { id: 54, name: 'za' },

  ]

  // [HttpGet("[action]")]
  // public string[] GetCountryNews()
  // {
  //   return this.countries;
  // }

  ngOnInit(): void {
  }
  // onChange(deviceValue) {
  //   this.cities = this.countries.filter(x => x.id == deviceValue)[0];
  // }

}
