import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MASTER_FOOD_API } from "../app.api";
import { Restaurante } from "./restaurante/restaurante.model";
@Injectable()
export class RestauranteService {

  constructor(private http: HttpClient) { }

  findByEndereco() {
    try {
      return this.http.get(`${MASTER_FOOD_API}/restaurantes`);
    } catch (err) {
      alert(err);
    }
  }

  save(restaurante: Restaurante) {
    const headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
  }

}
