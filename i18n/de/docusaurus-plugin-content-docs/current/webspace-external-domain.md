---
id: webspace-external-domain
title: "Webspace: Extern gehostete Domain verknüpfen"
description: "Lerne, wie du deine externe Domain mit dem ZAP-Hosting Webspace verbindest für nahtlose Website- und E-Mail-Funktionalität → Jetzt mehr erfahren"
sidebar_label: Externe Domain verknüpfen
services:
  - webspace
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';



## Einführung

Du hast schon eine Domain bei einem anderen Anbieter registriert und möchtest sie mit deinem ZAP-Hosting Webspace verbinden? Kein Ding! Dafür musst du die DNS-Einstellungen bei deinem Domain-Anbieter anpassen. In dieser Anleitung zeigen wir dir genau, welche DNS-Einträge du erstellen musst, damit deine Domain korrekt auf deinen Webspace zeigt.

:::info Domain übertragen
Übertrage deine Domain zu ZAP-Hosting und genieße eine einfachere Verwaltung. Verbinde deine Domain mit deinem Webspace mit nur wenigen Klicks und profitiere von vielen zusätzlichen Features. Wie das geht, erfährst du in unserer [Domain-Übertragung](domain-transfer.md) Anleitung.
:::

<InlineVoucher />



## Domain in Plesk verknüpfen

Bevor du deine externe Domain mit deinem Webspace verknüpfen kannst, musst du die Domain zuerst in **Plesk** hinzufügen. Dazu fügst du deine Domain im Bereich **Hosting-Einstellungen** hinzu. Falls du noch nicht weißt, wie das geht, findest du eine ausführliche Anleitung in unserem [Domain hinzufügen](https://zap-hosting.com/guides/docs/webspace-adddomain) Guide.

![img](https://screensaver01.zap-hosting.com/index.php/s/Kx7KDPEk3t6Tcbd/download)



## DNS-Einstellungen konfigurieren

Um deine externe Domain mit deinem ZAP-Hosting Webspace zu verbinden, musst du zuerst die DNS-Einstellungen bei dem Anbieter anpassen, bei dem deine Domain registriert ist. Damit deine Website und E-Mails richtig funktionieren, muss deine Domain wissen, auf welchen Server sie Besucher und Mail-Traffic weiterleiten soll. Das passiert durch das Anlegen der nötigen DNS-Einträge.

Für die A-Einträge brauchst du die IP-Adresse deiner Webspace-Instanz. Diese findest du direkt in deinem ZAP Webspace Dashboard.

![img](https://screensaver01.zap-hosting.com/index.php/s/DzpqenW4FwP6fbf/download)

Hast du die IP-Adresse, kannst du die erforderlichen DNS-Einträge bei deinem Domain-Anbieter anlegen. Dazu gehören A-Einträge, die deine Domain auf deinen Webspace zeigen, sowie MX- und TXT-Einträge für den E-Mail-Versand und die Domain-Verifizierung.

Mehr Details zu den verschiedenen DNS-Eintragstypen und deren Zweck findest du in unserer [Domain-Einträge](domain-records.md) Anleitung.

Hier eine Tabelle mit allen benötigten DNS-Einträgen für deine Konfiguration:

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

:::warning DNS-Änderungen brauchen Zeit

DNS-Änderungen können bis zu 24 Stunden dauern, bis sie weltweit vollständig übernommen sind. In dieser Zeit zeigt deine Domain eventuell noch nicht sofort auf deinen neuen Webspace oder deine E-Mail-Dienste. Bitte hab etwas Geduld, bis die Änderungen greifen.
:::




## Fazit
Wenn du diese Schritte befolgst, ist deine Domain korrekt konfiguriert und mit deinem Webspace verknüpft. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂


<InlineVoucher />