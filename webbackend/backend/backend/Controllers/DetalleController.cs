using backend.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DetalleController : ControllerBase
    {
        private readonly DataContext _context;

        public DetalleController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<DetalleModel>>> GetDetalle()
        {
            return Ok(await _context.DetalleModels.ToListAsync());
        }


        [HttpPost]
        public async Task<ActionResult<List<DetalleModel>>> CreateDetalle(DetalleModel deta)
        {
            _context.DetalleModels.Add(deta);
            await _context.SaveChangesAsync();

            return Ok(await _context.DetalleModels.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<DetalleModel>>> UpdateDetalle(DetalleModel deta)
        {
            var dbDeta = await _context.DetalleModels.FindAsync(deta.Id);
            if (dbDeta == null)
            {
                return BadRequest("Here not found");
            }

            //dbDeta.Id = deta.Id;
            dbDeta.Detalle = deta.Detalle;
            dbDeta.Fecha = deta.Fecha;

            await _context.SaveChangesAsync();

            return Ok(await _context.DetalleModels.ToListAsync());
        }


        [HttpDelete("{id}")]
        public async Task<ActionResult<List<DetalleModel>>> DeleteDetalle(int id)
        {
            var dbDeta = await _context.DetalleModels.FindAsync(id);
            if (dbDeta == null)
                return BadRequest("Here not found");
            
            _context.DetalleModels.Remove(dbDeta);
            await _context.SaveChangesAsync();

            return Ok(await _context.DetalleModels.ToListAsync());
        }
    }
}
