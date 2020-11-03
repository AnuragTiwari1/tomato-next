import axios from "axios";
import { ZOMATO_API_KEY, BASE_URL } from "./constants";

export class HttpCaller {
  axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: { "user-key": ZOMATO_API_KEY },
  });

  /**
   * get
   * this is the wrapper around original axios get method
   * @param {sting} url provide the url after the baseURL eg: '/someResource' for 'cooldomain.com/someResource'
   * @param {Object=} config this is the config object to override the axios default config
   */
  get(url, config) {
    return this.axiosInstance.get(url, config);
  }

  /**
   * post
   * this is the wrapper around original axios post method
   * @param {sting} url provide the url after the baseURL eg: '/someResource' for 'cooldomain.com/someResource'
   * @param {Object=} config this is the config object to override the axios default config
   */
  post(url, config) {
    return this.axiosInstance.post(url, config);
  }
}
