﻿using System;
using System.Collections.Generic;
using System.Text;

namespace LTCSDL.Common.Req
{
    public class TransactionManyProductsReq
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public decimal Amount { get; set; }

        public List<ProIDvsProNumReq> Proreq { get; set; }
    }
}