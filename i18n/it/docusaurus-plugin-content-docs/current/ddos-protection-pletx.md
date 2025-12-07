---
id: ddos-protection-pletx
title: Protezione DDoS PletX su ZAP Hosting
description: "Scopri come ZAP Hosting protegge i tuoi server con una difesa DDoS proattiva e in tempo reale, su misura per ogni servizio che gestisci → Scopri di più ora"
sidebar_label: PletX
---

## Introduzione

Gli attacchi DDoS (Distributed Denial of Service) sono tentativi malevoli di interrompere il traffico normale di un server, servizio o rete bersaglio sovraccaricandolo con un traffico in ingresso eccessivo. Per garantire un’operatività stabile e senza interruzioni ai nostri clienti, ZAP Hosting si affida a sistemi di protezione DDoS dedicati e personalizzati per ogni data center.

Una delle tecnologie chiave della nostra infrastruttura è PletX, una piattaforma di protezione altamente adattiva che filtra e mitiga gli attacchi in tempo reale. Questo documento spiega come funziona PletX, quali servizi ne beneficiano e perché rappresenta un vantaggio importante per ambienti di hosting ad alte prestazioni.

## Dove viene utilizzata la protezione

PletX è già completamente attivo nella nostra sede di FFM/Eygelshoven, dove protegge tutti i prodotti ospitati, inclusi gameserver, VPS, server dedicati, server TeamSpeak, bot TS3 e Discord, oltre ai servizi di webspace. Questo garantisce una protezione completa e uniforme su tutta la gamma di prodotti in questo sito.

Stiamo preparando il rollout per le nostre sedi USA ad Ashburn, Dallas e Los Angeles, dove PletX sarà disponibile molto presto.

## Come funziona la protezione DDoS

La protezione PletX nelle nostre sedi è sempre attiva e completamente sincronizzata con la nostra rete. Tutto il traffico in ingresso passa attraverso il sistema di filtraggio PletX prima di raggiungere la nostra infrastruttura. Questo assicura che il traffico malevolo venga eliminato il prima possibile e non arrivi mai al tuo server.

### Rilevamento automatico del protocollo

PletX analizza continuamente il traffico in ingresso e identifica le firme specifiche del protocollo non appena appare traffico reale su una porta. Quando, per esempio, i giocatori si connettono a un server FiveM sulla porta di gioco, ad esempio la 30120,

rileva la struttura caratteristica dei pacchetti e applica automaticamente la regola FiveM appropriata. Lo stesso vale per altri servizi; se un server Minecraft riceve traffico sulla porta 25565, il sistema riconosce l’handshake Minecraft e crea una regola corrispondente.

Quando un utente si connette a un VPS o server dedicato via SSH sulla porta 22, PletX riconosce l’handshake SSH e attiva una regola SSH. Per sistemi Windows, il traffico RDP sulla porta 3389 viene rilevato e viene creata una regola specifica RDP.

Se WireGuard o OpenVPN sono usati su una porta personalizzata, PletX identifica il primo scambio valido e applica la regola VPN corretta.

In tutti i casi, una volta identificato il protocollo, PletX permette solo il traffico legittimo per quel protocollo, filtrando tutto il resto prima che raggiunga il server.

### Profili di protezione supportati

PletX supporta un’ampia gamma di protocolli comuni per servizi e giochi. Questo include titoli popolari come FiveM, Minecraft, giochi basati sul motore Steam Source, servizi Metin 2, giochi basati su RakNet, SAMP, Growtopia e estensioni come PlasmoVoice. Anche applicazioni vocali come TeamSpeak vengono riconosciute automaticamente.

Oltre al traffico gaming, PletX identifica protocolli di accesso remoto come SSH e RDP, oltre a protocolli di rete sicura come WireGuard e OpenVPN.

<details>
  <summary>Gameserver</summary>
- FiveM
- Minecraft
- Vari giochi basati su Steam Source Engine
- Metin 2 Auth & Channel
- Novalife
- Giochi basati su RakNet
- SAMP
- Growtopia
- PlasmoVoice
- e altri..
</details>

<details>
  <summary>Server vocali</summary>

- TeamSpeak
- PlasmoVoice
</details>

<details>
  <summary>Accesso remoto</summary>
- SSH
- RDP
</details>

<details>
  <summary>VPN e rete sicura</summary>

- WireGuard
- OpenVPN
</details>

Qualsiasi protocollo non riconosciuto da PletX viene trattato come sconosciuto, il che può occasionalmente causare falsi positivi o comportamenti inattesi.

## Traffico web e servizi non supportati

Attualmente PletX non filtra il traffico HTTP o HTTPS. Applicazioni web o protocolli non supportati potrebbero quindi incorrere in falsi positivi occasionali. Se sei interessato da questo problema, procedi così:

1. Apri un ticket di supporto su ZAP-Hosting
2. Analizziamo il traffico
3. PletX può applicare aggiustamenti personalizzati e fix su richiesta

Questo approccio è pensato soprattutto per servizi particolari o di nicchia. Per progetti web consigliamo di continuare a usare Cloudflare. L’ideale è utilizzare Cloudflare Proxy o CDN per siti web e Cloudflare Tunnel per FiveM/RedM TxAdmin o altri web dashboard.

## Disattivazione temporanea della protezione

A breve sarà disponibile una funzione per disattivare temporaneamente la protezione. Questa opzione permetterà ai clienti di spegnere completamente la protezione DDoS su server specifici quando serve. È particolarmente utile per ambienti senza rischi DDoS significativi, sistemi ad alto volume come piattaforme di telemetria o monitoraggio e applicazioni che generano traffico insolito che potrebbe causare falsi positivi.

La funzione dà agli utenti avanzati il pieno controllo sul comportamento della loro rete, mentre i clienti di hosting giochi e applicazioni continueranno a beneficiare di una protezione automatica e affidabile.