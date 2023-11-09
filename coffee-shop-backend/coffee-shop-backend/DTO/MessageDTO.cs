using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace coffee_shop_backend.DTO
{
    public class MessageDTO
    {
       
        public int Id { get; set; }

        public string NameFrom { get; set; } = null!;

        public string EmailFrom { get; set; } = null!;

        public string Message1 { get; set; } = null!;
    }
}
