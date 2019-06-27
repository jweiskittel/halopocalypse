import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('gamertag') gamertag: ElementRef;
  @ViewChild('dropdown') dropdown: ElementRef;

  constructor(private router: Router, private renderer: Renderer2) { }

  ngOnInit() {
  }

  findProfile() {
    this.router.navigate(['profile', this.gamertag.nativeElement.value], {queryParamsHandling: 'preserve'});
  }

}
