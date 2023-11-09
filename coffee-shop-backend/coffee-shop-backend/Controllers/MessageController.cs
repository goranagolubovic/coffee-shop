using coffee_shop_backend.DTO;
using coffee_shop_backend.Entities;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Net;

namespace coffee_shop_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("AllowLocalhost4200")]
    public class MessageController : ControllerBase
    {
        private readonly CoffeeShopContext coffeeShopContext;

        public MessageController(CoffeeShopContext coffeeShopContext)
        {
            this.coffeeShopContext = coffeeShopContext;
        }
        [HttpPost("InsertMessage")]
        public async Task<HttpStatusCode> InsertMessage(MessageDTO Message)
        {
            
            var entity = new Message()
            {
             
               
               EmailFrom= Message.EmailFrom,
               Message1 = Message.Message1, 
               NameFrom=Message.NameFrom,
            };

            coffeeShopContext.Messages.Add(entity);
            await coffeeShopContext.SaveChangesAsync();

            return HttpStatusCode.Created;
        }
        [HttpGet("GetMessages")]
        public async Task<ActionResult<List<MessageDTO>>> Get()
        {
            var List = await coffeeShopContext.Messages.Select(
                s => new MessageDTO
                {
                    Id = s.Id,
                    NameFrom = s.NameFrom,
                    EmailFrom = s.EmailFrom,
                    Message1 = s.Message1,
                   
                }
            ).ToListAsync();

            if (List.Count < 0)
            {
                return NotFound();
            }
            else
            {
                return List;
            }
        }
    }
}
