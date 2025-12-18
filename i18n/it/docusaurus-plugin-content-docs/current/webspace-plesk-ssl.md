---
id: webspace-plesk-ssl
title: "Webspace: Crea certificato SSL"
description: "Scopri come proteggere il tuo sito web con la crittografia SSL e attivare HTTPS per una navigazione più sicura → Scopri di più ora"
sidebar_label: Crea certificato SSL
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Cripta il sito con SSL

:::info
Si presume che il dominio punti già all’IP del webspace.
:::

Quando un dominio viene creato nel webspace, all’inizio è sempre non criptato. Lo puoi vedere nel pannello Plesk:

![](https://screensaver01.zap-hosting.com/index.php/s/kkJ67Pd733pt95i/preview)

E la notifica nel browser quando apri il dominio:

![](https://screensaver01.zap-hosting.com/index.php/s/5iwXSgEb4LrY3xf/preview)
![](https://screensaver01.zap-hosting.com/index.php/s/mpmK8TAjAsgY3FW/preview)

Con un certificato SSL, il dominio può essere protetto/criptato correttamente.

<InlineVoucher />

## Creazione del certificato

Step 1️⃣: Fai doppio click su "Certificato SSL/TLS" per aprire questo menu:

![](https://screensaver01.zap-hosting.com/index.php/s/g5sr6WC4eawqzoF/preview)

Puoi richiedere gratuitamente un certificato Let's Encrypt.

Step 2️⃣: Inserisci/compila le informazioni richieste. Per richiedere il certificato, devi fornire i dati necessari.

Devi indicare un indirizzo email e selezionare per cosa deve essere valido il certificato. Di solito ogni dominio ha attiva anche la sottodomain "www", quindi viene selezionata se è stata inserita anche nel DNS del dominio.

![](https://screensaver01.zap-hosting.com/index.php/s/Mwf3CEWsYRwprS3/preview)

Il certificato viene richiesto cliccando su "Ottienilo gratis".

Step 3️⃣: Ora il certificato è stato creato, lo vedi in alto a destra. Inoltre, devi attivare il reindirizzamento automatico da HTTP a HTTPS, altrimenti la crittografia non funziona:

![](https://screensaver01.zap-hosting.com/index.php/s/YBdGQqmtNeWKdxA/preview)

Una volta fatto, il reindirizzamento è attivo. Che tu apra la pagina con http o https direttamente nel browser, verrai sempre reindirizzato su https.

Step 4️⃣: Ora puoi controllare nel browser se il certificato è riconosciuto:

Deve esserci il lucchetto:

![](https://screensaver01.zap-hosting.com/index.php/s/DkZoqg9XGgR67EK/preview)

Le info del certificato, che si aprono cliccando sul lucchetto, devono mostrare il dominio:

![](https://screensaver01.zap-hosting.com/index.php/s/p5H6RZ25HksHsow/preview)

Il sito è ora protetto/criptato correttamente.

## Certificati per sottodomini

Teoricamente puoi seguire gli stessi passaggi anche per un sottodominio. Però c’è un modo più semplice per criptare tutti i sottodomini insieme, sia quelli esistenti che quelli nuovi. Puoi usare un "certificato wildcard". Serve un record TXT speciale nel DNS del dominio. Una volta impostato, può emettere un certificato SSL per tutti i sottodomini.

Step 1️⃣: Apri di nuovo il menu Certificato SSL/TLS.

![](https://screensaver01.zap-hosting.com/index.php/s/X4kFeMomqmz3nGp/preview)

Poi clicca su "Rinnova certificato" in alto a sinistra.  
Si aprirà la finestra di richiesta Let's Encrypt:

![](https://screensaver01.zap-hosting.com/index.php/s/eCcFtaJHxW3XWgF/preview)

Ora seleziona "Proteggi il dominio wildcard":

![](https://screensaver01.zap-hosting.com/index.php/s/5STxWaKf3JWGfZe/preview)

I sottodomini "www" e "webmail" vengono aggiunti automaticamente.  
Poi clicca di nuovo su "Ottienilo gratis".

Step 2️⃣: Ora appare un riquadro blu con info importanti:

![](https://screensaver01.zap-hosting.com/index.php/s/JHag4cd85Lq6gwx/preview)

Ti viene dato un nome dominio e un valore. Questo deve essere sempre presente come record TXT nel DNS del dominio, così Let's Encrypt può verificare che il dominio è autentico.

Un record DNS dovrebbe apparire così:

![](https://screensaver01.zap-hosting.com/index.php/s/qPCeWj5dJRFfYFB/preview)

:::info
Un record DNS può impiegare fino a 24 ore per essere visibile ovunque nel mondo.
:::

Per controllare se il record TXT è già attivo, puoi usare il "TXT Lookup SuperTool" di mxtoolbox: https://mxtoolbox.com/SuperTool.aspx:

![](https://screensaver01.zap-hosting.com/index.php/s/CPSSWeQRpTDsagY/preview)

Se il record inserito è già visibile, puoi confermare nel riquadro blu di Plesk cliccando su "Ricarica". Ora verifica se il record DNS è presente, e se sì, dopo qualche secondo vedrai "protetto" per "Certificato SSL/TLS" aka "Certificato Wildcard":

![](https://screensaver01.zap-hosting.com/index.php/s/AwWiJboz3k6iea8/preview)

Se crei un sottodominio ora, sarà già protetto:

![](https://screensaver01.zap-hosting.com/index.php/s/XLHzsgkeLmwJ55m/preview)

Ora tutto il traffico verso il sito è criptato, fatto.

<InlineVoucher />