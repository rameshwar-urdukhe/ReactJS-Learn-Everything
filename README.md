# ⭐ React JS Quick Revision Notes

## ✅ What is React

React is a **JavaScript library** used to build **fast and interactive User Interfaces (UI)**.
It helps developers implement specific UI features using **reusable components**.

---

## ✅ Import and Export in React

Import and Export are ES6 features used to **share code between files**.

* **Export** → Send code out of a file
* **Import** → Bring code into another file

### Types of Export

1. **Default Export**

* Only one default export is allowed per file.

2. **Named Export**

* Multiple named exports can be used in one file.

---

## ✅ Real DOM

* Real DOM is a **tree-like structure of HTML elements** created by the browser.
* Structure example:
  **Grandparent → Parent → Child**

### Problem with Real DOM

* When we update even one element, the browser may **reload or re-render a large part of the page**, which reduces performance.

---

## ✅ Virtual DOM

* Virtual DOM is a **lightweight copy of the Real DOM** maintained by React in memory.
* When an update is required:

  1. React first makes changes in the Virtual DOM.
  2. Then it compares the updated Virtual DOM with the previous version (Diffing).
  3. Finally, React updates **only the changed element in the Real DOM**.

This process improves performance and avoids full page reload.

---

## ✅ JSX (JavaScript XML)

* JSX is a syntax that allows writing **HTML-like code inside JavaScript**.
* It helps developers write **UI structure and JavaScript logic together**.

Example:

```js
const element = <h1>Hello</h1>;
```

---

## ✅ React Folder Structure (Using Vite)

To create a React project using Vite:

```
npm create vite@latest
npm install
npm run dev
```

### Important Folders & Files

**src Folder**

* `App.jsx` → Main Functional Component
* `main.jsx` → Renders App Component
* `assets` → Images, SVG, videos

**public Folder**

* Static files like images, mp3, mp4

**.eslint File**

* Used to define custom coding rules

**.gitignore File**

* Files that should not be uploaded to GitHub

**package.json**

* Records project dependencies, scripts, and technologies used.

---

## ⭐ Key React Concept

React uses **Virtual DOM + Diffing + Reconciliation**
to update only required UI parts and make applications fast.
