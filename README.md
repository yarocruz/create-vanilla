# create-vanilla

**create-vanilla** is a Node CLI for quickly creating a basic af project.

## How to Install
```
npm i @jaycruz/create-vanilla -g
```
You can install the CLI globally. This package was published at [npm](https://www.npmjs.com/package/@jaycruz/create-vanilla) so you should be able to run it without installing with the command:

```
npx create-vanilla folder-name
```


## How to Use
Once you install it on your machine, you should be able to run it on your terminal by typing: **create-vanilla** *folder-name*, with folder-name being any name you want. It will create a folder with three basic af files. Inside you will find an HTML file, a CSS file, and a JavaScript file.

## Basic AF Project Structure
```
+-- folder-name
|   +-- index.html
|   +-- main.css
|   +-- app.js
```
## Customizing
My plan is to keep adding basic af features to it. For example, I want to be able to give it optional arguments so like **--typescript** so it can start a basic af TS project, but if you want to customize what gets written to the files, feel free to clone or fork the project. The **utils** folders have the functions that write the files.