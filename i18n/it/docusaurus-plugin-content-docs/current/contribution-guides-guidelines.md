---
id: contribution-guides-guidelines
title: Linee guida per le guide
description: "Scopri come creare documentazione coerente e di alta qualità che migliora l’esperienza e la chiarezza per i lettori → Scopri di più ora"
sidebar_label: Linee guida
---

![Guides Banner](https://screensaver01.zap-hosting.com/index.php/s/4aaqq3zctZFW4JJ/preview)

Per garantire che i contenuti dei nostri ZAP-Docs mantengano sempre uno standard di qualità e stile coerente, abbiamo creato una serie di linee guida da seguire quando si crea o modifica contenuto per la nostra documentazione. Devi **assolutamente** seguire queste linee guida per assicurarti che il tuo suggerimento e la pull request finale vengano processati rapidamente. Ancora più importante, questo garantirà ai nostri lettori un’esperienza migliore e più uniforme di alta qualità mentre leggono e seguono le guide.

Le nostre linee guida per il contributo alle guide sono suddivise nelle seguenti sezioni:

- Struttura
- Stile
- Formattazione
- Terminologia

Ti consigliamo di dare un’occhiata a queste sezioni almeno una volta prima di iniziare a scrivere contenuti. È anche un ottimo punto di riferimento se hai dubbi su come procedere durante la creazione.

## Struttura

Tutte le nostre guide nei ZAP-Docs seguono una struttura abbastanza coerente che inizia con una breve introduzione insieme a eventuali prerequisiti o passaggi preparatori, seguita dal contenuto principale e da una breve conclusione.

La struttura può essere modificata occasionalmente a seconda del tipo di guida prodotta. Questo può essere discusso con il team ZAP-Docs nella fase iniziale del tuo suggerimento. Puoi vedere come utilizzare gli heading nella sezione headers, che si fa con il classico Markdown.

La struttura che ci aspettiamo di vedere di solito prevede i seguenti heading:

- **Titolo pagina** (H1) - Questo è impostato tramite il metadata `title` in cima alla pagina.
- **Introduzione** (H2) - Breve spiegazione di 1-2 frasi che descrive l’argomento della guida e, cosa più importante, cosa mira a far raggiungere la guida.
- **Preparazione** (H2) - Questo heading è **opzionale**. Serve solo se ci sono prerequisiti o passaggi preparatori da fare prima che il lettore possa seguire la guida. Per esempio, qui potresti rimandare alla nostra guida [Accesso SSH iniziale](vserver-linux-ssh.md) se l’utente deve prima connettersi al server. Oppure potresti indicare requisiti software e/o hardware. O fornire istruzioni rapide su come preparare un software, tipo un firewall. Ti consigliamo di dare un’occhiata al nostro [sito ZAP-Docs](https://zap-hosting.com/guides) per vedere se ci sono guide che coprono questi passaggi e, in tal caso, linkarle.
- **Argomento principale** (H2) - Questa è la prima sezione principale della guida. Spesso sarà impostata su **Installazione**, seguita da varie sotto-sezioni per ogni parte del processo. Ma non sempre è così, per esempio guide informative possono avere un argomento principale diverso.
- Opzionale: **Sotto-argomento 1** (H3)
- Opzionale: **Sotto-argomento 2** (H3)
- ...
- Opzionale: **Altro argomento** (H2)
- **Conclusione** (H2) - Come parte finale della guida, chiudi con 1-3 frasi che spiegano cosa il lettore ha realizzato con successo e fornisci un riferimento al nostro Support Team se il lettore ha ancora problemi.

:::info Uso dei sotto-heading (H3 & H4)
Ti incoraggiamo a usare heading H3 per creare sotto-sezioni all’interno delle sezioni principali H2 per organizzare meglio contenuti più lunghi. Un esempio è la sezione **Argomento principale** sopra.

Puoi anche usare heading H4. Sono utili se vuoi creare un’ulteriore sotto-sezione senza mostrarla nella struttura a destra della guida. Sono utili anche se devi dividere ulteriormente una sezione H3 in parti più piccole.

Se usi sotto-heading, di solito ha senso averne almeno due o più all’interno della sezione principale, altrimenti non ha senso avere un solo sotto-heading in una sezione principale.
:::

In futuro aggiungeremo template con Markdown preimpostato, che saranno un ottimo punto di partenza per creare nuove pagine. Saranno disponibili presto.

### Titoli

I titoli delle tue guide devono essere brevi e basati sull’obiettivo generale della guida che hai scritto. Pensa bene a cosa il lettore riuscirà a fare alla fine della guida, per esempio installare un software o fornire informazioni su un argomento specifico.

Il titolo deve essere preceduto dalla categoria prodotto a cui la guida si riferisce, che dovrebbe essere anche la sezione in cui hai posizionato la guida nella sidebar. Puoi facilmente controllare altre guide nella stessa sezione per vedere il loro prefisso.

Un esempio di titolo valido per una guida relativa al prodotto VPS sarebbe: `VPS: SteamCMD Linux Setup`

### Introduzione

Le introduzioni delle tue guide devono essere relativamente brevi e dirette, di solito 1-2 frasi. Nel contenuto devi descrivere brevemente l’argomento e, cosa più importante, spiegare cosa la guida presenterà al lettore, informandolo sull’obiettivo finale.

Un esempio di introduzione ideale per una guida su SteamCMD sarebbe:

- **1ª frase**: SteamCMD è uno strumento essenziale necessario per installare server dedicati per una vasta gamma di giochi come Palworld, Enshrouded e altri.
- **2ª frase**: In questa guida esploreremo il processo di setup iniziale per installare SteamCMD sul tuo server Linux. Useremo Ubuntu negli esempi, ma il processo è molto simile anche per altre distribuzioni.

Come vedi, l’esempio riassume brevemente sia gli argomenti rilevanti della guida sia l’obiettivo finale per il lettore.

### Preparazione

La sezione preparazione è utile per chiarire eventuali prerequisiti necessari che il lettore deve soddisfare prima di poter seguire la guida. Può trattarsi di requisiti software o hardware, istruzioni per preparare un software come un firewall o semplicemente guidare l’utente a connettersi al server via SSH o RDP.

Ti consigliamo vivamente di dare un’occhiata al nostro [sito ZAP-Docs](https://zap-hosting.com/guides) per cercare guide che coprano o siano correlate ai passaggi preparatori che vuoi includere. Se esiste una guida su un argomento, per esempio [Accesso SSH iniziale](vserver-linux-ssh.md), devi linkarla e invitare il lettore a seguirla prima di procedere.

I prerequisiti comuni includono:

- Software richiesto (es. Git, Node.js, Python, Docker)
- Tutorial per aiutare il lettore a ottenere conoscenze base (es. un’altra pagina ZAP-Docs)
- Account utente come API
- Impostazioni richieste (es. DNS/SSL)

Un esempio per una guida su Reverse Proxy sarebbe:
```
Per configurare un reverse proxy ti serve un server Linux dove ospitare il proxy e devi connetterti ad esso. Usa la nostra guida [Accesso SSH iniziale](vserver-linux-ssh.md) se ti serve aiuto. Ti serve anche l’accesso a un dominio di tua proprietà. Per ogni sottodominio che vuoi usare, devi creare un record DNS `A` che punti all’indirizzo IP del tuo server Linux.
```

### Argomento principale

Ora è il momento di scrivere la parte principale della guida. Puoi usare liberamente heading H2, H3 e H4 per strutturare al meglio la guida. Ha senso usare H2 per sezioni grandi e suddividerle in sotto-sezioni con H3 e/o H4.

Spesso, soprattutto per guide che spiegano come configurare software, userai un heading **Installazione** diviso in varie sotto-sezioni H3. Se non sai come strutturare la guida, non preoccuparti: lavoreremo con te nella fase di suggerimento per pianificare una struttura solida.

In ogni sezione è consigliato aggiungere brevi frasi di apertura e chiusura per far capire al lettore cosa ha fatto finora e cosa farà dopo. Ovviamente l’ultima sezione principale non richiede necessariamente una frase di chiusura, perché si collega naturalmente alla conclusione.

Esempi di frasi di transizione:

- **Frase di apertura**: In questa sezione configurerai il software secondo le tue preferenze.
- **Frase di chiusura**: Con la configurazione pronta e il file salvato, passa alla sezione successiva per creare l’account amministratore e iniziare a usare il software.

Queste frasi aiutano il lettore a seguire il flusso della guida. Ricorda di usare sempre la seconda persona (es. "Tu creerai") e non la prima persona quando scrivi contenuti e transizioni.

### Conclusione

Infine, l’ultima sezione è la conclusione della guida. Qui chiudi la guida in 1-3 frasi spiegando cosa il lettore ha realizzato con successo e fornendo riferimenti a letture o guide successive per approfondire l’argomento.

È ottimo linkare altre guide ZAP-Docs esistenti, specialmente se seguono naturalmente la tua guida. Consigliamo anche di fornire un riferimento al nostro Support Team se il lettore ha ancora problemi.

Un esempio di conclusione efficace è:
```
Hai configurato con successo il software sul tuo server Linux! Ti consigliamo di esplorare le nostre guide sui servizi Linux in questa sezione per installare altri servizi.

Per ulteriori domande o assistenza, non esitare a contattare il nostro supporto, disponibile ogni giorno per aiutarti! 🙂
```

## Stile

Lo stile di scrittura per i documenti ZAP-Hosting punta a creare guide di alta qualità, pratiche e facilmente accessibili per supportare una vasta gamma di argomenti e lettori di ogni livello di esperienza.

### Tecnico & corretto

I nostri articoli devono essere il più possibile tecnicamente accurati e aggiornati con le ultime informazioni del settore. Ci aspettiamo che gli articoli non solo permettano all’utente di raggiungere l’obiettivo finale di imparare, costruire o configurare qualcosa di nuovo, ma anche di capire cosa ha fatto durante l’articolo. Ogni passo che crei deve avere uno scopo chiaro e spiegazioni, fornendo opzioni aggiuntive o flag dove serve. Devi sempre tenere aggiornato il lettore su cosa sta facendo e perché.

Gli autori devono sempre rileggere e testare le guide per assicurarsi che tutto sia tecnicamente corretto e funzioni come previsto prima di inviare la pull request. Il team ZAP-Hosting leggerà e testerà la guida dove serve per garantirne la coerenza e correttezza o discuterà miglioramenti in caso di errori.

:::tip
Consigliamo sempre di passare il contenuto attraverso uno strumento di controllo ortografico per assicurarsi che SPAG sia corretto prima di inviare la pull request. Un sito utile è: https://languagetool.org/
:::

### Pratico & utile

Quando un lettore finisce un articolo, dovrebbe aver imparato, costruito o configurato qualcosa dall’inizio alla fine. Le nostre guide supportano lettori di ogni esperienza, quindi i tuoi contributi devono esplorare a fondo l’argomento per assicurarti che il lettore diventi competente e/o abbia raggiunto un risultato. Questo significa che come autore devi coprire il tema in modo completo, menzionando tutti i dettagli necessari inclusi i prerequisiti. Devi rimandare a siti esterni solo se non esiste documentazione ZAP-Docs sull’argomento o se serve per approfondimenti non essenziali ma utili per la conoscenza tecnica. I link esterni non devono rimandare a documentazione di competitor.

### Amichevole, formale & completo

Ci aspettiamo che la documentazione sia moderna e amichevole per essere accessibile a tutti, ma allo stesso tempo formale. Durante la guida, il tono deve essere accettabile per tutti i lettori, indipendentemente dall’esperienza o dalla lingua.

Poiché queste guide puntano a supportare il lettore per educarlo e fargli raggiungere un risultato, chiediamo agli autori di usare la seconda persona (es. "Devi...") e non la prima persona (es. "Penso...") per mantenere il focus sul lettore.

Infine, tutti gli autori devono seguire il nostro codice di condotta per garantire che le guide siano inclusive per chiunque, indipendentemente da età, etnia, identità di genere, esperienza, nazionalità, religione, orientamento politico, sessuale, stato socioeconomico o scelte tecnologiche. Devi evitare linguaggio potenzialmente offensivo o contenuti riferiti a questi temi.

## Formattazione

La nostra documentazione è formattata in Markdown, un linguaggio di markup molto usato e semplice. Dai un’occhiata alle sezioni qui sotto per capire quali usiamo e come.

:::tip
Per esempi e spiegazioni più dettagliate sulle funzionalità Markdown, visita [Markdown Guide](https://www.markdownguide.org/cheat-sheet/).
:::

### Intestazioni

Le intestazioni sono uno degli strumenti di formattazione più importanti per dividere le pagine in modo chiaro e logico. Il titolo principale è l’header H1, ma non dovresti mai usarlo nel testo. Usa invece il metadata `title` in cima al file guida, che lo imposta automaticamente.

Nei nostri contenuti, usa H2 per dividere la guida in sezioni principali. Poi usa H3 per suddividere le sezioni principali in sotto-sezioni. Un esempio è dividere una sezione principale in più step per facilitare la lettura. Infine c’è H4, usato più raramente, che serve a suddividere ulteriormente senza apparire nella struttura della guida.

:::info
Se usi sotto-intestazioni (es. H3 sotto H2), assicurati che ci siano almeno due intestazioni dello stesso livello nella sezione, altrimenti è un uso scorretto.
:::

Ecco un esempio rapido di uso degli header:

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

Usiamo vari formati in linea per migliorare la leggibilità e adattarci a lettori con diversi livelli tecnici. Leggi la sezione qui sotto per capire l’uso di ciascuno.

#### Testo in grassetto

Il grassetto serve a enfatizzare informazioni. Esempi:

- Cambiare contesto tra i passaggi
- Hostname, credenziali & username
- Terminologia chiave

Usa due asterischi prima e dopo il testo, es. `**ciao**` diventa **ciao**.

#### Corsivo

Il corsivo serve a introdurre nuove parole tecniche nell’articolo. Per esempio, oggi configureremo un *reverse proxy*.

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
| Comando     | Descrizione              | Uso                   |
| ----------- | ------------------------ | --------------------- |
| /help       | Invia comando help       | /help [categoria]     |
| /stop       | Ferma il server          | /stop [true/false]    |
```

#### Blocchi di codice

I blocchi di codice sono molto utili per guide con comandi, script, output terminale e altro.

Per usarli, metti ` ``` ` prima e dopo il blocco di testo. Puoi anche indicare il linguaggio dopo i primi tre backtick per evidenziare la sintassi. Esempio con JavaScript:

```js
function hello(name) {
    console.log(name)
}

var server = "ZAP-Hosting"
hello(server)
```

### Uso delle admonizioni

Puoi usare le admonizioni per evidenziare info sotto 5 etichette diverse, come spiegato qui sotto.

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
Se c’è qualcosa da cui mettere in guardia il lettore, usa questo tag.
:::

#### Pericolo

:::danger Titolo Pericolo! (Opzionale)
Usa questa admonizione per info cruciali, come bug noti o funzionalità deprecate.
:::

### Screenshot

Gli screenshot sono super utili per guidare visivamente i lettori e consigliamo di usarli quando serve.

Per la sezione tedesca, quando fai uno screenshot, ti chiediamo di aggiungere sia la versione inglese che quella tedesca per mantenere coerenza. Puoi metterli uno accanto all’altro nella guida. Gli screenshot in tedesco saranno rimossi e usati quando il team ZAP-Docs tradurrà l’articolo.

Per aggiungere uno screenshot usa questa sintassi, sostituendo `your_url` con l’URL dell’immagine:
```
![](your_url)
```

Il modo migliore è usare un sito come Imgur per caricare e usare l’immagine, oppure puoi trascinarla direttamente nell’editor su GitHub per caricarla automaticamente.

## Terminologia

Nella nostra documentazione usiamo una serie di termini chiave. Per coerenza, usiamo l’inglese americano in tutta la documentazione. Qui standardizziamo alcuni termini comuni.

### Prodotti ZAP-Hosting

Quando citi un prodotto ZAP-Hosting, assicurati di usare il nome, ortografia e maiuscole corrette. Puoi verificarlo sul [sito ZAP-Hosting](https://zap-hosting.com) nella pagina prodotto.

### Attributi definiti dall’utente

Nella maggior parte delle guide, per configurazioni come utenti, hostname, domini, IP e URL, il lettore deve usare i propri dati al posto dei placeholder.

Di default usa sempre `[your_attribute]` per distinguere elementi statici da quelli unici, dove `attribute` è il tipo di attributo. Per esempio, per un IP scrivi `[your_server_ip]` o per un URL `http://[your_server_ip]:30120`. Questo aiuta il lettore a capire cosa deve cambiare. Fornisci sempre una spiegazione o nota su quali attributi cambiare quando li menzioni la prima volta.

Usa `zaphosting` come hostname, username o nome database di default.

### Software

Quando menzioni software nelle guide, assicurati di usare la corretta ortografia e maiuscole del nome. Se il sito ufficiale non è coerente, mantieni la stessa capitalizzazione all’interno dell’articolo per coerenza.

Linka il sito ufficiale del software la prima volta che lo citi, se disponibile.