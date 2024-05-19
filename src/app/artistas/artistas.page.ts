import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArtistaService } from '../Services/artist/artista.service';

@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.page.html',
  styleUrls: ['./artistas.page.scss'],
})
export class ArtistasPage implements OnInit {
   results: Observable<any>
    constructor(private artisService: ArtistaService) {
    this.results = this.artisService.getArtis();
   }

  ngOnInit() {
  }

}
