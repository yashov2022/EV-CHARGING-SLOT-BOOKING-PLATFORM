# Smart EV Charging Slot Booking Platform

## Overview

Smart EV Charging Slot Booking Platform is a full-stack web application that allows users to discover EV charging stations, view available charging slots, and reserve charging sessions through an intuitive web interface.

The project aims to simplify EV charging station management and eliminate scheduling conflicts by providing real-time slot availability and automated booking workflows.

---

## Features

### Station Management

* View all available EV charging stations
* Display station details including:

  * Station Name
  * Address
  * Total Charging Slots
  * Location Coordinates

### Slot Management

* View available charging slots for a selected station
* Display slot timings
* Show real-time slot availability status

### Booking System

* Reserve charging slots
* Capture user details and vehicle information
* Prevent duplicate bookings
* Automatically update slot availability after successful reservations

### Booking History

* View all previously created bookings
* Track reservation details

---

## Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* HTML5
* CSS3

### Backend

* Spring Boot
* Spring Data JPA
* REST APIs

### Database

* MySQL

### Tools

* IntelliJ IDEA
* VS Code
* Postman
* Git & GitHub

---

## System Architecture

```text
React Frontend
      |
      v
Spring Boot REST APIs
      |
      v
Service Layer
      |
      v
JPA Repository Layer
      |
      v
MySQL Database
```

---

## Database Design

### Stations Table

| Column      | Description              |
| ----------- | ------------------------ |
| id          | Station ID               |
| name        | Station Name             |
| address     | Station Address          |
| latitude    | Latitude Coordinate      |
| longitude   | Longitude Coordinate     |
| total_slots | Number of Charging Slots |

### Slots Table

| Column       | Description        |
| ------------ | ------------------ |
| id           | Slot ID            |
| station_id   | Associated Station |
| start_time   | Slot Start Time    |
| end_time     | Slot End Time      |
| is_available | Slot Availability  |

### Bookings Table

| Column         | Description                 |
| -------------- | --------------------------- |
| id             | Booking ID                  |
| slot_id        | Booked Slot                 |
| user_name      | User Name                   |
| vehicle_number | Vehicle Registration Number |
| booking_time   | Reservation Timestamp       |

---

## REST API Endpoints

### Stations

#### Get All Stations

```http
GET /stations
```

---

### Slots

#### Get Slots By Station

```http
GET /slots/{stationId}
```

Example:

```http
GET /slots/1
```

---

### Bookings

#### Create Booking

```http
POST /book
```

Request Body:

```json
{
  "slotId": 1,
  "userName": "Yash",
  "vehicleNumber": "KA01AB1234"
}
```

---

#### Get Booking History

```http
GET /book/history
```

---

## Frontend Workflow

```text
Stations Page
      |
      v
View Slots
      |
      v
Slots Page
      |
      v
Book Slot
      |
      v
Booking Form
      |
      v
Confirm Booking
      |
      v
Booking Saved
```

---

## Project Structure

### Backend

```text
src/main/java/com/ev/ev_project

├── controller
├── service
├── repository
├── entity
├── DTO
└── EvProjectApplication.java
```

### Frontend

```text
src

├── component
│   └── StationCard.jsx

├── pages
│   ├── StationsPage.jsx
│   ├── SlotsPage.jsx
│   └── BookingsPage.jsx

├── App.jsx
└── App.css
```

---

## Future Enhancements

* Google Maps Integration
* JWT Authentication
* User Login & Registration
* Booking Cancellation
* Admin Dashboard
* Analytics Dashboard
* Nearby Station Discovery
* Real-Time Slot Updates using WebSockets
* Dynamic Pricing based on Demand

---

## Learning Outcomes

* Full-Stack Application Development
* REST API Design
* Spring Boot Architecture
* React Component-Based Development
* State Management using React Hooks
* Database Design and Entity Relationships
* Frontend-Backend Integration
* API Testing using Postman
* JPA/Hibernate ORM Mapping

---

## Author

**Yashovardhan Appakaya**


