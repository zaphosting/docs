---
id: dedicated-linux-plesk
title: "Servidor Dedicado: Instalação do Plesk"
description: "Descubra como gerenciar sites e servidores de forma eficiente com a plataforma versátil do Plesk para todos os níveis → Saiba mais agora"
sidebar_label: Instalar Plesk
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

O Plesk é uma plataforma completa de hospedagem de sites e gerenciamento de servidores que permite aos usuários administrar sites, servidores, contas de e-mail e muito mais através de uma interface amigável. É uma solução versátil, adequada tanto para iniciantes quanto para desenvolvedores web experientes e administradores de sistemas.

## Instalar Plesk

:::info
Antes de instalar, execute apt update e apt upgrade para garantir que os pacotes mais recentes estejam instalados no servidor.
:::
Atualmente, o Plesk só pode ser instalado no Debian 9 (Stretch), Debian 10 (Buster), Ubuntu 18.04 (Bionic Beaver), Ubuntu 20.04 (Focal Fossa), CentOS 7/8, Red Hat Enterprise Linux 7.x/8.x, CloudLinux 7.1+/8, AlmaLinux OS, Rocky Linux 8.x e Virtuozzo Linux 7. A arquitetura deve ser 64 bits.

A conexão com o servidor pode ser feita via Putty, por exemplo.

## Iniciando a instalação

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="One-Click Installation" label="Instalação com 1 Clique" default>

Para que o Plesk seja instalado totalmente automático com os componentes padrão e recursos usados pela maioria dos usuários do Plesk, basta um comando:

>O instalador do Plesk sempre instala a versão mais recente do Plesk. Pode acontecer de os gráficos/capturas de tela mostrados aqui não exibirem a versão mais atual do Plesk.

```
sh <(curl https://autoinstall.plesk.com/one-click-installer || wget -O - https://autoinstall.plesk.com/one-click-installer)
```

:::info
Se aparecer o erro: "-bash: curl: command not found", você precisa instalar o pacote com `apt install curl`.
:::

Após executar esse comando, normalmente leva entre 15 e 60 minutos para o Plesk ser instalado completamente.

:::info
A sessão SSH não deve ser fechada enquanto o instalador estiver ativo. Isso causaria a interrupção da instalação.
:::
Caso contrário, o servidor teria que ser reinstalado para reiniciar o instalador. 
Se o instalador for reiniciado sem reinstalar o servidor, podem ocorrer problemas com recursos que não funcionam durante a instalação ou no painel do Plesk.

:::info
Pode parecer que o instalador está "travado", mas em 99% dos casos ele continuará rodando após alguns minutos, pois ainda precisa configurar pacotes/configurações e afins.
:::

A instalação está completa quando esta tela aparecer:

![](https://screensaver01.zap-hosting.com/index.php/s/gpNWyd7xZaw22zW/preview)

</TabItem>
<TabItem value="Web Installation" label="Instalação Web">

São necessários apenas alguns comandos para instalar o Plesk via Web.

:::info
O instalador do Plesk sempre instala a versão mais recente do Plesk. Pode acontecer de os gráficos/capturas de tela mostrados aqui não exibirem a versão mais atual do Plesk.
:::

Baixe o instalador do Plesk:
```
wget https://autoinstall.plesk.com/plesk-installer
```

Defina a permissão correta:

```
chmod +x plesk-installer
```

Inicie o instalador:

```
./plesk-installer --web-interface
```

</TabItem>
<TabItem value="Konsolen Installation" label="Instalação via Console">

São necessários apenas alguns comandos para instalar o Plesk via console.

:::info
O instalador do Plesk sempre instala a versão mais recente do Plesk. Pode acontecer de os gráficos/capturas de tela mostrados aqui não exibirem a versão mais atual do Plesk.
:::

Baixe o instalador:

```
wget https://autoinstall.plesk.com/plesk-installer
```

Defina a permissão correta:

```
chmod +x plesk-installer
```

Inicie o instalador:

```
./plesk-installer
```

Após executar esses três comandos, a licença deve ser aprovada com "F":

![](https://screensaver01.zap-hosting.com/index.php/s/dJiJ3sTxCqoC3RR/preview)

Depois da aprovação, o sistema perguntará qual versão do Plesk instalar, como Plesk Obsidian ou Plesk Onyx. Também indicará qual é a mais estável. Normalmente, uma versão "estável" é usada para produção. Como as opções selecionadas já apontam para a versão estável, confirme novamente com "F".

A pergunta sobre se o Plesk pode coletar dados para melhorar o produto pode ser respondida com "Y" (Sim) ou "n" (Não).

Depois, o sistema perguntará qual tipo da versão selecionada do Plesk você quer instalar. Normalmente, o tipo "Recommended" já definido é suficiente. Módulos que não forem instalados agora, mas forem necessários, podem ser adicionados depois no painel do Plesk.

A próxima pergunta sobre permitir a instalação/atualização de pacotes deve ser confirmada com "F".

Agora o instalador inicia a instalação.

:::info
A sessão SSH não deve ser fechada enquanto o instalador estiver ativo. Isso causaria a interrupção da instalação e o servidor teria que ser reinstalado para reiniciar o instalador.
:::
Pode parecer que o instalador está "travado", mas em 99% dos casos ele continuará rodando após alguns minutos, pois ainda precisa configurar pacotes/configurações e afins.

A instalação está completa assim que a seguinte tela aparecer:

![](https://screensaver01.zap-hosting.com/index.php/s/2Wk2Nm2HXCkQjkQ/preview)

</TabItem>
</Tabs>

## Abrir o Instalador Web

Após iniciar o instalador, a instalação é feita pelo navegador. A página de instalação pode ser acessada via https://IP:8447 ou https://Domínio.xx:8447.

## O Painel Web do Plesk

:::info
Ao acessar o Painel Web, pode aparecer a mensagem: "Esta conexão não é segura". Isso deve ser confirmado na primeira vez para abrir a página.
:::

A interface web pode ser acessada via https://IP:8443 ou https://Domínio.xx:8443 do servidor. Os dados de login são root/admin e a senha root atual. Alternativamente, você pode usar um dos URLs exibidos. Se eles não forem mais válidos, você pode criar novos URLs com o comando ``plesk login``.

### Configuração

Assim que o registro for concluído, a conta Admin deve ser configurada. É necessário informar um nome de contato, e-mail e senha. Se você já tiver uma licença Plesk, pode inseri-la diretamente. Caso contrário, pode solicitar uma licença de teste de 15 dias pelo Plesk. Por fim, o contrato de usuário deve ser confirmado.
Agora o Plesk está pronto para uso.

### Definir idioma

Após a instalação, o painel do Plesk estará em inglês. O idioma português pode ser configurado ou selecionado em Ferramentas & Configurações ➡️ Aparência do Plesk ➡️ Idiomas. Lá, selecione "pt-BR". Depois, para definir o idioma como padrão para todos, clique em "Definir como padrão".
Após sair e entrar novamente, o painel do Plesk estará em português.

![](https://screensaver01.zap-hosting.com/index.php/s/GtTGYGCYXwewxNQ/preview)

### Adicionar domínio

Para adicionar o primeiro domínio, clique no botão azul "Adicionar domínio".

[](https://screensaver01.zap-hosting.com/index.php/s/G3fetgKfLNKFr7N/preview)

Agora você pode inserir seu domínio. Também é necessário definir um IP, nome de usuário e senha para a hospedagem de sites do domínio. Se o subdomínio "www" já estiver configurado no DNS do domínio, um certificado SSL da Let's Encrypt pode ser criado diretamente. Essa opção pode ser selecionada após inserir um e-mail e confirmar clicando no botão azul "OK".

[](https://screensaver01.zap-hosting.com/index.php/s/Pw2PSFDKGFDXZi2/preview)

:::info
O domínio deve apontar para o IP da hospedagem de sites. Se o domínio for da ZAP-Hosting, pode ser facilmente redirecionado para a hospedagem via EasyDNS. Se for externo, deve ser criado um registro A apontando para o IP, e os subdomínios "www" e "webmail" também devem apontar para o IP. Um registro MX também deve ser configurado para o IP da hospedagem.

Pode levar até 24 horas para que uma nova alteração no DNS seja propagada para o destino correto.
:::

## Criptografia SSL

Durante o registro do domínio/criação da hospedagem, um certificado SSL da Let's Encrypt já foi gerado. Agora ele pode ser selecionado em "Configurações de hospedagem" do domínio. Depois, confirme clicando em "Aplicar".

:::info
Para que o site seja redirecionado permanentemente para HTTPS (SSL), marque a opção "Redirecionamento permanente 301 adequado para SEO de HTTP para HTTPS".
:::

[](https://screensaver01.zap-hosting.com/index.php/s/xad7pbeZWY6QQHK/preview)

Se o domínio for aberto no navegador, mostrará que está criptografado.

![](https://screensaver01.zap-hosting.com/index.php/s/JrNEjciJfz2LzCX/preview)

:::info
A instalação e a configuração do primeiro domínio com criptografia estão totalmente concluídas.
:::
