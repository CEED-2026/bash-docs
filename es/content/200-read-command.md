# Interacción con usuarios

En Bash, es posible solicitar datos al usuario durante la ejecución de un script o un comando. Esto se logra mediante el comando `read`, que permite leer datos ingresados desde la línea de comandos y almacenarlos en variables para su posterior uso.

## Uso básico del comando `read`

El comando `read` captura el texto ingresado por el usuario y lo almacena en una variable.

### Ejemplo básico

```bash
#!/bin/bash

# Solicitar el nombre al usuario
echo "Por favor, introduce tu nombre:"
read nombre

# Mostrar el mensaje con el nombre ingresado
echo "Hola, $nombre." # Salida esperada: Hola, [nombre ingresado].
```

### Leer múltiples valores

Es posible capturar varios valores ingresados por el usuario separándolos por espacios. Cada valor se asigna a una variable.

```bash
#!/bin/bash

# Solicitar dos datos al usuario
echo "Introduce tu ciudad y país separados por un espacio:"
read ciudad pais

# Mostrar los valores ingresados
echo "Ciudad: $ciudad, País: $pais." # Salida esperada: Ciudad: [ciudad], País: [país].
```

### Proveer un mensaje corto con `read`

El flag `-p` permite incluir un mensaje directamente con el comando `read`:

```bash
#!/bin/bash

# Leer con un mensaje directo
read -p "Introduce tu edad: " edad

# Mostrar el resultado
echo "Tienes $edad años." # Salida esperada: Tienes [edad] años.
```

## Leer datos de forma oculta

El flag `-s` permite ocultar la entrada del usuario. Es útil para contraseñas u otra información sensible.

```bash
#!/bin/bash

# Solicitar contraseña de forma oculta
read -s -p "Introduce tu contraseña: " password
echo
echo "La contraseña ha sido guardada." # Salida esperada: La contraseña ha sido guardada.
```

## Definir un tiempo límite para la entrada

El flag `-t` permite especificar un tiempo máximo (en segundos) para que el usuario introduzca los datos. Si no lo hace dentro de ese tiempo, el comando `read` continuará con el script.

```bash
#!/bin/bash

# Leer con tiempo límite
read -t 10 -p "Introduce tu nombre en los próximos 10 segundos: " nombre

# Verificar si se ingresó un valor
if [ -z "$nombre" ]; then
  echo "No se introdujo ningún nombre." # Salida esperada: No se introdujo ningún nombre.
else
  echo "Hola, $nombre." # Salida esperada: Hola, [nombre ingresado].
fi
```

## Restringir el número de caracteres a leer

El flag `-n` permite limitar el número de caracteres que se pueden introducir.

```bash
#!/bin/bash

# Leer con límite de caracteres
read -n 5 -p "Introduce una clave de 5 caracteres: " clave
echo
echo "Clave ingresada: $clave" # Salida esperada: Clave ingresada: [clave].
```

Estos métodos permiten personalizar la interacción del usuario con el script, haciéndolo más dinámico y funcional.
