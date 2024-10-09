
#Color Transition Rectangle

This project creates an interactive rectangle where the color changes based on the user's horizontal position within the rectangle. As the cursor moves to the left side, the rectangle turns dark red; as it approaches the center, the color fades to black; and as it moves to the right, the rectangle transitions to dark blue.

Features

Dynamic Color Change: The color transitions smoothly between red, black, and blue based on the cursor's X-axis position within the rectangle.
Responsive Design: The rectangle dynamically adjusts its color regardless of screen size, creating an interactive visual experience.


How It Works

Left Side: As the cursor moves to the left side of the rectangle, the background color changes to dark red.

Center: When the cursor is in the center of the rectangle, the color fades to black.

Right Side: Moving towards the right side of the rectangle, the color changes to dark blue.


Technologies Used

HTML5: To create the structure of the rectangle.

CSS3: To style the rectangle and define transitions.

JavaScript: To handle mouse events and dynamically update the background color.


How to Run

Clone the repository to your local machine:

bash
Copy code
git clone https://github.com/yourusername/color-transition-rectangle.git

Navigate to the project directory:

bash
Copy code
cd color-transition-rectangle
Open the index.html file in your web browser.

Code Overview

HTML: Defines a container for the rectangle.

CSS: Provides the styling and initial background color.

JavaScript: Listens for mouse movement within the rectangle and adjusts the background color based on the cursor's position.
