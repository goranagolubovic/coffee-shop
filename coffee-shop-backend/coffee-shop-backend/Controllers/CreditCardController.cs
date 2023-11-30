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
    public class CreditCardController : ControllerBase
    {
        private readonly CoffeeShopContext coffeeShopContext;

        public CreditCardController(CoffeeShopContext coffeeShopContext)
        {
            this.coffeeShopContext = coffeeShopContext;
        }

        [HttpPost("CheckCreditCard")]
        public async Task<ActionResult<CreditCardDTO>> CheckCreditCard([FromBody] CreditCardDTO creditCardDTO) { 
            Console.WriteLine(creditCardDTO);
            if (creditCardDTO == null)
            {
                return BadRequest("There is no credit card information");
            }

            var creditCards = await coffeeShopContext.Creditcards

                .Select(s => new CreditCardDTO
                {
                    CreditCardNumber = s.CreditCardNumber,
                    NameAndSurname = s.NameAndSurname,
                    ValidUntil = s.ValidUntil,
                    Cvc2 = s.Cvc2,
                    AccountState = s.AccountState
                })
                .ToListAsync();
            var foundedCreditCard=creditCards.Find(e => e.CreditCardNumber.Equals(creditCardDTO.CreditCardNumber) && e.Cvc2.Equals(creditCardDTO.Cvc2)
            && e.NameAndSurname.Equals(creditCardDTO.NameAndSurname) && e.ValidUntil.Equals(creditCardDTO.ValidUntil));
            if (foundedCreditCard == null)
            {
                return NotFound(); 
            }

            return Ok();
        }

        [HttpPut("UpdateBalance/{id}")]
        public async Task<ActionResult<CreditCardDTO>> UpdateBalance(String id, [FromBody] decimal amountToSubtract)
        {
            var creditCard = await coffeeShopContext.Creditcards
                .FirstOrDefaultAsync(card => card.CreditCardNumber == id);

            if (creditCard == null)
            {
                return NotFound();
            }

            if (creditCard.AccountState < amountToSubtract)
            {
                return BadRequest("Insufficient funds.");
            }

            creditCard.AccountState -= amountToSubtract;
            await coffeeShopContext.SaveChangesAsync();
            var updatedCreditCardDTO = new CreditCardDTO
            {
                CreditCardNumber = creditCard.CreditCardNumber,
                NameAndSurname = creditCard.NameAndSurname,
                ValidUntil = creditCard.ValidUntil,
                Cvc2 = creditCard.Cvc2,
                AccountState = creditCard.AccountState
            };

            return Ok();
        }

    }
}
