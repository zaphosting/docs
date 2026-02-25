---
id: webspace-plesk-ssl
title: "Hosting web: Crear un certificado SSL en Plesk"
description: "Aprende cómo asegurar tu sitio web con un certificado SSL en Plesk y habilitar HTTPS para conexiones cifradas."
sidebar_label: Crear certificado SSL
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Introducción

Un certificado SSL cifra la conexión entre tu sitio web y sus visitantes. Una vez que HTTPS está habilitado, los navegadores establecen una conexión segura y muestran un icono de candado en la barra de direcciones. Esto protege datos sensibles, aumenta la confianza y evita que los navegadores marquen tu sitio como inseguro.

<InlineVoucher />

## Asegurando tu dominio principal

Cuando un dominio se crea por primera vez en Plesk, es accesible vía HTTP y no está cifrado. En el panel de Plesk, puedes ver que aún no se ha asignado ningún certificado. Si abres el dominio en un navegador en esta etapa, normalmente aparecerá marcado como no seguro:

![img](https://screensaver01.zap-hosting.com/index.php/s/jGW9QLHwYLFNxgq/download)

Para activar el cifrado, abre el dominio en tu panel de Plesk y navega a **Certificados SSL/TLS**. Se abrirá el menú correspondiente:

![img](https://screensaver01.zap-hosting.com/index.php/s/8rSr7Jt3DsjDzBY/download)

Desde aquí, puedes solicitar un certificado gratuito de Let's Encrypt. Durante el proceso de solicitud, debes proporcionar una dirección de correo válida y seleccionar los nombres de dominio que deseas asegurar. En la mayoría de los casos, se seleccionan tanto el dominio raíz como el subdominio www, siempre que la entrada www exista en tu configuración DNS:

![img](https://screensaver01.zap-hosting.com/index.php/s/LTFN73ekPjtikwp/preview)

Después de confirmar la solicitud haciendo clic en **Obtener gratis**, Plesk se comunica con Let's Encrypt y emite el certificado automáticamente. Una vez que el certificado se ha creado con éxito, se debe forzar HTTPS activando la redirección permanente de HTTP a HTTPS en la configuración del hosting:

![img](https://screensaver01.zap-hosting.com/index.php/s/BN7AMzG6MyMKb38/preview)

Tras la activación, todos los visitantes serán redirigidos automáticamente a la versión cifrada HTTPS de tu sitio web. Puedes verificar la instalación abriendo tu dominio con https en el navegador.



## Asegurando todos los subdominios con un certificado comodín

Si usas o planeas usar varios subdominios, un certificado comodín es una solución más eficiente. Asegura el dominio principal así como todos los subdominios existentes y futuros. Para solicitar un certificado comodín, abre nuevamente el menú **Certificados SSL/TLS**:

![img](https://screensaver01.zap-hosting.com/index.php/s/jGW9QLHwYLFNxgq/download)

Selecciona la opción para renovar o solicitar un certificado de Let's Encrypt. Activa la opción para asegurar el dominio comodín:

![img](https://screensaver01.zap-hosting.com/index.php/s/ZMcdJk9wCzifBmq/preview)

Después de confirmar la solicitud, Plesk mostrará un cuadro de información azul con un registro DNS TXT que debe ser creado:

![img](https://screensaver01.zap-hosting.com/index.php/s/wnbNfKeTMsCdsy9/preview)

Este registro TXT debe añadirse a la zona DNS de tu dominio exactamente como se indica. Confirma la propiedad del dominio y permite que Let's Encrypt valide la solicitud. Una entrada DNS se verá similar al siguiente ejemplo:

![img](https://screensaver01.zap-hosting.com/index.php/s/tDtDaERR7twzaMr/preview)

:::warning Retraso en la propagación DNS
La propagación DNS puede tardar hasta 24 horas hasta que el registro TXT sea accesible globalmente. Durante este tiempo, la validación puede fallar porque algunos servidores DNS aún devuelven información desactualizada. Si esto ocurre, espera hasta que el registro se haya propagado completamente y luego vuelve a intentar la verificación.
:::



Para asegurarte de que el registro TXT se ha propagado correctamente y es accesible públicamente, puedes verificarlo usando una herramienta externa de consulta DNS como MXToolbox SuperTool:

https://mxtoolbox.com/SuperTool.aspx

Abre la web y selecciona la opción **TXT Lookup**. Introduce el nombre de host completo proporcionado por Plesk, normalmente en el formato `_acme-challenge.tudominio.com`, y comienza la consulta. La herramienta consultará servidores DNS públicos y mostrará los registros TXT visibles actualmente.

Si el valor de verificación correcto aparece exactamente como se muestra en Plesk, la entrada DNS se ha propagado con éxito y Let's Encrypt puede validar la propiedad del dominio. Si no se devuelve ningún resultado o el valor es diferente, la propagación DNS puede estar aún en proceso. En ese caso, espera y repite la consulta después de un tiempo hasta que la entrada correcta sea visible mundialmente.

![img](https://screensaver01.zap-hosting.com/index.php/s/iFP5P8SY6oSXQBW/download)

Una vez que el registro sea visible, vuelve a Plesk y vuelve a iniciar la validación. Si tiene éxito, el certificado comodín será emitido y mostrado como protegido. A partir de ese momento, cualquier subdominio nuevo creado se asegurará automáticamente.



## Conclusión

¡Felicidades! Tu sitio web ahora está protegido con cifrado SSL. Todos los datos transmitidos entre tu servidor y los visitantes están seguros, los navegadores reconocen tu dominio como confiable y HTTPS se aplica automáticamente.

Para más preguntas o ayuda, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂

<InlineVoucher />