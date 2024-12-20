---
id: gameserver-tebex
title: 'Gameserver: Tebex Monetarisierung einrichten'
description: Informationen wie du mit Tebex mit deinem Gameserver von ZAP-Hosting Geld verdienen kannst und wie du Tebex auf deinem Server einrichtest - ZAP-Hosting.com Dokumentation
sidebar_label: Tebex Monetarisierung
services:
  - gameserver
---

import Card from '@site/src/components/Card/Card';
import Cards from '@site/src/components/Cards/Cards';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Tebex ist eine Plattform, die dir erlaubt, mit deinem Gameserver bares Geld zu verdienen,
indem du Spielgegenstände, Ränge und vieles mehr verkaufen kannst. Die Plattform 
stellt dir einen professionellen Webstore zur Verfügung, mit dem du digitale Güter verkaufen
und einige Statistiken zu deinen Verkäufen einsehen kannst. Besuche 
[tebex.io](https://affiliate.tebex.io/r/690a6731-fee1-4054-84e1-30c26729403a)
für weitere Informationen über die Funktionsweise.

<InlineVoucher />

## Unterstützte Spiele
Die folgenden Spiele, die wir ebenfalls für unsere eigenen Gameserver-Produkte anbieten, werden von Tebex unterstützt. Für weitere Informationen und andere verfügbare Spiele empfehlen wir einen Blick auf die offizielle [Website](https://www.tebex.io/game-servers) zu werfen. 

<Cards>
   <Card title="ARK" description="Placeholder" link="https://www.tebex.io/pricing-for-game-servers/ark" image="https://screensaver01.zap-hosting.com/index.php/s/qnWELD8ik9srBDG/preview"/>
   <Card title="CS:GO" description="Placeholder" link="https://www.tebex.io/pricing-for-game-servers/csgo" image="https://screensaver01.zap-hosting.com/index.php/s/RojGnj9TcpGSdzm/preview"/>
   <Card title="Minecraft" description="Placeholder" link="https://www.tebex.io/pricing-for-game-servers/minecraft" image="https://screensaver01.zap-hosting.com/index.php/s/e6BtaFzTZ7czqXy/preview"/>
   <Card title="FiveM" description="Placeholder" link="https://www.tebex.io/pricing-for-game-servers/fivem" image="https://screensaver01.zap-hosting.com/index.php/s/PQKfzYiMAmSjXNz/preview"/>
   <Card title="Hurtworld" description="Placeholder" link="https://www.tebex.io/pricing-for-game-servers/hurtworld" image="https://screensaver01.zap-hosting.com/index.php/s/EJpzMG9gHL4fe5W/preview"/>
   <Card title="Rust" description="Placeholder" link="https://www.tebex.io/pricing-for-game-servers/rust" image="https://screensaver01.zap-hosting.com/index.php/s/G82jnYsbexscj5W/preview"/>
   <Card title="Space Engineers" description="Placeholder" link="https://zap-hosting.com/guides/docs/spaceengineers-firststeps-dashboard" image="https://screensaver01.zap-hosting.com/index.php/s/wgp2Jofo2BTkcR9/preview"/>
    <Card title="Team Fortress 2" description="Placeholder" link="https://zap-hosting.com/guides/docs/tf2-firststeps-dashboard" image="https://screensaver01.zap-hosting.com/index.php/s/PPRN8qRJDBjEzmG/preview"/>
    <Card title="Unturned" description="Placeholder" link="https://www.tebex.io/pricing-for-game-servers/7-days-to-die" image="https://screensaver01.zap-hosting.com/index.php/s/GTxekqqTxQyttDS/preview"/>
    <Card title="Garry's Mod" description="Placeholder" link="https://zap-hosting.com/guides/docs/gmod-firststeps-dashboard" image="https://screensaver01.zap-hosting.com/index.php/s/LddW8FyQ2ZKKTzN/preview"/>
</Cards>

## Tebex verknüpfen

Die Einrichtung von Tebex mit ZAP ist sehr einfach. Die Installation und Konfiguration erfordert nur wenige Schritte, die im Folgenden näher erläutert werden. 

### Unterstütztes Spiel auswählen
Wähle ein Spiel aus, welches aktuell durch Tebex unterstützt wird und installiere es auf deinem
Gameserver. Klicke hierzu auf "Spiele" in der Seitenleiste. Wähle nun unter "Verfügbare Spiele"
ein unterstütztes Spiel auf und klicke auf den Download-Button, um es zu installieren. Sobald 
dieser Vorgang abgeschlossen ist, kannst du mit Schritt 2 fortfahren.

### Tebex Einladung anfordern
Wenn das Spiel, welches du ausgewählt hast, Tebex unterstützt, siehst du jetzt den Tab "Tebex Shop"
in der Seitenleiste. Klicke nach dem Laden der Seite auf das Bild mit dem Tebex Logo. 

![](https://screensaver01.zap-hosting.com/index.php/s/W4M224XdyDDHzsf/preview)

Tebex sendet dir nun eine Einladung an die E-Mail Adresse, die in deinem ZAP-Hosting Kundenaccount hinterlegt
ist. Bitte folge den Schritten in der E-Mail, um deinen Tebex Account zu aktivieren. Du wirst im 
Anschluss durch die Einrichtung deines Webshops durchgeführt.

### Tebex Plugin installieren
Dieser Prozess wird in der Regel automatisiert durchgeführt. Wenn wir kein Plugin für 
die automatisierte Installation auf unseren Servern finden können oder das Pingback von 
Tebex fehlt, musst du das Plugin manuell installieren.

### Tebex Plugin konfigurieren
Installiere das passende Plugin für dein Spiel manuell auf deinem Gameserver. Der Prozess
unterscheidet sich von Spiel zu Spiel. Eine grundlegende Schritt für Schritt Anleitung zur 
Installation einiger Plugins findest du [hier](https://docs.tebex.io/store/integrating-with-your-game-server-or-website/minecraft-java-edition).

## Überprüfung der Verknüpfung mit Tebex
Zu guter Letzt solltest du noch die erfolgreiche Installation des Plugins bestätigen. 

![](https://screensaver01.zap-hosting.com/index.php/s/zNEp5QbnyeTR3BP/preview)

In einigen Fällen kann es sein, dass du uns noch einmal den Tebex Webstore API Schlüssel 
mitteilen musst, damit wir aus ZAP 2.5 eine Verbindung zu deinem Tebex Shop aufbauen können. Im Anschluss kannst du dann sehen, dass die Verbindung erfolgreich angelegt wurde:
![](https://screensaver01.zap-hosting.com/index.php/s/SDotycWLniaoHFs/preview)



## Abschluss

Du hast Tebex erfolgreich mit deinem Gameserver Dienst verbunden. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂
