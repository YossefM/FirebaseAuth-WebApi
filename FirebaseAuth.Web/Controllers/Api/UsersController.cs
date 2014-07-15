using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using FirebaseAuth.Model;
using JWT;
using System.Web.Configuration;
using Newtonsoft.Json;
using FirebaseAuth.Web.Filters.Api;

namespace FirebaseAuth.Web.Controllers.Api
{

    public class UsersController : ApiController
    {
        // GET api/users
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/users/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/users
        public void Post([FromBody]FbUser user)
        {
            // Save user
        }

        // PUT api/users/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/users/5
        public void Delete(int id)
        {
        }
    }
}
