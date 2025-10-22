---
id: fivem-prohibited-resources
title: "FiveM: 'Resource enthält verbotene Logik?'"
description: "Entdecke, wie du deinen FiveM Gameserver vor bösartigen Ressourcen schützt und ein sicheres, leistungsstarkes Gameplay sicherstellst → Jetzt mehr erfahren"
sidebar_label: Resource enthält verbotene Logik
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Die Entwickler von FiveM-Ressourcen haben in den letzten Jahren große Anstrengungen unternommen, ihren Quellcode mit Techniken wie Obfuskation, IP-Locking, Remote-Code-Laden und anderen Methoden zu schützen. Leider führen diese Maßnahmen oft zu Problemen, die viele bereits kennen. Einige dieser Tools verlangsamen nicht nur die Performance des Codes erheblich, sondern bringen auch zahlreiche Sicherheitsrisiken mit sich.

Cfx.re hat deshalb begonnen, bösartige Ressourcen zu blockieren, die schädlichen Code enthalten, der darauf ausgelegt ist, Server und andere Ressourcen zu infizieren. Diese Ressourcen versuchen manchmal, ihren Code auf andere Ressourcen „auszubreiten“, um Dritten Zugriff auf Skripte und Datenbanken zu verschaffen. Wichtig ist, dass diese Ressourcen im Grunde mit Viren vergleichbar sind und daher eine ernsthafte Bedrohung darstellen.

<InlineVoucher />



## Bedeutung

Unser System überprüft aus den oben genannten Sicherheitsgründen alle Ressourcen vor dem Startvorgang und deaktiviert alle Ressourcen, die als gefährlich erkannt werden. Dieser Schritt ist absolut notwendig, weshalb es hier leider keine Ausnahmen gibt. Die Sicherheit geht vor!

Falls eine deiner hochgeladenen Ressourcen betroffen ist, liefert die Serverkonsole zusätzliche Informationen dazu. Der Inhalt dieser Informationen kann zum Beispiel wie folgt aussehen:

![image-20230109185341047](https://screensaver01.zap-hosting.com/index.php/s/WdCGZweo6Z5QNnz/preview)



## Vorgehensweise

Als ersten und wichtigsten Schritt empfehlen wir, alle bösartigen Ressourcen sofort zu entfernen. Außerdem solltest du nur Ressourcen installieren, die aus seriösen Quellen stammen. Ein guter Startpunkt dafür ist zum Beispiel die offizielle Webseite oder das [Forum](https://forum.cfx.re/c/development/releases/7) von FiveM. Dort gibt es eine große Auswahl an Ressourcen.

Als Entwickler oder im Kontakt mit Entwicklern empfehlen wir, auf das **FiveM Asset Escrow System** zurückzugreifen, das von Cfx.re in Zusammenarbeit mit **Tebex** entwickelt wurde. Weitere Details findest du im offiziellen [Cfx.re Forum-Post](https://forum.cfx.re/t/introducing-asset-escrow-for-your-resources/4777151).



## Verbotene Ressourcen

Eine offizielle Liste von Ressourcen, die zu dieser Meldung führen können, gibt es leider nicht. Grundsätzlich solltest du keine Ressourcen verwenden, die andere Obfuskationsmethoden nutzen oder nicht auf dem FiveM Asset Escrow System basieren.



## Fazit
Um eine sichere und stabile Serverumgebung zu gewährleisten, ist es essenziell, nur vertrauenswürdige Ressourcen zu nutzen und markierte Ressourcen sofort zu entfernen. Wenn du diese Richtlinien befolgst und das FiveM Asset Escrow System nutzt, trägst du dazu bei, Sicherheit und Compliance im FiveM-Ökosystem sicherzustellen. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Verfügung! 🙂

<InlineVoucher />