import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SideNavComponent } from './../layout/side-nav/side-nav.component';
import { ToolbarComponent } from './../layout/toolbar/toolbar.component';

import {
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatBadgeModule,
    MatProgressBarModule
  } from '@angular/material';
@NgModule({
  declarations: [DashboardComponent, SideNavComponent, ToolbarComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatBadgeModule,
    MatProgressBarModule
  ]
})
export class DashboardModule { }
