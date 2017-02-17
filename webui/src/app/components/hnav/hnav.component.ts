import { Component, OnInit, OnChanges, SimpleChange, Input, Output, ElementRef, AfterViewInit,  ViewChild, Renderer, EventEmitter, HostListener  } from '@angular/core';
import { ItemDescrModel} from '../../models/item-descr.model';
import { Router,ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 's-hnav',
  styleUrls: [ './hnav.scss'],
  template:`
  <div class="s-hnav">
    <div class="s-hnav-wrap">
      <span class="s-nav-item" *ngFor="let navItem of navItems">
        <!-- div class="s-nav-label s-f-small" routerLink="{{navItem.itemId}}" attr.data-itemid="{{navItem.itemId}}" >{{navItem.itemDescr}}</div -->
        <h4 class="s-nav-label" routerLink="{{navItem.itemId}}" attr.data-itemid="{{navItem.itemId}}" >{{navItem.itemDescr}}</h4>
      </span>
    </div>
    <div #inkbar class="s-hnav-inkbar"></div>
  </div>
`
})
export class HnavComponent implements OnChanges {
  @Input() public navItems: ItemDescrModel[];
  @Input() public selected: string;
  @Output() selectionChange = new EventEmitter();

  @ViewChild('inkbar') inkBar: ElementRef;

  constructor(private el: ElementRef,private renderer: Renderer) { }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    let log: string[] = [];
    for (let propName in changes) {
      if (propName==="selected"){
        let changedProp = changes[propName];
        this.setSelection(changedProp.currentValue);
        break;
      }
    }
  }


/*
  @HostListener('click', ['$event'])
  onClick(event) {
    if(event.target.matches("div.s-nav-label")){
      this.setInkBarPosition(event.target);
    }
  }
*/

  setSelection(navDatasetItemId:String){
    if (navDatasetItemId){
      let elSelector:String = `.s-nav-label[data-itemid=${navDatasetItemId}]` ;
      let navItemEl = this.el.nativeElement.querySelector(elSelector);
      if (navItemEl){
        this.setInkBarPosition(navItemEl);
      }
    }
  }

  setInkBarPosition(navItemEl:any){
    this.renderer.setElementStyle(this.inkBar.nativeElement,'left', navItemEl.offsetLeft+"px");
    this.renderer.setElementStyle(this.inkBar.nativeElement,'width', navItemEl.offsetWidth+"px");
    this.selected = navItemEl.dataset.itemid;
    this.selectionChange.emit(this.selected);
  }


}
