namespace AspNetCoreMVCJqueryToReact.Models
{
    public class TableViewModel
    {
        public string Title { get; set; }
        public NameFilter Names { get; set; }
        public RoleFilter Roles { get; set; }
        public JobFilter Jobs { get; set; }
        public ColumnLabels Columns { get; set; }

        public class NameFilter
        {
            public string Charlie { get; } = "Charlie";
            public string Mac { get; } = "Mac";
            public string Dennis { get; } = "Dennis";
            public string Dee { get; } = "Dee";
            public string Frank { get; } = "Frank";
        }

        public class RoleFilter
        {
            public string Wildcard { get; } = "Wildcard";
            public string Plans { get; } = "Plans";
            public string TheLooks { get; } = "The Looks";
            public string Jokes { get; } = "Jokes";
            public string TheMoney { get; } = "The Money";
        }

        public class JobFilter
        {
            public string Janitor { get; } = "Janitor";
            public string Security { get; } = "Security";
            public string BarTender { get; } = "Bar Tender";
            public string Owner { get; } = "Owner";
        }

        public class ColumnLabels
        {
            public string Name{get;set;}
            public string Role{get;set;}
            public string Job{get;set;}
        }
    }
}
