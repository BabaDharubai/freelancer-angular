import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Freelancer } from 'src/app/models/freelancer';
import { FreelancerService } from 'src/app/services/freelancer.service';

// const countryList = [
//   'Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla',
//   'Antarctica', 'Antigua and Barbuda',  'Argentina',  'Armenia',  'Aruba',  'Australia',
//   'Austria',  'Azerbaijan',  'Bahamas (the)',  'Bahrain',  'Bangladesh',  'Barbados',
//   'Belarus',  'Belgium',  'Belize',  'Benin',  'Bermuda',  'Bhutan',  'Bolivia (Plurinational State of)',
//   'Bonaire, Sint Eustatius and Saba',  'Bosnia and Herzegovina',  'Botswana',  'Bouvet Island',  'Brazil',
//   'British Indian Ocean Territory (the)',  'Brunei Darussalam',  'Bulgaria',  'Burkina Faso',  'Burundi',
//   'Cabo Verde',  'Cambodia',  'Cameroon',  'Canada',  'Cayman Islands (the)',  'Central African Republic (the)',
//   'Chad',  'Chile',  'China',  'Christmas Island',  'Cocos (Keeling) Islands (the)',  'Colombia',  'Comoros (the)',
//   'Congo (the Democratic Republic of the)',  'Congo (the)',  'Cook Islands (the)',  'Costa Rica',  'Croatia',  'Cuba',
//   'Curaçao',  'Cyprus',  'Czechia',  "Côte d'Ivoire",  'Denmark',  'Djibouti',   'Dominica',  'Dominican Republic (the)',  'Ecuador',  'Egypt',
//   'El Salvador',  'Equatorial Guinea',  'Eritrea',  'Estonia',  'Eswatini',  'Ethiopia',  'Falkland Islands (the) [Malvinas]',
//   'Faroe Islands (the)',  'Fiji',  'Finland',  'France',  'French Guiana',  'French Polynesia',  'French Southern Territories (the)',
//   'Gabon',  'Gambia (the)',  'Georgia',  'Germany',  'Ghana',  'Gibraltar',  'Greece',  'Greenland',  'Grenada',  'Guadeloupe',  'Guam',  'Guatemala',  'Guernsey',  'Guinea',  'Guinea-Bissau',
//   'Guyana',  'Haiti',  'Heard Island and McDonald Islands',  'Holy See (the)',  'Honduras',  'Hong Kong',  'Hungary',
//   'Iceland',  'India',  'Indonesia',  'Iran (Islamic Republic of)',  'Iraq',  'Ireland',  'Isle of Man',  'Israel',  'Italy',  'Jamaica',  'Japan',
//   'Jersey',  'Jordan',  'Kazakhstan',  'Kenya',  'Kiribati',  "Korea (the Democratic People's Republic of)",  'Korea (the Republic of)',  'Kuwait',  'Kyrgyzstan',  "Lao People's Democratic Republic (the)",  'Latvia',  'Lebanon',  'Lesotho',  'Liberia',  'Libya',  'Liechtenstein',  'Lithuania',  'Luxembourg',  'Macao',  'Madagascar',  'Malawi',  'Malaysia',  'Maldives',  'Mali',  'Malta',  'Marshall Islands (the)',
//   'Martinique',  'Mauritania',  'Mauritius',  'Mayotte',  'Mexico',  'Micronesia (Federated States of)',  'Moldova (the Republic of)',  'Monaco',  'Mongolia',  'Montenegro',  'Montserrat',  'Morocco',  'Mozambique',  'Myanmar',  'Namibia',  'Nauru',  'Nepal',  'Netherlands (the)',  'New Caledonia',  'New Zealand',  'Nicaragua',  'Niger (the)',  'Nigeria',
//   'Niue',  'Norfolk Island',  'Northern Mariana Islands (the)',  'Norway',  'Oman',  'Pakistan',  'Palau',  'Palestine, State of',  'Panama',  'Papua New Guinea',  'Paraguay',
//   'Peru',  'Philippines (the)',  'Pitcairn',  'Poland',  'Portugal',  'Puerto Rico',  'Qatar',  'Republic of North Macedonia',  'Romania',
//   'Russian Federation (the)',  'Rwanda',  'Réunion',  'Saint Barthélemy',  'Saint Helena, Ascension and Tristan da Cunha',  'Saint Kitts and Nevis',
//   'Saint Lucia',  'Saint Martin (French part)',  'Saint Pierre and Miquelon',  'Saint Vincent and the Grenadines',  'Samoa',  'San Marino',
//   'Sao Tome and Principe',  'Saudi Arabia',  'Senegal',  'Serbia',  'Seychelles',  'Sierra Leone',  'Singapore',  'Sint Maarten (Dutch part)',  'Slovakia',
//   'Slovenia',  'Solomon Islands',  'Somalia',  'South Africa',  'South Georgia and the South Sandwich Islands',  'South Sudan',  'Spain',  'Sri Lanka',  'Sudan (the)',
//   'Suriname',  'Svalbard and Jan Mayen',  'Sweden',  'Switzerland',  'Syrian Arab Republic',  'Taiwan', 'Tajikistan',  'Tanzania, United Republic of',  'Thailand',
//   'Timor-Leste',  'Togo',  'Tokelau',  'Tonga',  'Trinidad and Tobago',  'Tunisia',  'Turkey',  'Turkmenistan',  'Turks and Caicos Islands (the)',
//   'Tuvalu',  'Uganda',  'Ukraine',  'United Arab Emirates (the)',  'United Kingdom of Great Britain and Northern Ireland (the)',
//   'United States Minor Outlying Islands (the)',  'United States of America (the)',  'Uruguay',  'Uzbekistan',  'Vanuatu',  'Venezuela (Bolivarian Republic of)',  'Viet Nam',  'Virgin Islands (British)',
//   'Virgin Islands (U.S.)',  'Wallis and Futuna',  'Western Sahara',  'Yemen',  'Zambia',  'Zimbabwe', 'Åland Islands',
// ];

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

  languages:string[]=[
    "ENGLISH",
	"HINDI",
	"FRENCH",
	"ITALIAN",
	"RUSSIAN",
	"ARABIC",
	"CHINESE"
  ]

  constructor(
    private _freelancerService: FreelancerService,
    private _activatedRoute: ActivatedRoute
  ) {}

  freelancera!: Freelancer;
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((map)=>{
      let id=map.get("freelancerId");
      if(id){
       this._freelancerService.getById(id).subscribe({
        next:(data)=>{
          this.freelancer.setValue(data);
        },
        error:(error)=>console.log(error),
        complete:()=>console.log("get By Id completed")
       })
      }
    }
      );
  }

  freelancer: FormGroup = new FormGroup({
    _id: new FormControl(),
    _rev: new FormControl(),
    name: new FormControl(),
    userName: new FormControl(),
    email: new FormControl(),
    mobile: new FormControl(),
    address: new FormGroup({
      city: new FormControl(),
      state: new FormControl(),
      country: new FormControl(),
      zip: new FormControl(),
    }),
    category: new FormControl(),
    hoursPerWeek: new FormControl(),
    rating: new FormControl(),
    talentQuality: new FormControl(),
    availableBadge: new FormControl(),
    skills: new FormControl(),
    gender: new FormControl(),
    languages: new FormControl(),
    jobsCompleted: new FormControl(),
    joinedDate: new FormControl(),
    pricePerHour: new FormControl(),
    description: new FormControl(),
    certificates: new FormArray([
      new FormGroup({
      course:new FormControl(),
      duration: new FormControl(),
      provider: new FormControl(),
      })
    ]),
    

    experiences: new FormArray([
      new FormGroup({
      companyName: new FormControl(),
      role: new FormControl(),
      startDate: new FormControl(),
      endDate: new FormControl(),
    })]),
  });

  addFreelancer(freelancer: Freelancer) {
    console.log('yes');
    this._freelancerService.saveFreelancer(freelancer);
  }
  
}
