using System;
using System.Collections.Generic;

namespace AngularApp10.Server.Models;

public partial class Order
{
    public int OrderId { get; set; }

    public int? UserId { get; set; }

    public DateTime? OrderDate { get; set; }

    public int? ShippingAddressId { get; set; }

    public int? BillingAddressId { get; set; }

    public decimal? TotalAmount { get; set; }

    public virtual Address? BillingAddress { get; set; }

    public virtual ICollection<OrderDetail> OrderDetails { get; set; } = new List<OrderDetail>();

    public virtual ICollection<Payment> Payments { get; set; } = new List<Payment>();

    public virtual Address? ShippingAddress { get; set; }

    public virtual User? User { get; set; }
}
