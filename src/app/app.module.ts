import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { SkillCarouselComponent } from './components/skill-carousel/skill-carousel.component';
import { NgxFastMarqueeModule } from 'ngx-fast-marquee';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    AboutComponent,
    ContactComponent,
    ProjectsComponent,
    FooterComponent,
    SkillCarouselComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgxFastMarqueeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
