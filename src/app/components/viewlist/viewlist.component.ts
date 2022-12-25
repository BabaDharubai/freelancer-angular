import { Component, OnInit } from '@angular/core';
import { Freelancer } from 'src/app/models/freelancer';
import { FreelancerService } from 'src/app/services/freelancer.service';

@Component({
  selector: 'app-viewlist',
  templateUrl: './viewlist.component.html',
  styleUrls: ['./viewlist.component.css']
})
export class ViewlistComponent implements OnInit {

  constructor(private _freelancerService:FreelancerService) { }

  freelancers!:Freelancer[];

  displayedColumns: string[] = [ 'name', 'userName', 'email','mobile','hoursPerWeek','rating','talentQuality','availableBadge','gender','jobsCompleted','joinedDate','pricePerHour','description'];
  ngOnInit(): void {

    this._freelancerService.getFreelacners().subscribe({
      next:(data)=>{
        this.freelancers=data;
      },
      error:(data)=>console.log(data),
      complete:()=>console.log("Completed")
    })
  }

}
