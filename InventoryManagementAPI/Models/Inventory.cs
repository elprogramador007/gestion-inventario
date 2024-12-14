using System.ComponentModel.DataAnnotations;

namespace InventoryManagementAPI.Models
{
    public class Inventory
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public int ProductId { get; set; }

        [Required]
        public int Quantity { get; set; }

        public DateTime LastUpdated { get; set; } = DateTime.UtcNow;

        public Product Product { get; set; }
    }
}