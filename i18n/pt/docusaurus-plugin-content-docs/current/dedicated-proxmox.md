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

<InlineVoucher />

## Preparação

Para começar, você precisa montar e dar boot pelo instalador ISO do Proxmox VE (Virtual Environment) no seu servidor dedicado. Existem duas formas de fazer isso: o método mais fácil via webinterface do seu servidor dedicado ou o método mais longo, manualmente pelo painel iLO do seu servidor.



### Montar ISO via webinterface
Vá até a seção **Instalação Inicial** no painel webinterface do seu servidor dedicado. Primeiro, clique no botão verde **ativar iLO**. Espere um momento até que as seções fiquem visíveis. Pode ser necessário atualizar a página para garantir que tudo carregue corretamente.

![](https://github.com/zaphosting/docs/assets/42719082/b457f17a-0bc6-42db-91ec-a553fd456936)

Depois, selecione uma ISO do **Proxmox VE** no menu suspenso. Recomendamos usar a versão mais recente para estar sempre atualizado com as últimas novidades. Agora clique no botão verde **Inserir**.

![](https://github.com/zaphosting/docs/assets/42719082/2b0baf71-d683-46ad-a34a-bfda9d71939d)

Por fim, reinicie seu servidor dedicado para que ele possa dar boot pela ISO. Você pode fazer isso pelo botão de reiniciar na etapa 3.



### Montar ISO via iLO
Prepare sua ISO do Proxmox VE acessando o [site oficial de downloads do Proxmox](https://www.proxmox.com/en/downloads/proxmox-virtual-environment/iso). Depois, faça o upload e monte a ISO no seu servidor dedicado seguindo os guias de [iLO](dedicated-ilo.md) e [ISO Própria](dedicated-iso.md), que mostram como fazer login e enviar sua ISO personalizada.



## Configuração e instalação

:::important
Certifique-se de que você reiniciou seu servidor após importar e montar a nova ISO antes de continuar.
:::

Com a ISO montada, você precisa dar boot por ela. Faça isso usando o **console remoto HTML5** no painel iLO. Pelo webinterface, clique no link **Abrir aqui** em `Acesso web iLO`, que te levará ao painel, e use as credenciais fornecidas para login.

:::note
Seu navegador pode mostrar um aviso de risco de segurança, ignore e aceite para continuar.
:::

Após o login, na seção **Visão Geral**, localize e clique no link **HTML5** em `Console Remoto Integrado`. Isso abrirá uma sobreposição de painel.

![](https://github.com/zaphosting/docs/assets/42719082/3b9ce97e-f974-439b-8e57-ced05f248ef9)

O Proxmox deve iniciar o processo de instalação. Use as `setas`, `enter` e `esc` para navegar. Recomendamos escolher a versão **Gráfica** do Proxmox, que é o foco deste guia.

![](https://github.com/zaphosting/docs/assets/42719082/614218f2-df12-43ad-95fe-39026b900141)

Espere alguns segundos até o processo continuar. Você terá que aceitar o EULA do Proxmox clicando no botão **Concordo** no canto inferior direito. Na próxima tela, selecione o disco alvo para o ambiente. Se estiver usando um único disco, as configurações padrão já estão ajustadas para você, então basta continuar clicando em **Próximo**.

![](https://github.com/zaphosting/docs/assets/42719082/090c1f2e-20fe-48f3-b4b4-070c197f4825)

:::note
Se quiser configurar RAID, já que alguns servidores dedicados oferecem dois discos, use o botão **Opções** para escolher o modo `RAID`. Recomendamos `RAID1`, que espelha os dois discos.

![](https://github.com/zaphosting/docs/assets/42719082/44e3b6ba-07f3-4313-8d36-b185a6da8089)
:::

Na próxima etapa, configure idioma e teclado, que geralmente são detectados automaticamente. Preencha e continue.

![](https://github.com/zaphosting/docs/assets/42719082/931e066c-9868-48d9-a638-f07c932579d2)

Agora defina uma senha forte e um endereço de e-mail. O e-mail será usado pelo painel para enviar alertas e notificações importantes.

:::important
Lembre-se da senha, pois será usada para o primeiro login no painel após a instalação!
:::

![](https://github.com/zaphosting/docs/assets/42719082/617a504c-9520-4b89-93c3-81fba06e5fdc)

A última etapa é configurar a rede. Selecione a interface de gerenciamento disponível e um nome do host para seu servidor.

![](https://github.com/zaphosting/docs/assets/42719082/d694a5af-20e2-4c1b-9cdb-c1a8ca684cde)

Agora vá até a seção **Endereços IP** no webinterface do seu servidor dedicado para encontrar um IP disponível.

![](https://github.com/zaphosting/docs/assets/42719082/e358f264-8535-4280-a1c5-0a15f4b99ed9)

Escolha um endereço IP para usar no painel do Proxmox. Preencha o IP, Máscara de Rede e Gateway no instalador com os dados do webinterface. Para o servidor DNS, você pode usar `8.8.8.8`, que é o DNS público do Google.

Depois de preencher tudo, clique em **Próximo** e revise as opções na página de resumo. Se estiver tudo certo, clique em **Instalar** para continuar!

## Acessando o painel
Após a instalação e reinicialização, selecione a opção **Proxmox Environment GNU/Linux** no menu e pressione **Enter**. Quando carregar, você verá uma mensagem de boas-vindas do Proxmox no console, contendo o endereço IP e o link para acessar o painel via navegador (o que você especificou antes). Acesse esse link.

:::note
Seu navegador pode mostrar novamente um aviso de risco de segurança, ignore e aceite para continuar.
:::

Se o link não abrir, provavelmente houve alguma configuração errada durante a instalação, provavelmente na configuração de rede.

No painel, faça login com o usuário `root` e a senha que você definiu na instalação. Certifique-se que o **Realm** está definido como `Linux PAM standard authentication`.

![](https://github.com/zaphosting/docs/assets/42719082/4072c2ac-6f5c-4350-a5df-0635b1f433c0)

Após o login, ignore a mensagem de assinatura clicando em **OK** para confirmar. Pronto, você instalou o Proxmox VE no seu servidor dedicado e acessou seu painel com sucesso!



## Crie sua primeira VM
Aqui estão os passos básicos para criar sua primeira Máquina Virtual (VM) pelo painel do Proxmox. Vá até `local (painel)` e selecione a seção **Imagens ISO**. Você pode fazer upload manual do arquivo `.iso` ou deixar o Proxmox baixar direto, fornecendo a URL de download da ISO.

![](https://github.com/zaphosting/docs/assets/42719082/8182bd73-690f-434f-8394-5fdca6889a74)

Depois disso, crie sua VM. No canto superior direito, clique no botão **Criar VM**. Vai abrir um menu com várias opções.

Primeiro, configure as opções gerais. Por padrão, o `Node` estará definido para o padrão (neste caso, `painel`). Você deve fornecer um ID único para a VM, que por padrão começa em `100` e incrementa se já houver VMs existentes. Agora dê um nome para sua VM, pode ser qualquer coisa.

![](https://github.com/zaphosting/docs/assets/42719082/bcd2eb41-a8fc-4a44-9abb-072f9e408d10)

Siga para a seção de configurações do SO. Selecione a imagem ISO que você enviou anteriormente. Também defina o tipo e a versão do sistema operacional que vai usar.

![](https://github.com/zaphosting/docs/assets/42719082/05d51c46-5a69-4cd7-b2e6-c3472437caf9)

Recomendamos deixar as configurações do sistema padrão, pois já estão adequadas. Vá para a seção de disco, onde você pode definir o tamanho do disco para sua VM. Também pode escolher o pool de armazenamento, que por padrão será `local-lvm`. O resto das configurações pode ficar como está.

![](https://github.com/zaphosting/docs/assets/42719082/26f11d42-8884-4bb5-b0fe-d7b4df7885a5)

Na seção de CPU, defina opções como socket e quantidade de núcleos que a VM deve usar. Configure do jeito que preferir.

![](https://github.com/zaphosting/docs/assets/42719082/91103b8d-dadc-4305-a3fe-bf4c8f96fc27)

Na seção de Memória, defina quanta RAM quer alocar para a VM e escolha o estado do ballooning.

![](https://github.com/zaphosting/docs/assets/42719082/ac0048cb-0bd4-4791-9a9f-857e5037955d)

Também recomendamos deixar as configurações de rede padrão, que já estão adequadas por enquanto. Por fim, revise todas as configurações feitas durante a criação da VM. Recomendamos ativar a opção `Iniciar após criação` para que a VM ligue automaticamente. Se estiver satisfeito, clique em **Finalizar** para criar a VM.

![](https://github.com/zaphosting/docs/assets/42719082/d14a8b3d-e9bb-4feb-8049-428e84c1e917)

Pronto, você criou sua primeira VM no painel do Proxmox! Ela aparecerá na visão geral do servidor no lado esquerdo do painel.





## Conclusão

Parabéns, você instalou o Proxmox com sucesso no seu servidor dedicado. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />