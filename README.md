# Ecommerce-Follow-Along

## Project Overview

*Ecommerce-Follow-Along* is a hands-on project designed to guide developers through building an ecommerce platform step-by-step. This project helps learners gain practical experience with front-end and back-end technologies commonly used in ecommerce development, such as HTML, CSS, JavaScript, Node.js, Express, and MongoDB.

Whether you're a beginner or intermediate developer, this project will help you understand the key components of building a fully functional ecommerce website, including user authentication, product management, and order processing.

## Features

- *User Authentication*: Register, login, and manage user sessions.
- *Product Listings*: Add, edit, and remove products.
- *Shopping Cart*: Add items to the cart, view cart details, and proceed to checkout.
- *Order Management*: Process orders, update order status, and view order history.
- *Admin Panel*: Admin users can manage users, products, and orders.

## Tech Stack

- *Frontend*: HTML, CSS, JavaScript, React (optional)
- *Backend*: Node.js, Express
- *Database*: MongoDB
- *Authentication*: JWT (JSON Web Tokens) for secure authentication
- *Payment Gateway Integration*: Stripe (optional)

  # *Milestone 1: Laying the foundation*
  * Completed foundation for E-commerce Application
  * Installed necessary dependencies for React , Node.js , and Express.
  * Set up a basic server in **Node.js** using **Express.js**.
  * Configured **environment variable** for secure credentials.

  # *Milestone 2: Structuring the project & UI setup*
  * Separate folders for frontend and backend.
  * A functional Login Page in the frontend.
  * Completed setting for tailwind-css

  # *Milestone3: Backend configuration & database connection*
  * Organized the backend folder structure for scalability.
  * Connected the server to MongoDb using Mongoose.
  * Implemented error-handling middleware for API stability.

  # *Milestone 4: User Management and file handling*
  * Created the *User Model* in Mongoose to define user data structure.
  * Develop the *User Controller* to manage user authentication (signup,login).
  * Implementing *Multer for file handling*,allowing user profile and product image uploads.
  
  # *Milestone 5: User registration and file handling*
  * Created the **Sign up page* in React and added code for signup backend also.
  * Added the **Sign up page* validation in (signup, login).

  # *Milestone 6: Password Hashing By Using Bcryptjs*
  * Added the **password encryption* in backend signup page.
  * Added comparision for checking password is correct or not in login backend.

  # *Milestone 7:Password decrypt by using bcryptjs*
  * Added the **Password authentication* in backend login page.
  * Here we are first getting the hashed password from db searchrd by email and then comparing the input body password with hashed password by compare method in bcryptjs.

  # *Milestone 8:Product page in frontend*
  * Added the **Product page* in Frontend as a Homepage.

  # *Milestone 9:Created form for product upload*
  * Created the **AddProducts* page in frontend.
  * Add form validation in AddProducts page.

  # *Milestone 10:Created schema product upload*
  * Created **ProductModel* in backend .
  * Created the **productRouter* page in Backend.
  * Handeled file uploads by multer inside middleware multer.
  
  # *Milestone 11:Created home page for product*
  * Created **Home page* for dynamic products presentation.
  * added the **backend* part for handelling products(created endpoint to get products).

  # *Milestone 12:Showing product according to the user*
  * Created **Product page* for dynamic product according to the user mail.
  * Created backend for specific user products.

  # *Milestone 13:Created Product Update*
  * Created **Product Update Endpoint** for Updating products.
  * Created form for updating data in frontend and created autofill function.

  # *Milestone 14:Created Product Delete*
  * Created **Product Delete Endpoint** for Updating products.
  * Created form for Deleting product in frontend.

  # *Milestone 15: Created NavBar*
  * Created **Navigation Bar** for Navigating between pages.

  # *Milestone 16: Created ProductDetails Page*
  * Created **Product Details** for showing full product details in details page.
  * Added Add to cart button with quantity selection.

  # *Milestone 17: CRUD for cart*
  * created endpoints in backend ***CURD*** for handling cart.
  * Handeled quality for product in cart.

  # *Milestone 18: Frontend for cart page*
  * Created cart page in frontend.
  * handled cart operations from frontend. 

  # *Milestone 19: Backend endpoint for cart item quantity*
  * created put request for updating quantity for cart item.

  # *Milestone 20:Backend endpoint for UserDetails*
  * created endpoint for userDetails in backend.
  * created User.jsx for userDetails in frontend.

  # *Milestone 21: Created frontend for Address*
  * Created route for add Address Page in Frontend.
  * Create form for adding address.
  * stored address using useState Hook.

  # *Milestone 22: Created Backend for Address and attached with frontend*
  * Created backend endpoint for handeling address.
  * Added backend endpoint with frontend.

  # *Milestone 23: worked on address in frontend and backend*
  * Created placeorder button in cart page and added navigation to select address 
  * Created select address page and provided option to select one address.
  * Created backend endpoint to sent all address to user.

  # *Milestone 24: worked on address in frontend and backend*
  * Displayed all of products in cart.
  * Displayed All address in address selection page.
  * Displayed total price in cart.
  * Added place order button at the bottom.

  # *Milestone 25: worked on order backend and email service*
  * Created endpoint for order.
  * Implemented mail service from nodemailer.
  * Handled address for the delivery.

  # *Milestone 26: worked on order backend and email service*
  * Implemented mail with nodemailer.
  * Sending order details to user via mail.

  # *Milestone 27: worked on frontend for my order page*
  * Created get request to get request my order.

  # *Milestone 28: Cancel order payment*
  * Added cancle order functionality.
  * Created endpoint for payment id.

  # *Milestone 29: Payment*
  * Integrated dummy payment.

  # *Milestone 30: Payment*
  * Worked on payment page.

  # *Milestone 31: Redux Implementation*
  * Implemented Redux in frontend.
  * Used redux in user details page.

  # *Milestone 32: Redux Implementation*
  * Implemented Redux in frontend.

  # *Milestone 33: setting up token in cookies*
  * Implemented cookies auth by using cookie-parser npm package.
  * added cookie by login page.