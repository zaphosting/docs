---
id: webspace-email-delivery-optimization
title: "Webspace: Optimierung der Zustellung von E-Mails"
description: Informationen zur Verbesserung der Zustellung von E-Mails mit einem Webspace von ZAP-Hosting - ZAP-hosting.com Dokumentation
sidebar_label: Optimierung der Zustellung
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Einführung

Betreibst du einen Maildienst auf deinem Webspace und stellst fest, dass einige E-Mails nicht erfolgreich zugestellt werden? Dann bist du hier genau richtig. Es gibt verschiedene Aspekte, die berücksichtigt werden müssen, um einen zuverlässigen E-Mail-Verkehr sicherzustellen. Im Folgenden erfährst du, worauf du achten solltest, um die Zustellbarkeit deiner E-Mails zu verbessern.

<InlineVoucher />



## Ursachen

**Blacklisting**

Bei Fehlverhalten (Abuse) kann es vorkommen, dass bestimmte Anbieter die IP-Adresse des E-Mail-Servers auf eine Blacklist setzen und somit sperren. Die Folge davon ist, dass die E-Mails nicht mehr erfolgreich zugestellt werden können oder als gefährlich/Spam markiert werden. Wir als Anbieter sind stets bestrebt, solches Fehlverhalten proaktiv zu vermeiden und bei eingehenden Abuse-Reports zu Webspaces unserer Kunden diese schnellstmöglich zu sperren.

Um das Risiko einer Blacklistung zu minimieren, setzen wir Sicherheitsmaßnahmen um, darunter die Überwachung des Mailverkehrs auf verdächtige Aktivitäten und die Durchsetzung von Spam-Filter.

Sollte es dennoch mal dazu kommen, dass unsere Webspace Instanzen von bestimmten Anbietern auf eine Blacklist gesetzt werden, treten wir umgehend mit diesen in Kontakt, um die Situation so schnell wie möglich zu klären

:::warning
Wenn eine reibungslose und zuverlässige Zustellung von E-Mails für dich von entscheidender Bedeutung ist, ist die Wahl eines Dienstes mit einer eigenen IP-Adresse die bessere Entscheidung. Je nach Größe und Komplexität deines Projekts empfehlen wir für diesen Anwendungsfall ein **[VPS](https://zap-hosting.com/de/vserver-mieten)**, **[Rootservers](https://zap-hosting.com/de/rootserver-mieten)** oder **[Dedicated Servers](https://zap-hosting.com/de/dedicated-server-mieten)** zu verwenden.
:::



**Einhaltung von Inhalts- und Sicherheitsstandards**

Die Einhaltung von Inhalts- und Sicherheitsstandards ist ein wesentlicher Aspekt beim Betrieb eines Mailservers, um die Integrität, Verfügbarkeit und Vertraulichkeit der übertragenen Daten zu gewährleisten. Diese Standards umfassen eine Vielzahl von Praktiken und Protokollen, die dazu dienen, den Mailserver vor unbefugtem Zugriff, Missbrauch und anderen Sicherheitsbedrohungen zu schützen. Mehr dazu erfährst du in den Abschnitten **Identifikationsstandards** und **Inhaltliche Maßnahmen**.



## Identifikationsstandards
Die Identifikationsstandards erleichtern die Arbeit der E-Mail-Anbieter und Mailserver, indem sie zur Sicherstellung der Glaubwürdigkeit des Absenders beitragen. Um nachzuweisen, dass man berechtigt ist, E-Mails im Namen einer Domain zu senden, wurden drei wichtige Identitätsstandards eingeführt: der **SPF**-Standard, der **DKIM**-Standard und der **DMARC**-Standard.

**SPF (Sender Policy Framework):** SPF hilft, E-Mail-Spoofing zu verhindern, indem festgelegt wird, welche IP-Adressen berechtigt sind, E-Mails im Namen einer Domain zu senden. Zum Beispiel kannst du für deine Domain "example.com" einen SPF-Eintrag in deinen DNS-Einstellungen einrichten, um festzulegen, welche Mailserver E-Mails von "@example.com" senden dürfen. Wird eine E-Mail von einem nicht autorisierten Server gesendet, kann der Mailserver des Empfängers sie als verdächtig markieren oder ablehnen.

**DKIM (DomainKeys Identified Mail):** DKIM fügt der E-Mail-Kopfzeile eine digitale Signatur hinzu, die hilft, zu überprüfen, dass die E-Mail während des Transports nicht verändert wurde und tatsächlich von der angegebenen Domain stammt. Wenn du beispielsweise eine E-Mail von "yourdomain.com" sendest, stellt die DKIM-Signatur sicher, dass der E-Mail-Inhalt nicht manipuliert wurde und bestätigt die Authentizität der Domain. Der Mailserver des Empfängers verwendet diese Signatur, um die Integrität der E-Mail zu überprüfen.

**DMARC (Domain-based Message Authentication, Reporting & Conformance):** DMARC baut auf SPF und DKIM auf, indem es eine zusätzliche Schutzschicht hinzufügt. Es ermöglicht Domain-Besitzern festzulegen, wie E-Mails, die SPF- oder DKIM-Prüfungen nicht bestehen, behandelt werden sollen (z. B. in Quarantäne stellen oder ablehnen). Wenn deine Domain beispielsweise eine DMARC-Richtlinie mit "reject" festlegt, wird jede E-Mail, die SPF- oder DKIM-Prüfungen nicht besteht, vom Mailserver des Empfängers abgelehnt. Zusätzlich stellt DMARC Berichte für Domain-Besitzer zur Verfügung, die zeigen, wie ihre Domain in E-Mails verwendet wird, und hilft, möglichen Missbrauch zu überwachen.


## Inhaltliche Maßnahmen
Ebenfalls spielt der Inhalt der Mails eine bedeutsame Rolle. Es sollte ein ausgewogenes Text-Bild-Verhältnis erzielt werden. Des Weiteren sollten keine kritischen Inhalte verwendet werden. Dazu gehört beispielsweise die Verwendung von Videos, JavaScript oder Formularen, da diese Spam-Filter auslösen oder Zustellungsprobleme verursachen können. Zusätzlich sollte am Ende der Mail eine Möglichkeit zur Abbestellung der Mails und ein Impressum hinzugefügt werden.

Weitere bewährte Praktiken umfassen die Verwendung klarer und prägnanter Sprache, das Vermeiden allzu aggressiver Verkaufsbotschaften und die Sicherstellung, dass die E-Mail für mobile Geräte optimiert ist. 


## Maßnahmen und Zuverlässigkeit testen
Es gibt verschiedene Angebote, mit denen die Zuverlässigkeit des Mailverkehrs getestet werden kann. Diese Dienste identifizieren nicht nur Probleme, sondern nennen auch die Gründe dafür und bieten Optimierungsmöglichkeiten an. Empfehlenswert sind hierfür die Anbieter mail-tester.com und mailgenius.com. Für den Test wird eine Mail an deren angegebenes Postfach geschickt. Diese analysieren alle relevanten Informationen, und im Anschluss kannst du dir auf der Webseite das Ergebnis anzeigen lassen. Diese Tools sind besonders wertvoll, um sicherzustellen, dass deine E-Mails korrekt konfiguriert sind, die Zustellbarkeit zu verbessern und häufige Probleme zu vermeiden, die dazu führen könnten, dass deine E-Mails als Spam markiert werden.



## Abschluss

Wenn du alle Empfehlungen befolgt und erfolgreich umgesetzt hast, solltest du nun in Bezug auf die Sicherheit und Zuverlässigkeit deines Mailversands deutlich besser aufgestellt sein. Deine E-Mails werden nicht nur mit einer höheren Wahrscheinlichkeit zugestellt, sondern auch vor unbefugtem Zugriff und Missbrauch geschützt sein. 
