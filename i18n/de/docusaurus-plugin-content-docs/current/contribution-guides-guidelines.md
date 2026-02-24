---
id: contribution-guides-guidelines
title: Anleitung Richtlinien
description: "Entdecke, wie du konsistente, hochwertige Dokumentation erstellst, die das Leseerlebnis und die Klarheit verbessert → Jetzt mehr erfahren"
sidebar_label: Richtlinien
---

![Guides Banner](https://screensaver01.zap-hosting.com/index.php/s/4aaqq3zctZFW4JJ/preview)

Um sicherzustellen, dass die Inhalte unserer ZAP-Docs stets eine gleichbleibende Qualität und einen einheitlichen Stil haben, haben wir eine Reihe von Richtlinien erstellt, die beim Erstellen oder Bearbeiten von Inhalten für unsere Dokumentation zu beachten sind. Du **musst** unsere Richtlinien genau befolgen, damit dein Vorschlag und der finale Pull Request zügig bearbeitet werden können. Noch wichtiger ist, dass unsere Leser so ein besseres und konsistentes hochwertiges Erlebnis beim Lesen und Nachvollziehen der Anleitungen haben.

Unsere Richtlinien für Beiträge zu Anleitungen sind in folgende Abschnitte unterteilt:

- Struktur
- Stil
- Formatierung
- Terminologie

Wir empfehlen, diese Abschnitte mindestens einmal durchzulesen, bevor du mit dem Schreiben von Inhalten beginnst. Sie sind auch eine nützliche Referenz, falls du während des Erstellungsprozesses unsicher bist, wie du etwas angehen sollst.

## Struktur

Alle unsere Anleitungen in den ZAP-Docs folgen einer relativ einheitlichen Struktur, die mit einer kurzen Einführung inklusive eventueller Voraussetzungen oder Vorbereitungsschritte beginnt, gefolgt vom Hauptinhalt und einem kurzen Fazit.

Die Struktur kann je nach Art der Anleitung gelegentlich angepasst werden. Das kann im Vorschlagsprozess mit dem ZAP-Docs Team besprochen werden. Wie du Überschriften nutzt, kannst du im Abschnitt zu Headers sehen – das erfolgt ganz klassisch mit Markdown.

Die Struktur, die wir typischerweise erwarten, sieht folgende Überschriften vor:

- **Seitentitel** (H1) – Wird über die `title` Metadaten ganz oben auf der Seite gesetzt.
- **Einleitung** (H2) – Kurze 1-2 Sätze, die das Thema der Anleitung erklären und vor allem, was mit der Anleitung erreicht werden soll.
- **Vorbereitung** (H2) – Diese Überschrift ist **optional**. Sie wird nur benötigt, wenn es bestimmte Voraussetzungen oder Vorbereitungsschritte gibt, die der Leser erledigen muss, bevor er der Anleitung folgen kann. Zum Beispiel kannst du hier auf unsere [SSH Erster Zugriff](vserver-linux-ssh.md) Anleitung verweisen, falls sich der Nutzer zuerst auf seinem Server einloggen muss. Oder du listest Software- und/oder Hardwareanforderungen auf. Oder du gibst schnelle Anweisungen, wie man z.B. eine Firewall vorbereitet. Wir empfehlen, auf unserer [ZAP-Docs Webseite](https://zap-hosting.com/guides) nachzuschauen, ob es bereits Anleitungen gibt, die diese Schritte abdecken, und diese dann zu verlinken.
- **Hauptthema** (H2) – Das ist dein erster Hauptabschnitt der Anleitung. In vielen Fällen wird das wahrscheinlich **Installation** sein, gefolgt von verschiedenen Unterabschnitten für jeden Teil des Prozesses. Das muss aber nicht immer so sein, z.B. können Info-Anleitungen ein anderes Hauptthema haben.
- Optional: **Unterthema 1** (H3)
- Optional: **Unterthema 2** (H3)
- ...
- Optional: **Weiteres Thema** (H2)
- **Fazit** (H2) – Zum Abschluss der Anleitung solltest du in 1-3 Sätzen zusammenfassen, was der Leser erfolgreich erreicht hat und einen Hinweis auf unser Support-Team geben, falls noch Probleme bestehen.

:::info Nutzung von Unterüberschriften (H3 & H4)
Du bist ermutigt, H3 Überschriften zu verwenden, um innerhalb der Haupt-H2-Abschnitte weitere Unterabschnitte zu erstellen und so größere Inhaltsblöcke besser zu strukturieren. Ein Beispiel siehst du im Abschnitt **Hauptthema** oben.

Du kannst auch H4 Überschriften nutzen. Diese sind praktisch, wenn du noch eine weitere Unterteilung machen möchtest, ohne dass diese in der rechten Seitenübersicht der Anleitung angezeigt wird. Sie sind auch nützlich, wenn du einen H3 Abschnitt noch weiter in kleinere Abschnitte aufteilen willst.

Wenn du Unterüberschriften nutzt, macht es meist Sinn, mindestens zwei oder mehr Unterüberschriften innerhalb des übergeordneten Abschnitts zu haben. Nur eine einzelne Unterüberschrift innerhalb eines Hauptabschnitts zu haben, ergibt normalerweise keinen Sinn.
:::

In Zukunft werden wir Vorlagen hinzufügen, die dir vorgefertigtes Markdown bieten, was ein super Startpunkt für neue Seiten sein wird. Das kommt bald.

### Titel

Die Titel deiner Anleitung sollten kurz sein und sich am Gesamtziel der Anleitung orientieren. Überlege dir genau, was der Leser am Ende der Anleitung erreicht haben soll, z.B. eine Software zu installieren oder Informationen zu einem bestimmten Thema zu erhalten.

Der Titel sollte mit der Produktkategorie beginnen, zu der die Anleitung gehört – das ist auch der Bereich, in dem du die Anleitung in der Sidebar platzierst. Du kannst andere Anleitungen im gleichen Bereich anschauen, um deren Präfix zu sehen.

Ein gutes Beispiel für einen Titel einer Anleitung zum VPS-Produkt wäre: `VPS: SteamCMD Linux Setup`

### Einleitung

Die Einleitung deiner Anleitung sollte relativ kurz und prägnant sein, typischerweise 1-2 Sätze. Du solltest darin kurz das Thema beschreiben und vor allem erklären, was die Anleitung dem Leser vermitteln wird und welches Ziel erreicht wird.

Ein Beispiel für eine ideale Einleitung zu einer SteamCMD-Anleitung wäre:

- **1. Satz**: SteamCMD ist ein unverzichtbares Tool, das benötigt wird, um Dedicated Server für eine Vielzahl von Spielen wie Palworld, Enshrouded und mehr zu installieren.
- **2. Satz**: In dieser Anleitung zeigen wir dir den Erst-Setup-Prozess, um SteamCMD auf deinem Linux-Server zu installieren. Wir verwenden Ubuntu in den Beispielen, aber der Ablauf ist bei anderen Distributionen sehr ähnlich.

Wie im Beispiel siehst du, dass kurz die relevanten Themen der Anleitung zusammengefasst werden und das Gesamtziel für den Leser klar kommuniziert wird.

### Vorbereitung

Der Vorbereitungsabschnitt ist nützlich, um alle notwendigen Voraussetzungen zu klären, die der Leser erfüllen muss, bevor er der Anleitung folgen kann. Das können Software- oder Hardwareanforderungen sein, Anweisungen zur Vorbereitung von Software wie einer Firewall oder einfach eine Anleitung, wie man sich per SSH oder RDP auf seinem Server anmeldet.

Wir empfehlen dringend, auf unserer [ZAP-Docs Webseite](https://zap-hosting.com/guides) nachzuschauen, ob es bereits Anleitungen gibt, die Vorbereitungsschritte abdecken oder damit zusammenhängen. Wenn es eine passende Anleitung gibt, z.B. [SSH Erster Zugriff](vserver-linux-ssh.md), solltest du diese verlinken und den Leser bitten, dieser zuerst zu folgen.

Typische Voraussetzungen für Anleitungen sind:

- Benötigte Software (z.B. Git, Node.js, Python, Docker)
- Tutorials, die dem Leser Grundwissen vermitteln (z.B. andere ZAP-Docs Seiten)
- Benutzerkonten wie APIs
- Erforderliche Einstellungen (z.B. DNS/SSL)

Ein Beispiel für eine Reverse Proxy Anleitung wäre:
```
Um einen Reverse Proxy einzurichten, benötigst du einen Linux Server, auf dem dein Proxy läuft, und du solltest dich mit ihm verbinden können. Nutze unsere [SSH Erster Zugriff](vserver-linux-ssh.md) Anleitung, falls du dabei Hilfe brauchst. Außerdem benötigst du Zugriff auf eine Domain, die du besitzt. Für jede Subdomain, die du verwenden möchtest, solltest du einen `A` DNS-Eintrag anlegen, der auf die IP-Adresse deines Linux Servers zeigt.
```

### Hauptthema

Jetzt geht es an den Hauptteil deiner Anleitung. Du kannst gerne verschiedene H2, H3 und H4 Überschriften nutzen, um deine Anleitung sinnvoll zu strukturieren. Es macht Sinn, H2 Überschriften für große Abschnitte zu verwenden und diese dann mit H3 und/oder H4 Überschriften weiter zu unterteilen.

In vielen Fällen, besonders bei Anleitungen, die die Einrichtung von Software beschreiben, wirst du wahrscheinlich eine **Installation** Überschrift nutzen, die in verschiedene H3 Unterabschnitte aufgeteilt ist. Wenn du dir unsicher bist, wie die Struktur aussehen soll, keine Sorge – wir arbeiten mit dir im Vorschlagsprozess zusammen, um eine gut durchdachte Struktur zu planen.

Innerhalb jedes Abschnitts ist es sinnvoll, kurze Einstiegs- und Abschluss-Sätze einzufügen, damit der Leser immer weiß, was er bisher gemacht hat und was als Nächstes kommt. Natürlich gilt das nicht unbedingt für den letzten Hauptabschnitt, der kann direkt ins Fazit übergehen.

Beispiele für solche Übergangssätze sind:

- **Einstiegssatz**: In diesem Abschnitt wirst du die Konfiguration durchgehen, um die Software nach deinen Wünschen anzupassen.
- **Abschlusssatz**: Mit der vorbereiteten Konfiguration und der gespeicherten Datei geht es im nächsten Abschnitt weiter, um das Administrator-Konto einzurichten und die Software zu starten.

Diese Übergangssätze geben dem Leser wichtigen Kontext und sorgen für einen guten Lesefluss. Denk daran, immer die zweite Person Singular zu verwenden (z.B. „Du wirst erstellen“) und nicht die erste Person, wenn du deine Inhalte und Übergänge schreibst.

### Fazit

Zum Schluss kommt der Fazit-Abschnitt der Anleitung. Hier solltest du in 1-3 Sätzen zusammenfassen, was der Leser erfolgreich erreicht hat und auf weiterführende Anleitungen oder Themen verweisen, mit denen er sein Wissen vertiefen kann.

Es ist super, wenn du hier passende ZAP-Docs Anleitungen verlinkst, besonders wenn diese natürlich auf deine Anleitung aufbauen. Wir empfehlen außerdem, einen Hinweis auf unser Support-Team zu geben, falls der Leser noch Probleme hat.

Ein Beispiel für ein gutes Fazit ist:
```
Du hast die Software jetzt erfolgreich auf deinem Linux Server eingerichtet! Wir empfehlen dir, unsere Linux Service Anleitungen in diesem Bereich durchzuschauen, um weitere Dienste zu installieren.

Bei weiteren Fragen oder Problemen steht dir unser Support-Team täglich zur Verfügung – zögere nicht, sie zu kontaktieren! 🙂
```

## Stil

Der Schreibstil der ZAP-Hosting Docs basiert auf unserem Anspruch, hochwertige, praktische und leicht zugängliche Anleitungen zu bieten, die eine breite Themenpalette abdecken und Leser aller Erfahrungsstufen unterstützen.

### Technisch & korrekt

Unsere Artikel sollen so technisch korrekt und aktuell wie möglich sein und den neuesten Stand der Branche widerspiegeln. Wir erwarten, dass Artikel den Nutzer nicht nur zum Ziel führen, etwas Neues zu lernen, zu bauen oder einzurichten, sondern dass er auch versteht, was er dabei gemacht hat. Jeder Schritt in einer Anleitung sollte einen klaren Zweck und eine Erklärung haben, inklusive zusätzlicher Optionen und Flags, wo sinnvoll. Du solltest den Leser immer darüber informieren, was er gerade macht und warum.

Als Autor solltest du deine Anleitungen immer Korrektur lesen und testen, um sicherzustellen, dass alles technisch korrekt ist und wie vorgesehen funktioniert, bevor du einen Pull Request erstellst. Das ZAP-Hosting Docs Team wird deine Anleitung ebenfalls prüfen und testen, um Konsistenz und Faktencheck sicherzustellen oder Verbesserungen vorschlagen, falls Fehler gefunden werden.

:::tip
Wir empfehlen allen Autoren, ihre Inhalte vor dem Erstellen eines Pull Requests mit einem Rechtschreib- und Grammatik-Check zu prüfen. Ein nützliches Tool dafür ist: https://languagetool.org/
:::

### Praktisch & nützlich

Wenn ein Leser einen Artikel beendet hat, sollte er etwas gelernt, gebaut oder eingerichtet haben – von Anfang bis Ende. Unsere Anleitungen sollen Leser aller Erfahrungsstufen unterstützen, daher solltest du dein Thema umfassend behandeln und alle nötigen Details inklusive Voraussetzungen nennen. Als Autor solltest du Leser nur dann auf externe Webseiten verweisen, wenn es keine passende Dokumentation in den ZAP-Docs gibt oder wenn der Nutzer zusätzliche Infos sammeln kann, die für den Artikel nicht zwingend nötig, aber hilfreich sind, um technisches Wissen aufzubauen. Externe Links sollten nicht auf Konkurrenz-Dokumentationen verweisen.

### Freundlich, formell & umfassend

Wir wollen, dass unsere Dokumentation zukunftsorientiert und freundlich ist, damit sie für jeden Leser zugänglich ist, dabei aber formell bleibt. Im gesamten Text streben wir einen Ton an, der für alle Leser akzeptabel ist, unabhängig von Erfahrung oder Sprachkenntnissen.

Da diese Anleitungen primär den Leser unterstützen, etwas zu lernen und ein Ergebnis zu erreichen, erwarten wir, dass Autoren die zweite Person Singular verwenden (z.B. „Du musst...“) und nicht die erste Person (z.B. „Ich denke...“), um den Fokus auf den Leser zu halten.

Zuletzt müssen alle Autoren unseren Verhaltenskodex einhalten, damit unsere Anleitungen für alle offen und respektvoll sind – unabhängig von Alter, Herkunft, Geschlechtsidentität, Erfahrung, Nationalität, Religion, politischer Einstellung, sexueller Orientierung, sozialem Status oder Technologiepräferenzen. Vermeide bitte jegliche potenziell anstößige Sprache oder Inhalte, die sich auf diese Themen beziehen.

## Formatierung

Unsere Dokumentation wird mit der Markdown-Auszeichnungssprache formatiert, die weit verbreitet und relativ einfach zu nutzen ist. Schau dir die folgenden Abschnitte an, um zu verstehen, welche Features wir verwenden und wie.

:::tip
Für mehr Beispiele und ausführliche Erklärungen zu Markdown-Funktionen schau auf die [Markdown Guide](https://www.markdownguide.org/cheat-sheet/), die weitere Infos bietet.
:::

### Überschriften

Überschriften sind eines der wichtigsten Formatierungswerkzeuge, um Seiten logisch und übersichtlich zu gliedern. Der Haupttitel ist die H1-Überschrift, die du aber im Text eigentlich nie verwenden solltest. Stattdessen wird diese über die `title` Metadaten ganz oben in der Datei gesetzt.

In unseren Anleitungen sollten H2 Überschriften genutzt werden, um die Anleitung in Hauptabschnitte zu unterteilen. Danach nutzt du H3 Überschriften, um diese Hauptabschnitte in Unterabschnitte zu gliedern. Ein Beispiel wäre, einen Hauptabschnitt in mehrere Schritte aufzuteilen, damit die Anleitung leichter zu folgen ist. Es gibt auch eine H4 Überschrift, die seltener genutzt wird, aber ebenfalls zur Unterteilung dient, ohne dass sie in der Seitenübersicht angezeigt wird.

:::info
Wenn du Unterüberschriften nutzt (z.B. H3 unter H2), stelle bitte sicher, dass es mindestens zwei oder mehr Überschriften auf dieser Ebene innerhalb des Abschnitts gibt, sonst ist das eine falsche Nutzung.
:::

Hier ein schnelles Beispiel, wie Überschriften genutzt werden:

```
## Installation
H2 - Hauptabschnitt

### Game-Dateien herunterladen
H3 - Unterabschnitt von H2

#### Via SteamCMD
H4 - Unterabschnitt von H3

#### Manuell via GitHub
H4 - Unterabschnitt von H3

### Konfiguration vorbereiten
H3 - Unterabschnitt von H2

### Server starten
H3 - Unterabschnitt von H2
```

### Inline-Markdown

Wir nutzen verschiedene Inline-Formatierungen, um die Lesbarkeit unserer Anleitungen zu verbessern und Leser mit unterschiedlichen technischen Kenntnissen abzuholen. Lies dir den Abschnitt durch, um die Nutzung zu verstehen.

#### Fettdruck

Fettdruck wird hauptsächlich genutzt, um Informationen hervorzuheben. Beispiele sind:

- Kontextwechsel zwischen Schritten
- Hostnames, Zugangsdaten & Benutzernamen
- Wichtige Fachbegriffe

Du kannst einfach zwei Sternchen außen an den Text setzen, z.B. `**hallo zusammen**` ergibt **hallo zusammen**.

#### Kursiv

Kursiv wird hauptsächlich genutzt, um neue technische Schlüsselbegriffe einzuführen. Zum Beispiel: Wir richten heute einen *Reverse Proxy* ein.

Für Kursiv setzt du einfach einen Stern außen an den Text, z.B. `*ZAP-Hosting - Mehr POWER!*` ergibt *ZAP-Hosting - Mehr Power!*.

#### Inline-Code

Inline-Code wird vor allem genutzt, um technische Infos wie URLs darzustellen. Beispiele sind:

- Dateinamen und Pfade (z.B. `C:/User/[dein_name]/AppData....test.png`)
- URLs (z.B. `https://zap-hosting.com`)
- Ports (z.B. `:30120`)
- Befehle (z.B. `ipconfig`)
- SQL-Abfragen (z.B. `SELECT * FROM servers`)
- Tastenkombinationen (z.B. `ENTER` oder `CTRL + C`)

#### Tabellen

Tabellen sind super, wenn du viele sich wiederholende Infos darstellen willst, z.B. Befehle, Beschreibungen und Nutzungsmöglichkeiten in einem Spiel. Beispiel:

```
| Befehl      | Beschreibung            | Nutzung               |
| ----------- | ----------------------- | --------------------- |
| /help       | Hilfebefehl senden      | /help [Kategorie]     |
| /stop       | Server stoppen          | /stop [true/false]    |
```

#### Codeblöcke

Codeblöcke sind besonders nützlich für Anleitungen mit Befehlen, Skripten, Terminal-Ausgaben und mehr.

Um einen Codeblock zu erstellen, setzt du einfach ``` außen um den Textblock. Du kannst auch die Programmiersprache direkt nach den drei Backticks angeben, damit die Syntax hervorgehoben wird. Beispiel für JavaScript:

```js
function hello(name) {
    console.log(name)
}

var server = "ZAP-Hosting"
hello(server)
```

### Nutzung von Admonitions

In deinen Inhalten kannst du Admonitions nutzen, um bestimmte Infos hervorzuheben. Es gibt 5 mögliche Typen, die wir hier vorstellen.

Die Syntax ist immer gleich, du ersetzt nur das Schlüsselwort durch den gewünschten Typ. Beispiel:

```
:::note
Das ist eine Notiz! Ersetze das Schlüsselwort oben, um den Typ zu ändern.
:::
```

#### Note (Hinweis)

:::note Hinweis! (Optional)
Nutze diesen Tag, um zusätzliche Hinweise anzuzeigen, die nützlich, aber nicht direkt wichtig sind.
:::

#### Tip (Tipp)

:::tip Tipp! (Optional)
Hier kannst du Tipps aus Erfahrung platzieren.
:::

#### Info

:::info Info! (Optional)
Wichtige Informationen, die der Nutzer wissen sollte, kommen hier rein.
:::

#### Caution (Vorsicht)

:::caution Vorsicht! (Optional)
Gibt es etwas, vor dem der Nutzer während der Anleitung gewarnt werden sollte? Dann nutze diesen Tag.
:::

#### Danger (Gefahr)

:::danger Gefahr! (Optional)
Nutze diesen Tag, wenn du auf kritische Infos hinweisen willst, z.B. bekannte Bugs oder veraltete Features.
:::

### Screenshots

Screenshots sind super hilfreich, um Leser visuell durch die Schritte zu führen, und wir empfehlen, sie wo sinnvoll einzusetzen. Achte darauf, dass alle sichtbaren Inhalte in deinen Screenshots auf Englisch sind, da unsere Dokumentation auf Englisch verfasst ist und dieselben Screenshots auch für andere Sprachen genutzt werden. Screenshots sollten in ausreichend hoher Auflösung sein, damit alle Elemente gut lesbar sind. Vermeide kleine oder stark zugeschnittene Bilder.

Du kannst Screenshots so einfügen, ersetze `your_url` durch die Bild-URL:

```
![](your_url)
```

Am besten nutzt du Seiten wie Imgur, um Bilder hochzuladen und zu verlinken. Alternativ kannst du Bilder auch direkt in das Bearbeitungsfeld ziehen, wenn du auf GitHub arbeitest – dann werden sie automatisch hochgeladen.

## Terminologie

In unserer Dokumentation gibt es viele wichtige Fachbegriffe, die wir einheitlich verwenden wollen. Wir erwarten, dass du US-englische Schreibweise nutzt, um Konsistenz in allen Artikeln zu gewährleisten. In diesem Abschnitt standardisieren wir einige häufig genutzte Begriffe.

### ZAP-Hosting Produkte

Wenn du ein ZAP-Hosting Produkt erwähnst, achte immer auf korrekte Bezeichnung, Schreibweise und Groß-/Kleinschreibung. Du kannst das auf [der ZAP-Hosting Webseite](https://zap-hosting.com) prüfen, indem du schaust, wie das Produkt dort genannt wird.

### Nutzerdefinierte Attribute

In den meisten Anleitungen brauchst du Konfigurationsoptionen wie Nutzer, Hostnames, Domains, IP-Adressen und URLs, bei denen der Leser seine eigenen Daten anstelle unserer Platzhalter eintragen muss.

Standardmäßig solltest du immer `[dein_attribut]` verwenden, um statische von individuellen Elementen zu unterscheiden. `attribut` ersetzt du durch den Typ des Attributs. Beispiel: Bei einer IP schreibst du `[deine_server_ip]` oder bei einer URL `http://[deine_server_ip]:30120`. So ist klar, was der Leser anpassen muss. Erkläre oder weise beim ersten Auftreten darauf hin, welche Attribute geändert werden müssen.

Als Standard-Hostname, Benutzername oder Datenbankname solltest du `zaphosting` verwenden.

### Software

Wenn du Software in deinen Anleitungen erwähnst, achte auf korrekte Schreibweise und Groß-/Kleinschreibung des Software-Namens. Wenn die Webseite der Software keine einheitliche Großschreibung hat, nutze innerhalb eines Artikels immer dieselbe Schreibweise, um Konsistenz zu wahren.

Verlinke beim ersten Erwähnen der Software auf die offizielle Webseite, sofern vorhanden.