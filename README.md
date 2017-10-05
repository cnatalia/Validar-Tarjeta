# Validar-Tarjeta

Tenemos que pedir al usuario ingresar un número de tarjeta de crédito y verificar a través del algoritmo de Luhn si el número ingresado pertenece a un número válido, en el caso de que así sea se desplegará un mensaje, "Tarjeta de Crédito Válida", en caso contrario se le pedirá al usuario volver a ingresar un número de tarjeta con el siguiente mensaje, "Número de Tarjeta inválido, vuelva a introducir un número".

Reto:

Usar el algoritmo de Luhn para verificar número de tarjeta.

Requerimientos técnicos:

El proyecto fué realizado de la siguiente manera:

- Declarar una variable llamada ingreso solicitando al usuario por medio de un prompt que introduzca su número de tarjeta.
- Declarar una variable vacia llamada numeroTarjeta la cuál va almacenar los números ingresados.
- Declarar una variable llamada respuesta la cual va a almacenar los número en orden inverso para poder aplicar el algoritmo de   Luhn.
- Hacer un for para que recorra los números dentro de la variable respuesta.
- Por medio del método .push mandamos los números de la variable respuesta a la variable numeroTarjeta.
- Por medio en una función llamada isValidCard aplicaremos el algoritmo de Luhn.
- Aplicar el algoritmo de Luhn:
    - Crear una variable que almacene la suma.
    - Crear una variable llamada multiplicación que almacene los números que ocupan las posiciones pares, estos números se les       debe multiplicar por 2.
    - Hacer un if preguntando si el doble de ese número es mayor o igual a 10.
    - Si se cumple debemos sumar los dígitos del resultado y almacenarlos en la variable llamada suma.
    - Al valor de la variable suma debemos obtener el residuo de la división entre 10 (suma % 10 = 0):
    - Si el resultado es igual a 0, es una tarjeta válida.
    - Al usuario se le mostrará un mensaje a través de un prompt señalando "Tarjeta Válida".
    - De lo contrario retornar un mensaje pidiendo le al usuario volver a ingresar su número de tarjeta, "Ingrese nuevamente su       número de tarjeta.
  

