using AspNetCoreMVCJqueryToReact.Models;
using System.Collections.Generic;

namespace AspNetCoreMVCJqueryToReact.Logic
{
    public interface IQueryInterpreter
    {
        void Read(Query query);
        QueryInterpreter.QueryResults RunQuery(List<CrewMember> theCrew);
    }
}
