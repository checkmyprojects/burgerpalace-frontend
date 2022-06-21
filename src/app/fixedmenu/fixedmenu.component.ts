import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../service/token-storage.service';

@Component({
  selector: 'app-fixedmenu',
  templateUrl: './fixedmenu.component.html',
  styleUrls: ['./fixedmenu.component.css']
})
export class FixedmenuComponent implements OnInit {

  isLoggedIn = false;
  username?: string;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();

      this.username = user.username;
    }
  }
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}
