using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal
{
    public class ApartmentDetailsDAL
    {
        public IEnumerable<ApartmentDetails> GetAllApartmentsDetails()
        {
            try
            {
                using (ApartmentsForRentEntities ctx = new ApartmentsForRentEntities())
                {
                    return ctx.ApartmentDetails.ToList();
                }
            }
            catch (Exception ex)
            {
                throw new Exception(" error in GetAllApartmentsDetails!!!!", ex);
            }
        }

        public ApartmentDetails GetApartmentDetails(int id)
        {
            using (ApartmentsForRentEntities ctx = new ApartmentsForRentEntities())
            {
                return ctx.ApartmentDetails.FirstOrDefault(x => x.IdApartment == id);
            }
        }
    }
}
