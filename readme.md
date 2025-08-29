## Question 1: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

> First of all, the `getElementById` method is typically used to retrieve a specific, unique element by its ID from the HTML.
> On the other hand, `getElementsByClassName` is used for retrieving elements with the same class from the HTML.
>
> The `querySelector` is also used for getting an element by its ID or class. But the fun fact is, it only **grabs** the **first** matching ID or class from the HTML. Its use case is like a CSS selector, for example: `querySelector('.class')` or `querySelector('#id')`.
>
> The `querySelectorAll` is used for getting all elements with the same ID or Class from the HTML. Its use case is similar to `querySelector`.

---

## Question 2: How do you create and insert a new element into the DOM?

> First of all, we need to create a variable to store the new element in. Then, we use `document.createElement('tagName')` to create the new element. After that, we select the parent element where we want to insert this new element. Finally, we use `appendChild()` (or `append()`) to insert the new element into the parent element.

---

## Question 3: What is Event Bubbling and how does it work?

> Event bubbling is when an event travels from the target element up to its parent. This means if an event occurs on an element, the same event also occurs on its parent, grandparent, and so on, until it reaches the top of the document.

---

## Question 4: What is Event Delegation in JavaScript? Why is it useful?

> Event delegation is a pattern that relies on event bubbling. For example, imagine you have many `<li>` elements inside a `<ul>`. The "stupid" or inefficient method is to add an event listener to every single `<li>`. This is the hard way.
>
> But there is also a "smart" method. First, you grab the parent `<ul>` and add just one event listener to it. Then, whenever an event occurs on any child `<li>`, it bubbles up to the parent. We can then use `e.target` to know exactly which `<li>` the event happened on. This is very useful for improving the website's performance and making the code easier to manage.

---

## Question 5: What is the difference between preventDefault() and stopPropagation() methods?

> The `preventDefault()` method is usually used to stop the default behavior of a web browser. For example, an `<a>` tag is used for linking to a page, and this is the default behavior of the anchor tag. If we want to stop this behavior, we use the `preventDefault()` method.
>
> On the other hand, `stopPropagation()` is used to stop an event from bubbling up from a child element to its parent.