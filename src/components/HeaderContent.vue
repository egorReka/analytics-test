<script setup lang="ts"></script>

<template>
  <header>
    <h2 class="visually-hidden">Orders</h2>

    <form class="content__filters" action="" method="GET">
      <div class="content__filters-wrapper">
        <div class="content__filter">
          <label class="visually-hidden" for="dateFrom">Date from</label>
          <input id="dateFrom" type="date" />
        </div>
        <div class="content__filter">
          <label class="visually-hidden" for="dateTo">Date to</label>
          <input id="dateTo" type="date" />
        </div>
      </div>

      <button class="content__filters-button" type="submit">Apply</button>
    </form>
  </header>
</template>

<style scope></style>
