
# ${EUID} identifica o tipo de usuario:
#    se for 0 eh o root, caso contrario, eh um usuario comum
# \[\033[x;xxm]] indica uma cor
# \w eh substituido pelo nome do diretorio atual
# \$ eh substituido por $ caso o usuario seja normal ou por # caso seja root
# \u eh substituido pelo nome do usuario 01 34

if [[ ${EUID} == 0 ]] ; then
    PS1='\[\033[01;34m\]\w \$\[\033[00m\] '
else
    PS1='\[\033[0;31m\]\u\[\033[0;32m\]:\w \$\[\033[0;00m\] '
fi

alias off="xset dpms force off"
alias vtune="amplxe-gui &"
alias popcorn="/opt/popcorntime/Popcorn-Time"
alias g++='g++ -std=c++14 -lm -g -Wall -pedantic -Werror'
alias gcc='gcc -Wall -pedantic -Werror -lm -std=c99 -O0 -g3'
alias gdb='gdb -q '
alias l="ls"
alias ls='ls --color=auto'
alias ll='ls -l'
alias la='ls -A'
alias lh="ls -lh"
alias ltr="ls -ltr"
alias cd..='cd ..'
alias mkdir='mkdir -p'
alias rm='rm -i'
alias mv='mv -i'
alias cp='cp -ai'
alias .='pwd'
alias ..='cd ..'
alias ...='cd ../..'
alias grep='grep --color=auto'
alias df='df -H'
alias du='du -h'
alias jn='jupyter notebook'

# quando usamos "seta para cima" para visualizar o historico de
# comandos, essa especificacao faz com que comandos iguais sejam
# ignorados

HISTCONTROL=ignoreboth
export HISTCONTROL
