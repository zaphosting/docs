---
id: redm-txadmin-setup
title: "RedM: Configuração do txAdmin"
description: "Descubra como gerenciar e monitorar seu servidor RedM de forma eficiente com o painel web completo do txAdmin → Saiba mais agora"
sidebar_label: Configuração do txAdmin
services:
  - gameserver-redm
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

O txAdmin é um painel web completo e totalmente gratuito para Gerenciar & Monitorar seu servidor RedM. Ele oferece uma ampla gama de recursos projetados para tornar o gerenciamento de um servidor RedM super fácil. Configurar o txAdmin é totalmente grátis, comece sua jornada usando o painel web para servidor RedM mais simples, porém funcional.

<InlineVoucher />

## Acesso

Você pode encontrar um link e os dados de acesso para entrar no txAdmin na área do txAdmin no dashboard do seu servidor de jogos. Isso te dá as informações necessárias para acessar facilmente a interface do txAdmin e começar a configuração.

![img](https://screensaver01.zap-hosting.com/index.php/s/6gJa3qsymE2kzCi/download)

Copie as informações do nome de usuário e senha e clique no link (endereço IP:porta) para acessar a interface do txAdmin e fazer login. A interface do txAdmin abrirá em uma nova janela, onde você deverá entrar com os dados de acesso fornecidos.

![](https://screensaver01.zap-hosting.com/index.php/s/pp8GLQBoX4LoqTA/preview)



## Configuração

Agora que você fez login com sucesso, pode começar a configurar o txAdmin e seu servidor. Você deve ver a página inicial do txAdmin (Dashboard). No canto superior esquerdo, vai aparecer uma mensagem indicando que seu servidor ainda precisa ser configurado. Clique em **Ir para a página de configuração** para iniciar o processo.

![](https://screensaver01.zap-hosting.com/index.php/s/oXakf3qoJaim7ex/download)



### Boas-vindas e nome do servidor

Em seguida, defina um nome para o servidor que você quer usar no seu projeto. Esse nome não é para a lista de servidores, mas apenas para uso dentro da interface do txAdmin e para mensagens no chat/Discord.

![](https://screensaver01.zap-hosting.com/index.php/s/FCmd5xQ89wSPHfe/preview)



### Tipo de Implantação

Em Tipo de Implantação, você precisa escolher como deseja configurar seu servidor. Você tem as seguintes opções: **Receitas Populares**, Dados de Servidor Existente, **Template via URL Remota** e **Template Personalizado**. Cada uma dessas opções será explicada em mais detalhes abaixo, para você decidir qual se encaixa melhor nas suas necessidades.

![](https://screensaver01.zap-hosting.com/index.php/s/52HfyJSNLscApNE/preview)



### Template Popular

Templates Populares são pacotes pré-prontos que podem ser usados imediatamente, tornando essa a forma mais fácil de colocar seu servidor RedM no ar. Se esse é seu primeiro servidor, essa opção é altamente recomendada. Esses templates incluem todas as configurações e recursos necessários para configurar rapidamente um servidor funcional, permitindo que você foque na customização e no gameplay em vez da configuração inicial. Basta escolher um template que atenda suas necessidades.

![](https://screensaver01.zap-hosting.com/index.php/s/rrw962gMMpn86fW/preview)



### Dados de Servidor Existente

Use essa opção se você já operou um servidor com txAdmin e agora quer hospedá-lo conosco. Nesse caso, você pode simplesmente enviar os dados do servidor via FTP e especificar o caminho durante a configuração. Se você ainda não está familiarizado com o uso de FTP, vale a pena dar uma olhada no nosso guia de [acesso FTP](gameserver-ftpaccess.md). Esse guia vai te ajudar a garantir uma transferência tranquila dos arquivos do seu servidor, para que você possa colocá-lo no ar rapidamente na nossa plataforma.

![img](https://screensaver01.zap-hosting.com/index.php/s/jCZ4DffkkAHA6dj/preview)





### Template via URL Remota

Se você quer aplicar um template que não está vinculado dentro do próprio txAdmin, essa função permite especificar uma receita personalizada via URL remota. Essa receita será baixada e executada no seu servidor. Essa opção é especialmente útil para implantar configurações personalizadas ou setups específicos que não estão incluídos nas opções padrão do txAdmin. Ao fornecer a URL, o txAdmin vai baixar e aplicar o template automaticamente, garantindo que seu servidor seja configurado exatamente como você quer.

![](https://screensaver01.zap-hosting.com/index.php/s/jrGzTGp9FwLc82i/preview)

### Template Personalizado

Essa opção é para quem já criou sua própria receita e quer recarregá-la. Ela permite aplicar suas configurações personalizadas de forma rápida e fácil, sem precisar configurar tudo do zero novamente. Basta selecionar sua receita existente e o txAdmin cuida do resto, garantindo que seu servidor fique configurado exatamente como você planejou.

![](https://screensaver01.zap-hosting.com/index.php/s/Z75q5RKakwfpHGy/preview)



### Implantador de Receita

Depois de escolher o Tipo de Implantação e seguir os passos indicados, você pode finalizar clicando em **Ir para o Implantador de Receita**. Lá, você precisa completar as etapas finais: **Revisar Receita**, **Inserir Parâmetros**, **Executar Receita** e **Configurar server.cfg**.

Na primeira etapa, você pode personalizar ainda mais a receita selecionada ou adicionada. Se não precisar de ajustes, siga para a Etapa 2. Aqui, você pode inserir sua própria [Chave de Licença](redm-licensekey.md) e revisar as informações do banco de dados. Quando tudo estiver certo, clique em **Executar Receita**. Esse processo pode levar um tempinho. Por fim, você pode ajustar o arquivo de configuração do servidor (`server.cfg`) conforme necessário.

![](https://screensaver01.zap-hosting.com/index.php/s/wFMD576sBQAAdxZ/download)

Por fim, clique em **Salvar & Iniciar Servidor**. Isso conclui a configuração do txAdmin, e agora você pode se conectar ao seu servidor.


## Suporte adicional

Para suporte específico do txAdmin, entre em contato com a equipe do txAdmin pelo [site oficial](https://txadm.in/) ou junte-se à comunidade no [Discord](https://discord.gg/txAdmin/). A comunidade e a equipe de suporte estão prontas para ajudar com qualquer dúvida ou problema que você encontrar usando o txAdmin, garantindo a melhor experiência possível no gerenciamento do seu servidor.

<InlineVoucher />