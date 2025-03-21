# ECommerce-Follow-Along

This is a full-stack eCommerce platform built with the MERN stack (MongoDB, Express.js, React.js, Node.js). It provides features like user authentication, product catalog, shopping cart, and order management.

## Features

- **User Authentication**: Secure sign-up, login, and session management using JWT (JSON Web Tokens).
- **Product Catalog**: Users can browse and search through a list of available products.
- **Shopping Cart**: Users can add products to their cart, modify the quantity, and proceed to checkout.
- **Order Management**: Users can view their order history and order details.
- **Admin Panel**: Admins can manage products, users, and orders.
- **Payment Integration**: Stripe or PayPal integration for secure payments (can be customized as needed).
- **Responsive Design**: The website is mobile-friendly and responsive across different screen sizes.

## Tech Stack

- **Frontend**: React.js, React Router, Redux (for state management)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Token) for secure user authentication
- **Payment Gateway**: Stripe / PayPal (can be swapped out depending on preference)
- **File Storage**: Cloudinary (for storing product images)
- **Others**: Axios (for API requests), bcrypt (for password hashing), dotenv (for environment variables)

## **Project Milestones**

# Milestone-1: **laying the Foundation**

* Initialized the project structure for both frontend and backend.
* Installed necessary dependencies for React , Node.js , and Express.
* Set up a basic server in **Node.js** using **Express.js**.
* Configured **environment variable** for secure credentials.

# Milestone-2: **Structuring the Project & UI Setup**

* **Separated frontend and backend folders** for modular development.
* Created a **functional login page** in the frontend using React.js.
* Installed and configured **Tailwind css** for responsive UI design.


# Milestone-3: **Backend Configuration & Database Connection**

* Organized the **backend folder structure** for scalability.
* Connected the **server to MongoDB** using mongoose.
* implemented **erroe-handling middleware** for API stability.

# Milestone-4 : **User Management & File Handling**

* Created the **user Model** in Mongoose to define user data structure.
* Developed the **User Controller** to manage user authentication (signup, login).
* Implemented **Multer for file handling**, allowing user profile and product image uploads.

# Milestone-5 : **User registration & File Handling**

* Created the **Sign up page** in react and added code for signup backend also.
* Added the **Sign up page** validation in (signup, login).

# Milestone-6 : **Password Hashing By Usoing Bcryptjs**

* Added the **Password encryption** in backend signup page.
* Added comparision for checking password is correct or not in the login backend.

 # Milestone-7 : **Password Decrypt By Using Bcryptjs**

 *Added the **Password authentication** in backend login page.
 *Here we are first getting the hashed password from db serched by email and then comparing the input body password with hashed password by compare method in bcryptjs.

 # Milestone-8 : **Product Page In Frontend**

 *Added the **Product Page** in Frontend as a Homepage.
