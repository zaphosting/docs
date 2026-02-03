---
id: vserver-linux-openclaw
title: "VPS: OpenClaw auf Linux einrichten – Bau deinen persönlichen KI-Assistenten!"
description: "Entdecke, wie du OpenClaw für Self-Hosting einrichtest und konfigurierst, um einen persönlichen und mächtigen Open-Source-KI-Assistenten zu bauen → Jetzt mehr erfahren"
sidebar_label: OpenClaw installieren
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

[OpenClaw](https://openclaw.ai/) ist eine KI-basierte Automatisierungs- und Steuerungsplattform, mit der du Software über eine browserbasierte Oberfläche bedienen kannst. Anstatt manuell durch Menüs zu klicken, Benutzeroberflächen zu navigieren oder immer wieder dieselben Abläufe zu wiederholen, kann OpenClaw Aufgaben programmatisch ausführen und bietet Fernsteuerungsmöglichkeiten über sein Web-Dashboard.

![img](https://screensaver01.zap-hosting.com/index.php/s/XQkk46EnKzxxWrK/preview)

Was OpenClaw besonders revolutionär macht, ist, dass es eine moderne „Kontrollschicht“ für Anwendungen und Systeme ermöglicht. Anstatt an eine lokale Desktop-Sitzung gebunden zu sein, kann OpenClaw auf einer entfernten Maschine wie einem VPS laufen und trotzdem von überall aus vollständig verwaltet werden. Das macht es zu einem mächtigen Tool für Nutzer, die zuverlässige Automatisierung, Fernsteuerung und zentrale Verwaltung wollen, ohne einen lokalen Rechner dauerhaft laufen lassen zu müssen.

Willst du diesen Service selbst hosten? Wir führen dich Schritt für Schritt durch die Einrichtung und Konfiguration und zeigen dir alles, was du beachten musst.

<InlineVoucher />


## Anwendungsfälle von OpenClaw

OpenClaw kann in vielen verschiedenen Alltagsszenarien eingesetzt werden und eignet sich für alle, die Aufgaben automatisieren, KI-Nutzung zentralisieren oder einen persistenten Assistenten betreiben wollen, der immer verfügbar ist.

Ein häufiger Anwendungsfall ist die Konsolidierung von KI-Interaktionen über mehrere Plattformen hinweg. Anstatt verschiedene Tools für unterschiedliche Messenger-Apps zu nutzen, kann OpenClaw als ein einziger Assistent mit konsistentem Kontext und Konfiguration agieren – unabhängig davon, von wo aus du zugreifst.

OpenClaw ist auch super für Automatisierung. Es hilft, repetitive manuelle Arbeit zu reduzieren, indem es wiederkehrende Aufgaben übernimmt, Informationen organisiert, Inhalte zusammenfasst und strukturierte Antworten liefert.

Ein weiterer wichtiger Anwendungsfall ist Web-Automatisierung. Durch die Steuerung von Browser-Sessions über dedizierte Chrome- oder Chromium-Instanzen kann OpenClaw mit Web-Interfaces interagieren, selbst wenn keine direkte API-Integration vorhanden ist.

Um diese Szenarien zu unterstützen, bietet OpenClaw eine breite Palette an Features, darunter Multi-Channel-Messaging-Support (z.B. WhatsApp, Telegram, Slack und Discord), eine Gateway-basierte Architektur zur Verwaltung von Sessions und Kanälen, optionale Voice-Funktionen, eine interaktive Canvas-Oberfläche, eine erweiterbare Skills-Plattform, Unterstützung für mehrere KI-Anbieter (inklusive OpenAI und Anthropic), Device Nodes für mobile Aktionen, API-Key-Authentifizierung sowie persistente Workspace- und Konfigurationsverwaltung.

![img](https://screensaver01.zap-hosting.com/index.php/s/7A5eiaMSE8FFQRs/download)


## Voraussetzungen

Je nachdem, wie du **OpenClaw** nutzen möchtest, kann der Ressourcenverbrauch schnell steigen. Während einfache Setups (z.B. nur die Web UI mit minimaler Automatisierung) auch auf kleineren VPS-Plänen gut laufen, können fortgeschrittene Anwendungsfälle wie mehrere Kanäle, viele Skills oder Browser-Automatisierung deutlich ressourcenintensiver werden.

Für stabile Performance empfehlen wir, einen VPS-Plan mit ausreichend CPU- und RAM-Reserven zu wählen, besonders wenn OpenClaw dauerhaft im Hintergrund laufen soll.

| Hardware   | Minimum      | ZAP-Hosting Empfehlung    |
| ---------- | ------------ | ------------------------- |
| CPU        | 1 vCPU Kern  | 8 vCPU Kerne              |
| RAM        | 4 GB         | 16 GB                     |
| Festplattenspeicher | 25 GB        | 50 GB                     |




## Installation
Die Installation startet mit dem offiziellen OpenClaw-Installer-Skript auf deinem Linux VPS. Verbinde dich per SSH mit deinem Server und führe folgenden Befehl aus:

```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

Nach Ausführung startet automatisch ein interaktives Installationsskript, das dich durch die Einrichtung führt. Der Installer prüft deine Umgebung, installiert fehlende Abhängigkeiten und startet dann den OpenClaw-Onboarding-Prozess.

![img](https://screensaver01.zap-hosting.com/index.php/s/DJcT4NrJ7ts8Gqn/download)



### Plattform-Erkennung und Abhängigkeitsprüfung

Der Installer erkennt automatisch dein Betriebssystem und installiert bei Bedarf erforderliche Abhängigkeiten.  
Wenn z.B. Node.js fehlt, wird es automatisch installiert. Manuelles Eingreifen ist nicht nötig.



### Installation der benötigten Pakete

OpenClaw installiert die erforderlichen Pakete über den System-Paketmanager. Auch hier ist keine manuelle Aktion nötig. Sobald alle Pakete installiert sind, fährt der Installer automatisch fort.

### OpenClaw installieren

Nachdem die Abhängigkeiten bereitstehen, lädt der Installer die OpenClaw-Version herunter und installiert sie. Nach Abschluss solltest du eine Bestätigung wie diese sehen:

![img](https://screensaver01.zap-hosting.com/index.php/s/NwTqC997KQ23Htr/preview)



### OpenClaw Onboarding

Nach der Installation startet der Onboarding-Assistent automatisch. Dieser ist notwendig, um die Erstkonfiguration abzuschließen und OpenClaw nutzbar zu machen.



Zuerst liest du die angezeigte Sicherheitshinweis und bestätigst ihn, um fortzufahren. Danach wählst du den Onboarding-Modus. Für die meisten Nutzer ist **QuickStart** die empfohlene Option.

![img](https://screensaver01.zap-hosting.com/index.php/s/ZQXSmmwQ29yk374/preview)

Anschließend wählst du dein Modell/Auth-Anbieter. Im Beispiel ist **OpenAI** ausgewählt. Jetzt gibst du deinen OpenAI API-Schlüssel ein. OpenClaw speichert den Schlüssel lokal in der Konfiguration, damit er für zukünftige Sessions genutzt werden kann. Nach dem Speichern des API-Schlüssels wählst du das Standardmodell, das OpenClaw verwenden soll.

![img](https://screensaver01.zap-hosting.com/index.php/s/HQ5MNqCxdd5EY8Q/preview)

In den letzten Schritten kannst du optional Kanäle (wie Telegram, Discord oder Slack), Skills und Hooks konfigurieren. Wenn du diese Optionen jetzt nicht einstellen möchtest, kannst du sie überspringen und später in der Konfiguration nachholen.

![img](https://screensaver01.zap-hosting.com/index.php/s/xFnb3GNSiSZBPnD/preview)

Wenn du OpenClaw über Telegram nutzen willst, musst du zuerst einen Telegram-Bot erstellen und dessen API-Token besorgen. Das machst du direkt in Telegram über den offiziellen **BotFather**-Account.

Öffne den Chat mit **BotFather**, starte den Erstellungsprozess mit `/newbot` und folge den Anweisungen.  
BotFather fragt zuerst nach einem Anzeigenamen, dann nach einem Benutzernamen. Der Benutzername muss auf `bot` enden.

Das Gespräch sieht typischerweise so aus:

```
User: /newbot 

BotFather: Alles klar, ein neuer Bot. Wie soll er heißen? Bitte wähle einen Namen für deinen Bot.  

User: ZAP DOCS EXAMPLE

BotFather: Gut. Jetzt wähle einen Benutzernamen für deinen Bot. Er muss auf `bot` enden. Zum Beispiel: TetrisBot oder tetris_bot. 

User: ZAP_DOCS_EXAMPLE_BOT 

BotFather: Fertig! Glückwunsch zu deinem neuen Bot. Du findest ihn unter t.me/ZAP_DOCS_EXAMPLE_BOT. Du kannst jetzt eine Beschreibung, Info und Profilbild hinzufügen, siehe /help für Befehle. Wenn dein cooler Bot fertig ist, kannst du unseren Bot-Support kontaktieren, falls du einen besseren Benutzernamen möchtest. Achte nur darauf, dass der Bot voll funktionsfähig ist, bevor du das machst.

Nutze diesen Token für den Zugriff auf die HTTP API:
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
Halte deinen Token sicher und speichere ihn gut, denn jeder mit dem Token kann deinen Bot steuern.

Eine Beschreibung der Bot API findest du hier: https://core.telegram.org/bots/api
```

Nachdem BotFather die Bot-Erstellung bestätigt hat, kopiere den angezeigten **Token** und bewahre ihn sicher auf. Diesen Token brauchst du später, wenn du Telegram als Kanal im OpenClaw-Onboarding oder in der Konfiguration verbindest. Jeder mit diesem Token kann deinen Bot steuern, also teile ihn niemals öffentlich.

![img](https://screensaver01.zap-hosting.com/index.php/s/JHTxW7Pi4SRsoe7/preview)

Nach dem Erstellen des Telegram-Bots und Speichern des Tokens kannst du mit dem OpenClaw-Onboarding weitermachen. In den nächsten Schritten kannst du **Skills** installieren und **Hooks** aktivieren. Diese Optionen sind empfohlen, können aber auch übersprungen und später in der Konfiguration nachgeholt werden.

Nach Abschluss des Onboardings installiert OpenClaw automatisch den **Gateway-Service**. Zum Schluss wählst du die **Web UI**-Option, damit OpenClaw den Dashboard-Link ausgibt. So kannst du die OpenClaw Control UI im Browser öffnen und deine Einrichtung weiter verwalten.

Danach wird das Onboarding als abgeschlossen markiert. Am Ende bietet OpenClaw auch an, das **Shell-Completion-Skript** zu installieren. Das ist optional, aber empfohlen, da es die Bedienung in der Kommandozeile verbessert, indem es Auto-Completion für OpenClaw-Befehle aktiviert. Folge einfach den Anweisungen.

![img](https://screensaver01.zap-hosting.com/index.php/s/xWNpjYj2XeKgK4J/preview)





## Konfiguration

Unsere VPS-Server werden standardmäßig ohne grafische Benutzeroberfläche ausgeliefert. Deshalb läuft OpenClaw im Headless-Modus und stellt seine Control UI nur lokal auf dem Server auf Port `18789` bereit.

Nach Installation und Onboarding gibt OpenClaw die Dashboard-Infos in der Konsole aus:

```
Dashboard-Link (mit Token):
http://127.0.0.1:18789/?token=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

Kopiere/füge diese URL in einem Browser auf diesem Rechner ein, um OpenClaw zu steuern.
Keine GUI erkannt. Öffne vom PC aus:
ssh -N -L 18789:127.0.0.1:18789 root@92.42.46.111

Dann öffne:
http://localhost:18789/
http://127.0.0.1:18789/?token=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

Da die Weboberfläche an `127.0.0.1` gebunden ist, ist sie nicht direkt aus dem Internet erreichbar. Um sicher vom PC darauf zuzugreifen, erstelle einen SSH-Tunnel, der den OpenClaw-Port vom VPS auf deinen lokalen Rechner weiterleitet.

Öffne auf deinem PC ein Terminal und führe aus:

```bash
ssh -N -L 18789:127.0.0.1:18789 root@92.42.46.111
```

Solange diese SSH-Verbindung offen ist, kannst du die OpenClaw Control UI im Browser unter folgender URL erreichen:

```
http://localhost:18789/
```

Falls OpenClaw eine Authentifizierung verlangt, öffne den tokenisierten Link aus der OpenClaw-Ausgabe:

```
http://127.0.0.1:18789/?token=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```



:::tip GUI (Desktop-Umgebung) nutzen

Wenn du OpenClaw lieber mit grafischer Oberfläche nutzen möchtest, kannst du auf deinem VPS eine Desktop-Umgebung installieren, z.B. **XFCE**. Nach Installation einer GUI (und einer Remote-Desktop-Lösung wie RDP oder VNC) kannst du OpenClaw direkt über den VPS-Desktop steuern, ohne SSH-Port-Forwarding zu nutzen.

:::



![img](https://screensaver01.zap-hosting.com/index.php/s/FscTYx36eWeHHca/download)



### Skills installieren

Skills erweitern OpenClaw um zusätzliche Funktionen und Integrationen.  
OpenClaw bringt über 50 Skills mit. Du kannst Skills direkt im Dashboard unter dem Bereich **Skills** auswählen und aktivieren.

![img](https://screensaver01.zap-hosting.com/index.php/s/gXxs6j9WHtxPYAQ/preview)



### Hooks aktivieren

Hooks erlauben es OpenClaw, automatisch Aktionen auszuführen, wenn bestimmte Ereignisse eintreten oder spezielle Befehle genutzt werden.  
Das ist praktisch, um wiederkehrende Aufgaben zu automatisieren, Kontext zu speichern oder Workflows ohne manuelle Eingriffe auszulösen.

![img](https://screensaver01.zap-hosting.com/index.php/s/KYSWM4cFcDp45F6/preview)



### Kanäle konfigurieren

Kanäle ermöglichen dir, OpenClaw über Messaging-Plattformen zu nutzen.  
Im Dashboard kannst du unterstützte Kanäle wie Telegram, Discord, Slack und andere konfigurieren und verbinden.

![img](https://screensaver01.zap-hosting.com/index.php/s/Le38gZXf2BDintr/preview)

Je nach Plattform musst du zusätzliche Tokens oder Zugangsdaten angeben (z.B. wie im Installationsprozess für den Telegram-Bot-Token, den du via BotFather erstellt hast).



Nach erfolgreicher Verbindung eines Kanals kann OpenClaw Nachrichten über diese Plattform empfangen und beantworten. So könnte eine Unterhaltung mit dem KI-Assistenten via Telegram aussehen:

![img](https://screensaver01.zap-hosting.com/index.php/s/oFRZCEPFyyMmsG4/preview)



## Sicherheitshinweise

OpenClaw ist ein mächtiges Tool und sollte immer mit angemessenen Sicherheitsmaßnahmen genutzt werden. Das Gateway-Dashboard ist durch ein Token geschützt, das wie ein Passwort funktioniert und Zugriff auf deine OpenClaw-Instanz gewährt. Teile dieses Gateway-Token niemals öffentlich (z.B. in Screenshots, Tickets oder Chatlogs), denn jeder mit dem Token kann das Dashboard steuern.

Es wird empfohlen, OpenClaw hinter einer Firewall zu betreiben und die Gateway-Oberfläche nicht direkt öffentlich zugänglich zu machen. Standardmäßig bindet OpenClaw den Gateway-Service an `127.0.0.1`, was externen Zugriff verhindert und für die meisten Anwendungsfälle die sicherste Option ist. Für den Fernzugriff nutze SSH-Port-Forwarding und beschränke den Zugang auf vertrauenswürdige Nutzer.



## Fazit und weitere Ressourcen

Glückwunsch! Du hast OpenClaw jetzt erfolgreich auf deinem VPS installiert und konfiguriert. Wir empfehlen dir außerdem, einen Blick auf folgende Ressourcen zu werfen, die dir bei der weiteren Server-Konfiguration helfen können:

- [openclaw.ai](https://https://openclaw.ai/) – Offizielle Webseite
- [docs.openclaw.ai](https://docs.openclaw.ai/start/getting-started) – OpenClaw Dokumentation
- [clawhub.com](https://clawhub.com/) – ClawHub – Community-gebaute Skills

Du hast spezielle Fragen, die hier nicht beantwortet werden? Für weitere Fragen oder Support steht dir unser Team täglich zur Verfügung – melde dich gern bei uns! 🙂

<InlineVoucher />