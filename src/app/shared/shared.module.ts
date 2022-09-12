import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwitchComponent } from './components/switch/switch.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import { PillComponent } from './components/pill/pill.component';



@NgModule({
  declarations: [
    SwitchComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    PillComponent
  ],
  imports: [
      CommonModule,
      FormsModule,
    ],
    exports: [
        SwitchComponent,
        FooterComponent,
        HeaderComponent,
        MenuComponent,
        PillComponent
  ]
})
export class SharedModule { }
