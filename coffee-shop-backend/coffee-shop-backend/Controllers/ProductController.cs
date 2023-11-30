using coffee_shop_backend.DTO;
using coffee_shop_backend.Entities;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace coffee_shop_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("AllowLocalhost4200")]
    public class ProductController : ControllerBase
    {
        private readonly CoffeeShopContext coffeeShopContext;

        public ProductController(CoffeeShopContext coffeeShopContext)
        {
            this.coffeeShopContext = coffeeShopContext;
        }
        [HttpGet("GetProducts")]
        public async Task<ActionResult<List<ProductDTO>>> Get()
        {
            var List = await coffeeShopContext.Products.Select(
                s => new ProductDTO
                {
                    Id = s.Id,
                    Title = s.Title,
                    Description = s.Description,
                    PricePerKg = s.PricePerKg,
                    ImageUrl = s.ImageUrl,
                    Amount=s.Amount,
                    TotalPrice = s.TotalPrice,  

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
