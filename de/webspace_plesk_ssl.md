---
id: webspace_plesk_ssl
title: SSL Zertifikat erstellen
sidebar_label: SSL Zertifikat erstellen
---

## Webseite mit SSL verschlüsseln

>Es wird vorausgesetzt das die Domain bereits auf die IP des Webspaces zeigt.

Wird eine Domain im Webspace angelegt, so ist diese am Anfang immer unverschlüsselt. 
Dies ist A im Plesk Panel zusehen: 

![](https://screensaver01.zap-hosting.com/index.php/s/9Zrc5wkL8EM4GfL/preview)

Und B im Browser, beim öffnen der Domain:

![](https://screensaver01.zap-hosting.com/index.php/s/8eJwt8wqFy3b2NX/preview)
![](https://screensaver01.zap-hosting.com/index.php/s/KCE9fTnwXFKEd8W/preview)

Durch ein SSL Zertifikat, kann eine Domain entsprechend geschützt/verschlüsselt werden. 

## Anlegen des Zertifkates 

Schritt 1️⃣: Durch ein Doppelklick auf "SSL/TLS-Zertifikat" öffent sich folgendes Menü:
![](https://screensaver01.zap-hosting.com/index.php/s/PDgzLNWWycPYwfP/preview)

Dort kann kostenlos ein Lets Encrypt Zertifikat angefordert werden. 

Schritt 2️⃣: Erorferliche Angaben eintragen/setzen. 
Damit das Zertifikat angefordert werden kann, müssen Angeben erfolgen. 

Es muss eine Mail Adresse angegeben werden sowie muss angehakt werden, für was das Zertifikat gültig sein soll. 
In der Regel hat jede Domain auch die Subdomain "www" aktiv, daher wird es ebenfalls ausgewählt, sofern es auch im DNS der Domain eingetragen wurde. 

![](https://screensaver01.zap-hosting.com/index.php/s/59tNrkoMktsEFd5/preview)

Anschließend wird das Zertifikat mit einem Klick auf auf "Kostenlos nutzen" angefordert.

Schritt 3️⃣: Das Zertifikat wurde nun erstellt, dies ist oben Rechts zu sehen. Zusätzlich muss nun die automatische Weiterleitung von HTTP zu HTTPS erfolgen, da sonst keine Verschlüsslung aufgebaut werden kann. 
Dies erfolgt mit einem Klick auf den SChieberegler bei "Von HTTP auf HTTPS umleiten" links am Rand:

![](https://screensaver01.zap-hosting.com/index.php/s/KmJLFgeCTTWa5RR/preview)

Sofern auch Webmail genutzt wird und im DNS der Domain als Subdomain hinterlegt ist, kann dieses mit darauf angewendet werden. 
Soll es ohne Webmail geschen, so kann dies entsprechend deaktiviert werden mit einem Klick auf die blaube CheckBox:

![](https://screensaver01.zap-hosting.com/index.php/s/gqWDRQ25BX8QxPr/preview)

Ist dies erfolgt, so ist die Weiterleitung nun aktiv. Egal ob man die Seite mit http oder direkt https öffnet im Browser, es wird nun immer zu https geleitet. 

![](https://screensaver01.zap-hosting.com/index.php/s/wqsGd33jkoqR9xY/preview)

Im SSL/TLS Zertifikats Menü wird nun angezeigt was geschützt ist und was nicht: 

![](https://screensaver01.zap-hosting.com/index.php/s/cEiH84QgoweCDXq/preview)

Schritt 4️⃣: Nun kann im Browser geprüft werden, ob das Zertifikat anerkannt wurde:

Das Schloss muss vorhanden sein: 

![](https://screensaver01.zap-hosting.com/index.php/s/Wq78oWc74LKZzjR/preview)

Ebenfalls sollte die Zertifikat Info, welche mit einem Klick auf das Schloss geöffnet werden kann, die Domain anzeigen: 

![](https://screensaver01.zap-hosting.com/index.php/s/J9y9wQysx4Q2zfn/preview)

Die Webseite ist nun korrekt geschützt/verschlüsselt. 

## Zertifikate für Subdomains 

Die gleichen Schritte sind bei einer Subdomain theoretisch ebenfalls zu befolgen. 
Jedoch gibt es auch eine einfachere Möglichkeit alle Subdomains gleichzeitg zu verschlüsseln, egal ob bereits bestehende oder welche die erst noch neu hinzukommen. 
Dazu kann ein "Wildcard-Zertifikat" genutzt werden. 
Dies benötigt einen speziellen TXT Eintrag im DNS der Domain, kann sobald dieser vorhanden ist, jedoch für alle Subdomains ein SSL Zertifkat austellen. 

Schritt 1️⃣: Es wird erneut das SSL/TLS Zertifikat Menü geöffnet. 

![](https://screensaver01.zap-hosting.com/index.php/s/tzmRmMGgzqfsfBe/preview)

Anschließend wird links oben auf "Zertifikat erneuern" geklickt. 
Nun öffnet sich das Anfrage Fenster von Lets Encrypt:

![](https://screensaver01.zap-hosting.com/index.php/s/tt8oyA7pQNk8cXs/preview)

Dort wird nun "Wildcard-Domain schützen" ausgewählt:

![](https://screensaver01.zap-hosting.com/index.php/s/tt8oyA7pQNk8cXs/preview)

Es wird automatisch die Subdomain "www" sowie "webmail" hinzugefügt. 
Anschließen wird wieder der Button "Kostenlos nutzen" angeglickt. 

Schritt 2️⃣: Es erscheint nun eine blaue Box mit wichtigen Informationen: 

![](https://screensaver01.zap-hosting.com/index.php/s/Pm2BqmHcTesgYoi/preview)

Dort wird ein Domain Name sowie ein Wert genannt. 
Dieser muss als TXT dauerhaft im DNS der Domain abrufbar sein, nur so kann Lets Encrypt sicherstellen, das die Domain echt ist und verifiziert werden kann. 

Ein Eintrag im DNS sollte so aussehen: 

![](https://screensaver01.zap-hosting.com/index.php/s/G8CGqgR7yaAHBmX/preview)

>Ein DNS Eintrag kann nach der Eintragung bist zu 24 Stunden benötigen, bis dieser von der ganzen Welt aus erreichbar ist. 

Um sicherzustellen, das der TXT Eintrag bereits aktiv ist, kann das "TXT-Lookup-SuperTool" von mxtoolbox genutzt werden: https://mxtoolbox.com/SuperTool.aspx:

![](https://screensaver01.zap-hosting.com/index.php/s/rkwpzLe79K3WDsz/preview)

Sofern der eingetrage Eintrag bereits angezeigt wird, kann es in der blauen Box in Plesk bestätigt werden mit einem Klick auf "Neu laden". 
Nun wird geprüft ob der DNS Eintrag vorhanden ist, da dies der Fall ist, wird nach wenigen Sekunden "geschützt" bei "SSL/TLS-Paltzhalterzertifikat" aka "Wildcard-Zertifikat" angezeigt: 

![](https://screensaver01.zap-hosting.com/index.php/s/yiTGafez5Grkd3j/preview)

Wird nun eine Subdomain angelegt, ist diese bereits geshützt: 

![](https://screensaver01.zap-hosting.com/index.php/s/MjyFH7SWgeiy54s/preview)

Nun erfolgt der vollständige Datentransfer zur Seite verschlüsselt, fertig. 

