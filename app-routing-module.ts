import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ChangeNumberComponent } from "./components/change-number/change-number.component";
import { FirstComponetComponent } from "./components/first-componet/first-componet.component";
import { IfRenderComponent } from "./components/if-render/if-render.component";
import { ItemDetailComponent } from "./components/item-detail/item-detail.component";
import { ListRenderComponent } from "./components/list-render/list-render.component";
import { PipesComponent } from "./components/pipes/pipes.component";
import { TowWayBindingComponent } from "./components/tow-way-binding/tow-way-binding.component";

const routes: Routes =[
    {path:'',component : FirstComponetComponent},
    {path:'list', component: ListRenderComponent},
    {path:'list/:id', component: ItemDetailComponent},
    {path:'ifrender',component: IfRenderComponent},
    {path:'pipes',component: PipesComponent},
    {path:'tow-way',component : TowWayBindingComponent},
    {path:'change-number',component: ChangeNumberComponent}
]

@NgModule({
    declarations: [],
    imports :  [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}