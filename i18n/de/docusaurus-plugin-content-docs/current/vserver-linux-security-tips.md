---
id: vserver-linux-security-tips
title: Tipps zur Linux-Sicherheit
description: Tipps und Hinweise für die Sicherung deines Linux-Servers - ZAP-Hosting.com Dokumentation
sidebar_label: Sicherheitstipps

---

## Einführung

Diese Anleitung beeinhaltet einige Tipps und Hinweise wie du deinen Linux Server sicherer gestalten kannst. Insbesondere da auf (virtuelle) Server extern zugegriffen werden muss ist ein grundlegender Schutz vor ungewünschten Zugriffen definitiv empfehlenswert und sollte keinesfalls vernachlässigt werden. 

:::info
Bitte beachte dass diese Anleitung nicht abschließend ist und tiefergehende Informationen anderen Abschnitten der ZAP- Dokumentation entnommen werden kann. (z.B. [2FA](https://zap-hosting.com/guides/de/docs/vserver-linux-ssh2fa/))
:::

:::tip
Der einfachste Weg deinen Server zu schützen ist egal bei welchem Server immer gleich: Nutze sichere Passwörter, update deine Dienste regelmäßig und achte allgemein darauf welche Dienste du installieren möchtest und welche Guides du befolgst.
:::

## Absichern von SSH (Secure Shell)

SSH ist ein Dienst der es dir erlaubt aus der Ferne auf die Konsole deines Servers zuzugreifen und Befehle auf dem Server auszuführen. Hier siehst du, wie du SSH auf deinem Server einrichten kannst: [Wie richte ich SSH auf meinem Server ein?](https://zap-hosting.com/guides/de/docs/vserver-linux-ssh/).

Standardmäßig wird für SSH eine Passwortbasierte Anmeldung genutzt. Dies hat jedoch den großen Nachteil, dass die Authentifizierung relativ einfach per Brute- Force umgangen werden kann, insbesondere dann, wenn du ein zu simples Passwort für deinen SSH Login nutzt. Solltest du dich also für die Passwortlösung entscheiden, dann nutze bitte ein sicheres Passwort.

Um deinen Server noch besser vor ungewünschten SSH Zugriffen zu schützen, solltest du die Authentifizierung ausschließlich über SSH- Schlüssel ermöglichen, und den Passwort- Login deaktivieren. Schau dir dazu [unsere SSH-Anleitung](https://zap-hosting.com/guides/docs/vserver-linux-sshkey) an, in der erklärt wird, wie man SSH-Schlüssel generiert und hinzufügt werden. 

## Eine Firewall nutzen um dein System besser zu schützen

Der Grundsatz der externen Erreichbarkeit eines Servers ist immer gleich: Damit der Server extern erreichbar sein kann, muss ein Port geöffnet werden. Im Fall von SSH ist das **standardmäßig** (siehe weiter unten, wie du den Standard-Port ändern kannst) Port 22/TCP.

Das Problem dabei ist, dass dieser Port nun für Jedermann erreichbar ist, unabhängig von Person, Standort und Intention. Dies stellt eine große Sicherheitslücke dar, da böswillige Akteure den Server mit Anmeldeversuchen überschwemmen könnten, um entweder das richtige Kennwort herauszufinden (durch eine Brute- Force Attacke, falls du den Login per Passwort noch aktiviert hast) oder um zu versuchen, das Servernetzwerk durch Flooding (z.B. DDoS) zu überlasten, was häufig der Fall ist.

Um diese Auswirkungen zu verringern, kannst du Firewall-Regeln anwenden, die den Zugriff auf die geöffneten Ports beschränken.

Dafür gibt es zwei verschiedene Methoden die du nutzen kannst:
- **IPTables**: Dies ist sogesehen die ursprüngliche Firewall von Linux. Es bietet dir sehr viele Möglichkeiten, ist aber durchaus etwas komplizierter in der Anwendung.
- **UFW**: Dies ist letztendlich nur ein einfacheres Interface um IPTables zu nutzen, ohne die komplizierten Befehle anwenden zu müssen.

Im Endeffekt kannst du dir aussuchen, welche von beiden Methoden du nutzen möchtest. Je nach Anwendungsfall braucht man die Vielfältigkeit von IPTables, manchmal reicht auch einfach UFW. (z.B. dann, wenn du einfach nur Ports öffnen/schließen möchtest)

### IPTables

In diesem Abschnitt wirst du mit IPTables mehrere Regeln erstellen, die die Anzahl der möglichen Verbindungsversuche einschränken. Die Erklärungen zu den einzelnen Befehlen findest du unterhalb des Codeblocks.

Bitte beachte, dass diese Regel nur für **Port 22** (Der Wert nach `--dport`) aktiviert wird und die Befehle für andere Dienste angepasst werden müssten.  

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

Wie oben beschrieben ist UFW ein "einfacheres" Interface für IPTables. Im ersten Schritt muss UFW installiert werden, da es nicht bei allen Distros inkludiert ist. Die Befehle solltest du entweder als Root ausführen oder unter der verwendung von *sudo*.

Melde dich zunächst bei deinem Linux-Server an. Wenn du dabei Hilfe brauchst, folge bitte unserer Anleitung [SSH-Zugang](https://zap-hosting.com/guides/docs/vserver-linux-ssh), in der erklärt wird, wie dies funktioniert. 

Debian & Ubuntu:

Zuerst sollte das apt Verzeichnis aktualisiert werden
```
sudo apt update && sudo apt upgrade -y
```

Dann UFW per apt installieren
```
sudo apt install ufw -y
```

Nun checken wir noch, ob die Installation erfolgreich war:
```
sudo ufw status
> Firewall not loaded
```

Damit du dich nicht aussperrst, muss der ssh Dienst zuerst freigegeben werden, bis letztendlich die Firewall aktiviert werden kann. 

:::caution
Solltest du den Port für SSH bereits geändert haben, dann trag hier statt 22 bitte den neuen Port ein.
:::

```
sudo ufw allow 22/tcp
sudo ufw enable
sudo ufw status
```
Der Output dürfte in etwa so aussehen:
```
Status: active
  
To Action From
-- ------ ----
22/tcp ALLOW Anywhere
22/tcp (v6) ALLOW Anywhere (v6)
```


Führe nun den folgenden Befehl aus, der die Verbindung auf 6 pro Minute begrenzt.
```
ufw limit 22/tcp
```

:::note
UFW erlaubt es dir lediglich, die Anzahl der Verbindungen auf 6 pro Minute zu begrenzen. Der Begrenzer von UFW ist recht einfach und eignet sich möglicherweise nicht für alle Situationen. Für eine detailliertere und flexiblere Konfiguration empfehlen wir die direkte Verwendung von IPTables.
:::

:::tip
Die Firewall (egal ob IPTables oder UFW) kann die Verbindungversuche nur "stumpf" zählen und entsprechend blocken. Mit Fail2Ban ist es möglich Log- Files auf Auffälligkeiten zu prüfen. Im nächsten Abschnitt wird beschrieben, wie du Fail2Ban für einige Dienste aktivieren kannst.
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
