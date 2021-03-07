using AspNetCoreMVCJqueryToReact.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace AspNetCoreMVCJqueryToReact.Controllers
{
    public class TableController : Controller
    {
        public IActionResult Index()
        {
            var m = new TableViewModel { Title = "The Gang" };
            return View(m);
        }

        [HttpPost]
        public IActionResult GetTheGang([FromBody] Query query)
        {
            var theGang = new List<GangMember>
            {
                new GangMember{Name = "Charlie", Role = "Wildcard", Job = "Janitor"},
                new GangMember{Name = "Mac", Role = "Plans", Job = "Security"},
                new GangMember{Name = "Dennis", Role = "Looks", Job = "Bar Tender"},
                new GangMember{Name = "Charlie", Role = "Wildcard", Job = "Janitor"},
                new GangMember{Name = "Mac", Role = "Plans", Job = "Security"},
                new GangMember{Name = "Dennis", Role = "Looks", Job = "Bar Tender"},
                new GangMember{Name = "Charlie", Role = "Wildcard", Job = "Janitor"},
                new GangMember{Name = "Mac", Role = "Plans", Job = "Security"},
                new GangMember{Name = "Dennis", Role = "Looks", Job = "Bar Tender"},
                new GangMember{Name = "Charlie", Role = "Wildcard", Job = "Janitor"},
                new GangMember{Name = "Mac", Role = "Plans", Job = "Security"},
                new GangMember{Name = "Dennis", Role = "Looks", Job = "Bar Tender"},
                new GangMember{Name = "Charlie", Role = "Wildcard", Job = "Janitor"},
                new GangMember{Name = "Mac", Role = "Plans", Job = "Security"},
                new GangMember{Name = "Dennis", Role = "Looks", Job = "Bar Tender"},
                new GangMember{Name = "Charlie", Role = "Wildcard", Job = "Janitor"},
                new GangMember{Name = "Mac", Role = "Plans", Job = "Security"},
                new GangMember{Name = "Dennis", Role = "Looks", Job = "Bar Tender"},
                new GangMember{Name = "Charlie", Role = "Wildcard", Job = "Janitor"},
                new GangMember{Name = "Mac", Role = "Plans", Job = "Security"},
                new GangMember{Name = "Dennis", Role = "Looks", Job = "Bar Tender"},
                new GangMember{Name = "Charlie", Role = "Wildcard", Job = "Janitor"},
                new GangMember{Name = "Mac", Role = "Plans", Job = "Security"},
                new GangMember{Name = "Dennis", Role = "Looks", Job = "Bar Tender"}
            };

            var filtered = string.IsNullOrWhiteSpace(query.Search.Value)
                ? theGang
                : theGang.Where(m => m.Name.Contains(query.Search.Value, System.StringComparison.OrdinalIgnoreCase)).ToList();

            var m = new Table
            {
                Draw = query.Draw,
                RecordsTotal = theGang.Count,
                RecordsFiltered = filtered.Count,
                Data = filtered
            };

            return Json(m);
        }
    }
}
