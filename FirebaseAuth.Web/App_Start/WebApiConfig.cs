using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using FirebaseAuth.Web.Filters.Api;

namespace FirebaseAuth.Web
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
            
            // Register JWT Filter globally
            config.Filters.Add(new ApiExceptionHandler());
            config.Filters.Add(new DecodeJWT());
        }

    }
}
