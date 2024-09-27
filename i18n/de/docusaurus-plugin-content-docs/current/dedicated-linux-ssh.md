---
id: dedicated-linux-ssh
title: "vServer: Erstzugriff mit SSH"
description: Informationen, wie der Erstzugriff mit SSH auf deinen Server von ZAP-Hosting funktioniert - ZAP-Hosting.com Dokumentation
sidebar_label: Erstzugriff (SSH)
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Die Linux Server Produkte beinhalten standardmäßig keine grafische Verwaltungsoberfläche, weshalb die Verbindung und Verwaltung über einen SSH-Client (Konsole) erfolgt. Hierbei gibt es eine große Auswahl an SSH-Clients. Im Folgenden gibt es eine Übersicht der bekannten/oft genutzten SSH-Clients. 

| SSH-Client | Unterstützte Betriebssysteme | Open-Source |                           Download                           |
| :--------: | :--------------------------: | :---------: | :----------------------------------------------------------: |
|   Putty    |        Windows, Linux        |     Ja      |               [Klick](https://www.putty.org/)                |
|   Kitty    |        Windows, Linux        |     Ja      |        [Klick](http://www.9bis.net/kitty/)                   |
| MobaXterm  |        Windows, Linux        |     Ja      |           [Klick](https://mobaxterm.mobatek.net/)            |
| SecureCRT  |     Windows, Linux, Mac      |    Nein     | [Klick](https://www.vandyke.com/cgi-bin/releases.php?product=securecrt) |
| mRemoteNG  |           Windows            |     Ja      |           [Klick](https://mremoteng.org/download)            |

<InlineVoucher />

## IP-Adresse & Zugang

Im Folgenden wird die Verbindung mittels des Putty SSH-Client erläutert. Im Konfigurationsfenster wird hierbei beim **Hostname** die IP-Adresse des Servers und der SSH Port 22 eingetragen. Im Anschluss kann der Verbindungsaufbau über den **Open** Button gestartet werden.



![](https://screensaver01.zap-hosting.com/index.php/s/FWLPqTBHXJzXFLs/preview)



:::info
Standardmäßig ist der SSH-Login via Passwort deaktiviert. Solltest du dich mit dem Passwort einloggen wollen, dann muss unter **Zugang & Sicherheit** die Option dafür erst aktiviert werden.
:::



![](https://screensaver01.zap-hosting.com/index.php/s/QRCZn29FfG792Zp/preview)



:::info
Wenn die Verbindung zum Server ersten Mal erfolgt, dann erscheint eine Sicherheitsmeldung von Putty, in der mitgeteilt wird, dass noch kein Host-Schlüssel in der Registrierung zwischengespeichert wurde. Dies kann mit **Ja** bestätigt werden, wenn der Hinweis nicht weiterhin jedes Mal erfolgen soll. 
:::

 

Daraufhin öffnet sich die SSH-Konsole, in der nach einem **Benutzernamen** und **Kennwort** gefragt wird. Der Benutzername lautet "**root**". Das Passwort ist im Webinterface unter "**Zugang & Sicherheit**" zu finden beziehungsweise kann dort gesetzt werden.



![](https://screensaver01.zap-hosting.com/index.php/s/qg2acmbg36z7GCq/preview)





## Verwaltung des Servers per SSH

Für eine optimale Nutzung des SSH-Clients ist es unerlässlich, die Grundbefehle zu kennen. Im Folgenden findest du eine grobe Übersicht mit allen relevanten Befehlen und deren Bedeutung:



### Account Verwaltung

| Befehl  |                Beschreibung                |            Syntax            |
| :-----: | :----------------------------------------: | :--------------------------: |
| useradd |          Neuen Benutzer erstellen          | useradd [options] [username] |
| usermod |      Vorhandenen Benutzer bearbeiten       | usermod [options] [username] |
| userdel |        Vorhandenen Benutzer löschen        | userdel [options] [username] |
| passwd  | Passwort eines bestehenden Benutzers ändern |      passwd [username]       |



### System Verwaltung

| Befehl  |                         Beschreibung                         | Syntax                                       |
| :-----: | :----------------------------------------------------------: | -------------------------------------------- |
|   top   | Übersicht von Auslastung, Prozessen und weiteren Informationen (ähnlich wie der Task-Manager von Windows) | top                                          |
|   df    |            Spreicherverbrauch anzeigen (Patition)            | df -h                                        |
|   du    |          Spreicherverbrauch anzeigen (Verzeichnis)           | du -sh *                                     |
|  free   | Speicherauslastung des Systems. Geteilt in RAM und SWAP-Space. | free                                         |
|  kill   |  Beendet den Prozess mit der uebergebenen Prozess-ID (PID)   | kill [ID]                                    |
| killall |       Beendet alle Prozesse mit dem uebergebenen Namen       | killall [name]                               |
|   mv    |         Verschiebt Dateien in ein anderes Verzeichnis        | mv sourcepath newPath                        |
|  mkdir  |               Erstellt einen neuen Ordner                    | mkdir directoryname                          |
| service |    Dienst starten, stoppen, neu starten und Status prüfen     | service DienstName start/stop/restart/status |
| reboot  |                      System neu starten                       | reboot                                       |



### Datei Verwaltung

| Befehl | Beschreibung                               | Syntax                                   |
| :------: | :------------------------------------------: | :----------------------------------------: |
| ls     | Dateien und Ordner im Verzeichnis anzeigen | ls                                       |
| cd     | Verzeichnis wechseln                       | cd [OPTION] VERZEICHNIS                  |
| cp     | Dateien oder Verzeichnisse kopieren        | cp [OPTIONEN] QUELLE ZIEL                |
| mv     | Datei oder Verzeichnis verschieben         | mv [OPTION] QUELLE ZIEL                  |
| mkdir  | Neues Verzeichnis erstellen                | mkdir [OPTION] VERZEICHNISNAME           |
| rmdir  | Existierendes Verzeichnis entfernen        | rmdir [OPTION] VERZEICHNIS               |
| find   | Dateisystem durchsuchen                    | find [OPTIONEN] [VERZEICHNIS] [AKTIONEN] |
| grep   | Textdateien durchsuchen                    | grep [OPTIONEN] SUCHMUSTER [DATEI(EN)]   |



### Netzwerk Verwaltung

| Befehl   | Beschreibung                                      | Syntax                                    |
| :--------: | :-------------------------------------------------: | :-----------------------------------------: |
| ip       | Netzwerkschnittstellen abfragen und konfigurieren | ip [OPTIONEN] OBJEKT [BEFEHL [ARGUMENTE]] |
| netstat  | Status der Netzwerkschnittstellen abfragen        | netstat [OPTIONEN]                        |
| nslookup | DNS-Informationen abfragen                        | nslookup                                  |
| ping     | Netzverbindung prüfen                             | ping [OPTIONEN] ZIEL                      |
