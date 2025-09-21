import axios from 'axios'

export const API_ENDPOINT = {
  orders: 'orders',
  incomes: 'incomes',
  sales: 'sales',
  stocks: 'stocks',
}

export const API_KEY = 'E6kUTYrYwZq2tN4QEtyzsbEBk3ie'

export const http = axios.create({
  baseURL: '/api', // CROS proxy http://109.73.206.144/api
  timeout: 10000,
})
