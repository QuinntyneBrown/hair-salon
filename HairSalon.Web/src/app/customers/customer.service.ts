import { BaseService, Injectable, Service } from "angular-rx-ui/src/components/core";

@Injectable()
@Service({
	serviceName: "customerService",
	viewProviders: ["$q","apiEndpoint","fetch"]
})
export class CustomerService extends BaseService {
    constructor($q: angular.IQService, apiEndpoint, fetch) {
        super($q, apiEndpoint, fetch)
    }

    get baseUri() { return this.apiEndpoint.getBaseUrl() + "/v1/customer"; }

}
