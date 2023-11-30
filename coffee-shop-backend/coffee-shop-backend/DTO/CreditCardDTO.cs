namespace coffee_shop_backend.DTO
{
    public class CreditCardDTO
    {
        public string CreditCardNumber { get; set; } = null!;

        public string NameAndSurname { get; set; } = null!;

        public string Cvc2 { get; set; } = null!;

        public string ValidUntil { get; set; } = null!;

        public decimal AccountState { get; set; }
    }
}
