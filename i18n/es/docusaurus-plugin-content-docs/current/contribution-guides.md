---
id: contribution-guides
title: Proceso de Guías
description: "Descubre cómo contribuir con guías valiosas y originales a ZAP-Docs y ayuda a educar a los usuarios con contenido claro y práctico → Aprende más ahora"
sidebar_label: Proceso de Guías
---

![Guías Banner](https://screensaver01.zap-hosting.com/index.php/s/4aaqq3zctZFW4JJ/preview)

Aprende más sobre el proceso para contribuir a nuestros ZAP-Docs en esta página. El proceso está escrito en orden cronológico a lo largo de esta página, por lo que recomendamos comenzar desde aquí.

## Paso 1: Sugerir Contenido

La primera parte del proceso implica crear un issue de sugerencia a través de nuestro repositorio de GitHub. Debes proporcionarnos detalles sobre los cambios y mejoras que planeas realizar.

Por favor, asegúrate de que tu idea no sea un duplicado de alguna guía o sugerencia existente y que realmente creas que será útil para principiantes o usuarios más avanzados. Puedes ver las sugerencias existentes visitando la [Página de Issues](https://github.com/zaphosting/docs/issues?q=is%3Aissue).

:::tip
Recomendamos revisar nuestras [Directrices](contribution-guides-guidelines.md) para entender el estilo de contenido y documentación que buscamos.
:::

### ¿Qué temas buscamos?

En nuestras guías, buscamos una amplia variedad de guías prácticas y de alta calidad que cubran productos, servicios y software open-source disponible a través de ZAP-Hosting o relacionado con cualquier servicio que ofrecemos. Si necesitas ideas o inspiración, revisa nuestras páginas en los ZAP-Docs para familiarizarte con nuestro estilo de escritura y el tipo de contenido que publicamos.

Como se mencionó en la introducción, todo el contenido producido debe ser original para cumplir con las leyes de copyright. Está estrictamente prohibido el uso no autorizado de herramientas de IA/generativas y/o cualquier otra propiedad intelectual. Nuestras guías buscan proporcionar información de alta calidad a través de una serie de pasos para asegurar que el lector entienda qué está haciendo y cómo hacerlo, con el objetivo final de educar y ofrecer la solución.

#### Lista de Guías Solicitadas

Tenemos una lista útil de grandes sugerencias a continuación, para nuevas guías que te podrían interesar escribir. Algunos temas y sugerencias pueden incluso tener un bono extra de recompensa. Puedes acceder a la [lista manualmente aquí](https://docs.google.com/document/d/13R321FP6Yo3TMQZ07vMARQFlX6n_Or6RIrLpU7IsMfs/edit?usp=sharing).

<iframe width="800" height="750" src="https://docs.google.com/document/d/e/2PACX-1vRACoNJMjk3rcWyo6LDt8WCvtqB17JpdjsPW3YHpLaZJgfPxGlt4pDEnD1ezOwGW1eljWZYPSyfgrb3/pub?embedded=true"></iframe>
<br></br>

:::note
Ten en cuenta que estas son solo ideas útiles, **no tienes** que escribir estrictamente sobre ellas, tus sugerencias pueden ser creativas como se mencionó antes.
:::

### Enviar sugerencia

Ahora que estás seguro de que tu sugerencia es adecuada para nuestra documentación, dirígete a nuestro [repositorio ZAP Docs en GitHub](https://github.com/zaphosting/docs) y abre un issue usando la plantilla **Contribution Suggestion**. Sigue la plantilla proporcionada y asegúrate de completar todos los detalles necesarios. También se te pedirá que confirmes que aceptas nuestros Términos y Condiciones para el Programa de Contribución, que puedes consultar en [Contribution Terms](contribution-terms.md).

:::caution
¡Asegúrate de ingresar correctamente tu ID de ZAP para recibir tu recompensa en la cuenta correcta!
:::

Una vez que hayas enviado tu sugerencia, nuestro objetivo es responderte en un plazo de 3-5 días. Recibirás una respuesta directamente en tu issue de GitHub.

:::tip
**¿Tienes algún problema?** Únete a nuestro [Servidor de Discord de ZAP-Hosting](https://zap-hosting.com/discord) donde nosotros y la comunidad ZAP estaremos encantados de ayudarte con cualquier duda. Alternativamente, contáctanos vía un [Ticket en nuestra web](https://zap-hosting.com/en/customer/support/) y menciona "Programa de Contribución - Guías" en tu mensaje para que sea dirigido al Equipo de Contribuciones de ZAP-Hosting.
:::

En nuestra respuesta, te daremos feedback adicional o detalles que queramos ajustar respecto a tu sugerencia. Si hay algún problema, te lo comunicaremos directamente en tu issue de GitHub.

## Paso 2: Escribir la Guía

Al realizar cualquier adición o cambio en nuestra documentación, asegúrate de seguir nuestras [Directrices](contribution-guides-guidelines.md) al pie de la letra para garantizar consistencia y un producto final de alta calidad. En esta subsección profundizaremos en las mejores prácticas y el flujo de trabajo óptimo para crear contenido nuevo, así como para modificar contenido existente. Si eres nuevo usando GitHub, usa estos breves tutoriales para entender la forma más sencilla de editar o crear contenido nuevo para nuestros ZAP-Docs.

:::note
Asegúrate de haber creado una sugerencia en nuestro [Repositorio de GitHub](https://github.com/zaphosting/docs) y que esta haya sido aprobada por un miembro del Equipo de Contribuciones de ZAP antes de empezar a trabajar en una nueva guía o cambios. No podremos garantizar una recompensa si no has seguido el proceso y no ha sido aprobado.
:::

**Requisitos previos:**
- [Cuenta de GitHub](https://github.com/)

El primer paso es crear tu propio fork del repositorio ZAP-Docs en GitHub. Puedes hacerlo yendo al [repositorio ZAP Docs en GitHub](https://github.com/zaphosting/docs) y pulsando el botón **Fork** en la parte superior de la página.

![](https://screensaver01.zap-hosting.com/index.php/s/3AGoSTE7dGTsdz7/preview)

Debes nombrar el repositorio basado en la sugerencia que fue aceptada y marcar la opción `Copy the master branch only`. Luego, pulsa el botón de crear y espera unos segundos hasta que el fork se haya creado con éxito.

Con tu fork listo, puedes proceder a la siguiente sección para completar tu contribución. Hay dos métodos principales para producir contenido: directamente a través de la web de GitHub o clonando el repositorio localmente. La ventaja del primero es que es mucho más amigable para el usuario, mientras que la ventaja del segundo es que puedes probar Docusaurus localmente para ver los cambios en vivo.

:::tip
Para principiantes o quienes no tienen mucha experiencia con Git, recomendamos usar **Método 1** para escribir tu contenido, ya que es más amigable, rápido y todo se hace desde el navegador vía la web de GitHub. Este método es mucho más sencillo porque no requiere configuración local.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Métodos para Crear Guías

<Tabs>
<TabItem value="direct" label="Método 1: Directamente vía la web de GitHub" default>

La forma más fácil y recomendada de crear contenido es hacerlo a través de la web de GitHub. En esta sección te mostraremos cómo crear una nueva guía y editar una guía existente desde la web de GitHub.

Para comenzar, ve al fork que creaste en el paso anterior. Una vez en tu fork de ZAP Docs, puedes acceder a todas las guías de documentación a través de la carpeta **docs**.

![](https://screensaver01.zap-hosting.com/index.php/s/dqptZFrSTrBBHAJ/preview)

Los archivos de documentación tienen una convención de nombres sencilla, donde la primera palabra se refiere al tipo de guía, típicamente un juego, producto o sección, y las palabras siguientes se refieren a la sección específica. Recomendamos revisar nuestro sitio actual en vivo [ZAP-Docs Website](https://zap-hosting.com/guides) para navegar y encontrar el área correcta donde debería ir una guía. Por ejemplo, `dedicated-windows.md` se refiere a la sección de Servidor Dedicado, específicamente para el sistema operativo Windows.

Ahora deberás abrir un archivo de guía existente o crear uno nuevo, dependiendo de si tu contribución es para actualizar una guía o crear una nueva. Usa la pestaña adecuada abajo para obtener las instrucciones relevantes, ya que una guía nueva requiere preparación extra del archivo.

<Tabs>
<TabItem value="direct_new" label="Crear un archivo de guía nuevo" default>

En este ejemplo, nuestra sugerencia fue crear una nueva guía para el juego Rust, específicamente sobre comandos que el juego ofrece. Al revisar el sitio ZAP-Docs y/o el repositorio, vemos que ya existe una sección **Rust** bajo la categoría de servidores de juegos. Basándonos en la convención de nombres mencionada y las guías existentes, podemos inferir que la nueva guía debería llamarse `rust-commands.md`.

Para crear un archivo nuevo, ve al [Repositorio de GitHub](https://github.com/zaphosting/docs), abre la carpeta **docs** y en el lado derecho de la pantalla selecciona **Add File**. En el menú, pulsa la opción **Create new file** que abrirá una nueva pestaña.

![](https://screensaver01.zap-hosting.com/index.php/s/xgL3QF9HzJnwARA/preview)

En la parte superior de la página, dentro del directorio de la ruta del archivo, puedes establecer el nombre del archivo. Como establecimos antes, será `rust-commands.md` en nuestro ejemplo.

:::info
Asegúrate de añadir la extensión `.md` ya que todas las guías están en formato Markdown.
:::

Ahora la siguiente parte implica añadir metadatos clave al inicio del archivo. La forma más fácil es abrir otro archivo como `rust-plugins.md` y copiar las etiquetas de metadatos superiores. Luego simplemente ajustas cada valor para que coincida con tu nueva guía, siendo el más importante el campo `id` que **debe** coincidir con el nombre del archivo (sin `.md`).

Usando nuestro ejemplo, el archivo debería contener lo siguiente:
```
---
id: rust-commands
title: "Rust: Comandos de Admin"
description: "Información sobre comandos de Admin para Rust desde ZAP-Hosting"
sidebar_label: Comandos de Admin
services:
  - gameserver
---
```

:::note
Revisamos los metadatos durante nuestro proceso de revisión, así que no te preocupes si tienes problemas con esto y simplemente continúa.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/2CJFHoc5LeD4YSn/preview)

</TabItem>

<TabItem value="direct_existing" label="Editar un archivo de guía existente" default>

En este caso, deberás abrir el archivo objetivo que quieres editar. En este ejemplo, usaremos `dedicated-linux-satisfactory.md` que puedes encontrar en la carpeta `/docs` del repositorio. Una vez abierto el archivo, verás una vista previa básica de cómo se ve basado en Markdown.

Ve a la parte superior derecha del archivo y pulsa el icono de editar (lápiz). Esto abrirá una nueva pestaña donde podrás editar el archivo directamente.

![](https://screensaver01.zap-hosting.com/index.php/s/SZTsAikipzCZcg3/preview)

</TabItem>
</Tabs>

#### Continuar: Creando contenido

Ahora que has preparado y abierto tu archivo, puedes proceder a escribir el contenido acordado en tu sugerencia. Recomendamos guardar o hacer commits regularmente para evitar perder tu trabajo.

:::tip Mantén tu trabajo seguro
Mientras escribes tu contenido, asegúrate de hacer commits o guardar copias regularmente ya que el editor de GitHub no tiene función de auto-guardado, por lo que si cierras la pestaña o pasa algo, podrías perder progreso.

Recomendamos **mucho** usar la herramienta Markdown **[StackEdit](https://stackedit.io/app#)** para escribir tu contenido, ya que te permite guardar progreso localmente e incluso sincronizarlo con tu drive o cuentas varias si quieres. Cuando termines, simplemente copia y pega el contenido en el archivo en la web de GitHub y haz commit.
:::

Puedes usar el botón **Preview** en la parte superior de la ventana de edición para cambiar al modo vista previa que mostrará una vista básica y volver a la edición con el botón **Edit**.

![](https://screensaver01.zap-hosting.com/index.php/s/4YcQo6q3iAAGYkZ/preview)

:::note Elementos Docusaurus
Ten en cuenta que algunos elementos específicos de Docusaurus como admoniciones (etiquetas como `:::note`, `:::tip`, etc.) o pestañas pueden no mostrarse correctamente al previsualizar en GitHub. Esto es porque no forman parte del Markdown tradicional, pero sí se mostrarán correctamente durante pruebas locales y en producción.
:::

:::info Sigue nuestras Directrices
Consulta las [Directrices](contribution-guides-guidelines.md) para todo lo relacionado con Markdown, estructura, terminología y más.
:::

Una vez que hayas realizado tus cambios, usa el botón **Commit changes...** que mostrará un prompt.

![](https://screensaver01.zap-hosting.com/index.php/s/2iQCZzzAHsHS2rt/preview)

Introduce un mensaje de commit útil que explique lo que hiciste y una descripción extendida si es necesario. Finalmente, haz commit. Esto lo hará en tu fork de los docs. Ahora puedes ir a la sección **Enviando Contenido** para crear un Pull Request y enviar el contenido a nuestro repositorio principal ZAP-Docs.

</TabItem>

<TabItem value="local" label="Método 2: Localmente vía IDE (clonando git)">

Puede que prefieras escribir contenido localmente vía un IDE o editor como Visual Studio Code. En esta sección te mostraremos cómo crear una guía nueva y editar una existente localmente a través de un editor.

**Requisitos previos:**
- IDE de tu elección, en este ejemplo usaremos [Visual Studio Code](https://code.visualstudio.com/)
- [GitHub Desktop](https://desktop.github.com/) (o cualquier otro con funcionalidad Git)

La primera parte del proceso es clonar tu repositorio fork. La forma más sencilla y amigable es usando GitHub Desktop seleccionando **Add**, luego **Clone repository** y eligiendo tu repositorio fork. También puedes hacerlo directamente desde el IDE si tiene funcionalidad Git.

![](https://screensaver01.zap-hosting.com/index.php/s/g8AwEcGa6mBrQ75/preview)

Luego, abre la carpeta del repositorio en Visual Studio Code. En la pestaña **Explorer** a la izquierda deberías ver todas las carpetas dentro del repositorio.

Los archivos de documentación tienen una convención de nombres sencilla, donde la primera palabra se refiere al tipo de guía, típicamente un juego, producto o sección, y las palabras siguientes se refieren a la sección específica. Recomendamos revisar nuestro sitio actual en vivo [ZAP-Docs Website](https://zap-hosting.com/guides) para navegar y encontrar el área correcta donde debería ir una guía. Por ejemplo, `dedicated-windows.md` se refiere a la sección de Servidor Dedicado, específicamente para el sistema operativo Windows.

Ahora deberás abrir un archivo de guía existente o crear uno nuevo, dependiendo de si tu contribución es para actualizar una guía o crear una nueva. Usa la pestaña adecuada abajo para obtener las instrucciones relevantes, ya que una guía nueva requiere preparación extra del archivo.

<Tabs>
<TabItem value="local_new" label="Crear un archivo de guía nuevo" default>

En este ejemplo, nuestra sugerencia fue crear una nueva guía para el juego Rust, específicamente sobre comandos que el juego ofrece. Al revisar el sitio ZAP-Docs y/o el repositorio, vemos que ya existe una sección **Rust** bajo la categoría de servidores de juegos. Basándonos en la convención de nombres mencionada y las guías existentes, podemos inferir que la nueva guía debería llamarse `rust-commands.md`.

Abre la carpeta `/docs` en tu IDE y crea un archivo nuevo con el nombre apropiado para tu nueva guía.

:::info
Asegúrate de añadir la extensión `.md` ya que todas las guías están en formato Markdown.
:::

Ahora la siguiente parte implica añadir metadatos clave al inicio del archivo. La forma más fácil es abrir otro archivo como `rust-plugins.md` y copiar las etiquetas de metadatos superiores. Luego simplemente ajustas cada valor para que coincida con tu nueva guía, siendo el más importante el campo `id` que **debe** coincidir con el nombre del archivo (sin `.md`).

Usando nuestro ejemplo, el archivo debería contener lo siguiente:
```
---
id: rust-commands
title: "Rust: Comandos de Admin"
description: "Información sobre comandos de Admin para Rust desde ZAP-Hosting"
sidebar_label: Comandos de Admin
services:
  - gameserver
---
```

:::note
Revisamos los metadatos durante nuestro proceso de revisión, así que no te preocupes si tienes problemas con esto y simplemente continúa.
:::

El paso final para asegurar que tu nueva página aparezca en la barra lateral de Docusaurus es añadirla al archivo `sidebar.js` en la sección correcta. Como la sección **Rust** ya existe, puedes buscarla usando `CTRL+F` y buscando rust.

Debajo del último ítem, crea una nueva línea y escribe el nombre de tu archivo, en nuestro ejemplo, `rust-commands`. Si no existe una sección apropiada, puedes seguir el formato de otras secciones para añadir una nueva.

![](https://screensaver01.zap-hosting.com/index.php/s/TwKjWmCofG5Rs8f/preview)

:::note
Asegúrate de añadir una coma (`,`) en la línea anterior a tu nueva línea para que la sintaxis sea correcta.
:::

</TabItem>

<TabItem value="local_existing" label="Editar un archivo de guía existente" default>

Editar un archivo existente es muy sencillo, ya que no tendrás que configurar toda la estructura del archivo.

Simplemente abre el archivo de guía objetivo que quieres editar dentro de la carpeta `/docs` y ya estás listo para proceder y hacer los cambios que hayas sugerido y que hayan sido aceptados.

</TabItem>
</Tabs>

#### Continuar: Creando Contenido

Ahora que tu archivo está listo, puedes proceder a escribir el contenido acordado en tu sugerencia. Recomendamos guardar o hacer commits regularmente para evitar perder tu trabajo.

Puedes usar el atajo `CTRL+SHIFT+V` o pulsar el icono de vista previa en la esquina superior derecha del editor para dividir la vista en el IDE y ver los cambios Markdown en vivo mientras editas.

:::note Elementos Docusaurus
Ten en cuenta que algunos elementos específicos de Docusaurus como admoniciones (etiquetas como `:::note`, `:::tip`, etc.) o pestañas pueden no mostrarse correctamente al previsualizar en GitHub. Esto es porque no forman parte del Markdown tradicional, pero sí se mostrarán correctamente durante pruebas locales y en producción.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/cXgQEswNsbpGMsR/preview)

:::info Sigue nuestras Directrices
Consulta las [Directrices](contribution-guides-guidelines.md) para todo lo relacionado con Markdown, estructura, terminología y más.
:::

Una vez que termines con los cambios en tu guía, el último paso de todo el proceso es hacer push de un commit a tu repositorio fork y enviar un Pull Request. Puedes crear un commit a través de GitHub Desktop (o cualquier otra aplicación Git) añadiendo un título y descripción apropiados y haciendo push con el botón superior.

![](https://screensaver01.zap-hosting.com/index.php/s/tFdrLknnXn62sZc/preview)

Ahora puedes ir a la sección **Enviando Contenido** para crear un Pull Request y enviar el contenido a nuestro repositorio ZAP-Docs.

:::tip
Recomendamos también leer la sección opcional **Probar build localmente**, ya que puedes combinar esta sección con pruebas locales para crear un flujo de trabajo óptimo donde los cambios se actualizan en tu build local sobre la marcha, lo cual es muy útil. Sin embargo, no es obligatorio.
:::

</TabItem>
</Tabs>

### Opcional: Probar build localmente

Antes de crear el Pull Request final, es buena práctica construir y probar localmente para asegurarte de que todo funciona correctamente con los cambios que hiciste. Recomendamos probar tus cambios localmente para que tu Pull Request se procese rápido. Sin embargo, no es obligatorio y puedes pasar a la siguiente sección si quieres.

:::tip
Esto **NO** es obligatorio, ya que automáticamente corremos un build cuando envías un Pull Request. Pero puede ser útil para depurar y probar en vivo localmente.
:::

:::note
Si seguiste el tutorial para crear cambios localmente, puedes saltarte el primer paso de clonar el repositorio porque ya deberías tenerlo.
:::

**Requisitos previos:**
- [Node.js v16.14 o superior](https://nodejs.org/en)
- [GitHub Desktop](https://desktop.github.com/) o [Git](https://git-scm.com/)

La primera parte del proceso es clonar tu repositorio fork. La forma más sencilla y amigable es usando GitHub Desktop seleccionando **Add**, luego **Clone repository** y eligiendo tu repositorio fork.

También puedes usar Git para esto. Crea una carpeta nueva, en este caso usaremos `Docs Test`. Entra en la carpeta y abre Git Bash (clic derecho y selecciona Git Bash en Windows). Ve a GitHub y copia la URL de tu fork. Luego ejecuta el siguiente comando reemplazando `[your_url]` con la URL de tu fork:
```
git clone [your_url]
```

Ahora deberías tener el repositorio clonado en tu máquina local sin importar el método usado. El siguiente paso es descargar todos los módulos necesarios. Ve a la carpeta del repositorio, clic derecho y abre una terminal cmd (o usa la ventana de git). Ejecuta el siguiente comando para descargar los módulos:
```
npm install
```

Esto puede tardar un poco, pero cuando termine debería crear una carpeta `node_modules` dentro de tu carpeta repo. Si recibes errores, probablemente no hayas instalado el requisito de Node.js.

El paso final es correr el sitio de documentación localmente. Usa el siguiente comando para construir el sitio docs:
```
npm start
```

Cuando termine, una versión local del sitio debería abrirse automáticamente en tu navegador por defecto en el puerto `3000`. Esta versión local es exactamente cómo se verá la documentación en producción y aquí puedes probar lo que quieras.

Cuando estés satisfecho con tus cambios, puedes ir a la siguiente sección para crear un Pull Request y enviar el contenido al repositorio principal.

## Paso 3: Enviar Contenido

Una vez que hayas hecho tus contribuciones necesarias que crees que siguen nuestras directrices y son de la más alta calidad, puedes crear un Pull Request. Para ello, ve a tu fork del repositorio ZAP Docs, pulsa el texto **Contribute** que está debajo de los botones principales y abre un pull request.

![](https://screensaver01.zap-hosting.com/index.php/s/GLjSno3Ltz3zFpZ/preview)

Se abrirá una nueva página donde puedes ver los cambios que hiciste. Por defecto, la descripción contendrá una pequeña checklist para asegurarte de que hiciste todo correctamente y de forma completa. Puedes borrar esta plantilla una vez la hayas revisado, ya que no es necesaria.

Luego, pon un título apropiado que explique lo que hiciste. En la descripción, asegúrate de mencionar/enlazar tu sugerencia usando `#000` junto al ID de la sugerencia. Si no la encuentras en el menú, puedes ir rápido al repositorio principal [ZAP Docs GitHub](https://github.com/zaphosting/docs), entrar en la sección de issues y buscar tu sugerencia junto al número de ID que tiene.

Cuando hayas completado título, descripción y verificado que los cambios son correctos, crea tu pull request con el botón para enviarlo a nuestro repositorio.

![](https://screensaver01.zap-hosting.com/index.php/s/mrGm5f2WMttYzFT/preview)

Nuestro sistema se asegurará de que tus cambios pasen una serie de chequeos de sintaxis y calidad. Si ambos pasan correctamente, tu Pull Request será revisado por el equipo de ZAP-Docs en un par de días.

Al revisar tu Pull Request, puede que te pidamos hacer algunos cambios que consideremos necesarios. También podemos hacer algunos ajustes nosotros mismos si creemos que es apropiado. Una vez que se completen los cambios adicionales, aprobaremos tu cambio para que esté listo para publicarse.

## Paso 4: Publicar cambios en la guía y pago de recompensa

Una vez que finalmente aceptemos tu Pull Request tras completar los cambios solicitados, responderemos en tu Pull Request y te informaremos sobre detalles clave. Esto incluye información sobre la publicación de los cambios en tu guía, así como el pago de tu recompensa por completar exitosamente los cambios.

:::info
La recompensa por este tipo de contribución dependerá de varios factores, principalmente la calidad y escala del contenido escrito, junto con otros criterios evaluados por el Equipo de Contribuciones de ZAP. Lee más sobre nuestros criterios en nuestra sección de [Recompensas](contribution-rewards.md).
:::

¡Felicidades por contribuir a nuestras Guías de ZAP-Hosting! ¡Agradecemos todas tus contribuciones! 💚