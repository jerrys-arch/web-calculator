# Calculator App

## Overview

The **Calculator App** is a simple, user-friendly web-based calculator designed to perform basic arithmetic operations like addition, subtraction, multiplication, and division. It also includes the ability to clear the display, delete the last entered character, and calculate percentages. The app is built with HTML, CSS, and JavaScript.

## Features

- **Basic Arithmetic Operations**: Supports addition, subtraction, multiplication, and division.
- **Percentage Calculation**: Calculate percentages by pressing the "%" button.
- **Clear and Delete**: Clear the display or delete the last entered character.
- **Error Handling**: Displays appropriate error messages like "Error" or "Cannot divide by zero" for invalid operations.
- **Responsive Design**: Works on both desktop and mobile devices.

## Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/jerrys-arch/calculator-app.git
    cd calculator-app
    ```

2. **Open the app**:
   - Open the `index.html` file in your browser.

No backend or server setup is required as the app runs entirely on the client-side.

## Usage

1. Open the app in your browser.
2. Use the buttons to perform arithmetic operations:
    - **Numeric Buttons (0-9)**: Enter numbers.
    - **Operator Buttons (+, -, *, /)**: Perform arithmetic operations.
    - **AC (Clear)**: Clears the display.
    - **DE (Delete)**: Deletes the last entered character.
    - **. (Decimal)**: Adds a decimal point.
    - **% (Percentage)**: Calculates the percentage of the current value.
    - **= (Equal)**: Calculates the result of the expression.

3. **Error Handling**: If an invalid operation is performed (e.g., division by zero), the app will show an error message like "Cannot divide by zero".

## Code Overview

### HTML Structure

The HTML structure consists of:
- A display area (`<input id="display">`) where the user can see the entered numbers and results.
- Buttons for each digit (0-9), operators (+, -, *, /), clear (AC), delete (DE), percentage (%), and equals (=).

### CSS Styling

The app uses a clean and simple design:
- Buttons are styled for clarity and easy interaction.
- The display area is designed to be large and easy to read.
- Responsive design ensures that the app works well on both desktop and mobile devices.

### JavaScript Logic

- **`appendToDisplay(value)`**: Appends the clicked button value (number or operator) to the display.
- **`calculateResult()`**: Evaluates the expression entered in the display and shows the result. Handles division by zero and other errors.
- **`clearDisplay()`**: Clears the display when the "AC" button is pressed.
- **`deleteLast()`**: Deletes the last character entered when the "DE" button is pressed.
- **`calculatePercent()`**: Calculates the percentage of the current value when the "%" button is pressed.

## Contributing

Contributions are welcome! If you have suggestions or improvements, feel free to fork the repository and submit a pull request.


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
