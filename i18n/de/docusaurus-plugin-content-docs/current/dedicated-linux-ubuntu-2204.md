---
id: dedicated-linux-ubuntu-2204
title: "Dedicated Server: Installation von Ubuntu 22.04"
description: "Entdecke, wie du Ubuntu erfolgreich auf deinem Dedicated Server installierst und konfigurierst – für optimale Performance und langfristigen Support → Jetzt mehr erfahren"
sidebar_label: Ubuntu 22.04
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Im Folgenden erklären wir dir Schritt für Schritt, wie du das Ubuntu-Betriebssystem auf deinem Dedicated Server installierst und konfigurierst. Folge diesen Anweisungen sorgfältig, damit du das Betriebssystem erfolgreich einrichtest und optimal nutzen kannst.



:::warning Neuere Version verfügbar / EOL-Details

Die aktuellste Ubuntu-Version ist die [24.04](dedicated-linux-ubuntu.md). Für langfristige Projekte empfehlen wir dir, immer die neueste Version zu verwenden.

Der Support für ältere Ubuntu-Versionen wird früher oder später eingestellt. Für die Version 22.04 sind folgende Termine geplant:

- Ende des Standard-Supports: 01.04.2027
- Ende des Ubuntu Pro Supports: 01.04.2032
- Ende des Legacy-Supports: 01.04.2034

Mehr Infos findest du auf der [offiziellen Webseite](https://ubuntu.com/about/release-cycle).
:::




## Vorbereitung

Für die Installation und Konfiguration eines Betriebssystems ist es zunächst wichtig, das passende ISO-Image des Betriebssystems zu mounten. Dafür gibt es mehrere Möglichkeiten:

1. Mounten über die Ersteinrichtung
2. Mounten über iLO (Virtual Media)
3. Mounten über iLO (Remote Console)

Wenn du noch nicht vertraut bist mit dem Mounten einer ISO-Datei, empfehlen wir dir unsere [Ersteinrichtung](dedicated-setup.md) oder die [Eigene ISO](dedicated-iso.md) Anleitung.



## Installation

Sobald das ISO erfolgreich gemountet und geladen wurde, sollte sich der Server im Setup-Prozess befinden. Zu Beginn des Setups legst du die Sprache fest, die du für dein OS verwenden möchtest. Wähle eine der verfügbaren Sprachen aus und bestätige mit der `Enter`-Taste.

![](https://screensaver01.zap-hosting.com/index.php/s/yrHMNzstM23XZH6/preview)

Als Nächstes wird das passende Tastaturlayout für die Sprache ausgewählt und eingestellt. Wähle hier ebenfalls das für dich passende Layout aus.

![](https://screensaver01.zap-hosting.com/index.php/s/x9kYGEWS5fy7Wjp/preview)

Danach erfolgt die Netzwerkkonfiguration. Standardmäßig wird der Server per DHCP konfiguriert. Der Standard-Netzwerkadapter ist `eno1`. Bestätige die Voreinstellungen und fahre fort.

![](https://screensaver01.zap-hosting.com/index.php/s/6mr5kAKJQ39iJt5/preview)

Optional kannst du einen zusätzlichen Proxy konfigurieren. Das ist aber nicht zwingend notwendig. Wenn du keinen brauchst, überspringe diesen Schritt einfach.

![](https://screensaver01.zap-hosting.com/index.php/s/tz97Ee8ZQkxAGGb/preview)

Jetzt wird der Ubuntu Archive Mirror (Download-Server für Pakete) festgelegt. Unsere Dedicated Server stehen in Deutschland, daher empfehlen wir, den deutschen Mirror auszuwählen, um die bestmöglichen Download-Geschwindigkeiten zu erzielen.

![](https://screensaver01.zap-hosting.com/index.php/s/xNknNyWAbd5DnsZ/preview)

Im nächsten Schritt kannst du die Partitionen in der Speicher-Konfiguration festlegen. Du kannst entweder eine große Partition nutzen oder sie bei Bedarf aufteilen. Wenn du die gesamte SSD als eine Partition verwenden möchtest, wähle einfach `Use an entire disk` und fahre fort.

![](https://screensaver01.zap-hosting.com/index.php/s/2dJ9oeMGjpWn6cZ/preview)

Das Setup erstellt die Volumes automatisch, danach kannst du mit der Option `Done` weitermachen.

![](https://screensaver01.zap-hosting.com/index.php/s/WXfzt57Rtm2SQLD/preview)

Bevor der Prozess gestartet wird, wirst du darauf hingewiesen, dass dabei alle vorhandenen Daten gelöscht werden. Diese Meldung musst du mit `Continue` bestätigen.

![](https://screensaver01.zap-hosting.com/index.php/s/L3YcGNbYWpMmaDj/preview)

Bitte richte deinen Benutzeraccount nach deinen Wünschen ein. Du kannst am Ende auch den Root-Account nutzen, indem du das Passwort änderst.  
Mit Tab oder den Pfeiltasten kannst du dich durch die Optionen bewegen. Wenn du fertig bist, bestätige mit `Done`.

![](https://screensaver01.zap-hosting.com/index.php/s/mqrjmF2ZmA2Qj9z/preview)





Die Installation des SSH-Setups wird empfohlen. Wenn du den Server per SSH verwalten möchtest, wähle die Option zur Installation und bestätige den Vorgang.

![](https://screensaver01.zap-hosting.com/index.php/s/Xz3zzMdZ6C523ip/preview)

Ubuntu bietet einige Standard-Snaps an. Wenn du welche davon nutzen möchtest, setze einfach die Häkchen bei den gewünschten.

![](https://screensaver01.zap-hosting.com/index.php/s/wcGiSwX935jXeex/preview)

Zum Abschluss muss das ISO ausgeworfen werden, damit es beim Neustart des Servers nicht erneut geladen wird. Starte den Server einmal neu, um den Vorgang abzuschließen.

![](https://screensaver01.zap-hosting.com/index.php/s/SzrxCtJTx2S8Nef/preview)



![](https://screensaver01.zap-hosting.com/index.php/s/x3BRLSepSDFnYGA/preview)



## Konfiguration



### Passwort des Root-Users ändern

Du kannst das Passwort des Root-Users ganz einfach ändern. Führe `sudo su` aus und gib dein Passwort ein. Danach führst du `sudo passwd` aus, um das Passwort zu ändern. Gib nun das neue gewünschte Passwort für den Root-User ein. Fertig – du kannst dich jetzt mit dem User `root` anmelden.



## Abschluss

Glückwunsch, du hast Ubuntu 22.04 erfolgreich auf deinem Dedicated Server installiert. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂