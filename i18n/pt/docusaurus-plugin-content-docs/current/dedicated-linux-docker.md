---
id: dedicated-linux-docker
title: "Configurar Docker em um Servidor Linux - Execute e Gerencie Containers na Sua Infraestrutura"
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

Docker é um software de virtualização leve e open source que oferece serviços ou aplicações isoladas em um único sistema. Diferente das máquinas virtuais reais, não é emulado ou hospedado um sistema operacional extra, mas sim apenas um ambiente de aplicação dentro do sistema host. Isso não só economiza recursos em geral, como também gera uma baixa sobrecarga comparado à virtualização completa. Neste guia, vamos cobrir o processo de instalação do Docker no seu servidor.

## Preparação

Para começar, você deve se conectar ao seu servidor Linux via SSH. Dê uma olhada no nosso [guia de Acesso Inicial (SSH)](dedicated-linux-ssh.md) caso precise de ajuda com isso. Ao longo deste guia, usaremos o Ubuntu como distribuição Linux.

## Instalação

Agora que você está conectado ao seu servidor Linux, pode seguir os métodos de instalação. Selecione uma das distribuições Linux abaixo para ver os passos relevantes.

<Tabs>
<TabItem value="ubuntu" label="Ubuntu" default>

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

Agora que adicionou o repositório do Docker às suas fontes, rode o comando `apt-get update` para buscar as atualizações.
```
sudo apt-get update
```

Neste ponto, você configurou com sucesso o repositório `apt` do Docker. Como passo final, instale os pacotes do Docker. Você pode instalar a versão mais recente com o comando abaixo.
```
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

</TabItem>

<TabItem value="debian" label="Debian" default>

Para começar, você precisará adicionar o pacote do Docker usando o `apt` e configurá-lo. Isso permitirá que você instale e atualize o Docker facilmente pelo repositório no futuro.

Use os comandos abaixo para adicionar a chave GPG oficial do Docker à sua lista de repositórios.
```
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/debian/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
```

Depois de configurar isso, você precisará adicionar o repositório às fontes do `apt` com o comando abaixo.
```
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/debian \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

Agora que adicionou o repositório do Docker às suas fontes, rode o comando `apt-get update` para buscar as atualizações.
```
sudo apt-get update
```

Neste ponto, você configurou com sucesso o repositório `apt` do Docker. Como passo final, instale os pacotes do Docker. Você pode instalar a versão mais recente com o comando abaixo.
```
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

</TabItem>

<TabItem value="fedora" label="Fedora">

Para começar, você deve instalar o pacote `dnf-plugins-core`, que ajuda a gerenciar repositórios.
```
sudo dnf -y install dnf-plugins-core
```

Com o pacote instalado, adicione o repositório do Docker e instale-o com o comando abaixo.
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

Se tudo der certo, você verá uma mensagem de boas-vindas no terminal com algumas informações básicas. Se estiver enfrentando erros de `Permission Denied`, certifique-se de que ativou a opção **Compatibilidade Docker** na sua interface web e reiniciou o servidor conforme descrito na seção de preparação.

![](https://screensaver01.zap-hosting.com/index.php/s/tzJwpYRYb9Mmryo/preview)

Você instalou o Docker com sucesso no seu servidor Linux.

## Configuração Pós-Instalação

Com o Docker instalado no seu servidor, você pode fazer algumas configurações extras para eliminar a necessidade de usar `sudo` ao executar comandos Docker e para iniciar o Docker automaticamente na inicialização do servidor.

### Gerenciar Docker sem Sudo

Você pode remover a necessidade de prefixar todos os comandos Docker com `sudo` criando um grupo Docker e adicionando seus usuários a ele. Isso melhora a praticidade, mas cuidado: isso concede privilégios equivalentes ao root indiretamente ao usuário.

Crie o grupo `docker` e adicione seu usuário atual com os comandos abaixo.
```
# Criar grupo Docker
sudo groupadd docker

# Adicionar usuário atual ao grupo Docker
sudo usermod -aG docker $USER
```

Depois disso, recomendamos reiniciar seu servidor para garantir que a associação ao grupo seja atualizada. Como alternativa, você pode usar `newgrp docker`.

Agora verifique se consegue rodar comandos Docker sem `sudo` executando novamente:
```
docker run hello-world
```

:::tip
Às vezes, você pode receber um erro relacionado a um arquivo de configuração se já tiver rodado o comando com `sudo` antes. Para resolver, basta deletar o diretório Docker com `rmdir ~/.docker/`, que será recriado automaticamente na próxima execução.
:::

Se o comando rodar normalmente, significa que você configurou o Docker para funcionar sem precisar usar `sudo`.

### Iniciar Docker na Inicialização

Você pode configurar o Docker para iniciar automaticamente na inicialização do servidor usando o `systemd`, que é usado pela maioria das distribuições Linux.

:::tip
No Ubuntu e Debian, o Docker já está configurado para iniciar automaticamente por padrão. Se você usa uma dessas distribuições, não precisa fazer nada.
:::

Para habilitar o serviço Docker para iniciar no boot, rode os comandos:
```
sudo systemctl enable docker.service
sudo systemctl enable containerd.service
```

Para desabilitar o serviço no boot, substitua `enable` por `disable`. Você também pode gerenciar o serviço com vários subcomandos do `systemctl`, como:
```
sudo systemctl start [seu_serviço]
sudo systemctl stop [seu_serviço]
sudo systemctl restart [seu_serviço]
```

## Conclusão

Parabéns, você instalou e configurou o Docker com sucesso no seu servidor Linux! Se tiver mais dúvidas ou problemas, entre em contato com nosso time de suporte, que está disponível para te ajudar todos os dias!