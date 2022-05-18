import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss']
})
export class FrameComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(private router: Router) { }

  isHome(path: string): boolean {
    return this.router.url === path
  }

  isLogin(path: string): boolean {
    return this.router.url === path
  }
}