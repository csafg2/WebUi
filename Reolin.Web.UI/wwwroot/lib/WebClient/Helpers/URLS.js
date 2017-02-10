var Reolin;
(function (Reolin) {
    var Web;
    (function (Web) {
        var Client;
        (function (Client) {
            class LocalURLs {
            }
            LocalURLs.RegisterAccount = "http://localhost:6987/account/register";
            LocalURLs.ExhangeTokenUrl = "http://localhost:6987/account/ExchangeToken";
            LocalURLs.GetTokenUrl = "http://localhost:6987/account/Login";
            LocalURLs.GetByTag = "http://178.63.55.123/GET/Profile/GetByTag";
            LocalURLs.AddDescription = "http://localhost:6987//Profile/AddDescription";
            LocalURLs.AddImage = "http://localhost:6987//Profile/AddImage";
            LocalURLs.AddLike = "http://localhost:6987//User/LikeProfile/";
            LocalURLs.CreateWorkProfile = "http://localhost:6987//Profile/CreateWork";
            LocalURLs.CreatePersonalProfile = "http://localhost:6987//Profile/CreatePersonal";
            LocalURLs.GetProfileInfo = "http://localhost:6987//Profile/GetInfo/";
            Client.LocalURLs = LocalURLs;
            class URLs {
            }
            URLs.RegisterAccount = "http://178.63.55.123/account/register";
            URLs.ExhangeTokenUrl = "http://178.63.55.123/account/ExchangeToken";
            URLs.GetTokenUrl = "http://178.63.55.123/account/Login";
            URLs.GetByTag = "http://178.63.55.123/GET/Profile/GetByTag";
            URLs.AddDescription = "http://178.63.55.123/Profile/AddDescription";
            URLs.AddImage = "http://178.63.55.123/Profile/AddImage";
            URLs.AddLike = "http://178.63.55.123/User/LikeProfile/";
            URLs.CreateWorkProfile = "http://178.63.55.123/Profile/CreateWork";
            URLs.CreatePersonalProfile = "http://178.63.55.123/Profile/CreatePersonal";
            URLs.GetProfileInfo = "http://178.63.55.123/Profile/GetInfo/";
            URLs.DashboardLocation = "http://178.63.55.123/Account/Dashboard.html";
            Client.URLs = URLs;
        })(Client = Web.Client || (Web.Client = {}));
    })(Web = Reolin.Web || (Reolin.Web = {}));
})(Reolin || (Reolin = {}));
