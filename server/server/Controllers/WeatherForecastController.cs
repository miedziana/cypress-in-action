using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace server.Controllers;

[ApiController]
[Route("[controller]")]
public class WeatherForecastController : ControllerBase
{
    
    private readonly ILogger<WeatherForecastController> _logger;

    public WeatherForecastController(ILogger<WeatherForecastController> logger)
    {
        _logger = logger;
    }

    [HttpGet(Name = "GetWeatherForecast")]
    public IEnumerable<WeatherForecast> Get()
    {
        return Enumerable.Range(1, 5).Select(index =>
            {
                var temperatureC = Random.Shared.Next(-20, 55);
                return new WeatherForecast
                {
                    Date = DateTime.Now.AddDays(index),
                    TemperatureC = temperatureC,
                    Summary = getSummary(temperatureC)
                };
            })
            .ToArray();
    }

    private string? getSummary(int temperatureC)
    {
        return temperatureC switch
        {
            < -10 => "Freezing",
            < -5 => "Bracing",
            < 0 => "Chilly",
            < 10 => "Cool",
            < 18 => "Mild",
            < 23 => "Warm",
            < 28 => "Balmy",
            < 33 => "Hot",
            _ => temperatureC < 40 ? "Sweltering" : "Scorching"
        };
    }
}