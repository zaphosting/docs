---
id: dedicated-windows-troubleshooting-restore-access
title: "Servidor Dedicado: Restaurar acesso"
description: "Descubra como recuperar o acesso ao seu Servidor Dedicado Windows após um bloqueio por senha e minimize o tempo de inatividade → Saiba mais agora"
sidebar_label: Restaurar acesso
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Pode acontecer rápido... Você tenta fazer login no seu Servidor Windows, mas sua senha não é mais aceita ou você simplesmente esqueceu. De repente, você fica bloqueado e o acesso a dados e aplicações importantes não é mais possível. Essa situação é obviamente frustrante, mas está longe de ser o fim. Seguindo os passos abaixo, você pode recuperar o acesso ao seu Servidor Dedicado Windows e continuar seu trabalho com o mínimo de interrupção.



## Preparação
O reset do acesso da conta de administrador é feito usando um arquivo ISO do Windows. Portanto, o mesmo arquivo ISO que foi usado originalmente para a instalação do sistema operacional Windows Server deve ser utilizado.

Esse passo pode ser feito via [**Primeira instalação**](dedicated-setup.md) ou via **[ISO](dedicated-iso.md)**. Selecione ou informe o arquivo ISO que foi usado originalmente, dependendo do método escolhido.

Monte o ISO e reinicie o sistema em seguida. A interface de instalação do Windows deve abrir novamente na próxima inicialização. O resultado deve ser parecido com isso:

![](https://screensaver01.zap-hosting.com/index.php/s/XGKfQrwdcmcabY6/preview)



## Restaurar acesso

Agora é hora de resetar o acesso da conta de administrador. Para isso, siga os primeiros passos da instalação novamente. Porém, você só precisa avançar até o início da instalação e então navegar até **Reparar seu computador**.

![](https://screensaver01.zap-hosting.com/index.php/s/qwPgHyqNaQdsqzm/preview)



Isso abrirá as opções avançadas. Clique em **Solução de Problemas** e depois em **Prompt de Comando**. Isso abrirá o prompt de comando (cmd.exe).

![](https://screensaver01.zap-hosting.com/index.php/s/BEan26iNkmzECJ3/download)

Agora, execute os comandos listados abaixo, um por um, no prompt de comando:

```
d:
cd Windows
cd System32
move utilman.exe utilman.exe.bak
copy cmd.exe utilman.exe
net user administrator /active:yes
shutdown -r -t 0
```
:::warning

O layout do teclado para o console HTML iLO pode ser diferente do seu, fazendo com que certos símbolos estejam em teclas diferentes. Fique atento para executar os comandos corretamente.

:::

Após o reboot do servidor, na tela inicial de login, pressione a combinação de teclas **Win+U**. Na janela do Prompt de Comando, digite o seguinte:

```
net user Administrator SuaNovaSenha
exit
```

![](https://screensaver01.zap-hosting.com/index.php/s/TiKJZPdg2kj5LG3/download)

Sua senha foi alterada. Porém, você precisa desfazer as alterações nos arquivos **Utilman**. Para isso, basta reiniciar seu servidor e repetir os passos. No prompt de comando, execute novamente os comandos:

```
d:
cd Windows
cd System32
del utilman.exe ren utilman.exe.bak utilman.exe
shutdown -r -t 0
```





## Conclusão

Depois de concluir o processo, você terá configurado com sucesso uma nova senha para o usuário administrador. Agora, pode usar essa senha para fazer login novamente via conexão de área de trabalho remota. 


