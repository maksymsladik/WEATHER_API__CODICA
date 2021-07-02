import swal from "sweetalert";

export function setDate(data) {
  const time = new Date().toLocaleTimeString();

  const city = { ...data, time };

  return city;
}

export function setSwal(title, message) {
  return !message ? swal(title) : swal(title, message);
}

export function regExp(value) {
  return !value.length ? false : true;
}

export function checkIncludes(item, data) {
  return data.find((el) => el.name === item.name);
}

export function generateDetailWeatherUrl(name) {
  return `/${name.slice(0, 1).toLowerCase() + name.slice(1)}`;
}

export function roundMath(value) {
  return Math.round(value);
}
