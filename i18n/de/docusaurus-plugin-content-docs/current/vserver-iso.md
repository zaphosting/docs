---
id: vserver-iso
title: "VPS: ISO-Datei mounten"
description: "Entdecke, wie du deinen VPS mit deinem Wunsch-ISO individuell anpasst und volle Kontrolle über deine Serverumgebung bekommst → Jetzt mehr erfahren"
sidebar_label: ISO-Datei mounten
services:
  - vserver
---



import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/vserver-iso-files-en.json';

## Einführung
Willst du noch mehr Freiheit bei der Wahl deines Systems? Neben unseren OS-Vorlagen kannst du natürlich auch eigene ISOs mounten. Das geht super easy mit unseren VPS-Produkten. So bekommst du genau das Betriebssystem auf deinen Server, das du wirklich willst!

<InlineVoucher />



## Verfügbare ISO-Dateien

Neben unseren vorkonfigurierten Standard-OS-Vorlagen bieten wir auch die Möglichkeit, zusätzliche ISO-Dateien zu mounten. Das sorgt für noch mehr Flexibilität bei der Einrichtung und Verwaltung deiner Serverumgebung. Unsere VPS-Produkte unterstützen aktuell folgende ISO-Dateien: 

<SearchableItemList items={items} />





## Eigene ISO hochladen

Wenn das benötigte ISO-Image nicht in der Standardliste verfügbar ist, kannst du eine eigene ISO über eine öffentliche URL bereitstellen. Die URL muss per HTTP oder HTTPS erreichbar sein und darf keine Authentifizierung oder zeitlich begrenzte Download-Links erfordern.

Nach Eingabe der URL im Feld **Custom ISO hinzufügen** und Klick auf **ISO hochladen** wird die ISO automatisch importiert und steht für die Serverinstallation bereit.

![img](https://screensaver01.zap-hosting.com/index.php/s/E93dLjnpnBPFiH7/preview)

Maximal drei eigene ISO-Images können gleichzeitig gespeichert werden. Jede hochgeladene ISO wird nur 72 Stunden vorgehalten und danach automatisch gelöscht. Wird die ISO danach noch benötigt, muss sie erneut hochgeladen werden. Für den Inhalt, die Lizenzierung und Sicherheit der bereitgestellten ISO ist der Kunde verantwortlich.







## ISO-Datei mounten
Um eine ISO zu mounten, geh in dein VPS-Management-Panel und öffne **Einstellungen → ISOs**. Wähle die gewünschte ISO-Datei aus, passe die Boot-Reihenfolge an und starte deinen Server neu.

![img](https://screensaver01.zap-hosting.com/index.php/s/tszMKbqDSa3AaLy/download)

Nach dem Neustart kannst du dich per VNC-Client mit deinem Server verbinden und mit der Installation und Konfiguration des Betriebssystems starten.

![img](https://screensaver01.zap-hosting.com/index.php/s/q6WoDMq8pxn72oG/download)

:::warning Online-Status oder Remote-Verbindungen nach ISO-Mount

Nach dem Mounten einer ISO ist dein Server noch nicht eingerichtet. Deshalb wird im Panel kein **Online-Status** angezeigt und **RDP** oder **SSH-Verbindungen** sind noch nicht verfügbar. Diese werden erst zugänglich, sobald das Betriebssystem erfolgreich installiert und konfiguriert wurde.

:::




## Abschluss
Glückwunsch, du hast deine ISO-Datei erfolgreich ausgewählt und gemountet. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂



<InlineVoucher />