using AngularApp10.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AngularApp10.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubServicesBatoolController : ControllerBase
    {
        private readonly MyDbContext _db;
        public SubServicesBatoolController(MyDbContext db)
        {
            _db = db;
        }

        [HttpGet("getSubServicesByServiveId/{id}")]
        public IActionResult getSubServicesByServiveId(int id ) { 

            var subServices = _db.SubServices.Where(x=>x.ServiceId == id).ToList();
            return Ok(subServices);
        }


        [HttpGet("getSubServicesById/{id}")]
        public IActionResult getSubServicesById(int id)
        {

            var subService = _db.SubServices.Where(x => x.SubServiceId == id).FirstOrDefault();
            return Ok(subService);
        }



    }
}
