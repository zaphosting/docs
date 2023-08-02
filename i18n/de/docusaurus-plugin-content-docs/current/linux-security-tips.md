---
id: linux-security-tips
title: Tipps zur Linux-Sicherheit
description: Tipps und Hinweise für die Sicherung deines Linux-Servers - ZAP-Hosting.com Dokumentation
sidebar_label: Sicherheitstipps

---

## Einführung

SSH (Secure Shell) ist ein leistungsfähiger Dienst, mit dem du aus der Ferne auf deinen Server zugreifen und Befehle darauf ausführen kannst. Siehe hier, wie man diesen Dienst einrichtet: [Wie richte ich SSH auf meinem Server ein?](https://zap-hosting.com/guides/de/docs/vserver-linux-ssh/)

Standardmäßig ist dies jedoch unsicher, da für die Anmeldung ein Passwort verwendet wird und deine Identität mit einem Brute-Force-Tool gefälscht werden kann. Unabhängig davon empfehlen wir dir immer, ein starkes Passwort zu verwenden, um diese Aufgabe zu erschweren.

## SSH Keys

Dafür gibt es allerdings eine Lösung. Um sicherzustellen, dass sich niemand mit roher Gewalt Zugang zu deinem Server verschaffen kann, kannst du mit Hilfe von SSH-Schlüsseln einen SSH-Dienst auf deinem Server einrichten, um den Login zu beschränken. Siehe dazu [unsere SSH-Anleitung](https://zap-hosting.com/guides/docs/vserver-linux-sshkey) an, in der erklärt wird, wie man einen SSH-Schlüssel generiert und hinzufügt.



## Einschränkung der Verbindungen

Um von einer externen IP-Adresse auf Ihren Server zugreifen zu können, muss der Port, auf dem er läuft, offen sein (normalerweise ist das 22/TCP).

Dabei gibt es allerdings ein kleines Problem: Nicht nur Sie können auf den Port zugreifen und versuchen, sich anzumelden, sondern jeder kann das. Dies ist eine Sicherheitslücke, da böswillige Akteure den Server mit Anmeldeversuchen überschwemmen könnten, um entweder das richtige Kennwort herauszufinden (es sei denn, du verwendest einen SSH-Schlüssel für die Anmeldung, wie im vorigen Abschnitt erläutert) oder zu versuchen, das Servernetzwerk durch Flooding zu überlasten, was häufig der Fall ist.

Um diese Auswirkungen zu verringern, kannst du Firewall-Regeln anwenden, die den Zugriff auf den Port beschränken. Mit den unten beschriebenen Firewall-Methoden kannst du die Anzahl der Verbindungen, die dein Server empfangen kann, begrenzen und so die Überflutung deines Servers mit Anmeldeversuchen erschweren.

Es gibt zwei Möglichkeiten, dies zu erreichen. Die kompliziertere, aber detailliertere Methode über IPTables, die wir empfehlen oder über UFW, die grundlegender, aber leichter einzurichten ist.



### IPTables

In diesem Abschnitt wirst du die IPTables mit einigen Befehlen einrichten. Die Erklärungen zu den einzelnen Befehlen findest du unterhalb des Codeblocks.

:::note
Die folgenden Befehle funktionieren möglicherweise nicht mit jedem beliebigen Linux-Betriebssystem, aber sie funktionieren mit der überwiegenden Mehrheit der beliebtesten Betriebssysteme.
:::

Melde dich zunächst bei deinem Linux-Server an. Wenn du dabei Hilfe brauchst, folge bitte unserer Anleitung [SSH-Zugang](https://zap-hosting.com/guides/docs/vserver-linux-ssh), die erklärt, wie dies funktioniert. Führe dann die folgenden Befehle in der Reihenfolge aus, in der sie aufgelistet sind. Unterhalb der Befehle sehen Sie zum besseren Verständnis, was der jeweilige Befehl bewirkt.

```
iptables -A INPUT -p tcp --syn --dport 22 -m connlimit --connlimit-above 2 --connlimit-mask 32 -j DROP
iptables -A INPUT -p tcp --dport 22 -m state --state NEW -m recent --set
iptables -A INPUT -p tcp --dport 22 -m state --state NEW -m recent --update --seconds 1 --hitcount 2 -j DROP
```

1.  Die erste Regel verwirft Pakete, wenn sich mehr als 2 Verbindungen im Zustand `TIME_WAIT` zu Port 22 von einer einzigen IP befinden.
2.  Die zweite Regel fügt die IP-Adresse einer neuen Verbindung zur `recent`-Liste hinzu.
3.  Die dritte Regel verwirft neue Verbindungen von IP-Adressen, die in der letzten Sekunde versucht haben, mehr als zwei Verbindungen herzustellen.



### UFW

In diesem Abschnitt wirst du mithilfe eines einfachen UFW-Befehls eine einfache Firewall einrichten.

Melde dich zunächst bei deinem Linux-Server an. Wenn du dabei Hilfe brauchst, folge bitte unserer Anleitung [SSH-Zugang](https://zap-hosting.com/guides/docs/vserver-linux-ssh), in der erklärt wird, wie dies funktioniert. Führe nun den folgenden Befehl aus, der die Verbindung auf 6 pro Minute begrenzt.

```
ufw limit 22/tcp
```

:::note

UFW erlaubt es dir lediglich, die Anzahl der Verbindungen auf 6 pro Minute zu begrenzen. Der Begrenzer von UFW ist recht einfach und eignet sich möglicherweise nicht für alle Situationen. Für eine detailliertere und flexiblere Konfiguration empfehlen wir die direkte Verwendung von IPTables.

:::



## Absicherung von Webservern mit Cloudflare

Viele Menschen nutzen Cloudflare als ihren Domain-DNS-Manager. Cloudflare verfügt nicht nur über eines der größten Netzwerke der Welt, das niedrigere Seitenladezeiten, geringere Latenzzeiten und ein besseres Gesamterlebnis bietet, sondern schützt auch deine Webseiten vor DoS/DDoS-Angriffen, einschließlich Flooding und neuen Arten von Angriffen, die jeden Tag ans Licht kommen.
In dieser Anleitung erfährst du, wie du deinen Webserver vor Angriffen schützen kannst.

Wir gehen von der Annahme aus, dass deine Domain bereits von Cloudflare verwaltet wird. Falls nicht, kannst du der [Anleitung](https://developers.cloudflare.com/fundamentals/get-started/setup/add-site/) folgen, um deine Domain zu verschieben. Öffne die Registerkarte DNS-Einträge im Dashboard von Cloudflare und vergewissere dich, dass dein Eintrag zu deinem Webserver die orangefarbene Wolke hat und "Proxied" heißt.

![](https://i.imgur.com/wNEoWQP.png)

Danach wird der gesamte Datenverkehr, der über deine Domäne läuft, durch Cloudflare und von dort zu deinem Server geleitet, und zwar als legitimer Datenverkehr.
Dennoch ist dein Server immer noch von außerhalb von Cloudflare erreichbar. Dazu musst du den Zugriff auf die Ports 80 und 443 des TCP-Protokolls deines Linux-Servers beschränken und den Zugriff nur zulassen, wenn dieser von legitimem Cloudflare-Datenverkehr stammt.

Zu diesem Zweck kannst du den Zugang manuell mit Firewall-Regeln aus der [Cloudflare public IPv4 list](https://cloudflare.com/ips-v4) und [Cloudflare public IPv6 list](https://cloudflare.com/ips-v6) beschränken.

Alternativ kannst du auch etwas Zeit sparen und Tools wie [Cloudflare-ufw](https://github.com/Paul-Reed/cloudflare-ufw) verwenden, um diese Firewall-Regeln schnell zu importieren.
Achte darauf, dass du keine separaten Regeln hast, die den uneingeschränkten Zugriff auf deinen Webserver erlauben, außer denen, die du gerade hinzugefügt hast, sonst werden diese nicht funktionieren.
