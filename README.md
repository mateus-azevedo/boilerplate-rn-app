# Estrutura de Pastas do Projeto React Native (Arquitetura Modular)

# 🎯 Objetivo da Arquitetura

✔ Modular\
✔ Escalável\
✔ Testável\
✔ Fácil manutenção\
✔ Separação clara de responsabilidades

------------------------------------------------------------------------

## Estrutura Base Atual
```bash
app/
src/
 ├── core/
 ├── modules/
 ├── services/
 ├── shared/
 ├── store/
e2e/
```
Agora vamos entender o papel estratégico de cada uma 👇

------------------------------------------------------------------------

## 📁 app/

👉 Camada principal da aplicação (Entry Point). Responsável somente por rotas (Expo Router).

#### O que vai aqui?
- _layout.tsx
- index.tsx
- planner/index.tsx
- chat/index.tsx

#### O que NÃO vai aqui?

❌ Lógica pesada
❌ Chamadas de API
❌ Estado complexo

📌 Regra:
> app/ é a camada de navegação e composição.

------------------------------------------------------------------------

## 📁 src/

👉 Onde mora a arquitetura real.


### 📁 src/core/

👉 Núcleo da aplicação (infraestrutura base).

Contém:
```bash
core/
 ├── config/
 ├── constants/
 └── errors/
```
Significado:

- **config/** → configs globais (env, tema base, flags)
- **constants/** → strings fixas, enums, rotas
- **errors/** → classes de erro customizadas

📌 Mentalidade:
> core é independente dos módulos.

------------------------------------------------------------------------

### 📁 src/modules/

Contém os módulos de domínio da aplicação (Feature-based architecture).

Cada pasta é uma feature isolada.

Exemplo:
```bash
modules/
 ├── planner/
 ├── chat/
 ├── finance/
```

Cada módulo é independente e possui:

#### Exemplo: modules/planner/

-   **components/** → Componentes visuais específicos do módulo\
-   **services/** → Chamadas de API do módulo\
-   **hooks/** → Hooks específicos do módulo\
-   **store/** → Estado local do módulo (Redux/Zustand/etc.)\
-   **types/** → Tipagens TypeScript do módulo\
-   **tests/** → Testes unitários do módulo

Objetivo: Isolamento, escalabilidade e manutenção facilitada.

📌 Mentalidade:
> Um módulo não deve depender diretamente de outro módulo.

------------------------------------------------------------------------

### 📁 src/services/

Serviços globais da aplicação. Infraestrutura de comunicação externa.

Contém:

```bash
services/
 ├── __tests__/
 └── api.ts
```
- **tests/** → testes da camada HTTP
- **api.ts** → instância Axios central

Exemplo: - api.ts → Cliente HTTP centralizado (Axios/fetch) -
interceptors - configuração de baseURL

Responsável por: - Comunicação com backend - Tratamento global de
erros - Configuração de headers

📌 Regra:

> Nenhum módulo usa axios direto.
Todos usam api.ts.

------------------------------------------------------------------------

### 📁 src/shared/

Código reutilizável entre módulos e toda aplicação.

Contém: 
```bash
shared/
 ├── __tests__/
 ├── components/
 ├── hooks/
 ├── theme/
 └── utils/
```
- **tests/** → testes de utilitários e componentes globais
- **components/** → Componentes globais (Button, Input, etc.) 
- **hooks/** → Hooks genéricos (useDebounce, useToggle) 
- **theme/** → cores, tipografia
- **utils/** → Funções utilitárias (formatDate, validateEmail)

------------------------------------------------------------------------

### 📁 src/store/

👉 Estado global da aplicação.

Use para:
- Auth global
- Theme global
- Dados compartilhados entre módulos

📌 Regra:

> Se é específico de um módulo → vai dentro do módulo.
Se é global → vai aqui.

------------------------------------------------------------------------

## 📁 e2e/

👉 Testes End-to-End.

Usada para armazenar testes que simulam o comportamento real do usuário, validando o aplicativo completo funcionando — da interface até a comunicação com backend (ou mocks)

Usado com:
- Detox

Testa:
- Fluxo completo do usuário
- Navegação
- Integração real

#### 🎯 Objetivo

Garantir que os fluxos principais do app funcionem de verdade, como:
- Login
- Cadastro
- Criar tarefa
- Editar perfil
- Logout
- Navegação entre telas

------------------------------------------------------------------------