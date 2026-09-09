# Solved exercises

## Introduction to scripts

1. Write a script that simply returns the name of a city.
   Create a file called `city.sh`:

   ```bash
   #!/bin/bash
   # This script prints the name of a city
   echo "Barcelona"
   ```

   Run the script to see the result:

   ```bash
   bash city.sh
   ```

2. Make sure the script runs in the bash shell.
   Add the **shebang** at the beginning of the file to ensure it runs in Bash:

   ```bash
   #!/bin/bash
   # This script prints the name of a city
   echo "Madrid"
   ```

   Save the file as `city_bash.sh`, make it executable, and run it:

   ```bash
   chmod +x city_bash.sh
   ./city_bash.sh
   ```

3. Make sure the script runs in the Korn shell (ksh).
   Modify the shebang to point to KornShell:

   ```bash
   #!/bin/ksh
   # This script prints the name of a city
   echo "Seville"
   ```

   Save the file as `city_ksh.sh`, make it executable, and run it with KornShell:

   ```bash
   chmod +x city_ksh.sh
   ./city_ksh.sh
   ```

   If KornShell is not available on your system, install it before testing.

4. Create a script that defines two variables and returns their values.
   Create a file called `variables.sh`:

   ```bash
   #!/bin/bash
   # This script defines two variables and prints them
   city="Valencia"
   country="Spain"
   echo "City: $city"
   echo "Country: $country"
   ```

   Run the script:

   ```bash
   bash variables.sh
   ```

5. Make the variables exist outside the script.
   Run the script with `source` so that the variables affect the current shell:

   ```bash
   source variables.sh
   ```

   Then verify that the variables are available:

   ```bash
   echo $city
   echo $country
   ```

## Conditional constructs

1. Write a script that asks the user for a number and checks if it is positive, negative, or zero. Use `if-elif-else` to solve it.

   ```bash
   #!/bin/bash

   read -p "Enter a number: " number

   if [ $number -gt 0 ]; then
       echo "The number is positive."
   elif [ $number -lt 0 ]; then
       echo "The number is negative."
   else
       echo "The number is zero."
   fi
   ```

2. Write a script that asks the user for a filename and checks if it exists or not. If the file exists, check if it is a regular file or a directory.

   ```bash
   #!/bin/bash

   read -p "Enter a file or directory name: " file

   if [ -e "$file" ]; then
       if [ -f "$file" ]; then
           echo "It is a regular file."
       elif [ -d "$file" ]; then
           echo "It is a directory."
       else
           echo "It exists, but it is neither a regular file nor a directory."
       fi
   else
       echo "The file or directory does not exist."
   fi
   ```

3. Write a script that asks the user for a string and determines if it is empty or contains text.

   ```bash
   #!/bin/bash

   read -p "Enter a text string: " string

   if [ -z "$string" ]; then
       echo "The string is empty."
   else
       echo "The string contains text."
   fi
   ```

4. Write a script that displays a menu with the following options: view the contents of a directory, create a file, and exit. Use `case-esac` to handle the options.

   ```bash
   #!/bin/bash

   echo "Select an option:"
   echo "1) View directory contents"
   echo "2) Create a file"
   echo "3) Exit"
   read -p "Enter your choice: " option

   case $option in
       1)
           read -p "Enter the directory name: " directory
           ls "$directory"
           ;;
       2)
           read -p "Enter the name of the file to create: " file
           touch "$file"
           echo "File '$file' created."
           ;;
       3)
           echo "Exiting the program."
           ;;
       *)
           echo "Invalid option."
           ;;
   esac
   ```

5. Write a script that asks the user for a number and determines if it is within the range 10-20 (inclusive). Use logical operators (`&&`).

   ```bash
   #!/bin/bash

   read -p "Enter a number: " number

   if [ $number -ge 10 ] && [ $number -le 20 ]; then
       echo "The number is within the range of 10 to 20."
   else
       echo "The number is outside the range of 10 to 20."
   fi
   ```

6. Write a script that asks the user for a password and checks if it matches a predefined one.

   ```bash
   #!/bin/bash

   correct_password="12345"

   read -p "Enter the password: " password

   if [ "$password" = "$correct_password" ]; then
       echo "Correct password."
   else
       echo "Incorrect password."
   fi
   ```

7. Write a script that asks the user for two numbers and determines which is greater or if they are equal.

   ```bash
   #!/bin/bash

   read -p "Enter the first number: " num1
   read -p "Enter the second number: " num2

   if [ $num1 -gt $num2 ]; then
       echo "The first number ($num1) is greater than the second ($num2)."
   elif [ $num1 -lt $num2 ]; then
       echo "The second number ($num2) is greater than the first ($num1)."
   else
       echo "Both numbers are equal."
   fi
   ```

## Loops

1. Write a script that uses a `for` loop to print the numbers from 1 to 10.

   ```bash
   #!/bin/bash

   for i in {1..10}; do
       echo "Number: $i"
   done
   ```

2. Write a script that uses a `while` loop to calculate the sum of the numbers from 1 to 100.

   ```bash
   #!/bin/bash

   sum=0
   counter=1

   while [ $counter -le 100 ]; do
       sum=$((sum + counter))
       counter=$((counter + 1))
   done

   echo "The sum of the numbers from 1 to 100 is: $sum"
   ```

3. Write a script that uses an `until` loop to count down from 10 to 1 and print each number.

   ```bash
   #!/bin/bash

   counter=10

   until [ $counter -lt 1 ]; do
       echo "Number: $counter"
       counter=$((counter - 1))
   done
   ```

4. Write a script that implements an infinite loop with `while` and stops if the user enters "exit".

   ```bash
   #!/bin/bash

   while true; do
       read -p "Enter a command (type 'exit' to finish): " command
       if [ "$command" = "exit" ]; then
           echo "Exiting the loop."
           break
       fi
       echo "Command entered: $command"
   done
   ```

5. Write a script that uses a `for` loop with double parentheses syntax to print the even numbers between 1 and 20.

   ```bash
   #!/bin/bash

   for ((i = 2; i <= 20; i += 2)); do
       echo "Even number: $i"
   done
   ```

6. Write a script that implements an infinite loop with `for` and uses `break` to stop after five iterations.

   ```bash
   #!/bin/bash

   counter=0

   for (( ; ; )); do
       counter=$((counter + 1))
       echo "Iteration: $counter"
       if [ $counter -eq 5 ]; then
           echo "Stopping the loop after five iterations."
           break
       fi
   done
   ```

7. Write a script that uses a `for` loop to iterate over all files in the current directory and print their names.

   ```bash
   #!/bin/bash

   for file in *; do
       echo "File: $file"
   done
   ```

8. Write a script that uses a `while` loop to read a text file line by line, whose name will be entered by the user, and display each line on the screen.

   ```bash
   #!/bin/bash

   read -p "Enter the file name: " file

   if [ ! -e "$file" ]; then
       echo "The file does not exist."
       exit 1
   fi

   while IFS= read -r line; do
       echo "$line"
   done < "$file"
   ```

9. Write a script that uses a `for` loop to iterate over the results of a command, such as `ls`, and display each element found.

   ```bash
   #!/bin/bash

   read -p "Enter the command whose results you want to iterate over (for example, ls): " command

   for element in $($command); do
       echo "Element: $element"
   done
   ```

10. Write a script that uses an `until` loop to continuously check if a specific file exists. The file name will be requested from the user, stopping when it is found.

     ```bash
     #!/bin/bash

     read -p "Enter the name of the file to search for: " file

     until [ -e "$file" ]; do
         echo "The file $file does not exist."
         sleep 2
     done

     echo "The file $file has been found."
     ```

11. Write a script that implements an infinite loop with `while`. Ask the user for a directory and list its contents until they type "exit".

     ```bash
     #!/bin/bash

     while true; do
         read -p "Enter a directory (type 'exit' to finish): " dir
         if [ "$dir" = "exit" ]; then
             echo "Exiting the program."
             break
         fi
         if [ -d "$dir" ]; then
             echo "Contents of $dir:"
             ls "$dir"
         else
             echo "$dir is not a valid directory."
         fi
     done
     ```

12. Write a script that uses a `for` loop to iterate over a list of words. Ask the user for the words to search for and the directory where to search, using `grep` for each word.

     ```bash
     #!/bin/bash

     read -p "Enter the words to search for separated by spaces: " -a words
     read -p "Enter the directory where to search: " directory

     if [ ! -d "$directory" ]; then
         echo "The directory does not exist."
         exit 1
     fi

     for word in "${words[@]}"; do
         echo "Searching for '$word' in $directory:"
         grep -r "$word" "$directory"
     done
     ```

## Parameters

1. Write a script that receives a directory as the first parameter and a file extension as the second parameter. The script must list all files with that extension within the directory.

   **Solution:**

   ```bash
   #!/bin/bash

   directory=$1
   extension=$2

   if [ -d "$directory" ]; then
       echo "Files with extension .$extension in $directory:"
       ls "$directory"/*.$extension 2>/dev/null
   else
       echo "The directory $directory does not exist."
   fi
   ```

2. Write a script that receives a word as the first parameter and a file as the second parameter. Use `grep` to search for all lines containing that word in the file and display them.

   **Solution:**

   ```bash
   #!/bin/bash

   word=$1
   file=$2

   if [ -f "$file" ]; then
       echo "Lines containing '$word' in $file:"
       grep "$word" "$file"
   else
       echo "The file $file does not exist."
   fi
   ```

3. Write a script that receives multiple directory names as parameters and displays the total number of files in each of them.

   **Solution:**

   ```bash
   #!/bin/bash

   for directory in "$@"; do
       if [ -d "$directory" ]; then
           num_files=$(ls -1 "$directory" | wc -l)
           echo "The directory $directory contains $num_files files."
       else
           echo "$directory is not a valid directory."
       fi
   done
   ```

4. Write a script that receives a pattern as the first parameter and a directory as the second parameter. Use `find` to search for all files in the directory that match the pattern.

   **Solution:**

   ```bash
   #!/bin/bash

   pattern=$1
   directory=$2

   if [ -d "$directory" ]; then
       echo "Files matching the pattern '$pattern' in $directory:"
       find "$directory" -name "$pattern"
   else
       echo "The directory $directory does not exist."
   fi
   ```

5. Write a script that receives a list of files as parameters and displays their total size using `du`.

   **Solution:**

   ```bash
   #!/bin/bash

   if [ $# -eq 0 ]; then
       echo "No files were provided."
       exit 1
   fi

   echo "Total size of files:"
   du -ch "$@" | grep total
   ```

6. Write a script that receives a directory as the first parameter and a second integer parameter. Display the names of the largest files within that directory, limited to the specified number.

   **Solution:**

   ```bash
   #!/bin/bash

   directory=$1
   limit=$2

   if [ -d "$directory" ]; then
       echo "The $limit largest files in $directory are:"
       find "$directory" -type f -exec du -h {} + | sort -rh | head -n "$limit"
   else
       echo "The directory $directory does not exist."
   fi
   ```

## Functions

1. Write a script that contains a function called `multiply` that receives two parameters and returns their product. Call the function with the values 4 and 5 and print the result.

   ```bash
   #!/bin/bash

   multiply() {
       echo $(( $1 * $2 ))
   }

   result=$(multiply "$1" "$2")
   echo "The product of $1 and $2 is: $result"
   ```

   **Example call:**

   ```bash
   ./script.sh 4 5
   ```

   **Output:**

   ```
   The product of 4 and 5 is: 20
   ```

2. Write a script that contains a function called `check_user` that receives a username as a parameter. The function must check if the user exists in the system and return an appropriate message.

   ```bash
   #!/bin/bash

   check_user() {
       if id "$1" &>/dev/null; then
           echo "The user $1 exists."
       else
           echo "The user $1 does not exist."
       fi
   }

   check_user "$1"
   ```

   **Example call:**

   ```bash
   ./script.sh root
   ```

   **Output:**

   ```
   The user root exists.
   ```

3. Write a script that contains a function called `list_directory` that receives a directory as a parameter and lists its contents. If the directory does not exist, it must display an error message.

   ```bash
   #!/bin/bash

   list_directory() {
       if [ -d "$1" ]; then
           echo "Contents of directory $1:"
           ls "$1"
       else
           echo "The directory $1 does not exist."
       fi
   }

   list_directory "$1"
   ```

   **Example call:**

   ```bash
   ./script.sh /tmp
   ```

   **Output:**

   ```
   Contents of directory /tmp:
   file1
   file2
   ```

4. Write a script that contains a function called `evaluate_command` that receives a command as a parameter, executes it, and displays whether the command was executed correctly or not.

   ```bash
   #!/bin/bash

   evaluate_command() {
       $1 &>/dev/null
       if [ $? -eq 0 ]; then
           echo "The command '$1' executed correctly."
       else
           echo "The command '$1' failed."
       fi
   }

   evaluate_command "$1"
   ```

   **Example call:**

   ```bash
   ./script.sh ls
   ```

   **Output:**

   ```
   The command 'ls' executed correctly.
   ```

5. Write a script that contains a function called `largest_number` that receives three numbers as parameters and returns the largest of them. Call the function with the values 10, 20, and 15 and print the result.

   ```bash
   #!/bin/bash

   largest_number() {
       if [ $1 -ge $2 ] && [ $1 -ge $3 ]; then
           echo $1
       elif [ $2 -ge $1 ] && [ $2 -ge $3 ]; then
           echo $2
       else
           echo $3
       fi
   }

   result=$(largest_number "$1" "$2" "$3")
   echo "The largest of $1, $2 and $3 is: $result"
   ```

   **Example call:**

   ```bash
   ./script.sh 10 20 15
   ```

   **Output:**

   ```
   The largest of 10, 20 and 15 is: 20
   ```

6. Write a script that contains a function called `check_file` that receives a filename as a parameter and uses `return` to indicate whether the file exists or not. Call the function and use `$?` to display the result.

   ```bash
   #!/bin/bash

   check_file() {
       if [ -e "$1" ]; then
           return 0
       else
           return 1
       fi
   }

   check_file "$1"
   if [ $? -eq 0 ]; then
       echo "The file exists."
   else
       echo "The file does not exist."
   fi
   ```

   **Example call:**

   ```bash
   ./script.sh file.txt
   ```

   **Output:**

   ```
   The file exists.
   ```
