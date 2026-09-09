# Parameters

Parameters in Bash allow you to pass arguments to a script to customize its execution. These are represented as special variables within the script.

## Positional Parameters

Positional parameters are the arguments passed when executing a script. These are represented with numbers, such as `$1`, `$2`, ..., `$N`.

### Basic example:

```bash
#!/bin/bash

# Print the positional parameters
echo "The first parameter is: $1"
echo "The second parameter is: $2"
echo "The total number of parameters is: $#"
```

If the script is run like this:

```bash
./script.sh hello world
```

The output will be:

```
The first parameter is: hello
The second parameter is: world
The total number of parameters is: 2
```

## Special Parameters

### `$#`

Indicates the total number of arguments passed to the script.

### `$*`

Displays all arguments as a single string.

### `$@`

Displays all arguments as a list of individual words.

### `$0`

Indicates the name of the script or command executed.

### `$?`

Returns the exit code of the last executed command.

### `$$`

Returns the process ID (PID) of the current script.

### `$!`

Returns the PID of the last process run in the background.

### Example of all special parameters:

```bash
#!/bin/bash

echo "Script name: $0"
echo "Total parameters: $#"
echo "All parameters (*): $*"
echo "All parameters (@): $@"
echo "Script PID: $$"
```

## `shift`

The `shift` command allows you to move positional parameters to the left, removing the first one and reassigning the rest.

### Example:

```bash
#!/bin/bash

while [ $# -gt 0 ]; do
  echo "Current parameter: $1"
  shift
done
```

If run like this:

```bash
./script.sh one two three
```

The output will be:

```
Current parameter: one
Current parameter: two
Current parameter: three
```

## Default values

Bash allows you to assign default values to parameters if they are not provided.

### Example:

```bash
#!/bin/bash

name=${1:-"User"}

echo "Hello, $name"
```

If run without arguments:

```bash
./script.sh
```

The output will be:

```
Hello, User
```

If an argument is provided:

```bash
./script.sh Pedro
```

The output will be:

```
Hello, Pedro
```

## Exercises

1. Write a script that receives a directory as the first parameter and a file extension as the second parameter. The script must list all files with that extension within the directory.

**Syntax:** `./script.sh <directory> <extension>`

2. Write a script that receives a word as the first parameter and a file as the second parameter. Use `grep` to search for all lines containing that word in the file and display them.

**Syntax:** `./script.sh <word> <file>`

3. Write a script that receives multiple directory names as parameters and displays the total number of files in each of them.

**Syntax:** `./script.sh <directory1> <directory2> ...`

4. Write a script that receives a pattern as the first parameter and a directory as the second parameter. Use `find` to search for all files in the directory that match the pattern.

**Syntax:** `./script.sh <pattern> <directory>`

5. Write a script that receives a list of files as parameters and displays their total size using `du`.

**Syntax:** `./script.sh <file1> <file2> ...`

6. Write a script that receives a directory as the first parameter and a second integer parameter. Display the names of the largest files within that directory, limited to the specified number.

**Syntax:** `./script.sh <directory> <number>`
