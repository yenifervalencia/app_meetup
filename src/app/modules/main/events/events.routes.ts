import { Routes } from "@angular/router";
import { DetailComponent } from "./detail/detail.component";

export default [
  {
    path: ':id',
    component: DetailComponent,
  },
] as Routes;