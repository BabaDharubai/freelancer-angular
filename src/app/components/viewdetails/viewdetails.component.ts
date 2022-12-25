import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';




@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.css']
})
export class ViewdetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  freelancer=new FormGroup({
    id:new FormControl(),
    name:new FormControl(),
     userName: new FormControl(),
     email: new FormControl(),
     mobile: new FormControl(),
     address: new FormControl(),
     category:new FormControl(),
     hoursPerWeek: new FormControl(),
     rating: new FormControl(),
     talentQuality: new FormControl(),
     availableBadge:new FormControl(),
     skills: new FormControl(),
     gender: new FormControl(),
     languages: new FormControl(),
     jobsCompleted: new FormControl(),
     joinedDate: new FormControl(),
     pricePerHour: new FormControl(),
     description: new FormControl(),
     certificates:new FormControl(),
     experiences: new FormControl()




  })

}
