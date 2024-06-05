---
id: domain-cloudflare-setup
title: "Domain: Einrichten der Domain mit Cloudflare"
description: Informationen zur Einrichtung deiner Domain bei ZAP-Hosting für die Nutzung mit Cloudflare - ZAP-Hosting.com Dokumentation
sidebar_label: Cloudflare einrichten
---

## Einführung

Cloudflare ist ein sehr beliebter CDN-Anbieter (Content Delivery Network), der deine Websites mit verbessertem Sicherheitsschutz und DDoS-Abwehr ausstattet und eine einfache Verwaltung über sein Dashboard ermöglicht. In dieser Anleitung erfährst du, wie du deine ZAP-Hosting-Domain mit Hilfe von ExpertDNS und der Anpassung der Nameserver für die Nutzung mit Cloudflare einrichtest.

## Voraussetzungen
Um diese Anleitung zu befolgen, benötigst du:
- Eine Domain auf deinem ZAP-Hosting-Konto
- Ein Cloudflare-Konto
  
## Schritt 1: Aktivieren der ExpertDNS-Option

Beginne damit, zum Webinterface deiner ausgewählten Domain auf deinem ZAP-Hosting-Konto zu navigieren. Finde die Option **ExpertDNS** und aktiviere sie, indem du das Häkchen setzt und auf den Speichern-Button drückst.

![image](https://screensaver01.zap-hosting.com/index.php/s/wtk5FSTdqDkYoKj/preview)

## Schritt 2: Einrichten deiner Domain bei Cloudflare

Für die nächsten Schritte musst du Cloudflare nutzen, also logge dich zunächst in dein Cloudflare-Konto ein. Wenn du eingeloggt bist, fügst du deine Website zum Dashboard hinzu, indem du den Einrichtungsschritten folgst, die direkt von Cloudflare bereitgestellt werden.

![image](https://screensaver01.zap-hosting.com/index.php/s/D5gjMEcfBkDjcP6/preview)

Sobald du Schritt 4 des Prozesses erreicht hast, werden dir Nameserver angezeigt, die du einrichten musst.

![image](https://screensaver01.zap-hosting.com/index.php/s/yZimJRCaBqGJBRD/preview)

Gehe in das Webinterface deiner Domain und öffne den Bereich **ExpertDNS**. Entferne in diesem Bereich die Standard-Nameserver von ZAP-Hosting und ersetze sie durch die, die du von Cloudflare erhalten hast.

![image](https://screensaver01.zap-hosting.com/index.php/s/wpMTaqcaqbnswJJ/preview)

Achte darauf, dass du deine Änderungen speicherst, sobald du fertig bist.

## Schritt 3: Abschließen der Einrichtung bei Cloudflare

Gehe zurück zu deinem Cloudflare Dashboard. Auf der vorherigen Einrichtungsseite für deine Domain solltest du einen Button sehen, mit dem du Cloudflare zwingen kannst, deine Nameserver erneut zu überprüfen.

:::info
Es kann bis zu 24 Stunden dauern, bis deine Nameserver-Änderungen erkannt werden. Normalerweise dauert es jedoch nicht so lange.
:::

Sobald Cloudflare deine Nameserver-Änderungen erkannt hat, erhältst du eine E-Mail, in der du darüber informiert wirst, dass deine Einrichtung abgeschlossen ist. Du kannst auch dein Cloudflare Dashboard überprüfen. Bei einer erfolgreichen Einrichtung wird **Aktiv** unter der Domain angezeigt, die du eingerichtet hast.

Du hast deine Domain erfolgreich bei Cloudflare integriert und damit die Leistung, Sicherheit und Verwaltbarkeit deiner Website verbessert.