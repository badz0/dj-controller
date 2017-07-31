import { Component, OnInit } from '@angular/core';
import _ from 'lodash';
import { Song } from '../models/song.interface';

import { PlaylistsService } from '../services/playlists.service';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent implements OnInit {
  private listA: Song[] = [];
  private listB: Song[] = [];
  constructor( private playlistsService: PlaylistsService ) {}

  ngOnInit() {
    this.listA = this.playlistsService.listA;
    this.listB = this.playlistsService.listB;
  }

  onChange(event, mark: string) {
    _.each(event.target.files, (file) => {
      if (file.type.indexOf('audio') !== -1) {
        this.playlistsService.addSong(file, mark);
      }
    });
    this['list' + mark] = this.playlistsService['list' + mark];
  }

  deleteSong(i: number, mark: string) {
    this.playlistsService.deleteSong(i, mark);
    this['list' + mark] = this.playlistsService['list' + mark];
  }
}
