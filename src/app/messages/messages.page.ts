import { Component, OnInit} from '@angular/core';
import {  NavController ,Platform} from '@ionic/angular';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {
  pt_active=false;
  constructor(public platform: Platform,  private navCtrl: NavController) { }

  ngOnInit() {
    if(this.platform.is('android')){
      this.pt_active=false;
    } else if(this.platform.is('ios')){
      this.pt_active=true;
    }
  }
  goBack() {
    this.navCtrl.pop();
  }
  goto(p) {
    this.navCtrl.navigateForward(p)
  } 

}
