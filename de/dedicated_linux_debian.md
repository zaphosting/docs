---
id: dedicated_linux_debian
title: Debian installieren
sidebar_label: Debian installieren
---
> In diesem Beispiel wird die Installation von Debian 10 durchgeführt

## 📋 Vorbereitungen
Wähle in deinem ZAP-Interface die gewünschte ISO von Debian aus und lasse den Server mit der ISO booten, bis dieser im Setup ist.

> Die Navigation im Setup Prozess erfolgt mit TAB, Leertaste und Enter.
> TAB = Zwischen Menüpunkten wechseln, Leertaste = markieren, Enter = Bestätigen

***

## ⌚ Das Setup
Wenn die ISO erfolgreich geladen wurde, ist der Server erfolgreich im Setup.

![](https://screensaver01.zap-hosting.com/index.php/s/xBid8JHQYrnEAHw/preview)

In diesem Beispiel durchlaufen wir den Installations-Prozess mit dem "klassischen" Install.

***

![](https://screensaver01.zap-hosting.com/index.php/s/mpNtF7dPnyGSaXW/preview)

Wähle deine gewünschte Sprache aus, in welchem der Installations-Assitent angezeigt werden soll.
Bedenke jedoch, das diese Sprache sich später auch auf das installierte System auswirkt.

***

![](https://screensaver01.zap-hosting.com/index.php/s/H9oKPoij5PZGzt4/preview)

Unser gewünschter Ort befindet sich nicht in der direkten Auswahl, weshalb wir mit "Other" zur nächsten Seite wechseln.

***

![](https://screensaver01.zap-hosting.com/index.php/s/6MqRL3q86ZQKLnc/preview)

Wir wählen die Europäische Zone.

***

![](https://screensaver01.zap-hosting.com/index.php/s/eF4LZZcEtA37NTo/preview)

Abhängig von der gewünschten Zeitzone, wählen wir in diesem Beispiel die deutsche Zeitzone.

***

![](https://screensaver01.zap-hosting.com/index.php/s/P3yYYppRS9WzXmX/preview)

Wir wählen United States als locale.

***

![](https://screensaver01.zap-hosting.com/index.php/s/SQYySTyANQSmCyn/preview)

In unserem Fall wählen wir das deutsche Tastaturlayout welches dem QWERTZ Layout entspricht.

> Dein Server bereitet nun einige für die Installation notwendige Komponenten vor, dies kann einen Augenblick in Anspruch nehmen.

### 🔧 Konfigurationen

![](https://screensaver01.zap-hosting.com/index.php/s/A498pCB6wYoxq4q/preview)

Dein Server konfiguiert seine Netzwerkschnittstelle automatisiert durch DHCP.
Wähle `eno1` dies ist der Netzwerkadapter deines ZAP Dedicated Servers.

***

![](https://screensaver01.zap-hosting.com/index.php/s/7F8qJHEBAnDby8i/preview)

Der Hostname kann von dir beliebig verändert werden, muss jedoch nicht angepasst werden.

***

![](https://screensaver01.zap-hosting.com/index.php/s/kQQfeLFB8j9GMys/preview)

Der Domain Name muss ebenfalls nicht verändert werden.

***

![](https://screensaver01.zap-hosting.com/index.php/s/HA9dxxopPrMKxJr/preview)

Hier muss das Passwort für deinen "Root" Account gesetzt werden, notiere dir das gewählte Passwort **unbedingt**.

***

![](https://screensaver01.zap-hosting.com/index.php/s/baisp9KTsWSrg75/preview)

Zur Bestätigung muss das Passwort erneut eingegeben werden.

***

> Der Installations-Assistent verlangt die Erstellung eines zweiten Nutzerkontos

![](https://screensaver01.zap-hosting.com/index.php/s/WW5bySQkwXpggNm/preview)

Gib nun den Namen des Besitzers für ein normales Nutzerkonto ein, du kannst hier natürlich frei wählen was du einträgst.

> Du kannst natürlich weiterhin das "Root"-Konto benutzen

***

![](https://screensaver01.zap-hosting.com/index.php/s/JjAdtZCpDjCXqw7/preview)

Gib nun den Nutzernamen des Kontos ein.
Wähle außerdem ein Passwort deiner Wahl und bestätige dies nochmals.

Dein Server bereitet nun den nächsten Installationsabschnitt vor.

### 💾 Partitionierung

![](https://screensaver01.zap-hosting.com/index.php/s/k4NCSf4fX4LPC5s/preview)

Du hast nun die Möglichkeit nach Wunsch Partitionen anzulegen oder alternativ die ganze SSD als 1 Partition zu nutzen.
Solltest du nichts an der Partition verändern wollen wähle einfach "Guided - Use entire disk"

***

![](https://screensaver01.zap-hosting.com/index.php/s/JKmKXDNKgSWsq7e/preview)

Wähle die in deinem Server verbaute SSD aus.

***

![](https://screensaver01.zap-hosting.com/index.php/s/Py2N7bjAiGQDCJr/preview)

Grundsätzlich ist es ausreichend wenn die komplette Struktur auf einer Partition abgespeichert wird.

***

![](https://screensaver01.zap-hosting.com/index.php/s/H9NnqCEj4SecmwA/preview)

Wir bestätigen die Konfiguration mit "Finish partitioning and write changes to disk"

> Sollten alte Partitionen auf deiner SSD vorhanden sein bestätigen wir das überschreiben einfach mit "Yes"

Dein Server führt nun die Partitionierung durch und bereitet die Installation des Systems vor.

### 💻 Installation des Systems

![](https://screensaver01.zap-hosting.com/index.php/s/r6bSFtZHxxQdTdc/preview)

Solltest du noch andere Installationsmedien beispielsweise für bestimmte Pakete einbinden wollen, könnte das nun geschehen.
Im Regelfall kannst du jedoch alle Pakete bequem nachher über die Paketverwaltung (apt) herunterladen.

***

![](https://screensaver01.zap-hosting.com/index.php/s/mSAwskDZ34NYAoS/preview)

Unser dedizierter Server steht in Deutschland, somit wählen wir auch den Deutschen Mirror-Standort um die bestmögliche Download-Rate zu erreichen.

***

![](https://screensaver01.zap-hosting.com/index.php/s/nyzFW3L6grRjqMJ/preview)

Grundsätzlich empfehlen wir das normale Debian Repository zu benutzen.

***

![](https://screensaver01.zap-hosting.com/index.php/s/XwfL5FEXeo69Z43/preview)

Solltest du einen HTTP-Proxy nutzen wollen, könntest du die Daten eintragen. (nicht erforderlich)

***

![](https://screensaver01.zap-hosting.com/index.php/s/y6LogDT7qjcoXkT/preview)

Das System möchte anonymisierte Statistiken sammeln, dies kann abgelehnt oder bestätigt werden.

***

![](https://screensaver01.zap-hosting.com/index.php/s/xf7FrndLM7ipBtC/preview)

Wähle nun die Pakete aus welche installiert werden sollen:

* Debian desktop enviroment
Würde eine grafische Oberfläche auf deinem Server erzeugen, wir nutzen jedoch in diesem Beispiel lediglich die Shell Ebene des Servers.

* SSH server
Wird benötigt um beispielsweise mit PuTTY verbinden zu können.

* standard system utilities
Wird benötigt um eine Anzahl gewisser Grundpakete bereitstellen zu können.

Die Auswahl der verschiedenen Pakete erfolgt hier per TAB, Pfeiltasten. Markiert oder Abgewählt werden Pakete mit der Leertaste.
Wenn du mit deiner Auswahl zufrieden bist drücke so lange TAB bis du bei <Continue> landest und bestätige mit Enter.

***

![](https://screensaver01.zap-hosting.com/index.php/s/CimtpY6czxYLK7D/preview)

Dadurch das dieses Betriebssystem, das einzige auf dem aktuellen Server ist, mit `Yes` bestätigen.

***

![](https://screensaver01.zap-hosting.com/index.php/s/6nzySkt8rCS5KiJ/preview)

Als Speicherort wählen wir den vorgegebenen Ort auf unserer SSD.

> 🎉 Die Installation deines Debian-Systems ist nun fertig.

Öffne in deiner iLO "Virtual Media" und drücke "Eject Media" um die ISO aus dem System zu entfernen.

![](https://screensaver01.zap-hosting.com/index.php/s/iD7FzJLcjtbzx8c/preview)

Wenn dies erfolgreich erledigt ist, wählen wir Continue, der Server wird nun einen neustart durchführen.

![](https://screensaver01.zap-hosting.com/index.php/s/EFo6yZCRaMQXFek/preview)

### 🔑 SSH Login aktivieren

Wenn der Neustart deines Servers durchgeführt wurde und die Installation erfolgreich verlaufen ist, wirst du nun zur Anmeldung aufgefordert.

![](https://screensaver01.zap-hosting.com/index.php/s/ywxgaSb5rQSNmZM/preview)

Natürlich möchte man auch seinen Server über SSH also beispielsweise PuTTY verwalten können, weshalb wir den Login dafür noch aktivieren müssen:

![](https://screensaver01.zap-hosting.com/index.php/s/G9QWBR9eb8yE6gP/preview)

Öffne mit nano die Konfigurations-Datei deines SSH-Dienstes `nano /etc/ssh/sshd_config`

![](https://screensaver01.zap-hosting.com/index.php/s/jAJbexQBJ4XBzNP/preview)

Suche die Stelle `#PermitRootLogin no` und ändere es zu `PermitRootLogin yes`

Drücke nun `STRG + X` und bestätige deine Änderungen mit `Y`

Als nächstes muss der SSH-Dienst noch neugestartet werden, gib hierzu `service ssh restart` ein.

Dein SSH-Login ist nun aktiv und du kannst beispielsweise per PuTTY verbinden.
Gib hierzu die IP-Adresse deines Servers, welche du in deinem Dashboard siehst ein und nutze die vorher definierten Anmeldedaten.

![](https://screensaver01.zap-hosting.com/index.php/s/KPkMeEaqcABz9RB/preview)

> Bei weiteren Fragen und Problemen steht dir unser Support jederzeit gerne zur Verfügung
