import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomePage } from './home.page';
import { HomeResolver } from './home.resolver';




const routes: Routes = [
    { path: '', component: HomePage,resolve:{data:HomeResolver}, data: { title: 'Home' } }

];


@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    declarations: [
        HomePage
    ],
    providers: [
        HomeResolver
    ]
})
export class HomeRoutingModule { }