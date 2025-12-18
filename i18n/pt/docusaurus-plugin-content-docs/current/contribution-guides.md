---
id: contribution-guides
title: Processo de Guias
description: "Descubra como contribuir com guias valiosos e originais para o ZAP-Docs e ajude a educar os usuários com conteúdo claro e prático → Saiba mais agora"
sidebar_label: Processo de Guias
---

![Banner de Guias](https://screensaver01.zap-hosting.com/index.php/s/4aaqq3zctZFW4JJ/preview)

Saiba mais sobre o processo para contribuir com nossos ZAP-Docs nesta página. O processo está escrito em ordem cronológica ao longo desta página, por isso recomendamos começar por aqui.

## Passo 1: Sugerindo Conteúdo

A primeira parte do processo envolve criar uma issue de sugestão via nosso repositório no GitHub. Você deve nos fornecer detalhes sobre as mudanças e melhorias que planeja produzir.

Por favor, certifique-se de que sua ideia não é uma duplicata de algum guia ou sugestão existente e que você realmente acredita que será útil para iniciantes ou usuários mais avançados. Você pode ver as sugestões existentes acessando a [Página de Issues](https://github.com/zaphosting/docs/issues?q=is%3Aissue).

:::tip
Recomendamos revisar nossas [Diretrizes](contribution-guides-guidelines.md) para entender o estilo de conteúdo e documentação que buscamos.
:::

### Que tópicos estamos procurando?

Nos nossos guias, buscamos uma ampla variedade de guias práticos e de alta qualidade cobrindo produtos, serviços e software open-source disponível através do ZAP-Hosting ou relacionado a qualquer serviço que oferecemos. Se precisar de ideias ou inspiração, confira nossas páginas no ZAP-Docs para sentir nosso estilo de escrita e o tipo de conteúdo que publicamos.

Como mencionado na introdução, todo conteúdo produzido deve ser original para cumprir as leis de direitos autorais. Qualquer uso não autorizado de ferramentas de IA/generativas e/ou outras propriedades intelectuais é estritamente proibido. Nossos guias têm como objetivo fornecer informações de alta qualidade através de uma série de passos para garantir que o leitor entenda o que está fazendo e como pode fazer, com o objetivo final de educar o leitor e fornecer a solução.

#### Lista de Guias Desejados

Temos uma lista útil de ótimas sugestões abaixo, para novos guias que você pode se interessar em escrever. Alguns tópicos e sugestões de guias podem até ter um bônus extra de recompensa. Você pode acessar a [lista manualmente aqui](https://docs.google.com/document/d/13R321FP6Yo3TMQZ07vMARQFlX6n_Or6RIrLpU7IsMfs/edit?usp=sharing).

<iframe width="800" height="750" src="https://docs.google.com/document/d/e/2PACX-1vRACoNJMjk3rcWyo6LDt8WCvtqB17JpdjsPW3YHpLaZJgfPxGlt4pDEnD1ezOwGW1eljWZYPSyfgrb3/pub?embedded=true"></iframe>
<br></br>

:::note
Lembre-se, essas são apenas ideias úteis, você **não precisa** escrever estritamente sobre elas, suas sugestões de guias podem ser criativas como mencionado anteriormente.
:::

### Enviando a sugestão

Agora que você está confiante de que sua sugestão é apropriada para nossa documentação, vá para o nosso [repositório ZAP Docs no GitHub](https://github.com/zaphosting/docs) e abra uma issue usando o template **Contribution Suggestion**. Por favor, siga o template fornecido e preencha todos os detalhes necessários. Você também será solicitado a confirmar que aceita nossos Termos & Condições para o Programa de Contribuição, que podem ser vistos em [Termos de Contribuição](contribution-terms.md).

:::caution
Por favor, certifique-se de preencher seu ID ZAP corretamente para garantir que você receba sua recompensa na conta certa!
:::

Agora que você enviou sua sugestão, nosso objetivo é responder em 3-5 dias. Você receberá uma resposta diretamente na sua issue do GitHub.

:::tip
**Está com algum problema?** Sinta-se à vontade para entrar no nosso [Servidor Discord do ZAP-Hosting](https://zap-hosting.com/discord), onde nós e a comunidade ZAP ficaremos felizes em ajudar com qualquer dúvida. Alternativamente, entre em contato via [Ticket no nosso site](https://zap-hosting.com/en/customer/support/) e mencione "Programa de Contribuição - Guias" na sua mensagem para ser encaminhado ao time de Contribuições do ZAP-Hosting.
:::

Na nossa resposta, forneceremos feedback adicional ou detalhes que desejamos ajustar sobre sua sugestão. Se houver algum problema, entraremos em contato diretamente na sua issue do GitHub.

## Passo 2: Escrevendo o Guia

Ao fazer qualquer adição ou alteração na nossa documentação, por favor, siga nossas [Diretrizes](contribution-guides-guidelines.md) cuidadosamente para garantir consistência e um produto final de alta qualidade. Nesta subseção, vamos aprofundar as melhores práticas e o fluxo de trabalho ideal para criar novo conteúdo, mas também para modificar conteúdo existente. Se você é novo no uso do GitHub, use os tutoriais rápidos abaixo para entender a forma mais fácil de editar ou criar conteúdo novo para nossos ZAP-Docs.

:::note
Certifique-se de ter criado uma sugestão no nosso [Repositório GitHub](https://github.com/zaphosting/docs) e que ela tenha sido aprovada por um membro do time de Contribuição do ZAP antes de começar a trabalhar em um novo guia ou alterações. Não poderemos garantir recompensa se você não seguir o processo e não for aprovado.
:::

**Pré-requisitos:**
- [Conta no GitHub](https://github.com/)

O primeiro passo é criar seu próprio fork do repositório ZAP-Docs no GitHub. Você pode fazer isso indo para o [repositório ZAP Docs no GitHub](https://github.com/zaphosting/docs) e clicando no botão **Fork** no topo da página.

![](https://screensaver01.zap-hosting.com/index.php/s/3AGoSTE7dGTsdz7/preview)

Você deve nomear o repositório baseado na sugestão que foi aceita e marcar a opção `Copy the master branch only`. Depois, clique em criar e aguarde alguns segundos até que o fork seja criado com sucesso.

Com seu fork pronto, você pode seguir para a próxima seção para completar sua contribuição. Existem dois métodos principais para produzir conteúdo, seja diretamente pelo site do GitHub ou clonando o repositório localmente. A vantagem do primeiro é que é muito mais amigável, enquanto a vantagem do segundo é que você pode testar o Docusaurus localmente para ver as mudanças ao vivo.

:::tip
Para iniciantes ou quem não tem muita experiência com Git, recomendamos usar o **Método 1** para escrever seu conteúdo, pois é mais amigável, rápido e tudo é feito via navegador pelo site do GitHub. Essa abordagem é muito mais prática pois não requer configuração local.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Métodos para Criar Guias

<Tabs>
<TabItem value="direct" label="Método 1: Diretamente pelo site do GitHub" default>

A forma mais fácil e recomendada de criar conteúdo é pelo site do GitHub. Nesta seção, vamos mostrar como criar um novo guia e editar um guia existente pelo site do GitHub.

Para começar, vá para o fork que você criou no passo anterior. Uma vez no seu fork do ZAP Docs, você pode acessar todos os guias da documentação pela pasta **docs**.

![](https://screensaver01.zap-hosting.com/index.php/s/dqptZFrSTrBBHAJ/preview)

Os arquivos de documentação seguem uma convenção simples, onde a primeira palavra se refere ao tipo de guia, normalmente um jogo, produto ou seção, e as palavras seguintes se referem à seção específica. Recomendamos olhar nosso site atual do [ZAP-Docs](https://zap-hosting.com/guides) para navegar e encontrar a área correta onde o guia deve estar. Por exemplo, `dedicated-windows.md` se refere à seção de Servidor Dedicado, especificamente para o sistema operacional Windows.

Agora você deve abrir um arquivo de guia existente ou criar um novo, dependendo se sua contribuição é para atualizar um guia ou criar um novo. Use a aba apropriada abaixo para as instruções relevantes, pois um novo guia requer uma preparação extra do arquivo.

<Tabs>
<TabItem value="direct_new" label="Criar um novo arquivo de guia" default>

Neste exemplo, nossa sugestão foi criar um novo guia para o jogo Rust, especificamente sobre comandos que o jogo oferece. Ao verificar o site ZAP-Docs e/ou o repositório, vemos que já existe uma seção **Rust** na categoria de produtos servidores de jogos. Baseado na convenção de nomes mencionada e nos guias existentes, podemos inferir que o novo guia deve se chamar `rust-commands.md`.

Para criar um novo arquivo, vá para o [Repositório GitHub](https://github.com/zaphosting/docs), abra a pasta **docs** e no lado direito da tela, selecione **Add File**. No menu, clique em **Create new file**, que abrirá uma nova aba.

![](https://screensaver01.zap-hosting.com/index.php/s/xgL3QF9HzJnwARA/preview)

No topo da página, no diretório do arquivo, defina o nome do arquivo. Como estabelecido, será `rust-commands.md` no nosso exemplo.

:::info
Por favor, certifique-se de adicionar a extensão `.md` pois todos os guias estão no formato Markdown.
:::

Agora, a próxima parte envolve adicionar metadados chave no início do arquivo. A forma mais fácil é abrir outro arquivo, como `rust-plugins.md`, e copiar as tags de metadados do topo. Depois, ajuste cada valor para combinar com seu novo guia, sendo o mais importante o campo `id`, que **deve** corresponder ao nome do arquivo (sem o `.md`).

No nosso exemplo, o arquivo deve conter o seguinte:
```
---
id: rust-commands
title: "Rust: Comandos de Admin"
description: "Informações sobre comandos de Admin para Rust no ZAP-Hosting"
sidebar_label: Comandos de Admin
services:
  - gameserver
---
```

:::note
Nós revisamos os metadados durante nosso processo de análise, então não se preocupe se tiver dificuldades com isso e apenas continue.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/2CJFHoc5LeD4YSn/preview)

</TabItem>

<TabItem value="direct_existing" label="Editar um arquivo de guia existente" default>

Neste caso, você deve abrir o arquivo alvo que deseja editar. No exemplo, usaremos `dedicated-linux-satisfactory.md`, que você encontra na pasta `/docs` do repositório. Depois de abrir o arquivo, verá uma prévia básica de como ele fica em Markdown.

Vá para o canto superior direito do arquivo e clique no ícone de editar (caneta). Isso abrirá uma nova aba onde você pode editar o arquivo diretamente.

![](https://screensaver01.zap-hosting.com/index.php/s/SZTsAikipzCZcg3/preview)

</TabItem>
</Tabs>

#### Continuar: Criando conteúdo

Agora que você preparou e abriu seu arquivo, pode começar a escrever o conteúdo que foi acordado na sua sugestão. Recomendamos salvar ou fazer commits regularmente para garantir que não perca seu trabalho.

:::tip Mantenha seu trabalho seguro
Enquanto escreve seu conteúdo, certifique-se de fazer commits regulares ou salvar cópias, pois o editor do GitHub não tem auto-save. Se fechar a aba do navegador ou algo acontecer, você pode perder progresso.

Recomendamos **fortemente** usar a ferramenta Markdown **[StackEdit](https://stackedit.io/app#)** para escrever seu conteúdo, pois permite salvar localmente e até sincronizar com seu drive ou contas diversas. Quando terminar, basta copiar e colar o conteúdo no arquivo no site do GitHub e fazer o commit.
:::

Você pode usar o botão **Preview** no topo da janela de edição para alternar para o modo de pré-visualização, que mostrará uma prévia básica, e voltar para edição pelo botão **Edit**.

![](https://screensaver01.zap-hosting.com/index.php/s/4YcQo6q3iAAGYkZ/preview)

:::note Elementos Docusaurus
Lembre-se que alguns elementos específicos do Docusaurus, como admonições (tags como `:::note`, `:::tip` etc.) ou abas, podem não aparecer corretamente na prévia pelo GitHub. Isso porque não fazem parte do Markdown tradicional, mas aparecerão corretamente durante testes locais e na produção.
:::

:::info Siga nossas Diretrizes
Consulte as [Diretrizes](contribution-guides-guidelines.md) para tudo sobre Markdown, estrutura, terminologia e mais.
:::

Depois de fazer suas alterações, use o botão **Commit changes...** que abrirá um prompt.

![](https://screensaver01.zap-hosting.com/index.php/s/2iQCZzzAHsHS2rt/preview)

Digite uma mensagem de commit útil que explique o que você fez e uma descrição estendida, se necessário. Por fim, confirme as alterações. Isso fará o commit no seu fork dos docs. Agora você pode ir para a seção **Enviando Conteúdo** para criar um Pull Request e enviar o conteúdo para o repositório principal do ZAP-Docs.

</TabItem>

<TabItem value="local" label="Método 2: Localmente via IDE (git cloning)">

Você pode preferir escrever conteúdo localmente via IDE ou editor, como Visual Studio Code. Nesta seção, mostramos como criar um novo guia e editar um guia existente localmente.

**Pré-requisitos:**
- IDE de sua escolha, neste exemplo usaremos [Visual Studio Code](https://code.visualstudio.com/)
- [GitHub Desktop](https://desktop.github.com/) (ou qualquer outro com funcionalidade Git)

O primeiro passo é clonar seu repositório fork. A forma mais simples e amigável é pelo GitHub Desktop, selecionando **Add**, depois **Clone repository** e escolhendo seu fork. Você também pode fazer isso direto pela IDE se ela tiver funcionalidade Git.

![](https://screensaver01.zap-hosting.com/index.php/s/g8AwEcGa6mBrQ75/preview)

Depois, abra a pasta do repositório no Visual Studio Code. Na aba **Explorer** à esquerda, você verá todas as pastas do repositório.

Os arquivos de documentação seguem uma convenção simples, onde a primeira palavra se refere ao tipo de guia, normalmente um jogo, produto ou seção, e as palavras seguintes se referem à seção específica. Recomendamos olhar nosso site atual do [ZAP-Docs](https://zap-hosting.com/guides) para navegar e encontrar a área correta onde o guia deve estar. Por exemplo, `dedicated-windows.md` se refere à seção de Servidor Dedicado, especificamente para o sistema operacional Windows.

Agora você deve abrir um arquivo de guia existente ou criar um novo, dependendo se sua contribuição é para atualizar um guia ou criar um novo. Use a aba apropriada abaixo para as instruções relevantes, pois um novo guia requer uma preparação extra do arquivo.

<Tabs>
<TabItem value="local_new" label="Criar um novo arquivo de guia" default>

Neste exemplo, nossa sugestão foi criar um novo guia para o jogo Rust, especificamente sobre comandos que o jogo oferece. Ao verificar o site ZAP-Docs e/ou o repositório, vemos que já existe uma seção **Rust** na categoria de produtos servidores de jogos. Baseado na convenção de nomes mencionada e nos guias existentes, podemos inferir que o novo guia deve se chamar `rust-commands.md`.

Abra a pasta `/docs` na sua IDE e crie um novo arquivo com o nome apropriado para seu novo guia.

:::info
Por favor, certifique-se de adicionar a extensão `.md` pois todos os guias estão no formato Markdown.
:::

Agora, a próxima parte envolve adicionar metadados chave no início do arquivo. A forma mais fácil é abrir outro arquivo, como `rust-plugins.md`, e copiar as tags de metadados do topo. Depois, ajuste cada valor para combinar com seu novo guia, sendo o mais importante o campo `id`, que **deve** corresponder ao nome do arquivo (sem o `.md`).

No nosso exemplo, o arquivo deve conter o seguinte:
```
---
id: rust-commands
title: "Rust: Comandos de Admin"
description: "Informações sobre comandos de Admin para Rust no ZAP-Hosting"
sidebar_label: Comandos de Admin
services:
  - gameserver
---
```

:::note
Nós revisamos os metadados durante nosso processo de análise, então não se preocupe se tiver dificuldades com isso e apenas continue.
:::

O passo final para garantir que sua nova página apareça na sidebar do Docusaurus é adicioná-la ao arquivo `sidebar.js` na seção correta. Como a seção **Rust** já existe, você pode encontrá-la usando `CTRL+F` e buscando por rust.

Abaixo do último item, crie uma nova linha e insira o nome do seu arquivo, no nosso exemplo, `rust-commands`. Se uma seção apropriada ainda não existir, você pode seguir o formato das outras seções para adicionar uma nova.

![](https://screensaver01.zap-hosting.com/index.php/s/TwKjWmCofG5Rs8f/preview)

:::note
Certifique-se de adicionar uma vírgula (`,`) na linha antes da sua nova linha para que a sintaxe fique correta.
:::

</TabItem>

<TabItem value="local_existing" label="Editar um arquivo de guia existente" default>

Editar um arquivo existente é bem simples, pois você não precisará configurar toda a estrutura do arquivo.

Basta abrir o arquivo de guia alvo que deseja editar dentro da pasta `/docs` e você está pronto para fazer as alterações que sugeriu e que foram aceitas.

</TabItem>
</Tabs>

#### Continuar: Criando Conteúdo

Agora que seu arquivo está pronto, você pode começar a escrever o conteúdo que foi acordado na sua sugestão. Recomendamos salvar ou fazer commits regularmente para garantir que não perca seu trabalho.

Você pode usar o atalho `CTRL+SHIFT+V` ou clicar no ícone de pré-visualização no canto superior direito do editor para abrir uma visualização dividida na IDE, que mostrará as mudanças em Markdown ao vivo enquanto você edita.

:::note Elementos Docusaurus
Lembre-se que alguns elementos específicos do Docusaurus, como admonições (tags como `:::note`, `:::tip` etc.) podem não aparecer corretamente na prévia pelo GitHub. Isso porque não fazem parte do Markdown tradicional, mas aparecerão corretamente durante testes locais e na produção.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/cXgQEswNsbpGMsR/preview)

:::info Siga nossas Diretrizes
Consulte as [Diretrizes](contribution-guides-guidelines.md) para tudo sobre Markdown, estrutura, terminologia e mais.
:::

Quando terminar as alterações no seu guia, o último passo do processo é fazer push do commit para seu fork e enviar um Pull Request. Você pode criar um commit pelo GitHub Desktop (ou outro app Git) adicionando um título e descrição apropriados e fazendo push pelo botão no topo.

![](https://screensaver01.zap-hosting.com/index.php/s/tFdrLknnXn62sZc/preview)

Agora você pode ir para a seção **Enviando Conteúdo** para criar um Pull Request e enviar o conteúdo para o repositório principal do ZAP-Docs.

:::tip
Recomendamos também ler a seção opcional **Testando build localmente**, pois você pode combinar essa seção com testes locais para criar um fluxo de trabalho ideal onde as mudanças são atualizadas no seu build local em tempo real, o que é muito útil. Porém, isso não é obrigatório.
:::

</TabItem>
</Tabs>

### Opcional: Testando build localmente

Antes de criar o Pull Request final, é prática comum construir e testar localmente para garantir que tudo está funcionando corretamente com as mudanças feitas. Recomendamos testar localmente para garantir que seu Pull Request seja processado rapidamente. Porém, isso não é obrigatório e você pode seguir para a próxima seção se preferir.

:::tip
Isso **NÃO** é obrigatório, pois rodamos automaticamente um build quando você envia um Pull Request. Mas pode ser útil para debugar e testar localmente.
:::

:::note
Se você seguiu o tutorial para criar mudanças localmente, pode pular o primeiro passo de clonar o repositório, pois já deve tê-lo.
:::

**Pré-requisitos:**
- [Node.js v16.14 ou superior](https://nodejs.org/en)
- [GitHub Desktop](https://desktop.github.com/) ou [Git](https://git-scm.com/)

O primeiro passo é clonar seu repositório fork. A forma mais simples e amigável é pelo GitHub Desktop, selecionando **Add**, depois **Clone repository** e escolhendo seu fork.

Você também pode usar Git para isso. Crie uma nova pasta, neste caso usaremos `Docs Test`. Entre na pasta e abra o Git Bash (clique com o botão direito e escolha Git Bash no Windows). Vá para o GitHub e copie a URL do seu fork. Depois, rode o comando abaixo substituindo `[your_url]` pela URL do seu fork:
```
git clone [your_url]
```

Agora você deve ter o repositório clonado na sua máquina, independente do método usado. O próximo passo é baixar todos os módulos necessários. Vá para a pasta do repositório, clique com o botão direito e abra um terminal cmd (ou use o terminal do git). Rode o comando:
```
npm install
```

Isso pode levar um tempo, mas quando terminar deve criar uma pasta `node_modules` dentro da pasta do repositório. Se der erro, provavelmente você não instalou o Node.js.

O passo final é rodar o site da documentação localmente. Use o comando:
```
npm start
```

Quando terminar, uma versão local do site deve abrir automaticamente no seu navegador padrão na porta `3000`. Essa versão local é exatamente como a documentação ficará na produção e aqui você pode testar o que quiser!

Quando estiver satisfeito com suas mudanças, pode ir para a próxima seção para criar um Pull Request e enviar o conteúdo para o repositório principal.

## Passo 3: Enviando Conteúdo

Depois de fazer suas contribuições que acredita seguir nossas diretrizes e serem de alta qualidade, você pode criar um Pull Request. Vá para seu fork do repositório ZAP Docs, clique no texto **Contribute** abaixo dos botões principais e abra um pull request.

![](https://screensaver01.zap-hosting.com/index.php/s/GLjSno3Ltz3zFpZ/preview)

Uma nova página abrirá onde você pode ver as mudanças feitas. Por padrão, a descrição conterá uma pequena checklist para garantir que você fez tudo corretamente. Você pode apagar esse template depois de conferir, pois não é obrigatório.

Depois, defina um título apropriado que explique o que foi feito. Na descrição, mencione ou link sua sugestão usando `#000` junto com o ID da sugestão. Se não encontrar pelo menu, vá para o repositório principal do [ZAP Docs no GitHub](https://github.com/zaphosting/docs), entre na seção de issues e procure sua sugestão pelo número do ID.

Quando preencher título, descrição e confirmar que as mudanças estão corretas, crie o pull request pelo botão para enviar ao nosso repositório.

![](https://screensaver01.zap-hosting.com/index.php/s/mrGm5f2WMttYzFT/preview)

Nosso sistema vai garantir que suas mudanças passem por uma série de verificações de sintaxe e qualidade. Se tudo passar, seu Pull Request será revisado pelo time do ZAP-Docs em alguns dias.

Durante a revisão, podemos pedir que você faça algumas alterações que julgarmos necessárias. Também podemos fazer mudanças nós mesmos quando apropriado. Depois que as alterações forem feitas, aprovaremos sua contribuição para que ela esteja pronta para publicação.

## Passo 4: Publicar mudanças no guia & pagamento da recompensa

Quando finalmente aceitarmos seu Pull Request após as alterações solicitadas, responderemos seu Pull Request com detalhes importantes. Isso inclui informações sobre a publicação das mudanças no seu guia, assim como o pagamento da recompensa por completar seu guia com sucesso.

:::info
A recompensa por esse tipo de contribuição depende de alguns fatores, principalmente a qualidade e o tamanho do conteúdo escrito, além de outros critérios avaliados pelo time de Contribuição do ZAP. Saiba mais sobre nossos critérios em [Recompensas](contribution-rewards.md).
:::

Parabéns por contribuir com os Guias do ZAP-Hosting! Agradecemos todas as suas contribuições! 💚