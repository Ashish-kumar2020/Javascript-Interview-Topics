**Compiler Theory**

In Compiled language a chunk of source code will undergo three steps before it is executed:

- [ ] Tokenizing/Lexing
- [ ] Parsing Phase
- [ ] Code-Generation Phase

**Tokenising**

Breaking up of string and characters into meaningful chunks called tokens.

For instance, lets consider this program:

```js
let sum = 5 + 5;
```

it will create following tokens => 'let', 'sum', '=', '5', '+', '5' and ';'

**Parsing**

It takes the chunks or tokens in a stream of arrays and turning it into a tree of nested elements which represents in a Tree Structure called AST -> Abstract Syntax Tree

```
+---------------------------------------------+
|          VariableDeclaration                |
|               (kind: let)                   |
+----------------------+----------------------+
                       |
              [ declarations ]
                       |
     +-----------------+-----------------+
     |        VariableDeclarator         |
     +-----------------+-----------------+
                      / \
                     /   \
              [ id ]/     \[ init ]
                   /       \
    +-------------+         +-----------------------------+
    | Identifier  |         |      BinaryExpression       |
    | (name: sum) |         |       (operator: +)         |
    +-------------+         +--------------+--------------+
                                          / \
                                         /   \
                                  [ left ]   [ right ]
                                       /       \
                        +-------------+         +-------------+
                        |   Literal   |         |   Literal   |
                        | (value: 5)  |         | (value: 5)  |
                        +-------------+         +-------------+
```

**Code Generation Phase**

It is the process of taking AST and turning it into executable code

```
"let sum = 5 + 5;"
       │
       ▼
 [ 1. LEXER ] ──► Breaks code into pieces (Tokens)
       │
       ├─► [ Keyword: "let" ]
       ├─► [ Identifier: "sum" ]
       ├─► [ Operator: "=" ]
       └─► [ Expression: "5 + 5" ]
       │
       ▼
 [ 2. PARSER ] ──► Builds the structural hierarchy
       │
       ▼
    [ VariableDeclaration ]  (let)
               │
       [ VariableDeclarator ]
         /           \
   (id) /             \ (init)
       ▼               ▼
  [Identifier]  [BinaryExpression] (+)
     (sum)          /         \
                   ▼           ▼
               [Literal]   [Literal]
                  (5)         (5)
```