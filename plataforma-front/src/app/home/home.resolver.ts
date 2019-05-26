import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable()
export class HomeResolver implements Resolve<Promise<any>>{

    constructor(public sanitizer: DomSanitizer) { }

    async resolve(route:ActivatedRouteSnapshot): Promise<any> {
        const pagina: string = "https://www.youtube.com/embed/7lCDEYXw3mM"
        const response = {
            iframe: this.sanitizer.bypassSecurityTrustResourceUrl(pagina),
       
        }
        return response;
    }
}