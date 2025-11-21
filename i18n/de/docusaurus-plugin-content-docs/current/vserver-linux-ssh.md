---
id: vserver-linux-ssh
title: "vServer: Erster Zugriff per SSH"
description: "Entdecke beliebte SSH-Clients zur Verwaltung von Linux-Servern via Konsole und lerne, wie du dich sicher mit Putty verbindest → Jetzt mehr erfahren"
sidebar_label: Erster Zugriff (SSH)
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

![](https://screensaver01.zap-hosting.com/index.php/s/TYEHE38gNQoFjBx/download/ssh_connect.gif)

Linux-Server-Produkte beinhalten standardmäßig keine grafische Verwaltungsoberfläche, weshalb die Verbindung und Verwaltung über einen SSH-Client (Konsole) erfolgt. Es gibt eine große Auswahl an SSH-Clients. Unten findest du eine Übersicht der bekannten / häufig genutzten SSH-Clients. 



| SSH-Client | Unterstützte Betriebssysteme | Open-Source |                           Download                           |
| :--------: | :--------------------------: | :---------: | :----------------------------------------------------------: |
|   Putty    |        Windows, Linux        |     Ja      |               [Klick](https://www.putty.org/)                |
|   Kitty    |        Windows, Linux        |     Ja      |        [Klick](http://www.9bis.net/kitty/)                   |
| MobaXterm  |        Windows, Linux        |     Ja      |           [Klick](https://mobaxterm.mobatek.net/)            |
| SecureCRT  |     Windows, Linux, Mac      |     Nein    | [Klick](https://www.vandyke.com/cgi-bin/releases.php?product=securecrt) |
| mRemoteNG  |           Windows            |     Ja      |           [Klick](https://mremoteng.org/download)            |


<InlineVoucher />

## IP-Adresse & Zugriff

Im Folgenden wird die Verbindung mit dem Putty SSH-Client erklärt. Im Konfigurationsfenster wird für den **Hostname** die IP-Adresse des Servers und der SSH-Port 22 eingetragen. Anschließend kann die Verbindungsherstellung über den **Open**-Button gestartet werden.



![](https://screensaver01.zap-hosting.com/index.php/s/wyfbo8dENbX3T9E/preview)



:::info
Der SSH-Login per Passwort ist standardmäßig deaktiviert. Wenn du dich mit Passwort anmelden möchtest, musst du die Option zuerst unter **Zugriff & Sicherheit** aktivieren.
:::



![](https://screensaver01.zap-hosting.com/index.php/s/N7ZL8MZfe55T7zR/preview)



:::info
Beim ersten Verbindungsaufbau zum Server erscheint eine Sicherheitsmeldung von Putty, die dich darüber informiert, dass noch kein Host-Key im Registry-Cache gespeichert ist. Diese kannst du mit **Yes** bestätigen, wenn du die Meldung nicht bei jeder Verbindung erneut sehen möchtest. 
:::

 

Damit öffnet sich die SSH-Konsole und fordert dich zur Eingabe von **Benutzername** und **Passwort** auf. Der Benutzername lautet "**root**". Das Passwort findest du im Webinterface unter "**Zugriff & Sicherheit**" oder kannst es dort setzen.



![](https://screensaver01.zap-hosting.com/index.php/s/X8ykHmkYFa826aM/preview)





## Administration via SSH

Für die optimale Nutzung des SSH-Clients ist es wichtig, die Grundbefehle zu kennen. Im Folgenden findest du eine grobe Übersicht mit allen relevanten Befehlen und deren Bedeutung:


### Benutzerverwaltung

| Befehl   |                Beschreibung                |            Syntax            |
| :------: | :----------------------------------------: | :--------------------------: |
| useradd  |          Neuen Benutzer anlegen          | useradd [Optionen] [Benutzer] |
| usermod  |      Bestehenden Benutzer bearbeiten      | usermod [Optionen] [Benutzer] |
| userdel  |        Bestehenden Benutzer löschen        | userdel [Optionen] [Benutzer] |
| passwd   | Passwort eines bestehenden Benutzers ändern |      passwd [Optionen]       |



### Systemverwaltung

| Befehl  |                         Beschreibung                         | Syntax                                       |
| :-----: | :----------------------------------------------------------: | -------------------------------------------- |
|   top   | Übersicht über Auslastung, Prozesse und weitere Infos (ähnlich dem Windows Task-Manager)  | top                                          |
|   df    |            Anzeige der Speicherplatznutzung (Partitionen)            | df -h                                        |
|   du    |          Anzeige des Speicherplatzverbrauchs (Verzeichnisse)           | du -sh *                                     |
|  free   | Speicherbelegung des Systems, aufgeteilt in RAM und SWAP-Speicher | free                                         |
|  kill   |  Beendet den Prozess mit der übergebenen Prozess-ID (PID)   | kill [ID]                                    |
| killall |        Beendet alle Prozesse mit dem angegebenen Namen        | killall [Name]                               |
|   mv    |       Verschiebt Dateien oder Verzeichnisse an einen anderen Ort        | mv Quellpfad Zielpfad                        |
|  mkdir  |                    Neues Verzeichnis erstellen                    | mkdir Verzeichnisname                          |
| service |    Dienst starten, stoppen, neu starten und Status abfragen     | service Dienstname start/stop/restart/status |
| reboot  |                      System neu starten                        | reboot                                       |



### Dateiverwaltung

| Befehl | Beschreibung | Syntax
| ------ | ------------------------------------------ | ---------------------------------------- |
| ls | Zeigt Dateien und Ordner im Verzeichnis an | ls |
| cd | Verzeichnis wechseln | cd [OPTION] VERZEICHNIS |
| cp | Dateien oder Verzeichnisse kopieren | cp [OPTIONEN] QUELLE ZIEL |
| mv | Datei oder Verzeichnis verschieben | mv [OPTION] QUELLE ZIEL |
| mkdir | Neues Verzeichnis erstellen | mkdir [OPTION] VERZEICHNISNAME |
| rmdir | Bestehendes Verzeichnis löschen | rmdir [OPTION] VERZEICHNIS |
| find | Dateisystem durchsuchen | find [OPTIONEN] [VERZEICHNIS] [AKTIONEN] |
| grep | Textdateien durchsuchen | grep [OPTIONEN] SUCHMUSTER [DATEI(EN)] |



### Netzwerkverwaltung

| Befehl | Beschreibung | Syntax
| -------- | ------------------------------------------------- | ----------------------------------------- |
| ip | Netzwerkinterfaces abfragen und konfigurieren | ip [OPTIONEN] OBJEKT [BEFEHL [ARGUMENTE]] |
| netstat | Status der Netzwerkinterfaces abfragen | netstat [OPTIONEN] |
| nslookup | DNS-Informationen abfragen | nslookup |
| ping | Netzwerkverbindung prüfen | ping [OPTIONEN] ZIEL


<InlineVoucher />
