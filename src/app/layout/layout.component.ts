import {Component, HostListener, OnInit} from '@angular/core';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})


export class LayoutComponent implements OnInit {

    isMobile: boolean;
    sideNavMode: string;
    isSideBarOpen: boolean;

    constructor() {
        this.handleSideBar();
    }

    ngOnInit() {
    }

    @HostListener('window:resize')
    onResize() {
        this.handleSideBar();
    }

    handleSideBar() {
        if (window.innerWidth <= 480) {
            this.isMobile = true;
            this.sideNavMode = 'over';
            this.isSideBarOpen = false;
        } else {
            this.isMobile = false;
            this.sideNavMode = 'side';
            this.isSideBarOpen = true;
        }
    }

}
