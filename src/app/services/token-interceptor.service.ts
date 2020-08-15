import {Injectable} from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { GeonodeApiService } from './geonode-api.service';

@Injectable({
    providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
    constructor(private api: GeonodeApiService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (request.url.indexOf('storage.google') >= 0) {
            return next.handle(request);
        }
        request = request.clone({
            setHeaders: {
                Authorization: 'Bearer ' + this.api.getAccessToken()
            }
        });
        return next.handle(request);
    }
}
