import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BannerComponent } from './components/banner/banner.component';
import { GridComponent } from './components/grid/grid.component';
import { GridProductComponent } from './components/grid-product/grid-product.component';

import { HomeScreen } from './screens/home-screen/home-screen.component';
import { StoreScreen } from './screens/store-screen/store-screen.component';
import { GeneratorCatalogsScreen } from './screens/generator-catalogs/generator-catalogs.component';
import { GestorProductsScreen } from './screens/gestor-products/gestor-products.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeScreen,
    StoreScreen,
    NavBarComponent,
    BannerComponent,
    GeneratorCatalogsScreen,
    GestorProductsScreen,
    GridComponent,
    GridProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
