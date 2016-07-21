import { BaseService, Injectable, Service } from "angular-rx-ui/src/components/core";

@Injectable()
@Service({
	serviceName: "photoService",
	viewProviders: ["$q","apiEndpoint","fetch","store"]
})
export class PhotoService extends BaseService {
    constructor($q: angular.IQService, apiEndpoint, fetch, private store) {
        super($q, apiEndpoint, fetch)
    }

    tryToUpload = options => {
        var deferred = this.$q.defer();
        var xhr = new XMLHttpRequest();
        var token = this.store.getValue().token;
        xhr.open("POST", this.baseUri + "/upload", true);
        xhr.setRequestHeader('Authorization', "Bearer " + token);
        xhr.onload = (e) => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    deferred.resolve(JSON.parse(xhr.response));
                }
                else {
                    deferred.resolve(xhr.statusText);
                }
            }
        };
        xhr.send(options.data);
        return deferred.promise;
    }

    get baseUri() { return this.apiEndpoint.getBaseUrl() + "/photo"; }

}
