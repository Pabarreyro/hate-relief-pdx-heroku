import { Component, Input } from '@angular/core';
import { Resource } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})

export class ContactDetailsComponent {
  @Input()
  resource: Resource;

  @Input()
  createHandler: Function;
  @Input()
  updateHandler: Function;
  @Input()
  deleteHandler: Function;

  constructor (private contactService: ContactService) {}

  createResource(resource: Resource) {
    this.contactService.createResource(resource).then((newResource: Resource) => {
      this.createHandler(newResource);
    });
  }

  updateResource(resource: Resource): void {
    this.contactService.updateResource(resource).then((updatedResource: Resource) => {
      this.updateHandler(updatedResource);
    });
  }

  deleteResource(resourceId: String): void {
    this.contactService.deleteResource(resourceId).then((deletedResourceId: String) => {
      this.deleteHandler(deletedResourceId);
    });
  }
}
