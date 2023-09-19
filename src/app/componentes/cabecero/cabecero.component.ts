import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent {
  navbarCollapsed = true

  toggleNavbarCollapsing() {
    this.navbarCollapsed = !this.navbarCollapsed;
  }

  toggleMenu(collapseButton: HTMLElement, collapsePanel: HTMLElement) {
    if (this.navbarCollapsed) {
      collapseButton.classList.add('collapsed');
      collapsePanel.classList.remove('show');
    } else {
      collapsePanel.classList.add('show');
      collapseButton.classList.remove('collapsed');
    }
    this.navbarCollapsed = !this.navbarCollapsed
  }

}
