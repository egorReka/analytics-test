<script setup lang="ts">
import NavPanel from '@/components/NavPanel.vue';

</script>

<template>
  <div class="app">
    <div class="app__wrapper">
      <main class="app__main">

        <aside class="sidebar">
          <h1 class="sidebar__title">WB Analytics</h1>

          <NavPanel />
        </aside>

        <section class="content">
          <RouterView />
        </section>
      </main>
    </div>
  </div>
</template>

<style scope>
.app {
  max-width: 1440px;
  width: 100%;
  padding: 50px;
  margin: 0 auto;
}

.app__wrapper {
  background-color: var(--color-default-white);
  box-shadow: var(--shadow-default);
  border-radius: 30px;
}

.app__main {
  display: grid;
  grid-template-columns: auto 1fr;
  height: 100%;
}

.sidebar {
  height: 100%;
  padding: 40px;
  border-right: 2px solid var(--color-default-border);
}

.sidebar__title {
  margin: 0 0 20px;
  font-size: 30px;
  font-weight: 700;
  text-transform: uppercase;
  color: tomato;
}

.content {
  padding: 40px;
}

.content__title {
  margin: 0 0 20px;
  font-size: 32px;
  font-weight: 700;
  color: var(--color-default-black);
  text-transform: uppercase;
}

.content__filters,
.content__filters-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.content__filters {
  justify-content: space-between;
  margin-bottom: 30px;
}

.content__filters-button {
  display: block;
  font-size: 18px;
  padding: 5px 15px;
  background-color: #6495ed;
  border: none;
  border-radius: 5px;
  color: var(--color-default-white);
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;
}

.content__filters-button:hover,
.content__filters-button:focus {
  opacity: 0.8;
}

.content__filter input {
  font-size: 18px;
  padding: 5px;
  border: 1px solid var(--color-default-border);
  border-radius: 5px;
  cursor: pointer;
}
</style>
