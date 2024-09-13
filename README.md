# Tiendamia - React Front-End Store
Tiendamia is a front-end e-commerce project built using React. This project demonstrates basic React concepts such as fetching data from a JSON file with Axios, managing state, routing with React Router, and persisting cart data using localStorage.

## Features
- Main Page: Browse a larger selection of products fetched from a local JSON file.
- Product Detail Page:
  - View detailed product information.
  - Choose color options (if available) and adjust quantity before adding to the cart.
  - Click on product images to enlarge them.
- Cart Page:
  - View and edit products in your cart.
  - Adjust product quantities or remove items from the cart.
  - Click "Buy" to clear the cart and simulate a purchase.
  - Cart data is saved in localStorage to persist between page reloads.
  - React Router: Used to navigate between different pages of the application.
  - Axios for Data Fetching: Products are dynamically fetched from a local JSON file using Axios.
### Installation
To run this project locally, follow these steps:

1. Clone the repository:
`git clone https://github.com/yourusername/tiendamia-react.git`

2. Navigate to the project directory:
`cd tiendamia-react`

3. Install dependencies:
`npm install`

4. Start the development server:
`npm start`

The app will open in your browser at `http://localhost:3000`.

## Usage
### Main Page
- Products are fetched from a local JSON file using Axios and displayed on the main page. Click on a product to view more details.
### Product Details
- View detailed product information, including different color options and images.
- Adjust the quantity of the product and add it to your cart.
### Cart Page
- Review the products added to the cart.
- Change the quantity or remove items from the cart.
- Click "Buy" to clear the cart and simulate the purchase process.
- Cart data is saved in localStorage, so the cart persists between page reloads or browser sessions.
