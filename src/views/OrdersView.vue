<script setup lang="ts">
import { ref } from 'vue'
import { useOrdersStore } from '@/stores/orders.store'
import { Chart } from 'chart.js'

import HeaderContent from '@/components/HeaderContent.vue'
import PaginationContent from '@/components/PaginationContent.vue'
import type { Order } from '@/interfaces/order.interface'

const storeOrders = useOrdersStore()
const chartRef = ref<HTMLCanvasElement | null>(null)
const date = ref<{ dateFrom: string; dateTo: string }>({
  dateFrom: '',
  dateTo: '',
})
const chart = ref<Chart<'bar'> | null>(null)

function getWarehouseSales(orders: Order[]) {
  const warehouseSales: Record<string, number> = {}

  orders.forEach((item) => {
    const price = parseFloat(item.total_price)

    if (warehouseSales[item.warehouse_name]) {
      warehouseSales[item.warehouse_name] += price
    } else {
      warehouseSales[item.warehouse_name] = price
    }
  })

  const labels = Object.keys(warehouseSales)
  const data = Object.values(warehouseSales)
  const length = Object.keys(warehouseSales).length

  return { labels, data, length }
}

function initChart() {
  if (chart.value) {
    chart.value.destroy()
  }

  if (chartRef.value) {
    chart.value = new Chart(chartRef.value, {
      type: 'bar',
      data: {
        labels: getWarehouseSales(storeOrders.orders).labels,
        datasets: [
          {
            label: 'Сумма продаж, ₽',
            data: getWarehouseSales(storeOrders.orders).data,
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
      },
    })
  }
}

async function onDateSubmit() {
  if (date.value.dateFrom && date.value.dateTo) {
    await storeOrders.fetchOrders(date.value.dateFrom, date.value.dateTo);
    await initChart();
  }
}

async function handlePageChange(page: number) {
  if (date.value.dateFrom && date.value.dateTo) {
    await storeOrders.fetchOrders(date.value.dateFrom, date.value.dateTo, page);
  }
}
</script>

<template>
  <section class="content">
    <h2 class="visually-hidden">Orders</h2>

    <HeaderContent v-model:dateFrom="date.dateFrom" v-model:dateTo="date.dateTo" @submit="onDateSubmit" />

    <div class="chart" v-if="storeOrders.orders.length">
      <canvas ref="chartRef" style="height: 300px"></canvas>
    </div>

    <table class="table" v-if="storeOrders.orders.length">
      <thead>
        <tr>
          <th scope="col">Дата</th>
          <th scope="col">Артикул</th>
          <th scope="col">Регион</th>
          <th scope="col">Сумма</th>
          <th scope="col">Скидка %</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in storeOrders.orders" :key="index">
          <td>{{ item.date.split(' ')[0] }}</td>
          <td>{{ item.barcode }}</td>
          <td>{{ item.oblast }}</td>
          <td>{{ Number(item.total_price).toFixed(2) }}</td>
          <td>{{ item.discount_percent }}</td>
        </tr>
      </tbody>
    </table>

    <PaginationContent v-if="storeOrders.pagination" :pagination="storeOrders.pagination"
      @pageChange="handlePageChange" />
  </section>
</template>

<style scope>
.content {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 40px;
}

.chart {
  display: grid;
  width: 100%;
}

.table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  text-align: center;
  border-radius: 8px;
  overflow: hidden;
  outline: 1px solid var(--color-default-border);
}

.table thead {
  background-color: var(--color-default-bg);
}

.table th {
  padding: 12px 16px;
  font-size: 16px;
  font-weight: 600;
  border-bottom: 2px solid var(--color-default-border);
}

.table td {
  padding: 12px 16px;
  border-bottom: 1px solid var(--color-default-border);
}

.table tbody tr:hover {
  background: var(--color-default-bg);
}

.table tbody tr:last-child td {
  border-bottom: none;
}
</style>
