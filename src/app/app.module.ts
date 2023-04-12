import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Component/header/header.component';
import { FooterComponent } from './Component/footer/footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { CarouselComponent } from './Component/carousel/carousel.component';
import { CollaboratorsComponent } from './Component/collaborators/collaborators.component';
import {MatMenuModule} from '@angular/material/menu';
import {CarouselModule} from "ngx-owl-carousel-o";
import { ImageSliderComponent } from './Component/image-slider/image-slider.component';
import { GallaryComponent } from './Component/gallary/gallary.component'
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    CollaboratorsComponent,
    ImageSliderComponent,
    GallaryComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
    CarouselModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
