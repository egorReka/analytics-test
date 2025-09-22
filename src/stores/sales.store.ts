import axios from 'axios';
import { API_ENDPOINT, API_KEY, http } from '@/api'
import type { PaginationMeta } from '@/interfaces/common/pagination.interface'
import type { Sale, SaleResponse } from '@/interfaces/sale.interface'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSalesStore = defineStore('sales', () => {
  const sales = ref<Sale[]>([])
  const pagination = ref<PaginationMeta>()
  const currentPage = ref<number>(1)
  const dates = ref<{ dateFrom: string; dateTo: string }>({
    dateFrom: '',
    dateTo: '',
  })

  async function fetchSales(dateFrom: string, dateTo: string, page: number = 1) {
    currentPage.value = page

    try {

      const { data } = await http.get<SaleResponse>(API_ENDPOINT.sales, {
        params: {
          dateFrom,
          dateTo,
          page,
          key: API_KEY,
          limit: 10,
        },
      })

      sales.value = data.data
      pagination.value = data.meta

    } catch(error) {
      if (axios.isAxiosError(error)) {
        if (error.message.includes("Network Error")) {
          alert('Не удалось загрузить данные с сервера. Возможные причины: Mixed Content или CORS.');
        }
      }
    }
  }

  return { sales, pagination, currentPage, dates, fetchSales }
})
