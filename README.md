# Express and SQLite Project Setup

This project utilizes Express.js as a web server framework and SQLite for the database. Follow these instructions to initialize the database, insert initial data (if necessary), and start the project.

## Prerequisites

Before you begin, ensure that Node.js is installed on your system. You can verify the installation by typing `node -v` in your terminal to display the version.

## Database Initialization

To initialize the database for the first time, run the `initDb.js` script. This script creates the necessary tables in your SQLite database.

Navigate to your project's root directory in the terminal and execute the following command:

```bash
node ./database/initDb.js
````

## Database Insertion

Before inserting data, ensure that there are no existing data in the database to avoid duplicates. If no data is present, execute the insertData.js script to populate your database with initial data.

First navigate to the scripts folder:

```bash
cd public/scripts/
````

Then run the script like so:

```bash
node insertData.js
````

## Start Application

To start the project you can use the following command. This command starts your server. By default, your application will be accessible at http://localhost:3000/.

```bash
npm start
````