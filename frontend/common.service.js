app.factory("CommonService", ['$rootScope','$timeout', function ($rootScope, $timeout) {
        var service = {};
        service.banner = banner;
        service.amigable = amigable;
        service.pretty = pretty;
        return service;

        function banner(message, type) {
            $rootScope.bannerText = message;
            $rootScope.bannerClass = 'alertbanner aletbanner' + type;
            $rootScope.bannerV = true;

            $timeout(function () {
                $rootScope.bannerV = false;
                $rootScope.bannerText = "";
            }, 5000);
        }
        
        function amigable(url) {
            var link = "";
            url = url.replace("?", "");
            url = url.split("&");

            for (var i = 0; i < url.length; i++) {
                var aux = url[i].split("=");
                link += aux[1] + "/";
            }
            return link;
        }

        function pretty(url) {
            alert(url);
            var pretty_url="";
            url = url.replace("?", "");
            url = url.split("&");
            for(var i=0; i<url.length;i++){
            var aux = url[i].split("=");
            pretty_url += "/"+aux[1];
            }
            var SITEROOT = "http://localhost/ServiOntiTec"
            alert(pretty_url);
            var long_url = SITEROOT + pretty_url;
            return long_url;
            }
    
    }]);
