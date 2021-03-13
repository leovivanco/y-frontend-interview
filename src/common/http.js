import axios from 'axios'

const BASE = 'http://numbersapi.com/random/year?json'

export const getRandomDate = async () => {
  return axios.get(BASE)
}
