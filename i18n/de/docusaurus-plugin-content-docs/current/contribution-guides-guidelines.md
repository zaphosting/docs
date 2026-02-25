---
id: contribution-guides-guidelines
title: Anleitung Richtlinien
description: "Entdecke, wie du konsistente, hochwertige Dokumentation erstellst, die das Leseerlebnis und die Verständlichkeit verbessert → Jetzt mehr erfahren"
sidebar_label: Richtlinien
---

![Guides Banner](https://screensaver01.zap-hosting.com/index.php/s/4aaqq3zctZFW4JJ/preview)

Um sicherzustellen, dass die Inhalte in unseren ZAP-Docs stets eine gleichbleibende Qualität und einen einheitlichen Stil haben, haben wir eine Reihe von Richtlinien erstellt, die beim Erstellen oder Bearbeiten von Inhalten für unsere Dokumentation zu beachten sind. Du **musst** unsere Richtlinien genau befolgen, damit dein Vorschlag und der finale Pull Request zügig bearbeitet werden können. Noch wichtiger ist, dass unsere Leser so eine bessere und konsistent hochwertige Erfahrung beim Lesen und Mitverfolgen der Anleitungen haben.

Unsere Richtlinien für Beiträge zu Anleitungen sind in folgende Abschnitte unterteilt:

- Struktur
- Stil
- Formatierung
- Terminologie

Wir empfehlen, diese Abschnitte mindestens einmal durchzulesen, bevor du mit dem Schreiben von Inhalten beginnst. Sie sind auch eine nützliche Referenz, falls du während des Erstellungsprozesses unsicher bist, wie du etwas angehen sollst.

## Struktur

Alle unsere Anleitungen in den ZAP-Docs folgen einer relativ einheitlichen Struktur, die mit einer kurzen Einführung inklusive eventueller Voraussetzungen oder Vorbereitungsschritte beginnt, gefolgt vom Hauptinhalt und einem kurzen Fazit.

Die Struktur kann je nach Art der Anleitung gelegentlich angepasst werden. Das kann im Vorschlagsprozess mit dem ZAP-Docs Team besprochen werden. Wie du Überschriften nutzt, kannst du im Abschnitt zu Headers sehen – das erfolgt ganz klassisch mit Markdown.

Typischerweise erwarten wir folgende Überschriftenstruktur:

- **Seitentitel** (H1) – Dieser wird über das `title`-Metadatum oben auf der Seite gesetzt.
- **Einleitung** (H2) – Kurze 1-2 Sätze, die das Thema der Anleitung erklären und vor allem, was mit der Anleitung erreicht werden soll.
- **Vorbereitung** (H2) – Diese Überschrift ist **optional**. Sie wird nur benötigt, wenn bestimmte Voraussetzungen oder Vorbereitungsschritte erfüllt sein müssen, bevor der Leser der Anleitung folgen kann. Zum Beispiel kannst du hier auf unsere [SSH Initial Access](vserver-linux-ssh.md) Anleitung verweisen, falls sich der Nutzer zuerst auf seinem Server einloggen muss. Oder du listest Software- und/oder Hardwareanforderungen auf. Oder du gibst schnelle Anweisungen, wie man z.B. eine Firewall vorbereitet. Wir empfehlen, auf unserer [ZAP-Docs Webseite](https://zap-hosting.com/guides) nachzuschauen, ob es bereits Anleitungen gibt, die diese Schritte abdecken, und diese dann zu verlinken.
- **Hauptthema** (H2) – Das ist dein erster Hauptabschnitt der Anleitung. Oft wird das „Installation“ sein, gefolgt von verschiedenen Unterabschnitten für einzelne Schritte. Das muss aber nicht immer so sein, z.B. bei rein informativen Anleitungen kann das Hauptthema anders lauten.
- Optional: **Unterthema 1** (H3)
- Optional: **Unterthema 2** (H3)
- ...
- Optional: **Weiteres Thema** (H2)
- **Fazit** (H2) – Zum Abschluss der Anleitung solltest du in 1-3 Sätzen zusammenfassen, was der Leser erfolgreich erreicht hat und einen Hinweis auf unseren Support geben, falls noch Probleme bestehen.

:::info Verwendung von Unterüberschriften (H3 & H4)
Du solltest H3-Überschriften nutzen, um innerhalb der Haupt-H2-Abschnitte Unterabschnitte zu erstellen und so größere Inhalte besser zu strukturieren. Ein Beispiel siehst du im Abschnitt **Hauptthema** oben.

H4-Überschriften kannst du ebenfalls verwenden. Diese sind praktisch, wenn du weitere Unterteilungen brauchst, die aber nicht in der rechten Seitenübersicht angezeigt werden sollen. Sie sind auch nützlich, wenn du einen H3-Abschnitt noch weiter unterteilen möchtest.

Wenn du Unterüberschriften nutzt, macht es meistens Sinn, mindestens zwei oder mehr Unterüberschriften innerhalb des übergeordneten Abschnitts zu haben. Nur eine einzelne Unterüberschrift innerhalb eines Hauptabschnitts zu haben, ist meist nicht sinnvoll.
:::

In Zukunft werden wir Vorlagen mit vorgefertigtem Markdown bereitstellen, die dir als guter Startpunkt für neue Seiten dienen. Das kommt bald.

### Titel

Titel sollten kurz und prägnant sein und klar das Hauptziel der Anleitung widerspiegeln. Überlege, was der Leser am Ende erreicht haben soll, z.B. eine Installation abgeschlossen, einen Dienst konfiguriert oder ein technisches Thema verstanden. Das Ergebnis sollte schon im Titel erkennbar sein.

Jeder Titel muss mit dem passenden Produktkategorie-Präfix beginnen. Dieses Präfix sollte zur Kategorie passen, in der die Anleitung im Sidebar-Bereich steht. Ein Blick auf bestehende Anleitungen in derselben Kategorie hilft, einheitliche Benennungen sicherzustellen.

Beispiel: Eine Anleitung zum VPS-Produkt sollte so aufgebaut sein: `VPS: SteamCMD Linux Setup`.

Wenn eine Anleitung allgemein gehalten ist und für mehrere Produkte gilt, z.B. eine Service- oder Gameserver-Installation, die sowohl auf VPS als auch Dedicated Servern funktioniert, sollte der Produktname nicht im Titel stehen. Solche Anleitungen sind bewusst produktunabhängig und brauchen daher kein spezifisches Produktpräfix.

### Einleitung

Die Einleitung deiner Anleitung sollte relativ kurz und auf den Punkt sein, typischerweise 1-2 Sätze. Du solltest kurz das Thema beschreiben und vor allem erklären, was die Anleitung dem Leser vermitteln wird und welches Ziel erreicht wird.

Ein Beispiel für eine ideale Einleitung zu einer SteamCMD-Anleitung wäre:

- **1. Satz**: SteamCMD ist ein unverzichtbares Tool, das für die Installation von Dedicated Servern für viele Spiele wie Palworld, Enshrouded und mehr benötigt wird.
- **2. Satz**: In dieser Anleitung zeigen wir dir den Erst-Setup-Prozess, um SteamCMD auf deinem Linux-Server zu installieren. Wir verwenden Ubuntu in den Beispielen, der Ablauf ist aber bei anderen Distributionen sehr ähnlich.

Wie im Beispiel fasst die Einleitung kurz die relevanten Themen zusammen und stellt das Ziel der Anleitung klar dar.

### Vorbereitung

Der Vorbereitungsabschnitt ist hilfreich, um notwendige Voraussetzungen zu klären, die der Leser erfüllen muss, bevor er der Anleitung folgen kann. Das können Software- oder Hardwareanforderungen sein, Anweisungen zur Vorbereitung von Software wie einer Firewall oder einfach eine Anleitung, wie man sich per SSH oder RDP auf dem Server einloggt.

Wir empfehlen dringend, auf unserer [ZAP-Docs Webseite](https://zap-hosting.com/guides) nachzuschauen, ob es bereits Anleitungen gibt, die deine Vorbereitungsschritte abdecken oder damit zusammenhängen. Wenn es eine passende Anleitung gibt, z.B. [SSH Initial Access](vserver-linux-ssh.md), solltest du diese verlinken und den Leser bitten, dieser zuerst zu folgen.

Typische Voraussetzungen für Anleitungen sind:

- Benötigte Software (z.B. Git, Node.js, Python, Docker)
- Tutorials, die dem Leser Grundwissen vermitteln (z.B. andere ZAP-Docs Seiten)
- Benutzerkonten wie APIs
- Erforderliche Einstellungen (z.B. DNS/SSL)

Ein Beispiel für eine Reverse Proxy Anleitung wäre:
```
Um einen Reverse Proxy einzurichten, benötigst du einen Linux Server, auf dem dein Proxy läuft, und du solltest dich mit diesem verbinden können. Nutze unsere [SSH Initial Access](vserver-linux-ssh.md) Anleitung, falls du Hilfe dabei brauchst. Außerdem benötigst du Zugriff auf eine Domain, die du besitzt. Für jede Subdomain, die du verwenden möchtest, solltest du einen `A` DNS-Eintrag anlegen, der auf die IP-Adresse deines Linux Servers zeigt.
```

### Hauptthema

Jetzt geht es an den Hauptteil deiner Anleitung. Du kannst gerne verschiedene H2-, H3- und H4-Überschriften nutzen, um deine Anleitung sinnvoll zu strukturieren. Es macht Sinn, H2 für große Abschnitte zu verwenden und diese mit H3 und/oder H4 weiter zu unterteilen.

Bei vielen Anleitungen, vor allem wenn es um Software-Setup geht, wirst du wahrscheinlich eine **Installation**-Überschrift nutzen, die in mehrere H3-Unterabschnitte aufgeteilt ist. Wenn du dir unsicher bist, wie du die Struktur richtig aufbaust, keine Sorge – wir arbeiten mit dir im Vorschlagsprozess zusammen, um eine gut durchdachte Struktur zu planen.

Innerhalb der Abschnitte ist es sinnvoll, kurze Einstiegs- und Abschluss-Sätze einzubauen, damit der Leser immer weiß, was er bisher gemacht hat und was als Nächstes kommt. Natürlich gilt das nicht für den letzten Hauptabschnitt, der geht direkt ins Fazit über.

Beispiele für solche Übergangssätze:

- **Einstiegssatz**: In diesem Abschnitt wirst du die Konfiguration vornehmen, um die Software nach deinen Wünschen anzupassen.
- **Abschlusssatz**: Mit der vorbereiteten Konfiguration und der gespeicherten Datei geht es im nächsten Abschnitt weiter, um das Admin-Konto einzurichten und die Software zu starten.

Diese Übergangssätze geben dem Leser wichtigen Kontext und sorgen für einen guten Lesefluss. Denk daran, immer die zweite Person Singular zu verwenden (z.B. „Du erstellst“) und nicht die erste Person („Ich denke“).

### Fazit

Zum Schluss kommt das Fazit der Anleitung. Hier solltest du in 1-3 Sätzen zusammenfassen, was der Leser erfolgreich erreicht hat und auf weiterführende Anleitungen oder Themen verweisen, mit denen er sein Wissen vertiefen kann.

Es ist super, wenn du hier passende ZAP-Docs Anleitungen verlinkst, vor allem solche, die natürlich auf deine Anleitung aufbauen. Außerdem empfehlen wir, einen Hinweis auf unseren Support zu geben, falls der Leser noch Probleme hat.

Ein Beispiel für ein gutes Fazit ist:
```
Du hast die Software jetzt erfolgreich auf deinem Linux Server eingerichtet! Wir empfehlen dir, unsere Linux Service Anleitungen in diesem Bereich durchzuschauen, um weitere Dienste zu installieren.

Bei weiteren Fragen oder Problemen steht dir unser Support-Team täglich zur Verfügung – zögere nicht, dich zu melden! 🙂
```

## Stil

Der Schreibstil der ZAP-Hosting Docs orientiert sich daran, hochwertige, praxisnahe und leicht zugängliche Anleitungen zu erstellen, die ein breites Themenspektrum abdecken und Leser aller Erfahrungsstufen unterstützen.

### Technisch & korrekt

Unsere Artikel sollen so technisch korrekt und aktuell wie möglich sein. Wir erwarten, dass die Artikel den Nutzer nicht nur zum Ziel führen (z.B. etwas installieren oder einrichten), sondern dass er auch versteht, was er gemacht hat. Jeder Schritt in einer Anleitung sollte einen klaren Zweck und eine Erklärung haben, ggf. mit zusätzlichen Optionen oder Flags. Du solltest den Leser immer darüber informieren, was er gerade macht und warum.

Als Autor solltest du deine Anleitungen vor dem Einreichen sorgfältig Korrektur lesen und testen, damit alles technisch korrekt ist und wie vorgesehen funktioniert. Das ZAP-Hosting Docs Team liest und testet deine Anleitung ebenfalls, um Konsistenz und Richtigkeit sicherzustellen oder Verbesserungen vorzuschlagen, falls Fehler gefunden werden.

:::tip
Wir empfehlen allen Autoren, vor dem Erstellen eines Pull Requests eine Rechtschreibprüfung zu machen. Ein nützliches Tool dafür ist: https://languagetool.org/
:::

### Praktisch & nützlich

Wenn ein Leser eine Anleitung beendet hat, sollte er etwas gelernt, gebaut oder eingerichtet haben – von Anfang bis Ende. Unsere Anleitungen sollen Leser aller Erfahrungsstufen unterstützen, daher solltest du dein Thema umfassend behandeln und alle nötigen Details und Voraussetzungen nennen. Verweise nur dann auf externe Webseiten, wenn es keine passende Dokumentation in den ZAP-Docs gibt oder wenn der Nutzer zusätzliche Infos bekommen soll, die für die Anleitung nicht zwingend nötig sind, aber das technische Verständnis fördern. Externe Links sollten nicht auf Konkurrenzseiten führen.

### Freundlich, formal & umfassend

Wir wollen, dass unsere Dokumentation zukunftsorientiert und freundlich ist, damit sie für alle Leser zugänglich ist, aber gleichzeitig formal bleibt. Im gesamten Text sollte der Ton für alle Leser akzeptabel sein, unabhängig von Erfahrung oder Sprachkenntnissen.

Da die Anleitungen primär den Leser unterstützen und ihm helfen, ein Ergebnis zu erreichen, erwarten wir, dass Autoren die zweite Person Singular verwenden (z.B. „Du musst...“) und nicht die erste Person (z.B. „Ich denke...“), um den Fokus auf den Leser zu halten.

Außerdem müssen alle Autoren unseren Verhaltenskodex einhalten, damit unsere Anleitungen für alle offen und respektvoll sind – unabhängig von Alter, Herkunft, Geschlechtsidentität, Erfahrung, Nationalität, Religion, politischer Einstellung, sexueller Orientierung, sozialem Status oder Technologiepräferenzen. Vermeide bitte jegliche potenziell anstößige Sprache oder Inhalte, die sich auf diese Themen beziehen.

## Formatierung

Unsere Dokumentation wird mit der Markdown-Auszeichnungssprache formatiert, die weit verbreitet und relativ einfach zu nutzen ist. In den folgenden Abschnitten erfährst du, welche Features wir verwenden und wie.

:::tip
Für mehr Beispiele und ausführliche Erklärungen zu Markdown schaue auf [Markdown Guide](https://www.markdownguide.org/cheat-sheet/). Dort gibt’s viele hilfreiche Infos.
:::

### Überschriften

Überschriften sind eines der wichtigsten Formatierungsmittel, um Seiten logisch und übersichtlich zu gliedern. Der Haupttitel ist eine H1-Überschrift, die du aber nie im Text verwenden solltest. Stattdessen wird diese über das `title`-Metadatum oben in der Datei gesetzt.

In unseren Anleitungen sollten H2-Überschriften die Hauptabschnitte trennen. Darunter nutzt du H3, um diese Hauptabschnitte in Unterabschnitte zu gliedern. Ein Beispiel wäre, einen Hauptabschnitt in mehrere Schritte zu unterteilen, damit die Anleitung leichter zu folgen ist. H4 gibt es auch, wird aber seltener genutzt. Es dient ebenfalls zur Unterteilung, wird aber nicht in der rechten Seitenübersicht angezeigt.

:::info
Wenn du Unterüberschriften nutzt (z.B. H3 unter H2), stelle bitte sicher, dass es mindestens zwei Überschriften derselben Ebene innerhalb des Abschnitts gibt. Nur eine einzelne Unterüberschrift ist falsch.
:::

Hier ein schnelles Beispiel für die Nutzung von Überschriften:

```
## Installation
H2 - Hauptabschnitt

### Herunterladen der Spieldateien
H3 - Unterabschnitt von H2

#### Via SteamCMD
H4 - Unterabschnitt von H3

#### Manuell via GitHub
H4 - Unterabschnitt von H3

### Vorbereitung der Konfiguration
H3 - Unterabschnitt von H2

### Server starten
H3 - Unterabschnitt von H2
```

### Inline-Markdown

Wir nutzen verschiedene Inline-Formatierungen, um die Lesbarkeit zu verbessern und Leser mit unterschiedlichen technischen Kenntnissen abzuholen. Hier die wichtigsten:

#### Fettdruck

Fettdruck wird hauptsächlich verwendet, um Informationen hervorzuheben. Beispiele:

- Kontextwechsel zwischen Schritten
- Hostnames, Zugangsdaten & Benutzernamen
- Wichtige Fachbegriffe

Du kannst einfach zwei Sternchen außenrum setzen, z.B. `**hallo**` ergibt **hallo**.

#### Kursiv

Kursiv wird vor allem genutzt, um neue technische Begriffe einzuführen. Beispiel: Wir richten heute einen *Reverse Proxy* ein.

Dafür setzt du einen Stern außenrum, z.B. `*ZAP-Hosting - Mehr POWER!*` ergibt *ZAP-Hosting - Mehr Power!*.

#### Inline-Code

Inline-Code wird genutzt, um technische Infos wie URLs darzustellen. Beispiele:

- Dateinamen und Pfade (z.B. `C:/User/[dein_name]/AppData....test.png`)
- URLs (z.B. `https://zap-hosting.com`)
- Ports (z.B. `:30120`)
- Befehle (z.B. `ipconfig`)
- SQL-Abfragen (z.B. `SELECT * FROM servers`)
- Tastenkombinationen (z.B. `ENTER` oder `CTRL + C`)

#### Tabellen

Tabellen sind super, wenn du viele wiederkehrende Infos übersichtlich darstellen willst, z.B. Befehle, Beschreibungen und Nutzung in einem Spiel. Beispiel:

```
| Befehl      | Beschreibung            | Nutzung               |
| ----------- | ----------------------- | --------------------- |
| /help       | Hilfebefehl senden      | /help [Kategorie]     |
| /stop       | Server stoppen          | /stop [true/false]    |
```

#### Codeblöcke

Codeblöcke sind sehr nützlich für Anleitungen mit Befehlen, Skripten, Terminal-Ausgaben usw.

Du setzt sie mit ``` außenrum. Du kannst auch die Programmiersprache angeben, z.B. ` ```js ` für JavaScript:

```js
function hello(name) {
    console.log(name)
}

var server = "ZAP-Hosting"
hello(server)
```

### Verwendung von Admonitions

Admonitions heben wichtige Infos in deiner Anleitung hervor. Es gibt fünf Typen, jeder mit eigenem Zweck.

Beim Einsatz von Admonitions muss immer ein klarer und beschreibender Titel angegeben werden. So versteht der Leser sofort, worum es geht, ohne den ganzen Text lesen zu müssen.

Die Syntax ist bei allen Typen gleich, nur das Keyword ändert sich:

```
:::warning Titel
	Dein Inhalt hier.
:::
```

#### Hinweis

:::note Beispiel: Zusätzliche Information
Nutze diesen Typ für ergänzende Infos, die dem Leser helfen können, aber nicht zwingend für die Anleitung nötig sind.
:::

#### Tipp

:::tip Beispiel: Performance-Tipp
Nutze diesen Typ, um praktische Ratschläge, Best Practices oder Effizienzverbesserungen zu teilen.
:::

#### Info

:::info Beispiel: Voraussetzung oder wichtige Details
Nutze diesen Typ für wichtige Kontextinfos, die der Leser vor oder während des Prozesses wissen sollte.
:::

#### Vorsicht

:::caution Beispiel: Risiko bei der Konfiguration
Nutze diesen Typ, um vor möglichen Problemen oder Fehlern zu warnen, die beim Befolgen der Anleitung auftreten können.
:::

#### Gefahr

:::danger Beispiel: Bekannter Bug oder veraltetes Feature
Nutze diesen Typ für kritische Warnungen, z.B. bekannte Bugs, irreversible Aktionen, Sicherheitsrisiken oder veraltete Features, die ernsthafte Probleme verursachen können.
:::

### Screenshots

Screenshots sind super hilfreich, um Leser visuell durch die Schritte zu führen – wir empfehlen, sie wo sinnvoll einzusetzen. Achte darauf, dass alle sichtbaren Inhalte auf Englisch sind, da unsere Dokumentation auf Englisch verfasst ist und dieselben Screenshots auch für andere Sprachen genutzt werden. Screenshots sollten in ausreichend hoher Auflösung sein, damit alles gut lesbar ist. Vermeide kleine oder stark zugeschnittene Bilder.

Du kannst Screenshots so einfügen, ersetze `your_url` durch die Bild-URL:

```
![](your_url)
```

Am besten nutzt du Seiten wie Imgur zum Hochladen oder ziehst das Bild direkt ins Bearbeitungsfeld auf GitHub, das lädt es automatisch hoch.

## Terminologie

In unserer Dokumentation gibt es viele wichtige Fachbegriffe. Wir erwarten, dass du US-englische Schreibweise nutzt, um Konsistenz in allen Artikeln zu gewährleisten. Hier standardisieren wir einige häufig genutzte Begriffe.

### ZAP-Hosting Produkte

Wenn du ein ZAP-Hosting Produkt erwähnst, achte immer auf korrekte Schreibweise und Groß-/Kleinschreibung. Schau dazu auf [die ZAP-Hosting Webseite](https://zap-hosting.com), wie das Produkt dort genannt wird.

### Benutzerdefinierte Attribute

In den meisten Anleitungen brauchst du Konfigurationsoptionen wie Benutzer, Hostnames, Domains, IP-Adressen oder URLs, bei denen der Leser eigene Daten einsetzen muss.

Standardmäßig solltest du `[dein_attribut]` verwenden, um statische von individuellen Elementen zu unterscheiden. `attribut` ersetzt du durch den Typ, z.B. bei einer IP `[deine_server_ip]` oder bei einer URL `http://[deine_server_ip]:30120`.

So ist klar, welche Werte der Leser anpassen muss. Erkläre oder weise beim ersten Vorkommen darauf hin, welche Attribute geändert werden müssen.

Als Standard-Hostname, Benutzername oder Datenbankname solltest du `zaphosting` verwenden.

### Software

Wenn du Software in deinen Anleitungen erwähnst, achte auf korrekte Schreibweise und Groß-/Kleinschreibung des Software-Namens. Wenn die Webseite der Software keine einheitliche Großschreibung hat, bleibe innerhalb eines Artikels konsistent.

Verlinke beim ersten Erwähnen der Software auf die offizielle Webseite, sofern verfügbar.