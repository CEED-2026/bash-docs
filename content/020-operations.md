# Ejecución de Operaciones

Bash permite realizar una amplia variedad de operaciones que van desde cálculos aritméticos básicos hasta manipulación de cadenas. Este apartado cubre los conceptos fundamentales para ejecutar operaciones directamente en Bash.

## Operaciones aritméticas

### Uso de `$(( ... ))`

El comando `$(( ... ))` permite realizar operaciones aritméticas de forma sencilla dentro de un script.

```bash
#!/bin/bash

resultado=$(( 5 + 3 ))
echo "El resultado de 5 + 3 es: $resultado"
```

### Uso de `expr`

El comando `expr` también se utiliza para realizar cálculos, aunque requiere espacios entre los operadores y los operandos.

```bash
#!/bin/bash

resultado=$(expr 10 \* 2)
echo "El resultado de 10 * 2 es: $resultado"
```

### Uso de `bc` para cálculos avanzados

La herramienta `bc` permite realizar operaciones con números decimales y mayor precisión.

```bash
#!/bin/bash

resultado=$(echo "scale=2; 10 / 3" | bc)
echo "El resultado de 10 / 3 es: $resultado"
```

## Operaciones con cadenas

### Concatenación de cadenas

Las cadenas se pueden concatenar fácilmente usando el operador de expansión `${}`.

```bash
#!/bin/bash

cadena1="Hola"
cadena2="Mundo"
resultado="${cadena1} ${cadena2}"
echo "$resultado"
```

### Longitud de una cadena

La longitud de una cadena se obtiene utilizando `${#cadena}`.

```bash
#!/bin/bash

cadena="Hola Mundo"
echo "La longitud de la cadena es: ${#cadena}"
```

## Captura de salida de comandos

### Uso de `$( ... )`

Para capturar la salida de un comando, se utiliza la sintaxis `$(...)` o las comillas invertidas `` ` ``.

```bash
#!/bin/bash

fecha=$(date)
echo "La fecha actual es: $fecha"
```

### Ejemplo con `ls`

```bash
#!/bin/bash

archivos=$(ls /tmp)
echo "Archivos en /tmp: $archivos"
```
