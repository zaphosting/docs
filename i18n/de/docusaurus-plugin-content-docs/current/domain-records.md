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

## A Records

Mit einem A Record wird eine Weiterleitung von einer "**Sub-**" oder "**Hauptdomain**" auf eine "**IPv4-Adresse**" erstellt.

![2022-05-07_22-11](https://screensaver01.zap-hosting.com/index.php/s/bEbifyPimZKdsZs/preview)

## AAAA Records

Mit einem AAAA Record wird eine Weiterleitung von einer "**Sub-**" oder "**Hauptdomain**" auf eine "**IPv6-Adresse**" erstellt.

![2022-05-07_22-13](https://screensaver01.zap-hosting.com/index.php/s/49xBpKxgHcbWNQD/preview)

## CNAME Records

Mit einem CNAME Record wird eine Weiterleitung von einer "**Subdomain**" auf eine "**Sub-**" oder "**Hauptdomain**" erstellt.

![2022-05-07_22-14](https://screensaver01.zap-hosting.com/index.php/s/JTNzxMb7k4n5oPE/preview)

## MX Records

Mit einem MX Record wird eine Weiterleitung von einer "**Sub-**" oder "**Hauptdomain**" auf eine "**Domain**" oder einen "**A-Record**" erstellt.
Dieser MX Record wird genutzt um einen oder mehrere Mailserver anzugeben.
Die Priorität gibt an welcher Mailserver bevorzugt genutzt werden soll, wenn mehrere MX-Einträge bestehen.
Die Priorität muss eine Ganzzahl zwischen 0 und 65535 sein, je niedriger der Wert desto höher die Priorität.

![2022-05-07_22-15](https://screensaver01.zap-hosting.com/index.php/s/FZSs5Lw2npXN9mB/preview)

## PTR Records

Mit einem PTR Record wird eine Weiterleitung von einer "**IPv4-Adresse**" oder "**IPv6-Adresse**" auf eine "**Sub-**" oder "**Hauptdomain**" erstellt.
Dieser PTR Record stellt damit das Gegenstück zu dem A oder AAAA Record dar.

![2022-05-07_22-17](https://screensaver01.zap-hosting.com/index.php/s/Jfd8Si48TCH3DE7/preview)

## RP Records

Mit einem RP Record wird eine Information zu dem Inhaber der Domain erstellt.
In der Regel wird dafür eine E-mail Adresse eingetragen, bei welcher das "**@**" Symbol durch ein "**Punkt**" ersetzt wird.

![2022-05-07_22-19](https://screensaver01.zap-hosting.com/index.php/s/wxGTYBQ7KYPGTje/preview)

## SRV Records

Mit einem SRV Record wird eine Weiterleitung von einer "**Sub-**" oder "**Hauptdomain**" auf einen "**A-Record**" erstellt.
Dieser SRV Record wird für Anwendungen genutzt wo kein Standard Port gegeben ist und somit eine Portweiterleitung benötigt wird.
Die Priorität gibt an welcher der Dienste bevorzugt genutzt werden soll, wenn mehrere SRV Records für die gleichen Dienste erstellt werden.
Die Priorität muss eine Ganzzahl sein, je niedriger der Wert desto höher die Priorität.

![2022-05-07_22-24](https://screensaver01.zap-hosting.com/index.php/s/ye5pgKQo9aGinkR/preview)

## TXT Records

Mit einem TXT Record kann frei wählbarer Text eingetragen werden. 
Auf einigen Systemen dient der Inhalt, dazu Verwaltungsdaten zu kodieren.
Dieser TXT Record wird genutzt um SPF, DMARC und DKIM Einträge zu erstellen.

![2022-05-07_22-25](https://screensaver01.zap-hosting.com/index.php/s/YaeTykBpEswxBGa/preview)
