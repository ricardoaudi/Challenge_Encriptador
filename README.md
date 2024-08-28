# Challenge_Encriptador
Este proyecto es una aplicación web simple que permite a los usuarios encriptar y desencriptar texto utilizando el algoritmo de encriptación AES (Advanced Encryption Standard). La aplicación es completamente responsiva, adaptándose a diferentes tamaños de pantalla, incluyendo monitores, tablets y celulares.

Características
Encriptación y Desencriptación: Utiliza el algoritmo AES para asegurar la información ingresada por el usuario.
Compatibilidad: El diseño de la página es responsivo y se adapta a pantallas de diferentes tamaños.
Copiar al Portapapeles: Los usuarios pueden copiar el texto encriptado o desencriptado al portapapeles con un solo clic.
Limpieza de Campos: Un botón adicional permite limpiar todos los campos de texto y restablecer la interfaz a su estado inicial.
Interfaz Intuitiva: La interfaz es sencilla y proporciona instrucciones claras al usuario.
Estructura del Proyecto
El proyecto está compuesto por los siguientes archivos:

1. index.html
Este archivo contiene la estructura HTML de la página web. Incluye elementos clave como:

Un área de texto para ingresar el texto a encriptar o desencriptar.
Botones para realizar la encriptación, desencriptación, limpiar los campos y copiar el texto.
Un área de texto para mostrar el resultado (encriptado o desencriptado).
Un pie de página que acredita la creación del proyecto.

2. style.css
Este archivo define los estilos visuales de la página, incluyendo:

Diseño Responsivo: Utiliza media queries para ajustar el diseño según el tamaño de la pantalla (monitor, tablet, celular).
Estilos de Botones: Define la apariencia de los botones y el efecto de resaltado en rojo cuando se pasa el cursor sobre ellos.
Estructura y Layout: Establece la disposición de los elementos en la pantalla, asegurando que se vean bien en diferentes dispositivos.

3. script.js
Este archivo maneja la lógica de la aplicación, incluyendo:

Generación de Clave AES: Genera una clave AES utilizando la Web Crypto API.
Encriptación y Desencriptación: Funciones para encriptar y desencriptar texto usando AES-GCM.
Copia al Portapapeles: Función que permite copiar el resultado al portapapeles.
Limpieza de Campos: Función que limpia todos los campos de texto y restablece la interfaz.
Método de Encriptación
El proyecto utiliza AES (Advanced Encryption Standard) con el modo GCM (Galois/Counter Mode) para encriptar y desencriptar el texto. AES es un estándar de encriptación moderno y seguro, ampliamente utilizado en aplicaciones que requieren un alto nivel de seguridad.

Beneficios de AES:
Seguridad: AES es uno de los métodos de encriptación más seguros actualmente disponibles.
Rendimiento: AES es eficiente y rápido, lo que lo hace ideal para aplicaciones web.
Compatibilidad: La Web Crypto API proporciona una implementación nativa de AES, lo que garantiza la seguridad y compatibilidad en navegadores modernos.
