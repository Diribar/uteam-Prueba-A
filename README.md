PROYECTO A

1. La prueba que nos pidieron consta de dos partes:
	- La parte visual en React. Como sólo tengo conceptos básicos en ese entorno de trabajo, opté por desarrollarlo en una tecnología alternativa que conozco mejor, HTML y CSS. Por supuesto, estoy abierto al aprendizaje de React, y me gustaría hacerlo también.
	- La programación vía API. Eso está realizado en su totalidad.
	- El código de programación es Node.js más JavaScript.

2. Para ejecutar esta aplicación, se debe:
	- Tener instalado Node.js
	- Instalar las dependencias de node usadas en esta aplicación. Eso se realiza con el comendo: npm install
	- Ejecutar la aplicación. Eso se realiza con el comando: npm start
	- En el navegador web, usar el siguiente url: localhost. La aplicación redirige a la vista de Comics Propios

3. La aplicación consta de dos vistas:
	- /alta-de-comics, donde se pueden agregar comics del proveedor 'Marvel' al catálogo propio.
		- El ícono de agregar desaparece cuando se agrega, para evitar duplicar el alta
		- La vista tarda en aparecer, porque el proveedor de las APIs (Marvel), demora en brindar la información.
		- Cada vista es por un máximo de 20 registros. Se puede pasar al lote siguiente o anterior con los íconos de flecha, que hay al final del listado. El lote figura en el url.
	- /comics-propios, donde se pueden eliminar o editar registros del catálogo propio; están ordenados por su título

4. Se pasa de una vista a la otra con los íconos que hay abajo de los listados

5. Particularidades:
	- Sólo se guardan datos relevantes en el archivo json. Los campos en los que las API no tienen un valor, no se guardan y la vista los asume como 's/d' (sin datos).
	- Los resultados CRUD se ven impactados en el archivo \auxiliar\comics.json
