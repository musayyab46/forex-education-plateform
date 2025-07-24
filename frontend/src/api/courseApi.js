import axios from 'axios';

const API_URL = 'https://forex-education-plateform.onrender.com/api/courses';

export const getCourses = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};
