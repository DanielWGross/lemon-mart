import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'

import { ManagerHomeComponent } from './manager-home/manager-home.component'

export const managerModuleRoutes: Routes = [
  {
    path: '',
    component: ManagerHomeComponent,
  },
]
@NgModule({
  declarations: [ManagerHomeComponent],
  imports: [CommonModule],
})
export class ManagerModule {}
