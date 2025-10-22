---
id: vserver-linux-gs-interface
title: "VPS: Interfejs Serwera Gier/TS3"
description: "Dowiedz się, jak łatwo skonfigurować serwery gier i głosowe na Linux VPS bez wcześniejszej wiedzy, korzystając z zautomatyzowanego interfejsu → Sprawdź teraz"
sidebar_label: Interfejs GS/TS3
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Jeśli produkty serwerów gier nie spełniają Twoich oczekiwań lub potrzebujesz usługi w inny sposób, często lepszym wyborem jest VPS. Jednak często napotykasz na problem, że nie wszystkie usługi są zautomatyzowane lub wstępnie zainstalowane. Konfiguracja usług takich jak serwery gier, serwery Teamspeak 3 czy boty muzyczne musi być wykonana samodzielnie.

Aby rozwiązać ten problem, stworzyliśmy praktyczne rozwiązanie dla naszych VPS lub serwerów dedykowanych opartych na Linuxie. Tak zwany interfejs Serwera Gier/Teamspeak 3 (Interfejs GS/TS3)!

<YouTube videoId="V6qyQFPp_Ls" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/frWNEMQqcMxzRcM/preview" title="Konfiguracja Serwera Gier na Linux VPS BEZ DOŚWIADCZENIA!" description="Wolisz zobaczyć wszystko w akcji, żeby lepiej zrozumieć? Mamy to! Zanurz się w naszym wideo, które wszystko Ci wyjaśni. Niezależnie czy się spieszysz, czy po prostu lubisz chłonąć wiedzę w najbardziej angażujący sposób!"/>

<InlineVoucher />

## Przypadek użycia

Dzięki przyjaznemu interfejsowi GS/TS3 możesz zainstalować Teamspeak 3 lub inne wybrane usługi serwerów gier na swoim VPS lub serwerze dedykowanym opartym na Linuxie za pomocą kilku kliknięć. Do instalacji nie jest wymagana żadna wcześniejsza wiedza. Konfiguracja wszystkich niezbędnych pakietów, plików serwera oraz sama instalacja są w pełni zautomatyzowane, co oszczędza Twój czas i wysiłek.

:::warning
Funkcja interfejsu GS/TS3 jest dostępna dla następujących systemów operacyjnych:

- Debian: 10, 11, 12
- Ubuntu: 20.04, 22.04

(*) Pracujemy już nad udostępnieniem innych i nowszych systemów operacyjnych oraz wersji w niedalekiej przyszłości.
:::



## Dostępne usługi / gry

Interfejs GS/TS3 wspiera konfigurację serwerów gier, serwerów głosowych oraz botów muzycznych. Większość gier, które oferujemy w naszych produktach serwerów gier, jest również dostępna w opcji interfejsu GS/TS3. Dotyczy to wszystkich gier, które aktywnie obsługujemy pod Linuxem. Niestety, wszystkie gry działające na systemach Windows nie mogą być instalowane przez ten interfejs. Tam możliwa jest tylko instalacja ręczna, pod warunkiem, że gra wspiera wersję serwera na Linuxa.

| Usługi      | Obsługiwane |
| ----------- | ----------- |
| Serwer gier | ✔️          |
| Serwer głosowy | ✔️        |
| Bot muzyczny (Sinuxbot) | ✔️ |



## Instalacja i konfiguracja

Aby zainstalować interfejs GS/TS3, przejdź do panelu nawigacyjnego **Ustawienia** w panelu administracyjnym swojego produktu i kliknij podpunkt **Serwer gier / TS3**. 

Przy pierwszym wywołaniu interfejsu GS/TS3 zostaniesz przeniesiony do przyjaznego kreatora konfiguracji. Aby skonfigurować interfejs i powiązać go z Twoim serwerem, najpierw musisz utworzyć klucz SSH. Ten klucz jest niezbędny, aby strona mogła nawiązać bezpieczne połączenie z serwerem. Dzięki temu możliwe jest zakładanie, zarządzanie i kontrolowanie usług takich jak serwery gier i serwery Teamspeak 3 bezpośrednio przez interfejs.

Po dotarciu do tego miejsca należy wygenerować klucz SSH. Kliknij przycisk **Wygeneruj klucz SSH**, a następnie dodaj klucz, klikając **Dodaj klucz**.


![](https://screensaver01.zap-hosting.com/index.php/s/teZ87eGKRm6iJRa/preview)



Po kliknięciu **Dodaj klucz** klucz SSH zostanie zapisany na Twoim serwerze. Interfejs GS/TS3 można wtedy dodać do Twojego serwera.



![](https://screensaver01.zap-hosting.com/index.php/s/QqtCFmC3oxPErD9/preview)



:::info
**Uwaga:** Jeśli klucz SSH nie zostanie od razu rozpoznany, możliwe rozwiązanie to restart serwera i odświeżenie strony.
:::

Podczas instalacji możesz śledzić aktualny postęp. Pamiętaj, że instalacja i konfiguracja interfejsu oraz jego pakietów może potrwać chwilę. Zazwyczaj trwa to od 5 do 15 minut.

![](https://screensaver01.zap-hosting.com/index.php/s/xkWQBEp74BqQdM6/preview)

:::info
**Uwaga**: Nie kontynuuj procesu, dopóki interfejs nie zostanie całkowicie zainstalowany. O pomyślnej instalacji świadczy zniknięcie paska postępu i wyświetlenie "Zainstalowano" zamiast "Brak" przy każdym wymaganym pakiecie.
:::



### Tworzenie serwera gier

Jeśli tworzenie i instalacja interfejsu GS/TS3 zakończyły się sukcesem, możesz rozpocząć konfigurację usług. Instalacja serwera gier odbywa się przez przycisk **Zainstaluj serwer gier** w kategorii **Serwer gier**.

![](https://screensaver01.zap-hosting.com/index.php/s/4TD3w3dpXrFYNcb/preview)



W kolejnym kroku możesz wybrać adres IP dla wybranego serwera gier (jeśli Twój serwer ma więcej niż jeden adres IP). Możesz też indywidualnie ustawić port, liczbę slotów oraz boost pamięci RAM.

![](https://screensaver01.zap-hosting.com/index.php/s/icfwifbTrmwZQ6q/preview)

Upewnij się, że wszystkie dane są poprawne i spełniają Twoje wymagania. Gdy wszystko ustawisz, kliknij "Zainstaluj serwer gier teraz", aby rozpocząć instalację. Serwer gier zostanie skonfigurowany zgodnie z Twoimi ustawieniami i wkrótce będziesz mógł zacząć grać. Teraz możesz przeglądać i wywołać swój nowo utworzony serwer gier na liście.



![](https://screensaver01.zap-hosting.com/index.php/s/MTRmMwc9GyMFW5A/preview)



Jesteś teraz w panelu administracyjnym swojego serwera gier. Tam możesz wybrać i zainstalować wybraną grę dla swojego serwera gier w panelu nawigacyjnym **Ustawienia** pod **Gry**.

![](https://screensaver01.zap-hosting.com/index.php/s/xqxLAAR6jbdmM3Z/preview)

Znajdziesz tu listę wszystkich gier, które możesz zainstalować na swoim serwerze. W tym przykładzie instalowany jest serwer z grą (pakietem) Minecraft: Paperspigot. Wybierz swoją grę i kliknij zielony przycisk, aby rozpocząć instalację.

![](https://screensaver01.zap-hosting.com/index.php/s/MtrsxLoYxssJLBt/preview)

Pojawi się podsumowanie wszystkich niezbędnych warunków. Jeśli wszystkie warunki są spełnione, możesz potwierdzić proces przyciskiem **Akceptuj i zainstaluj**.

![](https://screensaver01.zap-hosting.com/index.php/s/GjijXaM3z9EgnYG/preview)

Konfiguracja gry może potrwać chwilę, w zależności od gry. Postęp jest widoczny w statusie. Następnie możesz uruchomić swój serwer gier i połączyć się z nim w grze!



### Tworzenie serwera głosowego

Instalacja **serwera głosowego (Teamspeak 3 Server)** jest podobna do instalacji serwera gier. Najpierw musisz ponownie kliknąć "Serwer gier / TS3". W tej sekcji znajdziesz opcję **Zainstaluj serwer głosowy**, którą kliknij, aby rozpocząć instalację serwera Teamspeak 3.

![](https://screensaver01.zap-hosting.com/index.php/s/xct5DPC57wWeABG/preview)

W kolejnym kroku możesz ustawić preferencje dla swojego serwera Teamspeak 3, takie jak adres IP, port i liczba dostępnych slotów. Po wpisaniu wszystkich danych kliknij **Zainstaluj serwer głosowy teraz**, aby zakończyć instalację.

![](https://screensaver01.zap-hosting.com/index.php/s/2XnJrDEDyLwBsHk/preview)

Upewnij się, że wszystkie informacje są poprawne i spełniają Twoje wymagania. Po ustawieniu wszystkiego kliknij **Zainstaluj serwer Teamspeak 3/5 teraz**, aby rozpocząć instalację. Teraz możesz przeglądać i kliknąć zainstalowany serwer Teamspeak 3 w **Przeglądzie serwerów głosowych**.

![](https://screensaver01.zap-hosting.com/index.php/s/bgpZJgPjz7Ybpke/preview)

:::info
**Uwaga**: To jest instancja, na której zostanie zainstalowany serwer Teamspeak 3.
:::

Jesteś teraz w interfejsie instancji swojego zainstalowanego serwera Teamspeak 3. Możesz uruchomić instancję, klikając przycisk **Start**.

![](https://screensaver01.zap-hosting.com/index.php/s/G96RPrjEdm96CCj/preview)


Teraz kliknij w menu **Serwery wirtualne**. Wszystkie zainstalowane serwery Teamspeak 3 na Twojej instancji są tutaj czytelnie wymienione. Aby wywołać interfejs konkretnego serwera Teamspeak 3, kliknij ikonę "oka".

![](https://screensaver01.zap-hosting.com/index.php/s/awJdyTgJPSia5B2/preview)

W interfejsie serwera Teamspeak 3 znajdziesz wszystkie niezbędne informacje i opcje konfiguracji, aby indywidualnie zarządzać swoim serwerem. Na przykład w zakładce "Klucz autoryzacji" możesz wygenerować token, który nada Ci prawa administratora na serwerze. Dzięki temu masz pełną kontrolę nad zarządzaniem użytkownikami i dostępem do serwera.

W menu "Ustawienia" masz dodatkowe opcje personalizacji serwera. Możesz tam zmienić nazwę serwera, ustawić hasło ograniczające dostęp lub zapisać osobistą wiadomość powitalną, którą użytkownicy zobaczą po wejściu na serwer.

:::caution Informacje o licencjach Teamspeak
Domyślnie na serwerze Teamspeak 3 nie jest zainstalowana żadna licencja. Oznacza to, że możesz korzystać tylko z serwera Teamspeak 3 o pojemności 32 slotów. Jeśli jednak chcesz aktywować większą pojemność lub dodatkowe funkcje, możesz zakupić odpowiednią licencję bezpośrednio od Teamspeak.
:::


## Podsumowanie

Gratulacje, pomyślnie zainstalowałeś i skonfigurowałeś nasz interfejs GS/TS3! Jeśli masz dalsze pytania lub problemy, skontaktuj się z naszym zespołem wsparcia, który jest do Twojej dyspozycji każdego dnia!

<InlineVoucher />