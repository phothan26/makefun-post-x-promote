// post-x-promote-make-your-own-bounty-01 — the post is the entry.
//
// This program does exactly one job: it carries POST.json, the address of
// the X post that promotes make.fun's make-your-own-bounty post, from this
// repository to /output/POST.json, where the house reads it and fetches the
// post's replies, reposts and quotes from X. Nothing this program writes
// about the post is scored — the post itself, and its counts on X, decide
// the places.
//
// The copy is checked, not trusted: after writing, the file is read back
// and compared byte for byte with the source, so a short or mangled write
// fails loudly here instead of handing the gate a broken address.
//
// Outside the grader, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for
// /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { chmodSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = join(botDir, 'POST.json');
const target = join(outDir, 'POST.json');

// The grader provides /output; creating it when it is missing is harmless.
// We never touch its permissions — only the file we write gets one, later.
mkdirSync(outDir, { recursive: true });

const post = readFileSync(source);
writeFileSync(target, post);

// Read the file back and compare byte for byte: the gate reads the output
// file, so the copy — not just the buffer in memory — must be exact.
const written = readFileSync(target);
if (!written.equals(post)) {
  process.stderr.write(
    'post-x-promote: /output/POST.json does not match POST.json\n',
  );
  process.exit(1);
}

process.stderr.write(
  `post-x-promote: wrote ${target} (${written.length} bytes)\n`,
);

// World-readable, like every other output file the grader reads. If the
// filesystem is read-only the copy above is still what the gate reads, so
// a chmod failure must not turn a good entry into a failed run.
try {
  chmodSync(target, 0o644);
} catch {
  // Best effort only.
}
