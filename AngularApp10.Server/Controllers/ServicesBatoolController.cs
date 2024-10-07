using AngularApp10.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AngularApp10.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServicesBatoolController : ControllerBase
    {

        private readonly MyDbContext _db;

        public ServicesBatoolController(MyDbContext db)
        {
            _db = db;
                
        }

        [HttpGet]
        public IActionResult Get()
        {

            var services = _db.Services.ToList();
            return Ok(services);
        }
    }
}
