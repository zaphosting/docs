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

A estrutura pode ser alterada ocasionalmente dependendo do tipo de guia produzido. Isso pode ser discutido com a equipe ZAP-Docs na sua sugestão inicial. Você pode ver como utilizar os títulos via a seção de headers, que é feita através do Markdown tradicional.

A estrutura que normalmente esperamos ver teria os seguintes títulos:

- **Título da Página** (H1) - Este é definido via o metadado `title` no topo da página.
- **Introdução** (H2) - Breve texto de 1-2 frases que explica o tema do guia e, mais importante, o que o guia pretende alcançar.
- **Preparação** (H2) - Este título é **opcional**. Só é necessário se houver certos pré-requisitos ou passos de preparação que precisam ser feitos antes que o leitor possa seguir o guia. Por exemplo, aqui você poderia referenciar nosso guia de [Acesso Inicial SSH](vserver-linux-ssh.md) se o usuário precisar fazer login no servidor primeiro. Ou pode apresentar requisitos de software e/ou hardware necessários. Ou pode fornecer instruções rápidas de como preparar algum software, como um firewall. Recomendamos navegar pelo nosso [site ZAP-Docs](https://zap-hosting.com/guides) para ver se há algum guia que cubra esses passos e, se houver, linkar para eles.
- **Tópico Principal** (H2) - Esta é a sua primeira seção principal do guia. Em muitos casos, provavelmente será definido como **Instalação**, seguido por várias subseções para cada parte do processo. Mas nem sempre será assim, por exemplo, guias informativos podem ter um tópico principal diferente.
- Opcional: **Subtópico 1** (H3)
- Opcional: **Subtópico 2** (H3)
- ...
- Opcional: **Outro Tópico** (H2)
- **Conclusão** (H2) - Como parte final do guia, você deve encerrar o guia em 1-3 frases explicando o que o leitor conseguiu realizar e fornecer uma referência para nosso Time de Suporte caso o leitor ainda tenha problemas.

:::info Uso de Subtítulos (H3 & H4)
Você é incentivado a usar títulos H3 para criar subseções dentro das seções principais H2 para organizar melhor blocos maiores de conteúdo em seções organizadas. Um exemplo pode ser visto na seção **Tópico Principal** acima.

Você também pode usar títulos H4. Eles são úteis se quiser criar outra subseção sem exibi-la na divisão da seção à direita do guia. Também são úteis se precisar dividir ainda mais uma seção H3 em partes menores.

Se estiver usando subtítulos, geralmente faz sentido ter pelo menos dois ou mais subtítulos dentro do título pai, caso contrário normalmente não faz sentido ter apenas um subtítulo dentro de um título principal.
:::

No futuro, adicionaremos templates com Markdown pré-preparado para você, que serão um ponto de partida útil para criar novas páginas. Isso será adicionado em breve.

### Títulos

Os títulos devem ser concisos e refletir claramente o objetivo principal do guia. Pense no que o leitor vai alcançar ao final, como completar uma instalação, configurar um serviço ou entender um tópico técnico específico. O resultado deve ser imediatamente reconhecível pelo título.

Cada título deve começar com o prefixo apropriado da categoria do produto. Esse prefixo deve corresponder à seção onde o guia está colocado na barra lateral. Revisar guias existentes na mesma categoria ajuda a garantir convenções de nomes consistentes.

Por exemplo, um guia relacionado ao produto VPS deve seguir uma estrutura como: `VPS: Configuração SteamCMD Linux`.

Se um guia for escrito de forma geral e se aplicar igualmente a vários produtos, como uma instalação de serviço ou servidor de jogos que funcione tanto em VPS quanto em servidores dedicados, o nome do produto não deve ser incluído no título. Nesses casos, o guia é intencionalmente independente do produto e, portanto, não requer um prefixo específico.

### Introdução

As introduções do seu guia devem ser relativamente curtas e diretas, normalmente com 1-2 frases. No conteúdo, você deve descrever brevemente o tema em questão e, mais importante, explicar o que o guia vai apresentar ao leitor, informando o objetivo final.

Um exemplo de introdução ideal para um guia relacionado ao SteamCMD seria:

- **1ª frase**: SteamCMD é uma ferramenta essencial necessária para instalar servidores dedicados para uma grande variedade de jogos, incluindo Palworld, Enshrouded e mais.
- **2ª frase**: Neste guia, vamos explorar o processo de configuração inicial para instalar o SteamCMD no seu servidor Linux. Usaremos Ubuntu nos exemplos, mas o processo deve ser muito parecido para outras distribuições.

Como visto no exemplo, ele resume brevemente os tópicos relevantes deste guia e apresenta o objetivo geral para o leitor ao seguir o guia.

### Preparação

A seção de preparação é útil para esclarecer quaisquer pré-requisitos necessários que o leitor deve cumprir antes de poder seguir o guia. Isso pode ser requisitos de software ou hardware, instruções para preparar algum software como um firewall ou simplesmente guiar o usuário a fazer login no servidor via SSH ou RDP.

Recomendamos fortemente navegar pelo nosso [site ZAP-Docs](https://zap-hosting.com/guides) para buscar guias que possam cobrir ou estar relacionados a qualquer passo de preparação que você planeja incluir. Se houver um guia cobrindo o tópico, por exemplo [Acesso Inicial SSH](vserver-linux-ssh.md), você deve linkar o guia e informar o leitor para seguir antes de prosseguir.

Pré-requisitos comuns para guias incluem:

- Software necessário (ex: Git, Node.js, Python, Docker)
- Tutoriais que podem ajudar o leitor a adquirir conhecimento básico (ex: outra página ZAP-Docs)
- Contas de usuário como APIs
- Configurações necessárias (ex: DNS/SSL)

Um exemplo disso para um guia de Reverse Proxy seria:
```
Para configurar um reverse proxy, você precisará de um servidor Linux para hospedar seu proxy e deve se conectar a ele. Use nosso guia [Acesso Inicial SSH](vserver-linux-ssh.md) se precisar de ajuda para isso. Você também precisará de acesso a um domínio que possua. Para cada subdomínio que planeja usar, deve criar um registro DNS `A`, apontando para o endereço IP do seu servidor Linux.
```

### Tópico Principal

Agora é hora de escrever a maior parte do seu guia. Você pode usar vários títulos H2, H3 e H4 para estruturar seu guia adequadamente. Faz sentido usar títulos H2 para grandes seções e dividi-las em subseções usando H3 e/ou H4.

Em muitos casos, especialmente em guias que cobrem o processo de configuração de software, você provavelmente usará um título **Instalação** dividido em várias subseções H3. Se estiver com dificuldade para definir uma estrutura correta, não se preocupe, pois trabalharemos com você durante a fase de sugestão para planejar uma estrutura bem equilibrada.

Dentro de cada seção, é recomendado adicionar breves frases de entrada e fechamento para informar o leitor sobre o que ele fez até agora e o que fará a seguir. Claro, isso não é necessário na última seção principal, que naturalmente transiciona para a conclusão.

Exemplos dessas frases são:

- **Frase de entrada**: Nesta seção, você passará pelo processo de configuração para personalizar o software conforme suas preferências.
- **Frase de fechamento**: Com a configuração pronta e o arquivo salvo, vá para a próxima seção para configurar a conta de administrador e começar a usar o software.

Essas frases de transição dão contexto importante para o leitor, garantindo que o guia flua bem. Lembre-se, você deve sempre usar a segunda pessoa (ex: "Você vai criar") em vez da primeira pessoa ao escrever seu conteúdo e transições.

### Conclusão

Por fim, a última seção é a conclusão do guia. Essa seção deve encerrar o guia em 1-3 frases explicando o que o leitor conseguiu realizar e fornecer referências para leituras adicionais ou guias que possam expandir o conhecimento sobre o tema.

Seria ótimo linkar quaisquer guias ZAP-Docs existentes aqui, especialmente se eles seguirem naturalmente após seu guia. Também recomendamos fornecer uma referência para nosso Time de Suporte caso o leitor ainda tenha problemas.

Um exemplo de boa conclusão é:
```
Você configurou com sucesso o software para rodar no seu servidor Linux! Recomendamos navegar pelos nossos guias de Serviços Linux encontrados nesta seção para instalar outros serviços.

Para dúvidas ou assistência, não hesite em contatar nosso time de suporte, disponível diariamente para ajudar você! 🙂
```

## Estilo

O estilo de escrita dos docs ZAP-Hosting segue nossa crença em produzir guias de alta qualidade, práticos e facilmente acessíveis para apoiar uma ampla variedade de tópicos e leitores de qualquer nível de experiência.

### Técnico & correto

Nossos artigos buscam ser o mais tecnicamente precisos possível e atualizados com as últimas informações do setor. Esperamos que os artigos não só permitam que o usuário alcance o objetivo final de aprender, construir ou configurar algo novo, mas também que ele aprenda e entenda o que fez durante o artigo. Cada passo que você criar dentro de um guia deve ter um propósito claro e explicação, oferecendo opções adicionais e/ou flags quando apropriado. Você deve sempre manter o leitor informado sobre o que está fazendo e por que está fazendo as ações que fazem parte do guia.

Os escritores devem sempre revisar e testar seus guias para garantir que tudo esteja tecnicamente correto e funcione como esperado antes de enviar um pull request. A equipe dos docs ZAP-Hosting lerá e testará seu guia quando apropriado para garantir que seja consistente e factualmente correto ou discutirá melhorias caso haja algum erro.

:::tip
Sempre recomendamos que nossos escritores passem seu conteúdo por uma ferramenta de correção ortográfica para garantir que ortografia, pontuação e gramática estejam corretas antes de criar um pull request. Um site útil para isso é: https://languagetool.org/
:::

### Prático & útil

Quando o leitor terminar um artigo, ele deve ter aprendido, construído ou configurado algo do começo ao fim. Nossos guias visam apoiar leitores de qualquer experiência, portanto suas contribuições devem explorar completamente o tema para garantir que o leitor fique bem informado e/ou tenha alcançado algo. Isso significa que, como escritor, você deve cobrir seu tema a fundo, mencionando todos os detalhes necessários, incluindo pré-requisitos. Como escritor, você só deve enviar leitores para sites externos se não houver documentação existente sobre isso nos ZAP-Docs ou se for para o usuário obter detalhes adicionais que não são necessários para seu artigo, mas podem ajudar a ampliar seu conhecimento técnico. Links externos não devem redirecionar para documentação de concorrentes.

### Amigável, formal & abrangente

Esperamos que nossa documentação seja moderna e amigável para tornar o acesso fácil para qualquer leitor, mas ao mesmo tempo mantenha formalidade. Ao longo do seu guia, queremos que o tom da escrita seja aceitável para todos os leitores, independentemente da experiência ou barreiras linguísticas.

Como esses guias focam principalmente em apoiar o leitor para educá-lo e permitir que alcance um resultado, esperamos que os escritores usem a segunda pessoa (ex: "Você precisa...") em vez da primeira pessoa (ex: "Eu acho...") para manter o leitor engajado e o foco nele.

Por fim, todos os escritores devem seguir nosso código de conduta para garantir que nossos guias sejam inclusivos para qualquer pessoa, independentemente de idade, etnia, identidade de gênero, nível de experiência, nacionalidade, religião, filiação política, orientação sexual, status socioeconômico ou escolhas tecnológicas. Você deve evitar qualquer linguagem potencialmente ofensiva e qualquer outro conteúdo que faça referência aos tópicos mencionados.

## Formatação

Nossa documentação é formatada através da linguagem de marcação Markdown, que é amplamente usada e relativamente simples. Confira as seções abaixo para entender quais usamos e como são usadas.

:::tip
Para mais exemplos e explicações detalhadas sobre recursos do Markdown, acesse [Markdown Guide](https://www.markdownguide.org/cheat-sheet/) que oferece mais informações.
:::

### Títulos

Títulos são uma das opções de formatação mais importantes usadas para separar as páginas de forma compreensiva e lógica. O título principal é o header H1, porém você nunca deve usá-lo no texto. Em vez disso, use o metadado `title` no topo do arquivo do guia, que é responsável por isso.

Nos nossos guias, os títulos H2 devem ser usados para dividir o guia em suas seções principais. Depois, títulos H3 devem ser usados para dividir as seções principais em subseções. Um exemplo onde isso pode ser apropriado é dividir uma seção principal em vários passos para facilitar o acompanhamento do guia. Por fim, há também o título H4, que é usado mais raramente na nossa documentação, mas serve para dividir em subseções menores, sem aparecer na estrutura do guia.

:::info
Se estiver usando subtítulos (ex: títulos H3 abaixo de títulos H2), certifique-se de que haja dois ou mais títulos do mesmo nível dentro daquela seção, caso contrário isso será uso incorreto.
:::

Aqui está um exemplo rápido de como usar títulos:

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

Usamos vários formatos inline para melhorar a legibilidade dos nossos guias e atender leitores com diferentes níveis técnicos. Leia a seção abaixo para entender o uso de cada um.

#### Texto em negrito

O principal uso do negrito é para enfatizar informações. Exemplos incluem:

- Mudança de contexto entre passos
- Nomes do host, credenciais e nomes de usuário
- Termos-chave

Você pode usar dois asteriscos antes e depois do texto para deixar em negrito, por exemplo, `**olá pessoal**` resulta em **olá pessoal**.

#### Itálico

O uso principal do itálico é para introduzir novas palavras técnicas no seu artigo. Por exemplo, hoje vamos configurar um *bot de voz*.

Para usar itálico, basta colocar um asterisco antes e depois do texto, por exemplo, `*ZAP-Hosting - Mais POWER!*` resulta em *ZAP-Hosting - Mais POWER!*.

#### Código inline

A formatação de código inline é usada principalmente para mostrar informações técnicas como URLs. Exemplos incluem:

- Nomes e caminhos de arquivos (ex: `C:/User/[seu_nome]/AppData....teste.png`)
- URLs (ex: `https://zap-hosting.com`)
- Portas (ex: `:30120`)
- Comandos (ex: `ipconfig`)
- Queries SQL (ex: `SELECT * FROM servers`)
- Teclas e combinações (ex: `ENTER` ou `CTRL + C`)

#### Tabelas

Outra funcionalidade útil do Markdown são as tabelas. Elas são especialmente úteis para mostrar muitas informações repetitivas, como comandos, descrições e usos disponíveis dentro de um jogo. Exemplo de tabela:

```
| Comando     | Descrição               | Uso                   |
| ----------- | ----------------------- | --------------------- |
| /help       | Envia comando de ajuda  | /help [categoria]     |
| /stop       | Para o servidor         | /stop [true/false]    |
```

#### Blocos de código

Blocos de código são muito úteis para guias que envolvem comandos, scripts, saída de terminal e mais.

Para usar um bloco de código, basta usar ` ``` ` antes e depois do texto que deseja colocar no bloco. Você também pode indicar a linguagem logo após as três crases para formatar corretamente a linguagem de programação. Exemplo de bloco de código em JavaScript:

```js
function hello(name) {
    console.log(name)
}

var server = "ZAP-Hosting"
hello(server)
```

### Uso de Admonições

Admonições são usadas para destacar informações importantes no seu guia. Existem cinco tipos disponíveis, cada um com um propósito diferente.

Ao usar admonições, um título claro e descritivo deve sempre ser definido. O título garante que os leitores entendam imediatamente o contexto e a importância da informação destacada sem precisar ler o texto completo primeiro.

A sintaxe geral é idêntica para todos os tipos. Apenas a palavra-chave muda conforme o propósito:

```
:::warning Título
	Seu conteúdo vai aqui.
:::
```

#### Nota

:::note Exemplo: Informação Adicional
Use este tipo para informações suplementares que podem ajudar o leitor, mas não são essenciais para completar o guia.
:::

#### Dica

:::tip Exemplo: Dica de Otimização de Performance
Use este tipo para compartilhar conselhos práticos, melhores práticas ou melhorias de eficiência baseadas em experiência.
:::

#### Informação

:::info Exemplo: Requisito ou Detalhe Importante
Use este tipo para informações contextuais importantes que o leitor deve estar ciente antes ou durante o processo.
:::

#### Cuidado

:::caution Exemplo: Risco de Configuração
Use este tipo para alertar o leitor sobre possíveis problemas ou erros que podem ocorrer ao seguir o guia.
:::

#### Perigo

:::danger Exemplo: Bug Conhecido ou Recurso Obsoleto
Use este tipo para avisos críticos. Isso inclui bugs conhecidos, ações irreversíveis, riscos de segurança ou recursos obsoletos que podem causar problemas sérios.
:::

### Capturas de tela

Capturas de tela são um método extremamente útil para guiar visualmente os leitores pelos passos e recomendamos usá-las quando apropriado. Certifique-se de que todo o conteúdo visível nas capturas esteja em inglês, pois nossa documentação é escrita em inglês e as mesmas capturas serão usadas para os outros idiomas que oferecemos nos docs. As capturas devem ter resolução suficientemente alta para que todos os elementos fiquem legíveis. Evite imagens pequenas ou muito recortadas.

Você pode usar a seguinte sintaxe para adicionar uma captura ao seu conteúdo, substituindo `your_url` pela URL da imagem:

```
![](your_url)
```

A melhor prática é usar um site como Imgur para fazer upload e usar a imagem, ou alternativamente você pode arrastar diretamente para o campo de edição se estiver usando o site do GitHub para criar seu conteúdo, que fará o upload automaticamente para você.

## Terminologia

Ao longo da nossa documentação, haverá uma ampla variedade de termos-chave usados. Esperamos que você use a grafia localizada em inglês americano para garantir consistência em todos os nossos artigos. Nesta seção, padronizamos alguns termos que provavelmente serão usados com frequência.

### Produtos ZAP-Hosting

Ao referenciar um produto ZAP-Hosting, sempre garanta que o nome, grafia e capitalização estejam corretos. Você pode conferir isso acessando [o site ZAP-Hosting](https://zap-hosting.com) e verificando como o produto é referenciado na página do produto relevante.

### Atributos definidos pelo usuário

Na maioria dos guias, opções de configuração para itens como usuários, nomes do host, domínios, endereços IP e URLs serão necessárias, onde o leitor deve usar seus próprios dados no lugar dos nossos placeholders.

Por padrão, você deve sempre usar `[seu_atributo]` para diferenciar entre elementos estáticos e únicos, onde `atributo` deve ser substituído pelo tipo de atributo. Por exemplo, ao mencionar um IP, você deve usar `[seu_ip_do_servidor]` no seu guia ou ao mencionar uma URL deve usar `http://[seu_ip_do_servidor]:30120`.

Isso diferencia claramente os atributos que o leitor precisa alterar conforme sua própria configuração. Você também deve fornecer uma explicação ou nota informando quais atributos precisam ser alterados ao longo do guia quando forem mencionados pela primeira vez para garantir que tudo seja entendido.

Use `zaphosting` como nome padrão para hostname, nome de usuário ou nome de banco de dados.

### Software

Ao mencionar software nos seus guias, garanta que siga a grafia e capitalização corretas do nome do software. Se o site do software não for consistente com a capitalização, mantenha a mesma capitalização dentro de um único artigo para manter a consistência.

Você deve linkar para o site oficial do software na primeira vez que mencioná-lo, sempre que houver um site oficial disponível.