# Decisión

En Bash, las construcciones condicionales permiten controlar el flujo del script en función de ciertas condiciones. Estas estructuras son fundamentales para tomar decisiones basadas en los datos o el estado actual del sistema.

## Construcción `if`

La construcción `if` evalúa una condición y ejecuta un bloque de código si esta se cumple.

### Sintaxis básica

```bash
if [ condición ]; then
  # Código a ejecutar si la condición es verdadera
fi
```

### Ejemplo:

```bash
#!/bin/bash

# Comprobar si un número es mayor que 10
numero=15
if [ $numero -gt 10 ]; then
  echo "El número es mayor que 10." # Salida esperada: El número es mayor que 10.
fi
```

## Construcción `if-else`

Incluye un bloque alternativo que se ejecuta si la condición no se cumple.

### Sintaxis:

```bash
if [ condición ]; then
  # Código si la condición es verdadera
else
  # Código si la condición es falsa
fi
```

### Ejemplo:

```bash
#!/bin/bash

# Verificar si un archivo existe
archivo="test.txt"
if [ -e $archivo ]; then
  echo "El archivo existe." # Salida esperada: El archivo existe.
else
  echo "El archivo no existe." # Salida esperada: El archivo no existe.
fi
```

## Construcción `if-elif-else`

Permite manejar múltiples condiciones.

### Sintaxis:

```bash
if [ condición1 ]; then
  # Código si la condición1 es verdadera
elif [ condición2 ]; then
  # Código si la condición2 es verdadera
else
  # Código si ninguna condición es verdadera
fi
```

### Ejemplo:

```bash
#!/bin/bash

# Comprobar el valor de una variable
valor=20
if [ $valor -lt 10 ]; then
  echo "El valor es menor que 10."
elif [ $valor -lt 20 ]; then
  echo "El valor es menor que 20."
else
  echo "El valor es 20 o mayor." # Salida esperada: El valor es 20 o mayor.
fi
```

## Construcción `case`

La construcción `case` se utiliza para evaluar una variable frente a múltiples patrones.

### Sintaxis:

```bash
case variable in
  patrón1)
    # Código si variable coincide con patrón1
    ;;
  patrón2)
    # Código si variable coincide con patrón2
    ;;
  *)
    # Código por defecto si no hay coincidencia
    ;;
esac
```

### Ejemplo:

```bash
#!/bin/bash

# Identificar el día de la semana
dia="lunes"
case $dia in
  "lunes")
    echo "Inicio de la semana." # Salida esperada: Inicio de la semana.
    ;;
  "viernes")
    echo "Fin de la semana."
    ;;
  *)
    echo "Es un día entre semana o fin de semana."
    ;;
esac
```

## Operadores lógicos en construcciones condicionales

1. **AND (`&&`)**: Ambas condiciones deben ser verdaderas.

```bash
if [ $valor -gt 10 ] && [ $valor -lt 20 ]; then
  echo "El valor está entre 10 y 20."
fi
```

2. **OR (`||`)**: Al menos una condición debe ser verdadera.

```bash
if [ $valor -lt 10 ] || [ $valor -gt 20 ]; then
  echo "El valor está fuera del rango 10-20."
fi
```

3. **NOT (`!`)**: Niega la condición.

```bash
if ! [ -e $archivo ]; then
  echo "El archivo no existe."
fi
```

Estas construcciones permiten estructurar scripts complejos con lógica flexible y adaptativa.

## Menú con `case-esac`, la variable `PS3`, `select` y un vector

En Bash, se puede construir un menú interactivo utilizando la variable `PS3`, el bucle `select` y un vector (array). La estructura `case-esac` se utiliza para manejar las opciones seleccionadas por el usuario.

### Ejemplo de menú interactivo

Este script muestra un menú con varias opciones y permite al usuario elegir una.

```bash
#!/bin/bash

# Definir las opciones del menú en un vector
opciones=("Opción 1" "Opción 2" "Opción 3" "Salir")

# Configurar el mensaje para el prompt de selección
PS3="Selecciona una opción: "

# Mostrar el menú y capturar la selección
select opcion in "${opciones[@]}"; do
  case $REPLY in
    1)
      echo "Has seleccionado la Opción 1." # Salida esperada: Has seleccionado la Opción 1.
      ;;
    2)
      echo "Has seleccionado la Opción 2." # Salida esperada: Has seleccionado la Opción 2.
      ;;
    3)
      echo "Has seleccionado la Opción 3." # Salida esperada: Has seleccionado la Opción 3.
      ;;
    4)
      echo "Saliendo del menú." # Salida esperada: Saliendo del menú.
      break
      ;;
    *)
      echo "Opción no válida, por favor intenta de nuevo." # Salida esperada: Opción no válida, por favor intenta de nuevo.
      ;;
  esac
done
```

### Explicación del script

1. **Definir un vector**: Las opciones del menú se almacenan en un array llamado `opciones`. Cada elemento del vector corresponde a una opción que el usuario puede seleccionar.

```bash
opciones=("Opción 1" "Opción 2" "Opción 3" "Salir")
```

2. **Configurar `PS3`**: Esta variable define el mensaje que se mostrará al usuario antes de que seleccione una opción.

```bash
PS3="Selecciona una opción: "
```

3. **Usar `select`**: Este bucle presenta las opciones del vector y permite al usuario elegir una. El número ingresado se almacena en la variable especial `$REPLY`, y el texto seleccionado se asigna a la variable definida en `select` (`opcion` en este caso).

4. **Usar `case-esac`**: Evalúa el valor de `$REPLY` para determinar qué acción realizar según la opción seleccionada.

5. **Opción de salir**: Al seleccionar "Salir" (opción 4), se utiliza `break` para terminar el bucle `select`.

### Ejecución esperada

Cuando se ejecuta el script, se muestra un menú como este:

```
1) Opción 1
2) Opción 2
3) Opción 3
4) Salir
Selecciona una opción:
```

Dependiendo de la opción elegida, el script responde con el mensaje correspondiente y continúa mostrando el menú hasta que se selecciona "Salir".

## Ejercicios

1. Escribe un script que solicite al usuario un número y verifique si es positivo, negativo o igual a cero. Utiliza `if-elif-else` para resolverlo.

2. Escribe un script que solicite al usuario un nombre de archivo y compruebe si existe o no. Si el archivo existe, verifica si es un archivo regular o un directorio.

3. Escribe un script que solicite al usuario una cadena y determine si está vacía o contiene texto.

4. Escribe un script que muestre un menú con las siguientes opciones: ver el contenido de un directorio, crear un archivo y salir. Usa `case-esac` para manejar las opciones.

5. Escribe un script que solicite al usuario un número y determine si está dentro del rango 10-20 (inclusive). Utiliza operadores lógicos (`&&`).

6. Escribe un script que solicite al usuario una contraseña y verifique si coincide con una predefinida.

7. Escribe un script que solicite al usuario dos números y determine cuál es mayor o si son iguales.
