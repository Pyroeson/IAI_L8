import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ContactComponent } from './components/contact/contact.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { BlogComponent } from './components/blog/blog.component';

import {RouterModule, Routes} from '@angular/router';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { BlogItemTextComponent } from './components/blog-item-text/blog-item-text.component';
import { BlogItemImageComponent } from './components/blog-item-image/blog-item-image.component';
import { BlogItemDetailComponent } from './components/blog-item-detail/blog-item-detail.component';



const appRoutes: Routes = [
  {
    path: 'blog/detail/:id',
    component: BlogItemDetailComponent
  },

  {
    path: '',
    component: HomeComponent
  },{
    path: 'contact',
    component: ContactComponent,
  },{
    path: 'mapa',
    component: MapaComponent,
  },{
    path: 'quiz',
    component: QuizComponent,
  },{
    path: 'blog',
    component: BlogComponent,
  }];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    ContactComponent,
    QuizComponent,
    MapaComponent,
    BlogComponent,
    BlogItemComponent,
    BlogItemTextComponent,
    BlogItemImageComponent,
    BlogItemDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

