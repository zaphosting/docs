---
id: vserver-windows-python
title: 'VPS: Python installeren'
description: "Leer hoe je de Python runtime op Windows-servers installeert en efficiënt Python-programma's laat draaien → Ontdek het nu"
sidebar_label: Python installeren
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Intro

In deze gids leggen we stap voor stap uit hoe je de Python runtime op Windows installeert. De onderstaande stappen voer je uit via RDP. Weet je niet hoe je via RDP verbinding maakt met je server? Check dan onze [Eerste toegang (RDP)](vserver-windows-userdp.md) gids.
<InlineVoucher />

## Installatie

### Stap 1: Bestanden downloaden
Open je favoriete browser (ik gebruik Chrome voor deze gids) en ga naar [https://www.python.org/downloads/](https://www.python.org/downloads/)

![](https://screensaver01.zap-hosting.com/index.php/s/WAET5RFn6yBfNzC/preview)

Klik nu op de knop `Download Python [versie]` en wacht tot het downloaden klaar is.

![](https://screensaver01.zap-hosting.com/index.php/s/b8j6ZbfGWoBjpep/preview)

### Stap 2: Python installeren
Start de installer door erop te klikken. Je krijgt nu een paar opties te zien. Zorg dat het vinkje bij `Add python.exe to PATH` onderaan aan staat (dit maakt het later makkelijker om Python-bestanden te draaien) en klik vervolgens op `Install Now`.

![](https://screensaver01.zap-hosting.com/index.php/s/Z57KiQwHqP3RpPy/preview)

### Stap 3: Installatie afronden
Wacht tot alle bestanden geïnstalleerd zijn. Heb even geduld, dit kan even duren. :)

![](https://screensaver01.zap-hosting.com/index.php/s/XA2Y3DGezb84Ek9/preview)

Als het klaar is, klik je op `Close` en kun je meteen aan de slag met Python op je server.

![](https://screensaver01.zap-hosting.com/index.php/s/t7xPKRtsJ7kGRxw/preview)

## Code draaien

Nu Python geïnstalleerd is, kun je je Python-programma’s gaan draaien.

### Interpreter modus

Typ `python` in een Command Prompt of PowerShell venster om de Python interpreter te starten. Je kunt nu elke geldige Python-code typen achter de `>>>` prompt en met Enter uitvoeren. Sluit de interpreter af met `exit()` of door het venster te sluiten.

![](https://screensaver01.zap-hosting.com/index.php/s/DskKi5Ac28ERY38/preview)

### .py bestanden draaien

Om `.py` Python-bestanden te draaien, gebruik je simpelweg het commando `python3 [bestandsnaam].py`, waarbij je `[bestandsnaam]` vervangt door het pad naar het bestand dat je wilt uitvoeren. Dit doe je ook in Command Prompt of PowerShell.

:::tip
De meeste programma’s die je online vindt, kun je starten met `python3 main.py` omdat `main.py` vaak het startpunt is van Python-projecten.
:::

Je kunt Python (.py) bestanden ook gewoon openen of met rechtsklikken en Python selecteren via Windows.

## Virtuele omgevingen

Als je Python-programma’s schrijft, wil je misschien externe pakketten via pip installeren. Die kun je globaal installeren (voor alle scripts) of in een virtuele omgeving (venv) zetten.

### Venv aanmaken

Ga eerst naar de map waar je je venv wilt maken via de Verkenner. Open daar een terminal en voer `python -m venv .` uit om de benodigde bestanden in die map te installeren.

### Activeren & deactiveren

Om commando’s zoals `pip install` binnen je venv te gebruiken, moet je hem activeren met `.\Scripts\activate`. Nu draait je console alleen binnen de venv en hebben scripts alleen toegang tot lokaal geïnstalleerde pakketten.

Als je klaar bent, verlaat je de venv met het commando `deactivate`.

![](https://screensaver01.zap-hosting.com/index.php/s/Ws5BosJzJ78s7Y9/preview)

## Afronding

Gefeliciteerd, je hebt Python succesvol geïnstalleerd en ingesteld op je VPS! Heb je nog vragen of problemen? Onze support staat elke dag voor je klaar om je te helpen!

<InlineVoucher />