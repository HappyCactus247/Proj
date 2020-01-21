import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { People as Person } from '../../models/People';

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
    {name: "Чикуров Николай Федорович",
    date: "Даты жизни (1919 - 1946).", 
    rank: "Звание: Рядовой." , 
    rewards: "Награды:",
    rewardsinfo: "Был награждён медалью «За боевые заслуги» и медалью «За отвагу».",
    info: "информация о солдате:",
    infoinfo: "Чикуров Николай Федорович родился в д.Бисарка Сарапульского района Удмуртской АССР  в 1919 году в бедной семье. Воспитывался вместе с братом без отца. Имел образование – 4 класса. Как и большинство был колхозником. Незадолго до войны работал кладовщиком в колхозе «Гигант». ",
    war: "Участие в бою:", 
    warinfo: "Бой за Волосово. Жестокий бой разгорелся за Волосово на рассвете 27 января 1944г. Части 205-го и 31-го Гвардейских танковых полков попытались сходу взять Волосово. Однако это не удалось. И тогда эта задача была возложена на 11-ю стрелковую дивизию. В этом бою Чикуров Николай Федорович получил боевое ранение и был отправлен в госпиталь.",
    death: "Умер:", 
    deathinfo: "8 марта 1946 года. От туберкулёза."},
    
    
    {name: "",
    date: "",
    rank:"",
    rewards: "", 
    rewardsinfo: "", 
    info: "", 
    infoinfo: "",
    war: "", 
    warinfo: "", 
    death: "",
    deathinfo: "",},


    {name: "",
    date: "",
    rank:"",
    rewards: "", 
    rewardsinfo: "", 
    info: "", 
    infoinfo: "",
    war: "", 
    warinfo: "", 
    death: "",
    deathinfo: "",},

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


