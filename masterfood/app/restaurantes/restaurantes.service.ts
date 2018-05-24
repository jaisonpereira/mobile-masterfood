import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MASTER_FOOD_API } from "../app.api";
import { Restaurante } from "./restaurante/restaurante.model";
@Injectable()
export class RestauranteService {
  path: string;
  constructor(private http: HttpClient) {
    this.path = "/restaurantes";
  }

  findByEndereco() {
    try {
      return this.http.get(`${MASTER_FOOD_API}${this.path}`);
    } catch (err) {
      alert(err);
    }
  }

  findById(id) {
    try {
      return this.http.get(`${MASTER_FOOD_API}${this.path}/${id}`);
    } catch (err) {
      alert(err);
    }
  }


  save(restaurante: Restaurante) {
    const headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
  }

}
