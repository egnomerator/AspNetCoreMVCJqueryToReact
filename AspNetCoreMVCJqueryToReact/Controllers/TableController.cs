using AspNetCoreMVCJqueryToReact.Data;
using AspNetCoreMVCJqueryToReact.Models;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace AspNetCoreMVCJqueryToReact.Controllers
{
    public class TableController : Controller
    {
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
                }
            };
            return View(m);
        }

        [HttpPost]
        public IActionResult GetTheCrew([FromBody] Query query)
        {
            var theCrew = Crew.Members;

            var filtered = string.IsNullOrWhiteSpace(query.Search.Value)
                ? theCrew
                : theCrew.Where(m => m.Name.Contains(query.Search.Value, System.StringComparison.OrdinalIgnoreCase)).ToList();

            var paged = filtered.Skip(query.Start).Take(query.Length).ToList();

            var m = new Table
            {
                Draw = query.Draw,
                RecordsTotal = theCrew.Count,
                RecordsFiltered = filtered.Count,
                Data = paged
            };

            return Json(m);
        }
    }
}
