---
id: vserver-linux-lemp-stack
title: "Konfiguracja stosu LEMP na serwerze Linux - Uruchom wydajne aplikacje webowe"
description: "Dowiedz się, jak skonfigurować stos LEMP do hostowania dynamicznych stron PHP na serwerach VPS z Linuxem → Sprawdź teraz"
sidebar_label: Web LEMP stack
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

**LEMP** to popularny zestaw oprogramowania open-source, który jest instalowany razem, aby umożliwić proste hostowanie dynamicznych stron internetowych, ze szczególnym naciskiem na strony i aplikacje PHP. Akronim oznacza: **L**inux jako system operacyjny, "**E**ngine x" (nginx) jako serwer WWW, **M**ySQL jako bazę danych oraz na końcu **P**HP do przetwarzania. W tym poradniku omówimy proces konfiguracji stosu LEMP na VPS z Linuxem, z dokładnym opisem i przykładem tworzenia strony z listą zadań do wykonania.

<InlineVoucher />

## Przygotowanie

Zacznij od połączenia się z serwerem przez SSH. Jeśli nie wiesz jak to zrobić, zerknij na nasz [Poradnik: Pierwszy dostęp (SSH)](vserver-linux-ssh.md).

W tym poradniku używamy Ubuntu jako dystrybucji Linuxa. Instrukcje są takie same dla Debiana i podobne dla innych dystrybucji, choć składnia poleceń może się nieco różnić. Upewnij się, że masz zainstalowany system operacyjny i jesteś połączony z serwerem przez SSH.

Jak zawsze, przed instalacją upewnij się, że wszystkie pakiety są aktualne, wykonując poniższe polecenie:
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

## Instalacja

Instalację można łatwo podzielić na poszczególne kluczowe składniki stosu LEMP, zaczynając od serwera WWW Nginx, następnie bazy danych MySQL, a na końcu PHP. Podczas instalacji stworzymy testową stronę napisaną w PHP, która będzie korzystać z bazy MySQL. Każde żądanie webowe będzie przetwarzane i serwowane przez Nginx.

### Konfiguracja Nginx

Nginx to serwer WWW, który będzie obsługiwał przychodzące żądania i wysyłał odpowiedzi. Zainstaluj go poleceniem:
```
sudo apt install nginx
```

Po instalacji upewnij się, że odpowiednie reguły zapory sieciowej są ustawione, aby serwer WWW był dostępny z internetu. W tym przykładzie użyjemy **zapory UFW**, ponieważ Nginx ma zarejestrowaną aplikację dla niej.

Jeśli korzystasz z innej zapory, upewnij się, że port 80 (HTTP) jest dozwolony. Więcej o zaporach w Linuxie znajdziesz w naszym [Poradniku: Zarządzanie zaporą](vserver-linux-firewall.md).

Upewnij się, że zapora UFW jest włączona i że masz regułę dla SSH.
```
# Dodaj regułę dla SSH
sudo ufw allow OpenSSH

# Włącz zaporę UFW
sudo ufw enable
```

:::caution
Upewnij się, że masz regułę dla SSH, jeśli korzystasz z zapory UFW! W przeciwnym razie **stracisz** możliwość połączenia się przez SSH, jeśli zerwie się obecna sesja!
:::

Teraz dodaj regułę dla Nginx i sprawdź, czy reguły są aktywne.
```
# Dodaj regułę dla Nginx
sudo ufw allow in "Nginx Full"

# Sprawdź reguły zapory UFW
sudo ufw status
```

:::tip
Możesz zobaczyć dostępne profile, uruchamiając `ufw app list`. W przykładzie powyżej `Nginx Full` oznacza, że tworzone są reguły dla HTTP (port 80) i HTTPS (port 443).
:::

Powinieneś zobaczyć reguły `Nginx` i `Nginx (v6)` z akcją `ALLOW`, co potwierdza, że zapora jest gotowa. Powinieneś też zobaczyć inne wcześniej ustawione reguły, w tym dla SSH.

![](https://screensaver01.zap-hosting.com/index.php/s/A36rfRzL3gFGq9x/preview)

Po otwarciu zapory dla Nginx, sprawdź, czy działa poprawnie. W przeglądarce wpisz adres IP serwera: `http://[twoj_adres_ip]`

Jeśli działa, zobaczysz domyślną stronę powitalną. Jeśli nie, sprawdź status usługi poleceniem: `systemctl status nginx`

![](https://screensaver01.zap-hosting.com/index.php/s/EqFoyXMJMaHc3dc/preview)

### Konfiguracja MySQL

Teraz zainstalujesz i skonfigurujesz serwer MySQL, który będzie bazą danych do trwałego przechowywania danych w relacyjnej formie. Zainstaluj go poleceniem:
```
sudo apt install mysql-server
```

Po instalacji zaleca się uruchomienie skryptu zabezpieczającego, który zwiększy bezpieczeństwo instancji MySQL. To opcjonalne, ale bardzo polecane. Uruchom go poleceniem `sudo mysql_secure_installation`.

Przejdziesz przez interaktywną konfigurację. Najpierw zostaniesz zapytany o walidację haseł. Zalecamy wybrać `Y`, aby wymuszać silne hasła, a następnie wybrać poziom `MEDIUM` (1) lub `STRONG` (2).

![](https://screensaver01.zap-hosting.com/index.php/s/YF6N3iPaDWD4sgX/preview)

Następnie zostaniesz zapytany o usunięcie użytkownika `anonymous` i zablokowanie zdalnego logowania root. Zalecamy zaakceptować `Y` dla obu opcji ze względów bezpieczeństwa. Dzięki temu testowy użytkownik zostanie usunięty, a konto root będzie dostępne tylko lokalnie przez SSH, co zmniejsza ryzyko.

![](https://screensaver01.zap-hosting.com/index.php/s/ka6GKkojRPRycZB/preview)

Na koniec zostaniesz zapytany o usunięcie bazy testowej i przeładowanie tabel uprawnień. Również zalecamy zaakceptować `Y`, ponieważ baza testowa nie jest potrzebna, a przeładowanie tabel uprawnień jest konieczne, by zmiany zaczęły działać.

![](https://screensaver01.zap-hosting.com/index.php/s/42cYTkPaEfo3Jbq/preview)

Sprawdź, czy MySQL działa, próbując się zalogować: `sudo mysql -u root`. Jeśli się uda, zobaczysz powitalną wiadomość. Wyjdź poleceniem `quit`, gdy będziesz gotowy.

### Konfiguracja PHP

Ostatnim składnikiem stosu LEMP jest PHP, a dla Nginx wymaga to użycia zewnętrznego programu `php-fpm` (PHP fastCGI process manager). Nginx będzie przekazywał żądania do `php-fpm`, który je przetworzy.

Zainstaluj najnowszą wersję php-fpm wraz z wtyczką PHP dla MySQL, aby Nginx mógł współpracować z PHP i PHP mogło korzystać z MySQL.
```
sudo apt install php-fpm php-mysql
```

Sprawdź, czy instalacja się powiodła, sprawdzając wersję PHP. Jeśli zobaczysz wersję, PHP działa poprawnie.
```
php -v
```

:::tip Rozszerzenia PHP
W bardziej zaawansowanych zastosowaniach możesz potrzebować dodatkowych rozszerzeń PHP. Możesz zobaczyć listę dostępnych, uruchamiając `apt search php- | less`.

Użyj strzałek, aby przewijać i naciśnij `Q`, aby wyjść. Aby zainstalować rozszerzenie, użyj polecenia apt install, np.:
```
sudo apt install [php_extension] [...]
```
Możesz podać kilka rozszerzeń na raz, oddzielając je spacją.
:::

### Tworzenie testowej strony

Po zainstalowaniu wszystkich składników LEMP, stworzymy testową stronę, która pokaże, jak stos LEMP działa razem, tworząc świetne rozwiązanie dla dynamicznych stron. To całkowicie opcjonalne, ale warto zobaczyć, jak wykorzystać te narzędzia do własnych projektów.

W tym przykładzie stworzymy prostą stronę z listą zadań do wykonania w PHP, która pobierze i wyświetli wpisy z bazy MySQL. Strona będzie serwowana przez Nginx.

Użyjemy testowej domeny `zapdocs.example.com`, bo w realnym świecie prawdopodobnie użyjesz domeny. **Musisz** ustawić rekord DNS typu `A` dla domeny wskazujący na adres IP twojego serwera. Jeśli potrzebujesz pomocy, sprawdź nasz poradnik [Rekordy domen](domain-records.md).

:::note
Możesz nie używać domeny i zastąpić `[your_domain]` zwykłą nazwą. Wtedy stronę otworzysz przez adres IP. Pamiętaj jednak, że przy tworzeniu pliku serwera w Nginx powinieneś usunąć parametr `server_name`.
:::

#### Konfiguracja Nginx

Zazwyczaj pliki stron i dane przechowywane są w katalogu `/var/www`. Domyślnie Nginx ma katalog `html` z domyślną stroną. Aby mieć porządek, zwłaszcza przy wielu stronach na jednym Nginx, polecamy tworzyć osobne katalogi dla każdej strony.

Stwórz nowy folder w `/var/www/[your_domain]` dla swojej strony. W tym przykładzie będzie to `/var/www/zapdocs.example.com`.
```
sudo mkdir /var/www/[your_domain]
```

Teraz stwórz nowy plik konfiguracyjny serwera w katalogu `sites-available` dla tej domeny i folderu.
```
sudo nano /etc/nginx/sites-available/[your_domain].conf
```

Wklej poniższy szablon, zamieniając `[your_domain]` na swoją domenę.
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

:::important Wersja PHP
Pamiętaj, aby zmienić `[your_phpversion]` na aktualną wersję PHP zainstalowaną na serwerze. Sprawdź ją poleceniem `php -v`, np. `PHP 8.3.6 (cli) ...`.

W tym przykładzie wpisz `8.3`, więc linia będzie wyglądać tak: `fastcgi_pass unix:/var/run/php/php8.3-fpm.sock;`
:::

Ten plik konfiguracyjny obsługuje port 80 (HTTP) i sprawdza, czy żądanie pasuje do `server_name` (twojej domeny). Wskazuje też, że pliki strony będą w katalogu `/var/www/[your_domain]`.

Zapisz plik i wyjdź z nano, używając `CTRL + X`, potem `Y` i `ENTER`.

Aktywuj konfigurację, tworząc link symboliczny w `sites-enabled`.
```
sudo ln -s /etc/nginx/sites-available/[your_domain].conf /etc/nginx/sites-enabled/
```

:::note Brak domeny
Jeśli **nie** używasz domeny, usuń lub zakomentuj linię `server_name` (dodaj `#` na początku). Musisz też wyłączyć domyślny blok serwera poleceniem `sudo unlink /etc/nginx/sites-enabled/default`.
:::

Sprawdź składnię pliku poleceniem `sudo nginx -t`.

Na koniec zrestartuj Nginx, aby zmiany zaczęły działać:
```
sudo systemctl reload nginx
```

#### Tworzenie strony

Po skonfigurowaniu Nginx i katalogu dokumentów, czas stworzyć faktyczną stronę, która będzie serwowana. Na razie katalog jest pusty, więc nic się nie wyświetli. Stworzymy prostą stronę z listą zadań, jak wspomniano wcześniej.

##### Przygotowanie bazy danych

Zaloguj się do MySQL:
```
sudo mysql -u root
```

Stwórz nową bazę `todowebsite` i tabelę `todoitems`.
```
# Stwórz bazę danych
CREATE DATABASE todowebsite;

# Użyj nowej bazy
USE todowebsite;

# Stwórz tabelę zadań
CREATE TABLE todoitems (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    is_completed BOOLEAN DEFAULT FALSE,
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

Dodaj kilka przykładowych wpisów:
```
INSERT INTO todoitems (name, is_completed) VALUES ('Create ZAP-Docs Guide', 0);
INSERT INTO todoitems (name, is_completed) VALUES ('Buy a ZAP-Hosting Server', 1);
INSERT INTO todoitems (name, is_completed) VALUES ('Join ZAP-Hosting Discord', 0);
INSERT INTO todoitems (name, is_completed) VALUES ('Have a great day!', 0);
```

Stwórz dedykowanego użytkownika `todo` dla tej strony:
```
# Stwórz użytkownika
# Zamień [your_password] na własne hasło
CREATE USER todo@localhost IDENTIFIED BY '[your_password]';

# Nadaj uprawnienia (wklej jako jedno polecenie)
GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER
ON todowebsite.*
TO todo@localhost;

# Przeładuj uprawnienia
FLUSH PRIVILEGES;
```

Wyjdź z MySQL poleceniem `quit`.

##### Pliki strony PHP

Ostatni krok to stworzenie pliku PHP dla strony z listą zadań. Będzie to plik `index.php` w katalogu `/var/www/[your_domain]`. Otwórz nano:
```
sudo nano /var/www/[your_domain]/index.php
```

Poniżej znajdziesz prosty kod PHP, który łączy się z bazą i wyświetla listę zadań. Pierwsza część PHP nawiązuje połączenie z MySQL.

:::important
Pamiętaj, aby zmienić `[your_password]` na hasło użytkownika `todo`, które ustawiłeś wcześniej.
:::

Sekcja HTML tworzy listę zadań, wyświetlając każdy wpis.

```
<?php
// Przygotuj połączenie MySQL
$servername = "localhost";
$username = "todo";
$password = "[your_password]";
$dbname = "todowebsite";

// Utwórz połączenie
$conn = new mysqli($servername, $username, $password, $dbname);

// Sprawdź połączenie, jeśli błąd, wyświetl komunikat
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Wykonaj zapytanie SQL, pobierz wpisy i zapisz w zmiennej $result
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
      <p>For our awesome ZAP-Hosting guide: <a href="https://zap-hosting.com/guides/docs/vserver-linux-lemp-stack">https://zap-hosting.com/guides/docs/vserver-linux-lemp-stack</a></p>
      <ul>
          <?php
          // Sprawdź, czy są wyniki
          if ($result->num_rows > 0) {
              // Pętla po każdym wpisie z zapytania
              foreach ($result as $entry) {
                  echo "<li>";
                  // Wyświetl nazwę, zabezpieczając przed XSS
                  echo htmlspecialchars($entry["name"]);

                  // Wyświetl status wykonania
                  if ($entry["is_completed"]) {
                      echo " <strong>(Completed)</strong>";
                  } else {
                      echo " <strong>(Incomplete)</strong>";
                  }

                  // Wyświetl datę utworzenia
                  echo " - Creation Date: " . htmlspecialchars($entry['creation_date']);
                  echo "</li>";
              }
          } else {
              // Jeśli brak wpisów, wyświetl komunikat
              echo "<li>No to-do items found.</li>";
          }
          ?>
      </ul>
  </body>
</html>

<?php
// Zamknij połączenie z bazą
$conn->close();
?>
```

Po wklejeniu kodu do nano, zapisz plik i wyjdź (`CTRL + X`, potem `Y` i `ENTER`).

#### Testowanie strony

Gratulacje! Udało Ci się skonfigurować testową stronę z listą zadań, która korzysta ze wszystkich elementów stosu LEMP!

Teraz powinieneś móc otworzyć stronę przez domenę (na porcie 80, http), którą ustawiłeś w pliku serwera, czyli w tym przykładzie `zapdocs.example.com`. Efekt końcowy powinien wyglądać tak:

![](https://screensaver01.zap-hosting.com/index.php/s/NgK2n8xN3wZPLeP/preview)

## Podsumowanie

Gratulacje, pomyślnie zainstalowałeś i skonfigurowałeś stos LEMP! Następnym krokiem **gorąco polecamy** skonfigurowanie domeny i **certyfikatu SSL**, aby zapewnić bezpieczne przesyłanie danych do Twoich stron. Sprawdź nasz [Poradnik Certbot](dedicated-linux-certbot.md) ze szczególnym uwzględnieniem **wtyczki Nginx** i wykonaj interaktywną konfigurację, aby szybko i łatwo ustawić certyfikat dla wybranej domeny.

W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />