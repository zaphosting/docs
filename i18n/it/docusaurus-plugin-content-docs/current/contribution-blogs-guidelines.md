---
id: contribution-blogs-guidelines
title: Linee guida per il blog
description: "Scopri come creare post per il blog di alta qualità e coerenti che coinvolgano i lettori e migliorino le tue abilità di scrittura → Scopri di più ora"
sidebar_label: Linee guida
---

![Blogs Banner](https://screensaver01.zap-hosting.com/index.php/s/ysxLZ26K3dSRLJQ/preview)

Per garantire che tutti i post del Blog di ZAP-Hosting mantengano qualità e stile coerenti, abbiamo creato una serie di linee guida da seguire quando crei contenuti per il nostro Programma di Contributo Blog. Devi seguire attentamente le nostre linee guida per assicurarti che i tuoi suggerimenti e le bozze successive vengano elaborati rapidamente. Ancora più importante, questo garantirà ai nostri lettori un'esperienza migliore e di alta qualità e coerente durante la lettura dei nostri blog.

Le nostre linee guida per i contributi al blog si dividono in alcune sezioni principali, che sono:

- Struttura
- Stile
- Formattazione
- Terminologia

## Struttura

I nostri post del blog nel programma di contributo dovrebbero seguire una struttura abbastanza coerente, creando interesse nel lettore e fornendo informazioni e novità. Il Team di Contributo ZAP lavorerà con te per assicurarsi che la tua struttura sia adatta quando crei una proposta di blog.

- **Titolo della pagina** (H1)
- **Introduzione** (H2) 
- **Preparazione** (H2)
- **Argomento principale** (H2)
- Opzionale: **Sotto-argomento 1** (H3)
- Opzionale: **Sotto-argomento 2** (H3)
- ...
- Opzionale: **Altro argomento** (H2)
- **Conclusione** (H2)

:::info Uso dei sottotitoli (H3 & H4)
Ti consigliamo di usare i titoli H3 per creare sotto-sezioni all’interno delle sezioni principali H2, così da organizzare meglio blocchi di contenuto più grandi. Un esempio lo trovi nella sezione **Argomento principale** sopra.

Se usi i sottotitoli, di solito ha senso averne almeno due o più all’interno della sezione principale, altrimenti non ha molto senso avere un solo sottotitolo sotto un titolo principale.
:::

:::info
Tieni presente che quanto sopra è un riferimento indicativo. Il corpo principale del tuo post potrebbe avere titoli diversi a seconda di cosa è più adatto al contenuto, ma tutti i post devono avere coerentemente un titolo, un’introduzione e una conclusione che incorniciano il contenuto principale.
:::

### Titoli

Il titolo del tuo post deve essere breve, chiaro e accattivante per catturare l’attenzione del lettore. Deve dire esattamente di cosa parla il post, ad esempio se è una news o consigli e trucchi. Un esempio di titolo efficace potrebbe essere: **Top 10 FiveM Police Scripts**.

### Introduzione

Le introduzioni devono essere abbastanza brevi e dirette, di solito 1-2 frasi. Nel contenuto devi descrivere brevemente l’argomento e soprattutto spiegare cosa il post presenterà al lettore, informandolo sull’obiettivo finale.

Un esempio di introduzione ideale per un post su SteamCMD potrebbe essere:

- **1ª frase**: SteamCMD è uno strumento essenziale necessario per installare server dedicati per tantissimi giochi come Palworld, Enshrouded e altri.
- **2ª frase**: In questo post esploreremo il processo di configurazione iniziale per installare SteamCMD sul tuo server Linux. Useremo Ubuntu negli esempi, ma il procedimento è simile anche per altre distribuzioni.

Come vedi, l’esempio riassume brevemente gli argomenti trattati e presenta l’obiettivo finale per il lettore.

### Preparazione

La sezione preparazione serve a chiarire eventuali prerequisiti che il lettore deve soddisfare prima di seguire il post. Può trattarsi di software o hardware necessari, istruzioni per preparare software come firewall o semplicemente guidare l’utente a connettersi al server via SSH o RDP.

Ti consigliamo di dare un’occhiata al nostro sito [ZAP-Docs](https://zap-hosting.com/guides) per cercare guide che coprano o siano correlate ai passaggi di preparazione che vuoi includere. Se esiste una guida su un argomento, ad esempio [Accesso SSH iniziale](vserver-linux-ssh.md), dovresti linkarla e invitare il lettore a seguirla prima di procedere.

Prerquisiti comuni includono:

- Software richiesto (es. Git, Node.js, Python, Docker)
- Tutorial per acquisire conoscenze base (es. un’altra pagina ZAP-Docs)
- Account utente come API
- Impostazioni richieste (es. DNS/SSL)

Un esempio per un post su Reverse Proxy potrebbe essere:
```
Per configurare un reverse proxy ti serve un server Linux dove ospitare il proxy e devi poterti connettere. Usa la nostra guida [Accesso SSH iniziale](vserver-linux-ssh.md) se ti serve aiuto. Ti serve anche un dominio di tua proprietà. Per ogni sottodominio che vuoi usare, crea un record DNS `A` che punti all’indirizzo IP del tuo server Linux.
```

### Argomento principale

Ora è il momento di scrivere la parte principale del post. Ti consigliamo di suddividere il contenuto in più sezioni per mantenere il lettore coinvolto. Non ci sono regole rigide su come dividerle, ma in generale cerca di spezzare grandi blocchi in più titoli. Il Team di Contributo ZAP ti aiuterà in questo durante il processo.

Se il post è un tutorial o una guida passo-passo, ha senso includere il numero del passo e una breve descrizione nel titolo, ad esempio **Passo 1 - Creare la cartella**. Devi spiegare brevemente cosa fa il lettore in quel passo per dare un obiettivo chiaro nella prima frase. Tra i passi, crea brevi introduzioni e frasi di transizione per far capire cosa è stato fatto e cosa succederà dopo. Queste transizioni sono importanti per il contesto. Evita ripetizioni e usa termini diversi per non ripetere sempre le stesse cose.

### Conclusione

Infine, l’ultima sezione è la conclusione. Qui chiudi la guida in 1-3 frasi spiegando cosa il lettore ha realizzato, imparato o per fornire una chiusura a una guida informativa.

Ha senso anche fornire riferimenti per approfondimenti o altri post e guide da seguire per espandere le conoscenze. Linka guide o post ZAP-Docs esistenti, soprattutto se sono un naturale seguito della tua guida.

## Stile

Lo stile di scrittura per la documentazione ZAP-Hosting punta a produrre post di alta qualità, pratici e facilmente accessibili per supportare tanti argomenti e lettori di ogni livello di esperienza.

### Tecnico & corretto

I nostri post puntano a essere tecnicamente precisi e aggiornati con le ultime info del settore. Ogni post deve fornire info ben scritte e di qualità su nuovi argomenti e tecnologie, oltre a tutorial che aiutino il lettore a imparare cose nuove. Se il post è un tutorial passo-passo, ogni passo deve avere uno scopo chiaro e spiegazioni, con opzioni o flag aggiuntivi quando serve.

Gli autori devono sempre rileggere e testare i post per assicurarsi che siano tecnicamente corretti e funzionino come previsto prima di inviare la bozza. Il Team di Contributo ZAP leggerà e testerà il post per verificarne la coerenza e correttezza, o discuterà miglioramenti se ci sono errori.

:::tip
Consigliamo sempre di passare il contenuto in un tool di controllo ortografico e grammaticale prima di inviare la bozza. Un sito utile è: https://languagetool.org/
:::

### Pratico & utile

Quando un lettore finisce di leggere un post, dovrebbe aver imparato, costruito o configurato qualcosa dall’inizio alla fine. I nostri post supportano lettori di ogni esperienza, quindi devi esplorare a fondo l’argomento per far diventare il lettore esperto o fargli raggiungere un risultato. Come autore, devi coprire tutto il necessario, inclusi prerequisiti. Invia i lettori a siti esterni solo se non esiste documentazione ZAP o se serve per approfondimenti non essenziali ma utili. I link esterni non devono rimandare a documentazione di competitor.

### Amichevole, formale & completo

Ci aspettiamo che la documentazione sia moderna e amichevole per essere accessibile a tutti, ma allo stesso tempo formale. Nel post, il tono deve essere adatto a tutti i lettori, indipendentemente dall’esperienza o dalla lingua.

Essendo post che puntano a educare e portare a un risultato, usiamo la seconda persona (es. "Devi...") invece della prima (es. "Penso...") per mantenere il focus sul lettore.

Infine, tutti gli autori devono seguire il nostro codice di condotta per garantire che i post siano accettabili per chiunque, indipendentemente da età, etnia, identità di genere, esperienza, nazionalità, religione, orientamento politico, sessuale, status socioeconomico o scelte tecnologiche. Evita linguaggio offensivo o contenuti riferiti a questi temi.

## Formattazione

Il nostro blog usa il linguaggio Markdown, molto diffuso. Usa le sezioni qui sotto per capire quali elementi usiamo e come usarli nei tuoi post.

Puoi usare qualsiasi strumento per scrivere, ma ti consigliamo **caldamente** di usare **[StackEdit](https://stackedit.io/app#)** per mantenere tutte le funzionalità Markdown. Puoi poi esportare direttamente su Google Drive o altre app di condivisione e inviarci il link.

:::tip
Per esempi e spiegazioni dettagliate su Markdown, visita [Markdown Guide](https://www.markdownguide.org/cheat-sheet/).
:::

### Intestazioni

Le intestazioni sono fondamentali per separare i post in modo chiaro e logico. Il titolo principale è l’intestazione H1.

Nei nostri blog, usa H2 per dividere il post in sezioni principali. Poi usa H3 per suddividere le sezioni principali in sotto-sezioni, ad esempio per dividere una sezione in più passi. C’è anche H4, usato più raramente, per ulteriori sotto-sezioni.

:::info
Se usi sottotitoli (es. H3 sotto H2), assicurati che ci siano almeno due titoli dello stesso livello nella sezione, altrimenti è un uso scorretto.
:::

Ecco un esempio rapido di intestazioni:

```
## Installazione
H2 - Sezione principale

### Download dei file di gioco
H3 - Sotto-sezione di H2

#### Via SteamCMD
H4 - Sotto-sezione di H3

#### Manuale via GitHub
H4 - Sotto-sezione di H3

### Preparazione della configurazione
H3 - Sotto-sezione di H2

### Avvio del server
H3 - Sotto-sezione di H2
```

### Markdown in linea

Usiamo vari formati in linea per migliorare la leggibilità e adattarci a lettori con diversi livelli tecnici. Leggi qui sotto per capire come usarli.

#### Grassetto

Il grassetto serve a enfatizzare info importanti, ad esempio:

- Cambiare contesto tra i passi
- Hostname, credenziali & username
- Terminologia chiave

Usa due asterischi prima e dopo il testo, es. `**ciao**` diventa **ciao**.

#### Corsivo

Il corsivo serve a introdurre nuovi termini tecnici nell’articolo. Es: oggi configureremo un *reverse proxy*.

Usa un asterisco prima e dopo il testo, es. `*ZAP-Hosting - More POWER!*` diventa *ZAP-Hosting - More Power!*.

#### Codice in linea

Il codice in linea serve per mostrare info tecniche come URL, ad esempio:

- Nomi e percorsi file (es. `C:/User/[YourName]/AppData....test.png`)
- URL (es. `https://zap-hosting.com`)
- Porte (es. `:30120`)
- Comandi (es. `ipconfig`)
- Query SQL (es. `SELECT * FROM servers`)
- Tasti o combinazioni (es. `ENTER` o `CTRL + C`)

#### Tabelle

Le tabelle sono utili per mostrare info ripetitive, come comandi, descrizioni e usi in un gioco. Ecco un esempio:

```
| Comando     | Descrizione              | Uso                   |
| ----------- | ------------------------ | --------------------- |
| /help       | Invia comando di aiuto   | /help [categoria]     |
| /stop       | Ferma il server          | /stop [true/false]    |
```

#### Blocchi di codice

I blocchi di codice sono utili per comandi, script, output terminale e altro.

Per usarli, metti ` ``` ` prima e dopo il blocco. Puoi indicare la lingua subito dopo i primi tre backtick per evidenziare la sintassi. Esempio con JavaScript:

```js
function hello(name) {
    console.log(name)
}

var server = "ZAP-Hosting"
hello(server)
```

### Screenshot

Gli screenshot sono super utili per guidare visivamente i lettori e li consigliamo sempre.

Usa questa sintassi per aggiungere uno screenshot, sostituendo `your_url` con l’URL dell’immagine:
```
![](your_url)
```

Il consiglio è usare un hosting immagini online come [Imgur](https://imgur.com/) per caricare e usare l’immagine nel markdown.

## Terminologia

Nei nostri post ci sono tanti termini chiave usati spesso. Ti chiediamo di usare l’inglese americano per mantenere coerenza. Qui standardizziamo alcuni termini comuni.

### Prodotti ZAP-Hosting

Quando citi un prodotto ZAP-Hosting, assicurati di usare nome, spelling e maiuscole corrette. Controlla sul [sito ZAP-Hosting](https://zap-hosting.com) come viene scritto il prodotto nella pagina ufficiale.

### Attributi definiti dall’utente

In alcuni post, per configurazioni come utenti, hostname, domini, IP e URL, il lettore deve usare i propri dati al posto dei placeholder.

Usa sempre `[your_attribute]` per distinguere elementi statici da quelli unici, dove `[attribute]` è il tipo di attributo. Es: per un IP scrivi `[your_server_ip]` o per un URL `http://[your_server_ip]:30120`. Così il lettore capisce cosa deve cambiare. Spiega o annota quali attributi cambiare la prima volta che li menzioni.

Usa `zaphosting` come hostname, username o nome database di default.

### Software

Quando citi software, usa spelling e maiuscole corrette. Se il sito ufficiale non è coerente, mantieni la stessa capitalizzazione nell’articolo per coerenza.

Linka il sito ufficiale del software la prima volta che lo menzioni, se disponibile.