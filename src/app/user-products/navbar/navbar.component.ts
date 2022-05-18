import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private dbs: DbService) { }

  ngOnInit(): void {
  }

  isAdmin = this.dbs.userType == 'admin' ? true : false
}
