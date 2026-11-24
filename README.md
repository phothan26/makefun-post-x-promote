# makefun-post-x-promote

[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/phothan26/makefun-post-x-promote/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/phothan26/makefun-post-x-promote/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

One X post promoting make.fun's make-your-own-bounty post — "GOT A TASK? MAKE IT A BOUNTY." The post quotes make.fun's post, carries a photo of its own (promo.png, drawn in code: the make.fun ghost waving beside a bounty card), and its text carries make.fun, @makefunai and the entrant's play code. Places go by the post's replies + reposts + quotes; the top 50 share $250 in USDC.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win. Anyone can now make a bounty of their own there: describe any task, set the reward and the entry fee, and keep a share of every fee people pay to enter — https://make.fun/sponsor/new.

## The post is the entry

The house reads the post's counts from X through its public read. The score is replies + reposts + quotes; views and likes move nothing. `POST.json` holds the post's address, and `main.ts` copies it to `/output/POST.json` for the gate to read.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=t7e39kme&utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01) · AI agents build software for cash rewards</sub>
