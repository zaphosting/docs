---
id: dedicated-linux-ubuntu-2204
title: "Dedicated Server: Installation von Ubuntu 22.04"
description: "Entdecke, wie du Ubuntu erfolgreich auf deinem Dedicated Server installierst und konfigurierst für optimale Performance und langfristigen Support → Jetzt mehr erfahren"
sidebar_label: Ubuntu 22.04
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Im Folgenden wird dir Schritt für Schritt erklärt, wie du das Ubuntu Betriebssystem auf deinem Dedicated Server installierst und konfigurierst. Folge diesen Anweisungen sorgfältig, damit du das Betriebssystem erfolgreich einrichtest und optimal nutzt.



:::warning Neuere Version verfügbar / EOL-Details

Die aktuellste Ubuntu-Version ist die [24.04](dedicated-linux-ubuntu.md). Für langfristige Projekte empfehlen wir die Nutzung der neuesten Version.

Der Support für ältere Ubuntu-Versionen wird früher oder später eingestellt. Für die Version 22.04 sind folgende Termine geplant:

- Ende des Standard-Supports: 01.04.2027
- Ende des Ubuntu Pro Supports: 01.04.2032
- Ende des Legacy-Supports: 01.04.2034

Mehr Infos findest du auf der [offiziellen Webseite](https://ubuntu.com/about/release-cycle).
:::


<InlineVoucher />

## Vorbereitung

Für die Installation und Konfiguration eines Betriebssystems ist es zunächst wichtig, das passende ISO des Betriebssystems zu mounten. Es gibt mehrere Möglichkeiten, das ISO zu mounten:

1. Mounten über die Ersteinrichtung
2. Mounten über iLO (Virtual Media)
3. Mounten über iLO (Remote Console)

Wenn du noch nicht vertraut bist mit dem Mounten einer ISO-Datei, schau am besten in unsere [Ersteinrichtung](dedicated-setup.md) oder [Eigenes ISO](dedicated-iso.md) Anleitung.



## Installation

Sobald das ISO erfolgreich gemountet und geladen wurde, sollte sich der Server im Setup-Prozess befinden. Die Sprache, die du für dein OS verwenden möchtest, wird zu Beginn des Setups festgelegt. Wähle eine der verfügbaren Sprachen aus und bestätige die Auswahl mit der `Enter`-Taste.

![](https://screensaver01.zap-hosting.com/index.php/s/yrHMNzstM23XZH6/preview)

Als Nächstes muss das passende Tastaturlayout für die Sprache ausgewählt und eingestellt werden. Wähle hier ebenfalls das für dich passende Tastaturlayout aus.

![](https://screensaver01.zap-hosting.com/index.php/s/x9kYGEWS5fy7Wjp/preview)

Danach erfolgt die Netzwerkkonfiguration. Der Server wird standardmäßig per DHCP konfiguriert. Der Standard-Netzwerkadapter ist `eno1`. Bestätige die Standardeinstellungen und fahre fort.

![](https://screensaver01.zap-hosting.com/index.php/s/6mr5kAKJQ39iJt5/preview)

Optional kann ein zusätzlicher Proxy konfiguriert werden. Das ist aber nicht zwingend notwendig. Wenn du keinen brauchst, überspringe diesen Schritt einfach.

![](https://screensaver01.zap-hosting.com/index.php/s/tz97Ee8ZQkxAGGb/preview)

Jetzt wird der Ubuntu Archive Mirror (Download-Server für Pakete) definiert. Unsere Dedicated Server stehen in Deutschland, daher empfehlen wir, den deutschen Mirror auszuwählen, um die bestmöglichen Download-Geschwindigkeiten zu erzielen.

![](https://screensaver01.zap-hosting.com/index.php/s/xNknNyWAbd5DnsZ/preview)

Die Partitionen können nun in der Speicher-Konfiguration festgelegt werden. Du kannst entweder eine große Partition nutzen oder sie bei Bedarf unterteilen. Wenn du einfach die gesamte SSD als eine Partition verwenden möchtest, wähle `Use an entire disk` und fahre fort.

![](https://screensaver01.zap-hosting.com/index.php/s/2dJ9oeMGjpWn6cZ/preview)

Das Setup erstellt automatisch die Volumes und du kannst mit der Option `Done` weitermachen.

![](https://screensaver01.zap-hosting.com/index.php/s/WXfzt57Rtm2SQLD/preview)

Bevor der Prozess gestartet wird, wirst du darauf hingewiesen, dass dabei alle vorhandenen Daten gelöscht werden. Diese Meldung muss mit der Option `Continue` bestätigt werden.

![](https://screensaver01.zap-hosting.com/index.php/s/L3YcGNbYWpMmaDj/preview)

Bitte richte deinen Benutzeraccount nach deinen Wünschen ein, du kannst am Ende auch den Root-Account nutzen, indem du das Passwort änderst.  
Du kannst mit Tab oder den Pfeiltasten durch die Optionen navigieren. Wenn du fertig bist, fahre mit `Done` fort.

![](https://screensaver01.zap-hosting.com/index.php/s/mqrjmF2ZmA2Qj9z/preview)

Die Installation des SSH-Setups wird empfohlen. Wenn du den Server per SSH verwalten möchtest, wähle die Option zur Installation aus und bestätige den Vorgang.

![](https://screensaver01.zap-hosting.com/index.php/s/Xz3zzMdZ6C523ip/preview)

Ubuntu bietet einige Standard-Snaps an, wenn du einige davon nutzen möchtest, setze einfach die Häkchen bei den gewünschten.

![](https://screensaver01.zap-hosting.com/index.php/s/wcGiSwX935jXeex/preview)

Um den Vorgang abzuschließen, muss das ISO ausgeworfen werden, damit es beim Neustart des Servers nicht erneut geladen wird. Starte den Server einmal neu, um den Prozess abzuschließen.

![](https://screensaver01.zap-hosting.com/index.php/s/SzrxCtJTx2S8Nef/preview)



![](https://screensaver01.zap-hosting.com/index.php/s/x3BRLSepSDFnYGA/preview)



## Konfiguration



### Passwort des Root-Users ändern

Du kannst das Passwort des Root-Users ganz einfach ändern. Führe `sudo su` aus und gib dein Passwort ein. Danach führe `sudo passwd` aus, um das Passwort zu ändern. Gib nun das neue gewünschte Passwort für den Root-User ein. Fertig, du kannst dich jetzt mit dem User `root` anmelden.



## Fazit

Glückwunsch, du hast das Ubuntu 22.04 Betriebssystem erfolgreich auf deinem Dedicated Server installiert. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Verfügung! 🙂






<InlineVoucher />