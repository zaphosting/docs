---
id: rust-firststeps-connect
title: "Rust: Zum Server verbinden"
description: Informationen über verschiedene Möglichkeiten, wie du dich mit deinem Rust Server von ZAP-Hosting verbinden kannst - ZAP-Hosting Dokumentation
sidebar_label: Zum Server verbinden
services:
  - gameserver-rust
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';


## Einführung

Unsicher, wie du dich mit deinem **Rust** Server verbinden kannst oder was du dafür benötigst? Kein Problem, wir helfen dir weiter! Wir führen dich durch alles, was du benötigst - von den erforderlichen Werkzeugen und Informationen bis hin zum eigentlichen Verbindungsprozess und den wesentlichen Punkten, die für eine reibungslose und störungsfreie Verbindung erforderlich sind. Befolge unsere Anleitung und du wirst in kürzester Zeit verbunden sein!

<InlineVoucher />



## Server-Details abrufen

Du benötigst alle relevanten Informationen, um dich mit deinem Server zu verbinden. Die Informationen zu deinem Server findest du im Dashboard des Webinterfaces deines Gameservers. Zu den wichtigen Informationen gehören die folgenden: 

- IP-Adresse und Port
- Name des Servers

Anhand der oben genannten Informationen solltest du in der Lage sein, deinen Server zu finden und sicherzustellen, dass du dich mit dem richtigen Server verbindest. 

![img](https://screensaver01.zap-hosting.com/index.php/s/8MgNtw3nt74Sm78/preview)

## Verbindung zum Server herstellen

Die Verbindung zu einem Gameserver kann häufig auf eine oder mehrere Arten hergestellt werden. Die verfügbaren Methoden werden im Folgenden ausführlich beschrieben und erklärt. 

<Tabs>
    <TabItem value="connect_solution_server_browser_ingame" label="Server Browser (Im Spiel)" default>

Um eine Verbindung zu deinem Server über den Server-Browser im Spiel herzustellen, öffne den Server-Browser im Hauptmenü, indem du auf **Play** **Game** klickst. Sobald du dich in der Serverliste befindest, klicke auf Community, um auf die Community-Server zuzugreifen. Suche nach deinem Server über das **Suchfeld** mit dem Namen deines Servers. Wähle deinen Server aus und klicke auf den Button **Join**.

![img](https://screensaver01.zap-hosting.com/index.php/s/KgqejiLECwxJMrH/download)

</TabItem>



<TabItem value="connect_solution3" label="Konsole (Im Spiel)">

Um eine Verbindung zu deinem Server über die Konsole herzustellen, öffne die Konsole mit der Taste `KEY_XY`. Sobald die Konsole geöffnet ist, führe den folgenden Befehl aus: 

```
client.connect <IP:port>
```

![img](https://screensaver01.zap-hosting.com/index.php/s/RKm7yELWKabLk2Y/download)

</TabItem>
</Tabs>



## Mögliche Probleme und Lösungen

Die Verbindung zum Server kann nicht wie erwartet hergestellt werden? Dies kann in bestimmten Situationen vorkommen, z. B. wenn die Verbindung aufgrund von technischen Problemen fehlschlägt. Im Folgenden haben wir die häufigsten Probleme und ihre Lösungen aufgeführt:

#### Nicht sichtbar

Eine fehlende Sichtbarkeit des Servers kann auftreten, wenn die Initialisierung nicht erfolgreich abgeschlossen wurde. Dies kann beispielsweise auf eine fehlerhafte Konfiguration oder beschädigte Dateien zurückzuführen sein. Weitere Informationen können in der Regel in der Serverkonsole oder in den Logdateien nachvollzogen werden.



#### Fehlende Lösung oder nicht hilfreich

Hast du nach der Fehlersuche weiterhin Probleme? In diesem Fall steht unser Support-Team täglich zur Verfügung, um dir zu helfen. Erstelle einfach ein **[Ticket](https://zap-hosting.com/en/customer/support/)** auf unserer Website und erkläre uns dein Problem mit so vielen Einzelheiten wie möglich. Wir werden uns so schnell wie möglich darum kümmern und dir bei der Lösung des Problems helfen!



## Abschluss

Glückwunsch, vorausgesetzt, dass du alle Schritte befolgt hast, solltest du erfolgreich eine Verbindung zum Server hergestellt haben. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂




<InlineVoucher />
