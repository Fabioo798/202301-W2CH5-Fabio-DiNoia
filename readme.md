## Challenge 5 week 2

las reglas:

Una célula viva sigue las siguientes reglas:
Si tiene menos de 2 células contiguas vivas, muere por "soledad".
Si tiene más de 3 células contiguas vivas, muere por "sobrepoblación".
Si tiene 2 o 3 células contiguas vivas, sobrevive.
Una célula muerta sigue la siguiente regla: Permanece muerta hasta que tiene exactamente 3 células contiguas vivas, momento en el que "nace".
Si quieres probar como funciona para hacerte una idea, puedes probar una versión funcional en esta página.

## Requisitos

Si es posible, y puedes testear, usa TS
Debe de estar testado con Jest.
Debe utilizarse SonarCloud para ir comprobando la calidad del código.
Se utilizará Husky para manejar los git-hooks, utilizando los archivos adjuntos.
Debe utilizarse GitActions el workflow adjunto.
Debe protegerse main en GitHub para que todo lo que se mergee pase por pull-request y que el workflow se cumpla.
En el caso de llegar a HTML/CSS. 4.1. Se utilizará BEM/SASS. 4.2. Se debe desplegar a Netlify.


## Milestones

Programa funcional en JS. Las células se quedan pegadas la pared.
Programa 100% testeado.
3.a Añadir HTML/CSS. 3.b Modificar JS para que: a. Las células sigan avanzando al llegar a la pared y desaparezcan. b. Las células salgan por un lado de la cuadrícula y aparezcan por el otro.


### developing challange:

-initial commit with : editorconfig, .gitignore, readme.md, package,json

-create configuration branch and install eslint, huskies, jest, connect with sonarcloud;

-create js files and develope functions, with relative tests.

-check the complete functions of the program.

#### Problems;

-i was unable to test the setInterval() timer with jest.

 -jest runs all the time the entire game when i want to test all the functions;