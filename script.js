HTTP / 2 200 OK
Server: Apple
Date: Fri, 14 Apr 2023 22: 15: 40 GMT
Content - Type: application / javascript
Content - Length: 81114
Set - Cookie: srv_id = 3 d4ab7839f18072147522e28fe540966;
expires = Fri, 14 - Apr - 23 23: 15: 40 GMT;
domain = .apple.com;
path = /; HttpOnly; secure
Last - Modified: Thu, 28 Oct 2021 04: 47: 06 GMT
Accept - Ranges: bytes
Etag: "081a1dbb6cbd71:0"
Vary: Accept - Encoding
Strict - Transport - Security: max - age = 31536000;
includeSubdomains
X - Frame - Options: SAMEORIGIN
X - Content - Type - Options: nosniff
X - Xss - Protection: 1;
mode = block

"use strict";
angular.module("awcApp", ["ngAnimate", "ngCookies", "ngResource", "ngRoute", "ngSanitize", "ngTouch", "mm.foundation", "apriso.framework"]).config(["$routeProvider", "$httpProvider", "localizeServiceProvider", "$provide", function(a, b, c, d) {
	var e = function() {
		return {
			auth: ["authService", function(a) {
				return a.EnsureAuthenticated()
			}]
		}
	};
	d.decorator("$templateRequest", ["$delegate", function(a) {
		var b = function(b, c) {
			return a(b, !0)
		};
		return b
	}]), a.when("/", {
		templateUrl: "modules/common/views/blank.html",
		controller: "loginCtrl",
		resolve: e()
	}).when("/search", {
		templateUrl: "modules/search/views/search.html",
		controller: "searchCtrl",
		resolve: e()
	}).when("/execute/:screenId", {
		templateUrl: "modules/execute/execute.html",
		controller: "executeCtrl",
		resolve: e()
	}).when("/dashboard/", {
		templateUrl: "modules/dashboard/dashboard.html",
		controller: "myDashboartCtrl",
		resolve: e()
	}).otherwise({
		redirectTo: "/"
	}), c.useStaticFilesLoader({
		prefix: "i18n/delmia-apriso-",
		suffix: ".json"
	}).defaultLanguage("en")
}]).run(["$rootScope", "$window", "$sce", "SessionInfo", "authService", function(a, b, c, d, e) {
	$.getJSON("config.json").then(function(a) {
		d.UpdateConfig(a), e.Initialize()
	}, function(a) {
		console.info("Could not find or read config.json file. Using default values.")
	}).always(function() {
		e.EnsureAuthenticated().then(function() {
			e.displayNoticeIfRequired()
		})
	}), a.$on("$routeChangeError", function(a, e, f, g, h) {
		if (!g || g.authenticated === !1 && 0 === g.authState) {
			var i = c.trustAsResourceUrl(d.AprisoLoginAddress);
			b.location.href = i
		}
	})
}]), $(function() {
	var a = function() {
		var a = Q.defer();
		return $.getJSON("config.json").then(function(b) {
			a.resolve(b)
		}, function(b) {
			console.info("Could not find or read config.json file. Using default values."), a.resolve({})
		}), a.promise
	};
	a().then(function(a) {
		angular.module("awcApp").constant("config", a), angular.bootstrap(angular.element("html"), ["awcApp"])
	})
});
var Apriso;
! function(a) {
	var b;
	! function(a) {
		var b = function() {
			function a() {}
			return a
		}();
		a.TokenData = b;
		var c = function() {
			function a() {}
			return a
		}();
		a.TokenInfo = c;
		var d = function() {
			function a(a, b) {
				void 0 === b && (b = null), a && (this._dashboardOperationId = a._dashboardOperationId || a.DashboardOperationId, this._lastSignedOn = a._lastSignedOn || a.LastSignedOn, this._name = a._name || a.Name, this._loginName = a._loginName || a.LoginName, this._pictureUrl = a._pictureUrl || a.PictureUrl, this._userId = a._userId || a.UserId, this._equipment = a._equipment || a.Equipment, this._defaultMenuItemId = a._defaultMenuItemId || a.DefaultMenuItemId, this._showPasswordExpirationNotification = a._showPasswordExpirationNotification || a.ShowPasswordExpirationNotification, this._passwordExpirationDays = a._passwordExpirationDays || a.PasswordExpirationDays), b && (this._equipment = b)
			}
			return Object.defineProperty(a.prototype, "Name", {
				get: function() {
					return this._name
				},
				set: function(a) {
					this._name = a || "Unknown"
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(a.prototype, "LoginName", {
				get: function() {
					return this._loginName
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(a.prototype, "UserId", {
				get: function() {
					return this._userId
				},
				set: function(a) {
					this._userId = a
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(a.prototype, "LastSignedOn", {
				get: function() {
					return this._lastSignedOn
				},
				set: function(a) {
					this._lastSignedOn = a
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(a.prototype, "PictureUrl", {
				get: function() {
					return this._pictureUrl || "images/employee.png"
				},
				set: function(a) {
					this._pictureUrl = a
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(a.prototype, "DashboardOperationId", {
				get: function() {
					return this._dashboardOperationId
				},
				set: function(a) {
					this._dashboardOperationId = a
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(a.prototype, "Equipment", {
				get: function() {
					return this._equipment
				},
				set: function(a) {
					this._equipment = a
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(a.prototype, "ShowPasswordExpirationNotification", {
				get: function() {
					return this._showPasswordExpirationNotification
				},
				set: function(a) {
					this._showPasswordExpirationNotification = a
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(a.prototype, "PasswordExpirationDays", {
				get: function() {
					return this._passwordExpirationDays
				},
				set: function(a) {
					this._passwordExpirationDays = a
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(a.prototype, "DefaultMenuItemId", {
				get: function() {
					return this._defaultMenuItemId
				},
				set: function(a) {
					this._defaultMenuItemId = a
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(a.prototype, "DisplayName", {
				get: function() {
					return this._equipment ? this._name + " (" + this._equipment + ") " : this._name
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(a.prototype, "DisplayLoginName", {
				get: function() {
					return this._equipment ? this._loginName + " - " + this._equipment + " " : this._loginName
				},
				enumerable: !0,
				configurable: !0
			}), a
		}();
		a.UserInfo = d;
		var e = function() {
			function a(a, b, c, d, e, f, g, h, i, j) {
				var k = this;
				this.$modal = j, this.onBeforeAutoLogoutHandler = {}, this._tokenDataPromise = null, this._userInfoChangedHandlers = new Array, this._userInfoPromise = null, this.$q = b, this.$http = a, this.sessionInfo = c, this.$location = d, this.$cookieService = e, this.$sce = f, this.$window = g, this.$cookies = h, this.noticeService = i;
				try {
					window.sessionStorage.setItem("a", "1"), window.sessionStorage.removeItem("a")
				} catch (l) {
					this.useFallbackCookies = !0
				}
				this.$window.addEventListener("message", function(a) {
					var b = a.data;
					b && "delmia.apriso.portal" === b.source && "LOGOUT" === b.event && k.performLogout(!1)
				})
			}
			return a.prototype.isTokenValid = function() {
				if (this._tokenData) {
					var a = new Date;
					return !(a - this._tokenObtainedOn > 1e3 * this._tokenData.ExpiresIn)
				}
				return !1
			}, Object.defineProperty(a.prototype, "Token", {
				get: function() {
					return this._tokenData
				},
				enumerable: !0,
				configurable: !0
			}), a.prototype.Initialize = function() {
				this.LoadTokenData() && (this.WrapTokenIntoHttpCalls(), this.loadUserInfo())
			}, a.prototype.EnsureAuthenticated = function() {
				if (this.isTokenValid()) {
					var a = this.$q.defer();
					return a.resolve(), a.promise
				}
				return this.retrieveAuthToken()
			}, a.prototype.EnsureSession = function() {
				var a = this,
					b = this.$q.defer(),
					c = this.$http.defaults.headers.common.Authorization;
				return delete this.$http.defaults.headers.common.Authorization, this.$http.get(this.sessionInfo.KeepAliveAddress, {
					withCredentials: !0,
					xsrfCookieName: " "
				}).then(function(c) {
					c.data.indexOf("errorBody") > -1 || c.data.indexOf("loginForm") > -1 || c.data.indexOf("enumItem server") > -1 || c.data.indexOf("Apriso 3DPassport Login Page") > -1 || c.data.indexOf("loginBody") > -1 ? (b.reject(), a.performLogout(!0)) : b.resolve()
				})["catch"](function() {
					b.reject(), a.performLogout(!0)
				}), this.$http.defaults.headers.common.Authorization = c, b.promise
			}, a.prototype.addHandler = function(a, b, c) {
				b[c] = c
			}, a.prototype.removeHandler = function(a, b) {
				a[b] && delete a[b]
			}, a.prototype.onBeforeAutoLogout = function(a, b) {
				var c = this;
				this.addHandler(a, this.onBeforeAutoLogoutHandler, b), a.$on("$destroy", function() {
					c.removeHandler(c.onBeforeAutoLogoutHandler, b)
				})
			}, a.prototype.handleOnBeforeAutoLogout = function() {
				_.each(this.onBeforeAutoLogoutHandler, function(a) {
					return a()
				})
			}, a.prototype.performLogout = function(a) {
				a && this.handleOnBeforeAutoLogout(), this._tokenData = null, this._tokenDataPromise = null, this.ClearTokenData(), this.ClearUserInfo(), this.noticeService.clearStorage();
				var b = this.$sce.trustAsResourceUrl(this.sessionInfo.AprisoLogoutRedirectAddress);
				$("#xsrf-hidden").val(this.$cookies.get("XSRF-TOKEN")), $("#postback-form").attr("action", b).submit()
			}, a.prototype.SaveTokenData = function() {
				if (window.sessionStorage) {
					if (this._tokenData) try {
						window.sessionStorage.setItem("auth_token_data", JSON.stringify(this._tokenData))
					} catch (a) {
						this.useFallbackCookies = !0, this.$cookieService.put("auth_token_data", JSON.stringify(this._tokenData))
					}
				} else this._tokenData && this.$cookieService.put("auth_token_data", JSON.stringify(this._tokenData))
			}, a.prototype.ClearTokenData = function() {
				if (window.sessionStorage) try {
					window.sessionStorage.removeItem("auth_token_data")
				} catch (a) {
					this.useFallbackCookies = !0, this.$cookieService.remove("auth_token_data")
				} else this.$cookieService.remove("auth_token_data")
			}, a.prototype.ClearUserInfo = function() {
				this._userInfoPromise = null, this._userInfo = null, window.sessionStorage && !this.useFallbackCookies ? window.sessionStorage.removeItem("current_user_info") : this.$cookieService.remove("current_user_info")
			}, a.prototype.LoadTokenData = function() {
				if (window.sessionStorage && !this.useFallbackCookies) {
					var a = window.sessionStorage.getItem("auth_token_data");
					return !!a && (this._tokenData = JSON.parse(a), !0)
				}
				var b = this.$cookieService.get("auth_token_data");
				return !!b && (this._tokenData = JSON.parse(b), !0)
			}, a.prototype.WrapTokenIntoHttpCalls = function() {
				this.$http.defaults.headers.common.Authorization = "Bearer " + this._tokenData.AccessToken
			}, a.prototype.HandleUnauthorized = function(a) {
				a && 401 == a.status && this.RedirectToLoginPage(this.sessionInfo)
			}, a.prototype.RedirectToLoginPage = function(a) {
				this.handleOnBeforeAutoLogout(), this.ClearUserInfo();
				var b = this.$sce.trustAsResourceUrl(a.AprisoLoginAddress);
				this.$window.location.href = b
			}, a.prototype.SetTokenInfo = function(a, c, d) {
				var e = this,
					f = this.$q.defer();
				return this.$http.post(this.sessionInfo.BaseHttpServicesAddress + "/api/platform/1/token/info", JSON.stringify(btoa(a)), {
					withCredentials: !0,
					headers: {
						Authorization: void 0,
						"Content-Type": "application/json"
					}
				}).success(function(g) {
					var h = g;
					return e._tokenData = new b, e._tokenData.AccessToken = a, e._tokenData.ExpiresIn = Number(c), e._tokenData.TokenType = d, e._tokenData.RefreshToken = null, e._tokenObtainedOn = new Date, e._tokenData.EquipmentName = h.EquipmentName, e._tokenData.LicenseState = h.LicenseState, e.SaveTokenData(), e.WrapTokenIntoHttpCalls(), f.resolve()
				}).error(function() {
					return f.reject()
				}), f.promise
			}, a.prototype.retrieveAuthToken = function() {
				var a = this;
				if (this._tokenDataPromise) return this._tokenDataPromise;
				var b = this.$q.defer();
				return this.$http.get(this.sessionInfo.TokenAuthenticatedAddress, {
					withCredentials: !0,
					headers: {
						Authorization: void 0
					}
				}).success(function() {
					var c = "?client_id=" + a.sessionInfo.TokenClientId + "&redirect_uri=" + encodeURIComponent(a.sessionInfo.TokenRedirectUri) + "&scope=" + a.sessionInfo.TokenScopes + "&response_type=token";
					a.ClearTokenData(), a._tokenData = null, a.ClearUserInfo();
					var d = a,
						e = document.getElementById("token");
					e.onload = function() {
						var a = JSON.parse(window.localStorage.getItem("oauth_token_data")).oauth,
							c = a.access_token,
							e = a.expires_in,
							f = a.token_type;
						window.localStorage.removeItem("oauth_token_data"), d.SetTokenInfo(c, e, f).then(function() {
							return null == d._tokenData ? b.reject() : (d._tokenDataPromise = null, b.resolve(d._tokenData))
						})
					}, e.src = a.sessionInfo.TokenAddress + c
				}).error(function() {
					return console.log("Could not obtain token. Redirecting to login"), a.RedirectToLoginPage(a.sessionInfo), b.reject()
				}), this._tokenDataPromise = b.promise, this._tokenDataPromise
			}, a.prototype.GetUserInfo = function() {
				var a = this;
				if (this._userInfoPromise) return this._userInfoPromise;
				var b = this.$q.defer();
				return this._userInfoPromise = b.promise, this.retrieveAuthToken().then(function(c) {
					a._userInfo ? b.resolve(a._userInfo) : a.$http.get(a.sessionInfo.BaseHttpServicesAddress + "/api/platform/1/users/me").then(function(e) {
						var f = e.data,
							g = new d(f, c.EquipmentName);
						return a.saveUserInfo(g), a.handleUserInfoChanged(g), a._userInfo = g, b.resolve(g)
					})["catch"](function(c) {
						return console.error("Could not get User Info"), console.error(c), a.HandleUnauthorized(c), b.reject(c)
					})
				})["catch"](function(a) {
					return b.reject(a)
				}), this._userInfoPromise
			}, a.prototype.saveUserInfo = function(a) {
				if (window.sessionStorage) try {
					window.sessionStorage.setItem("current_user_info", JSON.stringify(a))
				} catch (b) {
					this.useFallbackCookies = !0, this.$cookieService.put("current_user_info", JSON.stringify(a))
				} else this.$cookieService.put("current_user_info", JSON.stringify(a))
			}, a.prototype.loadUserInfo = function() {
				if (window.sessionStorage && !this.useFallbackCookies) {
					var a = window.sessionStorage.getItem("current_user_info"),
						b = JSON.parse(a);
					b && (this._userInfo = new d(b))
				} else {
					var a = this.$cookieService.get("current_user_info"),
						b = JSON.parse(a);
					b && (this._userInfo = new d(b))
				}
			}, a.prototype.handleUserInfoChanged = function(a) {
				_.forEach(this._userInfoChangedHandlers, function(b) {
					b(a)
				})
			}, a.prototype.OnUserInfoChanged = function(a) {
				this._userInfoChangedHandlers.push(a)
			}, a.prototype.displayNoticeIfRequired = function() {
				var a = this;
				return this.noticeService.isNoticeRequired().then(function(b) {
					b && a.displayNotice()
				})
			}, a.prototype.displayNotice = function() {
				var a = this;
				setTimeout(function() {
					a.$modal.open({
						template: '<modal-page on-error="onError()" on-finished="onFinished()" ng-page="Notices.aspx?ExternalHandler=true"></modal-page>',
						windowClass: "apriso-reveal-modal-page",
						controller: ["$scope", "$modalInstance", function(b, c) {
							b.onFinished = function() {
								a.noticeService.setNoticesAcknowledgment(), c.close()
							}, b.onError = function() {
								setTimeout(function() {
									a.performLogout(!0)
								}, 5e3)
							}
						}]
					})
				}, 0)
			}, a
		}();
		a.AuthService = e
	}(b = a.WebClient || (a.WebClient = {}))
}(Apriso || (Apriso = {})), angular.module("awcApp").service("authService", ["$http", "$q", "SessionInfo", "$location", "$cookieStore", "$sce", "$window", "$cookies", "NoticeService", "$modal", function(a, b, c, d, e, f, g, h, i, j) {
	return new Apriso.WebClient.AuthService(a, b, c, d, e, f, g, h, i, j)
}]);
var Apriso;
! function(a) {
	var b;
	! function(a) {
		var b = function() {
			function a() {}
			return a.prototype.error = function(a, b) {
				void 0 === b && (b = null), toastr.error(a, b)
			}, a.prototype.warning = function(a, b) {
				void 0 === b && (b = null), toastr.warning(a, b)
			}, a.prototype.info = function(a, b) {
				void 0 === b && (b = null), toastr.info(a, b)
			}, a.prototype.success = function(a, b) {
				void 0 === b && (b = null), toastr.success(a, b)
			}, a.prototype.clear = function() {
				toastr.clear()
			}, a
		}();
		a.MessageService = b
	}(b = a.WebClient || (a.WebClient = {}))
}(Apriso || (Apriso = {})), angular.module("awcApp").service("MessageService", [function() {
	return new Apriso.WebClient.MessageService
}]).factory("$exceptionHandler", ["MessageService", "config", "$log", function(a, b, c) {
	return function(d) {
		a.error(d.message, "Unhandled Exception"), b && b.IsDebug && c.error(d), console.error(d)
	}
}]);
var Apriso;
! function(a) {
	var b;
	! function(a) {
		var b = function() {
			function a(a, b) {
				this._location = b, this.updateConfig(a, this._location)
			}
			return a.prototype.UpdateConfig = function(a) {
				this.updateConfig(a, this._location)
			}, a.prototype.updateConfig = function(b, c) {
				var d = b.Server || a.getUrlWithoutPath(c),
					e = b.Me || c.absUrl(),
					f = d,
					g = f.indexOf(".");
				g > -1 && (f = f.substr(0, g)), g = f.lastIndexOf("/"), g > -1 && (f = f.substr(g + 1));
				var h = b.AprisoInstanceName || f.toLocaleUpperCase(),
					i = {
						Me: e,
						Server: d,
						AprisoInstanceName: h,
						IsDebug: !1,
						HttpServicesAddress: d + "/Apriso/HttpServices",
						TokenServiceAddress: d + "/Apriso/Portal/sts/2.0/token",
						TokenServiceAuthenticatedAddress: d + "/Apriso/Portal/sts/2.0/authenticated",
						TokenServiceClientId: "0F92E127-A06E-4BE3-A1FC-1078F655743A",
						TokenServiceScopes: "personalization,standard_operations",
						TokenServiceRedirectUri: d + "/Apriso/Apriso/modules/oauth/oauth_callback.html",
						AprisoLoginUrl: d + "/Apriso/Start/logon.html?ReturnUrl=" + encodeURIComponent(e).toLowerCase(),
						AprisoLogoutServiceAddress: d + "/Apriso/Portal/sts/1.0/tokenservice.svc/signout",
						AprisoLogoutRedirectAddress: d + "/Apriso/Portal/Kiosk/DelmiaAprisoLogout?ReturnUrl=" + encodeURIComponent(e).toLowerCase(),
						AprisoKeepAliveUrl: d + "/Apriso/Portal/Kiosk/KeepAlive.aspx?ProlongateSession=true",
						AuthRedirectUrl: d + "/Apriso/Portal",
						PortalLink: d + "/Apriso/Portal",
						FlexNetHelpURL: d + "/Apriso/Help",
						FlexNetHelpServiceUrl: d + "/Apriso/Help/HelpService.ashx"
					};
				this._configObject = angular.extend({}, i, b)
			}, a.getUrlWithoutPath = function(a) {
				var b = a.protocol(),
					c = a.host(),
					d = a.port(),
					e = b + "://" + c;
				return "http" == b && 80 == d || "https" == b && 443 == d || (e += ":" + d), e
			}, Object.defineProperty(a.prototype, "IsDebug", {
				get: function() {
					return this._configObject.IsDebug
				},
				set: function(a) {
					this._configObject.IsDebug = a
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(a.prototype, "BaseHttpServicesAddress", {
				get: function() {
					return this._configObject.HttpServicesAddress
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(a.prototype, "TokenAddress", {
				get: function() {
					return this._configObject.TokenServiceAddress
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(a.prototype, "TokenAuthenticatedAddress", {
				get: function() {
					return this._configObject.TokenServiceAuthenticatedAddress
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(a.prototype, "TokenClientId", {
				get: function() {
					return this._configObject.TokenServiceClientId
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(a.prototype, "TokenRedirectUri", {
				get: function() {
					return this._configObject.TokenServiceRedirectUri
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(a.prototype, "TokenScopes", {
				get: function() {
					return this._configObject.TokenServiceScopes
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(a.prototype, "AprisoLoginAddress", {
				get: function() {
					return this._configObject.AprisoLoginUrl
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(a.prototype, "AprisoLogoutAddress", {
				get: function() {
					return this._configObject.AprisoLogoutServiceAddress
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(a.prototype, "AprisoLogoutRedirectAddress", {
				get: function() {
					return this._configObject.AprisoLogoutRedirectAddress
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(a.prototype, "KeepAliveAddress", {
				get: function() {
					return this._configObject.AprisoKeepAliveUrl
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(a.prototype, "AuthRedirectUri", {
				get: function() {
					return this._configObject.AuthRedirectUrl
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(a.prototype, "PortalLink", {
				get: function() {
					return this._configObject.PortalLink
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(a.prototype, "Me", {
				get: function() {
					return this._configObject.Me
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(a.prototype, "FlexNetHelpURL", {
				get: function() {
					return this._configObject.FlexNetHelpURL
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(a.prototype, "FlexNetHelpServiceUrl", {
				get: function() {
					return this._configObject.FlexNetHelpServiceUrl
				},
				enumerable: !0,
				configurable: !0
			}), a
		}();
		a.SessionInfo = b
	}(b = a.WebClient || (a.WebClient = {}))
}(Apriso || (Apriso = {})), angular.module("awcApp").service("SessionInfo", ["config", "$location", function(a, b) {
	return new Apriso.WebClient.SessionInfo(a, b)
}]);
var Apriso;
! function(a) {
	var b;
	! function(a) {
		! function(a) {
			a[a.None = 0] = "None", a[a.Operation = 1] = "Operation", a[a.Screen = 2] = "Screen", a[a.Report = 3] = "Report", a[a.FlexView = 4] = "FlexView", a[a.WebDynamicGrid = 5] = "WebDynamicGrid", a[a.ScreenFramework = 6] = "ScreenFramework"
		}(a.MenuItemType || (a.MenuItemType = {}));
		var b = a.MenuItemType,
			c = function() {
				function a() {}
				return a
			}();
		a.MenuItem = c;
		var d = function() {
			function a() {}
			return a
		}();
		a.ScreenDefinitions = d;
		var e = function() {
			function a() {
				this._cache = new Array
			}
			return a.prototype.Load = function() {
				return this._cache
			}, a.prototype.Store = function(a, b) {
				this._confId = b, this._cache = a
			}, Object.defineProperty(a.prototype, "ConfId", {
				get: function() {
					return this._confId
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(a.prototype, "IsEmpty", {
				get: function() {
					return null == this._confId && 0 == this._cache.length
				},
				enumerable: !0,
				configurable: !0
			}), a
		}();
		a.InMemoryMenuItemStore = e;
		var f = function() {
			function a(a, b) {
				this._hostName = a, this._userId = b
			}
			return a.CanIUseIt = function() {
				try {
					return !!localStorage && (localStorage.setItem("a", "1"), localStorage.removeItem("a"), !0)
				} catch (a) {
					return !1
				}
			}, a.prototype.Load = function() {
				return JSON.parse(localStorage.getItem(this.StoreItemsKey))
			}, a.prototype.Store = function(a, b) {
				try {
					localStorage.setItem(this.StoreItemsKey, JSON.stringify(a)), localStorage.setItem(this.StoreConfId, b), localStorage.setItem(this.StoreUserLastActiveDateKey, Date.now().toString())
				} catch (c) {
					this.IsQuotaException(c) && (console.log("Quota Excedeed saving data for user: " + this._userId), this.OldestUserKey != this._userId && (this.RemoveDataForOldestUser(), this.Store(a, b)))
				}
			}, a.prototype.IsQuotaException = function(a) {
				return 1014 === a.code || 22 === a.code || "NS_ERROR_DOM_QUOTA_REACHED" === a.name || "QuotaExceededError" === a.name
			}, a.prototype.RemoveDataForOldestUser = function() {
				var a = this.OldestUserKey;
				a && this.ClearStoredMenuItemsForUser(a), console.log("Deleted data for user: " + a)
			}, Object.defineProperty(a.prototype, "OldestUserKey", {
				get: function() {
					var a = "",
						b = Object.keys(localStorage);
					return b.forEach(function(b) {
						if (0 === b.lastIndexOf("user_last_active_", 0)) {
							var c = parseInt(localStorage.getItem(b));
							("" == a || c < parseInt(localStorage.getItem(a))) && (a = b)
						}
					}), parseInt(a.split("_")[3])
				},
				enumerable: !0,
				configurable: !0
			}), a.prototype.ClearStoredMenuItems = function() {
				this.ClearStoredMenuItemsForUser(this._userId)
			}, a.prototype.ClearStoredMenuItemsForUser = function(a) {
				localStorage.removeItem(this.GetStoreItemsKeyForUser(a)), localStorage.removeItem(this.GetStoreConfIdForUser(a)), localStorage.removeItem(this.GetStoreUserLastActiveDateKeyForUser(a))
			}, Object.defineProperty(a.prototype, "ConfId", {
				get: function() {
					return localStorage.getItem(this.StoreConfId)
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(a.prototype, "IsEmpty", {
				get: function() {
					var a = localStorage.getItem(this.StoreItemsKey),
						b = localStorage.getItem(this.StoreConfId),
						c = localStorage.getItem(this.StoreUserLastActiveDateKey);
					return a && 0 == a.length && b && 0 == b.length && c && 0 == c.length || !a || !b || !c
				},
				enumerable: !0,
				configurable: !0
			}), a.prototype.GetStoreItemsKeyForUser = function(a) {
				return "users_menu_items_" + a + "_" + this._hostName
			}, a.prototype.GetStoreConfIdForUser = function(a) {
				return "users_menu_items_conf_id_" + a + "_" + this._hostName
			}, a.prototype.GetStoreUserLastActiveDateKeyForUser = function(a) {
				return "user_last_active_" + a + "_" + this._hostName
			}, Object.defineProperty(a.prototype, "StoreItemsKey", {
				get: function() {
					return this.GetStoreItemsKeyForUser(this._userId)
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(a.prototype, "StoreConfId", {
				get: function() {
					return this.GetStoreConfIdForUser(this._userId)
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(a.prototype, "StoreUserLastActiveDateKey", {
				get: function() {
					return this.GetStoreUserLastActiveDateKeyForUser(this._userId)
				},
				enumerable: !0,
				configurable: !0
			}), a
		}();
		a.LocalStorageMenuItemStore = f;
		var g = function() {
			function a(a, b, c, d, e, f, g, h, i) {
				this.$location = a, this._authService = b, this.$q = c, this.$http = d, this._navigator = e, this._sessionInfo = f, this.$rootScope = g, this._hashService = i, this._itemsHash = "", this._reloadIntervalInMinutes = h.MenuItemRefreshMinutes || 1
			}
			return Object.defineProperty(a.prototype, "Items", {
				get: function() {
					if (!this._items) throw new Error("Menu items not loaded please use Load() first");
					return this._items
				},
				enumerable: !0,
				configurable: !0
			}), a.prototype.Load = function(a) {
				var c = this;
				void 0 === a && (a = !1);
				var d = this.$q.defer();
				if (a && (this._getItemsPromise = null), this._items && !a) d.resolve(this._items);
				else {
					if (this._getItemsPromise) return this._getItemsPromise;
					this._getItemsPromise = d.promise, this.EnsureStore().then(function() {
						if (c._store.IsEmpty || a) {
							var e, f = c._sessionInfo.BaseHttpServicesAddress + "/api/platform/1/screens",
								g = c._store.ConfId;
							e = g && !a ? f + "/" + g : f, c._lastCheckDate = new Date, c._authService.EnsureAuthenticated().then(function() {
								c.$http.get(e).then(function(a) {
									var e = a.data,
										f = e.Screens;
									return c._navigator.isMobile && (f = _.filter(f, function(a) {
										return a.Type !== b.Screen
									})), f = _.sortBy(f, function(a) {
										return a.Name.toLowerCase()
									}), c.setItems(f), c._store.Store(c._items, e.ConfId), c._refreshInterval && (clearInterval(c._refreshInterval), c._lastCheckDate = new Date), c._refreshInterval = setInterval(function() {
										c.doPeriodicCheck()
									}, 1e4), d.resolve(f)
								})["catch"](function(a) {
									return c._authService.HandleUnauthorized(a), d.reject(a)
								})
							})["catch"](function(a) {
								return d.reject(a)
							})
						} else {
							var h = c._store.Load();
							c.setItems(h), d.resolve(c._items), c._refreshInterval && (clearInterval(c._refreshInterval), c._lastCheckDate = new Date), c._refreshInterval = setInterval(function() {
								c.doPeriodicCheck()
							}, 1e4)
						}
					})["catch"](function(a) {
						return d.reject(a)
					})
				}
				return d.promise
			}, a.prototype.FindById = function(a, b) {
				return b ? _.find(this.Items, function(c) {
					return c.Id == a && c.ProfileId == b
				}) : _.find(this.Items, function(b) {
					return b.Id == a
				})
			}, a.prototype.OnReloaded = function(a) {
				this._onReloadedHandler = a
			}, a.prototype.EnsureStore = function() {
				var a = this,
					b = this.$q.defer();
				return this._store ? b.resolve() : f.CanIUseIt() ? this._authService.GetUserInfo().then(function(c) {
					return a._store = new f(a.$location.host(), c.UserId), b.resolve()
				})["catch"](function(a) {
					return b.reject(a)
				}) : (this._store = new e, b.resolve()), b.promise
			}, a.prototype.doPeriodicCheck = function() {
				var a = this;
				this.$rootScope.$apply(function() {
					if (a._lastCheckDate) {
						var b = new Date;
						b - a._lastCheckDate > 60 * a._reloadIntervalInMinutes * 1e3 && (console.log("Periodically refreshing menu items"), a.Load(!0).then(function() {
							a._onReloadedHandler && a._onReloadedHandler()
						}))
					} else console.log("Periodically refreshing menu items"), a.Load(!0).then(function() {
						a._onReloadedHandler && a._onReloadedHandler()
					})
				})
			}, a.prototype.setItems = function(a) {
				var b = this._hashService.getHash(a || {});
				return b != this._itemsHash && (this._itemsHash = b, this._items ? Array.prototype.splice.apply(this._items, [0, this._items.length].concat(a)) : this._items = a, !0)
			}, a
		}();
		a.MenuItemDataService = g
	}(b = a.WebClient || (a.WebClient = {}))
}(Apriso || (Apriso = {})), angular.module("awcApp").service("MenuItemStore", ["$location", "authService", "$q", "$http", "navigatorService", "SessionInfo", "$rootScope", "config", "hashService", function(a, b, c, d, e, f, g, h, i) {
	return new Apriso.WebClient.MenuItemDataService(a, b, c, d, e, f, g, h, i)
}]);
var Apriso;
! function(a) {
	var b;
	! function(a) {
		var b = function() {
			function a() {}
			return Object.defineProperty(a.prototype, "isMobile", {
				get: function() {
					var a = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
					return !!a || navigator.userAgent.indexOf("ARM") > -1
				},
				enumerable: !0,
				configurable: !0
			}), a
		}();
		a.Navigator = b
	}(b = a.WebClient || (a.WebClient = {}))
}(Apriso || (Apriso = {})), angular.module("awcApp").service("navigatorService", function() {
	return new Apriso.WebClient.Navigator
});
var Apriso;
! function(a) {
	var b;
	! function(a) {
		var b = function() {
			function a(a, b) {
				this._localizeService = b, this.$modal = a
			}
			return a.prototype.show = function(a, b) {
				null == this.instance && (a = a || "MESSAGES.STARTING", b = b || "Starting DELMIA Apriso...", this.instance = this.$modal.open({
					template: '<div class="loader-content"><div class="apr-ctspinner"><span class="apr-ctspinner-bar"></span><span class="apr-ctspinner-bar apr-ctspinner-bar1"></span><span class="apr-ctspinner-bar apr-ctspinner-bar2"></span><span class="apr-ctspinner-bar apr-ctspinner-bar3"></span></div><span class="text-center" apr-localize="' + a + '">' + b + "</span></div>",
					keyboard: !1,
					backdrop: "static",
					windowClass: "apriso-reveal-modal"
				}))
			}, a.prototype.hide = function() {
				null != this.instance && this.instance.close(0)
			}, a
		}();
		a.LoaderService = b
	}(b = a.WebClient || (a.WebClient = {}))
}(Apriso || (Apriso = {})), angular.module("awcApp").service("loaderService", ["$modal", "localizeService", function(a, b) {
	return new Apriso.WebClient.LoaderService(a, b)
}]);
var Apriso;
! function(a) {
	var b;
	! function(a) {
		var b = function() {
			function a() {
				this.restrict = "A", this.replace = !0, this.scope = !1, this.link = function(a, b, c) {
					var d = $(c.collapsesElement);
					c.collapsed || b.addClass("collapse-show"), c.$observe("collapsed", function(a) {
						a ? (d.hide(100), b.removeClass("collapse-show"), b.addClass("collapse-hide")) : (d.show(100), b.removeClass("collapse-hide"), b.addClass("collapse-show"))
					}), b.click(function() {
						a.$apply(function() {
							var a = c.collapsed;
							a ? c.$set("collapsed", !1) : c.$set("collapsed", !0)
						})
					})
				}
			}
			return a
		}();
		a.CollapsesElementDirective = b
	}(b = a.WebClient || (a.WebClient = {}))
}(Apriso || (Apriso = {})), angular.module("awcApp").directive("collapsesElement", function() {
	return new Apriso.WebClient.CollapsesElementDirective
});
var Apriso;
! function(a) {
	var b;
	! function(a) {
		var b = function() {
			function a() {
				this.restrict = "A", this.scope = !1, this.priority = 1001, this.link = function(a, b, c) {
					var d = c.aprBlur;
					b.on("blur", function() {
						setTimeout(function() {
							a.$eval(d), a.$digest()
						}, 200)
					})
				}
			}
			return a
		}();
		a.xNgBlurDirective = b;
		var c = function() {
			function a() {
				this.restrict = "A", this.scope = !1, this.priority = 1001, this.link = function(a, b, c) {
					var d = c.aprFocus;
					b.on("focus", function() {
						a.$eval(d), a.$digest()
					})
				}
			}
			return a
		}();
		a.xNgFocusDirective = c
	}(b = a.WebClient || (a.WebClient = {}))
}(Apriso || (Apriso = {})), angular.module("awcApp").directive("aprBlur", function() {
	return new Apriso.WebClient.xNgBlurDirective
}), angular.module("awcApp").directive("aprFocus", function() {
	return new Apriso.WebClient.xNgFocusDirective
});
var Apriso;
! function(a) {
	var b;
	! function(a) {
		var b = function() {
			function a() {
				this.restrict = "A", this.link = function(a, b, c) {
					b.bind("error", function() {
						c.src != c.defaultSrc && c.$set("src", c.defaultSrc)
					})
				}
			}
			return a
		}();
		a.DefaultSrcDirective = b
	}(b = a.WebClient || (a.WebClient = {}))
}(Apriso || (Apriso = {})), angular.module("awcApp").directive("defaultSrc", [function() {
	return new Apriso.WebClient.DefaultSrcDirective
}]);
var Apriso;
! function(a) {
	var b;
	! function(a) {
		var b = function() {
			function b(a, b, c) {
				this.$window = a, this._messageService = b, this._localizeService = c;
				var d = this;
				a.addEventListener("message", function(a) {
					var b = a.data;
					b && "delmia.apriso.mmscreen" === b.source && ("ERROR" === b.event ? d.onOpenErrorHandler && d.onOpenErrorHandler(b.alias, b.profileId) : "OPENED" === b.event ? d.onOpenedHandler && d.onOpenedHandler(b.alias, b.profileId) : "UNKNOWN" === b.event && (d.onOpenedHandler && d.onOpenedHandler(b.alias, b.profileId), setTimeout(function() {
						d._localizeService.localize("MESSAGES.MMSCREEN_LOAD_UNKNOWN", "If the screen you were attempting to load did not open Apriso Desktop Client please make sure you have the Apriso Desktop Client Launcher installed.").then(function(a) {
							return d._messageService.info(a)
						})
					}, 3e3)))
				}, !1)
			}
			return b.prototype.displayMMScreen = function(b) {
				if (b.Type === a.MenuItemType.Screen && this.onDisplayMMScreenHandler) {
					var c = b.Url;
					this.onDisplayMMScreenHandler(b, c)
				}
			}, b.prototype.onDisplayMMScreen = function(a, b) {
				var c = this;
				this.onDisplayMMScreenHandler = b, a.$on("$destroy", function() {
					c.onDisplayMMScreenHandler = null
				})
			}, b.prototype.onOpened = function(a, b) {
				var c = this;
				this.onOpenedHandler = b, a.$on("$destroy", function() {
					c.onOpenedHandler = null
				})
			}, b.prototype.onOpenError = function(a, b) {
				var c = this;
				this.onOpenErrorHandler = b, a.$on("$destroy", function() {
					c.onOpenErrorHandler = null
				})
			}, b
		}();
		a.MMScreenDisplayService = b
	}(b = a.WebClient || (a.WebClient = {}))
}(Apriso || (Apriso = {})), angular.module("awcApp").service("mmScreenDisplayService", ["$window", "MessageService", "localizeService", function(a, b, c) {
	return new Apriso.WebClient.MMScreenDisplayService(a, b, c)
}]);
var Apriso;
! function(a) {
	var b;
	! function(a) {
		var b = function() {
			function b(a, b, c, d, e, f) {
				var g = this;
				this.screenTabsService = a, this.recentsService = b, this.mmScreenDisplayService = c, this._window = d, this.authService = e, this.loaderService = f, this.onOperationCompletedHandler = {}, this.onFullscreenOperationRequestedHandler = {}, d.addEventListener("message", function(a) {
					return g.handleMessage(a)
				}, !1)
			}
			return b.prototype.handleMessage = function(a) {
				var b = a.data;
				b && "delmia.apriso.operation" === b.source && "FINISHED" === b.event && this.handleOperationFinishedMessage(b)
			}, b.prototype.handleOperationFinishedMessage = function(a) {
				a.id && (this.screenTabsService.handleOperationFinished(a.id), _.each(this.onOperationCompletedHandler, function(b) {
					return b(a.id)
				}))
			}, b.prototype.addHandler = function(a, b, c) {
				b[c] = c
			}, b.prototype.removeHandler = function(a, b) {
				a[b] && delete a[b]
			}, b.prototype.onOperationFinished = function(a, b) {
				var c = this;
				this.addHandler(a, this.onOperationCompletedHandler, b), a.$on("$destroy", function() {
					c.removeHandler(c.onOperationCompletedHandler, b)
				})
			}, b.prototype.onFullscreenOperationRequested = function(a, b) {
				var c = this;
				this.addHandler(a, this.onFullscreenOperationRequestedHandler, b), a.$on("$destroy", function() {
					c.removeHandler(c.onFullscreenOperationRequestedHandler, b)
				})
			}, b.prototype.fullscreenOperationRequested = function(a) {
				_.each(this.onFullscreenOperationRequestedHandler, function(b) {
					return b(a)
				})
			}, b.prototype.display = function(b, c) {
				var d = this;
				void 0 === c && (c = !0), this.authService.EnsureSession().then(function() {
					b.Type === a.MenuItemType.Screen ? d.mmScreenDisplayService.displayMMScreen(b) : b.Type !== a.MenuItemType.Operation && b.Type !== a.MenuItemType.ScreenFramework && b.Type !== a.MenuItemType.Report && b.Type !== a.MenuItemType.WebDynamicGrid || !b.PreferFullscreen ? d.screenTabsService.addTabItem(b, c) : d.fullscreenOperationRequested(b)
				})
			}, b
		}();
		a.MenuItemDisplayService = b
	}(b = a.WebClient || (a.WebClient = {}))
}(Apriso || (Apriso = {})), angular.module("awcApp").service("menuItemDisplayService", ["screenTabsService", "RecentsService", "mmScreenDisplayService", "$window", "authService", "loaderService", function(a, b, c, d, e, f) {
	return new Apriso.WebClient.MenuItemDisplayService(a, b, c, d, e, f)
}]);
var Apriso;
! function(a) {
	var b;
	! function(a) {
		var b = function() {
			function a(a, b) {
				var c = this;
				this.restrict = "EA", this.scope = {
					item: "=?"
				}, this.template = '<div class="th screen-item text-center"><div class="favs-btn" ng-click="toggleFav($event)" ng-class="{ \'add-to-favs\': (!item.IsFavorite), \'remove-from-favs\': item.IsFavorite  }"></div><img ng-src="{{item.MediumIconUri}}" class="screen-icon"/><div ng-bind="item.Name" class="screen-title" title="{{item.Name}}"></div><span title="{{item.ProfileName}}" ng-show="item.ProfileName" title="{{item.ProfileName}}" ng-bind="item.ProfileName" class="screen-profile-name long-text"></span></div>', this.link = function(a, b) {
					b.click(function() {
						a.$apply(function() {
							c.menuItemDisplayService.display(a.item)
						})
					}), a.toggleFav = function(b) {
						b.stopPropagation(), b.preventDefault(), a.item.IsFavorite = !a.item.IsFavorite, a.item.IsFavorite ? c.favoritesService.addToFavorites(a.item.Id, a.item.ProfileId) : c.favoritesService.removeFromFavorites(a.item.Id, a.item.ProfileId)
					}
				}, this.menuItemDisplayService = a, this.favoritesService = b
			}
			return a
		}();
		a.MenuItemDirective = b
	}(b = a.WebClient || (a.WebClient = {}))
}(Apriso || (Apriso = {})), angular.module("awcApp").directive("menuItem", ["menuItemDisplayService", "FavoritesService", function(a, b) {
	return new Apriso.WebClient.MenuItemDirective(a, b)
}]);
var Apriso;
! function(a) {
	var b;
	! function(a) {
		var b = function() {
			function a(a, b, c, d, e) {
				var f = this;
				this.restrict = "EA", this.scope = {}, this.templateUrl = "modules/common/directives/templates/appBarTemplate.html", this.link = function(a, b) {
					a.show = !0, f.authService.EnsureAuthenticated().then(function() {
						2 != f.authService.Token.LicenseState && (a.licenseError = !0, a.showLicenseError = !0, a.helpUrl = f.sessionInfo.FlexNetHelpURL)
					}), f.authService.GetUserInfo().then(function(b) {
						a.showPasswordExpirationWarning = b.ShowPasswordExpirationNotification, a.passwordExpirationDays = b.PasswordExpirationDays
					}), a.dismissLicenseError = function() {
						a.showLicenseError = !1
					}, a.dismissPasswordExpriationWarning = function() {
						a.showPasswordExpirationWarning = !1
					}, f.menuItemStore.Load().then(function() {
						a.currentItems = f.menuItemStore.Items
					}), a.onSearchItemSelected = function(a) {
						f.menuItemDisplayService.display(a)
					}, a.activeTabs = f.screenTabsService.Tabs, a.activateTab = function(b) {
						f.screenTabsService.selectTab(b), a.showSideMenu = !1
					}, a.deleteTab = function(a) {
						f.screenTabsService.removeTab(a)
					}, a.activateHome = function() {
						f.screenTabsService.selectHome(), a.showSideMenu = !1
					}, a.activeTab = f.screenTabsService.ActiveTab, a.showMobileMenu = !1, a.showSideMenu = !1, a.searchOptions = {
						hasFocus: !0,
						isTurnedOff: !1
					}, a.itemSelected = function(a) {
						f.menuItemDisplayService.display(a)
					}, a.toggleMobileSearch = function() {
						if (a.showMobileMenu) a.showMobileMenu = !1;
						else {
							a.showMobileMenu = !0;
							var c = b.find(".apr-mobile-search-container .search-box-input");
							setTimeout(function() {
								return c.focus()
							}, 10)
						}
					}, a.toggleSideMenu = function() {
						a.showSideMenu ? a.showSideMenu = !1 : (a.showSideMenu = !0, a.showMobileMenu = !1)
					}, a.$on("hideAppBar", function() {
						a.show = !1
					}), a.$on("showAppBar", function() {
						a.show = !0
					}), a.$on("hideAppBarSearch", function() {
						a.searchOptions.isTurnedOff = !0
					}), a.$on("showAppBarSearch", function() {
						a.searchOptions.isTurnedOff = !1
					})
				}, this.menuItemStore = a, this.screenTabsService = b, this.menuItemDisplayService = c, this.authService = d, this.sessionInfo = e
			}
			return a
		}();
		a.AppBarDirective = b
	}(b = a.WebClient || (a.WebClient = {}))
}(Apriso || (Apriso = {})), angular.module("awcApp").directive("appBar", ["MenuItemStore", "screenTabsService", "menuItemDisplayService", "authService", "SessionInfo", function(a, b, c, d, e) {
	return new Apriso.WebClient.AppBarDirective(a, b, c, d, e)
}]);
var Apriso;
! function(a) {
	var b;
	! function(a) {
		var b = function() {
			function a() {
				this.restrict = "E", this.scope = {}, this.transclude = !0, this.template = '<span class="label success radius version-info" style="display:none">Version: <span ng-transclude></span></span>', this.link = function(a, b, c) {}
			}
			return a
		}();
		a.VersionInfoDirective = b
	}(b = a.WebClient || (a.WebClient = {}))
}(Apriso || (Apriso = {})), angular.module("awcApp").directive("versionInfo", function() {
	return new Apriso.WebClient.VersionInfoDirective
});
var Apriso;
! function(a) {
	var b;
	! function(a) {
		var b = function() {
			function a() {}
			return a.prototype.formatTextFor = function(a, b) {
				var c = a.menuItem[b];
				if (!c || _.isEmpty(c)) return "​";
				if (b != a.matchedAttribute) return c;
				for (var d = "", e = 0, f = !0, g = 0; g < a.match.length; g++) {
					var h = a.match[g];
					h.index > e && (f || (d += "</strong>", f = !0), d += c.substr(e, h.index - e)), f && (d += "<strong>", f = !1), d += h.content, e = h.index + h.content.length
				}
				return f || (d += "</strong>"), e < c.length && (d += c.substr(e)), d
			}, a.prototype.format = function(a) {
				var b = this.formatTextFor(a, "Name"),
					c = this.formatTextFor(a, "ContextName"),
					d = this.formatTextFor(a, "Keywords"),
					e = this.formatTextFor(a, "ProfileName");
				return {
					name: b,
					contextName: c,
					keywords: d,
					profile: e
				}
			}, a
		}();
		a.MenuItemSearchFormaterService = b
	}(b = a.WebClient || (a.WebClient = {}))
}(Apriso || (Apriso = {})), angular.module("awcApp").service("menuItemSearchFormaterService", [function() {
	return new Apriso.WebClient.MenuItemSearchFormaterService
}]);
var Apriso;
! function(a) {
	var b;
	! function(a) {
		var b = function() {
			function a(a, b) {
				var c = this;
				this.menuItemFilterService = a, this.localizeService = b, this.restrict = "E", this.scope = {
					items: "=",
					onItemSelected: "&?",
					select: "&?",
					defaultText: "@",
					itemTextProp: "@?",
					itemTextIcon: "@?"
				}, this.templateUrl = "modules/common/directives/templates/searchBoxTemplate.html", this.selectItem = function(a, b, c) {
					if (void 0 === c && (c = !0), a.filteredItems && 0 != a.filteredItems.length) {
						var d, e = a.currentIdx;
						c ? (d = b % a.filteredItems.length, d < 0 && (d = a.filteredItems.length - 1)) : d = Math.max(0, Math.min(a.filteredItems.length - 1, b)), e != d && (a.currentIdx = d, a.filteredItems[e].isSelected = !1, a.filteredItems[d].isSelected = !0, a.selectedItem = a.filteredItems[d])
					}
				}, this.select = function(a, b) {
					if (b) {
						var d = a.filteredItems.indexOf(b);
						d >= 0 && c.selectItem(a, d)
					}
				}, this.link = function(a, b) {
					a.phrase = "";
					var d = b.find(".search-box-input");
					d.off("compositionstart").off("compositionend"), a.$watch("phrase", function(b, d) {
						if (b) {
							var e = c.menuItemFilterService.filter(a.items, b),
								f = _.map(e, function(a) {
									return "SEARCH.FILTER_GROUP." + a.name
								});
							c.localizeService.localize(f, []).then(function(b) {
								b = angular.extend({}, b);
								var c = _.reduce(e, function(a, c) {
									var d = b["SEARCH.FILTER_GROUP." + c.name];
									return _.each(c.menuItems, function(b) {
										a.push({
											isSelected: !1,
											item: b,
											groupName: d
										}), d = ""
									}), a
								}, []);
								a.filteredItems = c, a.filteredItems.length > 0 && (a.currentIdx = 0, a.selectedItem = a.filteredItems[0], a.filteredItems[0].isSelected = !0)
							})
						} else d && (a.filteredItems = [], a.currentIdx = -1, a.selectedItem = null)
					}), a.$watch("filteredItems", function(a, b) {
						a && setTimeout(function() {
							e.scroll()
						})
					}), a.selected = function(b) {
						a.$eval(a.onItemSelected({
							item: b.item.menuItem
						})), a.filteredItems = [], a.phrase = "", a.selectedItem = null, document.activeElement && $(document.activeElement).hasClass("search-box-input") && $(document.activeElement).blur()
					}, a.select = function(b) {
						return c.select(a, b)
					}, a.focus = function() {
						$("input", b).focus()
					}, a.currentIdx = -1, a.clear = function(c) {
						if (document.activeElement && !c) {
							if ($(document.activeElement).hasClass("search-box-input")) return;
							var d = $(document.activeElement).parents("search-box");
							if (d.length > 0 && "" !== a.phrase) return void $(".search-box-input", b).focus()
						}
						a.filteredItems = [], a.phrase = ""
					};
					var e = b.find(".apr-search-container"),
						f = function() {
							if (0 == e.length) return 0;
							var a = e[0].offsetHeight;
							if (0 == a) return 0;
							var b = e[0].firstElementChild,
								c = "search-box-item" == b.localName ? b.offsetHeight : 54;
							return 0 == c && (b = b.firstElementChild, c = "apr-search-item" == b.localName ? b.offsetHeight : 54), 0 != c ? Math.round(a / c) : 0
						};
					b.keydown(function(b) {
						if (!b.shiftKey && !b.ctrlKey && (27 == b.keyCode && (a.$apply(function() {
								a.clear(!0)
							}), b.preventDefault()), 40 == b.keyCode && a.$apply(function() {
								b.preventDefault(), c.selectItem(a, a.currentIdx + 1)
							}), 38 == b.keyCode && a.$apply(function() {
								b.preventDefault(), c.selectItem(a, a.currentIdx - 1)
							}), 33 == b.keyCode && a.$apply(function() {
								b.preventDefault(), c.selectItem(a, a.currentIdx - f(), !1)
							}), 34 == b.keyCode && a.$apply(function() {
								b.preventDefault(), c.selectItem(a, a.currentIdx + f(), !1)
							}), 35 == b.keyCode && a.$apply(function() {
								b.preventDefault(), c.selectItem(a, a.filteredItems.length - 1, !1)
							}), 36 == b.keyCode && a.$apply(function() {
								b.preventDefault(), c.selectItem(a, 0, !1)
							}), 13 == b.keyCode)) {
							if (!a.selectedItem) return;
							a.$apply(function() {
								a.selected(a.selectedItem)
							})
						}
					});
					var g = b.parents(".apr-searchbox-container");
					if (g.length > 0 && e.length > 0) {
						var h = b.find(".group-name-placeholder");
						if (0 == h.length) return;
						e.scroll(function(a) {
							for (var b, c = e.find(".search-item-with-group"), d = 0; d < c.length; d++) {
								var f = c[d],
									g = f.offsetTop,
									i = e.scrollTop(),
									j = $(f);
								if (g >= i) j.hasClass("search-item-with-group-normal") || (j.removeClass("search-item-with-group-sticky search-item-with-group-scrolling"), j.addClass("search-item-with-group-normal"), j.children(".group-name")[0].style.top = "0px");
								else {
									var k = f.getBoundingClientRect().height,
										l = 0,
										m = k + 1;
									if (d < c.length - 1 && (l = c[d + 1].offsetTop, m = l - i), m > k) {
										if (!j.hasClass("search-item-with-group-sticky")) {
											var n = e[0].getBoundingClientRect().top + "px";
											h[0].style.top = n, j.removeClass("search-item-with-group-normal search-item-with-group-scrolling"), j.addClass("search-item-with-group-sticky")
										}
										b = f
									} else j.hasClass("search-item-with-group-scrolling") || (j.removeClass("search-item-with-group-normal search-item-with-group-sticky"), j.addClass("search-item-with-group-scrolling"), j.children(".group-name")[0].style.top = l - k + "px")
								}
							}
							if (b) {
								var o = $(b).children(".group-name").text();
								h.hasClass("group-name-placeholder-visible") && o === h.text() || (h.text(o), h.addClass("group-name-placeholder-visible"))
							} else h.hasClass("group-name-placeholder-visible") && h.removeClass("group-name-placeholder-visible")
						})
					}
					c.clearSearchBoxWhenToggleMobileSearchBar(a, b)
				}
			}
			return a.prototype.clearSearchBoxWhenToggleMobileSearchBar = function(a, b) {
				a.$watch(function() {
					return b.is(":visible")
				}, function() {
					a.clear(!0)
				})
			}, a
		}();
		a.SearchBoxDirective = b;
		var c = function() {
			function a(a) {
				var b = this;
				this.menuItemSearchFormaterService = a, this.restrict = "E", this.scope = {
					item: "="
				}, this.templateUrl = "modules/common/directives/templates/searchBoxItemTemplate.html", this.generateDisplayText = function(a) {
					var c = b.menuItemSearchFormaterService.format(a.item.item),
						d = c.profile;
					a.nameHtml = c.name, d.length > 1 && (a.nameHtml = a.nameHtml + " (" + d + ")"), a.contextNameHtml = c.contextName, a.keywordsHtml = c.keywords
				}, this.link = function(a, c) {
					var d = c[0];
					a.$watch("item.isSelected", function(a) {
						if (a) {
							var b = $(d).position(),
								c = b.top,
								e = d.parentElement.getBoundingClientRect().height,
								f = d.getBoundingClientRect().height,
								g = c + f;
							g > e ? d.parentElement.scrollTop += g - e : c < 0 && (d.parentElement.scrollTop += c)
						}
					}), b.generateDisplayText(a)
				}
			}
			return a
		}();
		a.SearchBoxItemDirective = c
	}(b = a.WebClient || (a.WebClient = {}))
}(Apriso || (Apriso = {})), angular.module("awcApp").directive("searchBox", ["menuItemFilterService", "localizeService", function(a, b) {
	return new Apriso.WebClient.SearchBoxDirective(a, b)
}]).directive("searchBoxItem", ["menuItemSearchFormaterService", function(a) {
	return new Apriso.WebClient.SearchBoxItemDirective(a)
}]);
var Apriso;
! function(a) {
	var b;
	! function(a) {
		var b = function() {
			function a() {
				this.replace = !0, this.restrict = "EA", this.scope = {
					container: "@",
					scroll: "@"
				}, this.template = '<dd class="active prev"><a href="" ng-click="click()"><span style="display: inline-block; width: 25px"></span></a></dd>', this.link = function(a) {
					var b = $(a.container),
						c = parseInt(a.scroll);
					a.click = function() {
						var a = b[0].scrollLeft;
						b.scrollLeft(a - c)
					}
				}
			}
			return a
		}();
		a.ScrollLeftDirective = b;
		var c = function() {
			function a() {
				this.replace = !0, this.restrict = "EA", this.scope = {
					container: "@",
					scroll: "@"
				}, this.template = '<dd class="active next"><a href="" ng-click="click()"><span style="display: inline-block; width: 25px"></span></a></dd>', this.link = function(a) {
					var b = $(a.container),
						c = parseInt(a.scroll);
					a.click = function() {
						var a = b.children(),
							d = $(a[0]).children(),
							e = d[d.length - 2],
							f = e.getBoundingClientRect().right - window.document.documentElement.clientWidth > 0;
						if (f) {
							var g = b[0].scrollLeft;
							b.scrollLeft(g + c)
						}
					}
				}
			}
			return a
		}();
		a.ScrollRightDirective = c
	}(b = a.WebClient || (a.WebClient = {}))
}(Apriso || (Apriso = {})), angular.module("awcApp").directive("scrollLeft", function() {
	return new Apriso.WebClient.ScrollLeftDirective
}).directive("scrollRight", function() {
	return new Apriso.WebClient.ScrollRightDirective
});
var Apriso;
! function(a) {
	var b;
	! function(a) {
		var b = function() {
			function a(a, b, c) {
				this._guidService = c, this.restrict = "E", this.scope = {}, this.templateUrl = "modules/common/directives/templates/keepAlive.html", this.sessionInfo = a, this.$sce = b
			}
			return a
		}();
		a.KeepAliveDirective = b
	}(b = a.WebClient || (a.WebClient = {}))
}(Apriso || (Apriso = {})), angular.module("awcApp").directive("keepAlive", ["SessionInfo", "$sce", "guidService", function(a, b, c) {
	return new Apriso.WebClient.KeepAliveDirective(a, b, c)
}]);
var Apriso;
! function(a) {
	var b;
	! function(a) {
		var b = function() {
			function a(a, b, c, d, e, f, g) {
				var h = this;
				this.authService = a, this.$sce = b, this.$modal = c, this._screenTabsService = d, this._helpService = e, this.$window = f, this.personalizationService = g, this.replace = !0, this.restrict = "E", this.scope = {}, this.templateUrl = "modules/common/directives/templates/currentUser.html", this.link = function(a, b) {
					var c, d = 0;
					b[0].tabIndex = 0, $(b).click(function() {
						a.$apply(function() {
							(new Date).valueOf() - d < 500 || (a.isHovering = !a.isHovering, c && (clearTimeout(c), c = 0), a.isHovering && document.activeElement !== b[0] && $(b).focus())
						})
					}), $(b).blur(function() {
						a.isHovering && (c = setTimeout(function() {
							c = 0, a.$apply(function() {
								a.isHovering = !1
							})
						}, 200))
					}), a.close = function() {
						d = (new Date).valueOf(), a.isHovering = !1
					}, h.authService.GetUserInfo().then(function(b) {
						a.userInfo = b
					}), a.logout = function() {
						a.close(), a.userInfo = null, h.authService.performLogout(!1)
					}, a.personalize = function() {
						a.allowPersonalization && (a.close(), setTimeout(function() {
							h.$modal.open({
								template: "<personalization-editor></personalization-editor>",
								windowClass: "apriso-reveal-modal-window"
							})
						}, 0))
					}, a.profile = function() {
						a.close(), setTimeout(function() {
							h.$modal.open({
								template: '<modal-page on-error="onError()" on-finished="onFinished()" ng-page="Profile.aspx"></modal-page>',
								windowClass: "apriso-reveal-modal-page",
								controller: ["$scope", "$modalInstance", function(a, b) {
									a.onFinished = function() {
										b.close()
									}, a.onError = function() {
										setTimeout(function() {
											b.close()
										}, 5e3)
									}
								}]
							})
						}, 0)
					}, a.help = function() {
						var b = "Apriso.WebClient",
							c = _.find(h._screenTabsService.Tabs, function(a) {
								return a.active
							});
						c && (b = "Apriso.FlexPart." + c.MenuItem.Alias), h._helpService.getCurrentUserHelpUrl(b).then(function(a) {
							h.$window.open(a, "_blank")
						}), a.close()
					}, a.about = function() {
						a.close(), setTimeout(function() {
							h.authService.EnsureSession().then(function() {
								return h.$modal.open({
									template: '<about-box dismiss="cancel()"></about-box>',
									controller: "aboutBoxCtrl",
									backdrop: !0,
									keyboard: !0,
									windowClass: "apriso-reveal-modal-window-about"
								})
							})
						}, 0)
					}, h.personalizationService.GetPersonalization().then(function(b) {
						return a.allowPersonalization = b.AllowPersonalization
					}), h.authService.OnUserInfoChanged(function(b) {
						a.userInfo = b
					}), h.personalizationService.OnPersonalizationChanged(function(b) {
						a.allowPersonalization = b.AllowPersonalization
					})
				}
			}
			return a
		}();
		a.CurrentUserDirective = b
	}(b = a.WebClient || (a.WebClient = {}))
}(Apriso || (Apriso = {})), angular.module("awcApp").directive("currentUser", ["authService", "$sce", "$modal", "screenTabsService", "helpService", "$window", "PersonalizationService", function(a, b, c, d, e, f, g) {
	return new Apriso.WebClient.CurrentUserDirective(a, b, c, d, e, f, g)
}]);
var Apriso;
! function(a) {
	var b;
	! function(a) {
		var b = function() {
			function a(a, b, c, d, e, f, g) {
				var h = this;
				this.replace = !0, this.restrict = "E", this.scope = {}, this.templateUrl = "modules/common/directives/templates/currentUserMobile.html", this.link = function(a, b) {
					h.authService.GetUserInfo().then(function(b) {
						a.userInfo = b
					}), a.logout = function() {
						a.userInfo = null, h.authService.performLogout(!1)
					}, a.togglePersonalize = function() {
						a.personalizationOpen = a.allowPersonalization && !a.personalizationOpen
					}, a.toggleProfile = function() {
						h.$modal.open({
							template: '<modal-page on-error="onError()" on-finished="onFinished()" ng-page="Profile.aspx"></modal-page>',
							windowClass: "apriso-reveal-modal-page",
							controller: ["$scope", "$modalInstance", function(a, b) {
								a.onFinished = function() {
									b.close()
								}, a.onError = function() {
									setTimeout(function() {
										b.close()
									}, 5e3)
								}
							}]
						})
					}, a.about = function() {
						h.$modal.open({
							template: '<about-box dismiss="cancel()"></about-box>',
							controller: "aboutBoxCtrl",
							backdrop: !0,
							keyboard: !0,
							windowClass: "apriso-reveal-modal-about"
						})
					}, a.help = function() {
						var a = "Apriso.WebClient",
							b = _.find(h.screenTabsService.Tabs, function(a) {
								return a.active
							});
						b && (a = "Apriso.FlexPart." + b.MenuItem.Alias), h.helpService.getCurrentUserHelpUrl(a).then(function(a) {
							h.$window.open(a, "_blank")
						})
					}, a.$on("close-personalization", function() {
						a.personalizationOpen = !1
					}), h.personalizationService.GetPersonalization().then(function(b) {
						return a.allowPersonalization = b.AllowPersonalization
					}), h.authService.OnUserInfoChanged(function(b) {
						a.userInfo = b
					}), h.personalizationService.OnPersonalizationChanged(function(b) {
						a.allowPersonalization = b.AllowPersonalization
					})
				}, this.authService = a, this.$sce = b, this.$modal = c, this.helpService = d, this.$window = f, this.screenTabsService = e, this.personalizationService = g
			}
			return a
		}();
		a.CurrentUserMobileDirective = b
	}(b = a.WebClient || (a.WebClient = {}))
}(Apriso || (Apriso = {})), angular.module("awcApp").directive("mobileCurrentUser", ["authService", "$sce", "$modal", "helpService", "screenTabsService", "$window", "PersonalizationService", function(a, b, c, d, e, f, g) {
	return new Apriso.WebClient.CurrentUserMobileDirective(a, b, c, d, e, f, g)
}]);
var Apriso;
! function(a) {
	var b;
	! function(b) {
		var c = function() {
			function b(b, c, d, e) {
				var f = this;
				this.$sce = b, this._authService = c, this._menuItemDisplayService = d, this._guidService = e, this.restrict = "E", this.scope = {}, this.template = '<iframe ng-src="{{targetUrl}}" class="apr-fullscreen-tab" ng-show="menuItem"></iframe>', this.link = function(b, c, d) {
					var e = c.children();
					f._menuItemDisplayService.onFullscreenOperationRequested(b, function(c) {
						if (c) {
							b.guid = f._guidService.createGuid();
							var d = c.Url;
							d += d.indexOf("?") == -1 ? "?_daid=" + b.guid : "&_daid=" + b.guid;
							var g = c.PreferFullscreen && c.Type != a.WebClient.MenuItemType.FlexView && c.Type != a.WebClient.MenuItemType.Report;
							b.menuItem = c, g && (d += d.indexOf("?") === -1 ? "?fs=true" : "&fs=true");
							var h = f.$sce.trustAsResourceUrl(d),
								i = f._authService;
							b.onIframeLoaded = function(a) {
								var b = a.currentTarget.contentWindow;
								try {
									f.urlsPathnameEquals(b.location, f.getLocation(h.toString())) || i.EnsureSession()
								} catch (c) {
									i.EnsureSession()
								}
								b.focus()
							}, e.on("load", b.onIframeLoaded), b.targetUrl = h
						}
					}), f._menuItemDisplayService.onOperationFinished(b, function(a) {
						b.guid === a && (e.off("load", b.onIframeLoaded), b.$apply(function() {
							b.menuItem = null, b.guid = "", b.targetUrl = f.$sce.trustAsResourceUrl("about:blank"), b.onIframeLoaded = null
						}))
					})
				}
			}
			return b.prototype.getLocation = function(a) {
				var b = document.createElement("a");
				return b.href = a, b
			}, b.prototype.urlsPathnameEquals = function(a, b) {
				return a.pathname.toLocaleLowerCase() === b.pathname.toLocaleLowerCase()
			}, b
		}();
		b.FullscreenTabDirective = c
	}(b = a.WebClient || (a.WebClient = {}))
}(Apriso || (Apriso = {})), angular.module("awcApp").directive("fullscreenTab", ["$sce", "authService", "menuItemDisplayService", "guidService", function(a, b, c, d) {
	return new Apriso.WebClient.FullscreenTabDirective(a, b, c, d)
}]), angular.module("awcApp").filter("take", function() {
	return function(a, b) {
		return _.take(a, b)
	}
}), angular.module("awcApp").filter("or", function() {
	return function(a, b) {
		if (!a) return b
	}
});
var Apriso;
! function(a) {
	var b;
	! function(b) {
		var c = function() {
			function b(b, c, d, e, f) {
				var g = this;
				this.$sce = b, this.screenTabsService = c, this.location = d, this._menuItemDisplayService = e, this.$http = f, this.restrict = "EA", this.replace = !0, this.scope = {
					screenTab: "=?",
					fullScreen: "@?"
				}, this.template = '<iframe ng-src="{{startUri}}" class="{{screenFrameClass}}"></iframe>', this.link = function(b, c) {
					var d = (b.fullScreen || b.screenTab.MenuItem.PreferFullscreen) && b.screenTab.MenuItem.Type != a.WebClient.MenuItemType.FlexView;
					if (d ? b.screenFrameClass = "apr-screen-frame-fullscreen" : b.screenFrameClass = "apr-screen-frame-with-bar", d) {
						g._menuItemDisplayService.onOperationFinished(b, function() {
							b.$apply(function() {
								g.location.path("/search").search("dashboard_mode_override", "none")
							})
						});
						var e = b.screenTab.Uri;
						e += e.indexOf("?") === -1 ? "?fs=true" : "&fs=true", b.startUri = g.$sce.trustAsResourceUrl(e)
					} else b.startUri = g.$sce.trustAsResourceUrl(b.screenTab.Uri);
					g.screenTabsService.onRemoved(b, function(a) {
						var b = $("iframe[src='" + a.Uri + "']"),
							c = function(a) {
								try {
									var b = a.contentWindow,
										d = b.document.location.toString();
									if (d.indexOf("_gpn") != -1) {
										g.$http.get(d + "&ClearSession=true", {
											withCredentials: !0,
											headers: {
												Authorization: void 0
											}
										});
										for (var e = b.document.getElementsByTagName("iframe"), f = 0; f < e.length; ++f) c(e[f])
									}
								} catch (h) {}
							};
						b.length > 0 && c(b[0])
					})
				}
			}
			return b
		}();
		b.ExecutionFrameDirective = c
	}(b = a.WebClient || (a.WebClient = {}))
}(Apriso || (Apriso = {})), angular.module("awcApp").directive("screenFrame", ["$sce", "screenTabsService", "$location", "menuItemDisplayService", "$http", function(a, b, c, d, e) {
	return new Apriso.WebClient.ExecutionFrameDirective(a, b, c, d, e)
}]);
var Apriso;
! function(a) {
	var b;
	! function(a) {
		var b = function() {
			function a(a, b, c, d, e) {
				void 0 === e && (e = !0), this._name = a, this._uri = b, this._menuItem = c, this._closable = e, this._guid = d
			}
			return Object.defineProperty(a.prototype, "Name", {
				get: function() {
					return this._name
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(a.prototype, "Uri", {
				get: function() {
					var a = this._uri;
					return a.indexOf("_daid") == -1 && (a += a.indexOf("?") == -1 ? "?_daid=" + this._guid : "&_daid=" + this._guid), a
				},
				set: function(a) {
					this._uri = a
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(a.prototype, "MenuItem", {
				get: function() {
					return this._menuItem
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(a.prototype, "Guid", {
				get: function() {
					return this._guid
				},
				set: function(a) {
					this._guid = a
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(a.prototype, "Closable", {
				get: function() {
					return this._closable
				},
				set: function(a) {
					this._closable = a
				},
				enumerable: !0,
				configurable: !0
			}), a
		}();
		a.ScreenTab = b;
		var c = function() {
			function a() {}
			return Object.defineProperty(a.prototype, "IsSelected", {
				get: function() {
					return this._isSelected
				},
				set: function(a) {
					this._isSelected = a
				},
				enumerable: !0,
				configurable: !0
			}), a
		}();
		a.HomeOptions = c;
		var d = function() {
			function a() {}
			return Object.defineProperty(a.prototype, "Name", {
				get: function() {
					return this._name
				},
				set: function(a) {
					this._name = a
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(a.prototype, "DisplayName", {
				get: function() {
					return this._displayName
				},
				set: function(a) {
					this._displayName = a
				},
				enumerable: !0,
				configurable: !0
			}), a
		}();
		a.ActiveTabOptions = d;
		var e = function() {
			function a(a, b, e, f, g, h, i, j) {
				var k = this;
				this._guidService = b, this.$q = e, this._window = f, this._locationService = g, this.messageService = h, this._localizeService = i, this.authService = j, this.menuItemStore = a, this.screenTabs = new Array, this.homeOptions = new c, this.activeTab = new d, this._localizeService.localize("TABS.HOME", "Home").then(function(a) {
					k.activeTab.Name = "Home", k.activeTab.DisplayName = a
				})
			}
			return a.prototype.restoreTabsFromLocalStorage = function() {
				var a = this,
					b = this.$q.defer();
				return this.authService.GetUserInfo().then(function(c) {
					var d = !1,
						e = window.localStorage["users_opened_tabs_" + c.UserId + "_" + a._locationService.host()];
					if (e) {
						var f = JSON.parse(e);
						f && (f.forEach(function(b) {
							a.addTabItem(b._menuItem, b._closable), d = !0
						}), window.localStorage["users_opened_tabs_" + c.UserId + "_" + a._locationService.host()] = "")
					}
					b.resolve(d)
				}), b.promise
			}, a.prototype.addTabItem = function(a, c) {
				void 0 === c && (c = !0);
				var d = this._guidService.createGuid(),
					e = new b(a.Name, a.Url, a, d, c);
				this.screenTabs.push(e), this.onAddedHandler && this.onAddedHandler(e)
			}, a.prototype.removeTab = function(a) {
				var b = _.indexOf(this.screenTabs, a);
				this.screenTabs.splice(b, 1), 0 === this.screenTabs.length ? (this.activeTab.Name = "Home", this.activeTab.DisplayName = this._localizeService.instant("TABS.HOME", "Home")) : (this.activeTab.Name = this.screenTabs[this.screenTabs.length - 1].Name, this.activeTab.DisplayName = this.activeTab.Name), this.onRemovedHandler && this.onRemovedHandler(a)
			}, Object.defineProperty(a.prototype, "Tabs", {
				get: function() {
					return this.screenTabs
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(a.prototype, "HomeOptions", {
				get: function() {
					return this.homeOptions
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(a.prototype, "ActiveTab", {
				get: function() {
					return this.activeTab
				},
				enumerable: !0,
				configurable: !0
			}), a.prototype.onAdded = function(a, b) {
				var c = this;
				this.onAddedHandler = b, a.$on("$destroy", function() {
					c.onAddedHandler = null
				})
			}, a.prototype.onRemoved = function(a, b) {
				var c = this;
				this.onRemovedHandler = b, a.$on("$destroy", function() {
					c.onRemovedHandler = null
				})
			}, a.prototype.Clear = function() {
				this.screenTabs.splice(0, this.screenTabs.length)
			}, a.prototype.selectTab = function(a) {
				_.each(this.screenTabs, function(a) {
					return a.active = !1
				}), a.active = !0, this.activeTab.Name = a.Name, this.activeTab.DisplayName = a.Name
			}, a.prototype.selectHome = function() {
				this.homeOptions.IsSelected = !0, this.activeTab.Name = "Home", this.activeTab.DisplayName = this._localizeService.instant("TABS.HOME", "Home")
			}, a.prototype.handleOperationFinished = function(a) {
				var b = this,
					c = _.find(this.screenTabs, function(b) {
						return b.Guid === a
					});
				c && (this._localizeService.localize("MESSAGES.SCREEN_COMPLETED", 'The Screen "{{name}}" has completed. The tab has been closed.', {
					name: c.Name
				}).then(function(a) {
					return b.messageService.success(a)
				}), this.removeTab(c))
			}, a
		}();
		a.ScreenTabsService = e
	}(b = a.WebClient || (a.WebClient = {}))
}(Apriso || (Apriso = {})), angular.module("awcApp").service("screenTabsService", ["MenuItemStore", "guidService", "$q", "$window", "$location", "MessageService", "localizeService", "authService", function(a, b, c, d, e, f, g, h) {
	return new Apriso.WebClient.ScreenTabsService(a, b, c, d, e, f, g, h)
}]);
var Apriso;
! function(a) {
	var b;
	! function(a) {
		var b = function() {
			function a() {}
			return a
		}();
		a.FavoriteItem = b;
		var c = function() {
			function a(a, b, c, d) {
				this._favsChangedHandlers = new Array, this.$http = a, this.$q = b, this.sessionInfo = c, this.authService = d
			}
			return a.prototype.getFavoritesIds = function() {
				var a = this,
					b = this.$q.defer(),
					c = this.sessionInfo.BaseHttpServicesAddress + "/api/platform/1/screens/favourite";
				return this.authService.EnsureAuthenticated().then(function() {
					a.$http.get(c).success(function(a) {
						return b.resolve(a)
					}).error(function(c) {
						return a.authService.HandleUnauthorized(c), b.reject(c)
					})
				}), b.promise
			}, a.prototype.addToFavorites = function(a, b) {
				return this.favoritesAction(a, b, !0)
			}, a.prototype.removeFromFavorites = function(a, b) {
				return this.favoritesAction(a, b, !1)
			}, a.prototype.onFavsChanged = function(a) {
				this._favsChangedHandlers.push(a)
			}, a.prototype.favoritesAction = function(a, b, c) {
				var d = this,
					e = this.sessionInfo.BaseHttpServicesAddress + "/api/platform/1/screens/favourite",
					f = this.$q.defer();
				return this.authService.EnsureAuthenticated().then(function() {
					d.$http.post(e, {
						ScreenId: a,
						IsFavorite: c,
						ProfileId: b
					}).success(function(a) {
						d.fireFavsChanged(a), f.resolve(a)
					}).error(function(a) {
						d.authService.HandleUnauthorized(a), f.reject(a)
					})
				}), f.promise
			}, a.prototype.fireFavsChanged = function(a) {
				_.forEach(this._favsChangedHandlers, function(b) {
					b(a)
				})
			}, a
		}();
		a.FavoritesService = c
	}(b = a.WebClient || (a.WebClient = {}))
}(Apriso || (Apriso = {})), angular.module("awcApp").service("FavoritesService", ["$http", "$q", "SessionInfo", "authService", function(a, b, c, d) {
	return new Apriso.WebClient.FavoritesService(a, b, c, d)
}]);
var Apriso;
! function(a) {
	var b;
	! function(a) {
		var b = function() {
			function a() {
				this.maxCount = 20
			}
			return a.prototype.Wrap = function(a) {
				return this.innerArray = a, this
			}, a.prototype.Push = function(a) {
				var b = _.indexOf(this.innerArray, a);
				return this.innerArray.unshift(a), b !== -1 && this.innerArray.splice(b + 1, 1), this.innerArray.length > this.maxCount && this.innerArray.splice(this.maxCount - 1, this.innerArray.length - this.maxCount), this
			}, a.prototype.ToArray = function() {
				return this.innerArray
			}, a
		}();
		a.RecentsStack = b;
		var c = function() {
			function a(a, b) {
				void 0 === a && (a = null), void 0 === b && (b = null), this.ScreenId = a, this.ProfileId = b
			}
			return a
		}();
		a.RecentItem = c;
		var d = function() {
			function d(a, b, c) {
				this.$q = a, this.$location = c, this.fallbackRecentIds = new Array, this.authService = b
			}
			return d.prototype.LoadRecents = function() {
				var b = this,
					c = this.$q.defer();
				return this.authService.GetUserInfo().then(function(d) {
					var e = d.UserId;
					setTimeout(function() {
						if (!a.LocalStorageMenuItemStore.CanIUseIt()) return c.resolve(b.fallbackRecentIds);
						try {
							var d = b.GetServerFromDocumentUrl(),
								f = window.localStorage["users_recents_" + e + "_" + d];
							if (f) {
								var g = JSON.parse(f);
								return c.resolve(g)
							}
							return c.resolve([])
						} catch (h) {
							return c.reject(h)
						}
					}, 1)
				}), c.promise
			}, d.prototype.GetServerFromDocumentUrl = function() {
				return this.$location.host()
			}, d.prototype.SaveRecents = function(b) {
				var c = this,
					d = this.$q.defer();
				return this.authService.GetUserInfo().then(function(e) {
					var f = e.UserId;
					setTimeout(function() {
						if (a.LocalStorageMenuItemStore.CanIUseIt()) try {
							var e = c.GetServerFromDocumentUrl();
							return window.localStorage["users_recents_" + f + "_" + e] = JSON.stringify(b), d.resolve()
						} catch (g) {
							return d.reject(g)
						} else c.fallbackRecentIds = b
					}, 1)
				}), d.promise
			}, d.prototype.AddNew = function(a, d) {
				var e = this;
				return this.LoadRecents().then(function(e) {
					return (new b).Wrap(e).Push(new c(a, d)).ToArray()
				}).then(function(a) {
					return e.SaveRecents(a)
				})
			}, d
		}();
		a.RecentsService = d
	}(b = a.WebClient || (a.WebClient = {}))
}(Apriso || (Apriso = {})), angular.module("awcApp").service("RecentsService", ["$q", "authService", "$location", function(a, b, c) {
	return new Apriso.WebClient.RecentsService(a, b, c)
}]);
var Apriso;
! function(a) {
	var b;
	! function(a) {
		var b = function() {
			function a(a, b) {
				this._sessionInfo = a, this._personalizationService = b
			}
			return a.prototype.getHelpUrl = function(a, b) {
				var c = this._sessionInfo.FlexNetHelpServiceUrl,
					d = "lang=" + encodeURIComponent(b) + "&topic=" + encodeURIComponent(a),
					e = c.indexOf("?") < 0 ? "?" : "&";
				return c + e + d
			}, a.prototype.getCurrentUserHelpUrl = function(a) {
				var b = this;
				return this._personalizationService.GetPersonalization().then(function(c) {
					return b.getHelpUrl(a, c.UiLanguage)
				})
			}, a
		}();
		a.HelpService = b
	}(b = a.WebClient || (a.WebClient = {}))
}(Apriso || (Apriso = {})), angular.module("awcApp").service("helpService", ["SessionInfo", "PersonalizationService", function(a, b) {
	return new Apriso.WebClient.HelpService(a, b)
}]), angular.module("awcApp").controller("loginCtrl", ["$scope", "$location", "loaderService", "$routeParams", function(a, b, c, d) {
	c.show(), d.dashboard_mode_override ? b.path("/search").search("dashboard_mode_override", d.dashboard_mode_override) : b.path("/search")
}]), angular.module("awcApp").controller("searchCtrl", ["$scope", "MenuItemStore", "$sce", "MessageService", "screenTabsService", "FavoritesService", "RecentsService", "mmScreenDisplayService", "loaderService", "PersonalizationService", "authService", "$location", "$routeParams", "$rootScope", "localizeService", "menuItemDisplayService", function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
	e.Clear(), a.tabs = e.Tabs, a["delete"] = function(a) {
		e.removeTab(a)
	}, a.selectTab = function(a) {
		a ? (e.ActiveTab.Name = a.Name, e.ActiveTab.DisplayName = a.Name) : (e.ActiveTab.Name = "Home", e.ActiveTab.DisplayName = o.instant("TABS.HOME", "Home"))
	}, n.$broadcast("showAppBar"), n.$broadcast("showAppBarSearch"), a.showTabButtons = !1;
	var q = function() {
		setTimeout(function() {
			var b = _.map($(".tabs > dd:not('.prev'):not('.next')"), function(a) {
					return $(a).width()
				}),
				c = _.reduce(b, function(a, b) {
					return b + a + 5
				}, 48);
			a.$apply(function() {
				var b = a.showTabButtons;
				c > window.document.documentElement.clientWidth ? a.showTabButtons = !0 : a.showTabButtons = !1, b && !a.showTabButtons ? ($(".tabbable").scrollLeft(0), $("dl.tabs").css("margin-left", "88px"), $("#tabbar-overlay").css("width", "87px")) : !b && a.showTabButtons && ($("dl.tabs").css("margin-left", "103px"), $("#tabbar-overlay").css("width", "102px")), a.showTabButtons && $(".tabbable").scrollLeft(c - window.document.documentElement.clientWidth)
			})
		}, 10)
	};
	$(window).resize(function() {
		q()
	});
	var r = function(b) {
		if (b) {
			var c = _.map(a.recents, function(a) {
					return {
						id: a.Id,
						profileId: a.ProfileId
					}
				}),
				d = _.filter(c, function(a) {
					return a.id == b.Id && a.profileId === b.ProfileId
				}),
				e = -1,
				f = "";
			d && d.length > 0 && (e = d[0].id, f = d[0].profileId);
			var h = _.find(a.recents, function(a) {
				return a.Id == e && a.ProfileId === f
			});
			if (h) {
				var i = _.indexOf(a.recents, h);
				i > 0 && a.recents.splice(i, 1), 0 != i && a.recents.unshift(b);
				var j = _.map(a.recents, function(a) {
					return new Apriso.WebClient.RecentItem(a.Id, a.ProfileId)
				});
				g.SaveRecents(j)
			} else a.recents.unshift(b), g.AddNew(b.Id, b.ProfileId)
		}
	};
	e.onAdded(a, function(a) {
		e.selectTab(a),
			r(a.MenuItem), q()
	}), k.onBeforeAutoLogout(a, function(a) {
		k.GetUserInfo().then(function(a) {
			window.localStorage["users_opened_tabs_" + a.UserId + "_" + l.host()] = JSON.stringify(e.Tabs)
		})
	}), p.onFullscreenOperationRequested(a, function(a) {
		r(a)
	}), h.onOpened(a, function(b, c) {
		var d = _.find(a.currentItems, function(a) {
			return a.Alias == b && a.ProfileId === c
		});
		r(d), a.$digest()
	}), h.onOpenError(a, function(a, b) {
		o.localize("MESSAGES.MMSCREEN_LOAD_ERROR", "The screen you are attempting to load cannot be displayed. Please make sure you have Apriso Desktop Client Launcher installed.").then(function(a) {
			return d.error(a)
		})
	}), e.onRemoved(a, function(a) {
		q()
	}), h.onDisplayMMScreen(a, function(b, c) {
		var d = Math.floor(1e6 * Math.random());
		c += c.indexOf("?") !== -1 ? "&token=" + d : "?token=" + d, a.mmScreenUrl = c
	}), a.favorites = [], a.recents = [], a.homeOptions = e.HomeOptions, a.homeOptions.IsSelected = !0, f.onFavsChanged(function(b) {
		_.each(a.currentItems, function(a) {
			a.IsFavorite = !1
		}), a.favorites = _.filter(a.currentItems, function(a) {
			var c = _.some(b, function(b) {
				return b.ScreenId == a.Id && (b.ProfileId == a.ProfileId || !b.ProfileId)
			});
			return c && (a.IsFavorite = !0), c
		}), g.LoadRecents().then(function(b) {
			var c = _.map(b, function(b) {
					return _.find(a.currentItems, function(a) {
						return a.Id == b.ScreenId && (a.ProfileId == b.ProfileId || !b.ProfileId)
					})
				}),
				d = _.compact(c);
			a.recents = u(d)
		})
	}), j.OnPersonalizationChanged(function(a) {
		o.use(a.UiLanguage).then(function() {
			return o.localize(["COMMON.BRAND_NAME", "COMMON.PRODUCT_NAME", "TABS.HOME"], ["DELMIA", "Apriso", "Home"])
		}).then(function(a) {
			$("title").text(a["COMMON.BRAND_NAME"] + " " + a["COMMON.PRODUCT_NAME"] + " Portal"), "Home" == e.ActiveTab.Name && (e.ActiveTab.DisplayName = a["TABS.HOME"])
		}).then(function() {
			k.GetUserInfo().then(function(a) {
				var b = $("title"),
					c = a.DisplayLoginName + " - " + b.text();
				b.text(c)
			})
		})
	});
	var s = function(c) {
		return j.GetPersonalization().then(function() {
			return b.Load(!0)
		}).then(function(c) {
			return a.currentItems = b.Items, c
		}).then(function(a) {
			return f.getFavoritesIds()
		}).then(function(b) {
			a.favorites = _.filter(a.currentItems, function(a) {
				var c = _.some(b, function(b) {
					return b.ScreenId == a.Id && (b.ProfileId == a.ProfileId || !b.ProfileId)
				});
				return c && (a.IsFavorite = !0), c
			})
		}).then(function() {
			return g.LoadRecents()
		}).then(function(b) {
			var c = _.map(b, function(b) {
					return _.find(a.currentItems, function(a) {
						return a.Id == b.ScreenId && (a.ProfileId == b.ProfileId || !b.ProfileId)
					})
				}),
				d = _.compact(c);
			a.recents = u(d)
		}).then(function() {
			return k.GetUserInfo()
		}).then(function(b) {
			c && e.restoreTabsFromLocalStorage().then(function(c) {
				if (!c) {
					var e = _.find(a.currentItems, function(a) {
							return a.Id == b.DefaultMenuItemId && a.Type != Apriso.WebClient.MenuItemType.FlexView
						}),
						f = _.find(a.currentItems, function(a) {
							return a.Id == b.DashboardOperationId && a.Type != Apriso.WebClient.MenuItemType.FlexView
						});
					if (e) {
						var g = m.dashboard_mode_override;
						if ("none" !== g) {
							if (e.Type != Apriso.WebClient.MenuItemType.Screen) return void l.path("/dashboard");
							p.display(e)
						}
					} else b.DefaultMenuItemId && o.localize("SEARCH.NO_PERMISSIONS_TO_DMI", "You don't have permissions to run default menu item or the menu item type is not supported.").then(function(a) {
						d.error(a)
					});
					f && p.display(f, !1)
				}
			})
		})["catch"](function(a) {
			o.localize("SEARCH.LOADING_ERROR", "Could not load menu items from the remote server. Delmia Apriso is not fully functional.").then(function(a) {
				d.error(a)
			})
		})["finally"](function() {
			i.hide()
		})
	};
	a.favsAndRecentsMerged = function() {
		return _.uniq(_.flatten([a.favorites, a.recents], !0), !1, function(a) {
			return "" + a.Id + (a.ProfileId || "")
		})
	};
	var t = function(b) {
			var c = _.filter(a.currentItems, function(a) {
				var c = _.some(b, function(b) {
					return b.ScreenId == a.Id && (b.ProfileId == a.ProfileId || !b.ProfileId)
				});
				return c && (a.IsFavorite = !0), c
			});
			return c
		},
		u = function(b) {
			var c = _.filter(b, function(b) {
				return _.any(a.currentItems, function(a) {
					return b.Id == a.Id && (b.ProfileId === a.ProfileId || !b.ProfileId)
				})
			});
			return b.length == c.length ? b : c
		};
	s(!0), b.OnReloaded(function() {
		f.getFavoritesIds().then(function(b) {
			return a.favorites = t(b)
		}), a.recents = u(a.recents)
	}), j.OnReloadRequested(function() {
		return s(!1)
	})
}]), angular.module("awcApp").controller("executeCtrl", ["$scope", "$routeParams", "MenuItemStore", "$sce", function(a, b, c, d) {
	var e = b.screenId;
	a.screenUri = d.trustAsResourceUrl("about:blank"), c.Load().then(function() {
		var b = c.FindById(e, null);
		b && (a.screenUri = d.trustAsResourceUrl(b.Url))
	})
}]);
var Apriso;
! function(a) {
	var b;
	! function(a) {
		var b = function() {
			function a(a) {
				var b = this;
				this.$sce = a, this.restrict = "EA", this.scope = {
					screenUrl: "@"
				}, this.template = '<iframe ng-src="{{targetUrl}}" class="hidden"></iframe>', this.link = function(a, c, d) {
					a.$watch("screenUrl", function(c) {
						a.targetUrl = b.$sce.trustAsResourceUrl(c)
					})
				}
			}
			return a
		}();
		a.MMScreenDirective = b
	}(b = a.WebClient || (a.WebClient = {}))
}(Apriso || (Apriso = {})), angular.module("awcApp").directive("mmScreen", ["$sce", function(a) {
	return new Apriso.WebClient.MMScreenDirective(a)
}]);
var Apriso;
! function(a) {
	var b;
	! function(a) {
		var b = function() {
			function a(a) {
				this.stringMatcherFactory = a
			}
			return a.prototype.startsWith = function(a, b, c) {
				return c = c || 0, a.lastIndexOf(b, c) === c
			}, a.prototype.filter = function(a, b) {
				var c = this;
				if (_.isEmpty(b)) return [];
				var d = [{
						name: "Name",
						startsWithMenuItems: [],
						menuItems: []
					}, {
						name: "ContextName",
						startsWithMenuItems: [],
						menuItems: []
					}, {
						name: "Keywords",
						startsWithMenuItems: [],
						menuItems: []
					}],
					e = this.stringMatcherFactory.create(b);
				_.each(a, function(a) {
					for (var f = 0; f < d.length; f++) {
						var g = d[f],
							h = a[g.name];
						if (h) {
							if (2 != f && (c.startsWith(h, b) || c.startsWith(h.toLocaleLowerCase(), b.toLocaleLowerCase()))) {
								var i = {
									index: 0,
									content: h.substr(0, b.length)
								};
								g.startsWithMenuItems.push({
									menuItem: a,
									match: [i],
									matchedAttribute: g.name
								});
								break
							}
							var j = e.match(h);
							if (!_.isNull(j)) {
								g.menuItems.push({
									menuItem: a,
									match: j,
									matchedAttribute: g.name
								});
								break
							}
						}
					}
				});
				for (var f = [], g = 0; g < d.length; g++) {
					var h = d[g];
					f.push({
						name: h.name,
						menuItems: h.startsWithMenuItems.concat(h.menuItems)
					})
				}
				return f
			}, a
		}();
		a.MenuItemFilterService = b
	}(b = a.WebClient || (a.WebClient = {}))
}(Apriso || (Apriso = {}));
var Apriso;
! function(a) {
	var b;
	! function(b) {
		var c = function() {
			function b() {}
			return b.prototype.create = function(b) {
				return new a.Framework.CamelCasePrefixMatcher(b)
			}, b
		}();
		b.CamelCaseStringMatcherFactoryService = c
	}(b = a.WebClient || (a.WebClient = {}))
}(Apriso || (Apriso = {})), angular.module("awcApp").service("stringMatcherFactoryService", [function() {
	return new Apriso.WebClient.CamelCaseStringMatcherFactoryService
}]).service("menuItemFilterService", ["stringMatcherFactoryService", function(a) {
	return new Apriso.WebClient.MenuItemFilterService(a)
}]), angular.module("awcApp").controller("myDashboartCtrl", ["$scope", "MenuItemStore", "authService", "$rootScope", "loaderService", "$q", "guidService", "mmScreenDisplayService", "localizeService", "MessageService", "$location", function(a, b, c, d, e, f, g, h, i, j, k) {
	a.tab = null, d.$broadcast("hideAppBarSearch"), f.all([c.GetUserInfo(), b.Load()]).then(function(c) {
		var e = c[0],
			f = b.FindById(e.DefaultMenuItemId, null);
		f && (h.onDisplayMMScreen(a, function(b, c) {
			var d = Math.floor(1e6 * Math.random());
			c += c.indexOf("?") !== -1 ? "&token=" + d : "?token=" + d, a.mmScreenUrl = c
		}), h.onOpenError(a, function() {
			i.localize("MESSAGES.MMSCREEN_LOAD_ERROR", "The screen you are attempting to load cannot be displayed. Please make sure you have Apriso Desktop Client Launcher installed.").then(function(a) {
				return j.error(a)
			})
		}), h.onOpened(a, function() {
			k.path("/search").search("dashboard_mode_override", "none")
		}), d.$broadcast("hideAppBar"), f.Type === Apriso.WebClient.MenuItemType.Screen ? h.displayMMScreen(f) : a.tab = new Apriso.WebClient.ScreenTab(f.Name, f.Url, f, g.createGuid()))
	})["finally"](function() {
		e.hide()
	})
}]);
var Apriso;
! function(a) {
	var b;
	! function(a) {
		var b = function() {
			function a(a) {
				a && (this.Id = a.Value, this.Name = a.Text)
			}
			return a
		}();
		a.Language = b;
		var c = function() {
			function a(a) {
				a && (this.Id = a.Value, this.Name = a.Text)
			}
			return a
		}();
		a.Timezone = c;
		var d = function() {
			function a(a) {
				a && (this.UiLanguage = a.UiLanguage.toLowerCase(), this.DbLanguage = a.DatabaseLanguage.toLowerCase(), this.TimezoneId = a.TimeZoneId.toString(), this.AllowPersonalization = a.AllowPersonalization)
			}
			return a.prototype.ToDto = function() {
				return {
					UiLanguage: this.UiLanguage.toLowerCase(),
					DatabaseLanguage: this.DbLanguage.toLowerCase(),
					TimeZoneId: parseInt(this.TimezoneId),
					AllowPersonalization: this.AllowPersonalization
				}
			}, a
		}();
		a.PersonalizationInfo = d;
		var e = function() {
			function e(a, b, c, d, e) {
				this.personalizationChangedHandlers = new Array, this.reloadHandlers = new Array, this.$http = a, this.$q = b, this.sessionInfo = c, this.authService = d, this.$location = e
			}
			return e.prototype.GetLanguages = function(a) {
				var c = this,
					d = this.$q.defer();
				if (this.languages && !a) d.resolve(this.languages);
				else {
					var e = this.sessionInfo.BaseHttpServicesAddress + "/api/platform/1/personalization/languages";
					this.authService.EnsureAuthenticated().then(function() {
						c.$http.get(e).then(function(a) {
							var e = a.data,
								f = _.map(e, function(a) {
									return new b(a)
								});
							f = _.sortBy(f, function(a) {
								return a.Name
							}), c.languages = f, d.resolve(c.languages)
						})["catch"](function(a) {
							d.reject(a), c.authService.HandleUnauthorized(a)
						})
					})
				}
				return d.promise
			}, e.prototype.GetTimezones = function() {
				var a = this,
					b = this.$q.defer();
				if (this.timezones) b.resolve(this.timezones);
				else {
					var d = this.sessionInfo.BaseHttpServicesAddress + "/api/platform/1/personalization/timezones";
					this.authService.EnsureAuthenticated().then(function() {
						a.$http.get(d).then(function(d) {
							var e = d.data,
								f = _.map(e, function(a) {
									return new c(a)
								});
							a.timezones = f, b.resolve(a.timezones)
						})["catch"](function(c) {
							a.authService.HandleUnauthorized(c), b.reject(c)
						})
					})
				}
				return b.promise
			}, e.prototype.GetPersonalization = function() {
				var a = this,
					b = this.$q.defer();
				return this.personalizationInfo ? b.resolve(this.personalizationInfo) : this.authService.EnsureAuthenticated().then(function() {
					var c = a.sessionInfo.BaseHttpServicesAddress + "/api/platform/1/personalization/my";
					a.$http.get(c).then(function(c) {
						var e = c.data;
						a.personalizationInfo = new d(e), b.resolve(a.personalizationInfo), a.firePersonalizationChanged(a.personalizationInfo)
					})["catch"](function(c) {
						a.authService.HandleUnauthorized(c), b.reject(c)
					})
				}), b.promise
			}, e.prototype.SavePersonalization = function(a) {
				var b = this,
					c = this.$q.defer(),
					e = this.sessionInfo.BaseHttpServicesAddress + "/api/platform/1/personalization/my";
				return this.authService.EnsureAuthenticated().then(function() {
					b.$http.post(e, a.ToDto()).then(function(a) {
						var e = a.data;
						b.personalizationInfo = new d(e), c.resolve(b.personalizationInfo), b.firePersonalizationChanged(b.personalizationInfo)
					})["catch"](function(a) {
						b.authService.HandleUnauthorized(a), c.reject(a)
					})
				}), c.promise
			}, e.prototype.OnPersonalizationChanged = function(a) {
				this.personalizationChangedHandlers.push(a)
			}, e.prototype.OnReloadRequested = function(a) {
				this.reloadHandlers.push(a)
			}, e.prototype.ClearLocalStorate = function() {
				var b = this;
				if (a.LocalStorageMenuItemStore.CanIUseIt()) return this.authService.GetUserInfo().then(function(c) {
					return new a.LocalStorageMenuItemStore(b.$location.host(), c.UserId).ClearStoredMenuItems(), b.fireReloadRequested()
				});
				var c = this.$q.defer();
				return c.resolve(), c.promise
			}, e.prototype.firePersonalizationChanged = function(a) {
				_.each(this.personalizationChangedHandlers, function(b) {
					b(a)
				})
			}, e.prototype.fireReloadRequested = function() {
				var a = this.$q.defer(),
					b = a.promise;
				return a.resolve(), _.each(this.reloadHandlers, function(a) {
					b = b.then(function() {
						return a()
					})
				}), b
			}, e
		}();
		a.PersonalizationService = e
	}(b = a.WebClient || (a.WebClient = {}))
}(Apriso || (Apriso = {})), angular.module("awcApp").service("PersonalizationService", ["$http", "$q", "SessionInfo", "authService", "$location", function(a, b, c, d, e) {
	return new Apriso.WebClient.PersonalizationService(a, b, c, d, e)
}]);
var Apriso;
! function(a) {
	var b;
	! function(a) {
		var b = function() {
			function b(b, c, d, e) {
				var f = this;
				this.restrict = "E", this.scope = {
					PersonalizationInfo: "=?",
					mode: "@?"
				}, this.templateUrl = "modules/personalization/personalizationEditor.html", this.link = function(b, c, d) {
					b.mode || (b.mode = "in-popup"), "in-popup" == b.mode && (window.onresize = function(a) {
						window.document.documentElement.clientWidth < 752 && b.$apply(function() {
							b.Close(), window.onresize = null
						})
					});
					var e = f.personalizationService.GetLanguages(!1),
						g = f.personalizationService.GetTimezones();
					b.PersonalizationInfo = new a.PersonalizationInfo(null), f.$q.all([g, e]).then(function(a) {
						b.AvailableTimezones = a[0], b.AvailableDbLanguages = a[1], b.AvailableUiLanguages = a[1]
					}).then(function() {
						return f.personalizationService.GetPersonalization()
					}).then(function(a) {
						setTimeout(function() {
							b.$apply(function() {
								b.PersonalizationInfo && (b.PersonalizationInfo.DbLanguage = a.DbLanguage, b.PersonalizationInfo.TimezoneId = a.TimezoneId, b.PersonalizationInfo.UiLanguage = a.UiLanguage, b.PersonalizationInfo.AllowPersonalization = a.AllowPersonalization)
							})
						})
					}), b.SavePersonalization = function() {
						return b.Message = null, f.personalizationService.SavePersonalization(b.PersonalizationInfo).then(function(a) {
							f.$q.when(f.personalizationService.GetLanguages(!0)).then(function(a) {
								b.AvailableDbLanguages = a, b.AvailableUiLanguages = a
							}).then(function() {
								setTimeout(function() {
									b.$apply(function() {
										b.PersonalizationInfo.DbLanguage = a.DbLanguage, b.PersonalizationInfo.TimezoneId = a.TimezoneId, b.PersonalizationInfo.UiLanguage = a.UiLanguage
									})
								})
							}), f.localizeService.localize("PERSONALIZATION.SUCCESS_MESSAGE", "User preferences saved successfully").then(function(a) {
								return f.messageService.success(a)
							})
						}).then(function() {
							b.ClearLocalStorage()
						}), null
					};
					var h = function() {
						return a.LocalStorageMenuItemStore.CanIUseIt() ? (decodeURIComponent(encodeURIComponent(JSON.stringify(localStorage))).length / 1024).toFixed(2) : "0"
					};
					b.LocalStorageSize = h(), b.ClearLocalStorage = function() {
						b.reloadDisabled || (b.reloadDisabled = !0, f.personalizationService.ClearLocalStorate()["finally"](function() {
							b.LocalStorageSize = h(), b.reloadDisabled = !1
						}))
					}, b.Close = function() {
						b.isClosed || "inline" == b.mode || (b.isClosed = !0, b.$parent.$parent.$parent.$close()), "inline" == b.mode && b.$emit("close-personalization")
					}
				}, this.personalizationService = b, this.$q = c, this.localizeService = d, this.messageService = e
			}
			return b
		}();
		a.PersonalizationEditorDirective = b
	}(b = a.WebClient || (a.WebClient = {}))
}(Apriso || (Apriso = {})), angular.module("awcApp").directive("personalizationEditor", ["PersonalizationService", "$q", "localizeService", "MessageService", function(a, b, c, d) {
	return new Apriso.WebClient.PersonalizationEditorDirective(a, b, c, d)
}]);
var Apriso;
! function(a) {
	var b;
	! function(a) {
		var b = function() {
			function a(a) {
				var b = this;
				this.$sce = a, this.restrict = "E", this.scope = {
					onError: "&",
					onFinished: "&"
				}, this.templateUrl = "modules/common/directives/templates/modalPage.html", this.link = function(a, c, d) {
					var e = "about:blank";
					d.ngPage && (e = "/Apriso/Portal/" + d.ngPage), a.iframeSrc = b.$sce.trustAsResourceUrl(e);
					var f = function(b) {
						var d = b.data;
						if (d) {
							if ("delmia.apriso.operation" === d.source && "FINISHED" === d.event) {
								var e = c.find("iframe")[0];
								e.style.display = "none", window.removeEventListener("message", f), a.onFinished && a.onFinished()
							}
							"delmia.apriso.portal" === d.source && "ERROR" === d.event && a.onError && a.onError()
						}
					};
					window.addEventListener("message", f, !1)
				}
			}
			return a
		}();
		a.ModalPageDirective = b
	}(b = a.WebClient || (a.WebClient = {}))
}(Apriso || (Apriso = {})), angular.module("awcApp").directive("modalPage", ["$sce", function(a) {
	return new Apriso.WebClient.ModalPageDirective(a)
}]);
var Apriso;
! function(a) {
	var b;
	! function(a) {
		var b = function() {
			function a(a, b, c, d) {
				this.$q = a, this.$http = b, this.sessionInfo = c, this.$window = d, this.noticesRequiredName = "notices_required", this.noticesAcknowledgedName = "notices_acknowledged"
			}
			return a.prototype.isNoticeRequired = function() {
				var a = this;
				if ("true" === window.sessionStorage.getItem(this.noticesAcknowledgedName)) return this.$q.when(!1);
				if (null == window.sessionStorage.getItem(this.noticesRequiredName)) {
					var b = this.checkServer();
					return b.then(function(b) {
						window.sessionStorage.setItem(a.noticesRequiredName, String(b))
					}), b
				}
				return this.$q.when("true" === window.sessionStorage.getItem(this.noticesRequiredName))
			}, a.prototype.setNoticesAcknowledgment = function() {
				window.sessionStorage.setItem(this.noticesAcknowledgedName, "true")
			}, a.prototype.clearStorage = function() {
				window.sessionStorage.removeItem(this.noticesRequiredName), window.sessionStorage.removeItem(this.noticesAcknowledgedName)
			}, a.prototype.checkServer = function() {
				var a = this.sessionInfo.BaseHttpServicesAddress + "/api/platform/1/notices";
				return this.$http.get(a).then(function(a) {
					return a.data.Required
				})["catch"](function(a) {
					return !1
				})
			}, a
		}();
		a.NoticeService = b
	}(b = a.WebClient || (a.WebClient = {}))
}(Apriso || (Apriso = {})), angular.module("awcApp").service("NoticeService", ["$q", "$http", "SessionInfo", "$window", function(a, b, c, d) {
	return new Apriso.WebClient.NoticeService(a, b, c, d)
}]), angular.module("awcApp").controller("aboutBoxCtrl", ["$scope", "$modalInstance", function(a, b) {
	var c = !1;
	a.cancel = function() {
		c || (c = !0, b.dismiss("cancel"))
	}
}]);
var Apriso;
! function(a) {
	var b;
	! function(a) {
		var b = function() {
			function a(a, b) {
				var c = this;
				this.restrict = "E", this.scope = {
					aboutUrl: "@",
					dismiss: "&"
				}, this.templateUrl = "modules/about/aboutBoxDirective.html", this.link = function(a) {
					a.aboutUrl = c.$sce.trustAsResourceUrl(c._sessionInfo.PortalLink + "/about.aspx?mode=inline")
				}, this._sessionInfo = a, this.$sce = b
			}
			return a
		}();
		a.AboutBoxDirective = b
	}(b = a.WebClient || (a.WebClient = {}))
}(Apriso || (Apriso = {})), angular.module("awcApp").directive("aboutBox", ["SessionInfo", "$sce", function(a, b) {
	return new Apriso.WebClient.AboutBoxDirective(a, b)
}]);
