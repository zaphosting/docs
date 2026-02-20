---
id: dedicated-linux-docker
title: "Configure o Docker em um Servidor Linux - Execute e Gerencie Containers na Sua Infraestrutura"
description: "Descubra como instalar o Docker no seu servidor Linux para rodar aplicações isoladas de forma eficiente e otimizar o uso de recursos → Saiba mais agora"
sidebar_label: Instalar Docker
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Introdução

Docker é um software de virtualização leve e open source para fornecer serviços ou aplicações isoladas em um único sistema. Diferente de máquinas virtuais reais, não é emulado ou hospedado um sistema operacional extra, mas sim apenas um ambiente de aplicação dentro do sistema host. Isso não só economiza recursos em geral, como também gera uma baixa sobrecarga comparado à virtualização completa. Neste guia, vamos cobrir o processo de instalação do Docker no seu servidor.

## Preparação

Para começar, você deve se conectar ao seu servidor Linux via SSH. Dê uma olhada no nosso [guia de Acesso Inicial (SSH)](dedicated-linux-ssh.md) caso precise de ajuda com isso. Durante este guia, usaremos o Ubuntu como distribuição Linux.

### Ativar Compatibilidade com Docker

Você precisa ativar a **Compatibilidade com Docker** na interface web para permitir que os containers Docker funcionem, caso contrário, você receberá erros de `Permission Denied`.

Vá até a seção **Configurações** no painel web do seu servidor, ative a opção **Compatibilidade com Docker** e salve.

![](https://screensaver01.zap-hosting.com/index.php/s/o5t82kKM38r2MwY/preview)

Depois de salvar, certifique-se de reiniciar seu servidor antes de continuar.

## Instalação

Agora que você está conectado ao seu servidor Linux, pode prosseguir com os métodos de instalação. Selecione uma das distribuições Linux abaixo para ver os passos de instalação relevantes.

<Tabs>
<TabItem value="ubuntu/debian" label="Ubuntu & Debian" default>

Para começar, você precisará adicionar o pacote do Docker usando o `apt` e configurá-lo. Isso permitirá que você instale e atualize o Docker facilmente pelo repositório no futuro.

Use os comandos abaixo para adicionar a chave GPG oficial do Docker à sua lista de repositórios.
```
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
```

Depois de configurar isso, você precisará adicionar o repositório às fontes do `apt` com o comando abaixo.
```
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

Agora que adicionou o repositório Docker às suas fontes, rode o comando `apt-get update` para buscar as atualizações.
```
sudo apt-get update
```

Neste ponto, você configurou com sucesso o repositório Docker no `apt`. Como passo final, instale os pacotes Docker. Você pode instalar a versão mais recente com o comando abaixo.
```
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

</TabItem>

<TabItem value="fedora" label="Fedora">

Para começar, instale o pacote `dnf-plugins-core` que ajuda a gerenciar repositórios.
```
sudo dnf -y install dnf-plugins-core
```

Com o pacote instalado, adicione o repositório Docker e instale-o com o comando abaixo.
```
sudo dnf-3 config-manager --add-repo https://download.docker.com/linux/fedora/docker-ce.repo
```

O Docker deve estar instalado agora. Como passo final, você precisa iniciar e habilitar o serviço para que funcione.
```
sudo systemctl enable --now docker
```

</TabItem>
</Tabs>

Para verificar se a instalação foi bem-sucedida, tente rodar a imagem **hello-world** com o comando abaixo.
```
sudo docker run hello-world
```

Se tudo der certo, você verá uma mensagem de boas-vindas no terminal com algumas informações básicas. Se estiver enfrentando erros de `Permission Denied`, verifique se ativou a opção **Compatibilidade com Docker** na interface web e reiniciou o servidor conforme descrito na seção de preparação.

![](https://screensaver01.zap-hosting.com/index.php/s/tzJwpYRYb9Mmryo/preview)

Você instalou o Docker com sucesso no seu servidor Linux.

## Configuração Pós-Instalação

Com o Docker instalado no seu servidor, você pode fazer algumas configurações adicionais para eliminar a necessidade de usar `sudo` ao executar comandos Docker e para iniciar o Docker automaticamente no boot do servidor.

### Gerenciar Docker sem Sudo

Você pode remover a necessidade de prefixar todos os comandos Docker com `sudo` criando um grupo Docker e adicionando seus usuários a ele. Isso facilita o uso, mas cuidado, pois isso concede privilégios equivalentes ao root indiretamente ao usuário.

Crie o grupo `docker` e adicione seu usuário atual com os comandos abaixo.
```
# Criar grupo Docker
sudo groupadd docker

# Adicionar usuário atual ao grupo Docker
sudo usermod -aG docker $USER
```

Depois disso, recomendamos reiniciar seu servidor para garantir que a associação ao grupo seja atualizada. Como alternativa, você pode usar `newgrp docker`.

Agora verifique se consegue rodar comandos Docker sem `sudo` executando novamente o comando `docker run hello-world`.

:::tip
Às vezes, você pode receber um erro relacionado a um arquivo de configuração se já tiver rodado o comando com `sudo` antes. Para resolver, basta usar `rmdir ~/.docker/` para deletar o diretório Docker, que será recriado automaticamente na próxima vez que usar o comando.
:::

Se o comando rodar normalmente, significa que você configurou o Docker para rodar sem precisar usar `sudo`.

### Iniciar Docker no Boot

Você pode configurar o Docker para iniciar automaticamente no boot do servidor usando o `systemd`, que é usado pela maioria das distribuições Linux.

:::tip
No Ubuntu e Debian, o Docker já está configurado para iniciar automaticamente no boot por padrão. Se você usa essas distribuições, não precisa fazer mais nada.
:::

Você pode habilitar o serviço Docker para iniciar no boot com os comandos abaixo.
```
sudo systemctl enable docker.service
sudo systemctl enable containerd.service
```

Da mesma forma, para desabilitar o serviço no boot, substitua `enable` por `disable`. Você também pode gerenciar o serviço com vários subcomandos do `systemctl`, como:
```
sudo systemctl start [seu_serviço]
sudo systemctl stop [seu_serviço]
sudo systemctl restart [seu_serviço]
```

## Conclusão

Parabéns, você instalou e configurou o Docker com sucesso no seu servidor Linux! Se tiver mais dúvidas ou problemas, entre em contato com nosso time de suporte, que está disponível para ajudar você todos os dias!