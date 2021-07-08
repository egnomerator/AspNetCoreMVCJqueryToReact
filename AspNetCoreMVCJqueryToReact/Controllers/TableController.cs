using AspNetCoreMVCJqueryToReact.Data;
using AspNetCoreMVCJqueryToReact.Logic;
using AspNetCoreMVCJqueryToReact.Models;
using Microsoft.AspNetCore.Mvc;

namespace AspNetCoreMVCJqueryToReact.Controllers
{
    public class TableController : Controller
    {
        private readonly IQueryInterpreter _queryInterpreter;

        public TableController(IQueryInterpreter queryInterpreter)
        {
            _queryInterpreter = queryInterpreter;
        }

        public IActionResult Index()
        {
            var m = new TableViewModel 
            { 
                Title = "The Paddy's Pub Crew",
                Columns = new TableViewModel.ColumnLabels
                {
                    Name = "Name",
                    Role = "Role",
                    Job = "Job",
                },
                Names = new TableViewModel.NameFilter { },
                Roles = new TableViewModel.RoleFilter { },
                Jobs = new TableViewModel.JobFilter { }
            };
            return View(m);
        }

        public IActionResult GetFilterNames()
        {
            var m = new TableViewModel.NameFilter { };

            return Json(m);
        }

        public IActionResult GetFilterRoles()
        {
            var m = new TableViewModel.RoleFilter { };

            return Json(m);
        }

        public IActionResult GetFilterJobs()
        {
            var m = new TableViewModel.JobFilter { };

            return Json(m);
        }

        [HttpPost]
        public IActionResult GetTheCrew([FromBody] Query query)
        {
            var theCrew = Crew.Members;

            _queryInterpreter.Read(query);
            var crew = _queryInterpreter.RunQuery(theCrew);

            var m = new Table
            {
                Draw = query.Draw,
                RecordsTotal = crew.TotalCount,
                RecordsFiltered = crew.FilteredCount,
                Data = crew.ResultSet
            };

            return Json(m);
        }
    }
}
