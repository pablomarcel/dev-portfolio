---
title: eCommerce App
stack: React, Firestore, Cloud Functions, Stripe
slug: online-shop
date: 2022-06-12T00:00:00+00:00
thumb: ../images/thumbs/online-shop.png
featuredImg: ../images/featured/online-shop-banner.png
---

Release Date: June 12, 2022

[**Link: eCommerce App**](https://yada-yada-shop.web.app/)

### Project Description

Introduction

The eCommerce App allows users to browse an assortment of products organized by categories, add them to their cart, and purchase them with a test credit card.
The App is built with React and uses Firebase [**Firestore**](https://firebase.google.com/docs/firestore/) as the database and a Firebase Cloud Function to handle credit card processing with [**Stripe**](https://stripe.com/).

Product List

The App displays a list of products organized by categories, with each product having its own details page.
The user can add items to the cart from the product details page.

Shopping Cart

The App has an option to display the shopping cart, which contains a list of the items the user has added to the cart.
The user can remove items from the cart, and adjust the quantity of each item.

Checkout

The App has an option to checkout, which allows the user to enter their payment information and make a purchase with a test credit card provided by Stripe.
The App will display a success message after the purchase is complete.

Stripe Console

After the user purchases an item, the Stripe Console shows a record of the new purchase.
The Stripe Console also shows the user's payment history.

Deployment

The App is deployed in Firebase, allowing users to access the App from any device.

### System Requirements

Software: React, Javascript, Firestore, [**Firebase Cloud Functions**](https://firebase.google.com/docs/functions/), Stripe Payments
