using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace PageSorterService.Controllers
{
    public class TestController : ApiController
    {
        [HttpGet]
        [Route("api/name")]
        public string Name()
        {
            return "Angular";
        }
    }
}
