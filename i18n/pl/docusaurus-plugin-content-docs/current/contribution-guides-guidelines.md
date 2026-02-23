---
id: contribution-guides-guidelines
title: Wytyczne do Poradników
description: "Dowiedz się, jak tworzyć spójną, wysokiej jakości dokumentację, która poprawia doświadczenie czytelnika i klarowność → Sprawdź teraz"
sidebar_label: Wytyczne
---

![Guides Banner](https://screensaver01.zap-hosting.com/index.php/s/4aaqq3zctZFW4JJ/preview)

Aby zapewnić, że treści w naszych ZAP-Docs zawsze pozostają spójne pod względem jakości i stylu, stworzyliśmy zestaw wytycznych do stosowania podczas tworzenia lub edytowania dokumentacji. Musisz **ściśle** przestrzegać naszych wytycznych, aby Twoja sugestia i ostateczny pull request zostały szybko przetworzone. Co ważniejsze, zapewni to naszym czytelnikom lepsze i bardziej spójne doświadczenie wysokiej jakości podczas czytania i korzystania z poradników.

Nasze wytyczne dotyczące tworzenia poradników podzielone są na następujące sekcje:

- Struktura
- Styl
- Formatowanie
- Terminologia

Zalecamy zapoznanie się z tymi sekcjami przynajmniej raz przed rozpoczęciem pisania treści. To także dobre miejsce do sprawdzenia, jeśli masz wątpliwości, jak podejść do czegoś podczas tworzenia.

## Struktura

Wszystkie nasze poradniki w ZAP-Docs mają stosunkowo spójną strukturę, która zaczyna się od krótkiego wprowadzenia wraz z wymaganiami wstępnymi lub krokami przygotowawczymi, następnie główna treść i krótkie podsumowanie.

Struktura może być czasem zmieniona w zależności od typu poradnika. Można to omówić z zespołem ZAP-Docs w trakcie składania pierwszej sugestii. Możesz zobaczyć, jak korzystać z nagłówków w sekcji o nagłówkach, odbywa się to przez tradycyjny Markdown.

Typowa struktura, której oczekujemy, zawiera następujące nagłówki:

- **Tytuł strony** (H1) - Ustawiany przez metadane `title` na górze strony.
- **Wprowadzenie** (H2) - Krótkie 1-2 zdania wyjaśniające temat poradnika i co najważniejsze, co poradnik ma osiągnąć.
- **Przygotowanie** (H2) - Ten nagłówek jest **opcjonalny**. Jest potrzebny tylko, jeśli istnieją pewne wymagania wstępne lub kroki przygotowawcze, które czytelnik musi wykonać przed rozpoczęciem poradnika. Na przykład możesz tu odwołać się do naszego poradnika [SSH Initial Access](vserver-linux-ssh.md), jeśli użytkownik musi najpierw zalogować się na swój serwer. Możesz też podać wymagania dotyczące oprogramowania i/lub sprzętu albo szybkie instrukcje, jak przygotować np. zaporę sieciową. Zalecamy przeglądanie naszego [ZAP-Docs](https://zap-hosting.com/guides), aby sprawdzić, czy są poradniki, które obejmują te kroki i jeśli tak, to linkować do nich.
- **Główny temat** (H2) - To jest pierwsza główna sekcja poradnika. W wielu przypadkach będzie to **Instalacja**, po której następują podsekcje opisujące kolejne kroki. Ale nie zawsze musi tak być, np. poradniki informacyjne mogą mieć inny główny temat.
- Opcjonalnie: **Podtemat 1** (H3)
- Opcjonalnie: **Podtemat 2** (H3)
- ...
- Opcjonalnie: **Inny temat** (H2)
- **Podsumowanie** (H2) - Na koniec poradnika powinieneś zamknąć go 1-3 zdaniami, wyjaśniając, co czytelnik osiągnął i podając odnośnik do naszego Zespołu Wsparcia, jeśli czytelnik nadal ma problemy.

:::info Użycie podnagłówków (H3 & H4)
Zachęcamy do używania nagłówków H3, aby tworzyć podsekcje w ramach głównych sekcji H2, co pozwala lepiej zorganizować większe fragmenty treści. Przykład widać w sekcji **Główny temat** powyżej.

Możesz też używać nagłówków H4. Są przydatne, jeśli chcesz stworzyć kolejną podsekcję, ale nie chcesz, aby pojawiła się ona w spisie treści po prawej stronie. Są też dobre, gdy chcesz podzielić sekcję H3 na jeszcze mniejsze części.

Jeśli używasz podnagłówków, zwykle sens ma mieć co najmniej dwa lub więcej podnagłówków w ramach nadrzędnego nagłówka, inaczej nie ma sensu mieć tylko jednego podnagłówka w sekcji głównej.
:::

W przyszłości dodamy szablony z gotowym Markdownem, które będą świetnym punktem startowym do tworzenia nowych stron. Wkrótce to dodamy.

### Tytuły

Tytuły poradników powinny być krótkie i oparte na głównym celu poradnika, który napisałeś. Przemyśl dokładnie, co czytelnik osiągnie po przeczytaniu poradnika, np. instalację oprogramowania lub przekazanie informacji o konkretnym temacie.

Tytuł powinien być poprzedzony kategorią produktu, do której poradnik się odnosi, i to też powinno być miejsce, gdzie umieścisz poradnik w sidebarze. Możesz łatwo sprawdzić inne poradniki w tej samej sekcji, aby zobaczyć ich prefiks.

Przykład dobrego tytułu poradnika dotyczącego produktu VPS to: `VPS: SteamCMD Linux Setup`

### Wprowadzenie

Wprowadzenia do poradników powinny być stosunkowo krótkie i na temat, zwykle 1-2 zdania. W treści powinieneś krótko opisać temat i co najważniejsze, wyjaśnić, co poradnik pokaże czytelnikowi, informując o końcowym celu.

Przykład idealnego wprowadzenia do poradnika o SteamCMD:

- **1. zdanie**: SteamCMD to niezbędne narzędzie potrzebne do instalacji serwerów dedykowanych dla wielu gier, takich jak Palworld, Enshrouded i inne.
- **2. zdanie**: W tym poradniku przejdziemy przez proces pierwszej konfiguracji SteamCMD na Twoim serwerze Linux. W przykładach użyjemy Ubuntu, ale proces powinien być podobny dla innych dystrybucji.

Jak widać, przykład krótko podsumowuje temat poradnika i przedstawia cel dla czytelnika.

### Przygotowanie

Sekcja przygotowania jest przydatna do wyjaśnienia wszelkich wymagań wstępnych, które czytelnik musi spełnić, aby móc korzystać z poradnika. Mogą to być wymagania dotyczące oprogramowania lub sprzętu, instrukcje przygotowania oprogramowania, np. zapory sieciowej, lub po prostu wskazówki, jak zalogować się na serwer przez SSH lub RDP.

Zdecydowanie polecamy przeglądanie naszego [ZAP-Docs](https://zap-hosting.com/guides), aby znaleźć poradniki, które mogą obejmować lub odnosić się do kroków przygotowawczych, które chcesz uwzględnić. Jeśli istnieje poradnik na dany temat, np. [SSH Initial Access](vserver-linux-ssh.md), powinieneś go zlinkować i poinformować czytelnika, aby z niego skorzystał przed kontynuacją.

Typowe wymagania wstępne w poradnikach to:

- Wymagane oprogramowanie (np. Git, Node.js, Python, Docker)
- Tutoriale, które pomogą czytelnikowi zdobyć podstawową wiedzę (np. inna strona ZAP-Docs)
- Konta użytkowników, takie jak API
- Wymagane ustawienia (np. DNS/SSL)

Przykład dla poradnika o Reverse Proxy:

```
Aby skonfigurować reverse proxy, potrzebujesz serwera Linux do hostowania proxy i musisz się na niego połączyć. Skorzystaj z naszego poradnika [SSH Initial Access](vserver-linux-ssh.md), jeśli potrzebujesz pomocy. Potrzebujesz też dostępu do domeny, którą posiadasz. Dla każdej subdomeny, której chcesz użyć, powinieneś utworzyć rekord DNS typu `A`, wskazujący na adres IP Twojego serwera Linux.
```

### Główny temat

Teraz czas na napisanie głównej części poradnika. Możesz swobodnie korzystać z nagłówków H2, H3 i H4, aby odpowiednio zorganizować poradnik. Ma to sens, aby używać H2 dla dużych sekcji, a następnie dzielić je na podsekcje H3 i/lub H4.

W wielu przypadkach, szczególnie w poradnikach dotyczących instalacji oprogramowania, prawdopodobnie użyjesz nagłówka **Instalacja**, podzielonego na różne podsekcje H3. Jeśli masz problem z ustaleniem właściwej struktury, nie martw się — pomożemy Ci podczas fazy sugestii, aby zaplanować dobrze przemyślaną strukturę poradnika.

W każdej sekcji warto dodać krótkie zdania wprowadzające i zamykające, które informują czytelnika, co do tej pory zrobił i co będzie robił dalej. Oczywiście ostatnia główna sekcja nie musi mieć zdania zamykającego, bo naturalnie przejdzie do podsumowania.

Przykłady takich zdań:

- **Zdanie wprowadzające**: W tej sekcji przejdziesz przez proces konfiguracji, aby dostosować oprogramowanie do swoich potrzeb.
- **Zdanie zamykające**: Po przygotowaniu konfiguracji i zapisaniu pliku, przejdź do następnej sekcji, aby skonfigurować konto administratora i rozpocząć korzystanie z oprogramowania.

Dzięki takim zdaniom czytelnik ma ważny kontekst, co zapewnia płynność poradnika. Pamiętaj, aby zawsze pisać w drugiej osobie (np. „Stworzysz”) zamiast pierwszej osoby.

### Podsumowanie

Na koniec jest podsumowanie poradnika. Ta sekcja powinna zamknąć poradnik w 1-3 zdaniach, wyjaśniając, co czytelnik osiągnął i podając odnośniki do dalszej lektury lub poradników, które mogą poszerzyć jego wiedzę.

Warto tu zlinkować istniejące poradniki ZAP-Docs, zwłaszcza jeśli naturalnie wynikają z Twojego poradnika. Polecamy też podać kontakt do naszego Zespołu Wsparcia, jeśli czytelnik nadal ma problemy.

Przykład świetnego podsumowania:

```
Udało Ci się pomyślnie skonfigurować oprogramowanie na serwerze Linux! Polecamy przeglądać nasze poradniki dotyczące usług Linux w tej sekcji, aby zainstalować kolejne usługi.

W razie pytań lub potrzeby pomocy, nie wahaj się skontaktować z naszym zespołem wsparcia, który jest dostępny codziennie, aby Ci pomóc! 🙂
```

## Styl

Styl pisania w dokumentacji ZAP-Hosting opiera się na naszym przekonaniu o tworzeniu wysokiej jakości, praktycznych i łatwo dostępnych poradników, które wspierają szeroki zakres tematów i czytelników na każdym poziomie doświadczenia.

### Techniczny i poprawny

Nasze artykuły mają być jak najbardziej technicznie poprawne i aktualne z najnowszymi informacjami branżowymi. Oczekujemy, że artykuły nie tylko pozwolą użytkownikowi osiągnąć cel, np. nauczyć się, zbudować lub skonfigurować coś nowego, ale też zrozumieć, co zrobił podczas artykułu. Każdy krok w poradniku powinien mieć jasny cel i wyjaśnienie, oferując dodatkowe opcje i/lub flagi tam, gdzie to stosowne. Zawsze informuj czytelnika, co robi i dlaczego wykonuje dane czynności.

Autorzy powinni zawsze dokładnie sprawdzić i przetestować swoje poradniki, aby upewnić się, że wszystko jest technicznie poprawne i działa zgodnie z zamierzeniem, zanim wyślą pull request. Zespół ZAP-Hosting przeczyta i przetestuje poradnik, aby zapewnić spójność i poprawność merytoryczną lub zasugeruje poprawki, jeśli znajdzie błędy.

:::tip
Zawsze polecamy autorom sprawdzić tekst pod kątem pisowni i gramatyki przed wysłaniem pull requesta. Przydatna strona do tego to: https://languagetool.org/
:::

### Praktyczny i użyteczny

Po przeczytaniu artykułu czytelnik powinien nauczyć się, zbudować lub skonfigurować coś od początku do końca. Nasze poradniki mają wspierać czytelników na każdym poziomie doświadczenia, dlatego Twoje treści powinny dokładnie omawiać temat, aby czytelnik zdobył wiedzę i/lub osiągnął cel. Jako autor powinieneś uwzględnić wszystkie szczegóły, w tym wymagania wstępne. Linkuj do stron zewnętrznych tylko wtedy, gdy nie ma odpowiedniej dokumentacji w ZAP-Docs lub gdy chcesz dać użytkownikowi dodatkowe informacje, które nie są konieczne, ale mogą poszerzyć jego wiedzę techniczną. Linki zewnętrzne nie powinny prowadzić do dokumentacji konkurencji.

### Przyjazny, formalny i wyczerpujący

Chcemy, aby nasza dokumentacja była nowoczesna i przyjazna, aby była dostępna dla każdego czytelnika, ale jednocześnie formalna. W całym poradniku staramy się, aby ton był odpowiedni dla wszystkich czytelników, niezależnie od doświadczenia czy bariery językowej.

Ponieważ poradniki mają przede wszystkim edukować i pomóc czytelnikowi osiągnąć efekt, oczekujemy, że autorzy będą pisać w drugiej osobie (np. „Musisz...”) zamiast pierwszej osoby (np. „Myślę...”), aby utrzymać zaangażowanie czytelnika i skupić się na nim.

Na koniec wszyscy autorzy muszą przestrzegać naszego kodeksu postępowania, aby poradniki były akceptujące dla każdego, niezależnie od wieku, pochodzenia etnicznego, tożsamości płciowej, poziomu doświadczenia, narodowości, religii, poglądów politycznych, orientacji seksualnej, statusu społeczno-ekonomicznego czy wyborów technologicznych. Należy unikać języka potencjalnie obraźliwego i wszelkich treści odnoszących się do powyższych tematów.

## Formatowanie

Nasza dokumentacja jest formatowana za pomocą języka Markdown, który jest szeroko stosowany i stosunkowo prosty w użyciu. Przejdź do poniższych sekcji, aby zrozumieć, jak go używamy.

:::tip
Po więcej przykładów i szczegółowych wyjaśnień funkcji Markdown zajrzyj do [Markdown Guide](https://www.markdownguide.org/cheat-sheet/).
:::

### Nagłówki

Nagłówki to jedna z najważniejszych opcji formatowania, używana do logicznego i przejrzystego podziału stron. Główny tytuł to nagłówek H1, ale nie powinieneś go używać w treści. Zamiast tego użyj metadanych `title` na górze pliku poradnika, które odpowiadają za tytuł.

W naszych poradnikach nagłówki H2 dzielą poradnik na główne sekcje. Następnie nagłówki H3 dzielą główne sekcje na podsekcje. Przykładem może być podział dużej sekcji na kilka kroków, aby ułatwić śledzenie poradnika. Na koniec jest też nagłówek H4, który rzadziej używamy, ale służy do dalszego dzielenia podsekcji i nie pojawia się w spisie treści.

:::info
Jeśli używasz podnagłówków (np. H3 pod nagłówkami H2), upewnij się, że w danej sekcji jest co najmniej dwa nagłówki tego samego poziomu, inaczej to niepoprawne użycie.
:::

Przykład użycia nagłówków:

```
## Instalacja
H2 - Główna sekcja

### Pobieranie plików gry
H3 - Podsekcja H2

#### Przez SteamCMD
H4 - Podsekcja H3

#### Ręcznie przez GitHub
H4 - Podsekcja H3

### Przygotowanie konfiguracji
H3 - Podsekcja H2

### Uruchomienie serwera
H3 - Podsekcja H2
```

### Formatowanie w tekście

Używamy różnych formatowań w tekście, aby poprawić czytelność poradników i dopasować się do czytelników o różnym poziomie technicznym. Poniżej opisujemy zastosowanie każdego z nich.

#### Pogrubienie

Pogrubienie służy głównie do podkreślenia informacji. Przykłady:

- Zmiana kontekstu między krokami
- Nazwy hostów, dane logowania i nazwy użytkowników
- Kluczowa terminologia

Użyj podwójnej gwiazdki po obu stronach tekstu, np. `**cześć**` daje **cześć**.

#### Kursywa

Kursywa służy głównie do wprowadzenia nowych technicznych słów kluczowych w artykule. Na przykład: dziś skonfigurujemy *reverse proxy*.

Użyj pojedynczej gwiazdki po obu stronach tekstu, np. `*ZAP-Hosting - Więcej MOCY!*` daje *ZAP-Hosting - Więcej MOCY!*.

#### Kod w linii

Formatowanie kodu w linii służy do wyświetlania bardziej technicznych informacji, np. adresów URL. Przykłady:

- Nazwy plików i ścieżki (np. `C:/User/[twoja_nazwa]/AppData....test.png`)
- URL-e (np. `https://zap-hosting.com`)
- Porty (np. `:30120`)
- Komendy (np. `ipconfig`)
- Zapytania SQL (np. `SELECT * FROM servers`)
- Skróty klawiszowe (np. `ENTER` lub `CTRL + C`)

#### Tabele

Tabele są przydatne do prezentowania dużej ilości powtarzalnych informacji, np. komend, opisów i zastosowań w grze. Przykład:

```
| Komenda    | Opis                    | Użycie                |
| ---------- | ----------------------- | --------------------- |
| /help      | Wysyła komendę pomocy   | /help [kategoria]     |
| /stop      | Zatrzymuje serwer       | /stop [true/false]    |
```

#### Bloki kodu

Bloki kodu są bardzo przydatne w poradnikach, które zawierają komendy, skrypty, wyjścia terminala i inne.

Aby użyć bloku kodu, otocz tekst potrójnymi backtickami ``` z obu stron. Możesz też podać język programowania po pierwszych backtickach, aby poprawnie sformatować składnię. Przykład z JavaScript:

```js
function hello(name) {
    console.log(name)
}

var server = "ZAP-Hosting"
hello(server)
```

### Użycie admonicji

W treści możesz użyć admonicji, aby wyróżnić pewne informacje pod jednym z 5 możliwych typów, opisanych poniżej.

Składnia jest taka sama, zmieniając tylko słowo kluczowe na typ admonicji. Przykład:

```
:::note
To jest notatka! Zmień słowo kluczowe, aby zmienić typ.
:::
```

#### Notatka

:::note Notatka! (Opcjonalnie)
Używaj tego tagu, aby pokazać dodatkowe informacje, które mogą być przydatne, ale nie są kluczowe.
:::

#### Wskazówka

:::tip Wskazówka! (Opcjonalnie)
Umieść tu swoje porady z doświadczenia.
:::

#### Informacja

:::info Informacja! (Opcjonalnie)
Jeśli jest ważna informacja, którą użytkownik powinien znać, umieść ją tutaj.
:::

#### Ostrzeżenie

:::caution Ostrzeżenie! (Opcjonalnie)
Jeśli w poradniku jest coś, na co użytkownik powinien uważać, użyj tego tagu.
:::

#### Niebezpieczeństwo

:::danger Niebezpieczeństwo! (Opcjonalnie)
Używaj tego tagu, gdy trzeba podkreślić krytyczne informacje, np. znane błędy lub przestarzałe funkcje.
:::

### Zrzuty ekranu

Zrzuty ekranu to świetny sposób na wizualne prowadzenie czytelnika przez kroki i zalecamy ich używanie tam, gdzie to możliwe. Upewnij się, że wszystko na zrzutach jest po angielsku, ponieważ nasza dokumentacja jest po angielsku i te same zrzuty będą używane w innych językach. Zrzuty powinny mieć wystarczająco wysoką rozdzielczość, aby wszystko było czytelne. Unikaj małych lub mocno przyciętych obrazów.

Aby dodać zrzut ekranu, użyj składni, zamieniając `your_url` na adres obrazka:

```
![](your_url)
```

Najlepiej użyć serwisu takiego jak Imgur do uploadu i użycia obrazka, albo przeciągnąć go bezpośrednio do pola edycji na GitHubie, co automatycznie go załaduje.

## Terminologia

W całej dokumentacji używamy wielu kluczowych terminów. Oczekujemy, że będziesz stosować amerykańską angielską pisownię, aby zachować spójność. W tej sekcji standaryzujemy najczęściej używane terminy.

### Produkty ZAP-Hosting

Odwołując się do produktów ZAP-Hosting, zawsze używaj poprawnej nazwy, pisowni i wielkości liter. Sprawdź to na [stronie ZAP-Hosting](https://zap-hosting.com), jak produkt jest tam opisany.

### Atrybuty definiowane przez użytkownika

W większości poradników konfiguracja opcji takich jak użytkownicy, nazwy hostów, domeny, adresy IP i URL-e wymaga użycia własnych danych zamiast naszych zastępczych.

Domyślnie zawsze używaj `[your_attribute]`, aby odróżnić elementy statyczne od unikalnych, gdzie `attribute` zastępujesz typem atrybutu. Na przykład, mówiąc o IP, napisz `[your_server_ip]`, a mówiąc o URL-u `http://[your_server_ip]:30120`. To jasno pokazuje, co czytelnik musi zmienić według swojej konfiguracji. Podaj też wyjaśnienie lub notatkę, co czytelnik musi zmienić, gdy po raz pierwszy wspominasz o atrybucie.

Używaj `zaphosting` jako domyślnej nazwy hosta, użytkownika lub bazy danych.

### Oprogramowanie

Wspominając o oprogramowaniu, stosuj poprawną pisownię i wielkość liter nazwy. Jeśli strona oprogramowania nie jest spójna, zachowaj jednolitą pisownię w całym artykule.

Podlinkuj stronę oprogramowania przy pierwszym wspomnieniu, jeśli jest dostępna oficjalna strona.