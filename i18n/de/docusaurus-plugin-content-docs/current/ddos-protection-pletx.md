---
id: ddos-protection-pletx
title: PletX DDoS-Schutz bei ZAP Hosting
description: "Erfahre, wie ZAP Hosting deine Server mit proaktivem, Echtzeit-DDoS-Schutz absichert, der auf jeden Service individuell abgestimmt ist → Jetzt mehr erfahren"
sidebar_label: PletX
---

## Einführung

DDoS (Distributed Denial of Service) Angriffe sind bösartige Versuche, den normalen Traffic eines gezielten Servers, Services oder Netzwerks zu stören, indem sie ihn mit übermäßigem eingehendem Traffic überfluten. Um eine stabile und unterbrechungsfreie Performance für unsere Kunden zu gewährleisten, setzt ZAP Hosting auf dedizierte DDoS-Schutzsysteme, die auf jeden Serverstandort im Rechenzentrum individuell abgestimmt sind.

Eine der Schlüsseltechnologien in unserer Infrastruktur ist PletX, eine hochadaptive Schutzplattform, die Angriffe in Echtzeit filtert und abwehrt. Dieses Dokument erklärt, wie PletX funktioniert, welche Services davon profitieren und warum es gerade für performancekritische Hosting-Umgebungen ein echter Gamechanger ist.



## Wo der Schutz zum Einsatz kommt

PletX ist bereits vollumfänglich an unserem Standort FFM/Eygelshoven im Einsatz und schützt dort alle gehosteten Produkte – darunter Gameserver, VPS, Dedicated Server, TeamSpeak-Server, TS3 und Discord Bots sowie Webspace-Services. So ist ein umfassender und konsistenter Schutz über das gesamte Produktportfolio an diesem Standort gewährleistet.

Der Rollout für unsere US-Standorte in Ashburn, Dallas und Los Angeles ist aktuell in Vorbereitung, dort wird PletX ebenfalls sehr bald verfügbar sein.

## Wie der DDoS-Schutz funktioniert

Der PletX-Schutz an unseren Standorten ist immer aktiv und vollständig mit unserem Netzwerk synchronisiert. Sämtlicher eingehender Traffic wird vor Erreichen unserer Infrastruktur durch das PletX-Filtersystem geleitet. So wird schädlicher Traffic so früh wie möglich eliminiert und erreicht deinen Server gar nicht erst.

### Automatische Protokollerkennung

PletX analysiert kontinuierlich den eingehenden Traffic und erkennt protkollspezifische Signaturen, sobald echter Traffic auf einem Port auftaucht. Wenn sich zum Beispiel Spieler auf einem FiveM-Gameserver über den Game-Port 30120 verbinden, 

erkennt PletX die charakteristische Paketstruktur und wendet automatisch die passende FiveM-Regel an. Das gilt auch für andere Services: Erhält ein Minecraft-Server Traffic auf Port 25565, erkennt das System den Minecraft-Handshake und erstellt entsprechend eine passende Regel.

Verbindet sich ein Nutzer via SSH auf Port 22 mit einem VPS oder Dedicated Server, erkennt PletX den SSH-Handshake und aktiviert eine SSH-Regel. Für Windows-basierte Systeme wird RDP-Traffic auf Port 3389 erkannt und eine RDP-spezifische Regel erstellt.

Wird WireGuard oder OpenVPN auf einem Custom-Port genutzt, identifiziert PletX den ersten gültigen Austausch und wendet die korrekte VPN-Regel an.

In allen Fällen gilt: Sobald PletX das Protokoll identifiziert hat, wird nur legitimer Traffic für dieses Protokoll zugelassen, während nicht zugehöriger Traffic gefiltert wird, bevor er den Server erreicht.

### Unterstützte Schutzprofile

PletX unterstützt eine breite Palette gängiger Service- und Game-Protokolle. Dazu gehören beliebte Games wie FiveM, Minecraft, Titel mit Steam Source Engine, Metin 2 basierte Services, RakNet-basierte Games, SAMP, Growtopia und Erweiterungen wie PlasmoVoice. Auch Voice-Anwendungen wie TeamSpeak werden automatisch erkannt.

Neben Gaming-Traffic identifiziert PletX auch Remote-Access-Protokolle wie SSH und RDP sowie sichere Netzwerkprotokolle wie WireGuard und OpenVPN.

<details>
  <summary>Gameserver</summary>
- FiveM
- Minecraft
- Verschiedene Games mit Steam Source Engine
- Metin 2 Auth & Channel
- Novalife
- RakNet-basierte Games
- SAMP
- Growtopia
- PlasmoVoice
- und mehr..
</details>

<details>
  <summary>Voiceserver</summary>

- TeamSpeak
- PlasmoVoice
</details>

<details>
  <summary>Remote Access</summary>
- SSH
- RDP
</details>

<details>
  <summary>VPN und sichere Netzwerke</summary>

- WireGuard
- OpenVPN
</details>

Alle Protokolle, die PletX nicht erkennt, werden als unbekannt behandelt, was gelegentlich zu False Positives oder unerwartetem Verhalten führen kann.

## Web-Traffic und nicht unterstützte Services

PletX filtert aktuell keinen HTTP- oder HTTPS-Traffic. Webanwendungen oder nicht unterstützte Protokolle können daher gelegentlich False Positives erleben. Falls du davon betroffen bist, geh bitte so vor:

1. Öffne ein Support-Ticket bei ZAP Hosting
2. Wir analysieren den Traffic
3. PletX kann auf Anfrage individuelle Anpassungen und Fixes ausrollen

Dieser Ansatz ist besonders für unübliche oder spezialisierte Services gedacht. Für webbasierte Projekte empfehlen wir weiterhin den Einsatz von Cloudflare. Ideal ist dabei Cloudflare Proxy oder CDN für Webseiten und Cloudflare Tunnel für FiveM/RedM TxAdmin oder andere Web-Dashboards.

## Temporäre Deaktivierung des Schutzes

Eine Funktion zur temporären Deaktivierung des Schutzes wird bald verfügbar sein. Mit dieser Option können Kunden den DDoS-Schutz für einzelne Server bei Bedarf komplett ausschalten. Das ist besonders praktisch für Umgebungen ohne nennenswertes DDoS-Risiko, Systeme mit hohem Traffic-Volumen wie Telemetrie- oder Monitoring-Plattformen sowie Anwendungen, die ungewöhnliche Traffic-Muster erzeugen und dadurch False Positives triggern könnten.

Die Funktion gibt fortgeschrittenen Nutzern volle Kontrolle über ihr Netzwerkverhalten, während Kunden mit Gameserver- und Anwendungs-Hosting weiterhin von automatischem und zuverlässigem Schutz profitieren.