---
id: domain_records
title: Domains: Domain Records-Einstellungen
description: Informationen zu den Domain-Record-Einstellungen für Domains bei ZAP-Hosting - ZAP-Hosting.com Dokumentationen
sidebar_label: Domain Records
---

## A Records

Mit einem A Record wird eine Weiterleitung von einer "**Sub-**" oder "**Hauptdomain**" auf eine "**IPv4-Adresse**" erstellt.

![2022-05-07_22-11](https://user-images.githubusercontent.com/61953937/167270666-f59dce7e-8a24-463e-a7ef-ef6377193554.png)

## AAAA Records

Mit einem AAAA Record wird eine Weiterleitung von einer "**Sub-**" oder "**Hauptdomain**" auf eine "**IPv6-Adresse**" erstellt.

![2022-05-07_22-13](https://user-images.githubusercontent.com/61953937/167270667-b8c8f02a-8ceb-4835-98b3-c8491e477c54.png)

## CNAME Records

Mit einem CNAME Record wird eine Weiterleitung von einer "**Subdomain**" auf eine "**Sub-**" oder "**Hauptdomain**" erstellt.

![2022-05-07_22-14](https://user-images.githubusercontent.com/61953937/167270671-39dc035e-86b9-47c7-b3f6-5dd0bbdf823a.png)

## MX Records

Mit einem MX Record wird eine Weiterleitung von einer "**Sub-**" oder "**Hauptdomain**" auf eine "**Domain**" oder einen "**A-Record**" erstellt.
Dieser MX Record wird genutzt um einen oder mehrere Mailserver anzugeben.
Die Priorität gibt an welcher Mailserver bevorzugt genutzt werden soll, wenn mehrere MX-Einträge bestehen.
Die Priorität muss eine Ganzzahl zwischen 0 und 65535 sein, je niedriger der Wert desto höher die Priorität.

![2022-05-07_22-15](https://user-images.githubusercontent.com/61953937/167270684-cbad14c8-4a5f-44a8-961d-b8777ad4e09e.png)

## PTR Records

Mit einem PTR Record wird eine Weiterleitung von einer "**IPv4-Adresse**" oder "**IPv6-Adresse**" auf eine "**Sub-**" oder "**Hauptdomain**" erstellt.
Dieser PTR Record stellt damit das Gegenstück zu dem A oder AAAA Record dar.

![2022-05-07_22-17](https://user-images.githubusercontent.com/61953937/167270685-0dad8c03-aa50-422f-bb6e-33d0732efcda.png)

## RP Records

Mit einem RP Record wird eine Information zu dem Inhaber der Domain erstellt.
In der Regel wird dafür eine E-mail Adresse eingetragen, bei welcher das "**@**" Symbol durch ein "**Punkt**" ersetzt wird.

![2022-05-07_22-19](https://user-images.githubusercontent.com/61953937/167270687-9a06ac43-e173-4664-bc6f-43696e5e9f6d.png)

## SRV Records

Mit einem SRV Record wird eine Weiterleitung von einer "**Sub-**" oder "**Hauptdomain**" auf einen "**A-Record**" erstellt.
Dieser SRV Record wird für Anwendungen genutzt wo kein Standard Port gegeben ist und somit eine Portweiterleitung benötigt wird.
Die Priorität gibt an welcher der Dienste bevorzugt genutzt werden soll, wenn mehrere SRV Records für die gleichen Dienste erstellt werden.
Die Priorität muss eine Ganzzahl sein, je niedriger der Wert desto höher die Priorität.

![2022-05-07_22-24](https://user-images.githubusercontent.com/61953937/167270696-9ba97f4c-e0d4-47f9-8726-744661d1d671.png)

## TXT Records

Mit einem TXT Record kann frei wählbarer Text eingetragen werden. 
Auf einigen Systemen dient der Inhalt, dazu Verwaltungsdaten zu kodieren.
Dieser TXT Record wird genutzt um SPF, DMARC und DKIM Einträge zu erstellen.

![2022-05-07_22-25](https://user-images.githubusercontent.com/61953937/167270700-d72fcea2-eff3-4715-b6da-26e076fa7aab.png)
