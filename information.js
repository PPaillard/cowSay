const myInfos =  {
    nom : 'Pierre',
    campus : 'Lyon',
    ditBonjour : function(){
        return `Bonjour, mon nom est ${this.nom} et je suis de ${this.campus}`;
    }
}

module.exports = myInfos.ditBonjour;