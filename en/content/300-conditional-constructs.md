# Decision

In Bash, conditional constructs allow you to control the flow of the script based on certain conditions. These structures are fundamental for making decisions based on data or the current state of the system.

## `if` construct

The `if` construct evaluates a condition and executes a block of code if it is met.

### Basic syntax

```bash
if [ condition ]; then
  # Code to execute if the condition is true
fi
```

### Example:

```bash
#!/bin/bash

# Check if a number is greater than 10
number=15
if [ $number -gt 10 ]; then
  echo "The number is greater than 10." # Expected output: The number is greater than 10.
fi
```

## `if-else` construct

Includes an alternative block that is executed if the condition is not met.

### Syntax:

```bash
if [ condition ]; then
  # Code if the condition is true
else
  # Code if the condition is false
fi
```

### Example:

```bash
#!/bin/bash

# Check if a file exists
file="test.txt"
if [ -e $file ]; then
  echo "The file exists." # Expected output: The file exists.
else
  echo "The file does not exist." # Expected output: The file does not exist.
fi
```

## `if-elif-else` construct

Allows handling multiple conditions.

### Syntax:

```bash
if [ condition1 ]; then
  # Code if condition1 is true
elif [ condition2 ]; then
  # Code if condition2 is true
else
  # Code if no condition is true
fi
```

### Example:

```bash
#!/bin/bash

# Check the value of a variable
value=20
if [ $value -lt 10 ]; then
  echo "The value is less than 10."
elif [ $value -lt 20 ]; then
  echo "The value is less than 20."
else
  echo "The value is 20 or greater." # Expected output: The value is 20 or greater.
fi
```

## `case` construct

The `case` construct is used to evaluate a variable against multiple patterns.

### Syntax:

```bash
case variable in
  pattern1)
    # Code if variable matches pattern1
    ;;
  pattern2)
    # Code if variable matches pattern2
    ;;
  *)
    # Default code if there is no match
    ;;
esac
```

### Example:

```bash
#!/bin/bash

# Identify the day of the week
day="monday"
case $day in
  "monday")
    echo "Start of the week." # Expected output: Start of the week.
    ;;
  "friday")
    echo "End of the week."
    ;;
  *)
    echo "It is a weekday or weekend."
    ;;
esac
```

## Logical operators in conditional constructs

1. **AND (`&&`)**: Both conditions must be true.

```bash
if [ $value -gt 10 ] && [ $value -lt 20 ]; then
  echo "The value is between 10 and 20."
fi
```

2. **OR (`||`)**: At least one condition must be true.

```bash
if [ $value -lt 10 ] || [ $value -gt 20 ]; then
  echo "The value is outside the range 10-20."
fi
```

3. **NOT (`!`)**: Negates the condition.

```bash
if ! [ -e $file ]; then
  echo "The file does not exist."
fi
```

These constructs allow you to structure complex scripts with flexible and adaptive logic.

## Menu with `case-esac`, the `PS3` variable, `select`, and an array

In Bash, an interactive menu can be built using the `PS3` variable, the `select` loop, and an array. The `case-esac` structure is used to handle the options selected by the user.

### Interactive menu example

This script displays a menu with several options and allows the user to choose one.

```bash
#!/bin/bash

# Define the menu options in an array
options=("Option 1" "Option 2" "Option 3" "Exit")

# Configure the message for the selection prompt
PS3="Select an option: "

# Display the menu and capture the selection
select option in "${options[@]}"; do
  case $REPLY in
    1)
      echo "You have selected Option 1." # Expected output: You have selected Option 1.
      ;;
    2)
      echo "You have selected Option 2." # Expected output: You have selected Option 2.
      ;;
    3)
      echo "You have selected Option 3." # Expected output: You have selected Option 3.
      ;;
    4)
      echo "Exiting the menu." # Expected output: Exiting the menu.
      break
      ;;
    *)
      echo "Invalid option, please try again." # Expected output: Invalid option, please try again.
      ;;
  esac
done
```

### Script explanation

1. **Define an array**: The menu options are stored in an array called `options`. Each element of the array corresponds to an option the user can select.

```bash
options=("Option 1" "Option 2" "Option 3" "Exit")
```

2. **Configure `PS3`**: This variable defines the message that will be shown to the user before they select an option.

```bash
PS3="Select an option: "
```

3. **Use `select`**: This loop presents the array options and allows the user to choose one. The number entered is stored in the special variable `$REPLY`, and the selected text is assigned to the variable defined in `select` (`option` in this case).

4. **Use `case-esac`**: Evaluates the value of `$REPLY` to determine which action to perform based on the selected option.

5. **Exit option**: When selecting "Exit" (option 4), `break` is used to end the `select` loop.

### Expected execution

When the script is run, a menu like this is displayed:

```
1) Option 1
2) Option 2
3) Option 3
4) Exit
Select an option:
```

Depending on the chosen option, the script responds with the corresponding message and continues showing the menu until "Exit" is selected.

## Exercises

1. Write a script that asks the user for a number and checks if it is positive, negative, or zero. Use `if-elif-else` to solve it.

2. Write a script that asks the user for a filename and checks if it exists or not. If the file exists, check if it is a regular file or a directory.

3. Write a script that asks the user for a string and determines if it is empty or contains text.

4. Write a script that displays a menu with the following options: view the contents of a directory, create a file, and exit. Use `case-esac` to handle the options.

5. Write a script that asks the user for a number and determines if it is within the range 10-20 (inclusive). Use logical operators (`&&`).

6. Write a script that asks the user for a password and checks if it matches a predefined one.

7. Write a script that asks the user for two numbers and determines which is greater or if they are equal.
