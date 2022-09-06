import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwitchComponent } from './components/switch/switch.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    SwitchComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
    ],
    exports: [
        SwitchComponent,
        FooterComponent,
        HeaderComponent
  ]
})
export class SharedModule { }
