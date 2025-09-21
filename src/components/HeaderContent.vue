<script setup lang="ts">
import { computed } from 'vue';

const dateFrom = defineModel<string>('dateFrom');
const dateTo = defineModel<string>('dateTo');

const today = new Date().toISOString().split('T')[0];

const minDateTo = computed(() => {
  if (!dateFrom.value) return ''

  const date = new Date(dateFrom.value);
  date.setDate(date.getDate() + 1);

  return date.toISOString().split('T')[0];
})

const emit = defineEmits(['submit']);

function onSubmit(evt: Event) {
  evt.preventDefault();
  emit('submit');
}
</script>

<template>
  <header class="header">
    <form class="header__filters" action="" method="GET" @submit="onSubmit">

      <div class="header__filters-wrapper">
        <div class="header__filter">
          <label class="visually-hidden" for="dateFrom">Date from</label>
          <input class="date-input" id="dateFrom" type="date" :max="today" v-model="dateFrom" />
        </div>
        <div class="header__filter">
          <label class="visually-hidden" for="dateTo">Date to</label>
          <input class="date-input" id="dateTo" type="date" :min="minDateTo" :max="today" v-model="dateTo" />
        </div>
      </div>

      <button class="header__filters-button" type="submit">Apply</button>
    </form>
  </header>
</template>

<style scope>
.header__filters,
.header__filters-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.header__filters {
  justify-content: space-between;
}

.header__filters-button {
  display: block;
  font-size: 18px;
  padding: 5px 15px;
  background-color: var(--color-acent-button);
  border: none;
  border-radius: 5px;
  color: var(--color-default-white);
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;
}

.header__filters-button:hover {
  opacity: 0.6;
}

.header__filter input {
  font-size: 18px;
  padding: 5px;
  border: 1px solid var(--color-default-border);
  border-radius: 5px;
  cursor: pointer;
}

.date-input {
  padding: 8px 12px;
  border: 1px solid var(--color-default-border);
  border-radius: 6px;
  font-size: 14px;
  font-family: inherit;
  background-color: var(--color-default-white);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.date-input:focus {
  border-color: var(--color-acent-button);
  box-shadow: var(--shadow-input);
  outline: none;
}

.date-input::-webkit-calendar-picker-indicator {
  cursor: pointer;
  filter: invert(0.5);
}
</style>
