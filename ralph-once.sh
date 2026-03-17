#!/bin/bash
# Ralph Loop — Human-in-the-loop mode
# Run once, watch, review, run again

claude --permission-mode acceptEdits -p "@PRD.md @progress.txt \
1. Read the PRD and progress file. \
2. Find the next incomplete task (unchecked checkbox) and implement it. \
3. Run any necessary build/lint commands to verify your work. \
4. Commit your changes with a descriptive message. \
5. Update progress.txt with what you did and mark the task as done in PRD.md. \
ONLY DO ONE TASK AT A TIME. \
Write clean, production-ready TypeScript code. \
Use Tailwind CSS for all styling. \
Ensure responsive design (mobile-first)."
