import { Component, OnInit, Input } from '@angular/core';
import { IEfai } from 'src/app/model/IEfai';

@Component({
  selector: 'osi-app-efai-form',
  templateUrl: './efai-form.component.html',
  styleUrls: ['./efai-form.component.css']
})
export class EfaiFormComponent implements OnInit {
  @Input() efai: IEfai

  constructor() { }

  ngOnInit() {
  }

}
