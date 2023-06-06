---
id: contribution-guidelines
title: Beitragsrichtlinien
description: Richtlinien für das ZAP-Hosting Docs Beitragsprogramm - ZAP-Hosting.com Dokumentation
sidebar_label: Richtlinien
---

Um sicherzustellen, dass die ZAP-Hosting-Dokumentationsseiten in Qualität und Stil konsistent sind, haben wir eine Reihe von Richtlinien erstellt, die du bei der Erstellung oder Bearbeitung von Inhalten für unsere Dokumentation beachten solltest. Du solltest unsere Richtlinien genau befolgen, um sicherzustellen, dass dein Vorschlag und dein finaler Pull Request zügig bearbeitet wird. Noch wichtiger ist jedoch, dass dies unseren Lesern eine bessere und einheitlichere Qualität beim Lesen und Verfolgen der Anleitungen ermöglicht.

Unsere Beitragsrichtlinien lassen sich in die folgenden Hauptabschnitte unterteilen:

- Aufbau
- Stil
- Formatierung
- Fachbegriffe



## Aufbau

Unsere Artikel in der ZAP-Dokumentation folgen einer relativ einheitlichen Struktur, die den Leser in chronologischer Reihenfolge und mit entsprechenden Überschriften durch das Thema des Artikels führt. Die Struktur kann je nach Art des Artikels, den du schreibst, geändert werden und liegt in deinem Ermessen, wenn du es für angemessen hältst. Das ZAP Docs-Team wird mit dir als Autor zusammenarbeiten, um sicherzustellen, dass die Struktur korrekt ist.

Verfahrensanleitungen sollten den Leser Schritt für Schritt durch das jeweilige Thema führen, sodass er es am Ende vollständig beherrscht. Die Struktur hierfür wäre/sollte sein:

- Seitentitel (H1-Überschrift - wird über die Metadaten "Titel" am Anfang der Seite festgelegt)
- Einleitungstext
- Voraussetzungen (H2-Überschrift)
- Schritt 1 (H2-Überschrift)
- Schritt 2 (H2-Überschrift)
- ...
- Schritt x (H2 Überschrift)
- Schlussfolgerung (H2 Überschrift)

Informative Anleitungen, die Informationen und Wissen vermitteln, sollten die folgende Struktur verwenden:

- Seitentitel (H1-Überschrift - wird über die Metadaten "Titel" oben auf der Seite festgelegt)
- Einleitungstext
- Hauptthema 1 (H2 Überschrift)
- Hauptthema 2 (H2 Überschrift)
- Optional: Unterthema 2.1 (H3 Überschrift)
- Optional: Unterthema 2.2 (H3 Überschrift)
- ...
- Hauptthema x (H2 Überschrift)
- Schlussfolgerung (H2 Überschrift)

:::info
Bitte bedenke, dass du, wo es angebracht ist, H3-Überschriften verwendest, um Unterthemen innerhalb von H2-Hauptthemenüberschriften zu erstellen. Im obigen Beispiel ist dies innerhalb des Hauptthemas **Hauptthema 2** zu sehen. Wenn du Unterüberschriften verwendest, vergewissere dich bitte, dass es zwei oder mehr Überschriften der gleichen Ebene innerhalb dieses Abschnitts gibt, sonst wäre dies eine falsche Verwendung.
:::

Zukünftig werden wir Vorlagen mit vorgefertigtem Markdown für dich bereitstellen, was einen nützlichen Ansatz bei der Erstellung neuer Seiten darstellen wird. Dies wird bald hinzugefügt werden.

### Titel

Bei der Erstellung des Titels solltest du versuchen, das Ziel deiner Anleitung mit einzubeziehen. Mache dir Gedanken darüber, was der Leser erreicht, wenn er deiner Anleitung folgt. Eine typische Verfahrensanleitung hat das folgende Titelformat: **Wie man [Aufgabe] mit [Software]** ausführt. Eine typische informative Anleitung hat das folgende Titelformat: **Informationen zu [Anleitungsinfo]**.



### Einführung

Die Einleitungen der Artikel sollten relativ kurz sein und einfach erklären, was der Artikel vermitteln soll und was das Endergebnis ist, wenn es sich um eine Verfahrensanleitung handelt. Einige Fragen, die Sie sich stellen sollten:

- Worum geht es in der Anleitung?
- Was soll der Leser aus dieser Anleitung lernen?
- Was wird er am Ende der Anleitung erreicht haben?

Die Beantwortung dieser Fragen sollte dir helfen, eine kurze und prägnante Einleitung für deine Anleitung zu verfassen.



### Voraussetzungen

Der Abschnitt "Voraussetzungen" wird hauptsächlich für Schritt-für-Schritt-Anleitungen verwendet. Er dient dazu, den Leser darüber zu informieren, was erforderlich ist, bevor er mit der Anleitung beginnen kann, ähnlich wie eine Checkliste vor der Fertigstellung.

Übliche Voraussetzungen für Anleitungen sind zum Beispiel:

- Erforderliche Software (z. B. Git, Node.js, Python, Docker)
- Tutorials, die dem Leser helfen können, Grundkenntnisse zu erwerben (z. B. eine andere ZAP Docs-Seite)
- Benutzerkonten, z. B. für APIs
- Erforderliche Einstellungen (z. B. DNS/SSL)

Du solltest eine Aufzählung dieser Voraussetzungen unter der Überschrift des Abschnitts anführen.



### Steps

Der Abschnitt "Schritte" ist der Teil einer verfahrenstechnischen Anleitung, in dem du beschreibst, was die Leser zu tun haben und warum. Jeder Schritt sollte der Überschrift H2 folgen. Du kannst die Schrittnummer erwähnen, bevor du den Schritt beschreibst, z.B. **Schritt 1 - Einrichten des API-Kontos** wäre eine geeignete Schrittüberschrift. Nach dieser Überschrift solltest du kurz und schnell beschreiben, was der Leser in diesem Schritt tun wird, um ein Gesamtziel zu erreichen. Wie bereits erwähnt, verwendest du die zweite Person (z. B. "Du wirst erstellen") und nicht die erste Person.

Zwischen den einzelnen Schritten solltest du eine kurze Einleitung und eine abschließende Überleitung einfügen, um den Leser darüber zu informieren, was er bisher getan hat und was in den folgenden Schritten geschehen wird. Diese Übergänge liefern dem Leser einen wichtigen Zusammenhang. Versuche, Wiederholungen zu vermeiden und verwende eine Reihe von Begriffen, um Wiederholungen von Schritten zu vermeiden.



### Schlussfolgerungen

Die Schlussfolgerung deiner Anleitung sollte zusammenfassen, was der Leser im Laufe der Anleitung erreicht hat. Außerdem sollten die nächsten Schritte, Anwendungsfälle oder Funktionen genannt werden, die der Leser ausführen kann, wenn er sein Wissen über das Thema weiter vertiefen möchte. Wenn es bereits eine bestehende Anleitung in der ZAP-Dokumentation gibt, die auf dieser Anleitung aufbaut, wäre dies ein guter Ort, um sie zu verlinken.



## Style

Der Schreibstil der ZAP-Hosting-Dokumente folgt unserer Überzeugung, qualitativ hochwertige, praktische und leicht zugängliche Anleitungen zu erstellen, die ein breites Spektrum an Themen abdecken und Leser aller Erfahrungsstufen berücksichtigen.



### Technisch & korrekt

Unsere Artikel sollen technisch möglichst genau und auf dem neuesten Stand der Branche sein. Wir erwarten, dass der Nutzer mit den Artikeln nicht nur das Ziel erreicht, etwas Neues zu lernen, zu bauen oder einzurichten, sondern auch zu lernen und zu verstehen, was er im Laufe des Artikels getan hat. Jeder Schritt, den du als Autor innerhalb eines Leitfadens ausführst, sollte einen klaren Zweck und eine klare Erklärung haben und gegebenenfalls zusätzliche Optionen und/oder Markierungen enthalten. Der Leser sollte immer auf dem Laufenden gehalten werden, was er tut und warum er die Aktionen, die Teil des Leitfadens sind, durchführt.

Autoren sollten ihre eigenen Anleitungen immer Korrektur lesen und testen, um sicherzustellen, dass alles technisch korrekt ist und wie beabsichtigt funktioniert, bevor sie einen Pull-Request einreichen. Das ZAP-Hosting Docs Team wird die Anleitung durchlesen und gegebenenfalls testen, um sicherzustellen, dass sie konsistent und sachlich korrekt ist oder um Verbesserungen zu besprechen, wenn ein Fehler festgestellt wird.

:::Tipp
Wir empfehlen unseren Autoren immer, ihren Inhalt durch ein Rechtschreibprüfungsprogramm zu schicken, um sicherzustellen, dass die Rechtschreibung korrekt ist, bevor ein Pull Request erstellt wird. Eine nützliche Website dafür ist: https://languagetool.org/
:::



### Praktisch und sinnvoll

Wenn ein Leser einen Artikel beendet hat, sollte er von Anfang bis Ende etwas gelernt, gebaut oder eingerichtet haben. Unsere Anleitungen zielen darauf ab, Leser aller Erfahrungsstufen zu unterstützen. Daher sollten deine Beiträge das jeweilige Thema umfassend behandeln, um sicherzustellen, dass der Leser etwas lernt und/oder etwas erreicht hat. Das bedeutet, dass du als Autor dein Thema gründlich behandeln musst, indem du alle notwendigen Details, einschließlich der Voraussetzungen, erwähnst. Als Autor solltest du die Leser nur dann auf externe Webseiten verweisen, wenn es in den ZAP Docs keine Dokumentation zu diesem Thema gibt oder wenn es darum geht, dass der Benutzer zusätzliche Details erfährt, die für deinen Artikel nicht erforderlich sind, aber für den Aufbau seines technischen Wissens von Nutzen sein können. Externe Links sollten nicht auf Dokumentationen von Wettbewerbern weiterleiten.



### Freundlich, formell und ausführlich

Wir erwarten, dass unsere Dokumentation zukunftsorientiert und benutzerfreundlich ist, damit sie für jeden Leser zugänglich ist, aber gleichzeitig formell bleibt. Wir möchten, dass der Ton unserer Texte für alle Leser akzeptabel ist, unabhängig von ihrer Erfahrung oder den bestehenden Sprachgrenzen.

Da sich diese Anleitungen in erster Linie darauf konzentrieren, den Leser zu unterstützen und ihm zu ermöglichen, ein Ergebnis zu erzielen, erwarten wir von den Autoren, dass sie die zweite Person (z. B. "Sie müssen...") und nicht die erste Person (z. B. "Ich denke...") verwenden, um den Leser bei der Sache zu halten und den Fokus auf ihn zu richten.

Außerdem müssen sich alle Autoren an unseren Verhaltenskodex halten, um zu gewährleisten, dass unsere Anleitungen für jeden akzeptabel sind, unabhängig von Alter, ethnischer Zugehörigkeit, Geschlechtsidentität, Erfahrungsgrad, Nationalität, Religion, politischer Zugehörigkeit, sexueller Orientierung, sozioökonomischem Status oder technologischer Wahl. Du musst jede potenziell beleidigende Sprache und jeden anderen Inhalt, der sich auf die oben genannten Themen bezieht, vermeiden.



## Formatierung

Unsere Dokumentation ist in der Markdown-Auszeichnungssprache formatiert, die weit verbreitet und relativ einfach zu verwenden ist. In den folgenden Abschnitten erfährst du, welche wir verwenden und wie sie genutzt wird.

:::tip
Weitere Beispiele und ausführliche Erklärungen zu den Funktionen von Markdown findest du unter https://www.markdownguide.org/cheat-sheet/, wo es weitere Informationen gibt.
:::



### Überschriften

Überschriften sind eine der wichtigsten Formatierungsoptionen, um die Seiten umfassend und logisch zu trennen. Die Hauptüberschrift besteht aus der H1-Überschrift, die du jedoch nie im Text verwenden solltest. Stattdessen solltest du die Metadaten "Titel" am Anfang der Anleitungsdatei verwenden, die dafür zuständig sind. 

In allen unseren Anleitungen sollten H2-Überschriften verwendet werden, um die Anleitung in Hauptabschnitte zu unterteilen. Anschließend sollten H3-Kopfzeilen verwendet werden, um die Hauptabschnitte in Unterabschnitte zu unterteilen. Dies kann z. B. sinnvoll sein, wenn ein Hauptabschnitt in mehrere Schritte unterteilt wird, um das Verfolgen der Anleitung zu erleichtern. Schließlich gibt es noch ein H4-Tag, das in unserer Dokumentation seltener verwendet wird, aber dem gleichen Zweck der Aufteilung in Unterabschnitte dient, aber nicht speziell in der Anleitungsstruktur angezeigt wird.

:::info
Wenn du Unterüberschriften verwendest (z.B. H3-Überschriften unter H2-Hauptüberschriften), vergewissere dich bitte, dass es zwei oder mehr Überschriften der gleichen Ebene innerhalb dieses Abschnitts gibt, sonst wäre dies eine falsche Verwendung.
:::

Hier ist ein kurzes Beispiel für die Verwendung von Überschriften:

```
## Mods einrichten
H2 Hauptabschnittsüberschrift

### Herunterladen der Mods
H3 Unterüberschrift

#### Über den Steam Workshop
H4 Unterüberschrift

#### Manuell über SteamCMD
H4 Unterüberschrift

### Vorbereiten der richtigen Struktur
H4 Unterüberschrift

### Installieren der Mods auf dem Server
H4 Unterüberschrift
```



### In-line markdown

Wir verwenden eine Reihe von Inline-Formatierungen, um die Lesbarkeit unserer Leitfäden zu verbessern und Leser mit unterschiedlichen technischen Kenntnissen anzusprechen. Schaue dir den folgenden Abschnitt an, um zu verstehen, wie die einzelnen Formatierungen verwendet werden.



#### Fettgedruckter Text

Fett gedruckter Text dient in erster Linie dazu, Informationen hervorzuheben. Beispiele hierfür sind:

- Änderung des Inhalts zwischen den Schritten
- Hostnamen, Zugangsdaten und Benutzernamen
- Wichtige Terminologie

Du kannst einfach ein doppeltes Sternchen außerhalb des Zieltextes verwenden, um den Text fett zu machen, z.B. `**Hallo dort**` resultiert in **Hallo dort**.



#### Kursivschrift

Die kursive Schrift wird in erster Linie verwendet, um neue technische Schlüsselwörter in Ihrem Artikel einzuführen. Zum Beispiel werden wir heute einen *Reverse Proxy* einrichten.

Um Kursivschrift zu verwenden, musst du einfach ein einzelnes Sternchen außerhalb des Zieltextes platzieren, zum Beispiel `*ZAP-Hosting - More POWER!*` ergibt *ZAP-Hosting - More Power!*.



#### In-line code

Die Inline-Code-Formatierung wird in erster Linie zur Anzeige technischer Informationen wie URLs verwendet. Eine umfangreichere Liste von Beispielen umfasst:

- Dateinamen und -pfade (z. B. `C:/Benutzer/[DeinName]/AppData....test.png`)

- URLs (z. B. `https://zap-hosting.com`)
- Ports (z. B. `:30120`)
- Befehle (z.B. `ipconfig`)
- SQL-Abfragen (z. B. `SELECT * FROM servers`)
- Tastenkombinationen und Tastendrücke (z.B. `ENTER` oder `CTRL + C`)

  

  
  

#### Tabellen

Eine weitere nützliche Funktion von Markdown sind Tabellen. Diese können besonders nützlich sein, wenn du eine große Menge an sich wiederholenden Informationen anzeigen musst, zum Beispiel die Befehle, Beschreibungen und Verwendungen, die in einem Spiel verfügbar sind. Im Folgenden findest du ein Beispiel für die Verwendung von Tabellen:

```
| Befehl      | Beschreibung              | Verwendung            |
| ----------- | ------------------------- | --------------------- |
| /help       | Sendet Hilfebefehl        | /help [Kategorie]     |
| /stop       | Hält den Server an        | /stop [true/false]    |
```



#### Codeblöcke

Ein weiteres sehr nützliches Markdown-Formatierungstool sind Codeblöcke. Diese sind besonders nützlich für Anleitungen, die die Verwendung von Befehlen, Skripten, Terminalausgaben und mehr beinhalten. 

Um einen Codeblock zu verwenden, setze einfach ein ` ``` ` außerhalb des Textblocks ein, den du in einen Block setzen möchtest. Du kannst auch die Sprache neben dem ersten Satz von dreifachen Anführungszeichen angeben, um die Programmiersprache richtig zu formatieren. Nachfolgend ein Beispiel für die Verwendung von Codeblöcken unter Verwendung von  ` ```js ` für die Sprache JavaScript.

```js
function hello(name) {
    console.log(name)
}

var server = "ZAP-Hosting"
hello(server)
```



### Nutzung von Admonitions

Innerhalb deines Inhalts kannst du entscheiden, eine Meldung zu verwenden, um bestimmte Informationen unter einer der 5 möglichen Bezeichnungen hervorzuheben, die im Folgenden erläutert werden.

Die Syntax für die Verwendung jeder Meldung ist dieselbe: Ersetzen das Schlüsselwort durch den gewünschten Typ. Hier ist ein Beispiel für die Verwendung:

```
:::note
Dies ist eine Notiz!
Ersetzen das obige Schlüsselwort, um den Typ zu ändern.
```



#### Note

:::note
Du solltest dieses Tag verwenden, um zusätzliche Notizen anzuzeigen, die zwar nützlich, aber nicht direkt wichtig sind.
:::

#### Tip

:::tip
Hier kannst du alle Tipps eintragen, die du aus Erfahrung kennst.
:::

#### Info

:::info
Wenn es wichtige Informationen gibt, die der Benutzer wissen sollte, solltest du sie in diesem Tag unterbringen.
:::

#### Caution

:::caution
Gibt es etwas in deiner Anleitung, wovor der Benutzer gewarnt werden sollte und worauf er achten sollte, wenn er der Anleitung folgt? Dann verwende diese Markierung, um es hervorzuheben.
:::

#### Danger

:::danger
Du solltest die Gefahrenwarnung verwenden, wenn wichtige Informationen hervorgehoben werden müssen. Insbesondere sollte dies verwendet werden, um den Benutzer auf bekannte Fehler oder veraltete Funktionen aufmerksam zu machen.
:::



## Terminologie

In unserer Dokumentation wird eine breite Palette von Schlüsselbegriffen verwendet. In diesem Abschnitt versuchen wir, einige der Begrifflichkeiten zu standardisieren, die wahrscheinlich häufig verwendet werden.

### ZAP-Hosting Produkte

Wenn du dich auf ein ZAP-Hosting Produkt beziehst, solltest du immer sicherstellen, dass der richtige Name, die richtige Schreibweise und die richtige Großschreibung verwendet werden. Dies kannst du überprüfen, indem du auf [die ZAP-Hosting-Website](https://zap-hosting.com) gehst und nachsiehst, wie das Produkt auf der entsprechenden Produktseite genannt wird.

### Benutzerdefinierte Attribute

In den meisten Anleitungen werden Konfigurationsoptionen für Elemente wie Benutzer, Hostnamen, Domänen, IP-Adressen und URLs benötigt, wobei der Leser seine eigenen Angaben anstelle unserer Platzhalter verwenden muss.

Standardmäßig solltest du immer `Dein_Attribut` verwenden, um zwischen statischen Elementen und eindeutigen Elementen zu unterscheiden, wobei `Attribut` durch die Art des Attributs ersetzt werden sollte. Wenn du z.B. eine IP-Adresse angibst, solltest du in deinem Leitfaden `deine_server_ip` angeben, oder wenn du eine URL angibst, solltest du `http://deine_server_ip:30120` angeben. Dadurch werden die Attribute, die der Leser auf der Grundlage seiner eigenen Konfiguration ändern muss, klar unterschieden. Darüber hinaus solltest du dem Leser bei der ersten Erwähnung in der Anleitung eine Erklärung oder einen Hinweis geben, welche Attribute er ändern muss, um sicherzustellen, dass alles verstanden wird.

Du solltest `zaphosting` als Standard-Hostname, -Benutzername oder -Datenbankname verwenden.

### Software

Wenn du in deiner Anleitung Software erwähnst, solltest du darauf achten, dass du die korrekte Schreibweise und Großschreibung für den Namen der Software einhältst. Wenn die Software-Website die Groß- und Kleinschreibung nicht beibehält, achte darauf, dass du innerhalb eines Artikels die gleiche Groß- und Kleinschreibung verwendest, um die Konsistenz zu bewahren.

Wenn du die Software zum ersten Mal erwähnst, solltest du einen Hyperlink zur Website der Software setzen, sofern eine offizielle Website vorhanden ist.