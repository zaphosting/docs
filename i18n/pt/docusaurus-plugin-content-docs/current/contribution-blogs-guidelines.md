---
id: contribution-blogs-guidelines
title: Diretrizes para Blogs
description: "Descubra como criar posts de blog de alta qualidade e consistentes que engajam os leitores e aprimoram suas habilidades de escrita → Saiba mais agora"
sidebar_label: Diretrizes
---

![Blogs Banner](https://screensaver01.zap-hosting.com/index.php/s/ysxLZ26K3dSRLJQ/preview)

Para garantir que todos os posts do Blog da ZAP-Hosting tenham qualidade e estilo consistentes, produzimos uma série de diretrizes que você deve seguir ao criar conteúdo para o nosso Programa de Contribuição de Blogs. Você deve seguir nossas diretrizes de perto para garantir que suas sugestões e rascunhos subsequentes sejam processados rapidamente. Mais importante, isso garantirá que nossos leitores tenham uma experiência melhor e mais consistente de alta qualidade ao ler nossos blogs.

Nossas diretrizes para contribuição de blogs podem ser divididas em algumas seções principais, que são:

- Estrutura
- Estilo
- Formatação
- Terminologia

## Estrutura

Nossos posts de blog no programa de contribuição devem seguir uma estrutura relativamente consistente, criando interesse no leitor e fornecendo informações e novidades para ele. A Equipe de Contribuição da ZAP trabalhará com você para garantir que sua estrutura seja adequada ao criar uma sugestão de blog.

- **Título da Página** (H1)
- **Introdução** (H2) 
- **Preparação** (H2)
- **Tópico Principal** (H2)
- Opcional: **Subtópico 1** (H3)
- Opcional: **Subtópico 2** (H3)
- ...
- Opcional: **Outro Tópico** (H2)
- **Conclusão** (H2)

:::info Uso de Subtítulos (H3 & H4)
Você é incentivado a usar títulos H3 para criar subseções dentro das seções principais H2 para organizar melhor grandes blocos de conteúdo em seções organizadas. Um exemplo pode ser visto na seção **Tópico Principal** acima.

Se você usar subtítulos, geralmente faz sentido ter pelo menos dois ou mais subtítulos dentro do título pai, caso contrário, normalmente não faz sentido ter apenas um subtítulo dentro de um título principal.
:::

:::info
Lembre-se que o acima é uma referência geral. O corpo principal do seu post pode ter títulos diferentes dependendo do que for apropriado para seu conteúdo, mas todos os posts devem ter consistentemente um título, introdução e conclusão envolvendo o conteúdo principal.
:::

### Títulos

O título do seu post deve ser curto, claro e impactante para chamar a atenção do leitor. Deve indicar exatamente sobre o que é o post, por exemplo, se é notícia ou dicas e conselhos. Um exemplo de bom título seria: **Top 10 Scripts de Polícia para FiveM**.

### Introdução

As introduções dos seus posts devem ser relativamente curtas e diretas, normalmente com 1-2 frases. No conteúdo, você deve descrever brevemente o tema e, mais importante, explicar o que o post vai apresentar ao leitor, informando o objetivo final.

Um exemplo ideal de introdução para um post sobre SteamCMD seria:

- **1ª frase**: SteamCMD é uma ferramenta essencial necessária para instalar servidores dedicados para uma grande variedade de jogos, incluindo Palworld, Enshrouded e mais.
- **2ª frase**: Neste post, vamos explorar o processo de configuração inicial para instalar o SteamCMD no seu servidor Linux. Usaremos Ubuntu nos exemplos, mas o processo deve ser muito parecido para outras distribuições.

Como visto no exemplo, ele resume brevemente os tópicos relevantes do post e apresenta o objetivo geral para o leitor ao seguir o conteúdo.

### Preparação

A seção de preparação é útil para esclarecer quaisquer pré-requisitos que o leitor deve cumprir antes de seguir o post. Isso pode incluir requisitos de software ou hardware, instruções para preparar algum software como firewall ou simplesmente guiar o usuário a fazer login no servidor via SSH ou RDP.

Recomendamos fortemente navegar pelo nosso [site ZAP-Docs](https://zap-hosting.com/guides) para buscar guias que possam cobrir ou estar relacionados a qualquer etapa de preparação que você planeja incluir. Se houver um guia sobre o tema, por exemplo [Acesso Inicial SSH](vserver-linux-ssh.md), você deve linkar o guia e informar o leitor para seguir antes de prosseguir.

Pré-requisitos comuns para posts incluem:

- Software necessário (ex: Git, Node.js, Python, Docker)
- Tutoriais que ajudam o leitor a adquirir conhecimento básico (ex: outra página do ZAP-Docs)
- Contas de usuário como APIs
- Configurações necessárias (ex: DNS/SSL)

Um exemplo para um post sobre Reverse Proxy seria:
```
Para configurar um reverse proxy, você precisará de um servidor Linux para hospedar seu proxy e deve conectar-se a ele. Use nosso guia [Acesso Inicial SSH](vserver-linux-ssh.md) se precisar de ajuda para isso. Também será necessário acesso a um domínio que você possua. Para cada subdomínio que planeja usar, você deve criar um registro DNS `A`, apontando para o endereço IP do seu servidor Linux.
```

### Tópico Principal

Agora é hora de escrever a maior parte do seu post. Recomendamos dividir o post em algumas seções para ajudar o leitor a se manter engajado com o conteúdo. Não há regras rígidas sobre como dividir, mas como regra geral, tente dividir grandes quantidades de conteúdo em alguns títulos. A Equipe de Contribuição da ZAP vai te ajudar durante o processo.

Se seu post fornecer informações passo a passo ou tutoriais, faz sentido incluir o número do passo e uma breve descrição dentro do título do tópico principal, por exemplo **Passo 1 - Criando a pasta**. Você deve descrever brevemente o que o leitor está fazendo no passo para fornecer um objetivo geral na primeira frase. Entre os passos, tente criar uma breve introdução e frases de transição para informar o que foi feito até agora e o que virá a seguir. Essas transições dão contexto importante para o leitor. Evite repetições e use termos variados para não repetir os passos.

### Conclusão

Por fim, a última seção é a conclusão do post. Essa seção deve encerrar o guia em 1-3 frases explicando o que o leitor conseguiu, aprendeu ou para fornecer uma conclusão para um guia informativo.

Também faz sentido fornecer referências para leituras adicionais ou outros posts ou guias que o usuário possa seguir para expandir seu conhecimento no tema. Você deve linkar qualquer guia ou post do ZAP-Docs existente aqui, especialmente se for uma continuação natural do seu guia.

## Estilo

O estilo de escrita para os docs da ZAP-Hosting segue nossa crença em produzir posts de blog de alta qualidade, práticos e facilmente acessíveis para apoiar uma ampla variedade de temas e leitores de qualquer nível de experiência.

### Técnico & correto

Nossos posts buscam ser o mais tecnicamente precisos possível e atualizados com as últimas informações do setor. Em cada post, esperamos fornecer informações bem escritas e de alta qualidade sobre novos temas e tecnologias, além de tutoriais focados no aprendizado do leitor. Se seu post for um tutorial passo a passo, cada passo deve ter um propósito claro e explicação, oferecendo opções e/ou flags adicionais quando apropriado.

Os escritores devem sempre revisar e testar seus posts para garantir que tudo esteja tecnicamente correto e funcione como esperado antes de enviar os rascunhos. A Equipe de Contribuição da ZAP vai ler e testar seu post quando necessário para garantir consistência e correção factual ou discutir melhorias caso haja erros.

:::tip
Recomendamos sempre que os escritores passem seu conteúdo por uma ferramenta de correção ortográfica para garantir que ortografia e gramática estejam corretas antes de enviar o rascunho. Um site útil para isso é: https://languagetool.org/
:::

### Prático & útil

Quando o leitor terminar de ler um post, ele deve ter aprendido, construído ou configurado algo do começo ao fim. Nossos posts visam apoiar leitores de qualquer experiência, portanto seu conteúdo deve explorar o tema completamente para garantir que o leitor fique informado e/ou tenha alcançado algo. Como escritor, isso significa cobrir seu tema a fundo, fornecendo todos os detalhes necessários, incluindo pré-requisitos quando apropriado. Você só deve enviar leitores para sites externos se não houver documentação existente no ZAP Docs ou se for para permitir que o leitor obtenha detalhes adicionais que não são obrigatórios para seu artigo, mas que podem ajudar a ampliar seu conhecimento técnico. Links externos não devem redirecionar para documentação de concorrentes.

### Amigável, formal & completo

Esperamos que nossa documentação seja moderna e amigável para ser acessível a qualquer leitor, mas ao mesmo tempo formal. Ao longo do post, você deve manter um tom aceitável para todos os leitores, independentemente da experiência ou barreiras linguísticas.

Como esses posts focam em apoiar o leitor para educá-lo e permitir que alcance um resultado, esperamos que os escritores usem a segunda pessoa (ex: "Você precisa...") em vez da primeira pessoa (ex: "Eu acho...") para manter o leitor engajado e o foco nele.

Por fim, todos os escritores devem seguir nosso código de conduta para garantir que os posts sejam aceitáveis para qualquer pessoa, independentemente de idade, etnia, identidade de gênero, nível de experiência, nacionalidade, religião, filiação política, orientação sexual, status socioeconômico ou escolhas tecnológicas. Você deve evitar qualquer linguagem potencialmente ofensiva e qualquer conteúdo relacionado aos tópicos mencionados.

## Formatação

Nosso Blog é formatado usando a linguagem Markdown, que é amplamente usada. Use as seções abaixo para entender quais elementos usamos e como podem ser usados nos seus posts.

Permitimos que os usuários usem qualquer ferramenta para criar conteúdo, porém recomendamos **fortemente** usar a ferramenta **[StackEdit](https://stackedit.io/app#)** para escrever seu conteúdo mantendo toda a funcionalidade incrível do Markdown. Você pode exportar direto para seu Google Drive ou qualquer app de compartilhamento e receber um link para compartilhar conosco.

:::tip
Para mais exemplos e explicações detalhadas sobre Markdown, acesse [Markdown Guide](https://www.markdownguide.org/cheat-sheet/) que oferece mais informações.
:::

### Cabeçalhos

Cabeçalhos são uma das opções de formatação mais importantes para separar posts de forma clara e lógica. O título principal é o cabeçalho H1.

Nos nossos blogs, cabeçalhos H2 devem ser usados para dividir o post em seções principais. Depois, H3 para dividir as seções principais em subseções. Um exemplo é dividir uma seção principal em vários passos para facilitar o acompanhamento. Por fim, há o H4, usado mais raramente, que serve para dividir ainda mais em subseções.

:::info
Se usar subtítulos (ex: H3 abaixo de H2), certifique-se de que haja dois ou mais títulos do mesmo nível dentro daquela seção, caso contrário é uso incorreto.
:::

Aqui um exemplo rápido de uso de cabeçalhos:

```
## Instalação
H2 - Seção Principal

### Baixando Arquivos do Servidor de Jogos
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

Usamos vários formatos inline para melhorar a legibilidade dos posts e atender leitores com diferentes níveis técnicos. Veja abaixo o uso de cada um.

#### Texto em negrito

O principal uso do negrito é para enfatizar informações. Exemplos incluem:

- Mudança de contexto entre passos
- Nomes do host, credenciais e nomes de usuário
- Termos-chave

Você pode usar dois asteriscos fora do texto para deixar em negrito, por exemplo, `**fala aí**` resulta em **fala aí**.

#### Itálico

O itálico é usado principalmente para introduzir novas palavras técnicas no artigo. Por exemplo, hoje vamos configurar um *bot de voz*.

Para usar itálico, coloque um asterisco fora do texto, por exemplo, `*ZAP-Hosting - Mais POWER!*` resulta em *ZAP-Hosting - Mais Power!*.

#### Código inline

O formato de código inline é usado para mostrar informações técnicas como URLs. Exemplos incluem:

- Nomes e caminhos de arquivos (ex: `C:/User/[SeuNome]/AppData....teste.png`)
- URLs (ex: `https://zap-hosting.com`)
- Portas (ex: `:30120`)
- Comandos (ex: `ipconfig`)
- Consultas SQL (ex: `SELECT * FROM servers`)
- Teclas e atalhos (ex: `ENTER` ou `CTRL + C`)

#### Tabelas

Outra funcionalidade útil do Markdown são as tabelas. São ótimas para mostrar muita informação repetitiva, como comandos, descrições e usos dentro de um jogo. Exemplo:

```
| Comando     | Descrição               | Uso                   |
| ----------- | ----------------------- | --------------------- |
| /help       | Envia comando de ajuda  | /help [categoria]     |
| /stop       | Para o servidor         | /stop [true/false]    |
```

#### Blocos de código

Blocos de código são muito úteis para posts que envolvem comandos, scripts, saída de terminal e mais.

Para usar um bloco de código, use ` ``` ` fora do texto que quer colocar no bloco. Você pode indicar a linguagem logo após as três crases para formatar corretamente. Exemplo com JavaScript:

```js
function hello(name) {
    console.log(name)
}

var server = "ZAP-Hosting"
hello(server)
```

### Capturas de tela

Capturas de tela são um método super útil para guiar visualmente os leitores pelos passos e recomendamos usar sempre que possível.

Você pode usar a sintaxe abaixo para adicionar uma captura, substituindo `your_url` pela URL da imagem:
```
![](your_url)
```

O ideal é usar um site de hospedagem de imagens como [Imgur](https://imgur.com/) para subir e usar a imagem no markdown.

## Terminologia

Nos nossos posts, há uma variedade de termos-chave usados. Esperamos que você use a grafia em inglês americano para garantir consistência em todos os posts. Nesta seção, padronizamos alguns termos comuns.

### Produtos ZAP-Hosting

Ao mencionar um produto ZAP-Hosting, sempre use o nome, grafia e capitalização corretos. Você pode conferir isso no [site da ZAP-Hosting](https://zap-hosting.com) na página do produto.

### Atributos definidos pelo usuário

Em alguns posts, opções de configuração para usuários, nomes do host, domínios, endereços IP e URLs podem ser necessárias, onde o leitor deve usar seus próprios dados no lugar dos espaços reservados.

Por padrão, use sempre `[seu_atributo]` para diferenciar elementos estáticos dos únicos, onde `[atributo]` deve ser substituído pelo tipo. Por exemplo, ao mencionar um IP, use `[seu_ip_do_servidor]` ou ao mencionar uma URL, `http://[seu_ip_do_servidor]:30120`. Isso deixa claro quais atributos o leitor deve alterar conforme sua configuração. Você também deve explicar ou avisar o leitor sobre quais atributos mudar quando for a primeira vez que aparecer no post para garantir entendimento.

Use `zaphosting` como nome padrão para host, usuário ou banco de dados.

### Software

Ao mencionar software no post, garanta que a grafia e capitalização estejam corretas. Se o site do software não for consistente, mantenha a mesma capitalização dentro do artigo para consistência.

Você deve linkar para o site oficial do software na primeira vez que mencioná-lo, sempre que houver um site oficial disponível.