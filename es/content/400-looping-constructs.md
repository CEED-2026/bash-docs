# Bucles

En Bash, los bucles permiten repetir una serie de comandos o instrucciones un número determinado de veces, o hasta que se cumpla o deje de cumplirse una condición.

## Bucle `for`

El bucle `for` se utiliza para iterar sobre una lista de elementos. Por cada iteración, se asigna un valor diferente de la lista a una variable.

### Sintaxis básica

```bash
for variable in lista; do
  # Comandos a ejecutar
done
```

### Ejemplo:

```bash
#!/bin/bash

for i in 1 2 3 4 5; do
  echo "Número: $i"
done
```

Este ejemplo imprimirá los números del 1 al 5.

### Diversas formas de representar la lista o conjunto

1. **Lista explícita**: Se pueden enumerar explícitamente los elementos dentro del bucle.

```bash
for elemento in manzana naranja plátano; do
  echo "Fruta: $elemento"
done
```

2. **Rangos numéricos**: Se utiliza la expansión `{inicio..fin}` para generar un rango de números.

```bash
for i in {1..10}; do
  echo "Número: $i"
done
```

3. **Rangos con incremento**: Es posible especificar un incremento añadiendo `{inicio..fin..incremento}`.

```bash
for i in {0..20..5}; do
  echo "Número: $i"
done
```

4. **Lista generada por un comando**: Se pueden usar comandos para generar dinámicamente la lista de elementos.

```bash
for palabra in $(echo "Hola Mundo en Bash"); do
  echo "Palabra: $palabra"
done
```

```bash
for archivo in $(ls *.txt); do
  echo "Archivo: $archivo"
done
```

5. **Elementos de un array**: Si se utiliza un array, el bucle puede iterar sobre sus elementos.

```bash
frutas=(manzana naranja plátano)
for fruta in "${frutas[@]}"; do
  echo "Fruta: $fruta"
done
```

## Doble paréntesis en bucle `for`

Bash también permite usar una sintaxis de doble paréntesis para manejar iteraciones numéricas de manera similar a lenguajes como C.

### Ejemplo:

```bash
#!/bin/bash

for ((i = 1; i <= 5; i++)); do
  echo "Número: $i"
done
```

Este enfoque es útil para iteraciones controladas numéricamente y es más adecuado para cálculos o pasos definidos directamente en el bucle.

## Bucle `while`

El bucle `while` ejecuta un bloque de código mientras una condición sea verdadera.

### Sintaxis básica

```bash
while [ condición ]; do
  # Comandos a ejecutar
done
```

### Ejemplo:

```bash
#!/bin/bash

contador=1

while [ $contador -le 5 ]; do
  echo "Contador: $contador"
  contador=$((contador + 1))
done
```

Este ejemplo incrementa un contador desde 1 hasta 5, imprimiendo su valor en cada iteración.

## Bucle `until`

El bucle `until` es similar al `while`, pero ejecuta el bloque de código mientras la condición sea falsa.

### Sintaxis básica

```bash
until [ condición ]; do
  # Comandos a ejecutar
done
```

### Ejemplo:

```bash
#!/bin/bash

contador=1

until [ $contador -gt 5 ]; do
  echo "Contador: $contador"
  contador=$((contador + 1))
done
```

Este ejemplo funciona igual que el bucle `while`, pero con la condición negada.

## Bucle infinito

Los bucles infinitos se utilizan cuando se desea que un bloque de código se repita indefinidamente hasta que ocurra un evento o se utilice un comando como `break` para detenerlo.

### Ejemplo con `while`:

```bash
#!/bin/bash

while true; do
  echo "Esto es un bucle infinito."
  sleep 1
done
```

Este bucle imprimirá el mensaje cada segundo indefinidamente.

### Ejemplo con `for`:

```bash
#!/bin/bash

for (( ; ; )); do
  echo "Esto es un bucle infinito usando 'for'."
  sleep 1
done
```

Ambos enfoques pueden interrumpirse manualmente con `CTRL+C` o programáticamente usando `break`.

## Control de bucles

### `break`

El comando `break` termina un bucle antes de que se complete su ejecución.

### Ejemplo:

```bash
#!/bin/bash

for i in 1 2 3 4 5; do
  if [ $i -eq 3 ]; then
    break
  fi
  echo "Número: $i"
done
```

Este ejemplo imprimirá los números 1 y 2, pero se detendrá cuando `i` sea igual a 3.

### `continue`

El comando `continue` salta a la siguiente iteración del bucle, omitiendo las instrucciones restantes de la iteración actual.

### Ejemplo:

```bash
#!/bin/bash

for i in 1 2 3 4 5; do
  if [ $i -eq 3 ]; then
    continue
  fi
  echo "Número: $i"
done
```

Este ejemplo imprimirá los números 1, 2, 4 y 5, omitiendo el 3.

## Ejercicios

1. Escribe un script que utilice un bucle `for` para imprimir los números del 1 al 10.

2. Escribe un script que utilice un bucle `while` para calcular la suma de los números del 1 al 100.

3. Escribe un script que utilice un bucle `until` para contar hacia atrás desde 10 hasta 1 e imprimir cada número.

4. Escribe un script que implemente un bucle infinito con `while` y se detenga si el usuario introduce "salir".

5. Escribe un script que utilice un bucle `for` con sintaxis de doble paréntesis para imprimir los números pares entre 1 y 20.

6. Escribe un script que implemente un bucle infinito con `for` y utilice `break` para detenerse después de cinco iteraciones.

7. Escribe un script que utilice un bucle `for` para iterar sobre todos los archivos en el directorio actual e imprimir sus nombres.

8. Escribe un script que utilice un bucle `while` para leer línea por línea un archivo de texto, cuyo nombre será introducido por el usuario, y mostrar cada línea por pantalla.

9. Escribe un script que utilice un bucle `for` para iterar sobre los resultados de un comando, como `ls`, y mostrar cada elemento encontrado.

10. Escribe un script que utilice un bucle `until` para comprobar continuamente si un archivo específico existe. El nombre del archivo será solicitado al usuario, deteniéndose cuando sea encontrado.

11. Escribe un script que implemente un bucle infinito con `while`. Solicita al usuario un directorio y lista su contenido hasta que escriba "salir".

12. Escribe un script que utilice un bucle `for` para iterar sobre una lista de palabras. Solicita al usuario las palabras a buscar y el directorio donde buscar, utilizando `grep` para cada palabra.
