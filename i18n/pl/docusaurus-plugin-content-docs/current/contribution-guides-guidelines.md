---
id: contribution-guides-guidelines
title: Wytyczne do poradników
description: "Dowiedz się, jak tworzyć spójną, wysokiej jakości dokumentację, która poprawia doświadczenie czytelnika i przejrzystość → Sprawdź teraz"
sidebar_label: Wytyczne
---

![Baner poradników](https://screensaver01.zap-hosting.com/index.php/s/4aaqq3zctZFW4JJ/preview)

Aby zapewnić, że treści w naszych ZAP-Docs zawsze pozostają spójne pod względem jakości i stylu, stworzyliśmy zestaw wytycznych do stosowania podczas tworzenia lub edytowania zawartości dokumentacji. Musisz **ściśle** przestrzegać naszych wytycznych, aby Twoja sugestia i ostateczny pull request zostały szybko przetworzone. Co ważniejsze, zapewni to naszym czytelnikom lepsze i bardziej spójne doświadczenie wysokiej jakości podczas czytania i korzystania z poradników.

Nasze wytyczne dotyczące tworzenia poradników są podzielone na następujące sekcje:

- Struktura
- Styl
- Formatowanie
- Terminologia

Zalecamy zapoznanie się z tymi sekcjami przynajmniej raz przed rozpoczęciem pisania jakiejkolwiek treści. To także przydatne miejsce do odwołania się, jeśli masz wątpliwości, jak podejść do czegoś podczas tworzenia.

## Struktura

Wszystkie nasze poradniki w ZAP-Docs mają stosunkowo spójną strukturę, która zaczyna się od krótkiego wprowadzenia wraz z wszelkimi wymaganiami wstępnymi lub krokami przygotowawczymi, następnie główna treść i krótkie podsumowanie.

Struktura może być czasem zmieniana w zależności od rodzaju poradnika. Można to omówić z zespołem ZAP-Docs podczas składania pierwszej sugestii. Możesz zobaczyć, jak korzystać z nagłówków w sekcji nagłówki, odbywa się to za pomocą tradycyjnego Markdown.

Typowa struktura, której oczekujemy, zawiera następujące nagłówki:

- **Tytuł strony** (H1) - Ustawiany przez metadane `title` na górze strony.
- **Wprowadzenie** (H2) - Krótkie 1-2 zdania wyjaśniające temat poradnika i co najważniejsze, co poradnik ma osiągnąć.
- **Przygotowanie** (H2) - Ten nagłówek jest **opcjonalny**. Jest potrzebny tylko, jeśli istnieją pewne wymagania wstępne lub kroki przygotowawcze, które czytelnik musi wykonać przed rozpoczęciem poradnika. Na przykład możesz tu odwołać się do naszego poradnika [SSH Initial Access](vserver-linux-ssh.md), jeśli użytkownik musi najpierw zalogować się na swój serwer. Możesz też przedstawić wymagania sprzętowe i/lub programowe albo szybkie instrukcje przygotowania np. zapory sieciowej. Zalecamy przeglądanie naszego [ZAP-Docs](https://zap-hosting.com/guides), aby sprawdzić, czy istnieją poradniki obejmujące te kroki i jeśli tak, linkować do nich.
- **Główny temat** (H2) - To jest pierwsza główna sekcja poradnika. W wielu przypadkach będzie to zapewne **Instalacja**, po której następują różne podsekcje opisujące poszczególne etapy procesu. Ale nie zawsze musi tak być, np. poradniki informacyjne mogą mieć inny główny temat.
- Opcjonalnie: **Podtemat 1** (H3)
- Opcjonalnie: **Podtemat 2** (H3)
- ...
- Opcjonalnie: **Inny temat** (H2)
- **Podsumowanie** (H2) - Na koniec poradnika powinieneś zamknąć go 1-3 zdaniami, wyjaśniając, co czytelnik osiągnął i podając odnośnik do naszego Zespołu Wsparcia, jeśli nadal ma problemy.

:::info Użycie podnagłówków (H3 & H4)
Zachęcamy do używania nagłówków H3, aby tworzyć podsekcje w ramach głównych sekcji H2, co pomaga lepiej zorganizować większe fragmenty treści. Przykład można zobaczyć w sekcji **Główny temat** powyżej.

Możesz też używać nagłówków H4. Są przydatne, jeśli chcesz stworzyć kolejną podsekcję, ale nie chcesz, aby pojawiła się ona w spisie treści po prawej stronie. Są też pomocne, gdy chcesz podzielić sekcję H3 na jeszcze mniejsze części.

Jeśli używasz podnagłówków, zwykle sens ma mieć co najmniej dwa lub więcej podnagłówków w obrębie nadrzędnego nagłówka, w przeciwnym razie zwykle nie ma sensu mieć tylko jeden podnagłówek w głównym nagłówku.
:::

W przyszłości dodamy szablony z gotowym Markdownem, które będą świetnym punktem startowym do tworzenia nowych stron. Wkrótce to dodamy.

### Tytuły

Tytuły poradników powinny być krótkie i oparte na ogólnym celu poradnika, który napisałeś. Przemyśl dokładnie, co czytelnik osiągnie po przeczytaniu poradnika, np. instalację oprogramowania lub przekazanie informacji o konkretnym temacie.

Tytuł powinien być poprzedzony kategorią produktu, do której poradnik się odnosi, i to też powinno być miejsce, gdzie umieściłeś poradnik w sidebarze. Możesz łatwo sprawdzić inne poradniki w tej samej sekcji, aby zobaczyć ich prefiks.

Przykład dobrego tytułu poradnika dotyczącego produktu VPS to: `VPS: SteamCMD Linux Setup`

### Wprowadzenie

Wprowadzenia do poradników powinny być stosunkowo krótkie i na temat, zwykle 1-2 zdania. W treści powinieneś krótko opisać temat i co najważniejsze, wyjaśnić, co poradnik przedstawi czytelnikowi, informując go o końcowym celu.

Przykład idealnego wprowadzenia do poradnika o SteamCMD:

- **1 zdanie**: SteamCMD to niezbędne narzędzie potrzebne do instalacji serwerów dedykowanych dla wielu gier, w tym Palworld, Enshrouded i innych.
- **2 zdanie**: W tym poradniku przejdziemy przez proces pierwszej konfiguracji instalacji SteamCMD na Twoim serwerze Linux. W przykładach użyjemy Ubuntu, ale proces powinien być bardzo podobny dla innych dystrybucji.

Jak widać, wprowadzenie krótko podsumowuje temat poradnika i przedstawia ogólny cel dla czytelnika.

### Przygotowanie

Sekcja przygotowania jest przydatna do wyjaśnienia wszelkich wymagań wstępnych, które czytelnik musi spełnić, zanim będzie mógł podążać za poradnikiem. Mogą to być wymagania sprzętowe lub programowe, instrukcje przygotowania oprogramowania, np. zapory sieciowej, lub po prostu wskazówki, jak zalogować się na serwer przez SSH lub RDP.

Zdecydowanie zalecamy przeglądanie naszego [ZAP-Docs](https://zap-hosting.com/guides), aby znaleźć poradniki, które mogą obejmować lub odnosić się do kroków przygotowawczych, które chcesz uwzględnić. Jeśli istnieje poradnik na dany temat, np. [SSH Initial Access](vserver-linux-ssh.md), powinieneś do niego linkować i poinformować czytelnika, aby z niego skorzystał przed kontynuacją.

Typowe wymagania wstępne w poradnikach to:

- Wymagane oprogramowanie (np. Git, Node.js, Python, Docker)
- Tutoriale, które pomogą czytelnikowi zdobyć podstawową wiedzę (np. inna strona ZAP-Docs)
- Konta użytkowników, takie jak API
- Wymagane ustawienia (np. DNS/SSL)

Przykład dla poradnika o Reverse Proxy:

```
Aby skonfigurować reverse proxy, potrzebujesz serwera Linux do hostowania proxy i powinieneś się do niego połączyć. Skorzystaj z naszego poradnika [SSH Initial Access](vserver-linux-ssh.md), jeśli potrzebujesz pomocy z tym krokiem. Będziesz także potrzebować dostępu do domeny, którą posiadasz. Dla każdej subdomeny, której chcesz użyć, powinieneś utworzyć rekord DNS typu `A`, wskazujący na adres IP Twojego serwera Linux.
```

### Główny temat

Teraz czas na napisanie głównej części poradnika. Możesz swobodnie korzystać z nagłówków H2, H3 i H4, aby odpowiednio zorganizować poradnik. Ma to sens, aby używać H2 dla dużych sekcji, a następnie dzielić je na podsekcje za pomocą H3 i/lub H4.

W wielu przypadkach, szczególnie w poradnikach dotyczących instalacji oprogramowania, prawdopodobnie użyjesz nagłówka **Instalacja**, podzielonego na różne podsekcje H3. Jeśli masz problem z ustaleniem właściwej struktury, nie martw się – podczas fazy sugestii współpracujemy z Tobą, aby zaplanować dobrze przemyślaną strukturę poradnika.

W każdej sekcji warto dodać krótkie zdania wprowadzające i zamykające, które informują czytelnika, co do tej pory zrobił i co będzie robił dalej. Oczywiście, ostatnia główna sekcja nie musi mieć zdania zamykającego, bo naturalnie przejdzie do podsumowania.

Przykłady takich zdań:

- **Zdanie wprowadzające**: W tej sekcji przejdziesz przez proces konfiguracji, aby dostosować oprogramowanie do swoich potrzeb.
- **Zdanie zamykające**: Po przygotowaniu konfiguracji i zapisaniu pliku, przejdź do następnej sekcji, aby skonfigurować konto administratora i rozpocząć korzystanie z oprogramowania.

Dzięki takim zdaniom czytelnik ma ważny kontekst, co zapewnia płynność poradnika. Pamiętaj, aby zawsze pisać w drugiej osobie (np. „Stworzysz”), a nie w pierwszej osobie.

### Podsumowanie

Na koniec jest podsumowanie poradnika. Ta sekcja powinna zamknąć poradnik w 1-3 zdaniach, wyjaśniając, co czytelnik osiągnął i podając odnośniki do dalszej lektury lub poradników, które mogą poszerzyć jego wiedzę.

Warto tu podlinkować istniejące poradniki ZAP-Docs, zwłaszcza jeśli naturalnie wynikają z Twojego poradnika. Zalecamy też podanie kontaktu do naszego Zespołu Wsparcia, jeśli czytelnik nadal ma problemy.

Przykład świetnego podsumowania:

```
Udało Ci się pomyślnie skonfigurować oprogramowanie na swoim serwerze Linux! Polecamy przeglądanie naszych poradników dotyczących usług Linux w tej sekcji, aby zainstalować kolejne usługi.

W razie dalszych pytań lub potrzeby pomocy, nie wahaj się skontaktować z naszym zespołem wsparcia, który jest dostępny codziennie, aby Ci pomóc! 🙂
```

## Styl

Styl pisania w dokumentacji ZAP-Hosting opiera się na naszym przekonaniu o tworzeniu wysokiej jakości, praktycznych i łatwo dostępnych poradników, które wspierają szeroki zakres tematów i czytelników na każdym poziomie doświadczenia.

### Techniczny i poprawny

Nasze artykuły mają być jak najbardziej technicznie poprawne i aktualne z najnowszymi informacjami branżowymi. Oczekujemy, że artykuły nie tylko pozwolą użytkownikowi osiągnąć końcowy cel nauki, budowy lub konfiguracji, ale także zrozumieć, co zrobił podczas artykułu. Każdy krok w poradniku powinien mieć jasny cel i wyjaśnienie, oferując dodatkowe opcje i/lub flagi tam, gdzie to stosowne. Zawsze powinieneś informować czytelnika, co robi i dlaczego wykonuje dane czynności.

Autorzy powinni zawsze dokładnie sprawdzić i przetestować swoje poradniki, aby upewnić się, że wszystko jest technicznie poprawne i działa zgodnie z zamierzeniem, zanim wyślą pull request. Zespół ZAP-Hosting przeczyta i przetestuje Twój poradnik tam, gdzie to możliwe, aby zapewnić spójność i poprawność merytoryczną lub zasugerować poprawki, jeśli zauważy błędy.

:::tip
Zawsze zalecamy, aby autorzy sprawdzali swoje teksty narzędziem do korekty pisowni, aby upewnić się, że ortografia i gramatyka są poprawne przed wysłaniem pull requesta. Przydatna strona do tego to: https://languagetool.org/
:::

### Praktyczny i użyteczny

Po przeczytaniu artykułu czytelnik powinien nauczyć się, zbudować lub skonfigurować coś od początku do końca. Nasze poradniki mają wspierać czytelników na każdym poziomie doświadczenia, dlatego Twoje wkłady powinny w pełni eksplorować temat, aby czytelnik zdobył wiedzę i/lub osiągnął cel. Oznacza to, że jako autor musisz dokładnie omówić temat, uwzględniając wszystkie niezbędne szczegóły, w tym wymagania wstępne. Jako autor powinieneś kierować czytelników na zewnętrzne strony tylko wtedy, gdy nie ma odpowiedniej dokumentacji w ZAP-Docs lub gdy chcesz, aby użytkownik zdobył dodatkowe informacje, które nie są konieczne do poradnika, ale mogą poszerzyć jego wiedzę techniczną. Linki zewnętrzne nie powinny prowadzić do dokumentacji konkurencji.

### Przyjazny, formalny i wyczerpujący

Oczekujemy, że nasza dokumentacja będzie nowoczesna i przyjazna, aby była dostępna dla każdego czytelnika, ale jednocześnie zachowa formalny ton. W całym poradniku staramy się, aby styl pisania był odpowiedni dla wszystkich czytelników, niezależnie od doświadczenia czy bariery językowej.

Ponieważ poradniki skupiają się na wsparciu czytelnika w nauce i osiągnięciu rezultatu, oczekujemy, że autorzy będą pisać w drugiej osobie (np. „Musisz...”), a nie w pierwszej osobie (np. „Myślę...”), aby utrzymać zaangażowanie czytelnika i skupić się na nim.

Na koniec wszyscy autorzy muszą przestrzegać naszego kodeksu postępowania, aby poradniki były akceptujące dla każdego, niezależnie od wieku, pochodzenia etnicznego, tożsamości płciowej, poziomu doświadczenia, narodowości, religii, poglądów politycznych, orientacji seksualnej, statusu społeczno-ekonomicznego czy wyborów technologicznych. Należy unikać języka potencjalnie obraźliwego i wszelkich treści odnoszących się do powyższych tematów.

## Formatowanie

Nasza dokumentacja jest formatowana za pomocą języka Markdown, który jest szeroko stosowany i stosunkowo prosty w użyciu. Przejdź do poniższych sekcji, aby zrozumieć, które elementy stosujemy i jak ich używać.

:::tip
Po więcej przykładów i szczegółowych wyjaśnień funkcji Markdown zajrzyj do [Markdown Guide](https://www.markdownguide.org/cheat-sheet/), gdzie znajdziesz dodatkowe informacje.
:::

### Nagłówki

Nagłówki to jedna z najważniejszych opcji formatowania, używana do logicznego i przejrzystego podziału stron. Główny tytuł to nagłówek H1, jednak nigdy nie powinieneś go używać w treści. Zamiast tego powinieneś używać metadanych `title` na górze pliku poradnika, które odpowiadają za ten nagłówek.

W naszych poradnikach nagłówki H2 służą do podziału poradnika na główne sekcje. Następnie nagłówki H3 dzielą główne sekcje na podsekcje. Przykładem może być podział głównej sekcji na kilka kroków, aby ułatwić śledzenie poradnika. Na koniec jest też nagłówek H4, który rzadziej jest używany, ale służy do dalszego dzielenia podsekcji i nie pojawia się w spisie treści.

:::info
Jeśli używasz podnagłówków (np. H3 pod nagłówkami H2), upewnij się, że w danej sekcji jest co najmniej dwa nagłówki tego samego poziomu, w przeciwnym razie jest to niepoprawne użycie.
:::

Przykład użycia nagłówków:

```
## Instalacja
H2 - Główna sekcja

### Pobieranie plików serwera gier
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

Używamy różnych formatowań inline, aby poprawić czytelność poradników i dopasować się do czytelników o różnym poziomie technicznym. Zapoznaj się z poniższymi zasadami.

#### Pogrubienie

Pogrubienie służy głównie do podkreślenia informacji. Przykłady zastosowań:

- Zmiana kontekstu między krokami
- Nazwy hostów, dane logowania i nazwy użytkowników
- Kluczowa terminologia

Wystarczy użyć podwójnych gwiazdek wokół tekstu, np. `**cześć**` da **cześć**.

#### Kursywa

Kursywa służy głównie do wprowadzenia nowych technicznych słów kluczowych w artykule. Na przykład: dziś skonfigurujemy *reverse proxy*.

Używa się pojedynczej gwiazdki wokół tekstu, np. `*ZAP-Hosting - Więcej MOCY!*` da *ZAP-Hosting - Więcej MOCY!*.

#### Kod inline

Formatowanie kodu inline służy do wyświetlania bardziej technicznych informacji, takich jak adresy URL. Przykłady:

- Nazwy plików i ścieżki (np. `C:/User/[twoja_nazwa]/AppData....test.png`)
- URL (np. `https://zap-hosting.com`)
- Porty (np. `:30120`)
- Komendy (np. `ipconfig`)
- Zapytania SQL (np. `SELECT * FROM servers`)
- Skróty klawiszowe (np. `ENTER` lub `CTRL + C`)

#### Tabele

Markdown pozwala na tworzenie tabel, co jest przydatne do prezentacji dużej ilości powtarzalnych informacji, np. komend, opisów i zastosowań w grze. Przykład tabeli:

```
| Komenda    | Opis                    | Użycie                |
| ---------- | ----------------------- | --------------------- |
| /help      | Wysyła komendę pomocy   | /help [kategoria]     |
| /stop      | Zatrzymuje serwer       | /stop [true/false]    |
```

#### Bloki kodu

Bloki kodu są bardzo przydatne w poradnikach, które zawierają komendy, skrypty, wyjścia terminala i inne.

Aby użyć bloku kodu, otocz tekst potrójnym backtickiem ``` z obu stron. Możesz też podać język programowania po pierwszym backticku, aby poprawnie sformatować składnię. Przykład z JavaScript:

```js
function hello(name) {
    console.log(name)
}

var server = "ZAP-Hosting"
hello(server)
```

### Użycie admonicji

W treści możesz używać admonicji, aby wyróżnić pewne informacje pod jednym z 5 możliwych typów, opisanych poniżej.

Składnia jest taka sama, zmienia się tylko słowo kluczowe. Przykład:

```
:::note
To jest notatka! Zmień słowo kluczowe, aby zmienić typ.
:::
```

#### Notatka

:::note Notatka! (Opcjonalny tytuł)
Używaj tego tagu, aby wyświetlić dodatkowe uwagi, które mogą być przydatne, ale nie są kluczowe.
:::

#### Wskazówka

:::tip Wskazówka! (Opcjonalny tytuł)
Umieść tutaj swoje porady z doświadczenia.
:::

#### Informacja

:::info Informacja! (Opcjonalny tytuł)
Jeśli jest ważna informacja, którą użytkownik powinien znać, umieść ją tutaj.
:::

#### Ostrzeżenie

:::caution Ostrzeżenie! (Opcjonalny tytuł)
Jeśli w poradniku jest coś, na co użytkownik powinien uważać, użyj tego tagu.
:::

#### Niebezpieczeństwo

:::danger Niebezpieczeństwo! (Opcjonalny tytuł)
Używaj tego tagu, gdy trzeba podkreślić krytyczne informacje, np. znane błędy lub przestarzałe funkcje.
:::

### Zrzuty ekranu

Zrzuty ekranu to świetny sposób na wizualne prowadzenie czytelników przez kroki i zalecamy ich używanie tam, gdzie to możliwe.

Aby uwzględnić sekcję niemiecką, przy robieniu zrzutów ekranu oczekujemy, że dodasz wersję angielską i niemiecką, aby zapewnić spójność. W poradniku możesz umieścić je obok siebie. Niemieckie zrzuty zostaną usunięte i użyte, gdy zespół ZAP-Docs przetłumaczy Twój artykuł.

Możesz dodać zrzut ekranu tak:

```
![](your_url)
```

Najlepiej użyć serwisu takiego jak Imgur do uploadu i użycia obrazka, albo przeciągnąć go bezpośrednio do pola edycji na GitHubie, co automatycznie go załaduje.

## Terminologia

W dokumentacji używamy wielu kluczowych terminów. Oczekujemy, że będziesz stosować amerykańską odmianę angielskiego, aby zachować spójność w artykułach. W tej sekcji standaryzujemy niektóre często używane terminy.

### Produkty ZAP-Hosting

Odwołując się do produktów ZAP-Hosting, zawsze upewnij się, że używasz poprawnej nazwy, pisowni i kapitalizacji. Możesz to sprawdzić na [stronie ZAP-Hosting](https://zap-hosting.com), patrząc, jak produkt jest tam opisany.

### Atrybuty definiowane przez użytkownika

W większości poradników konfiguracja opcji takich jak użytkownicy, nazwy hostów, domeny, adresy IP i URL-e wymaga użycia własnych danych czytelnika zamiast naszych placeholderów.

Domyślnie zawsze używaj `[your_attribute]`, aby odróżnić elementy statyczne od unikalnych, gdzie `attribute` zastępujesz typem atrybutu. Na przykład, mówiąc o IP, napisz `[your_server_ip]`, a mówiąc o URL, `http://[your_server_ip]:30120`. To jasno pokazuje, które elementy czytelnik musi zmienić według swojej konfiguracji. Powinieneś też wyjaśnić lub zaznaczyć, które atrybuty trzeba zmienić przy pierwszym ich użyciu, aby wszystko było jasne.

Domyślnie używaj `zaphosting` jako nazwy hosta, użytkownika lub bazy danych.

### Oprogramowanie

Wspominając o oprogramowaniu w poradnikach, upewnij się, że stosujesz poprawną pisownię i kapitalizację nazwy. Jeśli strona oprogramowania nie jest spójna w kapitalizacji, zachowaj tę samą kapitalizację w całym artykule, aby utrzymać spójność.

Przy pierwszym wspomnieniu oprogramowania dodaj link do oficjalnej strony, jeśli jest dostępna.