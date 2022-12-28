import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth.service';
import { Freelancer } from 'src/app/models/freelancer';
import { FreelancerService } from 'src/app/services/freelancer.service';

@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.css'],
})
export class ViewdetailsComponent implements OnInit {
  skills: string[] = [
    'Userexperiencedesign',
    'ASPdevelopment',
    'Shopifydevelopment',
    'Englishproofreading',
    'Contentwriting',
    'Photography',
    'Animation',
    'Virtualassistant',
    'Leadgeneration',
    'Datamining',
    'Socialmediamarketing',
    'Videoediting',
    'WordPressdevelopment',
    'AngularJSdevelopment',
    'Javadevelopment',
    'Voicetalent',
    'Accounting',
    'Androiddevelopment',
    'iOSdevelopment',
    'Electricalengineer',
    'Zendesk',
    'MongoDB',
    'Datavisualization',
    'AutoCAD',
    'design3D',
  ];

  languages: string[] = [
    'ENGLISH',
    'HINDI',
    'FRENCH',
    'ITALIAN',
    'RUSSIAN',
    'ARABIC',
    'CHINESE',
  ];

  categoriess: string[] = [
    'DEVELOPMENT',
    'ASSISTING',
    'WRITING',
    'EDITING',
    'GRAPHIC',
    'DESIGN',
    'WEBDESIGN',
    'MARKETING',
    'PROGRAMMING',
    'ACCOUNTING',
  ];

  constructor(
    private _freelancerService: FreelancerService,
    private _activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private _authService:AuthService
  ) {}

  roles!:string[];
  freelancera!: Freelancer;
  editable:boolean=true;
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((map) => {
      let id = map.get('freelancerId');
      if (id) {
        this._freelancerService.getById(id).subscribe({
          next: (data) => {
            this.freelancer.setValue(data);
          },
          error: (error) => console.log(error),
          complete: () => console.log('get By Id completed'),
        });
      }
    });
    this.roles=this._authService.getRoles();
    if(this.roles.includes('manager')){
      this.editable=true;
    }
  }

  freelancer: FormGroup = this.fb.group({
    _id: [],
    _rev: [],
    name: [],
    userName: [],
    email: [],
    mobile: [],
    address: this.fb.group({
      city: [],
      state: [],
      country: [],
      zip: [],
    }),
    category: [],
    hoursPerWeek: [],
    rating: [],
    talentQuality: [],
    availableBadge: [],
    skills: [],
    gender: [],
    languages: [],
    jobsCompleted: [],
    joinedDate: [],
    pricePerHour: [],
    description: [],
    certificates: this.fb.array([this.addCertificateFormGroup()]),
    experiences: this.fb.array([this.addExperienceFormGroup()]),
  });

  addFreelancer(freelancer: Freelancer) {

    this._activatedRoute.paramMap.subscribe((map) => {
      let id = map.get('freelancerId');
      if (id) {
        this._freelancerService.updateFreelancer(freelancer).subscribe({
          next: (data) => {
            console.log(data)
          },
          error: (error) => console.log(error),
          complete: () => console.log('update completed'),
        });
      }
        else {
          this._freelancerService.saveFreelancer(freelancer).subscribe({
            next: (data) => console.log(data),
            error: (error) => console.log(error),
            complete: () => console.log('Adding freelancer Request is completed'),
          });
        }
    });


    
  }

  addCertificateFormGroup(): FormGroup {
    return this.fb.group({
      course: [],
      duration: [],
      provider: [],
    });
  }

  addCertificateButton(): void {
    (<FormArray>this.freelancer.get('certificates')).push(
      this.addCertificateFormGroup()
    );
  }

  addExperienceFormGroup(): FormGroup {
    return this.fb.group({
      companyName: [],
      role: [],
      startDate: [],
      endDate: [],
    });
  }

  addExperienceButton(): void {
    (<FormArray>this.freelancer.get('experiences')).push(
      this.addExperienceFormGroup()
    );
  }

  get certificates() {
    return this.freelancer.get('certificates') as FormArray;
  }

  get experiences() {
    return this.freelancer.get('experiences') as FormArray;
  }

  get _id(): string {
    return this.freelancer.get('_id')?.value;
  }

  deleteFreelancer(freelancerId: string): void {
    if (freelancerId) {
      this._freelancerService.deleteFreelancer(freelancerId).subscribe({
        next: (data) => console.log(data),
        error: (error) => console.log(error),
        complete: () => 'delete method completed',
      });
    }
  }
}
