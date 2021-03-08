namespace AspNetCoreMVCJqueryToReact.Models
{
    public class Query
    {
        public SearchInfo Search { get; set; }
        public int Draw { get; set; }
        public int Start { get; set; }
        public int Length { get; set; }
        public ColFilters ColumnFilters { get; set; }

        public class SearchInfo
        {
            public bool Regex { get; set; }
            public string Value { get; set; }
        }

        public class ColFilters
        {
            public string Name { get; set; }
            public string Role { get; set; }
            public string Job { get; set; }
        }
    }
}
