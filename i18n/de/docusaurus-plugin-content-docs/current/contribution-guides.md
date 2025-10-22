---
id: contribution-guides
title: Guides Prozess
description: "Entdecke, wie du wertvolle, originale Anleitungen zu ZAP-Docs beiträgst und Nutzer mit klaren, praxisnahen Inhalten unterstützt → Jetzt mehr erfahren"
sidebar_label: Guides Prozess
---

![Guides Banner](https://screensaver01.zap-hosting.com/index.php/s/4aaqq3zctZFW4JJ/preview)

Erfahre auf dieser Seite mehr über den Prozess, wie du zu unseren ZAP-Docs beitragen kannst. Der Ablauf ist hier chronologisch dargestellt, daher empfehlen wir, hier zu starten.

## Schritt 1: Inhalte vorschlagen

Der erste Teil des Prozesses besteht darin, ein Vorschlags-Issue über unser GitHub-Repository zu erstellen. Du musst uns Details zu den Änderungen und Verbesserungen geben, die du vorhast.

Bitte stelle sicher, dass deine Idee kein Duplikat eines bestehenden Guides oder Vorschlags ist und dass du wirklich glaubst, dass sie für Anfänger oder fortgeschrittene Nutzer nützlich sein wird. Bestehende Vorschläge kannst du dir auf der [Issues-Seite](https://github.com/zaphosting/docs/issues?q=is%3Aissue) anschauen.

:::tip
Wir empfehlen, unsere [Richtlinien](contribution-guides-guidelines.md) zu lesen, um den Content- und Dokumentationsstil zu verstehen, den wir verfolgen.
:::

### Welche Themen suchen wir?

In unseren Guides suchen wir eine breite Palette an praxisnahen und hochwertigen Anleitungen zu Produkten, Services und Open-Source-Software, die über ZAP-Hosting verfügbar sind oder sich auf unsere Angebote beziehen. Wenn du Ideen oder Inspiration brauchst, schau dir unsere Seiten in den ZAP-Docs an, um ein Gefühl für unseren Schreibstil und die Art der Inhalte zu bekommen.

Wie eingangs erwähnt, muss sämtlicher Content original sein, um Urheberrechtsverletzungen zu vermeiden. Jegliche unautorisierte Nutzung von KI-/generativen Tools und/oder anderen geistigen Eigentumsrechten ist strikt verboten. Unsere Guides sollen hochwertige Infos in Schritt-für-Schritt-Anleitungen bieten, damit der Leser versteht, was er tut und wie, mit dem Ziel, ihn zu bilden und ihm Lösungen zu liefern.

#### Gesuchte Guides Liste

Wir haben eine praktische Liste mit tollen Vorschlägen für neue Guides, die dich interessieren könnten. Für manche Themen gibt es sogar einen extra Bonus als Belohnung. Du kannst die [Liste hier manuell einsehen](https://docs.google.com/document/d/13R321FP6Yo3TMQZ07vMARQFlX6n_Or6RIrLpU7IsMfs/edit?usp=sharing).

<iframe width="800" height="750" src="https://docs.google.com/document/d/e/2PACX-1vRACoNJMjk3rcWyo6LDt8WCvtqB17JpdjsPW3YHpLaZJgfPxGlt4pDEnD1ezOwGW1eljWZYPSyfgrb3/pub?embedded=true"></iframe>
<br></br>

:::note
Beachte, dass dies nur nützliche Ideen sind, du **musst nicht** strikt nur darüber schreiben, deine Vorschläge können kreativ sein, wie oben erwähnt.
:::

### Vorschlag einreichen

Wenn du sicher bist, dass dein Vorschlag für unsere Dokumentation passt, geh bitte zu unserem [ZAP Docs GitHub Repository](https://github.com/zaphosting/docs) und öffne ein Issue mit der Vorlage **Contribution Suggestion**. Folge der Vorlage und fülle alle nötigen Details aus. Du wirst auch gebeten, unsere Teilnahmebedingungen für das Contribution-Programm zu akzeptieren, die du unter [Contribution Terms](contribution-terms.md) findest.

:::caution
Bitte gib deine ZAP ID korrekt an, damit deine Belohnung auf das richtige Konto ausgezahlt wird!
:::

Nachdem du deinen Vorschlag eingereicht hast, bemühen wir uns, dir innerhalb von 3-5 Tagen zu antworten. Die Antwort erfolgt direkt in deinem GitHub-Issue.

:::tip
**Probleme?** Tritt gerne unserem [ZAP-Hosting Discord Server](https://zap-hosting.com/discord) bei, wo wir und die ZAP-Community dir gerne weiterhelfen. Alternativ kannst du uns über ein [Ticket auf unserer Website](https://zap-hosting.com/en/customer/support/) kontaktieren und "Contribution Program - Guides" im Betreff angeben, damit dein Anliegen an das ZAP-Hosting Contributions Team weitergeleitet wird.
:::

In unserer Antwort geben wir dir Feedback oder Details zu Anpassungen, die wir uns bei deinem Vorschlag wünschen. Falls es Probleme gibt, klären wir das direkt in deinem GitHub-Issue.

## Schritt 2: Guide schreiben

Wenn du Änderungen oder Ergänzungen an unserer Dokumentation vornimmst, halte dich bitte strikt an unsere [Richtlinien](contribution-guides-guidelines.md), um Konsistenz und hohe Qualität sicherzustellen. In diesem Abschnitt gehen wir auf Best Practices und den optimalen Workflow für das Erstellen neuer Inhalte und das Ändern bestehender Inhalte ein. Wenn du neu bei GitHub bist, helfen dir die kurzen Tutorials unten, den einfachsten Weg zu verstehen, um Inhalte für unsere ZAP-Docs zu bearbeiten oder neu zu erstellen.

:::note
Stelle sicher, dass du vorher einen Vorschlag in unserem [GitHub Repository](https://github.com/zaphosting/docs) erstellt hast und dieser von einem Mitglied des ZAP Contribution Teams genehmigt wurde, bevor du mit dem Schreiben eines neuen Guides oder Änderungen beginnst. Ohne Genehmigung können wir keine Belohnung garantieren.
:::

**Voraussetzungen:**
- [GitHub Account](https://github.com/)

Der erste Schritt ist, deinen eigenen Fork des ZAP-Docs Repositories auf GitHub zu erstellen. Gehe dazu zum [ZAP Docs GitHub Repository](https://github.com/zaphosting/docs) und klicke oben auf den **Fork**-Button.

![](https://screensaver01.zap-hosting.com/index.php/s/3AGoSTE7dGTsdz7/preview)

Benenne das Repository passend zu deinem angenommenen Vorschlag und aktiviere die Option `Copy the master branch only`. Drücke dann auf Erstellen und warte ein paar Sekunden, bis der Fork fertig ist.

Mit deinem eigenen Fork kannst du jetzt im nächsten Abschnitt deinen Beitrag fertigstellen. Es gibt zwei Hauptmethoden, Inhalte zu erstellen: direkt über die GitHub-Webseite oder lokal per Klonen des Repositories. Ersteres ist benutzerfreundlicher, letzteres erlaubt dir, Docusaurus lokal zu testen und Live-Änderungen zu sehen.

:::tip
Für Anfänger oder Git-Neulinge empfehlen wir **Methode 1**, da sie einfacher, schneller und komplett über den Browser via GitHub läuft. Kein Setup nötig, weniger Stress.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Methoden zum Erstellen von Guides

<Tabs>
<TabItem value="direct" label="Methode 1: Direkt über GitHub Website" default>

Der einfachste und empfohlene Weg, Inhalte zu erstellen, ist über die GitHub-Webseite. Hier zeigen wir dir, wie du einen neuen Guide erstellst oder einen bestehenden Guide bearbeitest.

Gehe zu deinem Fork, den du im vorherigen Schritt erstellt hast. Dort findest du alle Dokumentations-Guides im **docs**-Ordner.

![](https://screensaver01.zap-hosting.com/index.php/s/dqptZFrSTrBBHAJ/preview)

Die Dateien sind einfach benannt: Das erste Wort steht für die Art des Guides, meist ein Spiel, Produkt oder Bereich, gefolgt von weiteren Wörtern für den spezifischen Abschnitt. Wir empfehlen, auf unserer aktuellen [ZAP-Docs Website](https://zap-hosting.com/guides) zu stöbern, um den passenden Bereich für deinen Guide zu finden. Zum Beispiel steht `dedicated-windows.md` für den Dedicated Server Bereich, speziell Windows OS.

Jetzt musst du entweder eine bestehende Guide-Datei öffnen oder eine neue erstellen, je nachdem, ob du einen Guide aktualisierst oder einen neuen schreibst. Nutze den passenden Tab unten für die Anleitung, da ein neuer Guide etwas mehr Vorbereitung braucht.

<Tabs>
<TabItem value="direct_new" label="Neuen Guide erstellen" default>

In diesem Beispiel wollen wir einen neuen Guide für das Spiel Rust schreiben, speziell zu den Befehlen, die das Spiel bietet. Auf der ZAP-Docs Website und im Repository sehen wir, dass es bereits eine **Rust**-Sektion unter den Gameserver-Produkten gibt. Nach der Namenskonvention und den bestehenden Guides sollte der neue Guide `rust-commands.md` heißen.

Um eine neue Datei zu erstellen, gehe ins [GitHub Repository](https://github.com/zaphosting/docs), öffne den **docs**-Ordner und klicke rechts auf **Add File**. Wähle dann **Create new file** aus, es öffnet sich ein neuer Tab.

![](https://screensaver01.zap-hosting.com/index.php/s/xgL3QF9HzJnwARA/preview)

Oben im Pfad kannst du den Dateinamen setzen, in unserem Beispiel `rust-commands.md`.

:::info
Achte darauf, die Dateiendung `.md` zu verwenden, da alle Guides im Markdown-Format sind.
:::

Als nächstes fügst du wichtige Metadaten am Anfang der Datei ein. Am einfachsten kopierst du die Metadaten aus einer anderen Datei wie `rust-plugins.md` und passt sie an. Wichtig ist, dass das Feld `id` **genau** deinem Dateinamen ohne `.md` entspricht.

Unser Beispiel sieht so aus:
```
---
id: rust-commands
title: "Rust: Admin Commands"
description: "Informationen zu Admin-Befehlen für Rust von ZAP-Hosting"
sidebar_label: Admin Commands
services:
  - gameserver
---
```

:::note
Wir prüfen die Metadaten nochmal während des Reviews, also keine Sorge, wenn du hier Schwierigkeiten hast – mach einfach weiter.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/2CJFHoc5LeD4YSn/preview)

</TabItem>

<TabItem value="direct_existing" label="Bestehenden Guide bearbeiten" default>

Öffne die Datei, die du bearbeiten möchtest. In diesem Beispiel nehmen wir `dedicated-linux-satisfactory.md` aus dem `/docs`-Ordner. Du siehst eine grobe Vorschau basierend auf Markdown.

Klicke oben rechts auf das Bearbeiten-Symbol (Stift). Es öffnet sich ein Tab, in dem du die Datei direkt editieren kannst.

![](https://screensaver01.zap-hosting.com/index.php/s/SZTsAikipzCZcg3/preview)

</TabItem>
</Tabs>

#### Weiter: Inhalte erstellen

Jetzt kannst du den vereinbarten Content schreiben. Speichere oder committe regelmäßig, damit du nichts verlierst.

:::tip Sicher arbeiten
Der GitHub-Editor speichert nicht automatisch. Wenn du den Tab schließt oder etwas passiert, kannst du Fortschritt verlieren.

Wir empfehlen das Markdown-Tool **[StackEdit](https://stackedit.io/app#)**, um lokal zu schreiben und Fortschritte zu speichern oder zu synchronisieren. Danach kannst du den Text einfach in GitHub kopieren und committen.
:::

Mit dem **Preview**-Button oben im Editor kannst du zwischen Bearbeiten und Vorschau wechseln.

![](https://screensaver01.zap-hosting.com/index.php/s/4YcQo6q3iAAGYkZ/preview)

:::note Docusaurus-Elemente
Manche Docusaurus-spezifischen Elemente wie Admonitions (`:::note`, `:::tip` etc.) oder Tabs werden in der GitHub-Vorschau nicht korrekt angezeigt, da sie kein Standard-Markdown sind. Lokal und in Produktion funktionieren sie aber einwandfrei.
:::

:::info Folge unseren Richtlinien
Siehe die [Richtlinien](contribution-guides-guidelines.md) für alles zu Markdown, Struktur, Terminologie und mehr.
:::

Nach deinen Änderungen klicke auf **Commit changes...**. Es öffnet sich ein Fenster.

![](https://screensaver01.zap-hosting.com/index.php/s/2iQCZzzAHsHS2rt/preview)

Gib eine aussagekräftige Commit-Nachricht ein und optional eine ausführliche Beschreibung. Dann committe die Änderungen. Sie landen in deinem Fork. Anschließend kannst du zum Abschnitt **Inhalte einreichen** gehen, um einen Pull Request zu erstellen und deine Änderungen ins Haupt-Repository einzureichen.

</TabItem>

<TabItem value="local" label="Methode 2: Lokal via IDE (git clone)">

Du möchtest lieber lokal mit einer IDE oder einem Editor wie Visual Studio Code arbeiten? Hier zeigen wir, wie du einen neuen Guide erstellst oder einen bestehenden lokal bearbeitest.

**Voraussetzungen:**
- IDE deiner Wahl, hier Visual Studio Code
- [GitHub Desktop](https://desktop.github.com/) oder ein anderes Git-Tool

Zuerst klonst du deinen Fork. Am einfachsten mit GitHub Desktop: Klicke auf **Add**, dann **Clone repository** und wähle deinen Fork aus. Alternativ kannst du das auch direkt in der IDE machen, wenn sie Git unterstützt.

![](https://screensaver01.zap-hosting.com/index.php/s/g8AwEcGa6mBrQ75/preview)

Öffne den Repository-Ordner in Visual Studio Code. Im Explorer links siehst du alle Ordner.

Die Dateien sind wie oben beschrieben benannt. Schau dir die [ZAP-Docs Website](https://zap-hosting.com/guides) an, um den passenden Bereich zu finden.

Jetzt öffnest du entweder eine bestehende Datei oder erstellst eine neue. Nutze den passenden Tab unten.

<Tabs>
<TabItem value="local_new" label="Neuen Guide erstellen" default>

In unserem Beispiel wollen wir einen neuen Rust-Guide zu Befehlen schreiben. Die Rust-Sektion gibt es schon unter Gameservern. Der neue Guide heißt `rust-commands.md`.

Erstelle im `/docs`-Ordner eine neue Datei mit dem passenden Namen.

:::info
Vergiss nicht die `.md` Endung, alle Guides sind Markdown.
:::

Füge am Anfang die Metadaten ein, am besten kopierst du sie aus `rust-plugins.md` und passt sie an. Wichtig: `id` muss genau deinem Dateinamen ohne `.md` entsprechen.

Beispiel:
```
---
id: rust-commands
title: "Rust: Admin Commands"
description: "Informationen zu Admin-Befehlen für Rust von ZAP-Hosting"
sidebar_label: Admin Commands
services:
  - gameserver
---
```

:::note
Wir prüfen die Metadaten nochmal beim Review, also keine Panik, wenn du hier Schwierigkeiten hast.
:::

Damit dein Guide in der Sidebar von Docusaurus erscheint, musst du ihn in der `sidebar.js` Datei an der richtigen Stelle hinzufügen. Die Rust-Sektion findest du mit `STRG+F` und Suchbegriff rust.

Füge unter dem letzten Eintrag eine neue Zeile mit deinem Dateinamen ein, z.B. `rust-commands`. Falls es die Sektion noch nicht gibt, kannst du sie analog zu anderen Sektionen anlegen.

![](https://screensaver01.zap-hosting.com/index.php/s/TwKjWmCofG5Rs8f/preview)

:::note
Achte darauf, vor deiner neuen Zeile ein Komma (`,`) zu setzen, damit die Syntax stimmt.
:::

</TabItem>

<TabItem value="local_existing" label="Bestehenden Guide bearbeiten" default>

Bestehende Dateien zu bearbeiten ist einfach, da du die Struktur nicht neu aufbauen musst.

Öffne die Datei im `/docs`-Ordner und bearbeite sie wie gewünscht.

</TabItem>
</Tabs>

#### Weiter: Inhalte erstellen

Jetzt kannst du den vereinbarten Content schreiben. Speichere oder committe regelmäßig, damit du nichts verlierst.

In Visual Studio Code kannst du mit `STRG+SHIFT+V` oder dem Vorschau-Icon oben rechts die Markdown-Vorschau aktivieren, um deine Änderungen live zu sehen.

:::note Docusaurus-Elemente
Docusaurus-spezifische Elemente wie `:::note`, `:::tip` oder Tabs werden in der GitHub-Vorschau nicht korrekt angezeigt, lokal und in Produktion aber schon.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/cXgQEswNsbpGMsR/preview)

:::info Folge unseren Richtlinien
Siehe die [Richtlinien](contribution-guides-guidelines.md) für alles zu Markdown, Struktur, Terminologie und mehr.
:::

Wenn du fertig bist, pushe deinen Commit zu deinem Fork und erstelle einen Pull Request. In GitHub Desktop oder anderen Git-Tools kannst du Titel und Beschreibung hinzufügen und dann pushen.

![](https://screensaver01.zap-hosting.com/index.php/s/tFdrLknnXn62sZc/preview)

Danach kannst du zum Abschnitt **Inhalte einreichen** gehen, um den Pull Request zu erstellen.

:::tip
Wir empfehlen auch den optionalen Abschnitt **Build lokal testen** zu lesen. So kannst du Änderungen live testen und deinen Workflow optimieren. Ist aber kein Muss.
:::

</TabItem>
</Tabs>

### Optional: Build lokal testen

Bevor du den finalen Pull Request erstellst, ist es gute Praxis, lokal zu bauen und zu testen, ob alles funktioniert. Wir empfehlen das, damit dein Pull Request schneller bearbeitet wird. Es ist aber nicht zwingend nötig.

:::tip
Das ist **NICHT** verpflichtend, da wir automatisch einen Build bei Pull Requests ausführen. Aber lokal testen hilft beim Debuggen und Live-Check.
:::

:::note
Wenn du schon lokal arbeitest, kannst du den ersten Schritt mit dem Klonen überspringen, da du das Repository ja schon hast.
:::

**Voraussetzungen:**
- [Node.js v16.14 oder höher](https://nodejs.org/en)
- [GitHub Desktop](https://desktop.github.com/) oder [Git](https://git-scm.com/)

Klonen des Forks: Am einfachsten mit GitHub Desktop über **Add** > **Clone repository** und deinen Fork auswählen.

Alternativ mit Git: Erstelle einen neuen Ordner, z.B. `Docs Test`. Öffne Git Bash darin (Rechtsklick > Git Bash). Kopiere die URL deines Forks von GitHub und führe aus:
```
git clone [deine_url]
```

Jetzt hast du das Repo lokal. Wechsle in den Ordner, öffne ein Terminal (cmd oder Git Bash) und installiere alle Module mit:
```
npm install
```

Das kann eine Weile dauern. Wenn Fehler kommen, hast du wahrscheinlich Node.js nicht installiert.

Starte die lokale Seite mit:
```
npm start
```

Nach dem Start öffnet sich automatisch eine lokale Version der Website im Browser auf Port `3000`. So sieht die Doku später aus und du kannst alles testen!

Wenn du zufrieden bist, kannst du den Pull Request erstellen.

## Schritt 3: Inhalte einreichen

Wenn du deine Beiträge fertig hast und sie unseren Richtlinien entsprechen, kannst du einen Pull Request (PR) erstellen. Gehe dazu zu deinem Fork des ZAP Docs Repositories, klicke auf den Text **Contribute** unter den Hauptbuttons und öffne einen Pull Request.

![](https://screensaver01.zap-hosting.com/index.php/s/GLjSno3Ltz3zFpZ/preview)

Es öffnet sich eine Seite, auf der du deine Änderungen sehen kannst. Standardmäßig ist eine Checkliste in der Beschreibung, die du nach Durchsicht löschen kannst.

Gib einen passenden Titel ein, der erklärt, was du gemacht hast. In der Beschreibung verlinke bitte deinen Vorschlag mit `#000` und der ID des Issues. Falls du das nicht im Menü findest, kannst du im Haupt-Repository unter Issues nach deiner Vorschlags-ID suchen.

Wenn Titel, Beschreibung und Änderungen passen, klicke auf den Button, um den Pull Request zu erstellen und an unser Repository zu senden.

![](https://screensaver01.zap-hosting.com/index.php/s/mrGm5f2WMttYzFT/preview)

Unser System prüft Syntax und Qualität. Wenn alles passt, wird dein PR innerhalb weniger Tage vom ZAP-Docs Team geprüft.

Während der Review-Phase können wir dich bitten, Änderungen vorzunehmen oder wir passen selbst etwas an. Nach Abschluss genehmigen wir deinen PR zur Veröffentlichung.

## Schritt 4: Guide veröffentlichen & Belohnung

Wenn wir deinen Pull Request akzeptieren, antworten wir dir im PR mit wichtigen Infos zur Veröffentlichung deines Guides und zur Auszahlung deiner Belohnung für die erfolgreiche Mitarbeit.

:::info
Die Belohnung hängt von verschiedenen Faktoren ab, vor allem Qualität und Umfang des geschriebenen Contents sowie weitere Kriterien, die das ZAP Contribution Team bewertet. Mehr dazu findest du in unseren [Rewards](contribution-rewards.md).
:::

Glückwunsch zum Beitrag zu unseren ZAP-Hosting Guides! Wir schätzen deine Unterstützung sehr! 💚