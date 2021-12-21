import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-academic',
  templateUrl: './academic.component.html',
  styleUrls: ['./academic.component.css']
})
export class AcademicComponent implements OnInit {

  constructor() { }
  partners=[
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/2560px-Salesforce.com_logo.svg.png",
"https://thycotic.com/wp-content/uploads/2020/09/automation_anywhere.png",
"https://www.freepnglogos.com/uploads/microsoft-logo-png-transparent-20.png",
"https://images.ctfassets.net/5965pury2lcm/1OVj4PfkzVc4Vrm3IuDdAP/f415d995e5a286ddb2644cabafeb9578/UiPath-og-image-orange.png",
"https://www.freepnglogos.com/uploads/vmware-png-logo/partners-login-vmware-png-logo-10.png",
"https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-sva-scholarship-20.png",
"https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo.png"
  ]

  ngOnInit(): void {
  }

  fdp: number = 0;
  fsd: number = 0;
  sf: number = 0; 
  ms:number = 0;
  vi:number = 0;
  op:number = 0;

  evalc(){
    this.fdp=0;
    this.fsd=0;
    this.sf=0;
    this.ms=0;
    this.vi=0;
    this.op=0;
  let fdpstop = setInterval(() => {
    this.fdp++;    
    if (this.fdp >= 647) {     
      clearInterval(fdpstop);
    }
  }, 10)
  let fsdstop = setInterval(() => {
    this.fsd++;    
    if (this.fsd >= 310) {
      clearInterval(fsdstop);
    }
  }, 10)
  let sfstop = setInterval(() => {
    this.sf++;
     if (this.sf >= 562) {
       clearInterval(sfstop);
    }
  }, 10)

  let msstop: any = setInterval(() => {
    this.ms++;
    if (this.ms >= 346) {
      clearInterval(msstop);
    }
  }, 10)

  let vistop: any = setInterval(() => {
    this.vi++;
    if (this.vi >= 143) {
      clearInterval(vistop);
    }
  }, 10)

  let opstop: any = setInterval(() => {
    this.op++;
    if (this.op >= 431) {
      clearInterval(opstop);
    }
  }, 10)
  }
}
