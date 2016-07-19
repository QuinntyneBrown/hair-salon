﻿using Serilog.Events;

namespace HairSalon.Trace
{
    public class TracingEvent
    {
        public int EventId { get; set; }
        public string Message { get; set; }
        public LogEventLevel Level { get; set; } = LogEventLevel.Information;
    }
}
