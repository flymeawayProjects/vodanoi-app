import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainScreenComponent } from './components/main-screen/main-screen.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WordsSliderComponent } from './components/words-slider/words-slider.component';
import { ScrollTrackingDirective } from './directives/scroll-tracking.directive';
import { NewsComponent } from './components/news/news.component';
import { MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsComponent } from './components/products/products.component';
import { ContactComponent } from './components/contact/contact.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { CatalogsComponent } from './components/catalogs/catalogs.component';
import { ProductsBrowseComponent } from './components/products-browse/products-browse.component';
import { NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';
import { NgxGalleryModule } from 'ngx-gallery';


@NgModule({
  declarations: [
    AppComponent,
    MainScreenComponent,
    AdminPanelComponent,
    NavbarComponent,
    WordsSliderComponent,
    ScrollTrackingDirective,
    NewsComponent,
    ProductsComponent,
    ContactComponent,
    GalleryComponent,
    CatalogsComponent,
    ProductsBrowseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    NgMaterialMultilevelMenuModule,
    NgxGalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
