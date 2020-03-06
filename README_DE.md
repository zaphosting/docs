## Docs, und wie man sie richtig schreibt!

Die Docdateien werden jeweils in /de und /en erstellt, gehe sicher das in beiden die datei existiert, egal ob übersetzt oder nicht.

Docdateien sollten immer `kategorie_titel.md` heißen, z.b. `account_usermanagement.md`.


### Inhalt

docdateien fangen immer mit folgendem text an:

```
---
id: dateiname_ohne_ende
title: Titel Der Seite
sidebar_label: Titel in der Sidebar
---
```

z.b.

```
---
id: account_usermanagement
title: Benutzerverwaltung
sidebar_label: Benutzerverwaltung
---
```

Damit die Titel in der rechten inhaltsanzeige angezeigt werden, sollten immer h2 oder h3 header:

```
## h2 header
### h3 header 
```

Verwendet werden, diese können auch untereinander stehen.


Resources und how-to's

https://docusaurus.io/docs/en/doc-markdown
https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
https://raw.githubusercontent.com/zap-docs/docs/master/de/beispiel.md


## Seite Fertig, was nun?
Nun muss diese in der linken sidebar eingefügt werden, das geht über die sidebars.json.

Wenn dort z.b. ein eintrag unter "Gameserver" hinzugefügt wird, muss die zeile folgend geändert werden:
```
alt -> "Gameserver": ["gameserver_resourcelimit"],
neu -> "Gameserver": ["gameserver_resourcelimit", "meine_neue_seite"],
```

Bei neuen kategorien geht das ganze so:
```
"Gameserver": ["gameserver_resourcelimit"],
"NeueKategorie": ["meine_neue_seite"],
```
Immer sichergehen das die json datei nach dem edit auch valide ist, dies wird beim Pull Request erstellen auch geprüft

**Beachten: Kategorien sollten, wenn möglich, in englisch sein, diese können in den sprachvariablen (de.json) manuell übersetzt werden!**

## Okay, wie füge ich sie hier ein?

Die Repository "Forken", das geht rechts oben!

Danach die änderungen auf deinem fork erstellen und unter https://github.com/zap-docs/docs/pulls eine Pull Request von deiner fork auf die master repository erstellen, danach kann sie gemerged werden.

Wenn du sachen änderst nachdem du den pull request erstellst, wird es automatisch zur PR hinzugefügt.


## Wie stelle ich die sprachvariablen für die Sidebar ein?

Hier gibt es jeweils 2 Möglichkeiten, entweder nachdem dein PR Merged wurde oder noch davor, danach ist immer einfacher, da das system die en.json sprachvariable immer updated, du kannst diese aber auch schon manuell einfügen, schau dir dazu mal die [en.json](https://github.com/Bluethefurry/docs/blob/master/sprachvariablen/en.json) und [de.json](https://github.com/Bluethefurry/docs/blob/master/sprachvariablen/de.json) an.
**Beachte: die Englische datei wird !immer! automatisch generiert, um diese zu übersetzen müssen die seiten im "en" ordner übersetzt werden**

Danach einen PR erstellen, wie oben, und fertig!
