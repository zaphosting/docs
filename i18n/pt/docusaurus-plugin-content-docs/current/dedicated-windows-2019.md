---
id: dedicated-windows-2019
title: "Servidor Dedicado: Instalação do Windows Server 2019"
description: "Descubra como instalar e configurar o Windows Server no seu servidor dedicado para desempenho e segurança ideais → Saiba mais agora"
sidebar_label: Windows Server 2019
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
A seguir, vamos te mostrar passo a passo como instalar e configurar o sistema operacional Windows Server no seu servidor dedicado. Siga essas instruções com atenção para garantir que você configure o sistema operacional com sucesso e aproveite ao máximo.

:::info Windows Server 2019
As etapas de instalação e a demonstração neste guia são baseadas no sistema operacional Windows Server 2019. Versões mais antigas do SO podem ter diferenças na estrutura e aparência. Porém, o procedimento é parecido.
:::

:::warning Versão mais nova disponível / Detalhes do EOL

A versão mais recente do Windows Server da Microsoft é a [2025](dedicated-windows.md). Recomendamos usar a versão mais atual para projetos de longo prazo.

O suporte para versões antigas do Windows Server será descontinuado mais cedo ou mais tarde. Os prazos para a versão 2019 são:

- Suporte ativo: 09.01.2024
- Suporte de segurança: 09.01.2029

:::

## Preparação
Para a instalação e configuração de um sistema operacional, é importante inicialmente montar o ISO correspondente do sistema. Existem várias formas de montar:

1. Montagem via configuração inicial
2. Montagem via iLO (Mídia Virtual)
3. Montagem via iLO (Console Remoto)

Se você ainda não está familiarizado com a montagem de um arquivo ISO, o melhor é consultar nosso [Guia de Configuração Inicial](dedicated-setup.md) ou [Guia de ISO Próprio](dedicated-iso.md).

## Instalação
Para instalar um Windows Server, você vai precisar de um arquivo ISO da sua escolha. No nosso webinterface, você pode escolher a versão desejada do Windows. Alternativamente, pode usar um ISO próprio, para isso temos o [Guia de ISO Próprio](dedicated-iso.md).

![](https://screensaver01.zap-hosting.com/index.php/s/DDNsa9zjbXng9Z6/preview)

Se essa tela aparecer no console remoto que você está usando, significa que o ISO carregou com sucesso, agora podemos começar a instalação.  
Escolha seu idioma preferido e clique em "next" para continuar.

![](https://screensaver01.zap-hosting.com/index.php/s/iyjwCCSmjPqiDMt/preview)

Clique em "Install now" para iniciar o processo de instalação.

![](https://screensaver01.zap-hosting.com/index.php/s/y8rXwXfrnRRD9fZ/preview)

O Windows agora pede uma chave de produto. Digite-a se você tiver.

:::note
Nós não vendemos licenças do Windows, é necessário comprar a chave por conta própria.
:::

Você pode comprar chaves de produto do Windows em várias lojas online, verifique se está adquirindo uma chave válida para a sua versão do Windows, pois existem diferentes versões.  
No Windows Server 2019, por exemplo, existem duas edições: a normal e a edição datacenter.  
Se não tiver certeza do que exatamente precisa, basta clicar em "I don't have a product key" (Não tenho uma chave de produto), você pode adicionar a chave depois.

![](https://screensaver01.zap-hosting.com/index.php/s/jH5dYQBq7FtT2SL/preview)

Agora selecione a versão que deseja instalar.  
Tenha certeza de escolher a versão correta, pois não é possível alterar depois.  
Também lembre de escolher uma versão com "(Desktop Experience)", caso contrário seu Windows será baseado em shell.  
Depois de decidir, marque a versão e continue com "next".

![](https://screensaver01.zap-hosting.com/index.php/s/9GRPiS3JpFPyJYk/preview)

Aceite os termos e prossiga clicando em "next".

![](https://screensaver01.zap-hosting.com/index.php/s/Bbfj7R2RdkNkMzq/preview)

Selecione 'Custom' se quiser fazer uma instalação limpa do Windows. Você pode escolher "Upgrade" se quiser atualizar, por exemplo, do 2016 para o 2019.

![](https://screensaver01.zap-hosting.com/index.php/s/8zkx8grPTCSgprQ/preview)

No próximo passo, você precisará criar partições no seu servidor dedicado, normalmente não deve haver partições criadas ainda. Se houver, selecione e exclua.

Você pode criar várias partições menores ou uma grande. Se criar partições menores, recomendamos pelo menos 50GB para a partição principal do Windows.  
Clique em "New" para criar uma partição.

![](https://screensaver01.zap-hosting.com/index.php/s/GtBxwdETkNeSGcT/preview)

Você pode simplesmente clicar em Aplicar se quiser uma partição grande. A instalação automaticamente usa o maior tamanho possível.

![](https://screensaver01.zap-hosting.com/index.php/s/xWr3ySfyGdYbxKt/preview)

O Windows precisa de uma pequena partição do sistema, aceite clicando em "OK".

![](https://screensaver01.zap-hosting.com/index.php/s/B2JPRH3pYRt323x/preview)

Se estiver satisfeito com suas partições, escolha a partição onde o Windows será instalado e clique em "Next".  
A instalação do Windows agora faz tudo automaticamente, isso pode levar alguns minutos.  
Não há mais nada a fazer até a instalação terminar.

## Configuração

Quando a instalação terminar, o Windows vai pedir para você definir uma senha.

![](https://screensaver01.zap-hosting.com/index.php/s/Zmn6zJyPWAM5MHG/preview)

Defina a senha que quiser.

:::info
Recomendamos escolher uma senha forte com caracteres especiais.

Se esquecer a senha, não há como recuperá-la, então anote-a.
:::

Depois de definir a senha, você estará na tela de bloqueio do Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/ddxASYsjNgwHX5i/preview)

Para fazer login no Windows, pressione a combinação de teclas `CTRL + ALT + DELETE`. Você pode fazer isso facilmente pelo console remoto.  
(Você encontra essa opção no console Java em "Keyboard")  
Faça login com sua senha.

No próximo passo, é necessário ativar a Área de Trabalho Remota, assim você pode se conectar facilmente ao seu servidor.  
Abra o Explorador do Windows e clique com o botão direito em "Este Computador".

![](https://screensaver01.zap-hosting.com/index.php/s/HSnnXftNbXNYjq6/preview)

Escolha Propriedades.

![](https://screensaver01.zap-hosting.com/index.php/s/g2CFHpdrZ3E8g29/preview)

Abra "Configurações Remotas".

![](https://screensaver01.zap-hosting.com/index.php/s/e8Q4rixGtBZZH35/preview)

Aceite a informação do firewall que aparecer com "OK" e clique em "Aplicar".

Agora abra a Área de Trabalho Remota no seu computador e insira o endereço IP do seu painel ZAP.  
O nome de usuário é sempre Administrator e a senha é a que você definiu antes.

![](https://screensaver01.zap-hosting.com/index.php/s/w97g9aDrpM8EjpA/preview)

Você pode ignorar o aviso de certificado, marque a opção "Não me perguntar novamente para conexões com este computador".  
Finalize clicando em "Sim".

![](https://screensaver01.zap-hosting.com/index.php/s/SqqCdBZRYysz8yj/preview)

A Conexão de Área de Trabalho Remota agora estabelece a conexão com seu servidor dedicado e você pode usar ele.  
A configuração de rede é aplicada automaticamente via DHCP, então não precisa fazer mais nada.

![](https://screensaver01.zap-hosting.com/index.php/s/9BEEiFAtJ2jCoCk/preview)

:::tip
Se tiver mais dúvidas ou problemas, nosso suporte está aqui para te ajudar!
:::

## Conclusão
Parabéns, você instalou com sucesso o sistema operacional Windows Server 2019 no seu servidor dedicado. Para mais dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível todos os dias para te dar aquela força! 🙂