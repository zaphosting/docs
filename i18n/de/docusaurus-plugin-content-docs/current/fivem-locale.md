---
id: fivem-locale
title: "FiveM: Sprache / Standort (Flagge) ändern"
description: Informationen, wie du die Sprache und den Standort (Flagge) bei einem FiveM Server anpassen kannst. - ZAP-Hosting.com Dokumentation
sidebar_label: Sprache / Standort (Flagge)
---



## Einführung

FiveM Server können in verschiedenen Sprachen angezeigt werden. Das gilt sowohl für die Anzeige der Flagge des Servers im Serverbrowser als auch die Sprache, die auf dem Server aktiv verwendet wird. Diese kann bei Bedarf angepasst werden. Somit hast du die Möglichkeit deine Sprache und Landesflagge für deinen Server zu setzen.

![img](https://screensaver01.zap-hosting.com/index.php/s/FJZc7pJmppG28mX/preview)



## Konfiguration

Die Konfiguration der Flagge und Sprache des Servers erfolgt über die Locales Option. Die Locales Konfiguration wird über die Server Config vorgenommen. Über den Wert des **sets locale** Befehl wird dies definiert. Die Englische Sprache und Antarktik als Standort (Flagge) wird standardmäßig angezeigt. 



## Schritt 1 - Server Konfigurationsdatei aufrufen

Die Server Konfigurationsdatei (server.cfg) kann in der Gameserver Verwaltung unter Configs aufgerufen werden. Bei FiveM Server mit der Verwendung von txAdmin besteht ebenfalls die Möglichkeit diese direkt in TxAdmin aufzurufen.



## Schritt 2 - Locale-/Sprachcode für deine Sprache suchen

Die Definition der Sprache/Anzeige erfolgt über die Locales (Sprachcodes/Ländercodes) basierend auf den Normen ISO 639-1/ISO 3166-1. Im folgenden haben wir eine kleine Auflistung der relevantesten Länder/Sprachen verfasst. Die tatsächliche Liste natürlich deutlich größer:

| Land           | Sprache        | Locale |
| -------------- | -------------- | ------ |
| Deutschland    | Deutsch        | de-DE  |
| USA            | Englisch       | en-US  |
| Canada         | Englisch       | en-CA  |
| Australien     | Englisch       | en-AU  |
| United Kingdom | Englisch       | en-GB  |
| Finnland       | Finnisch       | fi-FI  |
| Frankreich     | Französisch    | fr-FR  |
| Niederlande    | Niederländisch | nl-NL  |
| Portugal       | Portugiesisch  | pt-PT  |
| Brasilien      | Portugiesisch  | pt-BR  |
| Spanien        | Spanisch       | es-ES  |
| Singapur       | Englisch       | en-SG  |

:::caution 

Die Anzeige der Serverflagge wird prinzipiell von allen verfügbaren Ländern unterstützt. Allerdings beinhalten nicht alle Ressourcen alle Sprachen. Stelle daher vorher sicher, dass deine Land/Sprache unterstützt wird! 

:::



## Schritt 3 - Inhalt der  Server Konfigurationsdatei anpassen

Nachdem die Konfigurationsdatei aufgerufen und du dich um die Locale-/Sprachcode gekümmert hast, kann nun die Konfiguration vorgenommen werden.  Zunächst muss geprüft werden, ob der **sets locale** Befehl bereits vorhanden ist. Falls nicht sieht der Eintrag dafür wie folgt aus:

```
# A valid locale identifier for your server's primary language.
# For example "en-US", "fr-CA", "nl-NL", "de-DE", "en-GB", "pt-BR"
sets locale "root-AQ" 
# please DO replace root-AQ on the line ABOVE with a real language! :)
```

Der Wert vom **sets-locale** Befehl hat standardmäßig den **root-AQ** Wert. Dieser muss nun angepasst werden. Wenn du beispielsweise die USA als Flagge und Englisch als Sprache verwenden möchtest, dann würdest du in diesem Fall **en_US** als Wert verwenden. Speichere die vorgenommene Änderung. 



## Schritt 4 - Server neu starten und testen

Als letztes muss der Server noch einmal neu gestartet werden, damit die Änderung übernommen wird. Im Anschluss kannst du die Serverliste in deinem FiveM Client neuladen und solltest die vorgenommene Änderung sehen. :)
