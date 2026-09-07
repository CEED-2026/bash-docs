# Introducción a los scripts

Bash (Bourne Again SHell) es uno de los intérpretes de comandos más populares en el ecosistema de Linux y sistemas similares a Unix. Un script de Bash no es más que un archivo de texto plano que contiene instrucciones escritas en el lenguaje de comandos de Bash, el cual se encarga de ejecutar línea a línea todo lo que allí se indique. Estos scripts resultan especialmente útiles para automatizar tareas, ya sea en el entorno de un solo usuario o a nivel de sistema.

La gran ventaja de crear scripts en Bash radica en su simplicidad y en la compatibilidad que ofrece, pues casi todas las distribuciones de Linux lo incluyen por defecto. Además, no se necesitan herramientas de compilación ni dependencias complicadas: basta con un editor de texto y el intérprete de Bash. Con estos dos elementos, se pueden desarrollar desde simples automatizaciones, como la limpieza de archivos temporales, hasta complejos sistemas de despliegue y administración de servidores.

A lo largo de este tema, aprenderás a crear y gestionar scripts de Bash, así como buenas prácticas para su uso. Conocerás también los permisos de ejecución, la manera de invocar scripts directamente desde la línea de comandos y las formas de aprovechar al máximo las numerosas utilidades que ofrece el propio shell (tuberías, redirecciones, variables, funciones, entre otros). De esta manera, estarás preparado para llevar a cabo todo tipo de automatizaciones y procesos repetitivos de forma rápida y segura.

## Hola mundo

A continuación, se muestra un ejemplo sencillo de un script de Bash que imprime "Hola Mundo", junto con los pasos necesarios para ejecutarlo.

```bash
#!/bin/bash

echo "Hola Mundo"
```

### Pasos para ejecutarlo

1. **Crear el archivo**
   Crea un archivo (por ejemplo, `hola.sh`) y pega en él el código anterior.

2. **Dar permisos de ejecución**
   Desde la terminal, navega hasta la ubicación del archivo y ejecuta:
   ```bash
   chmod +x hola.sh
   ```

3. **Ejecutar el script**
   Una vez que le hayas otorgado los permisos de ejecución, puedes ejecutar tu script con:
   ```bash
   ./hola.sh
   ```

Al ejecutarlo, verás el mensaje:
```text
Hola Mundo
```

## Shebang

El **shebang** (o `#!`) es una secuencia de caracteres que aparece al inicio de un script y le indica al sistema operativo qué intérprete debe usarse para ejecutar el archivo. En el caso de scripts de Bash, el shebang típico es:

```bash
#!/bin/bash
```

Se compone de:

1. `#!`: Este símbolo indica al sistema que lo que sigue es la ruta del intérprete.
2. `/bin/bash`: Es la ruta al intérprete de Bash en el sistema. Indica que las instrucciones del script deben ejecutarse usando Bash.

Si el shebang está correctamente configurado, el sistema sabrá qué intérprete utilizar para procesar el script.

## Comentarios en Bash

En Bash, los comentarios se utilizan para explicar partes del código, agregar notas o documentar el propósito y funcionamiento de un script. Los comentarios no se ejecutan y son ignorados por el intérprete.

### Sintaxis básica

Los comentarios en Bash comienzan con el símbolo `#`. Todo lo que aparezca después de este símbolo en la misma línea será considerado un comentario.

```bash
# Este es un comentario
echo "Hola Mundo" # Este comentario explica este comando
```

### Comentarios multilínea

Bash no tiene una sintaxis específica para comentarios multilínea, pero puedes usar varios `#` consecutivos:

```bash
# Este es un comentario
# que abarca
# varias líneas
```

### Buenas prácticas con comentarios

1. **Claros y relevantes**: Los comentarios deben explicar el propósito del código y no repetir obviedades.
   * Mal comentario:
     ```bash
     # Imprime Hola Mundo
     echo "Hola Mundo"
     ```
   * Buen comentario:
     ```bash
     # Mensaje de bienvenida al usuario
     echo "Hola Mundo"
     ```
2. **Mantenerlos actualizados**: Siempre que se modifique el código, los comentarios deben reflejar los cambios.
3. **No abusar**: Demasiados comentarios pueden dificultar la lectura. El código debe ser lo suficientemente claro como para no requerir comentarios extensos.
4. **Usar comentarios para deshabilitar código temporalmente**:
   ```bash
   # echo "Esto no se ejecutará"
   ```

Los comentarios son una herramienta poderosa para documentar scripts y garantizar su mantenimiento y comprensión a largo plazo.

## Variables en Bash

En Bash, las variables se utilizan para almacenar valores que pueden ser reutilizados en el script. Estas variables no tienen un tipo específico y pueden contener texto, números o incluso resultados de comandos.

### Declaración de variables

En Bash, las variables se asignan simplemente usando el signo igual `=` sin espacios antes ni después del signo.

```bash
# Asignación de una variable
mensaje="Hola Mundo"

# Uso de la variable
echo $mensaje
```

En el ejemplo, el contenido de la variable `mensaje` se muestra utilizando el signo `$` seguido del nombre de la variable.

### Reglas para nombres de variables

1. Los nombres de las variables deben comenzar con una letra o un guion bajo `_`.
2. Solo pueden contener letras, números y guiones bajos (`_`).
3. No deben incluir espacios ni caracteres especiales.
4. Es preferible usar nombres significativos.

### Tipos de variables

1. **Variables locales**: Son aquellas declaradas dentro de un script o función y disponibles solo en ese contexto.
   ```bash
   nombre="Juan"
   echo $nombre
   ```
2. **Variables de entorno**: Son variables globales que afectan a procesos hijos. Se declaran usando el comando `export`.
   ```bash
   export PATH=$PATH:/nuevo/directorio
   ```
3. **Variables especiales**: Bash proporciona variables internas con significados específicos. Ejemplo:
   * `$0`: Nombre del script.
   * `$1, $2, ...,$n`: Argumentos pasados al script.
   * `$#`: Número de argumentos.
   * `$?`: Código de salida del último comando ejecutado.

### Operaciones con variables

1. **Concatenación**:
   ```bash
   saludo="Hola"
   nombre="Juan"
   mensaje="$saludo $nombre"
   echo $mensaje
   ```
2. **Sustitución de comandos**:
   ```bash
   fecha=$(date)
   echo "Hoy es: $fecha"
   ```
