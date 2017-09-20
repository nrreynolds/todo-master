# React TODO app

![](https://media0.giphy.com/media/YLHwkqayc1j7a/giphy.gif)

Look at Jafar, look at his old school single page todo list. That parchment is on point! But the Sultan is a little more tech savvy than he seems, plus once prince Aboo Boo is in charge, Agrabah will all be on the cloud anyway. But let's ease into our new magc carpet ride of technology by making a todo list in react to figure out the transition.

Tonight you are going to be building another React application (surprise, sunrise). You need to implement a TODO app, which allows the user to create tasks and see a list of the created tasks. Aside from Hello World, the TODO app is one of the most basic ways to begin learning a new framework.

## Setup

There are no files provided, because you will be building out the
 app with `create-react-app`. 
Create a `components` folder inside of `src` to keep all of your components in. 

## Completion

Complete Parts 1 - 3 

## Assignment

#### Part 1 - React Setup

First build a simple React app with a single `App` component. This component should be made up of a `div` with the className of `app`. Inside of the main div, create an h1 with a title, and an h3 prompting the user to create a new todo item.

For right now, just get the basics rendering on the page. 

#### Part 2 - Layout

It is a good idea to first focus on building a static version of your
app. Do not worry about holding state or adding interactivity, but
instead focus on breaking your application into components and
implementing only the `render` method for those components.

Build out an input box and a button to create new todo items (don't worry about the functionality yet)

Hardcode an array of tasks and focus on rendering them on the page with
React. Each task should have some sort of check button, and by default say 'Done?'.

#### Part 3 - Interactivity
![](https://i.giphy.com/yxxpaV6wLggOQ.gif)

Now that you have the components built, implement interactivity.

- Allow the user to create a task by pressing the button after typing in the text for the todo item.
- Allow the user to mark a task as done (possibly through checking a checkbox). 
- Complete tasks should say have the checkbox marked and styling with a line through and the color red.

- Make sure to maintain the list of todo items (and their status) in the state of your component. 
- Make sure to maintain the value of the input box through state. 
- When youcreate a new todo item, make sure to clear the input box

**Things to consider:**
- Think about what state you will need to keep in order to successfully implement the interactions
- Think about what an HTML checkbox looks like, and what data it returns if checked/unchecked

#### Bonus - Moderlarize

- Break different parts of your todo app into seprate components. 
- Consider where responsibilities are divided, and how to pass state around properly

* Give the elements a 'className' attribute for any classes you want to give them for styling (since this is JavaScript, class is a reserved word). E.G:
  <p className="done">This task is complete!</p>
  <p className="not-done">This task needs doing...</p>
* Edit your task-completion function to change classNames appropriately!

- Continue working on your React checklist.

## Sad Bonus - RIP Charlie Murphy

 ![charliemurphy](https://media1.giphy.com/media/H8tuTEG2ikRXy/giphy.gif) 
