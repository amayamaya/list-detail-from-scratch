## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"** 
1) **Look at the drawing and name the HTML elements you'll need to realize your vision**
<h1> title of page
<h2> to name gem
<img> shows the correct gem 
<p> gives us a preview of gem data
<div> for 'display case'
<div> for 'gem holders'

1) **Look at the drawing and imagine using the app. What _state_ do you need to track?** 
no state involved
1) **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")** 
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
get data to loop through the arrays in app.js
render appropriate id
display appropriate id
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?** button click to display the right info on the dynamic page
1) **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
link to a tags
console log when you start naming things(params)
console log to be sure clicks are grabbing all the requested data
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**
- get data model together 
- functions first - findbyid renderGems 



Additional considerations:
- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated? 
    **looks like all the magic happens in JS**
- Consider your data model. 
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need? 
      **gems exclusively**
  - What are the key/value pairs? 
      **name: , metaphysical-properties:, hardness:,  (maybe more?)**
  - What arrays might you need? 
      **array of objects holding those key value pairs**
  - What needs to live in a persistence layer?
      **unsure tomorrow's another day**
- Is there some state we need to initialize?
      **none**
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)
    **nothing else**