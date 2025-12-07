---
id: dedicated-linux-python
title: "Dedicated Server: Python Installeren"
description: "Leer hoe je de Python runtime installeert en update op verschillende Linux-distributies voor een veilige en up-to-date omgeving → Ontdek het nu"
sidebar_label: Python Installeren
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Deze gids laat je stap voor stap zien hoe je de Python runtime en venv installeert. Deze commando’s voer je uit via SSH. Weet je niet hoe je via SSH verbinding maakt met je server? Check dan onze [Eerste toegang (SSH)](vserver-linux-ssh.md) gids voor meer info.

## Voorbereiding

Voordat je iets installeert op je server, is het slim om eerst het update-commando te draaien dat bij jouw besturingssysteem hoort. Zo houd je je server veilig en up-to-date.

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

De meeste Linux-distributies hebben Python al geïnstalleerd, maar soms is de versie niet up-to-date of ontbreken er pakketten. Check eerst of Python al geïnstalleerd is met `python3 --version`. Gebruik daarna onderstaande commando’s om Python te updaten of te installeren.

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

Nu Python op je server staat, kun je je Python-programma’s gaan draaien.

### Interpreter modus

Met het commando `python3` start je de Python interpreter. Je kunt direct na de `>>>` prompt geldige Python-code typen, die wordt uitgevoerd zodra je op `Enter` drukt. Klaar? Typ `exit()` om de interpreter te sluiten.

### .py bestanden draaien

Om een `.py` bestand te draaien, gebruik je simpelweg `python3 [bestandsnaam].py`, waarbij je `[bestandsnaam]` vervangt door het pad naar het bestand dat je wilt uitvoeren.

:::tip
De meeste programma’s die je online vindt, kun je starten met `python3 main.py`, omdat `main.py` vaak het startpunt is van Python-projecten.
:::

## Virtuele omgevingen

Als je Python-programma externe pakketten via pip nodig heeft, kun je die globaal installeren, maar beter is het om een virtuele omgeving (venv) te maken.

### Venv aanmaken

Ga eerst naar de map waar je de venv wilt maken met `cd`. Run daarna `python3 -m venv .` om de benodigde bestanden in die map te installeren.

### Activeren & deactiveren

Om binnen je venv commando’s zoals `pip install` te gebruiken, moet je de venv activeren met `source /bin/activate`. Vanaf dat moment draait je console alleen binnen de venv en hebben scripts alleen toegang tot lokaal geïnstalleerde pakketten.

Klaar met werken in de venv? Typ `deactivate` om terug te gaan naar je normale omgeving.