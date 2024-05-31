---
id: contribution-guides-guidelines
title: Richtlinien für Anleitungen
description: Richtlinien für den Abschnitt Guides des ZAP-Hosting Beitragsprogramms - ZAP-Hosting.com Dokumentation
sidebar_label: Richtlinien
---

![Guides Banner](https://screensaver01.zap-hosting.com/index.php/s/4aaqq3zctZFW4JJ/preview)


Um sicherzustellen, dass die ZAP-Hosting-Dokumentationsseiten eine einheitliche Qualität und einen einheitlichen Stil aufweisen, haben wir eine Reihe von Richtlinien erstellt, die du bei der Erstellung oder Bearbeitung von Inhalten für unsere Dokumentation beachten solltest. Du musst dich genau an unsere Richtlinien halten, damit dein Vorschlag und dein endgültiger Pull Request zügig bearbeitet werden können. Noch wichtiger ist aber, dass unsere Leserinnen und Leser beim Lesen und Verfolgen der Anleitungen eine bessere und einheitlichere Qualitätserfahrung machen können.


Die Richtlinien für die Beiträge in unseren Anleitungen lassen sich in die folgenden Hauptabschnitte unterteilen:

- Struktur
- Stil
- Formatierung
- Terminologie

## Struktur

Unsere Anleitungen in den ZAP Docs folgen einer relativ einheitlichen Struktur, die den Leser in chronologischer Reihenfolge und mit entsprechenden Überschriften durch das Ziel des Anleitung führt. Die Struktur kann je nach Art des Anleitung, die du schreibst, geändert werden und liegt in deinem Ermessen, wenn du sie für angemessen hältst. Das ZAP Docs Team wird mit dir als Autor zusammenarbeiten, um sicherzustellen, dass die Anleitung korrekt ist.

Verfahrensanleitungen, die veröffentlicht werden, sollten den Leser Schritt für Schritt durch das jeweilige Thema führen, so dass er es am Ende vollständig beherrscht. Die Struktur dafür wäre/sollte sein:

- Seitentitel (H1-Überschrift - wird über die Metadaten "Titel" oben auf der Seite festgelegt)
- Einführungstext
- Voraussetzungen (H2 Überschrift)
- Schritt 1 (H2 Überschrift)
- Schritt 2 (H2 Überschrift)
- ...
- Schritt x (H2 Überschrift)
- Schlussfolgerung (H2 Überschrift)

Informative Anleitungen, die Informationen und Wissen vermitteln, sollten die folgende Struktur verwenden:

- Seitentitel (H1-Überschrift - wird über die `title`-Metadaten oben auf der Seite festgelegt)
- Einführungstext
- Hauptthema 1 (H2 Überschrift)
- Hauptthema 2 (H2 Überschrift)
- Optional: Unterthema 2.1 (H3 Überschrift)
- Fakultativ: Unterthema 2.2 (H3 Überschrift)
- ...
- Hauptthema x (H2 Überschrift)
- Schlussfolgerung (H2 Überschrift)

:::info
Denke daran, dass du, wenn es sinnvoll ist, H3-Überschriften verwenden kannst, um Unterthemen innerhalb von H2-Hauptüberschriften zu erstellen. Im obigen Beispiel ist dies innerhalb des Hauptthemas **Hauptthema 2** zu sehen. Wenn du Unterüberschriften verwendest, achte bitte darauf, dass es innerhalb des Abschnitts zwei oder mehr Überschriften der gleichen Ebene gibt, sonst wäre das eine falsche Verwendung.
:::

In Zukunft werden wir Vorlagen mit vorgefertigtem Markdown für dich hinzufügen, die ein nützlicher Ausgangspunkt für die Erstellung neuer Seiten sein werden. Diese werden bald hinzugefügt.

### Überschriften

Wenn du einen Titel erstellst, solltest du das Ziel deiner Anleitung berücksichtigen. Überlege dir genau, was der Leser erreichen soll, wenn er deinem Anleitung folgt. Ein typischer Verfahrensanleitung hat das folgende Titelformat: **Wie man [Aufgabe] mit [Software]** erledigt. Ein typischer informativer Anleitung hat die folgende Überschrift: **Informationen zu [Anleitung-Info]**.

### Einführung

Einführungen in Anleitungen sollten relativ kurz sein und einfach erklären, was die Anleitung vermitteln soll und was das Ergebnis ist, wenn es sich um eine Anleitung handelt. Ein paar Fragen, die du dir stellen solltest:

- Worum geht es in deiner Anleitung?
- Was soll der Leser aus dieser Anleitung lernen?
- Was wird er am Ende der Anleitung erreicht haben?


Die Beantwortung dieser Fragen sollte dir helfen, eine kurze und prägnante Einführung für deine Anleitung zu verfassen.

### Voraussetzungen

Der Abschnitt "Voraussetzungen" wird hauptsächlich für Schritt-für-Schritt-Anleitungen verwendet. Er dient dazu, dem Leser mitzuteilen, was er wissen muss, bevor er die Anleitung durcharbeiten kann, ähnlich wie eine Checkliste vor der Fertigstellung.

Übliche Voraussetzungen für Anleitungen sind zum Beispiel:

- Erforderliche Software (z. B. Git, Node.js, Python, Docker)
- Tutorials, die dem Leser helfen, Grundkenntnisse zu erwerben (z. B. eine andere ZAP Docs-Seite)
- Benutzerkonten wie z. B. APIs
- Erforderliche Einstellungen (z. B. DNS/SSL)

Du solltest eine Aufzählung dieser Voraussetzungen unter der Abschnittsüberschrift angeben.

### Schritte

Der Abschnitt Schritte ist der Teil einer Anleitung, in dem du beschreibst, was die Leser/innen tun müssen und warum. Jeder Schritt sollte auf die Überschrift H2 folgen. Du kannst die Nummer des Schritts erwähnen, bevor du den Schritt beschreibst, z.B. wäre **Schritt 1 - Einrichten des API-Kontos** eine passende Schrittüberschrift. Nach dieser Überschrift solltest du kurz und knapp beschreiben, was der Leser in diesem Schritt tun wird, um ein Gesamtziel zu erreichen. Wie bereits erwähnt, solltest du die Zeitform der zweiten Person verwenden (z. B. "Du wirst erstellen") und nicht die erste Person.

Zwischen den einzelnen Schritten solltest du eine kurze Einführung und eine abschließende Überleitung einbauen, um den Leser/die Leserin darüber zu informieren, was er/sie bisher getan hat und was in den nächsten Schritten passieren wird. Diese Übergänge bieten dem Leser einen wichtigen Kontext. Versuche, Wiederholungen zu vermeiden und verwende eine Reihe von Begriffen, um Wiederholungen von Schritten zu vermeiden.

### Schlussfolgerung

Die Schlussfolgerung deiner Anleitung sollte zusammenfassen, was der Leser während der Anleitung erreicht hat. Er sollte auch die nächsten Schritte, Anwendungsfälle oder Funktionen aufzeigen, die der Leser nutzen kann, wenn er sein Wissen über das Thema weiter vertiefen möchte. Wenn es bereits einen ZAP Docs Anleitung gibt, der auf dem Anleitung aufbaut, wäre dies ein guter Ort, um ihn zu verlinken.

## Stil
Der Schreibstil für die ZAP-Hosting Docs folgt unserer Überzeugung, qualitativ hochwertige, praktische und leicht zugängliche Anleitungen zu erstellen, die ein breites Spektrum an Themen abdecken und Leser mit unterschiedlichem Erfahrungsstand unterstützen. 

### Technisch & korrekt

Unsere Anleitungen sollen technisch so korrekt wie möglich und auf dem neuesten Stand der Branche sein. Wir erwarten, dass die Anleitungen es dem Nutzer nicht nur ermöglichen, das Ziel zu erreichen, etwas Neues zu lernen, zu bauen oder einzurichten, sondern dass er auch lernt und versteht, was er während des Anleitung getan hat. Jeder Schritt, den du als Autorin oder Autor in einer Anleitung machst, sollte einen klaren Zweck und eine Erklärung haben und gegebenenfalls zusätzliche Optionen und/oder Hinweise enthalten. Du solltest den Leser immer darüber auf dem Laufenden halten, was er tut und warum er die Aktionen von diesem Teil der Anleitung durchführt.

Autoren sollten ihre Anleitungen immer Korrektur lesen und testen, um sicherzustellen, dass alles technisch korrekt ist und wie beabsichtigt funktioniert, bevor sie einen Pull Request einreichen. Das ZAP-Hosting Docs-Team wird deine Anleitung gegebenenfalls durchlesen und testen, um sicherzustellen, dass diese konsistent und sachlich korrekt ist, oder um Verbesserungen zu besprechen, wenn ein Fehler festgestellt wird.

:::tip
Wir empfehlen unseren Autoren immer, deinen Inhalt durch ein Rechtschreibprüfungsprogramm laufen zu lassen, um sicherzustellen, dass SPAG korrekt ist, bevor sie einen Pull Request erstellen. Eine nützliche Website dafür ist: https://languagetool.org/
:::

### Praktisch & nützlich

Wenn ein Leser oder eine Leserin einen Artikel beendet hat, sollte er oder sie etwas von Anfang bis Ende gelernt, gebaut oder eingerichtet haben. Unsere Anleitungen zielen darauf ab, Leser/innen aller Erfahrungsstufen zu unterstützen. Deshalb sollten deine Beiträge das jeweilige Thema vollständig erforschen, um sicherzustellen, dass der/die Leser/in Wissen erlangt und/oder etwas erreicht hat. Das bedeutet, dass du als Autorin oder Autor dein Thema gründlich behandeln musst, indem du alle notwendigen Details und Voraussetzungen erwähnst. Als Autor/in solltest du Leser/innen nur dann auf externe Websites weiterleiten, wenn es in den ZAP Docs keine Dokumentation zu diesem Thema gibt oder wenn es darum geht, dass der/die Nutzer/in zusätzliche Details erfährt, die für deinen Artikel nicht erforderlich sind, aber für den Aufbau seines/ihres Fachwissens nützlich sein können. Externe Links sollten nicht auf Dokumentationen von Wettbewerbern weiterleiten.

### Freundlich, formell und umfassend

Wir erwarten, dass unsere Dokumentation zukunftsorientiert und freundlich ist, damit sie für jeden Leser zugänglich ist, aber gleichzeitig formell bleibt. Unser Ziel ist es, dass der Ton unseres Anleitungs für alle Leserinnen und Leser akzeptabel ist, unabhängig von ihrer Erfahrung oder den bestehenden Sprachgrenzen.


Da es in diesen Anleitungen in erster Linie darum geht, den Leser zu unterstützen, sich zu bilden und ein Ergebnis zu erzielen, erwarten wir von den Autoren, dass sie in der zweiten Person (z. B. "Du musst...") und nicht in der ersten Person (z. B. "Ich denke...") schreiben, um den Leser bei der Stange zu halten und den Fokus auf ihn zu richten.

Schließlich müssen alle Schreiber/innen unseren Verhaltenskodex befolgen, um sicherzustellen, dass unsere Anleitungen jeden akzeptieren, unabhängig von Alter, ethnischer Zugehörigkeit, Geschlechtsidentität, Erfahrungsgrad, Nationalität, Religion, politischer Zugehörigkeit, sexueller Orientierung, sozioökonomischem Status oder technologischen Entscheidungen. Du musst jede potenziell beleidigende Sprache und jeden anderen Inhalt vermeiden, der sich auf die oben genannten Themen bezieht.

## Formatierung
Unsere Dokumentation ist mit der Markdown-Auszeichnungssprache formatiert, die weit verbreitet und relativ einfach zu verwenden ist. In den folgenden Abschnitten erfährst du, welche Sprache wir verwenden und wie sie genutzt wird.

:::tip
Weitere Beispiele und ausführliche Erklärungen zu den Funktionen von Markdown findest du in der [Markdown Anleitung](https://www.markdownguide.org/cheat-sheet/), die weitere Informationen enthält.
:::

### Kopfzeilen

Überschriften sind eine der wichtigsten Formatierungsoptionen, um die Seiten übersichtlich und logisch zu trennen. Die Hauptüberschrift besteht aus der H1-Überschrift, allerdings solltest du diese nie im Text verwenden. Stattdessen solltest du die Metadaten `title` am Anfang der Anleitung-Datei verwenden, die dafür zuständig sind. 

In allen unseren Anleitungen sollten H2-Überschriften verwendet werden, um den Anleitung in seine Hauptabschnitte zu unterteilen. Danach sollten H3-Kopfzeilen verwendet werden, um die Hauptabschnitte in Unterabschnitte zu unterteilen. Das kann zum Beispiel dann sinnvoll sein, wenn ein Hauptabschnitt in mehrere Schritte unterteilt wird, um das Verfolgen der Anleitung zu erleichtern. Schließlich gibt es noch ein H4-Tag, das in unserer Dokumentation seltener verwendet wird, aber demselben Zweck dient, nämlich der Aufteilung in Unterabschnitte, aber nicht speziell in der Struktur der Anleitung angezeigt wird.

:::info
Wenn du Unterüberschriften verwendest (z. B. H3-Überschriften unter den H2-Hauptüberschriften), stelle bitte sicher, dass es innerhalb des Abschnitts zwei oder mehr Überschriften der gleichen Ebene gibt, da dies sonst eine falsche Verwendung ist.
:::

Hier ist ein kurzes Beispiel für die Verwendung von Überschriften:

```
## Einrichten von Mods
H2 Hauptabschnitt Überschrift

### Herunterladen der Mods
H3 Unterüberschrift

#### Über Steam Workshop
H4 Zwischenüberschrift

#### Manuell über SteamCMD
H4 subheader

### Die richtige Struktur vorbereiten
H3 subheader

### Installieren der Mods auf deinem Server
H3 subheader
```

### Inline-Markdown

Wir verwenden eine Reihe von Inline-Formatierungen, um die Lesbarkeit unserer Anleitungen zu verbessern und Leser mit unterschiedlichen technischen Kenntnissen anzusprechen. Lies dir den folgenden Abschnitt durch, um zu verstehen, wie die einzelnen Formatierungen verwendet werden.

#### Fettgedruckter Text

Fett gedruckter Text wird hauptsächlich verwendet, um Informationen hervorzuheben. Beispiele hierfür sind:

- Wechsel des Kontexts zwischen den Schritten
- Hostnamen, Anmeldedaten und Benutzernamen
- Wichtige Terminologie

Du kannst einfach ein doppeltes Sternchen außerhalb des Zieltextes verwenden, um den Text fett zu machen, z. B. `**Hallo dort**` ergibt **Hallo dort**.

#### Kursivschrift

Kursivschrift wird in erster Linie verwendet, um neue technische Schlüsselwörter in deiner Anleitung einzuführen. Zum Beispiel werden wir heute einen *Reverse Proxy* einrichten.

Um Kursivschrift zu verwenden, musst du einfach ein einzelnes Sternchen außerhalb des Zieltextes setzen, z.B. `*ZAP-Hosting - More POWER!*` ergibt *ZAP-Hosting - More Power!*.

#### In-line Code

Die Formatierung von Inline-Code wird vor allem verwendet, um technischere Informationen wie URLs anzuzeigen. Eine umfangreichere Liste von Beispielen umfasst:

- Dateinamen und Pfade (z. B. `C:/Benutzer/[IhrName]/AppData....test.png`)
- URLs (z.B. `https://zap-hosting.com`)
- Ports (z.B. `:30120`)
- Befehle (z.B. `ipconfig`)
- SQL-Abfragen (z. B. `SELECT * FROM servers`)
- Tastenkombinationen und Tastendrücke (z.B. `ENTER` oder `CTRL + C`)

#### Tabellen

Eine weitere nützliche Funktion von Markdown sind Tabellen. Diese können besonders nützlich sein, wenn du eine große Menge an sich wiederholenden Informationen anzeigen musst, z. B. die Befehle, Beschreibungen und Verwendungen, die in einem Spiel verfügbar sind. Im Folgenden findest du ein Beispiel für die Verwendung von Tabellen:

```
| Befehl | Beschreibung | Verwendung |
| ----------- | ------------------------ | --------------------- |
| /help | Sendet einen Hilfebefehl | /help [Kategorie] |
| /stop | Stoppt den Server | /stop [true/false] |
```

#### Codeblöcke

Ein weiteres sehr nützliches Markdown-Formatierungstool sind Codeblöcke. Sie eignen sich besonders für Anleitungen, in denen Befehle, Skripte, Terminalausgaben und mehr verwendet werden. 

Um einen Codeblock zu verwenden, setzt du einfach ` ``` ` außerhalb des Textblocks ein, den du in einen Block einfügen möchtest. Du kannst auch die Sprache neben dem ersten Satz von dreifachen Anführungszeichen angeben, um die Programmiersprache richtig zu formatieren. Nachfolgend ein Beispiel für die Verwendung von Codeblöcken unter Verwendung von ` ```js ` für die Sprache JavaScript.

```js
function hello(name) {
    console.log(name)
}

var server = "ZAP-Hosting"
hallo(server)
```

### Verwendung von Ermahnungen

Innerhalb deines Inhalts kannst du eine Ermahnung verwenden, um bestimmte Informationen unter einem der 5 möglichen Labels hervorzuheben, die im Folgenden erläutert werden.

Die Syntax für die Verwendung jeder Ermahnung ist dieselbe: Ersetze das Schlüsselwort durch den Typ, den du verwenden möchtest. Hier ist ein Beispiel für die Verwendung:

```
:::note
Dies ist eine Notiz!
Ersetze das obige Schlüsselwort, um den Typ zu ändern.
```

#### Notiz

:::note
Du solltest dieses Tag verwenden, um zusätzliche Notizen anzuzeigen, die zwar nützlich, aber nicht direkt wichtig sind.
:::

#### Tipp

:::tip
In diesem Tag kannst du alle Tipps eintragen, die du aus Erfahrung kennst.
:::

#### Info

:::info
Wenn es wichtige Informationen gibt, die der/die Nutzer/in wissen sollte, füge sie in diesen Tag ein.
:::

#### Warnung

:::caution
Gibt es in deiner Anleitung etwas, wovor der/die Nutzer/in gewarnt werden sollte und wovor er/sie sich in Acht nehmen sollte, während er/sie dem Anleitung folgt? Verwende dieses Tag, um es hervorzuheben.
:::

#### Gefahr

:::danger
Du solltest die Gefahrenwarnung verwenden, wenn wichtige Informationen hervorgehoben werden müssen. Vor allem solltest du damit auf bekannte Fehler oder veraltete Funktionen aufmerksam machen.
:::

### Screenshots

Screenshots sind eine äußerst nützliche Methode, um die Leser/innen visuell durch die Schritte zu führen, und wir empfehlen, diese zu verwenden, wo es angebracht ist.

Um dem deutschen Abschnitt gerecht zu werden, erwarten wir von dir, dass du bei der Erstellung eines Screenshots sowohl eine englische als auch eine deutsche Version hinzufügst, um sicherzustellen, dass die Screenshots einheitlich sind. In deiner Anleitung kannst du sie direkt nebeneinander platzieren. Die deutschen Screenshots werden entfernt und verwendet, sobald das ZAP Docs Team deinen Beitrage übersetzt hat.


Du kannst die folgende Syntax verwenden, um einen Screenshot zu deinem Inhalt hinzuzufügen. Ersetze dabei `Deine_Url` durch die URL des Bildes:
```
![Bild](Deine_Url)
```

Am besten verwendest du eine Website wie Imgur, um das Bild hochzuladen und zu verwenden. Alternativ kannst du es auch direkt in das Bearbeitungsfeld ziehen, wenn du die GitHub-Website zum Erstellen deiner Inhalte nutzt, um es automatisch für dich hochzuladen.

## Terminologie

In der gesamten Dokumentation wird eine Vielzahl von Fachbegriffen verwendet. Wir erwarten von dir, dass du in der gesamten Dokumentation die US-englische Schreibweise verwendest, um die Konsistenz aller Anleitungen zu gewährleisten. In diesem Abschnitt versuchen wir, einige der wahrscheinlich häufig verwendeten Begriffe zu vereinheitlichen.

### ZAP-Hosting Produkte

Wenn du dich auf ein ZAP-Hosting-Produkt beziehst, solltest du immer sicherstellen, dass der richtige Name, die richtige Schreibweise und die richtige Großschreibung verwendet werden. Du kannst dies überprüfen, indem du auf die [ZAP-Hosting-Website](https://zap-hosting.com) gehst und nachschaust, wie das Produkt auf der entsprechenden Produktseite referenziert wird.

### Benutzerdefinierte Attribute

In den meisten Anleitungen werden Konfigurationsoptionen für Elemente wie Benutzer, Hostnamen, Domänen, IP-Adressen und URLs benötigt, bei denen der Leser seine eigenen Angaben anstelle unserer Platzhalter verwenden muss.

Standardmäßig solltest du immer `[dein_Attribut]` verwenden, um zwischen statischen Elementen und eindeutigen Elementen zu unterscheiden, wobei `Attribut` durch den Typ des Attributs ersetzt werden sollte. Wenn du zum Beispiel eine IP-Adresse angibst, solltest du in deiner Anleitung `[your_server_ip]` angeben, oder wenn du eine URL angibst, solltest du `http://[your_server_ip]:30120` angeben. Dadurch werden die Attribute, die der Leser aufgrund seiner eigenen Konfiguration ändern muss, klar unterschieden. Um sicherzustellen, dass alles verstanden wird, solltest du bei der ersten Erwähnung der Anleitung eine Erklärung oder einen Hinweis darauf geben, welche Attribute sie ändern müssen.

Du solltest `zaphosting` als Standard-Hostname, -Benutzername oder -Datenbankname verwenden.

### Software

Wenn du Software in deiner Anleitung erwähnst, solltest du darauf achten, dass du die korrekte Schreibweise und Großschreibung des Namens der Software beachtest. Wenn die Software-Website die Groß- und Kleinschreibung nicht beibehält, solltest du die gleiche Groß- und Kleinschreibung in einer Anleitung verwenden, um die Konsistenz zu wahren.


Wenn du die Software zum ersten Mal erwähnst, solltest du einen Hyperlink auf die Website der Software setzen, sofern eine offizielle Website vorhanden ist.