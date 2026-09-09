# Ejercicios resueltos

## Introducción a los scripts

1. Escribe un script que simplemente devuelva el nombre de una ciudad.  
   Crea un archivo llamado `ciudad.sh`:

   ```bash
   #!/bin/bash
   # Este script imprime el nombre de una ciudad
   echo "Barcelona"
   ```

   Ejecuta el script para ver el resultado:

   ```bash
   bash ciudad.sh
   ```

2. Asegúrate de que el script se ejecuta en el shell bash.  
   Añade el **shebang** al principio del archivo para garantizar que se ejecuta en Bash:

   ```bash
   #!/bin/bash
   # Este script imprime el nombre de una ciudad
   echo "Madrid"
   ```

   Guarda el archivo como `ciudad_bash.sh`, hazlo ejecutable y ejecútalo:

   ```bash
   chmod +x ciudad_bash.sh
   ./ciudad_bash.sh
   ```

3. Asegúrate de que el script se ejecuta en el shell Korn (ksh).  
   Modifica el shebang para apuntar a KornShell:

   ```bash
   #!/bin/ksh
   # Este script imprime el nombre de una ciudad
   echo "Sevilla"
   ```

   Guarda el archivo como `ciudad_ksh.sh`, hazlo ejecutable y ejecútalo con KornShell:

   ```bash
   chmod +x ciudad_ksh.sh
   ./ciudad_ksh.sh
   ```

   Si KornShell no está disponible en tu sistema, instálalo antes de probar.

4. Crea un script que defina dos variables y devuelva sus valores.  
   Crea un archivo llamado `variables.sh`:

   ```bash
   #!/bin/bash
   # Este script define dos variables y las imprime
   ciudad="Valencia"
   pais="España"
   echo "Ciudad: $ciudad"
   echo "País: $pais"
   ```

   Ejecuta el script:

   ```bash
   bash variables.sh
   ```

5. Haz que las variables existan fuera del script.  
   Ejecuta el script con `source` para que las variables afecten al shell actual:

   ```bash
   source variables.sh
   ```

   Luego verifica si las variables están disponibles:

   ```bash
   echo $ciudad
   echo $pais
   ```

## Estructuras condicionales

1. Escribe un script que solicite al usuario un número y verifique si es positivo, negativo o igual a cero. Utiliza `if-elif-else` para resolverlo.

   ```bash
   #!/bin/bash

   read -p "Introduce un número: " numero

   if [ $numero -gt 0 ]; then
       echo "El número es positivo."
   elif [ $numero -lt 0 ]; then
       echo "El número es negativo."
   else
       echo "El número es cero."
   fi
   ```

2. Escribe un script que solicite al usuario un nombre de archivo y compruebe si existe o no. Si el archivo existe, verifica si es un archivo regular o un directorio.

   ```bash
   #!/bin/bash

   read -p "Introduce el nombre de un archivo o directorio: " archivo

   if [ -e "$archivo" ]; then
       if [ -f "$archivo" ]; then
           echo "Es un archivo regular."
       elif [ -d "$archivo" ]; then
           echo "Es un directorio."
       else
           echo "Existe, pero no es un archivo regular ni un directorio."
       fi
   else
       echo "El archivo o directorio no existe."
   fi
   ```

3. Escribe un script que solicite al usuario una cadena y determine si está vacía o contiene texto.

   ```bash
   #!/bin/bash

   read -p "Introduce una cadena de texto: " cadena

   if [ -z "$cadena" ]; then
       echo "La cadena está vacía."
   else
       echo "La cadena contiene texto."
   fi
   ```

4. Escribe un script que muestre un menú con las siguientes opciones: ver el contenido de un directorio, crear un archivo y salir. Usa `case-esac` para manejar las opciones.

   ```bash
   #!/bin/bash

   echo "Selecciona una opción:"
   echo "1) Ver contenido de un directorio"
   echo "2) Crear un archivo"
   echo "3) Salir"
   read -p "Introduce tu elección: " opcion

   case $opcion in
       1)
           read -p "Introduce el nombre del directorio: " directorio
           ls "$directorio"
           ;;
       2)
           read -p "Introduce el nombre del archivo a crear: " archivo
           touch "$archivo"
           echo "Archivo '$archivo' creado."
           ;;
       3)
           echo "Saliendo del programa."
           ;;
       *)
           echo "Opción no válida."
           ;;
   esac
   ```

5. Escribe un script que solicite al usuario un número y determine si está dentro del rango 10-20 (inclusive). Utiliza operadores lógicos (`&&`).

   ```bash
   #!/bin/bash

   read -p "Introduce un número: " numero

   if [ $numero -ge 10 ] && [ $numero -le 20 ]; then
       echo "El número está dentro del rango de 10 a 20."
   else
       echo "El número está fuera del rango de 10 a 20."
   fi
   ```

6. Escribe un script que solicite al usuario una contraseña y verifique si coincide con una predefinida.

   ```bash
   #!/bin/bash

   contraseña_correcta="12345"

   read -p "Introduce la contraseña: " contraseña

   if [ "$contraseña" = "$contraseña_correcta" ]; then
       echo "Contraseña correcta."
   else
       echo "Contraseña incorrecta."
   fi
   ```

7. Escribe un script que solicite al usuario dos números y determine cuál es mayor o si son iguales.

   ```bash
   #!/bin/bash

   read -p "Introduce el primer número: " num1
   read -p "Introduce el segundo número: " num2

   if [ $num1 -gt $num2 ]; then
       echo "El primer número ($num1) es mayor que el segundo ($num2)."
   elif [ $num1 -lt $num2 ]; then
       echo "El segundo número ($num2) es mayor que el primero ($num1)."
   else
       echo "Ambos números son iguales."
   fi
   ```

## Bucles

1. Escribe un script que utilice un bucle `for` para imprimir los números del 1 al 10.

   ```bash
   #!/bin/bash

   for i in {1..10}; do
       echo "Número: $i"
   done
   ```

2. Escribe un script que utilice un bucle `while` para calcular la suma de los números del 1 al 100.

   ```bash
   #!/bin/bash

   suma=0
   contador=1

   while [ $contador -le 100 ]; do
       suma=$((suma + contador))
       contador=$((contador + 1))
   done

   echo "La suma de los números del 1 al 100 es: $suma"
   ```

3. Escribe un script que utilice un bucle `until` para contar hacia atrás desde 10 hasta 1 e imprimir cada número.

   ```bash
   #!/bin/bash

   contador=10

   until [ $contador -lt 1 ]; do
       echo "Número: $contador"
       contador=$((contador - 1))
   done
   ```

4. Escribe un script que implemente un bucle infinito con `while` y se detenga si el usuario introduce "salir".

   ```bash
   #!/bin/bash

   while true; do
       read -p "Introduce un comando (escribe 'salir' para terminar): " comando
       if [ "$comando" = "salir" ]; then
           echo "Saliendo del bucle."
           break
       fi
       echo "Comando introducido: $comando"
   done
   ```

5. Escribe un script que utilice un bucle `for` con sintaxis de doble paréntesis para imprimir los números pares entre 1 y 20.

   ```bash
   #!/bin/bash

   for ((i = 2; i <= 20; i += 2)); do
       echo "Número par: $i"
   done
   ```

6. Escribe un script que implemente un bucle infinito con `for` y utilice `break` para detenerse después de cinco iteraciones.

   ```bash
   #!/bin/bash

   contador=0

   for (( ; ; )); do
       contador=$((contador + 1))
       echo "Iteración: $contador"
       if [ $contador -eq 5 ]; then
           echo "Deteniendo el bucle después de cinco iteraciones."
           break
       fi
   done
   ```

7. Escribe un script que utilice un bucle `for` para iterar sobre todos los archivos en el directorio actual e imprimir sus nombres.

   ```bash
   #!/bin/bash

   for archivo in *; do
       echo "Archivo: $archivo"
   done
   ```

8. Escribe un script que utilice un bucle `while` para leer línea por línea un archivo de texto, cuyo nombre será introducido por el usuario, y mostrar cada línea por pantalla.

   ```bash
   #!/bin/bash

   read -p "Introduce el nombre del archivo: " archivo

   if [ ! -e "$archivo" ]; then
       echo "El archivo no existe."
       exit 1
   fi

   while IFS= read -r linea; do
       echo "$linea"
   done < "$archivo"
   ```

9. Escribe un script que utilice un bucle `for` para iterar sobre los resultados de un comando, como `ls`, y mostrar cada elemento encontrado.

   ```bash
   #!/bin/bash

   read -p "Introduce el comando cuyos resultados quieres iterar (por ejemplo, ls): " comando

   for elemento in $($comando); do
       echo "Elemento: $elemento"
   done
   ```

10. Escribe un script que utilice un bucle `until` para comprobar continuamente si un archivo específico existe. El nombre del archivo será solicitado al usuario, deteniéndose cuando sea encontrado.

    ```bash
    #!/bin/bash

    read -p "Introduce el nombre del archivo a buscar: " archivo

    until [ -e "$archivo" ]; do
        echo "El archivo $archivo no existe."
        sleep 2
    done

    echo "El archivo $archivo ha sido encontrado."
    ```

11. Escribe un script que implemente un bucle infinito con `while`. Solicita al usuario un directorio y lista su contenido hasta que escriba "salir".

    ```bash
    #!/bin/bash

    while true; do
        read -p "Introduce un directorio (escribe 'salir' para terminar): " dir
        if [ "$dir" = "salir" ]; then
            echo "Saliendo del programa."
            break
        fi
        if [ -d "$dir" ]; then
            echo "Contenido de $dir:"
            ls "$dir"
        else
            echo "$dir no es un directorio válido."
        fi
    done
    ```

12. Escribe un script que utilice un bucle `for` para iterar sobre una lista de palabras. Solicita al usuario las palabras a buscar y el directorio donde buscar, utilizando `grep` para cada palabra.

    ```bash
    #!/bin/bash

    read -p "Introduce las palabras a buscar separadas por espacios: " -a palabras
    read -p "Introduce el directorio donde buscar: " directorio

    if [ ! -d "$directorio" ]; then
        echo "El directorio no existe."
        exit 1
    fi

    for palabra in "${palabras[@]}"; do
        echo "Buscando '$palabra' en $directorio:"
        grep -r "$palabra" "$directorio"
    done
    ```

## Parámetros

1. Escribe un script que reciba como primer parámetro un directorio y como segundo parámetro una extensión de archivo. El script debe listar todos los archivos con esa extensión dentro del directorio.

   **Solución:**

   ```bash
   #!/bin/bash

   directorio=$1
   extension=$2

   if [ -d "$directorio" ]; then
       echo "Archivos con extensión .$extension en $directorio:"
       ls "$directorio"/*.$extension 2>/dev/null
   else
       echo "El directorio $directorio no existe."
   fi
   ```

2. Escribe un script que reciba como primer parámetro una palabra y como segundo parámetro un archivo. Utiliza `grep` para buscar todas las líneas que contengan esa palabra en el archivo y muéstralas.

   **Solución:**

   ```bash
   #!/bin/bash

   palabra=$1
   archivo=$2

   if [ -f "$archivo" ]; then
       echo "Líneas que contienen '$palabra' en $archivo:"
       grep "$palabra" "$archivo"
   else
       echo "El archivo $archivo no existe."
   fi
   ```

3. Escribe un script que reciba como parámetros múltiples nombres de directorios y muestre el número total de archivos en cada uno de ellos.

   **Solución:**

   ```bash
   #!/bin/bash

   for directorio in "$@"; do
       if [ -d "$directorio" ]; then
           num_archivos=$(ls -1 "$directorio" | wc -l)
           echo "El directorio $directorio contiene $num_archivos archivos."
       else
           echo "$directorio no es un directorio válido."
       fi
   done
   ```

4. Escribe un script que reciba como primer parámetro un patrón y como segundo parámetro un directorio. Utiliza `find` para buscar todos los archivos en el directorio que coincidan con el patrón.

   **Solución:**

   ```bash
   #!/bin/bash

   patron=$1
   directorio=$2

   if [ -d "$directorio" ]; then
       echo "Archivos que coinciden con el patrón '$patron' en $directorio:"
       find "$directorio" -name "$patron"
   else
       echo "El directorio $directorio no existe."
   fi
   ```

5. Escribe un script que reciba como parámetros una lista de archivos y muestre su tamaño total utilizando `du`.

   **Solución:**

   ```bash
   #!/bin/bash

   if [ $# -eq 0 ]; then
       echo "No se proporcionaron archivos."
       exit 1
   fi

   echo "Tamaño total de los archivos:"
   du -ch "$@" | grep total
   ```

6. Escribe un script que reciba como primer parámetro un directorio y como segundo un número entero. Muestra los nombres de los archivos más grandes dentro de ese directorio, limitado al número especificado.

   **Solución:**

   ```bash
   #!/bin/bash

   directorio=$1
   limite=$2

   if [ -d "$directorio" ]; then
       echo "Los $limite archivos más grandes en $directorio son:"
       find "$directorio" -type f -exec du -h {} + | sort -rh | head -n "$limite"
   else
       echo "El directorio $directorio no existe."
   fi
   ```

## Funciones

1. Escribe un script que contenga una función llamada `multiplicar` que reciba dos parámetros y devuelva su producto. Llama a la función con los valores 4 y 5 e imprime el resultado.

   ```bash
   #!/bin/bash

   multiplicar() {
       echo $(( $1 * $2 ))
   }

   resultado=$(multiplicar "$1" "$2")
   echo "El producto de $1 y $2 es: $resultado"
   ```

   **Ejemplo de llamada:**

   ```bash
   ./script.sh 4 5
   ```

   **Salida:**

   ```
   El producto de 4 y 5 es: 20
   ```

2. Escribe un script que contenga una función llamada `verificar_usuario` que reciba un nombre de usuario como parámetro. La función debe comprobar si el usuario existe en el sistema y devolver un mensaje adecuado.

   ```bash
   #!/bin/bash

   verificar_usuario() {
       if id "$1" &>/dev/null; then
           echo "El usuario $1 existe."
       else
           echo "El usuario $1 no existe."
       fi
   }

   verificar_usuario "$1"
   ```

   **Ejemplo de llamada:**

   ```bash
   ./script.sh root
   ```

   **Salida:**

   ```
   El usuario root existe.
   ```

3. Escribe un script que contenga una función llamada `listar_directorio` que reciba como parámetro un directorio y liste su contenido. Si el directorio no existe, debe mostrar un mensaje de error.

   ```bash
   #!/bin/bash

   listar_directorio() {
       if [ -d "$1" ]; then
           echo "Contenido del directorio $1:"
           ls "$1"
       else
           echo "El directorio $1 no existe."
       fi
   }

   listar_directorio "$1"
   ```

   **Ejemplo de llamada:**

   ```bash
   ./script.sh /tmp
   ```

   **Salida:**

   ```
   Contenido del directorio /tmp:
   archivo1
   archivo2
   ```

4. Escribe un script que contenga una función llamada `evaluar_comando` que reciba un comando como parámetro, lo ejecute y muestre si el comando se ejecutó correctamente o no.

   ```bash
   #!/bin/bash

   evaluar_comando() {
       $1 &>/dev/null
       if [ $? -eq 0 ]; then
           echo "El comando '$1' se ejecutó correctamente."
       else
           echo "El comando '$1' falló."
       fi
   }

   evaluar_comando "$1"
   ```

   **Ejemplo de llamada:**

   ```bash
   ./script.sh ls
   ```

   **Salida:**

   ```
   El comando 'ls' se ejecutó correctamente.
   ```

5. Escribe un script que contenga una función llamada `mayor_numero` que reciba tres números como parámetros y devuelva el mayor de ellos. Llama a la función con los valores 10, 20 y 15 e imprime el resultado.

   ```bash
   #!/bin/bash

   mayor_numero() {
       if [ $1 -ge $2 ] && [ $1 -ge $3 ]; then
           echo $1
       elif [ $2 -ge $1 ] && [ $2 -ge $3 ]; then
           echo $2
       else
           echo $3
       fi
   }

   resultado=$(mayor_numero "$1" "$2" "$3")
   echo "El mayor de $1, $2 y $3 es: $resultado"
   ```

   **Ejemplo de llamada:**

   ```bash
   ./script.sh 10 20 15
   ```

   **Salida:**

   ```
   El mayor de 10, 20 y 15 es: 20
   ```

6. Escribe un script que contenga una función llamada `comprobar_archivo` que reciba un nombre de archivo como parámetro y utilice `return` para indicar si el archivo existe o no. Llama a la función y utiliza `$?` para mostrar el resultado.

   ```bash
   #!/bin/bash

   comprobar_archivo() {
       if [ -e "$1" ]; then
           return 0
       else
           return 1
       fi
   }

   comprobar_archivo "$1"
   if [ $? -eq 0 ]; then
       echo "El archivo existe."
   else
       echo "El archivo no existe."
   fi
   ```

   **Ejemplo de llamada:**

   ```bash
   ./script.sh archivo.txt
   ```

   **Salida:**

   ```
   El archivo existe.
   ```
