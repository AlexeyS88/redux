# Recipe App

## О проекте

Recipe App — это современное веб-приложение для хранения и управления рецептами с возможностью добавления в избранное, реализованное на стеке React, Redux Toolkit и Vite. Проект быстро масштабируется, поддерживает TypeScript, организованное хранение состояния и базируется на best practices современного фронтенда.

---

## Основные возможности

- Просмотр списка рецептов
- Добавление/удаление рецептов
- Фильтрация по убыванию, последние добавленные вверху 
- Пометка рецептов как "избранное"
- Поиск по имени
- Адаптивный UI на React и CSS-модулях
- Работа с асинхронными запросами и кэшированием через Redux Toolkit Query
- Удобное и быстрое развитие благодаря архитектуре и типизации

---

## Технологии

- [React 19](https://react.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [RTK Query](https://redux-toolkit.js.org/rtk-query/overview)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [json-server (для мокового API)](https://github.com/typicode/json-server)
- [ESLint](https://eslint.org/)

---

## Структура проекта

| Папка/Файл | Описание |
|------------|----------|
| `src/` | Исходный код приложения |
| `src/components/` | React компоненты, разделенные по функциональности |
| `src/hooks/` | Кастомные React хуки |
| `src/store/` | Redux хранилище с использованием Redux Toolkit |
| `src/store/api/` | RTK Query для работы с API |
| `src/store/favorites/` | Слайс для управления избранными рецептами |
| `src/store/user/` | Слайс для управления данными пользователя |
| `public/` | Статические файлы |
| `db.json` | Файл базы данных для json-server |
| `.env` | Конфигурация переменных окружения |
| `vite.config.ts` | Конфигурация сборщика Vite |
| `eslint.config.js` | Настройки линтера |

### Основная инфраструктура
- `package.json` - зависимости и скрипты
- `vite.config.ts` - конфигурация сборщика
- `.env` - переменные окружения
- `eslint.config.js` - правила линтера

### Исходный код (src/)
- **Точки входа:**
    - `main.tsx` - инициализация приложения
    - `App.tsx` - корневой компонент
    - `index.css` - глобальные стили

- **Интерфейс (components/):**
    - `header/` - компоненты верхней панели
    - `recipeItem/` - представление рецепта
    - `create-recipe/` - формы создания/редактирования
    - `user/` - компоненты профиля пользователя

- **Логика и состояние:**
    - `hooks/` - React хуки
    - `store/` - Redux хранилище
        - `api/` - интеграция с бэкендом через RTK Query
        - `favorites/` - управление избранными рецептами
        - `user/` - управление пользовательскими данными
        - `store.ts` - конфигурация Redux

### Мок-данные и статика
- `db.json` - база данных для локального сервера
- `public/` - статические ресурсы


### Модули приложения

**📋 Модуль рецептов**
- Компоненты: `src/components/recipeItem/`
- Создание: `src/components/create-recipe/`
- API: `src/store/api/recipes.api.ts`
- Избранное: `src/store/favorites/`

**👤 Модуль пользователя**
- Интерфейс: `src/components/user/`
- Состояние: `src/store/user/`
- API: `src/store/api/user.api.ts`

**🔝 Общие элементы**
- Шапка: `src/components/header/`
- Хуки: `src/hooks/`
- Точка входа: `src/main.tsx` и `src/App.tsx`

**⚙️ Конфигурация**
- Переменные окружения: `.env`
- Зависимости: `package.json`
- Сервер разработки: `db.json` (json-server)
---

## Быстрый старт

1. **Клонировать репозиторий**
   ```bash
   git clone <REPO_URL>
   cd <название_проекта>
   ```

2. **Установить зависимости**
   ```bash
   npm install
   ```

3. **Запустить mock-сервер**
   ```bash
   npm run server
   ```
   `json-server` будет доступен по адресу [http://localhost:3000](http://localhost:3000).

4. **Запустить приложение в режиме разработки**
   ```bash
   npm run dev
   ```
   Vite dev-сервер откроется по адресу [http://localhost:5173](http://localhost:5173).

---

## Дополнительные скрипты

- `npm run build` — сборка проекта для production
- `npm run preview` — предпросмотр production-сборки
- `npm run lint` — линтинг кода
- ` json-server --watch db.json --port {номер}` — запуск json-server (локального API)

---

## Советы по масштабированию

- Добавляйте новые фичи через отдельные слайсы, хуки и папки для компонентов.
- Храните типы в отдельной директории `/types` для переиспользования.
- Используйте RTK Query для интеграции с любыми внешними API.
- Соблюдайте единые стандарты именования и типизации.

---

## Контакты

Проект создан для обучения и демонстрации.  
По вопросам и предложениям — **📁 GitHub:**
[AlexeyS88](https://github.com/AlexeyS88)