---
id: vserver-linux-lemp-stack
title: "Configura uno stack LEMP su un server Linux - Deploy di applicazioni web ad alte prestazioni"
description: "Scopri come configurare uno stack LEMP per ospitare siti web PHP dinamici su server VPS Linux → Scopri di più ora"
sidebar_label: Web LEMP stack
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Lo **stack LEMP** è una scelta popolare di software open-source configurati insieme per permettere un hosting semplice di siti web dinamici, con un focus particolare su siti e app PHP. L'acronimo sta per: **L**inux come sistema operativo, "**E**ngine x" (nginx) come web server, **M**ySQL come database e infine **P**HP per l'elaborazione. In questa guida vedremo come configurare uno stack LEMP su un VPS Linux, con una spiegazione dettagliata ed un esempio di creazione di un sito web to-do list.

<InlineVoucher />

## Preparazione

Inizia collegandoti al tuo server via SSH. Se non sai come fare, dai un’occhiata alla nostra guida [Accesso iniziale (SSH)](vserver-linux-ssh.md).

In questa guida useremo Ubuntu come distribuzione Linux. Le istruzioni sono le stesse per Debian e simili per altre distro, anche se la sintassi dei comandi potrebbe variare leggermente. Assicurati di avere un OS installato e di essere connesso al server via SSH.

Come sempre, prima di procedere con l’installazione, assicurati che tutti i pacchetti siano aggiornati con questo comando:
```
// Ubuntu & Debian
sudo apt update

// CentOS
sudo yum update

// OpenSUSE
sudo zypper up

// Fedora
sudo dnf upgrade --refresh
```

## Installazione

L’installazione si divide facilmente in ogni dipendenza principale dello stack LEMP, iniziando dal web server Nginx, seguito dal database MySQL e infine PHP. Durante l’installazione configureremo un sito di test scritto in PHP che accederà al database MySQL. Ogni richiesta web sarà poi processata e servita tramite Nginx.

### Configurazione di Nginx

Nginx è il web server che gestirà le richieste in arrivo e fornirà le risposte. Installalo con questo comando:
```
sudo apt install nginx
```

Una volta installato, assicurati che le regole del firewall siano configurate per rendere il web server accessibile da internet. In questo esempio useremo il **firewall UFW** dato che Nginx ha un’app registrata per questo.

Se usi un firewall diverso, assicurati di aprire la porta 80 (HTTP). Puoi approfondire i firewall Linux nella nostra guida [Gestione Firewall](vserver-linux-firewall.md).

Assicurati che UFW sia attivo e che ci sia una regola per SSH.
```
# Crea una regola per permettere SSH
sudo ufw allow OpenSSH

# Attiva il firewall UFW
sudo ufw enable
```

:::caution
Assicurati di avere una regola per SSH se usi UFW! Altrimenti, se perdi la connessione, **non potrai più accedere via SSH al server!**
:::

Ora crea la regola per permettere Nginx e verifica che le regole siano attive.
```
# Crea una regola per permettere Nginx
sudo ufw allow in "Nginx Full"

# Controlla lo stato delle regole UFW
sudo ufw status
```

:::tip
Puoi vedere i profili disponibili con il comando `ufw app list`. Nell’esempio sopra, `Nginx Full` apre sia HTTP (porta 80) che HTTPS (porta 443).
:::

Dovresti vedere le regole `Nginx` e `Nginx (v6)` con azione `ALLOW`, confermando che il firewall è pronto. Vedrai anche altre regole eventualmente configurate, inclusa quella per SSH.

![](https://screensaver01.zap-hosting.com/index.php/s/A36rfRzL3gFGq9x/preview)

Con il firewall aperto per Nginx, verifica che Nginx funzioni provando ad accedere al tuo IP nel browser: `http://[tuo_indirizzo_ip]`

Se funziona, vedrai la pagina di benvenuto di default. Se no, controlla lo stato del servizio con: `systemctl status nginx`

![](https://screensaver01.zap-hosting.com/index.php/s/EqFoyXMJMaHc3dc/preview)

### Configurazione di MySQL

Ora installa e configura un server MySQL che fungerà da database per memorizzare dati in modo relazionale. Installa con:
```
sudo apt install mysql-server
```

Al termine, è consigliato eseguire uno script di installazione sicura per proteggere il server MySQL. È opzionale ma altamente raccomandato. Avvialo con `sudo mysql_secure_installation`.

Segui la procedura interattiva. All’inizio ti chiederà della validazione password. Consigliamo di rispondere `Y` per permettere solo password sicure e poi scegliere `MEDIUM` con `1` o `STRONG` con `2`.

![](https://screensaver01.zap-hosting.com/index.php/s/YF6N3iPaDWD4sgX/preview)

Ti verrà chiesto di rimuovere l’utente `anonymous` e di disabilitare il login remoto di root. Consigliamo di accettare con `Y` per motivi di sicurezza. Così l’utente di test viene rimosso e l’utente root può accedere solo localmente via SSH, riducendo i rischi.

![](https://screensaver01.zap-hosting.com/index.php/s/ka6GKkojRPRycZB/preview)

Infine ti chiederà di rimuovere il database `test` e ricaricare le tabelle dei privilegi. Anche qui consigliamo di accettare con `Y` perché il database test non serve e bisogna ricaricare i privilegi.

![](https://screensaver01.zap-hosting.com/index.php/s/42cYTkPaEfo3Jbq/preview)

Ora verifica che MySQL sia attivo provando a loggarti con: `sudo mysql -u root`. Se funziona, vedrai un messaggio di benvenuto. Esci con `quit` quando vuoi.

### Configurazione di PHP

L’ultima dipendenza LEMP è PHP e per Nginx serve usare un programma esterno chiamato `php-fpm` (PHP fastCGI process manager). Nginx sarà configurato per passare le richieste a `php-fpm` prima di rispondere.

Installa l’ultima versione di php-fpm e il plugin PHP per MySQL con:
```
sudo apt install php-fpm php-mysql
```

Controlla che l’installazione sia andata a buon fine verificando la versione:
```
php -v
```

:::tip Estensioni PHP
Per usi avanzati potresti aver bisogno di estensioni PHP extra. Vedi la lista con `apt search php- | less`.

Usa le frecce per scorrere e premi `Q` per uscire. Per installare un’estensione usa:
```
sudo apt install [php_extension] [...]
```
Puoi installarne più di una separandole con uno spazio.
:::

### Creazione del sito di test

Ora che hai installato tutte le dipendenze LEMP, creiamo un sito di test per mostrare come lo stack funziona insieme per creare un sito dinamico. È opzionale ma utile per capire come usare questi strumenti per i tuoi siti.

In questo esempio creeremo un piccolo sito to-do list in PHP che recupera e mostra le voci da un database MySQL. Il sito sarà servito tramite Nginx.

Useremo un dominio di test `zapdocs.example.com` perché in un caso reale useresti un dominio. Devi **assolutamente** configurare un record DNS di tipo `A` per il dominio che punti all’IP del server. Se ti serve aiuto, consulta la nostra guida [Record Dominio](domain-records.md).

:::note
Puoi anche non usare un dominio e sostituire `[your_domain]` con un nome qualsiasi. In quel caso accederai via IP e dovrai rimuovere la riga `server_name` nel file di configurazione del server block.
:::

#### Configurazione di Nginx

Di solito, i file dei siti web sono sotto `/var/www`. Di default Nginx ha una cartella `html` con una pagina di default. Per tenere tutto organizzato, soprattutto se ospiti più siti, consigliamo di creare una cartella separata per ogni sito.

Crea una nuova cartella per il tuo dominio in `/var/www/[your_domain]`. Nell’esempio: `/var/www/zapdocs.example.com`.
```
sudo mkdir /var/www/[your_domain]
```

Ora crea un nuovo file di configurazione server block in `sites-available` per questo dominio.
```
sudo nano /etc/nginx/sites-available/[your_domain].conf
```

Copia questo template nel nano, sostituendo `[your_domain]` con il tuo dominio.
```
server {
    listen 80;
    server_name [your_domain] www.[your_domain];
    root /var/www/[your_domain];

    index index.php index.html index.htm;

    location / {
        try_files $uri $uri/ =404;
    }

    location ~ \.php$ {
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/var/run/php/php[your_phpversion]-fpm.sock;
     }

    location ~ /\.ht {
        deny all;
    }
}
```

:::important Versione PHP
Cambia `[your_phpversion]` con la versione PHP installata. Controlla con `php -v`, ad esempio: `PHP 8.3.6 (cli) ...`.

Se hai PHP 8.3, la riga diventa: `fastcgi_pass unix:/var/run/php/php8.3-fpm.sock;`
:::

Questo file gestisce le richieste sulla porta 80 (HTTP) e verifica che il dominio corrisponda a `server_name`. Punta anche alla cartella `/var/www/[your_domain]` per servire i file.

Salva e chiudi nano con `CTRL + X`, poi `Y` e `ENTER`.

Attiva la configurazione creando un link simbolico in `sites-enabled`.
```
sudo ln -s /etc/nginx/sites-available/[your_domain].conf /etc/nginx/sites-enabled/
```

:::note Senza dominio
Se non usi un dominio, rimuovi o commenta la riga `server_name` con `#`. Disabilita anche il server block di default con:
```
sudo unlink /etc/nginx/sites-enabled/default
```
:::

Controlla la sintassi con:
```
sudo nginx -t
```

Infine riavvia Nginx per applicare la configurazione:
```
sudo systemctl reload nginx
```

#### Creazione del sito web

Ora che Nginx è configurato, creiamo il sito vero e proprio. La cartella è vuota, quindi niente sarà servito finché non aggiungi i file. Creeremo un sito to-do come detto.

##### Preparazione del database

Inizia creando un database e una tabella per le voci della lista. Accedi a MySQL:
```
sudo mysql -u root
```

Crea il database `todowebsite` e la tabella `todoitems`.
```
# Crea database
CREATE DATABASE todowebsite;

# Usa il database
USE todowebsite;

# Crea tabella items
CREATE TABLE todoitems (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    is_completed BOOLEAN DEFAULT FALSE,
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

Inserisci qualche voce di esempio.
```
INSERT INTO todoitems (name, is_completed) VALUES ('Create ZAP-Docs Guide', 0);
INSERT INTO todoitems (name, is_completed) VALUES ('Buy a ZAP-Hosting Server', 1);
INSERT INTO todoitems (name, is_completed) VALUES ('Join ZAP-Hosting Discord', 0);
INSERT INTO todoitems (name, is_completed) VALUES ('Have a great day!', 0);
```

Crea un utente dedicato `todo` per il sito.
```
# Crea utente dedicato
# Sostituisci [your_password] con la tua password
CREATE USER todo@localhost IDENTIFIED BY '[your_password]';

# Imposta i privilegi (copia tutto insieme)
GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER
ON todowebsite.*
TO todo@localhost;

# Ricarica privilegi
FLUSH PRIVILEGES;
```

Esci da MySQL con `quit`.

##### File PHP del sito

Ora creiamo il file PHP per la pagina to-do. Apri nano per creare `index.php` in `/var/www/[your_domain]`.
```
sudo nano /var/www/[your_domain]/index.php
```

Ecco un codice semplice per mostrare la lista to-do dal database. La prima parte PHP crea la connessione MySQL.

:::important
Cambia `[your_password]` con la password che hai scelto per l’utente `todo`.
:::

La parte HTML crea la pagina e mostra la lista.

```
<?php
// Prepara connessione MySQL
$servername = "localhost";
$username = "todo";
$password = "[your_password]";
$dbname = "todowebsite";

// Crea connessione
$conn = new mysqli($servername, $username, $password, $dbname);

// Controlla connessione, se fallisce mostra errore
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Esegui query per prendere le voci ordinate per data
$sql = "SELECT id, name, is_completed, creation_date FROM todoitems ORDER BY creation_date DESC";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="en">
  <head>
      <meta charset="UTF--8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>To-Do List</title>
  </head>
  <body>
      <h1>Awesome To-Do List :D</h1>
      <p>Per la nostra fantastica guida ZAP-Hosting: <a href="https://zap-hosting.com/guides/docs/vserver-linux-lemp-stack">https://zap-hosting.com/guides/docs/vserver-linux-lemp-stack</a></p>
      <ul>
          <?php
          // Controlla se ci sono risultati
          if ($result->num_rows > 0) {
              // Cicla ogni voce
              foreach ($result as $entry) {
                  echo "<li>";
                  // Mostra il nome con htmlspecialchars per evitare XSS
                  echo htmlspecialchars($entry["name"]);

                  // Mostra stato completamento
                  if ($entry["is_completed"]) {
                      echo " <strong>(Completed)</strong>";
                  } else {
                      echo " <strong>(Incomplete)</strong>";
                  }

                  // Mostra data creazione
                  echo " - Creation Date: " . htmlspecialchars($entry['creation_date']);
                  echo "</li>";
              }
          } else {
              // Se nessuna voce, mostra messaggio
              echo "<li>No to-do items found.</li>";
          }
          ?>
      </ul>
  </body>
</html>

<?php
// Chiudi connessione DB
$conn->close();
?>
```

Salva e chiudi nano con `CTRL + X`, poi `Y` e `ENTER`.

#### Test del sito

Hai configurato con successo un sito to-do che usa tutte le parti dello stack LEMP!

Ora puoi accedere al sito tramite il dominio (http/porta 80) che hai configurato, in questo esempio `zapdocs.example.com`. Il risultato finale dovrebbe essere così:

![](https://screensaver01.zap-hosting.com/index.php/s/NgK2n8xN3wZPLeP/preview)

## Conclusione

Congratulazioni, hai installato e configurato con successo lo stack LEMP! Il prossimo passo è **altamente consigliato**: configura un dominio e un **certificato SSL** per trasmettere i dati in modo sicuro. Dai un’occhiata alla nostra guida [Certbot](dedicated-linux-certbot.md) con focus sul **plugin Nginx** e segui la procedura interattiva per ottenere facilmente un certificato per il tuo dominio.

Per qualsiasi domanda o supporto, il nostro team è sempre disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />