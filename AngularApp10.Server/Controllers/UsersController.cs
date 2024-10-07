using AngularApp10.Server.DTO;
using AngularApp10.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AngularApp10.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly MyDbContext _db;
        public UsersController(MyDbContext db)
        {
            _db = db;  
        }


        [HttpPost]
        public IActionResult addUser([FromForm] addUserDTO userDTO)
        {
            var checkuser = _db.Users.Where(x => x.Email == userDTO.Email).FirstOrDefault();

            if (checkuser != null)
                return BadRequest("user already exist");

            var user = new User
            {
                Username = userDTO.Username,
                Email = userDTO.Email,
                Password = userDTO.Password,
                FirstName = userDTO.FirstName,
                LastName = userDTO.LastName
            };


            _db.Users.Add(user);
            _db.SaveChanges();

            return Ok(user);
        }


        [HttpPost ("lognUser")]
        public IActionResult loginUser([FromForm] loginDTO login)
        {

            var user = _db.Users.Where(x => x.Email == login.Email && x.Password == login.Password).FirstOrDefault();

            if (user != null) 
                return Ok(user);

            return NotFound();
        }

    }
}
