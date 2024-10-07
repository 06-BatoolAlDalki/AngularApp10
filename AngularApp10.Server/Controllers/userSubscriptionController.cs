using AngularApp10.Server.DTO;
using AngularApp10.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AngularApp10.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class userSubscriptionController : ControllerBase
    {

        private readonly MyDbContext _db;

        public userSubscriptionController(MyDbContext db)
        {
            _db = db;
                
        }


        [HttpPost]
        public IActionResult addUserSubscription([FromBody] userSubscriptionDTO subscriptionDTO)
        {
            var subscription = _db.Subscriptions.Where(x=> x.SubscribtionId == subscriptionDTO.SubscriptionId).FirstOrDefault();
            var amount = subscription.SubscriptionAmount;

            var startDate = DateOnly.FromDateTime(DateTime.Now);

            DateOnly endDate = DateOnly.FromDateTime(DateTime.Now);

            switch (amount)
            {
                case "7":
                    endDate = startDate.AddDays(7); break;
                case "90":
                    endDate = startDate.AddMonths(3); break;
                case "365":
                    endDate = startDate.AddYears(1); break;
                        
            }

            var userSubsription = new UserSubscription
            {
                UserId = subscriptionDTO.UserId,
                SubscriptionId = subscriptionDTO.SubscriptionId,
                SubServiceId = subscriptionDTO.SubServiceId,
                StartDate = startDate,
                EndDate = endDate
            };

            _db.UserSubscriptions.Add(userSubsription);
            _db.SaveChanges();

            return Ok();
        }
    }
}
