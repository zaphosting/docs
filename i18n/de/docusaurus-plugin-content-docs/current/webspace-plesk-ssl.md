---
id: webspace-plesk-ssl
title: "Webspace: SSL Zertifikat erstellen"
description: Informationen, wie du eni SSL Zertifikat für deinen Webspace von ZAP-Hosting erstellen kannst - ZAP-Hosting.com Dokumentation
sidebar_label: SSL Zertifikat erstellen
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Webseite mit SSL verschlüsseln

>Es wird vorausgesetzt das die Domain bereits auf die IP des Webspaces zeigt.

Wird eine Domain im Webspace angelegt, so ist diese am Anfang immer unverschlüsselt. 
Dies ist A im Plesk Panel zusehen: 

![](https://screensaver01.zap-hosting.com/index.php/s/ZHMmDwJ7zQW3SWF/preview)

Und B im Browser, beim Öffnen der Domain:

![](https://screensaver01.zap-hosting.com/index.php/s/rLqG5FbxxbpyFHB/preview)
![](https://screensaver01.zap-hosting.com/index.php/s/co7yG7iBw5yCfjo/preview)

Durch ein SSL Zertifikat kann eine Domain entsprechend geschützt/verschlüsselt werden.

<InlineVoucher />

## Anlegen des Zertifikats 

Schritt 1️⃣: Durch einen Doppelklick auf "SSL/TLS-Zertifikat" öffnet sich folgendes Menü:

![](https://screensaver01.zap-hosting.com/index.php/s/PbHoPnHz4AXSpMP/preview)

Dort kann kostenlos ein Let's Emcrypt Zertifikat angefordert werden. 

Schritt 2️⃣: Erforderliche Angaben eintragen/setzen. 
Damit das Zertifikat angefordert werden kann, müssen Angeben erfolgen. 

Es muss eine Mail Adresse angegeben werden sowie muss angehakt werden, für was das Zertifikat gültig sein soll. 
In der Regel hat jede Domain auch die Subdomain "www" aktiv, daher wird es ebenfalls ausgewählt, sofern es auch im DNS der Domain eingetragen wurde. 

![](https://screensaver01.zap-hosting.com/index.php/s/x7L9kpbEDA99Lwn/preview)

Anschließend wird das Zertifikat mit einem Klick auf "Kostenlos nutzen" angefordert.

Schritt 3️⃣: Das Zertifikat wurde nun erstellt, dies ist oben rechts zu sehen. Zusätzlich muss jetzt die automatische Weiterleitung von HTTP zu HTTPS erfolgen, da sonst keine Verschlüsslung aufgebaut werden kann. 
Dies erfolgt mit einem Klick auf den Schieberegler bei "Von HTTP auf HTTPS umleiten" links am Rand:

![](https://screensaver01.zap-hosting.com/index.php/s/bCC6gkq3nNdr6Fp/preview)

Sofern auch Webmail genutzt wird und im DNS der Domain als Subdomain hinterlegt ist, kann dieses mit darauf angewendet werden. 
Soll es ohne Webmail geschen, so kann dies entsprechend deaktiviert werden, mit einem Klick auf die blaue Checkbox:

![](https://screensaver01.zap-hosting.com/index.php/s/eeb3EiNH5LWo7Mq/preview)

Ist dies erfolgt, so ist die Weiterleitung jetzt aktiv. Egal ob man die Seite mit http oder direkt HTTPS öffnet im Browser, es wird jetzt immer zu HTTPS geleitet. 

![](https://screensaver01.zap-hosting.com/index.php/s/XZdfCtpT9N4bpGQ/preview)

Schritt 4️⃣: Nun kann im Browser geprüft werden, ob das Zertifikat anerkannt wurde:

Ebenfalls sollte die Zertifikat-Info, welche mit einem Klick auf das Schloss geöffnet werden kann, die Domain anzeigen.

Die Webseite ist nun korrekt geschützt/verschlüsselt. 

## Zertifikate für Subdomains 

Die gleichen Schritte sind bei einer Subdomain theoretisch ebenfalls zu befolgen. 
Jedoch gibt es auch eine einfachere Möglichkeit alle Subdomains gleichzeitig zu verschlüsseln, egal ob bereits bestehende oder welche, die erst noch neu hinzukommen. Dazu kann ein "Wildcard-Zertifikat" genutzt werden. Dies benötigt einen speziellen TXT Eintrag im DNS der Domain, kann, sobald dieser vorhanden ist, jedoch für alle Subdomains ein SSL Zertifikat ausstellen. 

Schritt 1️⃣: Es wird erneut das SSL/TLS Zertifikat Menü geöffnet. 

![](https://screensaver01.zap-hosting.com/index.php/s/ETbwWoPQAaXqjDp/preview)

Anschließend wird links oben auf "Zertifikat erneuern" geklickt. 
Nun öffnet sich das Anfragefenster von Let's Emcrypt:

![](https://screensaver01.zap-hosting.com/index.php/s/LBjoffXenTjLdGy/preview)

Dort wird nun "Wildcard-Domain schützen" ausgewählt:

![](https://screensaver01.zap-hosting.com/index.php/s/qNZEL7H5tL3PnAB/preview)

Es wird automatisch die Subdomain "www" sowie "webmail" hinzugefügt. 
Anschließen wird wieder der Button "Kostenlos nutzen" angeklickt. 

Schritt 2️⃣: Es erscheint nun eine blaue Box mit wichtigen Informationen: 

![](https://screensaver01.zap-hosting.com/index.php/s/XTeGkd9DJEwF77f/preview)

Dort wird ein Domainname sowie ein Wert genannt. 
Dieser muss als TXT dauerhaft im DNS der Domain abrufbar sein, nur so kann Let's Emcrypt sicherstellen, dass die Domain echt ist und verifiziert werden kann. 

Ein Eintrag im DNS sollte so aussehen: 

![](https://screensaver01.zap-hosting.com/index.php/s/yEFsKLsR6F9iob4/preview)

>Ein DNS Eintrag kann nach der Eintragung bist zu 24 Stunden benötigen, bis dieser von der ganzen Welt aus erreichbar ist. 

Um sicherzustellen, dass der TXT Eintrag bereits aktiv ist, kann das "TXT-Lookup-SuperTool" von mxtoolbox genutzt werden: https://mxtoolbox.com/SuperTool.aspx:

![](https://screensaver01.zap-hosting.com/index.php/s/Ff9nkWAcagLt2aG/preview)

Sofern der eingetragene Eintrag bereits angezeigt wird, kann es in der blauen Box in Plesk bestätigt werden, mit einem Klick auf "Neu laden". 
Nun wird geprüft, ob der DNS Eintrag vorhanden ist, da dies der Fall ist, wird nach wenigen Sekunden "geschützt" bei "SSL/TLS-Platzhaltezertifikat" aka "Wildcard-Zertifikat" angezeigt: 

![](https://screensaver01.zap-hosting.com/index.php/s/AQiRRkyY5MqLHjD/preview)

Wird nun eine Subdomain angelegt, ist diese bereits geschützt: 

![](https://screensaver01.zap-hosting.com/index.php/s/ax5GsECmfxybRei/preview)

Nun erfolgt der vollständige Datentransfer zur Seite verschlüsselt, fertig. 


<InlineVoucher />
