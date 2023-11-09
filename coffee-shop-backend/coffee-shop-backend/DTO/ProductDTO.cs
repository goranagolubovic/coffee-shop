﻿namespace coffee_shop_backend.DTO
{
    public  class ProductDTO
    {
        public int Id { get; set; }

        public string Title { get; set; } = null!;

        public string Description { get; set; } = null!;

        public string Price { get; set; } = null!;

        public string ImageUrl { get; set; } = null!;
    }
}
