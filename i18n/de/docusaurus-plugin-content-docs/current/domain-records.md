---
id: domain-records
title: "Domain: Domain Records-Einstellungen"
description: Informationen zu den Domain-Record-Einstellungen für Domains bei ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Domain Records
services:
  - domain
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Domains können ganz einfach konfiguriert werden, indem man eine Vielzahl von DNS-Eintragstypen verwendet, die unterschiedliche Aktionen ausführen. In diesem Anleitung gehen wir auf die verschiedenen Eintragstypen ein und erklären, wie sie funktionieren.



## Konfiguration
Du kannst die Domaineinträge in deiner Domainverwaltung unter DNS-Verwaltung konfigurieren. Klicke dazu auf den grünen Button **Neuer Eintrag**. Daraufhin öffnet sich ein Popup-Fenster. Von dort aus kannst du neue Einträge nach Belieben konfigurieren und erstellen.

![img](https://screensaver01.zap-hosting.com/index.php/s/ibxCxP2Be9pHbgy/download)

:::info
Wir verwenden die Domain **zap-hosting.com**, um die einzelnen Arten von DNS-Einträgen zu veranschaulichen. Bitte verwende in deinem Fall deine eigene Domain.
:::

:::warning
Bitte stelle bei der Konfiguration eines DNS-Eintrags sicher, dass ein Punkt am Ende des Eintrags gesetzt wird, um zu definieren, dass der Domänenname vollständig ist und um Missverständnisse bei der Zuordnung im DNS-System zu vermeiden.
:::



## Arten von DNS-Einträgen

Es gibt verschiedene Arten von DNS-Einträgen, die unterschiedliche Bedeutungen und Zwecke haben. Die Bedeutung und Unterschiede werden im Folgenden erläutert.

### A Records

Mit einem A Record wird eine Weiterleitung von einer "**Sub-**" oder "**Hauptdomain**" auf eine "**IPv4-Adresse**" erstellt.

| Name (Beispiel)   | Typ | Wert (Beispiel) | TTL  | Priorität |
| ---------------- | ---- | --------------- | ---- | -------- |
| zap-hosting.com. | A    | IPv4-Adresse    | 1440 | 0        |

### AAAA Records

Mit einem AAAA Record wird eine Weiterleitung von einer "**Sub-**" oder "**Hauptdomain**" auf eine "**IPv6-Adresse**" erstellt.

| Name (Beispiel)   | Typ | Wert (Beispiel) | TTL  | Priorität |
| ---------------- | ---- | --------------- | ---- | -------- |
| zap-hosting.com. | AAA  | IPv6-Adresse    | 1440 | 0        |

### CNAME Records

Mit einem CNAME Record wird eine Weiterleitung von einer "**Subdomain**" auf eine "**Sub-**" oder "**Hauptdomain**" erstellt.

| Name (Beispiel) | Typ | Wert (Beispiel) | TTL  | Priorität |
| ----------- | ---- | ------------ | ---- | -------- |
| zap-test. | CNAME  | zap-hosting.com | 1440 | 0        |

### MX Records

Mit einem MX Record wird eine Weiterleitung von einer "**Sub-**" oder "**Hauptdomain**" auf eine "**Domain**" oder einen "**A-Record**" erstellt.
Dieser MX Record wird genutzt um einen oder mehrere Mailserver anzugeben.
Die Priorität gibt an welcher Mailserver bevorzugt genutzt werden soll, wenn mehrere MX-Einträge bestehen.
Die Priorität muss eine Ganzzahl zwischen 0 und 65535 sein, je niedriger der Wert desto höher die Priorität.

| Name (Beispiel)   | Typ  | Wert (Beispiel)  | TTL  | Priorität |
| ---------------- | ----- | ---------------- | ---- | -------- |
| zap-hosting.com. | CNAME | mailserverxy.com | 1440 | 0        |

### PTR Records

Mit einem PTR Record wird eine Weiterleitung von einer "**IPv4-Adresse**" oder "**IPv6-Adresse**" auf eine "**Sub-**" oder "**Hauptdomain**" erstellt.
Dieser PTR Record stellt damit das Gegenstück zu dem A oder AAAA Record dar.

| Name (Beispiel)          | Typ  | Wert (Beispiel)  | TTL  | Priorität |
| ----------------------- | ----- | ---------------- | ---- | -------- |
| 1.0.0.127.in-addr.arpa. | PTR | zap-hosting.com. | 1440 | 0        |

### RP Records

Mit einem RP Record wird eine Information zu dem Inhaber der Domain erstellt.
In der Regel wird dafür eine E-mail Adresse eingetragen, bei welcher das "**@**" Symbol durch ein "**Punkt**" ersetzt wird.

| Name (Beispiel) | Typ | Wert (Beispiel)       | TTL  | Priorität |
| -------------- | ---- | --------------------- | ---- | -------- |
| rp.            | RP   | info.zap-hosting.com. | 1440 | 0        |

### SRV Records

Mit einem SRV Record wird eine Weiterleitung von einer "**Sub-**" oder "**Hauptdomain**" auf einen "**A-Record**" erstellt.
Dieser SRV Record wird für Anwendungen genutzt wo kein Standard Port gegeben ist und somit eine Portweiterleitung benötigt wird.
Die Priorität gibt an welcher der Dienste bevorzugt genutzt werden soll, wenn mehrere SRV Records für die gleichen Dienste erstellt werden.
Die Priorität muss eine Ganzzahl sein, je niedriger der Wert desto höher die Priorität.

| Name (Beispiel) | Typ | Wert (Beispiel)       | TTL  | Priorität |
| -------------- | ---- | --------------------- | ---- | -------- |
| zap-hosting.com. | SRV   | 0 2006 zap-hosting.com. | 1440 | 0        |

### TXT Records

Mit einem TXT Record kann frei wählbarer Text eingetragen werden. 
Auf einigen Systemen dient der Inhalt, dazu Verwaltungsdaten zu kodieren.
Dieser TXT Record wird genutzt um SPF, DMARC und DKIM Einträge zu erstellen.

| Name (Beispiel)   | Typ | Wert (Beispiel) | TTL  | Priorität |
| ---------------- | ---- | --------------- | ---- | -------- |
| zap-hosting.com. | TXT   | v=spf1 -all     | 1440 | 0        |


## Abschluss

Glückwunsch, du hast deine DNS-Einträge erfolgreich erstellt und konfiguriert. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂
