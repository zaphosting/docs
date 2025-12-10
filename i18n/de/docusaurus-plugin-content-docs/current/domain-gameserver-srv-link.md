---
id: domain-gameserver-srv-link
title: "Domain: Gameserver-Weiterleitung einrichten"
description: "Entdecke, wie du deine Domain oder Subdomain auf einen Gameserver weiterleitest für einfachen Zugriff und bessere Verbindung → Jetzt mehr erfahren"
sidebar_label: Gameserver-Weiterleitung
services:
  - domain
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Du kannst entweder deine komplette Domain oder nur eine Subdomain auf deinen Gameserver weiterleiten. Das ist praktisch, weil Leute so über eine Domain auf deinen Gameserver connecten können, anstatt sich komplizierte IP-Adressen nur aus Zahlen merken zu müssen. In dieser Anleitung zeigen wir dir, wie du deine Domain per DNS-Einträgen auf deinen Gameserver weiterleitest.

<InlineVoucher />

:::info
Beachte, dass es immer bis zu 24 Stunden dauern kann, bis Änderungen an DNS-Einträgen aktiv werden!
:::

## Funktionsweise

Für die Weiterleitung der IP-Adresse wird entweder eine Subdomain erstellt, die auf die IP-Adresse des Gameservers zeigt, oder du leitest die komplette Domain ohne Subdomain weiter. Das reicht aus, wenn der Gameserver den Standard-Port des Spiels nutzt. Wenn der Gameserver einen anderen Port als den Standard-Port verwendet, brauchst du einen zusätzlichen **SRV-Eintrag**, um die Subdomain auf den Gameserver weiterzuleiten.

:::info
Nicht alle Spiele unterstützen die Weiterleitung einer Domain auf den Spiele-Port via SRV-Eintrag. Informiere dich also vorher, ob dein Spiel SRV-Einträge unterstützt.
:::

### SRV Service

Der Service-Name hängt vom Spiel ab und beginnt immer mit einem **Unterstrich**. Zum Beispiel heißt der Service-Name für einen Minecraft-Gameserver immer **_minecraft** und für einen FiveM-Gameserver **_cfx**.

### SRV Protokoll

Als Protokoll geben wir das Internetprotokoll an, das für die Verbindung genutzt wird. Hier stehen **UDP** und **TCP** zur Auswahl. Welches Protokoll verwendet wird, hängt ebenfalls vom jeweiligen Spiel ab. Die Angabe des Protokolls beginnt immer mit einem **Unterstrich** und ist entweder **_udp** oder **_tcp**.

## Vorbereitung

Um deine Domain auf einen Gameserver weiterzuleiten, ohne eine Subdomain zu erstellen, öffnest du zuerst deine Domain im Dashboard und dann die DNS-Verwaltung im Menü links.

![](https://screensaver01.zap-hosting.com/index.php/s/X8q3jdigEdZrRaB/preview)

Dort siehst du alle bestehenden DNS-Einträge für deine Domain.

![](https://screensaver01.zap-hosting.com/index.php/s/zRzCnwbqYxaeSiJ/preview)

## Domain-Weiterleitung (Minecraft)

Zuerst musst du die IP und den Port des Minecraft-Servers herausfinden, auf den du weiterleiten möchtest. Mit diesen Infos kannst du die folgenden Schritte durchführen.

In unserem Beispiel nutzen wir `testserver-domain.de` als Domain, `123.123.123.123` als Server-IP und `25500` als PORT.

### A-Record erstellen

Um einen neuen Eintrag zu erstellen, klickst du auf den Button **Neuer Eintrag**.

Es öffnet sich ein Fenster mit vier Feldern, die ausgefüllt werden müssen:

![](https://screensaver01.zap-hosting.com/index.php/s/BYNiFMMwdwjEHwZ/preview)

Der **Name** ist die Haupt- oder Subdomain, über die die Weiterleitung auf die IP erfolgt. Dieser Name ist frei wählbar. Der **Typ** bleibt in diesem Schritt auf **A**. Im Feld **Wert** muss nur die IP des Minecraft-Servers eingetragen werden, die du vorher herausgesucht hast. In unserem Beispiel sieht das so aus:

![](https://screensaver01.zap-hosting.com/index.php/s/aRYpxgrySQqzton/preview)

Nach dem Speichern wird der Eintrag so angezeigt:

![](https://screensaver01.zap-hosting.com/index.php/s/eFLm8oqbo4cLtn8/preview)

### SRV-Eintrag erstellen

Jetzt musst du einen SRV-Eintrag anlegen, der für die Portweiterleitung nötig ist, wenn du nicht den Standard-Port nutzt. Klicke dafür wieder auf **Neuer Eintrag**.

Bei **Name** gibst du das Protokoll und die Verbindungsdomain ein. Der dort eingetragene Domainname wird später für die Verbindung zum Server genutzt. Als **Typ** wählst du im Dropdown-Menü **SRV** aus:

![](https://screensaver01.zap-hosting.com/index.php/s/pH9F5kZins8wHn4/preview)

Im Feld **Wert** müssen jetzt drei Werte eingetragen werden: zuerst die Priorität, die standardmäßig auf 0 bleiben kann, dann als zweites der Port des Gameservers (in unserem Beispiel `25500`) und zuletzt der Domainname des gerade erstellten **A-Records**.

In unserem Beispiel sieht das so aus:

![](https://screensaver01.zap-hosting.com/index.php/s/Gf8kkc5srHEbC2N/preview)

### Fehlerbehebung & Ergebnis

:::important
Am Ende des Eintrags muss ein Punkt stehen, ohne diesen Punkt versucht das System, die Domain anzuhängen.
:::

Wenn du das nicht beachtest, leitet das System `minecraft.testserver-domain.de` auf `minecraft.testserver-domain.de.testserver-domain.de` weiter und die Weiterleitung schlägt fehl.

## Domain-Weiterleitung (FiveM)

Zuerst musst du die IP und den Port des FiveM-Servers herausfinden, auf den du weiterleiten möchtest. Mit diesen Daten kannst du die folgenden Schritte durchführen.

In unserem Beispiel nutzen wir `testserver-domain.de` als Domain, `123.123.123.123` als Server-IP und PORT `30300`.

### A-Record erstellen

Um einen neuen Eintrag zu erstellen, klickst du auf den Button **Neuer Eintrag**.

Es öffnet sich ein Fenster mit vier Feldern, die ausgefüllt werden müssen:

![](https://screensaver01.zap-hosting.com/index.php/s/FigmCXEc3eJYz78/preview)

Der **Name** ist die Haupt- oder Subdomain, über die die Weiterleitung auf die IP erfolgt. Dieser Name ist frei wählbar. Der **Typ** bleibt in diesem Schritt auf **A**. Im Feld **Wert** muss nur die IP des FiveM-Servers eingetragen werden, die du vorher herausgesucht hast. In unserem Beispiel sieht das so aus:

![](https://screensaver01.zap-hosting.com/index.php/s/7dBKaJ4xomTiS9C/preview)

Nach dem Speichern wird der Eintrag so angezeigt:

![](https://screensaver01.zap-hosting.com/index.php/s/5DppfyXsADTT85t/preview)

### SRV-Eintrag erstellen

Jetzt musst du einen SRV-Eintrag anlegen, der für die Portweiterleitung nötig ist, wenn du nicht den Standard-Port nutzt. Klicke dafür wieder auf **Neuer Eintrag**.

Bei **Name** gibst du das Protokoll und die Verbindungsdomain ein. Der dort eingetragene Domainname wird später für die Verbindung zum Server genutzt. Als **Typ** wählst du im Dropdown-Menü **SRV** aus:

![](https://screensaver01.zap-hosting.com/index.php/s/Yab6ksJNJFTLAeB/preview)

Im Feld **Wert** müssen jetzt drei Werte eingetragen werden: zuerst die Priorität, die standardmäßig auf 0 bleiben kann, dann als zweites der Port des Gameservers (in unserem Beispiel `30300`) und zuletzt der Domainname des gerade erstellten **A-Records**.

In unserem Beispiel sieht das so aus:

![](https://screensaver01.zap-hosting.com/index.php/s/te4LJ3yKRpTSi5W/preview)

### Fehlerbehebung & Ergebnis

:::important
Am Ende des Eintrags muss ein Punkt stehen, ohne diesen Punkt versucht das System, die Domain anzuhängen.
:::

Wenn du das nicht beachtest, leitet das System `fivem.testserver-domain.de` auf `fivem.testserver-domain.de.testserver-domain.de` weiter und die Weiterleitung schlägt fehl.

<InlineVoucher />