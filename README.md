![](https://img.shields.io/badge/Vue.js-3.5.18-green?logo=vue.js&logoColor=white)
![](https://img.shields.io/badge/Vue_Router-4.5.1-red?logo=vue.js&logoColor=white)
![](https://img.shields.io/badge/Pinia-3.0.3-yellow?logo=pinia&logoColor=white)
![](https://img.shields.io/badge/TypeScript-5.8.0-blue?logo=typescript&logoColor=white)
![](https://img.shields.io/badge/Vite-7.0.6-purple?logo=vite&logoColor=white)
![](https://img.shields.io/badge/Axios-1.12.2-5A29E4?logo=axios&logoColor=white)
![](https://img.shields.io/badge/Chart.js-4.5.0-orange?logo=chartdotjs&logoColor=white)
![](https://img.shields.io/badge/Vue_Chart.js-5.3.2-lightgrey?logo=chartdotjs&logoColor=white)
![](https://img.shields.io/badge/ESLint-9.31.0-blue?logo=eslint&logoColor=white)
![](https://img.shields.io/badge/Prettier-3.6.2-pink?logo=prettier&logoColor=white)


# Интерфейс аналитики WB
Интерфейс позволяет просматривать и анализировать данные, полученные из API, по четырём разделам: incomes, orders, sales и stocks. Данные загружаются за указанные даты и отображаются в виде таблиц с фильтрацией и постраничной пагинацией. Для наглядности ключевые показатели визуализируются в интерактивных графиках.

![alt text](image.png)

> ### ⚠️Ограничения API
> - API доступен только по **HTTP**, хостинги работает через **HTTPS** → возникает ошибка **Mixed Content**. 
> - На сервере не открыт **CORS**, прямые запросы невозможны.
>
>Для запуска локально: указать в api.ts → baseURL: '/api' в vite.config.ts настроен proxy который перенаправит запросы на http://109.73.206.144:6969

## Начало работы

1. Установите `node.js` Поддерживаемая версия сборки `20+`
2. Установите зависимости с помощью

```shell
npm ci
```

3. Запустите проект с помощью

```shell
npm run dev
```
