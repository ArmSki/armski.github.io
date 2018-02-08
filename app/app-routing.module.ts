import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomePageComponent } from './home-page/home-page.component';
import { EventsPageComponent } from './events-page/events-page.component';
import { ToursPageComponent } from './tours-page/tours-page.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { VideosPageComponent } from './videos-page/videos-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { ArmeniaPageComponent } from './armenia-page/armenia-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const appRoutes: Routes = [
  { path: 'about-us', component: AboutUsComponent },
  { path: '', component: HomePageComponent },
  { path: 'events', component: EventsPageComponent },
  { path: 'tours', component: ToursPageComponent },
  { path: 'gallery', component: GalleryPageComponent },
  { path: 'videos', component: VideosPageComponent },
  { path: 'blog', component: BlogPageComponent },
  { path: 'armenia', component: ArmeniaPageComponent },
  { path: 'contact-us', component: ContactUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
