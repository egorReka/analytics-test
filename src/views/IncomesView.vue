<script setup lang="ts">;
import { onMounted, ref } from 'vue';
import { Chart } from 'chart.js';

import HeaderContent from '@/components/HeaderContent.vue';
import PaginationContent from '@/components/PaginationContent.vue';
import { useIncomesStore } from '@/stores/incomes.store';
import type { Income } from '@/interfaces/income.interface';

const storeIncomes = useIncomesStore();
const chartRef = ref<HTMLCanvasElement | null>(null);
const chart = ref<Chart<'bar'> | null>(null);

function getWarehouseSales(incomes: Income[]) {
  const warehouseSales: Record<string, number> = {};

  incomes.forEach((item) => {
    const quantity = item.quantity;

    if (warehouseSales[item.warehouse_name]) {
      warehouseSales[item.warehouse_name] += quantity;
    } else {
      warehouseSales[item.warehouse_name] = quantity;
    }
  })

  const labels = Object.keys(warehouseSales);
  const data = Object.values(warehouseSales);
  const length = Object.keys(warehouseSales).length;

  return { labels, data, length };
}

function initChart() {
  if (chart.value) {
    chart.value.destroy();
  }

  if (chartRef.value) {
    chart.value = new Chart(chartRef.value, {
      type: 'bar',
      data: {
        labels: getWarehouseSales(storeIncomes.incomes).labels,
        datasets: [
          {
            label: 'Количество, шт.',
            data: getWarehouseSales(storeIncomes.incomes).data,
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

async function onDateSubmit() {
  if (storeIncomes.dates.dateFrom && storeIncomes.dates.dateTo) {
    await storeIncomes.fetchIncomes(storeIncomes.dates.dateFrom, storeIncomes.dates.dateTo);
    await initChart();
  }
}

async function handlePageChange(page: number) {
  if (storeIncomes.dates.dateFrom && storeIncomes.dates.dateTo) {
    await storeIncomes.fetchIncomes(storeIncomes.dates.dateFrom, storeIncomes.dates.dateTo, page);
  }
}

onMounted(() => {
  if (storeIncomes.dates.dateFrom && storeIncomes.dates.dateTo) {
    initChart();
  }
})
</script>

<template>
  <section class="content">
    <h2 class="visually-hidden">Incomes</h2>

    <HeaderContent v-model:dateFrom="storeIncomes.dates.dateFrom" v-model:dateTo="storeIncomes.dates.dateTo"
      @submit="onDateSubmit" />

    <div class="chart" v-if="storeIncomes.incomes.length">
      <canvas ref="chartRef" style="height: 300px"></canvas>
    </div>

    <table class="table" v-if="storeIncomes.incomes.length">
      <thead>
        <tr>
          <th scope="col">Дата</th>
          <th scope="col">Артикул</th>
          <th scope="col">Регион</th>
          <th scope="col">Количество</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in storeIncomes.incomes" :key="index">
          <td>{{ item.date.split(' ')[0] }}</td>
          <td>{{ item.barcode }}</td>
          <td>{{ item.warehouse_name }}</td>
          <td>{{ item.quantity }}</td>
        </tr>
      </tbody>
    </table>

    <PaginationContent v-if="storeIncomes.pagination" :pagination="storeIncomes.pagination"
      @pageChange="handlePageChange" />
  </section>
</template>

<style scope>
.content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
