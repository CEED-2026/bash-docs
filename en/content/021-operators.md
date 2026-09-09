# Operators in Bash

In Bash, operators are special symbols that allow you to perform operations on values, variables, and expressions. Throughout this topic, you will learn about the different types of operators that Bash offers and how to use them in your scripts.

## Arithmetic operators

Arithmetic operators are used to perform basic mathematical calculations. To use them, the `$(( ))` syntax is used, which evaluates the expression and returns the numeric result.

- `+` Addition
- `-` Subtraction
- `*` Multiplication
- `/` Integer division
- `%` Modulo (remainder of division)
- `**` Exponentiation (in Bash 4.0 or higher)

### Basic example

```bash
#!/bin/bash
result=$(( 5 * 3 ))
echo "The result of 5 * 3 is: $result"
```

**Output:**

```text
The result of 5 * 3 is: 15
```

### Example with more operators

```bash
#!/bin/bash
sum=$(( 10 + 5 ))
subtraction=$(( 10 - 5 ))
multiplication=$(( 10 * 5 ))
division=$(( 10 / 5 ))
modulo=$(( 10 % 3 ))

echo "Sum: $sum"
echo "Subtraction: $subtraction"
echo "Multiplication: $multiplication"
echo "Division: $division"
echo "Modulo: $modulo"
```

**Output:**

```text
Sum: 15
Subtraction: 5
Multiplication: 50
Division: 2
Modulo: 1
```

## Assignment operators

Assignment operators allow you to modify the value of a variable directly or cumulatively:

- `=` Direct assignment
- `+=` Increment
- `-=` Decrement
- `*=` Cumulative multiplication
- `/=` Cumulative division

### Example

```bash
#!/bin/bash
x=10
x+=5
y=20
y*=2
z=30
z-=10

echo "x after += 5: $x"
echo "y after *= 2: $y"
echo "z after -= 10: $z"
```

**Output:**

```text
x after += 5: 15
y after *= 2: 40
z after -= 10: 20
```

## String operators

String operators are used to compare and evaluate the content of text-type variables. They are commonly used within conditional structures:

- `=` Equality
- `!=` Inequality
- `-z` Zero length
- `-n` Non-zero length

### Example

```bash
#!/bin/bash
string="Hello"
empty_string=""

if [ "$string" = "Hello" ]; then
    echo "The string is Hello."
fi

if [ "$string" != "Goodbye" ]; then
    echo "The string is not Goodbye."
fi

if [ -z "$empty_string" ]; then
    echo "The string is empty."
fi

if [ -n "$string" ]; then
    echo "The string is not empty."
fi
```

**Output:**

```text
The string is Hello.
The string is not Goodbye.
The string is empty.
The string is not empty.
```

## File operators

File operators allow you to check the status and type of a file or directory in the system. They are especially useful in conditional structures to validate paths before operating on them:

- `-e` Exists
- `-f` Is a regular file
- `-d` Is a directory
- `-r` Is readable
- `-w` Is writable
- `-x` Is executable

### Example

```bash
#!/bin/bash
file="file.txt"
directory="/tmp"

if [ -e "$file" ]; then
    echo "The file $file exists."
else
    echo "The file $file does not exist."
fi

if [ -d "$directory" ]; then
    echo "$directory is a directory."
fi

if [ -r "$file" ]; then
    echo "$file is readable."
else
    echo "$file is not readable."
fi
```

**Output:**

```text
The file file.txt does not exist.
/tmp is a directory.
file.txt is not readable.
```
