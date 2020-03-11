---
id: whatiszap
title: Die ZAP-Hosting Docs
sidebar_label: Die ZAP-Hosting Docs
---

Hier findest du Anleitungen und Erklärungen zu verschiedenen Produkten, Spielen oder dem Webinterface.

## Navigation

In der Linken Sidebar können alle Doc-Einträge eingesehen und geöffnet werden:

![](https://screensaver01.zap-hosting.com/index.php/apps/files_sharing/publicpreview/4ajTrW35DwFXJYG?x=1920&y=553&a=true&file=firefox_5o8oDnjmBc.png&scalingup=0)

Alle Einträge haben außerdem noch eine Rechte Sidebar, womit man schnell bestimmte Teile des Eintrages finden kann:


![](https://screensaver01.zap-hosting.com/index.php/apps/files_sharing/publicpreview/nzDodoLQwM8rCcS?x=1920&y=553&a=true&file=firefox_P1tTEtDoUT.png&scalingup=0)


Wenn du einen Fehler findest, ein Bild korrigieren oder gar einen eigenen Eintrag schreiben willst, kannst du das bei uns über unsere [GitHub Repository](https://github.com/zap-docs/docs) machen.

## Aufbau & Tools

Wichtig ist, dass Anleitungen in einem einheitlichen Stil geschrieben werden. Dabei ist sowohl eine einwandfrei Rechtschreibung, als auch die Benutzung von Formatierungen (Codeblöcken, Screenshots, Einrückungen, Fonts, etc.) und Emojis wichtig für die Übersicht.


### 📚 Inhaltsverzeichnis

Auf der rechten Seite neben Anleitungen ist ein Inhaltsverzeichnis zu finden, über das man schnell an die gewünschte Stelle springen kann.
Dabei werden h2 und h3 Tags berücksichtigt, die so verwendet werden:

h2 Tag:
``` 
## Text 
```
h3 Tag:
```
### Text
```

Zum Verständnis nochmal:
```
(h1) # Wird nicht in der Liste  angezeigt
(h2) ## Wird Angezeigt
(h3) ### Wird als Sub-Eintrag unter dem oberen angezeigt
(h4) #### Wird nicht in der Liste  angezeig
```

### 😀 Emojis

In den Inhaltsverzeichnissen sollen bei allen h3 Tags Emojis verwendet werden.
Lade Dir dazu einen Emoji Picker für Firefox runter. Beispiel: 
https://addons.mozilla.org/de/firefox/addon/awesome-emoji-picker/

### ✏️ Sprachkorrektur

Lade Dir ein Rechtschreib-/ Grammatiktools runter, bevor du Anleitungen schreibst.
Für Firefox: https://addons.mozilla.org/de/firefox/addon/languagetool/

Dabei kannst du den Text mit auswählen und mit *rechtsklick* prüfen:
![](https://screensaver01.zap-hosting.com/index.php/apps/files_sharing/publicpreview/p6yfWF9jAYbcN8z?x=1920&y=553&a=true&file=firefox_j3QnCDKL5O.png&scalingup=0)

### 📑 Syntax

*Kursiv schreiben*
```
*Text*
``` 


**Bold schreiben**
```
**Text**
``` 


**Unsortierte Liste**
```
* Item 1
* Item 2
  * Item 2a
  * Item 2b
```


**Sortierte Liste**
```
1. Item 1
1. Item 2
1. Item 3
   1. Item 3a
   1. Item 3b
```


**Screenshots**
```
![](LinkZumBild)
```
Bitte benutze den ZAP-Hosting Screensaver um hier Bilder hochzuladen.


>Blockquotes (Zitate) - bzw. nutzen wir gerne als Tipp, sollte bei jeder Anleitung die Übersicht verbessern und darf auch ruhig mehrzeilig sein.
```
> Mein tolles
> Zitat
```


`Inline code geht so:`
```
`Code`
```


## Eine Seite Verändern

Um eine existierende Seite zu verändern kannst du oben rechts auf den "Edit" Button klicken:

![](https://i.imgur.com/S7Jga7m.png)

Diese leitet dich auf die Source-Datei des Eintrags:

![](https://i.imgur.com/XXLwOus.png)

Hier kannst du nun auf den "Bearbeiten" Button klicken, dies wird eine Kopie der gesamten Docs auf deinem Github Konto erstellen:

![](https://i.imgur.com/FKjvhW6.png)

![](https://i.imgur.com/aoD4odD.png)

### 🔎 Text suchen

Mit der Maus in den Quelltext klicken und danach *STRG + F* drücken

![](https://screensaver01.zap-hosting.com/index.php/apps/files_sharing/publicpreview/SYN5pdmNjDm5fkX?x=1920&y=553&a=true&file=firefox_Dn5cN39pkU.png&scalingup=0)


### 🥅 Fertigstellen

Gehe sicher, dass du deine Änderung auch richtig beschreibst, damit wir sofort wissen, worum es geht:

![](https://i.imgur.com/brIixcL.png)

Wenn du deine Änderungen vorgenommen hast, kannst du nun auf "**Propose File Change**" Klicken, dies bringt dich zum Pull Request Preview, hier kannst du deine Änderungen noch mal überschauen:

![](https://i.imgur.com/22bHojQ.png)

Wenn du dir sicher bist, dass alles korrekt ist, kannst du nun auf "**Create Pull Request**" Klicken

![](https://i.imgur.com/gOstBbM.png)

![](https://i.imgur.com/4SdxcHb.png)


Nun wurde deine Pull Request erstellt.

> Bevor diese in das Wiki integriert wird, muss diese auf Richtigkeit überprüft werden, dazu erhältst du ggf. eine Antwort auf den Pull Request oder eine E-Mail vom System.

![](https://i.imgur.com/M4VZpra.png)

Wenn du weitere Änderungen vornehmen willst, kannst du auf deine Branch öffnen, und dort weitere Dateien ändern, diese werden automatisch in die Pull Request integriert:

![](https://i.imgur.com/Tush4SB.png)


## Eine Neue Seite Erstellen

### 🗃️ Repository klonen

Um eine neue Seite zu erstellen, muss die Repository Geforked werden:

![](https://i.imgur.com/IfVrnoY.png)

Dieser Fork ist eine 1:1 Kopie der Repository auf deinen eigenen Account, worauf Änderungen gemacht werden können.

> Wenn dein Fork schon existiert aber nicht mehr aktuell ist, muss dieser neu erstellt werden, dies wird in (folgendem Video erklärt)[https://screensaver01.zap-hosting.com/index.php/s/JyXci8T6ziCk424/]

![](https://i.imgur.com/lIyCWc2.png)

### 🏴󠁧󠁢󠁥󠁮󠁧󠁿 Sprache auswählen

Um eine neue Datei zu erstellen, öffne zuerst den Ordner der Sprache, für welche du die Seite erstellen willst (in unserem Beispiel ist es **de**).

![](https://i.imgur.com/EBXMRts.png)

Hier sind alle Daten der Docs gespeichert, um eine neue zu erstellen, klicke auf "Create new file"

![](https://i.imgur.com/SaPdUqx.png)

### 📁 Dateiname

Gebe der Datei einen Namen, beachte dafür die Kategorisierung, wenn es einen Wikieintrag für Minecraft ist, sollte die Datei mit "minecraft_" anfangen, z.b.

```
minecraft_configure
```

Außerdem muss die Dateiendung immer `.md` sein, das Endresultat sieht dann so aus:

```
minecraft_configure.md
```

![](https://i.imgur.com/BaxQ8ZA.png)

Nun müssen die Metadaten der Seite erstellt werden, benutze dafür folgendes Beispiel:

```
---
id: seitenname
title: Seiten-Titel
sidebar_label: Seiten-Titel
---
```

In unserem Beispiel würde die Datei dann so aussehen:

```
---
id: minecraft_configure
title: Server Properties
sidebar_label: Server Properties
---
```

### 📡 Zweite Sprache

Nachdem die Seite geschrieben wurde, muss diese nun im "en" Ordner erneut erstellt, und übersetzt werden.

> Beachte: Seiten müssen **immer** eine Englische und Deutsche Version haben.

### 📚 Navigation

Wenn beide Versionen erstellt wurden, muss deine neue Seite nur noch in die sidebar.json eingetragen werden:

![](https://i.imgur.com/YyutX8M.png)

> Die sidebars.json Datei beschriebt, wo genau in der linken Seitenleiste die Artikel zu finden sind, und folgt dem JSON Format.

Um die Seite nun bei Minecraft einzufügen, musst du die Minecraft Kategorie finden, und dir überlegen in welche Kategorie sie passt:

![](https://i.imgur.com/C5XPt7b.png)

Wenn du dir nicht sicher bist, ob eine existierende Subkategorie passt, kann auch eine neue erstellt werden, dazu benutze folgendes Beispiel:

```json
{
 "type":"subcategory",
 "label":"Name der Subkategorie",
 "ids":[
	"ids",
    "der",
    "seiten"
 ]
},
```

In unserem Beispiel wäre das wie folgt:

```json
{
    "type":"subcategory",
    "label":"Administration",
    "ids":[
        "minecraft_configure"
    ]
},
```


Wenn du bereits eine passende Kategorie hast, kannst du diese einfach neu einfügen:

Bei Subkategorien:
```json
{
    "type":"subcategory",
    "label":"Administration",
    "ids":[
        "minecraft_addop",
        "minecraft_worlds",
        "minecraft_configure"
    ]
},
```

Bei normalen Kategorien:
```json
"Minecraft":[
    "minecraft_configure"
]
```
### 🥅 Fertigstellen

Damit ist deine neue Seite erstellt und einsatzbereit!

Nun kannst du ein Pull Request erstellen:

Öffne die Originale zap-docs Repo und öffne das "Pull Requests" Menü:

![](https://i.imgur.com/uxTnmvb.png)

Auf der rechten Seite klicke auf "New Pull Request" und wähle deinen eigenen Fork wie folgt:

![](https://i.imgur.com/INPzQwX.png)

1. Klicke auf "compare across forks"
2. Auf der rechten Seite, wähle deinen Fork aus, dieser heißt im Normalfall DeinUsername/docs
3. Klicke auf "Create Pull Request"


![](https://i.imgur.com/22bHojQ.png)

Wenn du dir sicher bist, dass alles korrekt ist, kannst du nun auf "**Create Pull Request**" Klicken

![](https://i.imgur.com/gOstBbM.png)

![](https://i.imgur.com/4SdxcHb.png)

Nun wurde deine Pull Request erstellt.

> Bevor diese in das Wiki integriert wird, muss diese auf Richtigkeit überprüft werden, dazu erhältst du ggf. eine Antwort auf den Pull Request oder eine E-Mail vom System.

![](https://i.imgur.com/M4VZpra.png)

Wenn du weitere Änderungen vornehmen willst, kannst du auf deinen Fork öffnen, und dort weitere Dateien ändern, diese werden automatisch in die Pull Request integriert:

![](https://i.imgur.com/Tush4SB.png)

Sobald deine Pull Request akzeptiert wurde, siehst du diese dann auf docs.zap-hosting.com!
