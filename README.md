# zynetic-22053208

A RESTful API built with **Node.js**, **Express**, and **MongoDB** to manage books. Features include user authentication (JWT), book CRUD operations, and support for search, filter, sort, and pagination.

---

## Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Bcrypt for Password Hashing
- Morgan for Logging

---

## Output Screenshots

Images stored in the `/outputs` folder:

![OUTPUT](outputs/Screenshot%202025-04-09%20215833.png)  
![OUTPUT](outputs/Screenshot%202025-04-09%20224035.png)  
![OUTPUT](outputs/Screenshot%202025-04-09%20215954.png)  
![OUTPUT](outputs/Screenshot%202025-04-09%20220030.png)  
![OUTPUT](outputs/Screenshot%202025-04-09%20222730.png)  
![OUTPUT](outputs/Screenshot%202025-04-09%20220758.png)  
![OUTPUT](outputs/Screenshot%202025-04-09%20222939.png)  
![OUTPUT](outputs/Screenshot%202025-04-09%20222649.png)  
![OUTPUT](outputs/Screenshot%202025-04-09%20223224.png)  
![OUTPUT](outputs/Screenshot%202025-04-09%20223136.png)  
![OUTPUT](outputs/Screenshot%202025-04-09%20223911.png)

---

## Authentication Routes

Base URL: `/api/auth`

| Method | Route     | Description         |
| ------ | --------- | ------------------- |
| POST   | `/signup` | Register a new user |
| POST   | `/signin` | Login a user        |

---

## Book Routes

Base URL: `/api/book`

| Method | Route       | Description                                  |
| ------ | ----------- | -------------------------------------------- |
| POST   | `/`         | Create a new book                            |
| GET    | `/`         | Get all books                                |
| GET    | `/filter`   | Filter by author, category, rating           |
| GET    | `/search`   | Search books by title (partial match)        |
| GET    | `/sort`     | Sort by `price` or `rating`                  |
| GET    | `/paginate` | Paginate using `page` and `limit`            |
| GET    | `/advanced` | Combine filter, search, sort, and pagination |
| GET    | `/:id`      | Get a single book by ID                      |
| PUT    | `/:id`      | Update a book by ID                          |
| DELETE | `/:id`      | Delete a book by ID                          |

---

## Start Server

```bash
npm run dev
```
