---
id: dedicated-windows-addip
title: "Dedicated Server: Zusätzliche IP-Adressen unter Windows konfigurieren"
description: Informationen, wie du zusätzliche IPs zu deinem Windows Dedicated Server von ZAP-Hosting hinzufügen kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Zusätzliche IP-Adressen
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Mehrere IP-Adressen auf einem Server können aus verschiedenen Gründen nützlich sein. Insbesondere in komplexen Netzwerkumgebungen oder um bestimmte Anforderungen an die Netzwerkleistung, Sicherheit und Verwaltung zu erfüllen. Durch die Zuweisung unterschiedlicher IP-Adressen zu verschiedenen Diensten oder Anwendungen auf demselben Server kann eine bessere Isolation erreicht werden.

<InlineVoucher />

## Voraussetzungen

Die Nutzung von mehreren IP-Adressen setzt voraus, dass dein Server (Paket) diese auch beinhaltet. Solltest du standardmäßig noch keine zusätzlichen IP-Adressen dazugebucht haben, so müsstest du diese zunächst per Upgrade ergänzen. Verbinde dich im Anschluss mit deinem Server per [RDP](dedicated-windows-userdp.md). 



## Konfiguration



### Informationen besorgen

Zunächst werden die Informationen zu den verfügbaren IP-Adressen benötigt. Die zusätzlichen IP-Adressen können in der Server Verwaltung unter IP-Adressen eingesehen werden. 

![img](https://screensaver01.zap-hosting.com/index.php/s/zAfKskX42rMSRmb/preview)





### Netzwerkonfiguration aufrufen

Um die Netzwerkkonfiguration auf einem Windows Server aufzurufen, gibt es verschiedene Methoden. Die Netzwerkkonfiguration kannst du beispielsweise über die Systemsteuerung unter **Netzwerk- und Freigabecenter** aufrufen. 

Öffne die **Systemsteuerung** und klicke im Anschluss auf **Netzwerk und Internet** und dann auf **Netzwerk- und Freigabecenter**. Rufe dort im Anschluss  "Adaptereinstellungen ändern" auf und mache einen Doppelklick auf den Netzwerkadapter (Ethernet 2). Es öffnet sich der Netzwerkadapter, bei dem die Eigenschaften aufgerufen werden müssen. 

Öffne nun in den **Eigenschaften** des Netzwerkadapters die Option **Internetprotokoll Version 4 (TCP/IPv4)** aus. Dort siehst du Informationen zur Haupt-IP-Adresse, Subnetzmaske, Standard Gateway und die DNS-Server. Klicke dort auf den Button **Erweitert** um die zusätzliche(n) IP-Adressen hinzuzufügen. 

![](https://screensaver01.zap-hosting.com/index.php/s/R4FyxYPMEH6syS3/preview)



### IP-Adresse(n) hinzufügen

Über die **Erweiterten TCP/IP-Einstellungen** Einstellungen wird nun die zusätzliche IP-Adresse hinzugefügt. Klicke dazu bei IP-Adressen auf den Button **Hinzufügen** und fülle die Felder für die **IP-Adresse** und **Subnetzmaske** aus. In dem Feld für die IP-Adresse wird die zusätzliche IP-Adresse eingetragen. Als Subnetzmaske wird die 255.255.255.0 verwendet. 



![](https://screensaver01.zap-hosting.com/index.php/s/96RpNegkcGGEsJe/preview)




## Schlussfolgerung

Die IP-Adresse ist jetzt erfolgreich konfiguriert und hinzugefügt worden. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂






<InlineVoucher />
