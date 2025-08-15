---
id: webspace-external-domain
title: "Webspace: Verlinkung einer extern gehosteten Domain"
description: Informationen zur Verknüpfung einer extern gehosteten Domain mit dem Webspace-Produkt von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Externe Domain verlinken
services:
  - webspace
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';



## Einführung

Hast du bereits eine Domain bei einem anderen Provider registriert und möchtest diese mit deinem ZAP-Hosting Webspace-Produkt verbinden? Kein Problem! Dazu musst du die DNS-Einstellungen bei deinem Domain Anbieter anpassen. In dieser Anleitung zeigen wir dir genau, welche DNS-Einträge du anlegen musst, damit deine Domain korrekt auf deinen Webspace zeigt.

:::info Transfer deiner Domain
Transferiere deine Domain zu ZAP-Hosting und genieße eine einfachere Verwaltung. Verbinde deine Domain mit nur wenigen Klicks mit deinem Webspace und profitiere von vielen zusätzlichen Funktionen. Erfahre, wie du deine Domain transferieren kannst, in unserer [Domain transferieren](domain-transfer.md) Anleitung.
:::

<InlineVoucher />



## Verlinkung der Domain in Plesk

Bevor du deine externe Domain mit deinem Webspace verknüpfen kannst, musst du die Domain zunächst in **Plesk** hinzufügen. Fügen dazu deine Domain unter dem Abschnitt **Hosting-Einstellungen** hinzu. Wenn du dir noch nicht sicher bist, wie das geht, findest du eine detaillierte Erklärung in unserer [Domain hinzufügen](https://zap-hosting.com/guides/docs/webspace-adddomain) Anleitung.

![img](https://screensaver01.zap-hosting.com/index.php/s/Kx7KDPEk3t6Tcbd/download)



## DNS-Einstellungen konfigurieren

Um deine externe Domain mit deinem ZAP-Hosting Webspace zu verbinden, musst du zunächst die DNS-Einstellungen bei dem Anbieter anpassen, bei dem deine Domain registriert ist. Damit deine Website und deine E-Mails richtig funktionieren, muss deine Domain wissen, an welchen Server sie Besucher und Mailverkehr weiterleiten soll. Dazu musst du die erforderlichen DNS-Einträge erstellen.

Für die Einrichtung der A-Einträge benötigst du die IP-Adresse deiner Webspace-Instanz. Du findest diese Information direkt in deinem ZAP Webspace Dashboard.

![img](https://screensaver01.zap-hosting.com/index.php/s/DzpqenW4FwP6fbf/download)

Sobald du die IP-Adresse hast, kannst du die erforderlichen DNS-Einträge bei deinem Domain-Provider hinzufügen. Dazu gehören A-Einträge, um deine Domain auf deinen Webspace zu verweisen, sowie MX- und TXT-Einträge für die E-Mail-Zustellung und die Domainüberprüfung.

Ausführlichere Informationen darüber, wie die verschiedenen Arten von DNS-Einträgen funktionieren und welchen Zweck sie erfüllen, findest du in unserer  [Domain Records](domain-records.md) Anleitung.

Nachstehend findest du eine Tabelle mit allen erforderlichen DNS-Einträgen für deine Einrichtung:

| Name                           | Typ | Wert                           | TTL  | Prio |
| ------------------------------ | ---- | ------------------------------- | ---- | ---- |
| *                              | A    | IP-Adresse des Webspace instance | 3600 | 0    |
| mail                           | A    | IP-Adresse des Webspace instance | 3600 | 0    |
| www                            | A    | IP-Adresse des Webspace instance | 3600 | 0    |
| domain.tld.                    | A    | IP-Adresse des Webspace instance | 3600 | 0    |
| domain.tld.                    | MX   | v=DKIM1;k=rsa;p=MIIBIjA......   | 3600 | 10   |
| default._domainkey.domain.tld. | TXT  | plesk-steve.zap.cloud.          | 3600 | 0    |
| domain.tld.                    | TXT  | v=spf1 a mx ~all                | 3600 | 0    |
| _dmarc.domain.tld.             | TXT  | v=DMARC1; p=none                | 3600 | 0    |

:::warning DNS-Änderungen können Zeit benötigen

Es kann bis zu 24 Stunden dauern, bis sich die Änderungen an deinen DNS-Einstellungen weltweit vollständig verbreitet haben. Während dieser Zeit kann es sein, dass deine Domain nicht sofort auf deinen neuen Webspace oder deine neuen E-Mail-Dienste verweist. Bitte habe etwas Geduld, bis die Änderungen wirksam werden.
:::




## Abschluss
Mit diesen Schritten wird deine Domain konfiguriert und mit deinem Webspace verknüpft. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂


<InlineVoucher />
