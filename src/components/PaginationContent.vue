<script setup lang="ts">
import type { PaginationMeta } from '@/interfaces/common/pagination.interface';

const { pagination } = defineProps<{ pagination: PaginationMeta }>();
const emit = defineEmits<{ (e: 'pageChange', page: number): void }>();

const handlePageClick = (link: { url: string | null, label: string, active: boolean }) => {
  if (link.url) {
    const url = new URL(link.url);
    const page = url.searchParams.get('page');

    if (page) {
      emit('pageChange', parseInt(page));
    }
  }
};
</script>

<template>
  <div class="pagination">
    <ul class="pagination__list">
      <li v-for="(link, index) in pagination.links" :key="index">
        <a class="pagination__link" :class="{ 'active': link.active }" @click.prevent="handlePageClick(link)" href="#"
          v-html="link.label">
        </a>
      </li>
    </ul>
  </div>
</template>

<style scope>
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.pagination__list {
  display: flex;
  gap: 6px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.pagination__button,
.pagination__link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 32px;
  padding: 0 8px;
  border: 1px solid var(--color-default-border);
  border-radius: 4px;
  background-color: var(--color-default-white);
  text-decoration: none;
  text-wrap: nowrap;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s;
}

.pagination__button:hover,
.pagination__link:hover {
  background-color: var(--color-default-bg);
}

.pagination__link.active {
  background-color: var(--color-acent-button);
  color: var(--color-default-white);
  border-color: var(--color-acent-button);
  pointer-events: none;
}
</style>
