#!/bin/bash
# Ralph Loop — AFK mode — Portfolio V2 Marker Edition
# Usage: ./afk-ralph.sh <iterations>

set -e

if [ -z "$1" ]; then
    echo "Usage: $0 <iterations>"
    exit 1
fi

echo "🎨 Ralph Loop — Portfolio V2 Marker Edition"
echo "Iterations: $1"
echo "============================================="

for ((i=1; i<=$1; i++)); do
    echo ""
    echo "--- Iteration $i/$1 ---"

    result=$(claude --permission-mode bypassPermissions -p "@PRD.md @progress.txt \
1. Read the PRD and progress file. \
2. Find the next incomplete task (unchecked checkbox) and implement it. \
3. IMPORTANT DESIGN RULES: \
   - Use Space Grotesk for headings, JetBrains Mono for code/labels/stats \
   - Colors: bg #0a0a0a, text #f5f5f0, blue #1A65FF, yellow #FFCD2E, red #FE342C \
   - ZERO emojis anywhere — use marker PNG illustrations from public/images/ \
   - Grain texture overlay on body \
   - Marker-style underlines and circles on key text \
   - Hover effects: translate + box-shadow, not opacity/scale \
   - All client components receive translations as PROPS, never call useTranslations directly \
4. Run build to verify — fix any errors before committing. \
5. Commit with a descriptive message. \
6. Mark the task done in PRD.md and append to progress.txt. \
ONLY WORK ON A SINGLE TASK. \
If all tasks are complete, output <promise>COMPLETE</promise>.")

    echo "$result"

    if [[ "$result" == *"<promise>COMPLETE</promise>"* ]]; then
        echo ""
        echo "============================================="
        echo "✅ All tasks complete after $i iterations!"
        exit 0
    fi
done

echo ""
echo "============================================="
echo "⏱️ Completed $1 iterations. Run again if needed."
