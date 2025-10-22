---
id: redm-prohibited-resources
title: "RedM: 'Resource enthält verbotene Logik?'"
description: "Verstehe, wie du deinen Gameserver vor schädlichen RedM-Ressourcen schützt und ein sicheres, leistungsstarkes Gameplay sicherstellst → Jetzt mehr erfahren"
sidebar_label: Resource enthält verbotene Logik
services:
  - gameserver-redm
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Die Entwickler von RedM-Ressourcen haben in den letzten Jahren große Anstrengungen unternommen, ihren Quellcode mit Techniken wie Obfuskation, IP-Locking, Remote-Code-Laden und anderen Methoden zu schützen. Leider führen diese Maßnahmen oft zu Problemen, die viele bereits kennen. Einige dieser Tools verlangsamen nicht nur die Performance des Codes erheblich, sondern bringen auch zahlreiche Sicherheitsrisiken mit sich.

Cfx.re hat daher begonnen, schädliche Ressourcen zu blockieren, die bösartigen Code enthalten, der darauf ausgelegt ist, Server und andere Ressourcen zu infizieren. Diese Ressourcen versuchen manchmal, ihren Code auf andere Ressourcen „auszubreiten“, um Dritten Zugriff auf Skripte und Datenbanken zu verschaffen. Wichtig ist zu wissen, dass diese Ressourcen im Grunde mit Viren vergleichbar sind und somit eine ernsthafte Bedrohung darstellen.

<InlineVoucher />



## Bedeutung

Unser System überprüft aus den oben genannten Sicherheitsgründen alle Ressourcen vor dem Startvorgang und deaktiviert alle Ressourcen, die als gefährlich erkannt werden. Dieser Schritt ist absolut notwendig, weshalb es hier leider keinen Spielraum für Ausnahmen gibt. Die Sicherheit geht vor!

Falls eine deiner hochgeladenen Ressourcen betroffen ist, liefert die Server-Konsole weitere Informationen dazu. Der Inhalt dieser Informationen kann zum Beispiel wie folgt aussehen:

![image-20230109185341047](https://screensaver01.zap-hosting.com/index.php/s/WdCGZweo6Z5QNnz/preview)



## Vorgehensweise

Als ersten und wichtigsten Schritt empfehlen wir, alle schädlichen Ressourcen sofort zu entfernen. Außerdem solltest du nur Ressourcen installieren, die aus vertrauenswürdigen Quellen stammen. Ein guter Startpunkt dafür ist zum Beispiel die offizielle Webseite oder das [Forum](https://forum.cfx.re/c/development/releases/7) von RedM. Dort findest du eine große Auswahl an Ressourcen.

Als Entwickler oder im Kontakt mit Entwicklern empfehlen wir, auf das **RedM Asset Escrow System** zurückzugreifen, das von Cfx.re in Zusammenarbeit mit **Tebex** entwickelt wurde. Weitere Details findest du im offiziellen [Cfx.re Forum-Post](https://forum.cfx.re/t/introducing-redm-asset-escrow/5303450).



## Verbotene Ressourcen

Eine offizielle Liste von Ressourcen, die zu dieser Meldung führen können, gibt es leider nicht. Grundsätzlich solltest du keine Ressourcen verwenden, die andere Obfuskationsmethoden nutzen oder nicht auf dem RedM Asset Escrow System basieren.



## Fazit
Um eine sichere und stabile Serverumgebung zu gewährleisten, ist es essenziell, nur vertrauenswürdige Ressourcen zu nutzen und markierte Ressourcen sofort zu entfernen. Wenn du diese Richtlinien befolgst und das RedM Asset Escrow System nutzt, trägst du dazu bei, Sicherheit und Compliance im RedM-Ökosystem sicherzustellen. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Verfügung! 🙂

<InlineVoucher />