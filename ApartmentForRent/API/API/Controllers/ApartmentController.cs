using BL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Hosting;
using System.Web.Http;

namespace API.Controllers

{
    [System.Web.Http.Cors.EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("api/apartment")]
    public class ApartmentController : ApiController
    {
        [Route("addImage")]
        public void addImage()
        {
            HttpPostedFile imageData = HttpContext.Current.Request.Files[0];
            imageData.SaveAs(HostingEnvironment.MapPath("/images/"+imageData.FileName));
        }

        [Route("GetApartments")]
        public IEnumerable<ApartmentDTO> GetApartments()
        {
            return new ApartmentBL().GetApartments();
        }

        [HttpGet()]
        [Route("Search/{city}/{num}")]
        public IEnumerable<ApartmentDTO> SearchApartments(string city,string num)
        {
            
            return new ApartmentBL().SearchApartments(city,num);
        }

        [HttpGet()]
        [Route("GetRentorApartment/{id}")]
        public IEnumerable<ApartmentDTO> GetRentorApartments(int id)
        {

            return new ApartmentBL().RentorApartments(id);
        }

        [Route("GetApartment/{id:int}")]
        public ApartmentDTO GetApartment(int id)
        {
            return new ApartmentBL().GetApartment(id);
        }

        [Route("GetApartmentDetails/{id:int}")]
        public ApartmentDetailsDTO GetApartmentDetails(int id)
        {
            return new ApartmentDetailsBL().GetApartmentDetails(id);
        }

       
        // GET: api/Apartment/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Apartment
        public void Post([FromBody]string value)
        {
        }

        [Route("PostApartment")]
        public void Post(ApartmentDTO apartment)
        {
            new BL.ApartmentBL().PostApartment(apartment);
        }


        // PUT: api/Apartment/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Apartment/5
        public void Delete(int id)
        {
        }
    }
}
