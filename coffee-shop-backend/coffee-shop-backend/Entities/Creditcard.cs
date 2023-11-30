using System;
using System.Collections.Generic;

namespace coffee_shop_backend.Entities;

public partial class Creditcard
{
    public string CreditCardNumber { get; set; } = null!;

    public string NameAndSurname { get; set; } = null!;

    public string Cvc2 { get; set; } = null!;

    public string ValidUntil { get; set; } = null!;

    public decimal AccountState { get; set; }
}
