---
id: webspace-plesk-ssl
title: "Hospedagem de Sites: Criar um Certificado SSL no Plesk"
description: "Aprenda como proteger seu site com um certificado SSL no Plesk e habilitar HTTPS para conexões criptografadas."
sidebar_label: Criar Certificado SSL
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Introdução

Um certificado SSL criptografa a conexão entre seu site e seus visitantes. Depois que o HTTPS é ativado, os navegadores estabelecem uma conexão segura e exibem um ícone de cadeado na barra de endereços. Isso protege dados sensíveis, aumenta a confiança e evita que os navegadores marquem seu site como inseguro.

<InlineVoucher />

## Protegendo Seu Domínio Principal

Quando um domínio é criado pela primeira vez no Plesk, ele fica acessível via HTTP e não é criptografado. No painel do Plesk, você verá que nenhum certificado foi atribuído ainda. Se você abrir o domínio no navegador nesse estágio, ele normalmente será marcado como não seguro:

![img](https://screensaver01.zap-hosting.com/index.php/s/jGW9QLHwYLFNxgq/download)

Para ativar a criptografia, abra o domínio no seu painel Plesk e navegue até **Certificados SSL/TLS**. O menu correspondente será aberto:

![img](https://screensaver01.zap-hosting.com/index.php/s/8rSr7Jt3DsjDzBY/download)

A partir daqui, você pode solicitar um certificado gratuito da Let's Encrypt. Durante o processo de solicitação, você deve fornecer um endereço de e-mail válido e selecionar os nomes de domínio que devem ser protegidos. Na maioria dos casos, tanto o domínio raiz quanto o subdomínio www são selecionados, desde que a entrada www exista na sua configuração DNS:

![img](https://screensaver01.zap-hosting.com/index.php/s/LTFN73ekPjtikwp/preview)

Após confirmar a solicitação clicando em **Obter gratuitamente**, o Plesk se comunica com a Let's Encrypt e emite o certificado automaticamente. Depois que o certificado for criado com sucesso, o HTTPS deve ser aplicado ativando o redirecionamento permanente de HTTP para HTTPS nas configurações da hospedagem:

![img](https://screensaver01.zap-hosting.com/index.php/s/BN7AMzG6MyMKb38/preview)

Após a ativação, todos os visitantes serão redirecionados automaticamente para a versão HTTPS criptografada do seu site. Você pode verificar a instalação abrindo seu domínio com https no navegador.



## Protegendo Todos os Subdomínios com um Certificado Wildcard

Se vários subdomínios são usados ou planejados, um certificado wildcard oferece uma solução mais eficiente. Ele protege o domínio principal, bem como todos os subdomínios existentes e futuros. Para solicitar um certificado wildcard, abra novamente o menu **Certificados SSL/TLS**:

![img](https://screensaver01.zap-hosting.com/index.php/s/jGW9QLHwYLFNxgq/download)

Selecione a opção para renovar ou solicitar um certificado Let's Encrypt. Ative a opção para proteger o domínio wildcard:

![img](https://screensaver01.zap-hosting.com/index.php/s/ZMcdJk9wCzifBmq/preview)

Após confirmar a solicitação, o Plesk exibirá uma caixa azul de informação contendo um registro DNS TXT que deve ser criado:

![img](https://screensaver01.zap-hosting.com/index.php/s/wnbNfKeTMsCdsy9/preview)

Esse registro TXT deve ser adicionado à zona DNS do seu domínio exatamente como fornecido. Ele confirma a propriedade do domínio e permite que a Let's Encrypt valide a solicitação. Uma entrada DNS ficará parecida com o exemplo a seguir:

![img](https://screensaver01.zap-hosting.com/index.php/s/tDtDaERR7twzaMr/preview)

:::warning Atraso na Propagação DNS
A propagação DNS pode levar até 24 horas até que o registro TXT esteja acessível globalmente. Durante esse tempo, a validação pode falhar porque alguns servidores DNS ainda retornam informações desatualizadas. Se isso acontecer, aguarde até que o registro tenha sido totalmente propagado e tente a verificação novamente.
:::



Para garantir que o registro TXT foi propagado corretamente e está acessível publicamente, você pode verificá-lo usando uma ferramenta externa de consulta DNS, como o MXToolbox SuperTool:

https://mxtoolbox.com/SuperTool.aspx

Abra o site e selecione a opção **Consulta TXT**. Insira o nome do host completo fornecido pelo Plesk, geralmente no formato `_acme-challenge.seudominio.com`, e inicie a consulta. A ferramenta consultará servidores DNS públicos e exibirá os registros TXT visíveis no momento.

Se o valor correto de verificação for exibido exatamente como mostrado no Plesk, a entrada DNS foi propagada com sucesso e a Let's Encrypt pode validar a propriedade do domínio. Se nenhum resultado for retornado ou o valor for diferente, a propagação DNS pode ainda estar em andamento. Nesse caso, aguarde e repita a consulta após algum tempo até que a entrada correta fique visível mundialmente.

![img](https://screensaver01.zap-hosting.com/index.php/s/iFP5P8SY6oSXQBW/download)

Assim que o registro estiver visível, volte ao Plesk e acione a validação novamente. Se for bem-sucedida, o certificado wildcard será emitido e exibido como protegido. A partir desse momento, qualquer subdomínio criado automaticamente será protegido.



## Conclusão

Parabéns! Seu site agora está protegido com criptografia SSL com sucesso. Todos os dados transmitidos entre seu servidor e os visitantes estão seguros, os navegadores reconhecem seu domínio como confiável e o HTTPS é aplicado automaticamente.

Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, que está disponível diariamente para te ajudar! 🙂

<InlineVoucher />