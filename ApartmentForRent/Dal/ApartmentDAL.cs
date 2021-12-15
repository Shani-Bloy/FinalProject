using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal
{
   public class ApartmentDAL
    {
        public IEnumerable<Apartment> GetAllApartments()
        {
            try
            {
                using (ApartmentsForRentEntities ctx = new ApartmentsForRentEntities())
                {
                    return ctx.Apartment.ToList();
                }
            }
            catch (Exception ex)
            {
                throw new Exception(" error!!!!", ex);
            }
        }
        public IEnumerable<Apartment> SearchApartment(string city,int? numChildren,DateTime? startDate, DateTime? endDate)
        {
            try
            {
                using (ApartmentsForRentEntities ctx = new ApartmentsForRentEntities())
                {
                    var q = ctx.Dates.Include("Apartment").AsEnumerable().Where(x => (x.Apartment.City == city) &&
                                                                                  (x.Apartment.NumberOfBeds == numChildren || numChildren == null) &&
                                                                                  (x.StartDate == startDate || startDate == null) &&
                                                                                  (x.EndDate == startDate || endDate == null)
                                                                                 ).ToList();

                    
                    var a = q.Select(t => t.Apartment).ToList();
                    return a;
                }
            }
            catch (Exception ex)
            {
                throw new Exception(" error!!!!", ex);
            }
        }

        public IEnumerable<Apartment> RentorApartments(int id)
        {
            try
            {
                using (ApartmentsForRentEntities ctx = new ApartmentsForRentEntities())
                {
                    var q = ctx.Apartment.AsEnumerable().Where(x => x.RentorId == id ).ToList();
                    return q;
                }
            }
            catch (Exception ex)
            {
                throw new Exception(" error!!!!", ex);
            }
        }

        public Apartment GetApartment(int id)
        {
            using (ApartmentsForRentEntities ctx = new ApartmentsForRentEntities())
            {
                return ctx.Apartment.Single(x => x.ApartmentId == id);
            }
        }
        public void PostNewApartment(Apartment apartment,ApartmentDetails apartmentDetails)
        {
            using (var ctx = new ApartmentsForRentEntities())
            {
                ctx.Apartment.Add(new Apartment()
                {
                    RentorId = apartment.RentorId,
                    City = apartment.City,
                    Street = apartment.Street,
                    Floor = apartment.Floor,
                    NumberOfRooms = apartment.NumberOfRooms,
                    NumberOfBeds = apartment.NumberOfBeds,
                    NumberOfAirConditioners = apartment.NumberOfAirConditioners
                }); ctx.SaveChanges();

                ApartmentDetailsDAL dal = new ApartmentDetailsDAL();
                dal.PostNewApartmentDetails(apartmentDetails);
            }
            
        }
     

    }    
}



