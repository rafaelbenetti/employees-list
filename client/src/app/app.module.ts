import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { EmployeeReducer } from './employee/store/employee.reducer';
import { EmployeeEffects } from './employee/store/employee.effects';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    SharedModule,
    NoopAnimationsModule,
    StoreModule.forRoot({ employees: EmployeeReducer }),
    EffectsModule.forRoot([EmployeeEffects])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
