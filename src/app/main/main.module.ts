import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
    {
        path: '',
        component: ViewComponent,
    },
];

@NgModule({
    declarations: [ViewComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule,
        ReactiveFormsModule,
        FormsModule,
        TranslateModule
    ],
})
export class MainModule {}
