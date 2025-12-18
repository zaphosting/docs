---
id: domain-cloudflare-setup
title: "Domain: Domain mit Cloudflare einrichten"
description: "Entdecke, wie du die Sicherheit und Performance deiner Website mit Cloudflare und ZAP-Hosting Domains verbesserst → Jetzt mehr erfahren"
sidebar_label: Cloudflare Einrichtung
services:
  - domain
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Cloudflare ist ein mega beliebter CDN (Content Delivery Network) Anbieter, der deine Websites mit verbessertem Schutz, DDoS-Schutz und einfacher Verwaltung über ihr Dashboard aufpeppt. Diese Anleitung zeigt dir, wie du deine ZAP-Hosting Domain so einrichtest, dass sie mit Cloudflare über ExpertDNS und angepasste Nameserver läuft.

<InlineVoucher />

## Vorbereitung
Damit du dieser Anleitung folgen kannst, brauchst du:
- Eine Domain in deinem ZAP-Hosting Account
- Ein Cloudflare Konto
  
## Schritt 1: ExpertDNS Option aktivieren

Geh zuerst ins Webinterface deines gewählten Domains in deinem ZAP-Hosting Account. Such die **ExpertDNS** Option und aktiviere sie, indem du das Häkchen setzt und auf Speichern klickst.

![](https://screensaver01.zap-hosting.com/index.php/s/ZdJDTfAtjQe5Xgt/preview)

## Schritt 2: Domain bei Cloudflare einrichten

Jetzt geht’s an Cloudflare: Logg dich in dein Cloudflare Konto ein. Sobald du drin bist, füge deine Website im Dashboard hinzu und folge den Setup-Schritten, die Cloudflare dir vorgibt.

![](https://screensaver01.zap-hosting.com/index.php/s/aSFWP63XsHZsKk9/preview)

Bei Schritt 4 bekommst du die Nameserver, die du einrichten musst.

![](https://screensaver01.zap-hosting.com/index.php/s/mN7gHoEZWjz7FJG/preview)

Wechsel zurück ins Webinterface deiner Domain und öffne den **ExpertDNS** Bereich. Dort entfernst du die Standard-ZAP-Hosting Nameserver und ersetzt sie durch die von Cloudflare erhaltenen.

![](https://screensaver01.zap-hosting.com/index.php/s/cqboxyTns4o8B5j/preview)

Speicher deine Änderungen unbedingt ab.

## Schritt 3: Setup bei Cloudflare abschließen

Komm zurück ins Cloudflare Dashboard. Auf der Setup-Seite deiner Domain findest du einen Button, mit dem du Cloudflare anweisen kannst, die Nameserver erneut zu prüfen.

:::info
Es kann bis zu 24 Stunden dauern, bis die Nameserver-Änderungen erkannt werden, meistens geht’s aber viel schneller.
:::

Sobald Cloudflare deine Nameserver-Änderungen erkannt hat, bekommst du eine E-Mail, die dir bestätigt, dass dein Setup fertig ist. Du kannst das auch im Cloudflare Dashboard checken. Bei erfolgreicher Einrichtung steht unter deiner Domain **Active**.

Du hast deine Domain erfolgreich mit Cloudflare verbunden und damit bessere Performance, mehr Sicherheit und einfachere Verwaltung für deine Website freigeschaltet.

<InlineVoucher />