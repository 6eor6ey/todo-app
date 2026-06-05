# TODO App

## Defining the minimum viable product

### Step 1: Requirements Gathering

**The Goal:** A functional Todo web application

**User Stories:**

- As a user I can type in a box and hit enter or click a button to add a new item
- As a user I can mark an item as completed or not completed
- As a user I can delete an item

**Technical Constraints:**

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js and Express.js to build the API
- **Database:** SQLite to save the data permanently

---

### Step 2: System Design & Architecture

**1. The Database Schema (SQLite):**

- `id`: Integer (Primary Key, unique)
- `title`: String (The actual text of the todo)
- `completed`: Boolean (True/False)

**2. The API Routes (Express.js):**

- `GET /api/todos` -> Fetches all todos to load the page
- `POST /api/todos` -> Creates a new todo
- `PUT /api/todos/:id` -> Updates a specific todo (flips it to completed)
- `DELETE /api/todos/:id` -> Removes a specific todo

**3. The User Interface (Frontend):** ---

### Step 3: The Roadmap (Project Management)

**Agile "sprints" or Milestones:**

- [ ] **Milestone 1: The Database Layer** (Set up SQLite, create the table, write a script to insert a fake todo just to prove it works)
- [ ] **Milestone 2: The API Layer** (Set up Express, write the GET, POST, PUT, DELETE routes, and connect them to the database)
- [ ] **Milestone 3: The Frontend UI** (Build the HTML/CSS so it looks like TodoMVC, hardcode some fake data so it looks right)
- [ ] **Milestone 4: The Integration** (Write the fetch() calls in JavaScript to connect the frontend buttons to your Express API)

---

### Step 4: Testing & Validation Strategy
