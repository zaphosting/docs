---
id: contribution-guides-guidelines
title: Wytyczne do poradników
description: "Dowiedz się, jak tworzyć spójną, wysokiej jakości dokumentację, która poprawia doświadczenie czytelnika i przejrzystość → Sprawdź teraz"
sidebar_label: Wytyczne
---

![Guides Banner](https://screensaver01.zap-hosting.com/index.php/s/4aaqq3zctZFW4JJ/preview)

Aby zapewnić, że treści w naszych ZAP-Docs zawsze będą spójne pod względem jakości i stylu, stworzyliśmy zestaw wytycznych do stosowania podczas tworzenia lub edytowania dokumentacji. Musisz **ściśle** przestrzegać naszych wytycznych, aby Twoja propozycja i ostateczny pull request zostały szybko przetworzone. Co ważniejsze, zapewni to naszym czytelnikom lepsze i bardziej spójne doświadczenie wysokiej jakości podczas czytania i korzystania z poradników.

Nasze wytyczne dotyczące tworzenia poradników podzielone są na następujące sekcje:

- Struktura
- Styl
- Formatowanie
- Terminologia

Zalecamy zapoznanie się z tymi sekcjami przynajmniej raz przed rozpoczęciem pisania treści. To także dobre miejsce do sprawdzenia, jeśli masz wątpliwości, jak podejść do czegoś podczas tworzenia.

## Struktura

Wszystkie nasze poradniki w ZAP-Docs mają stosunkowo spójną strukturę, która zaczyna się od krótkiego wprowadzenia wraz z ewentualnymi wymaganiami wstępnymi lub krokami przygotowawczymi, następnie główna treść i krótkie podsumowanie.

Struktura może być czasem zmieniona w zależności od typu poradnika. Można to omówić z zespołem ZAP-Docs już na etapie pierwszej propozycji. Możesz zobaczyć, jak korzystać z nagłówków w sekcji dotyczącej nagłówków, odbywa się to za pomocą tradycyjnego Markdown.

Typowa struktura, której oczekujemy, zawiera następujące nagłówki:

- **Tytuł strony** (H1) - Ustawiany przez metadane `title` na górze strony.
- **Wprowadzenie** (H2) - Krótkie 1-2 zdania wyjaśniające temat poradnika i co najważniejsze, co poradnik ma osiągnąć.
- **Przygotowanie** (H2) - Ten nagłówek jest **opcjonalny**. Jest potrzebny tylko, jeśli istnieją pewne wymagania wstępne lub kroki przygotowawcze, które trzeba wykonać, zanim czytelnik będzie mógł podążać za poradnikiem. Na przykład możesz tu odwołać się do naszego poradnika [SSH Initial Access](vserver-linux-ssh.md), jeśli użytkownik musi najpierw zalogować się na swój serwer. Możesz też podać wymagania dotyczące oprogramowania i/lub sprzętu albo szybkie instrukcje, jak przygotować np. zaporę sieciową. Zalecamy przeglądanie naszego [ZAP-Docs](https://zap-hosting.com/guides), aby sprawdzić, czy są poradniki, które obejmują te kroki i jeśli tak, to linkować do nich.
- **Główny temat** (H2) - To jest pierwsza główna sekcja poradnika. W wielu przypadkach będzie to zapewne **Instalacja**, po której następują podsekcje opisujące poszczególne kroki procesu. Ale nie zawsze musi tak być, np. poradniki informacyjne mogą mieć inny główny temat.
- Opcjonalnie: **Podtemat 1** (H3)
- Opcjonalnie: **Podtemat 2** (H3)
- ...
- Opcjonalnie: **Inny temat** (H2)
- **Podsumowanie** (H2) - Na koniec poradnika powinieneś zamknąć go 1-3 zdaniami, wyjaśniając, co czytelnik osiągnął i podając odnośnik do naszego Zespołu Wsparcia, jeśli czytelnik nadal ma problemy.

:::info Użycie podnagłówków (H3 i H4)
Zachęcamy do używania nagłówków H3, aby tworzyć podsekcje w ramach głównych sekcji H2 i lepiej organizować większe fragmenty treści. Przykład można zobaczyć w sekcji **Główny temat** powyżej.

Możesz też używać nagłówków H4. Są przydatne, jeśli chcesz stworzyć kolejną podsekcję, ale nie chcesz, aby pojawiła się ona w spisie treści po prawej stronie. Są też dobre, gdy chcesz podzielić sekcję H3 na jeszcze mniejsze części.

Jeśli używasz podnagłówków, zwykle sens ma mieć co najmniej dwa lub więcej podnagłówków w ramach nadrzędnego nagłówka, bo pojedynczy podnagłówek w sekcji głównej zwykle nie ma sensu.
:::

W przyszłości dodamy szablony z gotowym Markdownem, które będą świetnym punktem startowym do tworzenia nowych stron. To pojawi się wkrótce.

### Tytuły

Tytuły powinny być zwięzłe i jasno odzwierciedlać główny cel poradnika. Pomyśl, co czytelnik osiągnie na końcu, np. ukończenie instalacji, konfiguracja usługi lub zrozumienie konkretnego tematu technicznego. Efekt powinien być od razu rozpoznawalny z samego tytułu.

Każdy tytuł musi zaczynać się od odpowiedniego prefiksu kategorii produktu. Prefiks ten powinien odpowiadać sekcji, w której poradnik jest umieszczony w sidebarze. Przeglądanie istniejących poradników w tej samej kategorii pomaga zachować spójność nazewnictwa.

Na przykład poradnik dotyczący produktu VPS powinien mieć tytuł w stylu: `VPS: SteamCMD Linux Setup`.

Jeśli poradnik jest napisany w sposób ogólny i dotyczy kilku produktów, np. instalacji usługi lub serwera gier działającej zarówno na VPS, jak i serwerach dedykowanych, nazwa produktu nie powinna być w tytule. W takich przypadkach poradnik jest celowo niezależny od produktu i nie wymaga prefiksu.

### Wprowadzenie

Wprowadzenie do poradnika powinno być krótkie i na temat, zwykle 1-2 zdania. W treści powinieneś krótko opisać temat i co najważniejsze, wyjaśnić, co poradnik pokaże czytelnikowi, informując go o końcowym celu.

Przykład idealnego wprowadzenia do poradnika o SteamCMD:

- **1. zdanie**: SteamCMD to niezbędne narzędzie potrzebne do instalacji serwerów dedykowanych dla wielu gier, w tym Palworld, Enshrouded i innych.
- **2. zdanie**: W tym poradniku przejdziemy przez proces pierwszej konfiguracji SteamCMD na Twoim serwerze Linux. W przykładach użyjemy Ubuntu, ale proces powinien być bardzo podobny dla innych dystrybucji.

Jak widać, wprowadzenie krótko podsumowuje temat i przedstawia cel poradnika.

### Przygotowanie

Sekcja przygotowania jest przydatna do wyjaśnienia wszelkich wymagań wstępnych, które czytelnik musi spełnić, zanim będzie mógł podążać za poradnikiem. Mogą to być wymagania dotyczące oprogramowania lub sprzętu, instrukcje przygotowania oprogramowania, np. zapory sieciowej, lub po prostu wskazówki, jak zalogować się na serwer przez SSH lub RDP.

Zdecydowanie zalecamy przeglądanie naszego [ZAP-Docs](https://zap-hosting.com/guides), aby znaleźć poradniki, które mogą obejmować lub odnosić się do kroków przygotowawczych, które chcesz uwzględnić. Jeśli istnieje poradnik na dany temat, np. [SSH Initial Access](vserver-linux-ssh.md), powinieneś go zlinkować i poinformować czytelnika, aby z niego skorzystał przed kontynuacją.

Typowe wymagania wstępne to:

- Wymagane oprogramowanie (np. Git, Node.js, Python, Docker)
- Poradniki, które pomogą czytelnikowi zdobyć podstawową wiedzę (np. inna strona ZAP-Docs)
- Konta użytkowników, takie jak API
- Wymagane ustawienia (np. DNS/SSL)

Przykład dla poradnika o Reverse Proxy:

```
Aby skonfigurować reverse proxy, potrzebujesz serwera Linux do hostowania proxy i musisz się na niego połączyć. Skorzystaj z naszego poradnika [SSH Initial Access](vserver-linux-ssh.md), jeśli potrzebujesz pomocy. Potrzebujesz też dostępu do domeny, którą posiadasz. Dla każdej subdomeny, której chcesz użyć, powinieneś utworzyć rekord DNS typu `A`, wskazujący na adres IP Twojego serwera Linux.
```

### Główny temat

Teraz czas na napisanie głównej części poradnika. Możesz swobodnie korzystać z nagłówków H2, H3 i H4, aby odpowiednio zorganizować poradnik. Ma to sens, by używać H2 dla dużych sekcji, a następnie dzielić je na podsekcje za pomocą H3 i/lub H4.

W wielu przypadkach, zwłaszcza w poradnikach dotyczących instalacji oprogramowania, prawdopodobnie użyjesz nagłówka **Instalacja**, podzielonego na różne podsekcje H3. Jeśli masz problem z wymyśleniem odpowiedniej struktury, nie martw się – pomożemy Ci podczas fazy propozycji, aby zaplanować dobrze przemyślaną strukturę poradnika.

W każdej sekcji warto dodać krótkie zdania wprowadzające i zamykające, które informują czytelnika, co do tej pory zrobił i co będzie robił dalej. Oczywiście ostatnia główna sekcja nie musi mieć zdania zamykającego, bo naturalnie przejdzie do podsumowania.

Przykłady takich zdań:

- **Zdanie wprowadzające**: W tej sekcji przejdziesz przez proces konfiguracji, aby dostosować oprogramowanie do swoich potrzeb.
- **Zdanie zamykające**: Po przygotowaniu konfiguracji i zapisaniu pliku, przejdź do następnej sekcji, aby skonfigurować konto administratora i rozpocząć korzystanie z oprogramowania.

Dzięki takim zdaniom czytelnik ma ważny kontekst, co zapewnia płynność poradnika. Pamiętaj, aby zawsze pisać w drugiej osobie (np. „Stworzysz”), a nie w pierwszej osobie.

### Podsumowanie

Ostatnia sekcja to podsumowanie poradnika. Powinna zamknąć poradnik w 1-3 zdaniach, wyjaśniając, co czytelnik osiągnął i podając odnośniki do dalszych materiałów lub poradników, które mogą poszerzyć jego wiedzę.

Warto tu zlinkować istniejące poradniki ZAP-Docs, zwłaszcza jeśli naturalnie wynikają z Twojego poradnika. Zalecamy też podać kontakt do naszego Zespołu Wsparcia, jeśli czytelnik nadal ma problemy.

Przykład świetnego podsumowania:

```
Udało Ci się pomyślnie skonfigurować oprogramowanie na serwerze Linux! Polecamy przeglądanie naszych poradników dotyczących usług Linux w tej sekcji, aby zainstalować kolejne usługi.

W razie pytań lub potrzeby pomocy, nie wahaj się skontaktować z naszym zespołem wsparcia, który jest dostępny codziennie, aby Ci pomóc! 🙂
```

## Styl

Styl pisania w dokumentacji ZAP-Hosting opiera się na naszym przekonaniu o tworzeniu wysokiej jakości, praktycznych i łatwo dostępnych poradników, które wspierają szeroki zakres tematów i czytelników na każdym poziomie doświadczenia.

### Techniczny i poprawny

Nasze artykuły mają być jak najbardziej technicznie poprawne i aktualne z najnowszymi informacjami z branży. Oczekujemy, że artykuły nie tylko pozwolą użytkownikowi osiągnąć cel, np. nauczyć się, zbudować lub skonfigurować coś nowego, ale też zrozumieć, co zrobił podczas artykułu. Każdy krok w poradniku powinien mieć jasny cel i wyjaśnienie, oferując dodatkowe opcje i/lub flagi tam, gdzie to stosowne. Zawsze powinieneś informować czytelnika, co robi i dlaczego wykonuje dane czynności.

Autorzy powinni zawsze dokładnie sprawdzić i przetestować swoje poradniki, aby upewnić się, że wszystko jest technicznie poprawne i działa zgodnie z zamierzeniem, zanim wyślą pull request. Zespół ZAP-Hosting przeczyta i przetestuje poradnik tam, gdzie to możliwe, aby zapewnić spójność i poprawność merytoryczną lub zasugerować poprawki, jeśli znajdzie błędy.

:::tip
Zawsze zalecamy, aby autorzy sprawdzili swoje teksty pod kątem pisowni i gramatyki przed wysłaniem pull requesta. Przydatna strona do tego to: https://languagetool.org/
:::

### Praktyczny i użyteczny

Po przeczytaniu artykułu czytelnik powinien nauczyć się, zbudować lub skonfigurować coś od początku do końca. Nasze poradniki mają wspierać czytelników na każdym poziomie doświadczenia, dlatego Twoje materiały powinny dokładnie omawiać temat, aby czytelnik zdobył wiedzę i/lub osiągnął cel. Jako autor powinieneś uwzględnić wszystkie szczegóły, w tym wymagania wstępne. Kieruj czytelników na zewnętrzne strony tylko wtedy, gdy nie ma odpowiedniej dokumentacji w ZAP-Docs lub gdy chcesz, by użytkownik zdobył dodatkowe informacje, które nie są konieczne, ale mogą pomóc w rozwoju wiedzy technicznej. Linki zewnętrzne nie powinny prowadzić do dokumentacji konkurencji.

### Przyjazny, formalny i wyczerpujący

Oczekujemy, że nasza dokumentacja będzie nowoczesna i przyjazna, aby była dostępna dla każdego czytelnika, ale jednocześnie zachowa formalny ton. W całym poradniku staramy się, aby styl pisania był odpowiedni dla wszystkich, niezależnie od doświadczenia czy bariery językowej.

Ponieważ poradniki mają przede wszystkim wspierać czytelnika w nauce i osiągnięciu celu, oczekujemy, że autorzy będą pisać w drugiej osobie (np. „Musisz...”) zamiast pierwszej osoby (np. „Myślę, że...”), aby utrzymać zaangażowanie czytelnika i skupić się na nim.

Na koniec wszyscy autorzy muszą przestrzegać naszego kodeksu postępowania, aby poradniki były akceptujące dla każdego, niezależnie od wieku, pochodzenia etnicznego, tożsamości płciowej, poziomu doświadczenia, narodowości, religii, poglądów politycznych, orientacji seksualnej, statusu społeczno-ekonomicznego czy wyborów technologicznych. Należy unikać języka potencjalnie obraźliwego i wszelkich treści odnoszących się do powyższych tematów.

## Formatowanie

Nasza dokumentacja jest formatowana za pomocą języka Markdown, który jest szeroko stosowany i stosunkowo prosty w użyciu. Przejdź do poniższych sekcji, aby zrozumieć, które elementy stosujemy i jak ich używać.

:::tip
Po więcej przykładów i szczegółowych wyjaśnień funkcji Markdown zajrzyj na [Markdown Guide](https://www.markdownguide.org/cheat-sheet/), gdzie znajdziesz dodatkowe informacje.
:::

### Nagłówki

Nagłówki to jedna z najważniejszych opcji formatowania, służąca do logicznego i przejrzystego podziału stron. Główny tytuł to nagłówek H1, jednak nigdy nie powinieneś go używać w treści. Zamiast tego użyj metadanych `title` na górze pliku poradnika, które odpowiadają za tytuł.

W naszych poradnikach nagłówki H2 dzielą poradnik na główne sekcje. Następnie nagłówki H3 dzielą główne sekcje na podsekcje. Przykładem może być podział dużej sekcji na kilka kroków, aby ułatwić śledzenie poradnika. Na koniec jest też nagłówek H4, który rzadziej jest używany, ale służy do dalszego dzielenia podsekcji i nie pojawia się w spisie treści.

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

### Markdown w tekście

Używamy różnych formatowań inline, aby poprawić czytelność poradników i dopasować się do czytelników o różnym poziomie technicznym. Przeczytaj poniższe wyjaśnienia.

#### Pogrubienie

Pogrubienie służy głównie do podkreślenia informacji. Przykłady:

- Zmiana kontekstu między krokami
- Nazwy hostów, dane logowania i nazwy użytkowników
- Kluczowa terminologia

Użyj podwójnych gwiazdek wokół tekstu, np. `**cześć**` da **cześć**.

#### Kursywa

Kursywa służy głównie do wprowadzenia nowych technicznych słów kluczowych w artykule. Na przykład: dziś skonfigurujemy *reverse proxy*.

Użyj pojedynczej gwiazdki wokół tekstu, np. `*ZAP-Hosting - Więcej MOCY!*` da *ZAP-Hosting - Więcej MOCY!*.

#### Kod inline

Formatowanie kodu inline służy do wyświetlania bardziej technicznych informacji, np. adresów URL. Przykłady:

- Nazwy plików i ścieżki (np. `C:/User/[twoja_nazwa]/AppData....test.png`)
- URL-e (np. `https://zap-hosting.com`)
- Porty (np. `:30120`)
- Komendy (np. `ipconfig`)
- Zapytania SQL (np. `SELECT * FROM servers`)
- Skróty klawiszowe (np. `ENTER` lub `CTRL + C`)

#### Tabele

Tabele są przydatne, gdy trzeba pokazać dużo powtarzalnych informacji, np. komendy, opisy i zastosowania w grze. Przykład:

```
| Komenda    | Opis                    | Użycie                |
| ---------- | ----------------------- | --------------------- |
| /help      | Wysyła komendę pomocy   | /help [kategoria]     |
| /stop      | Zatrzymuje serwer       | /stop [true/false]    |
```

#### Bloki kodu

Bloki kodu są bardzo przydatne w poradnikach, które zawierają komendy, skrypty, wyjścia terminala i inne.

Aby użyć bloku kodu, otocz tekst potrójnymi backtickami `` ``` ``. Możesz też podać język programowania po pierwszych backtickach, aby poprawnie sformatować składnię. Przykład z JavaScript:

```js
function hello(name) {
    console.log(name)
}

var server = "ZAP-Hosting"
hello(server)
```

### Użycie admonicji

Admonicje służą do wyróżniania ważnych informacji w poradniku. Jest pięć typów, każdy ma inne zastosowanie.

Przy użyciu admonicji zawsze podaj jasny i opisowy tytuł, który od razu informuje czytelnika o kontekście i ważności informacji, bez konieczności czytania całego tekstu.

Składnia jest taka sama dla wszystkich typów, zmienia się tylko słowo kluczowe:

```
:::warning Tytuł
	Treść tutaj.
:::
```

#### Note

:::note Przykład: Dodatkowa informacja
Używaj tego typu do informacji uzupełniających, które mogą pomóc czytelnikowi, ale nie są niezbędne do ukończenia poradnika.
:::

#### Tip

:::tip Przykład: Wskazówka optymalizacyjna
Używaj tego typu, aby podzielić się praktycznymi poradami, najlepszymi praktykami lub usprawnieniami na podstawie doświadczenia.
:::

#### Info

:::info Przykład: Wymaganie lub ważny szczegół
Używaj tego typu do ważnych informacji kontekstowych, które czytelnik powinien znać przed lub podczas procesu.
:::

#### Caution

:::caution Przykład: Ryzyko konfiguracji
Używaj tego typu, aby ostrzec czytelnika o potencjalnych problemach lub błędach, które mogą wystąpić podczas korzystania z poradnika.
:::

#### Danger

:::danger Przykład: Znany błąd lub przestarzała funkcja
Używaj tego typu do krytycznych ostrzeżeń, np. znanych błędów, nieodwracalnych działań, zagrożeń bezpieczeństwa lub przestarzałych funkcji, które mogą powodować poważne problemy.
:::

### Zrzuty ekranu

Zrzuty ekranu to świetny sposób na wizualne prowadzenie czytelnika przez kroki i zalecamy ich używanie tam, gdzie to pasuje. Upewnij się, że wszystko widoczne na zrzutach jest po angielsku, ponieważ nasza dokumentacja jest pisana po angielsku, a te same angielskie zrzuty będą używane w innych wersjach językowych. Zrzuty powinny mieć wystarczająco dużą rozdzielczość, aby wszystkie elementy były czytelne. Unikaj małych lub mocno przyciętych obrazów.

Aby dodać zrzut ekranu, użyj składni, zastępując `your_url` adresem obrazka:

```
![](your_url)
```

Najlepiej użyć serwisu takiego jak Imgur do uploadu i użycia obrazka, albo przeciągnąć go bezpośrednio do pola edycji na GitHubie, co automatycznie go załaduje.

## Terminologia

W całej dokumentacji używamy wielu kluczowych terminów. Oczekujemy, że będziesz stosować amerykańską wersję angielskiej pisowni, aby zachować spójność w artykułach. W tej sekcji standaryzujemy niektóre często używane terminy.

### Produkty ZAP-Hosting

Odwołując się do produktów ZAP-Hosting, zawsze upewnij się, że używasz poprawnej nazwy, pisowni i wielkości liter. Możesz to sprawdzić na [stronie ZAP-Hosting](https://zap-hosting.com), patrząc, jak produkt jest tam opisany.

### Atrybuty definiowane przez użytkownika

W większości poradników konfiguracja opcji takich jak użytkownicy, nazwy hostów, domeny, adresy IP i URL-e będzie wymagać użycia własnych danych czytelnika zamiast naszych placeholderów.

Domyślnie zawsze używaj `[your_attribute]`, aby odróżnić elementy statyczne od unikalnych, gdzie `attribute` zastępujesz typem atrybutu. Na przykład, mówiąc o IP, napisz `[your_server_ip]`, a mówiąc o URL-u, `http://[your_server_ip]:30120`.

To jasno pokazuje, które elementy czytelnik musi zmienić według swojej konfiguracji. Powinieneś też wyjaśnić lub dodać notatkę, które atrybuty trzeba zmienić, gdy pojawią się po raz pierwszy, aby wszystko było jasne.

Domyślnie używaj `zaphosting` jako nazwy hosta, nazwy użytkownika lub nazwy bazy danych.

### Oprogramowanie

Wspominając o oprogramowaniu w poradnikach, upewnij się, że stosujesz poprawną pisownię i wielkość liter nazwy. Jeśli strona oprogramowania nie jest spójna w kapitalizacji, zachowaj jednolity styl w całym artykule.

Podczas pierwszego wspomnienia o oprogramowaniu dodaj link do oficjalnej strony, jeśli jest dostępna.