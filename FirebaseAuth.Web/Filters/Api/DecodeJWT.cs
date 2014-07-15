using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http.Filters;
using FirebaseAuth.Model;
using JWT;
using System.Web.Configuration;
using Newtonsoft.Json;

namespace FirebaseAuth.Web.Filters.Api
{
    public class DecodeJWT : ActionFilterAttribute
    {

        public override void OnActionExecuting(System.Web.Http.Controllers.HttpActionContext actionContext)
        {
            KeyValuePair<string, object> argument = actionContext.ActionArguments.FirstOrDefault();
            
            var controller = actionContext.ControllerContext.Controller;
            FbUser user = argument.Value as FbUser;
            var token = user.firebaseAuthToken;
            var secretKey = WebConfigurationManager.AppSettings["FirebaseSecret"];
            try
            {
                string jsonPayload = JWT.JsonWebToken.Decode(token, secretKey);
                DecodedToken decodedToken = JsonConvert.DeserializeObject<DecodedToken>(jsonPayload);
            }
            catch (JWT.SignatureVerificationException)
            {
                // Error?
            }

            base.OnActionExecuting(actionContext);
        }

    }
}