import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rew',
  templateUrl: './rew.component.html',
  styleUrls: ['./rew.component.css']
})
export class RewComponent implements OnInit {
  copyText() {
    const val = (document.getElementById('inp1') as HTMLInputElement).value;
    document.getElementById('div').innerHTML += '<p>Вы: ' + val + '</p>';
  }
  constructor() { }

  ngOnInit() {}

}
