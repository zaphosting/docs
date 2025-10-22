---
id: webspace-plesk-ssl
title: "Hospedagem de sites: Criar certificado SSL"
description: "Descubra como proteger seu site com criptografia SSL e ativar HTTPS para uma navegação mais segura → Saiba mais agora"
sidebar_label: Criar Certificado SSL
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Criptografe seu site com SSL

:::info
Pressupõe-se que o domínio já esteja apontando para o endereço IP da hospedagem de sites.
:::

Quando um domínio é criado na hospedagem de sites, ele sempre começa sem criptografia. Isso pode ser visto no painel Plesk:

![](https://screensaver01.zap-hosting.com/index.php/s/kkJ67Pd733pt95i/preview)

E a notificação no navegador ao abrir o domínio:

![](https://screensaver01.zap-hosting.com/index.php/s/5iwXSgEb4LrY3xf/preview)
![](https://screensaver01.zap-hosting.com/index.php/s/mpmK8TAjAsgY3FW/preview)

Com um certificado SSL, um domínio pode ser protegido/criptografado adequadamente.

<InlineVoucher />

## Criação do Certificado

Passo 1️⃣: Dê um duplo clique em "Certificado SSL/TLS" para abrir o seguinte menu:

![](https://screensaver01.zap-hosting.com/index.php/s/g5sr6WC4eawqzoF/preview)

Um certificado Let's Encrypt pode ser solicitado gratuitamente.

Passo 2️⃣: Insira/preencha as informações necessárias. Para que o certificado seja solicitado, é preciso fornecer detalhes.

Um endereço de e-mail deve ser especificado e deve-se marcar para quais domínios o certificado deve ser válido. Normalmente, cada domínio também tem o subdomínio "www" ativo, por isso ele também é selecionado se estiver configurado no DNS do domínio.

![](https://screensaver01.zap-hosting.com/index.php/s/Mwf3CEWsYRwprS3/preview)

O certificado é então solicitado clicando em "Obter gratuitamente".

Passo 3️⃣: O certificado foi criado, isso pode ser visto no canto superior direito. Além disso, agora deve ser feita a redireção automática de HTTP para HTTPS, pois sem isso a criptografia não funcionará:

![](https://screensaver01.zap-hosting.com/index.php/s/YBdGQqmtNeWKdxA/preview)

Depois de feito isso, a redireção está ativa. Não importa se você abre a página com http ou https diretamente no navegador, agora sempre será redirecionado para https.

Passo 4️⃣: Agora você pode verificar no navegador se o certificado foi reconhecido:

O cadeado deve estar presente:

![](https://screensaver01.zap-hosting.com/index.php/s/DkZoqg9XGgR67EK/preview)

As informações do certificado, que podem ser abertas clicando no cadeado, também devem mostrar o domínio:

![](https://screensaver01.zap-hosting.com/index.php/s/p5H6RZ25HksHsow/preview)

O site agora está devidamente protegido/criptografado.

## Certificados para Subdomínios

Os mesmos passos podem ser seguidos teoricamente para um subdomínio. Porém, existe uma forma mais fácil de criptografar todos os subdomínios ao mesmo tempo, independentemente de já existirem ou serem novos. Pode-se usar um "certificado curinga" (wildcard). Isso exige uma entrada TXT especial no DNS do domínio. Assim que estiver disponível, ele pode emitir um certificado SSL para todos os subdomínios.

Passo 1️⃣: Abra novamente o menu de certificado SSL/TLS.

![](https://screensaver01.zap-hosting.com/index.php/s/X4kFeMomqmz3nGp/preview)

Depois clique em "Renovar Certificado" no canto superior esquerdo.  
Agora a janela de solicitação do Let's Encrypt será aberta:

![](https://screensaver01.zap-hosting.com/index.php/s/eCcFtaJHxW3XWgF/preview)

Agora selecione "Proteger o domínio curinga":

![](https://screensaver01.zap-hosting.com/index.php/s/5STxWaKf3JWGfZe/preview)

Os subdomínios "www" e "webmail" são adicionados automaticamente.  
Depois clique novamente no botão "Obter gratuitamente".

Passo 2️⃣: Agora aparece uma caixa azul com informações importantes:

![](https://screensaver01.zap-hosting.com/index.php/s/JHag4cd85Lq6gwx/preview)

Um nome de domínio e um valor são fornecidos ali. Isso deve estar permanentemente disponível como um TXT no DNS do domínio, pois só assim o Let's Encrypt pode garantir que o domínio é legítimo e pode ser verificado.

Uma entrada no DNS deve ficar assim:

![](https://screensaver01.zap-hosting.com/index.php/s/qPCeWj5dJRFfYFB/preview)

:::info
Uma entrada DNS pode levar até 24 horas para estar acessível de qualquer lugar do mundo.
:::

Para garantir que a entrada TXT já está ativa, pode-se usar a "TXT Lookup SuperTool" do mxtoolbox: https://mxtoolbox.com/SuperTool.aspx:

![](https://screensaver01.zap-hosting.com/index.php/s/CPSSWeQRpTDsagY/preview)

Se a entrada digitada já aparecer, pode-se confirmar na caixa azul no Plesk clicando em "Recarregar". Agora será verificado se a entrada DNS está presente, e se estiver, após alguns segundos aparecerá "protegido" para "Certificado SSL/TLS" aka "Certificado Curinga":

![](https://screensaver01.zap-hosting.com/index.php/s/AwWiJboz3k6iea8/preview)

Se um subdomínio for criado agora, ele já estará protegido:

![](https://screensaver01.zap-hosting.com/index.php/s/XLHzsgkeLmwJ55m/preview)

Agora toda a transferência de dados está criptografada para o site, pronto.

<InlineVoucher />