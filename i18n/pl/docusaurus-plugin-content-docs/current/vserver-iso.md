---
id: vserver-iso
title: "VPS: Podłączanie pliku ISO"
description: "Dowiedz się, jak dostosować swój VPS, montując wybrane ISO, aby mieć pełną kontrolę nad środowiskiem serwera → Sprawdź teraz"
sidebar_label: Montowanie pliku ISO
services:
  - vserver
---



import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/vserver-iso-files-en.json';

## Wprowadzenie
Chcesz mieć jeszcze więcej swobody przy wyborze systemu? Oprócz naszych szablonów systemów operacyjnych możesz oczywiście zamontować własne pliki ISO. To mega proste z naszymi produktami VPS. Dzięki temu na swoim serwerze masz dokładnie taki system operacyjny, jaki naprawdę chcesz!

<InlineVoucher />



## Dostępne pliki ISO

Oprócz naszych prekonfigurowanych standardowych szablonów systemów operacyjnych oferujemy także możliwość montowania dodatkowych plików ISO. To daje jeszcze większą elastyczność przy konfiguracji i zarządzaniu środowiskiem serwera. Nasze produkty VPS obecnie obsługują następujące pliki ISO: 

<SearchableItemList items={items} />





## Wgrywanie własnego ISO

Jeśli potrzebny obraz ISO nie jest dostępny na liście domyślnej, możesz dostarczyć własny plik ISO za pomocą publicznego URL. Adres URL musi być dostępny przez HTTP lub HTTPS i nie może wymagać uwierzytelniania ani mieć ograniczonego czasowo linku do pobrania.

Po wpisaniu adresu URL w polu **Dodaj własne ISO** i kliknięciu **Wgraj ISO**, plik zostanie automatycznie zaimportowany i będzie dostępny do instalacji na serwerze.

![img](https://screensaver01.zap-hosting.com/index.php/s/E93dLjnpnBPFiH7/preview)

Można przechowywać maksymalnie trzy własne obrazy ISO jednocześnie. Każdy wgrany ISO jest przechowywany tylko przez 72 godziny i potem automatycznie usuwany. Jeśli ISO jest potrzebny po tym czasie, trzeba go wgrać ponownie. Za zawartość, licencje i bezpieczeństwo dostarczonego ISO odpowiada klient.









## Montowanie pliku ISO
Aby zamontować ISO, przejdź do panelu zarządzania VPS i otwórz **Ustawienia → ISO**. Wybierz plik ISO, który chcesz, dostosuj kolejność bootowania, a następnie zrestartuj serwer.

![img](https://screensaver01.zap-hosting.com/index.php/s/tszMKbqDSa3AaLy/download)

Po restarcie możesz połączyć się z serwerem przez klienta VNC i rozpocząć instalację oraz konfigurację systemu operacyjnego.

![img](https://screensaver01.zap-hosting.com/index.php/s/q6WoDMq8pxn72oG/download)

:::warning Status online i połączenia zdalne po montażu ISO

Po zamontowaniu ISO serwer nie jest jeszcze skonfigurowany. W efekcie w panelu nie będzie wyświetlany **status online**, a połączenia **RDP** lub **SSH** nie będą dostępne. Będą one możliwe dopiero po pomyślnej instalacji i konfiguracji systemu operacyjnego.

:::




## Podsumowanie
Gratulacje, udało Ci się wybrać i zamontować plik ISO. W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym supportem, który jest do Twojej dyspozycji codziennie! 🙂



<InlineVoucher />