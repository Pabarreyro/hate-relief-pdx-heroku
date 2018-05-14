import { Injectable } from '@angular/core';
import { Resource } from './contact';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ContactService {
    private resourcesUrl = '/api/resources';

    constructor (private http: Http) {}

    // get("/api/resources")
    getResources(): Promise<void | Resource[]> {
      return this.http.get(this.resourcesUrl)
                 .toPromise()
                 .then(response => response.json() as Resource[])
                 .catch(this.handleError);
    }

    // post("/api/resources")
    createResource(newResource: Resource): Promise<void | Resource> {
      return this.http.post(this.resourcesUrl, newResource)
                 .toPromise()
                 .then(response => response.json() as Resource)
                 .catch(this.handleError);
    }

    // get("/api/resources/:id") endpoint not used by Angular app

    // delete("/api/resources/:id")
    deleteResource(delResourceId: String): Promise<void | String> {
      return this.http.delete(this.resourcesUrl + '/' + delResourceId)
                 .toPromise()
                 .then(response => response.json() as String)
                 .catch(this.handleError);
    }

    // put("/api/resources/:id")
    updateResource(putResource: Resource): Promise<void | Resource> {
      var putUrl = this.resourcesUrl + '/' + putResource._id;
      return this.http.put(putUrl, putResource)
                 .toPromise()
                 .then(response => response.json() as Resource)
                 .catch(this.handleError);
    }

    private handleError (error: any) {
      let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
    }
}
