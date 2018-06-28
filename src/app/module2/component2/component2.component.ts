import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people.service';
import { Person } from '../../models/person';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  public people: Person[];

  public getPeopleFromService() {
    const peopleObservable: Observable<Person[]> = this.service.list();

    peopleObservable.subscribe((dataFromService: Person[]) => {
      this.people = dataFromService; // Automagic
    });
  }

  constructor(private service: PeopleService ) {
  }

  ngOnInit() {

  }


}
