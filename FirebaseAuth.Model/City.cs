using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FirebaseAuth.Model
{
    public class City
    {
        public int id { get; set; }
        public string name { get; set; }
        public string countryCode { get; set; }

        public City(int theId, string theName, string theCountryCode)
        {
            id = theId;
            name = theName;
            countryCode = theCountryCode;
        }
    }
}
