var Net = Reolin.Web.Client;
var Reolin;
(function (Reolin) {
    var Web;
    (function (Web) {
        var UI;
        (function (UI) {
            var Services;
            (function (Services) {
                class ServiceResult {
                }
                Services.ServiceResult = ServiceResult;
                class FailedServiceResult extends ServiceResult {
                }
                Services.FailedServiceResult = FailedServiceResult;
                class SucceededServiceResult extends ServiceResult {
                }
                Services.SucceededServiceResult = SucceededServiceResult;
                class EntityService {
                    constructor() {
                        this.HttpService = new Net.HttpService();
                    }
                }
                Services.EntityService = EntityService;
                class ProfileService extends EntityService {
                    constructor() {
                        super();
                        this.AuthService = new Net.AuthenticatedHttpServiceProvider(manager, () => {
                            alert("auth error");
                        });
                    }
                    CreatePersonal(info, handlers) {
                        this.AuthService.Post(UrlSource.CreatePersonalProfile, info, {}, 2, true, handlers);
                    }
                    CreateWorkProfile(info, handlers) {
                        this.AuthService.Post(UrlSource.CreateWorkProfile, info, {}, 2, true, handlers);
                    }
                }
                Services.ProfileService = ProfileService;
                class RegisterProfileModel {
                }
                Services.RegisterProfileModel = RegisterProfileModel;
            })(Services = UI.Services || (UI.Services = {}));
        })(UI = Web.UI || (Web.UI = {}));
    })(Web = Reolin.Web || (Reolin.Web = {}));
})(Reolin || (Reolin = {}));
// TODO: remove this in production (for test purposes)
var Service = Reolin.Web.UI.Services;
var profileService = new Service.ProfileService();
