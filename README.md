# Simple Shopping Site Documentation

## Overview

This is a simple shopping site built using Vite, React, and Tailwind CSS. It allows users to view a list of products, add them to the cart, and manage the cart items. The site utilizes context API for state management and provides basic shopping functionalities.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Project Structure](#project-structure)
3. [Components](#components)
    - [Shop](#shop-component)
    - [Product](#product-component)
    - [Cart](#cart-component)
    - [CartItem](#cartitem-component)
4. [Context](#context)
5. [How to Use](#how-to-use)
6. [Dependencies](#dependencies)

## Getting Started

To run the project locally, follow these steps:

1. **Clone the repository:**
   ```
   git clone <https://github.com/arjunshetty1/Shopping-Site>
   ```

2. **Install Dependencies:**
   ```
   cd <SHOPPING>
   npm install
   ```

3. **Run the Development Server:**
   ```
   npm run dev
   ```

The site should now be running on `http://localhost:5173`.

## Project Structure

- **`src`**: Contains the source code of the project.
  - **`assets`**: Stores product images.
  - **`components`**: Contains React components used in the application.
  - **`context`**: Contains the context provider for managing the shopping cart state.
  - **`Products.js`**: Defines the array of products available for sale.
  - **`App.js`**: Main application file.
  
## Components

### Shop Component

The `Shop` component displays a list of products fetched from the `PRODUCTS` array. Users can add products to the cart from this view.

### Product Component

The `Product` component represents an individual product item. It displays the product image, name, price, and an "Add to Cart" button. Users can add the product to the cart or view the quantity in the cart if it's already added.

### Cart Component

The `Cart` component displays the items added to the cart. It iterates through the `PRODUCTS` array and shows only the items with non-zero quantities in the cart.

### CartItem Component

The `CartItem` component represents an individual item in the cart. It displays the product image, name, total price (quantity * price), and buttons to increment or decrement the quantity.

## Context

The application uses the `ShopContext` context provider to manage the shopping cart state. The context provides functions to add items to the cart, remove items from the cart, and the current cart state.

## How to Use

1. **View Products:**
   - Visit the homepage to view the list of available products.

2. **Add to Cart:**
   - Click the "Add to Cart" button on a product to add it to the cart.
   - If the product is already in the cart, the button shows the quantity in the cart.

3. **View Cart:**
   - Navigate to the cart page to view the items added to the cart.
   - Cart displays product images, names, total prices, and buttons to increase or decrease the quantity.

4. **Manage Cart:**
   - Use the "+" button to increase the quantity of an item in the cart.
   - Use the "-" button to decrease the quantity of an item in the cart.
   - Items with quantity 0 are automatically removed from the cart.

## Dependencies

- **Vite**: The build tool used for the project.
- **React**: The JavaScript library used for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework used for styling components.
