import { API_ENDPOINT, API_KEY, http } from "@/api";
import type { PaginationMeta } from "@/interfaces/common/pagination.interface";
import type { Order, OrderResponse } from "@/interfaces/order.interface";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useOrdersStore = defineStore('orders', () => {
  const orders = ref<Order[]>([]);
  const pagination = ref<PaginationMeta>();
  const currentPage = ref<number>(1);

  async function fetchOrders(dateFrom: string, dateTo: string, page: number = 1) {
    currentPage.value = page;

    const { data } = await http.get<OrderResponse>(API_ENDPOINT.orders, {
      params: {
        dateFrom,
        dateTo,
        page,
        key: API_KEY,
        limit: 10,
      }
    });

    orders.value = data.data
    pagination.value = data.meta
  }

  return { orders, pagination, currentPage, fetchOrders }
})

