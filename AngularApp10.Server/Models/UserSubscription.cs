﻿using System;
using System.Collections.Generic;

namespace AngularApp10.Server.Models;

public partial class UserSubscription
{
    public int Id { get; set; }

    public int? UserId { get; set; }

    public int? SubscriptionId { get; set; }

    public DateOnly? StartDate { get; set; }

    public DateOnly? EndDate { get; set; }

    public int? SubServiceId { get; set; }

    public virtual SubService? SubService { get; set; }

    public virtual Subscription? Subscription { get; set; }

    public virtual User? User { get; set; }
}
