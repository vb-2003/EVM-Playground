# EVM Playground (Fork + Step Debugger)

A minimal, local playground for stepping through EVM bytecode with stack/memory state, plus optional Anvil fork support to run against real deployed contracts. Based on evm.codes playground by Dune (https://www.evm.codes/playground).

<img width="2216" height="1576" alt="image" src="https://github.com/user-attachments/assets/0c1d1011-801c-4c0f-ae61-1851974f8ca6" />

## Requirements

- Node.js 20+ (https://nodejs.org/en/download)
- pnpm 9+ (https://pnpm.io/installation)
- Anvil (from Foundry): https://book.getfoundry.sh/getting-started/installation

## Install

```bash
pnpm install
```

## Run (Local)

```bash
pnpm dev
```

Then open: http://localhost:3000

## Optional: Start Anvil Fork

```bash
anvil --fork-url https://mainnet.infura.io/v3/YOUR_KEY
```

Or pin to a block:

```bash
anvil --fork-url https://mainnet.infura.io/v3/YOUR_KEY --fork-block-number 19000000
```

Default Anvil RPC: http://127.0.0.1:8545

## Using the Playground

- Pick a code type (Yul, Solidity, Bytecode, Mnemonic).
- Click Run to compile/execute and load instructions.
- Use Step / Continue to walk the execution.
- Stack, Memory, Storage, and Return Value update per instruction.

## Using Forked Contracts

1. Toggle "Fork with Anvil" on.
2. Set Anvil RPC URL (usually http://127.0.0.1:8545).
3. (Optional) Set a block number.
4. Enter the deployed contract address.
5. (Optional) Enter Prefetch slots (number of storage slots to read from 0..N-1).
6. Click "Load forked contract".

Notes:
- Prefetch runs only if you provide a slot count.
- You can always fetch a specific storage slot using the "Fetch slot" input.
- Slot input accepts decimal (e.g., 5) or hex (e.g., 0x5).

## Troubleshooting

- If you see "No bytecode found", verify the contract address and fork RPC.
- If storage looks empty, increase Prefetch slots or fetch individual slots.
- If the page is blank after edits, restart `pnpm dev`.
