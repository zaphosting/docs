---
id: dedicated-linux-ragemp
title: "Servidor Dedicado: Configuração do Servidor Dedicado RageMP no Linux"
description: "Descubra como configurar um Servidor Dedicado RageMP no seu servidor Linux para um aluguel de servidores e gerenciamento de jogos sem complicações → Saiba mais agora"
sidebar_label: RageMP
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
Você tem um Servidor Dedicado Linux e quer instalar o serviço de servidor dedicado RageMP nele? Você está no lugar certo. Neste guia, vamos explicar o passo a passo para instalar esse serviço no seu servidor Linux. Usaremos Ubuntu nos exemplos, mas o processo deve ser bem parecido para outras distribuições.

:::tip
Sabia que você pode instalar nossa **Interface ZAP GS/TS3** diretamente no seu Servidor Dedicado, permitindo configurar serviços de servidor de jogos com integração direta ao seu dashboard ZAP-Hosting, em poucos cliques? Saiba mais sobre a [Interface GS/TS3](dedicated-linux-gs-interface.md).
:::

<InlineVoucher />

## Preparação

Para começar, conecte-se ao seu Servidor Dedicado via SSH. Use nosso guia [Acesso Inicial SSH](dedicated-linux-ssh.md) se precisar de ajuda.

### Criando Usuário

Recomendamos muito criar um usuário separado para rodar todos os seus serviços de servidor de jogos dedicados. Rodar como root, como em muitas coisas, não é recomendado por vários motivos. Se você já tem um usuário pronto, siga para os passos de instalação.

Use o comando abaixo para criar um usuário chamado `gameservers` com uma senha opcional de sua escolha.

```
sudo useradd -m gameservers
sudo passwd gameservers # Senha Opcional
```

Depois de acessar seu servidor e ter um usuário pronto, siga com os passos de instalação.

## Instalação

Comece logando no usuário `gameservers` e vá para o diretório raiz `home/gameservers` para manter tudo organizado.
```
sudo -u gameservers -s
cd ~
```

Para manter a organização, use o comando abaixo para criar uma nova pasta para seu servidor RageMP e entre nela.
```
mkdir RageMP-Server && cd RageMP-Server
```

Agora, você vai precisar baixar a última versão do site do RageMP. Use o comando abaixo para baixar direto.
```
wget https://cdn.rage.mp/updater/prerelease/server-files/linux_x64.tar.gz
```

Isso vai baixar o arquivo `.zip` para sua localização atual, que deve ser a nova pasta `RageMP-Server`. Extraia os arquivos com o comando:
```
tar -xvzf linux_x64.tar.gz
```

Seus arquivos agora devem estar acessíveis dentro da pasta **ragemp-srv**, acesse-a rodando `cd ragemp-srv`. Use `ls` para ver o conteúdo da pasta a qualquer momento. O servidor está pronto, siga para a próxima seção para configurar os parâmetros.

## Configuração

Neste ponto, você terminou a configuração do seu servidor RageMP. Você pode fazer configurações adicionais através do arquivo de configuração dentro do diretório do servidor.

:::tip
Pode ser necessário rodar o servidor pelo menos uma vez antes que os arquivos de configuração sejam criados. Faça isso rodando o arquivo shell: `/home/gameservers/RageMP-Server/ragemp-srv/ragemp-server`. Depois, pressione `CTRL+C` para fechar o servidor.
:::

Edite os parâmetros principais abrindo o arquivo de configuração **conf.json**.
```
nano /home/gameservers/RageMP-Server/ragemp-srv/conf.json
```

## Iniciando e Conectando ao seu servidor

Agora é hora de iniciar seu servidor. Vá para o diretório principal do jogo e rode o arquivo shell **ragemp-server**.
```
/home/gameservers/RageMP-Server/ragemp-srv/ragemp-server
```

Você deve ver logs aparecerem no seu terminal, incluindo logs de rede, o que indica que o servidor iniciou com sucesso. Se tudo ocorrer como esperado, seu servidor estará acessível via conexão direta e visível na lista de servidores. Alternativamente, você pode conectar diretamente via: `[seu_endereço_ip]:22005`.

## Conclusão

Parabéns, você instalou e configurou com sucesso o servidor RageMP no seu Servidor Dedicado! Como próximo passo, recomendamos dar uma olhada no nosso guia [Configurar Serviço Linux](dedicated-linux-create-gameservice.md), que explica como configurar seu novo servidor dedicado de jogos como um serviço. Isso traz vários benefícios, incluindo inicialização automática do servidor no boot, atualizações automáticas, gerenciamento fácil e acesso a logs, e muito mais!

Se tiver mais dúvidas ou problemas, fale com nosso time de suporte, que está disponível para ajudar você todos os dias!

<InlineVoucher />