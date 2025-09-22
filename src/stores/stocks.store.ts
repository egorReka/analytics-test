import { API_ENDPOINT, API_KEY, http } from '@/api'
import type { PaginationMeta } from '@/interfaces/common/pagination.interface'
import type { Stock, StockResponse } from '@/interfaces/stock.interface'
import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStockStore = defineStore('stocks', () => {
  const stocks = ref<Stock[]>([])
  const pagination = ref<PaginationMeta>()
  const currentPage = ref<number>(1)

  async function fetchStocks(page: number = 1) {
    currentPage.value = page;

    try {
      const { data } = await http.get<StockResponse>(API_ENDPOINT.stocks, {
        params: {
          dateFrom: new Date().toISOString().split('T')[0],
          page,
          key: API_KEY,
          limit: 30,
        },
      })

      stocks.value = data.data
      pagination.value = data.meta

    } catch(error) {
      if (axios.isAxiosError(error)) {
        if (error.message.includes("Network Error")) {
          alert('Не удалось загрузить данные с сервера. Возможные причины: Mixed Content или CORS.');
        }
      }
    }
  }

  return { stocks, pagination, currentPage, fetchStocks }
})
