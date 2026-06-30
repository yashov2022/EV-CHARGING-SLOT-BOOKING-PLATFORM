# ⚡ EV Charging Slot Booking Platform

A full-stack **EV Charging Slot Booking Platform** that enables users to discover charging stations, reserve charging slots, view station locations on an interactive map, and manage bookings. The platform also includes an **Admin Dashboard** for monitoring charging station statistics and slot utilization.

---

## 🚀 Live Demo

 https://evfrontend.netlify.app

---

## 📖 Overview

This project provides a complete booking system for EV charging stations with secure authentication and role-based access control.

### User Features

* Secure user registration and login using JWT authentication
* Browse available EV charging stations
* View charging station locations on an interactive map
* Check real-time slot availability
* Book charging slots
* View booking history
* Responsive and modern UI

### Admin Features

* Secure admin login
* Dashboard displaying:

  * Total Charging Stations
  * Total Charging Slots
  * Available Slots
  * Booked Slots
* Role-based access control

---

# 🛠 Tech Stack

### Frontend

* React.js
* React Router
* Axios
* React Leaflet
* Leaflet Maps
* CSS3

### Backend

* Java 17
* Spring Boot
* Spring Security
* JWT Authentication
* Spring Data JPA
* Hibernate

### Database

* MySQL

### Deployment

* Frontend: Netlify
* Backend: Railway
* Database: Railway MySQL

---

# ✨ Features

## Authentication

* User Registration
* User Login
* JWT Token Authentication
* Password Encryption using BCrypt
* Role-based Authorization

---

## Charging Stations

* Display all charging stations
* View station details
* Interactive location map
* Dynamic station loading from database

---

## Slot Booking

* View available charging slots
* Book charging slots
* Prevent booking of occupied slots
* Dynamic slot availability updates

---

## Booking Management

* Booking history
* User-specific bookings
* Booking status tracking

---

## Admin Dashboard

The admin dashboard provides a quick overview of the system including:

* Number of charging stations
* Total charging slots
* Available slots
* Booked slots

Accessible only by users with the **ADMIN** role.

---

# 📂 Project Structure

```
Frontend
│
├── React
├── Components
├── Pages
├── Services
└── CSS

Backend
│
├── Controller
├── Service
├── Repository
├── Entity
├── DTO
├── Config
├── Filter
└── Security
```

---

# 🔐 Authentication Flow

1. User logs in.
2. Spring Boot validates credentials.
3. JWT token is generated.
4. Token is stored in Local Storage.
5. Axios automatically attaches the token to every authenticated request.
6. Spring Security validates the token before granting access.

---

# 🌍 Interactive Map

The application integrates **React Leaflet** with **OpenStreetMap** to display charging station locations dynamically.

Features include:

* Dynamic station markers
* Popup with station details
* Direct navigation to slot booking

---

# 📊 Database

The application uses a relational MySQL database with entities including:

* Users
* Stations
* Slots
* Bookings

Entity relationships are managed using Spring Data JPA.

---

# 🔒 Security

* JWT Authentication
* BCrypt Password Encryption
* Spring Security
* Protected Routes
* Role-Based Authorization
* CORS Configuration

---

# ⚙️ Installation

## Clone Repository

```bash
git clone <repository-url>
```

---

## Backend

```bash
cd backend
mvn clean install
mvn spring-boot:run
```

---

## Frontend

```bash
cd frontend
npm install
npm run dev
```

---

# Future Improvements

* Email notifications after booking
* QR Code generation for bookings
* Payment Gateway Integration
* Real-time slot updates using WebSockets
* Charging station search and filters
* User profile management
* Booking cancellation with refund workflow

---

# Learning Outcomes

This project strengthened practical experience in:

* Full Stack Development
* REST API Design
* Spring Boot
* Spring Security
* JWT Authentication
* Database Design
* React Development
* API Integration
* Deployment using Railway and Netlify

---

# Author

**Yashovardhan Appakaya**

* GitHub: https://github.com/yashov2022
* LinkedIn: https://www.linkedin.com/in/yashovardhan-appakaya-bb3973274/
