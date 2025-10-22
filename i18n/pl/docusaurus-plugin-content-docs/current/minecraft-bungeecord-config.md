---
id: minecraft-bungeecord-config
title: "Minecraft: Ustawienia Konfiguracji Serwera BungeeCord"
description: "Dowiedz się, jak zoptymalizować i zarządzać ustawieniami sieci serwera BungeeCord, aby poprawić wydajność i doświadczenie graczy → Sprawdź teraz"
sidebar_label: Właściwości Serwera
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Po co mi konfiguracja BungeeCord?

BungeeCord to zarządzanie pakietem serwerów połączonych przez serwer proxy (serwer BungeeCord). Aby dostosować sieć tych serwerów, należy edytować plik *config.yml*. Na tej stronie poznasz dokładne znaczenie każdego ustawienia oraz dodatkowe informacje o wpływie na sub-serwery takie jak PaperSpigot i Bukkit.

<InlineVoucher />

## Ustawienia

### forge_support

Wartość może być ustawiona na false lub true. Jeśli ustawisz na true, gracze mogą wejść na serwer z klientem Forge (przeznaczonym dla modpacków). Jeśli ustawisz na false, serwer odrzuci takie połączenia.

### player_limit

Ta wartość określa, ilu graczy może jednocześnie połączyć się z serwerem. W porównaniu do wartości *max_players* z listenerów, jest to wewnętrzne, absolutne określenie całkowitej liczby graczy.

### permissions

W tej sekcji można przypisać określone uprawnienia do różnych grup. Są to **tylko uprawnienia BungeeCord**, a nie np. uprawnienia Spigot/Bukkit.  
Ważna jest składnia i wcięcia (2 spacje):  
```
permissions:
  GroupName:
  - Permission.One
  - Permission.Two
```

### timeout

Ta liczba wskazuje maksymalny czas, przez jaki serwer może nie wysyłać sygnałów do graczy, zanim się wyłączy i rozłączy wszystkich. Domyślnie ustawiona na 30000, co odpowiada maksymalnemu czasowi odpowiedzi 30 sekund.

### log_commands

Wartość może być ustawiona na false lub true. Jeśli ustawisz na true, w konsoli pojawi się komunikat, gdy gracz wykona komendę BungeeCord. Jeśli na false, komunikat nie będzie wyświetlany.

### network_compression_threshold

Określa rozmiar pakietów wysyłanych do graczy. Mniejsza wartość niż domyślne *256*, np. 128, może poprawić połączenie z bardziej odległymi użytkownikami. Jednak spowoduje to znacznie większe zużycie CPU, więc zmiana tej wartości powinna być ostrożna.

### online_mode

Wartość może być ustawiona na false lub true. Jeśli ustawisz na true, dostęp do serwera mają tylko gracze, którzy kupili Minecrafta. Jeśli na false, także gracze z cracked klientami będą mogli się połączyć, ponieważ nie będzie komunikacji z serwerem Mojang.  
**Ważne:** Jeśli chcesz, aby cracked gracze mogli grać na Twoim serwerze, użyj pluginu autoryzacyjnego, inaczej inni gracze mogą podszywać się pod Ciebie i zdobyć uprawnienia administratora.

### disabled_commands

Tutaj możesz wymienić komendy, które mają być wyłączone i niewykonalne w całej sieci. Ograniczenie dotyczy wszystkich graczy w sieci.

### servers

Ta lista pokazuje wszystkie sub-serwery Twojej sieci. Jeśli serwer nie jest tutaj wymieniony, nie zostanie zintegrowany z Twoim systemem serwerów.  
Ważna jest składnia i wcięcia (2 spacje):  
```
servers:
  ServerName:
    motd: '&1Just another BungeeCord - Forced Host'
    address: 0.0.0.0:2000
    restricted: false
```
**motd** to wiadomość, która pojawia się na liście serwerów, gdy pingujesz sub-serwer za pomocą funkcji *forced_hosts*:

![](https://screensaver01.zap-hosting.com/index.php/s/E93qgyfkjfW7Mzf/preview)

Pod **address** wpisujesz odpowiedni adres IP sub-serwera. Jeśli wartość **restricted** jest true, gracz musi mieć uprawnienie *bungeecord.server.ServerName*, aby wejść na sub-serwer.

### listeners

Pod tą zmienną kryje się wiele opcji ważnych dla połączenia z serwerem BungeeCord. Można utworzyć kilka listenerów, aby umożliwić połączenia na różne adresy IP i porty. Listener składa się z następujących wartości konfiguracyjnych:  
* query_port - definiuje port listenera.  
* motd - wiadomość wyświetlana na liście serwerów, gdy gracz bezpośrednio doda serwer BungeeCord do swojej listy.  
* tab_list - możesz wybrać spośród *GLOBAL_PING*, *GLOBAL* i *SERVER*. GLOBAL_PING pokazuje wszystkich graczy wraz z ich pingiem w tabliście. GLOBAL pokazuje wszystkich graczy na wszystkich serwerach, ale bez pingu. SERVER pokazuje tylko graczy na tym samym sub-serwerze. **Ważne:** Funkcja nie działa w wersjach 1.8 i starszych.  
* query_enabled - wartość false lub true. Jeśli true, podczas procedury DNS sprawdzany jest UDP query, które zezwala tylko na takie połączenia. Jeśli false, możliwe są inne połączenia przez przekierowanie do serwera.  
* proxy_protocol - wartość false lub true. Jeśli true, można używać protokołu HAProxy. Jeśli false, protokół jest odrzucany.  
* forced_hosts - pozwala na indywidualne bezpośrednie połączenia do sub-serwerów. Składnia: `Your.OwnDomain.net: ServerName`  
* ping_passthrough - wartość false lub true. Jeśli true, podczas pingowania sub-serwera przez *forced_hosts* zobaczysz prawdziwe MOTD sub-serwera zamiast tego z konfiguracji BungeeCord. Jeśli false, zwraca wartość z *servers*.  
* priorities - lista serwerów w kolejności, do których gracze powinni się łączyć najpierw. Serwer jest pomijany, jeśli jest offline lub niedostępny.  
* bind_local_address - wartość false lub true. Jeśli true, system zawsze próbuje przekierować gracza do serwerów nasłuchujących na tym samym IP co serwer BungeeCord. Jeśli false, sub-serwery mogą mieć różne adresy IP. Ważne dla sieci z serwerami na różnych systemach.  
* host - ustawia IP i port hosta. Jeśli IP to 0.0.0.0, akceptowane są wszystkie adresy IP i domeny przekierowujące do hosta.  
* max_players - maksymalna liczba graczy dla tego listenera.  
* tab_size - maksymalna liczba graczy wyświetlana w tabliście.  
* wartość false lub true. Jeśli true, gracz zawsze łączy się z domyślnym serwerem (pierwszym dostępnym z *priorities*). Jeśli false, gracz trafia na sub-serwer, na którym był ostatnio online. **Ważne:** Włączenie tej opcji powoduje, że połączenia przez *forced_hosts* również będą przekierowywane na domyślny serwer.

### ip_forward

Wartość false lub true. Jeśli true, gracze mogą łączyć się z siecią tylko przez serwer BungeeCord. Jeśli false, gracze mogą też łączyć się bezpośrednio z sub-serwerem, jeśli znają IP i port.  
**Ważne:** Jeśli ustawisz *online_mode* na true, powinieneś też włączyć tę funkcję, aby zamknąć lukę bezpieczeństwa.

### prevent_proxy_connections

Wartość false lub true. Jeśli true, adresy IP podłączonych graczy będą przesyłane do serwera Mojang. Jeśli false, serwer zablokuje przekazywanie IP do Mojang.  
Wartość nie ma realnego wpływu na rozgrywkę.

### groups

W tej liście możesz przypisać jedną lub więcej grup do poszczególnych graczy. Dzięki temu otrzymają oni powiązane uprawnienia BungeeCord zdefiniowane w *permissions*.  
Ważna jest składnia i wcięcia (2 spacje):  
```
groups:
  PlayerName:
  - GroupName
```

### connection_throttle

Określa, jak długo gracz musi czekać, zanim będzie mógł ponownie spróbować połączyć się z serwerem. Domyślnie ustawione na 4000, co odpowiada maksymalnemu czasowi oczekiwania 4 sekund.

### stats

BungeeCord wstawia tutaj losowo wygenerowany kod. Zaleca się nie zmieniać tego kodu, ponieważ pomaga to optymalizować BungeeCord i naprawiać błędy. Dane analityczne są przesyłane anonimowo i zaszyfrowane do twórców.

### connection_throttle_limit

Określa liczbę prób połączenia, które gracz może wykonać, zanim będzie musiał poczekać określony czas *connection_throttle*, zanim spróbuje ponownie.

<InlineVoucher />