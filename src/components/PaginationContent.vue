<script setup lang="ts"></script>

<template>
  <div class="pagination">
    <button class="pagination__button" type="button">&lt;</button>
    <ul class="pagination__list">
      <li><a class="pagination__link active" href="">1</a></li>
      <li><a class="pagination__link" href="">2</a></li>
      <li><a class="pagination__link" href="">3</a></li>
    </ul>
    <button class="pagination__button" type="button">&gt;</button>
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
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
  color: #333;
  text-decoration: none;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s;
}

.pagination__button:hover,
.pagination__link:hover {
  background-color: #f5f5f5;
}

.pagination__link.active {
  background-color: var(--color-acent-button);
  color: var(--color-default-white);
  border-color: var(--color-acent-button);
  pointer-events: none;
}
</style>
