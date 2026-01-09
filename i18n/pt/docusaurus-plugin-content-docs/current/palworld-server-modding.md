---
id: palworld-server-modding
title: "Palworld: Instalando Mods para Palworld"
description: "Descubra como turbinar seu Palworld com mods para servidores e clientes de forma segura e eficaz → Saiba mais agora"
sidebar_label: Instalar Mods
services:
  - gameserver-palworld
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Desde o lançamento de Palworld, novos mods incríveis começaram a surgir online para melhorar a experiência de jogo e deixar tudo ainda mais divertido. Neste guia, vamos explorar o processo de adicionar modificações (mods) ao seu servidor de jogos Palworld e/ou cliente do jogo.

<YouTube videoId="x4tfL3Vi5qE" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/5LynAssgfXj6qgr/preview" title="Como Instalar Mods no Seu Servidor de Palworld!" description="Prefere entender vendo na prática? A gente te ajuda! Mergulhe no nosso vídeo que explica tudo. Seja na correria ou querendo aprender de um jeito mais dinâmico!"/>

<InlineVoucher />

### Informações Importantes

No momento, você pode visualizar e baixar mods disponíveis em sites de modding de terceiros. Recomendamos usar sites como [Nexus Mods](https://www.nexusmods.com/palworld/) ou [Curseforge](https://www.curseforge.com/palworld/), que são referências confiáveis na cena de mods. Não é possível baixar mods pelo Steam Workshop atualmente.

:::note
A ZAP-Hosting não se responsabiliza por quaisquer modificações ou danos aos arquivos do seu servidor ou mundo ao instalar mods. Recomendamos fortemente que você faça backups antes de continuar. Saiba mais sobre backups no nosso guia dedicado [Gerenciar Savegames](palworld-server-savegames.md), que explica tudo em detalhes.
:::

:::info
Atualmente, só suportamos mods no formato PAK (.PAK). Mods que exigem arquivos executáveis não são permitidos por questões de segurança.
:::



### Mods para Servidor e Cliente

Ao escolher mods, você precisa primeiro identificar se são para o servidor ou para o cliente. A forma mais fácil é checar a descrição do mod no site ou entrar em contato direto com o autor.

Mods para servidor são instalados diretamente no servidor e não exigem ação dos jogadores. Já os mods para cliente precisam que cada usuário que quiser entrar no servidor baixe e instale o mod localmente nos arquivos do jogo.

:::info
Confirme que o mod que você quer usar é compatível com a versão atual do build do Palworld.
:::



## Passo 1: Preparar o Arquivo PAK

Acesse os sites de modding sugeridos na introdução para navegar e baixar uma variedade de mods.

:::info
Lembrete: só suportamos mods no formato PAK (.PAK) por questões de segurança.
:::

Baixe o mod desejado para seu dispositivo. Se necessário, descompacte os arquivos usando uma ferramenta como [7zip](https://www.7-zip.org/) para extrair o arquivo **.pak**.

![](https://screensaver01.zap-hosting.com/index.php/s/EA4NBWkQAZQoqfi/preview)



## Passo 2: Upload via FTP

Com os arquivos PAK prontos para upload, vá até a seção **Ferramentas->FTP-Browser** no painel de controle do seu servidor de jogos.

Você vai precisar de um cliente FTP para conectar ao servidor. Use nosso guia dedicado [Acesso via FTP](gameserver-ftpaccess.md) se ainda não tiver um cliente FTP configurado ou precisar de ajuda.

No painel, você pode usar o botão **Conexão Direta**. Isso deve abrir seu programa FTP favorito e logar automaticamente.

Alternativamente, use as credenciais fornecidas na página FTP-Browser para conectar manualmente pelo seu cliente FTP.

![](https://screensaver01.zap-hosting.com/index.php/s/nWYPNMRbnrDbDLF/preview)

Agora faça o upload dos arquivos PAK do mod que você preparou. Eles devem ser enviados para o seguinte diretório:
```
../g[your_zapid]/palworld-windows/Pal/Content/Paks/ # Para versão Windows
../g[your_zapid]/palworld-linux/Pal/Content/Paks/ # Para versão Linux
```

![](https://screensaver01.zap-hosting.com/index.php/s/87wqpW65SibyLGz/preview)

Pronto, o lado do servidor está feito! Agora vamos para o lado do cliente.



## Passo 3: Instalar mods no Cliente

Com os mods instalados no servidor, precisamos garantir que qualquer cliente que queira entrar no servidor faça o mesmo. Eles terão que repetir esse processo, pois não há como o cliente baixar mods automaticamente ao entrar.

Abra o Steam, clique com o botão direito em Palworld, selecione gerenciar e depois navegar pelos arquivos locais.

![](https://screensaver01.zap-hosting.com/index.php/s/zf8iSjsJNit9sqB/preview)

Vai abrir a pasta com a instalação do Palworld no seu dispositivo.

![](https://screensaver01.zap-hosting.com/index.php/s/GwSzNffxDJaJCrX/preview)

Agora navegue até o seguinte diretório:
```
../Palworld/Pal/Content/Paks/
```

Mova os arquivos **.pak** dos mods para essa pasta. Repita para todos os mods que você adicionou.

![](https://screensaver01.zap-hosting.com/index.php/s/ZmAtezELEbNCwc4/preview)



## Passo 4: Iniciar Palworld & Conectar ao servidor

Agora você pode conectar ao seu servidor de jogos Palworld e curtir a experiência com vários mods novos. Use nosso guia dedicado [Conectar ao Servidor](palworld-connect.md) se precisar de ajuda para se conectar.

Ao entrar, você deve notar as mudanças que os mods causaram.

Por exemplo, estamos usando um mod de blocos do Minecraft no nosso servidor de teste:

![](https://screensaver01.zap-hosting.com/index.php/s/dxytjjrwaqLtiik/preview)

Você instalou mods com sucesso no seu servidor Palworld. Se tiver problemas com mods, confira a seção de debug abaixo.



## Debugging

Aqui listamos algumas causas comuns de problemas e passos para você tentar resolver. Lembre-se que modding ainda está no começo e não é oficial, então bugs podem aparecer.

#### Verifique a versão do mod

Confirme que os mods instalados são compatíveis com a versão atual do build do Palworld. Se não forem, podem ocorrer erros e algumas funções podem não funcionar. Contate o autor do mod para pedir uma atualização se estiver desatualizado.

#### Reinicie o servidor

Sempre reinicie o servidor após mudanças ou se não ver os mods funcionando. Consulte o autor do mod sobre erros ou bugs que aparecerem com mods específicos.

#### Verifique os logs por erros

Uma boa estratégia é checar a seção **Informações->Arquivos de Log** no painel do seu servidor. Esses arquivos trazem logs com informações sobre o servidor, eventos, dicas e mensagens de erro.

Mensagens de erro ajudam a identificar e entender melhor o problema. Muitas vezes, dá para resolver olhando com atenção os logs.

:::info
Precisa de ajuda extra? Sem stress, junte-se à nossa [Comunidade no Discord](https://discord.com/invite/zaphosting) ou poste no nosso [Subreddit r/zaphosting](https://www.reddit.com/r/zaphosting/), onde a galera e a equipe podem te ajudar.

Quer suporte oficial? Abra um [ticket](https://zap-hosting.com/en/customer/support/) no nosso site com o máximo de detalhes e a gente responde rapidinho! :)
:::


<InlineVoucher />