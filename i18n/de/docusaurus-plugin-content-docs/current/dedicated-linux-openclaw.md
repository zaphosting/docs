---
id: dedicated-linux-openclaw
title: "OpenClaw auf einem Linux-Server einrichten – Baue deinen persönlichen KI-Assistenten!"
description: "Entdecke, wie du OpenClaw für Selfhosting einrichtest und konfigurierst, um einen persönlichen und leistungsstarken Open-Source-KI-Assistenten zu bauen → Jetzt mehr erfahren"
sidebar_label: OpenClaw installieren
services:
  - vserver-service-openclaw
  - dedicated-service-openclaw
---

import Button from '@site/src/components/Button';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

[OpenClaw](https://openclaw.ai/) ist eine KI-basierte Automatisierungs- und Steuerungsplattform, mit der du über eine browserbasierte Oberfläche mit Software interagieren kannst. Anstatt manuell durch Menüs zu klicken, Benutzeroberflächen zu navigieren oder immer wieder dieselben Abläufe zu wiederholen, kann OpenClaw Aufgaben programmatisch ausführen und bietet Fernsteuerungsmöglichkeiten über sein Web-Dashboard.

![img](https://screensaver01.zap-hosting.com/index.php/s/XQkk46EnKzxxWrK/preview)

Was OpenClaw besonders revolutionär macht, ist, dass es eine moderne „Kontrollebene“ für Anwendungen und Systeme ermöglicht. Anstatt an eine lokale Desktop-Sitzung gebunden zu sein, kann OpenClaw auf einer entfernten Maschine wie einem VPS oder Dedicated Server laufen und trotzdem von überall aus vollständig verwaltet werden. Das macht es zu einem mächtigen Tool für Nutzer, die zuverlässige Automatisierung, Fernsteuerung und zentrale Verwaltung wollen, ohne einen lokalen Rechner dauerhaft laufen lassen zu müssen.

Du denkst darüber nach, diesen Service selbst zu hosten? Wir führen dich Schritt für Schritt durch die Einrichtung und Konfiguration und zeigen dir alles, was du beachten musst.

<Button label="Bestelle jetzt deinen eigenen Server mit OpenClaw!" link="https://zap-hosting.com/en/vps-for-openclaw/" block style={{backgroundColor: '#ECFCCB', color: '#27272A', border: '1px solid lightgrey' }} />

<InlineVoucher />

## Anwendungsfälle von OpenClaw

OpenClaw kann in vielen verschiedenen Alltagsszenarien eingesetzt werden und eignet sich für alle, die Aufgaben automatisieren, KI-Nutzung zentralisieren oder einen persistenten Assistenten betreiben wollen, der immer verfügbar ist.

Ein häufiger Anwendungsfall ist die Konsolidierung von KI-Interaktionen über mehrere Plattformen hinweg. Anstatt verschiedene Tools für unterschiedliche Messenger-Apps zu nutzen, kann OpenClaw als ein einziger Assistent mit konsistentem Kontext und Konfiguration fungieren, unabhängig davon, von wo aus darauf zugegriffen wird.

OpenClaw ist auch super für Automatisierung. Es hilft, repetitive manuelle Arbeit zu reduzieren, indem es wiederkehrende Aufgaben übernimmt, Informationen organisiert, Inhalte zusammenfasst und strukturierte Antworten liefert.

Ein weiterer wichtiger Anwendungsfall ist Web-Automatisierung. Durch die Steuerung von Browsersitzungen über dedizierte Chrome- oder Chromium-Instanzen kann OpenClaw mit Weboberflächen interagieren, selbst wenn keine direkte API-Integration vorhanden ist.

Um diese Szenarien zu unterstützen, bietet OpenClaw eine breite Palette an Funktionen, darunter Multi-Channel-Messaging-Support (z.B. WhatsApp, Telegram, Slack und Discord), eine Gateway-basierte Architektur zur Verwaltung von Sessions und Kanälen, optionale Voice-Features, eine interaktive Canvas-Oberfläche, eine erweiterbare Skills-Plattform, Unterstützung für mehrere KI-Anbieter (inklusive OpenAI und Anthropic), Device Nodes für mobile Aktionen, API-Key-Authentifizierung sowie persistente Workspace- und Konfigurationsverwaltung.

![img](https://screensaver01.zap-hosting.com/index.php/s/7A5eiaMSE8FFQRs/download)


## Voraussetzungen

Je nachdem, wie du **OpenClaw** nutzen möchtest, kann der Ressourcenverbrauch schnell steigen. Während einfache Setups (z.B. nur die Web UI mit minimaler Automatisierung) auf kleineren VPS-Plänen gut laufen, können fortgeschrittene Anwendungsfälle wie mehrere Kanäle, viele aktivierte Skills oder Browser-Automatisierung deutlich ressourcenintensiver werden. Für solche Fälle empfehlen wir dringend die Nutzung eines Dedicated Servers.

| Hardware   | Minimum      | ZAP-Hosting Empfehlung    |
| ---------- | ------------ | ------------------------- |
| CPU        | 1 vCPU Kern  | 8 vCPU Kerne              |
| RAM        | 4 GB         | 16 GB                     |
| Festplattenspeicher | 25 GB        | 50 GB                     |

<Button label="Bestelle jetzt deinen eigenen Server mit OpenClaw!" link="https://zap-hosting.com/en/vps-for-openclaw/" block style={{backgroundColor: '#ECFCCB', color: '#27272A', border: '1px solid lightgrey' }} />


## Installation
Die Installation startet mit dem Ausführen des offiziellen OpenClaw-Installationsskripts auf deinem Linux Dedicated Server. Verbinde dich per SSH mit deinem Server und führe folgenden Befehl aus:

```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

Nach Ausführung startet automatisch ein interaktives Installationsskript, das dich durch die Einrichtung führt. Der Installer prüft deine Umgebung, installiert fehlende Abhängigkeiten und startet dann den OpenClaw-Onboarding-Prozess.

![img](https://screensaver01.zap-hosting.com/index.php/s/DJcT4NrJ7ts8Gqn/download)


### Plattform-Erkennung und Abhängigkeitsprüfung

Der Installer erkennt automatisch dein Betriebssystem und installiert bei Bedarf erforderliche Abhängigkeiten.  
Wenn z.B. Node.js fehlt, wird es automatisch installiert. Manuelle Eingriffe sind nicht nötig.



### Installation der benötigten Pakete

OpenClaw installiert die benötigten Pakete über den System-Paketmanager. Auch hier ist keine manuelle Aktion erforderlich. Sobald alle Pakete installiert sind, fährt der Installer automatisch fort.

### OpenClaw installieren

Nachdem die Abhängigkeiten bereitgestellt wurden, lädt der Installer die OpenClaw-Version herunter und installiert sie. Sobald der Vorgang abgeschlossen ist, solltest du eine Bestätigung wie diese sehen:

![img](https://screensaver01.zap-hosting.com/index.php/s/NwTqC997KQ23Htr/preview)



### OpenClaw Onboarding

Nach der Installation startet der Onboarding-Assistent automatisch. Dieses Onboarding ist notwendig, um die Erstkonfiguration abzuschließen und OpenClaw nutzbar zu machen.



Lies zuerst den angezeigten Sicherheitshinweis und bestätige ihn, um fortzufahren. Wähle dann den Onboarding-Modus. Für die meisten Nutzer ist **QuickStart** die empfohlene Option.

![img](https://screensaver01.zap-hosting.com/index.php/s/ZQXSmmwQ29yk374/preview)

Anschließend wählst du dein Modell/Auth-Anbieter. In diesem Beispiel ist **OpenAI** ausgewählt. Gib nun deinen OpenAI API-Schlüssel ein. OpenClaw speichert den Schlüssel lokal in der Konfiguration, damit er für zukünftige Sessions genutzt werden kann. Nachdem der API-Schlüssel gespeichert wurde, wähle das Standardmodell, das OpenClaw verwenden soll.

![img](https://screensaver01.zap-hosting.com/index.php/s/HQ5MNqCxdd5EY8Q/preview)

In den letzten Schritten kannst du optional Kanäle (wie Telegram, Discord oder Slack), Skills und Hooks konfigurieren. Wenn du diese Optionen jetzt nicht einstellen möchtest, kannst du sie überspringen und später in der Konfiguration nachholen.

![img](https://screensaver01.zap-hosting.com/index.php/s/xFnb3GNSiSZBPnD/preview)

Wenn du OpenClaw über Telegram nutzen möchtest, musst du zuerst einen Telegram-Bot erstellen und dessen API-Token erhalten. Das machst du direkt in Telegram über den offiziellen **BotFather**-Account.

Öffne den Chat mit **BotFather**, starte den Erstellungsprozess mit `/newbot` und folge den Anweisungen.  
BotFather fragt zuerst nach einem Anzeigenamen, dann nach einem Benutzernamen. Der Benutzername muss mit `bot` enden.

Das Gespräch sieht typischerweise so aus:

```
User: /newbot 

BotFather: Alles klar, ein neuer Bot. Wie soll er heißen? Bitte wähle einen Namen für deinen Bot.  

User: ZAP DOCS EXAMPLE

BotFather: Gut. Jetzt wähle einen Benutzernamen für deinen Bot. Er muss mit `bot` enden. Zum Beispiel: TetrisBot oder tetris_bot. 

User: ZAP_DOCS_EXAMPLE_BOT 

BotFather: Fertig! Glückwunsch zu deinem neuen Bot. Du findest ihn unter t.me/ZAP_DOCS_EXAMPLE_BOT. Du kannst jetzt eine Beschreibung, Info und Profilbild für deinen Bot hinzufügen, siehe /help für eine Liste der Befehle. Übrigens, wenn du deinen coolen Bot fertig hast, melde dich bei unserem Bot-Support, falls du einen besseren Benutzernamen möchtest. Achte nur darauf, dass der Bot voll funktionsfähig ist, bevor du das machst.

Nutze diesen Token, um auf die HTTP API zuzugreifen:
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
Bewahre deinen Token sicher auf, er kann von jedem genutzt werden, um deinen Bot zu steuern.

Eine Beschreibung der Bot API findest du hier: https://core.telegram.org/bots/api
```

Nachdem BotFather die Bot-Erstellung bestätigt hat, kopiere den angezeigten **Token** und bewahre ihn sicher auf. Diesen Token brauchst du später, wenn du Telegram als Kanal im OpenClaw-Onboarding oder in der Konfiguration verbindest. Jeder mit diesem Token kann deinen Bot steuern, daher darf er niemals öffentlich geteilt werden.

![img](https://screensaver01.zap-hosting.com/index.php/s/JHTxW7Pi4SRsoe7/preview)

Nachdem du den Telegram-Bot erstellt und den Token gespeichert hast, kannst du mit dem OpenClaw-Onboarding fortfahren. In den nächsten Schritten kannst du **Skills** installieren und **Hooks** aktivieren. Diese Optionen sind empfohlen, können aber auch übersprungen und später in der Konfiguration eingerichtet werden, falls du die Einrichtung erst abschließen möchtest.

Nach Abschluss des Onboardings installiert OpenClaw automatisch den **Gateway-Service**. Wähle abschließend die **Web UI**-Option, damit OpenClaw den Dashboard-Link ausgibt. So kannst du die OpenClaw Control UI aufrufen und deine Einrichtung bequem im Browser weiter verwalten.

Danach wird das Onboarding als abgeschlossen markiert. Am Ende der Einrichtung bietet OpenClaw auch an, das **Shell Completion Script** zu installieren. Das ist optional, aber empfohlen, da es die Bedienung der Kommandozeile verbessert, indem es Auto-Completion für OpenClaw-Befehle aktiviert. Folge einfach den Anweisungen.

![img](https://screensaver01.zap-hosting.com/index.php/s/xWNpjYj2XeKgK4J/preview)


<InlineVoucher />


## Konfiguration

Unsere VPS- und Dedicated Server werden standardmäßig ohne grafische Benutzeroberfläche ausgeliefert. Deshalb läuft OpenClaw im Headless-Modus und stellt seine Control UI nur lokal auf dem Server auf Port `18789` bereit.

Nach Abschluss von Installation und Onboarding gibt OpenClaw die Dashboard-Informationen in der Konsole aus:

```
Dashboard-Link (mit Token):
http://127.0.0.1:18789/?token=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

Kopiere/füge diese URL in einen Browser auf diesem Rechner ein, um OpenClaw zu steuern.
Keine GUI erkannt. Öffne vom Computer aus:
ssh -N -L 18789:127.0.0.1:18789 root@92.42.46.111

Dann öffne:
http://localhost:18789/
http://127.0.0.1:18789/?token=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

Da die Weboberfläche an `127.0.0.1` gebunden ist, ist sie nicht direkt aus dem Internet erreichbar. Um sicher von deinem PC darauf zuzugreifen, erstelle einen SSH-Tunnel, der den OpenClaw-Port vom VPS/Dedicated Server auf deinen lokalen Rechner weiterleitet.

Öffne auf deinem PC ein Terminal und führe aus:

```bash
ssh -N -L 18789:127.0.0.1:18789 root@92.42.46.111
```

Solange diese SSH-Sitzung offen ist, kannst du die OpenClaw Control UI im Browser über folgende URL erreichen:

```
http://localhost:18789/
```

Falls OpenClaw eine Authentifizierung verlangt, öffne den tokenisierten Link, der in deiner OpenClaw-Ausgabe angezeigt wird:

```
http://127.0.0.1:18789/?token=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```



:::tip Nutze eine GUI (Desktop-Umgebung)

Wenn du OpenClaw lieber mit grafischer Oberfläche nutzen möchtest, kannst du auf deinem VPS/Dedicated Server eine Desktop-Umgebung installieren, z.B. **XFCE**. Nach Installation einer GUI (und einer Remote-Desktop-Lösung wie RDP oder VNC) kannst du OpenClaw direkt über den Desktop des Dedicated Servers steuern, ohne SSH-Portweiterleitung zu nutzen.

:::



![img](https://screensaver01.zap-hosting.com/index.php/s/FscTYx36eWeHHca/download)



### Skills installieren

Skills erweitern OpenClaw um zusätzliche Funktionen und Integrationen.  
OpenClaw bringt über 50 Skills mit. Du kannst Skills direkt im Dashboard unter dem Bereich **Skills** installieren und aktivieren.

![img](https://screensaver01.zap-hosting.com/index.php/s/gXxs6j9WHtxPYAQ/preview)



### Hooks aktivieren

Hooks erlauben es OpenClaw, automatisch Aktionen auszuführen, wenn bestimmte Ereignisse eintreten oder spezifische Befehle genutzt werden.  
Das ist praktisch, um wiederkehrende Aufgaben zu automatisieren, Kontext zu speichern oder Workflows ohne manuelle Eingriffe auszulösen.

![img](https://screensaver01.zap-hosting.com/index.php/s/KYSWM4cFcDp45F6/preview)



### Kanäle konfigurieren

Kanäle ermöglichen dir, OpenClaw über Messaging-Plattformen zu nutzen.  
Im Dashboard kannst du unterstützte Kanäle wie Telegram, Discord, Slack und andere konfigurieren und verbinden.

![img](https://screensaver01.zap-hosting.com/index.php/s/Le38gZXf2BDintr/preview)

Je nach Plattform musst du zusätzliche Tokens oder Zugangsdaten angeben (z.B. wie im Installationsprozess für den Telegram-Bot-Token, der via BotFather erstellt wurde).



Nach erfolgreicher Kanalverbindung kann OpenClaw Nachrichten über diese Plattform empfangen und beantworten. Eine Unterhaltung mit dem KI-Assistenten via Telegram könnte so aussehen:

![img](https://screensaver01.zap-hosting.com/index.php/s/oFRZCEPFyyMmsG4/preview)



## Sicherheitshinweise

OpenClaw ist ein mächtiges Tool und sollte immer mit angemessenen Sicherheitsvorkehrungen genutzt werden. Das Gateway-Dashboard ist durch ein Token geschützt, das wie ein Passwort funktioniert und Zugriff auf deine OpenClaw-Instanz gewährt. Teile dieses Gateway-Token niemals öffentlich (z.B. in Screenshots, Tickets oder Chatlogs), denn jeder mit dem Token kann das Dashboard steuern.

Es wird empfohlen, OpenClaw hinter einer Firewall zu betreiben und die Gateway-Oberfläche nicht direkt öffentlich zugänglich zu machen. Standardmäßig bindet OpenClaw den Gateway-Service an `127.0.0.1`, was externen Zugriff verhindert und für die meisten Anwendungsfälle die sicherste Option ist. Für den Fernzugriff nutze SSH-Portweiterleitung und beschränke den Zugang auf vertrauenswürdige Nutzer.



## Abschluss und weitere Ressourcen

Glückwunsch! Du hast OpenClaw jetzt erfolgreich auf deinem VPS oder Dedicated Server installiert und konfiguriert. Wir empfehlen dir außerdem, einen Blick auf die folgenden Ressourcen zu werfen, die dir bei der Server-Konfiguration weiterhelfen können:

- [openclaw.ai](https://https://openclaw.ai/) – Offizielle Webseite
- [docs.openclaw.ai](https://docs.openclaw.ai/start/getting-started) – OpenClaw Dokumentation
- [clawhub.com](https://clawhub.com/) – ClawHub – Community-gebaute Skills

Du hast spezielle Fragen, die hier nicht beantwortet wurden? Für weitere Fragen oder Support steht dir unser Team täglich zur Verfügung – melde dich einfach bei uns! 🙂

<InlineVoucher />