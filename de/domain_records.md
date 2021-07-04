---
id: domain_records
title: Domains: Domain Records-Einstellungen
description: Informationen zu den Domain-Record-Einstellungen für Domains bei ZAP-Hosting - ZAP-Hosting.com Dokumentationen
sidebar_label: Domain Records
---

## A Records

Mit einem A Record wird eine Weiterleitung von einer "**Sub-**" oder "**Hauptdomain**" auf eine "**IPv4-Adresse**" erstellt.

![](https://screensaver01.zap-hosting.com/index.php/s/HEtqkGe9XMxPt3g/preview)

## AAAA Records

Mit einem AAAA Record wird eine Weiterleitung von einer "**Sub-**" oder "**Hauptdomain**" auf eine "**IPv6-Adresse**" erstellt.

![](https://screensaver01.zap-hosting.com/index.php/s/XRHQfqAWDtLJbZD/preview)

## CNAME Records

Mit einem CNAME Record wird eine Weiterleitung von einer "**Subdomain**" auf eine "**Sub-**" oder "**Hauptdomain**" erstellt.

![](https://screensaver01.zap-hosting.com/index.php/s/aaXr4o3kz4j52kA/preview)

## MX Records

Mit einem MX Record wird eine Weiterleitung von einer "**Sub-**" oder "**Hauptdomain**" auf eine "**Domain**" oder einen "**A-Record**" erstellt.
Dieser MX Record wird genutzt um einen oder mehrere Mailserver anzugeben.
Die Priorität gibt an welcher Mailserver bevorzugt genutzt werden soll, wenn mehrere MX-Einträge bestehen.
Die Priorität muss eine Ganzzahl zwischen 0 und 65535 sein, je niedriger der Wert desto höher die Priorität.

![](https://screensaver01.zap-hosting.com/index.php/s/idHHTaSHgNYy2aX/preview)

## PTR Records

Mit einem PTR Record wird eine Weiterleitung von einer "**IPv4-Adresse**" oder "**IPv6-Adresse**" auf eine "**Sub-**" oder "**Hauptdomain**" erstellt.
Dieser PTR Record stellt damit das Gegenstück zu dem A oder AAAA Record dar.

![](https://screensaver01.zap-hosting.com/index.php/apps/files_sharing/publicpreview/FtFwWRAxKYP4eEg?x=1601&y=382&a=true&file=chrome_YXmJpZcvJ1.png&scalingup=0)

## RP Records

Mit einem RP Record wird eine Information zu dem Inhaber der Domain erstellt.
In der Regel wird dafür eine E-mail Adresse eingetragen, bei welcher das "**@**" Symbol durch ein "**Punkt**" ersetzt wird.

![](https://screensaver01.zap-hosting.com/index.php/apps/files_sharing/publicpreview/KnWS5yrM48pf93k?x=1600&y=439&a=true&file=chrome_70WNQoDLpG.png&scalingup=0)

## SRV Records

Mit einem SRV Record wird eine Weiterleitung von einer "**Sub-**" oder "**Hauptdomain**" auf einen "**A-Record**" erstellt.
Dieser SRV Record wird für Anwendungen genutzt wo kein Standard Port gegeben ist und somit eine Portweiterleitung benötigt wird.
Die Priorität gibt an welcher der Dienste bevorzugt genutzt werden soll, wenn mehrere SRV Records für die gleichen Dienste erstellt werden.
Die Priorität muss eine Ganzzahl sein, je niedriger der Wert desto höher die Priorität.

![](https://screensaver01.zap-hosting.com/index.php/apps/files_sharing/publicpreview/ZAGDC9tAdErrm4E?x=1920&y=562&a=true&file=firefox_Q7FB36BIg2.png&scalingup=0)

## TXT Records

Mit einem TXT Record kann frei wählbarer Text eingetragen werden. 
Auf einigen Systemen dient der Inhalt, dazu Verwaltungsdaten zu kodieren.
Dieser TXT Record wird genutzt um SPF, DMARC und DKIM Einträge zu erstellen.

![](https://screensaver01.zap-hosting.com/index.php/apps/files_sharing/publicpreview/ebdKEigd5FcPw4m?x=1600&y=439&a=true&file=chrome_XTUKWOnGOw.png&scalingup=0)
