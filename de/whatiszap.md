---
id: whatiszap
title: Die ZAP-Hosting Docs
sidebar_label: Die ZAP-Hosting Docs
---

Hier findest du Anleitungen und Erklärungen zu verschiedenen Produkten, Spielen oder dem Webinterface.

## Navigation

In der Linken Sidebar können alle Doc-Einträge eingesehen und geöffnet werden:

![](https://i.imgur.com/LkJz0YF.png)

Alle Einträge haben außerdem noch eine Rechte Sidebar, womit man schnell bestimmte Teile des Eintrages finden kann:


![](https://i.imgur.com/Tj9Ls48.png)


Wenn du einen Fehler findest, ein Bild korrigieren oder gar einen eigenen Eintrag schreiben willst, kannst du das bei uns über unsere [GitHub Repository](https://github.com/zap-docs/docs) machen.

## Aufbau & Tools

Wichtig ist, dass Anleitungen in einem einheitlichen Stil geschrieben werden. Dabei ist sowohl eine einwandfrei Rechtschreibung, als auch die Benutzung von Formatierungen (Codeblöcken, Screenshots, Einrückungen, Fonts, etc.) und Emojis wichtig für die Übersicht.


### Inhaltsverzeichnis

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

### 😀 Emojis

In den Inhaltsverzeichnissen soillen bei allen h3 Tags Emojis verwendet werden.
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

> Ich gebe Dir den Tipp, diese Markdown Liste auswendig zu lernen ;-)
geht so:
```
> Das ist der tolle Tipp
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


>Blockquotes
>(Zitate)
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

Gehe sicher, dass du deine Änderung auch richtig beschreibst, damit wir sofort wissen, worum es geht:

![](https://i.imgur.com/brIixcL.png)

### 🥅 Fertigstellen

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

Um eine neue Seite zu erstellen muss die Repository Geforked werden:

![](https://i.imgur.com/IfVrnoY.png)

Dieser fork ist eine 1:1 Kopie der Repository auf deinen eigenen account, worauf Änderungen gemacht werden können.

![](https://i.imgur.com/lIyCWc2.png)

### 🏴󠁧󠁢󠁥󠁮󠁧󠁿 Sprache auswählen

Um eine neue datei zu erstellen, öffne zuerst den ordner der Sprache, für welche du die Seite erstellen willst (in unserem beispiel ist es **de**).

![](https://i.imgur.com/EBXMRts.png)

Hier sind alle daten der Docs gespeichert, um eine neue zu erstellen, klicke auf "Create new file"

![](https://i.imgur.com/SaPdUqx.png)

### 📁 Dateiname

Gebe der datei einen namen, beachte dafür die kategoriesierung, wenn es einen wikieintrag für minecraft ist, sollte die datei mit "minecraft_" anfangen, z.b.

```
minecraft_configure
```

Außerdem muss die dateiendung immer `.md` sein, das endresultat sieht dann so aus:

```
minecraft_configure.md
```

![](https://i.imgur.com/BaxQ8ZA.png)

Nun müssen die Metadaten der Seite erstellt werden, benutze dafür folgendes beispiel:

```
---
id: seitenname
title: Seiten-Titel
sidebar_label: Seiten-Titel
---
```

In unserem beispiel würde die datei dann so aussehen:

```
---
id: minecraft_configure
title: Server Properties
sidebar_label: Server Properties
---
```

### 💈 Formatierung

Darunter können dann die Docs geschrieben werden, zu beachten ist das GitHub's markdown verwendet wird, hier sind einige Hilfen um Markdown zu verstehen:

- https://docusaurus.io/docs/en/doc-markdown#extra-features
- https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet

**Zu Beachten:**

Damit der Seiteninhalt in der rechten leiste angezeigt wird, **muss** der Titel in H2 oder H3 sein:

```
# Wird nicht in der liste angezeigt
## Wird Angezeigt
### Wird als Sub-Eintrag unter dem oberen angezeigt
```

### 📡 Zweite Sprache

Nachdem die Seite geschrieben wurde, muss diese nun im "en" ordner erneut erstellt, und übersetzt werden.

> Beachte: Seiten müssen **immer** eine Englische und Deutsche Version haben.

### 📚 Navigation

Wenn beide versionen erstellt wurden, muss deine neue Seite nur noch in die sidebar.json eingetragen werden:

![](https://i.imgur.com/YyutX8M.png)

> Die sidebars.json Datei beschriebt, wo genau in der linken Seitenleiste die Artikel zu finden sind, und folgt dem JSON Format.

um die Seite nun bei Minecraft einzufügen, musst du die Minecraft Kategorie finden, und dir überlegen in welche Kategorie sie passt:

![](https://i.imgur.com/C5XPt7b.png)

Wenn du dir nicht sicher bist, ob eine existierende Subkategorie Passt, kann auch eine neue erstellt werden, dazu benutze folgendes beispiel:

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

In unserem beispiel wäre das wie folgt:

```json
{
    "type":"subcategory",
    "label":"Administration",
    "ids":[
        "minecraft_configure"
    ]
},
```


Wenn du bereits eine Passende Kategorie hast, kannst du diese einfach neu einfügen:

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

Auf der Rechten seite, klicke auf "New Pull Request" und wähle deinen eigenen Fork wie folgt:

![](https://i.imgur.com/INPzQwX.png)

1. Klicke auf "compare across forks"
2. Auf der rechten Seite, wähle deinen Fork aus, dieser heißt im normalfall DeinUsername/docs
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

Sobald deine Pull Request Akzeptiert wurde, siehst du diese dann auf docs.zap-hosting.com!
