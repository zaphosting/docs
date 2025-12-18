---
id: vserver-windows-addip
title: "vServer: Zusätzliche IP-Adressen unter Windows konfigurieren"
description: "Entdecke, wie du die Serverleistung und Sicherheit optimierst, indem du mehrere IP-Adressen für bessere Service-Isolierung nutzt → Jetzt mehr erfahren"
sidebar_label: Zusätzliche IP-Adressen
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Mehrere IP-Adressen auf einem Server zu haben, kann aus verschiedenen Gründen sinnvoll sein – besonders in komplexen Netzwerken oder um bestimmte Anforderungen an Netzwerkleistung, Sicherheit und Verwaltung zu erfüllen. Durch die Zuweisung unterschiedlicher IP-Adressen an verschiedene Services oder Anwendungen auf demselben Server erreichst du eine bessere Isolation.

<InlineVoucher />


## Vorbereitung

Die Nutzung mehrerer IP-Adressen setzt voraus, dass dein Server-Paket diese beinhaltet. Falls du standardmäßig keine zusätzlichen IP-Adressen gebucht hast, musst du diese zuerst per Upgrade hinzufügen. Verbinde dich danach via [RDP](vserver-windows-userdp) mit deinem Server.




## Konfiguration



### Informationen sammeln

Zuerst brauchst du Infos zu den verfügbaren IP-Adressen. Zusätzliche IP-Adressen kannst du in der Serververwaltung unter IP-Adressen einsehen.

![](https://screensaver01.zap-hosting.com/index.php/s/ER3d6R7T28mNSKp/preview)





### Netzwerk-Konfiguration öffnen

Es gibt verschiedene Wege, um die Netzwerkkonfiguration auf einem Windows Server zu öffnen. Zum Beispiel kannst du sie über die Systemsteuerung unter **Netzwerk- und Freigabecenter** erreichen.

Öffne die **Systemsteuerung**, klicke auf **Netzwerk und Internet** und dann auf **Netzwerk- und Freigabecenter**. Gehe anschließend auf „Adaptereinstellungen ändern“ und doppelklicke auf den Netzwerkadapter (Ethernet 2). Dadurch öffnet sich der Netzwerkadapter, wo du die Eigenschaften aufrufen musst.

Wähle nun in den **Eigenschaften** des Netzwerkadapters die Option **Internetprotokoll Version 4 (TCP/IPv4)** aus. Dort siehst du Infos zur Haupt-IP-Adresse, Subnetzmaske, Standardgateway und den DNS-Servern. Klicke auf den **Erweitert**-Button, um die zusätzlichen IP-Adresse(n) hinzuzufügen.

![](https://screensaver01.zap-hosting.com/index.php/s/KtBawR89RASs4Jc/preview)



### IP-Adresse(n) hinzufügen

Jetzt wird die zusätzliche IP-Adresse über die **Erweiterten TCP/IP-Einstellungen** hinzugefügt. Klicke dazu unter IP-Adressen auf den **Hinzufügen**-Button und fülle die Felder für **IP-Adresse** und **Subnetzmaske** aus. Trage im Feld für die IP-Adresse die zusätzliche IP-Adresse ein. Die verwendete Subnetzmaske ist 255.255.255.0.

![](https://screensaver01.zap-hosting.com/index.php/s/gsaceiYPqdiMC7x/preview)



## Fazit

Die IP-Adresse wurde nun erfolgreich konfiguriert und hinzugefügt. Den aktuellen Status der IP-Adressen kannst du in der Serververwaltung unter dem Bereich **IP-Adressen** überprüfen. Dort sollte die neu hinzugefügte IP-Adresse als erreichbar angezeigt werden.

![](https://screensaver01.zap-hosting.com/index.php/s/xBZGM72WX4nqXS6/preview)

<InlineVoucher />