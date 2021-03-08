using AspNetCoreMVCJqueryToReact.Models;
using System.Collections.Generic;
using System.Linq;

namespace AspNetCoreMVCJqueryToReact.Logic
{
    public class QueryInterpreter : IQueryInterpreter
    {
        private Query _query;
        private bool _hasColumnFilters;
        private bool _hasSearchText;

        public class QueryResults
        {
            public int TotalCount { get; set; }
            public int FilteredCount { get; set; }
            public List<CrewMember> ResultSet { get; set; }
        }

        public void Read(Query query)
        {
            _query = query;

            _hasColumnFilters = IsWithColumnFilters();
            _hasSearchText = IsWithSearchText();
        }

        public QueryResults RunQuery(List<CrewMember> theCrew)
        {
            var colFiltered = _hasColumnFilters
                ? FilterByColumns(theCrew)
                : theCrew;

            var searchFiltered = _hasSearchText
                ? FilterBySearchText(colFiltered)
                : colFiltered;

            var paged = searchFiltered.Skip(_query.Start).Take(_query.Length).ToList();

            return new QueryResults
            {
                TotalCount = theCrew.Count,
                FilteredCount = searchFiltered.Count,
                ResultSet = paged
            };
        }

        private List<CrewMember> FilterByColumns(List<CrewMember> theCrew)
        {
            return theCrew.Where(m =>
            {
                var nameMatches = string.IsNullOrWhiteSpace(_query.ColumnFilters.Name) || m.Name.Contains(_query.ColumnFilters.Name, System.StringComparison.OrdinalIgnoreCase);
                var roleMatches = string.IsNullOrWhiteSpace(_query.ColumnFilters.Role) || m.Role.Contains(_query.ColumnFilters.Role, System.StringComparison.OrdinalIgnoreCase);
                var jobMatches = string.IsNullOrWhiteSpace(_query.ColumnFilters.Job) || m.Job.Contains(_query.ColumnFilters.Job, System.StringComparison.OrdinalIgnoreCase);

                return nameMatches && roleMatches && jobMatches;
            }).ToList();
        }

        private List<CrewMember> FilterBySearchText(List<CrewMember> theCrew)
        {
            return theCrew.Where(m =>
            {
                var nameMatches = m.Name.Contains(_query.Search.Value, System.StringComparison.OrdinalIgnoreCase);
                var roleMatches = m.Role.Contains(_query.Search.Value, System.StringComparison.OrdinalIgnoreCase);
                var jobMatches = m.Job.Contains(_query.Search.Value, System.StringComparison.OrdinalIgnoreCase);

                return nameMatches || roleMatches || jobMatches;
            }).ToList();
        }

        private bool IsWithColumnFilters()
        {
            return
                !string.IsNullOrWhiteSpace(_query.ColumnFilters.Name) ||
                !string.IsNullOrWhiteSpace(_query.ColumnFilters.Role) ||
                !string.IsNullOrWhiteSpace(_query.ColumnFilters.Job);
        }

        private bool IsWithSearchText()
        {
            return !string.IsNullOrWhiteSpace(_query.Search.Value);
        }
    }
}
