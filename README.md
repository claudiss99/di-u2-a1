# DI UNIDAD 2, ACTIVIDAD 1
# Ejercicio 1: separando componentes aún más
Actualmente, Gallery.js exporta tanto Profile como Gallery, lo cual es un poco confuso.

Mueve el componente Profile a su propio Profile.js, y luego cambia el componente Home (page.js) para que renderice tanto Profile como Gallery uno detrás del otro.

Puedes usar o bien un export por defecto o bien un export con nombre para Profile, ¡pero asegúrate de usar la sintaxis de import correspondiente tanto en App.js como en Gallery.js! 

# Ejercicio 2: convierte algo de HTML a JSX
El archivo HTML biografia.html se pegó en un componente, pero no es JSX válido. Arréglalo creando el archivo Bio.js