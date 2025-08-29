---
id: vserver-iso
title: "vServer: Eine ISO-Datei mounten"
description: Informationen zum Mounten einer ISO-Datei auf deinem vServer von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Eigene ISO
services:
  - vserver
---



import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/vserver-iso-files-de.json';

## Einführung
Lust auf noch mehr Freiheit bei der Wahl deines Systems? Neben unseren OS-Templates kannst du natürlich auch eigene ISOs mounten. Das ist ganz easy mit unseren vServer-Produkten. So holst du dir genau das Betriebssystem auf den Server, das du wirklich haben willst!

<InlineVoucher />



## Verfügbare ISO-Dateien

Neben unseren vorinstallierten Standard-OS-Templates besteht zusätzlich die Möglichkeit, eigene ISO-Dateien zu mounten. Dadurch stehen dir noch mehr Optionen für die Einrichtung und Nutzung deiner Serverumgebung zur Verfügung. Unsere vServer-Produkte unterstützen derzeit folgende ISO-Dateien:

<SearchableItemList items={items} />



:::info Fehlt dir eine ISO-Datei?
Du vermisst eine bestimmte ISO, die du gerne nutzen würdest? Dann melde dich einfach bei unserem Support. Wir prüfen gerne, ob wir sie für dich hinzufügen können.
:::





## ISO-Datei mounten
Um eine ISO zu mounten, gehst du in deiner vServer-Verwaltung einfach auf **Einstellungen → ISOs**. Dort wählst du die gewünschte ISO-Datei aus, passt anschließend die Boot-Reihenfolge an und startest den Server neu.

![img](https://screensaver01.zap-hosting.com/index.php/s/tszMKbqDSa3AaLy/download)

Nach dem Neustart kannst du dich über den **VNC-Client** mit deinem Server verbinden und die Installation sowie Einrichtung des Betriebssystems direkt starten.

![img](https://screensaver01.zap-hosting.com/index.php/s/q6WoDMq8pxn72oG/download)

:::warning Kein Online-Status und keine Remote-Verbindungen nach ISO-Mount

Nach dem Mounten einer ISO ist dein Server zunächst noch nicht eingerichtet. In der Verwaltung wird deshalb kein **Online-Status** angezeigt und auch **RDP-** sowie **SSH-Verbindungen** sind noch nicht verfügbar. Diese stehen dir erst nach der erfolgreichen Installation und Konfiguration des Betriebssystems zur Verfügung.

:::




## Abschluss
Glückwunsch, du hast erfolgreich erfolgreich eine ISO Datei ausgewählt und gemountet. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂



<InlineVoucher />
