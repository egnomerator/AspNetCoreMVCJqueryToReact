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
                new GangMember{Name = "Charlie1", Role = "Wildcard", Job = "Janitor"},
                new GangMember{Name = "Mac1", Role = "Plans", Job = "Security"},
                new GangMember{Name = "Dennis1", Role = "Looks", Job = "Bar Tender"},
                new GangMember{Name = "Charlie2", Role = "Wildcard", Job = "Janitor"},
                new GangMember{Name = "Mac2", Role = "Plans", Job = "Security"},
                new GangMember{Name = "Dennis2", Role = "Looks", Job = "Bar Tender"},
                new GangMember{Name = "Charlie3", Role = "Wildcard", Job = "Janitor"},
                new GangMember{Name = "Mac3", Role = "Plans", Job = "Security"},
                new GangMember{Name = "Dennis3", Role = "Looks", Job = "Bar Tender"},
                new GangMember{Name = "Charlie4", Role = "Wildcard", Job = "Janitor"},
                new GangMember{Name = "Mac4", Role = "Plans", Job = "Security"},
                new GangMember{Name = "Dennis4", Role = "Looks", Job = "Bar Tender"},
                new GangMember{Name = "Charlie5", Role = "Wildcard", Job = "Janitor"},
                new GangMember{Name = "Mac5", Role = "Plans", Job = "Security"},
                new GangMember{Name = "Dennis5", Role = "Looks", Job = "Bar Tender"},
                new GangMember{Name = "Charlie6", Role = "Wildcard", Job = "Janitor"},
                new GangMember{Name = "Mac6", Role = "Plans", Job = "Security"},
                new GangMember{Name = "Dennis6", Role = "Looks", Job = "Bar Tender"},
                new GangMember{Name = "Charlie7", Role = "Wildcard", Job = "Janitor"},
                new GangMember{Name = "Mac7", Role = "Plans", Job = "Security"},
                new GangMember{Name = "Dennis7", Role = "Looks", Job = "Bar Tender"},
                new GangMember{Name = "Charlie8", Role = "Wildcard", Job = "Janitor"},
                new GangMember{Name = "Mac8", Role = "Plans", Job = "Security"},
                new GangMember{Name = "Dennis8", Role = "Looks", Job = "Bar Tender"}
            };

            var filtered = string.IsNullOrWhiteSpace(query.Search.Value)
                ? theGang
                : theGang.Where(m => m.Name.Contains(query.Search.Value, System.StringComparison.OrdinalIgnoreCase)).ToList();

            var paged = filtered.Skip(query.Start).Take(query.Length).ToList();

            var m = new Table
            {
                Draw = query.Draw,
                RecordsTotal = theGang.Count,
                RecordsFiltered = filtered.Count,
                Data = paged
            };

            return Json(m);
        }
    }
}
