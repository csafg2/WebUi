/// <reference path="../../typing/jquery.d.ts" />
var Reolin;
(function (Reolin) {
    var Web;
    (function (Web) {
        var Client;
        (function (Client) {
            var Controllers;
            (function (Controllers) {
                class AccountController {
                    constructor() {
                        this.LoginButton = $('#LoginButton');
                        this.RegisterButton = $('#RegisterButton');
                        this.PasswordTextBox = $('#Password');
                        this.ConfirmPasswordTextBox = $('#ConfirmPassword');
                        this.EmailTextBox = $('#Email');
                        this.UserNameTextBox = $('#Username');
                        this.PhoneNumberTextBox = $('#PhoneNumber');
                        this._service = new Reo.AccountService(manager);
                        this.SetGlobalHandlers();
                        this.LoginButton.click(e => this.LoginButton_ClickHandler(e));
                        this.RegisterButton.click(e => this.RegisterButton_ClickHandler(e));
                    }
                    SetGlobalHandlers() {
                        var me = this;
                        $(document).ajaxError(function (event, jqxhr, settings, thrownError) {
                            if (!(settings.url.toLowerCase().indexOf("/account/login") > 0)) {
                                return;
                            }
                            console.log(jqxhr.responseJSON);
                            for (var key in jqxhr.responseJSON) {
                                me.ErrorList.append('<p style="color:red">' + jqxhr.responseJSON[key][0] + '</p>');
                            }
                        });
                        $(document).ajaxSuccess(function (event, xhr, settings) {
                            if (!(settings.url.toLowerCase().indexOf("/account/login") > 0)) {
                                return;
                            }
                            console.log(xhr.responseText);
                        });
                    }
                    RegisterButton_ClickHandler(e) {
                        var info = new Client.RegisterInfo();
                        info.UserName = this.UserNameTextBox.val();
                        info.Password = this.PasswordTextBox.val();
                        info.ConfirmPassword = this.ConfirmPasswordTextBox.val();
                        info.Email = this.EmailTextBox.val();
                        info.PhoneNumber = this.PhoneNumberTextBox.val();
                        var handler = new Client.HttpServiceHandler();
                        handler.HandleResponse = (r) => {
                            console.log("User has been registered");
                            var loginInfo = new Client.LoginInfo();
                            loginInfo.UserName = info.UserName;
                            loginInfo.Password = info.Password;
                            this._service.Login(loginInfo);
                        };
                        this._service.Register(info, handler);
                    }
                    LoginButton_ClickHandler(e) {
                        var info = new Client.LoginInfo();
                        info.UserName = this.UserNameTextBox.val();
                        info.Password = this.PasswordTextBox.val();
                        this._service.Login(info);
                        var user = new Client.User();
                        user.UserName = info.UserName;
                        Client.User.Current = user;
                    }
                }
                Controllers.AccountController = AccountController;
            })(Controllers = Client.Controllers || (Client.Controllers = {}));
        })(Client = Web.Client || (Web.Client = {}));
    })(Web = Reolin.Web || (Reolin.Web = {}));
})(Reolin || (Reolin = {}));
var controller = new Reolin.Web.Client.Controllers.AccountController();
