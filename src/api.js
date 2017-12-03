import axios from 'axios';

const API_URL = 'https://filmsonfreeview.herokuapp.com/api';

async function getAllFilms() {
  const res = await axios.get(`${API_URL}/films`);
  return res.data;
}

export { getAllFilms };
