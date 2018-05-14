import { Component, OnInit } from '@angular/core';
import { Resource } from '../contact';
import { ContactService } from '../contact.service';
import { ContactDetailsComponent } from '../contact-details/contact-details.component';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
  providers: [ContactService]
})

export class ContactListComponent implements OnInit {

  resources: Resource[]
  selectedResource: Resource

  constructor(private contactService: ContactService) { }

  ngOnInit() {
     this.contactService
      .getResources()
      .then((resources: Resource[]) => {
        this.resources = resources.map((resource) => {
          if (!resource.phone) {
            resource.phone = {
              main: '',
              fax: ''
            }
          }
          return resource;
        });
      });
  }

  private getIndexOfResource = (resourceId: String) => {
    return this.resources.findIndex((resource) => {
      return resource._id === resourceId;
    });
  }

  selectResource(resource: Resource) {
    this.selectedResource = resource;
  }

  createNewResource() {
    let resource: Resource = {
      name: '',
      description: '',
      email: '',
      phone: {
        main: '',
        fax: '',
      },
      address: {
        street: '',
        floor: '',
        city: '',
        state: '',
        zip: '',
      },
      region: '',
      communities: [],
      services: []
    };

    // By default, a newly-created resource will have the selected state.
    this.selectResource(resource);
  }

  deleteResource = (resourceId: String) => {
    let idx = this.getIndexOfResource(resourceId);
    if (idx !== -1) {
      this.resources.splice(idx, 1);
      this.selectResource(null);
    }
    return this.resources;
  }

  addResource = (resource: Resource) => {
    this.resources.push(resource);
    this.selectResource(resource);
    return this.resources;
  }

  updateResource = (resource: Resource) => {
    let idx = this.getIndexOfResource(resource._id);
    if (idx !== -1) {
      this.resources[idx] = resource;
      this.selectResource(resource);
    }
    return this.resources;
  }
}
