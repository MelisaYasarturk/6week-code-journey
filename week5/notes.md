# Image Slider Project - Notes

## 📌 Overview
This project is a responsive image slider built with **HTML**, **CSS**, and **JavaScript**. It allows users to navigate through a series of images manually using navigation arrows, and it also automatically advances to the next image every 4 seconds.

---

## ⚙️ Features
- ✅ Manual navigation with left/right arrow icons
- ✅ Auto-slide every 4 seconds with `setTimeout`
- ✅ Smooth sliding animation via `transform: translateX`
- ✅ Looping navigation: goes back to first image after last, and vice versa
- ✅ Styled with modern shadows and rounded corners
- ✅ Responsive centering using Flexbox

---

## 🧱 Technologies Used
- **HTML5** for structure
- **CSS3** for styling and layout
- **JavaScript (Vanilla)** for slider logic
- **Font Awesome** for arrow icons
- **Picsum Photos** for placeholder images

---

## 📁 File Structure
- `index.html`: Markup with slider container and image elements
- `style.css`: Custom styling for layout, responsiveness, and interaction
- `script.js`: Contains the logic for navigation and automatic transitions

---

## 🚀 How It Works
1. All images are placed side-by-side in a flex container (`.imageContainer`).
2. JavaScript uses `translateX` to slide the container left/right based on the current image index.
3. Arrow buttons update the index and re-render the slider.
4. A timer resets with every manual interaction and automatically advances the slider.

---

## 🛠️ Possible Improvements
- Add touch/swipe support for mobile devices
- Add pagination dots for quick navigation
- Add fade animation between images
- Use dynamic images from an API or user upload

---

## 🧪 Tested On
- Chrome
- Firefox
- Edge

---

## 📅 Author
- Created as a mini frontend UI project
