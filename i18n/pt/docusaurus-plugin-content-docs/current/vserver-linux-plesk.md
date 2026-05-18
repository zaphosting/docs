---
id: vserver-linux-plesk
title: "Configure o Plesk em um Servidor Linux - Gerencie Sites com um Painel de Controle Poderoso"
description: "Descubra como gerenciar sites e servidores de forma eficiente com Plesk, para iniciantes e experts → Saiba mais agora"
sidebar_label: Instalar Plesk
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Plesk é uma plataforma completa de hospedagem de sites e gerenciamento de servidores que permite aos usuários administrar sites, servidores, contas de e-mail e muito mais através de uma interface super amigável. É uma solução versátil, ideal tanto para iniciantes quanto para desenvolvedores web experientes e administradores de sistemas.

<InlineVoucher />

## Instalar o Plesk

:::info
Antes de instalar, rode `apt update` e `apt upgrade` para garantir que os pacotes mais recentes estejam instalados no servidor.
:::
Atualmente, o Plesk só pode ser instalado no Debian 9 (Stretch), Debian 10 (Buster), Ubuntu 18.04 (Bionic Beaver), Ubuntu 20.04 (Focal Fossa), CentOS 7/8, Red Hat Enterprise Linux 7.x/8.x, CloudLinux 7.1+/8, AlmaLinux OS, Rocky Linux 8.x e Virtuozzo Linux 7. A arquitetura precisa ser 64-bit.

A conexão com o servidor pode ser feita via Putty, por exemplo.

## Iniciando a instalação

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="One-Click Installation" label="Instalação com 1 Clique" default>

Para que o Plesk seja instalado totalmente automático com os componentes padrão usados pela maioria dos usuários, basta um comando:

>O instalador do Plesk sempre instala a versão mais recente do Plesk. Pode acontecer de os gráficos/screenshots aqui não mostrarem a versão mais atual.

```
sh <(curl https://autoinstall.plesk.com/one-click-installer || wget -O - https://autoinstall.plesk.com/one-click-installer)
```

:::info
Se aparecer o erro: "-bash: curl: command not found", instale o pacote com `apt install curl`.
:::

Depois de executar esse comando, normalmente leva entre 15 e 60 minutos para o Plesk ser instalado completamente.

:::info
A sessão SSH não pode ser fechada enquanto o instalador estiver ativo, senão a instalação será interrompida.
:::
Caso isso aconteça, será necessário reinstalar o servidor para reiniciar o instalador. 
Se o instalador for reiniciado sem reinstalar o servidor, podem ocorrer problemas com funcionalidades que não funcionam durante a instalação ou no painel do Plesk.

:::info
Pode parecer que o instalador travou, mas em 99% dos casos ele continua rodando após alguns minutos, pois ainda está configurando pacotes e ajustes.
:::

A instalação termina quando esta tela aparecer:

![](https://screensaver01.zap-hosting.com/index.php/s/9o6bEzBr8rCAWzf/preview)

</TabItem>
<TabItem value="Web Installation" label="Instalação via Web">

São necessários poucos comandos para instalar o Plesk via Web.

:::info
O instalador do Plesk sempre instala a versão mais recente do Plesk. Pode acontecer de os gráficos/screenshots aqui não mostrarem a versão mais atual.
:::

Baixe o instalador do Plesk:
```
wget https://autoinstall.plesk.com/plesk-installer
```

Dê permissão de execução:

```
chmod +x plesk-installer
```

Inicie o instalador:

```
./plesk-installer --web-interface
```

</TabItem>
<TabItem value="Konsolen Installation" label="Instalação via Console">

São necessários poucos comandos para instalar o Plesk via console.

:::info
O instalador do Plesk sempre instala a versão mais recente do Plesk. Pode acontecer de os gráficos/screenshots aqui não mostrarem a versão mais atual.
:::

Baixe o instalador:

```
wget https://autoinstall.plesk.com/plesk-installer
```

Dê permissão de execução:

```
chmod +x plesk-installer
```

Inicie o instalador:

```
./plesk-installer
```

Após executar esses três comandos, a licença deve ser aprovada com "F":

![](https://screensaver01.zap-hosting.com/index.php/s/XrCa3WYALoDx6H3/preview)

Depois da aprovação, o sistema perguntará qual versão do Plesk instalar, como Plesk Obsidian ou Plesk Onyx, indicando qual é a mais estável. Normalmente, usa-se a versão "stable" para produção. Como as opções já apontam para a versão estável, confirme com "F".

A pergunta sobre permitir que o Plesk colete dados para melhorar o produto pode ser respondida com "Y" (Sim) ou "n" (Não).

Depois, o sistema perguntará qual tipo da versão selecionada você quer instalar. Geralmente, o tipo "Recommended" já é suficiente. Módulos que não forem instalados agora, mas forem necessários, podem ser adicionados depois no painel do Plesk.

A próxima pergunta sobre permitir a instalação/atualização de pacotes deve ser confirmada com "F".

Agora o instalador inicia a instalação.

:::info
A sessão SSH não pode ser fechada enquanto o instalador estiver ativo, senão a instalação será abortada e será necessário reinstalar o servidor para reiniciar o instalador.
:::
Pode parecer que o instalador travou, mas em 99% dos casos ele continua rodando após alguns minutos, pois ainda está configurando pacotes e ajustes.

A instalação termina quando esta tela aparecer:

![](https://screensaver01.zap-hosting.com/index.php/s/8K5p6RHapwYDfZY/preview)

</TabItem>
</Tabs>

## Abrir o Instalador Web

Depois que o instalador for iniciado, a instalação é feita pelo navegador. A página de instalação pode ser acessada via `https://IP:8447` ou `https://Domínio.xx:8447`.

## O Painel Web do Plesk

:::info
Ao acessar o Painel Web, pode aparecer a mensagem: "Esta conexão não é segura". Confirme isso na primeira vez para abrir a página.
:::

A interface web pode ser acessada via `https://IP:8443` ou `https://Domínio.xx:8443` do servidor. Os dados de login são root/admin e a senha root atual. Alternativamente, você pode usar uma das URLs exibidas. Se elas não funcionarem mais, crie novas URLs com o comando ``plesk login``.

### Configuração

Assim que o registro for concluído, a conta Admin deve ser configurada. Informe um nome de contato, e-mail e senha. Se já tiver uma licença Plesk, pode inseri-la aqui. Caso contrário, pode solicitar uma licença trial de 15 dias direto do Plesk. Por fim, confirme o contrato de usuário.
Agora o Plesk está pronto para uso.

### Definir idioma

Após a instalação, o painel do Plesk vem em inglês. O idioma português pode ser configurado em Ferramentas & Configurações ➡️ Aparência do Plesk ➡️ Idiomas. Lá, selecione "pt-BR". Depois, para definir o idioma como padrão para todos, clique em "Definir como padrão".
Após logout e login, o painel do Plesk estará em português.

![](https://screensaver01.zap-hosting.com/index.php/s/6Wo8Qz3oMXGzn3t/preview)

### Adicionar domínio

Para adicionar o primeiro domínio, clique no botão azul "Adicionar domínio".

![](https://screensaver01.zap-hosting.com/index.php/s/2S4mgRPctffS452/preview)

Agora, insira seu domínio. Também defina o IP, nome de usuário e senha para a hospedagem de sites do domínio. Se o subdomínio "www" já estiver configurado no DNS do domínio, um certificado SSL da Let's Encrypt pode ser criado direto. Essa opção aparece após inserir um e-mail e confirmar no botão azul "OK".

![](https://screensaver01.zap-hosting.com/index.php/s/SLSBz5TRH2mDBB8/preview)

:::info
O domínio deve apontar para o IP da hospedagem de sites. Se o domínio for da ZAP-Hosting, pode ser redirecionado facilmente via EasyDNS. Se for externo, deve-se criar um registro A apontando para o IP, e os subdomínios "www" e "webmail" também devem apontar para o IP. Um registro MX também deve apontar para o IP da hospedagem.

Pode levar até 24 horas para que uma alteração ou novo registro DNS seja propagado corretamente.
:::

## Criptografia SSL

Durante o registro do domínio/criação da hospedagem, um certificado SSL da Let's Encrypt já foi gerado. Agora ele pode ser ativado em "Configurações de hospedagem" do domínio. Depois, confirme clicando em "Aplicar".

:::info
Para redirecionar permanentemente para HTTPS (SSL) ao acessar o site, marque a opção "Redirecionamento permanente 301, adequado para SEO, de HTTP para HTTPS".
:::

![](https://screensaver01.zap-hosting.com/index.php/s/HL4tcnTqJtX7be9/preview)

Ao abrir o domínio no navegador, ele mostrará que está criptografado.

![](https://screensaver01.zap-hosting.com/index.php/s/xcqwAQWK77X3yip/preview)

:::info
A instalação e configuração do primeiro domínio com criptografia estão totalmente concluídas.
:::

## Conclusão

Parabéns, você instalou e configurou o Plesk com sucesso! Se tiver dúvidas ou problemas, nosso time de suporte está disponível todos os dias para te ajudar!

<InlineVoucher />