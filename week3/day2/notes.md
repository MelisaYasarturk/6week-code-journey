# Corona Work-From-Home Survey App

## Description
This is a simple interactive web survey to gauge employee preferences about returning to office work after remote working. It uses JavaScript to evaluate answers, calculate a score, and dynamically display the result with an animated percentage count.

## Features
- Four-question form about remote vs. office work preferences.
- Uses JavaScript to compare user answers with predefined correct ones.
- Displays a score out of 100 based on matching answers (each correct answer = 25%).
- Animated result display counting up to the calculated percentage.
- Styled using Bootstrap 4.

## Technologies Used
- HTML5
- CSS3 (via Bootstrap 4.6 CDN)
- Vanilla JavaScript

## File Structure
- `index.html`: Contains the survey form and result display.
- `can.js`: Contains JavaScript logic for form handling and animated score rendering.

## How It Works
1. User selects answers and submits the form.
2. JavaScript prevents default form submission and compares answers to the `correctAnswers` array.
3. For each match, 25 points are added to the score.
4. A result section previously hidden with `d-none` class is revealed.
5. The score is animated from 0% to the final score using `setInterval`.

## Notes
- All correct answers in this version are "E" (short for "Evet" meaning "Yes").
- The survey simulates a simple user feedback mechanism and could be extended for real use cases.