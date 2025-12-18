---
id: ddos-protection-pletx
title: Protección DDoS PletX en ZAP Hosting
description: "Descubre cómo ZAP Hosting protege tus servidores con defensa DDoS proactiva y en tiempo real, adaptada a cada servicio que ejecutes → Aprende más ahora"
sidebar_label: PletX
---

## Introducción

Los ataques DDoS (Denegación de Servicio Distribuida) son intentos maliciosos de interrumpir el tráfico normal de un servidor, servicio o red objetivo, saturándolo con un tráfico entrante excesivo. Para garantizar un funcionamiento estable e ininterrumpido para nuestros clientes, ZAP Hosting utiliza sistemas dedicados de protección DDoS adaptados a cada ubicación de centro de datos.

Una de las tecnologías clave dentro de nuestra infraestructura es PletX, una plataforma de protección altamente adaptable que filtra y mitiga ataques en tiempo real. Este documento explica cómo funciona PletX, qué servicios se benefician de él y por qué ofrece una ventaja significativa para entornos de hosting críticos en rendimiento.

## Dónde se Utiliza la Protección

PletX ya está completamente desplegado en nuestra ubicación FFM/Eygelshoven, donde protege todos los productos alojados, incluyendo servidores de juegos, VPS, servidores dedicados, servidores de TeamSpeak, bots TS3 y Discord, así como servicios de hosting web. Esto asegura una protección integral y consistente en toda la gama de productos en este sitio.

Actualmente estamos preparando el despliegue para nuestras ubicaciones en EE. UU. en Ashburn, Dallas y Los Ángeles, donde PletX también estará disponible muy pronto.

## Cómo Funciona la Protección DDoS

La protección PletX en nuestras ubicaciones está siempre activa y completamente sincronizada con nuestra red. Todo el tráfico entrante se enruta a través del sistema de filtrado PletX antes de llegar a nuestra infraestructura. Esto garantiza que el tráfico malicioso se elimine lo antes posible y nunca alcance tu servidor.

### Detección Automática de Protocolos

PletX analiza continuamente el tráfico entrante e identifica firmas específicas de protocolo tan pronto como aparece tráfico real en un puerto. Cuando los jugadores se conectan a un servidor FiveM en su puerto de juego, por ejemplo el 30120,

detecta la estructura característica del paquete y aplica automáticamente la regla adecuada para FiveM. Lo mismo ocurre con otros servicios; si un servidor Minecraft recibe tráfico en el puerto 25565, el sistema reconoce el handshake de Minecraft y crea una regla correspondiente.

Cuando un usuario se conecta a un VPS o servidor dedicado vía SSH en el puerto 22, PletX reconoce el handshake SSH y activa una regla SSH. Para sistemas basados en Windows, se detecta el tráfico RDP en el puerto 3389 y se crea una regla específica para RDP.

Si se usa WireGuard o OpenVPN en un puerto personalizado, PletX identifica el primer intercambio válido y aplica la regla correcta para VPN.

En todos los casos, una vez que PletX identifica el protocolo, solo se permite tráfico legítimo para ese protocolo mientras que el tráfico no relacionado se filtra antes de llegar al servidor.

### Perfiles de Protección Soportados

PletX soporta una amplia gama de protocolos comunes de servicios y juegos. Esto incluye juegos populares como FiveM, Minecraft, títulos que usan el motor Steam Source, servicios basados en Metin 2, juegos con RakNet, SAMP, Growtopia y extensiones como PlasmoVoice. Aplicaciones de voz como TeamSpeak también se reconocen automáticamente.

Además del tráfico relacionado con juegos, PletX identifica protocolos de acceso remoto como SSH y RDP, así como protocolos de red seguros incluyendo WireGuard y OpenVPN.

<details>
  <summary>Servidores de juegos</summary>
- FiveM
- Minecraft
- Varios juegos que usan Steam Source Engine
- Metin 2 Auth & Channel
- Novalife
- Juegos basados en RakNet
- SAMP
- Growtopia
- PlasmoVoice
- y más..
</details>

<details>
  <summary>Servidores de voz</summary>

- TeamSpeak
- PlasmoVoice
</details>

<details>
  <summary>Acceso remoto</summary>
- SSH
- RDP
</details>

<details>
  <summary>VPN y Redes Seguras</summary>

- WireGuard
- OpenVPN
</details>

Cualquier protocolo no reconocido por PletX se trata como desconocido, lo que puede ocasionar falsos positivos o comportamientos inesperados ocasionalmente.

## Tráfico Web y Servicios No Soportados

Actualmente PletX no filtra tráfico HTTP o HTTPS. Las aplicaciones web o protocolos no soportados pueden experimentar falsos positivos ocasionales. Si te afecta esto, sigue estos pasos:

1. Abre un ticket de soporte en ZAP-Hosting
2. Analizamos el tráfico
3. PletX puede implementar ajustes y correcciones personalizadas bajo petición

Este enfoque está pensado especialmente para servicios poco comunes o especializados. Para proyectos web recomendamos seguir usando Cloudflare. Idealmente esto incluye Cloudflare Proxy o CDN para sitios web y Cloudflare Tunnel para FiveM/RedM TxAdmin u otros paneles web.

## Desactivación Temporal de la Protección

Próximamente estará disponible una función para desactivar temporalmente la protección. Esta opción permitirá a los clientes apagar completamente la protección DDoS para servidores específicos cuando sea necesario. Es especialmente útil para entornos sin riesgo significativo de DDoS, sistemas de alto volumen como plataformas de telemetría o monitoreo y aplicaciones que generan patrones de tráfico inusuales que podrían activar falsos positivos.

La función ofrece a usuarios avanzados control total sobre el comportamiento de su red mientras que los clientes de hosting de juegos y aplicaciones continúan beneficiándose de una protección automática y confiable.