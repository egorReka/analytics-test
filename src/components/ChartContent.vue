<!-- <script setup lang="ts">
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { ref } from 'vue';

// Регистрируем необходимые модули Chart.js для использования через vue-chartjs

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const chartConfig = ref({
  chartData: {
    labels: [],
    datasets: [
      {
        label: 'Сумма продаж, ₽',
        data: [],
        backgroundColor: [],
        borderWidth: 1
      }
    ]
  },
  chartOptions: {
    responsive: true
  }
})

// export default {
//   name: 'BarChart',
//   components: { Bar },
//   data() {
//     return {
//       chartData: {
//         labels: ['January', 'February', 'March'],
//         datasets: [{ data: [40, 20, 12] }]
//       },
//       chartOptions: {
//         responsive: true
//       }
//     }
//   }
// }




// import type { Chart } from 'chart.js';
// import { ref } from 'vue';

// const chartRef = ref<HTMLCanvasElement | null>(null);
// const chart = ref<Chart<'bar'> | null>(null);

// const configChart = defineProps();


// function initChart() {
//   if (chart.value) {
//     chart.value.destroy();
//   }

//   if (chartRef.value) {
//     chart.value = new Chart(chartRef.value, {
//       type: 'bar',
//       data: {
//         labels: getWarehouseSales(storeOrders.orders).labels,
//         datasets: [{
//           label: 'Сумма продаж, ₽',
//           data: getWarehouseSales(storeOrders.orders).data,
//           backgroundColor: getArrRandomColor(getWarehouseSales(storeOrders.orders).length),
//           borderWidth: 1
//         }]
//       },
//       options: {
//         responsive: true,
//         maintainAspectRatio: false,
//         scales: {
//           y: {
//             beginAtZero: true,
//             title: {
//               display: true,
//               text: '₽'
//             }
//           },
//           x: {
//             title: {
//               display: true,
//               text: 'Склад'
//             }
//           }
//         }
//       }
//     });
//   }
// }
</script>

<template>
  <Bar :options="chartConfig.chartOptions" :data="chartConfig.chartData" />
</template>

<style scoped>
.chart {
  display: grid;
  width: 100%;
}
</style> -->
