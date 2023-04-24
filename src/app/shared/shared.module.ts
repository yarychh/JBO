import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from "@angular/router";
import { SwitchComponent } from './components/switch/switch.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import { PillComponent } from './components/pill/pill.component';
import { FlowPillComponent } from './components/flow-pill/flow-pill.component';
import { EventComponent } from './components/event/event.component';
import { QuestionComponent } from './components/question/question.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [
        SwitchComponent,
        FooterComponent,
        HeaderComponent,
        MenuComponent,
        PillComponent,
        FlowPillComponent,
        EventComponent,
        QuestionComponent,
    ],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, TranslateModule, RouterLinkWithHref],
    exports: [
        SwitchComponent,
        FooterComponent,
        HeaderComponent,
        MenuComponent,
        PillComponent,
        FlowPillComponent,
        EventComponent,
        QuestionComponent,
    ],
})
export class SharedModule {}
