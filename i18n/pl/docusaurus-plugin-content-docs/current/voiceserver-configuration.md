---
id: voiceserver-configuration
title: "Voiceserver: Konfiguracja"
description: "Dowiedz się, jak dostosować ustawienia swojego serwera Teamspeak, aby uzyskać spersonalizowane doświadczenie i zoptymalizowane zarządzanie użytkownikami → Sprawdź teraz"
sidebar_label: Konfiguracja serwera
services:
  - voiceserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Serwer Teamspeak można konfigurować indywidualnie. Poniżej wyjaśnimy, jak możesz skonfigurować swój serwer. Opiszemy, jak dostosować ogólne ustawienia, takie jak nazwa serwera, ikona, baner, uprawnienia użytkowników, uprawnienia kanałów i grup serwerowych.

<InlineVoucher />

## Ogólne

**Interfejs webowy**

Jeśli chcesz wykonać ogólną konfigurację serwera przez interfejs webowy, znajdziesz opcje w Administracji Serwera Teamspeak w zakładce Ustawienia. Strona ustawień wygląda tak:

![](https://screensaver01.zap-hosting.com/index.php/s/fLYXn5sx38BBC92/preview)


**Klient Teamspeak**

Jeśli chcesz skonfigurować serwer bezpośrednio przez klienta Teamspeak, znajdziesz opcje klikając prawym przyciskiem myszy na górny kanał **TeamSpeak ]I[ Server**, a następnie wybierając **Edytuj serwer wirtualny**.

![](https://screensaver01.zap-hosting.com/index.php/s/epQ2qzRiex9BmpE/preview)



Ponieważ ustawienia w interfejsie webowym powinny być jak najbardziej przejrzyste i nie wszystko można tam dostosować, ten poradnik skupia się na konfiguracji serwera Teamspeak przez klienta Teamspeak.



### Nazwa

W polu **Nazwa serwera** możesz zdefiniować nazwę swojego serwera Teamspeak. Będzie ona wyświetlana na liście serwerów, na stronie internetowej i wszędzie indziej.



### Baner

Jeśli wykupiłeś opcję własnego banera, możesz dodać swój baner w polu **URL grafiki banera**. Ważne, aby podać bezpośredni link do obrazka, inaczej obrazek nie zostanie rozpoznany. W polu **URL** możesz ustawić, gdzie baner ma przekierowywać po kliknięciu.

:::info
Jeśli nie wykupiono własnego banera, baner zostanie automatycznie zastąpiony domyślnym banerem ZAP.
:::



### Sloty (zarezerwowane sloty)

Sloty są ustawiane przez nas i nie można ich zmieniać. Masz jednak możliwość ustawienia zarezerwowanych slotów. Oznacza to, że są one zarezerwowane na wypadek, gdyby serwer Teamspeak był pełny. Wtedy użytkownicy z odpowiednimi uprawnieniami nadal mogą się połączyć z serwerem Teamspeak.



### Wiadomość powitalna

Możesz dodać dowolną wiadomość powitalną. Ta wiadomość będzie wyświetlana po połączeniu. Może to wyglądać na przykład tak:

![](https://screensaver01.zap-hosting.com/index.php/s/AWFcf4HHJ7jesdc/preview)


### Poziom bezpieczeństwa

Wymagany poziom bezpieczeństwa określa, jak długo użytkownicy muszą podnosić poziom bezpieczeństwa swojej tożsamości, aż ta zostanie uznana za wystarczająco bezpieczną. W praktyce zmniejsza to potencjał spamu i nadużyć. Im wyższy poziom bezpieczeństwa, tym dłużej to trwa. Oto przegląd czasów:

- Poziom 0-23 - generowany w ciągu sekund
- Poziom 23-29 - generowany w ciągu minut
- Poziom 29-34 - generowany w ciągu godzin
- Poziom 35-39 - generowany w ciągu dni
- Poziom 40-43 - generowany w ciągu miesięcy
- Poziom 44+ - generowany w ciągu lat



### Zarządzanie użytkownikami (kick, ban, lista banów, lista skarg)

Możesz wykonać kick lub ban, klikając prawym przyciskiem myszy na użytkownika. W przypadku bana, tożsamość i adres IP zostaną zapisane na liście banów. Listę znajdziesz w **pasku nawigacji -> dodatki**. Tam możesz usunąć istniejące bany.

Znajdziesz tam też listę skarg. To funkcja Teamspeak, która pozwala użytkownikom zgłaszać innych użytkowników, sam serwer itd., gdy nie ma admina na serwerze Teamspeak.



## Personalizacja

Możesz tworzyć więcej kanałów i grup serwerowych na swoim serwerze Teamspeak, aby jeszcze bardziej spersonalizować swój serwer. Poniżej pokażemy, jak to zrobić dokładnie.


### Kanał

Aby stworzyć więcej kanałów, musisz kliknąć **prawym przyciskiem myszy** poniżej istniejących kanałów, a następnie kliknąć **Utwórz kanał**. Otworzy się okno popup. Tam możesz skonfigurować kanał z następującymi opcjami: nazwa kanału, hasło, ikona, opis, typ kanału i więcej.



![](https://screensaver01.zap-hosting.com/index.php/s/Bkx2q69a5ceNiyD/preview)


### Grupy serwerowe

Aby utworzyć dodatkowe grupy serwerowe, kliknij na **uprawnienia** w **pasku nawigacji**, a następnie przejdź do **grupy serwerowe**. Tam znajdziesz przegląd istniejących grup serwerowych, ich uprawnień i przypisanych użytkowników. Na liście grup serwerowych możesz kliknąć na **symbol plusa** na dole i utworzyć nową grupę.



![](https://screensaver01.zap-hosting.com/index.php/s/QqcaaRse6kLNwPQ/preview)


## Uprawnienia

Teraz powinno być jasne, jak dostosować ogólne ustawienia serwera Teamspeak i jak spersonalizować serwer, tworząc dodatkowe kanały i grupy serwerowe. Poniżej zajmiemy się tym, jak można dostosować uprawnienia.



### Uprawnienia: Użytkownik

Uprawnienia użytkowników zależą od przypisanych grup serwerowych. Domyślnie użytkownik otrzymuje przypisaną grupę **Normal**. Jeśli chcesz dodać więcej uprawnień użytkownikowi, możesz to zrobić, klikając prawym przyciskiem myszy na użytkownika, następnie wybierając Grupy serwerowe i przypisując wybraną grupę.

![](https://screensaver01.zap-hosting.com/index.php/s/sXG3qFXXJXc6Kjr/preview)

### Uprawnienia: Kanał

Uprawnienia można definiować dla każdego kanału. Na przykład możesz określić, którzy użytkownicy mogą **wejść, subskrybować, opisać, wyświetlać, modyfikować, usuwać** kanał oraz **dostęp do przeglądarki plików kanału**.


![](https://screensaver01.zap-hosting.com/index.php/s/9sCRd7NgMNHy9Do/preview)



Wartość każdego pola zależy od grupy serwerowej. Na przykład, jeśli utworzysz dodatkową grupę serwerową o nazwie **Member** i tylko oni mają mieć dostęp do kanału, to wartość musi odpowiadać tej grupie serwerowej. Załóżmy, że grupa serwerowa ma wartość uprawnienia 50, wtedy w poszczególnych polach musi być ustawione **50**.



### Uprawnienia: Grupy serwerowe

Dla uprawnień grup serwerowych istnieje kilka kategorii, które można dostosować. Należą do nich:

- Opcje ogólne
- Zarządzanie grupami
- Dodawanie, usuwanie użytkowników, zarządzanie kluczami uprawnień
- Zarządzanie użytkownikami (przesuwanie, kick, ban)
- Zarządzanie kanałami
- Podstawy


![](https://screensaver01.zap-hosting.com/index.php/s/RxcYJCsar7C3KnM/preview)



Możesz zmieniać te uprawnienia według własnych potrzeb. Jeśli chcesz wprowadzić bardziej zaawansowane zmiany w uprawnieniach, możesz to zrobić, przechodząc do opcji swojego klienta Teamspeak, następnie do Aplikacji i aktywując **Zaawansowany system uprawnień**.


<InlineVoucher />