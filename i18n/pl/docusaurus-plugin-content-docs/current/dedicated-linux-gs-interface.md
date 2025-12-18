---
id: dedicated-linux-gs-interface
title: "Serwer dedykowany: Interfejs Gameserver/TS3"
description: "Dowiedz się, jak łatwo skonfigurować serwery gier, serwery głosowe i boty muzyczne na Linux VPS lub serwerach dedykowanych → Sprawdź teraz"
sidebar_label: Interfejs GS/TS3
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Jeśli produkty serwerów gier nie spełniają Twoich oczekiwań lub potrzebujesz usługi w inny sposób, często lepszym wyborem jest VPS lub serwer dedykowany. Jednak często napotykasz na problem, że nie wszystkie usługi są zautomatyzowane lub wstępnie zainstalowane. Konfiguracja usług takich jak serwery gier, serwery Teamspeak 3 czy boty muzyczne musi odbywać się samodzielnie.

Aby rozwiązać ten problem, stworzyliśmy praktyczne rozwiązanie dla naszych VPS lub serwerów dedykowanych opartych na Linuxie. Tak zwany interfejs Gameserver/Teamspeak 3 Server (interfejs GS/TS3)!



## Przypadek użycia

Dzięki przyjaznemu interfejsowi GS/TS3 możesz zainstalować Teamspeak 3 lub inne wybrane usługi serwerów gier na swoim VPS lub serwerze dedykowanym opartym na Linuxie za pomocą kilku kliknięć. Do tej instalacji nie jest wymagana żadna wcześniejsza wiedza. Konfiguracja wszystkich potrzebnych pakietów, plików serwera oraz sama instalacja są w pełni zautomatyzowane, co oszczędza Twój czas i wysiłek.

:::warning
Funkcja interfejsu GS/TS3 jest dostępna dla następujących systemów operacyjnych:

- Debian: 10, 11, 12
- Ubuntu: 20.04, 22.04

(*) Pracujemy już nad udostępnieniem innych i nowszych systemów operacyjnych oraz wersji w niedalekiej przyszłości.
:::



## Dostępne usługi i gry

Interfejs GS/TS3 wspiera konfigurację serwerów gier, serwerów głosowych oraz botów muzycznych. Większość gier, które oferujemy w naszych produktach serwerów gier, jest również dostępna w opcji interfejsu GS/TS3. Dotyczy to wszystkich gier, które aktywnie obsługujemy pod Linuxem. Niestety, wszystkie gry działające na systemach Windows nie mogą być instalowane. W takich przypadkach możliwa jest tylko instalacja ręczna, pod warunkiem, że gra wspiera wersję serwera na Linuxa.

| Usługi     | Obsługiwane |
| ---------- | ----------- |
| Serwer gier  | ✔️          |
| Serwer głosowy | ✔️          |
| Bot muzyczny (Sinusbot) | ✔️          |



## Instalacja i konfiguracja

Aby zainstalować interfejs GS/TS3, przejdź do panelu nawigacyjnego **Ustawienia** w panelu administracyjnym Twojego produktu i kliknij podpunkt **Gameserver / TS3**. 

Przy pierwszym uruchomieniu interfejsu GS/TS3 zostaniesz przekierowany do przyjaznego kreatora konfiguracji. Aby skonfigurować interfejs i powiązać go z serwerem, musisz wybrać obsługiwany system operacyjny oraz podać dane logowania użytkownika root. 

![](https://screensaver01.zap-hosting.com/index.php/s/dLeLDKdmdiZ74CP/download)



Po pomyślnym powiązaniu serwera z witryną, można utworzyć interfejs GS/TS3. 



![](https://screensaver01.zap-hosting.com/index.php/s/FK9mP3BgzrPmH7S/preview)



![](https://screensaver01.zap-hosting.com/index.php/s/JL7jyTKbCEx8FBZ/preview)

:::info
**Uwaga**: Nie kontynuuj procesu, dopóki interfejs nie zostanie całkowicie zainstalowany. O pomyślnej instalacji świadczy zniknięcie paska postępu oraz wyświetlenie "Zainstalowano" zamiast "Brak" przy każdym wymaganym pakiecie.
:::



### Tworzenie serwera gier

Jeśli tworzenie i instalacja interfejsu GS/TS3 zakończyły się sukcesem, możesz rozpocząć konfigurację usług. Instalacja serwera gier odbywa się przez przycisk **Zainstaluj serwer gier** w kategorii **Serwer gier**.

![](https://screensaver01.zap-hosting.com/index.php/s/QinM7KtFwcAp5pE/preview)



W kolejnym kroku możesz wybrać adres IP dla wybranego serwera gier (jeśli Twój serwer ma więcej niż jeden adres IP). Możesz też indywidualnie ustawić port, liczbę slotów oraz boost pamięci RAM.

![](https://screensaver01.zap-hosting.com/index.php/s/cqWwZbXT77okeDa/preview)

Upewnij się, że wszystkie dane są poprawne i spełniają Twoje wymagania. Gdy wszystko ustawisz, kliknij "Zainstaluj serwer gier teraz", aby rozpocząć instalację. Serwer gier zostanie skonfigurowany zgodnie z Twoimi ustawieniami i wkrótce będziesz mógł zacząć zabawę. Nowo utworzony serwer gier pojawi się na liście.



![](https://screensaver01.zap-hosting.com/index.php/s/9WkJnxzkaEHmri7/preview)



Jesteś teraz w panelu administracyjnym swojego serwera gier. Możesz tam wybrać i zainstalować wybraną grę dla swojego serwera w panelu nawigacyjnym **Ustawienia** pod **Gry**.

![](https://screensaver01.zap-hosting.com/index.php/s/6pxEbWttos6HAYt/preview)

Znajdziesz tam listę wszystkich gier, które możesz zainstalować na swoim serwerze. W tym przykładzie instalowany jest serwer z grą (pakietem) Minecraft: Paperspigot. Wybierz swoją grę i kliknij zielony przycisk, aby rozpocząć instalację.

![](https://screensaver01.zap-hosting.com/index.php/s/gazW2itexCJd7cY/preview)

Pojawi się podsumowanie wszystkich niezbędnych warunków. Jeśli wszystkie warunki są spełnione, potwierdź proces przyciskiem **Akceptuj i zainstaluj**.

![](https://screensaver01.zap-hosting.com/index.php/s/jeQC7dp6zpe3ny4/preview)

Konfiguracja gry może potrwać chwilę, w zależności od gry. Postęp jest widoczny w statusie. Po zakończeniu możesz uruchomić swój serwer gier i połączyć się z nim w grze!



### Tworzenie serwera głosowego

Instalacja **serwera głosowego (Teamspeak 3 Server)** jest podobna do instalacji serwera gier. Najpierw kliknij ponownie "Gameserver / TS3". W tej sekcji znajdziesz opcję **Zainstaluj serwer głosowy**, którą kliknij, aby rozpocząć instalację serwera Teamspeak 3.

![](https://screensaver01.zap-hosting.com/index.php/s/mi8p3NTfwBBExsD/preview)

W kolejnym kroku możesz ustawić preferencje dla swojego serwera Teamspeak 3, takie jak adres IP, port oraz liczbę dostępnych slotów. Po wpisaniu wszystkich danych kliknij **Zainstaluj serwer głosowy teraz**, aby zakończyć instalację.

![](https://screensaver01.zap-hosting.com/index.php/s/ajfzxsJfCFdfBac/preview)

Upewnij się, że wszystkie informacje są poprawne i spełniają Twoje wymagania. Po ustawieniu wszystkiego kliknij **Zainstaluj serwer Teamspeak 3/5 teraz**, aby rozpocząć instalację. Zainstalowany serwer Teamspeak 3 pojawi się w **Przeglądzie serwerów głosowych**.

![](https://screensaver01.zap-hosting.com/index.php/s/YaEYorRG7TJGpmB/preview)

:::info
**Uwaga**: To jest instancja, na której zostanie zainstalowany serwer Teamspeak 3.
:::

Jesteś teraz w interfejsie instancji swojego zainstalowanego serwera Teamspeak 3. Możesz uruchomić instancję, klikając przycisk **Start**.

![](https://screensaver01.zap-hosting.com/index.php/s/SmqHB24ozJimBY9/preview)


Kliknij teraz w menu **Virtual Servers**. Wszystkie zainstalowane serwery Teamspeak 3 na Twojej instancji są tutaj czytelnie wypisane. Aby otworzyć interfejs konkretnego serwera Teamspeak 3, kliknij ikonę "oka".

![](https://screensaver01.zap-hosting.com/index.php/s/E3ZqxC9rPjWwC5F/preview)

W interfejsie serwera Teamspeak 3 znajdziesz wszystkie potrzebne informacje i opcje konfiguracji, aby indywidualnie zarządzać i dostosować swój serwer. Na przykład w zakładce "Authorization key" możesz wygenerować token, który da Ci prawa administratora na serwerze. Dzięki temu masz pełną kontrolę nad zarządzaniem użytkownikami i dostępem do serwera.

W menu **Ustawienia** masz dodatkowe opcje personalizacji serwera. Możesz tam zmienić nazwę serwera, ustawić hasło ograniczające dostęp lub dodać osobistą wiadomość powitalną, którą użytkownicy zobaczą po wejściu na serwer.

:::caution Informacje o licencjach Teamspeak
Domyślnie na serwerze Teamspeak 3 nie jest zainstalowana żadna licencja. Oznacza to, że możesz korzystać z serwera Teamspeak 3 tylko z maksymalną pojemnością 32 slotów. Jeśli jednak chcesz aktywować większą pojemność lub dodatkowe funkcje, możesz zakupić odpowiednią licencję bezpośrednio od Teamspeak.
:::





## Podsumowanie
Gratulacje, pomyślnie zainstalowałeś i skonfigurowałeś nasz interfejs GS/TS3! Jeśli masz dalsze pytania lub problemy, skontaktuj się z naszym zespołem wsparcia, który jest do Twojej dyspozycji każdego dnia!