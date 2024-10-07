using AngularApp10.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AngularApp10.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly MyDbContext _db;

        public ProductsController(MyDbContext db)
        {
            _db = db;

        }

        [HttpGet]
        public IActionResult Get()
        {

            var services = _db.Products.ToList();
            return Ok(services);
        }
    }
}
