---
id: abuse-report
title: "¡Reporta abusos y contenido ilegal - Todo lo que necesitas saber!"
description: "Descubre cómo identificar y reportar abusos en línea para proteger usuarios y servicios de forma efectiva → Aprende más ahora"
sidebar_label: Reportar Abuso
---

## Introducción

Internet genera valor. El abuso perjudica a usuarios y servicios. Nuestro objetivo es detectar y detener incidentes rápido. Puedes reportar sospechas de abuso a nuestro Equipo de Abuso. Revisamos cada reporte, preservamos evidencia, actuamos según la ley aplicable y nuestras políticas, y notificamos a las autoridades competentes cuando es necesario.

## Tipos de Abuso

El abuso puede presentarse de distintas formas. Reporta cualquier caso que encaje o esté cerca de las categorías siguientes:

<details>
  <summary>Spam</summary>

Mensajes no solicitados o masivos enviados a través de nuestros sistemas o contenido alojado que activan filtros anti-spam. Variantes incluyen spam por email, spam en comentarios, spam SEO con enlaces y creación automática de cuentas. Proporciona mensajes de ejemplo, encabezados, IPs de remitentes y patrones de envío.

</details>

<details>
  <summary>Ataques y DDoS</summary>

Tráfico hostil destinado a interrumpir servicios o sondear sistemas. Formas comunes son inundaciones volumétricas L3 L4, inundaciones HTTP capa 7, amplificación, intentos de acceso por fuerza bruta y escaneos agresivos de puertos. Indicadores incluyen picos en PPS o Mbps, tasas elevadas de errores 4xx y 5xx, y fallos repetidos de autenticación desde fuentes rotativas.

</details>

<details>
  <summary>Violaciones de derechos de autor y marcas</summary>

Distribución no autorizada de obras protegidas o uso indebido de marcas registradas. Variantes incluyen espejos de piratería, descargas crackeadas, suplantación de marca y dominios engañosos. Proporciona la obra, titular de derechos, ubicación exacta y estado de autorización.

</details>

<details>
  <summary>Phishing</summary>

Contenido diseñado para robar credenciales o datos de pago imitando marcas confiables. Variantes incluyen portales falsos de login, estafas con facturas, señuelos con QR o adjuntos, y fatiga de MFA. Especifica la marca objetivo, puntos de captura y cómo la página difiere del sitio legítimo.

</details>

<details>
  <summary>GDPR</summary>

Procesamiento, exposición o filtración no autorizada de datos personales. Casos típicos incluyen índices abiertos, buckets mal configurados, scraping sin base legal y logs públicos. Describe categorías de datos, alcance, sujetos afectados y causa de la exposición.

</details>

<details>
  <summary>CSAM/SAM</summary>

Cualquier material que muestre explotación sexual de personas. Tolerancia cero.

</details>

<details>
  <summary>Contenido ilegal</summary>

Contenido que viola la ley aplicable como propaganda extremista, amenazas, discurso de odio, incitación a la violencia o difamación. Variantes incluyen doxxing, amenazas explícitas y materiales prohibidos por jurisdicción. Proporciona la ubicación exacta y, si se conoce, la base legal involucrada.

</details>

<details>
  <summary>Otros</summary>

Abuso que no encaja en lo anterior pero que igualmente perjudica a usuarios o sistemas. Ejemplos incluyen hosting de malware, C2 de botnets, fraude y minería de criptomonedas no autorizada. Comparte hashes, URLs, patrones C2 y anomalías en uso de recursos.

</details>

## Información requerida

Para asegurar un reporte completo y accionable, por favor proporciona detalles que nos permitan identificar el recurso, verificar el incidente y tomar las medidas adecuadas, incluyendo:
- Ubicación. URL, IP, puerto, nombre de host, ruta de archivo, hash
- Tiempos en UTC en formato YYYY-MM-DDTHH:MM:SSZ
- Descripción. Qué pasó, cómo se detectó, impacto observado
- Evidencia. Capturas de pantalla, logs de texto, email completo con encabezados en formato EML, PCAP corto, NetFlow, encabezados HTTP

## Archivos aceptados y provisión

Proporciona evidencia en formatos claros y accesibles para nosotros. Adjunta archivos pequeños en tu email o aloja archivos grandes externamente. Adjunta archivos pequeños a medianos directamente. Prefiere formatos abiertos y sin modificaciones. Texto plano es mejor que capturas de pantalla de texto.

Para archivos grandes, comparte un enlace de descarga estable. Debe ser accesible sin interacción o incluir credenciales claras. Indica el tiempo de validez del enlace. Añade checksums para verificar integridad.

Usa formatos estándar como TXT, PDF, PNG, JPG, PCAP o PCAPNG, EML, HAR, CSV y JSON. No incluyas contraseñas, claves privadas o datos personales completos salvo que sea estrictamente necesario.

Para calidad, envía emails como EML con encabezados completos, logs en texto plano, trazas de red como capturas PCAP o PCAPNG cortas y relevantes, y capturas de pantalla en resolución original.

Por seguridad, oculta cualquier secreto; si es necesario, coloca archivos en un archivo protegido con contraseña y comparte la contraseña por separado. Para CSAM/SAM, no envíes archivos, solo proporciona enlaces.

## Contacta con nosotros

Envía tu reporte a `abuse@zap-hosting.com`. Es importante usar un asunto claro como `Reporte de Abuso Phishing` o `Reporte de Abuso DDoS`. Envía un email por incidente. El ejemplo abajo muestra una solicitud completa:

```
Para: abuse@zap-hosting.com
Asunto: Reporte de Abuso Fuerza Bruta (SSH)

Ubicación:
- IP objetivo: XXX.XX.XXX.XX
- Servicio: SSH
- Puerto: 22
- Nombre de host: v12345.zap-hosting.com

Tiempos (UTC):
- Primera vez visto: 2025-08-23T09:12:04Z
- Última vez visto: 2025-08-23T10:03:31Z

Descripción:
"Intentos repetidos de login SSH con usuarios y IPs de origen rotativos. Detectado por anomalías en auth.log y tasa elevada de conexiones. Autenticación por contraseña deshabilitada tras detección. No se observó login exitoso."

Evidencia:
- Extracto de auth.log con múltiples entradas "Failed password" y "Invalid user"
- Fragmento de log fail2ban mostrando bloqueos y direcciones origen
- PCAP de 60 segundos capturando intentos TCP al puerto 22
- Conteos agregados: 12,438 intentos desde 352 IPs origen
- Principales fuentes con info ASN

Extracto de log de ejemplo:
2025-08-23T09:55:17Z sshd[2173]: Failed password for invalid user admin from XXX.X.XXX.XX port XXXX ssh2
2025-08-23T09:55:18Z sshd[2173]: Failed password for root from XXX.X.XX
```

## ¿Qué pasa después?

Nuestro Equipo de Abuso procesa tu reporte lo más rápido posible y responde pronto. Revisamos el incidente y lo priorizamos según su gravedad.

Según la revisión, tomamos acciones que incluyen notificación al cliente, suspensión temporal o permanente, eliminación del contenido reportado, preservación de evidencia y notificación a las autoridades competentes cuando sea necesario.