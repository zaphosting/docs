---
id: gameserver-subdomain
title: 'Gameserver: ZAP Subdomain'
description: Informationen zum Einrichten einer ZAP Cloud (.zap.cloud) Subdomain oder deiner eigenen Domain für deinen Gameserver von ZAP-Hosting - ZAP-Hosting.com 
sidebar_label: Gameserver Subdomain
services:
  - gameserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Unsere Gameserver bieten dir jetzt die Möglichkeit, schnell und einfach Subdomains für deinen Server einzurichten. In dieser Anleitung erfährst du, wie du die DNS-Subdomain-Funktion für deinen Server nutzen kannst, um eine ZAP Cloud-Subdomain zu erstellen oder deine eigene Domain einzurichten.

<YouTube videoId="1fFagkzOvfo" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/bbTYcXxCWXEYNrQ/preview" title="ZAP Cloud domain for Game Servers" description="Hast du das Gefühl, dass du etwas besser verstehst, wenn du es in Aktion siehst? Wir haben etwas für dich! Tauche ab in unser Video, welches alles für dich zusammenfasst. Egal, ob du es eilig hast oder einfach nur Informationen auf möglichst verständliche Art und Weise aufnehmen möchtest!"/>

![](https://screensaver01.zap-hosting.com/index.php/s/o7is2nazsZ5NPFF/preview)

<InlineVoucher />

## Verfügbarkeit

Die Subdomain-Funktion ist sowohl für neue als auch für bestehende Kunden verfügbar. Bei Neukunden wird während der Installation automatisch eine Subdomain `xxx`**.zap.cloud** eingerichtet. Bestehende Kunden müssen die Subdomain manuell unter **Einstellungen->DNS Einstellungen** auf der Weboberfläche des Spieleservers aktivieren. Die Verwendung dieses Bereichs wird im folgenden Abschnitt beschrieben.

Derzeit werden noch nicht alle Spiele unterstützt, aber wir freuen uns, dass die Funktion bereits bei einer Reihe von beliebten Spielen wie FiveM, Minecraft und anderen aktiv ist! Langfristig wollen wir diese Funktion auf so viele Spiele wie möglich ausweiten. Leider ist es bei einigen Spielen technisch nicht möglich, die Funktion hinzuzufügen. Bei diesen Spielen siehst du die IP-Adresse jedoch ganz normal in der Weboberfläche.

:::tip
Wenn das Spiel, das du installiert hast, derzeit nicht unterstützt wird, kannst du dich gerne mit unserem [Support-Team in Verbindung setzen](https://zap-hosting.com/de/customer/support/) und wir werden sehen, ob wir diese Funktion hinzufügen können :)
:::

## Verwaltung von Subdomains (DNS)

Die Verwaltung der Subdomain-Funktion auf deinem Gameserver ist ganz einfach. Gehe dazu in den Bereich **Einstellungen->DNS Einstellungen**.

Auf dieser Seite kannst du eine Reihe von Verwaltungsaufgaben durchführen, die sich auf die Free ZAP Cloud-Subdomain sowie auf die Nutzung deiner eigenen Domains beziehen, die du in deinem ZAP-Hosting-Konto eingerichtet hast.

![](https://screensaver01.zap-hosting.com/index.php/s/YZZ9qgCn57p6erP/preview)

:::info
Derzeit kannst du maximal 3 Subdomains pro Produkt aktiv haben (ohne die zufällig generierte ZAP Cloud Subdomain).
:::

### Zufällige ZAP Cloud Subdomain

Um eine zufällige ZAP Cloud Subdomain zu generieren, musst du den Button **Subdomains neu auflösen** auf dieser Einstellungsseite verwenden.

:::info
Bestehende Kunden sollten diesen Button auch verwenden, um zum ersten Mal eine zufällige ZAP Cloud-Subdomain zu generieren.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/XRbnp6D8m8GoENn/preview)

### Benutzerdefinierte ZAP Cloud Subdomain

Du hast die Möglichkeit, deine eigene ZAP Cloud Subdomain zu erstellen, indem du einfach die gewünschte Subdomain eingibst und **.zap.cloud** aus dem Dropdown-Menü auswählst (Standardoption).

:::note
Wenn du eine Fehlermeldung erhältst, ist es möglich, dass die Subdomain bereits in Gebrauch ist und/oder du ein verbotenes Wort oder Zeichen eingegeben hast, das zum Schutz unserer Kunden nicht erlaubt ist.
:::

Klicke nun auf den Button **Eintrag erstellen** und du solltest sehen, dass die Subdomain in der Liste erscheint. Es kann sein, dass du ein paar Minuten warten musst, bis sie voll funktionsfähig ist.

![](https://screensaver01.zap-hosting.com/index.php/s/2iSAZJpETYw9H3p/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/cMwxmPZFcyL7RjT/preview)

### Eigene Domain

:::info
Damit du deine Domain zum Erstellen einer Subdomain verwenden kannst, musst du sicherstellen, dass sie mit deinem ZAP-Hosting-Konto verknüpft ist, indem du sie [auf unserer Website](https://zap-hosting.com/de/shop/product/domain/) kaufst oder die Domain von einem anderen Anbieter auf dein Konto überträgst.
:::

Das Anlegen einer Subdomain mit deiner eigenen Domain erfolgt in denselben Schritten wie bei der benutzerdefinierten ZAP Cloud-Subdomain. Gib die gewünschte Subdomain ein und wähle deine eigene Domain aus dem Dropdown-Menü.

:::note
Wenn du eine Fehlermeldung erhältst, ist es möglich, dass die Subdomain bereits in Gebrauch ist und/oder du ein verbotenes Wort oder Zeichen eingegeben hast, das zum Schutz unserer Kunden nicht erlaubt ist.
:::

Klicke nun auf den Button **Eintrag erstellen** und du solltest sehen, dass die Subdomain in der Liste erscheint. Es kann sein, dass du ein paar Minuten warten musst, bis sie voll funktionsfähig ist.

![](https://screensaver01.zap-hosting.com/index.php/s/23w6gBHoYL75p5m/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/WD42o4ytri6WPBf/preview)

## Fehlersuche

### ZAP Cloud Subdomain

Wenn du Probleme mit den ZAP Cloud-Subdomains hast, kannst du versuchen, diese selbst zu beheben, indem du, wie oben beschrieben, zum Abschnitt **Einstellungen->DNS Einstellungen** gehst und dort den Button **Subdomains neu auflösen** anklickst.

![](https://screensaver01.zap-hosting.com/index.php/s/XRbnp6D8m8GoENn/preview)

Bitte warte ein paar Minuten, bevor du erneut überprüfst, ob sie richtig funktionieren.

### Eigene Domain

Wenn du deine eigene Domain nicht im Dropdown-Menü siehst, wenn du versuchst, eine Subdomain zu erstellen, liegt das wahrscheinlich daran, dass sie nicht mit deinem ZAP-Hosting-Konto verknüpft ist.

Bitte vergewissere dich, dass die Domain in deinem ZAP-Hosting-Konto aktiv ist, was bedeuten kann, dass du sie von einem anderen Anbieter übertragen musst.

Wenn du immer noch Probleme mit der Subdomain-Funktion hast, wende dich bitte an unser Support-Team, [indem du ein Ticket auf unserer Website erstellst](https://zap-hosting.com/de/customer/support/). Wir helfen dir dann gerne weiter.

<InlineVoucher />
