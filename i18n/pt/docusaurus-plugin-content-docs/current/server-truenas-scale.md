---
id: server-truenas-scale
title: "Configurar TrueNAS SCALE em um Servidor - Monte Seu NAS Pessoal"
description: "Descubra como instalar o TrueNAS SCALE no seu servidor dedicado para armazenamento em rede e compartilhamento de arquivos → Saiba mais agora"
sidebar_label: Instalando TrueNAS SCALE
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introdução

TrueNAS SCALE é uma plataforma de armazenamento open-source que permite montar um sistema de armazenamento conectado em rede (NAS) em um servidor. Neste guia, você vai instalar o TrueNAS SCALE em um Servidor Dedicado e configurar o setup inicial, incluindo pools de armazenamento, contas de usuário e compartilhamento de arquivos SMB.

:::danger VPS Não Serve
Nossos produtos VPS não são adequados pois possuem apenas um disco virtual. Você pode instalar o TrueNAS SCALE em um VPS, mas não poderá criar pools de armazenamento, já que o disco inteiro é usado pelo sistema operacional.

Para configurar o TrueNAS SCALE, é necessário um [servidor dedicado](https://zap-hosting.com/en/dedicated-server-hosting/) com pelo menos dois discos rígidos.
 :::

<InlineVoucher />

## Preparação

Antes de começar a instalação, certifique-se de ter os seguintes requisitos mínimos de sistema:

| Hardware   | Mínimo     | Recomendação ZAP-Hosting |
| ---------- | ----------- | ------------------------ |
| CPU        | 2 núcleos de CPU | 8 núcleos vCPU          |
| RAM        | 8 GB        | 16 GB                    |
| Espaço em disco | 16 GB para SO | Depende do uso           |

<InlineServiceLink />

Acesse o site oficial do [TrueNAS](https://www.truenas.com/download-truenas-scale/) e baixe a versão estável mais recente. Você pode fazer upload do ISO para um local público (seu próprio servidor web ou armazenamento na nuvem) ou mantê-lo localmente no seu PC para montagem direta.

:::tip[Hospedagem do ISO]
Se planeja montar via URL no console remoto, garanta que o link do seu arquivo ISO termine com `.iso` e seja acessível publicamente sem autenticação.
:::

**Montando o ISO**

Faça login no seu [Dashboard ZAP-Hosting](https://zap-hosting.com/en/customer/) e vá até seu Servidor Dedicado na lista de serviços. Lá, abra a página de gerenciamento do servidor e clique em **Ativar iLO** para acessar a interface de gerenciamento do servidor.

![img](https://screensaver01.zap-hosting.com/index.php/s/or8HJ8e3QeAJm6z/preview)

Na interface iLO, encontre a opção **Console Remoto Integrado**. Escolha o tipo de console que preferir e inicie-o. Uma nova janela abrirá com acesso direto à tela do seu servidor.

No console remoto, clique no **ícone de CD** no topo e selecione **CD/DVD**. Escolha **URL de Mídia Scriptada** se você enviou o ISO online e insira a URL direta. Caso contrário, selecione **Arquivo .iso Local** para navegar no seu computador. De qualquer forma, o ISO será montado na unidade virtual de CD/DVD.

![img](https://screensaver01.zap-hosting.com/index.php/s/F98tgjsqq2S6nqp/preview)

:::tip Métodos Alternativos
Para outros métodos de montagem de ISO, incluindo via interface Virtual Media, consulte o [guia de ISO próprio](dedicated-iso.md).
:::

Com o ISO montado, use o menu **Power** no console para reiniciar. Selecione **Reset** e o servidor vai reiniciar, dando boot pelo ISO do TrueNAS SCALE.

## Instalação

Fique de olho no console enquanto o sistema inicializa. A tela de setup do TrueNAS SCALE aparece e o instalador carrega automaticamente. O carregamento do ambiente de instalação leva alguns minutos.

![img](https://screensaver01.zap-hosting.com/index.php/s/TJwMWFZeorwGryn/preview)

O instalador mostra **Escolha o dispositivo de destino** junto com seus discos disponíveis. Navegue com as **setas do teclado** e selecione o disco para o SO. Escolha o menor disco para a instalação do SO (todo esse disco será dedicado ao TrueNAS SCALE). Pressione **Espaço** para selecionar e depois **Enter**.

![img](https://screensaver01.zap-hosting.com/index.php/s/Z5o7TFye6BPor7Q/preview)

Aparece um aviso indicando que a instalação vai **apagar** tudo no disco selecionado. Navegue até **Sim** com as setas e pressione **Enter**.

![img](https://screensaver01.zap-hosting.com/index.php/s/LS2mJBQ2deawKFp/preview)

Depois, o instalador pergunta sobre a configuração da autenticação. **Opção 1** define a senha agora, enquanto **Opção 2** permite configurar depois via interface web. Vamos usar **Opção 2: Configurar via Web UI** para mais flexibilidade. Selecione e pressione **Enter**.

![img](https://screensaver01.zap-hosting.com/index.php/s/oPpMLCZ5nPePdLW/preview)

O instalador pergunta **"Permitir boot EFI?"**. Selecione **Sim** (recomendado) e pressione **Enter**.

![img](https://screensaver01.zap-hosting.com/index.php/s/We8tqgctQrjz5oS/preview)

A instalação começa e normalmente leva de 15 a 20 minutos. Acompanhe o progresso na tela enquanto os arquivos são copiados e o sistema se configura.

![img](https://screensaver01.zap-hosting.com/index.php/s/BAykMjmxDn76sJB/preview)

Quando terminar, aparecerá **"A instalação do TrueNAS foi concluída com sucesso"**. Pressione **Enter**.

![img](https://screensaver01.zap-hosting.com/index.php/s/GmNwHaTfY6KHSbN/preview)

Antes de reiniciar, **desmonte o ISO** ou você vai dar boot de novo no instalador. Clique no **ícone do DVD**, selecione **CD/DVD** e clique em **Ejetar Mídia**. Reinicie pelo menu Power ou deixe reiniciar automaticamente.

<InlineServiceLink />

## Configuração

Após a instalação, você precisa configurar de qual disco o servidor vai dar boot. O TrueNAS SCALE está instalado, mas o servidor precisa ser configurado para iniciar pelo disco correto via configuração do ROM do controlador RAID.

:::info[Passo Crítico]
Depois da instalação, configure o volume de boot no ROM do controlador RAID para garantir que o servidor inicialize pelo disco correto.
:::

**Configurando o Disco de Boot no ROM**

Fique de olho no console durante o boot. Quando aparecer **"Pressione F8 para Configuração do ROM para Utilitário de Arrays"**, aperte **F8** imediatamente.

![img](https://screensaver01.zap-hosting.com/index.php/s/BCosyXCBnZJjeiX/preview)

O utilitário de configuração do ROM abre. Navegue até **Selecionar Volume de Boot** com as setas e pressione **Enter**.

![img](https://screensaver01.zap-hosting.com/index.php/s/Sw4netxJPkX3354/preview)

Seus discos disponíveis aparecem aqui. Navegue até o disco onde o TrueNAS SCALE está instalado e pressione **Enter**.

![img](https://screensaver01.zap-hosting.com/index.php/s/7mPgXFMqn9Q475Z/preview)

Com o disco selecionado, pressione **F8** para salvar. Confirme se for solicitado e saia do utilitário. Seu servidor vai iniciar no TrueNAS SCALE.

![img](https://screensaver01.zap-hosting.com/index.php/s/YEFokMkz3RSB625/preview)

**Acessando a Interface Web**

Após o primeiro boot, o console do TrueNAS SCALE mostra a URL de acesso à Web UI: `http://[seu_endereço_ip]`. Anote esse endereço IP, pois você vai precisar para acessar a interface web.

![img](https://screensaver01.zap-hosting.com/index.php/s/8JwikNGRTz4La3y/preview)

:::tip Configuração Automática de Rede
O TrueNAS SCALE normalmente configura a rede automaticamente via DHCP. Pule essa parte a menos que tenha múltiplos IPs ou precise de um IP estático específico.
:::

Para configurar a rede manualmente, selecione **1) Configurar Interfaces de Rede** no menu do console. Escolha sua interface principal (como `enp0s3` ou `eth0`), selecione **Configurar IPv4**, depois **Estático**. Insira seu endereço IP, máscara de sub-rede e gateway (encontre esses dados no seu Dashboard ZAP-Hosting).

Abra um navegador e acesse `http://[seu_endereço_ip]` usando o IP mostrado no console.

Como escolhemos **Configurar via Web UI** antes, aqui você define a senha. A página de login mostra o usuário `truenas_admin`. Digite uma senha forte, confirme e clique em **Enviar**.

![img](https://screensaver01.zap-hosting.com/index.php/s/dZrpdZYQwKBFksJ/preview)

:::danger Segurança Importante
Escolha uma senha forte e única para sua conta admin do TrueNAS. Essa conta tem acesso total ao sistema.
:::

Após o login, o dashboard aparece mostrando informações do sistema, status da rede, pools de armazenamento, serviços e alertas. Você configurou o TrueNAS SCALE com sucesso e está pronto para montar seu armazenamento.

![img](https://screensaver01.zap-hosting.com/index.php/s/fYkDpDfpqwTT5yY/preview)

**Criando Pools de Armazenamento**

Clique em **Storage** na barra lateral esquerda, depois clique no botão **Create Pool**.

![img](https://screensaver01.zap-hosting.com/index.php/s/fFeSjm3YnnPfxq5/preview)

Primeiro, dê um nome para seu pool, algo como `Disk`, `tank` ou o que fizer sentido para você. Clique em **Next** quando estiver pronto.

![img](https://screensaver01.zap-hosting.com/index.php/s/23MNpcrHmmGz2L2/preview)

Na seção **Data**, abra o menu **Layout** e escolha a configuração que melhor atende suas necessidades:

- **Stripe**: Máxima capacidade utilizável, sem redundância
- **Mirror**: Armazena dados idênticos em dois discos, oferecendo redundância e reduzindo a capacidade utilizável
- **RAIDZ1**: Oferece redundância de um disco
- **RAIDZ2**: Oferece redundância de dois discos
- **RAIDZ3**: Oferece redundância de três discos

![img](https://screensaver01.zap-hosting.com/index.php/s/wKHy7f8xoifEXB6/preview)

Em **Seleção de Disco**, todos os seus discos de armazenamento aparecem listados. Clique nos que quer incluir no pool e eles vão para a área de configuração mostrando a capacidade estimada.

:::info Disco de Boot Não Disponível
O disco de instalação não aparece aqui pois é exclusivo para o sistema operacional.
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/McEcGQSBzHaZNNc/preview)

Deixe as configurações opcionais como padrão e clique em **Next**. A página de revisão mostra sua configuração com nome, layout, discos e capacidade. Verifique e clique em **Create Pool** para confirmar.

![img](https://screensaver01.zap-hosting.com/index.php/s/RDitijsoGWtEoT5/preview)

**Organizando com Datasets**

Com seu pool criado, você pode organizar seus dados usando datasets. Datasets são subdivisões lógicas do pool que ajudam a separar diferentes tipos de dados. Clique em **Datasets** na barra lateral. Seu novo pool aparece lá (ex: "Disk").

![img](https://screensaver01.zap-hosting.com/index.php/s/oZPctpbLcCESWWt/preview)

Clique em **Add Dataset**. O pool já está definido como pai. Dê um nome como `documents`, `media` ou `backups`. Deixe as opções avançadas padrão, a menos que tenha necessidades específicas. Clique em **Save**.

![img](https://screensaver01.zap-hosting.com/index.php/s/JxPmPW53zke9NQL/preview)

**Criando Contas de Usuário**

Clique em **Credentials** na barra lateral, depois em **Add**. Escolha um nome de usuário (tipo `john` ou `fileuser`), adicione o nome completo e defina uma senha. Deixe grupo principal, diretório home e shell como padrão. No final, ative a opção **SMB** para acesso via Windows.

Personalize permissões conforme sua segurança. Para compartilhamento básico, as opções padrão com SMB ativado já bastam. Quando terminar, clique em **Submit**.

:::danger Importante para Acesso SMB
Não use `root` ou `truenas_admin` para compartilhamento de arquivos. Essas contas do sistema não funcionam com SMB. Crie usuários dedicados.
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/3SLGk75E3KP57ZS/preview)

**Configurando Compartilhamentos SMB**

Clique em **Shares** na barra lateral. Aparecem três opções: Windows (SMB) para Windows/macOS/Linux, Unix (NFS) para Linux/Unix e Block (iSCSI) para armazenamento em bloco. Vamos configurar SMB. Clique em **Add** na seção Windows (SMB) Shares.

![img](https://screensaver01.zap-hosting.com/index.php/s/fgWcqjyxXLD2dRy/preview)

A janela **Add SMB** abre. Em **Path**, navegue até seu dataset (ex: `/mnt/Disk/documents`). Em **Name**, digite algo como `documents` (nome que os usuários verão na rede). **Purpose** pode ficar padrão na maioria dos casos. Adicione uma descrição se quiser. Existem opções avançadas (configurações ACL e outras), mas deixe o acesso de convidado desativado por segurança. Clique em **Save**.

![img](https://screensaver01.zap-hosting.com/index.php/s/D2xQYHQfbmsKRwT/preview)

Após criar o compartilhamento, um popup avisa que o **serviço SMB não está rodando**. Clique em **Start Service**. Também marque **Start Automatically** para iniciar junto com o sistema. O compartilhamento SMB já está disponível na rede.

![img](https://screensaver01.zap-hosting.com/index.php/s/KQH5zoA7FYWaXMa/preview)

Para compartilhamentos NFS com sistemas Linux/Unix, vá em **Shares** → **Unix (NFS) Shares** e clique em **Add**. Selecione seu dataset, configure redes e permissões, habilite NFS quando solicitado e salve.

<InlineServiceLink />

## Acessando Seu Compartilhamento

Para acessar seu compartilhamento, por exemplo, pelo Windows, abra o **Explorador de Arquivos**. Clique com o botão direito em **Este Computador** (ou **Meu Computador**) e selecione **Adicionar um local de rede**.

![img](https://screensaver01.zap-hosting.com/index.php/s/NDJWjdpC6ZCq6c3/preview)

O **Assistente para Adicionar Local de Rede** abrirá. Clique em **Avançar** para continuar.

![img](https://screensaver01.zap-hosting.com/index.php/s/7KXPxNQJy4qsiBy/preview)

Quando pedir o local, use o formato: `\\[seu_endereço_ip]\[nome_do_compartilhamento]`. Exemplo: `\\192.168.1.100\documents`. Substitua `[seu_endereço_ip]` pelo IP do seu servidor TrueNAS e `[nome_do_compartilhamento]` pelo nome que você deu ao compartilhamento SMB. Depois, clique em **Avançar**.

![img](https://screensaver01.zap-hosting.com/index.php/s/2yaoWfiCTX6XLAz/preview)

Digite o **nome de usuário** e **senha** do usuário criado no TrueNAS. Não use `root` ou `truenas_admin`, pois não funcionam com SMB. Marque **Lembrar minhas credenciais** para salvar para a próxima vez. Clique em **OK**.

![img](https://screensaver01.zap-hosting.com/index.php/s/4nFReNbPLkHfmMp/preview)

O compartilhamento TrueNAS já está acessível. Navegue pelos arquivos, crie pastas e copie dados como em qualquer outra unidade de rede. Você conectou seu PC Windows ao compartilhamento TrueNAS com sucesso.

![img](https://screensaver01.zap-hosting.com/index.php/s/nBqrkmkCYJntwW2/preview)

:::tip Acesso Rápido
Para facilitar, use **Mapear unidade de rede** em vez de **Adicionar um local de rede**. O compartilhamento aparece como uma letra de unidade (ex: `Z:`) no Explorador de Arquivos.
:::

:::info Acesso via MacOS ou Linux
**macOS**: No Finder, pressione `Cmd+K` e digite `smb://[seu_endereço_ip]/[nome_do_compartilhamento]`

**Linux**: Use a opção "Conectar ao servidor" do gerenciador de arquivos com `smb://[seu_endereço_ip]/[nome_do_compartilhamento]`, ou monte via terminal com `mount.cifs`
:::

## Conclusão

Parabéns, você instalou e configurou o TrueNAS SCALE no seu servidor com sucesso. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂