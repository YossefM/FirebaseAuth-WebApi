using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FirebaseAuth.Model
{
    public class DecodedToken
    {
        public int exp { get; set; }
        public int v { get; set; }
        public D d { get; set; }
        public int iat { get; set; }
    }

    public class D
    {
        public string id { get; set; }
        public string uid { get; set; }
        public string provider { get; set; }
    }
}
