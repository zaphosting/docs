---
id: vserver-linux-python
title: "Installera Python på en Linux-server – Aktivera utveckling och automation"
description: "Lär dig hur du installerar och uppdaterar Python runtime på olika Linux-distros för att säkerställa en säker och uppdaterad miljö → Läs mer nu"
sidebar_label: Installera Python
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Den här guiden visar steg för installation av Python runtime och venv. Dessa kommandon måste köras via SSH. Om du inte vet hur du ansluter till din server via SSH, använd gärna vår [Initial Access (SSH)](vserver-linux-ssh.md)-guide för att lära dig mer.

<InlineVoucher />

## Förberedelser

Innan du installerar något på en server rekommenderas det att köra uppdateringskommandot som passar ditt operativsystem för att hålla servern säker.

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

## Installation

De flesta Linux-distros har Python förinstallerat, men versionen kan vara gammal eller systemet kan ha installerats utan vissa paket. Du kan kolla om Python är installerat med `python3 --version` och köra följande kommandon för att uppdatera eller installera runtime.

<Tabs>
<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>

```
  // Kolla version
  python3 --version

  // Uppdatera / installera runtime
  sudo apt install python3
```

</TabItem>
<TabItem value="centos" label="CentOS">

```
  // Kolla version
  python3 --version

  // Uppdatera runtime
  sudo yum install python3
```

</TabItem>
<TabItem value="opensuse" label="OpenSUSE">

```
  // Kolla version
  python3 --version

  // Uppdatera runtime
  sudo zypper install python3
```

</TabItem>
<TabItem value="fedora" label="Fedora">

```
  // Kolla version
  python3 --version

  // Uppdatera runtime
  sudo dnf install python3
```

</TabItem>
</Tabs>

## Köra kod

Nu när du har Python installerat på din server kan du börja köra dina Python-program.

### Interpreterläge

Kommandot `python3` startar Python-interpretern. Du kan skriva vilken giltig Python-kod som helst efter `>>>` och den körs när du trycker på `Enter`. Du stänger interpretern genom att skriva `exit()` i konsolen.

### Köra .py-filer

För att köra `.py`-filer använder du helt enkelt kommandot `python3 [filnamn].py`, där du byter ut `[filnamn]` mot sökvägen till filen du vill köra.

:::tip
De flesta program du hittar online kan köras med `python3 main.py` eftersom `main.py` är den vanliga startpunkten för Python-program.
:::

## Virtuella miljöer

När du skriver Python-program kan du behöva installera externa paket via pip. Dessa kan installeras globalt och vara tillgängliga för alla `.py`-skript, eller så kan du skapa en virtuell miljö (venv).

### Skapa venv

Navigera först till mappen där du vill skapa din venv med `cd`. När du är redo kör du `python3 -m venv .` som installerar nödvändiga filer i den aktuella mappen.

### Aktivera & avaktivera

För att köra kommandon som `pip install` inuti din venv måste du aktivera den med `source /bin/activate`. Nu körs allt i konsolen inom venv och skript får bara tillgång till lokalt installerade paket.

När du är klar i venv går du tillbaka till systemmiljön genom att köra kommandot `deactivate`.


## Avslutning

Grattis, du har nu installerat och konfigurerat Python! Om du har fler frågor eller problem, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig!

<InlineVoucher />