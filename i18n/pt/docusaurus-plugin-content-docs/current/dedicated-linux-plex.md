---
id: dedicated-linux-plex
title: "Configure o Plex em um Servidor Linux - Transmita Sua Biblioteca de Mídia Pessoal"
description: "Descubra como gerenciar e transmitir sua biblioteca de mídia pessoal de forma fácil com o Plex para acesso em vários dispositivos → Saiba mais agora"
sidebar_label: Instalar Plex
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Plex é uma plataforma para gerenciar e transmitir conteúdo de mídia como filmes, séries, músicas e fotos a partir de um local central. Com o Plex Media Server, você pode organizar suas bibliotecas, enriquecê-las automaticamente com metadados e transmitir para vários dispositivos tanto na rede local quanto pela internet. Isso faz do Plex uma solução flexível para acessar suas coleções pessoais de mídia com facilidade e praticidade.

![img](https://screensaver01.zap-hosting.com/index.php/s/68xdESEHimoY9Jp/preview)

Pensando em hospedar esse serviço por conta própria? Vamos te guiar em cada passo para configurar e ajustar tudo, além de te mostrar o que é importante ficar de olho.



## Instale o Plex com o Instalador One Click Apps

Você pode instalar o **Plex** diretamente pelo nosso **One Click Apps Installer** na interface web do VPS. Depois de configurar os apps iniciais, abra o catálogo de apps, busque por **Plex** e inicie a implantação com seu projeto, ambiente e configurações de domínio preferidos. Isso te dá uma forma rápida e prática de instalar e gerenciar o **Plex** sem precisar usar linha de comando manualmente, aproveitando a gestão integrada via web, suporte a domínios personalizados e provisionamento SSL quando disponível.

## Requisitos

Antes de instalar o **Plex**, certifique-se de que seu ambiente de hospedagem atende aos seguintes requisitos para garantir uma instalação tranquila e desempenho ideal.

| Hardware   | Mínimo      | Recomendação ZAP-Hosting |
| ---------- | ------------ | ------------------------ |
| CPU        | 4 núcleos vCPU | 8 núcleos vCPU          |
| RAM        | 4 GB         | 8 GB                     |
| Espaço em disco | 25GB         | 25 GB                    |

O software exige que todas as dependências necessárias estejam instaladas e que esteja rodando em um sistema operacional suportado. Confira se seu servidor atende aos seguintes requisitos antes de prosseguir com a instalação:

**Dependências:** Nenhuma

**Sistema Operacional:** Ubuntu (16.04+) / Debian (8+) - Intel/AMD 64-bit

Garanta que todas as dependências estejam instaladas e que a versão correta do sistema operacional esteja em uso para evitar problemas de compatibilidade durante a instalação do Plex.



## Instalação

O site oficial do Plex Media oferece a versão atual para Linux do Plex Media Server para download. Use a variante 64-bit para garantir compatibilidade com todas as edições modernas do Linux. Rode o comando abaixo para baixar o arquivo `.deb`

```
wget https://downloads.plex.tv/plex-media-server-new/1.42.1.10060-4e8b05daf/debian/plexmediaserver_1.42.1.10060-4e8b05daf_amd64.deb
```

Após o download, o instalador pode ser executado para configurar o Plex Media Server. Depois de instalado, a configuração é feita pela interface web no navegador, permitindo criar bibliotecas e gerenciar sua coleção de mídia. Rode o comando abaixo para iniciar a instalação:

```
sudo dpkg -i plexmediaserver_1.42.1.10060-4e8b05daf_amd64.deb
```

Para configurar o Plex Media Server, na mesma máquina onde você instalou o servidor, abra uma janela do navegador e acesse `http://127.0.0.1:32400/web`. Nesta etapa, será solicitado que você faça login com uma conta Plex existente ou crie uma nova, caso ainda não tenha.

Esse login é necessário para vincular o servidor à sua conta pessoal, ativando recursos como acesso remoto, gerenciamento de usuários e sincronização entre dispositivos. Após autenticar com sucesso, você estará dentro da sua instância Plex Media. A partir daí, pode criar bibliotecas para filmes, séries, músicas ou fotos, buscar metadados automaticamente e compartilhar conteúdo com outros usuários na sua rede local ou pela internet.

Depois da configuração, você também pode acessar seu Plex Media Server externamente abrindo a interface web no navegador via `http://<endereço-ip>:32400`. Substitua `<endereço-ip>` pelo IP público do seu servidor.

A porta 32400 é a porta padrão para acesso web do Plex e pode precisar ser liberada no seu firewall ou roteador caso queira conectar pela internet.

Ao acessar esse endereço, você será redirecionado para a página de login do Plex e poderá gerenciar suas bibliotecas e configurações. Para acesso externo seguro, é recomendado ativar o Acesso Remoto nas configurações do Plex, pois isso garante uma conexão criptografada e encaminha o tráfego pelo serviço Plex.

![img](https://screensaver01.zap-hosting.com/index.php/s/jfQxZ6e4BGMfen5/preview)



## Conclusão e mais Recursos

Parabéns! Você instalou e configurou com sucesso o Plex no seu VPS/servidor dedicado. Também recomendamos dar uma olhada nos seguintes recursos, que podem te ajudar ainda mais durante a configuração do seu servidor:

- [Plex.com](https://Plex.com/) - Site Oficial
- [support.plex.tv/articles/](https://support.plex.tv/articles/) - Central de Ajuda Plex (Documentação)

Tem dúvidas específicas que não foram abordadas aqui? Para mais perguntas ou suporte, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂