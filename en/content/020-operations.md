# Executing Operations

Bash allows you to perform a wide variety of operations, from basic arithmetic calculations to string manipulation. This section covers the fundamental concepts for executing operations directly in Bash.

## Arithmetic operations

### Using `$(( ... ))`

The `$(( ... ))` command allows you to perform arithmetic operations easily within a script.

```bash
#!/bin/bash

result=$(( 5 + 3 ))
echo "The result of 5 + 3 is: $result"
```

### Using `expr`

The `expr` command is also used to perform calculations, although it requires spaces between operators and operands.

```bash
#!/bin/bash

result=$(expr 10 \* 2)
echo "The result of 10 * 2 is: $result"
```

### Using `bc` for advanced calculations

The `bc` tool allows you to perform operations with decimal numbers and greater precision.

```bash
#!/bin/bash

result=$(echo "scale=2; 10 / 3" | bc)
echo "The result of 10 / 3 is: $result"
```

## String operations

### String concatenation

Strings can be easily concatenated using the `${}` expansion operator.

```bash
#!/bin/bash

string1="Hello"
string2="World"
result="${string1} ${string2}"
echo "$result"
```

### String length

The length of a string is obtained using `${#string}`.

```bash
#!/bin/bash

string="Hello World"
echo "The length of the string is: ${#string}"
```

## Capturing command output

### Using `$( ... )`

To capture the output of a command, use the `$(...)` syntax or backticks `` ` ``.

```bash
#!/bin/bash

date=$(date)
echo "The current date is: $date"
```

### Example with `ls`

```bash
#!/bin/bash

files=$(ls /tmp)
echo "Files in /tmp: $files"
```
