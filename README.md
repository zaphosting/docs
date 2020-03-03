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
