import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { LoadingService } from './util/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'cornucopia';

constructor(public authService: AuthService, public loadingService: LoadingService) { }

}
