# BookNest

## Project Description

BookNest is a simple full-stack book management application built using **Next.js (App Router)** and **Express.js**.  
Users can view books publicly, see book details, and add new books after login.

---

## Live Site

Live URL: 

---

## GitHub Repository

GitHub Repo: https://github.com/sucharita4867/BookNest

---

## Login Credentials (Mock)

Email: admin@example.com  
Password: 123456@A

---

## Technologies Used

- Next.js 15/16 (App Router)
- React
- Tailwind CSS
- Express.js
- MongoDB
- SweetAlert2

---

## Features Implemented

- Public landing page with 7 sections
- Mock authentication using hardcoded credentials
- Cookie-based authentication
- Public book list page
- Public book details page
- Protected add book page
- Express API for fetching and adding books
- SweetAlert notification on successful book creation

---

## Routes

- `/` → Landing Page (Public)
- `/login` → Login Page (Public)
- `/book` → Book List Page (Public)
- `/book/[id]` → Book Details Page (Public)
- `/addBook` → Add Book Page (Protected)

---

## Setup Instructions

1. Clone the repository
2. Install dependencies using `npm install`
3. Add MongoDB credentials in `.env`
4. Run backend server
5. Run frontend using `npm run dev`

---

## Notes

- Google login was optional and not implemented
- Mock authentication fully meets the task requirements
