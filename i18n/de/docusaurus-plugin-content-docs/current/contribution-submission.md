---
id: contribution-submission
title: Einreichungsverfahren
description: Informationen zum Einreichungsverfahren des ZAP-Hosting Docs Beitragsprogramms - ZAP-Hosting.com Dokumentation
sidebar_label: Einreichungsverfahren

---

Auf dieser Seite erfährst du mehr über das chronologische Vorgehen, wenn du einen Beitrag zu unserer Dokumentation leisten möchtest.

### Anmeldung zum Programm

Der erste Teil des Vorgangs besteht darin, sicherzustellen, dass du dein GitHub-Konto verknüpft hast. Besuche dafür die Website zap-hosting.com und melde dich bei deinem Konto an. Gehen anschließend zu deinen Einstellungen und zum Abschnitt "Verbindungen", wo du dein GitHub-Konto mit deinem ZAP-Hosting-Konto verknüpfen kannst. Nun wo du weißt, dass du Teil des Beitragsprogramms bist, kannst du deine Beitragsideen vorschlagen.

## Inhalte vorschlagen

Der nächste Schritt ist der wichtigste, den du ausführen musst, bevor du einen Beitrag leisten kannst. Du musst uns Details über die Änderungen und Verbesserungen, die du vorhast, mitteilen. Stelle bitte sicher, dass deine Idee kein Duplikat einer bestehenden Dokumentseite ist und dass sie deiner Meinung nach für Anfänger oder fortgeschrittene Benutzer nützlich ist.

:::tip
Bitte benutze unseren Leitfaden, um sich über den Inhalt und den Stil der Dokumentation zu informieren, den wir erwarten.
:::

### Welche Themen suchen wir?

Für unser Beitragsprogramm suchen wir ein breites Spektrum an praktischen und qualitativ hochwertigen Anleitungen zu Produkten, Dienstleistungen und Open-Source-Software, die über ZAP-Hosting verfügbar sind oder sich auf eine unserer Dienstleistungen beziehen. Wenn du ein paar Ideen oder Inspirationen brauchst, sieh dir die Seiten unserer Dokumentation an, um ein Gefühl für unseren Schreibstil und die Art der Inhalte zu bekommen, die wir veröffentlichen.

Wie bereits in der Einleitung erwähnt, müssen alle Inhalte, die erstellt werden, original sein, um die Urheberrechtsgesetze einzuhalten. Unsere Leitfäden zielen darauf ab, qualitativ hochwertige Informationen durch eine Reihe von Schritten zu liefern, um sicherzustellen, dass der Leser versteht, was er tut und wie er es tun kann, mit dem Endziel, den Leser zu informieren und ihm die Lösung zu liefern.

### Vorschläge einreichen

Wenn du davon überzeugt bist, dass dein Vorschlag für unsere Dokumentation geeignet ist, gehe bitte zu unserem [ZAP Docs GitHub Repository] (https://github.com/zaphosting/docs) und eröffne ein Problem mit der Vorlage "Contribution Suggestion". Bitte befolge die Vorlage und trage alle notwendigen Details ein. Nachdem du den Vorschlag eingereicht hast, werden wir uns innerhalb weniger Tage mit dir in Verbindung setzen.

Wenn wir deinen Vorschlag genehmigen, qualifiziert sich dein Vorschlag für das Beitragsprogramm und wir schicken dir einen Vertrag zur Unterschrift, der uns erlaubt, deine Arbeit zu veröffentlichen! Sollte es ein Problem geben, werden wir uns mit dir in Verbindung setzen und dir alle Änderungsvorschläge mitteilen, die wir für die Annahme deines Vorschlags benötigen.

## Erstellung von Inhalten

Wenn du einen Beitrag zu unserer Dokumentation leistest, denke bitte daran, unsere Beitragsrichtlinien genau zu befolgen, um Konsistenz und ein hochwertiges Ergebnis zu gewährleisten. In diesem Unterabschnitt werden wir uns eingehend mit bewährten Praktiken und dem optimalen Ablauf für die Erstellung neuer Inhalte, aber auch für die Änderung bestehender Inhalte befassen. Wenn du GitHub zum ersten Mal verwendest, verwende bitte die folgenden kurzen Anleitungen, um zu verstehen, wie du am einfachsten neue Inhalte für unsere Dokumentationsseite bearbeiten oder erstellen kannst.

:::note
Stelle sicher, dass du deinen Inhalt vorgeschlagen hast und dass er genehmigt wurde, bevor du versuchst, Änderungen vorzunehmen, andernfalls können wir keine Belohnung garantieren, weil die Idee nicht genehmigt wurde.
:::

**Voraussetzungen:**

- [GitHub Account](https://github.com/)

Der erste Schritt besteht darin, einen eigenen Fork des ZAP-Hosting-Dokumenten-Repositorys auf GitHub zu erstellen. Dies kannst du tun, indem du zum [ZAP Docs GitHub Repository](https://github.com/zaphosting/docs) gehst und oben auf der Seite auf die Schaltfläche **Fork** klickst. 

![image](https://github.com/zaphosting/docs/assets/42719082/9bc28311-0a4c-4c25-9736-9d0eab932689)

Benenne das Repository nach dem Vorschlag, der akzeptiert wurde, und kreuze den Text "Copy the master branch only" an. Klicke dann auf die Schaltfläche "Create" und warte ein paar Sekunden, bis das Repository erfolgreich geforkt wurde. 

Nun kannst du zum nächsten Abschnitt übergehen, um Inhalte zu erstellen oder zu bearbeiten. Für fortgeschrittene Benutzer kann es sinnvoller sein, Inhalte lokal zu erstellen, da man sie so einfach und von unterwegs testen kann.

### Lokal über den Editor erstellen

Die empfohlene Methode zur **Erstellung neuer Inhalte** ist die lokale Erstellung mit einem Editor wie Visual Studio Code. In diesem Abschnitt zeigen wir dir, wie du eine neue Anleitung lokal mit einem Editor erstellst.

**Voraussetzungen:**

- IDE deiner Wahl, in diesem Beispiel werden wir folgende verwenden: [Visual Studio Code](https://code.visualstudio.com/)
- [GitHub Desktop](https://desktop.github.com/)

Der erste Teil des Prozesses besteht darin, dein Fork-Repository zu klonen. Der einfachste und benutzerfreundlichste Weg, dies zu tun, ist über GitHub Desktop, indem du **Hinzufügen** wählst, gefolgt von **Repository klonen** und dein Fork-Repository auswählst. Du kannst dies auch direkt über die Visual Studio Code Anwendung tun.

![image](https://github.com/zaphosting/docs/assets/42719082/75f02edb-0b46-4c5a-a4ca-c1fd2f49a1c3)

Als nächstes öffnest du den Repository-Ordner in Visual Studio Code. In der linken Registerkarte **Explorer** solltest du alle Ordner innerhalb des Repositorys sehen. Wir werden uns auf die Erstellung einer neuen Seite konzentrieren.

Der erste Schritt besteht darin, den richtigen Namen für deine neue Anleitungsdatei zu bestimmen. Die Dokumentationsdateien werden nach einer einfachen Konvention benannt, wobei sich das erste Wort auf die Art der Anleitung bezieht, in der Regel auf ein Spiel, ein Produkt oder einen Abschnitt, und alle folgenden Wörter auf den jeweiligen Abschnitt. Wir empfehlen dir, einen Blick auf die aktuelle Website zu werfen, um den richtigen Platz zu finden, an den du dein vorgeschlagenes Dokument einordnen kannst.

In diesem Fall haben wir in unserem Issue vorgeschlagen, eine neue Anleitung zum Spiel Rust zu erstellen, die eine Reihe von nützlichen Befehlen enthält. Auf der Webseite können wir sehen, dass es bereits einen Abschnitt **Rust** unter Gameserver gibt, also können wir im Ordner **docs** in unserer IDE nachsehen, um die richtige Namenskonvention zu finden. Dies bedeutet, dass der Dateiname des Leitfadens `rust-commands.md` sein wird. Erzeuge diese Datei innerhalb des Ordners **docs**.

Der nächste Teil besteht darin, die Metadaten zu platzieren. Am einfachsten geht das, indem du zu einer anderen Datei gehst, zum Beispiel `rust-plugins.md`, und die Top-Metadaten-Tags kopierst und in deine neue Datei einfügst. Du solltest den `id`-Tag so bearbeiten, dass er mit dem Namen deiner Datei übereinstimmt, in diesem Fall `rust-commands` und die anderen Metadaten auf der Grundlage deines akzeptierten Vorschlags für den neuen Guide bearbeiten.

Die Datei sollte nun wie im Beispiel beginnen:

```
---
id: rust-commands
title: Admin Commands
description: Information on Admin commands for Rust from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Admin Commands
---
```

Als letzten Schritt, um die neu erstellte Seite in der Seitenleiste anzuzeigen, fügen wir sie in der Datei `sidebar.js` an der richtigen Stelle ein. Da der Abschnitt **Rust** bereits existiert, können wir ihn mit "STRG+F" und der Suche nach "rust" finden. Unter dem letzten Punkt solltest du eine neue Zeile erstellen und den Namen deiner Datei eingeben, in diesem Beispiel wird es `rust-comamnds` sein.

![image](https://github.com/zaphosting/docs/assets/42719082/c5480a84-1778-4c62-928a-928fd4da962e)

:::note
Bitte achte darauf, dass du ein Komma (`,`) in die Zeile vor deiner neuen Zeile setzt, damit die Syntax korrekt ist. 
:::

Gehe nun zurück zu deiner neuen Anleitung. Du kannst `CTRL+SHIFT+V` benutzen oder auf das Vorschau-Symbol oben rechts im Editor drücken, um die IDE zu teilen, damit du deine Markdown-Änderungen live sehen kannst. Deine neue Anleitung ist nun einsatzbereit und du kannst mit dem Schreiben und Erstellen deines Inhalts beginnen.

![image](https://github.com/zaphosting/docs/assets/42719082/95effdaa-ab2d-4556-832c-dad33834d636)

:::tip
Wir empfehlen dringend, dass du auch den Abschnitt **Lokales Testen des Builds** liest, da du diesen Abschnitt mit dem lokalen Testen kombinieren kannst, um einen optimalen Arbeitsablauf zu schaffen, bei dem Änderungen auf deinem lokalen Build unterwegs aktualisiert werden, was sich als sehr nützlich erwiesen hat.
:::

Wenn du mit den Änderungen an deiner neuen Anleitung fertig bist, besteht der letzte Schritt des gesamten Prozesses darin, eine Übergabe an dein Fork-Repository vorzunehmen und einen Pull Request einzureichen. Du kannst einen Commit über den GitHub-Desktop erstellen, indem du einen passenden Titel und eine Beschreibung hinzufügst und über den oberen Button pushst. Ebenso kannst du dies auch direkt über Visual Studio Code tun, wenn du dies bevorzugst. Gehe nun zum Abschnitt **Inhalte einreichen**, um einen Pull Request zu erstellen und den Inhalt an das Hauptdokumentations-Repository zu übergeben.

### Bearbeitung über die GitHub-Website

Der einfachste und empfohlene Weg zur **Bearbeitung bestehender Inhalte** ist die GitHub-Website. In diesem Abschnitt zeigen wir dir, wie du bestehende Anleitungen über die GitHub-Website bearbeiten kannst.

Gehe dazu zunächst zu dem Fork, den du im vorherigen Schritt erstellt hast. Sobald du dich auf deinem ZAP Docs Fork befindest, kannst du auf alle Anleitungen der Dokumentation über den Ordner **docs** zugreifen.

![image](https://github.com/zaphosting/docs/assets/42719082/6a91889f-891d-440d-a5d3-720afc5d8abc)

Die Dokumentationsdateien sind nach einer einfachen Konvention benannt, bei der das erste Wort auf die Art der Anleitung verweist, in der Regel auf ein Spiel, ein Produkt oder einen Abschnitt, und alle folgenden Wörter auf den jeweiligen Abschnitt. Zum Beispiel bezieht sich `dedicated-windows.md` auf den Abschnitt Dedicated Server, und zwar speziell für das Betriebssystem Windows.

Öffne in diesem Fall die Zieldatei, die du bearbeiten möchtest. In diesem Beispiel verwenden wir "dedicated-windows.md". Nachdem du die Datei geöffnet hast, siehst du eine grobe Vorschau, wie sie in Markdown aussieht (das Layout kann aufgrund der Beta-Version leicht abweichen).

Navigiere ie zur rechten oberen Ecke der Datei und klicke auf das Bearbeitungssymbol (Stift). Daraufhin öffnet sich ein Bearbeitungsfenster, in dem du alle Änderungen vornehmen kannst, die du zuvor vorgeschlagen hast und die akzeptiert wurden.

![image](https://github.com/zaphosting/docs/assets/42719082/49570185-b495-42d2-b74a-0b9300922758)

Über die Schaltfläche **Vorschau** am oberen Rand des Bearbeitungsfensters kannst du in den Vorschaumodus wechseln, in dem die grobe Vorschau angezeigt wird und über die Schaltfläche **Bearbeiten** wieder zurückschalten.

![image](https://github.com/zaphosting/docs/assets/42719082/711ae450-e8c7-4a03-b358-4c5cf2caa7ba)

:::note
Bitte beachte, dass einige docusaurus-spezifische Elemente, wie z.B. Admonitions , bei der Vorschau über GitHub nicht korrekt angezeigt werden. Das liegt daran, dass sie nicht Teil des herkömmlichen Markdown-Formats sind. Sie werden jedoch bei lokalen Tests und in der Praxis korrekt angezeigt. 
:::

Bitte schaue dir die [ZAP-Dokumentationsrichtlinien] (contribution.guidelines) für alles, was Markdown, Struktur, Terminologie und mehr betrifft an.

Wenn du deine Änderungen vorgenommen hast, klicke auf die Schaltfläche **Änderungen bestätigen...**, woraufhin eine Aufforderung erscheint.

![image](https://github.com/zaphosting/docs/assets/42719082/1c401a6f-71ef-4853-8d9e-3f5e400f2c2c)

Gebe eine sinnvolle Commit-Nachricht ein, die erklärt, was du getan hast und gegebenenfalls auch eine erweiterte Beschreibung. Übertrage abschließend die Änderungen. Damit werden die Änderungen an deinen Fork der Dokumentation übergeben. Danach kannst du im Bereich **Inhalt einreichen** einen Pull Request erstellen, um den Inhalt an das Hauptdokumentations-Repository zu übermitteln.

### Lokales Testen des Builds

Bevor du den endgültigen Pull Request erstellst, empfiehlt es sich, das Dokument lokal zu erstellen und zu testen, um sicherzustellen, dass alles mit den von dir vorgenommenen Änderungen korrekt funktioniert. Wir empfehlen ausdrücklich, dass du deine Änderungen lokal testest, um sicherzustellen, dass dein Pull Request zügig bearbeitet wird.

:::note
Wenn du die Anleitung befolgt hast, um Änderungen lokal zu erstellen, kannst du den ersten Schritt überspringen, der das Klonen deines Repositorys beinhaltet, da du es bereits kennen solltest.
:::

**Voraussetzungen:**

- [Node.js v16.14 oder neuer](https://nodejs.org/en)
- [GitHub Desktop](https://desktop.github.com/) oder [Git](https://git-scm.com/)

Der erste Teil des Prozesses besteht darin, dein Fork-Repository zu klonen. Der einfachste und benutzerfreundlichste Weg, dies zu tun, ist über GitHub Desktop, indem du **Hinzufügen** wählst, gefolgt von **Repository klonen** und dein Fork-Repository auswählst. 

Ebenso kannst du Git verwenden, um dies zu erreichen. Erstelle einen neuen Ordner, in diesem Fall `Docs Test`, gebe den Ordner ein und starten Git Bash (Rechtsklick und Git Bash auf Windows). Wechsel dazu zu GitHub und notiere dir die URL deines Forks. Als nächstes führst du den folgenden Befehl aus und ersetzst "deine_url" durch die URL deines Forks:

```
git clone deine_url
```

Nun solltest du das Repository auf deinen lokalen Rechner geklont haben, unabhängig davon, welche Methode du verwendet hast. Im nächsten Schritt musst du alle benötigten Module herunterladen. Navigiere einfach zu dem Ordner, den du für dein Repository verwendet hast, klicke mit der rechten Maustaste und öffne das Befehlsterminal (oder du kannst das Git-Fenster verwenden). Führe den folgenden Befehl aus, um alle Module herunterzuladen:

```
npm install
```

Dieser Vorgang kann etwas Zeit in Anspruch nehmen, aber sobald er abgeschlossen ist, sollte ein "node_modules"-Ordner in deinem Repo-Ordner erstellt worden sein. Wenn du irgendwelche Fehler erhältst, ist es wahrscheinlich, dass du die Node.js-Voraussetzung nicht installiert hast.

Der letzte Schritt besteht darin, die Dokumentations-Website lokal auszuführen. Verwenden dazu den folgenden Befehl, um die Docs-Website zu erstellen:

```
npm start
```

Sobald dies abgeschlossen ist, sollte sich automatisch eine lokale Version der Website in deinem Standardbrowser auf dem Port `3000` öffnen. Diese lokale Version ist genau so, wie die Dokumentation während der Produktion aussehen wird und hier kannst du alles testen, was du ausprobieren möchtest!

Wenn du mit deinen Änderungen zufrieden bist, kannst du im nächsten Abschnitt einen Pull Request erstellen, um den Inhalt an das Hauptdokumentations-Repository zu übermitteln.

### Einreichen von Inhalten

Sobald du deine notwendigen Beiträge geleistet hast, von denen du glaubst, dass sie unseren Richtlinien genau entsprechen und von höchster Qualität sind, kannst du einen Pull Request erstellen. Dies kannst du tun, indem du zu deinem eigenen Fork des ZAP Docs Repository gehst, den **Contribute** Text unter den primären Buttons drückst und einen Pull Request öffnest.

![image](https://github.com/zaphosting/docs/assets/42719082/d08ce65e-2c21-4110-97d4-a15588172db4)

Es öffnet sich eine neue Seite, auf der du die Änderungen, die du vorgenommen hast, sehen kannst. Bitte gebe einen passenden Titel ein, der erklärt, was getan wurde. Achte bitte darauf, dass du in der Beschreibung deinen Vorschlag erwähnst/verlinkst, indem du `#000` neben der ID des Vorschlags verwendest. Wenn du ihn nicht über das Menü finden kannst, kannst du schnell zum [ZAP Docs GitHub Repository] (https://github.com/zaphosting/docs) gehen, den Bereich "Issues" aufrufen und dort nach deinem Vorschlag und der zugehörigen ID-Nummer suchen.

Sobald du den Titel und die Beschreibung eingegeben und sichergestellt hast, dass die Änderungen korrekt sind, kannst du deinen Pull Request über die entsprechende Schaltfläche erstellen.

![image](https://github.com/zaphosting/docs/assets/42719082/fc04a359-bffc-459b-89fd-94eee74e4a71)

Unser System wird überprüfen, ob du dein GitHub-Konto mit deinem ZAP-Hosting-Konto für das Beitragsprogramm verknüpft hast. Das System stellt auch sicher, dass deine Änderungen eine Reihe von Syntax- und Qualitätsprüfungen bestehen. Wenn beide Prüfungen erfolgreich verlaufen sind, wird Ihr Pull Request innerhalb weniger Tage vom ZAP-Hosting Docs Team geprüft. Es kann sein, dass wir dich auffordern, ein paar Änderungen vorzunehmen, wenn wir es für notwendig erachten, aber sobald dies genehmigt ist, ist deine Änderung bereit zur Veröffentlichung und du erhältst deine Belohnung.