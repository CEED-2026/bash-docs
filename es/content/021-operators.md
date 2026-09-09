# Operadores en Bash

En Bash, los operadores son símbolos especiales que permiten realizar operaciones sobre valores, variables y expresiones. A lo largo de este tema, conocerás los distintos tipos de operadores que Bash ofrece y cómo utilizarlos en tus scripts.

## Operadores aritméticos

Los operadores aritméticos se utilizan para realizar cálculos matemáticos básicos. Para emplearlos, se utiliza la sintaxis `$(( ))`, que evalúa la expresión y devuelve el resultado numérico.

- `+` Suma
- `-` Resta
- `*` Multiplicación
- `/` División entera
- `%` Módulo (resto de la división)
- `**` Exponenciación (en Bash 4.0 o superior)

### Ejemplo básico

```bash
#!/bin/bash
resultado=$(( 5 * 3 ))
echo "El resultado de 5 * 3 es: $resultado"
```

**Salida:**

```text
El resultado de 5 * 3 es: 15
```

### Ejemplo con más operadores

```bash
#!/bin/bash
suma=$(( 10 + 5 ))
resta=$(( 10 - 5 ))
multiplicacion=$(( 10 * 5 ))
division=$(( 10 / 5 ))
modulo=$(( 10 % 3 ))

echo "Suma: $suma"
echo "Resta: $resta"
echo "Multiplicación: $multiplicacion"
echo "División: $division"
echo "Módulo: $modulo"
```

**Salida:**

```text
Suma: 15
Resta: 5
Multiplicación: 50
División: 2
Módulo: 1
```

## Operadores de asignación

Los operadores de asignación permiten modificar el valor de una variable de forma directa o acumulativa:

- `=` Asignación directa
- `+=` Incremento
- `-=` Decremento
- `*=` Multiplicación acumulativa
- `/=` División acumulativa

### Ejemplo

```bash
#!/bin/bash
x=10
x+=5
y=20
y*=2
z=30
z-=10

echo "x después de += 5: $x"
echo "y después de *= 2: $y"
echo "z después de -= 10: $z"
```

**Salida:**

```text
x después de += 5: 15
y después de *= 2: 40
z después de -= 10: 20
```

## Operadores de cadenas

Los operadores de cadenas se utilizan para comparar y evaluar el contenido de variables de tipo texto. Se emplean comúnmente dentro de estructuras condicionales:

- `=` Igualdad
- `!=` Desigualdad
- `-z` Longitud cero
- `-n` Longitud no cero

### Ejemplo

```bash
#!/bin/bash
cadena="Hola"
cadena_vacia=""

if [ "$cadena" = "Hola" ]; then
    echo "La cadena es Hola."
fi

if [ "$cadena" != "Adiós" ]; then
    echo "La cadena no es Adiós."
fi

if [ -z "$cadena_vacia" ]; then
    echo "La cadena está vacía."
fi

if [ -n "$cadena" ]; then
    echo "La cadena no está vacía."
fi
```

**Salida:**

```text
La cadena es Hola.
La cadena no es Adiós.
La cadena está vacía.
La cadena no está vacía.
```

## Operadores de archivos

Los operadores de archivos permiten verificar el estado y tipo de un archivo o directorio en el sistema. Son especialmente útiles en estructuras condicionales para validar rutas antes de operar sobre ellas:

- `-e` Existe
- `-f` Es un archivo regular
- `-d` Es un directorio
- `-r` Es legible
- `-w` Es escribible
- `-x` Es ejecutable

### Ejemplo

```bash
#!/bin/bash
archivo="archivo.txt"
directorio="/tmp"

if [ -e "$archivo" ]; then
    echo "El archivo $archivo existe."
else
    echo "El archivo $archivo no existe."
fi

if [ -d "$directorio" ]; then
    echo "$directorio es un directorio."
fi

if [ -r "$archivo" ]; then
    echo "$archivo es legible."
else
    echo "$archivo no es legible."
fi
```

**Salida:**

```text
El archivo archivo.txt no existe.
/tmp es un directorio.
archivo.txt no es legible.
```
