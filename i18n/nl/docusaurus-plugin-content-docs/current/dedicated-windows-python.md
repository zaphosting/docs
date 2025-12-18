---
id: dedicated-windows-python
title: 'Dedicated Server: Python Installeren'
description: "Leer hoe je de Python runtime installeert en instelt op Windows-servers om je Python-programma's soepel te laten draaien → Ontdek het nu"
sidebar_label: Python Installeren
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

In deze gids leggen we stap voor stap uit hoe je de Python runtime installeert op Windows. De onderstaande stappen voer je uit via RDP. Weet je niet hoe je via RDP verbinding maakt met je server? Check dan onze [Eerste Toegang (RDP)](vserver-windows-userdp.md) handleiding.

## Installatie

### Stap 1: Bestanden downloaden
Open je favoriete browser (ik gebruik Chrome voor deze gids) en ga naar [https://www.python.org/downloads/](https://www.python.org/downloads/)

![](https://screensaver01.zap-hosting.com/index.php/s/WAET5RFn6yBfNzC/preview)

Klik nu op de knop `Download Python [versie]` en wacht tot het downloaden klaar is.

![](https://screensaver01.zap-hosting.com/index.php/s/b8j6ZbfGWoBjpep/preview)

### Stap 2: Python installeren
Start de installer door erop te klikken. Je krijgt nu een paar opties te zien. Zorg dat het vinkje bij `Add python.exe to PATH` onderaan aan staat (dit maakt het later makkelijker om Python te gebruiken) en klik vervolgens op `Install Now`.

![](https://screensaver01.zap-hosting.com/index.php/s/Z57KiQwHqP3RpPy/preview)

### Stap 3: Installatie afronden
Wacht tot alle bestanden geïnstalleerd zijn. Dit kan even duren, dus chill even. :)

![](https://screensaver01.zap-hosting.com/index.php/s/XA2Y3DGezb84Ek9/preview)

Als het klaar is, klik je op `Close` en kun je meteen aan de slag met Python op je server.

![](https://screensaver01.zap-hosting.com/index.php/s/t7xPKRtsJ7kGRxw/preview)

## Code draaien

Nu Python geïnstalleerd is, kun je je Python-programma’s gaan uitvoeren.

### Interpreter modus

Typ `python` in een Command Prompt of PowerShell venster om de Python interpreter te starten. Je kunt nu direct geldige Python-code typen achter de `>>>` prompt en met Enter uitvoeren. Klaar? Typ `exit()` of sluit het venster om de interpreter af te sluiten.

![](https://screensaver01.zap-hosting.com/index.php/s/DskKi5Ac28ERY38/preview)

### .py bestanden draaien

Om `.py` Python-bestanden te draaien, gebruik je simpelweg het commando `python3 [bestandsnaam].py`, waarbij je `[bestandsnaam]` vervangt door het pad naar het bestand dat je wilt uitvoeren. Dit doe je ook via Command Prompt of PowerShell.

:::tip
De meeste online programma’s kun je starten met `python3 main.py` omdat `main.py` vaak het startpunt is van Python-projecten.
:::

Je kunt Python (.py) bestanden ook gewoon openen of rechtsklikken en direct via Windows Python kiezen om ze te starten.

## Virtuele omgevingen

Als je Python-programma externe pakketten via pip nodig heeft, kun je die globaal installeren (voor alle scripts) of een virtuele omgeving (venv) aanmaken.

### Venv aanmaken

Ga eerst naar de map waar je je venv wilt maken via de Verkenner. Open daar een terminal en voer `python -m venv .` uit om de benodigde bestanden in die map te installeren.

### Activeren & deactiveren

Om in je venv commando’s zoals `pip install` te gebruiken, moet je hem activeren met `.\Scripts\activate`. Nu draait je console binnen de venv en hebben scripts alleen toegang tot lokaal geïnstalleerde pakketten.

Klaar? Typ `deactivate` om de venv weer te verlaten.

![](https://screensaver01.zap-hosting.com/index.php/s/Ws5BosJzJ78s7Y9/preview)

## Afsluiting

Gefeliciteerd, je hebt Python succesvol geïnstalleerd! Heb je vragen of hulp nodig? Onze support staat dagelijks voor je klaar om je te helpen! 🙂