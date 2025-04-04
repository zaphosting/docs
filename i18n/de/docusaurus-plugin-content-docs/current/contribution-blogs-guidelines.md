---
id: contribution-blogs-guidelines
title: Blog Richtlinien
description: Richtlinien für den Bereich Blogs des ZAP-Hosting Beitragsprogramms - ZAP-Hosting.com Dokumentation
sidebar_label: Richtlinien
---

![Blogs Banner](https://screensaver01.zap-hosting.com/index.php/s/ysxLZ26K3dSRLJQ/preview)

Um sicherzustellen, dass alle ZAP-Hosting-Blogbeiträge in Qualität und Stil einheitlich sind, haben wir eine Reihe von Richtlinien erstellt, die du bei der Erstellung von Inhalten für unser Blogbeitragsprogramm beachten solltest. Du musst unsere Richtlinien genau befolgen, um sicherzustellen, dass deine Vorschläge und nachfolgenden Entwürfe zügig bearbeitet werden. Noch wichtiger ist jedoch, dass du damit sicherstellst, dass unsere Leser eine bessere und einheitlichere Erfahrung beim Lesen unseres Blogs haben werden.

Unsere Blogbeitragsrichtlinien lassen sich in mehrere Hauptabschnitte unterteilen und umfassen folgende Punkte:

- [Struktur](#struktur)
- [Stil](#stil)
- [Formatierung](#formatierung)
- [Terminologie](#terminologie)

## Struktur

Unsere Blog-Beiträge in unserem Beitragsprogramm sollten einer relativ einheitlichen Struktur folgen, die das Interesse der Leser weckt und ihnen Informationen und Neuigkeiten bietet. Das ZAP-Beitragsteam wird mit dir zusammenarbeiten, um sicherzustellen, dass deine Struktur beim Erstellen eines Blogvorschlags passend ist.

- **Seitentitel** (H1)
- **Einleitung** (H2)
- **Vorbereitung** (H2)
- **Hauptthema** (H2)
- Optional: **Unterthema 1** (H3)
- Optional: **Unterthema 2** (H3)
- ...
- Optional: **Weiteres Thema** (H2)
- **Abschluss** (H2)

:::info Verwendung von Unterüberschriften (H3 & H4)
Wir fordern dich auf, H3-Überschriften zu verwenden, um Unterabschnitte innerhalb der H2-Hauptabschnitte zu erstellen und so größere Inhaltsblöcke in geordnete Abschnitte zu gliedern. Ein Beispiel hierfür ist der Abschnitt **Hauptthema** oben.

Wenn du Unterüberschriften verwendest, ist es in der Regel sinnvoll, mindestens zwei oder mehr Unterüberschriften innerhalb der übergeordneten Überschrift zu haben, andernfalls macht es normalerweise keinen Sinn, nur eine Unterüberschrift innerhalb einer Hauptüberschrift zu haben.
:::

:::info
Bitte beachte, dass die obigen Angaben nur eine grobe Orientierung sind. Der Hauptteil deines Blogeintrags kann verschiedene Überschriften haben, je nachdem, was für deinen Inhalt angemessen ist, aber alle Blogeinträge sollten einheitlich einen Titel, eine Einleitung und eine Schlussfolgerung haben, die den Hauptinhalt umgeben.
:::

### Titel

Der Titel deines Blogbeitrags sollte kurz, klar und prägnant sein, um die Aufmerksamkeit des Lesers zu wecken. Er sollte genau angeben, worum es in deinem Blogbeitrag geht, z.B. ob es sich um Neuigkeiten oder Tipps und Ratschläge handelt. Ein Beispiel für einen guten Titel wäre: **Top 10 FiveM Police Scripts**.

### Einführung

Einleitungen für deinen Blogbeitrag sollten relativ kurz und prägnant sein und in der Regel 1-2 Sätze umfassen. Im Inhalt solltest du darauf abzielen, den jeweiligen Themenbereich kurz zu beschreiben und vor allem zu erklären, was der Blogbeitrag dem Leser vermittelt und ihn über das Ziel zu informieren.

Ein Beispiel für eine ideale Einleitung für einen Blogbeitrag zum Thema SteamCMD wäre:

- **1. Satz**: SteamCMD ist ein unverzichtbares Tool, das für die Installation von dedizierten Servern für eine Vielzahl von Spielen wie Palworld, Enshrouded und viele mehr benötigt wird.
- **2. Satz**: In diesem Blogbeitrag werden wir uns mit der erstmaligen Installation von SteamCMD auf einem Linux-Server beschäftigen. Wir werden in den Beispielen Ubuntu verwenden, aber der Prozess sollte für andere Distributionen sehr ähnlich sein.

Wie im Beispiel zu sehen, umfasst es kurz sowohl die relevanten Themen dieses Blogbeitrags als auch das allgemeine Ziel für den Leser bei der Ausführung dieses Blogbeitrags.

### Vorbereitung

Der Abschnitt „Vorbereitung“ ist nützlich, um alle notwendigen Voraussetzungen zu klären, die der Leser erfüllen muss, bevor er dem Blogbeitrag folgen kann. Dabei kann es sich um Software- oder Hardware-Anforderungen handeln, um Anweisungen zur Vorbereitung einer Software wie einer Firewall oder einfach um die Anleitung, wie man sich über SSH oder RDP auf dem Server anmeldet.

Wir raten dringend dazu, auf unserer [ZAP-Docs-Website] (https://zap-hosting.com/guides) nach Anleitungen zu suchen, die sich auf die von dir geplanten Vorbereitungsschritte beziehen oder diese abdecken. Wenn es eine Anleitung gibt, die ein Thema abdeckt, z. B. [SSH-Erstzugang](vserver-linux-ssh.md), solltest du die Anleitung verlinken und den Leser darauf hinweisen, ihr zu folgen, bevor du fortfährst.

Übliche Voraussetzungen für Blog-Beiträge sind:

- Erforderliche Software (z. B. Git, Node.js, Python, Docker)
- Tutorials, die dem Leser helfen können, Grundkenntnisse zu erwerben (z. B. eine andere ZAP-Docs-Seite)
- Benutzerkonten wie z.B. APIs
- Erforderliche Einstellungen (z.B. DNS/SSL)

Ein Beispiel für einen Reverse-Proxy-Blogpost wäre:

```
Um einen Reverse-Proxy einzurichten, benötigst du einen Linux-Server, auf dem dein Proxy-Server gehostet wird, und du solltest dich mit ihm verbinden. Benutze unsere [SSH Initial Access](vserver-linux-ssh.md) Anleitung, wenn du Hilfe dabei brauchst. Du benötigst auch Zugang zu einer Domain, die dir gehört. Für jede Subdomain, die du verwenden willst, solltest du einen `A` DNS-Eintrag erstellen, der auf die IP-Adresse deines Linux-Servers verweist.
```


### Hauptthema

Nun ist es an der Zeit, den Hauptteil deines Blogbeitrags zu schreiben. Wir empfehlen, den Blogbeitrag in mehrere Abschnitte aufzuteilen, damit sich der Leser mit dem Inhalt beschäftigen kann. Es gibt keine strikten Vorgaben für die Aufteilung, aber als allgemeine Faustregel solltest du versuchen, große Mengen an Inhalt in einige wenige Überschriften aufzuteilen. Das ZAP-Beitragsteam hilft dir während des gesamten Prozesses dabei.

Wenn dein Blogbeitrag Schritt-für-Schritt-Informationen oder Anleitungen enthält, ist es sinnvoll, die Nummer des Schritts und eine kurze Beschreibung des Schritts in der Überschrift des Hauptthemas anzugeben, z. B. **Schritt 1 - Erstellen des Ordners**. Du solltest kurz beschreiben, was der Leser in dem Schritt tut, um im ersten Satz ein Gesamtziel zu nennen. Zwischen den einzelnen Schritten solltest du eine kurze Einleitung und eine abschließende Überleitung formulieren, um den Leser darüber zu informieren, was er bisher getan hat und was in den folgenden Schritten geschehen wird. Diese Übergänge bieten dem Leser einen wichtigen Kontext. Versuche Wiederholungen zu vermeiden und verwende eine Auswahl an Begriffen, um Wiederholungen von Schritten zu vermeiden.

### Abschluss

Der letzte Abschnitt ist die Schlussfolgerung des Blogbeitrags. Dieser Abschnitt sollte die Anleitung in 1-3 Sätzen abschließen, in denen erklärt wird, was der Leser erfolgreich erreicht oder gelernt hat oder um eine informative Anleitung abzuschließen. 

Es wäre auch sinnvoll, Verweise auf weiterführende Literatur oder andere Blogeinträge oder Anleitungen zu geben, denen der Benutzer folgen kann, um sein Wissen über das Thema zu erweitern. Du solltest hier auf bestehende ZAP-Docs- Anleitungen oder Blog-Beiträge verlinken, insbesondere dann, wenn diese natürlich an deine Anleitung anknüpfen.

## Stil

Der Schreibstil für die ZAP-Hosting-Dokumente folgt unserer Überzeugung, qualitativ hochwertige, praktische und leicht zugängliche Blog-Beiträge zu verfassen, die ein breites Spektrum an Themen abdecken und Leser mit unterschiedlichem Erfahrungsstand ansprechen. 

### Technisch & korrekt

Unsere Blog-Beiträge sollen technisch so genau wie möglich sein und die neuesten Brancheninformationen enthalten. In jedem Blogbeitrag erwarten wir, dass die Leser gut geschriebene und qualitativ hochwertige Informationen zu neuen Themen und Technologien sowie Anleitungen erhalten, die sich darauf konzentrieren, dem Leser neue Informationen zu vermitteln. Wenn dein Blogbeitrag schrittweise Informationen oder Anleitungen enthält, sollte jeder Schritt einen klaren Zweck und eine klare Erklärung haben und gegebenenfalls zusätzliche Optionen und/oder Markierungen enthalten.

Verfasser sollten ihre Blogeinträge stets Korrektur lesen und testen, um sicherzustellen, dass alles technisch korrekt ist und wie beabsichtigt funktioniert, bevor sie den Entwurf einreichen. Das ZAP-Beitragsteam wird deinen Blogbeitrag durchlesen und prüfen, um sicherzustellen, dass er konsistent und sachlich korrekt ist, oder um Verbesserungen zu besprechen, wenn ein Fehler festgestellt wird.

:::tip
Wir empfehlen unseren Schreibern immer, Ihren Inhalt durch ein Rechtschreibprüfungstool zu prüfen, um sicherzustellen, dass die Rechtschreibung korrekt ist, bevor der Entwurf eingereicht wird. Eine nützliche Website hierfür ist: https://languagetool.org/
:::


### Praktisch & hilfreich

Wenn ein Leser einen Blogbeitrag zu Ende gelesen hat, sollte er von Anfang bis Ende etwas gelernt, aufgebaut oder eingerichtet haben. Unsere Blog-Beiträge zielen darauf ab, Leser aller Erfahrungsstufen zu unterstützen. Daher sollte der Inhalt deines Blogbeitrags das jeweilige Thema umfassend behandeln, um sicherzustellen, dass der Leser Wissen erlangt und/oder etwas erreicht hat. Für dich als Autor bedeutet das, dass du dein Thema gründlich behandeln und alle notwendigen Details und gegebenenfalls auch Voraussetzungen angeben musst. Du solltest die Leser nur dann auf externe Websites verweisen, wenn es in den ZAP Docs keine Dokumentation zu diesem Thema gibt oder wenn es dem Leser ermöglicht werden soll, zusätzliche Details zu sammeln, die für deinen Artikel nicht erforderlich sind, aber für den Aufbau seines technischen Wissens von Nutzen sein können. Externe Links sollten nicht auf Dokumentationen von Wettbewerbern verweisen.

### Freundlich, formal & verständlich

Wir erwarten, dass unsere Dokumentation zukunftsorientiert und freundlich ist, damit sie für jeden Leser zugänglich ist, aber gleichzeitig formell bleibt. In deinem Blogbeitrag solltest du darauf achten, dass dein Schreibstil für alle Leser akzeptabel ist, unabhängig von ihrer Erfahrung oder bestehenden Sprachbarrieren.

Da es sich um Blog-Beiträge handelt, die in erster Linie darauf abzielen, den Leser zu unterstützen, sich weiterzubilden und ihm zu ermöglichen, ein Ergebnis zu erzielen, erwarten wir von den Autoren, dass sie in der zweiten Person (z. B. „ Du musst...“) und nicht in der ersten Person (z. B. „Ich denke...“) schreiben, um den Leser bei der Sache zu halten und den Fokus auf ihn zu richten.

Abschließend müssen alle Autoren unseren Verhaltensrichtlinien folgen, um sicherzustellen, dass unsere Blog-Beiträge für jeden akzeptabel sind, unabhängig von Alter, ethnischer Zugehörigkeit, Geschlechtsidentität, Erfahrungsgrad, Nationalität, Religion, politischer Zugehörigkeit, sexueller Orientierung, sozioökonomischem Status oder technologischer Wahl. Du musst jede potenziell beleidigende Sprache und jeden anderen Inhalt, der sich auf die oben genannten Themen bezieht, vermeiden.

## Formatierung

Unser Blog ist mit der weit verbreiteten Auszeichnungssprache Markdown formatiert. In den folgenden Abschnitten erfährst du, welche Elemente wir verwenden und wie sie in deinen Blogbeiträgen eingesetzt werden können.

Wir erlauben den Nutzern, beliebige Schreibprogramme für die Erstellung ihrer Inhalte zu verwenden. Wir empfehlen jedoch, das Tool **[StackEdit](https://stackedit.io/app#)** zu verwenden, um deine Inhalte zu schreiben und gleichzeitig die großartigen Funktionen von Markdown zu nutzen. Du kannst diese dann direkt in dein Google Drive oder eine andere Anwendung zur Dateifreigabe exportieren und erhältst einen Link, den du mit uns teilen kannst.

:::tip
Weitere Beispiele und ausführliche Erklärungen zu den Funktionen von Markdown findest du in der [Markdown Anleitung] (https://www.markdownguide.org/cheat-sheet/), die weitere Informationen enthält.
:::

### Überschriften

Überschriften sind eine der wichtigsten Formatierungsoptionen, um Blogbeiträge umfassend und logisch zu trennen. Der Haupttitel besteht aus der H1-Überschrift.

In unseren Blogs sollten H2-Überschriften verwendet werden, um den Blogbeitrag in seine Hauptabschnitte zu unterteilen. Daraufhin sollten H3-Überschriften verwendet werden, um die Hauptabschnitte in Unterabschnitte zu unterteilen. Ein Beispiel hierfür ist die Unterteilung eines Hauptabschnitts in mehrere Schritte, um das Befolgen des Blogbeitrags zu erleichtern. Schließlich gibt es noch einen H4-Tag, der seltener verwendet wird, aber dem gleichen Zweck der Aufteilung in Unterabschnitte dient.

:::info
Wenn du Unterüberschriften verwendest (z.B. H3-Überschriften unter H2-Hauptüberschriften), stelle bitte sicher, dass es zwei oder mehr Überschriften der gleichen Ebene innerhalb dieses Abschnitts gibt, sonst wäre dies eine falsche Verwendung.
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

Wir verwenden eine Reihe von Inline-Formatierungen, um die Lesbarkeit unserer Blog-Beiträge zu verbessern und Leser mit unterschiedlichen technischen Kenntnissen anzusprechen. Bitte lese den folgenden Abschnitt durch, um die Verwendung der einzelnen Formatierungen zu verstehen.

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

Ein weiteres sehr nützliches Markdown-Formatierungstool sind Codeblöcke. Diese sind besonders nützlich für Blogbeiträge, die die Verwendung von Befehlen, Skripten, Terminalausgaben und mehr beinhalten. 

Um einen Codeblock zu verwenden, setze einfach das Zeichen `` ```` außerhalb des Textblocks ein, den du in einen Block setzen möchtest. Du kannst auch die Sprache neben dem ersten Satz von dreifachen Anführungszeichen angeben, um die Programmiersprache richtig zu formatieren. Nachfolgend ein Beispiel für die Verwendung von Codeblöcken unter Verwendung von ```js` für die Sprache JavaScript.

```js
function hallo(name) {
    console.log(name)
}

var server = "ZAP-Hosting"
hallo(server)
```


### Screenshots

Screenshots sind eine äußerst nützliche Methode, um die Leser visuell durch die einzelnen Schritte zu führen und wir empfehlen unbedingt, diese zu verwenden, wo es angebracht ist.

Du kannst die folgende Syntax verwenden, um ein Screenshot zu deinem Inhalt hinzuzufügen, indem du „deine_url“ durch die URL des Bildes ersetzt:
```
![]( deine_url)
```

Am besten verwendest du eine Webseite, auf der Bilder gehostet werden, wie [Imgur](https://imgur.com/), um das Bild hochzuladen und in deinem Markdown einzubinden.

## Terminologie

Bei unseren Blog-Beiträgen wird eine breite Palette von Schlüsselbegriffen verwendet. Wir erwarten von dir, dass du in deinem Blogbeitrag die US-englische, lokalisierte Schreibweise verwendest, um die Konsistenz in allen unseren Blogbeiträgen zu gewährleisten. In diesem Abschnitt möchten wir einige der wahrscheinlich am häufigsten verwendeten Begriffe vereinheitlichen.

### ZAP-Hosting Produkte

Wenn du dich auf ein ZAP-Hosting Produkt beziehst, solltest du immer sicherstellen, dass der richtige Name, die richtige Schreibweise und die richtige Großschreibung verwendet werden. Um dies zu überprüfen, gehe auf die [ZAP-Hosting-Website](https://zap-hosting.com) und schaue nach, wie das Produkt auf der entsprechenden Produktseite genannt wird.

### Benutzerdefinierte Attribute

In einigen Blogbeiträgen können Konfigurationsoptionen für Elemente wie Benutzer, Hostnamen, Domänen, IP-Adressen und URLs erforderlich sein, wobei der Leser seine eigenen Angaben anstelle unserer Platzhalter verwenden muss.

Standardmäßig solltest du immer `[dein_Attribut]` verwenden, um zwischen statischen Elementen und eindeutigen Elementen zu unterscheiden, wobei `[Attribut]` durch die Art des Attributs ersetzt werden sollte. Wenn du zum Beispiel eine IP-Adresse nennst, solltest du `[deine_server_ip]` in deinem Blogpost angeben, oder wenn du eine URL nennst, solltest du `http://[deine_server_ip]:30120` angeben. Dadurch werden die Attribute, die der Leser aufgrund seiner eigenen Konfiguration ändern muss, klar unterschieden. Außerdem solltest du dem Leser bei der ersten Erwähnung des Blogposts eine Erklärung oder einen Hinweis geben, welche Attribute er ändern muss, um sicherzustellen, dass alles verstanden wird.

Du solltest `zaphosting` als Standard-Hostname, -Benutzername oder -Datenbankname verwenden.

### Software

Wenn du in deinem Blogbeitrag Software erwähnst, solltest du sicherstellen, dass du die korrekte Schreibweise und Großschreibung für den Namen der Software einhältst. Wenn die Software-Website die Groß- und Kleinschreibung nicht einheitlich handhabt, solltest du darauf achten, dass du innerhalb eines Artikels dieselbe Groß- und Kleinschreibung verwendest, um die Konsistenz zu wahren.

Wenn du die Software zum ersten Mal erwähnst, solltest du einen Hyperlink zur Website der Software setzen, sofern eine offizielle Website vorhanden ist.