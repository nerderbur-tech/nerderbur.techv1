import axios from "axios"

export class Requester {
  marketingServiceURL = (process.env.NODE_ENV === 'dev') ? "localhost:3000" : "https://personal-api.azurewebsites.net/api"

  callMarketingService(method, path, data = null) {
    return axios({
      method: method,
      url: `${this.marketingServiceURL}/${path}`,
      data: data,
    })
  }
}
