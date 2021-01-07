# calculator-jan-2021

## Outcome

-Addition
GOAL: Display the sum of the two numbers to the user
HTML SETUP:

- We should see 2 user input boxes, + sign, a button (there is also a secret)
  -Val: look a screen

  - We should be able to 'get' the user input

    1. What: Grab the dom elements (the input box and button)
       HOW: make var for each dom element, using 'document.getElementById('whatever-id')

    - Why do we need the input box? Because thats where th user input lives
    - Why do we need the button? Triggers the event

    2)Add event listener to the button
    -validation: console.log 'hello world' on click

    - Validation: we can log out the user input (the number they type) on click

    3. Get access to what the user typed in
       -How: get the '.value' property of the input element --in the 'cool zone' of the event handler log out the user input

  4. Use the user input to calculate the results
     -Validation: log out the result to the console (in the cool zone)

  5. Display the result to the user
     -Validation: we should see it on the screen
