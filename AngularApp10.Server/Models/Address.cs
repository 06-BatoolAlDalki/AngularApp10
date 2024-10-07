using System;
using System.Collections.Generic;

namespace AngularApp10.Server.Models;

public partial class Address
{
    public int AddressId { get; set; }

    public int? UserId { get; set; }

    public string? StreetAddress { get; set; }

    public string? City { get; set; }

    public string? State { get; set; }

    public string? PostalCode { get; set; }

    public string? Country { get; set; }

    public virtual ICollection<Order> OrderBillingAddresses { get; set; } = new List<Order>();

    public virtual ICollection<Order> OrderShippingAddresses { get; set; } = new List<Order>();

    public virtual User? User { get; set; }
}
