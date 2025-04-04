---
id: contribution-guides-guidelines
title: Richtlinien für Anleitungen
description: Richtlinien für den Abschnitt Anleitungen des ZAP-Hosting Beitragsprogramms - ZAP-Hosting.com Dokumentation
sidebar_label: Richtlinien
---

![Guides Banner](https://screensaver01.zap-hosting.com/index.php/s/4aaqq3zctZFW4JJ/preview)

Um sicherzustellen, dass die Inhalte in unserer ZAP-Docs immer einheitlich in Qualität und Stil sind, haben wir eine Reihe von Richtlinien erstellt, die bei der Erstellung oder Bearbeitung von Inhalten für unsere Dokumentation zu beachten sind. Du **musst** dich genau an unsere Richtlinien halten, um sicherzustellen, dass dein Vorschlag und dein finaler Pull Request zügig bearbeitet werden. Noch wichtiger ist jedoch, dass dies unseren Lesern ein besseres und konsistentes Qualitätserlebnis beim Lesen und Verfolgen der Anleitungen bietet.

Unsere Richtlinien für die Beiträge zu den Anleitungen lassen sich in die folgenden Abschnitte unterteilen:

- [Struktur](#struktur)
- [Stil](#stil)
- [Formatierung](#formatierung)
- [Terminologie](#terminologie)

Wir empfehlen, diese Abschnitte mindestens einmal durchzusehen, bevor du mit dem Schreiben von Inhalten beginnst. Es ist außerdem eine nützliche Anlaufstelle, wenn du dir nicht sicher bist, wie du etwas während des Erstellungsprozesses angehen sollst.

## Struktur

Alle unsere Anleitungen in unseren ZAP-Docs folgen einer relativ einheitlichen Struktur, die mit einer kurzen Einleitung sowie etwaigen Vorbereitungen und Voraussetzungen beginnt, gefolgt vom Hauptinhalt und einer kurzen Schlussfolgerung.

Je nach Art der erstellten Anleitung kann die Struktur gelegentlich geändert werden. Dies kann im Rahmen deines ersten Vorschlags mit dem ZAP-Docs-Team besprochen werden. Du kannst dir ansehen, wie du Überschriften über den Abschnitt [Titel](#titel) verwendest, dies geschieht durch herkömmliches Markdown.

Die Struktur, die wir typischerweise erwarten, würde die folgenden Überschriften umfassen:

- **Seitentitel** (H1) - Dieser wird über die Metadaten „Titel“ oben auf der Seite festgelegt.
- **Einleitung** (H2) - Kurze 1-2 Sätze, die das Thema der Anleitung erläutern und vor allem erklären, was mit der Anleitung erreicht werden soll.
- **Vorbereitung** (H2) - Diese Überschrift ist **optional**. Sie wird nur benötigt, wenn es bestimmte Voraussetzungen oder Vorbereitungsschritte gibt, die durchgeführt werden müssen, bevor der Leser der Anleitung folgen kann. Zum Beispiel könntest du hier auf unsere Anleitung [SSH-Erstzugang](vserver-linux-ssh.md) verweisen, wenn der Benutzer sich zuerst bei seinem Server einloggen muss. Oder du könntest alle erforderlichen Software- und/oder Hardware-Anforderungen angeben. Alternativ kannst du auch eine kurze Anleitung zur Vorbereitung einer Software, wie z.B. einer Firewall, bereitstellen. Wir raten dazu, unsere [ZAP-Docs-Website](https://zap-hosting.com/guides) zu durchsuchen, um zu sehen, ob es Anleitungen gibt, die diese Schritte abdecken, und wenn ja, auf diese zu verweisen.
- **Hauptthema** (H2) - Dies ist der erste Hauptabschnitt der Anleitung. In vielen Fällen wird dies wahrscheinlich **Installation** sein, gefolgt von verschiedenen Unterabschnitten für jeden Teil des Prozesses. Dies ist jedoch nicht immer der Fall, z. B. können Informationsanleitungen ein anderes Hauptthema haben.
- Optional: **Unterthema 1** (H3)
- Optional: **Unterthema 2** (H3)
- ...
- Optional: **Another Topic** (H2)
- **Abschluss** (H2) - Als letzter Teil der Anleitung solltest du in 1-3 Sätzen erklären, was der Leser erfolgreich erreicht hat und einen Verweis auf unser Support-Team geben, falls der Leser noch Probleme hat.

:::info Verwendung von Unterüberschriften (H3 & H4)
Wir empfehlen dir, H3-Überschriften zu verwenden, um Unterabschnitte innerhalb der H2-Hauptabschnitte zu erstellen und so größere Inhaltsblöcke in geordnete Abschnitte zu gliedern. Ein Beispiel hierfür ist der Abschnitt **Hauptthema** oben.

Du kannst auch H4-Überschriften verwenden. Diese sind nützlich, wenn du einen weiteren Unterabschnitt erstellen möchtest, ohne ihn auf der rechten Seite der Abschnittsgliederung eines Leitfadens anzuzeigen. Sie sind auch nützlich, wenn du einen H3-Abschnitt in noch kleinere Abschnitte aufteilen möchtest.

Wenn du Unterüberschriften verwendest, ist es in der Regel sinnvoll, mindestens zwei oder mehr Unterüberschriften innerhalb der übergeordneten Überschrift zu haben, andernfalls ist es normalerweise nicht sinnvoll, nur eine Unterüberschrift innerhalb einer Hauptüberschrift zu haben.
:::

In Zukunft werden wir Vorlagen mit vorbereiteten Markdown-Texten hinzufügen, die einen nützlichen Ausgangspunkt für die Erstellung neuer Seiten darstellen. Dies wird in Kürze hinzugefügt werden.

### Titel

Die Titel deiner Anleitung sollten kurz sein und sich auf das allgemeine Ziel der von dir geschriebenen Anleitung beziehen. Überlege dir genau, was der Leser am Ende der Anleitung erreichen soll, z. B. die Installation einer Software oder Informationen zu einem bestimmten Thema.

Dem Titel sollte die Produktkategorie vorangestellt werden, auf die sich die Anleitung bezieht, und das sollte auch der Ort sein, an dem du die Anleitung in der Sidebar platzierst. Du kannst ganz einfach andere Anleitungen im selben Bereich ansehen, um deren Präfix zu erkennen.

Ein Beispiel für einen guten Titel einer Anleitung, die sich auf das Produkt VPS bezieht wäre: `VPS: SteamCMD Linux-Einrichtung`.


### Einführung

Die Einleitung deiner Anleitung sollte relativ kurz und prägnant sein und in der Regel 1-2 Sätze umfassen. Im Inhalt solltest du darauf abzielen, das jeweilige Themengebiet kurz zu beschreiben und vor allem zu erklären, was die Anleitung dem Leser präsentiert und ihn über das Endziel informiert.

Ein Beispiel für eine ideale Einleitung für einen Leitfaden zum Thema SteamCMD wäre:

- **1. Satz**: SteamCMD ist ein unentbehrliches Tool, das für die Installation von dedizierten Servern für eine Vielzahl von Spielen wie Palworld, Enshrouded und anderen benötigt wird.
- **2. Satz**: In dieser Anleitung werden wir uns mit der erstmaligen Installation von SteamCMD auf einem Linux-Server beschäftigen. Wir werden in den Beispielen Ubuntu verwenden, aber der Prozess sollte für andere Distributionen sehr ähnlich sein.

Wie im Beispiel zu sehen, fasst es sowohl die relevanten Themen dieser Anleitung kurz zusammen als auch das Gesamtziel für den Leser, wenn er diese Anleitung erfüllt.

### Vorbereitung

Der Abschnitt „Vorbereitung“ ist nützlich, um alle notwendigen Voraussetzungen zu klären, die der Leser erfüllen muss, bevor er der Anleitung folgen kann. Dabei kann es sich um Software- oder Hardwareanforderungen handeln, um Anweisungen zur Vorbereitung einer Software wie einer Firewall oder einfach um eine Anleitung, wie man sich über SSH oder RDP auf dem Server anmeldet.

Wir raten dringend dazu, auf unserer [ZAP-Docs-Website](https://zap-hosting.com/guides) nach Anleitungen zu suchen, die sich auf die von dir geplanten Vorbereitungsschritte beziehen oder diese abdecken. Wenn es eine Anleitung gibt, die ein Thema abdeckt, zum Beispiel [SSH-Erstzugang](vserver-linux-ssh.md), solltest du die Anleitung verlinken und den Leser darauf hinweisen, ihr zu folgen, bevor du fortfährst.

Übliche Voraussetzungen für Anleitungen sind:

- Erforderliche Software (z. B. Git, Node.js, Python, Docker)
- Tutorials, die dem Leser helfen können, Grundkenntnisse zu erwerben (z. B. eine andere ZAP-Docs-Seite)
- Benutzerkonten wie z.B. APIs
- Erforderliche Einstellungen (z.B. DNS/SSL)

Ein Beispiel für einen Reverse Proxy Anleitung wäre dies:
```
Um einen Reverse Proxy einzurichten, benötigst du einen Linux-Server, auf dem dein Proxy-Server läuft und mit dem du dich verbinden solltest. Benutze unsere [SSH Erstzugang](vserver-linux-ssh.md) Anleitung, wenn du Hilfe dabei brauchst. Darüber hinaus benötigst du Zugang zu einer Domain, die du besitzt. Für jede Subdomain, die du verwenden möchtest, solltest du einen `A` DNS-Eintrag erstellen, der auf die IP-Adresse deines Linux-Servers zeigt.
```

### Hauptthema

Nun ist es an der Zeit, den Hauptteil deiner Anleitung zu schreiben. Du kannst gerne verschiedene H2, H3 und H4 Überschriften verwenden, um deine Anleitung angemessen zu strukturieren. Es wäre sinnvoll, H2-Überschriften für große Abschnitte zu verwenden und diese mit H3- und/oder H4-Überschriften in Unterabschnitte aufzuteilen.

In vielen Fällen, insbesondere bei Anleitungen, die sich mit der Einrichtung von Software befassen, wirst du wahrscheinlich eine Überschrift **Installation** verwenden, die in verschiedene H3-Unterabschnitte aufgeteilt ist. Wenn du Schwierigkeiten hast, eine korrekte Struktur zu finden, mach dir keine Sorgen, denn wir arbeiten mit dir in der Vorschlagsphase deines Beitrags zusammen, um eine abgerundete Struktur für deine Anleitung zu finden.

In der Regel empfiehlt es sich, innerhalb jedes Abschnitts kurze einleitende und abschließende Überleitungssätze einzufügen, damit der Leser jederzeit weiß, was er bisher getan hat und was er als nächstes tun wird. Dies gilt natürlich mit Ausnahme des letzten Hauptabschnitts, der nicht unbedingt eine abschließende Aussage erfordert, da dieser ganz natürlich in die Schlussfolgerung übergehen würde.

Ein Beispiel für eine solche Aussage ist:

- **Einstiegserklärung**: In diesem Abschnitt wirst du den Konfigurationsprozess durchlaufen, um die Software nach deinen Wünschen zu gestalten.
- **Schlussbemerkung**: Nachdem du die Konfiguration vorgenommen und die Datei gespeichert hast, kannst du im folgenden Abschnitt das Administratorkonto einrichten und die Software verwenden.

Durch diese Überleitungen erhält der Leser einen wichtigen Kontext, der für einen guten Fluss der Anleitung sorgt. Denke daran, dass du beim Schreiben deines Inhalts und der Übergänge immer die Zeitform der zweiten Person verwenden solltest (z. B. „Du wirst erstellen“) und nicht die erste Person.

### Abschluss

Der letzte Abschnitt ist der Abschluss der Anleitung. Dieser Abschnitt sollte die Anleitung in 1 bis 3 Sätzen abschließen, in denen erklärt wird, was der Leser erfolgreich erreicht hat und Verweise auf weiterführende Lektüre oder Anleitungen enthalten, mit denen der Leser sein Wissen über das Thema erweitern kann. 

Es wäre gut, hier auf bestehende ZAP-Docs-Anleitungen zu verweisen, vor allem, wenn diese natürlich an deine Anleitung anknüpfen. Wir empfehlen auch einen Verweis auf unser Support-Team, falls der Leser noch Probleme hat.

Ein Beispiel für einen guten Abschluss ist:
```
Du hast nun erfolgreich die Software auf deinem Linux-Server eingerichtet! Wir empfehlen dir, unsere Linux-Service-Anleitungen in diesem Abschnitt zu lesen, um weitere Dienste zu installieren.

 Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂
```

## Stil

Der Schreibstil der ZAP-Hosting-Dokumente folgt unserer Überzeugung, qualitativ hochwertige, praktische und leicht zugängliche Anleitungen zu erstellen, die ein breites Spektrum an Themen abdecken und Leser aller Erfahrungsstufen zu unterstützen. 

### Technisch & korrekt

Unsere Artikel sollen technisch so genau wie möglich und auf dem neuesten Stand der Industrieinformationen sein. Wir erwarten, dass der Nutzer in den Artikeln nicht nur das Ziel erreicht, etwas Neues zu lernen, zu bauen oder einzurichten, sondern auch zu lernen und zu verstehen, was er während des Artikels getan hat. Jeder Schritt, den du als Verfasser einer Anleitung machst, sollte einen klaren Zweck und eine klare Erklärung haben und gegebenenfalls zusätzliche Optionen und/oder Markierungen enthalten. Du solltest den Leser immer darüber auf dem Laufenden halten, was er tut und warum er die Aktionen, die Teil der Anleitung sind, durchführt.

Verfasser sollten ihre Anleitungen immer Korrektur lesen und testen, um sicherzustellen, dass alles technisch korrekt ist und wie beabsichtigt funktioniert, bevor sie einen Pull Request einreichen. Das ZAP-Hosting Docs Team wird deine Anleitung durchlesen und testen, um sicherzustellen, dass sie konsistent und sachlich korrekt ist oder um Verbesserungen zu besprechen, wenn ein Fehler festgestellt wird.

:::tip
Wir empfehlen unseren Verfassern immer, Ihren Inhalt durch ein Rechtschreibprüfungstool zu prüfen, um sicherzustellen, dass die Rechtschreibung korrekt ist, bevor Sie einen Pull Request erstellen. Eine nützliche Website dafür ist: https://languagetool.org/
:::


### Praktisch & hilfreich

Wenn ein Leser einen Artikel beendet hat, sollte er von Anfang bis Ende etwas gelernt, gebaut oder eingerichtet haben. Unsere Anleitungen zielen darauf ab, Leser aller Erfahrungsstufen zu unterstützen. Daher sollten deine Beiträge das jeweilige Thema umfassend behandeln, um sicherzustellen, dass der Leser etwas lernt und/oder etwas erreicht hat. Das bedeutet, dass du als Verfasser dein Thema gründlich behandeln musst, indem du alle notwendigen Details, einschließlich der Voraussetzungen, erwähnst. Als Verfasser solltest du die Leser nur dann auf externe Websites verweisen, wenn es in der ZAP-Docs keine Dokumentation zu diesem Thema gibt, oder wenn es darum geht, dass der Benutzer zusätzliche Details erfährt, die für deinen Artikel nicht erforderlich sind, aber für den Aufbau seines technischen Wissens von Nutzen sein können. Externe Links sollten nicht auf Dokumentationen von Wettbewerbern verweisen.


### Freundlich, formal & verständlich

Wir erwarten, dass unsere Dokumentation zukunftsorientiert und freundlich ist, damit sie für jeden Leser zugänglich ist, aber gleichzeitig formell bleibt. Wir möchten, dass der Ton unserer Anleitungen für alle Leser akzeptabel ist, unabhängig von ihrer Erfahrung oder bestehenden Sprachbarrieren.

Da diese Anleitungen in erster Linie darauf abzielen, den Leser zu unterstützen und ihm zu ermöglichen, ein Ergebnis zu erzielen, erwarten wir von den Verfassern, dass sie in der zweiten Person (z. B. „ Du musst...“) und nicht in der ersten Person (z. B. „Ich denke...“) schreiben, um den Leser bei der Sache zu halten und den Fokus auf ihn zu richten.

Abschließend müssen alle Verfasser unseren Verhaltensrichtlinien folgen, um sicherzustellen, dass unsere Anleitungen für jeden akzeptabel sind, unabhängig von Alter, ethnischer Zugehörigkeit, Geschlechtsidentität, Erfahrungsgrad, Nationalität, Religion, politischer Zugehörigkeit, sexueller Orientierung, sozioökonomischem Status oder technologischer Wahl. Du musst jede potenziell beleidigende Sprache und jeden anderen Inhalt, der sich auf die oben genannten Themen bezieht, vermeiden.

## Formatierung

Unsere Dokumentation ist in der Markdown-Auszeichnungssprache formatiert, die weit verbreitet und relativ einfach zu verwenden ist. In den folgenden Abschnitten erfährst du, welche Sprache wir verwenden und wie sie genutzt wird.

:::tip
Weitere Beispiele und ausführliche Erklärungen zu den Funktionen von Markdown findest du in der [Markdown Anleitung](https://www.markdownguide.org/cheat-sheet/), die weitere Informationen enthält.
:::

### Überschriften

Überschriften sind eine der wichtigsten Formatierungsoptionen, um die Seiten übersichtlich und logisch zu trennen. Der Haupttitel besteht aus der H1-Überschrift, die Sie jedoch niemals im Text verwenden sollten. Stattdessen solltest du die Metadaten `title` am Anfang der Anleitung verwenden, die dafür zuständig sind. 

In allen unseren Anleitungen sollten H2-Überschriften verwendet werden, um die Anleitung in ihre Hauptabschnitte zu unterteilen. Anschließend sollten H3-Kopfzeilen verwendet werden, um die Hauptabschnitte in Unterabschnitte zu unterteilen. Ein Beispiel für eine solche Aufteilung ist die Aufteilung eines Hauptabschnitts in mehrere Schritte, um das Verfolgen der Anleitung zu erleichtern. Schließlich gibt es noch ein H4-Tag, das in unserer Dokumentation seltener verwendet wird, aber dem gleichen Zweck der Aufteilung in Unterabschnitte dient, aber nicht speziell in der Anleitungsstruktur angezeigt wird.

:::info
Wenn du Unterüberschriften verwendest (z.B. H3-Überschriften unter H2-Hauptüberschriften), vergewissere dich bitte, dass es zwei oder mehr Überschriften der gleichen Ebene innerhalb des Abschnitts gibt, sonst wäre dies eine falsche Verwendung.
:::

Hier ist ein kurzes Beispiel für die Verwendung von Überschriften:

```
## Installation
H2 - Hauptabschnitt

### Herunterladen von Spieldateien
H3 - Unterabschnitt von H2

#### Über SteamCMD
H4 - Unterabschnitt von H3

#### Manuell über GitHub
H4 - Unterabschnitt von H3

### Konfiguration vorbereiten
H3 - Unterabschnitt von H2

### Server starten
H3 - Unterabschnitt von H2
```

### Inline markdown

Wir verwenden eine Reihe von Inline-Formatierungen, um die Lesbarkeit unserer Docs-Beiträge zu verbessern und Leser mit unterschiedlichen technischen Kenntnissen anzusprechen. Bitte lese den folgenden Abschnitt durch, um die Verwendung der einzelnen Formatierungen zu verstehen.


#### Fettgedruckter Text

Der Hauptverwendungszweck von fettgedrucktem Text ist die Hervorhebung von Informationen. Beispiele hierfür sind:

- Änderung des Kontexts zwischen den Schritten
- Hostnamen, Berechtigungsnachweise und Benutzernamen
- Wichtige Terminologie

Du kannst einfach ein doppeltes Sternchen außerhalb des Zieltextes verwenden, um den Text fett zu machen, z. B. ergibt `**Hallo dort**` **Hallo dort**.

#### Kursivschrift

Die kursive Schrift dient in erster Linie dazu, neue technische Schlüsselwörter in deinem Beitrag einzuführen. Zum Beispiel: Wir werden heute einen *Reverse Proxy* einrichten.

Um Kursivschrift zu verwenden, musst du einfach ein einzelnes Sternchen außerhalb des Zieltextes platzieren, z. B. `*ZAP-Hosting - More POWER!*` ergibt *ZAP-Hosting - More Power!*.

#### Inline code

Die Inline-Code-Formatierung wird in erster Linie zur Anzeige technischer Informationen wie URLs verwendet. Eine umfangreichere Liste von Beispielen umfasst:

- Dateinamen und -pfade (z. B. `C:/Benutzer/[IhrName]/AppData....test.png`)
- URLs (z. B. `https://zap-hosting.com`)
- Ports (z. B. `:30120`)
- Befehle (z.B. `ipconfig`)
- SQL-Abfragen (z. B. `SELECT * FROM servers`)
- Tastenkombinationen und Tastendrücke (z.B. `ENTER` oder `CTRL + C`)

#### Tabellen

Eine weitere nützliche Funktion von Markdown sind Tabellen. Diese können besonders nützlich sein, wenn du eine große Menge an sich wiederholenden Informationen anzeigen musst, zum Beispiel die Befehle, Beschreibungen und Verwendungen, die in einem Spiel verfügbar sind. Nachfolgend ein Beispiel für die Verwendung von Tabellen:

```
| Befehl | Beschreibung | Verwendung |
| ----------- | ------------------------ | --------------------- |
| /help | Sendet Hilfebefehl | /help [Kategorie] |
| /stop | Stoppt den Server | /stop [true/false] |
```

#### Code-Blöcke

Ein weiteres sehr nützliches Markdown-Formatierungstool sind Codeblöcke. Diese sind besonders nützlich für Anleitungen, die die Verwendung von Befehlen, Skripten, Terminalausgaben und mehr beinhalten. 

Um einen Codeblock zu verwenden, setze einfach das Zeichen `` ```` außerhalb des Textblocks ein, den du in einen Block setzen möchtest. Du kannst auch die Sprache neben dem ersten Satz von dreifachen Anführungszeichen angeben, um die Programmiersprache richtig zu formatieren. Nachfolgend ein Beispiel für die Verwendung von Codeblöcken unter Verwendung von ```js` für die Sprache JavaScript.


```js
function hallo(name) {
    console.log(name)
}

var server = "ZAP-Hosting"
hallo(server)
```

### Nutzung von Admonitions

Innerhalb deines Inhalts kannst du entscheiden, eine Admonition zu verwenden, um bestimmte Informationen unter einer der 5 möglichen Bezeichnungen hervorzuheben, die im Folgenden erläutert werden.

Die Syntax für die Verwendung jeder Admonition ist dieselbe: Ersetze das Schlüsselwort durch den Typ, den du verwenden möchtest. Hier ist ein Beispiel für die Verwendung:

```
:::note
Dies ist eine Notiz! Ersetze das obige Schlüsselwort, um den Typ zu ändern.
:::
```

#### Note

:::note Notiz Titel! (Optional)
Du solltest dieses Tag verwenden, um zusätzliche Notizen anzuzeigen, die zwar nützlich, aber nicht direkt wichtig sind.
:::

#### Tip

:::tip Tipp Titel! (Optional)
Füge alle Tipps, die du aus Erfahrung hast, in dieses Feld ein.
:::

#### Info

:::info Info Titel! (Optional)
Wenn es wichtige Informationen gibt, die der Benutzer wissen sollte, platzieren diese in diesem Tag.
:::

#### Caution

:::caution Achtung Titel! (Optional)
Gibt es in deiner Anleitung etwas, wovor der Benutzer gewarnt werden sollte und worauf er achten sollte, wenn er der Anleitung folgt? Dann verwende diesen Tag, um es hervorzuheben.
:::

#### Danger

:::danger Gefahrentitel! (Optional)
Du solltest die Gefahrenwarnung verwenden, wenn wichtige Informationen hervorgehoben werden müssen. Insbesondere sollte dies verwendet werden, um den Benutzer auf bekannte Fehler oder veraltete Funktionen aufmerksam zu machen.
:::

### Screenshots

Screenshots sind eine äußerst nützliche Methode, um die Leser visuell durch die Schritte zu führen und wir empfehlen diese unbedingt zu verwenden, wo es angebracht ist.

Um den deutschen Abschnitt zu berücksichtigen, erwarten wir, dass du beim Erstellen eines Screenshots sowohl eine englische als auch eine deutsche Version hinzufügst, um sicherzustellen, dass die Screenshots konsistent sind. In deiner Anleitung kannst du sie direkt hintereinander platzieren. Die deutschen Screenshots werden entfernt und verwendet, sobald das ZAP-Docs-Team deinen Beitrag übersetzt hat.

Du kannst die folgende Syntax verwenden, um einen Screenshot zu deinem Inhalt hinzuzufügen, indem du „deine_url“ durch die URL des Bildes ersetzt:
```
![]( deine_url)
```

Am besten verwendest du eine Website wie Imgur, um das Bild hochzuladen und zu verwenden. Alternativ kannst du es auch direkt in das Bearbeitungsfeld ziehen, wenn du die GitHub-Website zum Erstellen deiner Inhalte verwendest, um es automatisch für dich hochzuladen.

## Terminologie

Bei unseren Dokumentation  wird eine breite Palette von Schlüsselbegriffen verwendet. Wir erwarten von dir, dass du in deinem Blogbeitrag die US-englische, lokalisierte Schreibweise verwendest, um die Konsistenz in allen unseren Blogbeiträgen zu gewährleisten. In diesem Abschnitt möchten wir einige der wahrscheinlich am häufigsten verwendeten Begriffe vereinheitlichen.


### ZAP-Hosting Produkte

Wenn du dich auf ein ZAP-Hosting Produkt beziehst, solltest du immer sicherstellen, dass der richtige Name, die richtige Schreibweise und die richtige Großschreibung verwendet werden. Um dies zu überprüfen, gehe auf die [ZAP-Hosting-Website](https://zap-hosting.com) und schaue nach, wie das Produkt auf der entsprechenden Produktseite genannt wird.

### Benutzerdefinierte Attribute

In einigen Anleitungen können Konfigurationsoptionen für Elemente wie Benutzer, Hostnamen, Domänen, IP-Adressen und URLs erforderlich sein, wobei der Leser seine eigenen Angaben anstelle unserer Platzhalter verwenden muss.

Standardmäßig solltest du immer `[dein_Attribut]` verwenden, um zwischen statischen Elementen und eindeutigen Elementen zu unterscheiden, wobei `[Attribut]` durch die Art des Attributs ersetzt werden sollte. Wenn du zum Beispiel eine IP-Adresse nennst, solltest du `[deine_server_ip]` in deinem Blogpost angeben, oder wenn du eine URL nennst, solltest du `http://[deine_server_ip]:30120` angeben. Dadurch werden die Attribute, die der Leser aufgrund seiner eigenen Konfiguration ändern muss, klar unterschieden. Außerdem solltest du dem Leser bei der ersten Erwähnung des Blogposts eine Erklärung oder einen Hinweis geben, welche Attribute er ändern muss, um sicherzustellen, dass alles verstanden wird.

Du solltest `zaphosting` als Standard-Hostname, -Benutzername oder -Datenbankname verwenden.

### Software

Wenn du in deiner Anleitung Software erwähnst, solltest du sicherstellen, dass du die korrekte Schreibweise und Großschreibung für den Namen der Software einhältst. Wenn die Software-Website die Groß- und Kleinschreibung nicht einheitlich handhabt, solltest du darauf achten, dass du innerhalb eines Artikels dieselbe Groß- und Kleinschreibung verwendest, um die Konsistenz zu wahren.

Wenn du die Software zum ersten Mal erwähnst, solltest du einen Hyperlink zur Website der Software setzen, sofern eine offizielle Website vorhanden ist.