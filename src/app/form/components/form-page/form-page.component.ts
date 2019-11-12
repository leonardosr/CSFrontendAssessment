import { Component, OnInit, OnDestroy } from '@angular/core';
import { characterNameList } from './characterNameList.mock';
import { UsersApiService } from 'src/app/core/api/services/users-api.service';
import { IUserData } from 'src/app/core/api/services/users.interface';
import { CURRENCY_MASK_CONFIG } from 'src/app/core/consts';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ngbDatepickerToTimestamp, parseWantedCharactersList } from 'src/app/utils/utils';
import { IRequestData } from 'src/app/core/api/services/requests.interface';
import { RequestsApiService } from 'src/app/core/api/services/requests-api.service';
import { Subscription } from 'rxjs';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { ROUTES } from 'src/app/core/consts'
import * as moment from 'moment';
import { Router, ActivatedRoute } from '@angular/router';
import { IEmailQuery } from 'src/app/core/api/services/email-query.interface';
import { EmailQueryApiService } from 'src/app/core/api/services/email-query-api.service';
import { faCalendar, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent implements OnInit, OnDestroy {

  public routes = ROUTES;
  public isStorytellerVisible: boolean = false;
  private today = moment();
  private deadline = moment().add(4, 'weeks'); 
  public maxDate = new NgbDate(this.today.year(), 12, 31);
  public minDate = new NgbDate(this.deadline.year(), this.deadline.month() + 1, this.deadline.date());
  public faCalendar: IconDefinition = faCalendar;
  private subscriptions = new Subscription();
  public requestId: string;

  public requestForm: FormGroup = this.fb.group({
    RequestName: new FormControl('', Validators.required),
    Requestor: new FormControl('', Validators.required),
    GoodEnding: new FormControl('', Validators.required),
    Description: new FormControl('', Validators.required),
    NeedStoryteller: new FormControl('', Validators.required),
    Storyteller: new FormControl(''),
    WantedCharacters: new FormControl(''),
    Deadline: new FormControl(),
    Budget: new FormControl(0, Validators.min(250000)),
    
  });

  public currencyMaskConfig = CURRENCY_MASK_CONFIG;
  public characterList: string[] = characterNameList;
  public userList: IUserData[] = []

  constructor(private fb: FormBuilder, private usersApi: UsersApiService, private requestsApi: RequestsApiService, private emailApi: EmailQueryApiService, private router: Router, private activatedRoute: ActivatedRoute) { }

  public handleSaveAsDraft(): void {
    const parsedData: IRequestData = this.parseFormData(this.requestForm.value, 'Draft');
    this.requestId ? this.updateRequest(parsedData) : this.saveNewRequest(parsedData);
  }

  public handleSubmit(): void {
    const parsedData: IRequestData = this.parseFormData(this.requestForm.value, 'New');
    this.requestId ? this.updateRequest(parsedData) : this.saveNewRequest(parsedData);
  }

  private saveNewRequest (data: IRequestData) {
    this.subscriptions.add(
      this.requestsApi.addNewRequest(data).subscribe((data: IRequestData) => {
        if(data.Status === 'New') {
          this.saveNewEmailQuery(data)
        } else {
          this.router.navigate([`/${ROUTES.dashboard}`]);
        }
      })
    );
  }

  private updateRequest (data: IRequestData) {
    this.subscriptions.add(
      this.requestsApi.updateRequest(data, parseInt(this.requestId)).subscribe((data: IRequestData) => {
        if(data.Status === 'New') {
          this.saveNewEmailQuery(data)
        } else {
          this.router.navigate([`/${ROUTES.dashboard}`]);
        }
      })
    );
  }

  public saveNewEmailQuery(data: IRequestData) {
    let requestor: IUserData, storytellerEmail: string = ''; 

    requestor = this.userList.find(user => user.id === data.Requestor);

    if(data.Storyteller) {
      storytellerEmail = this.userList.find(user => user.id === data.Storyteller).Email;
    }

    const emailQueryData: IEmailQuery = {
      to: `${requestor.Email}, ${storytellerEmail}`,
      subject: 'New Request',
      body: `Hi, A new request has been created by ${requestor.DisplayName}. Cheers, Story Team`
    };

    this.subscriptions.add(
      this.emailApi.newEmailQuery(emailQueryData).subscribe((data) => {
        this.router.navigate([`/${ROUTES.dashboard}`]);
      })
    );
  }

  public parseFormData(formData: any, status: 'New' | 'Draft'): IRequestData {
    return {
      RequestName: formData.RequestName,
      Requestor: formData.Requestor,
      GoodEnding: formData.GoodEnding,
      Description: formData.Description,
      NeedStoryteller: formData.NeedStoryteller,
      Storyteller: formData.NeedStoryteller ? formData.Storyteller : '',
      WantedCharacters: parseWantedCharactersList(formData.WantedCharacters),
      Deadline: formData.Deadline ? ngbDatepickerToTimestamp(formData.Deadline) : null,
      Budget: formData.Budget,
      Status: status
    }
  }

  public onStorytellerTick(value: any) {
    this.isStorytellerVisible = value.currentTarget.checked;
  }

  ngOnInit(): void {
    this.requestId = this.activatedRoute.snapshot.paramMap.get('id');

    this.subscriptions.add(this.activatedRoute.data.subscribe(({userData}) => {
      if(!userData.Roles.includes("Owner")) {
        this.requestForm.disable()
      }
    }));
    
    if(this.requestId) {
      this.requestsApi.getRequestById(this.requestId).subscribe((data:IRequestData) => {
        this.isStorytellerVisible = data.NeedStoryteller;
        
        const deadline = moment(data.Deadline);

        this.requestForm.patchValue(
          {
            RequestName: data.RequestName,
            Requestor: data.Requestor,
            GoodEnding: data.GoodEnding,
            Description: data.Description,
            NeedStoryteller: data.NeedStoryteller,
            Storyteller: data.Storyteller,
            WantedCharacters: data.WantedCharacters ? data.WantedCharacters.split(';') : [],
            Deadline: { year: deadline.year(), month: deadline.month() + 1, day: deadline.date() },
            Budget: data.Budget
          }
        );
        
      })
    }

    const subscription = this.usersApi.getUserList().subscribe(
      (userData) => {
        this.userList = userData;
        subscription.unsubscribe();
      }
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
