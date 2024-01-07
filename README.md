# Token Investment Strategy

This repository contains a JavaScript script for defining and filtering token investment strategies based on specified criteria. The code includes token objects with details such as name, buy and sell ranges, risk level, potential profit, and investment strategies.

## Token Objects

The script defines several token objects, each representing a different cryptocurrency. Here are a few examples:

### Token 1: BTC
- Narrative: none
- Buy Range: $15,000 - $35,000
- Sell Range: $100,000 - $300,000
- Risk: low
- Potential Profit: x5
- Big Investors: yes
- Strategy 1:
  - Type: lend
  - Platform: Aave
  - Blockchain: Ethereum or L2

### Token 2: ETH
- Narrative: L1
- Buy Range: $800 - $1,800
- Sell Range: $7,000 - $10,000
- Risk: low
- Potential Profit: x5
- Big Investors: yes
- Strategy 1:
  - Type: lend
  - Platform: Aave
  - Blockchain: Ethereum or L2

### Token 3: DOT
- Narrative: interop
- Buy Range: $4 - $12
- Sell Range: $30 - $100
- Risk: low
- Potential Profit: x10
- Big Investors: yes
- Strategy 1:
  - Type: stake
  - Platform: Polkadot staking
  - Blockchain: Polkadot

### Token 4: ADA
- Narrative: L1
- Buy Range: $0.3 - $0.8
- Sell Range: $2 - $5
- Risk: low
- Potential Profit: x10
- Big Investors: yes
- Strategy 1:
  - Type: stake
  - Platform: Cardano staking
  - Blockchain: Cardano

### Token 5: ROSE
- Narrative: privacy
- Buy Range: $0.04 - $0.15
- Sell Range: $0.5 - $3
- Risk: mid
- Potential Profit: x15
- Big Investors: yes
- Strategy 1:
  - Type: stake
  - Platform: Oasis staking
  - Blockchain: Oasis

## Filtering and Investment Strategies

The script includes functions for setting investor types, filtering tokens based on criteria such as risk level and potential profit, and determining investment goals.

### Filtering Strategies

- Conservative (Cons): Filters low-risk tokens.
- Moderate (Mod): Filters mid and low-risk tokens.

### Investment Goals

- Goal multipliers: x5, x10, x15, x25, x50 or more.

### Investor Levels

- New: Beginner level.
- Med: Intermediate level.
- Exp: Expert
