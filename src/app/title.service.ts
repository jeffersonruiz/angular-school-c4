import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class TitleService {
    private titleSubject: Subject<string> = new Subject();
    public title$: Observable<string> = this.titleSubject.asObservable();
    constructor(
        private router: Router
    ) {
        this.init();
    }

    init() {
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd),
            map((evt: NavigationEnd) => evt.urlAfterRedirects)
        ).subscribe(title => this.titleSubject.next(title));
    }
}
