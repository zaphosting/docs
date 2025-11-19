---
id: dedicated-linux-ubuntu
title: "Servidor Dedicado: Instalação do Ubuntu 24.04"
description: "Aprenda como instalar e configurar o Ubuntu no seu servidor dedicado para desempenho e confiabilidade ideais → Saiba mais agora"
sidebar_label: Ubuntu 24.04
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

A seguir, vamos te mostrar passo a passo como instalar e configurar o sistema operacional Ubuntu no seu servidor dedicado. Siga essas instruções com atenção para garantir que você configure o sistema operacional com sucesso e o utilize da melhor forma possível.



## Preparação

Para a instalação e configuração de um sistema operacional, é importante inicialmente montar o ISO correspondente do sistema. Existem várias formas possíveis de montar:

1. Montagem via configuração inicial
2. Montagem via iLO (Mídia Virtual)
3. Montagem via iLO (Console Remoto)

Se você ainda não está familiarizado com a montagem de um arquivo ISO, o melhor é consultar nosso [Guia de Configuração Inicial](dedicated-setup.md) ou [Guia de ISO Próprio](dedicated-iso.md).



## Instalação

Depois que o ISO for montado e carregado com sucesso, o servidor deve entrar no processo de instalação. O idioma que você quer usar para seu SO será definido no começo da instalação. Selecione um dos idiomas disponíveis e confirme com a tecla `Enter`. 

![](https://screensaver01.zap-hosting.com/index.php/s/yrHMNzstM23XZH6/preview)

Em seguida, o layout do teclado apropriado deve ser selecionado e configurado para o idioma. Escolha o layout de teclado que for mais adequado para você. 

![](https://screensaver01.zap-hosting.com/index.php/s/x9kYGEWS5fy7Wjp/preview)

Depois disso, ocorre a configuração da rede. O servidor é configurado via DHCP por padrão. O adaptador de rede padrão é o `eno1`. Confirme as configurações padrão e continue. 

![](https://screensaver01.zap-hosting.com/index.php/s/6mr5kAKJQ39iJt5/preview)

Um proxy adicional pode ser configurado como opção. Porém, isso não é essencial. Se você não precisar, simplesmente pule essa etapa. 

![](https://screensaver01.zap-hosting.com/index.php/s/tz97Ee8ZQkxAGGb/preview)

Agora o Espelho do Arquivo do Ubuntu (servidor de download dos pacotes) é definido. Nossos servidores dedicados ficam na Alemanha, então é recomendado escolher o espelho alemão para garantir a melhor velocidade de download possível.

![](https://screensaver01.zap-hosting.com/index.php/s/xNknNyWAbd5DnsZ/preview)

As partições podem ser definidas na configuração de armazenamento. Você pode usar uma partição grande ou subdividir, se quiser. Se quiser usar o SSD inteiro como uma partição só, escolha `Use um disco inteiro` e continue.

![](https://screensaver01.zap-hosting.com/index.php/s/2dJ9oeMGjpWn6cZ/preview)

A instalação cria automaticamente os volumes e você pode prosseguir escolhendo a opção `Concluído`.

![](https://screensaver01.zap-hosting.com/index.php/s/WXfzt57Rtm2SQLD/preview)

Antes de iniciar o processo, você será informado que todos os dados existentes serão apagados. Essa mensagem deve ser confirmada com a opção `Continuar`. 

![](https://screensaver01.zap-hosting.com/index.php/s/L3YcGNbYWpMmaDj/preview)

Configure sua conta de usuário do jeito que preferir, você também pode usar a conta root no final alterando a senha.
Você pode navegar pelas opções com tab ou as setas do teclado. Quando terminar, avance marcando `Concluído`.

![](https://screensaver01.zap-hosting.com/index.php/s/mqrjmF2ZmA2Qj9z/preview)

A instalação do SSH é recomendada. Se quiser gerenciar o servidor via SSH, selecione a opção para instalar e confirme o processo.

![](https://screensaver01.zap-hosting.com/index.php/s/Xz3zzMdZ6C523ip/preview)

O Ubuntu oferece alguns snaps padrão, se quiser usar algum deles, é só marcar os que preferir.

![](https://screensaver01.zap-hosting.com/index.php/s/wcGiSwX935jXeex/preview)

Para finalizar o processo, o ISO deve ser ejetado para evitar que ele seja recarregado quando o servidor reiniciar. Reinicie o servidor uma vez para concluir.

![](https://screensaver01.zap-hosting.com/index.php/s/SzrxCtJTx2S8Nef/preview)



![](https://screensaver01.zap-hosting.com/index.php/s/x3BRLSepSDFnYGA/preview)



## Configuração



### Alterando a senha do usuário root

Você pode mudar a senha do usuário root facilmente. Execute `sudo su` e digite sua senha. Depois, execute `sudo passwd` para alterar a senha. Agora digite a nova senha desejada para o usuário root. Pronto, agora você pode fazer login com o usuário `root`.



## Conclusão

Parabéns, você instalou com sucesso o sistema operacional Ubuntu 24.04 no seu servidor dedicado. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, que está disponível todos os dias para te ajudar! 🙂



