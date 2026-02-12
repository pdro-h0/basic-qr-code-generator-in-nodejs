# Gerador de QR Code, Senhas e Criptografia com TypeScript | DIO

Neste projeto, foi desenvolvido um utilitário de linha de comando (CLI) para gerar QR Codes, criar senhas seguras e hash de texto. O desenvolvimento foi realizado utilizando TypeScript com Node.js.

<table>
    <tr>
        <td>
            <b>Objetivo:</b>
            <p>Criar uma ferramenta CLI interativa e multifuncional que oferece funcionalidades de segurança e utilidade, como a geração de QR Codes para URLs ou textos, criação de senhas robustas e criptografia de mensagens para armazenamento ou compartilhamento seguro.</p>
        </td>
    </tr>
</table>

---

## 🚀 Funcionalidades Principais

O utilitário oferece as seguintes operações:

<table style="border-collapse: collapse; width: 100%; max-width: 900px;">
    <tr >
        <td style="border: 1px solid #ccc; padding: 15px; text-align: center; font-weight: bold;">
            🖼️ Gerar QR Code
        </td>
        <td style="border: 1px solid #ccc; padding: 15px;">
            Cria um QR Code a partir de um link ou texto fornecido pelo usuário e o exibe diretamente no terminal.
        </td>
    </tr>
    <tr >
        <td style="border: 1px solid #ccc; padding: 15px; text-align: center; font-weight: bold;">
            🔑 Gerar Senha
        </td>
        <td style="border: 1px solid #ccc; padding: 15px;">
            Gera uma senha segura com base no comprimento e nos caracteres permitidos definidos pelo usuário.
        </td>
    </tr>
    <tr >
        <td style="border: 1px solid #ccc; padding: 15px; text-align: center; font-weight: bold;">
            🔒 Hash de Mensagem
        </td>
        <td style="border: 1px solid #ccc; padding: 15px;">
            Criptografa uma mensagem usando uma senha e gera um hash seguro para a mensagem.
        </td>
    </tr>
</table>

---

## ⚙️ Operações Disponíveis

O menu principal permite escolher uma das três funcionalidades.

### 1. Gerar QR Code
- **Input:** O usuário fornece um link ou texto.
- **Output:** Um QR Code é impresso no terminal.

### 2. Gerar Senha
- **Input:** O usuário define o comprimento da senha.
- **Output:** Uma senha aleatória e segura é gerada e exibida.

### 3. Criptografar Mensagem
- **Input:** O usuário insere o texto a ser criptografado e uma senha.
- **Output:** O hash criptografado da mensagem é exibido.

---

## 📦 Estrutura do Projeto

```
qr-code/
├── src/
│   ├── index.ts              # Ponto de entrada da aplicação
│   ├── prompts-schema/       # Esquemas para os prompts do usuário
│   │   ├── prompt-crypto.ts
│   │   ├── prompt-main.ts
│   │   └── prompt-qrcode.ts
│   └── services/
│       ├── crypt/            # Lógica de criptografia
│       │   ├── create.ts
│       │   └── handle.ts
│       ├── password/         # Lógica de geração de senha
│       │   ├── create.ts
│       │   ├── handle.ts
│       │   └── utils/
│       └── qrcode/           # Lógica de geração de QR Code
│           ├── create.ts
│           └── handle.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🛠️ Tecnologias Utilizadas

- **TypeScript** - Tipagem estática para JavaScript
- **Node.js** - Runtime JavaScript
- **tsx** - Executor TypeScript para desenvolvimento
- **prompt** - Biblioteca para criar prompts interativos de linha de comando
- **qrcode-terminal** - Para exibir QR Codes no terminal
- **bcryptjs** - Para hashing e criptografia de senhas/mensagens
- **chalk** - Para estilizar a saída do terminal com cores

---

## 📋 Como Executar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/pdro-h0 basic-qr-code-generator-in-nodejs
```

### 2. Navegue até o diretório do projeto

```bash
cd qr-code
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute em modo desenvolvimento

```bash
npm run dev
```

Após executar o comando, um menu interativo aparecerá no seu terminal, permitindo que você escolha a funcionalidade desejada.

---

## ✨ Recursos Especiais

- ✅ Interface de linha de comando (CLI) interativa e amigável.
- ✅ Geração de QR Code instantânea no terminal.
- ✅ Criação de senhas personalizáveis e seguras.
- ✅ Criptografia de mensagens com Bcrypt para maior segurança.
- ✅ Código modular e bem estruturado, separando responsabilidades.

---

Desenvolvido como desafio educacional da **DIO** - Digital Innovation One
