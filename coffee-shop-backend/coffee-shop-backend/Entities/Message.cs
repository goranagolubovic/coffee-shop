using System;
using System.Collections.Generic;

namespace coffee_shop_backend.Entities;

public partial class Message
{
    public int Id { get; set; }

    public string NameFrom { get; set; } = null!;

    public string EmailFrom { get; set; } = null!;

    public string Message1 { get; set; } = null!;
}
