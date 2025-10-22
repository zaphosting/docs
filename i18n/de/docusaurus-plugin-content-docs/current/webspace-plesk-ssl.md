---
id: webspace-plesk-ssl
title: "Webspace: SSL-Zertifikat erstellen"
description: "Entdecke, wie du deine Website mit SSL-Verschlüsselung sicherst und HTTPS für ein sicheres Surfen aktivierst → Jetzt mehr erfahren"
sidebar_label: SSL-Zertifikat erstellen
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Website mit SSL verschlüsseln

:::info
Es wird vorausgesetzt, dass die Domain bereits auf die IP des Webspaces zeigt.
:::

Wenn eine Domain im Webspace angelegt wird, ist sie anfangs immer unverschlüsselt. Das sieht man im Plesk Panel:

![](https://screensaver01.zap-hosting.com/index.php/s/kkJ67Pd733pt95i/preview)

Und die Meldung im Browser beim Öffnen der Domain:

![](https://screensaver01.zap-hosting.com/index.php/s/5iwXSgEb4LrY3xf/preview)
![](https://screensaver01.zap-hosting.com/index.php/s/mpmK8TAjAsgY3FW/preview)

Mit einem SSL-Zertifikat kann eine Domain entsprechend geschützt/verschlüsselt werden.

<InlineVoucher />

## Erstellung des Zertifikats

Schritt 1️⃣: Mit einem Doppelklick auf „SSL/TLS-Zertifikat“ öffnet sich folgendes Menü:

![](https://screensaver01.zap-hosting.com/index.php/s/g5sr6WC4eawqzoF/preview)

Ein Let's Encrypt Zertifikat kann kostenlos angefordert werden.

Schritt 2️⃣: Die erforderlichen Angaben eingeben/ausfüllen. Damit das Zertifikat angefordert werden kann, müssen Details angegeben werden.

Eine Mailadresse muss angegeben werden und es muss geprüft werden, für was das Zertifikat gültig sein soll. In der Regel ist bei jeder Domain auch die Subdomain „www“ aktiv, weshalb diese ebenfalls ausgewählt wird, wenn sie auch in der DNS der Domain eingetragen ist.

![](https://screensaver01.zap-hosting.com/index.php/s/Mwf3CEWsYRwprS3/preview)

Das Zertifikat wird dann durch Klick auf „Kostenlos erhalten“ angefordert.

Schritt 3️⃣: Das Zertifikat wurde nun erstellt, das sieht man oben rechts. Zusätzlich muss jetzt die automatische Weiterleitung von HTTP auf HTTPS erfolgen, da sonst keine Verschlüsselung aufgebaut werden kann:

![](https://screensaver01.zap-hosting.com/index.php/s/YBdGQqmtNeWKdxA/preview)

Wenn das erledigt ist, ist die Weiterleitung aktiv. Egal, ob du die Seite mit http oder https direkt im Browser öffnest, es wird jetzt immer auf https weitergeleitet.

Schritt 4️⃣: Jetzt kannst du im Browser prüfen, ob das Zertifikat erkannt wurde:

Das Schloss muss vorhanden sein:

![](https://screensaver01.zap-hosting.com/index.php/s/DkZoqg9XGgR67EK/preview)

Die Zertifikatsinfo, die durch Klick auf das Schloss geöffnet wird, sollte ebenfalls die Domain anzeigen:

![](https://screensaver01.zap-hosting.com/index.php/s/p5H6RZ25HksHsow/preview)

Die Website ist jetzt richtig geschützt/verschlüsselt.

## Zertifikate für Subdomains

Die gleichen Schritte können theoretisch auch für eine Subdomain durchgeführt werden. Es gibt aber auch eine einfachere Möglichkeit, alle Subdomains gleichzeitig zu verschlüsseln, egal ob sie schon existieren oder neu sind. Dafür kann ein „Wildcard-Zertifikat“ genutzt werden. Dafür ist ein spezieller TXT-Eintrag in der DNS der Domain nötig. Sobald dieser vorhanden ist, kann es ein SSL-Zertifikat für alle Subdomains ausstellen.

Schritt 1️⃣: Das SSL/TLS-Zertifikat-Menü wird wieder geöffnet.

![](https://screensaver01.zap-hosting.com/index.php/s/X4kFeMomqmz3nGp/preview)

Dann oben links auf „Zertifikat erneuern“ klicken. 
Jetzt öffnet sich das Let's Encrypt Anforderungsfenster:

![](https://screensaver01.zap-hosting.com/index.php/s/eCcFtaJHxW3XWgF/preview)

Jetzt „Wildcard-Domain sichern“ auswählen:

![](https://screensaver01.zap-hosting.com/index.php/s/5STxWaKf3JWGfZe/preview)

Die Subdomains „www“ und „webmail“ werden automatisch hinzugefügt. 
Der Button „Kostenlos erhalten“ wird dann wieder geklickt.

Schritt 2️⃣: Es erscheint jetzt ein blauer Kasten mit wichtigen Infos:

![](https://screensaver01.zap-hosting.com/index.php/s/JHag4cd85Lq6gwx/preview)

Dort wird ein Domainname und ein Wert angegeben. Dieser muss dauerhaft als TXT in der DNS der Domain verfügbar sein, nur so kann Let's Encrypt sicherstellen, dass die Domain echt ist und verifiziert werden kann.

Ein Eintrag in der DNS sollte so aussehen:

![](https://screensaver01.zap-hosting.com/index.php/s/qPCeWj5dJRFfYFB/preview)

:::info
Ein DNS-Eintrag kann bis zu 24 Stunden brauchen, bis er weltweit erreichbar ist.
:::

Um sicherzugehen, dass der TXT-Eintrag schon aktiv ist, kann das „TXT Lookup SuperTool“ von mxtoolbox genutzt werden: https://mxtoolbox.com/SuperTool.aspx:

![](https://screensaver01.zap-hosting.com/index.php/s/CPSSWeQRpTDsagY/preview)

Wenn der eingetragene Eintrag schon angezeigt wird, kann im blauen Kasten in Plesk auf „Neu laden“ geklickt werden. Jetzt wird geprüft, ob der DNS-Eintrag vorhanden ist. Da das der Fall ist, wird nach ein paar Sekunden bei „SSL/TLS-Zertifikatinhaber“ aka „Wildcard-Zertifikat“ „geschützt“ angezeigt:

![](https://screensaver01.zap-hosting.com/index.php/s/AwWiJboz3k6iea8/preview)

Wenn jetzt eine Subdomain erstellt wird, ist diese bereits geschützt:

![](https://screensaver01.zap-hosting.com/index.php/s/XLHzsgkeLmwJ55m/preview)

Jetzt ist die komplette Datenübertragung zur Seite verschlüsselt, fertig.

<InlineVoucher />