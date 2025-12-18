---
id: account-hardware-authentication
title: "Autenticación por hardware (Passkey)"
description: "Descubre cómo mejorar la seguridad de tu cuenta con passkey y protege tu información personal de forma efectiva → Aprende más ahora"
sidebar_label: Autenticación por hardware
---

import SearchableAccordion from '@site/src/components/SearchableAccordion/SearchableAccordion';
import items from '@site/data/faqs/account-hardware-authentication.json';

## Introducción

La Autenticación por Hardware usando Passkeys es un método moderno y resistente al phishing para asegurar tu cuenta de usuario. En lugar de depender de una contraseña tradicional, se utiliza un par de claves criptográficas. La clave privada se almacena de forma segura en tu dispositivo y nunca lo abandona. La autenticación se realiza localmente usando verificación biométrica como huella dactilar o reconocimiento facial, o alternativamente un PIN del dispositivo.

## Requisitos

Para usar la Autenticación por Hardware con Passkeys, tu configuración debe cumplir ciertos requisitos. Necesitas un dispositivo compatible como un smartphone, tablet o computadora. El sistema operativo y el navegador deben soportar Passkeys o WebAuthn. Debe estar configurado un bloqueo de pantalla en el dispositivo, por ejemplo huella dactilar, Face ID o un PIN local.

## Activar la autenticación

Para activar la Autenticación por Hardware, abre la configuración de perfil en el área de cliente y navega a la sección Seguridad (Configuración de perfil → Seguridad). En esta área, puedes configurar las opciones de seguridad para tu cuenta. Selecciona Autenticación por Hardware para continuar con la configuración.

Después de seleccionar esta opción, se abrirá una ventana emergente. Dentro de esta ventana, haz clic en el botón etiquetado como Añadir autenticador para iniciar el proceso de configuración.

![img](https://screensaver01.zap-hosting.com/index.php/s/oSEpGD5emG9ToxW/download)

La configuración continúa con la creación de un inicio de sesión Passkey para ZAP-Hosting. Durante este paso, se te pedirá definir un PIN de recuperación. Este PIN es necesario para recuperar el acceso en caso de que el método principal de autenticación no esté disponible temporalmente y debe guardarse de forma segura.

![img](https://screensaver01.zap-hosting.com/index.php/s/tiPnCDTAkieNHNP/download)

Después de confirmar estos pasos y configurar correctamente la Autenticación por Hardware vía Passkey, se cerrará tu sesión automáticamente una vez. Esto es una medida de seguridad normal que asegura que el nuevo método de autenticación se aplique correctamente.

En el siguiente inicio de sesión, después de ingresar tu usuario y contraseña, verás la opción de Autenticación por Hardware. Selecciona esta opción y confirma la solicitud de autenticación en tu dispositivo para completar el proceso de inicio de sesión.

![img](https://screensaver01.zap-hosting.com/index.php/s/FEpZkCCLmi9FmLw/download)

## Desactivar la autenticación

Para desactivar la autenticación de dos factores, navega a **Configuración de perfil → Seguridad**. Si el usuario aún puede iniciar sesión, el autenticador configurado puede eliminarse en cualquier momento desde las opciones de seguridad.

![img](https://screensaver01.zap-hosting.com/index.php/s/Htb3Td7NfbQeCg3/preview)

## Preguntas frecuentes

Si todavía tienes dudas sobre el uso de la Autenticación por Hardware o preguntas sobre su impacto en tu cuenta, la siguiente información ayuda a aclarar preocupaciones comunes y explica cómo funciona esta función en la práctica en ZAP-Hosting.

<SearchableAccordion items={items} locale="en" />