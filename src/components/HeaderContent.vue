<script setup lang="ts"></script>

<template>
  <header class="header">
    <form class="header__filters" action="" method="GET">
      <div class="header__filters-wrapper">
        <div class="header__filter">
          <label class="visually-hidden" for="dateFrom">Date from</label>
          <input id="dateFrom" type="date" />
        </div>
        <div class="header__filter">
          <label class="visually-hidden" for="dateTo">Date to</label>
          <input id="dateTo" type="date" />
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

.header__filters-button:hover,
.header__filters-button:focus {
  opacity: 0.8;
}

.header__filter input {
  font-size: 18px;
  padding: 5px;
  border: 1px solid var(--color-default-border);
  border-radius: 5px;
  cursor: pointer;
}
</style>
