---
title: Corporate Buzzwords
stack: Mongo, Express, React, Node
slug: corporate-america
date: 2022-09-27T00:00:00+00:00
thumb: ../images/thumbs/corporate-america.png
featuredImg: ../images/featured/corporate-america-banner.png
---

Release Date: September 27, 2022

[**Link: Corporate Buzzwords**](https://corporate-buzzwords.herokuapp.com/)

### Project Description

Overview

Corporate Buzzwords is a web application that showcases catch phrases commonly used in the business world.
The app features two main routes: allPhrases and the root route, with email authentication and JWT authentication for the root route.

Features

The allPhrases route displays all phrases submitted by all users, while the root route only displays the phrases submitted by the currently logged in user.
If logged in, users can view a form to submit their own favorite phrases and edit them in the personal section.

Technology

The app uses a MongoDB database with Mongoose middleware for Object Data Modeling and has an Express.js backend with a React frontend.
The app is deployed on Heroku.

The allPhrases Route

The allPhrases route displays all phrases submitted by all users.
However, users are not able to edit phrases when viewing the allPhrases route.

The root Route

The root route only displays the phrases submitted by the currently logged in user.
The root route is protected by JWT authentication and users can view a form to submit their own favorite phrases and edit them in the personal section.

Email Authentication

Email authentication is implemented for a more immersive experience.
Users can log in with their email address to gain access to the root route and the form to submit and edit their favorite phrases.

### System Requirements

Software: MongoDB, Mongoose, Express, React, Node, JWT
