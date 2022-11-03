import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  baseRequest(url: string, type: string, data?: any) {
    return new Promise((resolve, reject) => {
      if (data) {
        try {
          data = JSON.stringify(data)
        } catch {
          reject('Invalid object')
        }
      } else {
        data = {}
      }

      if (type === 'put' || type === 'post') {
        this.http[type](url, data)
          .forEach(
            (response) => { resolve(response) }
          )
      } else if (type == 'get' || type === 'delete') {
        this.http[type](url)
          .forEach(
            (response) => { resolve(response) }
          )
      }

    })
  }

  create(url: string, data: any) {
    return this.baseRequest(url, 'put', data)
  }
  
  read(url: string) {
    return this.baseRequest(url, 'get')
  }

  update(url: string, data: any) {
    return this.baseRequest(url, 'post', data)
  }

  delete(url: string) {
    return this.baseRequest(url, 'delete')
  }
}
