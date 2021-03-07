namespace AspNetCoreMVCJqueryToReact.Models
{
    public class TableViewModel
    {
        public string Title { get; set; }
        public ColumnLabels Columns { get; set; }

        public class ColumnLabels
        {
            public string Name{get;set;}
            public string Role{get;set;}
            public string Job{get;set;}
        }
    }
}
