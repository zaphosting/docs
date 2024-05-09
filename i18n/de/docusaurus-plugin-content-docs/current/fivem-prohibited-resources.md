---
id: fivem-prohibited-resources
title: "FiveM: Fehlermeldung: 'Resource contains prohibited logic?'"
description: Informationen zur Fehlermeldung "Ressource contains prohibited logic" bei FiveM-Server - ZAP-Hosting.com Dokumentation
sidebar_label: Resource contains prohibited logic
---



## Einführung

Die Entwickler von FiveM Ressourcen haben sich in den letzten Jahren große Mühe gegeben, um ihren Quellcode mithilfe von Techniken wie Verschleierung, IP-Locking, Remote Code Loading und anderen Methoden zu schützen. Bedauerlicherweise führen diese Maßnahmen jedoch häufig zu Problemen, wovon viele bereits wissen. Einige dieser Tools verlangsamen nicht nur die Leistung des Codes erheblich, sondern bringen auch zahlreiche Sicherheitsbedenken mit sich.

FiveM hat aus diesem Grund damit begonnen, bösartige Ressourcen zu blockieren, die böswilligen Code enthalten, der darauf ausgelegt ist, Server und andere Ressourcen zu infizieren. Diese Ressourcen versuchen manchmal, ihren Code auf andere Ressourcen "zu verbreiten", um Hackern und Cheatern den Zugriff auf Skripte und Datenbanken zu ermöglichen. Es ist wichtig zu beachten, dass diese Ressourcen im Allgemeinen mit Viren verglichen werden können und daher eine ernsthafte Bedrohung darstellen.



## Was bedeutet "Resource enthält verbotene Logik"?

Unser System prüft aus den oben genannten Sicherheitsgründen alle Ressource vor dem Startvorgang und deaktiviert dabei alle als gefährlich erkannten Ressourcen. Dieser Schritt ist zwingend notwendig, weshalb hier leider auch kein Spielraum für Ausnahmen besteht. Die Sicherheit steht an erster Stelle! 

Im Falle dessen, dass eine deiner hochgeladenen Ressourcen davon betroffen ist, liefert die Server-Konsole diesbezüglich zusätzliche Informationen. Der Inhalt dieser Informationen kann beispielsweise wie folgt aussehen: 

![image-20230109185341047](https://user-images.githubusercontent.com/26007280/217035909-10035095-c285-4ad7-9853-675c30ec389e.png)



## Was kann ich dagegen tun?

Als ersten und wichtigsten Schritt dazu empfehlen wir alle schädlich erkannten Ressourcen umgehend zu entfernen. Des Weiteren sollten nur Ressourcen installiert werden, die aus seriösen Quellen stammen. Eine gute Anlaufstelle dafür ist beispielsweise die offizielle Webseite beziehungsweise das [Forum](https://forum.cfx.re/c/development/releases/7) von FiveM. Dort wird eine große Auswahl an Ressourcen angeboten. 

Als Entwickler oder eine Person, die kontakt zu dem Entwickler hat, empfehlen wir auf das **FiveM Asset Escrow system** zu verweisen, welches FiveM in Zusammenarbeit mit Tebex entwickelt hat. Diesbezüglich wurde auch ein Beitrag im [FiveM Forum](https://forum.cfx.re/t/introducing-asset-escrow-for-your-resources/4777151) veröffentlicht.




## Welche Ressourcen genau sind verboten?

Es gibt bedauerlicherweise keine offizielle Liste an Ressourcen, die zu dieser Meldung führen können. Prinzipiell sollten generell keine Ressourcen verwendet werden, die anderweitige Verschleierungsmethoden im Einsatz haben oder auf dem FiveM Asset Escrow system basieren. 



