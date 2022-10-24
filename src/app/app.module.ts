import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TimerComponentComponent } from './components/timer-component/timer-component.component';
import { MultTableComponentComponent } from './components/mult-table-component/mult-table-component.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    TimerComponentComponent,
    MultTableComponentComponent,
    HomeComponentComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
