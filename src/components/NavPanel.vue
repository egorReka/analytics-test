<script setup lang="ts"></script>

<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__item">
        <RouterLink class="nav__link" to="/" exact-active-class="active">Orders</RouterLink>
      </li>
      <li class="nav__item">
        <RouterLink class="nav__link" to="/incomes" exact-active-class="active">Incomes</RouterLink>
      </li>
      <li class="nav__item">
        <RouterLink class="nav__link" to="/sales" exact-active-class="active">Sales</RouterLink>
      </li>
      <li class="nav__item">
        <RouterLink class="nav__link" to="/stocks" exact-active-class="active">Stocks</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scope>
.nav__list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.nav__item {
  display: grid;
  justify-items: flex-start;
}

.nav__link {
  display: block;
  padding: 10px 5px;
  margin-left: -5px;
  font-size: 28px;
  font-weight: 600;
  text-decoration: none;
  color: var(--color-main-text);
  transform-origin: left;
  transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.nav__link:hover,
.nav__link:focus {
  color: var(--color-default-text);
}

.nav__link.active {
  color: var(--color-default-text);
  transform: scale(1.2);
}
</style>
