# Parámetros

Los parámetros en Bash permiten pasar argumentos a un script para personalizar su ejecución. Estos se representan como variables especiales dentro del script.

## Parámetros Posicionales

Los parámetros posicionales son los argumentos que se pasan al ejecutar un script. Estos se representan con números, como `$1`, `$2`, ..., `$N`.

### Ejemplo básico:

```bash
#!/bin/bash

# Imprimir los parámetros posicionales
echo "El primer parámetro es: $1"
echo "El segundo parámetro es: $2"
echo "El total de parámetros es: $#"
```

Si se ejecuta el script de esta forma:

```bash
./script.sh hola mundo
```

La salida será:

```
El primer parámetro es: hola
El segundo parámetro es: mundo
El total de parámetros es: 2
```

## Parámetros Especiales

### `$#`

Indica el número total de argumentos pasados al script.

### `$*`

Muestra todos los argumentos como una sola cadena.

### `$@`

Muestra todos los argumentos como una lista de palabras individuales.

### `$0`

Indica el nombre del script o comando ejecutado.

### `$?`

Devuelve el código de salida del último comando ejecutado.

### `$$`

Devuelve el ID de proceso (PID) del script actual.

### `$!`

Devuelve el PID del último proceso ejecutado en segundo plano.

### Ejemplo de todos los parámetros especiales:

```bash
#!/bin/bash

echo "Nombre del script: $0"
echo "Total de parámetros: $#"
echo "Todos los parámetros (*): $*"
echo "Todos los parámetros (@): $@"
echo "PID del script: $$"
```

## `shift`

El comando `shift` permite mover los parámetros posicionales hacia la izquierda, eliminando el primero y reasignando el resto.

### Ejemplo:

```bash
#!/bin/bash

while [ $# -gt 0 ]; do
  echo "Parámetro actual: $1"
  shift
done
```

Si se ejecuta:

```bash
./script.sh uno dos tres
```

La salida será:

```
Parámetro actual: uno
Parámetro actual: dos
Parámetro actual: tres
```

## Valores Predeterminados

Bash permite asignar valores predeterminados a los parámetros si no se proporcionan.

### Ejemplo:

```bash
#!/bin/bash

nombre=${1:-"Usuario"}

echo "Hola, $nombre"
```

Si se ejecuta sin argumentos:

```bash
./script.sh
```

La salida será:

```
Hola, Usuario
```

Si se proporciona un argumento:

```bash
./script.sh Pedro
```

La salida será:

```
Hola, Pedro
```

## Ejercicios

1. Escribe un script que reciba como primer parámetro un directorio y como segundo parámetro una extensión de archivo. El script debe listar todos los archivos con esa extensión dentro del directorio.

**Sintaxis:** `./script.sh <directorio> <extensión>`

2. Escribe un script que reciba como primer parámetro una palabra y como segundo parámetro un archivo. Utiliza `grep` para buscar todas las líneas que contengan esa palabra en el archivo y muéstralas.

**Sintaxis:** `./script.sh <palabra> <archivo>`

3. Escribe un script que reciba como parámetros múltiples nombres de directorios y muestre el número total de archivos en cada uno de ellos.

**Sintaxis:** `./script.sh <directorio1> <directorio2> ...`

4. Escribe un script que reciba como primer parámetro un patrón y como segundo parámetro un directorio. Utiliza `find` para buscar todos los archivos en el directorio que coincidan con el patrón.

**Sintaxis:** `./script.sh <patrón> <directorio>`

5. Escribe un script que reciba como parámetros una lista de archivos y muestre su tamaño total utilizando `du`.

**Sintaxis:** `./script.sh <archivo1> <archivo2> ...`

6. Escribe un script que reciba como primer parámetro un directorio y como segundo un número entero. Muestra los nombres de los archivos más grandes dentro de ese directorio, limitado al número especificado.

**Sintaxis:** `./script.sh <directorio> <número>`
