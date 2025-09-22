import { API_ENDPOINT, API_KEY, http } from '@/api'
import type { PaginationMeta } from '@/interfaces/common/pagination.interface'
import type { Income, IncomeResponse } from '@/interfaces/income.interface'
import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useIncomesStore = defineStore('incomes', () => {
  const incomes = ref<Income[]>([])
  const pagination = ref<PaginationMeta>()
  const currentPage = ref<number>(1)
  const dates = ref<{ dateFrom: string; dateTo: string }>({
    dateFrom: '',
    dateTo: '',
  })

  async function fetchIncomes(dateFrom: string, dateTo: string, page: number = 1) {
    currentPage.value = page

    try {
      const { data } = await http.get<IncomeResponse>(API_ENDPOINT.incomes, {
        params: {
          dateFrom,
          dateTo,
          page,
          key: API_KEY,
          limit: 10,
        },
      })

      incomes.value = data.data
      pagination.value = data.meta

    } catch(error) {
      if (axios.isAxiosError(error)) {
        if (error.message.includes("Network Error")) {
          alert('Не удалось загрузить данные с сервера. Возможные причины: Mixed Content или CORS.');
        }
      }
    }
  }

  return { incomes, pagination, dates, currentPage, fetchIncomes }
})
