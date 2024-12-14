using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace InventoryManagementAPI.Models
{
    public class User : IdentityUser
    {
        [Required]
        [StringLength(20)]
        public string Role { get; set; } = "Employee"; // Default role

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        public DateTime? LastLoginAt { get; set; }
    }
}