import axios from "axios"

export class Requester {
  marketingServiceURL = "https://marketing-svc-hectkpmyda-ue.a.run.app"

  callMarketingService(method, path, data = null) {
    return axios({
      method: method,
      url: `${this.marketingServiceURL}/${path}`,
      data: data,
    })
  }
}
