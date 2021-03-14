import axios from 'axios'

const BASE = 'http://numbersapi.com/random/year?min=1000&max=2021&json'

export const getRandomDate = async () => {
  return axios.get(BASE)
}
