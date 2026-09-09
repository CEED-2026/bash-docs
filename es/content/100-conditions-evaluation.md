# Evaluación de condiciones

En Bash, las condiciones se evalúan utilizando el comando `test` o la forma equivalente `[ ]`. Estas herramientas permiten verificar condiciones y controlar el flujo de ejecución en los scripts.

## Uso de `$?`

El símbolo `$?` se utiliza en Bash para obtener el código de salida del último comando ejecutado. Este código de salida es:

- `0` si el comando se ejecutó con éxito o la condición es verdadera.
- `1` (o cualquier otro valor distinto de cero) si el comando falló o la condición es falsa.

## Uso de `test` y `[]`

El siguiente código ejecutado directamente en el terminal, verifica si `10` es mayor que `20` usando `test`. Como la condición es falsa, el código de salida será `1`:

```bash
test 10 -gt 20; echo $? # Salida esperada: 1
```

El siguiente código ejecutado directamente en el terminal, evalúa si `10` es mayor que `20` utilizando `[ ]`. Al ser falsa la condición, también devolverá `1`:

```bash
[ 10 -gt 20 ]; echo $? # Salida esperada: 1
```

Este ejemplo utiliza `test` junto con los operadores `&&` y `||` para imprimir "Verdadero" si la condición es cierta, o "Falso" si es falsa:

```bash
test 10 -gt 20 && echo Verdadero || echo Falso # Salida esperada: Falso
```

Aquí se utiliza `[ ]` con los mismos operadores para verificar si `10` es menor que `20` y devolver el mensaje correspondiente:

```bash
[ 10 -lt 20 ] && echo Verdadero || echo Falso # Salida esperada: Verdadero
```

## Operadores y evaluaciones comunes

### Comparación de números

Operador | Descripción | Ejemplo
---------|-------------|--------
`-eq` | Igual a | `[ 5 -eq 5 ]`
`-ne` | No igual a | `[ 5 -ne 3 ]`
`-gt` | Mayor que | `[ 5 -gt 3 ]`
`-lt` | Menor que | `[ 3 -lt 5 ]`
`-ge` | Mayor o igual que | `[ 5 -ge 5 ]`
`-le` | Menor o igual que | `[ 3 -le 5 ]`

### Comparación de cadenas

Operador | Descripción | Ejemplo
---------|-------------|--------
`=` | Igual a | `[ "a" = "a" ]`
`!=` | No igual a | `[ "a" != "b" ]`
`-z` | Cadena vacía | `[ -z "" ]`
`-n` | Cadena no vacía | `[ -n "hola" ]`

### Evaluación de archivos

Operador | Descripción | Ejemplo
---------|-------------|--------
`-e` | Existe | `[ -e archivo ]`
`-f` | Es un archivo regular | `[ -f archivo ]`
`-d` | Es un directorio | `[ -d directorio ]`
`-r` | Tiene permisos de lectura | `[ -r archivo ]`
`-w` | Tiene permisos de escritura | `[ -w archivo ]`
`-x` | Tiene permisos de ejecución | `[ -x archivo ]`
