---
id: dedicated-windows-addip
title: "Dedicated Server: Zusätzliche IP-Adressen unter Windows konfigurieren"
description: "Entdecke, wie du die Server-Performance und Sicherheit durch den effektiven Einsatz mehrerer IP-Adressen optimierst → Jetzt mehr erfahren"
sidebar_label: Zusätzliche IP-Adressen
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Mehrere IP-Adressen auf einem Server zu haben, kann aus verschiedenen Gründen sinnvoll sein, besonders in komplexen Netzwerkumgebungen oder um bestimmte Voraussetzungen für Netzwerkperformance, Sicherheit und Verwaltung zu erfüllen. Durch das Zuweisen unterschiedlicher IP-Adressen an verschiedene Dienste oder Anwendungen auf demselben Server erreichst du eine bessere Isolation.

<InlineVoucher />


## Vorbereitung

Die Nutzung mehrerer IP-Adressen setzt voraus, dass dein Server-Paket diese beinhaltet. Falls du standardmäßig keine zusätzlichen IP-Adressen gebucht hast, musst du diese zuerst per Upgrade hinzufügen. Verbinde dich danach via [RDP](dedicated-windows-userdp) mit deinem Server.




## Konfiguration



### Informationen sammeln

Zuerst brauchst du Informationen über die verfügbaren IP-Adressen. Zusätzliche IP-Adressen kannst du im Server-Management unter IP-Adressen einsehen.

![img](https://screensaver01.zap-hosting.com/index.php/s/zAfKskX42rMSRmb/preview)





### Netzwerk-Konfiguration aufrufen

Es gibt verschiedene Wege, die Netzwerk-Konfiguration auf einem Windows Server zu öffnen. Zum Beispiel kannst du sie über die Systemsteuerung unter **Netzwerk- und Freigabecenter** erreichen.

Öffne die **Systemsteuerung**, klicke auf **Netzwerk und Internet** und dann auf **Netzwerk- und Freigabecenter**. Gehe anschließend auf „Adaptereinstellungen ändern“ und doppelklicke auf den Netzwerkadapter (Ethernet 2). Dadurch öffnet sich der Netzwerkadapter, wo du die Eigenschaften aufrufen musst.

Wähle nun in den **Eigenschaften** des Netzwerkadapters die Option **Internetprotokoll Version 4 (TCP/IPv4)** aus. Dort siehst du Infos zur Haupt-IP-Adresse, Subnetzmaske, Standardgateway und den DNS-Servern. Klicke auf den **Erweitert**-Button, um die zusätzlichen IP-Adresse(n) hinzuzufügen.

![](https://screensaver01.zap-hosting.com/index.php/s/KtBawR89RASs4Jc/preview)



### IP-Adresse(n) hinzufügen

Jetzt wird die zusätzliche IP-Adresse über die **Erweiterten TCP/IP-Einstellungen** hinzugefügt. Klicke dazu unter IP-Adressen auf den **Hinzufügen**-Button und fülle die Felder für **IP-Adresse** und **Subnetzmaske** aus. Trage im Feld für die IP-Adresse die zusätzliche IP-Adresse ein. Die verwendete Subnetzmaske ist 255.255.255.0.

![](https://screensaver01.zap-hosting.com/index.php/s/gsaceiYPqdiMC7x/preview)



## Fazit

Die IP-Adresse wurde nun erfolgreich konfiguriert und hinzugefügt. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Verfügung – melde dich einfach! 🙂

<InlineVoucher />