---
id: dedicated-linux-debian
title: "Dedicated Server: Installation von Debian"
description: Informationen zu der Installation des Debian Betriebssystem auf deinem Dedicated Server von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Debian installieren
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Im Folgenden wird dir Schritt für Schritt erklärt, wie du das Debian Betriebssystem auf deinem Dedicated Server installieren und konfigurieren kannst. Folge diesen Anweisungen sorgfältig, um sicherzustellen, dass du das Betriebssystem erfolgreich einrichtest und optimal nutzt.

:::info
Der Aufbau der Anleitung basiert auf der Verwendung des Windows Server 2019 Betriebssystems. Installationen von früheren oder neueren Versionen können hinsichtlich des Prozesses leicht abweichen. 
:::

<InlineVoucher />

## Vorbereitung

Für die Installation und Konfiguration eines Betriebssystems ist es zunächst wichtig, dass die entsprechende ISO vom Betriebssystem gemountet wird. Für das Mounten gibt es mehrere mögliche Wege: 

1. Mounten über die Ersteinrichtung
2. Mounten über die iLO (Virtual Media)
3. Mounten über die iLO (Remote Console)

Solltest du mit dem Mounten einer ISO-Datei noch nicht vertraut sein, dann schaue dir am besten unsere [Ersteinrichtung](dedicated-setup.md) oder [Eigene ISO](dedicated-iso.md) Anleitung an.



## Installation

Wenn die ISO erfolgreich geladen wurde, ist der Server erfolgreich im Setup.

![image](https://screensaver01.zap-hosting.com/index.php/s/n4Jzn7rbHFqsCJj/preview)

In diesem Beispiel durchlaufen wir den Installations-Prozess mit dem "klassischen" Install.

![image](https://screensaver01.zap-hosting.com/index.php/s/wcSMJstaimx6BTw/preview)

Wähle deine gewünschte Sprache aus, in welchem der Installations-Assitent angezeigt werden soll.
Bedenke jedoch, dass diese Sprache sich später auch auf das installierte System auswirkt.

![image](https://screensaver01.zap-hosting.com/index.php/s/qjqMQa47qK7RPgn/preview)

Unser gewünschter Ort befindet sich nicht in der direkten Auswahl, weshalb wir mit "Other" zur nächsten Seite wechseln.

![image](https://screensaver01.zap-hosting.com/index.php/s/WAoytFfgEPajR27/preview)

Wir wählen die europäische Zone.

![image](https://screensaver01.zap-hosting.com/index.php/s/feBcngm3tMQBGKn/preview)

Abhängig von der gewünschten Zeitzone wählen wir in diesem Beispiel die deutsche Zeitzone.

![image](https://screensaver01.zap-hosting.com/index.php/s/CH7gQgfpPqQdaDY/preview)

Wir wählen United States als locale.

![image](https://screensaver01.zap-hosting.com/index.php/s/Jsodox6tKH9RkQ7/preview)

In unserem Fall wählen wir das deutsche Tastaturlayout, welches dem QWERTZ Layout entspricht.

:::info
Dein Server bereitet nun einige für die Installation notwendige Komponenten vor, dies kann einen Augenblick in Anspruch nehmen.
:::

![image](https://screensaver01.zap-hosting.com/index.php/s/RCtWXDFTt38sWHN/preview)

Dein Server konfiguriert seine Netzwerkschnittstelle automatisiert durch DHCP.
Wähle `eno1` dies ist der Netzwerkadapter deines ZAP Dedicated Servers.

![image](https://screensaver01.zap-hosting.com/index.php/s/ioqxtQBeoMWcZs2/preview)

Der Hostname kann von dir beliebig verändert werden, muss jedoch nicht angepasst werden.

![image](https://screensaver01.zap-hosting.com/index.php/s/7E68LZtRbmEfDKB/preview)

Der Domain Name muss ebenfalls nicht verändert werden.

![image](https://screensaver01.zap-hosting.com/index.php/s/LsWmbWwq6tSFK3n/preview)

Hier muss das Passwort für deinen "Root" Account gesetzt werden, notiere dir das gewählte Passwort **unbedingt**.

![image](https://screensaver01.zap-hosting.com/index.php/s/SExLaA5drcGK44a/preview)

Zur Bestätigung muss das Passwort erneut eingegeben werden.

:::info
Der Installations-Assistent verlangt die Erstellung eines zweiten Nutzerkontos
:::

![image](https://screensaver01.zap-hosting.com/index.php/s/DtFKCWw3rBMRodS/preview)

Gib jetzt den Namen des Besitzers für ein normales Nutzerkonto ein, du kannst hier natürlich frei wählen, was du einträgst.

:::info
Du kannst natürlich weiterhin das "Root"-Konto benutzen
:::

***

![image](https://screensaver01.zap-hosting.com/index.php/s/rgbKxQN2qcG3d6Y/preview)

Gib jetzt den Nutzernamen des Kontos ein. Wähle außerdem ein Passwort deiner Wahl und bestätige dies nochmals. Dein Server bereitet nun den nächsten Installationsabschnitt vor.

![image](https://screensaver01.zap-hosting.com/index.php/s/mbCLzX3MbmqKnfc/preview)

Du hast nun die Möglichkeit nach Wunsch Partitionen anzulegen oder alternativ die ganze SSD als 1 Partition zu nutzen.
Solltest du nichts an der Partition verändern wollen, wähle einfach "Guided - Use entire disk".

![image](https://screensaver01.zap-hosting.com/index.php/s/WcK2nnpFtED9SXD/preview)

Wähle die in deinem Server verbaute SSD aus.

![image](https://screensaver01.zap-hosting.com/index.php/s/3LZFqCjJFkyyWGr/preview)

Grundsätzlich ist es ausreichend, wenn die komplette Struktur auf einer Partition abgespeichert wird.

![image](https://screensaver01.zap-hosting.com/index.php/s/qACKcC4KAqSFFLi/preview)

Wir bestätigen die Konfiguration mit "Finish partitioning and write changes to disk".

:::info
Sollten alte Partitionen auf deiner SSD vorhanden sein, bestätigen wir das Überschreiben einfach mit "Yes"
:::

Dein Server führt nun die Partitionierung durch und bereitet die Installation des Systems vor.



![image](https://screensaver01.zap-hosting.com/index.php/s/KH9BxoZREK253RH/preview)

Solltest du noch andere Installationsmedien beispielsweise für bestimmte Pakete einbinden wollen, könnte das nun geschehen.
Im Regelfall kannst du jedoch alle Pakete bequem nachher über die Paketverwaltung (apt) herunterladen.

![image](https://screensaver01.zap-hosting.com/index.php/s/7bdsRJjtz2tSFDM/preview)

Unser dedizierter Server steht in Deutschland, somit wählen wir auch den deutschen Mirror-Standort, um die bestmögliche Download-Rate zu erreichen.

![image](https://screensaver01.zap-hosting.com/index.php/s/3yn5scBRtYfzgg6/preview)

Grundsätzlich empfehlen wir das normale Debian Repository zu benutzen.

![image](https://screensaver01.zap-hosting.com/index.php/s/A7YB9N5rwcgwZ2n/preview)

Solltest du einen HTTP-Proxy nutzen wollen, könntest du die Daten eintragen. (nicht erforderlich)

![image](https://screensaver01.zap-hosting.com/index.php/s/QSLJQEq9RJGFXC4/preview)

Das System möchte anonymisierte Statistiken sammeln, dies kann abgelehnt oder bestätigt werden.

![image](https://screensaver01.zap-hosting.com/index.php/s/2J9gxDCsXtqb6ky/preview)

Wähle nun die Pakete aus, welche installiert werden sollen:

* Debian desktop enviroment
Würde eine grafische Oberfläche auf deinem Server erzeugen, wir nutzen jedoch in diesem Beispiel lediglich die Shell Ebene des Servers.

* SSH server
Wird benötigt, um beispielsweise mit PuTTY verbinden zu können.

* standard system utilities
Wird benötigt, um eine Anzahl gewisser Grundpakete bereitstellen zu können.

Die Auswahl der verschiedenen Pakete erfolgt hier per TAB, Pfeiltasten. Markiert oder abgewählt werden Pakete mit der Leertaste.
Wenn du mit deiner Auswahl zufrieden bist, drücke so lange TAB bis du bei [Continue] landest und bestätige mit Enter.

![image](https://screensaver01.zap-hosting.com/index.php/s/WZKK7PEgPSEdHYw/preview)

Dadurch, dass dieses Betriebssystem, das einzige auf dem aktuellen Server ist, mit `Yes` bestätigen.

![image](https://screensaver01.zap-hosting.com/index.php/s/67gSxDiLjArAi8H/preview)

Als Speicherort wählen wir den vorgegebenen Ort auf unserer SSD.

:::info
🎉 Die Installation deines Debian-Systems ist nun fertig.
:::

Öffne in deiner iLO "Virtual Media" und drücke "Eject Media", um die ISO aus dem System zu entfernen.

![image](https://screensaver01.zap-hosting.com/index.php/s/tGrAZ5W2bPoRtZL/preview)

Wenn dies erfolgreich erledigt ist, wählen wir Continue, der Server wird nun einen Neustart durchführen.

![image](https://screensaver01.zap-hosting.com/index.php/s/x5iWBTWg2QAGkkf/preview)



## Konfiguration



### SSH Zugang

Wenn der Neustart deines Servers durchgeführt wurde und die Installation erfolgreich verlaufen ist, wirst du nun zur Anmeldung aufgefordert.

![image](https://screensaver01.zap-hosting.com/index.php/s/tjDSEmckaGQ77He/preview)

Natürlich möchte man auch seinen Server über SSH, also beispielsweise PuTTY verwalten können, weshalb wir den Login dafür noch aktivieren müssen:

![image](https://screensaver01.zap-hosting.com/index.php/s/2Ti98FB749PGctD/preview)

Öffne mit nano die Konfigurations-Datei deines SSH-Dienstes `nano /etc/ssh/sshd_config`

![image](https://screensaver01.zap-hosting.com/index.php/s/9EZ7zK8ece2fgkD/preview)

Suche die Stelle `#PermitRootLogin no` und ändere es zu `PermitRootLogin yes`. Drücke nun `STRG + X` und bestätige deine Änderungen mit `Y`. Als Nächstes muss der SSH-Dienst noch neu gestartet werden, gib hierzu `service ssh restart` ein.

Dein SSH-Login ist nun aktiv und du kannst beispielsweise per PuTTY verbinden. Gib hierzu die IP-Adresse deines Servers, welche du in deinem Dashboard siehst, ein und nutze die vorher definierten Anmeldedaten.

![image](https://screensaver01.zap-hosting.com/index.php/s/TzFoYNWRjmWjetA/preview)

:::info
Bei weiteren Fragen und Problemen steht dir unser Support jederzeit gerne zur Verfügung
:::

