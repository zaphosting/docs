---
id: voiceserver-configuration
title: "Servidor de Voz: Configuração"
description: "Descubra como personalizar as configurações do seu servidor Teamspeak para uma experiência única e gerenciamento otimizado → Saiba mais agora"
sidebar_label: Configuração do servidor
services:
  - voiceserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

O servidor Teamspeak pode ser configurado individualmente. A seguir, vamos explicar como você pode configurar seu servidor. Vamos mostrar como personalizar configurações gerais como nome do servidor, ícone, banner, permissões de usuários, permissões de grupos de canais e do servidor.

<InlineVoucher />

## Geral

**Interface web**

Se você quiser fazer a configuração geral do seu servidor via interface web, as opções estão na Administração do Servidor Teamspeak em Configurações. A página de configurações vai parecer com isso:

![](https://screensaver01.zap-hosting.com/index.php/s/fLYXn5sx38BBC92/preview)


**Cliente Teamspeak**

Se preferir configurar seu servidor diretamente pelo cliente Teamspeak, você pode encontrar as opções clicando com o botão direito no canal superior **TeamSpeak ]I[ Server** e depois em **Editar Servidor Virtual**.

![](https://screensaver01.zap-hosting.com/index.php/s/epQ2qzRiex9BmpE/preview)


Como as configurações na interface web são feitas para serem o mais simples possível e nem tudo pode ser ajustado lá, este guia foca na configuração do servidor Teamspeak via cliente Teamspeak.



### Nome

No campo **Nome do Servidor** você pode definir o nome do seu servidor Teamspeak. Esse nome será exibido na lista de servidores, no site e em outros lugares.



### Banner

Se você contratou a opção de banner próprio, pode adicionar seu banner no campo **URL do Banner Gfx**. É importante fornecer o link direto para a imagem, caso contrário ela não será reconhecida. No campo **URL** você pode definir para onde o banner deve redirecionar quando alguém clicar nele.

:::info
Se nenhum banner próprio foi contratado, o banner será automaticamente substituído pelo banner padrão da ZAP.
:::



### Slots (slots reservados)

Os slots são definidos por nós e não podem ser alterados. Porém, você pode configurar slots reservados. Isso significa que eles ficam reservados caso o servidor Teamspeak esteja cheio. Usuários com as permissões adequadas ainda poderão se conectar ao servidor.



### Mensagem de boas-vindas

Aqui você pode adicionar uma mensagem de boas-vindas personalizada. Essa mensagem será exibida quando alguém se conectar. Pode ficar assim, por exemplo:

![](https://screensaver01.zap-hosting.com/index.php/s/AWFcf4HHJ7jesdc/preview)


### Nível de segurança

O nível de segurança requerido determina quanto tempo os usuários precisam para aumentar o nível de segurança da identidade até que ela seja considerada segura o suficiente. Basicamente, isso reduz o potencial de spam e abuso. Quanto maior o nível de segurança, mais tempo leva. Aqui está um resumo da duração:

- Nível 0-23 - gerado em segundos
- Nível 23-29 - gerado em minutos
- Nível 29-34 - gerado em horas
- Nível 35-39 - gerado em dias
- Nível 40-43 - gerado em meses
- Nível 44+ - gerado em anos



### Gerenciar usuários (kick, ban, lista de ban, lista de reclamações)

Você pode dar kick ou ban clicando com o botão direito no usuário. No caso de ban, a identidade e o endereço IP serão armazenados na lista de banimentos. Você encontra essa lista em **barra de navegação -> extras**. Lá você pode remover bans existentes.

Também encontra a lista de reclamações lá. Essa é uma função do Teamspeak que permite que usuários reclamem de outros usuários, do servidor, etc, caso não haja um admin online no servidor Teamspeak.



## Personalizar

Você pode criar mais canais e grupos de servidor no seu servidor Teamspeak para personalizá-lo ainda mais. A seguir, mostramos como fazer isso exatamente.


### Canal

Para criar mais canais, clique com o **botão direito** abaixo dos canais existentes e depois em **Criar canal**. Uma janela popup vai abrir. Lá você pode configurar o canal com as seguintes opções: Nome do Canal, Senha, Ícone, Descrição, Tipo de Canal e mais.



![](https://screensaver01.zap-hosting.com/index.php/s/Bkx2q69a5ceNiyD/preview)


### Grupos de servidor

Para criar grupos de servidor adicionais, clique em **permissões** na **barra de navegação** e depois em **grupos de servidor**. Lá você encontra uma visão geral dos grupos existentes, suas permissões e usuários atribuídos. Na lista de grupos, clique no **símbolo de mais** na parte inferior para criar um novo grupo.



![](https://screensaver01.zap-hosting.com/index.php/s/QqcaaRse6kLNwPQ/preview)


## Permissões

Agora que você já sabe como ajustar as configurações gerais do servidor Teamspeak e personalizá-lo criando canais e grupos, vamos ver como ajustar as permissões.



### Permissões: Usuário

As permissões dos usuários dependem dos grupos de servidor atribuídos. Por padrão, um usuário recebe o grupo **Normal**. Se quiser adicionar mais permissões, clique com o botão direito no usuário, depois em Grupos de Servidor e atribua o grupo desejado.

![](https://screensaver01.zap-hosting.com/index.php/s/sXG3qFXXJXc6Kjr/preview)

### Permissões: Canal

As permissões podem ser definidas para cada canal. Por exemplo, você pode definir quais usuários podem **entrar, assinar, descrever, visualizar, modificar, deletar** o canal e **acessar o navegador de arquivos do canal**.


![](https://screensaver01.zap-hosting.com/index.php/s/9sCRd7NgMNHy9Do/preview)



O valor de cada campo depende do grupo de servidor. Por exemplo, se você criar um grupo adicional chamado **Membro** e só eles devem ter acesso ao canal, o valor deve corresponder ao do grupo. Se o grupo tem valor de permissão 50, então o **50** deve ser configurado nos campos individuais.



### Permissões: Grupos de servidor

Para permissões de grupos de servidor, existem várias categorias que podem ser personalizadas, incluindo:

- Opções Gerais
- Gerenciar grupos
- Adicionar, remover usuários, gerenciar chaves de permissão
- Gerenciar usuários (mover, kick, ban)
- Gerenciar canais
- Básico


![](https://screensaver01.zap-hosting.com/index.php/s/RxcYJCsar7C3KnM/preview)



Você pode alterar essas permissões como quiser. Para mudanças mais avançadas, vá nas opções do seu cliente Teamspeak, depois em Aplicativo e ative o **Sistema avançado de permissões**.


<InlineVoucher />