---
id: contribution-blogs-guidelines
title: Blog-Richtlinien
description: "Entdecke, wie du hochwertige, konsistente Blog-Beiträge erstellst, die Leser fesseln und deine Schreibskills verbessern → Jetzt mehr erfahren"
sidebar_label: Richtlinien
---

![Blogs Banner](https://screensaver01.zap-hosting.com/index.php/s/ysxLZ26K3dSRLJQ/preview)

Um sicherzustellen, dass alle ZAP-Hosting Blog-Beiträge in Qualität und Stil einheitlich sind, haben wir eine Reihe von Richtlinien erstellt, die du beim Erstellen von Inhalten für unser Blogs Contribution Programm beachten solltest. Du musst unsere Richtlinien genau befolgen, damit deine Vorschläge und anschließenden Entwürfe schnell bearbeitet werden. Noch wichtiger ist, dass unsere Leser so eine bessere und konsistent hochwertige Erfahrung beim Lesen unserer Blogs haben.

Unsere Blog Contribution Richtlinien lassen sich in einige Hauptbereiche unterteilen:

- Struktur
- Stil
- Formatierung
- Terminologie

## Struktur

Unsere Blog-Beiträge im Contribution Programm sollten einer relativ einheitlichen Struktur folgen, um das Interesse der Leser zu wecken und ihnen Informationen sowie Neuigkeiten zu liefern. Das ZAP Contribution Team arbeitet mit dir zusammen, um sicherzustellen, dass deine Struktur passend ist, wenn du einen Blog-Vorschlag erstellst.

- **Seitentitel** (H1)
- **Einleitung** (H2) 
- **Vorbereitung** (H2)
- **Hauptthema** (H2)
- Optional: **Unterthema 1** (H3)
- Optional: **Unterthema 2** (H3)
- ...
- Optional: **Weiteres Thema** (H2)
- **Fazit** (H2)

:::info Verwendung von Unterüberschriften (H3 & H4)
Du wirst ermutigt, H3-Überschriften zu verwenden, um Unterabschnitte innerhalb der Haupt-H2-Abschnitte zu erstellen und größere Inhaltsblöcke besser zu strukturieren. Ein Beispiel findest du im Abschnitt **Hauptthema** oben.

Wenn du Unterüberschriften nutzt, macht es in der Regel Sinn, mindestens zwei oder mehr Unterüberschriften innerhalb der übergeordneten Überschrift zu haben, ansonsten ergibt es meist keinen Sinn, nur eine einzelne Unterüberschrift unter einer Hauptüberschrift zu haben.
:::

:::info
Beachte, dass das oben Genannte eine grobe Orientierung ist. Der Hauptteil deines Blog-Beitrags kann je nach Inhalt andere Überschriften haben, aber alle Blog-Beiträge sollten konsequent einen Titel, eine Einleitung und ein Fazit rund um den Hauptinhalt haben.
:::

### Titel

Der Titel deines Blog-Beitrags sollte kurz, klar und knackig sein, um die Aufmerksamkeit der Leser zu gewinnen. Er sollte genau sagen, worum es in deinem Blog geht, z.B. ob es News oder Tipps & Tricks sind. Ein gutes Beispiel wäre: **Top 10 FiveM Police Scripts**.

### Einleitung

Die Einleitung deines Blog-Beitrags sollte relativ kurz und auf den Punkt sein, typischerweise 1-2 Sätze. Im Text solltest du das Thema kurz beschreiben und vor allem erklären, was der Blog-Beitrag dem Leser präsentiert und welches Ziel er verfolgt.

Ein Beispiel für eine ideale Einleitung zu einem Blog-Beitrag über SteamCMD wäre:

- **1. Satz**: SteamCMD ist ein unverzichtbares Tool, das für die Installation von Dedicated Servern für viele Spiele wie Palworld, Enshrouded und mehr benötigt wird.
- **2. Satz**: In diesem Blog-Beitrag zeigen wir dir den Erst-Setup-Prozess zur Installation von SteamCMD auf deinem Linux-Server. Wir verwenden Ubuntu in den Beispielen, aber der Ablauf ist bei anderen Distributionen ähnlich.

Wie im Beispiel zu sehen, fasst die Einleitung kurz die relevanten Themen zusammen und stellt das Ziel des Blog-Beitrags für den Leser klar dar.

### Vorbereitung

Der Vorbereitungsteil ist hilfreich, um alle notwendigen Voraussetzungen zu klären, die der Leser erfüllen muss, bevor er dem Blog-Beitrag folgen kann. Das können Software- oder Hardware-Anforderungen sein, Anleitungen zur Vorbereitung von Software wie einer Firewall oder einfach eine Anleitung, sich via SSH oder RDP auf dem Server einzuloggen.

Wir empfehlen dir dringend, auf unserer [ZAP-Docs Webseite](https://zap-hosting.com/guides) nach Anleitungen zu suchen, die Vorbereitungsschritte abdecken oder damit zusammenhängen. Wenn es eine Anleitung zu einem Thema gibt, z.B. [SSH Initial Access](vserver-linux-ssh.md), solltest du diese verlinken und den Leser bitten, dieser Anleitung zu folgen, bevor er weitermacht.

Typische Voraussetzungen für Blog-Beiträge sind:

- Benötigte Software (z.B. Git, Node.js, Python, Docker)
- Tutorials, die dem Leser Grundwissen vermitteln (z.B. weitere ZAP-Docs Seiten)
- Benutzerkonten wie APIs
- Erforderliche Einstellungen (z.B. DNS/SSL)

Ein Beispiel für einen Blog-Beitrag über Reverse Proxy wäre:
```
Um einen Reverse Proxy einzurichten, benötigst du einen Linux-Server, auf dem dein Proxy läuft, und solltest dich mit diesem verbinden. Nutze unsere [SSH Initial Access](vserver-linux-ssh.md) Anleitung, falls du dabei Hilfe brauchst. Außerdem benötigst du Zugriff auf eine Domain, die du besitzt. Für jede Subdomain, die du verwenden möchtest, solltest du einen `A` DNS-Eintrag anlegen, der auf die IP-Adresse deines Linux-Servers zeigt.
```

### Hauptthema

Jetzt geht es an den Hauptteil deines Blog-Beitrags. Wir empfehlen, den Beitrag in mehrere Abschnitte zu unterteilen, damit der Leser beim Inhalt dranbleibt. Es gibt keine strikten Vorgaben, wie diese Abschnitte aufgeteilt sein müssen, aber als Faustregel solltest du größere Inhaltsmengen in mehrere Überschriften aufteilen. Das ZAP Contributions Team unterstützt dich dabei während des Prozesses.

Wenn dein Blog-Beitrag eine Schritt-für-Schritt-Anleitung oder ein Tutorial ist, macht es Sinn, die Schritte zu nummerieren und eine kurze Beschreibung im Hauptthema zu geben, z.B. **Schritt 1 – Ordner erstellen**. Du solltest kurz beschreiben, was der Leser in diesem Schritt macht, um das Ziel klarzumachen. Zwischen den Schritten solltest du kurze Einleitungen und Übergänge schreiben, die dem Leser erklären, was bisher passiert ist und was als Nächstes kommt. Diese Übergänge sind wichtig für den Kontext. Vermeide Wiederholungen und nutze verschiedene Formulierungen, um Schritte nicht ständig zu wiederholen.

### Fazit

Zum Schluss folgt das Fazit des Blog-Beitrags. Dieser Abschnitt sollte den Guide in 1-3 Sätzen abschließen, indem erklärt wird, was der Leser erfolgreich erreicht, gelernt oder umgesetzt hat.

Es macht auch Sinn, Verweise auf weiterführende Lektüre oder andere Blog-Beiträge bzw. Anleitungen zu geben, mit denen der Nutzer sein Wissen vertiefen kann. Du solltest hier Links zu bestehenden ZAP-Docs Anleitungen oder Blog-Beiträgen setzen, besonders wenn diese natürlich auf deinen Guide aufbauen.

## Stil

Der Schreibstil für die ZAP-Hosting Docs basiert auf unserem Anspruch, hochwertige, praktische und leicht zugängliche Blog-Beiträge zu erstellen, die eine breite Themenvielfalt abdecken und Leser aller Erfahrungsstufen unterstützen.

### Technisch & korrekt

Unsere Blog-Beiträge sollen so technisch korrekt und aktuell wie möglich sein, mit den neuesten Infos aus der Branche. In jedem Blog-Beitrag erwarten wir gut geschriebene, hochwertige Infos zu neuen Themen und Technologien sowie Tutorials, die den Leser beim Lernen neuer Inhalte unterstützen. Wenn dein Blog-Beitrag eine Schritt-für-Schritt-Anleitung oder ein Tutorial ist, sollte jeder Schritt einen klaren Zweck und eine Erklärung haben, inklusive zusätzlicher Optionen und/oder Flags, wenn sinnvoll.

Autoren sollten ihre Blog-Beiträge immer Korrektur lesen und testen, um sicherzugehen, dass alles technisch korrekt ist und wie vorgesehen funktioniert, bevor sie Entwürfe einreichen. Das ZAP Contributions Team liest und testet deinen Beitrag bei Bedarf, um Konsistenz und Faktencheck sicherzustellen oder Verbesserungen vorzuschlagen, falls Fehler entdeckt werden.

:::tip
Wir empfehlen allen Autoren, ihre Inhalte vor dem Einreichen mit einem Rechtschreib- und Grammatik-Check zu prüfen. Ein nützliches Tool dafür ist: https://languagetool.org/
:::

### Praktisch & nützlich

Wenn ein Leser einen Blog-Beitrag fertig gelesen hat, sollte er etwas gelernt, gebaut oder eingerichtet haben – von Anfang bis Ende. Unsere Blog-Beiträge sollen Leser aller Erfahrungsstufen unterstützen, deshalb solltest du dein Thema umfassend behandeln, alle nötigen Details und Voraussetzungen angeben. Du solltest Leser nur dann auf externe Seiten verweisen, wenn es keine passende Dokumentation bei ZAP-Docs gibt oder wenn es um zusätzliche Infos geht, die für deinen Artikel nicht zwingend nötig sind, aber das technische Verständnis erweitern können. Externe Links dürfen nicht auf Konkurrenz-Dokumentationen verweisen.

### Freundlich, formal & umfassend

Wir wollen, dass unsere Dokumentation zukunftsorientiert und freundlich ist, damit sie für jeden Leser zugänglich bleibt, dabei aber formal genug, um seriös zu wirken. Im Blog-Beitrag solltest du einen Ton wählen, der für alle Leser akzeptabel ist, egal wie viel Erfahrung sie haben oder welche Sprachbarrieren bestehen.

Da es sich um Blog-Beiträge handelt, die primär den Leser unterstützen, etwas zu lernen und ein Ergebnis zu erreichen, erwarten wir, dass du die zweite Person Singular verwendest (z.B. „Du musst...“) statt der ersten Person (z.B. „Ich denke...“), um den Leser direkt anzusprechen und den Fokus auf ihn zu legen.

Außerdem müssen alle Autoren unseren Verhaltenskodex einhalten, damit unsere Blog-Beiträge für jeden akzeptabel sind – unabhängig von Alter, Herkunft, Geschlechtsidentität, Erfahrung, Nationalität, Religion, politischer Einstellung, sexueller Orientierung, sozialem Status oder Technologie-Vorlieben. Vermeide bitte jegliche potenziell anstößige Sprache oder Inhalte, die sich auf die genannten Themen beziehen.

## Formatierung

Unser Blog wird mit der Markdown-Auszeichnungssprache formatiert, die weit verbreitet ist. Nutze die folgenden Abschnitte, um zu verstehen, welche Elemente wir verwenden und wie du sie in deinen Blog-Beiträgen einsetzen kannst.

Du kannst jedes Schreib-Tool für deine Inhalte nutzen, wir empfehlen aber **sehr**, das Tool **[StackEdit](https://stackedit.io/app#)** zu verwenden, um deinen Content zu schreiben und dabei alle coolen Markdown-Funktionen zu behalten. Du kannst dann direkt in Google Drive oder anderen File-Sharing-Apps exportieren und uns einen Link schicken.

:::tip
Für mehr Beispiele und ausführliche Erklärungen zu Markdown-Features schau bei [Markdown Guide](https://www.markdownguide.org/cheat-sheet/) vorbei.
:::

### Überschriften

Überschriften sind eines der wichtigsten Formatierungs-Tools, um Blog-Beiträge logisch und übersichtlich zu gliedern. Der Haupttitel ist die H1-Überschrift.

In unseren Blogs sollten H2-Überschriften verwendet werden, um den Beitrag in Hauptabschnitte zu unterteilen. Darunter nutzt du H3-Überschriften, um diese Hauptabschnitte in Unterabschnitte zu gliedern. Ein Beispiel wäre, einen Hauptabschnitt in mehrere Schritte zu unterteilen, damit der Beitrag leichter zu folgen ist. Es gibt auch H4-Überschriften, die seltener genutzt werden, aber denselben Zweck erfüllen.

:::info
Wenn du Unterüberschriften nutzt (z.B. H3 unter H2), stelle bitte sicher, dass es zwei oder mehr Überschriften derselben Ebene in diesem Abschnitt gibt, sonst ist das falsch.
:::

Hier ein schnelles Beispiel für die Nutzung von Überschriften:

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

Wir nutzen verschiedene Inline-Formatierungen, um die Lesbarkeit unserer Blog-Beiträge zu verbessern und Leser mit unterschiedlichen technischen Kenntnissen abzuholen. Lies den Abschnitt unten, um die Nutzung zu verstehen.

#### Fettdruck

Fettdruck wird hauptsächlich verwendet, um Infos hervorzuheben. Beispiele:

- Kontextwechsel zwischen Schritten
- Hostnames, Zugangsdaten & Benutzernamen
- Wichtige Fachbegriffe

Du kannst einfach zwei Sternchen außen an den Text setzen, z.B. `**hallo**` ergibt **hallo**.

#### Kursiv

Kursiv wird hauptsächlich genutzt, um neue technische Schlüsselbegriffe einzuführen. Beispiel: Wir richten heute einen *Reverse Proxy* ein.

Für Kursiv setzt du einfach einen Stern außen an den Text, z.B. `*ZAP-Hosting - Mehr POWER!*` ergibt *ZAP-Hosting - Mehr POWER!*.

#### Inline-Code

Inline-Code wird vor allem genutzt, um technische Infos wie URLs darzustellen. Beispiele:

- Dateinamen und Pfade (z.B. `C:/User/[DeinName]/AppData....test.png`)
- URLs (z.B. `https://zap-hosting.com`)
- Ports (z.B. `:30120`)
- Befehle (z.B. `ipconfig`)
- SQL-Abfragen (z.B. `SELECT * FROM servers`)
- Tastenkombinationen (z.B. `ENTER` oder `CTRL + C`)

#### Tabellen

Tabellen sind super, wenn du viele sich wiederholende Infos darstellen willst, z.B. Befehle, Beschreibungen und Nutzung in einem Spiel. Beispiel:

```
| Befehl      | Beschreibung            | Nutzung               |
| ----------- | ----------------------- | --------------------- |
| /help       | Hilfebefehl senden      | /help [Kategorie]     |
| /stop       | Server stoppen          | /stop [true/false]    |
```

#### Codeblöcke

Codeblöcke sind mega praktisch für Blog-Beiträge mit Befehlen, Skripten, Terminal-Ausgaben und mehr.

Um einen Codeblock zu erstellen, setzt du einfach ``` vor und nach dem Textblock. Du kannst auch die Programmiersprache angeben, z.B. ` ```js ` für JavaScript:

```js
function hello(name) {
    console.log(name)
}

var server = "ZAP-Hosting"
hello(server)
```

### Screenshots

Screenshots sind super hilfreich, um Leser visuell durch Schritte zu führen – wir empfehlen sie, wo immer es passt.

Du kannst Screenshots so einfügen, ersetze `your_url` durch die Bild-URL:
```
![](your_url)
```

Am besten nutzt du einen Online-Bilderhoster wie [Imgur](https://imgur.com/), um deine Bilder hochzuladen und dann im Markdown zu verlinken.

## Terminologie

In unseren Blog-Beiträgen verwenden wir viele wichtige Fachbegriffe. Wir erwarten, dass du US-Englisch als Basis nimmst, um Konsistenz zu gewährleisten. In diesem Abschnitt standardisieren wir einige häufig genutzte Begriffe.

### ZAP-Hosting Produkte

Wenn du ein ZAP-Hosting Produkt erwähnst, achte immer auf korrekte Bezeichnung, Schreibweise und Groß-/Kleinschreibung. Du kannst das auf [der ZAP-Hosting Webseite](https://zap-hosting.com) prüfen, wie das Produkt dort genannt wird.

### Benutzerdefinierte Attribute

In manchen Blog-Beiträgen brauchst du Konfigurationsoptionen wie Benutzer, Hostnames, Domains, IP-Adressen oder URLs, bei denen der Leser eigene Daten einsetzen muss.

Standardmäßig solltest du immer `[dein_attribut]` verwenden, um statische von individuellen Elementen zu unterscheiden, wobei `[attribut]` durch den Typ ersetzt wird. Beispiel: Bei einer IP schreibst du `[deine_server_ip]` oder bei einer URL `http://[deine_server_ip]:30120`. So weiß der Leser genau, was er anpassen muss. Erkläre oder weise beim ersten Mal darauf hin, welche Attribute geändert werden müssen.

Als Standard-Hostname, Benutzername oder Datenbankname solltest du `zaphosting` verwenden.

### Software

Wenn du Software erwähnst, achte auf korrekte Schreibweise und Groß-/Kleinschreibung. Falls die Webseite der Software inkonsistent ist, bleib innerhalb eines Artikels bei einer Schreibweise, um Einheitlichkeit zu wahren.

Verlinke beim ersten Erwähnen der Software auf die offizielle Webseite, sofern verfügbar.