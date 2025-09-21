<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Chart } from 'chart.js'

import PaginationContent from '@/components/PaginationContent.vue'
import { useStockStore } from '@/stores/stocks.store'
import type { Stock } from '@/interfaces/stock.interface'

const storeStocks = useStockStore()
const chartRef = ref<HTMLCanvasElement | null>(null)
const chart = ref<Chart<'bar'> | null>(null)

function getWarehouseSales(stocks: Stock[]) {
  const warehouseSales: Record<string, number> = {}

  stocks.forEach((item) => {
    if (item.price === null) {
      return
    }

    const price = parseFloat(item.price)

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
        labels: getWarehouseSales(storeStocks.stocks).labels,
        datasets: [
          {
            label: 'Остатков, руб.',
            data: getWarehouseSales(storeStocks.stocks).data,
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    })
  }
}

async function handlePageChange(page: number) {
  await storeStocks.fetchStocks(page)
}

onMounted(async () => {
  if (storeStocks.stocks.length) {
    initChart()

    return
  }

  await storeStocks.fetchStocks()
  initChart()
})
</script>

<template>
  <section class="content">
    <h2 class="visually-hidden">Stocks</h2>

    <div class="chart" v-if="storeStocks.stocks.length">
      <canvas ref="chartRef" style="height: 300px"></canvas>
    </div>

    <table class="table" v-if="storeStocks.stocks.length">
      <thead>
        <tr>
          <th scope="col">Дата</th>
          <th scope="col">Артикул</th>
          <th scope="col">Регион</th>
          <th scope="col">Цена</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in storeStocks.stocks" :key="index">
          <td>{{ item.date.split(' ')[0] }}</td>
          <td>{{ item.barcode }}</td>
          <td>{{ item.warehouse_name }}</td>
          <td>{{ item.price ? item.price : '-' }}</td>
        </tr>
      </tbody>
    </table>

    <PaginationContent
      v-if="storeStocks.pagination"
      :pagination="storeStocks.pagination"
      @pageChange="handlePageChange"
    />
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
