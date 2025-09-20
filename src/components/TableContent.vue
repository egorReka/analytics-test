<script setup lang="ts"></script>

<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Дата</th>
        <th scope="col">Артикул</th>
        <th scope="col">Регион</th>
        <th scope="col">Сумма</th>
        <th scope="col">Скидка %</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>12.09.2025</td>
        <td>982u489274823</td>
        <td>Мосвка</td>
        <td>300</td>
        <td>10</td>
      </tr>
      <tr>
        <td>12.09.2025</td>
        <td>982u489274823</td>
        <td>Сочи</td>
        <td>200</td>
        <td>20</td>
      </tr>
      <tr>
        <td>12.09.2025</td>
        <td>982u489274823</td>
        <td>Омск</td>
        <td>200</td>
        <td>1</td>
      </tr>
      <tr>
        <td>12.09.2025</td>
        <td>982u489274823</td>
        <td>Владимир</td>
        <td>500</td>
        <td>3</td>
      </tr>
    </tbody>
  </table>

</template>

<style scoped>
.table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  text-align: center;
  border-radius: 8px;
  overflow: hidden;
  outline: 1px solid var(--color-default-border);
}

.table thead {
  background-color: var(--color-default-bg);
}

.table th {
  font-size: 16px;
  font-weight: 600;
  border-bottom: 2px solid var(--color-default-border);
}

.table td {
  padding: 12px 16px;
  border-bottom: 1px solid var(--color-default-border);
}

.table tbody tr:hover {
  background: var(--color-default-bg);
}

.table tbody tr:last-child td {
  border-bottom: none;
}
</style>
