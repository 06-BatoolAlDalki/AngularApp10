using AngularApp10.Server.DTO;
using AngularApp10.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AngularApp10.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class servicesController : ControllerBase
    {
        private readonly MyDbContext _db;
        public servicesController(MyDbContext db)
        {
            _db = db;
        }

        [HttpGet("getAllServices")]
        public IActionResult getAllServices()
        {
            var services = _db.Services.ToList();
            return Ok(services);
        }



        [HttpPost]
        public IActionResult addService([FromForm] addServiceDTO serviceDTO)
        {


            var folder = Path.Combine(Directory.GetCurrentDirectory(), "UploadsImages");

            if (!Directory.Exists(folder))
            {

                Directory.CreateDirectory(folder);
            }

            var fileImage = Path.Combine(folder, serviceDTO.ServiceImage.FileName);

            using (var stream = new FileStream(fileImage, FileMode.Create))
            {

                serviceDTO.ServiceImage.CopyToAsync(stream);

            }

            var newService = new Service
            {
                ServiceName = serviceDTO.ServiceName,
                ServiceDescription = serviceDTO.ServiceDescription,
                ServiceImage = serviceDTO.ServiceImage.FileName
            };


            _db.Services.Add(newService);
            _db.SaveChanges();
            return Ok(newService);
        }


        //[HttpGet("images/{imagePath}")]
        //public IActionResult getImages(string imagePath)
        //{
        //    var path = Path.Combine(Directory.GetCurrentDirectory(), "UploadsImages", imagePath);

        //    if(System.IO.File.Exists(path))
        //    {
        //        return PhysicalFile(path , "image/png");
        //    }

        //    return NotFound();   
        //}


        [HttpPut("updateService/{id}")]
        public IActionResult updateService(int id , [FromForm] updateServiceDTO serviceDTO)
        {

            var service  = _db.Services.Where(x => x.ServiceId == id).FirstOrDefault();

            var folder = Path.Combine(Directory.GetCurrentDirectory(), "UploadsImages");

            if (!Directory.Exists(folder))
            {

                Directory.CreateDirectory(folder);
            }

            var fileImage = Path.Combine(folder, serviceDTO.ServiceImage.FileName);

            using (var stream = new FileStream(fileImage, FileMode.Create))
            {

                serviceDTO.ServiceImage.CopyToAsync(stream);

            }


            service.ServiceName = serviceDTO.ServiceName;
            service.ServiceDescription = serviceDTO.ServiceDescription;
            service.ServiceImage = serviceDTO.ServiceImage.FileName ;


            
            _db.Services.Update(service);
            _db.SaveChanges();

            return Ok(service);

        }


        [HttpGet ("getImages/{imageName}")]
        public IActionResult getImage(string imageName)
        {

            var pathImage = Path.Combine(Directory.GetCurrentDirectory(), "UploadsImages", imageName);
            if(System.IO.File.Exists(pathImage))
            {
                return PhysicalFile(pathImage , "image/jpeg");
            }

            return NotFound();
        }

    }
}
