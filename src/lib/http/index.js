import axios from "axios";

class Http {
  fetchWeather(location) {
    return axios.get(
      `${process.env.REACT_APP_WEATHER_BASE_URL}${location}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
    );
  }

  fetcDetailhWeather(location) {
    return axios.get(
      `${process.env.REACT_APP_WEATHER_DETALE_URL}${location}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
    );
  }
}

export default Http;
