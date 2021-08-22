using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;
using Dal;

namespace BL
{
   public class ApartmentBL
    {
        public IEnumerable<ApartmentDTO> GetApartments()
        {
            var list = new Dal.ApartmentDAL().GetAllApartments();

            foreach (var item in list)
            {
                yield return Converters.ApartmentConverter.GetApartmentDTOFromEntity(item);
            }

        }
        public IEnumerable<ApartmentDTO> SearchApartments(string city,string num )
        {
            var list = new Dal.ApartmentDAL().SearchApartment(city,num);

            foreach (var item in list)
            {
                yield return Converters.ApartmentConverter.GetApartmentDTOFromEntity(item);
            }

        }

        public IEnumerable<ApartmentDTO> RentorApartments(int id)
        {
            var list = new Dal.ApartmentDAL().RentorApartments(id);

            foreach (var item in list)
            {
                yield return Converters.ApartmentConverter.GetApartmentDTOFromEntity(item);
            }

        }
        public ApartmentDTO GetApartment(int id)
        {
            return Converters.ApartmentConverter.GetApartmentDTOFromEntity(new Dal.ApartmentDAL().GetApartment(id));
        }
        public void PostApartment(ApartmentDTO apartment)
        {
            new Dal.ApartmentDAL().PostNewApartment(Converters.ApartmentConverter.GetApartmentFromDTO(apartment));
        }
    }
}
