source ~/.bash/git-prompt.sh # Show git branch name at command prompt
export GIT_PS1_SHOWCOLORHINTS=true # Option for git-prompt.sh to show branch name in color

# Terminal Prompt:
# Include git branch, use PROMPT_COMMAND (not PS1) to get color output (see git-prompt.sh for more)
export PROMPT_COMMAND='__git_ps1 "\w" "\n\\\$ "' # Git branch (relies on git-prompt.sh)

bash_prompt () {

if git branch > /dev/null 2>&1;
then
    if git status | grep "nothing to commit" > /dev/null 2>&1;
    then
        # If there are no uncommitted files, then set the color of the git branch name to green
        git_prompt='\[\033[0;32m\]$(__git_ps1)'
    else
        # If there are uncommitted files, set it to red.
        git_prompt='\[\033[0;31m\]$(__git_ps1)'
    fi
else
    # If we're not in a git repo, then display nothing
    git_prompt=""
fi

# This is what actually sets our PS1. The ${git prompt} is what will display our git status.
PS1="\[\033[0;31m\]\u\[\033[0;32m\]:\w${git_prompt}\$(if [[ \$? == 0 ]]; then echo \"\[\033[0;32m\] $\"; else echo \"\[\033[0;31m\] "'\$'"\"; fi)\[\033[00m\] "
}

# PROMPT_COMMAND is run just before the PS1 is printed. We've set it to run our bash_prompt function.
PROMPT_COMMAND=bash_prompt

alias ls='ls --color=auto'

# quando usamos "seta para cima" para visualizar o historico de
# comandos, essa especificacao faz com que comandos iguais sejam
# ignorados

HISTCONTROL=ignoreboth
export HISTCONTROL