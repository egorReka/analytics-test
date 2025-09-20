<script setup lang="ts">
import { Chart } from 'chart.js'
import { onMounted, ref } from 'vue'

const chartRef = ref<HTMLCanvasElement | null>(null)

onMounted(() => {
  if (chartRef.value) {
    new Chart(chartRef.value, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    })
  }
})
</script>

<template>
  <div class="chart">
    <canvas ref="chartRef"></canvas>
  </div>
</template>

<style scoped>
.chart {
  display: grid;
  width: 100%;
}
</style>
