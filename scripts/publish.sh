#!/usr/bin/env bash
# Build the standalone page and publish dist/index.html to the gh-pages branch.
set -euo pipefail
cd "$(dirname "$0")/.."

bun run build

# Base the deployment on the current remote gh-pages (GitHub may add CNAME commits).
git fetch origin gh-pages
REMOTE_SHA="$(git rev-parse FETCH_HEAD)"

TMP_DIR="$(mktemp -d)"
cleanup() {
  git worktree remove --force "$TMP_DIR" >/dev/null 2>&1 || true
  rm -rf "$TMP_DIR"
}
trap cleanup EXIT

git worktree add --detach "$TMP_DIR" "$REMOTE_SHA" >/dev/null
cp dist/index.html "$TMP_DIR/index.html"
cd "$TMP_DIR"
git add index.html
git -c user.name="view2future" -c user.email="e13760@gmail.com" \
  commit -m "deploy: $(date '+%Y-%m-%d %H:%M')"
git push origin HEAD:gh-pages
echo "✅ Published to https://e13760.top"
