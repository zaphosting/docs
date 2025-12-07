---
id: vserver-windows-python
title: 'VPS: Installera Python'
description: "Lär dig hur du installerar Python runtime på Windows-servrar och börjar köra Python-program effektivt → Läs mer nu"
sidebar_label: Installera Python
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Den här guiden visar steg för steg hur du installerar Python runtime på Windows. Stegen nedan måste utföras via RDP. Om du inte vet hur du ansluter till din server via RDP, kolla in vår guide för [Initial Access (RDP)](vserver-windows-userdp.md).
<InlineVoucher />

## Installation

### Steg 1: Ladda ner filer
Öppna din favoritwebbläsare (jag använder Chrome i den här guiden) och gå till [https://www.python.org/downloads/](https://www.python.org/downloads/)

![](https://screensaver01.zap-hosting.com/index.php/s/WAET5RFn6yBfNzC/preview)

Klicka nu på knappen `Download Python [version]` och vänta tills nedladdningen är klar.

![](https://screensaver01.zap-hosting.com/index.php/s/b8j6ZbfGWoBjpep/preview)

### Steg 2: Installera Python
Starta installationsprogrammet genom att klicka på det. Nu kommer du bli ombedd att ställa in några inställningar för installationen. Se till att kryssrutan `Add python.exe to PATH` längst ner är markerad (det gör det enklare att köra Python-filer senare) och klicka på knappen `Install Now`.

![](https://screensaver01.zap-hosting.com/index.php/s/Z57KiQwHqP3RpPy/preview)

### Steg 3: Slutför installationen
Vänta medan alla filer installeras. Ha tålamod, det kan ta en liten stund. :)

![](https://screensaver01.zap-hosting.com/index.php/s/XA2Y3DGezb84Ek9/preview)

När installationen är klar, klicka på `Close` så är du redo att börja använda Python på din server.

![](https://screensaver01.zap-hosting.com/index.php/s/t7xPKRtsJ7kGRxw/preview)

## Köra kod

Nu när du har Python installerat på din server kan du börja köra dina Python-program.

### Interpreter-läge

Om du kör kommandot `python` i en Command Prompt eller PowerShell öppnas Python-interpreteraren. Du kan skriva vilken giltig Python-kod som helst efter `>>>` och den körs när du trycker på `Enter`. Du stänger interpreteraren genom att skriva `exit()` eller bara stänga fönstret.

![](https://screensaver01.zap-hosting.com/index.php/s/DskKi5Ac28ERY38/preview)

### Köra .py-filer

För att köra `.py` Python-filer använder du kommandot `python3 [filnamn].py`, där du byter ut `[filnamn]` mot sökvägen till filen du vill köra. Detta görs i Command Prompt eller PowerShell.

:::tip
De flesta program du hittar online kan köras med `python3 main.py` eftersom `main.py` är den vanliga startpunkten för många Python-program.
:::

Du kan också köra Python (.py) filer genom att öppna dem direkt eller högerklicka och välja Python i Windows.

## Virtuella miljöer

När du skriver Python-program kan du behöva installera externa paket via pip. Dessa kan installeras globalt och vara tillgängliga för alla `.py`-skript, eller så kan du skapa en virtuell miljö (venv).

### Skapa venv

Navigera först till mappen där du vill skapa din venv med filutforskaren och kör sedan `python -m venv .` för att installera nödvändiga filer på den platsen.

### Aktivera & avaktivera

För att köra kommandon som `pip install` i din venv måste du aktivera den genom att köra `.\Scripts\activate`. Nu körs allt i konsolen inom venv och skript får bara tillgång till lokalt installerade paket.

När du är klar i venv kan du gå tillbaka till systemets Python genom att köra kommandot `deactivate`.

![](https://screensaver01.zap-hosting.com/index.php/s/Ws5BosJzJ78s7Y9/preview)

## Avslutning

Grattis, du har nu installerat och konfigurerat Python på din VPS! Har du fler frågor eller problem, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig!

<InlineVoucher />