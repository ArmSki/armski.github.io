import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AppRoutingModule } from './app-routing.module';
import { EventsPageComponent } from './events-page/events-page.component';
import { ToursPageComponent } from './tours-page/tours-page.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { VideosPageComponent } from './videos-page/videos-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { ArmeniaPageComponent } from './armenia-page/armenia-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutUsComponent,
    EventsPageComponent,
    ToursPageComponent,
    GalleryPageComponent,
    VideosPageComponent,
    BlogPageComponent,
    ArmeniaPageComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
