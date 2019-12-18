import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      $("#myInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        if (value != 0) {
          $("#myList div").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
          });
        }
        else {
          $("#myList div").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > 1)
          });
        }
      }
      );
    });
  }
}


