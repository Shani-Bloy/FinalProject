using API.Model;
using BL;
using DTO;
using Microsoft.AspNetCore.Cors;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace API.Controllers
{
    [System.Web.Http.Cors.EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("api/rentor")]
    public class RnetorController : ApiController
    {
        [Route("GetRentors")]
        public IEnumerable<RentorDTO> Get()
        {
            return new RentorBL().GetRentors();
        }

        [Route("GetRentor/{id:int}")]
        public RentorDTO Get(int id)
        {
            return new RentorBL().GetRentor(id);
        }

        [Route("PostRentor")]
        public void Post(RentorDTO rentor)
        {
            new BL.RentorBL().PostRentor(rentor);
        }

        [Route("PutRentor")]
        public void Put(RentorDTO rentor)
        {
            new BL.RentorBL().PutRentor(rentor);
        }
        [HttpPost()]
        [Route("login")]
        public Response Login([FromBody] UserModel user)
        {
            Response result = new Response();
            try
            {
                int x = new BL.RentorBL().login(user.UserName, user.Password);
                result.IsSuccess = true;
                result.StatusCode = HttpStatusCode.OK;
                result.Data = x;
            }
            catch (Exception ex)
            {
                result.IsSuccess = false;
                result.Message = $"temp Error, try again later. Error: {ex}";
                result.StatusCode = HttpStatusCode.Unauthorized;
            }
            return result;
        }

        // POST: api/Rnetor
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Rnetor/5
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/Rnetor/5
        public void Delete(int id)
        {
        }
    }
}
