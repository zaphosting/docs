---
id: domain-records
title: "Domain: Domain-Einträge Einstellungen"
description: "Entdecke, wie du verschiedene DNS-Eintragstypen konfigurierst und verstehst, um dein Domain-Management zu optimieren → Jetzt mehr erfahren"
sidebar_label: Domain-Einträge
services:
  - domain
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Domains lassen sich ganz easy konfigurieren, indem du verschiedene DNS-Eintragstypen nutzt, die unterschiedliche Funktionen erfüllen. In dieser Anleitung erklären wir dir alle Eintragstypen und wie sie funktionieren.

<InlineVoucher />

## Konfiguration

Du kannst die Domain-Einträge in deiner Domain-Verwaltung unter DNS-Verwaltung einstellen. Klick dazu einfach auf den grünen **Neuer Eintrag** Button. Es öffnet sich ein Popup-Fenster, in dem du neue Einträge nach Belieben anlegen und konfigurieren kannst.

![img](https://screensaver01.zap-hosting.com/index.php/s/5qGjz8jDi4sNGcQ/download)

:::info
Wir nutzen die Domain **zap-hosting.com** als Beispiel, um die einzelnen DNS-Eintragstypen zu veranschaulichen. Bitte verwende in deinem Fall deine eigene Domain.
:::

:::warning
Achte bei der Konfiguration eines DNS-Eintrags darauf, am Ende des Eintrags einen Punkt zu setzen, um zu kennzeichnen, dass der Domainname vollständig ist und Missverständnisse bei der Zuordnung im DNS-System zu vermeiden.
:::

## Arten von DNS-Einträgen

Es gibt verschiedene Arten von DNS-Einträgen, die unterschiedliche Bedeutungen und Zwecke haben. Die Bedeutung und Unterschiede erklären wir dir jetzt.

### A-Einträge

Ein A-Eintrag wird verwendet, um eine Weiterleitung einer "**Subdomain**" oder "**Hauptdomain**" auf eine "**IPv4-Adresse**" zu erstellen.

| Name (Beispiel)   | Typ | Wert (Beispiel) | TTL  | Priorität |
| ----------------- | --- | --------------- | ---- | --------- |
| zap-hosting.com.  | A   | IPv4-Adresse    | 1440 | 0         |


### AAAA-Einträge

Ein AAAA-Eintrag wird verwendet, um eine Weiterleitung einer "**Subdomain**" oder "**Hauptdomain**" auf eine "**IPv6-Adresse**" zu erstellen.

| Name (Beispiel)   | Typ  | Wert (Beispiel) | TTL  | Priorität |
| ----------------- | ---- | --------------- | ---- | --------- |
| zap-hosting.com.  | AAAA | IPv6-Adresse    | 1440 | 0         |


### CNAME-Einträge

Ein CNAME-Eintrag wird verwendet, um eine Weiterleitung einer "**Subdomain**" auf eine "**Subdomain**" oder "**Hauptdomain**" zu erstellen.

| Name (Beispiel) | Typ   | Wert (Beispiel)  | TTL  | Priorität |
| --------------- | ----- | ---------------- | ---- | --------- |
| zap-test.       | CNAME | zap-hosting.com. | 1440 | 0         |


### MX-Einträge

Ein MX-Eintrag wird verwendet, um eine Weiterleitung einer "**Subdomain**" oder "**Hauptdomain**" auf eine "**Domain**" oder einen "**A-Eintrag**" zu erstellen. Dieser MX-Eintrag gibt einen oder mehrere Mailserver an. Die Priorität legt fest, welcher Mailserver bevorzugt genutzt wird, falls mehrere MX-Einträge vorhanden sind. Die Priorität muss eine ganze Zahl zwischen 0 und 65535 sein, je niedriger der Wert, desto höher die Priorität.

| Name (Beispiel)   | Typ   | Wert (Beispiel)   | TTL  | Priorität |
| ----------------- | ----- | ----------------- | ---- | --------- |
| zap-hosting.com.  | MX    | mailserverxy.com. | 1440 | 0         |


### PTR-Einträge

Ein PTR-Eintrag wird verwendet, um eine Weiterleitung einer "**IPv4-Adresse**" oder "**IPv6-Adresse**" auf eine "**Subdomain**" oder "**Hauptdomain**" zu erstellen. Dieser PTR-Eintrag ist das Gegenstück zum A- oder AAAA-Eintrag.

| Name (Beispiel)           | Typ  | Wert (Beispiel)    | TTL  | Priorität |
| ------------------------- | ---- | ------------------ | ---- | --------- |
| 1.0.0.127.in-addr.arpa.   | PTR  | zap-hosting.com.   | 1440 | 0         |


### RP-Einträge

Ein RP-Eintrag wird verwendet, um Informationen über den Besitzer der Domain bereitzustellen. Üblicherweise wird dafür eine E-Mail-Adresse eingetragen, bei der das "**@**"-Symbol durch einen "**Punkt**" ersetzt wird.

| Name (Beispiel) | Typ | Wert (Beispiel)       | TTL  | Priorität |
| --------------- | --- | --------------------- | ---- | --------- |
| rp.             | RP  | info.zap-hosting.com. | 1440 | 0         |

### SRV-Einträge

Ein SRV-Eintrag wird verwendet, um eine Weiterleitung einer "**Subdomain**" oder "**Hauptdomain**" auf einen "**A-Eintrag**" zu erstellen.  
SRV-Einträge kommen bei Anwendungen zum Einsatz, die keinen Standard-Port nutzen und daher eine Portweiterleitung benötigen.  
Die Priorität definiert, welcher Dienst bevorzugt genutzt wird, falls mehrere SRV-Einträge für denselben Dienst existieren.  
Die Priorität muss eine ganze Zahl sein, je niedriger der Wert, desto höher die Priorität.

| Name (Beispiel)   | Typ | Wert (Beispiel)           | TTL  | Priorität |
| ----------------- | --- | ------------------------- | ---- | --------- |
| zap-hosting.com.  | SRV | 0 2006 zap-hosting.com.   | 1440 | 0         |

### TXT-Einträge

Ein TXT-Eintrag wird verwendet, um beliebigen Text hinzuzufügen. Auf manchen Systemen werden die Inhalte genutzt, um administrative Daten zu kodieren. Dieser TXT-Eintrag wird häufig für SPF-, DMARC- und DKIM-Einträge verwendet.

| Name (Beispiel)   | Typ | Wert (Beispiel) | TTL  | Priorität |
| ----------------- | --- | --------------- | ---- | --------- |
| zap-hosting.com.  | TXT | v=spf1 -all     | 1440 | 0         |


## Abschluss

Glückwunsch, du hast deine DNS-Einträge erfolgreich erstellt und konfiguriert. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />