import { Component, signal, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  protected readonly isStoreOpen = signal(false);

  constructor(private elementRef: ElementRef) {}

  toggleStoreMenu(): void {
    this.isStoreOpen.update(open => !open);
  }

  closeStoreMenu(): void {
    this.isStoreOpen.set(false);
  }

  // Cierra el menú al hacer clic en cualquier parte fuera del navbar
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.closeStoreMenu();
    }
  }
}