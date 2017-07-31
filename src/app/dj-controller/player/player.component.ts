import { Component, OnDestroy, OnInit, Input, OnChanges, SimpleChanges  } from '@angular/core';
import { Song } from '../../models/song.interface';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnDestroy, OnInit, OnChanges {
  @Input() list: Song[];
  @Input() mainVolume: number;
  @Input() title: string;

  private song;
  private activeIndex = 0;
  private songVolume = 100;
  private curTime = 0;
  private speed = 1.0;

  ngOnInit() {
    if (this.list.length) {
      this.initAudio(this.activeIndex);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.mainVolume) {
      this.onMainVolumeChange(changes.mainVolume.currentValue);
    }
  }

  ngOnDestroy() {
    this.pause();
  }

  initAudio(index) {
    this.song = new Audio(this.list[index].url);
    this.song.addEventListener('timeupdate', () => {
      this.curTime = parseInt(this.song.currentTime, 10);
    });
    this.song.addEventListener('ended', () => {
      this.playTrack(this.activeIndex + 1);
    });
  }

  start() {
    if (this.song) {
      this.song.play();
    }
  }

  replay() {
    this.song.currentTime = 0;
  }

  stop() {
    this.pause();
    this.song.currentTime = 0;
  }

  pause() {
    if (this.song) {
      this.song.pause();
    }
  }

  setSpeed(up) {
    if (this.speed < 3 && up) {
      this.speed += 0.1;
      this.song.playbackRate += 0.1;
    }
    if (this.speed > 0.6 && !up) {
      this.speed -= 0.1;
      this.song.playbackRate -= 0.1;
    }
  }

  playTrack(index) {
    if (index >= 0 && index < this.list.length) {
      this.activeIndex = index;
      this.stop();
      this.initAudio(index);
      this.start();
    } else {
      this.stop();
    }
  }

  onVolumeChange(e) {
    const fraction = e.value / 100;
    this.songVolume = e.value;
    this.song.volume = fraction * this.mainVolume / 100;
  }

  onMainVolumeChange(value) {
    if (this.song) {
      this.song.volume = value / 100 * this.songVolume / 100;
    }
  }

  onTimeChange(e) {
    this.song.currentTime = e.value;
  }
}
