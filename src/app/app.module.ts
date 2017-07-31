import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdSliderModule, MdIconModule } from '@angular/material';
import 'hammerjs';

import { ROUTES } from './app.routes';

import { UploaderComponent } from './uploader/uploader.component';
import { DjControllerComponent } from './dj-controller/dj-controller.component';
import { PlayerComponent } from './dj-controller/player/player.component';
import { PlaylistsService } from './services/playlists.service';
import { RouteGuard } from './services/route-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    UploaderComponent,
    DjControllerComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
    FormsModule,
    MdSliderModule,
    MdButtonModule,
    MdIconModule
  ],
  providers: [
    PlaylistsService,
    RouteGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
