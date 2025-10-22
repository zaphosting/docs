---
id: dedicated-linux-lamp-stack
title: "Serwer dedykowany: Konfiguracja stosu LAMP - Linux, Apache, MySQL, PHP"
description: "Dowiedz się, jak efektywnie skonfigurować stos LAMP do hostingu dynamicznych stron PHP na serwerach Linux → Sprawdź teraz"
sidebar_label: Stos Web LAMP
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

**LAMP** to popularny zestaw oprogramowania open-source, który jest instalowany razem, aby umożliwić prosty hosting dynamicznych stron internetowych, ze szczególnym naciskiem na strony i aplikacje PHP. Akronim oznacza: **L**inux jako system operacyjny, **A**pache jako serwer WWW, **M**ySQL jako bazę danych oraz na końcu **P**HP do przetwarzania. W tym poradniku omówimy proces konfiguracji stosu LAMP na Linuxowym serwerze dedykowanym, wraz ze szczegółowym przykładem tworzenia strony z listą zadań do wykonania.

<InlineVoucher />

## Przygotowanie

Zacznij od połączenia się z serwerem przez SSH. Jeśli nie wiesz, jak to zrobić, zerknij na nasz [Poradnik: Pierwszy dostęp (SSH)](vserver-linux-ssh.md).

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

Instalację można łatwo podzielić na poszczególne kluczowe komponenty LAMP, zaczynając od serwera WWW Apache, następnie bazy danych MySQL, a na końcu PHP. Podczas instalacji skonfigurujemy testową stronę napisaną w PHP, która będzie korzystać z bazy MySQL. Każde żądanie WWW będzie przetwarzane i serwowane przez Apache.

### Konfiguracja Apache

Apache to serwer WWW, który będzie obsługiwał przychodzące żądania i wysyłał odpowiedzi. Zainstaluj go poleceniem:
```
sudo apt install apache2
```

Po instalacji upewnij się, że odpowiednie reguły zapory sieciowej są ustawione, aby serwer WWW był dostępny z internetu. W tym przykładzie użyjemy **zapory UFW**, ponieważ Apache ma zarejestrowaną aplikację dla niej.

Jeśli korzystasz z innej zapory, upewnij się, że port 80 (HTTP) jest dozwolony. Więcej o zaporach w Linuxie znajdziesz w naszym [Poradniku: Zarządzanie zaporą](vserver-linux-firewall.md).

Upewnij się, że zapora UFW jest włączona i że masz regułę dla SSH.
```
# Dodaj regułę dla SSH
sudo ufw allow OpenSSH

# Włącz zaporę UFW
sudo ufw enable
```

:::caution
Upewnij się, że masz regułę dla SSH, jeśli korzystasz z zapory UFW! W przeciwnym razie **stracisz dostęp SSH** do serwera po utracie obecnej sesji!
:::

Teraz dodaj regułę dla Apache i sprawdź, czy reguły są aktywne.
```
# Dodaj regułę dla Apache
sudo ufw allow in "Apache Full"

# Sprawdź reguły zapory UFW
sudo ufw status
```

:::tip
Możesz zobaczyć dostępne profile aplikacji, uruchamiając `ufw app list`. W powyższym przykładzie `Apache Full` oznacza, że reguły dla HTTP (port 80) i HTTPS (port 443) zostaną utworzone.
:::

Powinieneś zobaczyć reguły `Apache` i `Apache (v6)` z akcją `ALLOW`, co potwierdza, że zapora jest gotowa. Powinieneś też zobaczyć inne wcześniej ustawione reguły, w tym dla SSH.

![](https://screensaver01.zap-hosting.com/index.php/s/o8NDBppnTwHdSgf/preview)

Po otwarciu zapory dla Apache, sprawdź, czy Apache działa poprawnie. W przeglądarce wpisz adres IP serwera: `http://[twoj_adres_ip]`

Jeśli działa, zobaczysz domyślną stronę powitalną. Jeśli nie, sprawdź status usługi poleceniem: `systemctl status apache2`

![](https://screensaver01.zap-hosting.com/index.php/s/irmnDDNi436HH4c/preview)

### Konfiguracja MySQL

Teraz zainstalujesz i skonfigurujesz serwer MySQL, który będzie bazą danych do trwałego przechowywania danych w relacyjnej formie. Zainstaluj go poleceniem:
```
sudo apt install mysql-server
```

Po instalacji zalecamy uruchomienie skryptu zabezpieczającego, który zwiększy bezpieczeństwo Twojej instancji MySQL. To opcjonalne, ale bardzo polecane. Uruchom go poleceniem `sudo mysql_secure_installation`.

Przejdziesz przez interaktywną konfigurację. Na początku zostaniesz zapytany o walidację haseł. Zalecamy wybrać `Y`, aby wymusić tylko bezpieczne hasła, a następnie wybrać poziom `MEDIUM` (1) lub `STRONG` (2).

![](https://screensaver01.zap-hosting.com/index.php/s/YF6N3iPaDWD4sgX/preview)

Następnie zostaniesz zapytany o usunięcie użytkownika `anonymous` i zablokowanie zdalnego logowania roota. Dla bezpieczeństwa zdecydowanie zalecamy potwierdzić `Y`. Dzięki temu testowy użytkownik zostanie usunięty, a konto root będzie dostępne tylko lokalnie przez SSH, co zmniejsza ryzyko.

![](https://screensaver01.zap-hosting.com/index.php/s/ka6GKkojRPRycZB/preview)

Na koniec zostaniesz zapytany o usunięcie bazy testowej i przeładowanie tabel uprawnień. Ponownie zalecamy potwierdzić `Y`, ponieważ baza testowa nie jest potrzebna, a przeładowanie tabel uprawnień jest konieczne, by zmiany zaczęły działać.

![](https://screensaver01.zap-hosting.com/index.php/s/42cYTkPaEfo3Jbq/preview)

Sprawdź, czy MySQL działa, próbując się zalogować: `sudo mysql -u root`. Jeśli zobaczysz powitalną wiadomość, wszystko działa. Wyjdź poleceniem `quit`.

### Konfiguracja PHP

Ostatnim elementem stosu LAMP jest PHP i jego instalacja jest bardzo prosta. Poniższe polecenie zainstaluje PHP wraz z modułem dla Apache i MySQL, aby Apache mógł obsługiwać PHP, a PHP korzystać z MySQL.
```
sudo apt install php libapache2-mod-php php-mysql
```

Sprawdź, czy instalacja się powiodła, wyświetlając wersję PHP. Jeśli zobaczysz wersję, PHP działa poprawnie.
```
php -v
```

:::tip Rozszerzenia PHP
W zaawansowanych zastosowaniach możesz potrzebować dodatkowych rozszerzeń PHP, które dodają funkcjonalności. Możesz zobaczyć listę dostępnych rozszerzeń poleceniem `apt search php- | less`.

Użyj strzałek, aby przewijać i `Q`, aby wyjść. Aby zainstalować rozszerzenie, użyj polecenia apt install, np.:

```
sudo apt install [php_extension] [...]
```

Możesz podać kilka rozszerzeń na raz, oddzielając je spacją, by przyspieszyć instalację.
:::

Zalecamy zmodyfikować indeks katalogu, aby pliki `index.php` miały pierwszeństwo przed domyślnymi `.html`. Otwórz plik:
```
sudo nano /etc/apache2/mods-enabled/dir.conf
```

W edytorze nano usuń `index.php` i przenieś go na początek listy, tak aby wyglądało to tak:
```
DirectoryIndex index.php index.html index.cgi index.pl index.xhtml index.htm
```

Zapisz plik i wyjdź z nano za pomocą `CTRL + X`, potem `Y` i `ENTER`. Teraz zrestartuj Apache, aby zmiany zaczęły działać:
```
sudo systemctl restart apache2
```

### Tworzenie testowej strony

Po zainstalowaniu wszystkich komponentów LAMP, stworzymy testową stronę, która pokaże, jak stos LAMP działa razem, tworząc świetne rozwiązanie dla dynamicznych stron. To opcjonalne, ale warto zobaczyć, jak wykorzystać te narzędzia do własnych projektów.

W tym przykładzie stworzymy prostą stronę listy zadań w PHP, która pobiera i wyświetla wpisy z bazy MySQL. Strona będzie serwowana przez Apache.

Użyjemy testowej domeny `zapdocs.example.com`, bo w realnym świecie prawdopodobnie będziesz korzystać z domeny. **Musisz** ustawić rekord DNS typu `A` dla domeny wskazujący na adres IP Twojego serwera. Jeśli potrzebujesz pomocy, sprawdź nasz poradnik [Rekordy domeny](domain-records.md#a-records).

:::note
Możesz też nie używać domeny i zastąpić `[your_domain]` zwykłą nazwą. Wtedy stronę otworzysz przez adres IP. Pamiętaj jednak, że przy tworzeniu pliku wirtualnego hosta później powinieneś usunąć parametr `ServerName`.
:::

#### Konfiguracja Apache

Zazwyczaj pliki stron WWW są przechowywane w katalogu `/var/www`. Domyślnie Apache ma katalog `html` z domyślną stroną. Aby mieć porządek, zwłaszcza przy wielu stronach na jednym Apache, polecamy tworzyć osobne katalogi dla każdej strony.

Stwórz nowy folder w `/var/www/[your_domain]` dla swojej strony. W tym przykładzie będzie to `/var/www/zapdocs.example.com`.
```
sudo mkdir /var/www/[your_domain]
```

Teraz utwórz nowy plik konfiguracyjny wirtualnego hosta Apache w katalogu `sites-available` dla tej domeny i folderu.
```
sudo nano /etc/apache2/sites-available/[your_domain].conf
```

Skopiuj poniższy szablon do edytora nano, zamieniając `[your_domain]` na swoją domenę.
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

Ten plik obsługuje żądania na porcie 80 (HTTP) i sprawdza, czy żądanie pasuje do `ServerName` (Twojej domeny). Wskazuje też, że pliki strony będą serwowane z katalogu `/var/www/[your_domain]`.

Zapisz plik i wyjdź z nano (`CTRL + X`, potem `Y` i `ENTER`). Zalecamy sprawdzić konfigurację poleceniem:
```
sudo apache2ctl configtest
```

Na koniec włącz nowy wirtualny host:
```
sudo a2ensite [your_domain]
```

:::note Brak domeny
Jeśli **nie** używasz domeny, usuń lub zakomentuj linię `ServerName` (dodając `#` na początku). Musisz też wyłączyć domyślny wirtualny host:
```
sudo a2dissite 000-default
```
:::

Zrestartuj Apache, aby zmiany zaczęły działać:
```
sudo systemctl restart apache2
```

#### Tworzenie strony

Po skonfigurowaniu Apache i katalogu dokumentów, czas stworzyć faktyczną stronę, która będzie serwowana. Na razie katalog jest pusty, więc nic się nie wyświetli. Stworzymy prostą stronę listy zadań, jak wspomniano wcześniej.

##### Przygotowanie bazy danych

Zaloguj się do MySQL:
```
sudo mysql -u root
```

Stwórz nową bazę `todowebsite` i tabelę `todoitems`.
```
# Utwórz bazę danych
CREATE DATABASE todowebsite;

# Użyj nowej bazy
USE todowebsite;

# Utwórz tabelę zadań
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
# Utwórz użytkownika
# Zamień [your_password] na swoje hasło
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

Ostatnim krokiem jest stworzenie pliku PHP strony listy zadań. Utwórz plik `index.php` w katalogu `/var/www/[your_domain]`.
```
sudo nano /var/www/[your_domain]/index.php
```

Poniżej znajdziesz prosty kod PHP, który możesz wkleić do edytora. Pierwsza część PHP łączy się z bazą MySQL.

:::important
Pamiętaj, aby zmienić `[your_password]` na hasło użytkownika `todo`, które ustawiłeś wcześniej.
:::

Sekcja HTML tworzy stronę z listą zadań, wyświetlając je z bazy.

```
<?php
// Przygotowanie połączenia MySQL
$servername = "localhost";
$username = "todo";
$password = "[your_password]";
$dbname = "todowebsite";

// Utworzenie połączenia
$conn = new mysqli($servername, $username, $password, $dbname);

// Sprawdzenie połączenia, jeśli błąd, wyświetl komunikat
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Zapytanie SQL zwracające wpisy z tabeli
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
      <p>For our awesome ZAP-Hosting guide: <a href="https://zap-hosting.com/guides/docs/vserver-linux-lamp-stack">https://zap-hosting.com/guides/docs/vserver-linux-lamp-stack</a></p>
      <ul>
          <?php
          // Sprawdzenie, czy są wyniki
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
// Zamknięcie połączenia z bazą
$conn->close();
?>
```

Po wklejeniu zapisz plik i wyjdź z nano (`CTRL + X`, potem `Y` i `ENTER`).

#### Testowanie strony

Gratulacje! Udało Ci się skonfigurować testową stronę listy zadań, która wykorzystuje cały stos LAMP!

Teraz powinieneś móc otworzyć stronę przez domenę (HTTP/port 80), którą ustawiłeś w pliku wirtualnego hosta, w tym przykładzie `zapdocs.example.com`. Efekt końcowy powinien wyglądać tak:

![](https://screensaver01.zap-hosting.com/index.php/s/NgK2n8xN3wZPLeP/preview)

## Podsumowanie

Gratulacje, pomyślnie zainstalowałeś i skonfigurowałeś stos LAMP! Kolejnym krokiem **gorąco polecamy** ustawienie domeny i **certyfikatu SSL**, aby zapewnić bezpieczne przesyłanie danych do Twoich stron. Sprawdź nasz [Poradnik Certbot](vserver-linux-certbot.md#webroot-plugin) ze szczególnym uwzględnieniem **wtyczki Apache** i wykonaj interaktywną konfigurację, aby szybko i łatwo dodać certyfikat dla swojej domeny.

W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />