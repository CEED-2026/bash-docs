# Introduction to scripts

Bash (Bourne Again SHell) is one of the most popular command interpreters in the Linux and Unix-like systems ecosystem. A Bash script is simply a plain text file containing instructions written in Bash's command language, which is responsible for executing everything indicated in it line by line. These scripts are especially useful for automating tasks, whether in a single-user environment or at the system level.

The great advantage of creating scripts in Bash lies in its simplicity and the compatibility it offers, as almost all Linux distributions include it by default. In addition, no compilation tools or complicated dependencies are needed: just a text editor and the Bash interpreter. With these two elements, you can develop everything from simple automations, such as cleaning temporary files, to complex deployment and server administration systems.

Throughout this topic, you will learn how to create and manage Bash scripts, as well as best practices for their use. You will also learn about execution permissions, how to invoke scripts directly from the command line, and how to make the most of the many utilities offered by the shell itself (pipes, redirections, variables, functions, among others). This way, you will be prepared to carry out all kinds of automations and repetitive processes quickly and safely.

## Hello world

Below is a simple example of a Bash script that prints "Hello World", along with the steps needed to execute it.

```bash
#!/bin/bash

echo "Hello World"
```

### Steps to run it

1. **Create the file**
   Create a file (for example, `hello.sh`) and paste the above code into it.

2. **Grant execution permissions**
   From the terminal, navigate to the file location and run:
   ```bash
   chmod +x hello.sh
   ```

3. **Run the script**
   Once you have granted execution permissions, you can run your script with:
   ```bash
   ./hello.sh
   ```

When you run it, you will see the message:
```text
Hello World
```

## Shebang

The **shebang** (or `#!`) is a sequence of characters that appears at the beginning of a script and tells the operating system which interpreter should be used to execute the file. In the case of Bash scripts, the typical shebang is:

```bash
#!/bin/bash
```

It is composed of:

1. `#!`: This symbol tells the system that what follows is the path to the interpreter.
2. `/bin/bash`: It is the path to the Bash interpreter on the system. It indicates that the script instructions should be executed using Bash.

If the shebang is correctly configured, the system will know which interpreter to use to process the script.

## Comments in Bash

In Bash, comments are used to explain parts of the code, add notes, or document the purpose and functionality of a script. Comments are not executed and are ignored by the interpreter.

### Basic syntax

Comments in Bash begin with the `#` symbol. Everything that appears after this symbol on the same line will be considered a comment.

```bash
# This is a comment
echo "Hello World" # This comment explains this command
```

### Multiline comments

Bash does not have a specific syntax for multiline comments, but you can use several consecutive `#` symbols:

```bash
# This is a comment
# that spans
# multiple lines
```

### Best practices with comments

1. **Clear and relevant**: Comments should explain the purpose of the code and not repeat obvious things.
   * Bad comment:
     ```bash
     # Prints Hello World
     echo "Hello World"
     ```
   * Good comment:
     ```bash
     # Welcome message to the user
     echo "Hello World"
     ```
2. **Keep them updated**: Whenever you modify the code, comments should reflect the changes.
3. **Don't overdo it**: Too many comments can make reading difficult. The code should be clear enough not to require extensive comments.
4. **Use comments to temporarily disable code**:
   ```bash
   # echo "This will not run"
   ```

Comments are a powerful tool for documenting scripts and ensuring their maintenance and understanding over time.

## Variables in Bash

In Bash, variables are used to store values that can be reused in the script. These variables do not have a specific type and can contain text, numbers, or even command results.

### Variable declaration

In Bash, variables are assigned simply using the equals sign `=` without spaces before or after the sign.

```bash
# Variable assignment
message="Hello World"

# Using the variable
echo $message
```

In the example, the contents of the `message` variable are displayed using the `$` sign followed by the variable name.

### Rules for variable names

1. Variable names must begin with a letter or an underscore `_`.
2. They can only contain letters, numbers, and underscores (`_`).
3. They must not include spaces or special characters.
4. It is preferable to use meaningful names.

### Types of variables

1. **Local variables**: Those declared inside a script or function and available only in that context.
   ```bash
   name="Juan"
   echo $name
   ```
2. **Environment variables**: Global variables that affect child processes. They are declared using the `export` command.
   ```bash
   export PATH=$PATH:/new/directory
   ```
3. **Special variables**: Bash provides internal variables with specific meanings. Example:
   * `$0`: Script name.
   * `$1, $2, ...,$n`: Arguments passed to the script.
   * `$#`: Number of arguments.
   * `$?`: Exit code of the last executed command.

### Operations with variables

1. **Concatenation**:
   ```bash
   greeting="Hello"
   name="Juan"
   message="$greeting $name"
   echo $message
   ```
2. **Command substitution**:
   ```bash
   date=$(date)
   echo "Today is: $date"
   ```
