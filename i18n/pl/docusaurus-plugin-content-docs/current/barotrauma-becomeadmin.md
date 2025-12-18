---
id: barotrauma-becomeadmin
title: "Barotrauma: Zostań adminem na swoim serwerze"
description: "Dowiedz się, jak przyznać uprawnienia administratora, aby mieć pełną kontrolę nad serwerem i wygodne zarządzanie w grze → Sprawdź teraz"
sidebar_label: Zostań adminem
services:
  - gameserver-barotrauma
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Przyznanie uprawnień administratora pozwala na prostą i kompleksową administrację z pełną kontrolą nad Twoim serwerem. Jako administrator masz możliwość korzystania ze wszystkich dostępnych opcji i funkcji oferowanych przez grę bezpośrednio w grze. Poniżej znajdziesz wszystkie kroki, które musisz wykonać, aby nadać uprawnienia administratora na swoim serwerze.  
<InlineVoucher />

## Konfiguracja
Dodanie admina odbywa się poprzez plik konfiguracyjny **Clientpermissions.xml**, który znajdziesz w panelu pod zakładką Configs.

![](https://screensaver01.zap-hosting.com/index.php/s/oJNTozXz9YW8sjG/preview)


Aby dodać nowego gracza, musisz dodać nowy wpis klienta do pliku konfiguracyjnego. Składnia wygląda tak:

```xml
<Client
    name="<nazwa gracza>"
    steamid="<steamid>"
    permissions="<uprawnienia>">
    <command
      name="<nazwa_komendy>" />
  </Client>
```



Wpis klienta zawiera zmienne **Name, SteamID, Permissions oraz Command**. Muszą one zostać odpowiednio zmodyfikowane. Nazwę możesz ustawić dowolnie — służy ona tylko jako etykieta dla lepszej orientacji. Następnie musisz podać SteamID64 swojego konta Steam.

Znajdziesz je, wchodząc na swój profil Steam, a następnie klikając prawym przyciskiem myszy w dowolnym miejscu na profilu. Tam możesz skopiować URL profilu Steam.



![](https://screensaver01.zap-hosting.com/index.php/s/C3nfdjemxkjZH5n/preview)



Następnie URL należy wkleić na jednej z poniższych stron:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

![](https://screensaver01.zap-hosting.com/index.php/s/asnbFc4JDifdSHn/preview)



Strony te pokażą Ci ogólne informacje o koncie oraz Steam ID. W tym przypadku potrzebujesz **Steam ID 64**. Steam ID musisz potem dodać do wpisu klienta pod **SteamID**. Efekt będzie wyglądał tak: 

```xml
<Client
    name="Nazwa"
    steamid="123456789"
    permissions="<uprawnienia>">
    <command
      name="<nazwa_komendy>" />
  </Client>
```



Na tym etapie jesteś już adminem, ale Twoje konto nie ma jeszcze przypisanych konkretnych uprawnień. Możesz je dodać, wpisując odpowiednie uprawnienia i komendy, które mają być dostępne. Przykład:

```xml
...
    permissions="<uprawnienia>"> ---> permissions="ServerLog, ConsoleCommands">
...
```

```xml
<?xml version="1.0" encoding="utf-8" ?>
<ClientPermissions> 
<Client
    name="Nazwa"
    steamid="123456789"
    permissions="ServerLog, ConsoleCommands">
    <command
      name="heal" />
    <command
      name="spawn" />
  </Client>
</ClientPermissions>
```



W tym przykładzie admin ma dostęp do logów serwera, konsoli oraz komend heal i spawn. Poniżej znajdziesz przegląd uprawnień, które możesz ustawić.



## Uprawnienia

| Uprawnienia       | Opis                                                        |
| ----------------- | ------------------------------------------------------------ |
| ManageRound       | Może rozpoczynać i kończyć rundy.                           |
| Kick              | Może wyrzucać innych graczy.                                |
| Ban               | Może banować innych graczy.                                 |
| Unban             | Może zdejmować bany z innych graczy.                        |
| SelectSub         | Może wybierać łódź podwodną.                                |
| SelectMode        | Może wybierać tryb gry.                                     |
| ManageCampaign    | Może wybierać cel, misję oraz kupować zaopatrzenie w sklepie Kampanii. |
| ConsoleCommands   | Może używać komend konsoli – pamiętaj, że musisz też nadać uprawnienia do poszczególnych komend konsoli. |
| ServerLog         | Może czytać logi serwera.                                   |
| ManageSettings    | Może zmieniać ustawienia serwera.                           |
| ManagePermissions | Może zmieniać uprawnienia innych klientów.                  |
| KarmaImmunity     | Jest odporny na negatywne efekty systemu karmy, nie traci karmy. |
| All               | Nadaje wszystkie uprawnienia.                               |



## Podsumowanie

Gratulacje, pomyślnie skonfigurowałeś uprawnienia administratora. W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />