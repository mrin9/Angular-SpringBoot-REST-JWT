import { Directive, OnInit, Input, Output, HostListener, EventEmitter, ElementRef } from '@angular/core';
@Directive({ selector: '[trackScroll]' })

export class TrackScrollDirective {
    @Output() bottom = new EventEmitter<boolean>();
    @HostListener('document:scroll', ['$event'])
    public track(event: Event) {
        if (document.body.scrollHeight == document.body.scrollTop +window.innerHeight) {
             this.bottom.emit(true);
        }
    }
}
