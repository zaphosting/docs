---
id: contribution-blogs-guidelines
title: Guía para Blogs
description: "Descubre cómo crear posts de blog de alta calidad y consistentes que enganchen a los lectores y mejoren tus habilidades de escritura → Aprende más ahora"
sidebar_label: Guía
---

![Blogs Banner](https://screensaver01.zap-hosting.com/index.php/s/ysxLZ26K3dSRLJQ/preview)

Para asegurar que todos los posts del Blog de ZAP-Hosting mantengan una calidad y estilo consistentes, hemos creado una serie de pautas que debes seguir al crear contenido para nuestro Programa de Contribución de Blogs. Debes seguir nuestras pautas al pie de la letra para que tus sugerencias y borradores posteriores se procesen rápidamente. Más importante aún, esto garantizará que nuestros lectores tengan una experiencia mejor y más consistente de alta calidad al leer nuestros blogs.

Nuestras pautas para contribuciones de blogs se dividen en algunas secciones principales, que son:

- Estructura
- Estilo
- Formato
- [Terminología](#terminología)

## Estructura

Los posts de blog dentro de nuestro programa de contribución deben seguir una estructura relativamente consistente, generando interés en el lector y proporcionando información y noticias. El Equipo de Contribuciones de ZAP trabajará contigo para asegurar que tu estructura sea adecuada al crear una sugerencia de blog.

- **Título de la página** (H1)
- **Introducción** (H2) 
- **Preparación** (H2)
- **Tema principal** (H2)
- Opcional: **Subtema 1** (H3)
- Opcional: **Subtema 2** (H3)
- ...
- Opcional: **Otro tema** (H2)
- **Conclusión** (H2)

:::info Uso de Subtítulos (H3 & H4)
Se recomienda usar encabezados H3 para crear subsecciones dentro de las secciones principales H2 y así organizar mejor bloques grandes de contenido. Un ejemplo se ve en la sección **Tema principal** arriba.

Si usas subtítulos, normalmente tiene sentido tener al menos dos o más subtítulos dentro del encabezado padre, de lo contrario no suele tener sentido tener solo un subtítulo dentro de un encabezado principal.
:::

:::info
Ten en cuenta que lo anterior es una referencia aproximada. El cuerpo principal de tu post puede tener encabezados diferentes según lo que sea apropiado para tu contenido, pero todos los posts deben tener consistentemente un título, introducción y conclusión que enmarquen el contenido principal.
:::

### Títulos

El título de tu post debe ser corto, claro y llamativo para captar la atención del lector. Debe indicar exactamente de qué trata el post, por ejemplo, si es una noticia o consejos y trucos. Un ejemplo de buen título sería: **Top 10 Scripts de Policía para FiveM**.

### Introducción

Las introducciones deben ser relativamente cortas y directas, típicamente de 1-2 oraciones. En el contenido debes describir brevemente el tema y, lo más importante, explicar qué presentará el post al lector, informándole del objetivo final.

Un ejemplo ideal de introducción para un post sobre SteamCMD sería:

- **1ª oración**: SteamCMD es una herramienta esencial necesaria para instalar servidores dedicados para una gran variedad de juegos como Palworld, Enshrouded y más.
- **2ª oración**: En este post exploraremos el proceso de configuración inicial para instalar SteamCMD en tu servidor Linux. Usaremos Ubuntu en los ejemplos, pero el proceso es muy similar en otras distribuciones.

Como ves en el ejemplo, resume brevemente los temas relevantes y presenta el objetivo general para el lector.

### Preparación

La sección de preparación es útil para aclarar cualquier requisito previo que el lector debe cumplir antes de seguir el post. Esto puede incluir requisitos de software o hardware, instrucciones para preparar algún software como un firewall o simplemente guiar al usuario para que inicie sesión en su servidor vía SSH o RDP.

Recomendamos revisar nuestro [sitio ZAP-Docs](https://zap-hosting.com/guides) para buscar guías que cubran o estén relacionadas con los pasos de preparación que planeas incluir. Si existe una guía sobre un tema, por ejemplo [Acceso Inicial SSH](vserver-linux-ssh.md), deberías enlazarla e indicar al lector que la siga antes de continuar.

Requisitos comunes para posts incluyen:

- Software necesario (ej. Git, Node.js, Python, Docker)
- Tutoriales que ayuden al lector a obtener conocimientos básicos (ej. otra página de ZAP-Docs)
- Cuentas de usuario como APIs
- Configuraciones requeridas (ej. DNS/SSL)

Un ejemplo para un post sobre Reverse Proxy sería:
```
Para configurar un reverse proxy necesitarás un servidor Linux para alojar tu servidor proxy y deberías conectarte a él. Usa nuestra guía [Acceso Inicial SSH](vserver-linux-ssh.md) si necesitas ayuda con esto. También necesitarás acceso a un dominio que poseas. Para cada subdominio que planees usar, deberías crear un registro DNS `A` apuntando a la dirección IP de tu servidor Linux.
```

### Tema principal

Ahora es momento de escribir la parte principal de tu post. Recomendamos dividir el post en varias secciones para ayudar al lector a mantenerse enganchado con el contenido. No hay reglas estrictas sobre cómo dividirlas, pero como regla general, intenta dividir grandes cantidades de contenido en varios encabezados. El Equipo de Contribuciones de ZAP te ayudará con esto durante el proceso.

Si tu post ofrece información paso a paso o tutoriales, tiene sentido incluir el número del paso y una breve descripción dentro del encabezado principal, por ejemplo **Paso 1 - Crear la carpeta**. Debes describir brevemente qué está haciendo el lector en ese paso para dar un objetivo general en la primera oración. Entre pasos, intenta crear introducciones breves y frases de transición para que el lector sepa qué ha hecho hasta ahora y qué viene después. Estas transiciones son importantes para el contexto. Evita repeticiones y usa variedad de términos para no reiterar los pasos.

### Conclusión

Finalmente, la última sección es la conclusión del post. Esta sección debe cerrar la guía en 1-3 oraciones explicando qué ha logrado, aprendido o qué conclusión se puede sacar. 

También tiene sentido proporcionar referencias para lecturas adicionales u otros posts o guías que el usuario pueda seguir para ampliar su conocimiento. Debes enlazar cualquier guía o post de ZAP-Docs existente aquí, especialmente si encajan naturalmente con tu guía.

## Estilo

El estilo de escritura para la documentación de ZAP-Hosting sigue nuestra filosofía de producir posts de blog de alta calidad, prácticos y accesibles para apoyar una amplia variedad de temas y lectores de cualquier nivel de experiencia.

### Técnico y correcto

Nuestros posts buscan ser lo más técnicamente precisos y actualizados posible con la información más reciente de la industria. En cada post esperamos ofrecer información bien escrita y de alta calidad sobre nuevos temas y tecnologías, así como tutoriales que se enfoquen en que el lector aprenda. Si tu post ofrece información paso a paso o tutorial, cada paso debe tener un propósito claro y explicación, ofreciendo opciones adicionales y/o flags cuando sea apropiado.

Los escritores deben siempre revisar y probar sus posts para asegurar que todo sea técnicamente correcto y funcione como se espera antes de enviar borradores. El Equipo de Contribuciones de ZAP leerá y probará tu post cuando sea apropiado para asegurar consistencia y corrección factual o discutir mejoras si detectan errores.

:::tip
Siempre recomendamos a nuestros escritores pasar su contenido por un corrector ortográfico para asegurar que la ortografía y gramática estén correctas antes de enviar un borrador. Una web útil para esto es: https://languagetool.org/
:::

### Práctico y útil

Cuando un lector termine de leer un post, debería haber aprendido, construido o configurado algo de principio a fin. Nuestros posts buscan apoyar lectores de cualquier experiencia, por lo que tu contenido debe explorar completamente el tema para que el lector se vuelva conocedor y/o haya logrado algo. Como escritor, esto significa cubrir tu tema a fondo, proporcionando todos los detalles necesarios incluyendo requisitos previos cuando corresponda. Solo debes enviar a los lectores a sitios externos si no hay documentación existente en ZAP Docs o si es para que el lector obtenga detalles adicionales que no son necesarios para tu artículo pero pueden ayudar a ampliar su conocimiento técnico. Los enlaces externos no deben redirigir a documentación de la competencia.

### Amigable, formal y completo

Esperamos que nuestra documentación sea moderna y amigable para que sea accesible para cualquier lector, pero al mismo tiempo mantenga formalidad. A lo largo de tu post, debes buscar un tono aceptable para todos los lectores, sin importar experiencia o barreras de idioma.

Como estos posts se enfocan principalmente en apoyar al lector para educarlo y permitirle alcanzar un resultado, esperamos que los escritores usen la segunda persona (ej. "Necesitas...") en lugar de la primera persona (ej. "Yo creo...") para mantener al lector enganchado y enfocado.

Por último, todos los escritores deben seguir nuestro código de conducta para asegurar que los posts sean aceptables para cualquiera sin importar edad, etnia, identidad de género, nivel de experiencia, nacionalidad, religión, afiliación política, orientación sexual, estatus socioeconómico o elecciones tecnológicas. Debes evitar lenguaje potencialmente ofensivo y cualquier contenido relacionado con los temas mencionados.

## Formato

Nuestro Blog está formateado usando el lenguaje de marcado Markdown, que es muy popular. Usa las secciones a continuación para entender qué elementos usamos y cómo pueden usarse en tus posts.

Permitimos que los usuarios usen cualquier herramienta para crear contenido, sin embargo, **recomendamos mucho** usar la herramienta **[StackEdit](https://stackedit.io/app#)** para escribir tu contenido manteniendo toda la funcionalidad genial de Markdown. Luego puedes exportar directamente a Google Drive o cualquier app de compartir archivos y obtener un enlace para compartir con nosotros.

:::tip
Para más ejemplos y explicaciones extensas de Markdown, visita [Markdown Guide](https://www.markdownguide.org/cheat-sheet/) que ofrece más información.
:::

### Encabezados

Los encabezados son una de las opciones de formato más importantes para separar posts de forma lógica y clara. El título principal es el encabezado H1.

En nuestros blogs, los encabezados H2 se usan para dividir el post en secciones principales. Luego, los H3 para dividir esas secciones en subsecciones. Un ejemplo sería dividir una sección principal en varios pasos para facilitar seguir el post. Finalmente, está el H4 que se usa menos pero sirve para dividir subsecciones.

:::info
Si usas subencabezados (ej. H3 bajo H2), asegúrate de que haya dos o más encabezados del mismo nivel en esa sección, de lo contrario es un uso incorrecto.
:::

Ejemplo rápido de uso de encabezados:

```
## Instalación
H2 - Sección principal

### Descargando archivos del servidor de juegos
H3 - Subsección de H2

#### Via SteamCMD
H4 - Subsección de H3

#### Manualmente vía GitHub
H4 - Subsección de H3

### Preparando configuración
H3 - Subsección de H2

### Iniciando servidor
H3 - Subsección de H2
```

### Markdown en línea

Usamos varios formatos en línea para mejorar la legibilidad y adaptarnos a lectores con distintos niveles técnicos. Lee la sección para entender el uso de cada uno.

#### Texto en negrita

Se usa principalmente para enfatizar información. Ejemplos:

- Cambiar contexto entre pasos
- Nombres de host, credenciales y usuarios
- Terminología clave

Usa doble asterisco alrededor del texto, por ejemplo, `**hola**` da **hola**.

#### Cursiva

Se usa para introducir nuevas palabras técnicas en el artículo. Ejemplo: hoy configuraremos un *bot de voz*.

Usa un solo asterisco, por ejemplo, `*ZAP-Hosting - Más PODER!*` da *ZAP-Hosting - Más PODER!*.

#### Código en línea

Se usa para mostrar información técnica como URLs, comandos, rutas, etc. Ejemplos:

- Nombres y rutas de archivos (ej. `C:/User/[tu_nombre]/AppData....test.png`)
- URLs (ej. `https://zap-hosting.com`)
- Puertos (ej. `:30120`)
- Comandos (ej. `ipconfig`)
- Consultas SQL (ej. `SELECT * FROM servers`)
- Teclas y combinaciones (ej. `ENTER` o `CTRL + C`)

#### Tablas

Muy útiles para mostrar mucha información repetitiva, como comandos, descripciones y usos en un juego. Ejemplo:

```
| Comando    | Descripción             | Uso                  |
| ---------- | ----------------------- | -------------------- |
| /help      | Envía comando de ayuda  | /help [categoría]    |
| /stop      | Detiene el servidor     | /stop [true/false]   |
```

#### Bloques de código

Muy útiles para posts con comandos, scripts, salidas de terminal, etc.

Para usar un bloque de código, pon ``` antes y después del texto. Puedes indicar el lenguaje para mejor formato, ej.:

```js
function hello(name) {
    console.log(name)
}

var server = "ZAP-Hosting"
hello(server)
```

### Capturas de pantalla

Son súper útiles para guiar visualmente a los lectores y recomendamos usarlas cuando sea apropiado.

Usa esta sintaxis para añadir una captura, reemplazando `your_url` con la URL de la imagen:
```
![](your_url)
```

Lo mejor es usar un hosting de imágenes online como [Imgur](https://imgur.com/) para subir y usar la imagen en tu markdown.

## Terminología

En nuestros posts se usa mucha terminología clave. Esperamos que uses ortografía en inglés americano para mantener consistencia. Aquí estandarizamos algunos términos comunes.

### Productos ZAP-Hosting

Al mencionar un producto ZAP-Hosting, asegúrate de usar el nombre, ortografía y mayúsculas correctas. Puedes verificarlo en [el sitio web de ZAP-Hosting](https://zap-hosting.com) en la página del producto.

### Atributos definidos por el usuario

En algunos posts, opciones de configuración como usuarios, nombres de host, dominios, direcciones IP y URLs deben ser reemplazadas por el lector con sus propios datos.

Por defecto, usa `[tu_atributo]` para diferenciar elementos estáticos de los únicos, donde `[atributo]` es el tipo. Por ejemplo, para una IP usa `[tu_ip_servidor]` o para una URL `http://[tu_ip_servidor]:30120`. Esto deja claro qué debe cambiar el lector según su configuración. Debes explicar o aclarar qué atributos deben cambiarse cuando se mencionen por primera vez.

Usa `zaphosting` como nombre de host, usuario o base de datos por defecto.

### Software

Al mencionar software, asegúrate de usar la ortografía y mayúsculas correctas. Si el sitio oficial no es consistente, mantén la misma capitalización dentro del artículo para coherencia.

Debes enlazar al sitio oficial del software la primera vez que lo menciones, si está disponible.