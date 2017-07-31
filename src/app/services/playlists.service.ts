import { Injectable } from '@angular/core';
import { Song } from '../models/song.interface';

@Injectable()
export class PlaylistsService {
  private playlistA: Song[] = [];
  private playlistB: Song[] = [];

  public get listA() {
    return this.clone('A');
  }

  public get listB() {
    return this.clone('B');
  }

  public addSong(file: any, listMark: string) {
    this['playlist' + listMark].push({
      file: file,
      url: window.URL.createObjectURL(file)
    });
  }

  public deleteSong(index: number, listMark: string) {
    window.URL.revokeObjectURL(this['playlist' + listMark][index].url);
    this['playlist' + listMark].splice(index, 1);
  }

  private clone(listMark: string) {
    return this['playlist' + listMark].slice();
  }
}
