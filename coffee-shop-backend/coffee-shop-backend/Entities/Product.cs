using System;
using System.Collections.Generic;

namespace coffee_shop_backend.Entities;

public partial class Product
{
    public int Id { get; set; }

    public string Title { get; set; } = null!;

    public string Description { get; set; } = null!;

    public string Price { get; set; } = null!;

    public string ImageUrl { get; set; } = null!;
}
