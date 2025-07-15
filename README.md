# Simple Todo App

A simple, interactive to-do list web app built using vanilla JavaScript and Object-Oriented Programming (OOP). This project demonstrates how to structure JavaScript code using classes and modules, implement form validation, and manipulate the DOM dynamically.

## Functionality

The app allows users to:

- View a list of initial hard-coded tasks
- Add new tasks using a popup form
- Mark tasks as completed using checkboxes
- Delete tasks from the list
- Automatically validate form input and disable the submit button if input is invalid
- Generate unique task IDs using UUID

The app uses a template to render each task card dynamically and ensures accessibility by correctly associating form inputs and labels.

## Technology

**Tech stack & tools used:**

- HTML5 for structure
- CSS3 for styling
- JavaScript (ES6+)
  - Classes: `Todo`, `FormValidator`
  - ES6 Modules
  - Template cloning for rendering elements
  - UUID via CDN: `https://jspm.dev/uuid`
- Live Server for local development (required for ES modules)

**Key techniques:**

- DOM manipulation using JavaScript
- Form validation using custom validator class
- Event delegation
- Modular file structure with components and utils
- Use of `<template>` to efficiently render dynamic content

## Deployment

This project is deployed on GitHub Pages:

- [🔗 View the Live App](https://github.com/jenniferfeldt/simple-todo-app)
