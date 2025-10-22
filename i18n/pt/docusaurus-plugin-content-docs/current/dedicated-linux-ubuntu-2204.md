---
id: dedicated-linux-ubuntu-2204
title: "Servidor Dedicado: Instalação do Ubuntu 22.04"
description: "Descubra como instalar e configurar o Ubuntu no seu servidor dedicado para desempenho ideal e suporte de longo prazo → Saiba mais agora"
sidebar_label: Ubuntu 22.04
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

A seguir, vamos te mostrar passo a passo como instalar e configurar o sistema operacional Ubuntu no seu servidor dedicado. Siga essas instruções com atenção para garantir que o sistema operacional seja configurado com sucesso e utilizado da melhor forma possível.



:::warning Versão mais recente disponível / detalhes do EOL

A versão mais recente do Ubuntu é a [24.04](dedicated-linux-ubuntu.md). Recomendamos usar a versão mais atual para projetos de longo prazo.

O suporte para versões antigas do Ubuntu será descontinuado mais cedo ou mais tarde. Os prazos para a versão 22.04 são:

- Fim do Suporte Padrão: 01.04.2027
- Fim do Suporte Ubuntu Pro: 01.04.2032
- Fim do Suporte Legacy: 01.04.2034

Mais informações podem ser encontradas no [site oficial](https://ubuntu.com/about/release-cycle).
:::


<InlineVoucher />

## Preparação

Para a instalação e configuração do sistema operacional, é importante inicialmente montar o ISO correspondente do sistema. Existem várias formas possíveis de montar:

1. Montagem via configuração inicial
2. Montagem via iLO (Mídia Virtual)
3. Montagem via iLO (Console Remoto)

Se você ainda não está familiarizado com a montagem de um arquivo ISO, o ideal é consultar nosso [Guia de Configuração Inicial](dedicated-setup.md) ou o [Guia de ISO Próprio](dedicated-iso.md).



## Instalação

Depois que o ISO for montado e carregado com sucesso, o servidor entrará no processo de configuração. A língua que você quer usar para o seu sistema será definida no início da instalação. Selecione uma das línguas disponíveis e confirme com a tecla `Enter`. 

![](https://screensaver01.zap-hosting.com/index.php/s/yrHMNzstM23XZH6/preview)

Em seguida, o layout do teclado deve ser selecionado e configurado para a língua escolhida. Escolha o layout que for mais adequado para você. 

![](https://screensaver01.zap-hosting.com/index.php/s/x9kYGEWS5fy7Wjp/preview)

Depois disso, ocorre a configuração da rede. O servidor é configurado via DHCP por padrão. O adaptador de rede padrão é o `eno1`. Confirme as configurações padrão e continue. 

![](https://screensaver01.zap-hosting.com/index.php/s/6mr5kAKJQ39iJt5/preview)

Um proxy adicional pode ser configurado como opção, mas não é obrigatório. Se você não precisar, basta pular essa etapa. 

![](https://screensaver01.zap-hosting.com/index.php/s/tz97Ee8ZQkxAGGb/preview)

Agora o Mirror do Arquivo Ubuntu (servidor de download dos pacotes) será definido. Nossos servidores dedicados estão localizados na Alemanha, então recomendamos escolher o mirror alemão para garantir a melhor velocidade de download possível.

![](https://screensaver01.zap-hosting.com/index.php/s/xNknNyWAbd5DnsZ/preview)

As partições podem ser definidas na configuração de armazenamento. Você pode usar uma partição grande ou subdividir, se preferir. Se quiser usar o SSD inteiro como uma única partição, escolha `Use an entire disk` e continue.

![](https://screensaver01.zap-hosting.com/index.php/s/2dJ9oeMGjpWn6cZ/preview)

O setup cria automaticamente os volumes e você pode prosseguir escolhendo a opção `Done`.

![](https://screensaver01.zap-hosting.com/index.php/s/WXfzt57Rtm2SQLD/preview)

Antes de iniciar o processo, você será avisado que todos os dados existentes serão apagados. Essa mensagem deve ser confirmada com a opção `Continue`. 

![](https://screensaver01.zap-hosting.com/index.php/s/L3YcGNbYWpMmaDj/preview)

Configure sua conta de usuário do jeito que preferir, você também pode usar a conta root no final trocando a senha.
Navegue pelas opções com tab ou as setas do teclado. Quando terminar, avance marcando `Done`.

![](https://screensaver01.zap-hosting.com/index.php/s/mqrjmF2ZmA2Qj9z/preview)





A instalação do setup SSH é recomendada. Se quiser gerenciar o servidor via SSH, selecione a opção para instalar e confirme o processo.

![](https://screensaver01.zap-hosting.com/index.php/s/Xz3zzMdZ6C523ip/preview)

​	O Ubuntu oferece alguns snaps padrão, se quiser usar algum deles, é só marcar os que preferir.

![](https://screensaver01.zap-hosting.com/index.php/s/wcGiSwX935jXeex/preview)

Para finalizar, o ISO deve ser ejetado para evitar que ele seja recarregado quando o servidor reiniciar. Reinicie o servidor uma vez para concluir o processo. 

![](https://screensaver01.zap-hosting.com/index.php/s/SzrxCtJTx2S8Nef/preview)



![](https://screensaver01.zap-hosting.com/index.php/s/x3BRLSepSDFnYGA/preview)



## Configuração



### Alterando a senha do usuário root

Você pode trocar a senha do usuário root facilmente. Execute `sudo su` e digite sua senha. Depois, execute `sudo passwd` para alterar a senha. Agora digite a nova senha desejada para o usuário root. Pronto, agora você pode fazer login com o usuário `root`.



## Conclusão

Parabéns, você instalou com sucesso o sistema operacional Ubuntu 22.04 no seu servidor dedicado. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível todos os dias para te ajudar! 🙂






<InlineVoucher />