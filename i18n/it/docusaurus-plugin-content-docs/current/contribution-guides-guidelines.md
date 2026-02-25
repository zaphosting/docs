---
id: contribution-guides-guidelines
title: Linee guida per le guide
description: "Scopri come creare documentazione coerente e di alta qualità che migliora l'esperienza e la chiarezza per i lettori → Scopri di più ora"
sidebar_label: Linee guida
---

![Banner Guide](https://screensaver01.zap-hosting.com/index.php/s/4aaqq3zctZFW4JJ/preview)

Per garantire che i contenuti delle nostre ZAP-Docs mantengano sempre uno standard coerente di qualità e stile, abbiamo creato una serie di linee guida da seguire quando si crea o modifica contenuti per la nostra documentazione. Devi **assolutamente** seguire attentamente queste linee guida per assicurarti che il tuo suggerimento e la pull request finale vengano processati rapidamente. Ancora più importante, questo garantirà ai nostri lettori un'esperienza migliore e più coerente di alta qualità durante la lettura e il follow-up delle guide.

Le nostre linee guida per il contributo alle guide sono suddivise nelle seguenti sezioni:

- Struttura
- Stile
- Formattazione
- Terminologia

Ti consigliamo di dare un’occhiata a queste sezioni almeno una volta prima di iniziare a scrivere qualsiasi contenuto. È anche un ottimo punto di riferimento se hai dubbi su come procedere durante la creazione.

## Struttura

Tutte le nostre guide nelle ZAP-Docs seguono una struttura abbastanza coerente che inizia con una breve introduzione insieme a eventuali prerequisiti o passaggi preparatori, seguita dal contenuto principale e da una breve conclusione.

La struttura può essere modificata occasionalmente a seconda del tipo di guida prodotta. Questo può essere discusso con il Team ZAP-Docs nella tua proposta iniziale. Puoi vedere come utilizzare i titoli nella sezione headers, che si fa tramite il classico Markdown.

La struttura che ci aspettiamo di vedere di solito include i seguenti titoli:

- **Titolo della pagina** (H1) - Questo è impostato tramite il metadata `title` in cima alla pagina.
- **Introduzione** (H2) - Breve 1-2 frasi che spiegano l’argomento della guida e, soprattutto, cosa mira a far raggiungere la guida.
- **Preparazione** (H2) - Questo titolo è **opzionale**. Serve solo se ci sono prerequisiti o passaggi preparatori da fare prima che il lettore possa seguire la guida. Per esempio, qui potresti rimandare alla nostra guida [Accesso SSH iniziale](vserver-linux-ssh.md) se l’utente deve prima accedere al server. Oppure potresti indicare eventuali requisiti software e/o hardware. O fornire istruzioni rapide su come preparare un software, tipo un firewall. Ti consigliamo di dare un’occhiata al nostro [sito ZAP-Docs](https://zap-hosting.com/guides) per vedere se ci sono guide che coprono questi passaggi e, in tal caso, linkarle.
- **Argomento principale** (H2) - Questa è la prima sezione principale della guida. Spesso sarà impostata su **Installazione**, seguita da varie sottosezioni per ogni parte del processo. Ma non sempre è così, per esempio guide informative possono avere un argomento principale diverso.
- Opzionale: **Sotto-argomento 1** (H3)
- Opzionale: **Sotto-argomento 2** (H3)
- ...
- Opzionale: **Altro argomento** (H2)
- **Conclusione** (H2) - Come parte finale della guida, chiudi con 1-3 frasi che spiegano cosa il lettore ha raggiunto con successo e fornisci un riferimento al nostro Supporto se il lettore ha ancora problemi.

:::info Uso dei sotto-titoli (H3 & H4)
Ti consigliamo di usare i titoli H3 per creare sottosezioni all’interno delle sezioni principali H2, così da organizzare meglio blocchi più grandi di contenuto. Un esempio è la sezione **Argomento principale** sopra.

Puoi anche usare titoli H4. Sono utili se vuoi creare un’ulteriore sottosezione senza farla apparire nella struttura a destra della guida. Sono utili anche per dividere ulteriormente una sezione H3 in parti più piccole.

Se usi i sotto-titoli, di solito ha senso averne almeno due o più all’interno del titolo principale, altrimenti non ha senso avere un solo sotto-titolo in una sezione principale.
:::

In futuro aggiungeremo template con Markdown preimpostato, che saranno un ottimo punto di partenza per creare nuove pagine. Saranno disponibili presto.

### Titoli

I titoli devono essere concisi e riflettere chiaramente l’obiettivo principale della guida. Pensa a cosa il lettore otterrà alla fine, tipo completare un’installazione, configurare un servizio o capire un argomento tecnico specifico. Il risultato deve essere subito riconoscibile dal titolo.

Ogni titolo deve iniziare con il prefisso della categoria prodotto appropriata. Questo prefisso deve corrispondere alla sezione in cui la guida è posizionata nella sidebar. Controllare guide esistenti nella stessa categoria aiuta a mantenere una nomenclatura coerente.

Per esempio, una guida relativa al prodotto VPS dovrebbe seguire una struttura tipo: `VPS: Configurazione SteamCMD Linux`.

Se una guida è scritta in modo generico e vale per più prodotti, tipo un’installazione di servizio o gameserver che funziona sia su VPS che su Dedicated Server, il nome del prodotto non va inserito nel titolo. In questi casi la guida è volutamente indipendente dal prodotto e quindi non serve un prefisso specifico.

### Introduzione

Le introduzioni devono essere brevi e dirette, di solito 1-2 frasi. Nel contenuto devi descrivere brevemente l’argomento e soprattutto spiegare cosa presenterà la guida al lettore, informandolo sull’obiettivo finale.

Un esempio di introduzione ideale per una guida su SteamCMD sarebbe:

- **1a frase**: SteamCMD è uno strumento essenziale necessario per installare server dedicati per tantissimi giochi come Palworld, Enshrouded e altri.
- **2a frase**: In questa guida esploreremo il processo di setup iniziale per installare SteamCMD sul tuo server Linux. Useremo Ubuntu negli esempi, ma il processo è molto simile anche per altre distro.

Come vedi, l’introduzione riassume brevemente i temi rilevanti della guida e presenta l’obiettivo finale per il lettore.

### Preparazione

La sezione preparazione serve a chiarire eventuali prerequisiti che il lettore deve soddisfare prima di poter seguire la guida. Può trattarsi di requisiti software o hardware, istruzioni per preparare software come un firewall o semplicemente guidare l’utente a connettersi al server via SSH o RDP.

Ti consigliamo vivamente di dare un’occhiata al nostro [sito ZAP-Docs](https://zap-hosting.com/guides) per cercare guide che coprano o siano correlate ai passaggi preparatori che vuoi includere. Se esiste una guida su un argomento, tipo [Accesso SSH iniziale](vserver-linux-ssh.md), linkala e informa il lettore di seguirla prima di procedere.

I prerequisiti comuni includono:

- Software richiesto (es. Git, Node.js, Python, Docker)
- Tutorial che aiutano il lettore a ottenere conoscenze base (es. un’altra pagina ZAP-Docs)
- Account utente come API
- Impostazioni richieste (es. DNS/SSL)

Un esempio per una guida su Reverse Proxy sarebbe:
```
Per configurare un reverse proxy ti serve un server Linux dove ospitare il proxy e devi connetterti ad esso. Usa la nostra guida [Accesso SSH iniziale](vserver-linux-ssh.md) se ti serve aiuto. Ti serve anche un dominio di tua proprietà. Per ogni sottodominio che vuoi usare, devi creare un record DNS `A` che punti all’IP del tuo server Linux.
```

### Argomento principale

Ora è il momento di scrivere la parte principale della guida. Puoi usare liberamente titoli H2, H3 e H4 per strutturare al meglio la guida. Ha senso usare H2 per le sezioni grandi e poi suddividerle in sottosezioni con H3 e/o H4.

Spesso, specialmente per guide che spiegano come installare software, userai un titolo **Installazione** diviso in varie sottosezioni H3. Se non sai come strutturare bene la guida, non preoccuparti: lavoreremo con te nella fase di proposta per pianificare una struttura solida.

In ogni sezione è consigliato aggiungere brevi frasi di apertura e chiusura per far capire al lettore cosa ha fatto finora e cosa farà dopo. Ovviamente, l’ultima sezione principale non ha bisogno di frase di chiusura, perché si passa naturalmente alla conclusione.

Esempi di frasi di transizione:

- **Frase di apertura**: In questa sezione configurerai il software per personalizzarlo secondo le tue preferenze.
- **Frase di chiusura**: Con la configurazione pronta e il file salvato, passa alla sezione successiva per creare l’account amministratore e iniziare a usare il software.

Queste frasi aiutano il lettore a seguire bene il flusso della guida. Ricorda di usare sempre la seconda persona (es. "Tu creerai") e non la prima persona quando scrivi contenuti e transizioni.

### Conclusione

Infine, l’ultima sezione è la conclusione della guida. Qui chiudi con 1-3 frasi che spiegano cosa il lettore ha raggiunto con successo e fornisci riferimenti a letture o guide successive per approfondire l’argomento.

Sarebbe ottimo linkare altre guide ZAP-Docs esistenti, specialmente se seguono naturalmente la tua guida. Consigliamo anche di fornire un riferimento al nostro Supporto se il lettore ha ancora problemi.

Un esempio di conclusione efficace è:
```
Hai ora configurato con successo il software sul tuo server Linux! Ti consigliamo di dare un’occhiata alle nostre guide sui servizi Linux in questa sezione per installare altri servizi.

Per domande o assistenza, non esitare a contattare il nostro supporto, disponibile ogni giorno per aiutarti! 🙂
```

## Stile

Lo stile di scrittura per le docs ZAP-Hosting punta a creare guide di alta qualità, pratiche e facilmente accessibili, che supportino tanti argomenti e lettori di ogni livello di esperienza.

### Tecnico & corretto

I nostri articoli devono essere il più possibile tecnicamente accurati e aggiornati con le ultime info del settore. Ci aspettiamo che gli articoli non solo permettano all’utente di raggiungere l’obiettivo finale di imparare, costruire o configurare qualcosa, ma anche di capire cosa ha fatto durante l’articolo. Ogni passaggio che crei deve avere uno scopo chiaro e spiegazioni, con opzioni aggiuntive o flag dove serve. Devi sempre tenere il lettore aggiornato su cosa sta facendo e perché.

Gli autori devono sempre rileggere e testare le guide per assicurarsi che tutto sia tecnicamente corretto e funzioni come previsto prima di inviare la pull request. Il team docs ZAP-Hosting leggerà e testerà la guida per garantirne coerenza e correttezza o discuterà miglioramenti se ci sono errori.

:::tip
Consigliamo sempre di passare il contenuto attraverso uno strumento di controllo ortografico per assicurarsi che SPAG sia corretto prima di creare la pull request. Un sito utile è: https://languagetool.org/
:::

### Pratico & utile

Quando un lettore finisce un articolo, deve aver imparato, costruito o configurato qualcosa dall’inizio alla fine. Le nostre guide supportano lettori di ogni esperienza, quindi il tuo contributo deve esplorare a fondo l’argomento per far diventare il lettore competente e/o fargli raggiungere un risultato. Questo significa che devi coprire tutti i dettagli necessari, inclusi i prerequisiti. Come autore, devi mandare i lettori a siti esterni solo se non esiste documentazione ZAP-Docs sull’argomento o se serve per approfondimenti non essenziali ma utili per la conoscenza tecnica. I link esterni non devono rimandare a documentazioni di competitor.

### Amichevole, formale & completo

Ci aspettiamo che la documentazione sia moderna e friendly per essere accessibile a tutti, ma allo stesso tempo formale. Durante la guida, il tono deve essere adatto a tutti i lettori, indipendentemente dall’esperienza o dalla lingua.

Poiché le guide puntano a educare e far raggiungere un risultato, chiediamo agli autori di usare la seconda persona (es. "Devi...") e non la prima persona (es. "Penso...") per mantenere il focus sul lettore.

Infine, tutti gli autori devono seguire il nostro codice di condotta per garantire che le guide siano inclusive per chiunque, indipendentemente da età, etnia, identità di genere, esperienza, nazionalità, religione, orientamento politico, sessuale, status socioeconomico o scelte tecnologiche. Evita linguaggi potenzialmente offensivi o contenuti riferiti a questi temi.

## Formattazione

La nostra documentazione è formattata con Markdown, un linguaggio di markup molto usato e semplice. Dai un’occhiata alle sezioni qui sotto per capire cosa usiamo e come.

:::tip
Per esempi e spiegazioni più dettagliate sulle funzionalità Markdown, visita [Markdown Guide](https://www.markdownguide.org/cheat-sheet/).
:::

### Intestazioni

Le intestazioni sono uno degli strumenti più importanti per separare le pagine in modo chiaro e logico. Il titolo principale è l’H1, ma non devi mai usarlo nel testo. Usa invece il metadata `title` in cima al file guida, che si occupa di questo.

Nelle nostre guide, usa H2 per dividere la guida in sezioni principali. Poi usa H3 per suddividere le sezioni principali in sottosezioni. Un esempio è dividere una sezione principale in più step per facilitare la lettura. C’è anche H4, usato più raramente, che serve a dividere ulteriormente ma non appare nella struttura della guida.

:::info
Se usi sotto-intestazioni (es. H3 sotto H2), assicurati che ci siano almeno due intestazioni dello stesso livello nella sezione, altrimenti è un uso scorretto.
:::

Ecco un esempio rapido di uso intestazioni:

```
## Installazione
H2 - Sezione principale

### Download dei file di gioco
H3 - Sottosezione di H2

#### Via SteamCMD
H4 - Sottosezione di H3

#### Manuale via GitHub
H4 - Sottosezione di H3

### Preparazione configurazione
H3 - Sottosezione di H2

### Avvio server
H3 - Sottosezione di H2
```

### Markdown in linea

Usiamo vari formati in linea per migliorare la leggibilità e adattarci a lettori con diversi livelli tecnici. Leggi la sezione qui sotto per capire l’uso di ciascuno.

#### Grassetto

Il grassetto serve a enfatizzare info importanti, tipo:

- Cambiare contesto tra i passaggi
- Hostname, credenziali & username
- Terminologia chiave

Usa due asterischi prima e dopo il testo, es. `**ciao**` diventa **ciao**.

#### Corsivo

Il corsivo serve a introdurre nuovi termini tecnici nell’articolo. Per esempio, oggi configureremo un *reverse proxy*.

Usa un asterisco prima e dopo il testo, es. `*ZAP-Hosting - More POWER!*` diventa *ZAP-Hosting - More Power!*.

#### Codice in linea

Il codice in linea serve a mostrare info tecniche come URL. Esempi:

- Nomi e percorsi file (es. `C:/User/[your_name]/AppData....test.png`)
- URL (es. `https://zap-hosting.com`)
- Porte (es. `:30120`)
- Comandi (es. `ipconfig`)
- Query SQL (es. `SELECT * FROM servers`)
- Combinazioni tasti (es. `ENTER` o `CTRL + C`)

#### Tabelle

Le tabelle sono utili per mostrare info ripetitive, tipo comandi, descrizioni e usi in un gioco. Ecco un esempio:

```
| Comando    | Descrizione             | Uso                   |
| ---------- | ----------------------- | --------------------- |
| /help      | Invia comando aiuto     | /help [categoria]     |
| /stop      | Ferma il server         | /stop [true/false]    |
```

#### Blocchi di codice

I blocchi di codice sono utilissimi per guide con comandi, script, output terminale e altro.

Per usarli, metti ` ``` ` prima e dopo il blocco. Puoi anche specificare il linguaggio per evidenziare la sintassi, es. ` ```js ` per JavaScript.

```js
function hello(name) {
    console.log(name)
}

var server = "ZAP-Hosting"
hello(server)
```

### Uso delle Admonizioni

Le admonizioni servono a evidenziare info importanti nella guida. Ci sono cinque tipi, ognuno con uno scopo diverso.

Quando usi un’admonizione, devi sempre mettere un titolo chiaro e descrittivo. Il titolo fa capire subito al lettore il contesto e l’importanza senza dover leggere tutto.

La sintassi è uguale per tutti i tipi, cambia solo la parola chiave:

```
:::warning Titolo
	Il tuo contenuto qui.
:::
```

#### Nota

:::note Esempio: Informazioni aggiuntive
Usa questo tipo per info supplementari che possono aiutare il lettore ma non sono essenziali per completare la guida.
:::

#### Suggerimento

:::tip Esempio: Consiglio per ottimizzare le prestazioni
Usa questo tipo per condividere consigli pratici, best practice o miglioramenti basati sull’esperienza.
:::

#### Info

:::info Esempio: Requisito o dettaglio importante
Usa questo tipo per info contestuali importanti che il lettore deve conoscere prima o durante il processo.
:::

#### Attenzione

:::caution Esempio: Rischio di configurazione
Usa questo tipo per avvertire il lettore di potenziali problemi o errori durante la guida.
:::

#### Pericolo

:::danger Esempio: Bug noto o funzione deprecata
Usa questo tipo per avvisi critici, come bug noti, azioni irreversibili, rischi di sicurezza o funzioni deprecate che possono causare problemi seri.
:::

### Screenshot

Gli screenshot sono super utili per guidare visivamente i lettori e consigliamo di usarli quando serve. Assicurati che tutto ciò che si vede negli screenshot sia in inglese, perché la nostra documentazione è in inglese e useremo gli stessi screenshot anche per le altre lingue. Gli screenshot devono avere una risoluzione abbastanza alta da essere leggibili. Evita immagini troppo piccole o ritagliate male.

Puoi aggiungere uno screenshot così, sostituendo `your_url` con l’URL dell’immagine:

```
![](your_url)
```

Il modo migliore è usare siti come Imgur per caricare e usare l’immagine, oppure puoi trascinarla direttamente nel campo di editing su GitHub, che la caricherà automaticamente.

## Terminologia

Nella nostra documentazione usiamo una serie di termini chiave. Per coerenza, usiamo l’inglese americano (US-English) in tutta la documentazione. Qui standardizziamo alcuni termini comuni.

### Prodotti ZAP-Hosting

Quando citi un prodotto ZAP-Hosting, assicurati di usare il nome corretto, con la giusta ortografia e maiuscole. Puoi verificarlo andando sul [sito ZAP-Hosting](https://zap-hosting.com) e controllando come viene chiamato il prodotto nella pagina dedicata.

### Attributi definiti dall’utente

Nella maggior parte delle guide, per configurazioni come utenti, hostname, domini, IP e URL, il lettore deve usare i propri dati al posto dei placeholder.

Di default, usa sempre `[your_attribute]` per distinguere tra elementi statici e quelli unici, dove `attribute` è il tipo di attributo. Per esempio, per un IP scrivi `[your_server_ip]` o per un URL `http://[your_server_ip]:30120`.

Questo aiuta a capire quali valori il lettore deve cambiare. Fornisci anche una spiegazione o nota quando menzioni per la prima volta questi attributi per chiarire cosa cambiare.

Usa `zaphosting` come hostname, username o nome database di default.

### Software

Quando menzioni software nelle guide, assicurati di usare la corretta ortografia e maiuscole del nome. Se il sito ufficiale non è coerente, mantieni la stessa capitalizzazione all’interno dello stesso articolo per coerenza.

Collega sempre al sito ufficiale del software la prima volta che lo citi, se disponibile.