---
id: contribution-guides-guidelines
title: Anleitung Richtlinien
description: "Entdecke, wie du konsistente, hochwertige Dokumentation erstellst, die das Leseerlebnis und die Klarheit verbessert → Jetzt mehr erfahren"
sidebar_label: Richtlinien
---

![Guides Banner](https://screensaver01.zap-hosting.com/index.php/s/4aaqq3zctZFW4JJ/preview)

Um sicherzustellen, dass die Inhalte in unseren ZAP-Docs stets eine gleichbleibende Qualität und einen einheitlichen Stil haben, haben wir eine Reihe von Richtlinien erstellt, die beim Erstellen oder Bearbeiten von Inhalten für unsere Dokumentation zu beachten sind. Du **musst** unsere Richtlinien genau befolgen, damit dein Vorschlag und der finale Pull Request zügig bearbeitet werden können. Noch wichtiger ist, dass unsere Leser so eine bessere und konsistent hochwertige Erfahrung beim Lesen und Mitverfolgen der Anleitungen haben.

Unsere Richtlinien für Beitrags-Leitfäden sind in folgende Abschnitte unterteilt:

- Struktur
- Stil
- Formatierung
- Terminologie

Wir empfehlen, diese Abschnitte mindestens einmal durchzulesen, bevor du mit dem Schreiben von Inhalten beginnst. Sie sind auch eine nützliche Referenz, falls du während des Erstellungsprozesses unsicher bist, wie du etwas angehen sollst.

## Struktur

Alle unsere Guides in den ZAP-Docs folgen einer relativ einheitlichen Struktur, die mit einer kurzen Einführung inklusive eventueller Voraussetzungen oder Vorbereitungsschritte beginnt, gefolgt vom Hauptinhalt und einem kurzen Fazit.

Die Struktur kann je nach Art des Guides gelegentlich angepasst werden. Das kann im ersten Vorschlag mit dem ZAP-Docs Team besprochen werden. Wie du Überschriften nutzt, erfährst du im Abschnitt Headers; das erfolgt ganz klassisch mit Markdown.

Typischerweise erwarten wir folgende Überschriftenstruktur:

- **Seitentitel** (H1) – Wird über die `title` Metadaten am Seitenanfang gesetzt.
- **Einleitung** (H2) – Kurze 1-2 Sätze, die das Thema des Guides erklären und vor allem, was der Guide erreichen will.
- **Vorbereitung** (H2) – Diese Überschrift ist **optional**. Sie ist nur nötig, wenn es bestimmte Voraussetzungen oder Vorbereitungsschritte gibt, die der Leser erledigen muss, bevor er dem Guide folgen kann. Zum Beispiel kannst du hier auf unseren [SSH Initial Access](vserver-linux-ssh.md) Guide verweisen, falls sich der Nutzer zuerst auf seinem Server einloggen muss. Oder du nennst Software- und/oder Hardware-Anforderungen. Oder du gibst schnelle Anweisungen, wie man Software vorbereitet, z.B. eine Firewall. Wir empfehlen, auf unserer [ZAP-Docs Webseite](https://zap-hosting.com/guides) nachzuschauen, ob es bereits Guides gibt, die diese Schritte abdecken, und dann darauf zu verlinken.
- **Hauptthema** (H2) – Das ist dein erster Hauptabschnitt im Guide. Oft ist das z.B. **Installation**, gefolgt von verschiedenen Unterabschnitten für einzelne Schritte. Das muss aber nicht immer so sein, z.B. können Info-Guides ein anderes Hauptthema haben.
- Optional: **Unterthema 1** (H3)
- Optional: **Unterthema 2** (H3)
- ...
- Optional: **Weiteres Thema** (H2)
- **Fazit** (H2) – Zum Abschluss solltest du den Guide in 1-3 Sätzen zusammenfassen, was der Leser erfolgreich erreicht hat, und einen Hinweis auf unser Support-Team geben, falls noch Probleme bestehen.

:::info Verwendung von Unterüberschriften (H3 & H4)
Du solltest H3 Überschriften nutzen, um innerhalb der Hauptabschnitte (H2) Unterabschnitte zu erstellen und so größere Inhalte besser zu strukturieren. Ein Beispiel siehst du im Abschnitt **Hauptthema** oben.

H4 Überschriften kannst du ebenfalls verwenden. Sie sind praktisch, wenn du einen weiteren Unterabschnitt erstellen willst, der aber nicht in der rechten Seitenübersicht angezeigt werden soll. Sie helfen auch, wenn du einen H3 Abschnitt noch weiter unterteilen möchtest.

Wenn du Unterüberschriften nutzt, macht es meistens Sinn, mindestens zwei oder mehr Unterüberschriften innerhalb des übergeordneten Abschnitts zu haben. Nur eine einzelne Unterüberschrift innerhalb eines Hauptabschnitts ist meist nicht sinnvoll.
:::

In Zukunft werden wir Vorlagen mit vorgefertigtem Markdown bereitstellen, die dir als guter Startpunkt für neue Seiten dienen. Das kommt bald.

### Titel

Die Titel deiner Guides sollten kurz sein und sich am Gesamtziel des Guides orientieren. Überlege genau, was der Leser am Ende des Guides erreicht haben soll, z.B. eine Software installieren oder Infos zu einem bestimmten Thema erhalten.

Der Titel sollte mit der Produktkategorie beginnen, zu der der Guide gehört. Diese Kategorie ist auch der Bereich, in dem du den Guide in der Sidebar platzierst. Du kannst andere Guides im gleichen Bereich anschauen, um deren Präfix zu sehen.

Ein gutes Beispiel für einen Titel zu einem VPS-Guide wäre: `VPS: SteamCMD Linux Setup`

### Einleitung

Die Einleitung sollte kurz und prägnant sein, meist 1-2 Sätze. Beschreibe darin kurz das Thema und vor allem, was der Guide dem Leser vermitteln oder ermöglichen wird.

Ein Beispiel für eine ideale Einleitung zu einem SteamCMD-Guide:

- **1. Satz**: SteamCMD ist ein essentielles Tool, das für die Installation von Dedicated Servern für viele Spiele wie Palworld, Enshrouded und mehr benötigt wird.
- **2. Satz**: In diesem Guide zeigen wir dir, wie du SteamCMD zum ersten Mal auf deinem Linux-Server installierst. Wir nutzen Ubuntu als Beispiel, der Ablauf ist aber bei anderen Distributionen ähnlich.

Wie im Beispiel fasst die Einleitung kurz die relevanten Themen zusammen und zeigt das Ziel des Guides.

### Vorbereitung

Der Abschnitt Vorbereitung klärt alle nötigen Voraussetzungen, die der Leser erfüllen muss, bevor er dem Guide folgen kann. Das können Software- oder Hardware-Anforderungen sein, Anleitungen zur Vorbereitung von Software wie einer Firewall oder einfach der Hinweis, sich per SSH oder RDP auf dem Server einzuloggen.

Wir empfehlen dringend, auf unserer [ZAP-Docs Webseite](https://zap-hosting.com/guides) nach Guides zu suchen, die Vorbereitungsschritte abdecken. Wenn es einen passenden Guide gibt, z.B. [SSH Initial Access](vserver-linux-ssh.md), solltest du darauf verlinken und den Leser bitten, diesen zuerst zu lesen.

Typische Voraussetzungen sind:

- Benötigte Software (z.B. Git, Node.js, Python, Docker)
- Tutorials für Grundwissen (z.B. andere ZAP-Docs Seiten)
- Benutzerkonten wie APIs
- Erforderliche Einstellungen (z.B. DNS/SSL)

Ein Beispiel für einen Reverse Proxy Guide:

```
Um einen Reverse Proxy einzurichten, benötigst du einen Linux Server, auf dem dein Proxy läuft, und solltest dich mit ihm verbinden können. Nutze unseren [SSH Initial Access](vserver-linux-ssh.md) Guide, falls du Hilfe dabei brauchst. Außerdem brauchst du Zugriff auf eine Domain, die du besitzt. Für jede Subdomain, die du verwenden möchtest, solltest du einen `A` DNS-Eintrag anlegen, der auf die IP-Adresse deines Linux Servers zeigt.
```

### Hauptthema

Jetzt geht es an den Hauptteil deines Guides. Du kannst H2, H3 und H4 Überschriften nutzen, um den Guide sinnvoll zu strukturieren. H2 für große Abschnitte, H3 und H4 für Unterabschnitte.

Bei vielen Guides, die Software-Setups beschreiben, ist ein **Installation** Abschnitt üblich, der in mehrere H3 Unterabschnitte gegliedert ist. Wenn du dir unsicher bist, wie du die Struktur gestalten sollst, keine Sorge – wir helfen dir während der Vorschlagsphase, eine gute Struktur zu planen.

Innerhalb der Abschnitte ist es sinnvoll, kurze Einstiegs- und Abschluss-Sätze einzubauen, damit der Leser immer weiß, was er bisher gemacht hat und was als Nächstes kommt. Die letzte Hauptsektion braucht keinen Abschlusssatz, da sie natürlich ins Fazit übergeht.

Beispiele für solche Übergangssätze:

- **Einstieg**: In diesem Abschnitt konfigurierst du die Software nach deinen Wünschen.
- **Abschluss**: Nachdem die Konfiguration gespeichert ist, geht es im nächsten Abschnitt darum, das Admin-Konto einzurichten und die Software zu starten.

Diese Übergänge sorgen für einen guten Lesefluss. Denk daran, immer die zweite Person Singular zu verwenden (z.B. „Du erstellst“) und nicht die erste Person.

### Fazit

Der letzte Abschnitt ist das Fazit. Hier fasst du in 1-3 Sätzen zusammen, was der Leser erreicht hat, und gibst Hinweise auf weiterführende Guides oder Informationen.

Es ist super, wenn du hier auf andere ZAP-Docs Guides verlinkst, die thematisch passen und natürlich auf unser Support-Team, falls noch Fragen offen sind.

Ein Beispiel für ein gutes Fazit:

```
Du hast die Software jetzt erfolgreich auf deinem Linux Server eingerichtet! Wir empfehlen dir, weitere Linux Service Guides in diesem Bereich anzuschauen, um zusätzliche Services zu installieren.

Bei Fragen oder Problemen steht dir unser Support-Team täglich zur Verfügung – zögere nicht, sie zu kontaktieren! 🙂
```

## Stil

Der Schreibstil in den ZAP-Hosting Docs soll hochwertige, praktische und leicht zugängliche Guides bieten, die ein breites Themenspektrum abdecken und Leser aller Erfahrungsstufen unterstützen.

### Technisch & korrekt

Unsere Artikel sollen so technisch korrekt und aktuell wie möglich sein. Sie sollen nicht nur dem Nutzer helfen, das Ziel zu erreichen (z.B. etwas zu lernen, zu bauen oder einzurichten), sondern auch verstehen lassen, was er gemacht hat. Jeder Schritt im Guide sollte einen klaren Zweck und eine Erklärung haben, inklusive zusätzlicher Optionen oder Flags, wenn sinnvoll. Halte den Leser immer auf dem Laufenden, was er gerade macht und warum.

Als Autor solltest du deine Guides Korrektur lesen und testen, damit alles technisch korrekt ist und wie erwartet funktioniert, bevor du einen Pull Request erstellst. Das ZAP-Hosting Docs Team liest und testet deine Anleitung ebenfalls, um Konsistenz und Richtigkeit sicherzustellen oder Verbesserungen vorzuschlagen.

:::tip
Wir empfehlen dir, deine Inhalte vor dem Pull Request mit einem Rechtschreib- und Grammatik-Check zu prüfen. Ein nützliches Tool ist: https://languagetool.org/
:::

### Praktisch & nützlich

Wenn ein Leser einen Artikel beendet, sollte er etwas gelernt, gebaut oder eingerichtet haben – von Anfang bis Ende. Unsere Guides sollen Leser aller Erfahrungsstufen unterstützen, deshalb solltest du dein Thema umfassend behandeln und alle nötigen Details und Voraussetzungen nennen. Verweise nur dann auf externe Seiten, wenn es keine passende ZAP-Docs Dokumentation gibt oder wenn der Nutzer zusätzliche, nicht zwingend notwendige Infos sammeln soll. Externe Links dürfen nicht auf Konkurrenz-Dokumentationen verweisen.

### Freundlich, formell & umfassend

Unsere Dokumentation soll zukunftsorientiert und freundlich sein, damit sie für alle Leser zugänglich ist, aber gleichzeitig formell bleiben. Im Guide solltest du einen Ton wählen, der für alle Leser akzeptabel ist, egal wie viel Erfahrung sie haben oder welche Sprachbarrieren bestehen.

Da die Guides primär den Leser unterstützen und ihm helfen, ein Ergebnis zu erreichen, solltest du immer die zweite Person verwenden (z.B. „Du musst...“) und nicht die erste Person (z.B. „Ich denke...“), um den Fokus auf den Leser zu halten.

Außerdem müssen alle Autoren unseren Verhaltenskodex einhalten, damit unsere Guides für jeden offen sind – unabhängig von Alter, Herkunft, Geschlechtsidentität, Erfahrung, Nationalität, Religion, politischer Einstellung, sexueller Orientierung, sozialem Status oder Technologiepräferenzen. Vermeide jegliche potenziell anstößige Sprache oder Inhalte, die sich auf diese Themen beziehen.

## Formatierung

Unsere Dokumentation wird mit Markdown formatiert, das weit verbreitet und relativ einfach zu nutzen ist. In den folgenden Abschnitten erfährst du, welche Markdown-Features wir verwenden und wie.

:::tip
Für mehr Beispiele und ausführliche Erklärungen zu Markdown schau dir den [Markdown Guide](https://www.markdownguide.org/cheat-sheet/) an.
:::

### Überschriften

Überschriften sind eines der wichtigsten Formatierungswerkzeuge, um Seiten logisch und übersichtlich zu gliedern. Der Haupttitel ist eine H1 Überschrift, die du aber nicht im Text verwenden solltest. Stattdessen wird sie über die `title` Metadaten am Anfang der Datei gesetzt.

In unseren Guides sollten H2 Überschriften die Hauptabschnitte trennen. H3 Überschriften teilen diese Hauptabschnitte in Unterabschnitte. Zum Beispiel kann man so einen Hauptabschnitt in mehrere Schritte aufteilen, um das Folgen zu erleichtern. H4 Überschriften werden seltener genutzt, dienen aber ebenfalls zur weiteren Unterteilung, ohne in der rechten Seitenübersicht angezeigt zu werden.

:::info
Wenn du Unterüberschriften nutzt (z.B. H3 unter H2), stelle sicher, dass es mindestens zwei Überschriften derselben Ebene im Abschnitt gibt, sonst ist das falsch.
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

### Inline Markdown

Wir nutzen verschiedene Inline-Formatierungen, um die Lesbarkeit zu verbessern und Leser mit unterschiedlichen technischen Kenntnissen abzuholen. Hier die wichtigsten:

#### Fettdruck

Fettdruck wird genutzt, um wichtige Infos hervorzuheben, z.B.:

- Kontextwechsel zwischen Schritten
- Hostnames, Zugangsdaten & Benutzernamen
- Schlüsselbegriffe

Du kannst Text fett machen, indem du ihn mit doppelten Sternchen umgibst, z.B. `**hallo**` ergibt **hallo**.

#### Kursiv

Kursiv wird hauptsächlich genutzt, um neue technische Begriffe einzuführen, z.B. heute richten wir einen *Reverse Proxy* ein.

Kursiv machst du mit einem Sternchen, z.B. `*ZAP-Hosting - Mehr POWER!*` ergibt *ZAP-Hosting - Mehr POWER!*.

#### Inline-Code

Inline-Code wird genutzt, um technische Infos wie URLs darzustellen, z.B.:

- Dateinamen und Pfade (z.B. `C:/User/[dein_name]/AppData....test.png`)
- URLs (z.B. `https://zap-hosting.com`)
- Ports (z.B. `:30120`)
- Befehle (z.B. `ipconfig`)
- SQL-Abfragen (z.B. `SELECT * FROM servers`)
- Tastenkombinationen (z.B. `ENTER` oder `CTRL + C`)

#### Tabellen

Tabellen sind super, wenn du viele ähnliche Infos übersichtlich darstellen willst, z.B. Befehle, Beschreibungen und Nutzung in einem Spiel. Beispiel:

```
| Befehl      | Beschreibung            | Nutzung               |
| ----------- | ----------------------- | --------------------- |
| /help       | Hilfebefehl senden      | /help [Kategorie]     |
| /stop       | Server stoppen          | /stop [true/false]    |
```

#### Codeblöcke

Codeblöcke sind besonders nützlich für Guides mit Befehlen, Skripten, Terminal-Ausgaben usw.

Um einen Codeblock zu erstellen, setzt du ``` vor und nach dem Block. Du kannst auch die Programmiersprache angeben, z.B. ` ```js ` für JavaScript:

```js
function hello(name) {
    console.log(name)
}

var server = "ZAP-Hosting"
hello(server)
```

### Verwendung von Admonitions

Du kannst Admonitions nutzen, um bestimmte Infos hervorzuheben. Es gibt 5 Typen, die du mit folgendem Syntax nutzt (ersetze `note` durch den gewünschten Typ):

```
:::note
Das ist eine Notiz! Ersetze das Keyword, um den Typ zu ändern.
:::
```

#### Note

:::note Hinweis! (Optional)
Nutze diesen Tag für zusätzliche Hinweise, die nützlich, aber nicht zwingend wichtig sind.
:::

#### Tip

:::tip Tipp! (Optional)
Hier kannst du Tipps aus Erfahrung geben.
:::

#### Info

:::info Info! (Optional)
Wichtige Infos, die der Nutzer wissen sollte, kommen hier rein.
:::

#### Caution

:::caution Vorsicht! (Optional)
Wenn der Nutzer bei einem Schritt vorsichtig sein sollte, markiere das hier.
:::

#### Danger

:::danger Gefahr! (Optional)
Für kritische Infos, z.B. bekannte Bugs oder veraltete Features.
:::

### Screenshots

Screenshots sind super, um Schritte visuell zu zeigen. Wir empfehlen, sie dort einzusetzen, wo es Sinn macht.

Für den deutschen Bereich erwarten wir, dass du Screenshots sowohl in Englisch als auch in Deutsch machst, damit sie konsistent sind. Du kannst sie nebeneinander im Guide platzieren. Die deutschen Screenshots werden entfernt und von uns übersetzt, sobald der Guide ins Deutsche übertragen wird.

So fügst du einen Screenshot ein (ersetze `your_url` durch die Bild-URL):

```
![](your_url)
```

Am besten nutzt du Seiten wie Imgur zum Hochladen oder ziehst das Bild direkt ins GitHub-Editor-Feld, wenn du dort arbeitest – dann wird es automatisch hochgeladen.

## Terminologie

In unserer Dokumentation gibt es viele wichtige Begriffe, die wir einheitlich verwenden wollen. Wir erwarten, dass du US-Englisch für die Texte nutzt, um Konsistenz zu gewährleisten. Hier standardisieren wir einige häufig genutzte Begriffe.

### ZAP-Hosting Produkte

Wenn du ein ZAP-Hosting Produkt nennst, achte immer auf korrekte Schreibweise und Groß-/Kleinschreibung. Du kannst das auf der [ZAP-Hosting Webseite](https://zap-hosting.com) prüfen.

### Benutzerdefinierte Attribute

In den meisten Guides brauchst du Konfigurationsoptionen wie Nutzer, Hostnames, Domains, IP-Adressen oder URLs, bei denen der Leser seine eigenen Daten einsetzen muss.

Standardmäßig solltest du `[dein_attribut]` verwenden, um statische von individuellen Elementen zu unterscheiden. Ersetze `attribut` durch den Typ. Zum Beispiel bei einer IP: `[deine_server_ip]` oder bei einer URL: `http://[deine_server_ip]:30120`. So weiß der Leser klar, was er anpassen muss. Erkläre beim ersten Vorkommen, welche Attribute geändert werden müssen.

Als Standard für Hostname, Benutzername oder Datenbankname nutze `zaphosting`.

### Software

Wenn du Software nennst, achte auf korrekte Schreibweise und Groß-/Kleinschreibung. Wenn die Webseite der Software keine einheitliche Schreibweise hat, bleib innerhalb eines Artikels konsistent.

Verlinke beim ersten Erwähnen der Software auf die offizielle Webseite, falls vorhanden.