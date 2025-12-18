---
id: vserver-linux-jitsi
title: "VPS: Instalação do Jitsi Meet"
description: "Descubra como configurar seu próprio servidor seguro e fácil de usar do Jitsi Meet para videoconferências no Debian e tenha reuniões online sem complicação → Saiba mais agora"
sidebar_label: Instalar Jitsi Meet
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Jitsi Meet é um software de videoconferência open source com o qual você pode montar suas próprias videoconferências no seu servidor. Uma grande vantagem do Jitsi Meet é a facilidade de uso: você só precisa de um navegador (ou do app Jitsi no celular) e não precisa fazer login em serviços externos. Cada videoconferência recebe sua própria URL para entrar na reunião. O Jitsi Meet é perfeito para videoconferências até com pessoas que não têm muita experiência.

Atenção: Sem configurações adicionais, qualquer pessoa que acessar o servidor Jitsi Meet pode iniciar suas próprias videoconferências no servidor.

<InlineVoucher />

## Instalar Jitsi Meet em um servidor Debian

A seguir mostramos como instalar um servidor Jitsi Meet em um servidor Debian. Basicamente, o Jitsi Meet funciona em outros servidores Linux, como Ubuntu, e a instalação é bem parecida.

### Preparativos

Para usar o Jitsi Meet direito, você deve usar seu próprio domínio para acessar o servidor Jitsi. Faz sentido criar um subdomínio exclusivo para o servidor Jitsi Meet. Como exemplo, usamos o domínio meet.zap-testdomain.de.

Para domínios ZAP-Hosting, você precisa criar uma nova entrada na administração de DNS. Insira o nome do subdomínio no campo "Nome" e o endereço IP do seu servidor no campo "Valor". No nosso exemplo, vamos colocar "meet" no campo Nome e o endereço IP do servidor de teste ZAP onde vamos instalar o Jitsi Meet no campo Valor: 185.239.239.49 (coloque o IP do seu servidor, não esse IP de exemplo).

Você pode acessar o servidor Jitsi Meet via endereço IP, mas para o certificado SSL é necessário um domínio. Sem domínio, o navegador vai mostrar um aviso de segurança.

Depois que o subdomínio estiver configurado (pode levar até 24 horas para as mudanças entrarem em vigor), você pode preparar seu servidor para a instalação.

Conecte-se ao seu servidor via Putty ou WinSCP.

Antes de continuar, certifique-se de que o servidor está atualizado. Se necessário, execute cada comando com privilégios de superusuário, adicionando "sudo" antes do comando (ex: "sudo apt-get update").

```
$	apt-get update
```
```
$	apt-get upgrade
```

Se não houver firewall instalado no servidor, você pode instalar um, por exemplo o UFW:
```
$	apt install ufw
```

Configure o firewall com as seguintes regras:

```
$	ufw allow OpenSSH
$	ufw allow 80/tcp
$	ufw allow 443/tcp
$	ufw allow 4443/tcp
$	ufw allow 10000/udp
```

Ative o firewall:
```
$	ufw enable
```

Verifique o status:
```
$	ufw status
```

### Instalação do Jitsi Meet

Para instalar o Jitsi Meet, o primeiro passo é instalar o pacote gnupg:
```
$	apt install gnupg
```

Depois da instalação, baixe a chave GPG do Jitsi e adicione a chave:
```
$	wget https://download.jitsi.org/jitsi-key.gpg.key
```
```
$	apt-key add jitsi-key.gpg.key
```

Para instalar o Jitsi Meet, você precisa adicionar o repositório Jitsi:
```
$	nano /etc/apt/sources.list.d/jitsi-stable.list
```

No editor, adicione a seguinte linha. Depois salve e feche o editor:
```
$	deb https://download.jitsi.org stable/
```

Agora o Jitsi Meet pode ser instalado. É recomendado atualizar os pacotes instalados novamente:
```
$	apt update
```
```
$	apt install jitsi-meet
```

Durante a instalação, será solicitado que você informe um nome do host. Digite o subdomínio que você criou para o seu servidor Jitsi Meet. No exemplo do nosso servidor de teste, é: meet.zap-testdomain.de

![](https://screensaver01.zap-hosting.com/index.php/s/oBEDBDx6GqzAoFa/preview)

Confirme com "Ok". Uma nova janela vai abrir perguntando se você quer criar um certificado TLS autoassinado ou usar um existente. Selecione a opção "Gerar um novo certificado autoassinado":

![](https://screensaver01.zap-hosting.com/index.php/s/jcr84boZHiakNDS/preview)

A instalação do Jitsi Meet está concluída e agora só falta pegar o certificado TLS.

Instale o pacote Certbot:
```
$	apt install certbot
```

Execute o script para instalar o certificado TLS:
```
$	/usr/share/jitsi-meet/scripts/install-letsencrypt-cert.sh
```

Durante a execução, será pedido um endereço de e-mail que será enviado para letsencrypt.org. Digite um e-mail válido e confirme.

Depois disso, o Jitsi Meet deve estar totalmente instalado e ativo no seu servidor. Para testar se o Jitsi Meet foi instalado corretamente, basta digitar o subdomínio configurado na barra de endereços do seu navegador. Neste tutorial, é:
```
https://meet.zap-testdomain.de
```

## Conclusão

Parabéns, você instalou e configurou o Jitsi com sucesso! Se tiver mais dúvidas ou problemas, fale com nosso time de suporte, que está disponível para te ajudar todos os dias!

<InlineVoucher />