# Booking System Backend

A simple booking system backend built with Node.js, Express, and MongoDB.

## Features

*   User Authentication (Registration, Login)
*   Appointment/Reservation creation, retrieval, update, and deletion.
*   Middleware for authentication and authorization.

## Technologies Used

*   Node.js
*   Express.js
*   MongoDB
*   Mongoose
*   JSON Web Tokens (JWT)
*   Bcrypt

## Installation

1.  Clone the repository.
2.  Install dependencies: `npm install`
3.  Configure environment variables (see `.env.example`).
4.  Start the server: `npm start`

## Environment Variables

Create a `.env` file in the root directory with the following variables:


PORT=3000
MONGODB_URI=mongodb://localhost:27017/booking_system
JWT_SECRET=your-secret-key


## API Endpoints

*   `POST /auth/register`: Register a new user.
*   `POST /auth/login`: Login a user.
*   `POST /appointments`: Create a new appointment (requires authentication).
*   `GET /appointments`: Get all appointments (requires authentication).
*   `GET /appointments/:id`: Get a specific appointment (requires authentication).
*   `PUT /appointments/:id`: Update an appointment (requires authentication).
*   `DELETE /appointments/:id`: Delete an appointment (requires authentication).

## Folder Structure


booking-system-backend/
├── server.js
├── routes/
│   ├── authRoutes.js
│   └── appointmentRoutes.js
├── controllers/
│   ├── authController.js
│   └── appointmentController.js
├── models/
│   ├── User.js
│   └── Appointment.js
├── middlewares/
│   └── authMiddleware.js
├── utils/
│   └── jwtUtils.js
├── .env.example
└── README.md
