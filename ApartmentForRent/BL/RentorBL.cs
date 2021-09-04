using BL.Converters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dal;
using DTO;
namespace BL
{
    public class RentorBL
    {
        public IEnumerable<RentorDTO> GetRentors()
        {
            var list = new Dal.RentorDal().GetAll();
            foreach (var item in list)
            {
                yield return Converters.RentorConverter.GetRentorDTOFromEntity(item);
            }
        }
        public RentorDTO GetRentor(int id)
        {
            return Converters.RentorConverter.GetRentorDTOFromEntity(new Dal.RentorDal().GetRentor(id));
        }
        
        public void PostRentor(RentorDTO rentor)
        {
            new Dal.RentorDal().PostNewRentor(Converters.RentorConverter.GetRentorFromDTO(rentor));
        }
        public void PutRentor(RentorDTO rentor)
        {
            new Dal.RentorDal().Put(Converters.RentorConverter.GetRentorFromDTO(rentor));
        }
        public int login(string userName ,string password)
        {
           return new Dal.RentorDal().login(Converters.RentorConverter.GetUserFromDto(userName, password));
        }
    }
}
