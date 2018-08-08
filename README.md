# TodoMVC (REACT)

> A simple Todo List app with the functionality to add tasks, check the completed tasks and remove the tasks.

## Deployed version of the App

- [Website](https://todoreactmvc.netlify.com/)

### reference

- [React Docs](https://reactjs.org/docs/getting-started.html)

## Usage

>git clone or fork repo

>npm install

>npm start / yarn start 

## Implementation

Used **ReactJS** to update the Virtual DOM. Items are stored in the main app component state and are added through the SearchBar child component displayed using another child component called DisplayItems.

The manipulation of list items are done using setState and updated using array slice methods to not mutate the state.

Lists are stored in **local storage** so as to not clear the lists on refresh. Localstorage.removeItem is called when removing the item.

Used conditional styling inside JSX for some of the components.

Used CSS **flexbox** for the styling.

## Credit

Created by [Satwik Mandapati](http://www.wikmeister.com) 
