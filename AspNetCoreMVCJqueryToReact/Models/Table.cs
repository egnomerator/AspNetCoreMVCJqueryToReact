using System.Collections.Generic;

namespace AspNetCoreMVCJqueryToReact.Models
{
    public class Table
    {
        public int Draw { get; set; }
        public int RecordsTotal { get; set; }
        public int RecordsFiltered { get; set; }
        public List<CrewMember> Data { get; set; }
    }
}
