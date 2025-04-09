# zynetic-22053208

A RESTful API built with **Node.js**, **Express**, and **MongoDB** to manage books. Includes user authentication via **JWT**, full CRUD operations for books, and extended functionality such as **searching**, **filtering**, **sorting**, and **pagination**.

---

## Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT for Authentication
- Bcrypt for Password Hashing
- Morgan for Logging

![OUTPUTS](outputs/Screenshot%202025-04-09%20215833.png)
![OUTPUTS](outputs/Screenshot%202025-04-09%20224035.png)
![OUTPUTS](outputs/Screenshot%202025-04-09%20215954.png)
![OUTPUTS](outputs/Screenshot%202025-04-09%20220030.png)
![OUTPUTS](outputs/Screenshot%202025-04-09%20222730.png)

## 🔐 Authentication Routes

> All routes are prefixed with `/api/auth`

| Method | Route     | Description         |
| ------ | --------- | ------------------- |
| POST   | `/signup` | Register a new user |
| POST   | `/signin` | Login a user        |

## 📚 Book Routes

> All routes are prefixed with `/api/book`

| Method | Route       | Description                                              |
| ------ | ----------- | -------------------------------------------------------- |
| POST   | `/`         | Create a new book                                        |
| GET    | `/`         | Get all books                                            |
| GET    | `/filter`   | Filter books by author, category, and rating             |
| GET    | `/search`   | Search books by title (partial match)                    |
| GET    | `/sort`     | Sort books by `price` or `rating`                        |
| GET    | `/paginate` | Paginate books using `page` and `limit` query parameters |
| GET    | `/advanced` | Combine search, filter, sort, and pagination             |
| GET    | `/:id`      | Get a book by ID                                         |
| PUT    | `/:id`      | Update a book by ID                                      |
| DELETE | `/:id`      | Delete a book by ID                                      |
