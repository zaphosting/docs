## Docs, wie man sie richtig schreibt!

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

Weitere beispiele können in 
https://raw.githubusercontent.com/zap-docs/docs/master/de/beispiel.md

gefunden werden.


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
Immer sichergehen das die json datei nach dem edit auch valide ist.
**Beachten: Kategorien sollten, wenn möglich, in englisch sein, diese können in den sprachvariablen manuell übersetzt werden!**

## Okay, wie füge ich sie hier ein?

Die Repository "Forken", das geht rechts oben!

Danach die änderungen auf deinem fork erstellen und unter https://github.com/zap-docs/docs/pulls eine Pull Request von deiner fork auf die master repository erstellen, danach kann sie gemerged werden.

