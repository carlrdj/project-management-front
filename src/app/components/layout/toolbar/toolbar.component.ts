import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
    @Input() expandedSideNav: boolean;

    @Output() onSideNavExpanded = new EventEmitter<boolean>();
    constructor() { }

    ngOnInit() {
    }

    sideNavExpanded(expanded: boolean) {
        this.onSideNavExpanded.emit(expanded)
    }
}
