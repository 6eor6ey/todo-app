# Todo App

A full-stack Todo application built to bridge the gap between frontend interfaces and backend relational databases.

## 1. Product Requirements

- **User Stories:**
  - Add: Type in a box and hit enter (or click a button).
  - Toggle: Mark an item as completed or not completed.
  - Delete: Remove an item from the list.
- **Tech Stack:**
  - **Frontend:** HTML, CSS, Vanilla JavaScript.
  - **Backend:** Node.js & Express.js.
  - **Database:** SQLite (Planned).

## 2. Project Roadmap (Agile Milestones)

### Phase 1: Environment & POC (In Progress)

- [x] Initialize Node.js environment & project metadata (`package.json`).
- [x] Configure `.gitignore` for dependency isolation.
- [x] **[POC]** Build API routing via In-Memory array integration to validate `GET`/`POST` methods.
- [x] Establish SQLite database schema (`database.js`) and perform data migration from POC.

### Phase 2: API & Data Integration

- [x] Refactor `server.js` logic for modularity (MVC architecture).
- [x] Swap In-Memory array for active `todos.db` connection.
- [x] Implement remaining CRUD operations (`PUT` for updates, `DELETE` for removal).

### Phase 3: Frontend & UX

- [x] Build static HTML/CSS shell (referencing [TodoMVC](https://todomvc.com/)).
- [x] Integrate `fetch()` API calls to connect the UI to the backend

### Phase 4: Optimization & Deployment

- [x] Implement environment variables for configuration
- [x] Final repository cleanup and documentation for portfolio submission
