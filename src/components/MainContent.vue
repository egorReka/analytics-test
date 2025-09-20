<script setup lang="ts">
import HeaderContent from '@/components/HeaderContent.vue';
import ChartContent from '@/components/ChartContent.vue';
import TableContent from '@/components/TableContent.vue';
import PaginationContent from '@/components/PaginationContent.vue';
</script>

<template>
  <section class="content">
    <h2 class="visually-hidden">Orders</h2>

    <HeaderContent />

    <ChartContent />

    <TableContent />

    <PaginationContent />
  </section>
</template>

<style scope>
.content {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 40px;
}
</style>
