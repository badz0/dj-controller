import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { PlaylistsService } from './playlists.service';

@Injectable()
export class RouteGuard implements CanActivate {

  constructor(
    private playlistsService: PlaylistsService,
    private router: Router
  ) {}

  public canActivate(route: ActivatedRouteSnapshot): boolean {
    if (this.playlistsService.listA.length || this.playlistsService.listB.length ) {
      return true;
    } else {
      this.router.navigate(['./upload']);
      return false;
    }
  }
}
