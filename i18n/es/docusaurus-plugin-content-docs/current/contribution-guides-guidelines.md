---
id: contribution-guides-guidelines
title: Guía de Directrices
description: "Descubre cómo crear documentación consistente y de alta calidad que mejora la experiencia y claridad del lector → Aprende más ahora"
sidebar_label: Directrices
---

![Guías Banner](https://screensaver01.zap-hosting.com/index.php/s/4aaqq3zctZFW4JJ/preview)

Para asegurar que el contenido en nuestros ZAP-Docs siempre mantenga una calidad y estilo consistentes, hemos creado una serie de directrices para usar al crear o editar contenido para nuestra documentación. Debes **seguir** nuestras directrices al pie de la letra para garantizar que tu sugerencia y pull request final se procesen rápidamente. Más importante aún, esto asegurará que nuestros lectores tengan una experiencia de alta calidad, consistente y mejor mientras leen y siguen las guías.

Nuestras directrices para contribuir con guías están divididas en las siguientes secciones:

- Estructura
- Estilo
- Formato
- Terminología

Recomendamos revisar estas secciones al menos una vez antes de proceder a escribir cualquier contenido. También es un buen lugar para consultar si tienes dudas sobre cómo abordar algo durante el proceso de creación.

## Estructura

Todas nuestras guías en ZAP-Docs siguen una estructura relativamente consistente que comienza con una breve introducción junto con cualquier requisito previo o pasos de preparación, seguida por el contenido principal y una corta conclusión.

La estructura puede alterarse ocasionalmente dependiendo del tipo de guía producida. Esto puede discutirse con el equipo de ZAP-Docs dentro de tu sugerencia inicial. Puedes ver cómo utilizar encabezados en la sección de headers, se hace mediante Markdown tradicional.

La estructura que normalmente esperamos ver tendría los siguientes encabezados:

- **Título de la página** (H1) - Esto se establece mediante el metadato `title` en la parte superior de la página.
- **Introducción** (H2) - Breves 1-2 oraciones que explican el tema de la guía y, lo más importante, qué busca lograr la guía.
- **Preparación** (H2) - Este encabezado es **opcional**. Solo es necesario si hay ciertos requisitos previos o pasos de preparación que deben realizarse antes de que un lector pueda seguir la guía. Por ejemplo, aquí podrías referenciar nuestra guía de [Acceso Inicial SSH](vserver-linux-ssh.md) si el usuario debe iniciar sesión en su servidor primero. O puedes presentar cualquier requisito de software y/o hardware necesario. O puedes proporcionar instrucciones rápidas sobre cómo preparar algún software, como un firewall. Recomendamos navegar por nuestro [sitio web de ZAP-Docs](https://zap-hosting.com/guides) para ver si hay guías que cubran estos pasos y, de ser así, enlazarlas.
- **Tema Principal** (H2) - Esta es tu primera sección principal de la guía. En muchos casos, probablemente será **Instalación**, seguida de varias subsecciones para cada parte del proceso. Pero no siempre será así, por ejemplo, guías informativas pueden tener un tema principal diferente.
- Opcional: **Subtema 1** (H3)
- Opcional: **Subtema 2** (H3)
- ...
- Opcional: **Otro Tema** (H2)
- **Conclusión** (H2) - Como parte final de la guía, debes cerrar la guía en 1-3 oraciones explicando qué ha logrado el lector y proporcionar una referencia a nuestro Equipo de Soporte si el lector sigue teniendo problemas.

:::info Uso de Sub-Encabezados (H3 & H4)
Se recomienda usar encabezados H3 para crear subsecciones dentro de las secciones principales H2 para organizar mejor bloques grandes de contenido en secciones ordenadas. Un ejemplo se puede ver en la sección **Tema Principal** arriba.

También puedes usar encabezados H4. Son útiles si quieres crear otra subsección sin mostrarla en el desglose de la sección a la derecha de la guía. También son útiles si necesitas dividir aún más una sección H3 en secciones más pequeñas.

Si usas subencabezados, normalmente tiene sentido tener al menos dos o más subencabezados dentro del encabezado padre, de lo contrario no suele tener sentido tener solo un subencabezado dentro de un encabezado principal.
:::

En el futuro, añadiremos plantillas con Markdown pre-preparado para ti, que serán un buen punto de partida para crear nuevas páginas. Esto se añadirá pronto.

### Títulos

Los títulos deben ser concisos y reflejar claramente el objetivo principal de la guía. Considera qué logrará el lector al final, como completar una instalación, configurar un servicio o entender un tema técnico específico. El resultado debe ser reconocible inmediatamente desde el título.

Cada título debe comenzar con el prefijo apropiado de la categoría del producto. Este prefijo debe coincidir con la sección en la que la guía está ubicada dentro de la barra lateral. Revisar guías existentes en la misma categoría ayuda a asegurar convenciones de nombres consistentes.

Por ejemplo, una guía relacionada con el producto VPS debería seguir una estructura como: `VPS: Configuración SteamCMD Linux`.

Si una guía está escrita de forma general y aplica igual a varios productos, como una instalación de servicio o servidor de juegos que funciona tanto en VPS como en servidores dedicados, el nombre del producto no debe incluirse en el título. En esos casos, la guía es intencionalmente independiente del producto y por lo tanto no requiere un prefijo específico.

### Introducción

Las introducciones para tu guía deben ser relativamente cortas y directas, típicamente de 1-2 oraciones. En el contenido debes describir brevemente el área temática y, lo más importante, explicar qué presentará la guía al lector, informándole del objetivo final.

Un ejemplo de introducción ideal para una guía relacionada con SteamCMD sería:

- **1ª Oración**: SteamCMD es una herramienta esencial necesaria para instalar servidores dedicados para una amplia variedad de juegos incluyendo Palworld, Enshrouded y más.
- **2ª Oración**: En esta guía, exploraremos el proceso de configuración inicial para instalar SteamCMD en tu servidor Linux. Usaremos Ubuntu en los ejemplos, pero el proceso debería ser muy similar para otras distribuciones.

Como se ve en el ejemplo, resume brevemente los temas relevantes de esta guía y presenta el objetivo general para el lector al seguirla.

### Preparación

La sección de preparación es útil para aclarar cualquier requisito previo necesario que el lector debe cumplir antes de poder seguir la guía. Esto puede ser requisitos de software o hardware, instrucciones para preparar algún software como un firewall o simplemente guiar al usuario para iniciar sesión en su servidor vía SSH o RDP.

Recomendamos encarecidamente navegar por nuestro [sitio web de ZAP-Docs](https://zap-hosting.com/guides) para buscar guías que puedan cubrir o relacionarse con los pasos de preparación que planeas incluir. Si existe una guía que cubre un tema, por ejemplo [Acceso Inicial SSH](vserver-linux-ssh.md), deberías enlazarla e informar al lector que la siga antes de continuar.

Requisitos comunes para guías incluyen:

- Software requerido (ej. Git, Node.js, Python, Docker)
- Tutoriales que ayuden al lector a obtener conocimientos básicos (ej. otra página de ZAP-Docs)
- Cuentas de usuario como APIs
- Configuraciones requeridas (ej. DNS/SSL)

Un ejemplo para una guía de Proxy Reverso sería:
```
Para configurar un proxy reverso necesitarás un servidor Linux para alojar tu servidor proxy y deberías conectarte a él. Usa nuestra guía de [Acceso Inicial SSH](vserver-linux-ssh.md) si necesitas ayuda con esto. También necesitarás acceso a un dominio que poseas. Para cada subdominio que planees usar, deberías crear un registro DNS `A` apuntando a la dirección IP de tu servidor Linux.
```

### Tema Principal

Ahora es momento de escribir la parte principal de tu guía. Puedes usar libremente encabezados H2, H3 y H4 para estructurar apropiadamente tu guía. Tiene sentido usar encabezados H2 para secciones grandes y dividirlas en subsecciones con H3 y/o H4.

En muchos casos, especialmente guías que cubren el proceso de configurar software, probablemente usarás un encabezado **Instalación** dividido en varias subsecciones H3. Si tienes problemas para definir una estructura correcta, no te preocupes, trabajaremos contigo durante la fase de sugerencia para planear una estructura bien equilibrada.

Dentro de cada sección, se recomienda añadir breves frases de entrada y cierre para que el lector sepa en todo momento qué ha hecho y qué hará a continuación. Por supuesto, esto no aplica para la última sección principal que no requiere necesariamente una frase de cierre, ya que naturalmente transiciona a la conclusión.

Un ejemplo de estas frases es:

- **Frase de entrada**: En esta sección, pasarás por el proceso de configuración para personalizar el software a tu gusto.
- **Frase de cierre**: Con la configuración preparada y el archivo guardado, pasa a la siguiente sección para configurar la cuenta de administrador y comenzar a usar el software.

Estas frases de transición proporcionan contexto importante que asegura que la guía fluya bien. Recuerda, siempre debes usar la segunda persona (ej. "Crearás") en lugar de la primera persona al escribir tu contenido y transiciones.

### Conclusión

Finalmente, la última sección es la conclusión de la guía. Esta sección debe cerrar la guía en 1-3 oraciones explicando qué ha logrado el lector y proporcionar referencias para lecturas adicionales o guías que puedan seguir para ampliar su conocimiento del tema.

Sería genial enlazar cualquier guía existente de ZAP-Docs aquí, especialmente si siguen naturalmente desde tu guía. También recomendamos proporcionar una referencia a nuestro Equipo de Soporte si el lector sigue teniendo problemas.

Un ejemplo de una gran conclusión es:
```
¡Ahora has configurado con éxito el software para que funcione en tu servidor Linux! Recomendamos explorar nuestras guías de servicios Linux en esta sección para instalar más servicios.

Para más preguntas o asistencia, no dudes en contactar a nuestro equipo de soporte, disponible a diario para ayudarte! 🙂
```

## Estilo

El estilo de escritura para los docs de ZAP-Hosting sigue nuestra filosofía de producir guías prácticas, accesibles y de alta calidad para apoyar una amplia gama de temas y lectores de cualquier nivel de experiencia.

### Técnico y correcto

Nuestros artículos buscan ser lo más técnicamente precisos y actualizados posible con la información más reciente de la industria. Esperamos que los artículos no solo permitan al usuario lograr el objetivo final de aprender, construir o configurar algo nuevo, sino también entender lo que han hecho durante el artículo. Cada paso que crees dentro de una guía debe tener un propósito claro y explicación, proporcionando opciones adicionales y/o flags cuando sea apropiado. Siempre debes mantener al lector informado sobre qué está haciendo y por qué realiza las acciones que forman parte de la guía.

Los escritores deben siempre revisar y probar sus guías para asegurar que todo sea técnicamente correcto y funcione como se espera antes de enviar un pull request. El equipo de docs de ZAP-Hosting leerá y probará tu guía cuando sea apropiado para asegurar que sea consistente y correcta o discutir mejoras si se detecta algún error.

:::tip
Siempre recomendamos a nuestros escritores pasar su contenido por una herramienta de corrección ortográfica para asegurar que la ortografía y gramática estén correctas antes de crear un pull request. Un sitio útil para esto es: https://languagetool.org/
:::

### Práctico y útil

Cuando un lector termine un artículo, debería haber aprendido, construido o configurado algo de principio a fin. Nuestras guías buscan apoyar lectores de cualquier experiencia, por lo que tus contribuciones deben explorar completamente el tema para asegurar que el lector se vuelva conocedor y/o haya logrado algo. Esto significa que como escritor debes cubrir tu tema a fondo mencionando todos los detalles necesarios incluyendo requisitos previos. Solo debes enviar a los lectores a sitios externos si no existe documentación sobre esto en ZAP-Docs o si es para que el usuario obtenga detalles adicionales que no son necesarios para tu artículo pero pueden ser beneficiosos para ampliar su conocimiento técnico. Los enlaces externos no deben redirigir a documentación de la competencia.

### Amigable, formal y completo

Esperamos que nuestra documentación sea moderna y amigable para hacerla accesible a cualquier lector, pero al mismo tiempo formal. A lo largo de tu guía, buscamos que el tono sea aceptable para todos los lectores, sin importar experiencia o barreras de idioma.

Como estas guías se enfocan principalmente en apoyar al lector para educarlo y permitirle alcanzar un resultado, esperamos que los escritores usen la segunda persona (ej. "Necesitas...") en lugar de la primera persona (ej. "Creo...") para mantener al lector involucrado y enfocar la atención en él.

Por último, todos los escritores deben seguir nuestro código de conducta para asegurar que nuestras guías sean inclusivas para cualquiera sin importar edad, etnia, identidad de género, nivel de experiencia, nacionalidad, religión, afiliación política, orientación sexual, estatus socioeconómico o elecciones tecnológicas. Debes evitar cualquier lenguaje potencialmente ofensivo y cualquier otro contenido que haga referencia a los temas mencionados.

## Formato

Nuestra documentación está formateada usando el lenguaje de marcado Markdown, que es ampliamente usado y relativamente sencillo. Revisa las secciones a continuación para entender qué usamos y cómo se usa.

:::tip
Para más ejemplos y explicaciones extensas de las características de Markdown, visita [Markdown Guide](https://www.markdownguide.org/cheat-sheet/) que ofrece más información.
:::

### Encabezados

Los encabezados son una de las opciones de formato más importantes para separar las páginas de forma comprensible y lógica. El título principal consiste en el encabezado H1, sin embargo, nunca deberías usarlo dentro del texto. En su lugar, debes usar el metadato `title` en la parte superior del archivo de la guía que se encarga de esto.

En nuestras guías, los encabezados H2 deben usarse para dividir la guía en sus secciones principales. Luego, los encabezados H3 deben usarse para dividir las secciones principales en subsecciones. Un ejemplo donde esto es apropiado es dividir una sección principal en varios pasos para facilitar seguir la guía. Por último, también existe la etiqueta H4 que se usa más raramente en nuestra documentación pero cumple la misma función de dividir en subsecciones, aunque no se mostrará específicamente en la estructura de la guía.

:::info
Si usas subencabezados (ej. encabezados H3 bajo encabezados H2 principales), asegúrate de que haya dos o más encabezados del mismo nivel dentro de esa sección, de lo contrario sería un uso incorrecto.
:::

Aquí un ejemplo rápido de cómo usar encabezados:

```
## Instalación
H2 - Sección Principal

### Descargando Archivos del Servidor de Juegos
H3 - Subsección de H2

#### Via SteamCMD
H4 - Subsección de H3

#### Manualmente vía GitHub
H4 - Subsección de H3

### Preparando la Configuración
H3 - Subsección de H2

### Iniciando el Servidor
H3 - Subsección de H2
```

### Markdown en línea

Usamos varios formatos en línea para mejorar la legibilidad de nuestras guías y adaptarnos a lectores con distintos niveles técnicos. Lee la sección para entender el uso de cada uno.

#### Texto en negrita

El uso principal de negrita es para enfatizar información. Ejemplos incluyen:

- Cambiar contexto entre pasos
- Nombres de host, credenciales y usuarios
- Terminología clave

Puedes usar doble asterisco fuera del texto objetivo para poner texto en negrita, por ejemplo, `**hola**` resulta en **hola**.

#### Cursiva

El uso principal de cursiva es para introducir nuevas palabras técnicas dentro de tu artículo. Por ejemplo, hoy configuraremos un *proxy reverso*.

Para usar cursiva, coloca un solo asterisco fuera del texto objetivo, por ejemplo, `*ZAP-Hosting - Más POTENCIA!*` resulta en *ZAP-Hosting - Más POTENCIA!*.

#### Código en línea

El formato de código en línea se usa principalmente para mostrar información técnica como URLs. Ejemplos incluyen:

- Nombres y rutas de archivos (ej. `C:/Usuario/[tu_nombre]/AppData....test.png`)
- URLs (ej. `https://zap-hosting.com`)
- Puertos (ej. `:30120`)
- Comandos (ej. `ipconfig`)
- Consultas SQL (ej. `SELECT * FROM servers`)
- Teclas y combinaciones (ej. `ENTER` o `CTRL + C`)

#### Tablas

Otra función útil de Markdown son las tablas. Son especialmente útiles para mostrar mucha información repetitiva, por ejemplo comandos, descripciones y usos disponibles en un juego. Ejemplo:

```
| Comando    | Descripción             | Uso                   |
| ---------- | ----------------------- | --------------------- |
| /help      | Envía comando de ayuda  | /help [categoría]     |
| /stop      | Detiene el servidor     | /stop [true/false]    |
```

#### Bloques de código

Otra herramienta muy útil son los bloques de código. Son especialmente útiles para guías que involucran comandos, scripts, salidas de terminal y más.

Para usar un bloque de código, usa ` ``` ` fuera del bloque de texto que quieres poner en bloque. También puedes indicar el lenguaje junto a las primeras tres comillas invertidas para formatear correctamente el lenguaje de programación. Ejemplo con JavaScript:

```js
function hello(name) {
    console.log(name)
}

var server = "ZAP-Hosting"
hello(server)
```

### Uso de Admoniciones

Las admoniciones se usan para resaltar información importante dentro de tu guía. Hay cinco tipos disponibles, cada uno con un propósito diferente.

Al usar admoniciones, siempre debe definirse un título claro y descriptivo. El título asegura que los lectores entiendan inmediatamente el contexto e importancia de la información resaltada sin necesidad de leer todo el texto primero.

La sintaxis general es idéntica para todos los tipos. Solo cambia la palabra clave según el propósito:

```
:::warning Título
	Tu contenido aquí.
:::
```

#### Nota

:::note Ejemplo: Información Adicional
Usa este tipo para información suplementaria que puede ayudar al lector pero no es esencial para completar la guía.
:::

#### Consejo

:::tip Ejemplo: Consejo de Optimización de Rendimiento
Usa este tipo para compartir consejos prácticos, mejores prácticas o mejoras de eficiencia basadas en experiencia.
:::

#### Información

:::info Ejemplo: Requisito o Detalle Importante
Usa este tipo para información contextual importante que el lector debe conocer antes o durante el proceso.
:::

#### Precaución

:::caution Ejemplo: Riesgo de Configuración
Usa este tipo para advertir al lector sobre posibles problemas o errores que podrían ocurrir al seguir la guía.
:::

#### Peligro

:::danger Ejemplo: Bug Conocido o Función Obsoleta
Usa este tipo para advertencias críticas. Incluye bugs conocidos, acciones irreversibles, riesgos de seguridad o funciones obsoletas que pueden causar problemas graves.
:::

### Capturas de pantalla

Las capturas de pantalla son un método extremadamente útil para guiar visualmente a los lectores y recomendamos usarlas cuando sea apropiado. Asegúrate de que todo el contenido visible en tus capturas esté en inglés, ya que nuestra documentación está escrita en inglés y las mismas capturas se usarán para otros idiomas que ofrecemos en los docs. Las capturas deben tener una resolución suficientemente grande para que todos los elementos sean legibles. Evita imágenes pequeñas o muy recortadas.

Puedes usar esta sintaxis para añadir una captura, reemplazando `your_url` con la URL de la imagen:

```
![](your_url)
```

Lo mejor es usar un sitio como Imgur para subir y usar la imagen, o alternativamente puedes arrastrarla directamente al campo de edición si usas GitHub, que la subirá automáticamente.

## Terminología

A lo largo de nuestra documentación, se usa una amplia gama de terminología clave. Esperamos que uses la ortografía localizada en inglés americano para asegurar consistencia en todos nuestros artículos. En esta sección, estandarizamos algunos términos que se usan comúnmente.

### Productos ZAP-Hosting

Al referenciar un producto ZAP-Hosting, siempre asegúrate de usar el nombre, ortografía y capitalización correctos. Puedes verificarlo visitando [el sitio web de ZAP-Hosting](https://zap-hosting.com) y viendo cómo se referencia el producto en la página correspondiente.

### Atributos definidos por el usuario

En la mayoría de las guías, se necesitarán opciones de configuración para elementos como usuarios, nombres de host, dominios, direcciones IP y URLs, donde el lector debe usar sus propios datos en lugar de nuestros marcadores.

Por defecto, siempre debes usar `[your_attribute]` para diferenciar entre elementos estáticos y únicos, donde `attribute` debe reemplazarse por el tipo de atributo. Por ejemplo, al mencionar una IP, debes poner `[your_server_ip]` en la guía o al mencionar una URL `http://[your_server_ip]:30120`.

Esto diferencia claramente los atributos que el lector debe cambiar según su configuración. También debes proporcionar una explicación o nota indicando qué atributos deben cambiarse cuando se mencionen por primera vez para asegurar que todo quede claro.

Usa `zaphosting` como nombre de host, usuario o nombre de base de datos por defecto.

### Software

Al mencionar software en tus guías, asegúrate de seguir la ortografía y capitalización correctas del nombre del software. Si el sitio web del software no es consistente con su capitalización, mantén la misma capitalización dentro de un artículo para mantener consistencia.

Debes enlazar al sitio oficial del software la primera vez que lo menciones, siempre que exista un sitio oficial.