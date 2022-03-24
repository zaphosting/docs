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

![image](https://user-images.githubusercontent.com/13604413/159173874-c0b29b7a-2581-466e-8829-9fd400ab43ed.png)

In diesem Beispiel durchlaufen wir den Installations-Prozess mit dem "klassischen" Install.

***

![image](https://user-images.githubusercontent.com/13604413/159173878-41be0dca-ab9a-4b0f-97d0-7e9d2dadf46f.png)

Wähle deine gewünschte Sprache aus, in welchem der Installations-Assitent angezeigt werden soll.
Bedenke jedoch, das diese Sprache sich später auch auf das installierte System auswirkt.

***

![image](https://user-images.githubusercontent.com/13604413/159173881-27f6cfa0-3ad0-4a15-b4ad-9cd5eab0cc9c.png)

Unser gewünschter Ort befindet sich nicht in der direkten Auswahl, weshalb wir mit "Other" zur nächsten Seite wechseln.

***

![image](https://user-images.githubusercontent.com/13604413/159173886-6836fe51-e9d7-4fad-a9b7-86fcd6541747.png)

Wir wählen die Europäische Zone.

***

![image](https://user-images.githubusercontent.com/13604413/159173890-5c171366-8228-4374-8f38-fa4b01f6f933.png)

Abhängig von der gewünschten Zeitzone, wählen wir in diesem Beispiel die deutsche Zeitzone.

***

![image](https://user-images.githubusercontent.com/13604413/159173897-a32f2217-fc89-4951-96d6-ffd28ad3625d.png)

Wir wählen United States als locale.

***

![image](https://user-images.githubusercontent.com/13604413/159173903-7785630e-7fd6-4eb6-b505-3aa73158af42.png)

In unserem Fall wählen wir das deutsche Tastaturlayout welches dem QWERTZ Layout entspricht.

> Dein Server bereitet nun einige für die Installation notwendige Komponenten vor, dies kann einen Augenblick in Anspruch nehmen.

### 🔧 Konfigurationen

![image](https://user-images.githubusercontent.com/13604413/159173907-17d2a4f8-35ce-42fc-a22e-2b0d60079e81.png)

Dein Server konfiguiert seine Netzwerkschnittstelle automatisiert durch DHCP.
Wähle `eno1` dies ist der Netzwerkadapter deines ZAP Dedicated Servers.

***

![image](https://user-images.githubusercontent.com/13604413/159173909-e0d2de0e-f333-4972-9809-6832de905ca9.png)

Der Hostname kann von dir beliebig verändert werden, muss jedoch nicht angepasst werden.

***

![image](https://user-images.githubusercontent.com/13604413/159173917-f581618c-c92c-4f56-837f-8156dc7e0ba7.png)

Der Domain Name muss ebenfalls nicht verändert werden.

***

![image](https://user-images.githubusercontent.com/13604413/159173920-28980d2d-3570-4ea5-a59e-0f3d483049a8.png)

Hier muss das Passwort für deinen "Root" Account gesetzt werden, notiere dir das gewählte Passwort **unbedingt**.

***

![image](https://user-images.githubusercontent.com/13604413/159173927-8bda11e6-2a99-4299-96b6-a3796cda206b.png)

Zur Bestätigung muss das Passwort erneut eingegeben werden.

***

> Der Installations-Assistent verlangt die Erstellung eines zweiten Nutzerkontos

![image](https://user-images.githubusercontent.com/13604413/159173939-526bddc4-ef8c-4747-a852-e673dff89a16.png)

Gib nun den Namen des Besitzers für ein normales Nutzerkonto ein, du kannst hier natürlich frei wählen was du einträgst.

> Du kannst natürlich weiterhin das "Root"-Konto benutzen

***

![image](https://user-images.githubusercontent.com/13604413/159173944-ef487bd3-9a35-40ef-a727-a178fd521483.png)

Gib nun den Nutzernamen des Kontos ein.
Wähle außerdem ein Passwort deiner Wahl und bestätige dies nochmals.

Dein Server bereitet nun den nächsten Installationsabschnitt vor.

### 💾 Partitionierung

![image](https://user-images.githubusercontent.com/13604413/159173949-e58c9c27-9dc5-4018-8334-085f52cdc9ae.png)

Du hast nun die Möglichkeit nach Wunsch Partitionen anzulegen oder alternativ die ganze SSD als 1 Partition zu nutzen.
Solltest du nichts an der Partition verändern wollen wähle einfach "Guided - Use entire disk"

***

![image](https://user-images.githubusercontent.com/13604413/159173953-8db5f379-76c1-4e3f-9aac-6f80e2907763.png)

Wähle die in deinem Server verbaute SSD aus.

***

![image](https://user-images.githubusercontent.com/13604413/159173955-e77b0c0c-9453-4482-8ad8-9350b9229aca.png)

Grundsätzlich ist es ausreichend wenn die komplette Struktur auf einer Partition abgespeichert wird.

***

![image](https://user-images.githubusercontent.com/13604413/159173956-62d59a31-3d9a-4343-8839-9356f5d39e9f.png)

Wir bestätigen die Konfiguration mit "Finish partitioning and write changes to disk"

> Sollten alte Partitionen auf deiner SSD vorhanden sein bestätigen wir das überschreiben einfach mit "Yes"

Dein Server führt nun die Partitionierung durch und bereitet die Installation des Systems vor.

### 💻 Installation des Systems

![image](https://user-images.githubusercontent.com/13604413/159173960-6290e5b5-2205-4d48-a5fc-54ce108d53e7.png)

Solltest du noch andere Installationsmedien beispielsweise für bestimmte Pakete einbinden wollen, könnte das nun geschehen.
Im Regelfall kannst du jedoch alle Pakete bequem nachher über die Paketverwaltung (apt) herunterladen.

***

![image](https://user-images.githubusercontent.com/13604413/159173968-fb24e35e-96c5-49a2-b856-799c5ce482fb.png)

Unser dedizierter Server steht in Deutschland, somit wählen wir auch den Deutschen Mirror-Standort um die bestmögliche Download-Rate zu erreichen.

***

![image](https://user-images.githubusercontent.com/13604413/159173970-8905935e-9fd0-4c9e-98b9-c32da48ac228.png)

Grundsätzlich empfehlen wir das normale Debian Repository zu benutzen.

***

![image](https://user-images.githubusercontent.com/13604413/159173979-5d4169d3-f516-4bfe-8f9f-dab51eabf18b.png)

Solltest du einen HTTP-Proxy nutzen wollen, könntest du die Daten eintragen. (nicht erforderlich)

***

![image](https://user-images.githubusercontent.com/13604413/159173982-e24e6f85-fb01-4823-9b39-3bfa364b97f3.png)

Das System möchte anonymisierte Statistiken sammeln, dies kann abgelehnt oder bestätigt werden.

***

![image](https://user-images.githubusercontent.com/13604413/159173987-38512558-c08f-4437-8468-e033d0af83f9.png)

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

![image](https://user-images.githubusercontent.com/13604413/159173990-605c4f25-3480-43d1-89e3-dad3dedd01a5.png)

Dadurch das dieses Betriebssystem, das einzige auf dem aktuellen Server ist, mit `Yes` bestätigen.

***

![image](https://user-images.githubusercontent.com/13604413/159173991-197f8295-2441-49b0-b411-1247a6071112.png)

Als Speicherort wählen wir den vorgegebenen Ort auf unserer SSD.

> 🎉 Die Installation deines Debian-Systems ist nun fertig.

Öffne in deiner iLO "Virtual Media" und drücke "Eject Media" um die ISO aus dem System zu entfernen.

![image](https://user-images.githubusercontent.com/13604413/159173993-37b4c6a4-45f7-486a-b1e8-06adbff7c072.png)

Wenn dies erfolgreich erledigt ist, wählen wir Continue, der Server wird nun einen neustart durchführen.

![image](https://user-images.githubusercontent.com/13604413/159173996-5278b311-c648-4bfc-a7b6-cbc4f3e7c5bb.png)

### 🔑 SSH Login aktivieren

Wenn der Neustart deines Servers durchgeführt wurde und die Installation erfolgreich verlaufen ist, wirst du nun zur Anmeldung aufgefordert.

![image](https://user-images.githubusercontent.com/13604413/159173998-1c28db47-6839-4b39-8532-718c503708fe.png)

Natürlich möchte man auch seinen Server über SSH also beispielsweise PuTTY verwalten können, weshalb wir den Login dafür noch aktivieren müssen:

![image](https://user-images.githubusercontent.com/13604413/159173999-9251e54d-a858-4f4e-95c6-0a5c988dc36a.png)

Öffne mit nano die Konfigurations-Datei deines SSH-Dienstes `nano /etc/ssh/sshd_config`

![image](https://user-images.githubusercontent.com/13604413/159174006-2fdac4ee-ffee-41e4-b9ea-d485601b9217.png)

Suche die Stelle `#PermitRootLogin no` und ändere es zu `PermitRootLogin yes`

Drücke nun `STRG + X` und bestätige deine Änderungen mit `Y`

Als nächstes muss der SSH-Dienst noch neugestartet werden, gib hierzu `service ssh restart` ein.

Dein SSH-Login ist nun aktiv und du kannst beispielsweise per PuTTY verbinden.
Gib hierzu die IP-Adresse deines Servers, welche du in deinem Dashboard siehst ein und nutze die vorher definierten Anmeldedaten.

![image](https://user-images.githubusercontent.com/13604413/159174010-4cf4901a-9481-45f9-b51a-6f07f53f050e.png)

> Bei weiteren Fragen und Problemen steht dir unser Support jederzeit gerne zur Verfügung
