import { Directive, OnInit, Input, Output, HostListener, EventEmitter, ElementRef ,Inject, Injectable} from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Directive({ selector: '[trackScroll]' })

export class TrackScrollDirective {
    @Output() bottom = new EventEmitter<boolean>();
    constructor(@Inject(DOCUMENT) private document: Document) {}

    @HostListener('document:scroll', [])
    public track() {
        if (document.body.scrollHeight == window.scrollY + window.innerHeight) {
             this.bottom.emit(true);
        }
    }
}
