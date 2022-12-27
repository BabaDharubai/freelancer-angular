
import { Component, OnInit, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { map, of } from 'rxjs';
import { AuthService } from 'src/app/auth/service/auth.service';
import { Freelancer } from 'src/app/models/freelancer';
import { FreelancerService } from 'src/app/services/freelancer.service';

@Component({
  selector: 'app-viewlist',
  templateUrl: './viewlist.component.html',
  styleUrls: ['./viewlist.component.css']
})
export class ViewlistComponent implements OnInit {

  constructor(private _freelancerService:FreelancerService,
              private _dialog:MatDialog,
              private _authService:AuthService,
              private _router:Router
              ) { }

  freelancers!:Freelancer[];
  roles!:string[];

  // displayedColumns: string[] = [  'userName', 'email','mobile','hoursPerWeek','rating','talentQuality','availableBadge','gender','jobsCompleted','joinedDate','pricePerHour','description'];
  
  freelancer!:Freelancer;
  displayedColumns!:string[];
  ngOnInit(): void {

    this.roles=this._authService.getRoles();
    // console.log(this.roles);
    // console.log(localStorage.getItem("token"));
    of(this._authService.getToken()).forEach(val=>console.log(val));
    this._freelancerService.getFreelacners().subscribe({
      next:(data)=>{
        this.displayedColumns= Object.keys(data[0]);
        this.options=this.displayedColumns;
        console.log(this.displayedColumns);
        this.freelancers=data;
       
        console.log(this.freelancers[1].talentQuality)
      },
      error:(data)=>console.log(data),
      complete:()=>console.log("Completed")
    });

    
  }

  openDialog(pick:TemplateRef<MatDialog>){
    this._dialog.open(pick);
  }
  
  options!:string[];

  show=(filter:string[]|any)=>{
    if(filter)
      this.options=filter;
  }

  route(freelancerId:string){
    console.log(freelancerId)
    if(freelancerId)
      this._router.navigate(["/view-details",freelancerId]);
  }

}
