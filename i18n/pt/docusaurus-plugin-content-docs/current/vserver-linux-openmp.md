---
id: vserver-linux-openmp
title: "VPS: Configuração do Servidor Dedicado Open.mp no Linux"
description: "Descubra como configurar o servidor dedicado open.mp no seu VPS Linux para um aluguel de servidores e gerenciamento de jogos sem complicações → Saiba mais agora"
sidebar_label: Open.mp
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
Você tem um VPS Linux e quer instalar o serviço de servidor dedicado open.mp nele? Você está no lugar certo. Neste guia, vamos explicar o passo a passo para instalar esse serviço no seu servidor Linux. Usaremos o Ubuntu nos exemplos, mas o processo deve ser bem parecido para outras distribuições.

:::tip
Sabia que você pode instalar nossa **Interface ZAP GS/TS3** direto no seu VPS, permitindo configurar serviços de servidor de jogos com integração direta ao seu dashboard ZAP-Hosting, em poucos cliques? Saiba mais sobre a [Interface GS/TS3](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Preparação

Para começar, conecte-se ao seu VPS via SSH. Use nosso guia de [Acesso Inicial SSH](vserver-linux-ssh.md) se precisar de ajuda.

### Criando Usuário

Recomendamos muito criar um usuário separado para rodar todos os seus serviços de servidor dedicado de jogos. Rodar como root, como em muitas coisas, não é recomendado por vários motivos. Se você já tem um usuário pronto, siga para os passos de instalação.

Use o comando abaixo para criar um usuário chamado `gameservers` com uma senha opcional de sua escolha.

```
sudo useradd -m gameservers
sudo passwd gameservers # Senha Opcional
```

Depois de acessar seu servidor e ter um usuário pronto, siga para os passos de instalação.

## Instalação

Comece logando no usuário `gameservers` e indo para o diretório raiz `home/gameservers` para manter tudo organizado.
```
sudo -u gameservers -s
cd ~
```

Para manter a organização, use o comando abaixo para criar uma nova pasta para seu servidor open.mp e entre nela.
```
mkdir OpenMP-Server && cd OpenMP-Server
```

Agora, você vai precisar baixar a última versão do [Repositório open.mp no GitHub](https://github.com/openmultiplayer/open.mp/releases). Na página, clique com o botão direito na versão **linux-x86** e copie o link. Rode o comando abaixo para baixar a última versão Linux, substituindo `[link]` pelo link copiado.
```
wget [link]
```

Isso vai baixar o arquivo `.zip` para sua pasta atual, que deve ser a nova pasta `OpenMP-Server`. Use o comando abaixo para descompactar e extrair os arquivos dentro da pasta.
```
tar -xvzf open.mp-linux-x86.tar.gz
```

Seus arquivos agora devem estar acessíveis dentro da pasta **Server**, acesse-a rodando `cd Server`. Use `ls` para ver o conteúdo da pasta a qualquer momento. O servidor está pronto, siga para a próxima seção para configurar os parâmetros.

## Configuração

Nesta etapa, você já terminou a configuração do seu servidor open.mp. Pode fazer configurações adicionais através do arquivo de configuração que fica dentro do diretório do servidor.

Você pode editar os parâmetros principais abrindo o arquivo de configuração **config.json**.
```
nano /home/gameservers/OpenMP-Server/Server/config.json
```

Confira nosso guia de [Configuração do Servidor Open.mp](openmp-configuration.md) para ver todas as opções disponíveis e o que cada uma faz.

## Iniciando e Conectando ao seu servidor

Agora é hora de iniciar seu servidor. Vá para o diretório principal do jogo e rode o arquivo shell **omp-server**.
```
/home/gameservers/OpenMP-Server/Server/omp-server
```

Você deve ver logs aparecendo no seu terminal, incluindo logs de rede, o que indica que o servidor iniciou com sucesso. Se tudo ocorrer como esperado, seu servidor estará acessível via conexão direta e visível na lista de servidores. Alternativamente, você poderá conectar diretamente via: `[seu_endereço_ip]:7777`.

## Conclusão

Parabéns, você instalou e configurou com sucesso o servidor open.mp no seu VPS! Como próximo passo, recomendamos dar uma olhada no nosso guia de [Configurar Serviço Linux](vserver-linux-create-gameservice.md), que ensina a configurar seu novo servidor dedicado de jogos como um serviço. Isso traz vários benefícios, como iniciar o servidor automaticamente no boot, atualizações automáticas, gerenciamento fácil, acesso a logs e muito mais!

Se tiver qualquer dúvida ou problema, fale com nosso time de suporte, que está disponível para te ajudar todos os dias!

<InlineVoucher />