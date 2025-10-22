---
id: vserver-linux-screen
title: "VPS: Instalação do Screen"
description: "Descubra como gerenciar múltiplas sessões de terminal de forma eficiente em sistemas Unix-like com a ferramenta Screen → Saiba mais agora"
sidebar_label: Instalar Screen
services:
  - vserver
---

## Introdução

Screen é um multiplexador de terminal para sistemas operacionais Unix-like, como Linux. Ele permite que você gerencie várias sessões de terminal dentro de uma única janela ou conexão remota. Neste guia, vamos cobrir os passos de instalação e fornecer orientações de uso para você se familiarizar com o screen.

## Preparação

Antes de instalar qualquer coisa no servidor, é recomendado rodar o comando de atualização correspondente ao seu sistema operacional para manter seu servidor seguro.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>

```
sudo apt update && sudo apt upgrade
```

</TabItem>
<TabItem value="centos" label="CentOS">

```
sudo yum update
```

</TabItem>
<TabItem value="opensuse" label="OpenSUSE">

```
sudo zypper update
```

</TabItem>
<TabItem value="fedora" label="Fedora">

```
sudo dnf update
```

</TabItem>
</Tabs>

## Instalação

Instalar a ferramenta screen é tão fácil quanto rodar o comando abaixo, de acordo com sua distro Linux:

<Tabs>
<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>

```
sudo apt install screen
```

</TabItem>
<TabItem value="centos" label="CentOS">

```
sudo yum install screen
```

</TabItem>
<TabItem value="opensuse" label="OpenSUSE">

```
sudo zypper install screen
```

</TabItem>
<TabItem value="fedora" label="Fedora">

```
sudo dnf install screen
```

</TabItem>
</Tabs>

## Uso Básico do Screen

Como mencionado, o screen permite criar múltiplas sessões. Para iniciar uma, basta rodar o comando abaixo, substituindo `[name]` pelo nome que quiser.
```
screen -S [name]
```

:::info
Lembre-se que os comandos deste guia são case sensitive, especialmente em relação às flags dos parâmetros.
:::

Isso abrirá uma nova sessão do screen onde você pode iniciar qualquer script ou programa que queira manter rodando mesmo após fechar a conexão remota.

Você pode sair de uma sessão do screen usando `CTRL + A`, seguido de `D` ou simplesmente digitando `exit` no console.

:::tip
Você pode listar todas as sessões/screens ativas usando o comando `screen -ls` ou `screen -list`.
:::

Para voltar a uma sessão criada anteriormente, execute o comando `screen -r [name]`, que te levará direto para a sessão desejada.

## Flags de Parâmetros do Screen

O screen tem várias flags `-` que você pode usar para configurar os comandos. Algumas das mais importantes estão na tabela abaixo.

| Flag | Alias | Info |
| ---- | ----- | ---- |
| -v   | | Mostra a versão atual do screen |
| -S `[name]` | | Inicia uma nova sessão screen chamada `[name]` |
| -ls | -list | Lista todas as sessões screen em execução |
| -wipe `[name]` | | Apaga sessões, com parâmetro opcional `[name]` |
| -r `[name]` | | Reanexa à sessão screen `[name]` |
| -d -r `[name]` | | Desanexa da sessão atual e reanexa à `[name]` |

:::tip
Você pode ver todos os parâmetros disponíveis rodando `screen -h`, que retorna uma lista completa.
:::

## Uso Avançado do Screen

### Uso de Janelas

Agora que você já conhece os comandos básicos do screen, é hora de aprender alguns atalhos para navegar melhor pelas suas sessões. Dentro de qualquer screen, você pode criar múltiplas janelas separadas para diferentes tarefas.

:::note 
Todos os atalhos desta parte do guia devem ser usados após pressionar `CTRL + A`.
:::

Pressionar `C` cria uma nova janela vazia no diretório atual. Para navegar entre janelas, use `N` (próxima), `P` (anterior) ou `"` para abrir uma lista e escolher a janela com as setas.

Por padrão, todas as janelas têm o mesmo nome (geralmente o nome do shell que você está usando). Para mudar, rode o comando `A` e escolha um novo nome.

Para fechar uma janela, pressione `K`.

#### Janelas Divididas

Para abrir 2 janelas em configuração dividida, use `S` (horizontal) ou `|` (vertical) e navegue entre elas com `Tab`.

:::tip
Depois de criar uma janela dividida, vá para ela com `Tab` e use `"` para abrir uma janela anterior na segunda área da divisão.
:::

Você pode dividir as janelas quantas vezes quiser, mas o uso de RAM do servidor pode aumentar bastante, como esperado ao multitarefar.

## Conclusão

Esperamos que este guia tenha ajudado você a entender como funciona a ferramenta screen no Linux. Para dúvidas ou suporte, não hesite em contatar nosso time de suporte, disponível todos os dias para te ajudar! 🙂