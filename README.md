Amigo Secreto - Aplicación Web
Descripción
Amigo Secreto es una aplicación web interactiva que permite organizar sorteos de amigo secreto de manera rápida y sencilla. Los usuarios pueden agregar nombres de participantes a una lista y realizar un sorteo aleatorio para seleccionar un ganador.
Características
•	Interfaz intuitiva: Diseño limpio y moderno con una experiencia de usuario fluida
•	Validación de entrada: Previene nombres duplicados y campos vacíos
•	Sorteo aleatorio: Selección justa y aleatoria de participantes
•	Diseño responsive: Se adapta a diferentes tamaños de pantalla
•	Feedback visual: Mensajes claros para guiar al usuario
Tecnologías Utilizadas
•	HTML5: Estructura semántica de la aplicación
•	CSS3: Estilos modernos con variables CSS personalizadas
•	JavaScript: Lógica de la aplicación y manipulación del DOM
•	Google Fonts: Tipografías Merriweather e Inter
Estructura del Proyecto
amigo-secreto/
│
├── index.html          # Página principal
├── style.css          # Estilos de la aplicación
├── app.js            # Lógica JavaScript
├── README.md         # Documentación
└── assets/           # Recursos multimedia
    ├── amigo-secreto.png
    └── play_circle_outline.png
Instalación y Uso
Prerrequisitos
•	Navegador web moderno (Chrome, Firefox, Safari, Edge)
•	Editor de código (opcional, para modificaciones)
Pasos para ejecutar
1.	Clona o descarga el repositorio
2.	git clone https://github.com/LauVilasenor/final_amigoSecreto.git
3.	Navega al directorio del proyecto
4.	cd amigo-secreto
5.	Abre el archivo index.html
o	Doble clic en el archivo index.html
o	O usa Live Server en VS Code
o	O abre con tu navegador preferido
Cómo Usar la Aplicación
1.	Agregar participantes:
o	Escribe el nombre en el campo de entrada
o	Haz clic en el botón "Añadir" o presiona Enter
o	El nombre aparecerá en la lista de participantes
2.	Realizar el sorteo:
o	Una vez agregados todos los participantes
o	Haz clic en el botón "Sortear amigo"
o	El ganador se mostrará en verde debajo de la lista
3.	Validaciones:
o	No se permiten nombres vacíos
o	No se permiten nombres duplicados
o	Debe haber al menos un participante para sortear
Personalización
Colores
Los colores se pueden personalizar modificando las variables CSS en style.css:
:root {
    --color-primary: #4B69FD;      /* Azul principal */
    --color-secondary: #FFF9EB;    /* Crema de fondo */
    --color-tertiary: #C4C4C4;     /* Gris botón */
    --color-button: #fe652b;       /* Naranja botón sortear */
    --color-text: #444444;         /* Texto oscuro */
}
Fuentes
Las fuentes se pueden cambiar modificando los links de Google Fonts en index.html y las referencias en style.css.
Solución de Problemas Comunes
El botón "Sortear amigo" no funciona
•	Verifica que hay al menos un nombre en la lista
•	Asegúrate de que el archivo app.js está correctamente vinculado
•	Revisa la consola del navegador (F12) para ver errores
Los estilos no se aplican
•	Verifica que el archivo style.css está en la ruta correcta
•	Limpia la caché del navegador (Ctrl+F5)
Las imágenes no se muestran
•	Asegúrate de que la carpeta assets/ contiene las imágenes necesarias
•	Verifica las rutas en el HTML
Funcionalidades Futuras
•	[ ] Opción para eliminar participantes de la lista
•	[ ] Historial de sorteos realizados
•	[ ] Animación durante el sorteo
•	[ ] Modo oscuro
•	[ ] Exportar lista de participantes
•	[ ] Integración con redes sociales para compartir resultados
•	[ ] Sonidos al agregar participantes y realizar sorteo
Contribuciones
Las contribuciones son bienvenidas. Para contribuir:
1.	Fork el proyecto
2.	Crea una rama para tu feature (git checkout -b feature/AmazingFeature)
3.	Commit tus cambios (git commit -m 'Add some AmazingFeature')
4.	Push a la rama (git push origin feature/AmazingFeature)
5.	Abre un Pull Request
Licencia
Este proyecto está bajo la Licencia MIT - ver el archivo LICENSE para más detalles.
Autor
Tu Nombre
•	GitHub: LauVilasenor 
•	LinkedIn: www.linkedin.com/in/laura-delgado-villaseñor-03b2531a0


