import {Component, HostListener, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {NavigationEnd, Router} from '@angular/router';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})


export class LayoutComponent implements OnInit {

    isMobile: boolean;
    sideNavMode: string;
    isSideBarOpen: boolean;
    title: string;

    constructor(
        private titleService: Title,
        private router: Router
    ) {
        this.handleSideBar();
        this.router.events.subscribe((val) => {
            if (val instanceof NavigationEnd) {
                this.title = this.titleService.getTitle();
            }
        });
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
