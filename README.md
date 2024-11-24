# Balisong Name Maker App

This is a simple web application that allows users to **create and manage balisongs** (butterfly knives). Users can add balisong models and their associated companies, view all balisongs, like or increment the like count, and delete entries from the database.

The app uses **Node.js**, **Express**, **MongoDB**, and **EJS** for rendering the pages.

**Live Demo**: [Balisong Name Maker App](https://balisong-name-maker-app-production.up.railway.app/)

## Features

- **Add New Balisong**: Users can enter a **model name** and **company name** to create a new balisong entry.
- **View All Balisongs**: Displays a list of all balisongs stored in the database, including the model name, company, and like count.
- **Like a Balisong**: Users can increment the like count for a balisong by clicking the **Like** button.
- **Delete a Balisong**: Users can delete a balisong entry from the database.
- **Real-Time Updates**: Like counts are updated in real time without needing to reload the page.
- **Responsive Design**: The application is designed to work seamlessly on both desktop and mobile devices.
- **MongoDB Database**: All data is stored in MongoDB, and MongoDB Atlas is used for cloud storage.

## Tech Stack

- **Frontend**: EJS (Embedded JavaScript templating)
- **Backend**: Node.js with Express
- **Database**: MongoDB (hosted on MongoDB Atlas)
- **CSS**: Custom CSS (you can extend this with frameworks like Bootstrap or Tailwind if desired)
- **Deployment**: Railway (for cloud deployment)

## Screenshots

<img width="1342" alt="image" src="https://github.com/user-attachments/assets/b6e98d6c-06d5-4b43-aea4-d4b3ed866baf">


---

## Installation

To run this app locally, follow the instructions below:

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [MongoDB Atlas account](https://www.mongodb.com/cloud/atlas) for setting up a cloud database.

### 1. Clone the Repository

Clone the repository to your local machine using the following command:

```bash
git clone https://github.com/your-username/balisong-name-maker-app.git
