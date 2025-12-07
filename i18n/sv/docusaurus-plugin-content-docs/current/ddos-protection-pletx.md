---
id: ddos-protection-pletx
title: PletX DDoS-skydd hos ZAP Hosting
description: "Ta reda på hur ZAP Hosting skyddar dina servrar med proaktivt, realtids DDoS-försvar anpassat för varje tjänst du kör → Läs mer nu"
sidebar_label: PletX
---

## Introduktion

DDoS (Distributed Denial of Service) attacker är illvilliga försök att störa den normala trafiken till en måltavlas server, tjänst eller nätverk genom att överbelasta den med överdriven inkommande trafik. För att säkerställa stabil och oavbruten drift för våra kunder förlitar sig ZAP Hosting på dedikerade DDoS-skyddssystem anpassade för varje datacenterplats.

En av nyckelteknologierna i vår infrastruktur är PletX, en mycket adaptiv skyddsplattform som filtrerar och mildrar attacker i realtid. Detta dokument förklarar hur PletX fungerar, vilka tjänster som drar nytta av det och varför det ger en stor fördel för prestandakritiska hostingmiljöer.

## Var skyddet används

PletX är redan fullt implementerat på vår FFM/Eygelshoven-plats, där det skyddar alla hostade produkter inklusive gameservers, VPS, dedikerade servrar, TeamSpeak-servrar, TS3 och Discord-bots samt webbspace-tjänster. Detta garanterar ett heltäckande och konsekvent skydd över hela produktutbudet på denna plats.

Vi förbereder just nu utrullningen för våra US-platser i Ashburn, Dallas och Los Angeles, där PletX också snart kommer att finnas tillgängligt.

## Hur DDoS-skyddet fungerar

PletX-skyddet på våra platser är alltid aktivt och fullt synkroniserat med vårt nätverk. All inkommande trafik dirigeras genom PletX filtreringssystem innan den når vår infrastruktur. Detta säkerställer att skadlig trafik elimineras så tidigt som möjligt och aldrig når din server.

### Automatisk protokolligenkänning

PletX analyserar kontinuerligt inkommande trafik och identifierar protokollspecifika signaturer så fort riktig trafik dyker upp på en port. När spelare till exempel ansluter till en FiveM-server på dess spelport, exempelvis 30120,

upptäcker den den karaktäristiska paketstrukturen och applicerar automatiskt rätt FiveM-regel. Samma gäller för andra tjänster; om en Minecraft-server får trafik på port 25565 känner systemet igen Minecraft-handshaken och skapar en matchande regel.

När en användare ansluter till en VPS eller dedikerad server via SSH på port 22 känner PletX igen SSH-handshaken och aktiverar en SSH-regel. För Windows-baserade system upptäcks RDP-trafik på port 3389 och en RDP-specifik regel skapas.

Om WireGuard eller OpenVPN används på en anpassad port identifierar PletX det första giltiga utbytet och applicerar rätt VPN-regel.

I alla fall, när PletX har identifierat protokollet tillåts endast legitim trafik för det protokollet medan orelaterad trafik filtreras bort innan den når servern.

### Stödda skyddsprofiler

PletX stödjer ett brett spektrum av vanliga tjänste- och spelprotokoll. Detta inkluderar populära spel som FiveM, Minecraft, titlar som använder Steam Source Engine, Metin 2-baserade tjänster, RakNet-drivna spel, SAMP, Growtopia och tillägg som PlasmoVoice. Röstapplikationer som TeamSpeak känns också automatiskt igen.

Utöver spelrelaterad trafik identifierar PletX fjärråtkomstprotokoll som SSH och RDP samt säkra nätverksprotokoll som WireGuard och OpenVPN.

<details>
  <summary>Gameservers</summary>
- FiveM
- Minecraft
- Olika spel som stödjer Steam Source Engine
- Metin 2 Auth & Channel
- Novalife
- RakNet-baserade spel
- SAMP
- Growtopia
- PlasmoVoice
- och fler..
</details>

<details>
  <summary>Röstservrar</summary>

- TeamSpeak
- PlasmoVoice
</details>

<details>
  <summary>Fjärråtkomst</summary>
- SSH
- RDP
</details>

<details>
  <summary>VPN och säker nätverkstrafik</summary>

- WireGuard
- OpenVPN
</details>

Alla protokoll som inte känns igen av PletX behandlas som okända, vilket ibland kan leda till falska positiva eller oväntat beteende.

## Webbtrafik och icke-stödda tjänster

PletX filtrerar för närvarande inte HTTP eller HTTPS-trafik. Webbapplikationer eller icke-stödda protokoll kan därför ibland drabbas av falska positiva. Om du påverkas av detta, gör så här:

1. Öppna ett supportärende hos ZAP-Hosting
2. Vi analyserar trafiken
3. PletX kan vid behov rulla ut anpassade justeringar och fixar

Denna metod är särskilt avsedd för ovanliga eller specialiserade tjänster. För webbaserade projekt rekommenderar vi att du fortsätter använda Cloudflare. Helst med Cloudflare Proxy eller CDN för webbplatser och Cloudflare Tunnel för FiveM/RedM TxAdmin eller andra webbpaneler.

## Tillfällig avstängning av skydd

En funktion för tillfällig avstängning av skydd kommer snart att lanseras. Denna kommande option låter kunder helt stänga av DDoS-skyddet för specifika servrar vid behov. Det är särskilt användbart för miljöer utan meningsfull DDoS-risk, högvolymsystem som telemetri- eller övervakningsplattformar och applikationer som genererar ovanliga trafikmönster som kan trigga falska positiva.

Funktionen ger avancerade användare full kontroll över sitt nätverksbeteende medan spel- och applikationshosting-kunder fortsätter dra nytta av automatiskt och pålitligt skydd.