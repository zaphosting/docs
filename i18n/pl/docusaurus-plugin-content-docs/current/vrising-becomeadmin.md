---
id: vrising-becomeadmin
title: "V Rising: Zostań administratorem"
description: "Dowiedz się, jak efektywnie zarządzać i przydzielać pełne uprawnienia administratora na swoim serwerze gier → Sprawdź teraz"
sidebar_label: Zostań administratorem
services:
  - gameserver-vrising
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Przydzielenie uprawnień administratora pozwala na prostą i kompleksową administrację z pełną kontrolą nad Twoim serwerem. Jako administrator masz możliwość korzystania ze wszystkich dostępnych opcji i funkcji oferowanych przez grę bezpośrednio w niej. Wszystkie kroki, które musisz wykonać, aby przydzielić uprawnienia administratora na swoim serwerze, opisane są poniżej.  
<InlineVoucher />

### Dodaj uprawnienia

Zarządzanie uprawnieniami administratora odbywa się poprzez plik konfiguracyjny **adminlist.txt**. Do pliku tego masz dostęp w panelu głównym w zakładce Configs. Do dodania administratora potrzebujesz SteamID64 gracza. Możesz je uzyskać, otwierając swój profil Steam i klikając prawym przyciskiem myszy w dowolnym miejscu. Tam masz możliwość skopiowania adresu URL strony. Skopiowany URL możesz następnie wkleić na jednej z poniższych stron: https://steamid.io/ https://steamrep.com/ https://steamidfinder.com/ 

![](https://screensaver01.zap-hosting.com/index.php/s/QT5HRX4t966kRjQ/preview)

Wklej tam swój URL profilu Steam w pole i otrzymasz swój SteamID64. Dodaj ten SteamID64 do pliku konfiguracyjnego **adminlist.txt**. Aby to zrobić, przejdź w panelu głównym do administracji serwera gier w kategorii Configs i otwórz plik adminlist.txt. 

![](https://screensaver01.zap-hosting.com/index.php/s/Y35BDx5xJ5zLGoS/preview)

:::info
Jeśli planujesz przydzielić uprawnienia administratora wielu graczom, każdy SteamID musi znajdować się w osobnej linii. 
:::

### Aktywuj uprawnienia

Zanim przydzielisz uprawnienia administratora w grze, musisz aktywować konsolę w swojej grze. Połącz się ze swoim serwerem i przejdź do ustawień. W ustawieniach musisz włączyć opcję **Console Enabled**. Konsolę domyślnie otworzysz klawiszem Gravis na klawiaturze. Uprawnienia administratora możesz następnie aktywować w konsoli poleceniem `adminauth`. 

![](https://screensaver01.zap-hosting.com/index.php/s/MLS9wbcC56ZomAb/preview)


### Lista komend administratora

Oto krótki przegląd najczęściej używanych komend administratora, które możesz wykonać na swoim serwerze. 

|                          |                                                         |
| ------------------------ | ------------------------------------------------------- |
| adminauth                | Przydzielenie uprawnień administratora                  |
| admindeauth              | Usunięcie uprawnień administratora                      |
| banuser [name/IP/userID] | Zbanowanie konkretnego gracza po nazwie, IP lub userID  |
| banned                   | Wyświetla listę wszystkich zbanowanych użytkowników     |
| bancharacter             | Używane do zbanowania konkretnej postaci                |
| give [name]              | Daje Ci konkretny przedmiot w grze                       |
| giveset                  | Pozwala na eksplorację różnych zestawów zbroi i broni   |
| kick [name/IP/userID]    | Wyrzuca konkretnego gracza po nazwie, IP lub userID     |
| unban [name/IP/userID]   | Odbanowuje konkretnego gracza po nazwie, IP lub userID  |


## Podsumowanie

Gratulacje, pomyślnie skonfigurowałeś uprawnienia administratora. W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />