import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent implements OnInit {

  @Input() subTotal!: number;
  @Input() tax!: number;
  @Input() grandTotal!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
