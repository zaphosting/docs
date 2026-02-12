---
id: vserver-linux-lamp-stack
title: "VPS: Configura stack LAMP - Linux, Apache, MySQL, PHP"
description: "Scopri come configurare un stack LAMP per ospitare siti PHP dinamici su VPS Linux in modo efficiente → Scopri di più ora"
sidebar_label: Web LAMP stack
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Lo **stack LAMP** è una scelta popolare di software open-source configurati insieme per permettere un hosting semplice di siti web dinamici, con un focus particolare su siti e app PHP. L'acronimo sta per: **L**inux come sistema operativo, **A**pache come web server, **M**ySQL come database e infine **P**HP per l'elaborazione. In questa guida vedremo come configurare uno stack LAMP su un VPS Linux, con una spiegazione dettagliata ed un esempio di creazione di un sito web to-do list.

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

L’installazione si divide facilmente in ogni componente base del LAMP, iniziando dal web server Apache, seguito dal database MySQL e infine PHP. Durante l’installazione configureremo un sito di test scritto in PHP che accederà al database MySQL. Ogni richiesta web sarà processata e servita tramite Apache.

### Configurazione di Apache

Apache è il web server che gestirà le richieste in entrata e fornirà le risposte. Installalo con questo comando:
```
sudo apt install apache2
```

Una volta installato, assicurati che le regole firewall siano configurate per permettere l’accesso al web server da internet. In questo esempio useremo il **firewall UFW** perché Apache ha un’app registrata per questo.

Se usi un firewall diverso, assicurati di aprire la porta 80 (HTTP). Puoi approfondire i firewall Linux nella nostra guida [Gestione Firewall](vserver-linux-firewall.md).

Assicurati che UFW sia attivo e che ci sia una regola per SSH.
```
# Crea una regola per permettere SSH
sudo ufw allow OpenSSH

# Attiva il firewall UFW
sudo ufw enable
```

:::caution
Assicurati di avere una regola per SSH se usi UFW! Altrimenti **non** potrai più connetterti via SSH se perdi la sessione attuale!
:::

Ora crea la regola per Apache e verifica che le regole siano attive.
```
# Crea una regola per Apache
sudo ufw allow in "Apache Full"

# Controlla lo stato delle regole UFW
sudo ufw status
```

:::tip
Puoi vedere quali profili sono disponibili con il comando `ufw app list`. Nell’esempio sopra, `Apache Full` apre sia HTTP (porta 80) che HTTPS (porta 443).
:::

Dovresti vedere le regole `Apache` e `Apache (v6)` con azione `ALLOW`, confermando che il firewall è pronto. Vedrai anche altre regole che avevi configurato, inclusa quella per SSH.

![](https://screensaver01.zap-hosting.com/index.php/s/o8NDBppnTwHdSgf/preview)

Con il firewall aperto per Apache, verifica che Apache funzioni provando ad accedere al tuo indirizzo IP da browser: `http://[tuo_indirizzo_ip]`

Se funziona, vedrai la pagina di benvenuto di default. Se no, controlla lo stato del servizio con: `systemctl status apache2`

![](https://screensaver01.zap-hosting.com/index.php/s/irmnDDNi436HH4c/preview)

### Configurazione di MySQL

Ora installa e configura un server MySQL che fungerà da database per memorizzare i dati in modo relazionale. Installa con:
```
sudo apt install mysql-server
```

Al termine, è consigliato eseguire uno script di installazione sicura per proteggere il server MySQL. È opzionale ma altamente raccomandato. Avvialo con `sudo mysql_secure_installation`.

Segui la procedura interattiva. All’inizio ti verrà chiesto della validazione password. Consigliamo di scegliere `Y` per permettere solo password sicure e poi selezionare `MEDIUM` con `1` o `STRONG` con `2`.

![](https://screensaver01.zap-hosting.com/index.php/s/YF6N3iPaDWD4sgX/preview)

Poi ti verrà chiesto di rimuovere l’utente `anonymous` e disabilitare il login remoto di root. Consigliamo di accettare con `Y` per motivi di sicurezza. Così l’utente di test viene rimosso e l’utente root può accedere solo localmente via SSH, riducendo i rischi.

![](https://screensaver01.zap-hosting.com/index.php/s/ka6GKkojRPRycZB/preview)

Infine ti chiederà di rimuovere il database `test` e ricaricare le tabelle dei privilegi. Anche qui consigliamo di accettare con `Y` perché il database test non serve e bisogna ricaricare i privilegi.

![](https://screensaver01.zap-hosting.com/index.php/s/42cYTkPaEfo3Jbq/preview)

Ora verifica che MySQL sia attivo provando a loggarti con: `sudo mysql -u root`. Se funziona, vedrai un messaggio di benvenuto. Esci con `quit` quando vuoi.

### Configurazione di PHP

L’ultimo componente LAMP è PHP, che si installa facilmente. Questo comando installa PHP con i plugin per Apache e MySQL, così Apache può lavorare con PHP e PHP può usare MySQL.
```
sudo apt install php libapache2-mod-php php-mysql
```

Controlla che l’installazione sia andata a buon fine controllando la versione. Se vedi la versione, PHP funziona correttamente.
```
php -v
```

:::tip Estensioni PHP
Per usi avanzati potresti aver bisogno di estensioni PHP extra. Puoi vedere la lista con `apt search php- | less`.

Usa le frecce per scorrere e premi `Q` per uscire. Per installare un’estensione usa:
```
sudo apt install [php_extension] [...]
```
Puoi installarne più di una separandole con uno spazio.
:::

Consigliamo di modificare l’ordine degli indici di directory per far sì che `index.php` abbia priorità su `.html`. Apri il file con:
```
sudo nano /etc/apache2/mods-enabled/dir.conf
```

Nel nano, sposta `index.php` all’inizio della lista, così:
```
DirectoryIndex index.php index.html index.cgi index.pl index.xhtml index.htm
```

Salva e chiudi nano con `CTRL + X`, poi `Y` e infine `ENTER`. Riavvia Apache per applicare con `sudo systemctl restart apache2`.

### Creazione sito di test

Ora che hai installato tutti i componenti LAMP, creiamo un sito di test per mostrare come lavorano insieme per un sito dinamico. È opzionale ma utile per capire come usare questi strumenti per i tuoi siti.

In questo esempio creeremo un piccolo sito to-do list in PHP che recupera e mostra le voci da un database MySQL. Il sito sarà servito tramite Apache.

Useremo un dominio di test `zapdocs.example.com` perché in un caso reale useresti un dominio. Devi **assolutamente** creare un record DNS di tipo `A` per il dominio che punti all’IP del server. Se ti serve aiuto, guarda la nostra guida [Record dominio](domain-records.md).

:::note
Puoi anche non usare un dominio e sostituire `[your_domain]` con un nome qualsiasi. Accederai al sito tramite IP. In questo caso, quando crei il file virtual host, rimuovi la riga `ServerName`.
:::

#### Configurazione Apache

Di solito, i file dei siti web sono sotto `/var/www`. Apache ha di default una cartella `html` con una pagina di default. Per organizzare meglio, soprattutto se ospiti più siti, consigliamo di creare una cartella per ogni sito.

Crea una nuova cartella in `/var/www/[your_domain]`. Nell’esempio sarà `/var/www/zapdocs.example.com`.
```
sudo mkdir /var/www/[your_domain]
```

Ora crea un file di configurazione virtual host in `sites-available` per questo dominio e cartella.
```
sudo nano /etc/apache2/sites-available/[your_domain].conf
```

Copia questo template nel nano, sostituendo `[your_domain]` con il tuo dominio.
```
<VirtualHost *:80>
    ServerName [your_domain]
    ServerAlias www.[your_domain]
    ServerAdmin webmaster@localhost
    DocumentRoot /var/www/[your_domain]
    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
```

Questo file gestisce le richieste sulla porta 80 (HTTP) e verifica che il dominio corrisponda a `ServerName`. Punta anche alla cartella `/var/www/[your_domain]` per servire i file.

Salva e chiudi nano con `CTRL + X`, `Y` e `ENTER`. Usa `sudo apache2ctl configtest` per controllare che non ci siano errori di sintassi.

Abilita il nuovo virtual host con:
```
sudo a2ensite [your_domain]
```

:::note Nessun dominio usato
Se **non** usi un dominio, rimuovi o commenta la riga `ServerName` con `#`. Disabilita anche il virtual host di default con `sudo a2dissite 000-default`.
:::

Riavvia Apache per applicare con:
```
sudo systemctl restart apache2
```

#### Creazione sito web

Ora che Apache è configurato, creiamo il sito vero e proprio. La cartella è vuota, quindi niente sarà servito. Creeremo un sito to-do come detto prima.

##### Preparazione database

Inizia creando un database e una tabella per le voci. Accedi a MySQL:
```
sudo mysql -u root
```

Crea un database `todowebsite` e una tabella `todoitems`:
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

Inseriamo qualche voce di esempio:
```
INSERT INTO todoitems (name, is_completed) VALUES ('Create ZAP-Docs Guide', 0);
INSERT INTO todoitems (name, is_completed) VALUES ('Buy a ZAP-Hosting Server', 1);
INSERT INTO todoitems (name, is_completed) VALUES ('Join ZAP-Hosting Discord', 0);
INSERT INTO todoitems (name, is_completed) VALUES ('Have a great day!', 0);
```

Creiamo un utente dedicato `todo` per questo sito:
```
# Crea utente dedicato
# Sostituisci [your_password] con la tua password
CREATE USER todo@localhost IDENTIFIED BY '[your_password]';

# Imposta privilegi (copia tutto insieme)
GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER
ON todowebsite.*
TO todo@localhost;

# Ricarica privilegi
FLUSH PRIVILEGES;
```

Esci da MySQL con `quit`.

##### File PHP del sito

Ultimo passo: crea il file PHP per la pagina to-do. Sarà un file `index.php` in `/var/www/[your_domain]`. Apri nano:
```
sudo nano /var/www/[your_domain]/index.php
```

Qui sotto trovi un codice semplice per una pagina to-do che mostra le voci dal database. La prima parte PHP crea la connessione MySQL.

:::important
Devi cambiare `[your_password]` con la password che hai scelto per l’utente `todo`.
:::

La parte HTML crea la pagina e una lista non ordinata che cicla i risultati.

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
      <p>Per la nostra fantastica guida ZAP-Hosting: <a href="https://zap-hosting.com/guides/docs/vserver-linux-lamp-stack">https://zap-hosting.com/guides/docs/vserver-linux-lamp-stack</a></p>
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
// Chiudi connessione database
$conn->close();
?>
```

Copia il codice in nano, salva e chiudi con `CTRL + X`, `Y` e `ENTER`.

#### Test del sito

Hai configurato con successo un sito to-do che usa tutto lo stack LAMP!

Ora puoi accedere al sito tramite il dominio (porta 80/http) che hai configurato, in questo esempio `zapdocs.example.com`. Il risultato finale dovrebbe essere così:

![](https://screensaver01.zap-hosting.com/index.php/s/NgK2n8xN3wZPLeP/preview)

## Conclusione

Congratulazioni, hai installato e configurato con successo lo stack LAMP! Il prossimo passo è **fortemente consigliato** configurare un dominio e un **certificato SSL** per trasmettere i dati in modo sicuro. Dai un’occhiata alla nostra guida [Certbot](dedicated-linux-certbot.md) con focus sul **plugin Apache** e segui la procedura interattiva per configurare facilmente un certificato per il tuo dominio.

Per domande o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂

<InlineVoucher />