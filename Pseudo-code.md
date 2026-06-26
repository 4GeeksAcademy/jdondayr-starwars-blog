# Blog de star wars
Hay que construir un blog de Star Wars con funcionalidad de favoritos.

# Pseudo-code
Hay que crear 2 tipos de vistas:
- Una principal (Data) en la que se muestren todos los elementos. [ √ ]
	- Crear listas donde pondré elementos de personajes, vehículos y planetas [ √ ]
	- Crear funciones de llamada a la API y que modifiquen los arrays [ √ ]
	- Pintar los elementos en las listas [ √ ]

- Una single de cada elemento. [ √ ]
	- Hacer un componente single para cada tipo de elemento (personajes, vehículos y planetas) [ √ ]
	- Hacer que cada URL apunte a cada elemento con useParams [ √ ]
	- Establecerlas en el botón de +info de cada elemento [ √ ]
	- Pintar información en cada elemento [ √ ]
		- Nombre [ √ ]
		- Descripción [ √ ]
		- Datos en la parte de abajo [ √ ]

Componentes que haría:
- Se mantienen:
	- Navbar [ √ ]
		- Icono [ √ ]
		- Título [ √ ]
		- Botón que despliega lista de favoritos [ √ ]
		- Funcionalidad botón favoritos [ √ ]
- No se mantienen:
	- Principal [ √ ]
	- Individual [ √ ]

Favorites feature [ √ ]
- Crear array en el store [ √ ]
- Click en el botón de añadir a favoritos del elemento introduce en el array [ √ ]
- Pintar los elementos favoritos como hijos del botón desplegable [ √ ]
- Crear una función para eliminarlos de favoritos [ √ ]
- Añadir botón para eliminarlos en cada elemento con la función [ √ ]

Estilar con Bootstrap [ √ ]