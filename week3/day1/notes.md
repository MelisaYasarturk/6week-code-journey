# Form Handling in JavaScript

This example explains how to create and handle a basic form using JavaScript.

## Key Concepts:

1. **Form Structure**
   - The form includes inputs for name, email, and password.
   - A submit button is used to trigger the form submission.

2. **Selecting Form and Inputs**
   - `document.getElementById()` is used to select the form and input elements.
   - The `.value` property retrieves the user input from the fields.

3. **Handling Form Submission**
   - An event listener is attached to the form's `submit` event.
   - `event.preventDefault()` is used to stop the default page reload behavior after submitting.

4. **Basic Validation**
   - Checks if any field is empty.
   - Displays an error message if validation fails.
   - Displays a success message if all fields are properly filled.

5. **Resetting the Form**
   - `form.reset()` is used to clear all input fields after successful submission.

## Important Functions:

- **preventDefault()**: Prevents the default form submission behavior (page reload).
- **reset()**: Clears all inputs in the form.

This example provides a beginner-friendly approach to understanding form interaction and client-side validation using vanilla JavaScript.
