---
id: vserver-linux-troubleshooting-restore-access
title: "VPS: Restaurar acesso"
description: "Descubra como recuperar o acesso ao seu VPS Linux após um bloqueio de senha e minimizar o tempo de inatividade → Saiba mais agora"
sidebar_label: Restaurar acesso
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Pode acontecer rápido. Você tenta fazer login no seu servidor Linux, mas a senha não é mais aceita ou foi esquecida. Como resultado, o acesso ao sistema e a dados ou serviços críticos não é mais possível. Essa situação pode ser frustrante, especialmente quando o servidor é necessário para operações em andamento. Na maioria das distribuições Linux, o acesso pode ser restaurado usando o modo de recuperação sem precisar reinstalar o sistema operacional. Seguindo os passos abaixo, você pode recuperar o acesso ao seu servidor e continuar trabalhando com o mínimo de interrupção.



## Restaurar acesso

Para redefinir a senha usando o modo de recuperação, o sistema deve ser iniciado com acesso ao menu de boot GRUB. Durante a inicialização do sistema, abra o menu GRUB e selecione **Opções avançadas para Ubuntu**.

![img](https://screensaver01.zap-hosting.com/index.php/s/j6DKWdM95fFWWZi/preview)

Na próxima tela, escolha a entrada que inicia o sistema em **modo de recuperação**. Isso carregará o ambiente de recuperação em vez do sistema operacional normal.

Quando o menu de recuperação aparecer, selecione **root – Acessar o prompt do shell root** e confirme a seleção. Pressione Enter novamente para acessar o shell root.

![img](https://screensaver01.zap-hosting.com/index.php/s/WFjTj3FxKQwHemD/preview)

No modo de recuperação, o sistema de arquivos root é montado como somente leitura por padrão. Para permitir a alteração da senha, ele deve ser remontado com permissões de escrita. Execute o seguinte comando:

```bash
mount -o remount,rw /
```

Se o nome do usuário for desconhecido, todas as contas disponíveis podem ser listadas verificando os diretórios home:

```
ls /home
```

Para redefinir a senha, use o comando `passwd` seguido do nome do usuário:

```
passwd username
```

Substitua `username` pelo nome real da conta. Digite a nova senha e confirme quando solicitado. A senha não será exibida na tela enquanto você digita. Depois que a senha for atualizada com sucesso, reinicie o sistema usando o comando `reboot`.



## Conclusão

Depois de completar o processo, você terá definido com sucesso uma nova senha para o usuário desejado. Agora você pode usar essa senha para fazer login novamente via conexão remota. Para dúvidas ou ajuda, não hesite em contatar nossa equipe de suporte, que está disponível diariamente para te ajudar! 🙂