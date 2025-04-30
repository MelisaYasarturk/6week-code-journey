
# Project: Basic Math Quiz (HTML, CSS - Bootstrap, JavaScript)

## Overview
This is a simple web-based math quiz consisting of 4 multiple-choice questions. The user selects their answers and submits the form to get a score based on correct answers.

---

## Technologies Used
- HTML5
- Bootstrap 5 (for layout and styling)
- JavaScript (vanilla)

---

## Features
- Responsive design with Bootstrap
- Four math-related questions (addition, multiplication, division, exponentiation)
- Real-time evaluation without page refresh
- Percentage score displayed on submission
- Success message displayed only if all answers are correct (100%)
- Submit button disabled after full score is achieved

---

## How it Works
1. User selects one answer for each question.
2. On form submission:
   - Default page reload is prevented with `e.preventDefault()`.
   - The selected answers are compared against the correct ones.
   - Score is calculated (each correct answer is worth 25%).
3. If the score is 100%, a congratulatory message is shown and the submit button is disabled.
4. The score is always shown after submission.

---

## Files
- `index.html`: Contains the structure and layout of the quiz.
- `script.js`: Contains logic for scoring and displaying results.
- Bootstrap is used via CDN for styling and responsiveness.

---

## Notes
- The quiz logic is simple and not dynamically generated; all questions and answers are hard-coded.
- All radio buttons have default checked values for easier testing.
- No backend or persistent storage is used — this is a front-end only project.

