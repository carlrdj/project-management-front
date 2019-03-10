import { Component, OnInit, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
export interface SubMenu {
  name: string;
  icon: string;
  active: boolean;
}
export interface Menu {
  name: string;
  icon: string;
  selected: boolean
  active: boolean;
  subMenu: SubMenu[];
}

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {  
    @Input()  expandedSideNav: boolean;
    @Output() onSideNavExpanded = new EventEmitter<boolean>();    

    sideNavExpanded(expanded: boolean){
        this.onSideNavExpanded.emit(expanded)
    }


  // Menu
  listMenu: Menu[] = [
    { icon: 'people', name: 'Usuario', selected: false, active: false, subMenu:[{ icon: 'people', name: 'Usuario', active: false }, { icon: 'view_agenda', name: 'Otro', active: false }] },
    { icon: 'local_shipping', name: 'Proveedores', selected: false, active: false, subMenu:[{ icon: 'view_agenda', name: 'Otro', active: false }] },
    { icon: 'event',  name: 'Agenda', selected: false, active: false, subMenu:[{ icon: 'view_agenda', name: 'Otro', active: false }] },
    { icon: 'folder_open', name: 'Proyectos', selected: false, active: false, subMenu:[{ icon: 'view_agenda', name: 'Otro', active: false }] },
    { icon: 'pin_drop', name: 'Locales', selected: false, active: false, subMenu:[{ icon: 'view_agenda', name: 'Otro', active: false }] },
    { icon: 'show_chart', name: 'Reportes', selected: false, active: false, subMenu:[] },
    { icon: 'delete', name: 'Papelera', selected: false, active: false, subMenu:[] }
  ]
  // WidthScreen
  widthScreen: number = 0;
  // Constructor
  constructor() {
    this.widthScreen = window.innerWidth;
    console.log(this.widthScreen)
  }
  ngOnInit() {
  }

  /**
   * Resize windows
   */
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.widthScreen = event.target.innerWidth;
  }

  mainMenu = true;
  showFiller = false;
  

  showSubMenu(menu) {
    menu.selected = !menu.selected;
  }

  activeSubMenu(menu, subMenu){
    menu.active = !menu.active;
    subMenu.active = !subMenu.active;
  }

}
