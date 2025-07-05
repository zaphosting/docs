---
id: webspace-link-external-domain
title: "Webspace: Verknüpfe eine extern verwaltete Domain mit deinem Webspace"
description: Informationen über das Hinzufügen einer externen verwalteten Domain zu deinem Webspace von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Externe Domain verlinken
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Hast du bereits eine Domain bei einem anderen Provider registriert und möchtest diese mit deinem ZAP-Hosting Webspace-Produkt verbinden? Kein Problem! Dazu musst du die DNS-Einstellungen bei deinem Domain-Provider anpassen.

In dieser Anleitung zeigen wir dir genau, welche DNS-Einträge du anlegen musst, damit deine Domain korrekt auf deinen Webspace verweist.

:::tip Domain zu ZAP-Hosting transferieren
Transferiere deine Domain zu ZAP-Hosting und genieße die einfache Verwaltung. Verknüpfe deine Domain mit nur wenigen Klicks mit deinem Webspace und profitiere von vielen zusätzlichen Funktionen. Wie du deine Domain transferieren kannst, erfährst du in unserer [Domain transferieren](domain-transfer.md) Anleitung.
:::

<InlineVoucher />



## Domain in Plesk registrieren

Bevor du deine externe Domain mit deinem Webspace verknüpfen kannst, musst du die Domain zunächst in **Plesk** hinzufügen. Füge dazu deine Domain unter dem Abschnitt **Hosting- Settings** hinzu. Wenn du dir noch nicht sicher bist, wie das geht, findest du eine detaillierte Erklärung in unserer [Domain hinzufügen](webspace-adddomain.md) Anleitung.

![img](https://screensaver01.zap-hosting.com/index.php/s/Kx7KDPEk3t6Tcbd/download)



## Konfigurieren der DNS-Einstellungen
Um deine externe Domain mit deinem ZAP-Hosting-Webspace-Produkt zu verbinden, musst du die richtigen DNS-Einträge bei deinem Domain-Provider einrichten. Dadurch wird dem Internet mitgeteilt, wo sich dein Webspace befindet, damit Besucher deine Website erreichen können und deine E-Mail-Dienste ordnungsgemäß funktionieren.

Zum Einrichten der A-Einträge benötigst du die IP-Adresse deiner Webspace-Instanz. Du kannst diese Informationen direkt in deinem ZAP-Webspace-Dashboard finden. Anhand des Screenshots kannst du genau sehen, wo du die IP-Adresse findest, die du brauchst.

![img](https://screensaver01.zap-hosting.com/index.php/s/DzpqenW4FwP6fbf/download)

Sobald du die IP-Adresse hast, kannst du die erforderlichen DNS-Einträge bei deinem Domain-Provider hinzufügen. Dazu gehören A-Einträge, die auf den Webspace verweisen, sowie MX- und TXT-Einträge für die E-Mail-Zustellung und die Überprüfung der Domain.

Im Folgenden findest du eine Tabelle mit allen erforderlichen DNS-Einträgen für deine Einrichtung:

| Name                           | Typ  | Wert                            | TTL  | Prio |
| ------------------------------ | ---- | ------------------------------- | ---- | ---- |
| *                              | A    | IP-Adresse der Webspace-Instanz | 3600 | 0    |
| mail                           | A    | IP-Adresse der Webspace-Instanz | 3600 | 0    |
| www                            | A    | IP-Adresse der Webspace-Instanz | 3600 | 0    |
| domain.tld.                    | A    | IP-Adresse der Webspace-Instanz | 3600 | 0    |
| domain.tld.                    | MX   | v=DKIM1;k=rsa;p=MIIBIjA......   | 3600 | 10   |
| default._domainkey.domain.tld. | TXT  | plesk-steve.zap.cloud.          | 3600 | 0    |
| domain.tld.                    | TXT  | v=spf1 a mx ~all                | 3600 | 0    |
| _dmarc.domain.tld.             | TXT  | v=DMARC1; p=none                | 3600 | 0    |

Weitere Informationen über die Funktionsweise der verschiedenen Arten von DNS-Einträgen und ihren Zweck findest du in unserer Anleitung [Domain Records](domain-records.md).



:::warning DNS-Änderungen können bis zu 24 Stunden benötigen
Änderungen an den DNS-Einstellungen können bis zu 24 Stunden in Anspruch nehmen, bis sie weltweit gültig sind. Während dieser Zeit kann es sein, dass deine Domain nicht sofort auf deinen neuen Webspace oder deine neuen E-Mail-Dienste verweist. Hab also bitte etwas Geduld, während die Änderungen in Kraft treten.
:::



## Abschluss

Du hast erfolgreich deine extern verwaltete Domain mit deinem Webspace von ZAP-Hosting verknüpft. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂
