import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    // SideNav configuration
    sideNav: object = {
        mode: 'side', // 'over' | 'push' | 'side'
        opened: true,
        fixedInViewport: false,
        expandedSideNav: false
    }
    progressBar:number = 50
    constructor() {
    }
    ngOnInit() {
    }

    onSideNavExpanded(expanded: boolean) {
        this.sideNav['expandedSideNav'] = expanded;
    }
}
