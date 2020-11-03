import { HttpCaller } from "./httpCaller";
import {
  searchRestaurant,
  getRestaurantByLatLong,
  getRestaurantDetailsById,
} from "./urls";

export class RestaurantServices extends HttpCaller {
  /**
   * searchRestaurants
   * this method can be used to search the restaurants db of zomato.
   * @param {Object} searchParams
   */
  searchRestaurants(params) {
    const { id, start = 0, lat, lon } = params;
    return super.get(searchRestaurant, {
      params: {
        entity_type: "city",
        entity_id: id,
        start,
        lat,
        lon,
      },
    });
  }

  /**
   * getRestaurantByLatLong
   * this method provides the restaurant by lat long
   * @param {Object} locationObject the location for which you want the restaurant list
   */
  getRestaurantByLatLong(params) {
    const { lat, lon } = params;
    return super.get(getRestaurantByLatLong, {
      params: {
        lat,
        lon,
      },
    });
  }

  /**
   * getRestaurantDetailsById
   * this method fetches the restaurant detail by id
   * @param {number} id the id of the restaurant to be fetched
   */
  getRestaurantDetailsById(id) {
    return super.get(getRestaurantDetailsById, {
      params: {
        res_id: id,
      },
    });
  }
}
