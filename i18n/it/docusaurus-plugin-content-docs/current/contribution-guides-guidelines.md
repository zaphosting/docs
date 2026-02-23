---
id: contribution-guides-guidelines
title: Linee guida per le guide
description: "Scopri come creare documentazione coerente e di alta qualità che migliora l'esperienza e la chiarezza del lettore → Scopri di più ora"
sidebar_label: Linee guida
---

![Guides Banner](https://screensaver01.zap-hosting.com/index.php/s/4aaqq3zctZFW4JJ/preview)

Per garantire che i contenuti delle nostre ZAP-Docs mantengano sempre uno standard coerente in termini di qualità e stile, abbiamo creato una serie di linee guida da seguire quando si crea o modifica contenuto per la nostra documentazione. Devi **assolutamente** seguire attentamente queste linee guida per assicurarti che il tuo suggerimento e la pull request finale vengano processati rapidamente. Ancora più importante, questo garantirà ai nostri lettori un'esperienza migliore e più coerente di alta qualità durante la lettura e il follow-up delle guide.

Le nostre linee guida per il contributo alle guide sono suddivise nelle seguenti sezioni:

- Struttura
- Stile
- Formattazione
- Terminologia

Ti consigliamo di dare un’occhiata a queste sezioni almeno una volta prima di iniziare a scrivere qualsiasi contenuto. È anche un ottimo riferimento se hai dubbi su come affrontare qualcosa durante il processo di creazione.

## Struttura

Tutte le nostre guide nelle ZAP-Docs seguono una struttura abbastanza coerente che inizia con una breve introduzione insieme a eventuali prerequisiti o passaggi preparatori, seguita dal contenuto principale e da una breve conclusione.

La struttura può essere modificata occasionalmente a seconda del tipo di guida prodotta. Questo può essere discusso con il Team ZAP-Docs nella tua proposta iniziale. Puoi vedere come utilizzare i titoli nella sezione headers, che si fa tramite il classico Markdown tradizionale.

La struttura che ci aspettiamo di vedere di solito prevede i seguenti titoli:

- **Titolo della pagina** (H1) - Questo è impostato tramite il metadata `title` in cima alla pagina.
- **Introduzione** (H2) - Breve 1-2 frasi che spiegano l’argomento della guida e, cosa più importante, cosa la guida mira a far raggiungere.
- **Preparazione** (H2) - Questo titolo è **opzionale**. Serve solo se ci sono prerequisiti o passaggi preparatori da fare prima che il lettore possa seguire la guida. Ad esempio, qui potresti rimandare alla nostra guida [Accesso SSH iniziale](vserver-linux-ssh.md) se l’utente deve prima connettersi al server. Oppure potresti indicare eventuali requisiti software e/o hardware. O fornire istruzioni rapide su come preparare un software, come un firewall. Ti consigliamo di dare un’occhiata al nostro [sito ZAP-Docs](https://zap-hosting.com/guides) per vedere se ci sono guide che coprono questi passaggi e, in tal caso, linkarle.
- **Argomento principale** (H2) - Questa è la prima sezione principale della guida. Spesso sarà impostata su **Installazione**, seguita da varie sotto-sezioni per ogni parte del processo. Ma non sempre è così, ad esempio guide informative possono avere un argomento principale diverso.
- Opzionale: **Sotto-argomento 1** (H3)
- Opzionale: **Sotto-argomento 2** (H3)
- ...
- Opzionale: **Altro argomento** (H2)
- **Conclusione** (H2) - Come parte finale della guida, dovresti chiudere la guida in 1-3 frasi spiegando cosa il lettore ha realizzato con successo e fornire un riferimento al nostro Supporto se il lettore ha ancora problemi.

:::info Uso dei sotto-titoli (H3 & H4)
Ti consigliamo di usare i titoli H3 per creare sotto-sezioni all’interno delle sezioni principali H2, così da organizzare meglio blocchi più grandi di contenuto. Un esempio è la sezione **Argomento principale** vista sopra.

Puoi anche usare titoli H4. Sono utili se vuoi creare un’ulteriore sotto-sezione senza farla apparire nella struttura a destra della guida. Sono utili anche se devi dividere ulteriormente una sezione H3 in sezioni ancora più piccole.

Se usi i sotto-titoli, di solito ha senso averne almeno due o più all’interno del titolo genitore, altrimenti non ha senso avere un solo sotto-titolo in una sezione principale.
:::

In futuro aggiungeremo template con Markdown preimpostato, che saranno un ottimo punto di partenza per creare nuove pagine. Saranno disponibili presto.

### Titoli

I titoli delle tue guide dovrebbero essere brevi e basati sull’obiettivo generale della guida che hai scritto. Pensa bene a cosa il lettore riuscirà a fare alla fine della guida, ad esempio installare un software o fornire informazioni su un argomento specifico.

Il titolo dovrebbe essere preceduto dalla categoria di prodotto a cui la guida si riferisce, che dovrebbe essere anche la sezione in cui hai posizionato la guida nella sidebar. Puoi facilmente controllare altre guide nella stessa sezione per vedere il loro prefisso.

Un esempio di buon titolo per una guida relativa al prodotto VPS sarebbe: `VPS: Configurazione SteamCMD Linux`

### Introduzione

Le introduzioni delle tue guide dovrebbero essere abbastanza brevi e dirette, tipicamente 1-2 frasi. Nel contenuto dovresti descrivere brevemente l’argomento trattato e, cosa più importante, spiegare cosa la guida presenterà al lettore, informandolo sull’obiettivo finale.

Un esempio di introduzione ideale per una guida su SteamCMD sarebbe:

- **1ª frase**: SteamCMD è uno strumento essenziale necessario per installare server dedicati per una vasta gamma di giochi, tra cui Palworld, Enshrouded e altri.
- **2ª frase**: In questa guida esploreremo il processo di configurazione iniziale per installare SteamCMD sul tuo server Linux. Useremo Ubuntu negli esempi, ma il processo è molto simile per altre distribuzioni.

Come vedi nell’esempio, si riassumono brevemente sia gli argomenti rilevanti della guida sia l’obiettivo finale per il lettore.

### Preparazione

La sezione preparazione è utile per chiarire eventuali prerequisiti necessari che il lettore deve soddisfare prima di poter seguire la guida. Questo può includere requisiti software o hardware, istruzioni su come preparare un software come un firewall o semplicemente guidare l’utente a connettersi al server via SSH o RDP.

Ti consigliamo vivamente di dare un’occhiata al nostro [sito ZAP-Docs](https://zap-hosting.com/guides) per cercare guide che coprano o siano correlate ai passaggi preparatori che vuoi includere. Se esiste una guida su un argomento, ad esempio [Accesso SSH iniziale](vserver-linux-ssh.md), dovresti linkarla e invitare il lettore a seguirla prima di procedere.

I prerequisiti comuni per le guide includono:

- Software richiesto (es. Git, Node.js, Python, Docker)
- Tutorial che aiutano il lettore a ottenere conoscenze base (es. un’altra pagina ZAP-Docs)
- Account utente come API
- Impostazioni richieste (es. DNS/SSL)

Un esempio per una guida su Reverse Proxy sarebbe:
```
Per configurare un reverse proxy ti servirà un server Linux per ospitare il proxy e dovresti connetterti ad esso. Usa la nostra guida [Accesso SSH iniziale](vserver-linux-ssh.md) se ti serve aiuto. Ti servirà anche l’accesso a un dominio di tua proprietà. Per ogni sottodominio che vuoi usare, dovresti creare un record DNS `A` che punti all’indirizzo IP del tuo server Linux.
```

### Argomento principale

Ora è il momento di scrivere la parte principale della tua guida. Sei libero di usare vari titoli H2, H3 e H4 per strutturare correttamente la guida. Ha senso usare titoli H2 per sezioni grandi e suddividerle in sotto-sezioni con H3 e/o H4.

Spesso, soprattutto per guide che spiegano come configurare software, userai un titolo **Installazione** diviso in varie sotto-sezioni H3. Se hai difficoltà a trovare una struttura corretta, non preoccuparti: lavoreremo con te nella fase di proposta per pianificare una struttura ben bilanciata.

In ogni sezione, è consigliato aggiungere brevi frasi di apertura e chiusura per far capire al lettore cosa ha fatto finora e cosa farà dopo. Ovviamente, l’ultima sezione principale non richiede necessariamente una frase di chiusura, perché si collega naturalmente alla conclusione.

Esempi di queste frasi sono:

- **Frase di apertura**: In questa sezione configurerai il software per personalizzarlo secondo le tue preferenze.
- **Frase di chiusura**: Con la configurazione pronta e il file salvato, passa alla sezione successiva per creare l’account amministratore e iniziare a usare il software.

Queste frasi di transizione danno al lettore un contesto importante e assicurano che la guida scorra bene. Ricorda, usa sempre la seconda persona (es. "Creerai") e non la prima persona quando scrivi contenuti e transizioni.

### Conclusione

Infine, l’ultima sezione è la conclusione della guida. Qui dovresti chiudere la guida in 1-3 frasi spiegando cosa il lettore ha realizzato con successo e fornire riferimenti a letture o guide aggiuntive per approfondire l’argomento.

Sarebbe ottimo linkare altre guide ZAP-Docs esistenti, specialmente se seguono naturalmente la tua guida. Consigliamo anche di fornire un riferimento al nostro Supporto se il lettore ha ancora problemi.

Un esempio di buona conclusione è:
```
Hai ora configurato con successo il software sul tuo server Linux! Ti consigliamo di dare un’occhiata alle nostre guide sui servizi Linux in questa sezione per installare altri servizi.

Per ulteriori domande o assistenza, non esitare a contattare il nostro team di supporto, disponibile ogni giorno per aiutarti! 🙂
```

## Stile

Lo stile di scrittura per le docs di ZAP-Hosting segue la nostra filosofia di produrre guide di alta qualità, pratiche e facilmente accessibili per supportare una vasta gamma di argomenti e lettori di ogni livello di esperienza.

### Tecnico & corretto

I nostri articoli puntano a essere il più tecnicamente accurati possibile e aggiornati con le ultime informazioni del settore. Ci aspettiamo che gli articoli non solo permettano all’utente di raggiungere l’obiettivo finale di imparare, costruire o configurare qualcosa di nuovo, ma anche di capire cosa ha fatto durante l’articolo. Ogni passo che crei in una guida deve avere uno scopo chiaro e una spiegazione, fornendo opzioni aggiuntive e/o flag dove serve. Devi sempre tenere aggiornato il lettore su cosa sta facendo e perché sta facendo quelle azioni.

Gli autori devono sempre rileggere e testare le loro guide per assicurarsi che tutto sia tecnicamente corretto e funzioni come previsto prima di inviare una pull request. Il team ZAP-Hosting docs leggerà e testerà la tua guida dove serve per garantirne la coerenza e la correttezza o discuterà miglioramenti se ci sono errori.

:::tip
Consigliamo sempre ai nostri autori di passare il contenuto attraverso uno strumento di controllo ortografico per assicurarsi che SPAG sia corretto prima di creare una pull request. Un sito utile è: https://languagetool.org/
:::

### Pratico & utile

Quando un lettore finisce un articolo, dovrebbe aver imparato, costruito o configurato qualcosa dall’inizio alla fine. Le nostre guide vogliono supportare lettori di ogni esperienza, quindi i tuoi contributi devono esplorare a fondo l’argomento per assicurarti che il lettore diventi competente e/o abbia raggiunto un risultato. Questo significa che come autore devi coprire il tuo argomento in modo completo, menzionando tutti i dettagli necessari inclusi i prerequisiti. Dovresti mandare i lettori a siti esterni solo se non esiste documentazione su ZAP-Docs o se serve per far acquisire dettagli aggiuntivi non obbligatori ma utili per ampliare la conoscenza tecnica. I link esterni non devono rimandare a documentazione di competitor.

### Amichevole, formale & completo

Ci aspettiamo che la nostra documentazione sia lungimirante e amichevole per essere accessibile a tutti, ma allo stesso tempo formale. Nel corso della guida, vogliamo che il tono sia accettabile per tutti i lettori, indipendentemente dall’esperienza o dalla lingua madre.

Poiché queste guide si concentrano principalmente sul supportare il lettore a imparare e raggiungere un risultato, ci aspettiamo che gli autori usino la seconda persona (es. "Devi...") e non la prima persona (es. "Penso...") per mantenere il lettore coinvolto e il focus su di lui.

Infine, tutti gli autori devono seguire il nostro codice di condotta per garantire che le guide siano accoglienti per chiunque, indipendentemente da età, etnia, identità di genere, esperienza, nazionalità, religione, orientamento politico, orientamento sessuale, status socioeconomico o scelte tecnologiche. Devi evitare linguaggio potenzialmente offensivo e qualsiasi contenuto che faccia riferimento a questi temi.

## Formattazione

La nostra documentazione è formattata tramite il linguaggio Markdown, molto usato e semplice da usare. Dai un’occhiata alle sezioni qui sotto per capire cosa usiamo e come.

:::tip
Per esempi più dettagliati e spiegazioni estese delle funzionalità Markdown, visita [Markdown Guide](https://www.markdownguide.org/cheat-sheet/) che offre ulteriori informazioni.
:::

### Intestazioni

Le intestazioni sono uno degli strumenti di formattazione più importanti per separare le pagine in modo chiaro e logico. Il titolo principale è l’intestazione H1, ma non dovresti mai usarla nel testo. Usa invece il metadata `title` in cima al file guida, che si occupa di questo.

Nelle nostre guide, usa intestazioni H2 per dividere la guida nelle sezioni principali. Poi usa H3 per suddividere le sezioni principali in sotto-sezioni. Un esempio è dividere una sezione principale in più passaggi per facilitare la lettura. Infine, c’è anche il tag H4, usato più raramente, che serve a dividere ulteriormente in sotto-sezioni ma non appare nella struttura della guida.

:::info
Se usi sotto-intestazioni (es. H3 sotto H2), assicurati che ci siano almeno due intestazioni dello stesso livello in quella sezione, altrimenti è un uso scorretto.
:::

Ecco un esempio rapido di come usare le intestazioni:

```
## Installazione
H2 - Sezione principale

### Download dei file di gioco
H3 - Sotto-sezione di H2

#### Via SteamCMD
H4 - Sotto-sezione di H3

#### Manualmente via GitHub
H4 - Sotto-sezione di H3

### Preparazione configurazione
H3 - Sotto-sezione di H2

### Avvio server
H3 - Sotto-sezione di H2
```

### Markdown in linea

Usiamo vari formati in linea per migliorare la leggibilità delle guide e adattarci a lettori con diversi livelli tecnici. Leggi la sezione qui sotto per capire l’uso di ciascuno.

#### Testo in grassetto

Il grassetto serve principalmente a enfatizzare informazioni. Esempi:

- Cambiare contesto tra i passaggi
- Hostname, credenziali & username
- Terminologia chiave

Usa due asterischi prima e dopo il testo, es. `**ciao**` diventa **ciao**.

#### Corsivo

Il corsivo serve principalmente a introdurre nuove parole tecniche nell’articolo. Ad esempio, oggi configureremo un *reverse proxy*.

Usa un asterisco prima e dopo il testo, es. `*ZAP-Hosting - More POWER!*` diventa *ZAP-Hosting - More Power!*.

#### Codice in linea

Il codice in linea serve a mostrare info tecniche come URL. Esempi:

- Nomi e percorsi file (es. `C:/User/[your_name]/AppData....test.png`)
- URL (es. `https://zap-hosting.com`)
- Porte (es. `:30120`)
- Comandi (es. `ipconfig`)
- Query SQL (es. `SELECT * FROM servers`)
- Combinazioni di tasti (es. `ENTER` o `CTRL + C`)

#### Tabelle

Le tabelle sono utili per mostrare tante info ripetitive, ad esempio comandi, descrizioni e usi in un gioco. Ecco un esempio:

```
| Comando    | Descrizione             | Uso                   |
| ---------- | ----------------------- | --------------------- |
| /help      | Invia comando aiuto     | /help [categoria]     |
| /stop      | Ferma il server         | /stop [true/false]    |
```

#### Blocchi di codice

I blocchi di codice sono molto utili per guide che mostrano comandi, script, output terminale e altro.

Per usarli, metti ` ``` ` prima e dopo il blocco di testo. Puoi anche specificare il linguaggio dopo i primi tre backtick per formattare correttamente. Esempio con JavaScript:

```js
function hello(name) {
    console.log(name)
}

var server = "ZAP-Hosting"
hello(server)
```

### Uso delle admonizioni

Nel contenuto puoi usare le admonizioni per evidenziare info sotto 5 etichette possibili, descritte qui sotto.

La sintassi è la stessa, cambia solo la parola chiave. Esempio:

```
:::note
Questa è una nota! Cambia la parola chiave per cambiare tipo.
:::
```

#### Nota

:::note Titolo Nota! (Opzionale)
Usa questo tag per note aggiuntive utili ma non fondamentali.
:::

#### Suggerimento

:::tip Titolo Suggerimento! (Opzionale)
Metti qui consigli basati sulla tua esperienza.
:::

#### Info

:::info Titolo Info! (Opzionale)
Se c’è info importante da sapere, mettila qui.
:::

#### Attenzione

:::caution Titolo Attenzione! (Opzionale)
Se c’è qualcosa da segnalare con cautela durante la guida, usa questo tag.
:::

#### Pericolo

:::danger Titolo Pericolo! (Opzionale)
Usa questa admonizione per info cruciali, come bug noti o funzionalità deprecate.
:::

### Screenshot

Gli screenshot sono super utili per guidare visivamente i lettori e li consigliamo dove serve. Assicurati che tutto ciò che si vede negli screenshot sia in inglese, dato che la nostra documentazione è in inglese e useremo gli stessi screenshot anche per altre lingue. Gli screenshot devono avere una risoluzione abbastanza alta da rendere tutto leggibile. Evita immagini piccole o troppo ritagliate.

Puoi aggiungere uno screenshot così, sostituendo `your_url` con l’URL dell’immagine:

```
![](your_url)
```

Il modo migliore è usare siti come Imgur per caricare e usare l’immagine, oppure puoi trascinarla direttamente nell’editor su GitHub, che la caricherà automaticamente.

## Terminologia

Nella nostra documentazione usiamo una serie di termini chiave. Ci aspettiamo che tu usi l’inglese americano per mantenere coerenza in tutti gli articoli. Qui standardizziamo alcuni termini comuni.

### Prodotti ZAP-Hosting

Quando citi un prodotto ZAP-Hosting, assicurati di usare il nome, l’ortografia e la capitalizzazione corretti. Puoi verificarlo visitando [il sito ZAP-Hosting](https://zap-hosting.com) e controllando come viene chiamato il prodotto nella pagina dedicata.

### Attributi definiti dall’utente

Nella maggior parte delle guide, dovrai indicare opzioni di configurazione come utenti, hostname, domini, IP e URL, dove il lettore dovrà inserire i propri dati al posto dei placeholder.

Di default, usa sempre `[your_attribute]` per distinguere tra elementi statici e unici, dove `attribute` va sostituito con il tipo di attributo. Ad esempio, per un IP scrivi `[your_server_ip]` o per un URL `http://[your_server_ip]:30120`. Questo aiuta a capire quali valori il lettore deve cambiare in base alla sua configurazione. Fornisci sempre una spiegazione o nota su quali attributi cambiare quando li menzioni la prima volta.

Usa `zaphosting` come hostname, username o nome database di default.

### Software

Quando citi software nelle tue guide, assicurati di usare l’ortografia e la capitalizzazione corrette. Se il sito ufficiale del software non è coerente, mantieni la stessa capitalizzazione all’interno dello stesso articolo per coerenza.

Collega sempre al sito ufficiale del software quando lo menzioni per la prima volta, se disponibile.