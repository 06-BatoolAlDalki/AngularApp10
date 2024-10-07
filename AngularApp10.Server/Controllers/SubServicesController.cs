using AngularApp10.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AngularApp10.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubServicesController : ControllerBase
    {
        private readonly MyDbContext _db;
        public SubServicesController(MyDbContext db)
        {
            _db = db;
        }

        [HttpGet("getsubservicesbyserviceID/{id}")]
        public IActionResult getsubservicesbyserviceID(int id)
        {
            var services = _db.SubServices.Where(x => x.ServiceId == id).ToList();
            return Ok(services);
        }


        [HttpGet("getsubservicesbyID/{id}")]
        public IActionResult getsubservicesbyID(int id)
        {
            var subServiceID = _db.SubServices.Where(x => x.SubServiceId == id).FirstOrDefault();
            return Ok(subServiceID);
        }
    }
}
