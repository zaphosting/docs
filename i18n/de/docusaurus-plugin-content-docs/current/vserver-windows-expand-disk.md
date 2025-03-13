---
id: vserver-windows-expand-disk
title: "vServer: Festplatte (Partition) auf Windows Server erweitern"
description: Informationen, wie du die Festplatte deines Windows vServers von ZAP-Hosting nach einem Upgrade erweitern kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Festplatte erweitern
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Einführung



<InlineVoucher />

Nach einem Upgrade deines ZAP Windows vServers, ist es möglicherweise notwendig deiner bestehenden Partition den neuen Speicher hinzuzufügen.

:::info
Keine Sorge, bei diesem Schritt werden keine Daten gelöscht
:::

## Partition erweitern

Die Partition kann mit der **Datenträgerverwaltung** angepasst werden. Um die Anwendung zu öffnen, drücke die `Windows-Taste` + `R` und gebe dort `diskmgmt.msc` ein. Bestätige die Eingabe anschließend in dem du  auf `OK` klickst.

![](https://screensaver01.zap-hosting.com/index.php/s/xPAZaPKckYXSsQR/preview)

Nun öffnet sich die Datenträgerverwaltung. Hier hast du die Möglichkeit, Partitionen anzupassen. Klicke mit der rechten Maustaste auf die bereits vorhandene Partition und wähle Volume erweitern aus.

![](https://screensaver01.zap-hosting.com/index.php/s/Qo3aKWgeL94DgyQ/preview)



Es öffnet sich nun der **Assistent zum Erweitern des Volumes**. Starte den Assistenten mit einem Klick auf **Weiter**. Der verfügbare Speicherplatz wird automatisch erkannt, so dass du nur noch mit einem weiteren **Weiter** fortfahren musst. Bestätige und schließe den Vorgang ab, indem du auf **Fertig stellen** klickst.



![img](https://screensaver01.zap-hosting.com/index.php/s/2cW43AGPMNrfTwr/preview)

Sobald der Vorgang abgeschlossen ist, wird die aktuelle Konfiguration wieder in der Datenträgerverwaltung angezeigt.

![](https://screensaver01.zap-hosting.com/index.php/s/gRKJziB8WY5ZHNR/preview)



## Abschluss

Deine Festplatte (Partition) sollte nun wie vorgesehen eingestellt und nutzbar sein. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂
