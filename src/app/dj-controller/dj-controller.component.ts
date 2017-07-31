import { Component } from '@angular/core';
import { PlaylistsService } from '../services/playlists.service';
import { Song } from '../models/song.interface';

@Component({
  selector: 'app-dj-controller',
  templateUrl: './dj-controller.component.html',
  styleUrls: ['./dj-controller.component.scss']
})
export class DjControllerComponent {
  private listA: Song[];
  private listB: Song[];
  private mainVolume = 100;

  constructor( private playlistsService: PlaylistsService ) {
    this.listA = this.playlistsService.listA;
    this.listB = this.playlistsService.listB;
  }
}
