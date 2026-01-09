---
id: dedicated-linux-security-tips
title: "Serwer dedykowany: Porady dotyczące bezpieczeństwa Linux"
description: "Dowiedz się, jak zwiększyć bezpieczeństwo swojego serwera Linux dzięki niezbędnym wskazówkom, które zapobiegną nieautoryzowanemu dostępowi i ochronią Twoje usługi → Sprawdź teraz"
sidebar_label: Porady dotyczące bezpieczeństwa
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Ten poradnik zawiera kilka wskazówek i porad, jak uczynić Twój serwer Linux bardziej bezpiecznym. Zwłaszcza że serwery muszą być dostępne z zewnątrz, podstawowa ochrona przed niechcianym dostępem jest zdecydowanie zalecana i nie powinna być pomijana.

:::info
Pamiętaj, że te instrukcje nie są wyczerpujące, a bardziej szczegółowe informacje znajdziesz w innych sekcjach dokumentacji ZAP. (np. [2FA (SSH)](vserver-linux-ssh2fa.md))
:::

:::tip
Najprostszy sposób na zabezpieczenie serwera jest zawsze taki sam, niezależnie od serwera: używaj bezpiecznych haseł, regularnie aktualizuj swoje usługi i ogólnie zwracaj uwagę, które usługi instalujesz oraz jakich poradników używasz.
:::

## Zabezpieczanie SSH

SSH (Secure Shell) to usługa, która pozwala na zdalny dostęp do konsoli serwera w celu wykonywania poleceń. Tutaj zobaczysz, jak skonfigurować SSH na swoim serwerze: [Początkowy dostęp (SSH)](vserver-linux-ssh.md)

Domyślnie do SSH używane jest logowanie na hasło. Ma to jednak dużą wadę – uwierzytelnianie można stosunkowo łatwo obejść atakiem brute force, zwłaszcza jeśli używasz zbyt prostego hasła do logowania SSH. Jeśli więc zdecydujesz się na rozwiązanie z hasłem, używaj **bezpiecznego** hasła.

Aby jeszcze lepiej chronić serwer przed niechcianym dostępem SSH, powinieneś włączyć uwierzytelnianie wyłącznie za pomocą kluczy SSH i wyłączyć logowanie na hasło. Sprawdź poradnik [Klucz SSH](vserver-linux-sshkey.md), który wyjaśnia, jak wygenerować i dodać klucze SSH.

## Konfiguracja portów usług

| Usługa | Port |
|--------|------|
| SSH    | 22   |
| FTP    | 21   |
| Mail   | 25   |
| DNS    | 53   |
| HTTP   | 80   |
| HTTPS  | 443  |

Usługi takie jak SSH czy FTP domyślnie korzystają z tych samych portów (niektóre z nich wymienione są w tabeli powyżej). Jeśli zewnętrzny atakujący chce przeprowadzić brute force na usłudze SSH Twojego serwera, najpierw musi znać port, na którym działa SSH. Jeśli nie zmienisz tych portów, to porty 22 i 21 są zwykle celem do wykonywania poleceń bezpośrednio na serwerze lub dostępu do plików przez FTP.

Aby temu zapobiec, zalecamy ustawienie portów standardowych usług na niestandardowe. W kolejnej części poradnika dowiesz się, jak to zrobić:

:::danger
Wybrany port musi mieścić się w zakresie od 1024 do 65536 i nie powinien być już używany przez inną usługę!
:::
Możesz użyć `cat /etc/services`, aby wyświetlić standardowe porty i uniknąć wyboru portu już zajętego.

### Port SSH

Aby zmienić port SSH, musisz zmodyfikować plik konfiguracyjny. Domyślnie znajduje się on w `/etc/ssh/sshd_config`, ale jeśli tam go nie ma, możesz go znaleźć poleceniem:
```
find / -name "sshd_config" 2>/dev/null
```

Teraz otwórz plik za pomocą nano (jako root lub z *sudo*).
```
sudo nano /etc/ssh/sshd_config
```

Dodaj swój wybrany port po `Port`. Jeśli `Port` jest zakomentowany (np. `#Port 22`), usuń "#" i zamień 22 na swój port. Zapisz plik (w Nano Ctrl + o) i zamknij (Ctrl + x).

![Port sshd](https://screensaver01.zap-hosting.com/index.php/s/F4Z4SDjLW4y2iDp/preview)

Teraz musisz zrestartować usługę SSH, aby zmiany zaczęły działać.
```
# Na Ubuntu/Debian/CentOS np.
sudo systemctl restart sshd
```

### Port FTP

Jeśli masz zainstalowaną usługę FTP, np. **proFTPd**, port również można zmienić, edytując plik konfiguracyjny. Procedura jest podobna jak dla SSH.

Znajdź plik konfiguracyjny `proftpd.conf`
```
find / -name "proftpd.conf" 2>/dev/null
```

Plik zwykle znajduje się w `/etc/proftpd.conf` (CentOS) lub `/etc/proftpd/proftpd.conf` (Ubuntu, Debian).
Otwórz plik w nano, usuń "#" przed `port` i wpisz swój port. Pamiętaj o powyższych wskazówkach, by nie wybrać nieprawidłowego portu.

:::tip
W nano użyj Ctrl + W, aby wyszukać.
:::

```
nano /etc/proftpd/proftpd.conf
```
![Port proftpd](https://screensaver01.zap-hosting.com/index.php/s/qw3a88EwfDCMKXS/preview)

## Użycie zapory sieciowej (firewall)

Zasada zewnętrznej dostępności serwera jest zawsze taka sama: port musi być otwarty, aby serwer był dostępny z zewnątrz. W przypadku SSH jest to **domyślnie** port 22/TCP. (patrz wyżej, jak zmienić domyślny port)

Problem w tym, że ten port jest teraz dostępny dla każdego, bez względu na osobę, lokalizację i intencje. To poważna luka bezpieczeństwa, bo złośliwi aktorzy mogą zalewać serwer próbami logowania, by odgadnąć hasło (atak brute force, jeśli logowanie na hasło jest włączone) lub próbować przeciążyć sieć serwera (np. atak DDoS).

Aby ograniczyć te zagrożenia, możesz zastosować reguły zapory sieciowej, które ograniczą dostęp do otwartych portów.

Masz do wyboru dwie metody:
- **IPTables**: to oryginalna zapora Linuxa, oferuje wiele opcji, ale jest trochę trudniejsza w obsłudze.
- **UFW**: to prostszy interfejs do IPTables, mniej skomplikowany, ale trochę bardziej ograniczony.

Wybór należy do Ciebie. W zależności od potrzeb możesz potrzebować elastyczności IPTables, ale czasem UFW wystarczy (np. do prostego otwierania/zamykania portów, co i tak jest lepsze niż nic!).

### IPTables

W tej sekcji użyjesz IPTables, aby stworzyć reguły ograniczające liczbę prób połączeń. Wyjaśnienia do poleceń znajdziesz pod blokiem kodu.

Pamiętaj, że reguła dotyczy tylko **portu 22** (wartość po `--dport`), a dla innych usług trzeba by ją dostosować.

:::note
Poniższe polecenia mogą nie działać na każdej dystrybucji Linuxa, ale na większości popularnych działają bez problemu.
:::

Zaloguj się na swój serwer Linux. Jeśli potrzebujesz pomocy, skorzystaj z naszego poradnika [Początkowy dostęp (SSH)](vserver-linux-ssh.md). Następnie wykonaj poniższe polecenia w podanej kolejności.

```
iptables -A INPUT -p tcp --syn --dport 22 -m connlimit --connlimit-above 2 --connlimit-mask 32 -j DROP
iptables -A INPUT -p tcp --dport 22 -m state --state NEW -m recent --set
iptables -A INPUT -p tcp --dport 22 -m state --state NEW -m recent --update --seconds 1 --hitcount 2 -j DROP
```

1.  Pierwsza reguła odrzuca pakiety, jeśli jest więcej niż 2 połączenia w stanie `TIME_WAIT` na port 22 z jednego adresu IP.
2.  Druga reguła dodaje adres IP nowego połączenia do listy `recent`.
3.  Trzecia reguła odrzuca nowe połączenia z adresów IP, które próbowały nawiązać więcej niż 2 połączenia w ciągu ostatniej sekundy.

### UFW

Jak wyżej, UFW to prostszy interfejs do IPTables. Najpierw trzeba zainstalować UFW, bo nie jest domyślnie dostępny we wszystkich dystrybucjach. Polecenia wykonuj jako root lub z *sudo*.

Zaloguj się na serwer (pomoc w [Początkowy dostęp (SSH)](vserver-linux-ssh.md)). Instrukcje testowaliśmy na Debianie i Ubuntu, ale powinny działać na innych dystrybucjach.

Najpierw zaktualizuj repozytoria i pakiety:
```
sudo apt update && sudo apt upgrade -y
```

Zainstaluj UFW:
```
sudo apt install ufw -y
```

Sprawdź, czy instalacja się powiodła:
```
sudo ufw status
> Firewall not loaded
```

Aby nie zablokować sobie dostępu do serwera, najpierw włącz usługę ssh, zanim aktywujesz zaporę.

:::caution
Jeśli zmieniłeś port SSH, wpisz tutaj nowy port zamiast 22.
:::

Włącz usługę ssh:
```
sudo ufw allow 22/tcp
sudo ufw enable
sudo ufw status
```

Poprawny wynik powinien wyglądać mniej więcej tak:
```
Status: active
  
To Action From
-- ------ ----
22/tcp ALLOW Anywhere
22/tcp (v6) ALLOW Anywhere (v6)
```

Teraz ogranicz liczbę połączeń do 6 na minutę:
```
ufw limit 22/tcp
```

:::note
UFW pozwala ograniczyć liczbę połączeń tylko do 6 na minutę. Limiter UFW jest prosty i może nie pasować do wszystkich sytuacji. Do bardziej szczegółowej i elastycznej konfiguracji polecamy IPTables.
:::

:::tip
Zapora (IPTables lub UFW) może tylko "bezmyślnie" liczyć próby połączeń i je blokować. Fail2Ban pozwala analizować logi pod kątem anomalii. W następnej sekcji dowiesz się, jak zainstalować i uruchomić Fail2Ban.
:::

## Dodatkowe zabezpieczenia z Fail2Ban

Fail2Ban to usługa, która blokuje adresy IP, które próbują łączyć się z serwerem z prawdopodobnie złośliwymi intencjami. Monitoruje logi pod kątem anomalii i w ten sposób skutecznie zabezpiecza system w prosty sposób.

Po instalacji Fail2Ban ma gotowe konfiguracje dla popularnych usług, m.in.:
- apache
- lighttpd
- sshd
- qmail
- postfix
- Courier Mail Server
Dodatkowe usługi można dodać, używając wyrażeń regularnych (RegEx) i wskazując odpowiedni plik logów.

Przykład wpisu w `/var/log/auth.log`. Ten plik zawiera wszystkie próby logowania SSH, zarówno udane, jak i nieudane.
![/var/log/auth.log](https://screensaver01.zap-hosting.com/index.php/s/XzpxrWZRkpFJseo/preview)

Widzisz wpis:
```
Dec 2 12:59:19 vps-zap515723-2 sshd[364126]: Failed password for root from 92.117.xxx.xxx port 52504 ssh2
```
Fail2Ban monitoruje ten plik i wykrywa nieudane próby logowania. Ponieważ log zawiera adres IP atakującego, Fail2Ban może po kilku nieudanych próbach zablokować ten adres.

### Instalacja Fail2Ban

Zaloguj się na serwer (pomoc w [Początkowy dostęp (SSH)](vserver-linux-ssh.md)). Polecenia wykonuj jako root lub z *sudo*.

```
sudo apt update && sudo apt upgrade -y
sudo apt install fail2ban
```

Po instalacji sprawdź status Fail2Ban przez `systemctl`: (wyjście Ctrl+C)
```
systemctl status fail2ban.service
* fail2ban.service - Fail2Ban Service
     Loaded: loaded (/lib/systemd/system/fail2ban.service; enabled; vendor pres>
     Active: active (running) since Sat 2023-12-02 13:10:33 UTC; 24s ago
       Docs: man:fail2ban(1)
    Process: 23988 ExecStartPre=/bin/mkdir -p /run/fail2ban (code=exited, statu>
   Main PID: 23989 (fail2ban-server)
        CPU: 409ms
     CGroup: /system.slice/fail2ban.service
             `-23989 /usr/bin/python3 /usr/bin/fail2ban-server -xf start

Dec 02 13:10:33 vps-zap515723-1 systemd[1]: Starting Fail2Ban Service...
Dec 02 13:10:33 vps-zap515723-1 systemd[1]: Started Fail2Ban Service.
Dec 02 13:10:34 vps-zap515723-1 fail2ban-server[23989]: Server ready
```

### Konfiguracja Fail2Ban

Fail2Ban jest zainstalowany, ale jeszcze nie aktywny ani skonfigurowany. W katalogu `/etc/fail2ban` znajdziesz pliki:
```
action.d fail2ban.d jail.conf paths-arch.conf paths-debian.conf
fail2ban.conf filter.d jail.d paths-common.conf paths-opensuse.conf
```
Aby aktywować "jail", stwórz plik `jail.local`. Skopiuj do niego zawartość `jail.conf` i otwórz:
```
sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
sudo nano /etc/fail2ban/jail.local
```

W pliku `jail.local` możesz teraz ustawić wszystkie opcje, w tym usługi do monitorowania.
Skup się na sekcji `[Default]` – to ustawienia domyślne.

Znajdź i zmodyfikuj ten fragment tak, np.:

| Atrybut      | Wyjaśnienie                                                               | Wartość     |
|--------------|---------------------------------------------------------------------------|-------------|
| ignoreip     | Adresy IP, które nie będą blokowane                                       | 127.0.0.1/8 |
| ignorecommand| Nieistotne                                                               |             |
| bantime      | Czas blokady adresu IP                                                   | 1h          |
| findtime     | Okres, w którym liczone są nieudane próby logowania                      | 10m         |
| maxretry     | Liczba nieudanych prób, po której następuje blokada                      | 5           |

```
# można definiować za pomocą spacji (lub przecinka).
#ignoreip = 127.0.0.1/8 ::1

# ignorecommand = /path/to/command <ip>
ignorecommand =

# "bantime" to czas w sekundach, na jaki host jest zablokowany.
bantime  = 1h

# Host jest blokowany, jeśli wygenerował "maxretry" błędów w ciągu "findtime"
# sekund.
findtime  = 10m

# "maxretry" to liczba błędów przed zablokowaniem hosta.
maxretry = 5
```

Ustawienia domyślne masz gotowe. Aby monitorować usługę SSH, przewiń dalej do sekcji `[sshd]`. Jeśli zmieniłeś port, wpisz go pod `port`.

Sekcja `[sshd]` powinna wyglądać tak:
```
[sshd]

enabled = true
port = 22
filter = sshd
logpath = /var/log/auth.log
maxretry = 4
```
:::tip
Jak widzisz, można ustawić indywidualne opcje dla każdej usługi (tu `maxretry` jest niższe niż domyślne). Jeśli nie zmienisz, użyte zostaną ustawienia domyślne.
:::

Teraz wystarczy zrestartować Fail2Ban, aby zaczął działać.
```
sudo systemctl restart fail2ban.service
```

### Sprawdzenie działania Fail2Ban

Jeśli masz dostęp do VPN lub drugiego serwera, możesz spróbować zablokować się samemu, by sprawdzić, czy Fail2Ban działa. VPN lub hotspot z telefonu dadzą Ci inny adres IP, co pozwoli na test.

:::danger
Nie testuj tego na swojej normalnej sieci, bo możesz zablokować własny adres IP i **stracisz dostęp**.
:::

Spróbuj połączyć się przez SSH (z innego IP!) i wpisuj błędne hasło. Efekt powinien wyglądać tak:
```
root@185.223.29.xxx's password:
Permission denied, please try again.
root@185.223.29.xxx's password:
Permission denied, please try again.
root@185.223.29.xxx's password:
root@185.223.29.xxx: Permission denied (publickey,password).
root@vps-zap515723-2:/var/log# ssh root@185.223.29.179
root@185.223.29.xxx's password:
Permission denied, please try again.
root@185.223.29.xxx's password:
Permission denied, please try again.
root@185.223.29.xxx's password:
^C
root@vps-zap515723-2:/var/log# ssh root@185.223.29.xxx
ssh: connect to host 185.223.29.xxx port 22: Connection refused
```

Jak widzisz, połączenie jest odrzucane (`Connection refused` zamiast `Permission denied`).

Sprawdź status Fail2Ban. Zobaczysz, że adres IP jest zablokowany.
```
fail2ban-client status sshd
Status for the jail: sshd
|- Filter
|  |- Currently failed: 4
|  |- Total failed:     8
|  `- File list:        /var/log/auth.log
`- Actions
   |- Currently banned: 1
   |- Total banned:     1
   `- Banned IP list:   xxx
```

Jeśli chcesz odblokować IP, użyj: `fail2ban-client set sshd unbanip {twój IP}`.

:::info
Jeśli masz dużo blokad IP, warto wydłużyć czas blokady po każdej kolejnej próbie, by ograniczyć liczbę prób logowania.
:::

```
[sshd]

enabled = true
port    = 22
filter  = sshd
logpath = /var/log/auth.log
maxretry = 4

bantime = 1h
# Czas blokady rośnie z każdą kolejną blokadą tego IP
bantime.increment = true
# Współczynnik skalowania 24 godziny (1h,24h,48h,3d,4d....)
bantime.factor = 24
# Maksymalny czas blokady = 5 tygodni
bantime.maxtime = 5w
```

## Zabezpieczanie serwerów WWW za pomocą Cloudflare

Wiele osób korzysta z Cloudflare jako menedżera DNS domeny. Cloudflare ma jedną z największych sieci na świecie, co przekłada się na krótszy czas ładowania stron, niższy ping i lepsze doświadczenie użytkownika. Dodatkowo chroni Twoje strony przed atakami DoS/DDoS, w tym przed zalewaniem i nowymi typami ataków, które pojawiają się codziennie.

W tym poradniku nauczysz się, jak chronić swój serwer WWW przed atakami.

Zakładamy, że Twoja domena jest już zarządzana przez Cloudflare. Jeśli nie, możesz skorzystać z [ich poradnika](https://developers.cloudflare.com/fundamentals/get-started/setup/add-site/), aby przenieść domenę. Przejdź do zakładki DNS Records w panelu Cloudflare i upewnij się, że rekord do Twojego serwera WWW ma pomarańczową chmurkę i status "Proxied".

![](https://screensaver01.zap-hosting.com/index.php/s/wptKPBTLwmKxx8F/preview)

Teraz cały ruch przez Twoją domenę przechodzi przez Cloudflare, a następnie do Twojego serwera, będąc ruchem legalnym.
Twój serwer jest jednak nadal dostępny spoza Cloudflare, dlatego musisz ograniczyć dostęp do portów 80 i 443 protokołu TCP na serwerze Linux i zezwolić tylko na ruch pochodzący z legalnych adresów Cloudflare.

Możesz to zrobić ręcznie, dodając reguły zapory na podstawie [publicznej listy IPv4 Cloudflare](https://cloudflare.com/ips-v4) i [publicznej listy IPv6 Cloudflare](https://cloudflare.com/ips-v6).

Alternatywnie, możesz zaoszczędzić czas i użyć narzędzi takich jak [Cloudflare-ufw](https://github.com/Paul-Reed/cloudflare-ufw), które szybko zaimportują te reguły masowo.
Upewnij się, że nie masz innych reguł pozwalających na nieograniczony dostęp do serwera WWW poza tymi, które właśnie dodałeś, bo wtedy nie będą działać.

## Podsumowanie – Twój serwer jest teraz dużo bezpieczniejszy!

Ten poradnik pokazał Ci podstawowe i zaawansowane funkcje zabezpieczania serwera Linux. Jeśli wdrożyłeś wszystkie zalecenia, które pasują do Twojego systemu, Twój serwer jest już znacznie bezpieczniejszy – gratulacje!

Oczywiście możesz podjąć dalsze kroki:
- [2FA (SSH)](vserver-linux-ssh2fa.md)
- Dodanie kolejnych konfiguracji do Fail2Ban
- Ustawienie powiadomień mailowych w Fail2Ban
- I wiele innych...