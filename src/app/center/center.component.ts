import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { People as Person } from '../models/People';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit {

  constructor() { }
  myControl = new FormControl();
  options = new Array<string>();

  people: Array<Person> = [
    {name: "Татьяна Петровна", date: new Date(),info : "Очень полезная инфа" },
    {name: "Татьяна Боль", date: new Date(),info : "Очень полезная инфа" },
    
  ];

  person: Person;

  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.people.forEach(element => {
      this.options.push(element.name);
    });

    this.options
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  updateInfo(ev: any){
    console.log(ev.option.value);

    this.person = this.people.find(data=>data.name === ev.option.value);

    console.log(this.person);
    
    
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
}


