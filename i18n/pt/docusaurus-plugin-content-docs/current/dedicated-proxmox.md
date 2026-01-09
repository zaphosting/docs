---
id: dedicated-proxmox
title: "Servidor Dedicado: Instalação do Proxmox VE"
description: "Descubra como configurar e gerenciar o Proxmox VE para virtualização empresarial com ferramentas integradas e alta disponibilidade → Saiba mais agora"
sidebar_label: Instalar Proxmox
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

O Proxmox Virtual Environment é uma plataforma completa e open-source para gerenciamento de servidores focada em virtualização empresarial. Ele integra de forma robusta o hypervisor KVM e Containers Linux (LXC), funcionalidades de armazenamento e rede definidas por software, tudo em uma única plataforma. Com a interface web integrada, você pode gerenciar VMs e containers, alta disponibilidade para clusters, ou as ferramentas integradas de recuperação de desastres com facilidade.



## Preparação

Para começar, você deve montar e inicializar a partir do instalador ISO do Proxmox VE (Virtual Environment) no seu servidor dedicado. Existem duas formas de fazer isso: o método mais fácil via o painel web do seu servidor dedicado ou o método mais longo, manualmente pelo painel iLO do seu servidor.



### Montar ISO via painel web
Vá até a seção **Instalação Inicial** no painel web do seu servidor dedicado. Aqui, primeiro clique no botão verde **ativar iLO**. Aguarde um momento até que as seções fiquem visíveis. Pode ser necessário atualizar a página para garantir que tudo carregue corretamente.

![](https://screensaver01.zap-hosting.com/index.php/s/r6XNqDqQeEec7wW/preview)

Em seguida, selecione uma ISO do **Proxmox VE** no menu suspenso. Recomendamos usar a versão mais recente para estar sempre atualizado com as últimas novidades. Agora clique no botão verde **Inserir**.

![](https://screensaver01.zap-hosting.com/index.php/s/xXfWzqtE6JMG9Ka/preview)

Por fim, você deve reiniciar seu servidor dedicado para conseguir inicializar a partir da ISO. Isso pode ser feito pelo botão de reiniciar na etapa 3.



### Montar ISO via iLO
Prepare sua ISO do Proxmox VE acessando o [site oficial de downloads do Proxmox](https://www.proxmox.com/en/downloads/proxmox-virtual-environment/iso). Depois, faça o upload e monte a ISO no seu servidor dedicado seguindo os guias de [iLO](dedicated-ilo.md) e [ISO Própria](dedicated-iso.md), que mostram como fazer login e enviar sua ISO personalizada.



## Configuração & instalação

:::important
Garanta que você tenha reiniciado seu servidor após importar e montar a nova ISO antes de continuar.
:::

Agora que a ISO está montada, você precisa inicializar por ela. Você pode fazer isso pelo **console remoto HTML5** no painel iLO. Pelo painel web, clique no link **Abrir aqui** em `Acesso web iLO`, que te levará ao painel, e use as credenciais fornecidas para login.

:::note
Seu navegador pode exibir um aviso de risco de segurança, ignore e aceite para continuar.
:::

Após o login, na seção **Visão Geral**, localize e clique no link **HTML5** em `Console Remoto Integrado`. Isso abrirá uma sobreposição de painel.

![](https://screensaver01.zap-hosting.com/index.php/s/HPWJ3oksyo3SdW6/preview)

O Proxmox deve iniciar o processo de instalação. Use as `setas`, `enter` e `esc` para navegar. Recomendamos escolher a versão **Gráfica** do Proxmox, que é o foco deste guia.

![](https://screensaver01.zap-hosting.com/index.php/s/MGqm3EAxYc8EBQw/preview)

Aguarde alguns segundos até o processo continuar. Você terá que aceitar o EULA do Proxmox clicando no botão **Concordo** no canto inferior direito. Na próxima tela, selecione o disco alvo para o ambiente. Se estiver usando um único disco, as configurações padrão já estão ajustadas para você, então basta continuar clicando em **Próximo**.

![](https://screensaver01.zap-hosting.com/index.php/s/pZ8FiFJT6tJKFsS/preview)

:::note
Se quiser configurar RAID, já que alguns servidores dedicados oferecem dois discos, use o botão **Opções** para escolher o modo `RAID`. Recomendamos `RAID1`, que espelha os dois discos.

![](https://screensaver01.zap-hosting.com/index.php/s/WqiYPowiLttzoeZ/preview)
:::

Na próxima etapa, configure idioma e teclado, que geralmente são detectados automaticamente. Preencha e continue.

![](https://screensaver01.zap-hosting.com/index.php/s/As4J4NzytcZFrHp/preview)

Agora defina uma senha forte e um e-mail. O e-mail será usado pelo painel para enviar alertas e notificações importantes.

:::important
Lembre da senha, pois será usada para o primeiro login no painel após a instalação!
:::

![](https://screensaver01.zap-hosting.com/index.php/s/QAEaygacSXNfgot/preview)

A última etapa é configurar a rede. Selecione a interface de gerenciamento disponível e um nome do host para seu servidor.

![](https://screensaver01.zap-hosting.com/index.php/s/EZDzsaq4aXpP4we/preview)

Agora vá até a seção **Endereços IP** no painel web do seu servidor dedicado para encontrar um IP disponível.

![](https://screensaver01.zap-hosting.com/index.php/s/KQC4DLj6LxTX4io/preview)

Escolha um endereço IP para usar no painel do Proxmox. Preencha o IP, Máscara de Rede e Gateway no instalador usando os dados do painel. Para o servidor DNS, você pode usar `8.8.8.8`, que é o DNS público do Google.

Depois de preencher tudo, clique em **Próximo** e revise as opções na página de resumo. Se estiver tudo certo, clique em **Instalar** para continuar!

## Acessar o painel
Após a instalação e reinicialização, selecione a opção **Proxmox Environment GNU/Linux** no menu e pressione **Enter**. Quando carregar, você verá uma mensagem de boas-vindas do Proxmox no console com o endereço IP e o link para acessar o painel via navegador (o que você configurou antes). Acesse esse link.

:::note
Seu navegador pode exibir novamente um aviso de risco de segurança, ignore e aceite para continuar.
:::

Se o link não abrir, provavelmente houve alguma configuração incorreta durante a instalação, possivelmente na configuração de rede.

No painel, faça login com o usuário `root` e a senha que você definiu na instalação. Certifique-se que o **Realm** esteja configurado como `Linux PAM standard authentication`.

![](https://screensaver01.zap-hosting.com/index.php/s/iKcErA9Bx5LpB3n/preview)

Após o login, ignore a mensagem de assinatura clicando em **OK** para fechar. Pronto, você instalou o Proxmox VE no seu servidor dedicado e acessou seu painel!



## Crie sua primeira VM
Aqui estão os passos básicos para criar sua primeira Máquina Virtual (VM) pelo painel Proxmox. Vá até `local (painel)` e selecione a seção **Imagens ISO**. Você pode fazer upload do arquivo `.iso` manualmente ou deixar o Proxmox baixar direto pelo link de download da ISO.

![](https://screensaver01.zap-hosting.com/index.php/s/GJjxxkPAkiRM7Fw/preview)

Depois disso, crie sua VM clicando no botão **Criar VM** no canto superior direito. Vai abrir um menu com várias opções.

Primeiro configure as opções gerais. Por padrão, o `Node` estará no padrão (aqui `painel`). Defina um ID único para a VM, que por padrão começa em `100` ou incrementa se já tiver VMs. Dê um nome para sua VM, pode ser qualquer um.

![](https://screensaver01.zap-hosting.com/index.php/s/6LmXZ26bnNY46yS/preview)

Agora vá para as configurações do SO. Selecione a imagem ISO que você enviou antes. Defina também o tipo e a versão do sistema operacional que vai usar.

![](https://screensaver01.zap-hosting.com/index.php/s/QWjGQ7grR8ttaqZ/preview)

Recomendamos deixar as configurações do sistema padrão, pois já vêm configuradas corretamente. Na seção de disco, defina o tamanho do disco para sua VM. Também escolha o pool de armazenamento, que por padrão será `local-lvm`. O resto das configurações pode ficar como está.

![](https://screensaver01.zap-hosting.com/index.php/s/2XJyydoZwaEMDeZ/preview)

Na seção de CPU, defina o número de sockets e núcleos que quer usar. Configure como preferir para sua VM.

![](https://screensaver01.zap-hosting.com/index.php/s/RrWWT2wMRaQzde7/preview)

Na seção de Memória, defina quanta RAM quer alocar para a VM e escolha o estado do ballooning.

![](https://screensaver01.zap-hosting.com/index.php/s/DaXCsYLwWeMr9aJ/preview)

Também recomendamos deixar as configurações de rede padrão, que já estão adequadas por enquanto. Por fim, revise todas as configurações da VM. Recomendamos ativar a opção `Iniciar após criação` para que a VM ligue automaticamente. Se estiver tudo certo, clique em **Finalizar** para criar a VM.

![](https://screensaver01.zap-hosting.com/index.php/s/EfNAZ4idcxizDsa/preview)

Pronto, você criou sua primeira VM no painel Proxmox! Ela aparecerá na visão geral do servidor no lado esquerdo do painel.





## Conclusão

Parabéns, você instalou com sucesso o Proxmox no seu servidor dedicado. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂