---
id: dedicated-linux-ubuntu-2204
title: "Dedicated Server: Installation von Ubuntu 18.04"
description: Informationen zur Installation des Betriebssystems Ubuntu 18.04 auf deinem dedizierten Server von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Ubuntu 18.04
services:
  - dedicated

---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Im Folgenden wird dir Schritt für Schritt erklärt, wie du das Debian Betriebssystem auf deinem Dedicated Server installieren und konfigurieren kannst. Folge diesen Anweisungen sorgfältig, um sicherzustellen, dass du das Betriebssystem erfolgreich einrichtest und optimal nutzt.



:::warning Neuere Version verfügbar / EOL Details

Die neueste Version von Ubuntu ist die [24.04](https://zap-hosting.com/guides/de/docs/dedicated-ubuntu) Version. Wir empfehlen, die neueste Version für langfristige Projekte zu verwenden.

Der Support für ältere Ubuntu Versionen wird früher oder später eingestellt werden. Die folgenden Termine sind für Ubuntu 18.04 vorgesehen:

- Ende des Standard Support: 01.03.2023
- Ende des  Ubuntu Pro Support: 01.04.2028
- Ende des Legacy Support: 01.04.2030

Mehr Informationen können auf der [offiziellen Website](https://ubuntu.com/about/release-cycle) abgerufen werden.
:::

<InlineVoucher />


## Vorbereitung

Für die Installation und Konfiguration eines Betriebssystems ist es zunächst wichtig, dass die entsprechende ISO vom Betriebssystem gemountet wird. Für das Mounten gibt es mehrere mögliche Wege: 

1. Mounten über die Ersteinrichtung
2. Mounten über die iLO (Virtual Media)
3. Mounten über die iLO (Remote Console)

Solltest du mit dem Mounten einer ISO-Datei noch nicht vertraut sein, dann schaue dir am besten unsere [Ersteinrichtung](dedicated-setup.md) oder [Eigene ISO](dedicated-iso.md) Anleitung an.



## Installation

Sobald die ISO-Datei erfolgreich gemountet und geladen wurde, sollte sich der Server im Setup-Prozess befinden. Die Sprache, die du für dein Betriebssystem verwenden möchtest, wird zu Beginn des Setups festgelegt. Wähle eine der verfügbaren Sprachen und bestätige die Auswahl mit der `Enter` Taste. 

![](https://screensaver01.zap-hosting.com/index.php/s/yrHMNzstM23XZH6/preview)

Als nächstes muss das passende Tastaturlayout ausgewählt und für die Sprache eingestellt werden. Wähle auch hier die für dich passende Tastaturbelegung. 

![](https://screensaver01.zap-hosting.com/index.php/s/x9kYGEWS5fy7Wjp/preview)

Anschließend erfolgt die Netzwerkkonfiguration. Der Server wird standardmäßig über DHCP konfiguriert. Der Standard-Netzwerkadapter ist `eno1`. Bestätige die Standardeinstellungen und fahre fort. 

![](https://screensaver01.zap-hosting.com/index.php/s/6mr5kAKJQ39iJt5/preview)

Optional kann ein zusätzlicher Proxy konfiguriert werden. Dies ist jedoch nicht unbedingt erforderlich. Wenn du das nicht benötigst, dann überspringe diesen Schritt einfach. 

![](https://screensaver01.zap-hosting.com/index.php/s/tz97Ee8ZQkxAGGb/preview)

Nun wird der Ubuntu Archive Mirror (Download-Server für Pakete) definiert. Unsere dedizierten Server befinden sich in Deutschland, daher empfehlen wir, den deutschen Mirror-Standort zu wählen, um die bestmögliche Download Geschwindigkeit zu erreichen.

![](https://screensaver01.zap-hosting.com/index.php/s/xNknNyWAbd5DnsZ/preview)

Die Partitionen können nun in der Speicherkonfiguration definiert werden. Du kannst entweder eine große Partition verwenden oder sie bei Bedarf unterteilen. Wenn du nur die gesamte SSD als eine Partition verwenden möchtest, wähle einfach `Use an entire disk` und fahre fort.

![](https://screensaver01.zap-hosting.com/index.php/s/2dJ9oeMGjpWn6cZ/preview)

Das Setup erstellt automatisch die Volumes und du kannst fortfahren, indem du die `Done` Option wählst.

![](https://screensaver01.zap-hosting.com/index.php/s/WXfzt57Rtm2SQLD/preview)

Bevor der Vorgang eingeleitet wird, wirst du darauf hingewiesen, dass bei diesem Vorgang alle vorhandenen Daten gelöscht werden. Diese Meldung muss mit der Option `Continue` bestätigt werden. 

![](https://screensaver01.zap-hosting.com/index.php/s/L3YcGNbYWpMmaDj/preview)

Bitte konfiguriere dein Benutzerkonto nach deinen Wünschen, du kannst auch das Root-Konto verwenden, indem du das Passwort änderst.
Du kannst mit der Tabulatortaste oder den Pfeiltasten durch die Optionen navigieren. Sobald du fertig bist, kannst du mit einem Klick auf `Done` fortfahren.

![](https://screensaver01.zap-hosting.com/index.php/s/mqrjmF2ZmA2Qj9z/preview)





Die Installation der SSH-Einrichtung wird empfohlen. Wenn du den Server per SSH verwalten willst, wähle die Option zur Installation aus und bestätige den Vorgang.

![](https://screensaver01.zap-hosting.com/index.php/s/Xz3zzMdZ6C523ip/preview)

Ubuntu bietet dir ein paar Paketsammlungen aus, sofern du etwas davon nutzen möchtest, wähle diese einfach aus.

![](https://screensaver01.zap-hosting.com/index.php/s/wcGiSwX935jXeex/preview)

Um den Vorgang abzuschließen, muss die ISO-Datei ausgeworfen werden, damit sie beim Neustart des Servers nicht erneut geladen wird. Starte den Server einmal neu, um den Vorgang abzuschließen. 

![](https://screensaver01.zap-hosting.com/index.php/s/SzrxCtJTx2S8Nef/preview)



![](https://screensaver01.zap-hosting.com/index.php/s/x3BRLSepSDFnYGA/preview)



## Konfiguration



### Passwortänderung des Root Benutzers

Du kannst das Passwort des Root-Benutzers einfach ändern. Führe `sudo su` aus und gib dein Passwort ein. Führe danach `sudo passwd` aus, um das Passwort zu ändern. Gib nun das neue gewünschte Passwort für den Root-Benutzer ein. Das war's, du kannst dich jetzt mit deinem Benutzeraccount `root` anmelden.



## Abschluss

Glückwunsch, du hast das Ubuntu 18.04 Betriebssystem erfolgreich installiert. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂





