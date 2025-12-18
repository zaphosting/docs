---
id: webspace-mybb
title: "Webspace: MyBB Forum-Software installieren"
description: "Entdecke, wie du dein eigenes MyBB Forum einrichtest und startest, um eine coole Online-Community aufzubauen → Jetzt mehr erfahren"
sidebar_label: MyBB installieren
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

MyBB, früher MyBulletinBoard, ist eine kostenlose und Open-Source Forum-Software, entwickelt von der MyBB Group. In dieser Anleitung zeigen wir dir, wie du diese Forum-Software auf unserem Webspace-Produkt installierst.

<InlineVoucher />

## Vorbereitung

Bevor die eigentliche Installation von MyBB starten kann, müssen ein paar Vorbereitungen getroffen werden. Dazu gehört das Besorgen der Forum-Software, das Einrichten der Datenbank und des Mailservers (E-Mail-Adresse).

**Software**

Die Forum-Software kannst du dir von der offiziellen MyBB-Webseite herunterladen. Den Download findest du hier: [MyBB](https://mybb.com/download/)

![Bildschirmfoto vom 2022-05-15 23-16-59](https://screensaver01.zap-hosting.com/index.php/s/s8kbtNFq6c79SoH/preview)

Der Download enthält eine gepackte Datei, die du auf deinem lokalen Rechner entpacken musst. Darin findest du einen Ordner namens **Upload**. Dessen Inhalt wird gebraucht und muss per **FTP oder Dateimanager** hochgeladen werden. Unter **Websites & Domains** bei **FTP-Zugang** kannst du einen FTP-User anlegen.

Öffnest du den Dateimanager im Pleskpanel, navigierst du in das Verzeichnis **httpdocs** und lädst dort die Dateien der Forum-Software hoch.

![en-file](https://screensaver01.zap-hosting.com/index.php/s/x9oWpWCzrtB87e7/preview)

**Datenbank**

Als nächstes muss die Datenbank erstellt werden, in der später alle Infos des Forums gespeichert werden. Klicke dazu wieder auf **Websites & Domains** und dann auf **Datenbanken**. Dort klickst du auf Datenbank hinzufügen und erstellst eine neue Datenbank:

![en-db](https://screensaver01.zap-hosting.com/index.php/s/f3dwjM5qxQQpzd6/preview)

Klicke auf **OK** und die Datenbank wird angelegt.

**Mailserver (E-Mail-Adresse)**

Für die Registrierung eines Accounts im Forum wird ein Mailserver mit einer E-Mail-Adresse benötigt, damit die Registrierungs-Mails an die User gesendet werden können. Eine Anleitung zum Einrichten einer solchen E-Mail-Adresse findest du hier: [E-Mails versenden](webspace-plesk-sendmail.md)

## Installation

Wenn alle Schritte aus der Vorbereitung erledigt sind, kann die eigentliche MyBB-Installation starten. Dafür rufst du die Webseite jetzt im Browser auf. Das sollte dann so aussehen:

![mybbinstall](https://screensaver01.zap-hosting.com/index.php/s/DzgRZMBFotTgsXZ/preview)

Dort müssen wir nun während der Installation 9 Kategorien konfigurieren. Die Konfiguration prüft, ob alle Voraussetzungen erfüllt sind, richtet die Datenbank und Forum-Software ein und so weiter. Zuerst musst du entscheiden, ob anonyme Statistiken an MyBB gesendet werden sollen oder nicht. Danach musst du den Lizenzbedingungen zustimmen.

Anschließend wird eine Übersicht der benötigten Systemvoraussetzungen angezeigt. Dazu gehören PHP-Version, Speicher usw. Der Webspace sollte standardmäßig schon so konfiguriert sein, dass alle Voraussetzungen erfüllt sind.

![install2](https://screensaver01.zap-hosting.com/index.php/s/fTJQGRADn5SF62C/preview)

Sollte eine Voraussetzung nicht erfüllt sein, wende dich bitte an den Support. Ansonsten kannst du auf **Weiter** klicken und mit der Installation fortfahren. Jetzt musst du die Datenbank konfigurieren, die du vorher erstellt hast. Die Datenbankdaten der erstellten Datenbank müssen hier eingetragen werden:

![](https://screensaver01.zap-hosting.com/index.php/s/GaRZiSizcYCMX3Z/preview)

Die Datenbank wird danach eingerichtet. Das kann einen Moment dauern. Danach werden die Standard-Daten und Themes eingespielt. Hier musst du einfach nur auf **Weiter** klicken.

Im nächsten Schritt geht es um die allgemeine Konfiguration. Hier kannst du den Namen der Webseite, des Forums, die URL und mehr festlegen:

![install3](https://screensaver01.zap-hosting.com/index.php/s/asEA4KqtZGaN65A/preview)

Zuletzt muss noch ein allgemeiner Administrator-Account erstellt werden, bevor die Installation abgeschlossen werden kann.

![Install4](https://screensaver01.zap-hosting.com/index.php/s/3T6NMLYyMnb4pja/preview)

Wenn du das erledigt hast und alles andere erfolgreich konfiguriert wurde, solltest du folgende Meldung sehen und dein Forum aufrufen können:

![](https://screensaver01.zap-hosting.com/index.php/s/9N2jBCbzEYe2iyn/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/g9iecMjiDX4GoqP/preview)

<InlineVoucher />