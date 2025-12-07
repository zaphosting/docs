---
id: contribution-guides
title: Processo per le Guide
description: "Scopri come contribuire con guide originali e di valore su ZAP-Docs e aiutare gli utenti con contenuti chiari e pratici → Scopri di più ora"
sidebar_label: Processo per le Guide
---

![Banner Guide](https://screensaver01.zap-hosting.com/index.php/s/4aaqq3zctZFW4JJ/preview)

Scopri qui il processo per contribuire ai nostri ZAP-Docs. Il processo è scritto in ordine cronologico, quindi ti consigliamo di partire da questa pagina.

## Passo 1: Suggerire Contenuti

La prima fase consiste nel creare un issue di suggerimento tramite il nostro repository GitHub. Devi fornirci dettagli sulle modifiche e miglioramenti che intendi proporre.

Assicurati che la tua idea non sia un duplicato di guide o suggerimenti esistenti e che credi davvero possa essere utile sia ai principianti che agli utenti più esperti. Puoi vedere i suggerimenti già presenti andando alla [Pagina Issues](https://github.com/zaphosting/docs/issues?q=is%3Aissue).

:::tip
Ti consigliamo di leggere le nostre [Linee Guida](contribution-guides-guidelines.md) per capire lo stile di contenuto e documentazione che seguiamo.
:::

### Che argomenti cerchiamo?

Cerchiamo guide pratiche e di alta qualità che coprano prodotti, servizi e software open-source disponibili tramite ZAP-Hosting o correlati ai nostri servizi. Se ti serve ispirazione, dai un’occhiata alle nostre pagine su ZAP-Docs per capire lo stile e il tipo di contenuti che pubblichiamo.

Come detto nell’introduzione, tutto il contenuto deve essere originale per rispettare le leggi sul copyright. È vietato l’uso non autorizzato di AI/generative tools o altre proprietà intellettuali. Le nostre guide vogliono fornire info top passo dopo passo, così il lettore capisce cosa fa e come farlo, con l’obiettivo di educare e risolvere.

#### Lista Guide Richieste

Qui sotto trovi una lista utile di suggerimenti per nuove guide che potresti voler scrivere. Alcuni argomenti potrebbero anche avere un bonus extra come ricompensa. Puoi accedere alla [lista manualmente qui](https://docs.google.com/document/d/13R321FP6Yo3TMQZ07vMARQFlX6n_Or6RIrLpU7IsMfs/edit?usp=sharing).

<iframe width="800" height="750" src="https://docs.google.com/document/d/e/2PACX-1vRACoNJMjk3rcWyo6LDt8WCvtqB17JpdjsPW3YHpLaZJgfPxGlt4pDEnD1ezOwGW1eljWZYPSyfgrb3/pub?embedded=true"></iframe>
<br></br>

:::note
Ricorda, sono solo idee utili, **non devi** per forza scrivere su questi argomenti, i tuoi suggerimenti possono essere creativi come detto prima.
:::

### Come inviare un suggerimento

Sei sicuro che il tuo suggerimento è adatto alla nostra documentazione? Allora vai al nostro [repository ZAP Docs su GitHub](https://github.com/zaphosting/docs) e apri un issue usando il template **Contribution Suggestion**. Segui il template e compila tutti i dettagli necessari. Ti verrà chiesto anche di confermare l’accettazione dei nostri Termini & Condizioni per il Programma di Contributo, che trovi qui: [Contribution Terms](contribution-terms.md).

:::caution
Assicurati di inserire correttamente il tuo ZAP ID per ricevere la ricompensa sull’account giusto!
:::

Dopo aver inviato il suggerimento, puntiamo a risponderti entro 3-5 giorni direttamente nel tuo issue su GitHub.

:::tip
**Problemi?** Unisciti al nostro [Discord ZAP-Hosting](https://zap-hosting.com/discord), noi e la community saremo felici di aiutarti. Oppure apri un [ticket sul sito](https://zap-hosting.com/en/customer/support/) e scrivi "Contribution Program - Guides" per essere indirizzato al team contributi.
:::

Nella risposta ti daremo feedback o dettagli da modificare. Se ci sono problemi, ti contatteremo direttamente nel tuo issue.

## Passo 2: Scrivere la Guida

Quando aggiungi o modifichi contenuti, segui sempre le nostre [Linee Guida](contribution-guides-guidelines.md) per mantenere coerenza e qualità. Qui approfondiamo best practice e workflow ottimale per creare o modificare contenuti. Se sei nuovo su GitHub, usa i tutorial qui sotto per capire come editare o creare contenuti per ZAP-Docs.

:::note
Assicurati di aver creato un suggerimento sul nostro [GitHub Repository](https://github.com/zaphosting/docs) e che sia stato approvato da un membro del Team Contributi ZAP prima di lavorare su una guida o modifica. Senza approvazione non possiamo garantire la ricompensa.
:::

**Prerequisiti:**
- [Account GitHub](https://github.com/)

Il primo passo è creare un fork del repository ZAP-Docs su GitHub. Vai al [repository ZAP Docs](https://github.com/zaphosting/docs) e clicca su **Fork** in alto.

![](https://screensaver01.zap-hosting.com/index.php/s/3AGoSTE7dGTsdz7/preview)

Dai un nome al repository basato sul suggerimento accettato e spunta `Copy the master branch only`. Poi clicca crea e aspetta qualche secondo.

Con il tuo fork pronto, puoi procedere. Ci sono due modi principali per creare contenuti: direttamente via sito GitHub o clonando il repo localmente. Il primo è più user-friendly, il secondo ti permette di testare Docusaurus in locale e vedere le modifiche live.

:::tip
Per chi è alle prime armi o poco esperto con Git, consigliamo **Metodo 1**: scrivere direttamente via GitHub, è più semplice, veloce e tutto fatto dal browser.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Modi per Creare Guide

<Tabs>
<TabItem value="direct" label="Metodo 1: Direttamente via GitHub" default>

Il modo più semplice e consigliato è usare il sito GitHub. Qui ti spieghiamo come creare una guida nuova o modificare una esistente.

Vai al tuo fork creato prima. Dentro troverai tutte le guide nella cartella **docs**.

![](https://screensaver01.zap-hosting.com/index.php/s/dqptZFrSTrBBHAJ/preview)

I file seguono una convenzione semplice: la prima parola indica il tipo di guida (di solito gioco, prodotto o sezione), le parole successive la sezione specifica. Ti consigliamo di guardare il nostro sito live [ZAP-Docs](https://zap-hosting.com/guides) per capire dove inserire la guida. Per esempio, `dedicated-windows.md` è per server dedicati Windows.

Ora devi aprire un file esistente o crearne uno nuovo, a seconda se aggiorni o crei una guida. Usa la tab giusta qui sotto per le istruzioni, perché creare una guida nuova richiede qualche passaggio in più.

<Tabs>
<TabItem value="direct_new" label="Crea un file guida nuovo" default>

Esempio: vogliamo creare una guida nuova per il gioco Rust, sui comandi disponibili. Controllando il sito o repo, vediamo che esiste già una sezione **Rust** sotto game servers. Seguendo la convenzione, il file si chiamerà `rust-commands.md`.

Per creare il file, vai al [repository GitHub](https://github.com/zaphosting/docs), apri la cartella **docs** e a destra clicca **Add File** > **Create new file**.

![](https://screensaver01.zap-hosting.com/index.php/s/xgL3QF9HzJnwARA/preview)

In alto imposta il nome del file, es. `rust-commands.md`.

:::info
Ricordati di aggiungere l’estensione `.md` perché tutte le guide sono in Markdown.
:::

Ora devi aggiungere i metadati all’inizio del file. Il modo più semplice è aprire un file simile come `rust-plugins.md`, copiare i metadati in cima e modificarli per la tua guida. L’elemento più importante è `id` che **deve** corrispondere al nome del file senza `.md`.

Esempio:
```
---
id: rust-commands
title: "Rust: Comandi Admin"
description: "Info sui comandi Admin per Rust da ZAP-Hosting"
sidebar_label: Comandi Admin
services:
  - gameserver
---
```

:::note
Controlliamo i metadati durante la revisione, quindi se hai problemi non preoccuparti e procedi.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/2CJFHoc5LeD4YSn/preview)

</TabItem>

<TabItem value="direct_existing" label="Modifica un file guida esistente" default>

In questo caso apri il file che vuoi modificare. Per esempio `dedicated-linux-satisfactory.md` nella cartella `/docs`. Vedrai un’anteprima grezza in Markdown.

In alto a destra clicca l’icona della matita per modificare direttamente.

![](https://screensaver01.zap-hosting.com/index.php/s/SZTsAikipzCZcg3/preview)

</TabItem>
</Tabs>

#### Continua: Scrivere il contenuto

Ora che hai il file aperto, scrivi il contenuto concordato nel suggerimento. Ti consigliamo di salvare o fare commit spesso per non perdere il lavoro.

:::tip Mantieni il lavoro al sicuro
Mentre scrivi, fai commit o copia spesso perché l’editor GitHub non ha autosave: se chiudi la scheda o succede qualcosa, perdi tutto.

Consigliamo di usare lo strumento Markdown **[StackEdit](https://stackedit.io/app#)** per scrivere offline, salvare localmente e sincronizzare. Quando finisci, copia e incolla su GitHub e fai commit.
:::

Puoi usare il pulsante **Preview** in alto per vedere l’anteprima e tornare a editare con **Edit**.

![](https://screensaver01.zap-hosting.com/index.php/s/4YcQo6q3iAAGYkZ/preview)

:::note Elementi Docusaurus
Alcuni elementi specifici Docusaurus come admonizioni (`:::note`, `:::tip` ecc.) o tabs potrebbero non vedersi bene su GitHub perché non sono Markdown tradizionale, ma si vedranno correttamente in locale e in produzione.
:::

:::info Segui le nostre Linee Guida
Consulta le [Linee Guida](contribution-guides-guidelines.md) per tutto su Markdown, struttura, terminologia e altro.
:::

Quando hai finito, clicca **Commit changes...** e inserisci un messaggio utile che spiega cosa hai fatto, con descrizione estesa se serve. Poi conferma il commit. Questo aggiorna il tuo fork. Ora puoi andare alla sezione **Invio Contenuti** per creare una Pull Request e inviare il contenuto al repository principale ZAP-Docs.

</TabItem>

<TabItem value="local" label="Metodo 2: Localmente via IDE (git clone)">

Se preferisci lavorare localmente con un IDE o editor come Visual Studio Code, qui ti spieghiamo come creare o modificare guide localmente.

**Prerequisiti:**
- IDE a scelta, qui useremo [Visual Studio Code](https://code.visualstudio.com/)
- [GitHub Desktop](https://desktop.github.com/) o altro con funzionalità Git

Prima cosa: clona il tuo fork. Il modo più semplice è usare GitHub Desktop: clicca **Add** > **Clone repository** e scegli il tuo fork. Puoi anche farlo direttamente dall’IDE se supporta Git.

![](https://screensaver01.zap-hosting.com/index.php/s/g8AwEcGa6mBrQ75/preview)

Apri la cartella del repo in Visual Studio Code. Nella tab Explorer a sinistra vedrai tutte le cartelle.

I file seguono la stessa convenzione vista prima. Controlla il sito live [ZAP-Docs](https://zap-hosting.com/guides) per capire dove mettere la guida. Per esempio `dedicated-windows.md` è per server dedicati Windows.

Ora apri un file esistente o creane uno nuovo, a seconda se aggiorni o crei una guida. Usa la tab giusta qui sotto per le istruzioni, perché creare una guida nuova richiede qualche passaggio in più.

<Tabs>
<TabItem value="local_new" label="Crea un file guida nuovo" default>

Esempio: vogliamo creare una guida nuova per Rust sui comandi. La sezione Rust esiste già sotto game servers. Il file si chiamerà `rust-commands.md`.

Apri la cartella `/docs` nel tuo IDE e crea un nuovo file con il nome giusto.

:::info
Ricordati di aggiungere l’estensione `.md`.
:::

Ora aggiungi i metadati in cima al file. Copia da un file simile come `rust-plugins.md` e modifica i valori. L’`id` deve corrispondere al nome del file senza `.md`.

Esempio:
```
---
id: rust-commands
title: "Rust: Comandi Admin"
description: "Info sui comandi Admin per Rust da ZAP-Hosting"
sidebar_label: Comandi Admin
services:
  - gameserver
---
```

:::note
Controlliamo i metadati durante la revisione, quindi se hai problemi non preoccuparti e procedi.
:::

Ultimo passo: per far comparire la pagina nel sidebar di Docusaurus, aggiungila nel file `sidebar.js` nella sezione giusta. Cerca la sezione **Rust** con `CTRL+F` e aggiungi una nuova riga con il nome del file, es. `rust-commands`. Se la sezione non esiste, crea una nuova seguendo il formato degli altri.

![](https://screensaver01.zap-hosting.com/index.php/s/TwKjWmCofG5Rs8f/preview)

:::note
Ricordati di mettere una virgola (`,`) sulla riga prima della tua nuova riga per mantenere la sintassi corretta.
:::

</TabItem>

<TabItem value="local_existing" label="Modifica un file guida esistente" default>

Modificare un file esistente è semplice, non devi impostare tutta la struttura.

Apri il file guida che vuoi modificare nella cartella `/docs` e procedi con le modifiche concordate e approvate.

</TabItem>
</Tabs>

#### Continua: Scrivere il contenuto

Ora che il file è pronto, scrivi il contenuto concordato. Salva o fai commit spesso per non perdere il lavoro.

Puoi usare `CTRL+SHIFT+V` o l’icona preview in alto a destra per vedere l’anteprima live in split view.

:::note Elementi Docusaurus
Alcuni elementi Docusaurus come admonizioni (`:::note`, `:::tip` ecc.) o tabs potrebbero non vedersi bene su GitHub perché non sono Markdown tradizionale, ma si vedranno correttamente in locale e in produzione.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/cXgQEswNsbpGMsR/preview)

:::info Segui le nostre Linee Guida
Consulta le [Linee Guida](contribution-guides-guidelines.md) per tutto su Markdown, struttura, terminologia e altro.
:::

Quando hai finito, fai un commit e push sul tuo fork usando GitHub Desktop o altro client Git, con titolo e descrizione appropriati.

![](https://screensaver01.zap-hosting.com/index.php/s/tFdrLknnXn62sZc/preview)

Ora puoi andare alla sezione **Invio Contenuti** per creare una Pull Request e inviare il contenuto al repository principale ZAP-Docs.

:::tip
Ti consigliamo anche di leggere la sezione opzionale **Test locale**, così puoi abbinare test e sviluppo locale per un workflow ottimale. Non è obbligatorio però.
:::

</TabItem>
</Tabs>

### Opzionale: Test locale della build

Prima di creare la Pull Request finale, è buona pratica testare localmente per assicurarti che tutto funzioni con le modifiche fatte. Consigliamo di testare localmente per velocizzare l’approvazione, ma non è obbligatorio.

:::tip
Non è obbligatorio, perché facciamo una build automatica quando invii la Pull Request. Però può aiutarti a fare debug e test live.
:::

:::note
Se hai seguito il tutorial per lavorare localmente, puoi saltare il primo passo di clonare il repo perché lo hai già.
:::

**Prerequisiti:**
- [Node.js v16.14 o superiore](https://nodejs.org/en)
- [GitHub Desktop](https://desktop.github.com/) o [Git](https://git-scm.com/)

Prima clona il tuo fork. Il modo più semplice è GitHub Desktop: clicca **Add** > **Clone repository** e scegli il tuo fork.

Puoi anche usare Git da terminale. Crea una cartella, es. `Docs Test`, apri Git Bash lì e prendi l’URL del tuo fork da GitHub. Poi esegui:
```
git clone [your_url]
```

Ora hai il repo clonato localmente. Passa alla cartella, apri un terminale (cmd o git bash) e scarica i moduli con:
```
npm install
```

Ci vorrà un po’, ma alla fine avrai la cartella `node_modules`. Se ricevi errori, probabilmente non hai installato Node.js.

Ultimo passo: avvia il sito docs localmente con:
```
npm start
```

Si aprirà automaticamente una versione locale del sito nel browser sulla porta `3000`. È identica alla versione di produzione e puoi testare tutto!

Quando sei soddisfatto, vai alla sezione successiva per creare la Pull Request e inviare il contenuto.

## Passo 3: Inviare il Contenuto

Quando hai finito e pensi che il contenuto rispetti le linee guida e sia top, crea una Pull Request. Vai al tuo fork del repository ZAP Docs, clicca su **Contribute** sotto i pulsanti principali e apri una pull request.

![](https://screensaver01.zap-hosting.com/index.php/s/GLjSno3Ltz3zFpZ/preview)

Si aprirà una pagina dove vedi le modifiche fatte. Di default c’è una checklist per assicurarti di aver fatto tutto bene, puoi cancellarla se vuoi.

Metti un titolo chiaro che spiega cosa hai fatto. Nella descrizione, menziona o linka il tuo suggerimento usando `#000` con l’ID del suggerimento. Se non lo trovi nel menu, vai al repo principale [ZAP Docs GitHub](https://github.com/zaphosting/docs), cerca negli issues il tuo suggerimento e prendi l’ID.

Quando titolo, descrizione e modifiche sono a posto, crea la pull request per inviarla al nostro repository.

![](https://screensaver01.zap-hosting.com/index.php/s/mrGm5f2WMttYzFT/preview)

Il sistema controllerà che le modifiche passino vari test di sintassi e qualità. Se tutto va bene, il team ZAP-Docs la revisionerà entro pochi giorni.

Durante la revisione potremmo chiederti modifiche o fare noi stessi aggiustamenti. Quando tutto è ok, approveremo la PR e sarà pronta per la pubblicazione.

## Passo 4: Pubblicazione e Pagamento Ricompensa

Quando accettiamo la tua Pull Request dopo eventuali modifiche richieste, ti risponderemo direttamente sulla PR con info importanti. Ti diremo quando la guida sarà pubblicata e come riceverai la ricompensa per il tuo contributo.

:::info
La ricompensa dipende da vari fattori, soprattutto qualità e quantità del contenuto scritto, e altri criteri valutati dal Team Contributi ZAP. Leggi di più nei nostri [Rewards](contribution-rewards.md).
:::

Complimenti per aver contribuito alle guide ZAP-Hosting! Apprezziamo tantissimo il tuo supporto! 💚