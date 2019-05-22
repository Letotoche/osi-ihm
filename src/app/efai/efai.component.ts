import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEfai } from '../model/IEfai';
import { EfaiServiceService } from '../efai.service';

@Component({
  selector: 'app-efai',
  templateUrl: './efai.component.html',
  styleUrls: ['./efai.component.css']
})
export class EfaiComponent implements OnInit {
  efai: IEfai;
  constructor(
            private route: ActivatedRoute,
            private router: Router,
            private efaiService:EfaiServiceService) { }

  ngOnInit() {
    let identifiant = this.route.snapshot.params['id'];
    console.log('identifiant efai : ' + identifiant);
    this.efai = this.efaiService.getEfaiById(identifiant);
  }

  retourGestion() {
    this.router.navigate(['/efai/gestion']);
  }

}