import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { KaraokeService } from '../services/karaoke.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css']
})
export class HomePage implements OnInit {

  public formBusca: FormGroup;
  public data: any;
  constructor(private route: ActivatedRoute,
    private karaoke: KaraokeService) { }


  ngOnInit() {

    this.formBusca = new FormGroup({
      artista: new FormControl(''),
      musica: new FormControl('')
    });

    this.data = this.route.snapshot.data['data'];
  }


  async buscar() {
    const { artista, musica } = this.formBusca.value;
    this.karaoke.buscaMusica(artista, musica);
  }

}
