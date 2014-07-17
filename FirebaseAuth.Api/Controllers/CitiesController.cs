using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using FirebaseAuth.Model;

namespace FirebaseAuth.Api.Controllers
{
    public class CitiesController : ApiController
    {
        private List<City> _cities = new List<City>() { new City(1, "San Francisco", "USA"), new City(2, "London", "UK") };

        // GET api/cities
        public IEnumerable<City> Get()
        {
            return _cities;
        }

        // GET api/cities/5
        public City Get(int id)
        {
            return _cities.Single(x => x.id == id);
        }

        // POST api/cities
        public void Post([FromBody]string value)
        {
        }

        // PUT api/cities/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/cities/5
        public void Delete(int id)
        {
        }
    }
}
