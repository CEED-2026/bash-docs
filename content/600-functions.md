# Funciones

Las funciones en Bash permiten encapsular bloques de código reutilizables. Son útiles para organizar scripts y evitar redundancia al realizar tareas similares.

## Definición de una función

En Bash, una función se define utilizando la siguiente sintaxis:

```bash
nombre_funcion() {
    # Código de la función
}
```

También se puede usar la palabra clave `function` para declarar una función. Aunque no es obligatorio, su uso puede ser preferido por algunos desarrolladores para mayor claridad.

### Ejemplo con ambas sintaxis

```bash
#!/bin/bash

saludar() {
    echo "Hola, $1"
}

function despedir {
    echo "Adiós, $1"
}

saludar "Mundo"
despedir "Usuario"
```

**Salida:**

```text
Hola, Mundo
Adiós, Usuario
```

## Llamada a funciones

Las funciones se llaman escribiendo su nombre seguido de los parámetros (si es necesario):

```bash
nombre_funcion parametro1 parametro2
```

### Ejemplo con parámetros

```bash
#!/bin/bash

suma() {
    resultado=$(( $1 + $2 ))
    echo "La suma de $1 y $2 es $resultado"
}

suma 5 10
```

**Salida:**

```text
La suma de 5 y 10 es 15
```

## Uso del comando `exit`

El comando `exit` se utiliza para terminar la ejecución de un script con un código de salida. Esto es útil para señalar si el script se ejecutó correctamente o si ocurrió un error.

### Cómo leer el código devuelto con `exit`

El código de salida generado por `exit` se puede leer con la variable especial `$?`, que contiene el resultado del último comando ejecutado.

### Ejemplo básico con `exit`

```bash
#!/bin/bash

if [ $# -eq 0 ]; then
    echo "No se proporcionaron argumentos."
    exit 1
fi

echo "Argumentos recibidos: $@"
exit 0
```

#### Ejecución:

```bash
./script.sh
# Salida: No se proporcionaron argumentos.
# Código de salida: echo $?
# 1

./script.sh argumento1 argumento2
# Salida: Argumentos recibidos: argumento1 argumento2
# Código de salida: echo $?
# 0
```

## Uso del comando `return`

El comando `return` se utiliza dentro de funciones para devolver un código de salida. Esto es útil para indicar el resultado de una operación. A diferencia de `exit`, `return` solo finaliza la función actual, no el script completo.

### Cómo leer el código devuelto con `return`

El código devuelto por `return` se puede leer con `$?` inmediatamente después de la llamada a la función.

### Ejemplo básico con `return`

```bash
#!/bin/bash

verificar_archivo() {
    if [ -e "$1" ]; then
        return 0
    else
        return 1
    fi
}

verificar_archivo "$1"
if [ $? -eq 0 ]; then
    echo "El archivo existe."
else
    echo "El archivo no existe."
fi
```

#### Ejecución:

```bash
./script.sh archivo.txt
# Salida: El archivo existe.

./script.sh noexiste.txt
# Salida: El archivo no existe.
```

## Captura de errores con `set -e`

La opción `set -e` permite que un script termine inmediatamente si un comando falla. Esto es útil para garantizar que los errores no pasen desapercibidos.

### Ejemplo con `set -e`

```bash
#!/bin/bash

set -e

mkdir /directorio_que_no_existe

echo "Este mensaje no se mostrará si el comando anterior falla."
```

## Agrupación de comandos con `{}` y `()`

En Bash, se pueden agrupar comandos para ejecutarlos en un solo contexto.

### Agrupación en el mismo entorno con `{}`

```bash
{
    echo "Primera línea";
    echo "Segunda línea";
}
```

### Agrupación en un subshell con `()`

```bash
(
    echo "Esto se ejecuta en un subshell."
    cd /tmp
    echo "Directorio actual: $(pwd)"
)

# El directorio actual no cambia fuera del subshell.
echo "Directorio fuera del subshell: $(pwd)"
```

## Ejercicios

1. Escribe un script que contenga una función llamada `multiplicar` que reciba dos parámetros y devuelva su producto. Llama a la función con los valores 4 y 5 e imprime el resultado.

2. Escribe un script que contenga una función llamada `verificar_usuario` que reciba un nombre de usuario como parámetro. La función debe comprobar si el usuario existe en el sistema y devolver un mensaje adecuado.

3. Escribe un script que contenga una función llamada `listar_directorio` que reciba como parámetro un directorio y liste su contenido. Si el directorio no existe, debe mostrar un mensaje de error.

4. Escribe un script que contenga una función llamada `evaluar_comando` que reciba un comando como parámetro, lo ejecute y muestre si el comando se ejecutó correctamente o no.

5. Escribe un script que contenga una función llamada `mayor_numero` que reciba tres números como parámetros y devuelva el mayor de ellos. Llama a la función con los valores 10, 20 y 15 e imprime el resultado.

6. Escribe un script que contenga una función llamada `comprobar_archivo` que reciba un nombre de archivo como parámetro y utilice `return` para indicar si el archivo existe o no. Llama a la función y utiliza `$?` para mostrar el resultado.
