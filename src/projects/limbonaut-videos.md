---
title: Limbo Videos
stack: Mongo, Express, React, Node, AWS S3
slug: limbonaut-videos
date: 2022-09-24T00:00:00+00:00
thumb: ../images/thumbs/limbonaut-videos.png
featuredImg: ../images/featured/limbonaut-videos-banner.png
---

Release Date: September 24, 2022

[**Link: Limbo Videos**](https://limbo-videos.herokuapp.com/)

### Project Description

Overview

Limbo Videos is a web application that displays a list of video game reviews and allows registered users to submit their own reviews, favorite others' reviews, and comment on postings.

Users

The app is built with the MERN stack (MongoDB, Express, React, and Node.js) and uses email authentication for user registration. While the general public can view the video game reviews, only logged-in users can interact with the reviews by commenting, favoriting, ranking, and deleting comments. Each user also has a profile page where they can choose an avatar and display name.

Video Reviews

The main page of the app features thumbnail images and links to the details page for each review, and the details page includes the video, a description, and a section for comments. Videos can be played directly in the browser.

Data Storage

Limbo Videos uses MongoDB to store data about the reviews, comments, and users, and also integrates with AWS S3 to store the actual video files. The app includes a search field that allows users to easily look up titles, which is implemented using MongoDB. The app is hosted on Heroku.

### System Requirements

Software: Node, Express, React, MongoDB, AWS S3
