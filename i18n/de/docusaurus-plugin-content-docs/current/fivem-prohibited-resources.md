---
id: fivem-prohibited-resources
title: "FiveM: Fehlermeldung: 'Resource contains prohibited logic?'"
description: Informationen zur Fehlermeldung "Ressource contains prohibited logic" bei FiveM-Server - ZAP-Hosting.com Dokumentation
sidebar_label: Resource contains prohibited logic
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Die Entwickler von FiveM Ressourcen haben sich in den letzten Jahren große Mühe gegeben, um ihren Quellcode mithilfe von Techniken wie Verschleierung, IP-Locking, Remote Code Loading und anderen Methoden zu schützen. Bedauerlicherweise führen diese Maßnahmen jedoch häufig zu Problemen, wovon viele bereits wissen. Einige dieser Tools verlangsamen nicht nur die Leistung des Codes erheblich, sondern bringen auch zahlreiche Sicherheitsbedenken mit sich.

Cfx.re hat aus diesem Grund damit begonnen, bösartige Ressourcen zu blockieren, die böswilligen Code enthalten, der darauf ausgelegt ist, Server und andere Ressourcen zu infizieren. Diese Ressourcen versuchen manchmal, ihren Code auf andere Ressourcen "zu verbreiten", um Hackern und Cheatern den Zugriff auf Skripte und Datenbanken zu ermöglichen. Es ist wichtig zu beachten, dass diese Ressourcen im Allgemeinen mit Viren verglichen werden können und daher eine ernsthafte Bedrohung darstellen.

<InlineVoucher />

## Bedeutung

Unser System prüft aus den oben genannten Sicherheitsgründen alle Ressource vor dem Startvorgang und deaktiviert dabei alle als gefährlich erkannten Ressourcen. Dieser Schritt ist zwingend notwendig, weshalb hier leider auch kein Spielraum für Ausnahmen besteht. Die Sicherheit steht an erster Stelle! 

Im Falle dessen, dass eine deiner hochgeladenen Ressourcen davon betroffen ist, liefert die Server-Konsole diesbezüglich zusätzliche Informationen. Der Inhalt dieser Informationen kann beispielsweise wie folgt aussehen: 

![image-20230109185341047](https://screensaver01.zap-hosting.com/index.php/s/CfgAQyfzz9PQG4W/preview)



## Vorgehensweise

Als ersten und wichtigsten Schritt dazu empfehlen wir alle schädlich erkannten Ressourcen umgehend zu entfernen. Des Weiteren sollten nur Ressourcen installiert werden, die aus seriösen Quellen stammen. Eine gute Anlaufstelle dafür ist beispielsweise die offizielle Webseite beziehungsweise das [Forum](https://forum.cfx.re/c/development/releases/7) von FiveM. Dort wird eine große Auswahl an Ressourcen angeboten. 

Als Entwickler oder jemand, der mit dem Entwickler in Kontakt steht, empfehlen wir, sich auf das **FiveM Asset Escrow System** zu beziehen, das von Cfx.re in Zusammenarbeit mit **Tebex** entwickelt wurde. Weitere Details können im offiziellen [Cfx.re Forum Beitrag](https://forum.cfx.re/t/introducing-asset-escrow-for-your-resources/4777151) nachgelesen werden.




## Verbotene Ressourcen

Es gibt bedauerlicherweise keine offizielle Liste an Ressourcen, die zu dieser Meldung führen können. Prinzipiell sollten generell keine Ressourcen verwendet werden, die anderweitige Verschleierungsmethoden im Einsatz haben oder auf dem FiveM Asset Escrow system basieren. 



## Abschluss

Um eine sichere und stabile Serverumgebung aufrechtzuerhalten, ist es wichtig, nur vertrauenswürdige Ressourcen zu verwenden und solche, die als problematisch eingestuft werden, sofort zu entfernen. Indem du diese Richtlinien befolgst und das FiveM Asset Escrow System verwendest, kannst du dazu beitragen, sowohl die Sicherheit als auch die Einhaltung der Richtlinien innerhalb des FiveM Ecosystems zu gewährleisten. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂

<InlineVoucher />
