---
id: vserver-linux-python
title: "VPS: Python installeren"
description: "Leer hoe je de Python runtime installeert en update op verschillende Linux distros voor een veilige en up-to-date omgeving → Nu meer ontdekken"
sidebar_label: Python installeren
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Deze gids laat je stap voor stap zien hoe je de Python runtime en venv installeert. Deze commando’s voer je uit via SSH. Weet je niet hoe je via SSH verbinding maakt met je server? Check dan onze [Initial Access (SSH)](vserver-linux-ssh.md) gids voor meer info.

<InlineVoucher />

## Voorbereiding

Voordat je iets installeert op je server, is het slim om eerst het update-commando van jouw OS uit te voeren. Zo houd je je server veilig en up-to-date.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>

```
  sudo apt update
```

</TabItem>
<TabItem value="centos" label="CentOS">

```
  sudo yum update
```

</TabItem>
<TabItem value="opensuse" label="OpenSUSE">

```
  sudo zypper update
```

</TabItem>
<TabItem value="fedora" label="Fedora">

```
  sudo dnf update
```

</TabItem>
</Tabs>

## Installatie

De meeste Linux distros hebben Python al geïnstalleerd, maar soms is de versie niet up-to-date of ontbreken er pakketten. Check eerst of Python al geïnstalleerd is met `python3 --version`. Gebruik daarna onderstaande commando’s om Python te updaten of te installeren.

<Tabs>
<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>

```
  // Versie checken
  python3 --version

  // Runtime updaten / installeren
  sudo apt install python3
```

</TabItem>
<TabItem value="centos" label="CentOS">

```
  // Versie checken
  python3 --version

  // Runtime updaten
  sudo yum install python3
```

</TabItem>
<TabItem value="opensuse" label="OpenSUSE">

```
  // Versie checken
  python3 --version

  // Runtime updaten
  sudo zypper install python3
```

</TabItem>
<TabItem value="fedora" label="Fedora">

```
  // Versie checken
  python3 --version

  // Runtime updaten
  sudo dnf install python3
```

</TabItem>
</Tabs>

## Code draaien

Nu Python geïnstalleerd is op je server, kun je aan de slag met je Python-programma’s.

### Interpreter modus

Met het commando `python3` start je de Python interpreter. Je kunt direct na de `>>>` prompt geldige Python code typen, die wordt uitgevoerd zodra je op `Enter` drukt. Klaar? Typ `exit()` om de interpreter te sluiten.

### .py bestanden draaien

Wil je een `.py` bestand uitvoeren? Gebruik dan simpelweg `python3 [bestandsnaam].py`, waarbij je `[bestandsnaam]` vervangt door het pad naar het bestand dat je wilt draaien.

:::tip
De meeste programma’s die je online vindt, kun je starten met `python3 main.py`, omdat `main.py` vaak het startpunt is van Python-projecten.
:::

## Virtuele omgevingen

Als je Python-programma externe pakketten via pip nodig heeft, kun je die globaal installeren of een virtuele omgeving (venv) aanmaken.

### Venv aanmaken

Ga eerst naar de map waar je de venv wilt maken met `cd`. Run daarna `python3 -m venv .` om de benodigde bestanden in die map te installeren.

### Activeren & deactiveren

Om binnen je venv commando’s zoals `pip install` te gebruiken, moet je de venv activeren met `source /bin/activate`. Vanaf dat moment draait je console alleen binnen de venv en hebben scripts alleen toegang tot lokaal geïnstalleerde pakketten.

Klaar met werken in de venv? Typ `deactivate` om terug te gaan naar je normale omgeving.

## Afsluiting

Gefeliciteerd, je hebt Python succesvol geïnstalleerd en ingesteld! Heb je nog vragen of problemen? Ons supportteam staat elke dag voor je klaar om je te helpen!

<InlineVoucher />