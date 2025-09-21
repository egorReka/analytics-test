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

        <RouterView />
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
  min-height: 600px;
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
</style>
