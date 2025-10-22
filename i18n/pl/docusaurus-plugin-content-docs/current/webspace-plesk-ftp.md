---
id: webspace-plesk-ftp
title: "Hosting: Konfiguracja dostępu FTP do hostingu"
description: "Dowiedz się, jak zarządzać wieloma dostępami FTP do wspólnych projektów webowych i skutecznie kontrolować uprawnienia do folderów → Sprawdź teraz"
sidebar_label: Dostęp FTP
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

FTP to skrót od *file transfer protocol* i jest niezbędny do przesyłania plików z komputera na hosting.  
Każdy klient automatycznie otrzymuje dostęp FTP do zamówionego hostingu.

Tutaj wyjaśniamy, jak skonfigurować dodatkowe dostępy FTP. Jest to przydatne, gdy pracujesz nad projektem z kilkoma osobami i każda z nich powinna mieć własny dostęp FTP.

Te osoby mogą korzystać z utworzonego dostępu FTP tylko do folderów wskazanych przez właściciela hostingu.

<InlineVoucher />

## Konfiguracja dostępu FTP

W panelu głównym Plesk otwórz funkcję "**Dostęp FTP**".

:::info
Na tej stronie głównej zobaczysz także adres IP, który będzie potrzebny do późniejszego testu.
:::

![Bildschirmfoto vom 2022-05-13 05-29-41](https://screensaver01.zap-hosting.com/index.php/s/FK3mBHJRqS3xdbB/preview)

Zobaczysz tutaj jeden dostęp FTP, który jest automatycznie tworzony przez system po zakończeniu zamówienia hostingu.  
Aby utworzyć kolejne konto, kliknij przycisk "**Dodaj konto FTP**".

![Bildschirmfoto vom 2022-05-13 05-29-53](https://screensaver01.zap-hosting.com/index.php/s/L2Qa3p5nYHA3WGf/preview)

Następnie wpisz wymagane dane. Po uzupełnieniu formularza zatwierdź klikając "**OK**".

![Bildschirmfoto vom 2022-05-13 05-30-10](https://screensaver01.zap-hosting.com/index.php/s/xZM5rmy3QsPJN52/preview)

:::info
W polu "**Katalog bazowy**" możesz wybrać katalog, do którego dostęp FTP ma mieć dostęp. Jeśli dostęp FTP ma mieć pełne uprawnienia do wszystkich plików, nie musisz nic zmieniać.
:::

## Test dostępu FTP

Do przetestowania dostępu FTP potrzebny jest program, który to umożliwia. W naszym przykładzie używamy *Filezilla Client*.  
W polu "**Serwer**" wpisujemy adres IP serwera, który jest widoczny na stronie głównej.  
W polach "**nazwa użytkownika**" i "**hasło**" wpisujemy dane utworzone dla dostępu FTP.  
Domyślny port to "**21**".

## Konto użytkownika już istnieje

Ten komunikat pojawia się, gdy nazwa konta FTP jest już używana przez kogoś innego w systemie.  
Zamówiony hosting działa na systemie współdzielonym z wieloma klientami, więc jeśli ktoś już korzysta z danej nazwy, nikt inny nie może jej użyć.  
W takim przypadku trzeba wybrać inną nazwę konta.

<InlineVoucher />