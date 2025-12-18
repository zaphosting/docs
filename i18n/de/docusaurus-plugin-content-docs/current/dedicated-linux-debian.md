---
id: dedicated-linux-debian
title: "Dedicated Server: Installation von Debian"
description: "Lerne, wie du das Debian OS auf deinem Dedicated Server installierst und konfigurierst für optimale Performance und Zuverlässigkeit → Jetzt mehr erfahren"
sidebar_label: Debian installieren
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Im Folgenden erklären wir dir Schritt für Schritt, wie du das Debian Betriebssystem auf deinem Dedicated Server installierst und konfigurierst. Folge diesen Anweisungen sorgfältig, damit du das Betriebssystem erfolgreich einrichtest und optimal nutzen kannst.

:::info

Die Struktur der Anleitung basiert auf der Nutzung von Debian 10. Installationen von älteren oder neueren Versionen können im Ablauf leicht abweichen.

:::



## Vorbereitung

Für die Installation und Konfiguration eines Betriebssystems ist es zunächst wichtig, das passende ISO-Image des Betriebssystems einzubinden. Es gibt mehrere Möglichkeiten, das ISO zu mounten:

1. Mounten über die Ersteinrichtung
2. Mounten über iLO (Virtual Media)
3. Mounten über iLO (Remote Console)

Wenn du noch nicht vertraut bist mit dem Mounten einer ISO-Datei, empfehlen wir dir unsere [Ersteinrichtung](dedicated-setup.md) oder [Eigene ISO](dedicated-iso.md) Anleitung.



## Installation

Wenn das ISO erfolgreich geladen wurde, befindet sich der Server im Setup-Prozess.

![](https://screensaver01.zap-hosting.com/index.php/s/QdRyxyaSLWPGHwN/preview)

In diesem Beispiel gehen wir den Installationsprozess mit der „klassischen“ Installation durch.

![](https://screensaver01.zap-hosting.com/index.php/s/YEy9jKbPcmCwD22/preview)

Wähle deine gewünschte Sprache, in der der Installationsassistent angezeigt wird. Beachte, dass diese Sprache später das installierte System beeinflusst.

![](https://screensaver01.zap-hosting.com/index.php/s/qprfbz2SPf5MZ4j/preview)

Unser gewünschter Standort ist nicht auf der ersten Auswahlseite, also gehen wir mit „Andere“ auf die nächste Seite.

![](https://screensaver01.zap-hosting.com/index.php/s/frH9t9arerKxecZ/preview)

In unserem Beispiel wählen wir die Option „Europa“.

![](https://screensaver01.zap-hosting.com/index.php/s/5DyPjbG3S2Mr3zC/preview)

Je nach gewünschter Zeitzone wählen wir hier die deutsche Zeitzone.

![](https://screensaver01.zap-hosting.com/index.php/s/F3SCKdb2dCrqndM/preview)

Als Gebietsschema wählen wir United States.

![](https://screensaver01.zap-hosting.com/index.php/s/zYP8rRJN9G4ftPx/preview)

In unserem Fall wählen wir das deutsche Tastaturlayout, also QWERTZ. Wenn du aus Amerika kommst, wäre das Standardlayout QWERTY.

:::info
Dein Server bereitet jetzt einige Komponenten vor, die für die Installation notwendig sind. Das kann ein paar Minuten dauern.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/XmLgEHDszmHG23r/preview)

Dein Server konfiguriert seine Netzwerkschnittstelle automatisch per DHCP. Wähle `eno1`, das ist der Standard-Netzwerkadapter deines ZAP Dedicated Servers. ![](https://screensaver01.zap-hosting.com/index.php/s/Q8RRoMwfeTMPpxE/preview)

Der Hostname kann bei Bedarf geändert werden, muss aber nicht.

![](https://screensaver01.zap-hosting.com/index.php/s/onWnt4GArJZcJgX/preview)

Der Domainname muss ebenfalls nicht geändert werden.

![](https://screensaver01.zap-hosting.com/index.php/s/wRLRrxrDKLf5d4q/preview)

Hier musst du das Passwort für deinen „root“-Account festlegen. Notiere dir das gewählte Passwort gut.

![](https://screensaver01.zap-hosting.com/index.php/s/SQeqqKDZx3PjWTs/preview)

Zur Bestätigung musst du das Passwort nochmal eingeben.

:::info
Der Installationsassistent fragt dich, ob du einen zweiten Benutzeraccount anlegen möchtest.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/CLxectPXbqzteqf/preview)

Gib jetzt den Namen des Besitzers für einen normalen Benutzeraccount ein. Du kannst natürlich frei wählen, was du hier eingibst.

:::info
Du kannst natürlich am Ende auch den „root“-Account nutzen.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/GixGJyTfAzENSmc/preview)

Gib nun den Benutzernamen für den Account ein. Wähle auch ein Passwort deiner Wahl und bestätige es erneut. Dein Server bereitet jetzt die nächsten Installationsschritte vor.

![](https://screensaver01.zap-hosting.com/index.php/s/NM8fdY9J8qwiNGJ/preview)

Du hast jetzt die Möglichkeit, Partitionen zu erstellen oder alternativ die gesamte SSD als eine Partition zu nutzen. Wenn du nichts an der Partitionierung ändern möchtest, wähle einfach „Geführt – gesamte Festplatte verwenden“.

***

![](https://screensaver01.zap-hosting.com/index.php/s/J37QtNNMXA8m49Z/preview)

Wähle die SSD aus, die in deinem Server verbaut ist. ![](https://screensaver01.zap-hosting.com/index.php/s/foqPgy3oPbzDAZf/preview)

Grundsätzlich ist es okay, wenn die komplette Struktur auf einer Partition liegt. ![](https://screensaver01.zap-hosting.com/index.php/s/ApME7eaxLkWmNew/preview)

Wir bestätigen die Konfiguration mit „Partitionierung beenden und Änderungen auf die Festplatte schreiben“.

:::info
Falls sich noch alte Partitionen auf deiner SSD befinden, bestätige das Überschreiben mit „Ja“.
:::

Dein Server führt jetzt die Partitionierung durch und bereitet die Installation des Systems vor.

![](https://screensaver01.zap-hosting.com/index.php/s/JoJ6MppTzm79R3R/preview)

Wenn du weitere Installationsmedien einbinden möchtest, z.B. für bestimmte Pakete, kannst du das jetzt tun. Normalerweise kannst du aber alle Pakete bequem später über den Paketmanager (apt) herunterladen.

![](https://screensaver01.zap-hosting.com/index.php/s/c6Mq4kP7mYYWyLL/preview)

Unsere Dedicated Server stehen in Deutschland, daher empfehlen wir, den deutschen Spiegelserver auszuwählen, um die bestmöglichen Downloadgeschwindigkeiten zu erzielen.

![](https://screensaver01.zap-hosting.com/index.php/s/8nReYnYopxJNBmg/preview)

Grundsätzlich empfehlen wir, das Standard-Debian-Repository zu nutzen.

![](https://screensaver01.zap-hosting.com/index.php/s/iqZSLMBqbx8ZDdZ/preview)

Wenn du einen HTTP-Proxy verwenden möchtest, kannst du die Daten hier eingeben. (ist nicht zwingend erforderlich)

![](https://screensaver01.zap-hosting.com/index.php/s/Ty7BzmzXY78x38q/preview)

Das System möchte anonymisierte Statistiken sammeln, das kannst du ablehnen oder bestätigen.

![](https://screensaver01.zap-hosting.com/index.php/s/gwxF4k5jf3o3xM4/preview)

Jetzt wähle die Pakete aus, die du installieren möchtest:

* Debian Desktop-Umgebung  
Erstellt eine grafische Benutzeroberfläche auf deinem Server, aber in diesem Beispiel nutzen wir nur die Shell-Ebene.

* SSH-Server  
Wird benötigt, um z.B. mit PuTTY eine Verbindung herzustellen.

* Standard-Systemwerkzeuge  
Stellt eine Reihe von Basis-Paketen bereit.

Die Auswahl der Pakete erfolgt mit `TAB` und den Pfeiltasten. Pakete werden mit der Leertaste ausgewählt oder abgewählt.  
Wenn du zufrieden bist, drücke `TAB`, bis du auf „Weiter“ kommst, und bestätige mit Enter.

![](https://screensaver01.zap-hosting.com/index.php/s/mwbNHxBCHxXPQiw/preview)

Bestätige, dass dieses Betriebssystem das einzige auf dem aktuellen Server ist mit `Ja`.

![](https://screensaver01.zap-hosting.com/index.php/s/YWiBDBMNsczMHcm/preview)

Als Speicherort wählen wir den Standardpfad auf unserer SSD.

:::info
🎉 Die Installation deines Debian-Systems ist jetzt abgeschlossen.
:::

Öffne „Virtual Media“ in deinem iLO und klicke auf „Medium auswerfen“, um die ISO-Datei aus dem System zu entfernen.

![](https://screensaver01.zap-hosting.com/index.php/s/WMTJ88CFBsQ2miz/preview)

Wenn das erfolgreich erledigt ist, wählen wir „Weiter“, der Server startet jetzt neu.

![](https://screensaver01.zap-hosting.com/index.php/s/pYysYayb6d2rQtb/preview)



## Konfiguration

### SSH Login

Sobald der Neustart deines Servers abgeschlossen ist und die Installation erfolgreich war, wirst du zur Anmeldung aufgefordert.

![](https://screensaver01.zap-hosting.com/index.php/s/7PxyTxE56GgcAbE/preview)

Natürlich möchtest du deinen Server auch per SSH verwalten können, z.B. mit PuTTY. Dafür müssen wir den Login noch aktivieren:

![](https://screensaver01.zap-hosting.com/index.php/s/Y2YiFyX9HkjoSco/preview)

Öffne mit nano die Konfigurationsdatei deines SSH-Dienstes `nano /etc/ssh/sshd_config`.

![](https://screensaver01.zap-hosting.com/index.php/s/HyJaCWFzZ7R3kjR/preview)

Suche nach `#PermitRootLogin no` und ändere es zu `PermitRootLogin yes`.

Drücke jetzt `CTRL + X` und bestätige deine Änderungen mit `Y`.

Danach musst du den SSH-Dienst neu starten mit `service ssh restart`.

Dein SSH-Login ist jetzt aktiv und du kannst dich z.B. mit PuTTY verbinden.  
Gib die IP-Adresse deines Servers ein, die du in deinem ZAP Dashboard siehst, und nutze die zuvor definierten Zugangsdaten.

![](https://screensaver01.zap-hosting.com/index.php/s/qBqF2fPmyWrtH6Q/preview)

:::tip
Wenn du weitere Fragen oder Probleme hast, hilft dir unser Support gerne weiter!
:::





## Fazit

Glückwunsch, du hast das Debian Betriebssystem erfolgreich auf deinem Dedicated Server installiert. Für weitere Fragen oder Unterstützung steht dir unser Support-Team täglich zur Verfügung! 🙂