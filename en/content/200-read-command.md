# User interaction

In Bash, it is possible to request data from the user during the execution of a script or command. This is achieved using the `read` command, which allows reading data entered from the command line and storing it in variables for later use.

## Basic use of the `read` command

The `read` command captures text entered by the user and stores it in a variable.

### Basic example

```bash
#!/bin/bash

# Ask the user for their name
echo "Please enter your name:"
read name

# Display the message with the entered name
echo "Hello, $name." # Expected output: Hello, [entered name].
```

### Read multiple values

It is possible to capture multiple values entered by the user by separating them with spaces. Each value is assigned to a variable.

```bash
#!/bin/bash

# Ask the user for two pieces of data
echo "Enter your city and country separated by a space:"
read city country

# Display the entered values
echo "City: $city, Country: $country." # Expected output: City: [city], Country: [country].
```

### Provide a short message with `read`

The `-p` flag allows you to include a message directly with the `read` command:

```bash
#!/bin/bash

# Read with a direct message
read -p "Enter your age: " age

# Display the result
echo "You are $age years old." # Expected output: You are [age] years old.
```

## Read data hidden

The `-s` flag allows you to hide the user's input. It is useful for passwords or other sensitive information.

```bash
#!/bin/bash

# Request password hidden
read -s -p "Enter your password: " password
echo
echo "The password has been saved." # Expected output: The password has been saved.
```

## Set a time limit for input

The `-t` flag allows you to specify a maximum time (in seconds) for the user to enter data. If they do not do so within that time, the `read` command will continue with the script.

```bash
#!/bin/bash

# Read with time limit
read -t 10 -p "Enter your name in the next 10 seconds: " name

# Check if a value was entered
if [ -z "$name" ]; then
  echo "No name was entered." # Expected output: No name was entered.
else
  echo "Hello, $name." # Expected output: Hello, [entered name].
fi
```

## Limit the number of characters to read

The `-n` flag allows you to limit the number of characters that can be entered.

```bash
#!/bin/bash

# Read with character limit
read -n 5 -p "Enter a 5-character key: " key
echo
echo "Entered key: $key" # Expected output: Entered key: [key].
```

These methods allow you to customize the user's interaction with the script, making it more dynamic and functional.
