import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { appConfiguration } from './../../../environments/environment';
import { IKmData } from './../../core/models/kmData-model';

@Injectable()
export class FuelingsService {
    private _url: string = '';

    constructor(private _http: HttpClient) {
        this._url = appConfiguration.fuelingsUrl;

        // console.log(`Opening Json file: ${this._url} for fuelings`);
    }

    public getAllFuelings$(): Observable<Array<IKmData>> {
        return this._http.get<Array<IKmData>>(this._url).pipe(
            tap((jsonData: Array<IKmData>) =>
                console.info(`fetched kmData: ${jsonData} --> ${this._url})`),
            ),
            catchError(this.errorHandler(`getJsonData`, [])),
        );
    }

    // TODO -> MOVE THIS TO A GENERAL FILE (CORE)
    public errorHandler<T>(operation: any = 'operation', result?: T): any {
        return (error: any): Observable<T> => {
            console.info(`${operation} failed: ${error.message}`);
            switch (error.status) {
                case fileNotFound:
                    console.info(
                        'Check if server is running or the file path is correct',
                    );
                    break;
                case badHttpRequest:
                    console.info('Invalid request syntax');
                    break;
                default:
                    console.info(
                        'Error handler Default case : ' +
                            error.status +
                            '  ' +
                            error.statusText,
                    );
                    break;
            }
            let msg: string = `Operation ${operation} faild Server error number occured: `;
            msg =
                msg + `${error.status} url: ${error.url} Server Error Occured`;

            return observableThrowError(msg);
        };
    }
}
