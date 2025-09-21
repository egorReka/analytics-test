import { API_ENDPOINT, API_KEY, http } from "@/api";
import type { PaginationMeta } from "@/interfaces/common/pagination.interface";
import type { Stock, StockResponse } from "@/interfaces/stock.interface";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useStockStore = defineStore('stocks', () => {
  const stocks = ref<Stock[]>([]);
  const pagination = ref<PaginationMeta>();
  const currentPage = ref<number>(1);

  async function fetchStocks(page: number = 1) {
    currentPage.value = page;

    const { data } = await http.get<StockResponse>(API_ENDPOINT.stocks, {
      params: {
        dateFrom: new Date().toISOString().split('T')[0],
        page,
        key: API_KEY,
        limit: 100,
      }
    });

    stocks.value = data.data;
    pagination.value = data.meta;
  }



  return { stocks, pagination, currentPage, fetchStocks };
})

