import { HttpCaller } from "./httpCaller";

export class Locations extends HttpCaller {
  async getSuggestions(query) {
    const { data: queryResults } = await this.get(`/locations?query=${query}`);
    return queryResults.location_suggestions;
  }

  async getLocationDetails(entity_id, entity_type) {
    const { data: queryResults } = await this.get(
      `/location_details?entity_id=${entity_id}&entity_type=${entity_type}`
    );
    console.log(queryResults);
    return queryResults;
  }

  async fetchCityFromQuery(query) {
    const suggestionList = await this.getSuggestions(query);

    if (suggestionList.length) {
      const location_details = await this.getLocationDetails(
        suggestionList[0].entity_id,
        suggestionList[0].entity_type
      );
      return location_details;
    }
  }
}
