var Reolin;
(function (Reolin) {
    var Web;
    (function (Web) {
        var Client;
        (function (Client) {
            class User {
                static get Current() {
                    return User._current;
                }
                static set Current(user) {
                    User._current = user;
                }
            }
            Client.User = User;
        })(Client = Web.Client || (Web.Client = {}));
    })(Web = Reolin.Web || (Reolin.Web = {}));
})(Reolin || (Reolin = {}));
