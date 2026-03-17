#!/bin/bash
# Ralph Loop — AFK mode
# Run N iterations autonomously, go make coffee
# Usage: ./afk-ralph.sh <iterations>

set -e

if [ -z "$1" ]; then
    echo "Usage: $0 <iterations>"
    echo "Example: $0 20"
    exit 1
fi

echo "🚀 Starting Ralph Loop — $1 iterations"
echo "Project: Matthieu Portfolio Site"
echo "==========================================="

for ((i=1; i<=$1; i++)); do
    echo ""
    echo "--- Iteration $i/$1 ---"
    echo ""

    result=$(claude --permission-mode acceptEdits -p "@PRD.md @progress.txt \
1. Read the PRD and progress file. \
2. Find the next incomplete task (unchecked checkbox) and implement it. \
3. Run build and lint checks to verify your work compiles. \
4. Commit your changes with a descriptive message. \
5. Mark the completed task as [x] in PRD.md. \
6. Append a summary line to progress.txt. \
ONLY WORK ON A SINGLE TASK. \
Write clean, production-ready TypeScript code. \
Use Tailwind CSS for all styling. \
Ensure responsive design (mobile-first). \
If all tasks in the PRD are complete, output <promise>COMPLETE</promise>.")

    echo "$result"

    if [[ "$result" == *"<promise>COMPLETE</promise>"* ]]; then
        echo ""
        echo "==========================================="
        echo "✅ PRD complete after $i iterations!"
        echo "Run 'npm run dev' to preview your site."
        exit 0
    fi
done

echo ""
echo "==========================================="
echo "⏱️ Completed $1 iterations. Check progress.txt for status."
echo "Run './afk-ralph.sh 10' for more iterations if needed."
