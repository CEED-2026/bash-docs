# Conditions evaluation

In Bash, conditions are evaluated using the `test` command or the equivalent `[ ]` form. These tools allow you to verify conditions and control the execution flow in scripts.

## Using `$?`

The `$?` symbol is used in Bash to get the exit code of the last executed command. This exit code is:

- `0` if the command executed successfully or the condition is true.
- `1` (or any other non-zero value) if the command failed or the condition is false.

## Using `test` and `[]`

The following code executed directly in the terminal checks if `10` is greater than `20` using `test`. Since the condition is false, the exit code will be `1`:

```bash
test 10 -gt 20; echo $? # Expected output: 1
```

The following code executed directly in the terminal evaluates if `10` is greater than `20` using `[ ]`. Since the condition is false, it will also return `1`:

```bash
[ 10 -gt 20 ]; echo $? # Expected output: 1
```

This example uses `test` together with the `&&` and `||` operators to print "True" if the condition is true, or "False" if it is false:

```bash
test 10 -gt 20 && echo True || echo False # Expected output: False
```

Here, `[ ]` is used with the same operators to check if `10` is less than `20` and return the corresponding message:

```bash
[ 10 -lt 20 ] && echo True || echo False # Expected output: True
```

## Common operators and evaluations

### Number comparison

Operator | Description | Example
---------|-------------|--------
`-eq` | Equal to | `[ 5 -eq 5 ]`
`-ne` | Not equal to | `[ 5 -ne 3 ]`
`-gt` | Greater than | `[ 5 -gt 3 ]`
`-lt` | Less than | `[ 3 -lt 5 ]`
`-ge` | Greater than or equal to | `[ 5 -ge 5 ]`
`-le` | Less than or equal to | `[ 3 -le 5 ]`

### String comparison

Operator | Description | Example
---------|-------------|--------
`=` | Equal to | `[ "a" = "a" ]`
`!=` | Not equal to | `[ "a" != "b" ]`
`-z` | Empty string | `[ -z "" ]`
`-n` | Non-empty string | `[ -n "hello" ]`

### File evaluation

Operator | Description | Example
---------|-------------|--------
`-e` | Exists | `[ -e file ]`
`-f` | Is a regular file | `[ -f file ]`
`-d` | Is a directory | `[ -d directory ]`
`-r` | Has read permissions | `[ -r file ]`
`-w` | Has write permissions | `[ -w file ]`
`-x` | Has execute permissions | `[ -x file ]`
