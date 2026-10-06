# Restaurant Full Stack Project

A full-stack restaurant management application built using React, Node.js, Express.js, and MySQL.

## Project Structure

```text
Restaurant/
├── client/
├── server/
└── restaurant.sql
```

## Requirements

- Node.js
- MySQL
- npm

## 1. Set Up the Database

Open MySQL and run/import:

```text
restaurant.sql
```

This creates the `restaurant` database and the required `menu` table with the existing menu data.

## 2. Set Up the Server

Open Command Prompt inside the `server` folder:

```cmd
npm install
```

Open `server/index.js` and replace:

```text
YOUR_MYSQL_PASSWORD
```

with your own MySQL root password.

Then start the server:

```cmd
node index.js
```

The server runs at:

```text
http://localhost:5000
```

## 3. Set Up the React Client

Open another Command Prompt inside the `client` folder:

```cmd
npm install
```

Then run:

```cmd
npm start
```

The React application will open at:

```text
http://localhost:3000
```

## Features

- Add menu items
- View menu items
- Update menu items
- Delete menu items
- Store menu data in MySQL
- Display menu images
- React frontend
- Node.js/Express backend

## Important

Do not upload your actual MySQL password to GitHub.

Use your own MySQL password in `server/index.js`.
