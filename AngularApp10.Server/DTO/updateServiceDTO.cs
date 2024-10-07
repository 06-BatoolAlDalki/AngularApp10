using AngularApp10.Server.Models;

namespace AngularApp10.Server.DTO
{
    public class updateServiceDTO
    {

        public string? ServiceName { get; set; }

        public string? ServiceDescription { get; set; }

        public IFormFile? ServiceImage { get; set; }


    }
}
