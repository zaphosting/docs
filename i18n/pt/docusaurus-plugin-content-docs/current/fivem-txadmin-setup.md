---
id: fivem-txadmin-setup
title: "FiveM: Configuração do txAdmin"
description: "Descubra como gerenciar e monitorar seu servidor de jogos FiveM facilmente com o painel web completo e gratuito do txAdmin → Saiba mais agora"
sidebar_label: Configuração do txAdmin
services:
  - gameserver-fivem
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

O txAdmin é um painel web completo e totalmente gratuito para Gerenciar & Monitorar seu servidor de jogos FiveM. Ele oferece uma variedade de recursos projetados para tornar a administração de um servidor FiveM super simples. Configurar o txAdmin é totalmente grátis, comece agora mesmo a usar o painel web mais simples e funcional para servidores FiveM.

<YouTube videoId="n3RoiExrvN0" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/AeKiyc9Jtat5ygE/preview" title="Configurar um servidor txAdmin" description="Prefere entender melhor vendo as coisas em ação? A gente te ajuda! Mergulhe no nosso vídeo que explica tudo. Seja na correria ou só querendo aprender de um jeito mais legal e dinâmico!"/>

<InlineVoucher />

## Acesso

Você encontra o link e os dados de acesso para entrar no txAdmin na área do txAdmin dentro do dashboard do seu servidor de jogos. Isso te dá as informações necessárias para acessar facilmente a interface do txAdmin e começar a configuração.

![img](https://screensaver01.zap-hosting.com/index.php/s/69LdTK3FyNZNXid/download)

Copie as informações do nome de usuário e senha e clique no link (endereço IP:porta) para acessar a interface do txAdmin e fazer login. A interface do txAdmin abrirá em uma nova janela, onde você deve entrar com os dados fornecidos.

![](https://screensaver01.zap-hosting.com/index.php/s/pp8GLQBoX4LoqTA/preview)



## Configuração

Agora que você fez login com sucesso, pode começar a configurar o txAdmin e seu servidor. Você deve ver a página inicial do txAdmin (Dashboard). No canto superior esquerdo, vai aparecer uma mensagem indicando que seu servidor ainda precisa ser configurado. Clique em **Ir para a página de configuração** para começar o processo.

![](https://screensaver01.zap-hosting.com/index.php/s/oXakf3qoJaim7ex/download)



### Boas-vindas e nome do servidor

Agora, defina um nome para o servidor que você quer usar no seu projeto. Esse nome não é para a lista de servidores, mas só para uso dentro da interface do txAdmin e para mensagens no chat/Discord.

![](https://screensaver01.zap-hosting.com/index.php/s/FCmd5xQ89wSPHfe/preview)



### Tipo de implantação

Em Tipo de Implantação, você precisa escolher como quer configurar seu servidor. As opções são: **Receitas Populares**, Dados de Servidor Existente, **Modelo de URL Remota** e **Modelo Personalizado**. Cada uma dessas opções será explicada com mais detalhes abaixo, para você decidir qual se encaixa melhor no que precisa.

![](https://screensaver01.zap-hosting.com/index.php/s/52HfyJSNLscApNE/preview)



### Modelo Popular

Modelos Populares são pacotes prontos para usar, tornando essa a forma mais fácil de colocar seu servidor FiveM no ar. Se esse é seu primeiro servidor, essa opção é super recomendada. Esses modelos incluem todas as configurações e recursos necessários para montar um servidor funcional rapidinho, deixando você focar na customização e no gameplay, sem se preocupar com a configuração inicial. É só escolher o modelo que combina com você.

![](https://screensaver01.zap-hosting.com/index.php/s/PSsf22NeebNBRw7/preview)



### Dados de Servidor Existente

Use essa opção se você já operou um servidor com txAdmin e quer agora hospedá-lo com a gente. Nesse caso, basta enviar os dados do servidor via FTP e informar o caminho durante a configuração. Se você ainda não está familiarizado com FTP, vale a pena dar uma olhada no nosso [guia de acesso FTP](gameserver-ftpaccess.md). Ele vai te ajudar a transferir os arquivos do servidor sem estresse, para você colocar seu servidor no ar rapidinho na nossa plataforma.

![img](https://screensaver01.zap-hosting.com/index.php/s/KS4raRtHWmmw5iN/preview)





### Modelo de URL Remota

Se quiser usar um modelo que não está listado dentro do próprio txAdmin, essa função permite que você especifique uma receita personalizada via URL remota. Essa receita será baixada e executada no seu servidor. Essa opção é ótima para implantar configurações customizadas ou setups específicos que não estão nas opções padrão do txAdmin. Ao fornecer a URL, o txAdmin baixa e aplica o modelo automaticamente, garantindo que seu servidor fique configurado exatamente do jeito que você quer.

![](https://screensaver01.zap-hosting.com/index.php/s/jrGzTGp9FwLc82i/preview)

### Modelo Personalizado

Essa opção é para quem já criou sua própria receita e quer recarregá-la. Permite aplicar suas configurações personalizadas de forma rápida e fácil, sem precisar configurar tudo do zero de novo. É só selecionar sua receita existente e o txAdmin cuida do resto, garantindo que seu servidor fique configurado exatamente como você planejou.

![](https://screensaver01.zap-hosting.com/index.php/s/Z75q5RKakwfpHGy/preview)



### Implantador de Receita

Depois de escolher o Tipo de Implantação e seguir os passos indicados, finalize clicando em **Ir para o Implantador de Receita**. Lá, você precisa completar as etapas finais: **Revisar Receita**, **Inserir Parâmetros**, **Executar Receita** e **Configurar server.cfg**.

No primeiro passo, você pode personalizar ainda mais a receita selecionada ou adicionada. Se não precisar de ajustes, siga para o Passo 2. Aqui, você pode inserir sua própria [Chave de Licença](fivem-licensekey.md) e revisar as informações do banco de dados. Quando tudo estiver certo, clique em **Executar Receita**. Esse processo pode levar um tempinho. Por fim, ajuste o arquivo de configuração do servidor (`server.cfg`) conforme precisar.

![](https://screensaver01.zap-hosting.com/index.php/s/wFMD576sBQAAdxZ/download)

Por fim, clique em **Salvar & Iniciar Servidor**. Isso conclui a configuração do txAdmin, e agora você pode se conectar ao seu servidor.


## Suporte adicional

Para suporte específico do txAdmin, entre em contato com a equipe do txAdmin pelo [site oficial](https://txadm.in/) ou junte-se à comunidade no [Discord](https://discord.gg/txAdmin/). A comunidade e o time de suporte estão prontos para ajudar com qualquer dúvida ou problema que você tenha usando o txAdmin, garantindo a melhor experiência possível na gestão do seu servidor.

<InlineVoucher />