```mermaid
flowchart TD;
00[React.js (Redux)]
00 -->0[Index.js];
A[App] -->B(Browser Router);
B --> D[Header];
B -->E[Side];
B -->F[Profile];
B -->G[Messages];
F -->F1[Info];
F -->F2[Post];
F -->F3[News];
G -->G1[Senders];
G -->G2[Msgs];
G1-->G1_1[Sender];
G2-->G2_2[Msg];
E -->E1[Friends]
```