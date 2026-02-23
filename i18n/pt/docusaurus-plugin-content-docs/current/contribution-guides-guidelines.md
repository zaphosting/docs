---
id: contribution-guides-guidelines
title: Diretrizes para Guias
description: "Descubra como criar documentação consistente e de alta qualidade que melhora a experiência e clareza do leitor → Saiba mais agora"
sidebar_label: Diretrizes
---

![Guides Banner](https://screensaver01.zap-hosting.com/index.php/s/4aaqq3zctZFW4JJ/preview)

Para garantir que o conteúdo dos nossos ZAP-Docs mantenha sempre qualidade e estilo consistentes, criamos uma série de diretrizes para usar ao criar ou editar conteúdo para nossa documentação. Você **deve** seguir nossas diretrizes de perto para garantir que sua sugestão e pull request final sejam processados rapidamente. Mais importante, isso garantirá que nossos leitores tenham uma experiência melhor e mais consistente de alta qualidade ao ler e acompanhar os guias.

Nossas diretrizes para contribuição de guias estão divididas nas seguintes seções:

- Estrutura
- Estilo
- Formatação
- Terminologia

Recomendamos que você navegue por essas seções pelo menos uma vez antes de começar a escrever qualquer conteúdo. Também é um ótimo lugar para consultar caso tenha dúvidas sobre como abordar algo durante o processo de criação.

## Estrutura

Todos os nossos guias nos ZAP-Docs seguem uma estrutura relativamente consistente que começa com uma breve introdução junto com quaisquer pré-requisitos ou passos de preparação, seguida pelo conteúdo principal e uma breve conclusão.

A estrutura pode ser alterada ocasionalmente dependendo do tipo de guia produzido. Isso pode ser discutido com a equipe ZAP-Docs na sua sugestão inicial. Você pode ver como usar os títulos na seção de headers, que é feita através do Markdown tradicional.

A estrutura que normalmente esperamos ver teria os seguintes títulos:

- **Título da Página** (H1) - Definido via metadado `title` no topo da página.
- **Introdução** (H2) - Breve texto de 1-2 frases que explica o tema do guia e, mais importante, o que o guia pretende alcançar.
- **Preparação** (H2) - Este título é **opcional**. Só é necessário se houver pré-requisitos ou passos de preparação que precisam ser feitos antes do leitor seguir o guia. Por exemplo, aqui você pode referenciar nosso guia [Acesso Inicial SSH](vserver-linux-ssh.md) se o usuário precisar fazer login no servidor primeiro. Ou pode apresentar requisitos de software e/ou hardware necessários. Ou pode fornecer instruções rápidas de como preparar algum software, como um firewall. Recomendamos navegar pelo nosso [site ZAP-Docs](https://zap-hosting.com/guides) para ver se já existem guias que cobrem esses passos e, se sim, linkar para eles.
- **Tópico Principal** (H2) - Esta é a primeira seção principal do guia. Na maioria dos casos, provavelmente será chamada de **Instalação**, seguida por várias subseções para cada parte do processo. Mas nem sempre será assim, por exemplo, guias informativos podem ter um tópico principal diferente.
- Opcional: **Subtópico 1** (H3)
- Opcional: **Subtópico 2** (H3)
- ...
- Opcional: **Outro Tópico** (H2)
- **Conclusão** (H2) - Como parte final do guia, você deve encerrar o guia em 1-3 frases explicando o que o leitor conseguiu realizar e fornecer uma referência para nosso time de Suporte caso o leitor ainda tenha problemas.

:::info Uso de Subtítulos (H3 & H4)
Você é incentivado a usar títulos H3 para criar subseções dentro das seções principais H2 para organizar melhor blocos maiores de conteúdo. Um exemplo pode ser visto na seção **Tópico Principal** acima.

Você também pode usar títulos H4. Eles são úteis se quiser criar outra subseção sem que ela apareça no sumário lateral do guia. Também são úteis para dividir ainda mais uma seção H3 em partes menores.

Se usar subtítulos, geralmente faz sentido ter pelo menos dois ou mais subtítulos dentro do título pai, caso contrário não faz sentido ter apenas um subtítulo dentro de um título principal.
:::

No futuro, adicionaremos templates com Markdown pré-preparado para você, que serão um ótimo ponto de partida para criar novas páginas. Isso será adicionado em breve.

### Títulos

Os títulos do seu guia devem ser curtos e baseados no objetivo geral do guia que você escreveu. Pense bem no que o leitor vai conseguir ao final do guia, por exemplo instalar um software ou fornecer informações sobre um tópico específico.

O título deve ser prefixado com a categoria do produto ao qual o guia se relaciona, que também deve ser onde você colocou o guia na barra lateral. Você pode conferir outros guias na mesma seção para ver o prefixo usado.

Um exemplo de título bom para um guia relacionado ao produto VPS seria: `VPS: Configuração SteamCMD Linux`

### Introdução

As introduções dos seus guias devem ser relativamente curtas e diretas, normalmente com 1-2 frases. No conteúdo, você deve descrever brevemente o tema em questão e, mais importante, explicar o que o guia vai apresentar ao leitor, informando o objetivo final.

Um exemplo ideal de introdução para um guia sobre SteamCMD seria:

- **1ª frase**: SteamCMD é uma ferramenta essencial necessária para instalar servidores dedicados para uma grande variedade de jogos, incluindo Palworld, Enshrouded e mais.
- **2ª frase**: Neste guia, vamos explorar o processo de configuração inicial para instalar o SteamCMD no seu servidor Linux. Usaremos Ubuntu nos exemplos, mas o processo deve ser muito parecido para outras distribuições.

Como visto no exemplo, ele resume brevemente os tópicos relevantes do guia e apresenta o objetivo geral para o leitor ao seguir o guia.

### Preparação

A seção de preparação é útil para esclarecer quaisquer pré-requisitos que o leitor deve cumprir antes de poder seguir o guia. Isso pode incluir requisitos de software ou hardware, instruções para preparar algum software como um firewall ou simplesmente guiar o usuário a fazer login no servidor via SSH ou RDP.

Recomendamos fortemente navegar pelo nosso [site ZAP-Docs](https://zap-hosting.com/guides) para buscar guias que possam cobrir ou estar relacionados a qualquer passo de preparação que você planeja incluir. Se existir um guia cobrindo o tópico, por exemplo [Acesso Inicial SSH](vserver-linux-ssh.md), você deve linkar o guia e informar o leitor para seguir antes de continuar.

Pré-requisitos comuns para guias incluem:

- Software necessário (ex: Git, Node.js, Python, Docker)
- Tutoriais que ajudam o leitor a adquirir conhecimento básico (ex: outra página ZAP-Docs)
- Contas de usuário como APIs
- Configurações necessárias (ex: DNS/SSL)

Um exemplo para um guia de Reverse Proxy seria:
```
Para configurar um reverse proxy, você precisará de um servidor Linux para hospedar seu proxy e deve conectar-se a ele. Use nosso guia [Acesso Inicial SSH](vserver-linux-ssh.md) se precisar de ajuda para isso. Você também precisará de acesso a um domínio que possua. Para cada subdomínio que planeja usar, deve criar um registro DNS `A` apontando para o endereço IP do seu servidor Linux.
```

### Tópico Principal

Agora é hora de escrever o conteúdo principal do seu guia. Você pode usar livremente títulos H2, H3 e H4 para estruturar seu guia adequadamente. Faz sentido usar títulos H2 para grandes seções e dividi-las em subseções com H3 e/ou H4.

Na maioria dos casos, especialmente em guias que cobrem o processo de configuração de software, você provavelmente usará um título **Instalação** dividido em várias subseções H3. Se estiver com dificuldade para definir uma estrutura correta, não se preocupe, pois trabalharemos com você durante a fase de sugestão para planejar uma estrutura bem equilibrada.

Dentro de cada seção, é recomendado adicionar breves frases de entrada e fechamento para informar o leitor sobre o que ele fez até agora e o que fará a seguir. Claro, isso não é necessário na última seção principal, que naturalmente transita para a conclusão.

Exemplos dessas frases são:

- **Frase de entrada**: Nesta seção, você passará pelo processo de configuração para personalizar o software conforme suas preferências.
- **Frase de fechamento**: Com a configuração pronta e o arquivo salvo, vá para a próxima seção para configurar a conta de administrador e começar a usar o software.

Essas frases de transição dão contexto importante para o leitor e garantem que o guia flua bem. Lembre-se, você deve sempre usar a segunda pessoa (ex: "Você vai criar") em vez da primeira pessoa ao escrever seu conteúdo e transições.

### Conclusão

Por fim, a última seção é a conclusão do guia. Ela deve encerrar o guia em 1-3 frases explicando o que o leitor conseguiu realizar e fornecer referências para leituras adicionais ou guias que possam expandir o conhecimento sobre o tema.

Seria ótimo linkar guias existentes do ZAP-Docs aqui, especialmente se eles seguirem naturalmente após o seu guia. Também recomendamos fornecer uma referência para nosso time de Suporte caso o leitor ainda tenha problemas.

Um exemplo de conclusão legal é:
```
Você configurou com sucesso o software para rodar no seu servidor Linux! Recomendamos navegar pelos nossos guias de Serviços Linux nesta seção para instalar outros serviços.

Para dúvidas ou assistência, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂
```

## Estilo

O estilo de escrita dos docs ZAP-Hosting segue nossa crença em produzir guias de alta qualidade, práticos e acessíveis para apoiar uma ampla variedade de tópicos e leitores de qualquer nível de experiência.

### Técnico & correto

Nossos artigos buscam ser o mais tecnicamente precisos possível e atualizados com as últimas informações do setor. Esperamos que os artigos não só permitam ao usuário alcançar o objetivo final de aprender, montar ou configurar algo novo, mas também entender o que foi feito durante o artigo. Cada passo que você criar dentro de um guia deve ter um propósito claro e explicação, oferecendo opções adicionais e/ou flags quando apropriado. Você deve sempre manter o leitor informado sobre o que está fazendo e por que está fazendo as ações do guia.

Os escritores devem sempre revisar e testar seus guias para garantir que tudo está tecnicamente correto e funciona como esperado antes de enviar um pull request. A equipe dos docs ZAP-Hosting lerá e testará seu guia quando apropriado para garantir consistência e correção factual, ou discutirá melhorias caso haja algum erro.

:::tip
Sempre recomendamos que nossos escritores passem seu conteúdo por uma ferramenta de correção ortográfica para garantir que gramática e ortografia estejam corretas antes de criar um pull request. Um site útil para isso é: https://languagetool.org/
:::

### Prático & útil

Quando o leitor terminar um artigo, ele deve ter aprendido, montado ou configurado algo do começo ao fim. Nossos guias visam apoiar leitores de qualquer experiência, portanto suas contribuições devem explorar completamente o tema para garantir que o leitor fique bem informado e/ou tenha alcançado algo. Isso significa que, como escritor, você deve cobrir seu tema a fundo, mencionando todos os detalhes necessários, incluindo pré-requisitos. Você só deve enviar leitores para sites externos se não houver documentação existente no ZAP-Docs ou se for para o usuário obter detalhes adicionais que não são necessários para seu artigo, mas que podem ajudar a ampliar o conhecimento técnico. Links externos não devem redirecionar para documentação de concorrentes.

### Amigável, formal & completo

Esperamos que nossa documentação seja moderna e amigável para tornar o conteúdo acessível a qualquer leitor, mas ao mesmo tempo formal. Ao longo do seu guia, queremos que o tom da escrita seja aceitável para todos os leitores, independentemente da experiência ou barreiras linguísticas.

Como esses guias focam principalmente em apoiar o leitor para educá-lo e permitir que alcance um resultado, esperamos que os escritores usem a segunda pessoa (ex: "Você precisa...") em vez da primeira pessoa (ex: "Eu acho...") para manter o leitor engajado e o foco nele.

Por fim, todos os escritores devem seguir nosso código de conduta para garantir que nossos guias sejam inclusivos para qualquer pessoa, independentemente de idade, etnia, identidade de gênero, nível de experiência, nacionalidade, religião, filiação política, orientação sexual, status socioeconômico ou escolhas tecnológicas. Você deve evitar qualquer linguagem potencialmente ofensiva e qualquer conteúdo relacionado aos tópicos mencionados.

## Formatação

Nossa documentação é formatada usando a linguagem Markdown, que é amplamente usada e relativamente simples. Confira as seções abaixo para entender o que usamos e como usamos.

:::tip
Para mais exemplos e explicações detalhadas sobre recursos do Markdown, visite [Markdown Guide](https://www.markdownguide.org/cheat-sheet/) que oferece informações adicionais.
:::

### Títulos

Títulos são uma das opções de formatação mais importantes para separar as páginas de forma lógica e compreensível. O título principal é o header H1, mas você nunca deve usá-lo no texto. Em vez disso, use o metadado `title` no topo do arquivo do guia, que é responsável por isso.

Nos nossos guias, títulos H2 devem ser usados para dividir o guia em suas seções principais. Depois, títulos H3 devem dividir as seções principais em subseções. Um exemplo de uso é dividir uma seção principal em vários passos para facilitar o acompanhamento. Por fim, há o título H4, que é usado com menos frequência, mas serve para dividir ainda mais as subseções, sem aparecer na estrutura do guia.

:::info
Se usar subtítulos (ex: H3 abaixo de H2), certifique-se de que existam dois ou mais títulos do mesmo nível dentro daquela seção, caso contrário o uso está incorreto.
:::

Exemplo rápido de uso de títulos:

```
## Instalação
H2 - Seção Principal

### Baixando Arquivos do Jogo
H3 - Subseção de H2

#### Via SteamCMD
H4 - Subseção de H3

#### Manualmente via GitHub
H4 - Subseção de H3

### Preparando Configuração
H3 - Subseção de H2

### Iniciando Servidor
H3 - Subseção de H2
```

### Markdown inline

Usamos vários formatos inline para melhorar a legibilidade dos guias e atender leitores com diferentes níveis técnicos. Veja abaixo o uso de cada um.

#### Texto em negrito

O principal uso do negrito é para enfatizar informações. Exemplos incluem:

- Mudança de contexto entre passos
- Nomes de host, credenciais e nomes de usuário
- Termos-chave

Use dois asteriscos ao redor do texto para deixar em negrito, por exemplo, `**olá pessoal**` resulta em **olá pessoal**.

#### Itálico

O itálico é usado principalmente para introduzir novas palavras técnicas no artigo. Por exemplo, hoje vamos configurar um *reverse proxy*.

Para usar itálico, coloque um asterisco ao redor do texto, por exemplo, `*ZAP-Hosting - Mais POWER!*` resulta em *ZAP-Hosting - Mais POWER!*.

#### Código inline

O código inline é usado para mostrar informações técnicas como URLs. Exemplos incluem:

- Nomes e caminhos de arquivos (ex: `C:/User/[seu_nome]/AppData....teste.png`)
- URLs (ex: `https://zap-hosting.com`)
- Portas (ex: `:30120`)
- Comandos (ex: `ipconfig`)
- Queries SQL (ex: `SELECT * FROM servers`)
- Teclas e combinações (ex: `ENTER` ou `CTRL + C`)

#### Tabelas

Tabelas são úteis para mostrar muita informação repetitiva, como comandos, descrições e usos dentro de um jogo. Exemplo:

```
| Comando     | Descrição               | Uso                   |
| ----------- | ----------------------- | --------------------- |
| /help       | Envia comando de ajuda  | /help [categoria]     |
| /stop       | Para o servidor         | /stop [true/false]    |
```

#### Blocos de código

Blocos de código são ótimos para guias que envolvem comandos, scripts, saída de terminal e mais.

Para usar um bloco de código, coloque ` ``` ` antes e depois do texto que quer colocar no bloco. Você pode também indicar a linguagem logo após os três backticks para formatar corretamente. Exemplo com JavaScript:

```js
function hello(name) {
    console.log(name)
}

var server = "ZAP-Hosting"
hello(server)
```

### Uso de admonições

Você pode usar admonições para destacar informações com um dos 5 tipos abaixo.

A sintaxe é a mesma, trocando a palavra-chave pelo tipo desejado. Exemplo:

```
:::note
Isto é uma nota! Troque a palavra-chave para mudar o tipo.
:::
```

#### Nota

:::note Título da Nota! (Opcional)
Use esta tag para mostrar notas adicionais que podem ser úteis, mas não são essenciais.
:::

#### Dica

:::tip Título da Dica! (Opcional)
Coloque aqui dicas que você tem pela experiência.
:::

#### Informação

:::info Título da Informação! (Opcional)
Se houver informação importante que o usuário deve saber, coloque aqui.
:::

#### Atenção

:::caution Título da Atenção! (Opcional)
Se há algo no seu guia que o usuário deve tomar cuidado, use esta tag para destacar.
:::

#### Perigo

:::danger Título do Perigo! (Opcional)
Use para destacar informações cruciais, como bugs conhecidos ou recursos depreciados.
:::

### Capturas de tela

Capturas de tela são ótimas para guiar visualmente os leitores e recomendamos usar quando fizer sentido. Garanta que todo o conteúdo visível nas imagens esteja em inglês, pois nossa documentação é escrita em inglês e as mesmas imagens serão usadas nas outras línguas que oferecemos. As imagens devem ter resolução suficiente para que todos os elementos fiquem legíveis. Evite imagens pequenas ou muito cortadas.

Use a sintaxe abaixo para adicionar uma captura, substituindo `your_url` pela URL da imagem:

```
![](your_url)
```

O ideal é usar sites como Imgur para hospedar e usar a imagem, ou arrastar direto para o campo de edição no GitHub, que fará o upload automático.

## Terminologia

Na nossa documentação, usamos uma série de termos-chave. Esperamos que você use a ortografia americana (US-English) para garantir consistência em todos os artigos. Aqui padronizamos alguns termos comuns.

### Produtos ZAP-Hosting

Ao referenciar um produto ZAP-Hosting, sempre use o nome, grafia e capitalização corretos. Você pode conferir no [site ZAP-Hosting](https://zap-hosting.com) como o produto é referenciado na página oficial.

### Atributos definidos pelo usuário

Na maioria dos guias, opções de configuração para itens como usuários, nomes do host, domínios, endereços IP e URLs precisarão ser preenchidas pelo leitor com seus próprios dados.

Por padrão, use sempre `[seu_atributo]` para diferenciar elementos estáticos de elementos únicos, onde `atributo` deve ser substituído pelo tipo do atributo. Por exemplo, ao mencionar um IP, use `[seu_ip_do_servidor]` no guia ou ao mencionar uma URL use `http://[seu_ip_do_servidor]:30120`. Isso deixa claro quais atributos o leitor deve alterar conforme sua configuração. Também explique ou note quais atributos precisam ser alterados logo na primeira vez que aparecerem para garantir entendimento.

Use `zaphosting` como nome padrão para hostname, usuário ou nome de banco de dados.

### Software

Ao mencionar software nos seus guias, garanta que a grafia e capitalização estejam corretas. Se o site oficial do software não for consistente, mantenha a mesma capitalização dentro do artigo para consistência.

Sempre faça hyperlink para o site oficial do software na primeira vez que mencioná-lo, se disponível.